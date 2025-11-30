import { ApiOffsetPageOkResponse } from '@libs/common/decorator/api-page-ok-response.decorator'
import { CurrentUser } from '@libs/common/decorator/jwt-payload.decorator'
import { Public } from '@libs/common/decorator/public.decorator'
import { OffsetPaginationResDto } from '@libs/common/dto/pagination-res.dto'
import { JwtPayload } from '@libs/common/utils/jwt.util'
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common'
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger'
import { PostCreateDto } from './dto/post-create.dto'
import { PostOffsetPaginationReqDto } from './dto/post-offset-pagination-req.dto'
import { PostResDto } from './dto/post-res.dto'
import { PostUpdateDto } from './dto/post-update.dto'
import { PostService } from './post.service'

const path = 'post'
@ApiTags(path)
@ApiBearerAuth('JWT-Auth')
@Controller(path)
export class PostController {
    constructor(private readonly service: PostService) {}

    @ApiOperation({ summary: '게시글 작성' })
    @ApiBody({ type: PostCreateDto })
    @ApiOkResponse({ type: PostResDto })
    @Post()
    async createPost(@CurrentUser() payload: JwtPayload, @Body() reqDto: PostCreateDto): Promise<PostResDto> {
        return this.service.createPost(payload, reqDto)
    }

    @ApiOperation({ summary: '전체 게시글 목록 조회' })
    @ApiOffsetPageOkResponse({ type: PostResDto })
    @Public()
    @Get('offset')
    async getPostList(@Query() query: PostOffsetPaginationReqDto): Promise<OffsetPaginationResDto<PostResDto>> {
        return this.service.getPostByPagination(query)
    }

    @ApiOperation({ summary: '내 게시글 목록 조회' })
    @ApiOffsetPageOkResponse({ type: PostResDto })
    @Get('me/offset')
    async getMyPosts(
        @CurrentUser() payload: JwtPayload,
        @Query() query: PostOffsetPaginationReqDto
    ): Promise<OffsetPaginationResDto<PostResDto>> {
        return this.service.getMyPosts(payload, query)
    }

    @ApiOperation({ summary: '게시글 상세 조회' })
    @ApiParam({ name: 'id', description: '게시글 ID', type: Number })
    @ApiOkResponse({ type: PostResDto })
    @Get(':id')
    async getPostById(@CurrentUser() payload: JwtPayload, @Param('id', ParseIntPipe) postId: number): Promise<PostResDto> {
        return this.service.getPostById(payload, postId)
    }

    @ApiOperation({ summary: '게시글 수정' })
    @ApiParam({ name: 'id', description: '게시글 ID', type: Number })
    @ApiBody({ type: PostUpdateDto })
    @ApiOkResponse()
    @Patch(':id')
    async updatePost(
        @CurrentUser() payload: JwtPayload,
        @Param('id', ParseIntPipe) postId: number,
        @Body() reqDto: PostUpdateDto
    ): Promise<void> {
        return this.service.updatePost(payload, postId, reqDto)
    }

    @ApiOperation({ summary: '게시글 삭제 (Soft Delete)' })
    @ApiParam({ name: 'id', description: '게시글 ID', type: Number })
    @ApiOkResponse()
    @Delete(':id')
    async deletePost(@CurrentUser() payload: JwtPayload, @Param('id', ParseIntPipe) postId: number): Promise<void> {
        return this.service.deletePost(payload, postId)
    }
}
