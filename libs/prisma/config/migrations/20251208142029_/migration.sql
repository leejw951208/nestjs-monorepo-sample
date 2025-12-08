/*
  Warnings:

  - You are about to drop the column `createdAt` on the `notification` table. All the data in the column will be lost.
  - You are about to drop the column `isRead` on the `notification` table. All the data in the column will be lost.
  - You are about to drop the column `readAt` on the `notification` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `notification` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `notification` table. All the data in the column will be lost.
  - Added the required column `created_by` to the `notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `notification` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."notification" DROP CONSTRAINT "notification_userId_fkey";

-- DropIndex
DROP INDEX "public"."notification_userId_createdAt_idx";

-- DropIndex
DROP INDEX "public"."notification_userId_isRead_idx";

-- AlterTable
ALTER TABLE "public"."notification" DROP COLUMN "createdAt",
DROP COLUMN "isRead",
DROP COLUMN "readAt",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "created_by" INTEGER NOT NULL,
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "deleted_by" INTEGER,
ADD COLUMN     "is_deleted" BOOLEAN DEFAULT false,
ADD COLUMN     "is_read" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "read_at" TIMESTAMP(3),
ADD COLUMN     "updated_at" TIMESTAMP(3),
ADD COLUMN     "updated_by" INTEGER,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "notification_user_id_created_at_idx" ON "public"."notification"("user_id", "created_at");

-- CreateIndex
CREATE INDEX "notification_user_id_is_read_idx" ON "public"."notification"("user_id", "is_read");

-- AddForeignKey
ALTER TABLE "public"."notification" ADD CONSTRAINT "notification_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "base"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
