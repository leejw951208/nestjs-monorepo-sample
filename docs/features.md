# User App 추가 기능 명세서

## 목차

1. [Comment (댓글)](#1-comment-댓글)
2. [Like (좋아요)](#2-like-좋아요)
3. [비밀번호 변경](#3-비밀번호-변경)
4. [Bookmark (북마크)](#4-bookmark-북마크)
5. [검색](#5-검색)

---

## 1. Comment (댓글)

### 개요

게시글(Post)에 댓글을 작성, 수정, 삭제할 수 있는 기능

### Prisma 모델

```prisma
model Comment {
    id        Int      @id @default(autoincrement())
    content   String   @map("content") @db.Text
    postId    Int      @map("post_id")
    post      Post     @relation(fields: [postId], references: [id], onDelete: Cascade)
    userId    Int      @map("user_id")
    user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
    parentId  Int?     @map("parent_id")
    parent    Comment? @relation("CommentReplies", fields: [parentId], references: [id], onDelete: Cascade)
    replies   Comment[] @relation("CommentReplies")

    createdAt DateTime  @default(now()) @map("created_at")
    createdBy Int?      @map("created_by")
    updatedAt DateTime? @map("updated_at")
    updatedBy Int?      @map("updated_by")
    isDeleted Boolean?  @default(false) @map("is_deleted")
    deletedAt DateTime? @map("deleted_at")
    deletedBy Int?      @map("deleted_by")

    @@index([postId, isDeleted, createdAt])
    @@index([userId, isDeleted])
    @@map("comment")
    @@schema("base")
}
```

### API 엔드포인트

| Method | Endpoint | 설명 |
|--------|----------|------|
| GET | `/posts/:postId/comments/cursor` | 게시글 댓글 목록 조회 (Cursor Pagination) |
| POST | `/posts/:postId/comments` | 댓글 작성 |
| PATCH | `/posts/:postId/comments/:id` | 댓글 수정 |
| DELETE | `/posts/:postId/comments/:id` | 댓글 삭제 (Soft Delete) |

### Request/Response DTO

#### CommentCreateDto

```typescript
export class CommentCreateDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(1000)
    content: string

    @IsOptional()
    @IsInt()
    parentId?: number // 대댓글인 경우
}
```

#### CommentUpdateDto

```typescript
export class CommentUpdateDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(1000)
    content: string
}
```

#### CommentResponseDto

```typescript
export class CommentResponseDto {
    id: number
    content: string
    postId: number
    userId: number
    userName: string
    parentId: number | null
    replyCount: number
    createdAt: Date
    updatedAt: Date | null
}
```

### 에러 코드

```typescript
export const COMMENT_ERROR = {
    NOT_FOUND: {
        status: 404,
        code: 'COMMENT_ERROR_001',
        message: '댓글을 찾을 수 없습니다.'
    },
    FORBIDDEN: {
        status: 403,
        code: 'COMMENT_ERROR_002',
        message: '댓글에 대한 권한이 없습니다.'
    },
    PARENT_NOT_FOUND: {
        status: 404,
        code: 'COMMENT_ERROR_003',
        message: '부모 댓글을 찾을 수 없습니다.'
    }
}
```

---

## 2. Like (좋아요)

### 개요

게시글(Post)에 좋아요를 추가/취소할 수 있는 기능

### Prisma 모델

```prisma
model PostLike {
    id     Int  @id @default(autoincrement())
    postId Int  @map("post_id")
    post   Post @relation(fields: [postId], references: [id], onDelete: Cascade)
    userId Int  @map("user_id")
    user   User @relation(fields: [userId], references: [id], onDelete: Cascade)

    createdAt DateTime @default(now()) @map("created_at")

    @@unique([postId, userId])
    @@index([userId])
    @@map("post_like")
    @@schema("base")
}
```

### Post 모델 확장

```prisma
model Post {
    // ... 기존 필드
    likeCount Int @default(0) @map("like_count")
    likes     PostLike[]
}
```

### API 엔드포인트

| Method | Endpoint | 설명 |
|--------|----------|------|
| POST | `/posts/:id/like` | 좋아요 토글 (추가/취소) |
| GET | `/posts/:id/like` | 좋아요 여부 확인 |
| GET | `/posts/me/liked/cursor` | 내가 좋아요한 게시글 목록 |

### Request/Response DTO

#### PostLikeResponseDto

```typescript
export class PostLikeResponseDto {
    isLiked: boolean
    likeCount: number
}
```

### 에러 코드

```typescript
export const LIKE_ERROR = {
    POST_NOT_FOUND: {
        status: 404,
        code: 'LIKE_ERROR_001',
        message: '게시글을 찾을 수 없습니다.'
    }
}
```

---

## 3. 비밀번호 변경

### 개요

로그인 상태에서 현재 비밀번호를 확인 후 새 비밀번호로 변경하는 기능

### API 엔드포인트

| Method | Endpoint | 설명 |
|--------|----------|------|
| PATCH | `/users/me/password` | 비밀번호 변경 |

### Request/Response DTO

#### PasswordChangeDto

```typescript
export class PasswordChangeDto {
    @IsString()
    @IsNotEmpty()
    currentPassword: string

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
        message: '비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다.'
    })
    newPassword: string

    @IsString()
    @IsNotEmpty()
    confirmPassword: string
}
```

### 에러 코드

```typescript
export const PASSWORD_ERROR = {
    CURRENT_PASSWORD_NOT_MATCHED: {
        status: 400,
        code: 'PASSWORD_ERROR_001',
        message: '현재 비밀번호가 일치하지 않습니다.'
    },
    NEW_PASSWORD_SAME_AS_CURRENT: {
        status: 400,
        code: 'PASSWORD_ERROR_002',
        message: '새 비밀번호가 현재 비밀번호와 동일합니다.'
    },
    CONFIRM_PASSWORD_NOT_MATCHED: {
        status: 400,
        code: 'PASSWORD_ERROR_003',
        message: '새 비밀번호와 확인 비밀번호가 일치하지 않습니다.'
    }
}
```

### 비즈니스 로직

1. 현재 비밀번호 확인
2. 새 비밀번호와 확인 비밀번호 일치 여부 확인
3. 새 비밀번호가 현재 비밀번호와 다른지 확인
4. 비밀번호 해시 후 저장
5. (선택) 모든 리프레시 토큰 무효화

---

## 4. Bookmark (북마크)

### 개요

게시글(Post)을 북마크하여 나중에 다시 볼 수 있도록 저장하는 기능

### Prisma 모델

```prisma
model Bookmark {
    id     Int  @id @default(autoincrement())
    postId Int  @map("post_id")
    post   Post @relation(fields: [postId], references: [id], onDelete: Cascade)
    userId Int  @map("user_id")
    user   User @relation(fields: [userId], references: [id], onDelete: Cascade)

    createdAt DateTime @default(now()) @map("created_at")

    @@unique([postId, userId])
    @@index([userId, createdAt])
    @@map("bookmark")
    @@schema("base")
}
```

### API 엔드포인트

| Method | Endpoint | 설명 |
|--------|----------|------|
| POST | `/posts/:id/bookmark` | 북마크 토글 (추가/취소) |
| GET | `/posts/:id/bookmark` | 북마크 여부 확인 |
| GET | `/posts/me/bookmarked/cursor` | 내 북마크 목록 조회 (Cursor Pagination) |

### Request/Response DTO

#### BookmarkResponseDto

```typescript
export class BookmarkResponseDto {
    isBookmarked: boolean
}
```

#### BookmarkListResponseDto

```typescript
export class BookmarkListResponseDto {
    id: number
    postId: number
    post: PostResponseDto
    createdAt: Date
}
```

### 에러 코드

```typescript
export const BOOKMARK_ERROR = {
    POST_NOT_FOUND: {
        status: 404,
        code: 'BOOKMARK_ERROR_001',
        message: '게시글을 찾을 수 없습니다.'
    }
}
```

---

## 5. 검색

### 개요

게시글(Post)을 제목, 내용으로 검색하는 기능

### API 엔드포인트

| Method | Endpoint | 설명 |
|--------|----------|------|
| GET | `/posts/search` | 게시글 검색 (Offset Pagination) |

### Request/Response DTO

#### PostSearchRequestDto

```typescript
export class PostSearchRequestDto extends OffsetRequestDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(100)
    keyword: string

    @IsOptional()
    @IsEnum(SearchType)
    type?: SearchType = SearchType.ALL // TITLE, CONTENT, ALL
}

export enum SearchType {
    TITLE = 'TITLE',
    CONTENT = 'CONTENT',
    ALL = 'ALL'
}
```

### Prisma 쿼리 예시

```typescript
async searchPosts(keyword: string, type: SearchType, pagination: OffsetRequestDto) {
    const where: Prisma.PostWhereInput = {
        isDeleted: false,
        status: PostStatus.PUBLISHED,
        OR: type === SearchType.ALL
            ? [
                { title: { contains: keyword, mode: 'insensitive' } },
                { content: { contains: keyword, mode: 'insensitive' } }
            ]
            : type === SearchType.TITLE
                ? [{ title: { contains: keyword, mode: 'insensitive' } }]
                : [{ content: { contains: keyword, mode: 'insensitive' } }]
    }

    return this.prisma.post.findMany({
        where,
        skip: pagination.skip,
        take: pagination.take,
        orderBy: { createdAt: 'desc' }
    })
}
```

### 추가 고려사항

1. **Full-Text Search**: PostgreSQL의 `tsvector`, `tsquery`를 활용한 전문 검색
2. **검색어 하이라이팅**: 검색 결과에서 키워드 강조
3. **검색 기록**: 사용자의 최근 검색어 저장
4. **인기 검색어**: 전체 사용자의 인기 검색어 집계

---

## 파일 구조 예시

```
apps/user/src/v1/
├── auth/
├── user/
├── post/
├── notification/
├── comment/                 # 신규
│   ├── dto/
│   │   ├── comment-create.dto.ts
│   │   ├── comment-update.dto.ts
│   │   ├── comment-response.dto.ts
│   │   └── comment-cursor-request.dto.ts
│   ├── comment.controller.ts
│   ├── comment.module.ts
│   ├── comment.repository.ts
│   └── comment.service.ts
├── like/                    # 신규 (또는 post 모듈에 통합)
│   ├── dto/
│   │   └── like-response.dto.ts
│   ├── like.controller.ts
│   ├── like.module.ts
│   ├── like.repository.ts
│   └── like.service.ts
└── bookmark/                # 신규
    ├── dto/
    │   ├── bookmark-response.dto.ts
    │   └── bookmark-list-response.dto.ts
    ├── bookmark.controller.ts
    ├── bookmark.module.ts
    ├── bookmark.repository.ts
    └── bookmark.service.ts
```

---

## 구현 우선순위

1. **비밀번호 변경** - User 모듈에 엔드포인트 추가만 하면 됨
2. **검색** - Post 모듈에 엔드포인트 추가
3. **Like** - 간단한 토글 기능
4. **Bookmark** - Like와 유사한 구조
5. **Comment** - 새로운 모듈 + 대댓글 로직 필요
