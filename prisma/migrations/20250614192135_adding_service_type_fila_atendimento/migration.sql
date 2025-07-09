/*
  Warnings:

  - You are about to drop the column `tipoAtendimentoId` on the `atendimentos` table. All the data in the column will be lost.
  - Added the required column `tipoAtendimentoId` to the `fila_atendimentos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "atendimentos" DROP CONSTRAINT "atendimentos_tipoAtendimentoId_fkey";

-- AlterTable
ALTER TABLE "atendimentos" DROP COLUMN "tipoAtendimentoId";

-- AlterTable
ALTER TABLE "fila_atendimentos" ADD COLUMN     "tipoAtendimentoId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "fila_atendimentos" ADD CONSTRAINT "fila_atendimentos_tipoAtendimentoId_fkey" FOREIGN KEY ("tipoAtendimentoId") REFERENCES "tipo_atendimento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
