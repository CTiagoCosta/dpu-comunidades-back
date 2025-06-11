/*
  Warnings:

  - The primary key for the `atendimentos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cpf` on the `atendimentos` table. All the data in the column will be lost.
  - You are about to drop the column `dataCriacao` on the `atendimentos` table. All the data in the column will be lost.
  - You are about to drop the column `dataNascimento` on the `atendimentos` table. All the data in the column will be lost.
  - You are about to drop the column `descricaoAtendimento` on the `atendimentos` table. All the data in the column will be lost.
  - You are about to drop the column `descricaoDomicilio` on the `atendimentos` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `atendimentos` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `atendimentos` table. All the data in the column will be lost.
  - You are about to drop the column `estadoCivil` on the `atendimentos` table. All the data in the column will be lost.
  - You are about to drop the column `formId` on the `atendimentos` table. All the data in the column will be lost.
  - You are about to drop the column `formTipo` on the `atendimentos` table. All the data in the column will be lost.
  - You are about to drop the column `logradouro` on the `atendimentos` table. All the data in the column will be lost.
  - You are about to drop the column `membrosFamiliares` on the `atendimentos` table. All the data in the column will be lost.
  - You are about to drop the column `nomeCompleto` on the `atendimentos` table. All the data in the column will be lost.
  - You are about to drop the column `nomeSocial` on the `atendimentos` table. All the data in the column will be lost.
  - You are about to drop the column `observacoes` on the `atendimentos` table. All the data in the column will be lost.
  - You are about to drop the column `profissao` on the `atendimentos` table. All the data in the column will be lost.
  - You are about to drop the column `rendaFamiliar` on the `atendimentos` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `atendimentos` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `atendimentos` table. All the data in the column will be lost.
  - You are about to drop the column `tipoAtendimento` on the `atendimentos` table. All the data in the column will be lost.
  - You are about to drop the column `tipoDemanda` on the `atendimentos` table. All the data in the column will be lost.
  - You are about to drop the column `tipoDomicilio` on the `atendimentos` table. All the data in the column will be lost.
  - The `id` column on the `atendimentos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `filaId` column on the `atendimentos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `documentos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `documentos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `fila_atendimentos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `fila_atendimentos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `operadorAtendimentoId` column on the `fila_atendimentos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `formularios_preenchidos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `formularios_preenchidos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `processos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `processos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `usuarios` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `competenciaJudicialId` to the `atendimentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endereco` to the `atendimentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estadoCivilId` to the `atendimentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `processosAndamento` to the `atendimentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profissaoId` to the `atendimentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoAtendimentoId` to the `atendimentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoDemandaPrevidenciariaId` to the `atendimentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoDomicilioId` to the `atendimentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uf` to the `atendimentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `capacidadeCivil` to the `atendimentos` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `numero` on the `atendimentos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `operadorId` on the `atendimentos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `atendimentoId` on the `documentos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `operadorUploadId` on the `documentos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `operadorTriagemId` on the `fila_atendimentos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `atendimentoId` on the `formularios_preenchidos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `atendimentoId` on the `processos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ProcessosAndamento" AS ENUM ('SIM_MAS_DIFERENTE', 'NAO', 'SIM_MAS_IGUAL');

-- DropForeignKey
ALTER TABLE "atendimentos" DROP CONSTRAINT "atendimentos_filaId_fkey";

-- DropForeignKey
ALTER TABLE "atendimentos" DROP CONSTRAINT "atendimentos_operadorId_fkey";

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
ALTER TABLE "processos" DROP CONSTRAINT "processos_atendimentoId_fkey";

-- AlterTable
ALTER TABLE "atendimentos" DROP CONSTRAINT "atendimentos_pkey",
DROP COLUMN "cpf",
DROP COLUMN "dataCriacao",
DROP COLUMN "dataNascimento",
DROP COLUMN "descricaoAtendimento",
DROP COLUMN "descricaoDomicilio",
DROP COLUMN "email",
DROP COLUMN "estado",
DROP COLUMN "estadoCivil",
DROP COLUMN "formId",
DROP COLUMN "formTipo",
DROP COLUMN "logradouro",
DROP COLUMN "membrosFamiliares",
DROP COLUMN "nomeCompleto",
DROP COLUMN "nomeSocial",
DROP COLUMN "observacoes",
DROP COLUMN "profissao",
DROP COLUMN "rendaFamiliar",
DROP COLUMN "status",
DROP COLUMN "telefone",
DROP COLUMN "tipoAtendimento",
DROP COLUMN "tipoDemanda",
DROP COLUMN "tipoDomicilio",
ADD COLUMN     "competenciaJudicialId" INTEGER NOT NULL,
ADD COLUMN     "dataInicioBeneficio" TIMESTAMP(3),
ADD COLUMN     "endereco" TEXT NOT NULL,
ADD COLUMN     "estadoCivilId" INTEGER NOT NULL,
ADD COLUMN     "parcelasVencidas" INTEGER,
ADD COLUMN     "processosAndamento" "ProcessosAndamento" NOT NULL,
ADD COLUMN     "profissaoId" INTEGER NOT NULL,
ADD COLUMN     "tipoAtendimentoId" INTEGER NOT NULL,
ADD COLUMN     "tipoDemandaPrevidenciariaId" INTEGER NOT NULL,
ADD COLUMN     "tipoDomicilioId" INTEGER NOT NULL,
ADD COLUMN     "uf" TEXT NOT NULL,
ADD COLUMN     "valorCausa" DOUBLE PRECISION,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "capacidadeCivil",
ADD COLUMN     "capacidadeCivil" BOOLEAN NOT NULL,
DROP COLUMN "numero",
ADD COLUMN     "numero" INTEGER NOT NULL,
DROP COLUMN "operadorId",
ADD COLUMN     "operadorId" INTEGER NOT NULL,
DROP COLUMN "filaId",
ADD COLUMN     "filaId" INTEGER,
ADD CONSTRAINT "atendimentos_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "documentos" DROP CONSTRAINT "documentos_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "atendimentoId",
ADD COLUMN     "atendimentoId" INTEGER NOT NULL,
DROP COLUMN "operadorUploadId",
ADD COLUMN     "operadorUploadId" INTEGER NOT NULL,
ADD CONSTRAINT "documentos_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "fila_atendimentos" DROP CONSTRAINT "fila_atendimentos_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "operadorTriagemId",
ADD COLUMN     "operadorTriagemId" INTEGER NOT NULL,
DROP COLUMN "operadorAtendimentoId",
ADD COLUMN     "operadorAtendimentoId" INTEGER,
ADD CONSTRAINT "fila_atendimentos_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "formularios_preenchidos" DROP CONSTRAINT "formularios_preenchidos_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "atendimentoId",
ADD COLUMN     "atendimentoId" INTEGER NOT NULL,
ADD CONSTRAINT "formularios_preenchidos_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "processos" DROP CONSTRAINT "processos_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "atendimentoId",
ADD COLUMN     "atendimentoId" INTEGER NOT NULL,
ADD CONSTRAINT "processos_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "usuarios" DROP CONSTRAINT "usuarios_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id");

-- DropEnum
DROP TYPE "status_atendimento";

-- CreateTable
CREATE TABLE "TipoAtendimentoTriagem" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "TipoAtendimentoTriagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoPrioridade" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "valorPrioridade" INTEGER NOT NULL,
    "tipoAtendimentoTriagemId" INTEGER,

    CONSTRAINT "TipoPrioridade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Assistido" (
    "id" SERIAL NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "nomeSocial" TEXT,
    "cpf" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "dataEntrada" TIMESTAMP(3) NOT NULL,
    "descricaoPrioridade" TEXT,
    "tipoAtendimentoTriagemId" INTEGER NOT NULL,
    "tipoPrioridadeId" INTEGER NOT NULL,

    CONSTRAINT "Assistido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoAtendimento" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "TipoAtendimento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EstadoCivil" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "EstadoCivil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profissao" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Profissao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoDomicilio" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "TipoDomicilio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MembroFamiliar" (
    "id" SERIAL NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rendaMensal" DOUBLE PRECISION NOT NULL,
    "atendimentoId" INTEGER NOT NULL,

    CONSTRAINT "MembroFamiliar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoVulnerabilidade" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "TipoVulnerabilidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoDemandaPrevidenciaria" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "TipoDemandaPrevidenciaria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompetenciaJudicial" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "CompetenciaJudicial_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "atendimentos_filaId_key" ON "atendimentos"("filaId");

-- CreateIndex
CREATE UNIQUE INDEX "processos_atendimentoId_key" ON "processos"("atendimentoId");

-- AddForeignKey
ALTER TABLE "fila_atendimentos" ADD CONSTRAINT "fila_atendimentos_operadorTriagemId_fkey" FOREIGN KEY ("operadorTriagemId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fila_atendimentos" ADD CONSTRAINT "fila_atendimentos_operadorAtendimentoId_fkey" FOREIGN KEY ("operadorAtendimentoId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_tipoAtendimentoId_fkey" FOREIGN KEY ("tipoAtendimentoId") REFERENCES "TipoAtendimento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_estadoCivilId_fkey" FOREIGN KEY ("estadoCivilId") REFERENCES "EstadoCivil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_profissaoId_fkey" FOREIGN KEY ("profissaoId") REFERENCES "Profissao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_tipoDomicilioId_fkey" FOREIGN KEY ("tipoDomicilioId") REFERENCES "TipoDomicilio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_tipoDemandaPrevidenciariaId_fkey" FOREIGN KEY ("tipoDemandaPrevidenciariaId") REFERENCES "TipoDemandaPrevidenciaria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_competenciaJudicialId_fkey" FOREIGN KEY ("competenciaJudicialId") REFERENCES "CompetenciaJudicial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "TipoPrioridade" ADD CONSTRAINT "TipoPrioridade_tipoAtendimentoTriagemId_fkey" FOREIGN KEY ("tipoAtendimentoTriagemId") REFERENCES "TipoAtendimentoTriagem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assistido" ADD CONSTRAINT "Assistido_tipoAtendimentoTriagemId_fkey" FOREIGN KEY ("tipoAtendimentoTriagemId") REFERENCES "TipoAtendimentoTriagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assistido" ADD CONSTRAINT "Assistido_tipoPrioridadeId_fkey" FOREIGN KEY ("tipoPrioridadeId") REFERENCES "TipoPrioridade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MembroFamiliar" ADD CONSTRAINT "MembroFamiliar_atendimentoId_fkey" FOREIGN KEY ("atendimentoId") REFERENCES "atendimentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
