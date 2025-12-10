import { OffsetPaginationRequestDto } from '@libs/common/dto/pagination-request.dto'
import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'

export class PostOffsetPaginationReqDto extends OffsetPaginationRequestDto {
    @ApiProperty({ type: String, required: false, description: '게시글 제목 검색', example: '공지사항' })
    @IsOptional()
    @IsString()
    title?: string
}
