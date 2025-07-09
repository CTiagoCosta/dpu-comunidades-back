/*
  Warnings:

  - The primary key for the `assistido` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `atendimentos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `documentos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `fila_atendimentos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `membro_familiar` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `processos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `profissao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `tipoPrioridadeId` to the `fila_atendimentos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "atendimentos" DROP CONSTRAINT "atendimentos_filaId_fkey";

-- DropForeignKey
ALTER TABLE "atendimentos" DROP CONSTRAINT "atendimentos_operadorId_fkey";

-- DropForeignKey
ALTER TABLE "atendimentos" DROP CONSTRAINT "atendimentos_profissaoId_fkey";

-- DropForeignKey
ALTER TABLE "documentos" DROP CONSTRAINT "documentos_atendimentoId_fkey";

-- DropForeignKey
ALTER TABLE "documentos" DROP CONSTRAINT "documentos_operadorUploadId_fkey";

-- DropForeignKey
ALTER TABLE "fila_atendimentos" DROP CONSTRAINT "fila_atendimentos_operadorAtendimentoId_fkey";

-- DropForeignKey
ALTER TABLE "fila_atendimentos" DROP CONSTRAINT "fila_atendimentos_operadorTriagemId_fkey";

-- DropForeignKey
ALTER TABLE "formularios_preenchidos" DROP CONSTRAINT "formularios_preenchidos_atendimentoId_fkey";

-- DropForeignKey
ALTER TABLE "membro_familiar" DROP CONSTRAINT "membro_familiar_atendimentoId_fkey";

-- DropForeignKey
ALTER TABLE "processos" DROP CONSTRAINT "processos_atendimentoId_fkey";

-- AlterTable
ALTER TABLE "assistido" DROP CONSTRAINT "assistido_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "assistido_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "assistido_id_seq";

-- AlterTable
ALTER TABLE "atendimentos" DROP CONSTRAINT "atendimentos_pkey",
ALTER COLUMN "profissaoId" SET DATA TYPE TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "operadorId" SET DATA TYPE TEXT,
ALTER COLUMN "filaId" SET DATA TYPE TEXT,
ADD CONSTRAINT "atendimentos_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "atendimentos_id_seq";

-- AlterTable
ALTER TABLE "documentos" DROP CONSTRAINT "documentos_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "atendimentoId" SET DATA TYPE TEXT,
ALTER COLUMN "operadorUploadId" SET DATA TYPE TEXT,
ADD CONSTRAINT "documentos_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "documentos_id_seq";

-- AlterTable
ALTER TABLE "fila_atendimentos" DROP CONSTRAINT "fila_atendimentos_pkey",
ADD COLUMN     "migrante" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tipoPrioridadeId" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "operadorTriagemId" SET DATA TYPE TEXT,
ALTER COLUMN "operadorAtendimentoId" SET DATA TYPE TEXT,
ADD CONSTRAINT "fila_atendimentos_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "fila_atendimentos_id_seq";

-- AlterTable
ALTER TABLE "formularios_preenchidos" ALTER COLUMN "atendimentoId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "membro_familiar" DROP CONSTRAINT "membro_familiar_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "atendimentoId" SET DATA TYPE TEXT,
ADD CONSTRAINT "membro_familiar_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "membro_familiar_id_seq";

-- AlterTable
ALTER TABLE "processos" DROP CONSTRAINT "processos_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "atendimentoId" SET DATA TYPE TEXT,
ADD CONSTRAINT "processos_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "processos_id_seq";

-- AlterTable
ALTER TABLE "profissao" DROP CONSTRAINT "profissao_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "profissao_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "profissao_id_seq";

-- AlterTable
ALTER TABLE "usuarios" DROP CONSTRAINT "usuarios_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "usuarios_id_seq";

-- AddForeignKey
ALTER TABLE "fila_atendimentos" ADD CONSTRAINT "fila_atendimentos_operadorTriagemId_fkey" FOREIGN KEY ("operadorTriagemId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fila_atendimentos" ADD CONSTRAINT "fila_atendimentos_operadorAtendimentoId_fkey" FOREIGN KEY ("operadorAtendimentoId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fila_atendimentos" ADD CONSTRAINT "fila_atendimentos_tipoPrioridadeId_fkey" FOREIGN KEY ("tipoPrioridadeId") REFERENCES "tipo_prioridade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_profissaoId_fkey" FOREIGN KEY ("profissaoId") REFERENCES "profissao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_operadorId_fkey" FOREIGN KEY ("operadorId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_filaId_fkey" FOREIGN KEY ("filaId") REFERENCES "fila_atendimentos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "processos" ADD CONSTRAINT "processos_atendimentoId_fkey" FOREIGN KEY ("atendimentoId") REFERENCES "atendimentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "formularios_preenchidos" ADD CONSTRAINT "formularios_preenchidos_atendimentoId_fkey" FOREIGN KEY ("atendimentoId") REFERENCES "atendimentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documentos" ADD CONSTRAINT "documentos_atendimentoId_fkey" FOREIGN KEY ("atendimentoId") REFERENCES "atendimentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documentos" ADD CONSTRAINT "documentos_operadorUploadId_fkey" FOREIGN KEY ("operadorUploadId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membro_familiar" ADD CONSTRAINT "membro_familiar_atendimentoId_fkey" FOREIGN KEY ("atendimentoId") REFERENCES "atendimentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
