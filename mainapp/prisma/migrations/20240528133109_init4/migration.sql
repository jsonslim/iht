/*
  Warnings:

  - Added the required column `date_testing` to the `test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Patient" ALTER COLUMN "date_testing" SET DATA TYPE DATE,
ALTER COLUMN "date_birthdate" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "test" ADD COLUMN     "date_testing" DATE NOT NULL;
