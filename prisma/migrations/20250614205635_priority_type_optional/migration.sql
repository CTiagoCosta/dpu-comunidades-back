-- DropForeignKey
ALTER TABLE "fila_atendimentos" DROP CONSTRAINT "fila_atendimentos_tipoPrioridadeId_fkey";

-- AlterTable
ALTER TABLE "fila_atendimentos" ALTER COLUMN "tipoPrioridadeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "fila_atendimentos" ADD CONSTRAINT "fila_atendimentos_tipoPrioridadeId_fkey" FOREIGN KEY ("tipoPrioridadeId") REFERENCES "tipo_prioridade"("id") ON DELETE SET NULL ON UPDATE CASCADE;
