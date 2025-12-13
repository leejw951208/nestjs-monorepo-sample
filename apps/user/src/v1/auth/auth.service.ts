import { BaseException } from '@libs/common/exception/base.exception'
import { AUTH_ERROR, USER_ERROR } from '@libs/common/exception/error.code'
import { BcryptUtil } from '@libs/common/util/bcrypt.util'
import { JwtUtil } from '@libs/common/util/jwt.util'
import { OtpUtil, OtpData, ResetTokenPayload } from '@libs/common/util/otp.util'
import { EmailUtil } from '@libs/common/util/email.util'
import { AUTH_CONSTANTS } from '@libs/common/constant/auth.constant'
import { UserModel } from '@libs/models/user/user.model'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Inject, Injectable } from '@nestjs/common'
import { UserStatus } from '@prisma/client'
import { type Cache } from 'cache-manager'
import { plainToInstance } from 'class-transformer'
import { randomUUID } from 'crypto'
import { UserResponseDto } from '../user/dto/user-response.dto'
import { RefreshTokenResponseDto } from './dto/refresh-token-response.dto'
import { PasswordResetConfirmRequestDto } from './dto/password-reset-confirm.request.dto'
import { SigninRequestDto } from './dto/signin-request.dto'
import { SigninResponseDto } from './dto/signin-response.dto'
import { SignupRequestDto } from './dto/signup-request.dto'
import { UserRepository } from '../user/user.repository'
import { PasswordResetInitRequestDto } from './dto/password-reset-init.request.dto'
import { PasswordResetVerifyRequestDto } from './dto/password-reset-verify.request.dto'
import { PasswordResetVerifyResponseDto } from './dto/password-reset-verify.response.dto'
import { TokenService } from '../token/token.service'

@Injectable()
export class AuthService {
    constructor(
        @Inject(CACHE_MANAGER)
        private readonly cacheManager: Cache,
        private readonly bcryptUtil: BcryptUtil,
        private readonly jwtUtil: JwtUtil,
        private readonly otpUtil: OtpUtil,
        private readonly emailUtil: EmailUtil,
        private readonly userRepository: UserRepository,
        private readonly tokenService: TokenService
    ) {}

    async signup(reqDto: SignupRequestDto): Promise<void> {
        // 이메일 중복 검사
        const foundUser = await this.userRepository.findUser({
            where: { email: reqDto.email }
        })
        if (foundUser) throw new BaseException(USER_ERROR.ALREADY_EXISTS_EMAIL, this.constructor.name)

        const hashedPassword = await this.bcryptUtil.hash(reqDto.password)
        const createdUser = UserModel.create({
            ...reqDto,
            password: hashedPassword,
            status: UserStatus.ACTIVE
        })
        await this.userRepository.createUser({ data: createdUser })
    }

    async signin(reqDto: SigninRequestDto): Promise<{ resDto: SigninResponseDto; refreshToken: string }> {
        // 회원 조회
        const foundUser = await this.userRepository.findUser({ where: { email: reqDto.email } })
        if (!foundUser) throw new BaseException(USER_ERROR.NOT_FOUND, this.constructor.name)

        // 비밀번호 비교
        const isMatched = await this.bcryptUtil.compare(reqDto.password, foundUser.password)
        if (!isMatched) throw new BaseException(AUTH_ERROR.PASSWORD_NOT_MATCHED, this.constructor.name)

        // 토큰 생성
        const jti = randomUUID()
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtUtil.createAccessToken(foundUser, 'api', jti),
            this.jwtUtil.createRefreshToken(foundUser, 'api', jti)
        ])

        // Redis와 DB에 리프레시 토큰 저장
        const hashedRefreshToken = await this.bcryptUtil.hash(refreshToken)
        const TTL = AUTH_CONSTANTS.JWT.REFRESH_TOKEN_EXPIRES_IN
        await this.tokenService.saveRefreshToken(foundUser.id, jti, hashedRefreshToken, TTL)

        const resDto = plainToInstance(
            SigninResponseDto,
            {
                accessToken,
                user: plainToInstance(UserResponseDto, foundUser, { excludeExtraneousValues: true })
            },
            { excludeExtraneousValues: true }
        )

        return { resDto, refreshToken }
    }

    async signout(refreshToken: string): Promise<void> {
        // 토큰 검증 및 페이로드 추출
        const payload = await this.jwtUtil.verify(refreshToken, 're')

        // 회원 정보 조회
        const foundUser = await this.userRepository.findUser({ where: { id: payload.id } })
        if (!foundUser) throw new BaseException(USER_ERROR.NOT_FOUND, this.constructor.name)

        // Redis와 DB에서 리프레시 토큰 제거
        await this.tokenService.deleteRefreshToken(foundUser.id, payload.jti)
    }

    async refreshToken(refreshToken: string): Promise<{ resDto: RefreshTokenResponseDto; refreshToken: string }> {
        // 토큰 검증 및 페이로드 추출
        const payload = await this.jwtUtil.verify(refreshToken, 're')

        // 회원 정보 조회
        const foundUser = await this.userRepository.findUser({ where: { id: payload.id } })
        if (!foundUser) throw new BaseException(USER_ERROR.NOT_FOUND, this.constructor.name)

        // Redis에 저장된 리프레시 토큰 조회
        const foundCachedToken = await this.tokenService.getRefreshToken(foundUser.id, payload.jti)
        if (!foundCachedToken) throw new BaseException(AUTH_ERROR.MISSING_REFRESH_TOKEN, this.constructor.name)

        // 리프레시 토큰 비교
        const isMatched = await this.bcryptUtil.compare(refreshToken, foundCachedToken)
        if (!isMatched) throw new BaseException(AUTH_ERROR.INVALID_REFRESH_TOKEN, this.constructor.name)

        // 기존 리프레시 토큰 삭제 (Redis, DB, 토큰 목록)
        await this.tokenService.deleteRefreshToken(foundUser.id, payload.jti)

        // 새로운 토큰 생성
        const jti = randomUUID()
        const [newAccessToken, newRefreshToken] = await Promise.all([
            this.jwtUtil.createAccessToken(foundUser, 'api', jti),
            this.jwtUtil.createRefreshToken(foundUser, 'api', jti)
        ])

        // 새로운 리프레시 토큰 저장 (Redis, DB, 토큰 목록)
        const hashedNewRefreshToken = await this.bcryptUtil.hash(newRefreshToken)
        const TTL = AUTH_CONSTANTS.JWT.REFRESH_TOKEN_EXPIRES_IN
        await this.tokenService.saveRefreshToken(foundUser.id, jti, hashedNewRefreshToken, TTL)

        return {
            resDto: plainToInstance(RefreshTokenResponseDto, { accessToken: newAccessToken }),
            refreshToken: newRefreshToken
        }
    }

    /**
     * 비밀번호 재설정 OTP 발급
     *
     * 비밀번호 재설정 플로우의 첫 번째 단계로, 사용자 이메일로 OTP를 발급합니다.
     *
     * @description
     * - 이메일을 정규화하여 대소문자 구분 없이 처리
     * - 사용자가 존재하지 않아도 에러를 반환하지 않음 (보안: 이메일 존재 여부 노출 방지)
     * - Rate limiting을 통해 무차별 대입 공격 방지 (1시간당 5회)
     * - Flow ID를 생성하여 전체 재설정 플로우의 무결성 추적
     * - OTP는 5분간 유효하며, 최대 5회 시도 가능
     * - OTP와 Flow ID를 별도의 캐시 키로 관리하여 보안 강화
     *
     * @param reqDto - 이메일 정보를 포함한 요청 DTO
     * @returns Promise<void>
     */
    async issueOtp(reqDto: PasswordResetInitRequestDto): Promise<void> {
        // 1. 이메일 정규화 (소문자 변환 및 공백 제거)
        const normalizedEmail = this.emailUtil.normalize(reqDto.email)
        const user = await this.userRepository.findUser({ where: { email: normalizedEmail } })

        // 2. 사용자 없어도 보안상 에러를 반환하지 않음 (이메일 존재 여부 노출 방지)
        if (!user) return

        // 3. Rate limiting 체크 (1시간당 5회 제한)
        await this.manageRateLimit(user.id, 'init', 'check')

        // 4. Flow ID 생성 (재설정 플로우 추적용)
        // Flow ID는 OTP 발급부터 비밀번호 재설정 완료까지 동일하게 유지되어야 함
        const flowId = randomUUID()

        // 5. OTP 생성 및 데이터 구성
        // OTP는 6자리 숫자, 5분 유효, 최대 5회 시도 가능
        const otp = this.otpUtil.generateOtp()
        const otpData = this.otpUtil.createOtpData(otp, flowId)

        // 6. 캐시 키 생성 (사용자 ID 기반)
        const otpKey = this.otpUtil.createOtpKey(user.id)
        const flowKey = this.otpUtil.createFlowKey(user.id)

        // 7. Redis에 OTP 및 Flow ID 저장
        // OTP: 5분 TTL, Flow: 30분 TTL (전체 플로우 완료 시간)
        await Promise.all([
            this.cacheManager.set(otpKey, JSON.stringify(otpData), AUTH_CONSTANTS.CACHE_TTL.OTP),
            this.cacheManager.set(flowKey, flowId, AUTH_CONSTANTS.CACHE_TTL.FLOW)
        ])

        // 8. 이메일로 OTP 전송
        await this.sendOtpEmail(user.email, otp)

        // 9. Rate limiting 카운트 증가
        await this.manageRateLimit(user.id, 'init', 'increment')
    }

    /**
     * OTP 검증 및 리셋 토큰 발급
     *
     * 비밀번호 재설정 플로우의 두 번째 단계로, 사용자가 입력한 OTP를 검증하고 리셋 토큰을 발급합니다.
     *
     * @description
     * - OTP 검증 실패 시 시도 횟수 증가 (최대 5회)
     * - Flow ID 무결성 검증으로 재설정 플로우의 일관성 보장
     * - OTP 검증 성공 시 일회용으로 즉시 삭제
     * - 리셋 토큰은 15분간 유효
     * - Flow ID는 비밀번호 재설정 완료까지 유지
     *
     * @param reqDto - 이메일과 OTP를 포함한 요청 DTO
     * @returns Promise<PasswordResetVerifyResponseDto> - 리셋 토큰을 포함한 응답
     * @throws USER_ERROR.NOT_FOUND - 사용자를 찾을 수 없는 경우
     * @throws AUTH_ERROR.OTP_EXPIRED - OTP가 만료된 경우
     * @throws AUTH_ERROR.INVALID_RESET_TOKEN - Flow ID가 일치하지 않는 경우
     * @throws AUTH_ERROR.OTP_INVALID - OTP가 일치하지 않는 경우
     * @throws AUTH_ERROR.OTP_MAX_ATTEMPTS_REACHED - 최대 시도 횟수 초과
     */
    async verifyOtp(reqDto: PasswordResetVerifyRequestDto): Promise<PasswordResetVerifyResponseDto> {
        // 1. 이메일 정규화 및 사용자 조회
        const normalizedEmail = this.emailUtil.normalize(reqDto.email)
        const user = await this.userRepository.findUser({ where: { email: normalizedEmail } })

        // 사용자가 없어도 일관된 처리 (이메일 열거 공격 방지)
        if (!user) {
            // 타이밍 분석 방지를 위한 랜덤 지연 (100-300ms)
            await new Promise((resolve) => setTimeout(resolve, 100 + Math.random() * 200))
            throw new BaseException(AUTH_ERROR.OTP_INVALID, this.constructor.name)
        }

        // 2. Rate limiting 체크 (1시간당 10회 제한)
        await this.manageRateLimit(user.id, 'verify', 'check')

        // 3. 캐시 키 생성
        const otpKey = this.otpUtil.createOtpKey(user.id)
        const flowKey = this.otpUtil.createFlowKey(user.id)

        // 3. Redis에서 OTP 데이터 및 Flow ID 조회
        const [storedOtpData, storedFlowId] = await Promise.all([
            this.cacheManager.get<string>(otpKey),
            this.cacheManager.get<string>(flowKey)
        ])

        // 4. OTP 또는 Flow ID가 없으면 만료된 것으로 간주
        if (!storedOtpData || !storedFlowId) {
            throw new BaseException(AUTH_ERROR.OTP_EXPIRED, this.constructor.name)
        }

        const otpData: OtpData = JSON.parse(storedOtpData)

        // 5. Flow ID 무결성 검증
        // OTP 데이터 내의 flowId와 별도 저장된 flowId가 일치해야 함
        // 이를 통해 중간에 플로우가 변조되지 않았음을 보장
        if (storedFlowId !== otpData.flowId) {
            throw new BaseException(AUTH_ERROR.INVALID_RESET_TOKEN, this.constructor.name)
        }

        // 6. OTP 만료 확인 (생성 시간 기준 5분)
        if (this.otpUtil.isExpired(otpData)) {
            await this.cacheManager.del(otpKey)
            throw new BaseException(AUTH_ERROR.OTP_EXPIRED, this.constructor.name)
        }

        // 7. OTP 검증 (입력값과 저장된 OTP 비교, 시도 횟수 확인)
        const isValidOtp = this.otpUtil.verifyOtpCode(reqDto.otp, otpData)

        if (!isValidOtp) {
            // 7-1. Rate limiting 증가 (실패한 시도 기록)
            await this.manageRateLimit(user.id, 'verify', 'increment')

            // 7-2. 시도 횟수 증가
            const updatedOtpData = this.otpUtil.incrementAttempts(otpData)

            // 7-3. 최대 시도 횟수 초과 확인 (5회)
            if (this.otpUtil.isMaxAttemptsReached(updatedOtpData)) {
                // 최대 시도 횟수 초과 시 OTP 삭제 및 에러 반환
                await this.cacheManager.del(otpKey)
                throw new BaseException(AUTH_ERROR.OTP_MAX_ATTEMPTS_REACHED, this.constructor.name)
            }

            // 7-4. 업데이트된 시도 횟수 저장
            await this.cacheManager.set(otpKey, JSON.stringify(updatedOtpData), AUTH_CONSTANTS.CACHE_TTL.OTP)

            throw new BaseException(AUTH_ERROR.OTP_INVALID, this.constructor.name)
        }

        // 8. OTP 검증 성공 후 OTP 키 삭제 (일회용)
        // flowKey는 비밀번호 재설정 완료 시까지 유지
        await this.cacheManager.del(otpKey)

        // 9. Rate limiting 증가 (성공한 시도 기록)
        await this.manageRateLimit(user.id, 'verify', 'increment')

        // 10. Reset 토큰 생성 (15분 유효)
        // Flow ID를 포함하여 리셋 토큰의 무결성 보장
        const resetToken = await this.createResetToken(user.id, otpData.flowId)

        return plainToInstance(PasswordResetVerifyResponseDto, { resetToken })
    }

    /**
     * 비밀번호 재설정
     *
     * 비밀번호 재설정 플로우의 마지막 단계로, 리셋 토큰을 검증하고 새 비밀번호로 변경합니다.
     *
     * @description
     * - 리셋 토큰의 유효성 및 만료 여부 확인
     * - Flow ID 무결성 검증으로 전체 플로우의 일관성 보장
     * - 보안 관련 캐시 정리 (OTP, Rate limit 등)
     * - 비밀번호 변경 후 모든 세션 종료 (보안 강화)
     * - 리셋 토큰은 일회용으로 즉시 삭제
     *
     * @param reqDto - 리셋 토큰과 새 비밀번호를 포함한 요청 DTO
     * @returns Promise<void>
     * @throws AUTH_ERROR.INVALID_RESET_TOKEN - 리셋 토큰이 유효하지 않거나 Flow ID가 일치하지 않는 경우
     * @throws USER_ERROR.NOT_FOUND - 사용자를 찾을 수 없는 경우
     */
    async resetPassword(reqDto: PasswordResetConfirmRequestDto): Promise<void> {
        const { resetToken, newPassword } = reqDto

        // 1. Reset 토큰 검증 (유효성, 만료 여부)
        const payload = await this.verifyResetToken(resetToken)

        // 2. Flow ID 무결성 검증
        // OTP 발급 시 생성된 Flow ID와 리셋 토큰의 Flow ID가 일치해야 함
        const flowKey = this.otpUtil.createFlowKey(payload.id)
        const storedFlowId = await this.cacheManager.get<string>(flowKey)

        if (!storedFlowId || storedFlowId !== payload.flowId) {
            throw new BaseException(AUTH_ERROR.INVALID_RESET_TOKEN, this.constructor.name)
        }

        // 3. 사용자 조회
        const user = await this.userRepository.findUser({ where: { id: payload.id } })

        if (!user) {
            throw new BaseException(USER_ERROR.NOT_FOUND, this.constructor.name)
        }

        // 4. 새 비밀번호 해싱 (DB 작업 전 사전 준비)
        const hashedPassword = await this.bcryptUtil.hash(newPassword)

        // 5. 리셋 토큰 및 플로우 키 삭제 (일회용)
        // CRITICAL: 비밀번호 변경 BEFORE DB 업데이트
        // 토큰을 먼저 삭제하여 재사용 공격 방지 (비밀번호 업데이트 실패 시에도 토큰은 이미 소비됨)
        const tokenKey = `${AUTH_CONSTANTS.CACHE_KEYS.ACTIVE_RESET_TOKEN_PREFIX}${resetToken}`
        await Promise.all([
            this.cacheManager.del(tokenKey), // 리셋 토큰 삭제
            this.cacheManager.del(flowKey) // 플로우 키 삭제
        ])

        // 6. 비밀번호 업데이트
        await this.userRepository.updateUser({
            where: { id: user.id },
            data: { password: hashedPassword }
        })

        // 7. 보안 관련 캐시 정리 (OTP, Rate limit 등)
        await this.clearSecurityCache(user.id)

        // 8. 모든 세션 종료 (보안 강화)
        // 비밀번호 변경 시 기존 세션을 모두 무효화하여 보안 강화
        await this.tokenService.deleteAllRefreshTokens(user.id)
    }

    // ==================== 헬퍼 메서드 ====================

    /**
     * Rate Limiting 관리
     *
     * @description
     * 비밀번호 재설정 플로우에서 무차별 대입 공격을 방지하기 위한 Rate Limiting을 관리합니다.
     * - init: OTP 발급 요청 제한 (1시간당 5회)
     * - verify: OTP 검증 시도 제한 (1시간당 10회)
     *
     * @param userId - 사용자 ID
     * @param type - Rate limiting 타입 ('init': OTP 발급, 'verify': OTP 검증)
     * @param action - 수행할 작업 ('check': 제한 확인, 'increment': 카운트 증가)
     * @throws AUTH_ERROR.RATE_LIMIT_EXCEEDED - 최대 시도 횟수 초과 시
     */
    private async manageRateLimit(userId: number, type: 'init' | 'verify', action: 'check' | 'increment'): Promise<void> {
        // Rate limiting 키 및 최대 시도 횟수 설정
        const prefix =
            type === 'init' ? AUTH_CONSTANTS.CACHE_KEYS.RATE_LIMIT_INIT_PREFIX : AUTH_CONSTANTS.CACHE_KEYS.RATE_LIMIT_VERIFY_PREFIX
        const key = `${prefix}${userId}`
        const maxAttempts = type === 'init' ? AUTH_CONSTANTS.RATE_LIMIT.MAX_INIT_ATTEMPTS : AUTH_CONSTANTS.RATE_LIMIT.MAX_VERIFY_ATTEMPTS

        if (action === 'check') {
            // 현재 시도 횟수 확인
            const attempts = (await this.cacheManager.get<number>(key)) || 0
            if (attempts >= maxAttempts) {
                throw new BaseException(AUTH_ERROR.RATE_LIMIT_EXCEEDED, this.constructor.name)
            }
        } else if (action === 'increment') {
            // 시도 횟수 증가 (1시간 TTL)
            const currentAttempts = (await this.cacheManager.get<number>(key)) || 0
            await this.cacheManager.set(key, currentAttempts + 1, AUTH_CONSTANTS.CACHE_TTL.RATE_LIMIT)
        }
    }

    /**
     * OTP 이메일 전송
     *
     * @description
     * 사용자 이메일로 OTP를 전송합니다.
     * 실제 환경에서는 이메일 서비스를 사용해야 합니다.
     *
     * @param email - 수신자 이메일
     * @param otp - 6자리 OTP 코드
     *
     * @security
     * OTP는 민감한 정보이므로 어떤 환경에서도 로그에 기록하지 않습니다.
     * 개발/테스트 환경에서는 이메일 서비스의 테스트 모드나 별도의 모니터링 도구를 사용하세요.
     */
    private async sendOtpEmail(email: string, otp: string): Promise<void> {
        // TODO: 이메일 서비스 (SendGrid, AWS SES 등)를 통해 OTP 전송 구현
        // 개발 환경: 이메일 서비스의 테스트 모드 사용 (예: Mailtrap, Ethereal Email)
        // 프로덕션: 실제 이메일 발송
    }

    /**
     * Reset 토큰 생성
     *
     * @description
     * OTP 검증 성공 후 비밀번호 재설정을 위한 일회용 토큰을 생성합니다.
     * - 64자리 랜덤 hex 문자열로 생성
     * - 15분간 유효
     * - 사용자 ID와 Flow ID를 payload로 저장
     *
     * @param userId - 사용자 ID
     * @param flowId - 재설정 플로우 ID
     * @returns Promise<string> - 생성된 리셋 토큰
     */
    private async createResetToken(userId: number, flowId: string): Promise<string> {
        const payload: ResetTokenPayload = {
            id: userId,
            flowId
        }

        // Reset 토큰 생성 (64자리 랜덤 hex 문자열)
        const resetToken = this.otpUtil.generateResetToken()

        // 활성 리셋 토큰 및 payload 저장 (15분 TTL)
        const tokenKey = `${AUTH_CONSTANTS.CACHE_KEYS.ACTIVE_RESET_TOKEN_PREFIX}${resetToken}`
        await this.cacheManager.set(tokenKey, JSON.stringify(payload), AUTH_CONSTANTS.CACHE_TTL.RESET_TOKEN)

        return resetToken
    }

    /**
     * Reset 토큰 검증
     *
     * @description
     * 비밀번호 재설정 시 제공된 리셋 토큰의 유효성을 검증합니다.
     * - Redis에서 토큰 조회
     * - 만료 여부 자동 확인 (Redis TTL)
     * - Payload 파싱 및 반환
     *
     * @param resetToken - 검증할 리셋 토큰
     * @returns Promise<ResetTokenPayload> - 토큰에 포함된 사용자 ID 및 Flow ID
     * @throws AUTH_ERROR.INVALID_RESET_TOKEN - 토큰이 유효하지 않거나 만료된 경우
     */
    private async verifyResetToken(resetToken: string): Promise<ResetTokenPayload> {
        try {
            // 토큰 키로 payload 조회
            const tokenKey = `${AUTH_CONSTANTS.CACHE_KEYS.ACTIVE_RESET_TOKEN_PREFIX}${resetToken}`
            const storedPayload = await this.cacheManager.get<string>(tokenKey)

            if (!storedPayload) {
                throw new BaseException(AUTH_ERROR.INVALID_RESET_TOKEN, this.constructor.name)
            }

            const payload: ResetTokenPayload = JSON.parse(storedPayload)

            return payload
        } catch (error) {
            throw new BaseException(AUTH_ERROR.INVALID_RESET_TOKEN, this.constructor.name)
        }
    }

    /**
     * 보안 관련 캐시 정리
     *
     * @description
     * 비밀번호 재설정 완료 후 보안과 관련된 모든 캐시 데이터를 정리합니다.
     * - OTP 데이터
     * - OTP 발급 Rate limit
     * - OTP 검증 Rate limit
     *
     * @param userId - 사용자 ID
     */
    private async clearSecurityCache(userId: number): Promise<void> {
        const keys = [
            this.otpUtil.createOtpKey(userId), // OTP 데이터
            `${AUTH_CONSTANTS.CACHE_KEYS.RATE_LIMIT_INIT_PREFIX}${userId}`, // OTP 발급 Rate limit
            `${AUTH_CONSTANTS.CACHE_KEYS.RATE_LIMIT_VERIFY_PREFIX}${userId}` // OTP 검증 Rate limit
        ]

        await Promise.all(keys.map((key) => this.cacheManager.del(key)))
    }

}
