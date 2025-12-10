import { CursorPaginationReqDto } from '@libs/common/dto/pagination-request.dto'
import { ApiProperty } from '@nestjs/swagger'
import { NotificationType } from '@prisma/client'
import { IsBoolean, IsEnum, IsOptional } from 'class-validator'
import { Transform } from 'class-transformer'

export class NotificationPaginationRequestDto extends CursorPaginationReqDto {
    @ApiProperty({ type: Boolean, required: false, description: '읽음 여부 필터', example: false })
    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    isRead?: boolean

    @ApiProperty({
        enum: NotificationType,
        required: false,
        description: '알림 타입 필터',
        example: NotificationType.SYSTEM
    })
    @IsOptional()
    @IsEnum(NotificationType)
    type?: NotificationType
}
