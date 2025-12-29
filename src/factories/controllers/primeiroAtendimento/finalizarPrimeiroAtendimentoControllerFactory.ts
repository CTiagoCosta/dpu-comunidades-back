import { FinalizarAtendimentoController } from "../../../modules/primeiroAtendimento/controllers/FinalizarAtendimentoController";
import { FinalizarAtendimentoUseCase } from "../../../modules/primeiroAtendimento/useCases/finalizarAtendimento/FinalizarAtendimentoUseCase";
import { PrimeiroAtendimentoRepository } from "../../../modules/primeiroAtendimento/repositories/PrimeiroAtendimentoRepository";
import { HistoricoProgressoRepository } from "../../../modules/primeiroAtendimento/repositories/HistoricoProgressoRepository";

export function makeFinalizarPrimeiroAtendimentoController(): FinalizarAtendimentoController {
  const primeiroAtendimentoRepo = new PrimeiroAtendimentoRepository();
  const historicoRepo = new HistoricoProgressoRepository();
  const useCase = new FinalizarAtendimentoUseCase(
    primeiroAtendimentoRepo,
    historicoRepo
  );
  return new FinalizarAtendimentoController(useCase);
}
