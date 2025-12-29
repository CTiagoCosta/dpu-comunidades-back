import { ObterEstadoAtendimentoController } from "../../../modules/primeiroAtendimento/controllers/ObterEstadoAtendimentoController";
import { ObterEstadoAtendimentoUseCase } from "../../../modules/primeiroAtendimento/useCases/obterEstadoAtendimento/ObterEstadoAtendimentoUseCase";
import { PrimeiroAtendimentoRepository } from "../../../modules/primeiroAtendimento/repositories/PrimeiroAtendimentoRepository";

export function makeObterEstadoAtendimentoController(): ObterEstadoAtendimentoController {
  const primeiroAtendimentoRepo = new PrimeiroAtendimentoRepository();
  const useCase = new ObterEstadoAtendimentoUseCase(primeiroAtendimentoRepo);
  return new ObterEstadoAtendimentoController(useCase);
}
