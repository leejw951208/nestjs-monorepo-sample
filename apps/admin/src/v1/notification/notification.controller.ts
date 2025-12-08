import { CurrentUser } from '@libs/common/decorator/jwt-payload.decorator'
import { type JwtPayload } from '@libs/common/utils/jwt.util'
import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { CreateNotificationReqDto } from './dto/notification-create-req.dto'
import { NotificationPaginationReqDto } from './dto/notification-pagination-req.dto'
import { NotificationResDto } from './dto/notification-res.dto'
import { NotificationService } from './notification.service'
import { ApiOffsetPageOkResponse } from '@libs/common/decorator/api-page-ok-response.decorator'
import { OffsetPaginationResDto } from '@libs/common/dto/pagination-res.dto'

@ApiTags('Notification')
@ApiBearerAuth()
@Controller('notification')
export class NotificationController {
    constructor(private readonly notificationService: NotificationService) {}

    @ApiOperation({ summary: '알림 발송' })
    @Post()
    async createNotification(@CurrentUser() user: JwtPayload, @Body() dto: CreateNotificationReqDto): Promise<void> {
        return await this.notificationService.createNotification(user.id, dto)
    }

    @ApiOperation({ summary: '알림 목록 조회' })
    @ApiOffsetPageOkResponse({ type: NotificationResDto })
    @Get()
    async getNotifications(@Query() dto: NotificationPaginationReqDto): Promise<OffsetPaginationResDto<NotificationResDto>> {
        return await this.notificationService.getNotifications(dto)
    }
}
