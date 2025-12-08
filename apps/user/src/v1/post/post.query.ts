import { type ExtendedPrismaClient, PRISMA_CLIENT } from '@libs/prisma/prisma.factory'
import { Inject, Injectable } from '@nestjs/common'
import { PostStatus, Prisma } from '@prisma/client'
import { PostCursorPaginationReqDto } from './dto/post-cursor-pagination-req.dto'
import { PostOffsetPaginationReqDto } from './dto/post-offset-pagination-req.dto'

@Injectable()
export class PostQuery {
    constructor(@Inject(PRISMA_CLIENT) private readonly prisma: ExtendedPrismaClient) {}

    async getPostsOffset(searchCondition: PostOffsetPaginationReqDto, userId?: number) {
        const skip = (searchCondition.page - 1) * searchCondition.size
        const order = searchCondition.order === 'asc' ? 'asc' : 'desc'

        const where: Prisma.PostWhereInput = {
            userId,
            status: PostStatus.PUBLISHED,
            isDeleted: false,
            ...(searchCondition.title && { title: { contains: searchCondition.title } })
        }

        const [items, totalCount] = await Promise.all([
            this.prisma.post.findMany({
                where,
                orderBy: { id: order },
                skip,
                take: searchCondition.size
            }),
            this.prisma.post.count({ where })
        ])

        return { items, totalCount }
    }

    async getPostsCursor(searchCondition: PostCursorPaginationReqDto, userId?: number) {
        const order = searchCondition.order === 'asc' ? 'asc' : 'desc'

        // Cursor 조건: lastCursor가 있으면 해당 ID 이후/이전 데이터 조회
        const cursorCondition: Prisma.PostWhereInput = searchCondition.lastCursor
            ? order === 'desc'
                ? { id: { lt: searchCondition.lastCursor } }
                : { id: { gt: searchCondition.lastCursor } }
            : {}

        const where: Prisma.PostWhereInput = {
            userId,
            status: PostStatus.PUBLISHED,
            isDeleted: false,
            ...(searchCondition.title && { title: { contains: searchCondition.title } }),
            ...cursorCondition
        }

        // size + 1개 조회하여 다음 페이지 존재 여부 확인
        const items = await this.prisma.post.findMany({
            where,
            orderBy: { id: order },
            take: searchCondition.size + 1
        })

        // 다음 페이지가 있는지 확인
        const hasMore = items.length > searchCondition.size
        const data = hasMore ? items.slice(0, searchCondition.size) : items
        const nextCursor = hasMore && data.length > 0 ? data[data.length - 1].id : null

        return { items: data, nextCursor }
    }
}
