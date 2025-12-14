-- AlterTable
ALTER TABLE "base"."admin" ALTER COLUMN "created_by" DROP NOT NULL;

-- AlterTable
ALTER TABLE "base"."admin_role" ALTER COLUMN "created_by" DROP NOT NULL;

-- AlterTable
ALTER TABLE "base"."permission" ALTER COLUMN "created_by" DROP NOT NULL;

-- AlterTable
ALTER TABLE "base"."post" ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "created_by" DROP NOT NULL;

-- AlterTable
ALTER TABLE "base"."role" ALTER COLUMN "created_by" DROP NOT NULL;

-- AlterTable
ALTER TABLE "base"."token" ALTER COLUMN "created_by" DROP NOT NULL;

-- AlterTable
ALTER TABLE "base"."token_fcm" ALTER COLUMN "created_by" DROP NOT NULL;

-- AlterTable
ALTER TABLE "base"."token_jwt" ALTER COLUMN "created_by" DROP NOT NULL;

-- AlterTable
ALTER TABLE "base"."user" ALTER COLUMN "created_by" DROP NOT NULL;

-- AlterTable
ALTER TABLE "base"."user_role" ALTER COLUMN "created_by" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."notification" ALTER COLUMN "created_by" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."notification_read" ALTER COLUMN "created_by" DROP NOT NULL;
