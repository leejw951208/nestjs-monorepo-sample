import { ApiProperty } from '@nestjs/swagger'

export class OffsetPaginationResDto<T> {
    @ApiProperty({ type: [Object], required: true, description: '데이터 목록' })
    data: T[]

    @ApiProperty({ type: Number, required: false, description: '현재 페이지 번호', example: 2 })
    page: number

    @ApiProperty({ type: Number, required: true, description: '전체 데이터 수', example: 101 })
    totalCount: number

    constructor(data: T[], page: number, totalCount: number) {
        this.data = data
        this.page = page
        this.totalCount = totalCount
    }
}

export class CursorPaginationResDto<T> {
    @ApiProperty({ type: [Object], required: true, description: '데이터 목록' })
    data: T[]

    @ApiProperty({ type: Number, required: false, description: '다음 페이지 항목 PK (null이면 마지막 페이지)', example: '5' })
    nextCursor: number | null

    constructor(data: T[], nextCursor: number | null) {
        this.data = data
        this.nextCursor = nextCursor
    }
}
