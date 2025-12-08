-- DropForeignKey
ALTER TABLE "public"."notification" DROP CONSTRAINT "notification_user_id_fkey";

-- AlterTable
ALTER TABLE "base"."token" ALTER COLUMN "owner" SET DEFAULT 'USER';

-- AlterTable
ALTER TABLE "public"."notification" ALTER COLUMN "user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."notification" ADD CONSTRAINT "notification_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "base"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
