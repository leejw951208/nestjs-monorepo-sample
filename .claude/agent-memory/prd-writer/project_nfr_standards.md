---
name: 프로젝트 도메인 규칙 및 반복 패턴
description: 이 프로젝트에서 반복적으로 등장하는 구현 패턴 — PRD 기능 요구사항/비기능 요구사항 작성 시 활용
type: project
---

**Why:** 프로젝트 전반에 일관되게 적용된 패턴을 PRD에 정확히 반영하기 위해 기록.

**How to apply:** 기능 요구사항 설명 및 비기능 요구사항 작성 시 아래 패턴을 기준으로 서술할 것.

## 인증 패턴

- `JwtAccessGuard`가 `APP_GUARD`로 전역 등록 → 모든 엔드포인트 기본 인증 필요
- 인증 우회 시 `@Public()` 데코레이터 사용
- JWT 페이로드: `{ id, type('ac'|'re'), aud('admin'|'user'), jti, issuer }`
- Access Token TTL: 1시간 / Refresh Token TTL: 7일

## RBAC 패턴 (Admin App 전용)

- `@Permission(scope, action)` + `@UseGuards(PermissionGuard)` 조합 필수
- 권한 표기 형식: `{scope}:{action}` (예: `user:read`, `user:update`, `user:delete`)
- 시드 역할: SUPER_ADMIN(전체), ADMIN(user/post/notification), USER(post)

## Soft Delete 패턴

- 물리 삭제 없음. 탈퇴/삭제 시 `status=WITHDRAWN`, `isDeleted=true`, `deletedAt`, `deletedBy` 설정
- 모든 조회 쿼리에 `isDeleted: false` 기본 필터 적용
- 이미 삭제된 리소스 재삭제 시 USER_ERROR_005(400) 반환

## 응답 직렬화 패턴

- `plainToInstance(ResponseDto, entity, { excludeExtraneousValues: true })` 사용
- 응답 DTO의 `@Expose()` 데코레이터가 붙은 필드만 응답에 포함 → password 등 민감 필드 자동 제외

## Rate Limiting 패턴

- Redis 기반 분산 Rate Limiting
- 적용 방식: `@UseGuards(CustomThrottlerGuard)` + `@Throttle({ ip: { limit, ttl }, user: { limit, ttl } })`
- 전역 기본값: IP/User 각 60초당 10,000회 (실질적으로 무제한)
- 민감 엔드포인트 오버라이드 기준값: 5회/분 (IP + User)

## 페이지네이션 패턴

- Offset: `OffsetRequestDto (page, size, order)` → `OffsetResponseDto<T> { data: T[], meta: { page, totalCount } }`
- Cursor: `CursorRequestDto (lastCursor?, size, order)` → `CursorResponseDto<T> { data: T[], meta: { nextCursor } }`

## 에러 처리 패턴

- `BaseException(ERROR_CODE, className)` 으로 커스텀 예외 발생
- `GlobalExceptionHandler`가 전역 처리
- 에러 코드 네이밍: `{DOMAIN}_ERROR_{3자리숫자}` (예: USER_ERROR_001)

## 감사 필드 자동 주입

- `CustomClsMiddleware`가 JWT를 디코딩(검증 없이)하여 CLS에 `id`, `aud`, `agent`, `clientIp` 저장
- Repository에서 `cls.get('id')`로 `createdBy`, `updatedBy`, `deletedBy` 자동 입력

## 공통 모델 필드

모든 테이블에 공통 적용:
`createdAt`, `createdBy`, `updatedAt`, `updatedBy`, `isDeleted (default: false)`, `deletedAt`, `deletedBy`
