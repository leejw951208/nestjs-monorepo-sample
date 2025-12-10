import { Test, TestingModule } from '@nestjs/testing'
import { PostService } from './post.service'
import { type ExtendedPrismaClient, PRISMA_CLIENT } from '@libs/prisma/prisma.factory'
import { PostStatus } from '@prisma/client'
import { type JwtPayload } from '@libs/common/utils/jwt.util'
import { PostCreateDto } from './dto/post-create.dto'
import { PostResponseDto } from './dto/post-response.dto'
import { CursorPaginationResDto, OffsetPaginationResDto } from '@libs/common/dto/pagination-response.dto'
import { PostUpdateDto } from './dto/post-update.dto'
import { BaseException } from '@libs/common/exception/base.exception'
import { POST_ERROR } from '@libs/common/exception/error.code'
import { PostQuery } from './post.query'
import { PostOffsetPaginationReqDto } from './dto/post-offset-pagination-request.dto'
import { PostCursorPaginationReqDto } from './dto/post-cursor-pagination-request.dto'

describe('PostService', () => {
    let service: PostService
    let prisma: ExtendedPrismaClient
    let postQuery: PostQuery

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

    const mockPostQuery = {
        getPostsOffset: jest.fn(),
        getPostsCursor: jest.fn()
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PostService, { provide: PRISMA_CLIENT, useValue: mockPrisma }, { provide: PostQuery, useValue: mockPostQuery }]
        }).compile()

        service = module.get<PostService>(PostService)
        prisma = module.get<ExtendedPrismaClient>(PRISMA_CLIENT)
        postQuery = module.get<PostQuery>(PostQuery)
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

            const result = await service.savePost(payload, reqDto)

            expect(prisma.post.create).toHaveBeenCalledWith({
                data: {
                    title: reqDto.title,
                    content: reqDto.content,
                    userId: payload.id,
                    status: reqDto.status,
                    createdBy: payload.id
                }
            })
            expect(result).toBeInstanceOf(PostResponseDto)
            expect(result.id).toBe(createdPost.id)
        })
    })

    describe('getPosts', () => {
        it('should return paginated posts', async () => {
            const query: PostOffsetPaginationReqDto = {
                page: 1,
                size: 10,
                order: 'desc',
                title: ''
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
                    updatedAt: new Date(),
                    isDeleted: false
                }
            ]
            const totalCount = 1

            mockPostQuery.getPostsOffset.mockResolvedValue({ items: posts, totalCount })

            const result = await service.getPostsOffset(query)

            expect(postQuery.getPostsOffset).toHaveBeenCalledWith(query)
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
                updatedAt: new Date(),
                isDeleted: false
            }

            mockPrisma.post.findFirst.mockResolvedValue(post)
            mockPrisma.post.update.mockResolvedValue({ viewCount: 1 })

            const result = await service.getPost(payload, postId)

            expect(prisma.post.findFirst).toHaveBeenCalledWith({
                where: { id: postId, isDeleted: false }
            })
            expect(prisma.post.update).toHaveBeenCalledWith({
                where: { id: postId, isDeleted: false },
                data: { viewCount: { increment: 1 } },
                select: { viewCount: true }
            })
            expect(result).toBeInstanceOf(PostResponseDto)
            expect(result.viewCount).toBe(1)
        })

        it('should throw exception if post not found', async () => {
            const payload: JwtPayload = { id: 1, type: 'ac', aud: 'api', jti: 'jti', issuer: 'monorepo' }
            const postId = 1

            mockPrisma.post.findFirst.mockResolvedValue(null)

            await expect(service.getPost(payload, postId)).rejects.toThrow(BaseException)
            await expect(service.getPost(payload, postId)).rejects.toThrow(POST_ERROR.NOT_FOUND.message)
        })
    })

    describe('getMyPosts', () => {
        it('should return my posts', async () => {
            const payload: JwtPayload = { id: 1, type: 'ac', aud: 'api', jti: 'jti', issuer: 'monorepo' }
            const query: PostOffsetPaginationReqDto = {
                page: 1,
                size: 10,
                order: 'desc',
                title: ''
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
                    updatedAt: new Date(),
                    isDeleted: false
                }
            ]
            const totalCount = 1

            mockPostQuery.getPostsOffset.mockResolvedValue({ items: posts, totalCount })

            const result = await service.getMyPostsOffset(payload, query)

            expect(postQuery.getPostsOffset).toHaveBeenCalledWith(query, payload.id)
            expect(result).toBeInstanceOf(OffsetPaginationResDto)
            expect(result.data[0]).toBeInstanceOf(PostResDto)
            expect(result.totalCount).toBe(totalCount)
        })
    })

    describe('getPostsCursor', () => {
        it('should return cursor paginated posts', async () => {
            const query: PostCursorPaginationReqDto = {
                lastCursor: undefined,
                size: 10,
                order: 'desc',
                title: ''
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
                    updatedAt: new Date(),
                    isDeleted: false
                }
            ]
            const nextCursor = 1

            mockPostQuery.getPostsCursor.mockResolvedValue({ items: posts, nextCursor })

            const result = await service.getPostsCursor(query)

            expect(postQuery.getPostsCursor).toHaveBeenCalledWith(query)
            expect(result).toBeInstanceOf(CursorPaginationResDto)
            expect(result.data[0]).toBeInstanceOf(PostResDto)
            expect(result.nextCursor).toBe(nextCursor)
        })
    })

    describe('getMyPostsCursor', () => {
        it('should return my cursor paginated posts', async () => {
            const payload: JwtPayload = { id: 1, type: 'ac', aud: 'api', jti: 'jti', issuer: 'monorepo' }
            const query: PostCursorPaginationReqDto = {
                lastCursor: undefined,
                size: 10,
                order: 'desc',
                title: ''
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
                    updatedAt: new Date(),
                    isDeleted: false
                }
            ]
            const nextCursor = 1

            mockPostQuery.getPostsCursor.mockResolvedValue({ items: posts, nextCursor })

            const result = await service.getMyPostsCursor(payload, query)

            expect(postQuery.getPostsCursor).toHaveBeenCalledWith(query, payload.id)
            expect(result).toBeInstanceOf(CursorPaginationResDto)
            expect(result.data[0]).toBeInstanceOf(PostResDto)
            expect(result.nextCursor).toBe(nextCursor)
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

            await service.updateMyPost(payload, postId, reqDto)

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

            await expect(service.updateMyPost(payload, postId, reqDto)).rejects.toThrow(BaseException)
            await expect(service.updateMyPost(payload, postId, reqDto)).rejects.toThrow(POST_ERROR.NOT_FOUND.message)
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

            await expect(service.updateMyPost(payload, postId, reqDto)).rejects.toThrow(BaseException)
            await expect(service.updateMyPost(payload, postId, reqDto)).rejects.toThrow(POST_ERROR.FORBIDDEN.message)
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

            await service.deleteMyPost(payload, postId)

            expect(prisma.post.findFirst).toHaveBeenCalledWith({ where: { id: postId } })
            expect(prisma.post.softDelete).toHaveBeenCalledWith({ where: { id: postId } })
        })

        it('should throw exception if post not found', async () => {
            const payload: JwtPayload = { id: 1, type: 'ac', aud: 'api', jti: 'jti', issuer: 'monorepo' }
            const postId = 1

            mockPrisma.post.findFirst.mockResolvedValue(null)

            await expect(service.deleteMyPost(payload, postId)).rejects.toThrow(BaseException)
            await expect(service.deleteMyPost(payload, postId)).rejects.toThrow(POST_ERROR.NOT_FOUND.message)
        })

        it('should throw exception if user is not the owner', async () => {
            const payload: JwtPayload = { id: 1, type: 'ac', aud: 'api', jti: 'jti', issuer: 'monorepo' }
            const postId = 1
            const post = {
                id: postId,
                userId: 2 // Different user
            }

            mockPrisma.post.findFirst.mockResolvedValue(post)

            await expect(service.deleteMyPost(payload, postId)).rejects.toThrow(BaseException)
            await expect(service.deleteMyPost(payload, postId)).rejects.toThrow(POST_ERROR.FORBIDDEN.message)
        })
    })
})
