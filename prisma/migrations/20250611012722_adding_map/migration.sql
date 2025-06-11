/*
  Warnings:

  - You are about to drop the `Assistido` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CompetenciaJudicial` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EstadoCivil` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MembroFamiliar` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profissao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TipoAtendimento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TipoDemandaPrevidenciaria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TipoDomicilio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TipoPrioridade` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TipoServicoAtendimento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TipoVulnerabilidade` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Assistido" DROP CONSTRAINT "Assistido_tipoAtendimentoId_fkey";

-- DropForeignKey
ALTER TABLE "Assistido" DROP CONSTRAINT "Assistido_tipoPrioridadeId_fkey";

-- DropForeignKey
ALTER TABLE "Assistido" DROP CONSTRAINT "Assistido_tipoServicoAtendimentoId_fkey";

-- DropForeignKey
ALTER TABLE "MembroFamiliar" DROP CONSTRAINT "MembroFamiliar_atendimentoId_fkey";

-- DropForeignKey
ALTER TABLE "TipoPrioridade" DROP CONSTRAINT "TipoPrioridade_tipoAtendimentoId_fkey";

-- DropForeignKey
ALTER TABLE "TipoServicoAtendimento" DROP CONSTRAINT "TipoServicoAtendimento_atendimentoId_fkey";

-- DropForeignKey
ALTER TABLE "atendimentos" DROP CONSTRAINT "atendimentos_competenciaJudicialId_fkey";

-- DropForeignKey
ALTER TABLE "atendimentos" DROP CONSTRAINT "atendimentos_estadoCivilId_fkey";

-- DropForeignKey
ALTER TABLE "atendimentos" DROP CONSTRAINT "atendimentos_profissaoId_fkey";

-- DropForeignKey
ALTER TABLE "atendimentos" DROP CONSTRAINT "atendimentos_tipoAtendimentoId_fkey";

-- DropForeignKey
ALTER TABLE "atendimentos" DROP CONSTRAINT "atendimentos_tipoDemandaPrevidenciariaId_fkey";

-- DropForeignKey
ALTER TABLE "atendimentos" DROP CONSTRAINT "atendimentos_tipoDomicilioId_fkey";

-- DropTable
DROP TABLE "Assistido";

-- DropTable
DROP TABLE "CompetenciaJudicial";

-- DropTable
DROP TABLE "EstadoCivil";

-- DropTable
DROP TABLE "MembroFamiliar";

-- DropTable
DROP TABLE "Profissao";

-- DropTable
DROP TABLE "TipoAtendimento";

-- DropTable
DROP TABLE "TipoDemandaPrevidenciaria";

-- DropTable
DROP TABLE "TipoDomicilio";

-- DropTable
DROP TABLE "TipoPrioridade";

-- DropTable
DROP TABLE "TipoServicoAtendimento";

-- DropTable
DROP TABLE "TipoVulnerabilidade";

-- CreateTable
CREATE TABLE "tipo_atendimento" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "tipo_atendimento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_prioridade" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "valorPrioridade" INTEGER NOT NULL,
    "tipoAtendimentoId" INTEGER,

    CONSTRAINT "tipo_prioridade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "assistido" (
    "id" SERIAL NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "nomeSocial" TEXT,
    "cpf" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "dataEntrada" TIMESTAMP(3) NOT NULL,
    "descricaoPrioridade" TEXT,
    "tipoAtendimentoId" INTEGER NOT NULL,
    "tipoServicoAtendimentoId" INTEGER NOT NULL,
    "tipoPrioridadeId" INTEGER NOT NULL,

    CONSTRAINT "assistido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_servico_atendimento" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "atendimentoId" INTEGER NOT NULL,

    CONSTRAINT "tipo_servico_atendimento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estado_civil" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "estado_civil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profissao" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "profissao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_domicilio" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "tipo_domicilio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "membro_familiar" (
    "id" SERIAL NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rendaMensal" DOUBLE PRECISION NOT NULL,
    "atendimentoId" INTEGER NOT NULL,

    CONSTRAINT "membro_familiar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_vulnerabilidae" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "tipo_vulnerabilidae_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_demanda_previdenciaria" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "tipo_demanda_previdenciaria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "competencia_judicial" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "competencia_judicial_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_tipoAtendimentoId_fkey" FOREIGN KEY ("tipoAtendimentoId") REFERENCES "tipo_atendimento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_estadoCivilId_fkey" FOREIGN KEY ("estadoCivilId") REFERENCES "estado_civil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_profissaoId_fkey" FOREIGN KEY ("profissaoId") REFERENCES "profissao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_tipoDomicilioId_fkey" FOREIGN KEY ("tipoDomicilioId") REFERENCES "tipo_domicilio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_tipoDemandaPrevidenciariaId_fkey" FOREIGN KEY ("tipoDemandaPrevidenciariaId") REFERENCES "tipo_demanda_previdenciaria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_competenciaJudicialId_fkey" FOREIGN KEY ("competenciaJudicialId") REFERENCES "competencia_judicial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tipo_prioridade" ADD CONSTRAINT "tipo_prioridade_tipoAtendimentoId_fkey" FOREIGN KEY ("tipoAtendimentoId") REFERENCES "tipo_atendimento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assistido" ADD CONSTRAINT "assistido_tipoServicoAtendimentoId_fkey" FOREIGN KEY ("tipoServicoAtendimentoId") REFERENCES "tipo_servico_atendimento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assistido" ADD CONSTRAINT "assistido_tipoAtendimentoId_fkey" FOREIGN KEY ("tipoAtendimentoId") REFERENCES "tipo_atendimento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assistido" ADD CONSTRAINT "assistido_tipoPrioridadeId_fkey" FOREIGN KEY ("tipoPrioridadeId") REFERENCES "tipo_prioridade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tipo_servico_atendimento" ADD CONSTRAINT "tipo_servico_atendimento_atendimentoId_fkey" FOREIGN KEY ("atendimentoId") REFERENCES "tipo_atendimento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membro_familiar" ADD CONSTRAINT "membro_familiar_atendimentoId_fkey" FOREIGN KEY ("atendimentoId") REFERENCES "atendimentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
