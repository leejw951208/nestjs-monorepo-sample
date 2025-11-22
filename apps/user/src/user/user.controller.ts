import { CurrentUser } from '@libs/common/decorator/jwt-payload.decorator'
import { JwtPayload } from '@libs/common/utils/jwt.util'
import { Body, Controller, Get, Patch } from '@nestjs/common'
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { UserResDto } from './dto/user-res.dto'
import { UserUpdateDto } from './dto/user-update.dto'
import { UserService } from './user.service'

@ApiTags('user')
@ApiBearerAuth('JWT-Auth')
@Controller()
export class UserController {
    constructor(private readonly service: UserService) {}

    @ApiOperation({
        summary: '내 정보 조회',
        description: '내 정보 조회'
    })
    @ApiOkResponse({ type: UserResDto })
    @Get('me')
    async findMe(@CurrentUser() payload: JwtPayload): Promise<UserResDto> {
        return this.service.findMe(payload)
    }

    @ApiOperation({
        summary: '내 정보 수정',
        description: '내 정보 수정'
    })
    @ApiBody({ type: UserUpdateDto })
    @ApiOkResponse()
    @Patch('me')
    async updateMe(@CurrentUser() payload: JwtPayload, @Body() reqDto: UserUpdateDto): Promise<void> {
        return this.service.updateMe(payload, reqDto)
    }

    // @ApiOperation({
    //     summary: '회원 페이지 조회, Offset',
    //     description: '회원 페이지 조회'
    // })
    // @ApiOffsetPageOkResponse(UserResDto)
    // @Get('offset')
    // async findUsers(@Query() query: UserOffsetPageReqDto): Promise<OffsetPageResDto<UserResDto>> {
    //     return this.service.findUsersWithOffset(query)
    // }

    // @ApiOperation({
    //     summary: '회원 페이지 조회, Cursor',
    //     description: '회원 페이지 조회'
    // })
    // @ApiCursorPageOkResponse(UserResDto)
    // @Get('cursor')
    // async findUsersWithCursor(@Query() query: UserCursorPageReqDto): Promise<CursorPageResDto<UserResDto>> {
    //     return this.service.findUsersWithCursor(query)
    // }
}
