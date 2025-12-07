-- CreateIndex
CREATE INDEX "post_user_id_status_is_deleted_idx" ON "base"."post"("user_id", "status", "is_deleted");

-- CreateIndex
CREATE INDEX "post_status_is_deleted_id_idx" ON "base"."post"("status", "is_deleted", "id");
