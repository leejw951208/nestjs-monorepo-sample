import { OffsetPaginationReqDto } from '@libs/common/dto/pagination-req.dto'
import { ApiProperty } from '@nestjs/swagger'
import { NotificationType, Owner } from '@prisma/client'
import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator'

export class NotificationPaginationReqDto extends OffsetPaginationReqDto {
    @ApiProperty({ required: false, description: '수신자 ID', example: 1 })
    @IsOptional()
    @IsInt()
    userId?: number

    @ApiProperty({ required: false, enum: NotificationType, description: '알림 유형', example: NotificationType.SYSTEM })
    @IsOptional()
    @IsEnum(NotificationType)
    type?: NotificationType

    @ApiProperty({ required: false, description: '검색 키워드 (제목 또는 내용)', example: 'test' })
    @IsOptional()
    @IsString()
    keyword?: string
}
