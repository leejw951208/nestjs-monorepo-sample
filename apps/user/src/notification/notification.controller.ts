import {
    ApiAuthGuard,
    ApiExceptionResponse,
    ApiOkBaseResponse,
    ApiOkCursorPaginationResponse,
    CurrentUser,
    CursorResponseDto,
    NOTIFICATION_ERROR,
    type JwtPayload
} from '@libs/common'
import { Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Query } from '@nestjs/common'
import { ApiNoContentResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger'
import { NotificationCursorRequestDto } from './dto/notification-cursor-request.dto'
import { NotificationResponseDto } from './dto/notification-response.dto'
import { NotificationService } from './notification.service'

@ApiTags('notifications')
@ApiAuthGuard()
@Controller({ path: 'notifications', version: '1' })
export class NotificationController {
    constructor(private readonly service: NotificationService) {}

    @ApiOperation({ summary: '내 알림 목록 조회 (Cursor Pagination)' })
    @ApiOkCursorPaginationResponse({ type: NotificationResponseDto })
    @Get('me/cursor')
    async getMyNotifications(
        @CurrentUser() payload: JwtPayload,
        @Query() searchCondition: NotificationCursorRequestDto
    ): Promise<CursorResponseDto<NotificationResponseDto>> {
        return await this.service.getMyNotifications(searchCondition, payload.id)
    }

    @ApiOperation({ summary: '알림 상세 조회' })
    @ApiParam({ name: 'id', type: Number, description: '알림 ID' })
    @ApiOkBaseResponse({ type: NotificationResponseDto })
    @ApiExceptionResponse(NOTIFICATION_ERROR.NOT_FOUND)
    @Get(':id')
    async getNotification(
        @CurrentUser() payload: JwtPayload,
        @Param('id', ParseIntPipe) notificationId: number
    ): Promise<NotificationResponseDto> {
        return await this.service.getNotification(payload.id, notificationId)
    }

    @ApiOperation({ summary: '알림 읽음 처리' })
    @ApiParam({ name: 'id', type: Number, description: '알림 ID' })
    @ApiNoContentResponse({ description: '읽음 처리 성공' })
    @ApiExceptionResponse(NOTIFICATION_ERROR.NOT_FOUND)
    @HttpCode(HttpStatus.NO_CONTENT)
    @Patch(':id')
    async readNotification(@CurrentUser() payload: JwtPayload, @Param('id', ParseIntPipe) notificationId: number): Promise<void> {
        await this.service.readNotification(payload.id, notificationId)
    }

    @ApiOperation({ summary: '모든 알림 읽음 처리' })
    @ApiNoContentResponse({ description: '전체 읽음 처리 성공' })
    @HttpCode(HttpStatus.NO_CONTENT)
    @Patch('read-all')
    async readAllNotifications(@CurrentUser() payload: JwtPayload): Promise<void> {
        await this.service.readAllNotifications(payload.id)
    }

    @ApiOperation({ summary: '알림 삭제 (Soft Delete)' })
    @ApiParam({ name: 'id', type: Number, description: '알림 ID' })
    @ApiNoContentResponse({ description: '삭제 성공' })
    @ApiExceptionResponse(NOTIFICATION_ERROR.NOT_FOUND)
    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    async deleteNotification(@CurrentUser() payload: JwtPayload, @Param('id', ParseIntPipe) notificationId: number): Promise<void> {
        await this.service.deleteNotification(payload.id, notificationId)
    }
}
