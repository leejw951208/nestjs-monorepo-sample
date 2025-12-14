import { type ExtendedPrismaClient, PRISMA_CLIENT } from '@libs/prisma/prisma.factory'
import { Inject, Injectable } from '@nestjs/common'
import { Post, Prisma } from '@prisma/client'
import { PostCursorRequestDto } from './dto/post-cursor-request.dto'
import { PostOffsetRequestDto } from './dto/post-offset-request.dto'

export type PostOffsetResponse = {
    items: Post[]
    totalCount: number
}

export type PostCursorResponse = {
    items: Post[]
    nextCursor: number | null
}

@Injectable()
export class PostRepository {
    constructor(@Inject(PRISMA_CLIENT) private readonly prisma: ExtendedPrismaClient) {}

    async findPostsOffset(searchCondition: PostOffsetRequestDto, userId?: number): Promise<PostOffsetResponse> {
        const where: Prisma.PostWhereInput = {
            isDeleted: false,
            ...(userId && { userId }),
            ...(searchCondition.title && { title: { contains: searchCondition.title } }),
            ...(searchCondition.status && { status: searchCondition.status })
        }

        const [items, totalCount] = await Promise.all([
            this.prisma.post.findMany({
                where,
                orderBy: { id: searchCondition.order },
                skip: (searchCondition.page - 1) * searchCondition.size,
                take: searchCondition.size
            }),
            this.prisma.post.count({ where })
        ])

        return { items, totalCount }
    }

    async findPostsCursor(searchCondition: PostCursorRequestDto, userId?: number): Promise<PostCursorResponse> {
        const where: Prisma.PostWhereInput = {
            isDeleted: false,
            ...(userId && { userId }),
            ...(searchCondition.title && { title: { contains: searchCondition.title } }),
            ...(searchCondition.lastCursor && {
                id: searchCondition.order === 'asc' ? { gt: searchCondition.lastCursor } : { lt: searchCondition.lastCursor }
            })
        }

        const items = await this.prisma.post.findMany({
            where,
            orderBy: { id: searchCondition.order },
            take: searchCondition.size + 1
        })

        const hasNext = items.length > searchCondition.size
        if (hasNext) items.pop()

        const nextCursor = hasNext && items.length > 0 ? items[items.length - 1].id : null

        return { items, nextCursor }
    }
}
