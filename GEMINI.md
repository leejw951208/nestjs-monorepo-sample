# 알림 API 개발 계획 (완료)

1.  [x] **Notification 모델 및 기존 알림 기능 분석**
2.  [x] **Admin 알림 모듈 디렉토리 생성**
3.  [x] **필요 파일 생성 및 기본 구조 설정**
    *   `apps/admin/src/v1/notification/dto/create-notification.req.dto.ts`
    *   `apps/admin/src/v1/notification/dto/notification-list.req.dto.ts`
    *   `apps/admin/src/v1/notification/dto/notification.res.dto.ts`
    *   `apps/admin/src/v1/notification/notification.query.ts`
    *   `apps/admin/src/v1/notification/notification.service.ts`
    *   `apps/admin/src/v1/notification/notification.controller.ts`
    *   `apps/admin/src/v1/notification/notification.module.ts`
4.  [x] **NotificationModule 등록**
5.  [x] **기능 구현**
    *   전체/특정 사용자 발송 (userId optional 처리)
    *   Offset 페이징 조회
6.  [x] **코드 검토 및 테스트**
    *   `apps/admin/src/v1/notification/notification.service.spec.ts` 작성 및 수정 완료
    *   User 앱 영향도 확인 (DTO 수정 불필요, 쿼리 수정 추후 필요 가능)
