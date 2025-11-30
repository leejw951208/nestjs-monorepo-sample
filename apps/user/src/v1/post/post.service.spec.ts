import { Test, TestingModule } from '@nestjs/testing'
import { PostService } from './post.service'
import { ExtendedPrismaClient, PRISMA_CLIENT } from '@libs/prisma/prisma.factory'
import { PostStatus } from '@prisma/client'
import { JwtPayload } from '@libs/common/utils/jwt.util'
import { PostCreateDto } from './dto/post-create.dto'
import { PostResDto } from './dto/post-res.dto'
import { PostOffsetPaginationReqDto } from './dto/post-offset-pagination-req.dto'
import { OffsetPaginationResDto } from '@libs/common/dto/pagination-res.dto'
import { PostUpdateDto } from './dto/post-update.dto'
import { BaseException } from '@libs/common/exception/base.exception'
import { POST_ERROR } from '@libs/common/exception/error.code'

describe('PostService', () => {
    let service: PostService
    let prisma: ExtendedPrismaClient

    const mockPrisma = {
        post: {
            create: jest.fn(),
            findMany: jest.fn(),
            count: jest.fn(),
            findFirst: jest.fn(),
            update: jest.fn(),
            softDelete: jest.fn()
        }
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PostService, { provide: PRISMA_CLIENT, useValue: mockPrisma }]
        }).compile()

        service = module.get<PostService>(PostService)
        prisma = module.get<ExtendedPrismaClient>(PRISMA_CLIENT)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })

    describe('createPost', () => {
        it('should create a post', async () => {
            const payload: JwtPayload = { id: 1, type: 'ac', aud: 'api', jti: 'jti', issuer: 'monorepo' }
            const reqDto: PostCreateDto = {
                title: 'Test Title',
                content: 'Test Content',
                status: PostStatus.PUBLISHED
            }
            const createdPost = {
                id: 1,
                ...reqDto,
                userId: payload.id,
                viewCount: 0,
                createdAt: new Date(),
                updatedAt: new Date(),
                createdBy: payload.id,
                updatedBy: payload.id
            }

            mockPrisma.post.create.mockResolvedValue(createdPost)

            const result = await service.createPost(payload, reqDto)

            expect(prisma.post.create).toHaveBeenCalledWith({
                data: {
                    title: reqDto.title,
                    content: reqDto.content,
                    userId: payload.id,
                    status: reqDto.status,
                    createdBy: payload.id,
                    updatedBy: payload.id
                }
            })
            expect(result).toBeInstanceOf(PostResDto)
            expect(result.id).toBe(createdPost.id)
        })
    })

    describe('getPostByPagination', () => {
        it('should return paginated posts', async () => {
            const query: PostOffsetPaginationReqDto = {
                page: 1,
                size: 10,
                order: 'desc',
                'filter[title]': ''
            }
            const posts = [
                {
                    id: 1,
                    title: 'Test Title',
                    content: 'Test Content',
                    userId: 1,
                    status: PostStatus.PUBLISHED,
                    viewCount: 0,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ]
            const totalCount = 1

            mockPrisma.post.findMany.mockResolvedValue(posts)
            mockPrisma.post.count.mockResolvedValue(totalCount)

            const result = await service.getPostByPagination(query)

            expect(prisma.post.findMany).toHaveBeenCalledWith({
                where: { status: PostStatus.PUBLISHED },
                orderBy: { createdAt: 'desc' },
                skip: 0,
                take: 10
            })
            expect(prisma.post.count).toHaveBeenCalledWith({
                where: { status: PostStatus.PUBLISHED }
            })
            expect(result).toBeInstanceOf(OffsetPaginationResDto)
            expect(result.data[0]).toBeInstanceOf(PostResDto)
            expect(result.totalCount).toBe(totalCount)
        })
    })

    describe('getPostById', () => {
        it('should return a post and increment view count', async () => {
            const payload: JwtPayload = { id: 1, type: 'ac', aud: 'api', jti: 'jti', issuer: 'monorepo' }
            const postId = 1
            const post = {
                id: postId,
                title: 'Test Title',
                content: 'Test Content',
                userId: 1,
                status: PostStatus.PUBLISHED,
                viewCount: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            }

            mockPrisma.post.findFirst.mockResolvedValue(post)
            mockPrisma.post.update.mockResolvedValue({ ...post, viewCount: 1 })

            const result = await service.getPostById(payload, postId)

            expect(prisma.post.findFirst).toHaveBeenCalledWith({
                where: { id: postId, userId: payload.id }
            })
            expect(prisma.post.update).toHaveBeenCalledWith({
                where: { id: postId },
                data: { viewCount: { increment: 1 } }
            })
            expect(result).toBeInstanceOf(PostResDto)
            expect(result.viewCount).toBe(1)
        })

        it('should throw exception if post not found', async () => {
            const payload: JwtPayload = { id: 1, type: 'ac', aud: 'api', jti: 'jti', issuer: 'monorepo' }
            const postId = 1

            mockPrisma.post.findFirst.mockResolvedValue(null)

            await expect(service.getPostById(payload, postId)).rejects.toThrow(BaseException)
            await expect(service.getPostById(payload, postId)).rejects.toThrow(POST_ERROR.NOT_FOUND.message)
        })
    })

    describe('getMyPosts', () => {
        it('should return my posts', async () => {
            const payload: JwtPayload = { id: 1, type: 'ac', aud: 'api', jti: 'jti', issuer: 'monorepo' }
            const query: PostOffsetPaginationReqDto = {
                page: 1,
                size: 10,
                order: 'desc',
                'filter[title]': ''
            }
            const posts = [
                {
                    id: 1,
                    title: 'Test Title',
                    content: 'Test Content',
                    userId: 1,
                    status: PostStatus.PUBLISHED,
                    viewCount: 0,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ]
            const totalCount = 1

            mockPrisma.post.findMany.mockResolvedValue(posts)
            mockPrisma.post.count.mockResolvedValue(totalCount)

            const result = await service.getMyPosts(payload, query)

            expect(prisma.post.findMany).toHaveBeenCalledWith({
                where: { userId: payload.id },
                orderBy: { createdAt: 'desc' },
                skip: 0,
                take: 10
            })
            expect(prisma.post.count).toHaveBeenCalledWith({
                where: { userId: payload.id }
            })
            expect(result).toBeInstanceOf(OffsetPaginationResDto)
        })
    })

    describe('updatePost', () => {
        it('should update a post', async () => {
            const payload: JwtPayload = { id: 1, type: 'ac', aud: 'api', jti: 'jti', issuer: 'monorepo' }
            const postId = 1
            const reqDto: PostUpdateDto = {
                title: 'Updated Title'
            }
            const post = {
                id: postId,
                userId: 1
            }

            mockPrisma.post.findFirst.mockResolvedValue(post)

            await service.updatePost(payload, postId, reqDto)

            expect(prisma.post.findFirst).toHaveBeenCalledWith({ where: { id: postId } })
            expect(prisma.post.update).toHaveBeenCalledWith({
                where: { id: postId },
                data: { ...reqDto, updatedBy: payload.id }
            })
        })

        it('should throw exception if post not found', async () => {
            const payload: JwtPayload = { id: 1, type: 'ac', aud: 'api', jti: 'jti', issuer: 'monorepo' }
            const postId = 1
            const reqDto: PostUpdateDto = { title: 'Updated Title' }

            mockPrisma.post.findFirst.mockResolvedValue(null)

            await expect(service.updatePost(payload, postId, reqDto)).rejects.toThrow(BaseException)
            await expect(service.updatePost(payload, postId, reqDto)).rejects.toThrow(POST_ERROR.NOT_FOUND.message)
        })

        it('should throw exception if user is not the owner', async () => {
            const payload: JwtPayload = { id: 1, type: 'ac', aud: 'api', jti: 'jti', issuer: 'monorepo' }
            const postId = 1
            const reqDto: PostUpdateDto = { title: 'Updated Title' }
            const post = {
                id: postId,
                userId: 2 // Different user
            }

            mockPrisma.post.findFirst.mockResolvedValue(post)

            await expect(service.updatePost(payload, postId, reqDto)).rejects.toThrow(BaseException)
            await expect(service.updatePost(payload, postId, reqDto)).rejects.toThrow(POST_ERROR.FORBIDDEN.message)
        })
    })

    describe('deletePost', () => {
        it('should soft delete a post', async () => {
            const payload: JwtPayload = { id: 1, type: 'ac', aud: 'api', jti: 'jti', issuer: 'monorepo' }
            const postId = 1
            const post = {
                id: postId,
                userId: 1
            }

            mockPrisma.post.findFirst.mockResolvedValue(post)

            await service.deletePost(payload, postId)

            expect(prisma.post.findFirst).toHaveBeenCalledWith({ where: { id: postId } })
            expect(prisma.post.softDelete).toHaveBeenCalledWith({ where: { id: postId } })
        })

        it('should throw exception if post not found', async () => {
            const payload: JwtPayload = { id: 1, type: 'ac', aud: 'api', jti: 'jti', issuer: 'monorepo' }
            const postId = 1

            mockPrisma.post.findFirst.mockResolvedValue(null)

            await expect(service.deletePost(payload, postId)).rejects.toThrow(BaseException)
            await expect(service.deletePost(payload, postId)).rejects.toThrow(POST_ERROR.NOT_FOUND.message)
        })

        it('should throw exception if user is not the owner', async () => {
            const payload: JwtPayload = { id: 1, type: 'ac', aud: 'api', jti: 'jti', issuer: 'monorepo' }
            const postId = 1
            const post = {
                id: postId,
                userId: 2 // Different user
            }

            mockPrisma.post.findFirst.mockResolvedValue(post)

            await expect(service.deletePost(payload, postId)).rejects.toThrow(BaseException)
            await expect(service.deletePost(payload, postId)).rejects.toThrow(POST_ERROR.FORBIDDEN.message)
        })
    })
})
