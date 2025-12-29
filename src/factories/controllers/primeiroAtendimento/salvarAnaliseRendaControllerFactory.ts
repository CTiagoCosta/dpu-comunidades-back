import { SalvarAnaliseRendaController } from "../../../modules/primeiroAtendimento/controllers/SalvarAnaliseRendaController";
import { SalvarAnaliseRendaUseCase } from "../../../modules/primeiroAtendimento/useCases/salvarAnaliseRenda/SalvarAnaliseRendaUseCase";
import { PrimeiroAtendimentoRepository } from "../../../modules/primeiroAtendimento/repositories/PrimeiroAtendimentoRepository";
import { HistoricoProgressoRepository } from "../../../modules/primeiroAtendimento/repositories/HistoricoProgressoRepository";
import { NavigationService } from "../../../modules/primeiroAtendimento/services/NavigationService";
import { ProgressCalculator } from "../../../modules/primeiroAtendimento/services/ProgressCalculator";

export function makeSalvarAnaliseRendaController(): SalvarAnaliseRendaController {
  const primeiroAtendimentoRepo = new PrimeiroAtendimentoRepository();
  const historicoRepo = new HistoricoProgressoRepository();
  const navigationService = new NavigationService();
  const progressCalculator = new ProgressCalculator();
  const useCase = new SalvarAnaliseRendaUseCase(
    primeiroAtendimentoRepo,
    navigationService,
    progressCalculator,
    historicoRepo
  );
  return new SalvarAnaliseRendaController(useCase);
}
