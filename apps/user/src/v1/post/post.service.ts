import { CreateResponseDto } from '@libs/common/dto/create-response.dto'
import { CursorResponseDto, OffsetResponseDto } from '@libs/common/dto/pagination-response.dto'
import { BaseException } from '@libs/common/exception/base.exception'
import { POST_ERROR } from '@libs/common/exception/error.code'
import { type ExtendedPrismaClient, PRISMA_CLIENT } from '@libs/prisma/prisma.factory'
import { Inject, Injectable } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { PostCreateDto } from './dto/post-create.dto'
import { PostCursorRequestDto } from './dto/post-cursor-request.dto'
import { PostOffsetRequestDto } from './dto/post-offset-request.dto'
import { PostResponseDto } from './dto/post-response.dto'
import { PostUpdateDto } from './dto/post-update.dto'
import { PostRepository } from './post.repository'

@Injectable()
export class PostService {
    constructor(
        @Inject(PRISMA_CLIENT) private readonly prisma: ExtendedPrismaClient,
        private readonly repository: PostRepository
    ) {}

    async savePost(userId: number, reqDto: PostCreateDto): Promise<CreateResponseDto> {
        const savedPost = await this.prisma.post.create({
            data: { ...reqDto, userId, status: reqDto.status }
        })
        return new CreateResponseDto(savedPost.id)
    }

    async getPost(userId: number, postId: number): Promise<PostResponseDto> {
        const foundPost = await this.prisma.post.findFirst({
            where: { id: postId, userId, isDeleted: false }
        })

        if (!foundPost) {
            throw new BaseException(POST_ERROR.NOT_FOUND, this.constructor.name)
        }

        return plainToInstance(PostResponseDto, foundPost, { excludeExtraneousValues: true })
    }

    async updatePost(userId: number, postId: number, reqDto: PostUpdateDto): Promise<void> {
        const foundPost = await this.prisma.post.findFirst({
            where: { id: postId, userId, isDeleted: false }
        })

        if (!foundPost) {
            throw new BaseException(POST_ERROR.NOT_FOUND, this.constructor.name)
        }

        await this.prisma.post.update({
            where: { id: foundPost.id },
            data: reqDto
        })
    }

    async deletePost(userId: number, postId: number): Promise<void> {
        const foundPost = await this.prisma.post.findFirst({
            where: { id: postId, userId, isDeleted: false }
        })

        if (!foundPost) {
            throw new BaseException(POST_ERROR.NOT_FOUND, this.constructor.name)
        }

        await this.prisma.post.softDelete({ where: { id: foundPost.id } })
    }

    async getPostsOffset(searchCondition: PostOffsetRequestDto, userId?: number): Promise<OffsetResponseDto<PostResponseDto>> {
        const { items, totalCount } = await this.repository.findPostsOffset(searchCondition, userId)
        return new OffsetResponseDto<PostResponseDto>(plainToInstance(PostResponseDto, items, { excludeExtraneousValues: true }), {
            page: searchCondition.page,
            totalCount
        })
    }

    async getPostsCursor(searchCondition: PostCursorRequestDto, userId?: number): Promise<CursorResponseDto<PostResponseDto>> {
        const { items, nextCursor } = await this.repository.findPostsCursor(searchCondition, userId)
        return new CursorResponseDto<PostResponseDto>(plainToInstance(PostResponseDto, items, { excludeExtraneousValues: true }), {
            nextCursor
        })
    }
}
