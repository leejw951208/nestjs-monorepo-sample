import { ApiOkCursorPaginationResponse } from '@libs/common/decorator/api-page-ok-response.decorator'
import { CurrentUser } from '@libs/common/decorator/jwt-payload.decorator'
import { CursorPaginationResDto } from '@libs/common/dto/pagination-response.dto'
import { type JwtPayload } from '@libs/common/type/jwt-payload.type'
import { Controller, Delete, Get, Param, ParseIntPipe, Patch, Query } from '@nestjs/common'
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger'
import { NotificationPaginationRequestDto } from './dto/notification-pagination-request.dto'
import { NotificationService } from './notification.service'
import { NotificationResponseDto } from './dto/notification-response.dto'

@ApiTags('notifications')
@ApiBearerAuth('JWT-Auth')
@Controller({ version: '1' })
export class NotificationController {
    constructor(private readonly service: NotificationService) {}

    @ApiOperation({ summary: '내 알림 목록 조회', description: 'Cursor 기반 페이지네이션으로 알림 목록을 조회합니다.' })
    @ApiOkCursorPaginationResponse({ type: NotificationResponseDto })
    @Get()
    async getMyNotifications(
        @CurrentUser() payload: JwtPayload,
        @Query() query: NotificationPaginationRequestDto
    ): Promise<CursorPaginationResDto<NotificationResponseDto>> {
        return await this.service.getMyNotifications(payload.id, query)
    }

    @ApiOperation({ summary: '알림 상세 조회', description: '특정 알림의 상세 정보를 조회합니다.' })
    @ApiParam({ name: 'id', description: '알림 ID', type: Number })
    @ApiOkResponse({ type: NotificationResponseDto })
    @Get(':id')
    async getNotification(
        @CurrentUser() payload: JwtPayload,
        @Param('id', ParseIntPipe) notificationId: number
    ): Promise<NotificationResponseDto> {
        return await this.service.getNotification(payload.id, notificationId)
    }

    @ApiOperation({ summary: '알림 읽음 처리', description: '특정 알림을 읽음 상태로 변경합니다.' })
    @ApiParam({ name: 'id', description: '알림 ID', type: Number })
    @ApiOkResponse()
    @Patch(':id')
    async updateNotification(@CurrentUser() payload: JwtPayload, @Param('id', ParseIntPipe) notificationId: number): Promise<void> {
        return await this.service.updateNotification(payload.id, notificationId)
    }

    @ApiOperation({
        summary: '모든 알림 읽음 처리',
        description: '로그인한 사용자의 모든 알림을 읽음 처리합니다.'
    })
    @ApiOkResponse()
    @Patch()
    async readAllNotifications(@CurrentUser() payload: JwtPayload): Promise<void> {
        return await this.service.bulkUpdateNotifications(payload.id)
    }

    @ApiOperation({ summary: '알림 삭제', description: '특정 알림을 삭제합니다.' })
    @ApiParam({ name: 'id', description: '알림 ID', type: Number })
    @ApiOkResponse()
    @Delete(':id')
    async deleteNotification(@CurrentUser() payload: JwtPayload, @Param('id', ParseIntPipe) notificationId: number): Promise<void> {
        return await this.service.deleteNotification(payload.id, notificationId)
    }
}
