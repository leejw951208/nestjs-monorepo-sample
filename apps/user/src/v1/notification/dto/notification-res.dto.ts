import { ApiProperty } from '@nestjs/swagger'
import { NotificationType } from '@prisma/client'
import { Expose } from 'class-transformer'

export class NotificationResDto {
    @ApiProperty({ type: Number, description: '알림 ID', example: 1 })
    @Expose()
    id: number

    @ApiProperty({ type: String, description: '알림 제목', example: '새 알림' })
    @Expose()
    title: string

    @ApiProperty({ type: String, description: '알림 내용', example: '새로운 알림이 도착했습니다.' })
    @Expose()
    content: string

    @ApiProperty({ enum: NotificationType, description: '알림 타입', example: NotificationType.SYSTEM })
    @Expose()
    type: NotificationType

    @ApiProperty({ type: Boolean, description: '읽음 여부', example: false })
    @Expose()
    isRead: boolean

    @ApiProperty({ type: Date, required: false, description: '읽은 시간', example: null })
    @Expose()
    readAt: Date | null

    @ApiProperty({ type: Date, description: '생성 시간', example: '2025-12-07T00:00:00.000Z' })
    @Expose()
    createdAt: Date
}
