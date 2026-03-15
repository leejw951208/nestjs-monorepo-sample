---
name: project_architecture
description: NestJS 모노레포 프로젝트 아키텍처 - 앱 구조, 공통 라이브러리 역할, 주요 기술 스택
type: project
---

## 전체 구조

- apps/user/ - 일반 사용자 REST API (Port 3000)
- apps/admin/ - 관리자 REST API (Port 3001)
- libs/common/ - 공통 유틸리티 (@libs/common): Guard, Service, Exception, Throttler, Decorator
- libs/prisma/ - Prisma ORM (@libs/prisma): DB 모델 및 PrismaService

## 주요 기술 스택

NestJS 11, TypeScript, Prisma, PostgreSQL, Redis (ioredis), JWT, Passport, bcrypt, class-validator/transformer

## 인증 구조

- JWT Access Token + Refresh Token (Rotation 방식)
- Refresh Token: DB(Token + TokenJwt 테이블) + Redis 이중 저장
- JTI(JWT ID)로 리프레시 토큰 단건 삭제 가능
- @Public() 데코레이터로 인증 우회
- Owner enum: USER | ADMIN (토큰 수신자 구분)
- 쿠키(웹) + Authorization 헤더(앱) 이중 지원

## Rate Limiting 구조

- CustomThrottlerGuard: IP 기반 + User 기반 이중 지원
- CustomThrottlerStorage: Redis INCR으로 원자적 카운팅
- @Throttle({ ip: {...}, user: {...} }) 데코레이터로 엔드포인트별 설정
- 비밀번호 재설정: @Throttle(IP) + Redis INCR(이메일) 이중 제한

## 비밀번호 재설정 플로우 (2단계 단순화, 2026-03-15 변경)

1. POST /auth/password-reset/request: 이메일+전화번호 검증 → resetToken 발급 (Redis, 5분 TTL)
2. PATCH /auth/password-reset: resetToken + newPassword → 비밀번호 변경 + 모든 RT 폐기

**Why:** 3단계 OTP 방식에서 2단계로 단순화 (이메일 OTP 제거)

## 에러 코드 체계

- AUTH_ERROR, USER_ERROR, POST_ERROR, NOTIFICATION_ERROR, THROTTLER_ERROR
- BaseException(errorCode, constructorName) 패턴 사용
- THROTTLER_ERROR.RATE_LIMIT_EXCEEDED (status 400) vs AUTH_ERROR.RATE_LIMIT_EXCEEDED (status 429) 별도 존재
