import { OffsetPageResDto } from '@libs/common/dto/page-res.dto'
import { BaseException } from '@libs/common/exception/base.exception'
import { JwtPayloadType } from '@libs/common/utils/jwt.util'
import { PrismaService } from '@libs/prisma/prisma.service'
import { Test, TestingModule } from '@nestjs/testing'
import { Post, PostStatus } from '@prisma/client'
import { PostCreateDto } from './dto/post-create.dto'
import { PostListReqDto } from './dto/post-list.dto'
import { PostResDto } from './dto/post-res.dto'
import { PostUpdateDto } from './dto/post-update.dto'
import { PostService } from './post.service'

describe('PostService', () => {
    let service: PostService
    let prismaService: PrismaService

    const mockPrismaService = {
        client: {
            post: {
                create: jest.fn(),
                findMany: jest.fn(),
                findFirst: jest.fn(),
                update: jest.fn(),
                count: jest.fn()
            }
        }
    }

    const mockTokenPayload: JwtPayloadType = {
        id: 1,
        type: 'ac',
        aud: 'api',
        jti: 'test-jti',
        issuer: 'monorepo'
    }

    const mockPost: Post = {
        id: 1,
        title: '테스트 게시글',
        content: '테스트 내용',
        userId: 1,
        viewCount: 0,
        status: PostStatus.PUBLISHED,
        createdAt: new Date(),
        createdBy: 1,
        updatedAt: null,
        updatedBy: null,
        isDeleted: false,
        deletedAt: null,
        deletedBy: null
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                PostService,
                {
                    provide: PrismaService,
                    useValue: mockPrismaService
                }
            ]
        }).compile()

        service = module.get<PostService>(PostService)
        prismaService = module.get<PrismaService>(PrismaService)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    describe('createPost', () => {
        it('게시글을 성공적으로 생성해야 한다', async () => {
            const createDto: PostCreateDto = {
                title: '테스트 게시글',
                content: '테스트 내용',
                status: PostStatus.PUBLISHED
            }

            mockPrismaService.client.post.create.mockResolvedValue(mockPost)

            const result = await service.createPost(mockTokenPayload, createDto)

            expect(result).toBeInstanceOf(PostResDto)
            expect(result.title).toBe(createDto.title)
            expect(result.content).toBe(createDto.content)
            expect(mockPrismaService.client.post.create).toHaveBeenCalledWith({
                data: {
                    title: createDto.title,
                    content: createDto.content,
                    userId: mockTokenPayload.id,
                    status: createDto.status,
                    createdBy: mockTokenPayload.id,
                    updatedBy: mockTokenPayload.id
                }
            })
        })

        it('status가 없으면 PUBLISHED를 기본값으로 설정해야 한다', async () => {
            const createDto: PostCreateDto = {
                title: '테스트 게시글',
                content: '테스트 내용'
            }

            mockPrismaService.client.post.create.mockResolvedValue(mockPost)

            await service.createPost(mockTokenPayload, createDto)

            expect(mockPrismaService.client.post.create).toHaveBeenCalledWith({
                data: expect.objectContaining({
                    status: PostStatus.PUBLISHED
                })
            })
        })
    })

    describe('getPostList', () => {
        it('게시글 목록을 페이지네이션하여 반환해야 한다', async () => {
            const query: PostListReqDto = {
                page: 1,
                size: 10,
                order: 'desc'
            }

            const mockPosts = [mockPost]
            const totalCount = 1

            mockPrismaService.client.post.findMany.mockResolvedValue(mockPosts)
            mockPrismaService.client.post.count.mockResolvedValue(totalCount)

            const result = await service.getPostList(query)

            expect(result).toBeInstanceOf(OffsetPageResDto)
            expect(result.data).toHaveLength(1)
            expect(result.totalCount).toBe(totalCount)
            expect(result.page).toBe(query.page)
            expect(mockPrismaService.client.post.findMany).toHaveBeenCalledWith({
                where: {
                    isDeleted: false,
                    status: PostStatus.PUBLISHED
                },
                orderBy: { createdAt: 'desc' },
                skip: 0,
                take: 10
            })
        })
    })

    describe('getPostById', () => {
        it('게시글을 조회하고 조회수를 증가시켜야 한다', async () => {
            const postId = 1

            mockPrismaService.client.post.findFirst.mockResolvedValue(mockPost)
            mockPrismaService.client.post.update.mockResolvedValue({ ...mockPost, viewCount: 1 })

            const result = await service.getPostById(postId)

            expect(result.id).toBe(postId)
            expect(result.viewCount).toBe(1)
            expect(mockPrismaService.client.post.findFirst).toHaveBeenCalledWith({
                where: {
                    id: postId,
                    isDeleted: false
                }
            })
            expect(mockPrismaService.client.post.update).toHaveBeenCalledWith({
                where: { id: postId },
                data: { viewCount: { increment: 1 } }
            })
        })

        it('게시글이 없으면 NOT_FOUND 에러를 발생시켜야 한다', async () => {
            const postId = 999

            mockPrismaService.client.post.findFirst.mockResolvedValue(null)

            await expect(service.getPostById(postId)).rejects.toThrow(BaseException)
        })
    })

    describe('getMyPosts', () => {
        it('내가 작성한 게시글 목록을 반환해야 한다', async () => {
            const query: PostListReqDto = {
                page: 1,
                size: 10,
                order: 'desc'
            }

            const mockPosts = [mockPost]
            const totalCount = 1

            mockPrismaService.client.post.findMany.mockResolvedValue(mockPosts)
            mockPrismaService.client.post.count.mockResolvedValue(totalCount)

            const result = await service.getMyPosts(mockTokenPayload, query)

            expect(result).toBeInstanceOf(OffsetPageResDto)
            expect(result.data).toHaveLength(1)
            expect(mockPrismaService.client.post.findMany).toHaveBeenCalledWith({
                where: {
                    userId: mockTokenPayload.id,
                    isDeleted: false
                },
                orderBy: { createdAt: 'desc' },
                skip: 0,
                take: 10
            })
        })
    })

    describe('updatePost', () => {
        it('게시글을 성공적으로 수정해야 한다', async () => {
            const postId = 1
            const updateDto: PostUpdateDto = {
                title: '수정된 제목',
                content: '수정된 내용'
            }

            mockPrismaService.client.post.findFirst.mockResolvedValue(mockPost)
            mockPrismaService.client.post.update.mockResolvedValue({ ...mockPost, ...updateDto })

            await service.updatePost(mockTokenPayload, postId, updateDto)

            expect(mockPrismaService.client.post.update).toHaveBeenCalledWith({
                where: { id: postId },
                data: {
                    ...updateDto,
                    updatedBy: mockTokenPayload.id
                }
            })
        })

        it('게시글이 없으면 NOT_FOUND 에러를 발생시켜야 한다', async () => {
            const postId = 999
            const updateDto: PostUpdateDto = {
                title: '수정된 제목'
            }

            mockPrismaService.client.post.findFirst.mockResolvedValue(null)

            await expect(service.updatePost(mockTokenPayload, postId, updateDto)).rejects.toThrow(BaseException)
        })

        it('다른 사용자의 게시글을 수정하려고 하면 FORBIDDEN 에러를 발생시켜야 한다', async () => {
            const postId = 1
            const updateDto: PostUpdateDto = {
                title: '수정된 제목'
            }
            const otherUserPost = { ...mockPost, userId: 2 }

            mockPrismaService.client.post.findFirst.mockResolvedValue(otherUserPost)

            await expect(service.updatePost(mockTokenPayload, postId, updateDto)).rejects.toThrow(BaseException)
        })
    })

    describe('deletePost', () => {
        it('게시글을 소프트 삭제해야 한다', async () => {
            const postId = 1

            mockPrismaService.client.post.findFirst.mockResolvedValue(mockPost)
            mockPrismaService.client.post.update.mockResolvedValue({ ...mockPost, isDeleted: true })

            await service.deletePost(mockTokenPayload, postId)

            expect(mockPrismaService.client.post.update).toHaveBeenCalledWith({
                where: { id: postId },
                data: {
                    isDeleted: true,
                    deletedAt: expect.any(Date),
                    deletedBy: mockTokenPayload.id
                }
            })
        })

        it('게시글이 없으면 NOT_FOUND 에러를 발생시켜야 한다', async () => {
            const postId = 999

            mockPrismaService.client.post.findFirst.mockResolvedValue(null)

            await expect(service.deletePost(mockTokenPayload, postId)).rejects.toThrow(BaseException)
        })

        it('다른 사용자의 게시글을 삭제하려고 하면 FORBIDDEN 에러를 발생시켜야 한다', async () => {
            const postId = 1
            const otherUserPost = { ...mockPost, userId: 2 }

            mockPrismaService.client.post.findFirst.mockResolvedValue(otherUserPost)

            await expect(service.deletePost(mockTokenPayload, postId)).rejects.toThrow(BaseException)
        })
    })
})
