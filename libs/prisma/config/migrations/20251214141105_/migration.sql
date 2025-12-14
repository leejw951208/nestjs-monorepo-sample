/*
  Warnings:

  - You are about to drop the column `is_read` on the `notification` table. All the data in the column will be lost.
  - You are about to drop the column `read_at` on the `notification` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."notification" DROP COLUMN "is_read",
DROP COLUMN "read_at";
