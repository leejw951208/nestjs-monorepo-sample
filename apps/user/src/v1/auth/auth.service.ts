import { BaseException } from '@libs/common/exception/base.exception'
import { AUTH_ERROR, USER_ERROR } from '@libs/common/exception/error.code'
import { BcryptUtil } from '@libs/common/utils/bcrypt.util'
import { JwtUtil } from '@libs/common/utils/jwt.util'
import { UserModel } from '@libs/models/user/user.model'
import { type ExtendedPrismaClient, PRISMA_CLIENT } from '@libs/prisma/prisma.factory'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Inject, Injectable } from '@nestjs/common'
import { UserStatus } from '@prisma/client'
import { type Cache } from 'cache-manager'
import { plainToInstance } from 'class-transformer'
import { randomUUID } from 'crypto'
import { ClsService } from 'nestjs-cls'
import { UserResponseDto } from '../user/dto/user-response.dto'
import { RefreshTokenResponseDto } from './dto/refresh-token-response.dto'
import { ResetPasswordRequestDto } from './dto/reset-password-request.dto'
import { SigninRequestDto } from './dto/signin-request.dto'
import { SigninResponseDto } from './dto/signin-response.dto'
import { SignupRequestDto } from './dto/signup-request.dto'

@Injectable()
export class AuthService {
    constructor(
        @Inject(CACHE_MANAGER)
        private readonly cacheManager: Cache,
        @Inject(PRISMA_CLIENT) private readonly prisma: ExtendedPrismaClient,
        private readonly bcryptUtil: BcryptUtil,
        private readonly jwtUtil: JwtUtil,
        private readonly cls: ClsService
    ) {}

    async signup(reqDto: SignupRequestDto): Promise<void> {
        // 이메일 중복 검사
        const foundUser = await this.prisma.user.findUnique({
            where: { email: reqDto.email }
        })
        if (foundUser) throw new BaseException(USER_ERROR.ALREADY_EXISTS_EMAIL, this.constructor.name)

        const hashedPassword = await this.bcryptUtil.hash(reqDto.password)
        const createdUser = UserModel.create({
            ...reqDto,
            password: hashedPassword,
            status: UserStatus.ACTIVE
        })
        await this.prisma.user.create({ data: createdUser })
    }

    async signin(reqDto: SigninRequestDto): Promise<{ resDto: SigninResponseDto; refreshToken: string }> {
        // 회원 조회
        const foundUser = await this.prisma.user.findUnique({ where: { email: reqDto.email } })
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

        // Redis에 리프레시 토큰 저장
        const hashedRefreshToken = await this.bcryptUtil.hash(refreshToken)
        await this.cacheManager.set(`rt:${jti}`, hashedRefreshToken, 1000 * 60 * 60 * 24 * 7)

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
        const foundUser = await this.prisma.user.findFirst({ where: { id: payload.id } })
        if (!foundUser) throw new BaseException(USER_ERROR.NOT_FOUND, this.constructor.name)

        // Redis에 저장된 리프레시 토큰 삭제
        await this.cacheManager.del(`rt:${payload.jti}`)
    }

    async refreshToken(refreshToken: string): Promise<{ resDto: RefreshTokenResponseDto; refreshToken: string }> {
        // 토큰 검증 및 페이로드 추출
        const payload = await this.jwtUtil.verify(refreshToken, 're')

        // 회원 정보 조회
        const foundUser = await this.prisma.user.findFirst({ where: { id: payload.id } })
        if (!foundUser) throw new BaseException(USER_ERROR.NOT_FOUND, this.constructor.name)

        // Redis에 저장된 리프레시 토큰 조회
        const foundCachedToken = await this.cacheManager.get<string>(`rt:${payload.jti}`)
        if (!foundCachedToken) throw new BaseException(AUTH_ERROR.MISSING_REFRESH_TOKEN, this.constructor.name)

        // 리프레시 토큰 비교
        const isMatched = await this.bcryptUtil.compare(refreshToken, foundCachedToken)
        if (!isMatched) throw new BaseException(AUTH_ERROR.INVALID_REFRESH_TOKEN, this.constructor.name)

        // 기존 리프레시 토큰 삭제
        await this.cacheManager.del(`rt:${payload.jti}`)

        // 새로운 토큰 생성
        const jti = randomUUID()
        const [newAccessToken, newRefreshToken] = await Promise.all([
            this.jwtUtil.createAccessToken(foundUser, 'api', jti),
            this.jwtUtil.createRefreshToken(foundUser, 'api', jti)
        ])

        // Redis에 새로운 리프레시 토큰 저장
        const hashedNewRefreshToken = await this.bcryptUtil.hash(newRefreshToken)
        await this.cacheManager.set(`rt:${jti}`, hashedNewRefreshToken, 1000 * 60 * 60 * 24 * 7)

        return {
            resDto: plainToInstance(RefreshTokenResponseDto, { accessToken: newAccessToken }),
            refreshToken: newRefreshToken
        }
    }

    async resetPassword(reqDto: ResetPasswordRequestDto): Promise<void> {
        // 이름과 이메일로 회원 조회
        const foundUser = await this.prisma.user.findFirst({
            where: {
                email: reqDto.email,
                name: reqDto.name,
                isDeleted: false
            }
        })

        // 회원 정보가 일치하지 않으면 에러
        if (!foundUser) throw new BaseException(USER_ERROR.VERIFICATION_FAILED, this.constructor.name)

        // 새 비밀번호 해싱
        const hashedPassword = await this.bcryptUtil.hash(reqDto.newPassword)

        // 비밀번호 업데이트
        await this.prisma.user.update({
            where: { id: foundUser.id },
            data: { password: hashedPassword }
        })
    }
}
