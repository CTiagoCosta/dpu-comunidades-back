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

    // Primeiro tenta buscar um atendimento existente
    let atendimento = await prismaClient.atendimento.findUnique({
      where: { id: atendimentoId },
    });

    // Se não encontrou atendimento, verifica se é um ID de fila e busca por ele
    if (!atendimento) {
      const fila = await prismaClient.filaAtendimento.findUnique({
        where: { id: atendimentoId },
      });

      if (fila) {
        // Busca atendimento pelo filaId
        atendimento = await prismaClient.atendimento.findFirst({
          where: { filaId: fila.id },
        });
      }

      // Se ainda não encontrou, cria um novo atendimento mínimo
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

    // Cria o registro de encaminhamento a outros órgãos
    const encaminhamento = await prismaClient.encaminhamentoOutrosOrgaos.create({
      data: {
        atendimentoId: atendimento.id,
        orgaoDestino,
        motivoEncaminhamento,
        observacoes,
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
