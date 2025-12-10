import { CursorPaginationResDto, OffsetPaginationResDto } from '@libs/common/dto/pagination-response.dto'
import { BaseException } from '@libs/common/exception/base.exception'
import { POST_ERROR } from '@libs/common/exception/error.code'
import { type JwtPayload } from '@libs/common/type/jwt-payload.type'
import { type ExtendedPrismaClient, PRISMA_CLIENT } from '@libs/prisma/prisma.factory'
import { Inject, Injectable } from '@nestjs/common'
import { PostStatus } from '@prisma/client'
import { plainToInstance } from 'class-transformer'
import { PostCreateDto } from './dto/post-create.dto'
import { PostCursorPaginationReqDto } from './dto/post-cursor-pagination-request.dto'
import { PostOffsetPaginationReqDto } from './dto/post-offset-pagination-request.dto'
import { PostResponseDto } from './dto/post-response.dto'
import { PostUpdateDto } from './dto/post-update.dto'
import { PostQuery } from './post.query'

@Injectable()
export class PostService {
    constructor(
        @Inject(PRISMA_CLIENT) private readonly prisma: ExtendedPrismaClient,
        private readonly postQuery: PostQuery
    ) {}

    async savePost(userId: number, reqDto: PostCreateDto): Promise<PostResponseDto> {
        const createdPost = await this.prisma.post.create({
            data: {
                title: reqDto.title,
                content: reqDto.content,
                userId,
                status: reqDto.status || PostStatus.PUBLISHED,
                createdBy: userId
            }
        })

        return plainToInstance(PostResponseDto, createdPost, { excludeExtraneousValues: true })
    }

    async getPost(id: number): Promise<PostResponseDto> {
        const post = await this.prisma.post.findFirst({
            where: {
                id,
                isDeleted: false
            }
        })

        if (!post) {
            throw new BaseException(POST_ERROR.NOT_FOUND, this.constructor.name)
        }

        // 조회수 증가 (soft delete 체크 포함)
        const updatedPost = await this.prisma.post.update({
            where: {
                id,
                isDeleted: false
            },
            data: { viewCount: { increment: 1 } },
            select: { viewCount: true }
        })

        return plainToInstance(PostResponseDto, { ...post, viewCount: updatedPost.viewCount }, { excludeExtraneousValues: true })
    }

    async getPostsOffset(searchCondition: PostOffsetPaginationReqDto): Promise<OffsetPaginationResDto<PostResponseDto>> {
        const { items, totalCount } = await this.postQuery.getPostsOffset(searchCondition)
        return new OffsetPaginationResDto(plainToInstance(PostResponseDto, items, { excludeExtraneousValues: true }), {
            page: searchCondition.page,
            totalCount
        })
    }

    async getPostsCursor(searchCondition: PostCursorPaginationReqDto): Promise<CursorPaginationResDto<PostResponseDto>> {
        const { items, nextCursor } = await this.postQuery.getPostsCursor(searchCondition)
        return new CursorPaginationResDto(plainToInstance(PostResponseDto, items, { excludeExtraneousValues: true }), nextCursor)
    }

    async getMyPostsOffset(userId: number, searchCondition: PostOffsetPaginationReqDto): Promise<OffsetPaginationResDto<PostResponseDto>> {
        const { items, totalCount } = await this.postQuery.getPostsOffset(searchCondition, userId)
        return new OffsetPaginationResDto(plainToInstance(PostResponseDto, items, { excludeExtraneousValues: true }), {
            page: searchCondition.page,
            totalCount
        })
    }

    async getMyPostsCursor(userId: number, searchCondition: PostCursorPaginationReqDto): Promise<CursorPaginationResDto<PostResponseDto>> {
        const { items, nextCursor } = await this.postQuery.getPostsCursor(searchCondition, userId)
        return new CursorPaginationResDto(plainToInstance(PostResponseDto, items, { excludeExtraneousValues: true }), nextCursor)
    }

    async updateMyPost(userId: number, id: number, reqDto: PostUpdateDto): Promise<void> {
        const post = await this.prisma.post.findFirst({
            where: { id, userId, isDeleted: false }
        })

        if (!post) {
            throw new BaseException(POST_ERROR.NOT_FOUND, this.constructor.name)
        }

        if (post.userId !== userId) {
            throw new BaseException(POST_ERROR.FORBIDDEN, this.constructor.name)
        }

        await this.prisma.post.update({
            where: { id, userId, isDeleted: false },
            data: {
                ...reqDto,
                updatedBy: userId
            }
        })
    }

    async deleteMyPost(userId: number, id: number): Promise<void> {
        const post = await this.prisma.post.findFirst({
            where: { id, userId, isDeleted: false }
        })

        if (!post) {
            throw new BaseException(POST_ERROR.NOT_FOUND, this.constructor.name)
        }

        if (post.userId !== userId) {
            throw new BaseException(POST_ERROR.FORBIDDEN, this.constructor.name)
        }

        await this.prisma.post.softDelete({
            where: { id, userId, isDeleted: false }
        })
    }
}
