import prismaClient from "../../../../prisma";
import { SocketService } from "../../../../infra/SocketService";
import {
  SaveRetornoDemandaJudicialRequest,
  SaveRetornoDemandaJudicialResponse,
} from "./SaveRetornoDemandaJudicialDtos";

export class SaveRetornoDemandaJudicialUseCase {
  async execute(
    request: SaveRetornoDemandaJudicialRequest
  ): Promise<SaveRetornoDemandaJudicialResponse> {
    const { atendimentoId, pajAssistido, retornoRealizado, operadorId } = request;

    // Primeiro tenta buscar um atendimento existente
    let atendimento = await prismaClient.atendimento.findUnique({
      where: { id: atendimentoId },
    });

    // Se não encontrou atendimento, verifica se é um ID de fila e busca por ele
    if (!atendimento) {
      const fila = await prismaClient.filaAtendimento.findUnique({
        where: { id: atendimentoId },
      });

      if (!fila) {
        throw new Error("Atendimento ou fila não encontrado");
      }

      // Busca o atendimento pela fila
      atendimento = await prismaClient.atendimento.findFirst({
        where: { filaId: fila.id },
      });

      // Se ainda não existe atendimento, cria um básico
      if (!atendimento) {
        atendimento = await prismaClient.atendimento.create({
          data: {
            capacidadeCivil: true,
            cep: "00000-000",
            endereco: "Não informado",
            numero: 0,
            bairro: "Não informado",
            cidade: "Não informado",
            uf: "XX",
            processosAndamento: "NAO",
            estadoCivilId: 1,
            tipoDomicilioId: 1,
            tipoDemandaPrevidenciariaId: 1,
            competenciaJudicialId: 1,
            operadorId: operadorId || fila.operadorTriagemId,
            filaId: fila.id,
          },
        });
      }
    }

    // Salva o retorno de demanda judicial
    const retorno = await prismaClient.retornoDemandaJudicial.create({
      data: {
        atendimentoId: atendimento.id,
        pajAssistido,
        retornoRealizado,
        operadorId,
      },
    });

    // Atualiza a fila para ATENDIDO (se tiver fila associada)
    if (atendimento.filaId) {
      await prismaClient.filaAtendimento.update({
        where: { id: atendimento.filaId },
        data: {
          status: "ATENDIDO",
          dataFim: new Date(),
        },
      });
      
      // Notifica todos os clientes conectados sobre a atualização da fila
      await SocketService.notifyQueueUpdate();
    }

    return {
      id: retorno.id,
      atendimentoId: retorno.atendimentoId,
      pajAssistido: retorno.pajAssistido,
      retornoRealizado: retorno.retornoRealizado,
      operadorId: retorno.operadorId,
      dataCriacao: retorno.dataCriacao,
    };
  }
}
