import prismaClient from "../../../../prisma";
import { SocketService } from "../../../../infra/SocketService";
import {
  SaveOrientacaoJuridicaRequest,
  SaveOrientacaoJuridicaResponse,
} from "./SaveOrientacaoJuridicaDtos";

export class SaveOrientacaoJuridicaUseCase {
  async execute(
    request: SaveOrientacaoJuridicaRequest
  ): Promise<SaveOrientacaoJuridicaResponse> {
    const { atendimentoId, orientacaoRealizada, operadorId } = request;

    let atendimento = await prismaClient.atendimento.findUnique({
      where: { id: atendimentoId },
    });

    if (!atendimento) {
      const fila = await prismaClient.filaAtendimento.findUnique({
        where: { id: atendimentoId },
      });

      if (!fila) {
        throw new Error("Atendimento ou fila não encontrado");
      }

      atendimento = await prismaClient.atendimento.findFirst({
        where: { filaId: fila.id },
      });

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

    const orientacao = await prismaClient.orientacaoJuridica.create({
      data: {
        atendimentoId: atendimento.id,
        orientacaoRealizada,
        operadorId,
      },
    });

    if (atendimento.filaId) {
      await prismaClient.filaAtendimento.update({
        where: { id: atendimento.filaId },
        data: {
          status: "ATENDIDO",
          dataFim: new Date(),
        },
      });
      
      await SocketService.notifyQueueUpdate();
    }

    return {
      id: orientacao.id,
      atendimentoId: orientacao.atendimentoId,
      orientacaoRealizada: orientacao.orientacaoRealizada,
      operadorId: orientacao.operadorId,
      dataCriacao: orientacao.dataCriacao,
    };
  }
}
