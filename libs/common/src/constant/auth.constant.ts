/**
 * 인증 관련 상수
 */
export const AUTH_CONSTANTS = {
    /**
     * 캐시 키 접두사
     */
    CACHE_KEYS: {
        OTP_PREFIX: 'password-reset:otp:',
        FLOW_PREFIX: 'password-reset:flow:',
        ACTIVE_RESET_TOKEN_PREFIX: 'password-reset:token:',
        RATE_LIMIT_INIT_PREFIX: 'rate-limit:password-init:',
        RATE_LIMIT_VERIFY_PREFIX: 'rate-limit:password-verify:'
    },

    /**
     * 캐시 TTL (밀리초)
     */
    CACHE_TTL: {
        OTP: 5 * 60 * 1000, // 5분
        RESET_TOKEN: 15 * 60 * 1000, // 15분
        FLOW: 30 * 60 * 1000, // 30분
        RATE_LIMIT: 60 * 60 * 1000 // 1시간
    },

    /**
     * Rate Limiting 설정
     */
    RATE_LIMIT: {
        MAX_INIT_ATTEMPTS: 5, // 1시간당 최대 OTP 발급 횟수
        MAX_VERIFY_ATTEMPTS: 10, // 1시간당 최대 OTP 검증 시도 횟수
        WINDOW: 60 * 60 * 1000 // 1시간
    },

    /**
     * OTP 설정
     */
    OTP: {
        LENGTH: 6,
        MAX_ATTEMPTS: 5,
        EXPIRES_IN: 5 * 60 * 1000 // 5분
    },

    /**
     * Reset Token 설정
     */
    RESET_TOKEN: {
        BYTES: 32, // 토큰 생성 시 사용할 바이트 수
        EXPIRES_IN: 15 * 60 * 1000 // 15분
    },

    /**
     * JWT 토큰 설정
     */
    JWT: {
        REFRESH_TOKEN_EXPIRES_IN: 7 * 24 * 60 * 60 * 1000 // 7일
    }
} as const
