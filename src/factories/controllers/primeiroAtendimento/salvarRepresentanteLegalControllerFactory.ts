import { SalvarRepresentanteLegalController } from "../../../modules/primeiroAtendimento/controllers/SalvarRepresentanteLegalController";
import { SalvarRepresentanteLegalUseCase } from "../../../modules/primeiroAtendimento/useCases/salvarRepresentanteLegal/SalvarRepresentanteLegalUseCase";
import { PrimeiroAtendimentoRepository } from "../../../modules/primeiroAtendimento/repositories/PrimeiroAtendimentoRepository";
import { HistoricoProgressoRepository } from "../../../modules/primeiroAtendimento/repositories/HistoricoProgressoRepository";
import { NavigationService } from "../../../modules/primeiroAtendimento/services/NavigationService";
import { ProgressCalculator } from "../../../modules/primeiroAtendimento/services/ProgressCalculator";

export function makeSalvarRepresentanteLegalController(): SalvarRepresentanteLegalController {
  const primeiroAtendimentoRepo = new PrimeiroAtendimentoRepository();
  const historicoRepo = new HistoricoProgressoRepository();
  const navigationService = new NavigationService();
  const progressCalculator = new ProgressCalculator();
  const useCase = new SalvarRepresentanteLegalUseCase(
    primeiroAtendimentoRepo,
    navigationService,
    progressCalculator,
    historicoRepo
  );
  return new SalvarRepresentanteLegalController(useCase);
}
