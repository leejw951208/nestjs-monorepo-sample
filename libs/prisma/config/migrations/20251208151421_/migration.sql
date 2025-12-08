-- CreateTable
CREATE TABLE "public"."notification_read" (
    "id" SERIAL NOT NULL,
    "notification_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" INTEGER NOT NULL,
    "updated_at" TIMESTAMP(3),
    "updated_by" INTEGER,
    "is_deleted" BOOLEAN DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" INTEGER,

    CONSTRAINT "notification_read_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."notification_read" ADD CONSTRAINT "notification_read_notification_id_fkey" FOREIGN KEY ("notification_id") REFERENCES "public"."notification"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."notification_read" ADD CONSTRAINT "notification_read_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "base"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
