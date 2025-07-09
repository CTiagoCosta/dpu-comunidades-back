-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'OPERADOR', 'JURISTA');

-- CreateEnum
CREATE TYPE "status_fila_atendimento" AS ENUM ('AGUARDANDO', 'EM_ATENDIMENTO', 'ATENDIDO', 'CANCELADO');

-- CreateEnum
CREATE TYPE "ProcessosAndamento" AS ENUM ('SIM_MAS_DIFERENTE', 'NAO', 'SIM_MAS_IGUAL');

-- CreateEnum
CREATE TYPE "tipo_formulario" AS ENUM ('TRIAGEM', 'CAPACIDADE_CIVIL', 'COMPLEMENTO_DADOS', 'TIPO_DEMANDA', 'TIPO_DEMANDA_PREVIDENCIARIA', 'LOAS_IDOSO', 'LOAS_DEFICIENTE', 'APOSENTADORIA_RURAL', 'PENSAO_MORTE_RURAL', 'AUXILIO_RECLUSAO_RURAL', 'SALARIO_MATERNIDADE_URBANO', 'SALARIO_MATERNIDADE_RURAL', 'AUXILIO_DOENCA_INVALIDEZ', 'SEGURO_DEFESO', 'REPRESENTANTE_LEGAL', 'ANALISE_RENDA', 'VIABILIDADE_DEMANDA', 'DOCUMENTOS_OBRIGATORIOS', 'JUSTIFICATIVA_ARQUIVAMENTO');

-- CreateEnum
CREATE TYPE "tipo_documento" AS ENUM ('DOCUMENTO_PESSOAL', 'COMPROVANTE_RESIDENCIA', 'COMPROVANTE_RENDA', 'LAUDO_MEDICO', 'PRONTUARIO', 'EXAME_MEDICO', 'CARTEIRA_TRABALHO', 'COMPROVANTE_ATIVIDADE_RURAL', 'CERTIDAO_OBITO', 'CERTIDAO_CASAMENTO', 'CERTIDAO_NASCIMENTO', 'PROCURACAO', 'TERMO_REPRESENTACAO', 'OUTROS');

-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'OPERADOR',
    "aprovado" BOOLEAN NOT NULL DEFAULT false,
    "dataCadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fila_atendimentos" (
    "id" TEXT NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "nomeSocial" TEXT,
    "cpf" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "isPrioridade" BOOLEAN NOT NULL DEFAULT false,
    "status" "status_fila_atendimento" NOT NULL,
    "dataEntrada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataInicio" TIMESTAMP(3),
    "dataFim" TIMESTAMP(3),
    "migrante" BOOLEAN NOT NULL DEFAULT false,
    "operadorTriagemId" TEXT NOT NULL,
    "operadorAtendimentoId" TEXT,
    "tipoPrioridadeId" INTEGER,
    "tipoAtendimentoId" INTEGER NOT NULL,

    CONSTRAINT "fila_atendimentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "atendimentos" (
    "id" TEXT NOT NULL,
    "capacidadeCivil" BOOLEAN NOT NULL,
    "cep" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "complemento" TEXT,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "dataInicioBeneficio" TIMESTAMP(3),
    "parcelasVencidas" INTEGER,
    "valorCausa" DOUBLE PRECISION,
    "processosAndamento" "ProcessosAndamento" NOT NULL,
    "estadoCivilId" INTEGER NOT NULL,
    "profissaoId" TEXT NOT NULL,
    "tipoDomicilioId" INTEGER NOT NULL,
    "tipoDemandaPrevidenciariaId" INTEGER NOT NULL,
    "competenciaJudicialId" INTEGER NOT NULL,
    "operadorId" TEXT NOT NULL,
    "filaId" TEXT,

    CONSTRAINT "atendimentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "processos" (
    "id" TEXT NOT NULL,
    "numeroProcesso" TEXT NOT NULL,
    "resultado" TEXT NOT NULL,
    "resultadoDetalhado" TEXT,
    "valoresAtrasados" TEXT,
    "beneficios" TEXT,
    "dataAtualizacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atendimentoId" TEXT NOT NULL,

    CONSTRAINT "processos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "formularios_preenchidos" (
    "id" SERIAL NOT NULL,
    "tipoFormulario" "tipo_formulario" NOT NULL,
    "dadosFormulario" JSONB NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atendimentoId" TEXT NOT NULL,

    CONSTRAINT "formularios_preenchidos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documentos" (
    "id" TEXT NOT NULL,
    "nomeOriginal" TEXT NOT NULL,
    "nomeArmazenamento" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "tamanho" INTEGER NOT NULL,
    "caminho" TEXT NOT NULL,
    "tipoDocumento" "tipo_documento" NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atendimentoId" TEXT NOT NULL,
    "operadorUploadId" TEXT NOT NULL,

    CONSTRAINT "documentos_pkey" PRIMARY KEY ("id")
);

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
    "id" TEXT NOT NULL,
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
    "id" TEXT NOT NULL,
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
    "id" TEXT NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rendaMensal" DOUBLE PRECISION NOT NULL,
    "atendimentoId" TEXT NOT NULL,

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

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "atendimentos_filaId_key" ON "atendimentos"("filaId");

-- CreateIndex
CREATE UNIQUE INDEX "processos_atendimentoId_key" ON "processos"("atendimentoId");

-- AddForeignKey
ALTER TABLE "fila_atendimentos" ADD CONSTRAINT "fila_atendimentos_operadorTriagemId_fkey" FOREIGN KEY ("operadorTriagemId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fila_atendimentos" ADD CONSTRAINT "fila_atendimentos_operadorAtendimentoId_fkey" FOREIGN KEY ("operadorAtendimentoId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fila_atendimentos" ADD CONSTRAINT "fila_atendimentos_tipoPrioridadeId_fkey" FOREIGN KEY ("tipoPrioridadeId") REFERENCES "tipo_prioridade"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fila_atendimentos" ADD CONSTRAINT "fila_atendimentos_tipoAtendimentoId_fkey" FOREIGN KEY ("tipoAtendimentoId") REFERENCES "tipo_atendimento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
