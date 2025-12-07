import { ApiCursorPageOkResponse } from '@libs/common/decorator/api-page-ok-response.decorator'
import { CurrentUser } from '@libs/common/decorator/jwt-payload.decorator'
import { CursorPaginationResDto } from '@libs/common/dto/pagination-res.dto'
import { JwtPayload } from '@libs/common/utils/jwt.util'
import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Query } from '@nestjs/common'
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger'
import { NotificationBulkUpdateDto } from './dto/notification-bulk-update.dto'
import { NotificationCursorPaginationReqDto } from './dto/notification-cursor-pagination-req.dto'
import { NotificationResDto } from './dto/notification-res.dto'
import { NotificationUpdateDto } from './dto/notification-update.dto'
import { NotificationService } from './notification.service'

@ApiTags('notifications')
@ApiBearerAuth('JWT-Auth')
@Controller({ version: '1' })
export class NotificationController {
    constructor(private readonly service: NotificationService) {}

    @ApiOperation({ summary: '내 알림 목록 조회', description: 'Cursor 기반 페이지네이션으로 알림 목록을 조회합니다.' })
    @ApiCursorPageOkResponse({ type: NotificationResDto })
    @ApiResponse({ status: 200, description: '성공' })
    @ApiResponse({ status: 401, description: '인증 실패' })
    @Get()
    async getMyNotifications(
        @CurrentUser() payload: JwtPayload,
        @Query() query: NotificationCursorPaginationReqDto
    ): Promise<CursorPaginationResDto<NotificationResDto>> {
        return this.service.getMyNotifications(payload, query)
    }

    @ApiOperation({ summary: '알림 상세 조회', description: '특정 알림의 상세 정보를 조회합니다.' })
    @ApiParam({ name: 'id', description: '알림 ID', type: Number })
    @ApiOkResponse({ type: NotificationResDto, description: '성공' })
    @ApiResponse({ status: 404, description: '알림을 찾을 수 없음' })
    @Get(':id')
    async getNotification(
        @CurrentUser() payload: JwtPayload,
        @Param('id', ParseIntPipe) notificationId: number
    ): Promise<NotificationResDto> {
        return this.service.getNotification(payload, notificationId)
    }

    @ApiOperation({ summary: '알림 업데이트', description: '알림 상태를 업데이트합니다. (예: 읽음 처리)' })
    @ApiParam({ name: 'id', description: '알림 ID', type: Number })
    @ApiBody({ type: NotificationUpdateDto })
    @ApiResponse({ status: 204, description: '성공' })
    @ApiResponse({ status: 404, description: '알림을 찾을 수 없음' })
    @HttpCode(204)
    @Patch(':id')
    async updateNotification(
        @CurrentUser() payload: JwtPayload,
        @Param('id', ParseIntPipe) notificationId: number,
        @Body() reqDto: NotificationUpdateDto
    ): Promise<void> {
        return this.service.updateNotification(payload, notificationId, reqDto)
    }

    @ApiOperation({
        summary: '알림 대량 업데이트',
        description: '여러 알림을 한 번에 업데이트합니다. IDs를 지정하지 않으면 모든 알림이 업데이트됩니다.'
    })
    @ApiBody({ type: NotificationBulkUpdateDto })
    @ApiOkResponse({
        description: '성공',
        schema: {
            type: 'object',
            properties: {
                updatedCount: { type: 'number', example: 5 }
            }
        }
    })
    @Patch()
    async bulkUpdateNotifications(
        @CurrentUser() payload: JwtPayload,
        @Body() reqDto: NotificationBulkUpdateDto
    ): Promise<{ updatedCount: number }> {
        return this.service.bulkUpdateNotifications(payload, reqDto)
    }

    @ApiOperation({ summary: '알림 삭제', description: '특정 알림을 삭제합니다.' })
    @ApiParam({ name: 'id', description: '알림 ID', type: Number })
    @ApiResponse({ status: 204, description: '성공' })
    @ApiResponse({ status: 404, description: '알림을 찾을 수 없음' })
    @HttpCode(204)
    @Delete(':id')
    async deleteNotification(
        @CurrentUser() payload: JwtPayload,
        @Param('id', ParseIntPipe) notificationId: number
    ): Promise<void> {
        return this.service.deleteNotification(payload, notificationId)
    }
}
