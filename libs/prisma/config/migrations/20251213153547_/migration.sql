-- CreateTable
CREATE TABLE "base"."token_jwt" (
    "id" SERIAL NOT NULL,
    "token_id" INTEGER NOT NULL,
    "jti" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" INTEGER NOT NULL,
    "updated_at" TIMESTAMP(3),
    "updated_by" INTEGER,
    "is_deleted" BOOLEAN DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" INTEGER,

    CONSTRAINT "token_jwt_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "base"."token_jwt" ADD CONSTRAINT "token_jwt_token_id_fkey" FOREIGN KEY ("token_id") REFERENCES "base"."token"("id") ON DELETE CASCADE ON UPDATE CASCADE;
