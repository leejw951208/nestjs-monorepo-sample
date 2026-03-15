---
name: 프로젝트 기술 스택 및 아키텍처
description: nestjs-starterkit-monorepo의 기술 스택, 아키텍처 패턴, DB 스키마 규약
type: project
---

## 기술 스택

- 프레임워크: NestJS 11, TypeScript 5.7
- 데이터베이스: PostgreSQL (멀티 스키마: public, base, main)
- ORM: Prisma 7.2 + @prisma/adapter-pg (커넥션 풀 max 10)
- 캐시: Redis (ioredis)
- 인증: Passport.js + JWT
- 패키지 관리: pnpm workspace
- API 문서: Swagger (OpenAPI)

## 앱 구성

| 앱 | 포트 | API 접두사 | Swagger |
|-----|------|-----------|---------|
| User App | 3000 | /api/v1 | /api/docs |
| Admin App | 3001 | /admin/api/v1 | /admin/api/docs |

## 아키텍처 패턴

- 레이어드 아키텍처: Controller → Service → Repository → Prisma
- Soft Delete: 모든 모델에 isDeleted, deletedAt, deletedBy 적용
- 감사 필드(Audit Trail): CLS에서 자동 주입 (createdBy, updatedBy, deletedBy)
- API 버전 관리: URI 기반 (defaultVersion: '1')
- 앱 간 독립성: User App과 Admin App은 libs/common, libs/prisma만 공유

## DB 공통 필드 (모든 모델 적용)

```
createdAt  DateTime   @default(now())
createdBy  Int?
updatedAt  DateTime?
updatedBy  Int?
isDeleted  Boolean?   @default(false)
deletedAt  DateTime?
deletedBy  Int?
```

## RBAC 구조

User/Admin → UserRole/AdminRole → Role → RolePermission → Permission(scope, action)

시드 역할:
- SUPER_ADMIN: 모든 권한
- ADMIN: user, post, notification 관련 권한
- USER: post 관련 권한 (post:write, post:delete)

**Why:** 멀티 앱 모노레포 구조에서 공통 인프라를 최대한 재사용하면서 비즈니스 로직을 앱별로 분리하는 설계 철학을 따름

**How to apply:** PRD 작성 시 기술 스택 섹션에 위 내용을 기반으로 작성하고, 권한 요구사항은 RBAC 구조를 참조하여 scope:action 형식으로 명시
