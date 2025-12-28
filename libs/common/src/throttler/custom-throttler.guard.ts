import { ExecutionContext, Injectable } from '@nestjs/common'
import { ThrottlerGuard, ThrottlerRequest } from '@nestjs/throttler'
import { BaseException, THROTTLER_ERROR } from '../exceptions'

/**
 * 커스텀 Rate Limiting 가드
 *
 * - IP 기반 또는 사용자 기반으로 요청 횟수를 제한
 * - @Throttle({ ip: {...}, user: {...} }) 데코레이터와 함께 사용
 * - 'user' throttler: 인증된 사용자 ID 기준으로 제한
 * - 'ip' throttler: 클라이언트 IP 기준으로 제한
 */
@Injectable()
export class CustomThrottlerGuard extends ThrottlerGuard {
    /**
     * 요청 처리 및 Rate Limit 검사
     * - Redis 스토리지에서 현재 요청 횟수를 조회/증가
     * - 제한 초과 시 예외 발생
     */
    protected async handleRequest(requestProps: ThrottlerRequest): Promise<boolean> {
        const { context, throttler, limit, ttl, blockDuration, generateKey } = requestProps
        const { req, res } = this.getRequestResponse(context)

        // throttler 타입(ip/user)에 따라 추적 키 생성
        const tracker = await this.getTrackerByThrottler(req, throttler.name!)
        const key = generateKey(context, tracker, throttler.name!)

        // Redis에서 요청 횟수 증가 및 현재 상태 조회
        const { totalHits, timeToExpire, isBlocked, timeToBlockExpire } = await this.storageService.increment(
            key,
            ttl,
            limit,
            blockDuration,
            throttler.name!
        )

        // 제한 초과 시 429 Too Many Requests 예외 발생
        if (isBlocked) {
            await this.throwThrottlingException(context)
        }

        return true
    }

    /**
     * Throttler 타입에 따른 추적 키 생성
     * - 'user' throttler + 인증된 사용자: user:{userId}
     * - 그 외: ip:{clientIp}
     */
    private async getTrackerByThrottler(req: Record<string, any>, throttlerName: string): Promise<string> {
        const ip = this.getClientIp(req)

        // 'user' throttler이고 인증된 사용자인 경우 사용자 ID로 추적
        if (throttlerName === 'user' && req.user?.id) {
            return `user:${req.user.id}`
        }

        // 그 외에는 IP로 추적
        return `ip:${ip}`
    }

    /**
     * 클라이언트 실제 IP 추출
     * - 프록시/로드밸런서 환경: X-Forwarded-For 헤더에서 첫 번째 IP
     * - 직접 연결: req.ip 사용
     */
    private getClientIp(req: Record<string, any>): string {
        const forwarded = req.headers['x-forwarded-for']
        if (forwarded) {
            // X-Forwarded-For: client, proxy1, proxy2 형태에서 첫 번째(실제 클라이언트) IP 추출
            return forwarded.split(',')[0].trim()
        }
        return req.ips?.length > 0 ? req.ips[0] : req.ip
    }

    /**
     * Rate Limit 초과 시 예외 발생
     */
    protected async throwThrottlingException(context: ExecutionContext): Promise<void> {
        throw new BaseException(THROTTLER_ERROR.RATE_LIMIT_EXCEEDED, this.constructor.name)
    }
}
