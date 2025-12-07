import { PrismaModule } from '@libs/prisma/prisma.module'
import { Module } from '@nestjs/common'
import { PostController } from './post.controller'
import { PostService } from './post.service'
import { PostQuery } from './post.query'

@Module({
    imports: [PrismaModule],
    controllers: [PostController],
    providers: [PostService, PostQuery]
})
export class PostModule {}
