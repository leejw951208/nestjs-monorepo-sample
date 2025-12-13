import { AUTH_CONSTANTS } from '@libs/common/constant/auth.constant'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Inject, Injectable } from '@nestjs/common'
import { type Cache } from 'cache-manager'
import { TokenRepository } from './token.repository'

@Injectable()
export class TokenService {
    constructor(
        @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
        private readonly repository: TokenRepository
    ) {}

    /**
     * Refresh Token 저장 (Redis + DB)
     *
     * @description
     * Redis와 DB에 동시에 refresh token을 저장합니다.
     * - Redis: 빠른 조회를 위한 캐싱 (rt:{userId}:{jti})
     * - DB: 영구 저장 및 감사 로그
     *
     * @param userId - 사용자 ID
     * @param jti - JWT ID
     * @param tokenHash - 해시된 토큰 값
     * @param ttl - TTL (밀리초)
     * @returns Promise<void>
     */
    async saveRefreshToken(userId: number, jti: string, tokenHash: string, ttl: number): Promise<void> {
        const redisKey = `rt:${userId}:${jti}`

        await Promise.all([
            this.cacheManager.set(redisKey, tokenHash, ttl),
            this.addUserToken(userId, jti),
            this.repository.createRefreshToken(userId, jti, tokenHash)
        ])
    }

    /**
     * Refresh Token 조회 (Redis)
     *
     * @param userId - 사용자 ID
     * @param jti - JWT ID
     * @returns Promise<string | undefined> - 해시된 토큰 값
     */
    async getRefreshToken(userId: number, jti: string): Promise<string | undefined> {
        const redisKey = `rt:${userId}:${jti}`
        return await this.cacheManager.get<string>(redisKey)
    }

    /**
     * Refresh Token 삭제 (Redis + DB)
     *
     * @description
     * Redis와 DB에서 동시에 refresh token을 삭제합니다.
     *
     * @param userId - 사용자 ID
     * @param jti - JWT ID
     * @returns Promise<void>
     */
    async deleteRefreshToken(userId: number, jti: string): Promise<void> {
        const redisKey = `rt:${userId}:${jti}`

        await Promise.all([
            this.cacheManager.del(redisKey),
            this.removeUserToken(userId, jti),
            this.repository.deleteRefreshTokenByJti(jti, userId)
        ])
    }

    /**
     * 사용자의 모든 Refresh Token 삭제
     *
     * @description
     * 비밀번호 변경 시 보안을 위해 사용자의 모든 활성 세션을 종료합니다.
     * Redis와 DB에서 모든 리프레시 토큰을 삭제하여 재로그인을 강제합니다.
     *
     * @param userId - 사용자 ID
     *
     * @note
     * 개별 작업이 실패하더라도 전체 세션 종료 프로세스를 중단하지 않습니다.
     * Promise.allSettled를 사용하여 가능한 한 많은 토큰을 삭제합니다.
     */
    async deleteAllRefreshTokens(userId: number): Promise<void> {
        // 사용자의 활성 토큰 목록 조회 (Redis)
        const userTokensKey = `user:${userId}:tokens`
        const jtis = await this.cacheManager.get<string[]>(userTokensKey)

        if (!jtis || jtis.length === 0) {
            return
        }

        // Redis와 DB에서 모든 리프레시 토큰 삭제
        const redisDeletePromises = jtis.map((jti) => this.cacheManager.del(`rt:${userId}:${jti}`))
        redisDeletePromises.push(this.cacheManager.del(userTokensKey))

        // Promise.allSettled를 사용하여 개별 실패를 허용
        const results = await Promise.allSettled([...redisDeletePromises, this.repository.deleteAllRefreshTokensByUserId(userId, userId)])

        // 실패한 작업 확인 (선택적 로깅)
        const failedCount = results.filter((r) => r.status === 'rejected').length
        if (failedCount > 0) {
            // 일부 작업이 실패했지만 계속 진행
            // 프로덕션 환경에서는 적절한 로거로 기록
        }
    }

    /**
     * 사용자 토큰 목록에 JTI 추가
     *
     * @description
     * 새로운 리프레시 토큰 생성 시 사용자의 활성 토큰 목록에 JTI를 추가합니다.
     * 이를 통해 사용자의 모든 활성 세션을 추적할 수 있습니다.
     *
     * @param userId - 사용자 ID
     * @param jti - 토큰 고유 ID
     */
    private async addUserToken(userId: number, jti: string): Promise<void> {
        const userTokensKey = `user:${userId}:tokens`
        const jtis = (await this.cacheManager.get<string[]>(userTokensKey)) || []
        jtis.push(jti)
        // 토큰 목록은 7일간 유지 (refresh token TTL과 동일)
        await this.cacheManager.set(userTokensKey, jtis, AUTH_CONSTANTS.JWT.REFRESH_TOKEN_EXPIRES_IN)
    }

    /**
     * 사용자 토큰 목록에서 JTI 제거
     *
     * @description
     * 리프레시 토큰 삭제 시 사용자의 활성 토큰 목록에서 JTI를 제거합니다.
     *
     * @param userId - 사용자 ID
     * @param jti - 토큰 고유 ID
     */
    private async removeUserToken(userId: number, jti: string): Promise<void> {
        const userTokensKey = `user:${userId}:tokens`
        const jtis = (await this.cacheManager.get<string[]>(userTokensKey)) || []
        const updatedJtis = jtis.filter((item) => item !== jti)

        if (updatedJtis.length > 0) {
            await this.cacheManager.set(userTokensKey, updatedJtis, AUTH_CONSTANTS.JWT.REFRESH_TOKEN_EXPIRES_IN)
        } else {
            // 목록이 비어있으면 키 삭제
            await this.cacheManager.del(userTokensKey)
        }
    }
}
