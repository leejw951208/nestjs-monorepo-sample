import { CreateResponseDto } from '@libs/common/dto/create-response.dto'
import { CursorResponseDto, OffsetResponseDto } from '@libs/common/dto/pagination-response.dto'
import { BaseException } from '@libs/common/exception/base.exception'
import { POST_ERROR } from '@libs/common/exception/error.code'
import { PrismaService } from '@libs/prisma/index'
import { Injectable } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { ClsService } from 'nestjs-cls'
import { PostCreateDto } from './dto/post-create.dto'
import { PostCursorRequestDto } from './dto/post-cursor-request.dto'
import { PostOffsetRequestDto } from './dto/post-offset-request.dto'
import { PostResponseDto } from './dto/post-response.dto'
import { PostUpdateDto } from './dto/post-update.dto'
import { PostRepository } from './post.repository'

@Injectable()
export class PostService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly repository: PostRepository,
        private readonly cls: ClsService
    ) {}

    async savePost(userId: number, reqDto: PostCreateDto): Promise<CreateResponseDto> {
        const savedPost = await this.prisma.post.create({
            data: { ...reqDto, userId, status: reqDto.status, createdBy: this.cls.get('id') }
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
            data: { ...reqDto, updatedBy: this.cls.get('id') }
        })
    }

    async deletePost(userId: number, postId: number): Promise<void> {
        const foundPost = await this.prisma.post.findFirst({
            where: { id: postId, userId, isDeleted: false }
        })

        if (!foundPost) {
            throw new BaseException(POST_ERROR.NOT_FOUND, this.constructor.name)
        }

        const currentUserId = this.cls.get('id')
        await this.prisma.post.update({
            where: { id: foundPost.id },
            data: {
                isDeleted: true,
                deletedAt: new Date(),
                deletedBy: currentUserId,
                updatedBy: currentUserId
            }
        })
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
