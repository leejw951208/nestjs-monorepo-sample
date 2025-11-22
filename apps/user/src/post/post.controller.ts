import { CurrentUser } from '@libs/common/decorator/jwt-payload.decorator'
import { Public } from '@libs/common/decorator/public.decorator'
import { OffsetPageResDto } from '@libs/common/dto/page-res.dto'
import { JwtPayload } from '@libs/common/utils/jwt.util'
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common'
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger'
import { PostCreateDto } from './dto/post-create.dto'
import { PostListReqDto } from './dto/post-list.dto'
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

    @ApiOperation({ summary: '게시글 목록 조회 (공개)' })
    @ApiOkResponse({ type: OffsetPageResDto<PostResDto> })
    @Public()
    @Get()
    async getPostList(@Query() query: PostListReqDto): Promise<OffsetPageResDto<PostResDto>> {
        return this.service.getPostList(query)
    }

    @ApiOperation({ summary: '내 게시글 목록 조회' })
    @ApiOkResponse({ type: OffsetPageResDto<PostResDto> })
    @Get('me')
    async getMyPosts(@CurrentUser() payload: JwtPayload, @Query() query: PostListReqDto): Promise<OffsetPageResDto<PostResDto>> {
        return this.service.getMyPosts(payload, query)
    }

    @ApiOperation({ summary: '게시글 상세 조회 (공개)' })
    @ApiParam({ name: 'id', description: '게시글 ID', type: Number })
    @ApiOkResponse({ type: PostResDto })
    @Public()
    @Get(':id')
    async getPostById(@Param('id', ParseIntPipe) postId: number): Promise<PostResDto> {
        return this.service.getPostById(postId)
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
