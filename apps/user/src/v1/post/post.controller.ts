import { CurrentUser } from '@libs/common/decorator/jwt-payload.decorator'
import { Public } from '@libs/common/decorator/public.decorator'
import { CursorPaginationResDto, OffsetPaginationResDto } from '@libs/common/dto/pagination-res.dto'
import { type JwtPayload } from '@libs/common/utils/jwt.util'
import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common'
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger'
import { PostCreateDto } from './dto/post-create.dto'
import { PostCursorPaginationReqDto } from './dto/post-cursor-pagination-req.dto'
import { PostOffsetPaginationReqDto } from './dto/post-offset-pagination-req.dto'
import { PostResDto } from './dto/post-res.dto'
import { PostUpdateDto } from './dto/post-update.dto'
import { PostService } from './post.service'

@ApiTags('posts')
@ApiBearerAuth('JWT-Auth')
@Controller({ version: '1' })
export class PostController {
    constructor(private readonly service: PostService) {}

    @ApiOperation({ summary: '게시글 작성' })
    @ApiBody({ type: PostCreateDto })
    @ApiOkResponse({ type: PostResDto, description: '게시글 생성 성공' })
    @ApiResponse({ status: 201, description: '생성됨', type: PostResDto })
    @ApiResponse({ status: 400, description: '잘못된 요청' })
    @ApiResponse({ status: 401, description: '인증 실패' })
    @HttpCode(201)
    @Post()
    async createPost(@CurrentUser() payload: JwtPayload, @Body() reqDto: PostCreateDto): Promise<PostResDto> {
        return this.service.savePost(payload, reqDto)
    }

    @ApiOperation({ summary: '전체 게시글 목록 조회 (Offset Pagination)', description: 'page 기반 페이지네이션' })
    @ApiOkResponse({ type: OffsetPaginationResDto<PostResDto>, description: '성공' })
    @ApiResponse({ status: 200, description: '성공' })
    @Public()
    @Get('offset')
    async getPostsOffset(@Query() query: PostOffsetPaginationReqDto): Promise<OffsetPaginationResDto<PostResDto>> {
        return this.service.getPostsOffset(query)
    }

    @ApiOperation({ summary: '전체 게시글 목록 조회 (Cursor Pagination)', description: 'lastCursor 기반 페이지네이션' })
    @ApiOkResponse({ type: CursorPaginationResDto<PostResDto>, description: '성공' })
    @ApiResponse({ status: 200, description: '성공' })
    @Public()
    @Get('cursor')
    async getPostsCursor(@Query() query: PostCursorPaginationReqDto): Promise<CursorPaginationResDto<PostResDto>> {
        return this.service.getPostsCursor(query)
    }

    @ApiOperation({ summary: '내 게시글 목록 조회 (Offset Pagination)', description: 'page 기반 페이지네이션' })
    @ApiOkResponse({ type: OffsetPaginationResDto<PostResDto>, description: '성공' })
    @ApiResponse({ status: 200, description: '성공' })
    @ApiResponse({ status: 401, description: '인증 실패' })
    @Get('me/offset')
    async getMyPostsOffset(
        @CurrentUser() payload: JwtPayload,
        @Query() query: PostOffsetPaginationReqDto
    ): Promise<OffsetPaginationResDto<PostResDto>> {
        return this.service.getMyPostsOffset(payload, query)
    }

    @ApiOperation({ summary: '내 게시글 목록 조회 (Cursor Pagination)', description: 'lastCursor 기반 페이지네이션' })
    @ApiOkResponse({ type: CursorPaginationResDto<PostResDto>, description: '성공' })
    @ApiResponse({ status: 200, description: '성공' })
    @ApiResponse({ status: 401, description: '인증 실패' })
    @Get('me/cursor')
    async getMyPostsCursor(
        @CurrentUser() payload: JwtPayload,
        @Query() query: PostCursorPaginationReqDto
    ): Promise<CursorPaginationResDto<PostResDto>> {
        return this.service.getMyPostsCursor(payload, query)
    }

    @ApiOperation({ summary: '게시글 상세 조회' })
    @ApiParam({ name: 'id', description: '게시글 ID', type: Number })
    @ApiOkResponse({ type: PostResDto, description: '성공' })
    @ApiResponse({ status: 404, description: '게시글을 찾을 수 없음' })
    @Get(':id')
    async getPost(@CurrentUser() payload: JwtPayload, @Param('id', ParseIntPipe) postId: number): Promise<PostResDto> {
        return this.service.getPost(payload, postId)
    }

    @ApiOperation({ summary: '게시글 수정' })
    @ApiParam({ name: 'id', description: '게시글 ID', type: Number })
    @ApiBody({ type: PostUpdateDto })
    @ApiResponse({ status: 204, description: '성공' })
    @ApiResponse({ status: 404, description: '게시글을 찾을 수 없음' })
    @ApiResponse({ status: 403, description: '권한 없음' })
    @HttpCode(204)
    @Patch(':id')
    async updatePost(
        @CurrentUser() payload: JwtPayload,
        @Param('id', ParseIntPipe) postId: number,
        @Body() reqDto: PostUpdateDto
    ): Promise<void> {
        return this.service.updateMyPost(payload, postId, reqDto)
    }

    @ApiOperation({ summary: '게시글 삭제 (Soft Delete)' })
    @ApiParam({ name: 'id', description: '게시글 ID', type: Number })
    @ApiResponse({ status: 204, description: '성공' })
    @ApiResponse({ status: 404, description: '게시글을 찾을 수 없음' })
    @ApiResponse({ status: 403, description: '권한 없음' })
    @HttpCode(204)
    @Delete(':id')
    async deletePost(@CurrentUser() payload: JwtPayload, @Param('id', ParseIntPipe) postId: number): Promise<void> {
        return this.service.deleteMyPost(payload, postId)
    }
}
