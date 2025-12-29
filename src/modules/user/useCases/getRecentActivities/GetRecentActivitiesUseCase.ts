import { PrismaClient } from "../../../../generated/prisma/client";
import { GetRecentActivitiesRequest, GetRecentActivitiesResponse, RecentActivity } from "./GetRecentActivitiesDtos";

export class GetRecentActivitiesUseCase {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async execute(request: GetRecentActivitiesRequest): Promise<GetRecentActivitiesResponse> {
    const { userId, limit = 10 } = request;

    const filaAtendimentos = await this.prisma.filaAtendimento.findMany({
      where: {
        OR: [
          { operadorTriagemId: userId },
          { operadorAtendimentoId: userId }
        ],
        status: {
          in: ['ATENDIDO', 'EM_ATENDIMENTO', 'CANCELADO']
        }
      },
      include: {
        tipoAtendimento: true
      },
      orderBy: {
        dataEntrada: 'desc'
      },
      take: limit
    });

    const activities: RecentActivity[] = filaAtendimentos.map(atendimento => ({
      id: atendimento.id,
      tipo: atendimento.tipoAtendimento.descricao,
      assistido: atendimento.nomeCompleto,
      cpf: atendimento.cpf,
      data: atendimento.dataFim || atendimento.dataInicio || atendimento.dataEntrada,
      status: this.mapStatus(atendimento.status)
    }));

    return { activities };
  }

  private mapStatus(status: string): string {
    const statusMap: { [key: string]: string } = {
      'ATENDIDO': 'Concluído',
      'EM_ATENDIMENTO': 'Em Atendimento',
      'CANCELADO': 'Cancelado',
      'AGUARDANDO': 'Aguardando'
    };

    return statusMap[status] || status;
  }
}
