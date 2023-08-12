/*
  Warnings:

  - You are about to drop the `[profiles]` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "[profiles]";

-- CreateTable
CREATE TABLE "profiles" (
    "id" SERIAL NOT NULL,
    "bio" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);
