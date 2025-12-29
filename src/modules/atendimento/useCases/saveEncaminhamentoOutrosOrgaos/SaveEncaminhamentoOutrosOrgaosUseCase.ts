import prismaClient from "../../../../prisma";
import { SocketService } from "../../../../infra/SocketService";
import {
  SaveEncaminhamentoOutrosOrgaosRequest,
  SaveEncaminhamentoOutrosOrgaosResponse,
} from "./SaveEncaminhamentoOutrosOrgaosDtos";

export class SaveEncaminhamentoOutrosOrgaosUseCase {
  async execute(
    request: SaveEncaminhamentoOutrosOrgaosRequest
  ): Promise<SaveEncaminhamentoOutrosOrgaosResponse> {
    const { atendimentoId, orgaoDestino, motivoEncaminhamento, observacoes, operadorId } = request;

    let atendimento = await prismaClient.atendimento.findUnique({
      where: { id: atendimentoId },
    });

    if (!atendimento) {
      const fila = await prismaClient.filaAtendimento.findUnique({
        where: { id: atendimentoId },
      });

      if (fila) {
        atendimento = await prismaClient.atendimento.findFirst({
          where: { filaId: fila.id },
        });
      }

      if (!atendimento) {
        atendimento = await prismaClient.atendimento.create({
          data: {
            capacidadeCivil: true,
            cep: "",
            endereco: "",
            numero: 0,
            bairro: "",
            cidade: "",
            uf: "",
            processosAndamento: "NAO",
            estadoCivilId: 1,
            tipoDomicilioId: 1,
            tipoDemandaPrevidenciariaId: 1,
            competenciaJudicialId: 1,
            operadorId: operadorId || "sistema",
            filaId: fila?.id,
          },
        });
      }
    }

    const encaminhamento = await prismaClient.encaminhamentoOutrosOrgaos.create({
      data: {
        atendimentoId: atendimento.id,
        orgaoDestino,
        motivoEncaminhamento,
        observacoes,
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
      id: encaminhamento.id,
      atendimentoId: encaminhamento.atendimentoId,
      orgaoDestino: encaminhamento.orgaoDestino,
      motivoEncaminhamento: encaminhamento.motivoEncaminhamento,
      observacoes: encaminhamento.observacoes || undefined,
      operadorId: encaminhamento.operadorId || undefined,
      dataCriacao: encaminhamento.dataCriacao,
    };
  }
}
