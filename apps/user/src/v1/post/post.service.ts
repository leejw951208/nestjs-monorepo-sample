import { CursorPaginationResDto, OffsetPaginationResDto } from '@libs/common/dto/pagination-res.dto'
import { BaseException } from '@libs/common/exception/base.exception'
import { POST_ERROR } from '@libs/common/exception/error.code'
import { type JwtPayload } from '@libs/common/utils/jwt.util'
import { type ExtendedPrismaClient, PRISMA_CLIENT } from '@libs/prisma/prisma.factory'
import { Inject, Injectable } from '@nestjs/common'
import { PostStatus } from '@prisma/client'
import { plainToInstance } from 'class-transformer'
import { PostCreateDto } from './dto/post-create.dto'
import { PostCursorPaginationReqDto } from './dto/post-cursor-pagination-req.dto'
import { PostOffsetPaginationReqDto } from './dto/post-offset-pagination-req.dto'
import { PostResDto } from './dto/post-res.dto'
import { PostUpdateDto } from './dto/post-update.dto'
import { PostQuery } from './post.query'

@Injectable()
export class PostService {
    constructor(
        @Inject(PRISMA_CLIENT) private readonly prisma: ExtendedPrismaClient,
        private readonly postQuery: PostQuery
    ) {}

    async savePost(payload: JwtPayload, reqDto: PostCreateDto): Promise<PostResDto> {
        const userId = payload.id
        const createdPost = await this.prisma.post.create({
            data: {
                title: reqDto.title,
                content: reqDto.content,
                userId,
                status: reqDto.status || PostStatus.PUBLISHED,
                createdBy: userId
            }
        })

        return plainToInstance(PostResDto, createdPost, { excludeExtraneousValues: true })
    }

    async getPost(payload: JwtPayload, postId: number): Promise<PostResDto> {
        const post = await this.prisma.post.findFirst({
            where: {
                id: postId,
                isDeleted: false
            }
        })

        if (!post) {
            throw new BaseException(POST_ERROR.NOT_FOUND, this.constructor.name)
        }

        // 조회수 증가 (soft delete 체크 포함)
        const updatedPost = await this.prisma.post.update({
            where: {
                id: postId,
                isDeleted: false
            },
            data: { viewCount: { increment: 1 } },
            select: { viewCount: true }
        })

        return plainToInstance(PostResDto, { ...post, viewCount: updatedPost.viewCount }, { excludeExtraneousValues: true })
    }

    async getPostsOffset(searchCondition: PostOffsetPaginationReqDto): Promise<OffsetPaginationResDto<PostResDto>> {
        const { items, totalCount } = await this.postQuery.getPostsOffset(searchCondition)
        return new OffsetPaginationResDto(
            plainToInstance(PostResDto, items, { excludeExtraneousValues: true }),
            searchCondition.page,
            totalCount
        )
    }

    async getPostsCursor(searchCondition: PostCursorPaginationReqDto): Promise<CursorPaginationResDto<PostResDto>> {
        const { items, nextCursor } = await this.postQuery.getPostsCursor(searchCondition)
        return new CursorPaginationResDto(plainToInstance(PostResDto, items, { excludeExtraneousValues: true }), nextCursor)
    }

    async getMyPostsOffset(payload: JwtPayload, searchCondition: PostOffsetPaginationReqDto): Promise<OffsetPaginationResDto<PostResDto>> {
        const userId = payload.id
        const { items, totalCount } = await this.postQuery.getPostsOffset(searchCondition, userId)
        return new OffsetPaginationResDto(
            plainToInstance(PostResDto, items, { excludeExtraneousValues: true }),
            searchCondition.page,
            totalCount
        )
    }

    async getMyPostsCursor(payload: JwtPayload, searchCondition: PostCursorPaginationReqDto): Promise<CursorPaginationResDto<PostResDto>> {
        const userId = payload.id
        const { items, nextCursor } = await this.postQuery.getPostsCursor(searchCondition, userId)
        return new CursorPaginationResDto(plainToInstance(PostResDto, items, { excludeExtraneousValues: true }), nextCursor)
    }

    async updateMyPost(payload: JwtPayload, postId: number, reqDto: PostUpdateDto): Promise<void> {
        const userId = payload.id
        const post = await this.prisma.post.findFirst({
            where: {
                id: postId
            }
        })

        if (!post) {
            throw new BaseException(POST_ERROR.NOT_FOUND, this.constructor.name)
        }

        if (post.userId !== userId) {
            throw new BaseException(POST_ERROR.FORBIDDEN, this.constructor.name)
        }

        await this.prisma.post.update({
            where: { id: postId },
            data: {
                ...reqDto,
                updatedBy: userId
            }
        })
    }

    async deleteMyPost(payload: JwtPayload, postId: number): Promise<void> {
        const userId = payload.id
        const post = await this.prisma.post.findFirst({
            where: {
                id: postId
            }
        })

        if (!post) {
            throw new BaseException(POST_ERROR.NOT_FOUND, this.constructor.name)
        }

        if (post.userId !== userId) {
            throw new BaseException(POST_ERROR.FORBIDDEN, this.constructor.name)
        }

        await this.prisma.post.softDelete({
            where: { id: postId }
        })
    }
}
