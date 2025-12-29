import prismaClient from '../src/prisma';

async function limparSuspensoes() {
  try {
    console.log('🔍 Buscando atendimentos suspensos...');

    const suspensos = await prismaClient.primeiroAtendimento.findMany({
      where: {
        suspensoPeloOperador: true,
      },
      select: {
        id: true,
        filaId: true,
        etapaAtual: true,
        motivoSuspensao: true,
        dataSuspensao: true,
      },
    });

    console.log(`\n📊 Encontrados ${suspensos.length} atendimento(s) suspenso(s):\n`);

    suspensos.forEach((atendimento, index) => {
      console.log(`${index + 1}. ID: ${atendimento.id}`);
      console.log(`   Fila: ${atendimento.filaId}`);
      console.log(`   Etapa: ${atendimento.etapaAtual}`);
      console.log(`   Motivo: ${atendimento.motivoSuspensao || 'Não informado'}`);
      console.log(`   Data: ${atendimento.dataSuspensao}\n`);
    });

    if (suspensos.length === 0) {
      console.log('✅ Nenhum atendimento suspenso encontrado.');
      return;
    }

    console.log('🧹 Removendo flags de suspensão...\n');

    const result = await prismaClient.primeiroAtendimento.updateMany({
      where: {
        suspensoPeloOperador: true,
      },
      data: {
        suspensoPeloOperador: false,
        motivoSuspensao: null,
        dataSuspensao: null,
      },
    });

    console.log(`✅ ${result.count} atendimento(s) atualizado(s) com sucesso!`);

  } catch (error) {
    console.error('❌ Erro ao limpar suspensões:', error);
  } finally {
    await prismaClient.$disconnect();
  }
}

limparSuspensoes();
