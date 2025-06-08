-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'OPERADOR');

-- CreateEnum
CREATE TYPE "status_fila_atendimento" AS ENUM ('AGUARDANDO', 'EM_ATENDIMENTO', 'ATENDIDO', 'CANCELADO');

-- CreateEnum
CREATE TYPE "status_atendimento" AS ENUM ('NOVO', 'EM_ANDAMENTO', 'CONCLUIDO', 'ARQUIVADO');

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
    "operadorTriagemId" TEXT NOT NULL,
    "operadorAtendimentoId" TEXT,

    CONSTRAINT "fila_atendimentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "atendimentos" (
    "id" TEXT NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "nomeSocial" TEXT,
    "cpf" TEXT NOT NULL,
    "dataNascimento" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT,
    "tipoAtendimento" TEXT NOT NULL,
    "capacidadeCivil" TEXT,
    "estadoCivil" TEXT,
    "profissao" TEXT,
    "tipoDomicilio" TEXT,
    "descricaoDomicilio" TEXT,
    "membrosFamiliares" TEXT,
    "rendaFamiliar" TEXT,
    "tipoDemanda" TEXT,
    "descricaoAtendimento" TEXT NOT NULL,
    "observacoes" TEXT,
    "formId" TEXT NOT NULL,
    "formTipo" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "status_atendimento" NOT NULL DEFAULT 'NOVO',
    "logradouro" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
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
    "id" TEXT NOT NULL,
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
