import commonEnvConfig from '@libs/common/config/env/common-env.config'
import { BaseException } from '@libs/common/exception/base.exception'
import { AUTH_ERROR, USER_ERROR } from '@libs/common/exception/error.code'
import { CryptoService } from '@libs/common/service/crypto.service'
import { TokenService } from '@libs/common/service/token.service'
import { type ExtendedPrismaClient, PRISMA_CLIENT } from '@libs/prisma/prisma.factory'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Inject, Injectable } from '@nestjs/common'
import { type ConfigType } from '@nestjs/config'
import { Owner, UserStatus } from '@prisma/client'
import { type Cache } from 'cache-manager'
import { plainToInstance } from 'class-transformer'
import { randomBytes, randomInt, randomUUID, timingSafeEqual } from 'crypto'
import { UserResponseDto } from '../user/dto/user-response.dto'
import { PasswordResetConfirmRequestDto } from './dto/password-reset-confirm.request.dto'
import { PasswordResetInitRequestDto } from './dto/password-reset-init.request.dto'
import { PasswordResetVerifyRequestDto } from './dto/password-reset-verify.request.dto'
import { PasswordResetVerifyResponseDto } from './dto/password-reset-verify.response.dto'
import { RefreshTokenResponseDto } from './dto/refresh-token-response.dto'
import { SigninRequestDto } from './dto/signin-request.dto'
import { SigninResponseDto } from './dto/signin-response.dto'
import { SignupRequestDto } from './dto/signup-request.dto'

type PasswordResetCodeData = {
    // 재설정 코드
    code: string
    // 코드 만료 시간 (Epoch time)
    expiresAt: number
    // 시도 횟수
    attempts: number
}

// 서비스 주입 가능(Injectable) 데코레이터: 이 클래스가 NestJS IoC 컨테이너에 의해 관리되는 서비스임을 나타냅니다.
@Injectable()
export class AuthService {
    // 비밀번호 재설정 코드 캐시 키 접두사
    private readonly PASSWORD_RESET_CODE_PREFIX = 'password-reset:code:'
    // 비밀번호 재설정 토큰 캐시 키 접두사
    private readonly PASSWORD_RESET_TOKEN_PREFIX = 'password-reset:token:'
    // 비밀번호 재설정 코드 길이
    private readonly PASSWORD_RESET_CODE_LENGTH = 6
    // 비밀번호 재설정 코드 최대 시도 횟수
    private readonly PASSWORD_RESET_CODE_MAX_ATTEMPTS = 5
    // 비밀번호 재설정 코드 유효 시간 (밀리초)
    private readonly PASSWORD_RESET_CODE_TTL = 300000 // 5분
    // 비밀번호 재설정 토큰 유효 시간 (밀리초)
    private readonly PASSWORD_RESET_TOKEN_TTL = 900000 // 15분

    constructor(
        @Inject(PRISMA_CLIENT) private readonly prisma: ExtendedPrismaClient,
        @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
        @Inject(commonEnvConfig.KEY) private readonly config: ConfigType<typeof commonEnvConfig>,
        private readonly cryptoService: CryptoService,
        private readonly tokenService: TokenService
    ) {}

    /**
     * @summary 사용자 회원가입
     * @description 제공된 정보를 사용하여 새로운 사용자를 생성하고 비밀번호를 해싱하여 저장합니다.
     * @param reqDto 회원가입 요청 데이터 (이메일, 비밀번호 등)
     * @returns Promise<void>
     * @throws {BaseException} 이미 존재하는 이메일인 경우 USER_ERROR.ALREADY_EXISTS_EMAIL 에러 발생
     */
    async signup(reqDto: SignupRequestDto): Promise<void> {
        // 1. 이미 존재하는 이메일인지 확인
        const foundUser = await this.prisma.user.findFirst({
            where: { email: reqDto.email, isDeleted: false }
        })
        // 2. 이미 존재하면 에러 발생
        if (foundUser) throw new BaseException(USER_ERROR.ALREADY_EXISTS_EMAIL, this.constructor.name)

        // 3. 비밀번호 해싱
        const hashedPassword = await this.cryptoService.hash(reqDto.password)
        // 4. 사용자 생성
        await this.prisma.user.create({
            data: {
                ...reqDto,
                password: hashedPassword,
                status: UserStatus.ACTIVE
            }
        })
    }

    /**
     * @summary 사용자 로그인
     * @description 사용자 이메일과 비밀번호를 검증하고, 액세스 토큰 및 리프레시 토큰을 발급합니다.
     * @param reqDto 로그인 요청 데이터 (이메일, 비밀번호)
     * @returns {Promise<{ resDto: SigninResponseDto; refreshToken: string }>} 생성된 액세스 토큰, 사용자 정보, 리프레시 토큰을 포함하는 객체
     * @throws {BaseException} 사용자를 찾을 수 없는 경우 USER_ERROR.NOT_FOUND 에러 발생
     * @throws {BaseException} 비밀번호가 일치하지 않는 경우 AUTH_ERROR.PASSWORD_NOT_MATCHED 에러 발생
     */
    async signin(reqDto: SigninRequestDto): Promise<{ resDto: SigninResponseDto; refreshToken: string }> {
        // 1. 이메일로 사용자 찾기
        const foundUser = await this.prisma.user.findFirst({ where: { email: reqDto.email, isDeleted: false } })
        // 사용자가 존재하지 않으면 에러 발생
        if (!foundUser) throw new BaseException(USER_ERROR.NOT_FOUND, this.constructor.name)

        // 2. 비밀번호 일치 여부 확인
        const isMatched = await this.cryptoService.compare(reqDto.password, foundUser.password)
        // 비밀번호가 일치하지 않으면 에러 발생
        if (!isMatched) throw new BaseException(AUTH_ERROR.PASSWORD_NOT_MATCHED, this.constructor.name)

        // 3. JTI (JWT ID) 생성 및 토큰 발급
        const jti = randomUUID() // JWT 고유 ID
        // 액세스 토큰과 리프레시 토큰을 병렬로 생성
        const [accessToken, refreshToken] = await Promise.all([
            this.tokenService.createAccessToken(foundUser.id, Owner.USER, jti),
            this.tokenService.createRefreshToken(foundUser.id, Owner.USER, jti)
        ])

        // 4. 리프레시 토큰 해싱 및 저장
        const hashedRefreshToken = await this.cryptoService.hash(refreshToken)
        await this.tokenService.saveRefreshToken(foundUser.id, Owner.USER, jti, hashedRefreshToken, this.config.jwtRefreshTokenTtl)

        // 5. 응답 DTO 생성
        const resDto = plainToInstance(
            SigninResponseDto,
            {
                accessToken,
                user: plainToInstance(UserResponseDto, foundUser, { excludeExtraneousValues: true }) // 사용자 정보를 DTO로 변환
            },
            { excludeExtraneousValues: true }
        )

        // 6. 결과 반환
        return { resDto, refreshToken }
    }

    /**
     * @summary 사용자 로그아웃
     * @description 제공된 리프레시 토큰을 검증하고, 해당 리프레시 토큰을 삭제하여 로그아웃 처리합니다.
     * @param refreshToken 사용자의 리프레시 토큰
     * @returns Promise<void>
     * @throws {BaseException} 사용자를 찾을 수 없는 경우 USER_ERROR.NOT_FOUND 에러 발생
     */
    async signout(refreshToken: string): Promise<void> {
        // 1. 리프레시 토큰 검증하여 페이로드 추출
        const payload = await this.tokenService.verify(refreshToken, 're')

        // 2. 페이로드의 ID로 사용자 찾기
        const foundUser = await this.prisma.user.findFirst({ where: { id: payload.id, isDeleted: false } })
        // 사용자를 찾을 수 없으면 에러 발생
        if (!foundUser) throw new BaseException(USER_ERROR.NOT_FOUND, this.constructor.name)

        // 3. 해당 리프레시 토큰 삭제
        await this.tokenService.deleteRefreshToken(foundUser.id, Owner.USER, payload.jti)
    }

    /**
     * @summary 토큰 재발급
     * @description 만료된 액세스 토큰을 새로운 액세스 토큰과 리프레시 토큰으로 재발급합니다.
     * @param refreshToken 기존 리프레시 토큰
     * @returns {Promise<{ resDto: RefreshTokenResponseDto; refreshToken: string }>} 새로운 액세스 토큰과 리프레시 토큰을 포함하는 객체
     * @throws {BaseException} 사용자를 찾을 수 없는 경우 USER_ERROR.NOT_FOUND 에러 발생
     * @throws {BaseException} 캐시에 리프레시 토큰이 없는 경우 AUTH_ERROR.MISSING_REFRESH_TOKEN 에러 발생
     * @throws {BaseException} 기존 리프레시 토큰이 유효하지 않은 경우 AUTH_ERROR.INVALID_REFRESH_TOKEN 에러 발생
     */
    async refreshToken(refreshToken: string): Promise<{ resDto: RefreshTokenResponseDto; refreshToken: string }> {
        // 1. 기존 리프레시 토큰 검증하여 페이로드 추출
        const payload = await this.tokenService.verify(refreshToken, 're')

        // 2. 페이로드의 ID로 사용자 찾기
        const foundUser = await this.prisma.user.findFirst({ where: { id: payload.id, isDeleted: false } })
        // 사용자를 찾을 수 없으면 에러 발생
        if (!foundUser) throw new BaseException(USER_ERROR.NOT_FOUND, this.constructor.name)

        // 3. 캐시에서 저장된 리프레시 토큰 가져오기
        const foundCachedToken = await this.tokenService.getRefreshToken(foundUser.id, Owner.USER, payload.jti)
        // 캐시에 토큰이 없으면 에러 발생 (만료되었거나 이미 사용됨)
        if (!foundCachedToken) throw new BaseException(AUTH_ERROR.MISSING_REFRESH_TOKEN, this.constructor.name)

        // 4. 기존 리프레시 토큰과 캐시된 토큰 비교
        const isMatched = await this.cryptoService.compare(refreshToken, foundCachedToken)
        // 토큰이 일치하지 않으면 에러 발생
        if (!isMatched) throw new BaseException(AUTH_ERROR.INVALID_REFRESH_TOKEN, this.constructor.name)

        // 5. 기존 리프레시 토큰 삭제 (일회용 토큰이므로)
        await this.tokenService.deleteRefreshToken(foundUser.id, Owner.USER, payload.jti)

        // 6. 새로운 JTI 생성 및 새 토큰 발급
        const jti = randomUUID()
        const [newAccessToken, newRefreshToken] = await Promise.all([
            this.tokenService.createAccessToken(foundUser.id, Owner.USER, jti),
            this.tokenService.createRefreshToken(foundUser.id, Owner.USER, jti)
        ])

        // 7. 새로운 리프레시 토큰 해싱 및 저장
        const hashedNewRefreshToken = await this.cryptoService.hash(newRefreshToken)
        await this.tokenService.saveRefreshToken(foundUser.id, Owner.USER, jti, hashedNewRefreshToken, this.config.jwtRefreshTokenTtl)

        // 8. 결과 반환
        return {
            resDto: plainToInstance(RefreshTokenResponseDto, { accessToken: newAccessToken }),
            refreshToken: newRefreshToken
        }
    }

    /**
     * @summary 비밀번호 재설정 인증 코드 발급
     * @description 사용자 이메일을 통해 비밀번호 재설정을 위한 인증 코드를 생성하고 캐시에 저장한 후 이메일로 발송합니다.
     * @param reqDto 비밀번호 재설정 초기화 요청 데이터 (이메일)
     * @returns Promise<void>
     */
    async issueCode(reqDto: PasswordResetInitRequestDto): Promise<void> {
        // 1. 이메일 정규화 (공백 제거 및 소문자 변환)
        const normalizedEmail = reqDto.email.trim().toLowerCase()
        // 2. 이메일로 사용자 찾기
        const user = await this.prisma.user.findFirst({ where: { email: normalizedEmail, isDeleted: false } })

        // 사용자가 없으면 코드 발급을 중단하고 종료 (보안상의 이유로 사용자 존재 여부 노출 안 함)
        if (!user) return

        // 3. 비밀번호 재설정 코드 생성
        const code = randomInt(0, 10 ** this.PASSWORD_RESET_CODE_LENGTH) // 지정된 길이의 난수 생성
            .toString()
            .padStart(this.PASSWORD_RESET_CODE_LENGTH, '0') // 지정된 길이만큼 앞에 '0' 채우기

        // 4. 캐시에 저장할 코드 데이터 객체 생성
        const codeData: PasswordResetCodeData = {
            code,
            expiresAt: Date.now() + this.PASSWORD_RESET_CODE_TTL, // 현재 시간 + TTL
            attempts: 0 // 시도 횟수 초기화
        }

        // 5. 캐시에 코드 데이터 저장 (키: `password-reset:code:userId`, 값: JSON 문자열, 만료 시간: TTL)
        await this.cacheManager.set(`${this.PASSWORD_RESET_CODE_PREFIX}${user.id}`, JSON.stringify(codeData), this.PASSWORD_RESET_CODE_TTL)
        // 6. 사용자 이메일로 인증 코드 발송
        await this.sendVerificationEmail(user.email, code)
    }

    /**
     * @summary 인증 코드 확인 및 리셋 토큰 발급
     * @description 사용자가 입력한 인증 코드를 확인하고, 올바르면 비밀번호 재설정 토큰을 발급합니다.
     * @param reqDto 비밀번호 재설정 확인 요청 데이터 (이메일, OTP 코드)
     * @returns {Promise<PasswordResetVerifyResponseDto>} 비밀번호 재설정 토큰을 포함하는 객체
     * @throws {BaseException} 인증 코드가 유효하지 않거나 사용자를 찾을 수 없는 경우 AUTH_ERROR.VERIFICATION_CODE_INVALID 에러 발생
     * @throws {BaseException} 인증 코드가 만료된 경우 AUTH_ERROR.VERIFICATION_CODE_EXPIRED 에러 발생
     * @throws {BaseException} 인증 코드 시도 횟수가 초과된 경우 AUTH_ERROR.VERIFICATION_CODE_MAX_ATTEMPTS_REACHED 에러 발생
     */
    async verifyCode(reqDto: PasswordResetVerifyRequestDto): Promise<PasswordResetVerifyResponseDto> {
        // 1. 이메일 정규화
        const normalizedEmail = reqDto.email.trim().toLowerCase()
        // 2. 이메일로 사용자 찾기
        const user = await this.prisma.user.findFirst({ where: { email: normalizedEmail, isDeleted: false } })

        // 3. 사용자가 없으면 지연 후 에러 발생 (보안상의 이유로 사용자 존재 여부 노출 방지)
        if (!user) {
            await new Promise((resolve) => setTimeout(resolve, 100 + Math.random() * 200)) // 봇 공격 방지를 위한 지연
            throw new BaseException(AUTH_ERROR.VERIFICATION_CODE_INVALID, this.constructor.name)
        }

        // 4. 캐시 키 생성 및 저장된 코드 데이터 가져오기
        const codeKey = `${this.PASSWORD_RESET_CODE_PREFIX}${user.id}`
        const storedData = await this.cacheManager.get<string>(codeKey)

        // 5. 저장된 데이터가 없으면 코드 만료 에러 발생
        if (!storedData) {
            throw new BaseException(AUTH_ERROR.VERIFICATION_CODE_EXPIRED, this.constructor.name)
        }

        // 6. JSON 문자열을 PasswordResetCodeData 객체로 파싱
        const codeData: PasswordResetCodeData = JSON.parse(storedData)

        // 7. 코드 만료 시간 확인
        if (Date.now() > codeData.expiresAt) {
            await this.cacheManager.del(codeKey) // 만료된 코드 캐시에서 삭제
            throw new BaseException(AUTH_ERROR.VERIFICATION_CODE_EXPIRED, this.constructor.name)
        }

        // 8. 최대 시도 횟수 확인
        if (codeData.attempts >= this.PASSWORD_RESET_CODE_MAX_ATTEMPTS) {
            await this.cacheManager.del(codeKey) // 최대 시도 횟수 초과 시 코드 캐시에서 삭제
            throw new BaseException(AUTH_ERROR.VERIFICATION_CODE_MAX_ATTEMPTS_REACHED, this.constructor.name)
        }

        // 9. 입력된 OTP 코드와 저장된 코드 유효성 검사
        const isValid = this.validateCode(reqDto.otp, codeData.code)

        // 10. 코드가 유효하지 않으면 시도 횟수 증가 및 에러 발생
        if (!isValid) {
            codeData.attempts += 1
            await this.cacheManager.set(codeKey, JSON.stringify(codeData), this.PASSWORD_RESET_CODE_TTL) // 업데이트된 코드 데이터 캐시에 저장
            throw new BaseException(AUTH_ERROR.VERIFICATION_CODE_INVALID, this.constructor.name)
        }

        // 11. 코드가 유효하면 캐시에서 코드 삭제
        await this.cacheManager.del(codeKey)

        // 12. 비밀번호 재설정 토큰 생성 및 캐시에 저장
        const resetToken = randomBytes(16).toString('hex') // 16바이트 랜덤 토큰 생성
        await this.cacheManager.set(`${this.PASSWORD_RESET_TOKEN_PREFIX}${resetToken}`, user.id, this.PASSWORD_RESET_TOKEN_TTL)

        // 13. 재설정 토큰 반환
        return plainToInstance(PasswordResetVerifyResponseDto, { resetToken })
    }

    /**
     * @summary 비밀번호 재설정
     * @description 제공된 재설정 토큰과 새로운 비밀번호를 사용하여 사용자 비밀번호를 업데이트합니다.
     * @param reqDto 비밀번호 재설정 확인 요청 데이터 (리셋 토큰, 새로운 비밀번호)
     * @returns Promise<void>
     * @throws {BaseException} 재설정 토큰이 유효하지 않은 경우 AUTH_ERROR.INVALID_RESET_TOKEN 에러 발생
     * @throws {BaseException} 사용자를 찾을 수 없는 경우 USER_ERROR.NOT_FOUND 에러 발생
     */
    async resetPassword(reqDto: PasswordResetConfirmRequestDto): Promise<void> {
        const { resetToken, newPassword } = reqDto

        // 1. 캐시에서 재설정 토큰에 해당하는 사용자 ID 가져오기
        const tokenKey = `${this.PASSWORD_RESET_TOKEN_PREFIX}${resetToken}`
        const userId = await this.cacheManager.get<number>(tokenKey)

        // 2. 사용자 ID가 없으면 유효하지 않은 토큰 에러 발생
        if (!userId) {
            throw new BaseException(AUTH_ERROR.INVALID_RESET_TOKEN, this.constructor.name)
        }

        // 3. 사용자 ID로 사용자 찾기
        const user = await this.prisma.user.findFirst({ where: { id: userId, isDeleted: false } })
        // 사용자를 찾을 수 없으면 에러 발생
        if (!user) {
            throw new BaseException(USER_ERROR.NOT_FOUND, this.constructor.name)
        }

        // 4. 새로운 비밀번호 해싱
        const hashedPassword = await this.cryptoService.hash(newPassword)

        // 5. 캐시에서 재설정 토큰 삭제 및 사용자 비밀번호 업데이트
        await this.cacheManager.del(tokenKey)
        await this.prisma.user.update({
            where: { id: user.id },
            data: { password: hashedPassword }
        })

        // 6. 해당 사용자의 모든 리프레시 토큰 삭제 (보안 강화)
        await this.tokenService.deleteAllRefreshTokens(user.id, Owner.USER)
    }

    private validateCode(input: string, stored: string): boolean {
        try {
            // 1. 입력된 코드와 저장된 코드를 Buffer로 변환 (바이트 단위 비교를 위함)
            const inputBuffer = Buffer.from(input, 'utf8')
            const storedBuffer = Buffer.from(stored, 'utf8')

            // 2. 버퍼 길이가 다르면 false 반환 (시간 공격 방지)
            if (inputBuffer.length !== storedBuffer.length) return false
            // 3. timingSafeEqual을 사용하여 두 버퍼를 시간 공격에 안전하게 비교
            return timingSafeEqual(inputBuffer, storedBuffer)
        } catch {
            // 버퍼 변환 중 오류 발생 시 (예: 유효하지 않은 입력) false 반환
            return false
        }
    }

    /**
     * @summary 인증 이메일 발송 (내부 도우미 함수)
     * @description 사용자에게 비밀번호 재설정 인증 코드를 포함한 이메일을 발송합니다.
     *              (현재는 TODO 상태이며, 실제 이메일 발송 로직 구현 필요)
     * @param email 수신자 이메일 주소
     * @param code 발송할 인증 코드
     * @returns Promise<void>
     */
    private async sendVerificationEmail(email: string, code: string): Promise<void> {
        // TODO: 실제 이메일 서비스 구현 (예: Nodemailer, SendGrid 등 연동)
    }
}
