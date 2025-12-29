import { IniciarPrimeiroAtendimentoController } from "../../../modules/primeiroAtendimento/controllers/IniciarPrimeiroAtendimentoController";
import { IniciarPrimeiroAtendimentoUseCase } from "../../../modules/primeiroAtendimento/useCases/iniciarPrimeiroAtendimento/IniciarPrimeiroAtendimentoUseCase";
import { PrimeiroAtendimentoRepository } from "../../../modules/primeiroAtendimento/repositories/PrimeiroAtendimentoRepository";
import { HistoricoProgressoRepository } from "../../../modules/primeiroAtendimento/repositories/HistoricoProgressoRepository";

export function makeIniciarPrimeiroAtendimentoController(): IniciarPrimeiroAtendimentoController {
  const primeiroAtendimentoRepo = new PrimeiroAtendimentoRepository();
  const historicoRepo = new HistoricoProgressoRepository();
  const useCase = new IniciarPrimeiroAtendimentoUseCase(
    primeiroAtendimentoRepo,
    historicoRepo
  );
  return new IniciarPrimeiroAtendimentoController(useCase);
}
