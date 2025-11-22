import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsIn, IsInt, IsNotEmpty, IsOptional, Min } from 'class-validator'

export class PostListReqDto {
    @ApiProperty({ type: Number, required: true, description: '페이지 번호', example: 1 })
    @IsNotEmpty()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    page: number

    @ApiProperty({ type: Number, required: true, description: '페이지 당 데이터 수', example: 10 })
    @IsNotEmpty()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    size: number

    @ApiProperty({
        type: String,
        name: 'order',
        required: false,
        description: '정렬 방식(asc | desc), 기본: desc',
        example: 'desc'
    })
    @IsOptional()
    @IsIn(['asc', 'desc'])
    order?: 'asc' | 'desc' = 'desc'
}
