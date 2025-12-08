import { CurrentUser } from '@libs/common/decorator/jwt-payload.decorator'
import { type JwtPayload } from '@libs/common/utils/jwt.util'
import { Body, Controller, Delete, Get, Patch } from '@nestjs/common'
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { UserResDto } from './dto/user-res.dto'
import { UserUpdateDto } from './dto/user-update.dto'
import { UserService } from './user.service'

@ApiTags('user')
@ApiBearerAuth('JWT-Auth')
@Controller({ version: '1' })
export class UserController {
    constructor(private readonly service: UserService) {}

    @ApiOperation({
        summary: '내 정보 조회',
        description: '내 정보 조회'
    })
    @ApiOkResponse({ type: UserResDto })
    @Get('me')
    async findMe(@CurrentUser() payload: JwtPayload): Promise<UserResDto> {
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
