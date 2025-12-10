import { CurrentUser } from '@libs/common/decorator/jwt-payload.decorator'
import { type JwtPayload } from '@libs/common/type/jwt-payload.type'
import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common'
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { UserResponseDto } from './dto/user-response.dto'
import { UserUpdateDto } from './dto/user-update.dto'
import { UserService } from './user.service'
import { UserCreateDto } from './dto/user-create.dto'

@ApiTags('user')
@ApiBearerAuth('JWT-Auth')
@Controller({ version: '1' })
export class UserController {
    constructor(private readonly service: UserService) {}

    @ApiOperation({
        summary: '회원 생성',
        description: '회원 생성'
    })
    @ApiBody({ type: UserCreateDto })
    @ApiOkResponse()
    @Post()
    async createUser(@Body() reqDto: UserCreateDto): Promise<void> {
        // return await this.service.createUser(reqDto)
    }

    @ApiOperation({
        summary: '내 정보 조회',
        description: '내 정보 조회'
    })
    @ApiOkResponse({ type: UserResponseDto })
    @Get('me')
    async findMe(@CurrentUser() payload: JwtPayload): Promise<UserResponseDto> {
        return await this.service.getMe(payload)
    }

    @ApiOperation({
        summary: '내 정보 수정',
        description: '내 정보 수정'
    })
    @ApiBody({ type: UserUpdateDto })
    @ApiOkResponse()
    @Patch('me')
    async updateMe(@CurrentUser() payload: JwtPayload, @Body() reqDto: UserUpdateDto): Promise<void> {
        return await this.service.updateMe(payload, reqDto)
    }

    @ApiOperation({
        summary: '회원 탈퇴',
        description: '회원 탈퇴 (Soft Delete)'
    })
    @ApiOkResponse()
    @Delete('me')
    async deleteMe(@CurrentUser() payload: JwtPayload): Promise<void> {
        return await this.service.deleteMe(payload)
    }
}
