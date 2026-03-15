---
name: PRD 작성 규약 및 반복 패턴
description: 이 프로젝트의 PRD 작성 시 반복적으로 등장하는 요구사항 기준값, 패턴, 규약
type: project
---

## 성능 기준값 (비기능 요구사항)

- 단건 조회 API: P95 100ms 이하
- 작성/수정 API: P95 200ms 이하
- 목록 조회 API: P95 300ms 이하

## 공통 에러 코드 패턴

| 에러 코드 | HTTP | 설명 |
|----------|------|------|
| AUTH_ERROR_001 | 401 | Access Token 미제공 |
| AUTH_ERROR_008 | 403 | RBAC 권한 없음 |
| {DOMAIN}_ERROR_001 | 404 | 리소스 없음 |
| {DOMAIN}_ERROR_002 | 403 | 소유권 없음 |

## 응답 형식 규약

```json
// 단건: { "data": { ... } }
// Offset 목록: { "data": [...], "meta": { "page": 1, "totalCount": 50 } }
// Cursor 목록: { "data": [...], "meta": { "nextCursor": 80 } }
// 에러: { "timestamp", "path", "status", "code", "message" }
```

## Soft Delete 패턴

물리 삭제 금지. 삭제 시 반드시 isDeleted: true, deletedAt, deletedBy 기록.

## 페이지네이션 방식

- Offset: findMany + count 병렬 실행, 페이지 번호 UI용
- Cursor: size+1 조회로 다음 페이지 여부 확인, 무한 스크롤 UI용

## 수용 기준(AC) 작성 형식

Given-When-Then 형식 사용:
- Given: 전제 조건
- When: 실행 액션
- Then: 기대 결과

## PRD 저장 경로

docs/prd/{domain}-prd.md

## 기능 ID 명명 규칙

FR-{번호}: 기능 요구사항 (예: FR-001)
NFR-{번호}: 비기능 요구사항 (예: NFR-001)
US-{번호}: 사용자 스토리 (예: US-001)

**Why:** 이 프로젝트에서 반복적으로 등장하는 패턴을 표준화하여 PRD 간 일관성 확보

**How to apply:** 새 PRD 작성 시 이 규약을 기본 템플릿으로 활용하고, 도메인별 에러 코드는 {DOMAIN}_ERROR_{번호} 형식 준수
