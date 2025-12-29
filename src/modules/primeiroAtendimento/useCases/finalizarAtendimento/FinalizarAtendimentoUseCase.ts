import prismaClient from "../../../../prisma";
import { PrimeiroAtendimentoRepository } from "../../repositories/PrimeiroAtendimentoRepository";
import { HistoricoProgressoRepository } from "../../repositories/HistoricoProgressoRepository";
import { SocketService } from "../../../../infra/SocketService";
import {
  FinalizarAtendimentoRequest,
  FinalizarAtendimentoResponse,
} from "./FinalizarAtendimentoDtos";

export class FinalizarAtendimentoUseCase {
  constructor(
    private primeiroAtendimentoRepo: PrimeiroAtendimentoRepository,
    private historicoRepo: HistoricoProgressoRepository
  ) {}

  async execute(
    request: FinalizarAtendimentoRequest
  ): Promise<FinalizarAtendimentoResponse> {
    const { primeiroAtendimentoId, operadorId } = request;

    // Buscar atendimento
    const atendimento = await this.primeiroAtendimentoRepo.findById(
      primeiroAtendimentoId
    );

    if (!atendimento) {
      throw new Error("Primeiro atendimento não encontrado");
    }

    // Verificar se o operador é o dono do atendimento
    if (atendimento.operadorId !== operadorId) {
      throw new Error(
        "Operador não autorizado a modificar este atendimento"
      );
    }

    // Verificar se já está finalizado
    if (atendimento.status === "CONCLUIDO") {
      throw new Error("Atendimento já foi finalizado");
    }

    // Verificar se está cancelado
    if (atendimento.status === "CANCELADO") {
      throw new Error("Atendimento cancelado não pode ser finalizado");
    }

    // Validar que as etapas obrigatórias foram concluídas
    // As etapas obrigatórias são: Capacidade Civil, Complemento de Dados, Composição Familiar, Vulnerabilidades
    // Representante Legal e Análise de Renda são condicionais
    if (!atendimento.etapaCapacidadeCivilConcluida) {
      throw new Error(
        "Etapa de Capacidade Civil não foi concluída. Não pode finalizar o atendimento."
      );
    }

    if (!atendimento.etapaComplementoDadosConcluida) {
      throw new Error(
        "Etapa de Complemento de Dados não foi concluída. Não pode finalizar o atendimento."
      );
    }

    if (!atendimento.etapaTipoDemandaConcluida) {
      throw new Error(
        "Etapa de Tipo de Demanda não foi concluída. Não pode finalizar o atendimento."
      );
    }

    if (!atendimento.etapaFormularioBeneficioConcluida) {
      throw new Error(
        "Etapa de Formulário de Benefício não foi concluída. Não pode finalizar o atendimento."
      );
    }

    if (!atendimento.etapaViabilidadeConcluida) {
      throw new Error(
        "Etapa de Viabilidade da Demanda não foi concluída. Não pode finalizar o atendimento."
      );
    }

    if (!atendimento.etapaDocumentosConcluida) {
      throw new Error(
        "Etapa de Documentos Obrigatórios não foi concluída. Não pode finalizar o atendimento."
      );
    }

    // Se não tem capacidade civil, deve ter representante legal concluído
    if (
      atendimento.capacidadeCivil === false &&
      !atendimento.etapaRepresentanteConcluida
    ) {
      throw new Error(
        "Etapa de Representante Legal não foi concluída. Não pode finalizar o atendimento."
      );
    }

    // Atualizar status para CONCLUIDO
    const atendimentoFinalizado = await prismaClient.$transaction(
      async (tx) => {
        const updated = await tx.primeiroAtendimento.update({
          where: { id: primeiroAtendimentoId },
          data: {
            status: "CONCLUIDO",
            percentualConclusao: 100,
            dataConclusao: new Date(),
          },
        });

        await tx.historicoProgressoPrimeiroAtendimento.create({
          data: {
            primeiroAtendimentoId,
            etapa: atendimento.etapaAtual,
            acao: "ATENDIMENTO_CONCLUIDO",
            dadosAlterados: JSON.stringify({
              statusAnterior: atendimento.status,
              statusNovo: "CONCLUIDO",
            }),
          },
        });

        // Atualizar a fila de atendimento para ATENDIDO
        if (atendimento.filaId) {
          await tx.filaAtendimento.update({
            where: { id: atendimento.filaId },
            data: {
              status: "ATENDIDO",
              dataFim: new Date(),
            },
          });
        }

        return updated;
      }
    );

    // Notificar atualização da fila via WebSocket
    if (atendimento.filaId) {
      await SocketService.notifyQueueUpdate();
    }

    return {
      id: atendimentoFinalizado.id,
      status: atendimentoFinalizado.status,
      percentualConclusao: atendimentoFinalizado.percentualConclusao,
      finalizadoEm: new Date(),
      mensagem: "Primeiro atendimento finalizado com sucesso!",
    };
  }
}
