import { AuthErrorType, BadRequestType, NotFoundType, NotificationErrorType, PostErrorType, SeedErrorType, ServerErrorType, UserErrorType } from './error.type'

export interface IErrorCodes {
    errorCode: string
    status: number
    message: string
}

export const SEED_ERROR: {
    [key in SeedErrorType]: IErrorCodes
} = {
    GENERAL: {
        status: 500,
        errorCode: 'SEED_ERROR_001',
        message: '시드 실행 중 오류가 발생 하였습니다.'
    }
}

export const AUTH_ERROR: {
    [key in AuthErrorType]: IErrorCodes
} = {
    MISSING_ACCESS_TOKEN: {
        status: 401,
        errorCode: 'AUTH_ERROR_001',
        message: '인증 토큰을 찾을 수 없습니다.'
    },
    MISSING_REFRESH_TOKEN: {
        status: 401,
        errorCode: 'AUTH_ERROR_002',
        message: '리프레시 토큰을 찾을 수 없습니다.'
    },
    INVALID_ACCESS_TOKEN: {
        status: 401,
        errorCode: 'AUTH_ERROR_003',
        message: '유효하지 않은 인증 토큰입니다.'
    },
    EXPIRED_ACCESS_TOKEN: {
        status: 401,
        errorCode: 'AUTH_ERROR_004',
        message: '인증 토큰이 만료되었습니다.'
    },
    EXPIRED_REFRESH_TOKEN: {
        status: 401,
        errorCode: 'AUTH_ERROR_005',
        message: '리프레시 토큰이 만료되었습니다.'
    },
    INVALID_REFRESH_TOKEN: {
        status: 401,
        errorCode: 'AUTH_ERROR_006',
        message: '유효하지 않은 리프레시 토큰입니다.'
    },
    PASSWORD_NOT_MATCHED: {
        status: 401,
        errorCode: 'AUTH_ERROR_007',
        message: '비밀번호가 일치하지 않습니다.'
    },
    RESOURCE_ACCESS_DENIED: {
        status: 403,
        errorCode: 'AUTH_ERROR_008',
        message: '리소스 접근 권한이 없습니다.'
    },
    OTP_INVALID: {
        status: 400,
        errorCode: 'AUTH_ERROR_009',
        message: 'OTP가 일치하지 않습니다.'
    },
    OTP_EXPIRED: {
        status: 400,
        errorCode: 'AUTH_ERROR_010',
        message: 'OTP가 만료되었습니다.'
    },
    RESET_TOKEN_INVALID: {
        status: 400,
        errorCode: 'AUTH_ERROR_011',
        message: '비밀번호 재설정 토큰이 유효하지 않습니다.'
    },
    RESET_TOKEN_EXPIRED: {
        status: 400,
        errorCode: 'AUTH_ERROR_012',
        message: '비밀번호 재설정 토큰이 만료되었습니다.'
    },
    INVALID_RESET_TOKEN: {
        status: 400,
        errorCode: 'AUTH_ERROR_013',
        message: '유효하지 않은 비밀번호 재설정 토큰입니다.'
    },
    OTP_MAX_ATTEMPTS_REACHED: {
        status: 429,
        errorCode: 'AUTH_ERROR_014',
        message: 'OTP 입력 횟수를 초과했습니다. 새로운 OTP를 요청해주세요.'
    },
    RATE_LIMIT_EXCEEDED: {
        status: 429,
        errorCode: 'AUTH_ERROR_015',
        message: '요청 횟수를 초과했습니다. 잠시 후 다시 시도해주세요.'
    }
}

export const USER_ERROR: {
    [key in UserErrorType]: IErrorCodes
} = {
    NOT_FOUND: {
        status: 404,
        errorCode: 'USER_ERROR_001',
        message: '회원 정보를 찾을 수 없습니다.'
    },
    ALREADY_EXISTS_EMAIL: {
        status: 400,
        errorCode: 'USER_ERROR_003',
        message: '이미 존재하는 이메일입니다.'
    },
    VERIFICATION_FAILED: {
        status: 400,
        errorCode: 'USER_ERROR_004',
        message: '회원 인증에 실패했습니다. 이름과 이메일을 확인해주세요.'
    },
    ALREADY_DELETED: {
        status: 400,
        errorCode: 'USER_ERROR_005',
        message: '이미 탈퇴한 회원입니다.'
    }
}

export const POST_ERROR: {
    [key in PostErrorType]: IErrorCodes
} = {
    NOT_FOUND: {
        status: 404,
        errorCode: 'POST_ERROR_001',
        message: '게시글을 찾을 수 없습니다.'
    },
    FORBIDDEN: {
        status: 403,
        errorCode: 'POST_ERROR_002',
        message: '게시글에 대한 권한이 없습니다.'
    }
}

export const NOTIFICATION_ERROR: {
    [key in NotificationErrorType]: IErrorCodes
} = {
    NOT_FOUND: {
        status: 404,
        errorCode: 'NOTIFICATION_ERROR_001',
        message: '알림을 찾을 수 없습니다.'
    }
}

// 공통 에러 코드
export const BAD_REQUEST: {
    [key in BadRequestType]: IErrorCodes
} = {
    GENERAL: {
        status: 400,
        errorCode: 'BAD_REQUEST_001',
        message: '잘못된 요청 입니다.'
    }
}

export const NOT_FOUND: {
    [key in NotFoundType]: IErrorCodes
} = {
    GENERAL: {
        status: 404,
        errorCode: 'NOT_FOUND_001',
        message: '리소스를 찾을 수 없습니다.'
    }
}

export const SERVER_ERROR: {
    [key in ServerErrorType]: IErrorCodes
} = {
    GENERAL: {
        status: 500,
        errorCode: 'SERVER_ERROR_001',
        message: '요청을 처리하던 중 오류가 발생 하였습니다'
    },
    CONFIG_VALIDATION_ERROR: {
        status: 500,
        errorCode: 'SERVER_ERROR_002',
        message: '환경 변수 검증 중 오류가 발생 하였습니다.'
    }
}
