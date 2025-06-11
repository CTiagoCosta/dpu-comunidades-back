/*
  Warnings:

  - You are about to drop the column `tipoAtendimentoTriagemId` on the `Assistido` table. All the data in the column will be lost.
  - You are about to drop the column `tipoAtendimentoTriagemId` on the `TipoPrioridade` table. All the data in the column will be lost.
  - You are about to drop the `TipoAtendimentoTriagem` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tipoAtendimentoId` to the `Assistido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoServicoAtendimentoId` to the `Assistido` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Assistido" DROP CONSTRAINT "Assistido_tipoAtendimentoTriagemId_fkey";

-- DropForeignKey
ALTER TABLE "TipoPrioridade" DROP CONSTRAINT "TipoPrioridade_tipoAtendimentoTriagemId_fkey";

-- AlterTable
ALTER TABLE "Assistido" DROP COLUMN "tipoAtendimentoTriagemId",
ADD COLUMN     "tipoAtendimentoId" INTEGER NOT NULL,
ADD COLUMN     "tipoServicoAtendimentoId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TipoPrioridade" DROP COLUMN "tipoAtendimentoTriagemId",
ADD COLUMN     "tipoAtendimentoId" INTEGER;

-- DropTable
DROP TABLE "TipoAtendimentoTriagem";

-- CreateTable
CREATE TABLE "TipoServicoAtendimento" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "atendimentoId" INTEGER NOT NULL,

    CONSTRAINT "TipoServicoAtendimento_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TipoPrioridade" ADD CONSTRAINT "TipoPrioridade_tipoAtendimentoId_fkey" FOREIGN KEY ("tipoAtendimentoId") REFERENCES "TipoAtendimento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assistido" ADD CONSTRAINT "Assistido_tipoServicoAtendimentoId_fkey" FOREIGN KEY ("tipoServicoAtendimentoId") REFERENCES "TipoServicoAtendimento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assistido" ADD CONSTRAINT "Assistido_tipoAtendimentoId_fkey" FOREIGN KEY ("tipoAtendimentoId") REFERENCES "TipoAtendimento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TipoServicoAtendimento" ADD CONSTRAINT "TipoServicoAtendimento_atendimentoId_fkey" FOREIGN KEY ("atendimentoId") REFERENCES "TipoAtendimento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
