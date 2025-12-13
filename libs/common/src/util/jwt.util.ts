import { BaseException } from '@libs/common/exception/base.exception'
import { AUTH_ERROR } from '@libs/common/exception/error.code'
import { Inject, Injectable } from '@nestjs/common'
import { type ConfigType } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { Admin, User } from '@prisma/client'
import commonEnvConfig from '../config/env/common-env.config'
import { Aud, JwtPayload } from '../type/jwt-payload.type'

// Export JwtPayload for external use
export type { JwtPayload } from '../type/jwt-payload.type'

@Injectable()
export class JwtUtil {
    private readonly accessTokenExpiresIn: string
    private readonly refreshTokenExpiresIn: string
    private readonly jwtSecretKey: string

    constructor(
        private readonly jwtService: JwtService,
        @Inject(commonEnvConfig.KEY) private readonly commonEnv: ConfigType<typeof commonEnvConfig>
    ) {
        this.accessTokenExpiresIn = this.commonEnv.jwtAccessExpiresIn
        this.refreshTokenExpiresIn = this.commonEnv.jwtRefreshExpiresIn
        this.jwtSecretKey = this.commonEnv.jwtSecretKey
    }

    async createAccessToken(model: User | Admin, aud: Aud, jti: string): Promise<string> {
        const payload = this.createTokenPayload(model, aud, 'ac', jti)
        return await this.signToken(payload, this.accessTokenExpiresIn)
    }

    async createRefreshToken(model: User | Admin, aud: Aud, jti: string): Promise<string> {
        const payload = this.createTokenPayload(model, aud, 're', jti)
        return await this.signToken(payload, this.refreshTokenExpiresIn)
    }

    createTokenPayload(model: User | Admin, aud: Aud, type: 'ac' | 're', jti: string): JwtPayload {
        return {
            id: model.id,
            type,
            aud,
            jti,
            issuer: 'monorepo'
        } as JwtPayload
    }

    async signToken(payload: JwtPayload, expiresIn: string): Promise<string> {
        return await this.jwtService.signAsync(payload, {
            secret: this.jwtSecretKey,
            expiresIn
        })
    }

    async verify(token: string, type: 'ac' | 're'): Promise<JwtPayload> {
        const payload = await this.jwtService.verifyAsync<JwtPayload>(token, {
            secret: this.jwtSecretKey
        })

        if (payload.type !== type || payload.issuer !== 'monorepo') {
            throw new BaseException(AUTH_ERROR.INVALID_REFRESH_TOKEN, this.constructor.name)
        }

        return payload
    }
}
