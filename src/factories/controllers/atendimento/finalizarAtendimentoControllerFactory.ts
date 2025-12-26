import { FinalizarAtendimentoController } from "../../../modules/atendimento/useCases/finalizarAtendimento/FinalizarAtendimentoController";
import { FinalizarAtendimentoUseCase } from "../../../modules/atendimento/useCases/finalizarAtendimento/FinalizarAtendimentoUseCase";
import prismaClient from "../../../prisma";

export function finalizarAtendimentoControllerFactory(): FinalizarAtendimentoController {
  const useCase = new FinalizarAtendimentoUseCase(prismaClient);
  return new FinalizarAtendimentoController(useCase);
}
