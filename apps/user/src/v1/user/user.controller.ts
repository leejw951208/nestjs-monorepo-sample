import {
    ApiAuthGuard,
    ApiExceptionResponse,
    ApiOkBaseResponse,
    CurrentUser,
    CustomThrottlerGuard,
    type JwtPayload,
    USER_ERROR
} from '@libs/common'
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Patch, UseGuards } from '@nestjs/common'
import { ApiBody, ApiNoContentResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { UserResponseDto } from './dto/user-response.dto'
import { UserUpdateDto } from './dto/user-update.dto'
import { UserService } from './user.service'
import { Throttle } from '@nestjs/throttler'

@ApiTags('users')
@ApiAuthGuard()
@UseGuards(CustomThrottlerGuard)
@Controller({ path: 'users', version: '1' })
export class UserController {
    constructor(private readonly service: UserService) {}

    @ApiOperation({ summary: '내 정보 조회' })
    @ApiOkBaseResponse({ type: UserResponseDto })
    @ApiExceptionResponse(USER_ERROR.NOT_FOUND)
    @Throttle({ ip: { limit: 5, ttl: 60000 }, user: { limit: 5, ttl: 60000 } })
    @Get('me')
    async getMe(@CurrentUser() payload: JwtPayload): Promise<UserResponseDto> {
        return await this.service.getMe(payload.id)
    }

    @ApiOperation({ summary: '내 정보 수정' })
    @ApiBody({ type: UserUpdateDto })
    @ApiNoContentResponse({ description: '수정 성공' })
    @ApiExceptionResponse(USER_ERROR.NOT_FOUND)
    @HttpCode(HttpStatus.NO_CONTENT)
    @Patch('me')
    async updateMe(@CurrentUser() payload: JwtPayload, @Body() reqDto: UserUpdateDto): Promise<void> {
        await this.service.updateMe(payload.id, reqDto)
    }

    @ApiOperation({ summary: '회원 탈퇴 (Soft Delete)' })
    @ApiNoContentResponse({ description: '탈퇴 성공' })
    @ApiExceptionResponse([USER_ERROR.NOT_FOUND, USER_ERROR.ALREADY_DELETED])
    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete('me')
    async deleteMe(@CurrentUser() payload: JwtPayload): Promise<void> {
        await this.service.withdraw(payload.id)
    }
}
