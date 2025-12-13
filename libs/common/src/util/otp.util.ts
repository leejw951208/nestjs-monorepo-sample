import { Injectable } from '@nestjs/common'
import { randomInt, randomBytes, timingSafeEqual } from 'crypto'
import { AUTH_CONSTANTS } from '@libs/common/constant/auth.constant'

/**
 * OTP 데이터 구조
 */
export interface OtpData {
    otp: string
    flowId: string
    createdAt: number
    expiresAt: number
    attempts: number
}

/**
 * Reset Token Payload
 */
export interface ResetTokenPayload {
    id: number
    flowId: string
}

@Injectable()
export class OtpUtil {
    private readonly OTP_LENGTH = AUTH_CONSTANTS.OTP.LENGTH
    private readonly OTP_TTL = AUTH_CONSTANTS.OTP.EXPIRES_IN
    private readonly MAX_ATTEMPTS = AUTH_CONSTANTS.OTP.MAX_ATTEMPTS

    /**
     * Generate a 6-digit OTP
     * @returns A 6-digit OTP as a string
     */
    generateOtp(): string {
        const otp = randomInt(0, 10 ** this.OTP_LENGTH)
        return otp.toString().padStart(this.OTP_LENGTH, '0')
    }

    /**
     * Generate a secure reset token
     * @returns A secure random token as a hex string
     */
    generateResetToken(): string {
        return randomBytes(AUTH_CONSTANTS.RESET_TOKEN.BYTES).toString('hex')
    }

    /**
     * OTP 데이터 생성
     */
    createOtpData(otp: string, flowId: string): OtpData {
        const now = Date.now()
        return {
            otp,
            flowId,
            createdAt: now,
            expiresAt: now + this.OTP_TTL,
            attempts: 0
        }
    }

    /**
     * OTP 캐시 키 생성
     */
    createOtpKey(userId: number): string {
        return `${AUTH_CONSTANTS.CACHE_KEYS.OTP_PREFIX}${userId}`
    }

    /**
     * Flow 캐시 키 생성
     */
    createFlowKey(userId: number): string {
        return `${AUTH_CONSTANTS.CACHE_KEYS.FLOW_PREFIX}${userId}`
    }

    /**
     * OTP 만료 여부 확인
     */
    isExpired(otpData: OtpData): boolean {
        return Date.now() > otpData.expiresAt
    }

    /**
     * OTP 검증 (Constant-time 비교로 타이밍 공격 방지)
     */
    verifyOtpCode(inputOtp: string, otpData: OtpData): boolean {
        // 시도 횟수 초과 확인
        if (otpData.attempts >= this.MAX_ATTEMPTS) {
            return false
        }

        try {
            // Constant-time 비교를 위해 버퍼로 변환
            const inputBuffer = Buffer.from(inputOtp, 'utf8')
            const storedBuffer = Buffer.from(otpData.otp, 'utf8')

            // 길이가 다르면 false (타이밍 안전)
            if (inputBuffer.length !== storedBuffer.length) {
                return false
            }

            // Constant-time 비교로 타이밍 공격 방지
            return timingSafeEqual(inputBuffer, storedBuffer)
        } catch (error) {
            return false
        }
    }

    /**
     * OTP 시도 횟수 증가
     */
    incrementAttempts(otpData: OtpData): OtpData {
        return {
            ...otpData,
            attempts: otpData.attempts + 1
        }
    }

    /**
     * 최대 시도 횟수 초과 여부 확인
     */
    isMaxAttemptsReached(otpData: OtpData): boolean {
        return otpData.attempts >= this.MAX_ATTEMPTS
    }
}
