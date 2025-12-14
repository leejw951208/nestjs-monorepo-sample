import commonEnvConfig from '@libs/common/config/env/common-env.config'
import { BaseException } from '@libs/common/exception/base.exception'
import { AUTH_ERROR } from '@libs/common/exception/error.code'
import { type ExtendedPrismaClient, PRISMA_CLIENT } from '@libs/prisma/prisma.factory'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Inject, Injectable } from '@nestjs/common'
import { type ConfigType } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { Owner, TokenType } from '@prisma/client'
import { type Cache } from 'cache-manager'

export type JwtPayload = {
    id: number // pk
    type: 'ac' | 're' // 토큰 타입
    aud: 'admin' | 'user' // 토큰 수신자
    jti: string // 토큰 고유 값
    issuer: string // 토큰 발급자
}

@Injectable()
export class TokenService {
    constructor(
        private readonly jwtService: JwtService,
        @Inject(commonEnvConfig.KEY) private readonly config: ConfigType<typeof commonEnvConfig>,
        @Inject(PRISMA_CLIENT) private readonly prisma: ExtendedPrismaClient,
        @Inject(CACHE_MANAGER) private readonly cacheManager: Cache
    ) {}

    async createAccessToken(ownerId: number, owner: Owner, jti: string): Promise<string> {
        const payload = this.createTokenPayload(ownerId, owner, 'ac', jti)
        return await this.signToken(payload, this.config.jwtAccessTokenTtl / 1000)
    }

    async createRefreshToken(ownerId: number, owner: Owner, jti: string): Promise<string> {
        const payload = this.createTokenPayload(ownerId, owner, 're', jti)
        return await this.signToken(payload, this.config.jwtRefreshTokenTtl / 1000)
    }

    createTokenPayload(ownerId: number, owner: Owner, type: 'ac' | 're', jti: string): JwtPayload {
        return {
            id: ownerId,
            type,
            aud: owner === Owner.USER ? 'user' : 'admin',
            jti,
            issuer: 'monorepo'
        } as JwtPayload
    }

    async signToken(payload: JwtPayload, expiresIn: number): Promise<string> {
        return await this.jwtService.signAsync(payload, { secret: this.config.jwtSecretKey, expiresIn })
    }

    async verify(token: string, type: 'ac' | 're'): Promise<JwtPayload> {
        const payload = await this.jwtService.verifyAsync<JwtPayload>(token, {
            secret: this.config.jwtSecretKey
        })

        if (payload.type !== type || payload.issuer !== 'monorepo') {
            throw new BaseException(AUTH_ERROR.INVALID_REFRESH_TOKEN, this.constructor.name)
        }

        return payload
    }

    // ================= Token Storage Methods =================

    async saveRefreshToken(ownerId: number, owner: Owner, jti: string, tokenHash: string, ttl: number): Promise<void> {
        await this.createRefreshTokenInDB(ownerId, owner, jti, tokenHash)

        const redisKey = `rt:${owner}:${ownerId}:${jti}`
        await Promise.all([this.cacheManager.set(redisKey, tokenHash, ttl), this.addUserTokenToRedisList(ownerId, owner, jti)])
    }

    async getRefreshToken(ownerId: number, owner: Owner, jti: string): Promise<string | undefined> {
        const redisKey = `rt:${owner}:${ownerId}:${jti}`
        const cached = await this.cacheManager.get<string>(redisKey)
        if (cached) return cached

        return undefined
    }

    async deleteRefreshToken(ownerId: number, owner: Owner, jti: string): Promise<void> {
        const redisKey = `rt:${owner}:${ownerId}:${jti}`

        await Promise.allSettled([
            this.cacheManager.del(redisKey),
            this.removeUserTokenFromRedisList(ownerId, owner, jti),
            this.deleteRefreshTokenInDB(ownerId, owner, jti)
        ])
    }

    async deleteAllRefreshTokens(ownerId: number, owner: Owner): Promise<void> {
        const tokensKey = `${owner}:${ownerId}:tokens`
        const jtis = await this.cacheManager.get<string[]>(tokensKey)

        const tasks: Promise<any>[] = [this.deleteAllRefreshTokensInDB(ownerId, owner), this.cacheManager.del(tokensKey)]

        if (jtis && jtis.length > 0) {
            const deleteKeys = jtis.map((jti) => this.cacheManager.del(`rt:${owner}:${ownerId}:${jti}`))
            tasks.push(...deleteKeys)
        }

        await Promise.allSettled(tasks)
    }

    // ================= Private Methods (DB) =================

    private async createRefreshTokenInDB(ownerId: number, owner: Owner, jti: string, tokenHash: string): Promise<void> {
        await this.prisma.$transaction(async (tx) => {
            const token = await tx.token.create({
                data: {
                    tokenHash,
                    tokenType: TokenType.JWT,
                    owner,
                    ownerId
                }
            })
            await tx.tokenJwt.create({
                data: { tokenId: token.id, jti }
            })
        })
    }

    private async deleteRefreshTokenInDB(ownerId: number, owner: Owner, jti: string): Promise<void> {
        await this.prisma.$transaction(async (tx) => {
            const target = await tx.tokenJwt.findFirst({
                where: { jti, token: { ownerId, owner } },
                select: { tokenId: true }
            })

            if (target) {
                await tx.token.delete({ where: { id: target.tokenId } })
            }
        })
    }

    private async deleteAllRefreshTokensInDB(ownerId: number, owner: Owner): Promise<void> {
        await this.prisma.token.deleteMany({
            where: {
                ownerId,
                owner,
                tokenType: TokenType.JWT
            }
        })
    }

    // ================= Private Methods (Redis) =================

    private async addUserTokenToRedisList(ownerId: number, owner: Owner, jti: string): Promise<void> {
        const tokensKey = `${owner}:${ownerId}:tokens`
        const jtis = (await this.cacheManager.get<string[]>(tokensKey)) || []
        if (!jtis.includes(jti)) {
            jtis.push(jti)
            await this.cacheManager.set(tokensKey, jtis, this.config.jwtRefreshTokenTtl)
        }
    }

    private async removeUserTokenFromRedisList(ownerId: number, owner: Owner, jti: string): Promise<void> {
        const tokensKey = `${owner}:${ownerId}:tokens`
        const jtis = await this.cacheManager.get<string[]>(tokensKey)

        if (!jtis) return

        const updatedJtis = jtis.filter((item) => item !== jti)
        if (updatedJtis.length > 0) {
            await this.cacheManager.set(tokensKey, updatedJtis, this.config.jwtRefreshTokenTtl)
        } else {
            await this.cacheManager.del(tokensKey)
        }
    }
}
