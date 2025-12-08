import { Public } from '@libs/common/decorator/public.decorator'
import { BaseException } from '@libs/common/exception/base.exception'
import { AUTH_ERROR } from '@libs/common/exception/error.code'
import { JwtRefreshGuard } from '@libs/common/guard/jwt-refresh.guard'
import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import type { Request, Response } from 'express'
import { AuthService } from './auth.service'
import { RefreshTokenResDto } from './dto/refresh-token-res.dto'
import { ResetPasswordReqDto } from './dto/reset-password-req.dto'
import { SigninReqDto } from './dto/signin-req.dto'
import { SigninResDto } from './dto/signin-res.dto'
import { SignupReqDto } from './dto/signup-req.dto'

@ApiTags('auth')
@ApiBearerAuth('JWT-Auth')
@Controller({ version: '1' })
export class AuthController {
    constructor(private readonly service: AuthService) {}

    @ApiOperation({ summary: '회원가입' })
    @ApiBody({ type: SignupReqDto })
    @ApiOkResponse()
    @Public()
    @Post('signup')
    async signup(@Body() reqDto: SignupReqDto): Promise<void> {
        return this.service.signup(reqDto)
    }

    @ApiOperation({
        summary: '로그인',
        description: '리프레시 토큰은 무조건 쿠키에 저장하고, 앱은 쿠키에 저장된 리프레시 토큰을 읽어 필요시 헤더로 전달'
    })
    @ApiBody({ type: SigninReqDto })
    @ApiOkResponse({ type: SigninResDto })
    @Public()
    @Post('signin')
    async signin(@Body() reqDto: SigninReqDto, @Res({ passthrough: true }) res: Response): Promise<SigninResDto> {
        const result = await this.service.signin(reqDto)
        this.setRefreshToken(res, result.refreshToken)
        return result.resDto
    }

    @ApiOperation({
        summary: '로그아웃',
        description:
            '웹: 서버에서 쿠키에 저장된 리프레시 토큰 사용 / 앱: 헤더에 리프레시 토큰을 담아서 전달하고, 서버에서 헤더를 파싱하여 사용'
    })
    @ApiOkResponse()
    @Post('signout')
    async signout(@Req() req: Request, @Res({ passthrough: true }) res: Response): Promise<void> {
        const refreshToken = this.extractRefreshToken(req)
        this.removeRefreshToken(res)
        return await this.service.signout(refreshToken)
    }

    @ApiOperation({
        summary: '토큰 재발급',
        description:
            '웹: 서버에서 쿠키에 저장된 리프레시 토큰 사용 / 앱: 헤더에 리프레시 토큰을 담아서 전달하고, 서버에서 헤더를 파싱하여 사용'
    })
    @ApiOkResponse({ type: RefreshTokenResDto })
    @UseGuards(JwtRefreshGuard)
    @Public()
    @Post('token/refresh')
    async refreshToken(@Req() req: Request, @Res({ passthrough: true }) res: Response): Promise<RefreshTokenResDto> {
        const refreshToken = this.extractRefreshToken(req)
        const result = await this.service.refreshToken(refreshToken)
        this.setRefreshToken(res, result.refreshToken)
        return result.resDto
    }

    @ApiOperation({
        summary: '비밀번호 재설정',
        description: '이름과 아이디로 회원을 확인한 후 비밀번호를 재설정합니다.'
    })
    @ApiBody({ type: ResetPasswordReqDto })
    @ApiOkResponse()
    @Public()
    @Post('reset-password')
    async resetPassword(@Body() reqDto: ResetPasswordReqDto): Promise<void> {
        return await this.service.resetPassword(reqDto)
    }

    private setRefreshToken(res: Response, refreshToken: string) {
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: true,
            maxAge: 1000 * 60 * 60 * 24 * 7,
            sameSite: 'strict',
            path: '/'
        })
    }

    private removeRefreshToken(res: Response) {
        res.clearCookie('refreshToken', {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            path: '/'
        })
    }

    private extractRefreshToken(req: Request): string {
        const fromCookie = req.cookies?.refreshToken as string | undefined
        if (fromCookie) return fromCookie

        const auth = req.headers.authorization
        const refreshToken = auth?.startsWith('Bearer ') ? auth.slice(7) : undefined
        if (refreshToken) return refreshToken

        throw new BaseException(AUTH_ERROR.MISSING_REFRESH_TOKEN, this.constructor.name)
    }
}
