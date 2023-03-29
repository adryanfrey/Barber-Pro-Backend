/*
  Warnings:

  - Made the column `time` on table `clients` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "clients" ALTER COLUMN "time" SET NOT NULL;
