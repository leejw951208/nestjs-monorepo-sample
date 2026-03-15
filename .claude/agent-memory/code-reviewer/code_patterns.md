---
name: code_patterns
description: 프로젝트 코딩 컨벤션 및 반복적으로 발견된 패턴과 주의사항
type: project
---

## 코딩 컨벤션

- 모든 주석, 커밋 메시지: 한국어
- 변수명/함수명: 영어 (camelCase)
- DTO: {Action}{Resource}{Request/Response}Dto 네이밍
- Repository 패턴으로 DB 접근 추상화
- plainToInstance + excludeExtraneousValues: true 로 응답 직렬화
- ResponseDto<T> 래퍼로 API 응답 통일

## 반복 발견 패턴

- @Public() + @Post: 공개 엔드포인트는 @Public() + Guard 조합
- Redis INCR 패턴: count === 1 일 때 expire 설정 (TTL 레이스 컨디션 방어)
- 비밀번호: bcrypt hash + compare (CryptoService 위임)
- 리프레시 토큰: DB + Redis 이중 저장 (Redis는 캐시, DB는 영구)
- UserMeController: /users/me 하위 리소스를 별도 컨트롤러로 분리

## 주의사항 (리뷰 중 발견)

- resetToken이 평문으로 클라이언트에 노출됨 (단기 TTL로 위험 완화, HTTPS 전제)
- THROTTLER_ERROR(status 400) vs AUTH_ERROR.RATE_LIMIT_EXCEEDED(status 429) 중복 에러 코드
- 이메일 기반 레이트 리밋 카운터가 사용자 미존재 시에도 증가함 (사용자 열거 공격 완화 의도로 보임)
- TokenService.addUserTokenToRedisList 에 레이스 컨디션 잠재적 가능성 (get-then-set 패턴)
- resetPassword에서 redis.del과 updatePassword가 순차 실행 (비원자적) - 중간 실패 시 토큰 삭제되어 재시도 불가
