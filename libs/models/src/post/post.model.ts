import { BaseModel } from '@libs/models/base/base.model'
import { Post, PostStatus } from '@prisma/client'

export class PostModel extends BaseModel implements Post {
    title: string
    content: string
    userId: number
    viewCount: number
    status: PostStatus

    private constructor(title: string, content: string, userId: number, viewCount: number, status: PostStatus) {
        super()
        this.title = title
        this.content = content
        this.userId = userId
        this.viewCount = viewCount
        this.status = status
    }

    static create(input: Pick<Post, 'title' | 'content' | 'userId' | 'status'>): PostModel {
        return new PostModel(input.title, input.content, input.userId, 0, input.status)
    }

    incrementViewCount(): void {
        this.viewCount += 1
    }
}
