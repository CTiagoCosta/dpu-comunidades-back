import { PrimeiroAtendimentoRepository } from "../../repositories/PrimeiroAtendimentoRepository";
import {
  ObterEstadoAtendimentoRequest,
  ObterEstadoAtendimentoResponse,
} from "./ObterEstadoAtendimentoDtos";

export class ObterEstadoAtendimentoUseCase {
  constructor(
    private primeiroAtendimentoRepo: PrimeiroAtendimentoRepository
  ) {}

  async execute(
    request: ObterEstadoAtendimentoRequest
  ): Promise<ObterEstadoAtendimentoResponse> {
    const { filaId } = request;

    // Buscar atendimento pela fila
    const atendimento = await this.primeiroAtendimentoRepo.findByFilaId(filaId);

    if (!atendimento) {
      throw new Error("Primeiro Atendimento não encontrado para esta fila");
    }

    // Retorna o atendimento completo com todos os relacionamentos
    return atendimento;
  }
}
