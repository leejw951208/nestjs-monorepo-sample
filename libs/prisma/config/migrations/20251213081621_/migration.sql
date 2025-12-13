/*
  Warnings:

  - You are about to drop the column `login_id` on the `user` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "base"."user_login_id_key";

-- AlterTable
ALTER TABLE "base"."user" DROP COLUMN "login_id";
