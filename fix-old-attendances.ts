import prismaClient from "./src/prisma";
import { SocketService } from "./src/infra/SocketService";

/**
 * Script para corrigir atendimentos antigos
 * Atualiza o status da FilaAtendimento para EM_ATENDIMENTO
 * quando já existe um PrimeiroAtendimento associado
 */
async function fixOldAttendances() {
  console.log("🔍 Buscando atendimentos que precisam ser corrigidos...");

  // Buscar todas as filas com status AGUARDANDO que já têm PrimeiroAtendimento
  const filasParaCorrigir = await prismaClient.filaAtendimento.findMany({
    where: {
      status: "AGUARDANDO",
      primeiroAtendimento: {
        isNot: null,
      },
    },
    include: {
      primeiroAtendimento: {
        select: {
          id: true,
          operadorId: true,
          dataInicio: true,
          status: true,
        },
      },
    },
  });

  console.log(`📊 Encontradas ${filasParaCorrigir.length} filas para corrigir`);

  if (filasParaCorrigir.length === 0) {
    console.log("✅ Nenhuma correção necessária!");
    return;
  }

  // Mostrar quais serão corrigidas
  console.log("\n📋 Filas que serão corrigidas:");
  filasParaCorrigir.forEach((fila, index) => {
    console.log(
      `${index + 1}. ${fila.nomeCompleto} (Fila ID: ${fila.id}, PrimeiroAtendimento ID: ${fila.primeiroAtendimento?.id})`
    );
  });

  console.log("\n🔧 Iniciando correções...");

  let corrigidos = 0;
  let erros = 0;

  for (const fila of filasParaCorrigir) {
    try {
      await prismaClient.filaAtendimento.update({
        where: { id: fila.id },
        data: {
          status: "EM_ATENDIMENTO",
          operadorAtendimentoId: fila.primeiroAtendimento?.operadorId,
          dataInicio: fila.primeiroAtendimento?.dataInicio || new Date(),
        },
      });

      corrigidos++;
      console.log(`✅ Corrigido: ${fila.nomeCompleto}`);
    } catch (error) {
      erros++;
      console.error(`❌ Erro ao corrigir ${fila.nomeCompleto}:`, error);
    }
  }

  console.log("\n📊 Resumo:");
  console.log(`✅ Corrigidos: ${corrigidos}`);
  console.log(`❌ Erros: ${erros}`);
  console.log(`📝 Total processados: ${filasParaCorrigir.length}`);

  // Notificar via WebSocket (se disponível)
  try {
    console.log("\n📡 Notificando atualização via WebSocket...");
    // SocketService.notifyQueueUpdate() requer IO configurado
    // Como estamos em script standalone, só logamos
    console.log(
      "⚠️  WebSocket não disponível em modo standalone. Recarregue a página no frontend."
    );
  } catch (error) {
    console.log("⚠️  WebSocket não configurado (esperado em scripts)");
  }

  console.log("\n✨ Processo concluído!");
}

// Executar
fixOldAttendances()
  .catch((error) => {
    console.error("❌ Erro fatal:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
