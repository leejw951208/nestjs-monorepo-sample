import { PRISMA_CLIENT, type ExtendedPrismaClient } from '@libs/prisma/prisma.factory'
import { Inject, Injectable } from '@nestjs/common'
import { Owner, Prisma, Token, TokenJwt, TokenType } from '@prisma/client'

@Injectable()
export class TokenRepository {
    constructor(@Inject(PRISMA_CLIENT) private readonly prisma: ExtendedPrismaClient) {}

    /**
     * JWT refresh token 생성 (Token + TokenJwt)
     *
     * @description
     * Transaction을 사용하여 Token과 TokenJwt를 함께 생성합니다.
     *
     * @param userId - 사용자 ID
     * @param jti - JWT ID
     * @param tokenHash - 해시된 토큰 값
     * @returns Promise<TokenJwt> - 생성된 TokenJwt
     */
    async createRefreshToken(userId: number, jti: string, tokenHash: string): Promise<TokenJwt> {
        return await this.prisma.$transaction(async (tx) => {
            // Token 생성
            const token = await tx.token.create({
                data: {
                    tokenHash,
                    tokenType: TokenType.JWT,
                    owner: Owner.USER,
                    ownerId: userId,
                    createdBy: userId,
                    isDeleted: false
                }
            })

            // TokenJwt 생성
            const tokenJwt = await tx.tokenJwt.create({
                data: {
                    tokenId: token.id,
                    jti,
                    createdBy: userId,
                    isDeleted: false
                }
            })

            return tokenJwt
        })
    }

    /**
     * JTI로 TokenJwt 조회
     *
     * @param jti - JWT ID
     * @returns Promise<TokenJwt | null>
     */
    async findTokenJwtByJti(jti: string): Promise<TokenJwt | null> {
        return await this.prisma.tokenJwt.findFirst({
            where: { jti, isDeleted: false }
        })
    }

    /**
     * 사용자 ID로 모든 TokenJwt 조회
     *
     * @param userId - 사용자 ID
     * @returns Promise<TokenJwt[]>
     */
    async findTokenJwtsByUserId(userId: number): Promise<TokenJwt[]> {
        return await this.prisma.tokenJwt.findMany({
            where: {
                token: {
                    ownerId: userId,
                    owner: Owner.USER,
                    tokenType: TokenType.JWT,
                    isDeleted: false
                },
                isDeleted: false
            },
            include: {
                token: true
            }
        })
    }

    /**
     * JTI로 refresh token 삭제 (soft delete)
     *
     * @param jti - JWT ID
     * @param deletedBy - 삭제자 ID
     * @returns Promise<void>
     */
    async deleteRefreshTokenByJti(jti: string, deletedBy: number): Promise<void> {
        await this.prisma.$transaction(async (tx) => {
            // TokenJwt 조회
            const tokenJwt = await tx.tokenJwt.findFirst({
                where: { jti, isDeleted: false }
            })

            if (!tokenJwt) return

            // TokenJwt soft delete
            await tx.tokenJwt.update({
                where: { id: tokenJwt.id },
                data: {
                    isDeleted: true,
                    deletedAt: new Date(),
                    deletedBy
                }
            })

            // Token soft delete
            await tx.token.update({
                where: { id: tokenJwt.tokenId },
                data: {
                    isDeleted: true,
                    deletedAt: new Date(),
                    deletedBy
                }
            })
        })
    }

    /**
     * 사용자의 모든 refresh token 삭제 (soft delete)
     *
     * @param userId - 사용자 ID
     * @param deletedBy - 삭제자 ID
     * @returns Promise<void>
     */
    async deleteAllRefreshTokensByUserId(userId: number, deletedBy: number): Promise<void> {
        await this.prisma.$transaction(async (tx) => {
            // 사용자의 모든 TokenJwt 조회
            const tokenJwts = await tx.tokenJwt.findMany({
                where: {
                    token: {
                        ownerId: userId,
                        owner: Owner.USER,
                        tokenType: TokenType.JWT,
                        isDeleted: false
                    },
                    isDeleted: false
                }
            })

            if (tokenJwts.length === 0) return

            const tokenJwtIds = tokenJwts.map((tj) => tj.id)
            const tokenIds = tokenJwts.map((tj) => tj.tokenId)

            // 모든 TokenJwt soft delete
            await tx.tokenJwt.updateMany({
                where: { id: { in: tokenJwtIds } },
                data: {
                    isDeleted: true,
                    deletedAt: new Date(),
                    deletedBy
                }
            })

            // 모든 Token soft delete
            await tx.token.updateMany({
                where: { id: { in: tokenIds } },
                data: {
                    isDeleted: true,
                    deletedAt: new Date(),
                    deletedBy
                }
            })
        })
    }
}
