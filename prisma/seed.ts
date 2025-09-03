import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
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
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch((e) => {
    console.error(`[SEEDER] ${e}`);
    prisma.$disconnect().then(() => process.exit(1));
  });
