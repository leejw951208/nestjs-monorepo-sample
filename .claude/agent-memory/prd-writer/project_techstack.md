---
name: 프로젝트 기술 스택 및 아키텍처
description: nestjs-starterkit-monorepo의 기술 스택, 앱 구성, API 규칙 — PRD 작성 시 기술 요구사항 섹션에 반영
type: project
---

NestJS 11 + TypeScript 5.7 기반 모노레포. User App(포트 3000)과 Admin App(포트 3001) 두 앱으로 구성.

**Why:** 사용자 기능과 관리 기능의 권한 경계를 앱 수준에서 분리하여 보안을 강화.

**How to apply:** PRD 기술 스택 섹션에 아래 기준값을 그대로 사용할 것.

## 기술 스택 기준값

| 분류 | 기술 |
|------|------|
| 프레임워크 | NestJS 11, TypeScript 5.7 |
| DB | PostgreSQL + Prisma 7.2 (`@prisma/adapter-pg`, 커넥션 풀 max 10) |
| 캐시 | Redis (ioredis) |
| 인증 | Passport.js + JWT |
| 유효성 검증 | class-validator, class-transformer |
| API 문서 | Swagger (OpenAPI) |
| 패키지 관리 | pnpm workspace |

## API 경로 규칙

- User App: `/api/v1/...`, Swagger: `/api/docs`
- Admin App: `/admin/api/v1/...`, Swagger: `/admin/api/docs`
- URI 기반 버전 관리 (`defaultVersion: '1'`)

## 공통 인프라

- `@libs/common`: `@Global()` 모듈, 가드/데코레이터/예외처리/공통DTO 제공
- `@libs/prisma`: `@Global()` 모듈, PrismaService + User/UserStatus 등 모델 제공
- CLS(nestjs-cls): 요청별 사용자 ID 컨텍스트 저장 → 감사 필드(`createdBy`, `updatedBy`, `deletedBy`) 자동 주입
