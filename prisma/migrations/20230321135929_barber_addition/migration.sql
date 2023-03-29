/*
  Warnings:

  - Added the required column `barber_id` to the `clients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "clients" ADD COLUMN     "barber_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Barbers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Barbers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Barbers" ADD CONSTRAINT "Barbers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_barber_id_fkey" FOREIGN KEY ("barber_id") REFERENCES "Barbers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
