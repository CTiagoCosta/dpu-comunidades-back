import { PrismaClient } from "../../../../generated/prisma/client";
import { GetMyAtendimentosRequest, GetMyAtendimentosResponse, AtendimentoItem } from "./GetMyAtendimentosDtos";

export class GetMyAtendimentosUseCase {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async execute(request: GetMyAtendimentosRequest): Promise<GetMyAtendimentosResponse> {
    const { userId } = request;

    const atendimentos = await this.prisma.filaAtendimento.findMany({
      where: {
        OR: [
          { operadorTriagemId: userId },
          { operadorAtendimentoId: userId }
        ]
      },
      include: {
        tipoAtendimento: {
          select: {
            id: true,
            descricao: true
          }
        },
        tipoPrioridade: {
          select: {
            id: true,
            descricao: true
          }
        },
        operadorTriagem: {
          select: {
            id: true,
            nome: true
          }
        },
        operadorAtendimento: {
          select: {
            id: true,
            nome: true
          }
        }
      },
      orderBy: {
        dataEntrada: 'desc'
      }
    });

    const total = atendimentos.length;

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const amanha = new Date(hoje);
    amanha.setDate(amanha.getDate() + 1);

    const atendimentosHoje = atendimentos.filter(atendimento => {
      const dataEntrada = new Date(atendimento.dataEntrada);
      return dataEntrada >= hoje && dataEntrada < amanha;
    }).length;

    const concluidos = atendimentos.filter(atendimento =>
      atendimento.status === 'ATENDIDO'
    ).length;

    const atendimentosFormatados: AtendimentoItem[] = atendimentos.map(atendimento => ({
      id: atendimento.id,
      nomeCompleto: atendimento.nomeCompleto,
      cpf: atendimento.cpf,
      telefone: atendimento.telefone,
      tipoAtendimento: atendimento.tipoAtendimento,
      status: atendimento.status,
      dataEntrada: atendimento.dataEntrada,
      dataInicio: atendimento.dataInicio,
      dataFim: atendimento.dataFim,
      isPrioridade: atendimento.isPrioridade,
      tipoPrioridade: atendimento.tipoPrioridade,
      operadorTriagem: {
        id: atendimento.operadorTriagem.id,
        name: atendimento.operadorTriagem.nome
      },
      operadorAtendimento: atendimento.operadorAtendimento ? {
        id: atendimento.operadorAtendimento.id,
        name: atendimento.operadorAtendimento.nome
      } : null
    }));

    return {
      atendimentos: atendimentosFormatados,
      total,
      hoje: atendimentosHoje,
      concluidos
    };
  }
}
