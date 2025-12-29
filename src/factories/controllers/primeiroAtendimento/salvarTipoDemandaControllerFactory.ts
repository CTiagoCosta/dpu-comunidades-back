import { SalvarTipoDemandaController } from "../../../modules/primeiroAtendimento/controllers/SalvarTipoDemandaController";
import { SalvarTipoDemandaUseCase } from "../../../modules/primeiroAtendimento/useCases/salvarTipoDemanda/SalvarTipoDemandaUseCase";
import { PrimeiroAtendimentoRepository } from "../../../modules/primeiroAtendimento/repositories/PrimeiroAtendimentoRepository";
import { HistoricoProgressoRepository } from "../../../modules/primeiroAtendimento/repositories/HistoricoProgressoRepository";
import { NavigationService } from "../../../modules/primeiroAtendimento/services/NavigationService";
import { ProgressCalculator } from "../../../modules/primeiroAtendimento/services/ProgressCalculator";

export function makeSalvarTipoDemandaController(): SalvarTipoDemandaController {
  const primeiroAtendimentoRepo = new PrimeiroAtendimentoRepository();
  const historicoRepo = new HistoricoProgressoRepository();
  const navigationService = new NavigationService();
  const progressCalculator = new ProgressCalculator();
  const useCase = new SalvarTipoDemandaUseCase(
    primeiroAtendimentoRepo,
    navigationService,
    progressCalculator,
    historicoRepo
  );
  return new SalvarTipoDemandaController(useCase);
}
