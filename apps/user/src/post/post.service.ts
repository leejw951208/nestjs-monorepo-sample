import { OffsetPaginationResDto } from '@libs/common/dto/pagination-res.dto'
import { BaseException } from '@libs/common/exception/base.exception'
import { POST_ERROR } from '@libs/common/exception/error.code'
import { JwtPayload } from '@libs/common/utils/jwt.util'
import { ExtendedPrismaClient } from '@libs/prisma/prisma.factory'
import { Inject, Injectable } from '@nestjs/common'
import { PostStatus, PrismaClient } from '@prisma/client'
import { plainToInstance } from 'class-transformer'
import { PostCreateDto } from './dto/post-create.dto'
import { PostOffsetPaginationReqDto } from './dto/post-offset-pagination-req.dto'
import { PostResDto } from './dto/post-res.dto'
import { PostUpdateDto } from './dto/post-update.dto'

@Injectable()
export class PostService {
    constructor(@Inject(PrismaClient) private readonly prisma: ExtendedPrismaClient) {}

    async createPost(payload: JwtPayload, reqDto: PostCreateDto): Promise<PostResDto> {
        const userId = payload.id!
        const createdPost = await this.prisma.post.create({
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

    async getPostByPagination(query: PostOffsetPaginationReqDto): Promise<OffsetPaginationResDto<PostResDto>> {
        const skip = (query.page - 1) * query.size
        const orderBy = query.order === 'asc' ? 'asc' : 'desc'

        const [items, totalCount] = await Promise.all([
            this.prisma.post.findMany({
                where: {
                    status: PostStatus.PUBLISHED
                },
                orderBy: { createdAt: orderBy },
                skip,
                take: query.size
            }),
            this.prisma.post.count({
                where: {
                    status: PostStatus.PUBLISHED
                }
            })
        ])

        return new OffsetPaginationResDto(plainToInstance(PostResDto, items, { excludeExtraneousValues: true }), query.page, totalCount)
    }

    async getPostById(payload: JwtPayload, postId: number): Promise<PostResDto> {
        const post = await this.prisma.post.findFirst({
            where: {
                id: postId,
                userId: payload.id
            }
        })

        if (!post) {
            throw new BaseException(POST_ERROR.NOT_FOUND, this.constructor.name)
        }

        // 조회수 증가
        await this.prisma.post.update({
            where: { id: postId },
            data: { viewCount: { increment: 1 } }
        })

        return plainToInstance(PostResDto, { ...post, viewCount: post.viewCount + 1 }, { excludeExtraneousValues: true })
    }

    async getMyPosts(payload: JwtPayload, query: PostOffsetPaginationReqDto): Promise<OffsetPaginationResDto<PostResDto>> {
        const userId = payload.id!
        const skip = (query.page - 1) * query.size
        const orderBy = query.order === 'asc' ? 'asc' : 'desc'

        const [items, totalCount] = await Promise.all([
            this.prisma.post.findMany({
                where: {
                    userId
                },
                orderBy: { createdAt: orderBy },
                skip,
                take: query.size
            }),
            this.prisma.post.count({
                where: {
                    userId
                }
            })
        ])

        return new OffsetPaginationResDto(plainToInstance(PostResDto, items, { excludeExtraneousValues: true }), query.page, totalCount)
    }

    async updatePost(payload: JwtPayload, postId: number, reqDto: PostUpdateDto): Promise<void> {
        const userId = payload.id!
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

    async deletePost(payload: JwtPayload, postId: number): Promise<void> {
        const userId = payload.id!
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
