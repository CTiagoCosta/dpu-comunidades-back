import prismaClient from "../../../../prisma";
import { PrimeiroAtendimentoRepository } from "../../repositories/PrimeiroAtendimentoRepository";
import { NavigationService } from "../../services/NavigationService";
import { ProgressCalculator } from "../../services/ProgressCalculator";
import { HistoricoProgressoRepository } from "../../repositories/HistoricoProgressoRepository";
import {
  SalvarDocumentosRequest,
  SalvarDocumentosResponse,
} from "./SalvarDocumentosDtos";

export class SalvarDocumentosUseCase {
  constructor(
    private primeiroAtendimentoRepo: PrimeiroAtendimentoRepository,
    private navigationService: NavigationService,
    private progressCalculator: ProgressCalculator,
    private historicoRepo: HistoricoProgressoRepository
  ) {}

  async execute(
    request: SalvarDocumentosRequest
  ): Promise<SalvarDocumentosResponse> {
    const {
      primeiroAtendimentoId,
      operadorId,
      documentosApresentados,
      documentosFaltantes,
      observacoes,
      concluirEtapa = true,
    } = request;

    // Buscar atendimento
    const atendimento = await this.primeiroAtendimentoRepo.findById(
      primeiroAtendimentoId
    );

    if (!atendimento) {
      throw new Error("Primeiro atendimento não encontrado");
    }

    // Verificar autorização
    if (atendimento.operadorId !== operadorId) {
      throw new Error(
        "Operador não autorizado a modificar este atendimento"
      );
    }

    // Verificar se etapa de Viabilidade foi concluída
    if (!atendimento.etapaViabilidadeConcluida) {
      throw new Error(
        "Etapa de Viabilidade da Demanda deve ser concluída antes"
      );
    }

    // Determinar próxima etapa
    const proximaEtapa = concluirEtapa
      ? await this.navigationService.determinarProximaEtapa(
          "DOCUMENTOS_OBRIGATORIOS",
          {}
        )
      : atendimento.etapaAtual;

    // Calcular percentual
    const percentual = this.progressCalculator.calcular({
      ...atendimento,
      etapaDocumentosConcluida: concluirEtapa,
    });

    // Atualizar dados em transação
    const atendimentoAtualizado = await prismaClient.$transaction(
      async (tx) => {
        // Atualizar PrimeiroAtendimento
        const updated = await tx.primeiroAtendimento.update({
          where: { id: primeiroAtendimentoId },
          data: {
            documentosApresentados: JSON.stringify(documentosApresentados),
            documentosFaltantes: documentosFaltantes
              ? JSON.stringify(documentosFaltantes)
              : null,
            observacoesDocumentos: observacoes,
            etapaDocumentosConcluida: concluirEtapa,
            etapaDocumentosTimestamp: concluirEtapa ? new Date() : undefined,
            etapaAtual: proximaEtapa,
            percentualConclusao: percentual,
          },
        });

        // Registrar histórico
        await tx.historicoProgressoPrimeiroAtendimento.create({
          data: {
            primeiroAtendimentoId,
            etapa: "DOCUMENTOS_OBRIGATORIOS",
            acao: concluirEtapa ? "ETAPA_CONCLUIDA" : "ETAPA_SALVA",
            dadosAlterados: JSON.stringify({
              documentosApresentados,
              documentosFaltantes,
              observacoes,
            }),
          },
        });

        return updated;
      }
    );

    const proximaEtapaRetorno = concluirEtapa ? proximaEtapa : null;

    return {
      id: atendimentoAtualizado.id,
      status: atendimentoAtualizado.status,
      etapaAtual: atendimentoAtualizado.etapaAtual,
      proximaEtapa: proximaEtapaRetorno,
      percentualConclusao: atendimentoAtualizado.percentualConclusao,
      etapaConcluida: concluirEtapa,
    };
  }
}
