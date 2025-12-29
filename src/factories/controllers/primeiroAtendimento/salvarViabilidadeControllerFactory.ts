import { SalvarViabilidadeController } from "../../../modules/primeiroAtendimento/controllers/SalvarViabilidadeController";
import { SalvarViabilidadeUseCase } from "../../../modules/primeiroAtendimento/useCases/salvarViabilidade/SalvarViabilidadeUseCase";
import { PrimeiroAtendimentoRepository } from "../../../modules/primeiroAtendimento/repositories/PrimeiroAtendimentoRepository";
import { HistoricoProgressoRepository } from "../../../modules/primeiroAtendimento/repositories/HistoricoProgressoRepository";
import { NavigationService } from "../../../modules/primeiroAtendimento/services/NavigationService";
import { ProgressCalculator } from "../../../modules/primeiroAtendimento/services/ProgressCalculator";

export function makeSalvarViabilidadeController(): SalvarViabilidadeController {
  const primeiroAtendimentoRepo = new PrimeiroAtendimentoRepository();
  const historicoRepo = new HistoricoProgressoRepository();
  const navigationService = new NavigationService();
  const progressCalculator = new ProgressCalculator();
  const useCase = new SalvarViabilidadeUseCase(
    primeiroAtendimentoRepo,
    navigationService,
    progressCalculator,
    historicoRepo
  );
  return new SalvarViabilidadeController(useCase);
}
