import prismaClient from "../../../../prisma";
import { PrimeiroAtendimentoRepository } from "../../repositories/PrimeiroAtendimentoRepository";
import { NavigationService } from "../../services/NavigationService";
import { ProgressCalculator } from "../../services/ProgressCalculator";
import { HistoricoProgressoRepository } from "../../repositories/HistoricoProgressoRepository";
import {
  SalvarRepresentanteLegalRequest,
  SalvarRepresentanteLegalResponse,
} from "./SalvarRepresentanteLegalDtos";

export class SalvarRepresentanteLegalUseCase {
  constructor(
    private primeiroAtendimentoRepo: PrimeiroAtendimentoRepository,
    private navigationService: NavigationService,
    private progressCalculator: ProgressCalculator,
    private historicoRepo: HistoricoProgressoRepository
  ) {}

  async execute(
    request: SalvarRepresentanteLegalRequest
  ): Promise<SalvarRepresentanteLegalResponse> {
    const {
      primeiroAtendimentoId,
      operadorId,
      nomeRepresentante,
      cpfRepresentante,
      telefoneRepresentante,
      grauParentesco,
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

    // Verificar se etapa de Capacidade Civil foi concluída
    if (!atendimento.etapaCapacidadeCivilConcluida) {
      throw new Error(
        "Etapa de Capacidade Civil deve ser concluída antes"
      );
    }

    // Verificar se a pessoa TEM capacidade civil (se tiver, não deveria estar aqui)
    if (atendimento.capacidadeCivil === true) {
      throw new Error(
        "Representante Legal é apenas para pessoas sem capacidade civil"
      );
    }

    // Se estava suspenso, remove a suspensão ao retomar
    const dadosAtualizacao: any = {};
    if (atendimento.suspensoPeloOperador) {
      dadosAtualizacao.suspensoPeloOperador = false;
      dadosAtualizacao.motivoSuspensao = null;
      dadosAtualizacao.dataSuspensao = null;
    }

    // Determinar próxima etapa
    const proximaEtapa = concluirEtapa
      ? await this.navigationService.determinarProximaEtapa(
          "REPRESENTANTE_LEGAL",
          {}
        )
      : atendimento.etapaAtual;

    // Calcular percentual
    const percentual = this.progressCalculator.calcular({
      ...atendimento,
      etapaRepresentanteConcluida: concluirEtapa,
    });

    // Atualizar dados em transação
    const atendimentoAtualizado = await prismaClient.$transaction(
      async (tx) => {
        // Criar ou atualizar dados do Representante Legal
        const representante = await tx.representanteLegal.upsert({
          where: { primeiroAtendimentoId },
          create: {
            primeiroAtendimentoId,
            nome: nomeRepresentante,
            cpf: cpfRepresentante,
            telefone: telefoneRepresentante,
            grauParentesco,
          },
          update: {
            nome: nomeRepresentante,
            cpf: cpfRepresentante,
            telefone: telefoneRepresentante,
            grauParentesco,
          },
        });

        // Atualizar PrimeiroAtendimento
        const updated = await tx.primeiroAtendimento.update({
          where: { id: primeiroAtendimentoId },
          data: {
            representanteLegalId: representante.id,
            etapaRepresentanteConcluida: concluirEtapa,
            etapaRepresentanteTimestamp: concluirEtapa
              ? new Date()
              : undefined,
            etapaAtual: proximaEtapa,
            percentualConclusao: percentual,
            ...dadosAtualizacao,
          },
        });

        // Registrar histórico
        await tx.historicoProgressoPrimeiroAtendimento.create({
          data: {
            primeiroAtendimentoId,
            etapa: "REPRESENTANTE_LEGAL",
            acao: concluirEtapa ? "ETAPA_CONCLUIDA" : "ETAPA_SALVA",
            dadosAlterados: JSON.stringify({
              nomeRepresentante,
              cpfRepresentante,
              telefoneRepresentante,
              grauParentesco,
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
