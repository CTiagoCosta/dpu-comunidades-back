import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // Unidades
  await prisma.unidade.createMany({
    data: [
      { nome: "Defensoria Pública da União", sigla: "DPU" },
      { nome: "DPU - Sede Brasília", sigla: "DPU-BSB" },
      { nome: "DPU - São Paulo", sigla: "DPU-SP" },
      { nome: "DPU - Rio de Janeiro", sigla: "DPU-RJ" },
      { nome: "DPU - Minas Gerais", sigla: "DPU-MG" },
      { nome: "DPU - Bahia", sigla: "DPU-BA" },
      { nome: "DPU - Pernambuco", sigla: "DPU-PE" },
      { nome: "DPU - Ceará", sigla: "DPU-CE" },
      { nome: "DPU - Pará", sigla: "DPU-PA" },
      { nome: "DPU - Amazonas", sigla: "DPU-AM" },
      { nome: "DPU - Mato Grosso do Sul", sigla: "DPU-MS" },
    ],
    skipDuplicates: true,
  }),
  await prisma.tipoAtendimento.createMany({
    data: [{ id: 1, descricao: "Assistencia Jurídica DPU em Mutirão" }],
    skipDuplicates: true,
  }),
    await prisma.tipoPrioridade.createMany({
      data: [
        { descricao: "Idoso (60 anos ou mais)", valorPrioridade: 2 },
        { descricao: "Gestante", valorPrioridade: 3 },
        { descricao: "Lactante", valorPrioridade: 4 },
        { descricao: "Pessoa com Deficiência", valorPrioridade: 1 },
        { descricao: "Pessoa com Criança de Colo", valorPrioridade: 5 },
        { descricao: "Outro", valorPrioridade: 6 },
      ],
      skipDuplicates: true,
    }),
    await prisma.tipoServicoAtendimento.createMany({
      data: [
        {
          descricao: "Primeiro Atendimento - Demanda Judicial",
          atendimentoId: 1,
        },
        { descricao: "Retorno - Demanda Judicial", atendimentoId: 1 },
        { descricao: "Orientação Jurídica", atendimentoId: 1 },
        { descricao: "Encaminhamento a Outro Órgão", atendimentoId: 1 },
      ],
      skipDuplicates: true,
    }),
    await prisma.estadoCivil.createMany({
      data: [
        { descricao: "Solteiro(a)" },
        { descricao: "Casado(a)" },
        { descricao: "Divorciado(a)" },
        { descricao: "Viúvo(a)" },
        { descricao: "União Estável" },
        { descricao: "Separado(a) Judicialmente" },
      ],
      skipDuplicates: true,
    }),
    await prisma.profissao.createMany({
      data: [
        { descricao: "Indígena Rural" },
        { descricao: "Pescador" },
        { descricao: "Desempregado" },
        { descricao: "Trabalhador Urbano Registrado" },
        { descricao: "Rural em Atividade de Subsistência" },
        { descricao: "Outro" },
      ],
      skipDuplicates: true,
    }),
    await prisma.tipoDomicilio.createMany({
      data: [
        { descricao: "Urbano" },
        { descricao: "Rural" },
        { descricao: "Acolhimento Institucional" },
        { descricao: "Aldeia Indígena" },
        { descricao: "Ribeirinho" },
        { descricao: "Quilombola" },
        { descricao: "Pessoa em Situação de Rua" },
        { descricao: "Ocupação Irregular Urbana/Rural" },
      ],
      skipDuplicates: true,
    }),
    await prisma.tipoVulnerabilidade.createMany({
      data: [
        {
          descricao:
            "É Renda Superior ao Estabelecido pela Resolução do CSDPU 133 e 134",
        },
        { descricao: "Outros Grupos/Família em Vulnerabilidade - Especificar" },
        { descricao: "Pessoa em Situação Prisional" },
        { descricao: "Aldeia Indígena" },
        { descricao: "Ribeirinho" },
        { descricao: "Quilombola" },
        { descricao: "Pessoa em Situação de Rua" },
        { descricao: "Ocupação Irregular Urbana/Rural" },
        { descricao: "Família Com Beneficiário De Loas" },
        { descricao: "Família Beneficiária De Bolsa Família" },
        { descricao: "Família Com Renda De Até Dois Salários Mínimos" },
        {
          descricao: "Família/Comunidade Envolvida Reciclagem/Lixão/Catadores",
        },
        { descricao: "Família/Comunidade Quilombolas" },
        { descricao: "Família Em Ocupação Irregular Urbana/Rural" },
        { descricao: "Família/Pessoa Migrante/Refugiada" },
        { descricao: "Família/Comunidade De Pescadores/Artesãos" },
        { descricao: "Outro" },
      ],
      skipDuplicates: true,
    }),
    await prisma.tipoPedidoDePrevidenciaJudiciaria.createMany({
      data: [
        { descricao: "Aposentadoria por idade rural" },
        {
          descricao:
            "Conversão de loas em aposentadoria por idade segurado especial",
        },
        { descricao: "Seguro defeso" },
        { descricao: "Pensão por morte rural" },
        { descricao: "Auxílio reclusão rural" },
        { descricao: "Salário maternidade rural" },
        { descricao: "BPC loas idoso" },
        { descricao: "BPC loas deficiente" },
        { descricao: "Auxilio doença e aposentadoria por invalidez" },
        { descricao: "Cancelamento de consignado/ilegal" },
        { descricao: "Aposentadoria por idade urbana" },
        { descricao: "Salário maternidade urbana" },
      ],
      skipDuplicates: true,
    });

  // Tipos de demanda previdenciária (tabela usada pelo primeiro atendimento)
  await prisma.tipoDemandaPrevidenciaria.createMany({
    data: [
      { descricao: "APOSENTADORIA POR IDADE RURAL" },
      { descricao: "CONVERSÃO DE LOAS EM APOSENTADORIA POR IDADE SEGURADO ESPECIAL" },
      { descricao: "SEGURO DEFESO" },
      { descricao: "PENSÃO POR MORTE RURAL" },
      { descricao: "AUXÍLIO RECLUSÃO RURAL" },
      { descricao: "SALÁRIO MATERNIDADE RURAL" },
      { descricao: "BPC LOAS IDOSO" },
      { descricao: "BPC LOAS DEFICIENTE" },
      { descricao: "AUXILIO DOENÇA E APOSENTADORIA POR INVALIDEZ" },
      { descricao: "CANCELAMENTO DE CONSIGNADO/ILEGAL" },
      { descricao: "APOSENTADORIA POR IDADE URBANA" },
      { descricao: "SALARIO MATERNIDADE URBANO" },
      { descricao: "PEDIDO GENÉRICO" },
    ],
    skipDuplicates: true,
  });
  await prisma.competenciaJudicial.createMany({
    data: [
      { descricao: "Justiça Federal" },
      { descricao: "Justiça Estadual" },
      { descricao: "Justiça do Trabalho" },
      { descricao: "Não se aplica" },
    ],
    skipDuplicates: true,
  });
  await prisma.tipoOrgaoEncaminhamento.createMany({
    data: [
      {
        id: 1,
        titulo: "Outros órgãos",
        descricao: "Encaminhamentos para órgãos públicos e instituições",
      },
      {
        id: 2,
        titulo: "Extrajudiciais",
        descricao: "Serviços de orientação e educação",
      },
      {
        id: 3,
        titulo: "Emissão de Documentos",
        descricao: "Auxílio na obtenção de documentos",
      },
    ],
    skipDuplicates: true,
  });
  await prisma.orgaoEncaminhamento.createMany({
    data: [
      {
        nome: "Defensoria do estado de MS",
        tipoOrgaoEncaminhamentoId: 1,
      },
      {
        nome: "Ministério do Trabalho e MPT - Trabalho Análogo à Escravidão Demanda Identificada",
        tipoOrgaoEncaminhamentoId: 1,
      },
      {
        nome: "Justiça do Trabalho",
        tipoOrgaoEncaminhamentoId: 1,
      },
      {
        nome: "INSS",
        tipoOrgaoEncaminhamentoId: 1,
      },
      {
        nome: "FUNAI",
        tipoOrgaoEncaminhamentoId: 1,
      },
      {
        nome: "Emissão de RG",
        tipoOrgaoEncaminhamentoId: 1,
      },
      {
        nome: "Receita Federal",
        tipoOrgaoEncaminhamentoId: 1,
      },
      {
        nome: "Ministério Público do Trabalho",
        tipoOrgaoEncaminhamentoId: 1,
      },
      {
        nome: "Direitos Humanos - Demanda identificada em violação de direitos humanos",
        tipoOrgaoEncaminhamentoId: 1,
      },
      {
        nome: "Migrante - Demanda identificada não objeto do projeto",
        tipoOrgaoEncaminhamentoId: 1,
      },
      {
        nome: "Ministério Público Estadual/Federal",
        tipoOrgaoEncaminhamentoId: 1,
      },
      {
        nome: "INCRA",
        tipoOrgaoEncaminhamentoId: 1,
      },
      {
        nome: "SPU",
        tipoOrgaoEncaminhamentoId: 1,
      },
      {
        nome: "Cartorio de Registro Civil",
        tipoOrgaoEncaminhamentoId: 1,
      },
      {
        nome: "Atermação Justiça do Trabalho",
        tipoOrgaoEncaminhamentoId: 1,
      },
      {
        nome: "Atermação Justiça Federal",
        tipoOrgaoEncaminhamentoId: 1,
      },

      {
        nome: "Educação financeira/previdenciária",
        tipoOrgaoEncaminhamentoId: 2,
      },
      {
        nome: "Lei Maria da Penha/Direitos das Mulheres",
        tipoOrgaoEncaminhamentoId: 2,
      },
      {
        nome: "Abono salarial",
        tipoOrgaoEncaminhamentoId: 2,
      },
      {
        nome: "Cuidar de quem cuida",
        tipoOrgaoEncaminhamentoId: 2,
      },
      {
        nome: "Taus e outros da SPU",
        tipoOrgaoEncaminhamentoId: 2,
      },
      {
        nome: "Vaga escolar",
        tipoOrgaoEncaminhamentoId: 2,
      },
      {
        nome: "Orientação bancária",
        tipoOrgaoEncaminhamentoId: 2,
      },
      {
        nome: "Educação",
        tipoOrgaoEncaminhamentoId: 2,
      },
      {
        nome: "Mais social",
        tipoOrgaoEncaminhamentoId: 2,
      },
      {
        nome: "Energia social: Conta de luz zero",
        tipoOrgaoEncaminhamentoId: 2,
      },
      {
        nome: "INCRA/Titulação de imóvel",
        tipoOrgaoEncaminhamentoId: 2,
      },
      {
        nome: "Cancelamento de consignado/ilegal",
        tipoOrgaoEncaminhamentoId: 2,
      },

      {
        nome: "RG",
        tipoOrgaoEncaminhamentoId: 3,
      },
      {
        nome: "Certificado de alistamento militar",
        tipoOrgaoEncaminhamentoId: 3,
      },
      {
        nome: "Certidão de nascimento/casamento",
        tipoOrgaoEncaminhamentoId: 3,
      },
      {
        nome: "Conta corrente",
        tipoOrgaoEncaminhamentoId: 3,
      },
      {
        nome: "Carteira de pescador",
        tipoOrgaoEncaminhamentoId: 3,
      },
      {
        nome: "Retificação da certidão de nascimento - Pessoa transgênero",
        tipoOrgaoEncaminhamentoId: 3,
      },
      {
        nome: "Título de eleitor",
        tipoOrgaoEncaminhamentoId: 3,
      },
      {
        nome: "CPF/CNPJ",
        tipoOrgaoEncaminhamentoId: 3,
      },
      {
        nome: "CAF/INSCRIÇÃO ESTADUAL/CCIR",
        tipoOrgaoEncaminhamentoId: 3,
      },
      {
        nome: "Cad-Único",
        tipoOrgaoEncaminhamentoId: 3,
      },
      {
        nome: "Retificação da certidão de nascimento - INDÍGENA",
        tipoOrgaoEncaminhamentoId: 3,
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch((e) => {
    console.error(`[SEEDER] ${e}`);
    prisma.$disconnect().then(() => process.exit(1));
  });
