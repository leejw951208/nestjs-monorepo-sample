import { CurrentUser } from '@libs/common/decorator/jwt-payload.decorator'
import { type JwtPayload } from '@libs/common/util/jwt.util'
import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { CreateNotificationRequestDto } from './dto/notification-create-request.dto'
import { NotificationPaginationRequestDto } from './dto/notification-pagination-request.dto'
import { NotificationResponseDto } from './dto/notification-response.dto'
import { NotificationService } from './notification.service'
import { ApiOkOffsetPaginationResponse } from '@libs/common/decorator/api-page-ok-response.decorator'
import { OffsetPaginationResDto } from '@libs/common/dto/pagination-response.dto'

@ApiTags('Notification')
@ApiBearerAuth()
@Controller('notification')
export class NotificationController {
    constructor(private readonly notificationService: NotificationService) {}

    @ApiOperation({ summary: '알림 발송' })
    @Post()
    async createNotification(@CurrentUser() user: JwtPayload, @Body() dto: CreateNotificationRequestDto): Promise<void> {
        return await this.notificationService.createNotification(user.id, dto)
    }

    @ApiOperation({ summary: '알림 목록 조회' })
    @ApiOkOffsetPaginationResponse({ type: NotificationResponseDto })
    @Get()
    async getNotifications(@Query() dto: NotificationPaginationRequestDto): Promise<OffsetPaginationResDto<NotificationResponseDto>> {
        return await this.notificationService.getNotifications(dto)
    }
}
