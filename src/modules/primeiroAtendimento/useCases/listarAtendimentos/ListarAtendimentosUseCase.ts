import prismaClient from "../../../../prisma";
import {
  ListarAtendimentosRequest,
  AtendimentoListagemDTO,
  ListarAtendimentosResponse,
} from "./ListarAtendimentosDtos";

export class ListarAtendimentosUseCase {
  async execute(
    request: ListarAtendimentosRequest
  ): Promise<ListarAtendimentosResponse> {
    const {
      status = "TODOS",
      operadorId,
      cpf,
      dataInicio,
      dataFim,
      pagina = 1,
      limite = 10,
    } = request;

    // Calcular offset para paginação
    const offset = (pagina - 1) * limite;

    // Construir filtros
    const where: any = {
      primeiroAtendimento: {
        isNot: null, // Apenas atendimentos que foram iniciados
      },
    };

    // Filtro por operador
    if (operadorId) {
      where.primeiroAtendimento = {
        ...where.primeiroAtendimento,
        operadorId,
      };
    }

    // Filtro por CPF (remove formatação para comparar)
    if (cpf) {
      const cpfLimpo = cpf.replace(/\D/g, "");
      where.cpf = {
        contains: cpfLimpo,
      };
    }

    // Filtro por data de início
    if (dataInicio || dataFim) {
      where.primeiroAtendimento = {
        ...where.primeiroAtendimento,
        dataInicio: {},
      };

      if (dataInicio) {
        where.primeiroAtendimento.dataInicio.gte = new Date(dataInicio);
      }

      if (dataFim) {
        where.primeiroAtendimento.dataInicio.lte = new Date(dataFim);
      }
    }

    // Buscar atendimentos do banco
    const [atendimentos, total] = await Promise.all([
      prismaClient.filaAtendimento.findMany({
        where,
        include: {
          primeiroAtendimento: {
            include: {
              operador: {
                select: {
                  id: true,
                  nome: true,
                },
              },
            },
          },
        },
        orderBy: {
          primeiroAtendimento: {
            dataUltimaAtualizacao: "desc",
          },
        },
        skip: offset,
        take: limite,
      }),
      prismaClient.filaAtendimento.count({ where }),
    ]);

    // Mapear para DTOs e calcular status de exibição
    let atendimentosMapeados = atendimentos.map((fila) => {
      const primeiroAtendimento = fila.primeiroAtendimento!;
      const agora = new Date();
      const dataUltimaAtualizacao = new Date(
        primeiroAtendimento.dataUltimaAtualizacao
      );

      // Calcular tempo desde última atualização em horas
      const horasSemAtualizacao =
        (agora.getTime() - dataUltimaAtualizacao.getTime()) / (1000 * 60 * 60);

      // Calcular tempo total de atendimento em minutos
      const tempoAtendimento = primeiroAtendimento.dataConclusao
        ? Math.floor(
            (new Date(primeiroAtendimento.dataConclusao).getTime() -
              new Date(primeiroAtendimento.dataInicio).getTime()) /
              (1000 * 60)
          )
        : Math.floor(
            (agora.getTime() -
              new Date(primeiroAtendimento.dataInicio).getTime()) /
              (1000 * 60)
          );

      // Calcular dias sem atualização
      const diasSemAtualizacao = Math.floor(horasSemAtualizacao / 24);

      // Determinar status de exibição
      let statusExibicao: "EM_ATENDIMENTO" | "CONCLUIDO" | "SUSPENSO";

      if (primeiroAtendimento.status === "CONCLUIDO") {
        statusExibicao = "CONCLUIDO";
      } else if (primeiroAtendimento.suspensoPeloOperador) {
        // Prioridade para suspensão manual pelo operador
        statusExibicao = "SUSPENSO";
      } else if (
        primeiroAtendimento.status === "EM_ANDAMENTO" &&
        horasSemAtualizacao > 24
      ) {
        // Considera suspenso se não foi atualizado há mais de 24 horas
        statusExibicao = "SUSPENSO";
      } else {
        statusExibicao = "EM_ATENDIMENTO";
      }

      const dto: AtendimentoListagemDTO = {
        // Dados da Fila
        filaId: fila.id,
        nomeCompleto: fila.nomeCompleto,
        nomeSocial: fila.nomeSocial,
        cpf: fila.cpf,
        telefone: fila.telefone,
        isPrioridade: fila.isPrioridade,
        statusFila: fila.status,
        dataEntrada: fila.dataEntrada,

        // Dados do PrimeiroAtendimento
        primeiroAtendimentoId: primeiroAtendimento.id,
        statusAtendimento: primeiroAtendimento.status,
        etapaAtual: this.determinarEtapaAtual(primeiroAtendimento),
        percentualConclusao: this.calcularPercentualConclusao(
          primeiroAtendimento
        ),
        dataInicio: primeiroAtendimento.dataInicio,
        dataUltimaAtualizacao: primeiroAtendimento.dataUltimaAtualizacao,
        dataConclusao: primeiroAtendimento.dataConclusao,

        // Dados do Operador
        operadorId: primeiroAtendimento.operador.id,
        operadorNome: primeiroAtendimento.operador.nome,

        // Calculados
        statusExibicao,
        tempoAtendimento,
        diasSemAtualizacao,
      };

      return dto;
    });

    // Filtrar por status de exibição se necessário
    if (status !== "TODOS") {
      atendimentosMapeados = atendimentosMapeados.filter(
        (a) => a.statusExibicao === status
      );
    }

    // Calcular total de páginas
    const totalPaginas = Math.ceil(total / limite);

    return {
      atendimentos: atendimentosMapeados,
      total: atendimentosMapeados.length,
      pagina,
      totalPaginas,
    };
  }

  /**
   * Determina a etapa atual do atendimento
   * Retorna a etapa atual armazenada no banco de dados
   */
  private determinarEtapaAtual(primeiroAtendimento: any): string {
    if (primeiroAtendimento.status === "CONCLUIDO") {
      return "CONCLUIDO";
    }

    // Retorna a etapa atual do banco de dados
    // Esta é a fonte confiável de verdade sobre onde o atendimento parou
    return primeiroAtendimento.etapaAtual || "CAPACIDADE_CIVIL";
  }

  /**
   * Calcula o percentual de conclusão baseado nas etapas concluídas
   */
  private calcularPercentualConclusao(primeiroAtendimento: any): number {
    if (primeiroAtendimento.status === "CONCLUIDO") {
      return 100;
    }

    // Lista das etapas obrigatórias
    const etapasObrigatorias = [
      primeiroAtendimento.etapaCapacidadeCivilConcluida,
      primeiroAtendimento.etapaComplementoDadosConcluida,
      primeiroAtendimento.etapaTipoDemandaConcluida,
      primeiroAtendimento.etapaFormularioBeneficioConcluida,
      primeiroAtendimento.etapaViabilidadeConcluida,
      primeiroAtendimento.etapaDocumentosConcluida,
    ];

    // Adiciona etapa de representante legal se não for capaz civilmente
    if (primeiroAtendimento.capacidadeCivil === false) {
      etapasObrigatorias.push(primeiroAtendimento.etapaRepresentanteConcluida);
    }

    // Adiciona etapa de análise de renda se não tiver renda familiar declarada
    if (!primeiroAtendimento.temRendaFamiliarDeclarada) {
      etapasObrigatorias.push(primeiroAtendimento.etapaAnaliseRendaConcluida);
    }

    const etapasConcluidas = etapasObrigatorias.filter((etapa) => etapa === true).length;
    const totalEtapas = etapasObrigatorias.length;

    return totalEtapas > 0 ? Math.round((etapasConcluidas / totalEtapas) * 100) : 0;
  }
}
