import { CursorPaginationReqDto } from '@libs/common/dto/pagination-req.dto'
import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'

export class PostCursorPaginationReqDto extends CursorPaginationReqDto {
    @ApiProperty({ type: String, required: false, description: '게시글 제목', example: '공지사항' })
    @IsOptional()
    @IsString()
    title?: string
}
