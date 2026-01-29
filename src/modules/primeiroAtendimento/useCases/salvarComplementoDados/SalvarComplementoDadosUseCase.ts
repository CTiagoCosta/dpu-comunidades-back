import prismaClient from "../../../../prisma";
import { PrimeiroAtendimentoRepository } from "../../repositories/PrimeiroAtendimentoRepository";
import { HistoricoProgressoRepository } from "../../repositories/HistoricoProgressoRepository";
import { NavigationService } from "../../services/NavigationService";
import { ProgressCalculator } from "../../services/ProgressCalculator";
import {
  SalvarComplementoDadosRequest,
  SalvarComplementoDadosResponse,
} from "./SalvarComplementoDadosDtos";

export class SalvarComplementoDadosUseCase {
  constructor(
    private primeiroAtendimentoRepo: PrimeiroAtendimentoRepository,
    private historicoRepo: HistoricoProgressoRepository,
    private navigationService: NavigationService,
    private progressCalculator: ProgressCalculator
  ) {}

  async execute(
    request: SalvarComplementoDadosRequest
  ): Promise<SalvarComplementoDadosResponse> {
    const {
      primeiroAtendimentoId,
      nome,
      cpf,
      rg,
      dataNascimento,
      sexo,
      estadoCivilId,
      profissaoId,
      telefone,
      email,
      endereco,
      tipoDomicilioId,
      descricaoDomicilio,
      tipoVulnerabilidadeId,
      outroTipoVulnerabilidade,
      concluirEtapa,
      operadorId,
    } = request;

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

    // Se estiver tentando concluir, verificar se já foi concluída
    if (concluirEtapa && atendimento.etapaComplementoDadosConcluida) {
      throw new Error("Etapa de complemento de dados já foi concluída");
    }

    // Preparar dados para atualização (convertendo strings para inteiros onde necessário)
    const dadosAtualizacao: any = {
      nome,
      cpf,
      rg,
      dataNascimento: dataNascimento ? new Date(dataNascimento) : undefined,
      sexo,
      estadoCivilId: estadoCivilId ? parseInt(String(estadoCivilId)) : undefined,
      profissaoId, // profissaoId é String no schema
      telefone,
      email,
      tipoDomicilioId: tipoDomicilioId ? parseInt(String(tipoDomicilioId)) : undefined,
      descricaoDomicilio,
      tipoVulnerabilidadeId: tipoVulnerabilidadeId ? parseInt(String(tipoVulnerabilidadeId)) : undefined,
      outroTipoVulnerabilidade,
    };

    // Se endereço foi fornecido, desestruturar campos individuais
    if (endereco) {
      dadosAtualizacao.cep = endereco.cep;
      dadosAtualizacao.endereco = endereco.logradouro || endereco.endereco; // campo 'endereco' no schema é o logradouro
      dadosAtualizacao.numero = endereco.numero ? parseInt(endereco.numero) : undefined;
      dadosAtualizacao.complemento = endereco.complemento;
      dadosAtualizacao.bairro = endereco.bairro;
      dadosAtualizacao.cidade = endereco.cidade;
      dadosAtualizacao.uf = endereco.uf;
    }

    // Se estava suspenso, remove a suspensão ao retomar
    if (atendimento.suspensoPeloOperador) {
      dadosAtualizacao.suspensoPeloOperador = false;
      dadosAtualizacao.motivoSuspensao = null;
      dadosAtualizacao.dataSuspensao = null;
    }

    // Se concluir etapa, atualizar flag e determinar próxima etapa
    if (concluirEtapa) {
      dadosAtualizacao.etapaComplementoDadosConcluida = true;

      const proximaEtapa = await this.navigationService.determinarProximaEtapa(
        "COMPLEMENTO_DADOS",
        {
          capacidadeCivil: atendimento.capacidadeCivil ?? undefined,
        }
      );

      dadosAtualizacao.etapaAtual = proximaEtapa;
    }

    // Atualizar atendimento e criar histórico em transação
    const atendimentoAtualizado = await prismaClient.$transaction(
      async (tx) => {
        const updated = await tx.primeiroAtendimento.update({
          where: { id: primeiroAtendimentoId },
          data: dadosAtualizacao,
        });

        await tx.historicoProgressoPrimeiroAtendimento.create({
          data: {
            primeiroAtendimentoId,
            etapa: "COMPLEMENTO_DADOS",
            acao: concluirEtapa ? "ETAPA_CONCLUIDA" : "ETAPA_SALVA",
            dadosAlterados: JSON.stringify(dadosAtualizacao),
          },
        });

        return updated;
      }
    );

    // Recalcular percentual
    const atendimentoCompleto = await this.primeiroAtendimentoRepo.findById(
      primeiroAtendimentoId
    );

    if (!atendimentoCompleto) {
      throw new Error("Erro ao recalcular percentual");
    }

    const percentual = this.progressCalculator.calcular(
      atendimentoCompleto
    );

    // Atualizar percentual
    await this.primeiroAtendimentoRepo.update(primeiroAtendimentoId, {
      percentualConclusao: percentual,
    });

    // Determinar próxima etapa
    const proximaEtapa = concluirEtapa
      ? await this.navigationService.determinarProximaEtapa(
          "COMPLEMENTO_DADOS",
          {
            capacidadeCivil: atendimentoCompleto.capacidadeCivil ?? undefined,
          }
        )
      : null;

    return {
      id: atendimentoAtualizado.id,
      status: atendimentoAtualizado.status,
      etapaAtual: atendimentoAtualizado.etapaAtual,
      proximaEtapa,
      percentualConclusao: percentual,
      etapaConcluida: concluirEtapa,
    };
  }
}
