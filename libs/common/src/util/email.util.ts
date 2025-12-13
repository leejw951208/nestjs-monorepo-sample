import { Injectable } from '@nestjs/common'

@Injectable()
export class EmailUtil {
    /**
     * 이메일 정규화 (소문자 변환 및 공백 제거)
     * @param email 정규화할 이메일
     * @returns 정규화된 이메일
     */
    normalize(email: string): string {
        return email.trim().toLowerCase()
    }

    /**
     * 이메일 유효성 검증
     * @param email 검증할 이메일
     * @returns 유효한 이메일 여부
     */
    isValid(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }
}
