-- CreateTable
CREATE TABLE "role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,
    "aprovado" BOOLEAN NOT NULL DEFAULT false,
    "dataCadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "assistido" (
    "id" UUID NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "nomeSocial" TEXT,
    "cpf" TEXT NOT NULL,
    "telefone" TEXT,
    "migrante" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "assistido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "triagem" (
    "id" UUID NOT NULL,
    "isPrioridade" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL,
    "dataEntrada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "operadorTriagemId" UUID NOT NULL,
    "tipoPrioridadeId" INTEGER,
    "tipoAtendimentoId" INTEGER NOT NULL,
    "assistidoId" UUID NOT NULL,

    CONSTRAINT "triagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "atendimentos" (
    "id" UUID NOT NULL,
    "capacidadeCivil" BOOLEAN,
    "cep" TEXT,
    "endereco" TEXT,
    "numero" INTEGER,
    "complemento" TEXT,
    "bairro" TEXT,
    "cidade" TEXT,
    "uf" TEXT,
    "dataInicioBeneficio" TIMESTAMP(3),
    "parcelasVencidas" INTEGER,
    "valorCausa" DOUBLE PRECISION,
    "processosAndamento" TEXT,
    "estadoCivilId" INTEGER,
    "profissaoId" UUID,
    "tipoDomicilioId" INTEGER,
    "tipoDemandaPrevidenciariaId" INTEGER,
    "competenciaJudicialId" INTEGER,
    "descricaoPrioridade" TEXT,
    "tipoAtendimentoId" INTEGER,
    "tipoServicoAtendimentoId" INTEGER,
    "tipoPrioridadeId" INTEGER,
    "triagemId" UUID NOT NULL,
    "operadorAtendimentoId" UUID NOT NULL,

    CONSTRAINT "atendimentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "processos" (
    "id" UUID NOT NULL,
    "numeroProcesso" TEXT,
    "resultado" TEXT,
    "resultadoDetalhado" TEXT,
    "valoresAtrasados" TEXT,
    "beneficios" TEXT,
    "dataAtualizacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atendimentoId" UUID NOT NULL,

    CONSTRAINT "processos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "formularios_preenchidos" (
    "id" SERIAL NOT NULL,
    "tipoFormulario" TEXT NOT NULL,
    "dadosFormulario" JSONB NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atendimentoId" UUID NOT NULL,

    CONSTRAINT "formularios_preenchidos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documentos" (
    "id" UUID NOT NULL,
    "nomeOriginal" TEXT NOT NULL,
    "nomeArmazenamento" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "tamanho" INTEGER NOT NULL,
    "caminho" TEXT NOT NULL,
    "tipoDocumento" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atendimentoId" UUID NOT NULL,
    "operadorUploadId" UUID NOT NULL,

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

    CONSTRAINT "tipo_prioridade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_servico_atendimento" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "tipoAtendimentoId" INTEGER NOT NULL,

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
    "id" UUID NOT NULL,
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
    "id" UUID NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rendaMensal" DOUBLE PRECISION,
    "atendimentoId" UUID NOT NULL,
    "assistidoId" UUID NOT NULL,

    CONSTRAINT "membro_familiar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_vulnerabilidade" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "tipo_vulnerabilidade_pkey" PRIMARY KEY ("id")
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

-- CreateTable
CREATE TABLE "log_triagem" (
    "id" UUID NOT NULL,
    "action" TEXT NOT NULL,
    "queueId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "details" TEXT,

    CONSTRAINT "log_triagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "encaminhamento_servico" (
    "id" SERIAL NOT NULL,
    "categoria" TEXT NOT NULL,
    "nomeServico" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "descricaoViolacao" TEXT NOT NULL,

    CONSTRAINT "encaminhamento_servico_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "atendimentos_triagemId_key" ON "atendimentos"("triagemId");

-- CreateIndex
CREATE UNIQUE INDEX "processos_atendimentoId_key" ON "processos"("atendimentoId");

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "triagem" ADD CONSTRAINT "triagem_operadorTriagemId_fkey" FOREIGN KEY ("operadorTriagemId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "triagem" ADD CONSTRAINT "triagem_tipoPrioridadeId_fkey" FOREIGN KEY ("tipoPrioridadeId") REFERENCES "tipo_prioridade"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "triagem" ADD CONSTRAINT "triagem_tipoAtendimentoId_fkey" FOREIGN KEY ("tipoAtendimentoId") REFERENCES "tipo_atendimento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "triagem" ADD CONSTRAINT "triagem_assistidoId_fkey" FOREIGN KEY ("assistidoId") REFERENCES "assistido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_estadoCivilId_fkey" FOREIGN KEY ("estadoCivilId") REFERENCES "estado_civil"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_profissaoId_fkey" FOREIGN KEY ("profissaoId") REFERENCES "profissao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_tipoDomicilioId_fkey" FOREIGN KEY ("tipoDomicilioId") REFERENCES "tipo_domicilio"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_tipoDemandaPrevidenciariaId_fkey" FOREIGN KEY ("tipoDemandaPrevidenciariaId") REFERENCES "tipo_demanda_previdenciaria"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_competenciaJudicialId_fkey" FOREIGN KEY ("competenciaJudicialId") REFERENCES "competencia_judicial"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_tipoAtendimentoId_fkey" FOREIGN KEY ("tipoAtendimentoId") REFERENCES "tipo_atendimento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_tipoServicoAtendimentoId_fkey" FOREIGN KEY ("tipoServicoAtendimentoId") REFERENCES "tipo_servico_atendimento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_tipoPrioridadeId_fkey" FOREIGN KEY ("tipoPrioridadeId") REFERENCES "tipo_prioridade"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_triagemId_fkey" FOREIGN KEY ("triagemId") REFERENCES "triagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_operadorAtendimentoId_fkey" FOREIGN KEY ("operadorAtendimentoId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "processos" ADD CONSTRAINT "processos_atendimentoId_fkey" FOREIGN KEY ("atendimentoId") REFERENCES "atendimentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "formularios_preenchidos" ADD CONSTRAINT "formularios_preenchidos_atendimentoId_fkey" FOREIGN KEY ("atendimentoId") REFERENCES "atendimentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documentos" ADD CONSTRAINT "documentos_atendimentoId_fkey" FOREIGN KEY ("atendimentoId") REFERENCES "atendimentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documentos" ADD CONSTRAINT "documentos_operadorUploadId_fkey" FOREIGN KEY ("operadorUploadId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tipo_servico_atendimento" ADD CONSTRAINT "tipo_servico_atendimento_tipoAtendimentoId_fkey" FOREIGN KEY ("tipoAtendimentoId") REFERENCES "tipo_atendimento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membro_familiar" ADD CONSTRAINT "membro_familiar_atendimentoId_fkey" FOREIGN KEY ("atendimentoId") REFERENCES "atendimentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membro_familiar" ADD CONSTRAINT "membro_familiar_assistidoId_fkey" FOREIGN KEY ("assistidoId") REFERENCES "assistido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "log_triagem" ADD CONSTRAINT "log_triagem_queueId_fkey" FOREIGN KEY ("queueId") REFERENCES "triagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "log_triagem" ADD CONSTRAINT "log_triagem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
