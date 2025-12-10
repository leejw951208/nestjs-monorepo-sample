import { ApiAuthGuard } from '@libs/common/decorator/api-auth-guard.decorator'
import { ApiOkBaseResponse } from '@libs/common/decorator/api-base-ok-response.decorator'
import { ApiExceptionResponse } from '@libs/common/decorator/api-exception-response.decorator'
import { ApiOkCursorPaginationResponse, ApiOkOffsetPaginationResponse } from '@libs/common/decorator/api-page-ok-response.decorator'
import { CurrentUser } from '@libs/common/decorator/jwt-payload.decorator'
import { CursorPaginationResDto, OffsetPaginationResDto } from '@libs/common/dto/pagination-response.dto'
import { POST_ERROR } from '@libs/common/exception/error.code'
import { type JwtPayload } from '@libs/common/type/jwt-payload.type'
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common'
import { ApiBody, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger'
import { PostCreateDto } from './dto/post-create.dto'
import { PostCursorPaginationReqDto } from './dto/post-cursor-pagination-request.dto'
import { PostOffsetPaginationReqDto } from './dto/post-offset-pagination-request.dto'
import { PostResponseDto } from './dto/post-response.dto'
import { PostUpdateDto } from './dto/post-update.dto'
import { PostService } from './post.service'

@ApiTags('posts')
@ApiAuthGuard()
@Controller({ version: '1' })
export class PostController {
    constructor(private readonly service: PostService) {}

    @ApiOperation({ summary: '게시글 작성' })
    @ApiBody({ type: PostCreateDto })
    @ApiOkResponse({ type: PostResponseDto })
    @Post()
    async createPost(@CurrentUser() payload: JwtPayload, @Body() reqDto: PostCreateDto): Promise<PostResponseDto> {
        return this.service.savePost(payload.id, reqDto)
    }

    @ApiOperation({ summary: '전체 게시글 목록 조회 (Offset Pagination)', description: 'page 기반 페이지네이션' })
    @ApiOkOffsetPaginationResponse({ type: PostResponseDto })
    @Get('offset')
    async getPostsOffset(@Query() query: PostOffsetPaginationReqDto): Promise<OffsetPaginationResDto<PostResponseDto>> {
        return this.service.getPostsOffset(query)
    }

    @ApiOperation({ summary: '전체 게시글 목록 조회 (Cursor Pagination)', description: 'lastCursor 기반 페이지네이션' })
    @ApiOkCursorPaginationResponse({ type: PostResponseDto })
    @Get('cursor')
    async getPostsCursor(@Query() query: PostCursorPaginationReqDto): Promise<CursorPaginationResDto<PostResponseDto>> {
        return this.service.getPostsCursor(query)
    }

    @ApiOperation({ summary: '내 게시글 목록 조회 (Offset Pagination)', description: 'page 기반 페이지네이션' })
    @ApiOkOffsetPaginationResponse({ type: PostResponseDto })
    @Get('me/offset')
    async getMyPostsOffset(
        @CurrentUser() payload: JwtPayload,
        @Query() query: PostOffsetPaginationReqDto
    ): Promise<OffsetPaginationResDto<PostResponseDto>> {
        return this.service.getMyPostsOffset(payload.id, query)
    }

    @ApiOperation({ summary: '내 게시글 목록 조회 (Cursor Pagination)', description: 'lastCursor 기반 페이지네이션' })
    @ApiOkCursorPaginationResponse({ type: PostResponseDto })
    @Get('me/cursor')
    async getMyPostsCursor(
        @CurrentUser() payload: JwtPayload,
        @Query() query: PostCursorPaginationReqDto
    ): Promise<CursorPaginationResDto<PostResponseDto>> {
        return this.service.getMyPostsCursor(payload.id, query)
    }

    @ApiOperation({ summary: '게시글 상세 조회' })
    @ApiParam({ name: 'id', description: '게시글 ID', type: Number })
    @ApiOkBaseResponse({ type: PostResponseDto })
    @ApiExceptionResponse(POST_ERROR.NOT_FOUND)
    @Get(':id')
    async getPost(@Param('id', ParseIntPipe) id: number): Promise<PostResponseDto> {
        return this.service.getPost(id)
    }

    @ApiOperation({ summary: '게시글 수정' })
    @ApiParam({ name: 'id', description: '게시글 ID', type: Number })
    @ApiBody({ type: PostUpdateDto })
    @ApiOkResponse()
    @ApiExceptionResponse([POST_ERROR.NOT_FOUND, POST_ERROR.FORBIDDEN])
    @Patch(':id')
    async updatePost(
        @CurrentUser() payload: JwtPayload,
        @Param('id', ParseIntPipe) id: number,
        @Body() reqDto: PostUpdateDto
    ): Promise<void> {
        return this.service.updateMyPost(payload.id, id, reqDto)
    }

    @ApiOperation({ summary: '게시글 삭제 (Soft Delete)' })
    @ApiParam({ name: 'id', description: '게시글 ID', type: Number })
    @ApiOkResponse()
    @ApiExceptionResponse([POST_ERROR.NOT_FOUND, POST_ERROR.FORBIDDEN])
    @Delete(':id')
    async deletePost(@CurrentUser() payload: JwtPayload, @Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.service.deleteMyPost(payload.id, id)
    }
}
