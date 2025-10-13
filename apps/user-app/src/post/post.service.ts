import { OffsetPageResDto } from '@libs/common/dto/page-res.dto'
import { BaseException } from '@libs/common/exception/base.exception'
import { POST_ERROR } from '@libs/common/exception/error.code'
import { JwtPayloadType } from '@libs/common/utils/jwt.util'
import { PrismaService } from '@libs/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { PostStatus } from '@prisma/client'
import { plainToInstance } from 'class-transformer'
import { PostCreateDto } from './dto/post-create.dto'
import { PostListReqDto } from './dto/post-list.dto'
import { PostResDto } from './dto/post-res.dto'
import { PostUpdateDto } from './dto/post-update.dto'

@Injectable()
export class PostService {
    constructor(private readonly prisma: PrismaService) {}

    async createPost(payload: JwtPayloadType, reqDto: PostCreateDto): Promise<PostResDto> {
        const userId = payload.id!
        const createdPost = await this.prisma.client.post.create({
            data: {
                title: reqDto.title,
                content: reqDto.content,
                userId,
                status: reqDto.status || PostStatus.PUBLISHED,
                createdBy: userId,
                updatedBy: userId
            }
        })

        return plainToInstance(PostResDto, createdPost, { excludeExtraneousValues: true })
    }

    async getPostList(query: PostListReqDto): Promise<OffsetPageResDto<PostResDto>> {
        const skip = (query.page - 1) * query.size
        const orderBy = query.order === 'asc' ? 'asc' : 'desc'

        const [items, totalCount] = await Promise.all([
            this.prisma.client.post.findMany({
                where: {
                    isDeleted: false,
                    status: PostStatus.PUBLISHED
                },
                orderBy: { createdAt: orderBy },
                skip,
                take: query.size
            }),
            this.prisma.client.post.count({
                where: {
                    isDeleted: false,
                    status: PostStatus.PUBLISHED
                }
            })
        ])

        return new OffsetPageResDto(plainToInstance(PostResDto, items, { excludeExtraneousValues: true }), query.page, totalCount)
    }

    async getPostById(postId: number): Promise<PostResDto> {
        const post = await this.prisma.client.post.findFirst({
            where: {
                id: postId,
                isDeleted: false
            }
        })

        if (!post) {
            throw new BaseException(POST_ERROR.NOT_FOUND, this.constructor.name)
        }

        // 조회수 증가
        await this.prisma.client.post.update({
            where: { id: postId },
            data: { viewCount: { increment: 1 } }
        })

        return plainToInstance(PostResDto, { ...post, viewCount: post.viewCount + 1 }, { excludeExtraneousValues: true })
    }

    async getMyPosts(payload: JwtPayloadType, query: PostListReqDto): Promise<OffsetPageResDto<PostResDto>> {
        const userId = payload.id!
        const skip = (query.page - 1) * query.size
        const orderBy = query.order === 'asc' ? 'asc' : 'desc'

        const [items, totalCount] = await Promise.all([
            this.prisma.client.post.findMany({
                where: {
                    userId,
                    isDeleted: false
                },
                orderBy: { createdAt: orderBy },
                skip,
                take: query.size
            }),
            this.prisma.client.post.count({
                where: {
                    userId,
                    isDeleted: false
                }
            })
        ])

        return new OffsetPageResDto(plainToInstance(PostResDto, items, { excludeExtraneousValues: true }), query.page, totalCount)
    }

    async updatePost(payload: JwtPayloadType, postId: number, reqDto: PostUpdateDto): Promise<void> {
        const userId = payload.id!
        const post = await this.prisma.client.post.findFirst({
            where: {
                id: postId,
                isDeleted: false
            }
        })

        if (!post) {
            throw new BaseException(POST_ERROR.NOT_FOUND, this.constructor.name)
        }

        if (post.userId !== userId) {
            throw new BaseException(POST_ERROR.FORBIDDEN, this.constructor.name)
        }

        await this.prisma.client.post.update({
            where: { id: postId },
            data: {
                ...reqDto,
                updatedBy: userId
            }
        })
    }

    async deletePost(payload: JwtPayloadType, postId: number): Promise<void> {
        const userId = payload.id!
        const post = await this.prisma.client.post.findFirst({
            where: {
                id: postId,
                isDeleted: false
            }
        })

        if (!post) {
            throw new BaseException(POST_ERROR.NOT_FOUND, this.constructor.name)
        }

        if (post.userId !== userId) {
            throw new BaseException(POST_ERROR.FORBIDDEN, this.constructor.name)
        }

        await this.prisma.client.post.update({
            where: { id: postId },
            data: {
                isDeleted: true,
                deletedAt: new Date(),
                deletedBy: userId
            }
        })
    }
}
