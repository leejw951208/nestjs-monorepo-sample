import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsArray, IsBoolean, IsInt, IsOptional } from 'class-validator'

export class NotificationBulkUpdateDto {
    @ApiProperty({ description: '읽음 여부', example: true })
    @IsBoolean()
    isRead: boolean

    @ApiPropertyOptional({ description: '업데이트할 알림 ID 목록 (없으면 전체)', type: [Number], example: [1, 2, 3] })
    @IsOptional()
    @IsArray()
    @IsInt({ each: true })
    ids?: number[]
}
