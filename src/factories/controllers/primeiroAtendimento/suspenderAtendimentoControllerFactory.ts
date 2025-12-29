import { SuspenderAtendimentoController } from "../../../modules/primeiroAtendimento/controllers/SuspenderAtendimentoController";
import { SuspenderAtendimentoUseCase } from "../../../modules/primeiroAtendimento/useCases/suspenderAtendimento/SuspenderAtendimentoUseCase";
import { PrimeiroAtendimentoRepository } from "../../../modules/primeiroAtendimento/repositories/PrimeiroAtendimentoRepository";
import { HistoricoProgressoRepository } from "../../../modules/primeiroAtendimento/repositories/HistoricoProgressoRepository";

export function makeSuspenderAtendimentoController(): SuspenderAtendimentoController {
  const primeiroAtendimentoRepo = new PrimeiroAtendimentoRepository();
  const historicoRepo = new HistoricoProgressoRepository();
  const useCase = new SuspenderAtendimentoUseCase(
    primeiroAtendimentoRepo,
    historicoRepo
  );
  return new SuspenderAtendimentoController(useCase);
}
