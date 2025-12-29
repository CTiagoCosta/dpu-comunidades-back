import { SalvarCapacidadeCivilController } from "../../../modules/primeiroAtendimento/controllers/SalvarCapacidadeCivilController";
import { SalvarCapacidadeCivilUseCase } from "../../../modules/primeiroAtendimento/useCases/salvarCapacidadeCivil/SalvarCapacidadeCivilUseCase";
import { PrimeiroAtendimentoRepository } from "../../../modules/primeiroAtendimento/repositories/PrimeiroAtendimentoRepository";
import { HistoricoProgressoRepository } from "../../../modules/primeiroAtendimento/repositories/HistoricoProgressoRepository";
import { NavigationService } from "../../../modules/primeiroAtendimento/services/NavigationService";
import { ProgressCalculator } from "../../../modules/primeiroAtendimento/services/ProgressCalculator";

export function makeSalvarCapacidadeCivilController(): SalvarCapacidadeCivilController {
  const primeiroAtendimentoRepo = new PrimeiroAtendimentoRepository();
  const historicoRepo = new HistoricoProgressoRepository();
  const navigationService = new NavigationService();
  const progressCalculator = new ProgressCalculator();
  const useCase = new SalvarCapacidadeCivilUseCase(
    primeiroAtendimentoRepo,
    navigationService,
    progressCalculator,
    historicoRepo
  );
  return new SalvarCapacidadeCivilController(useCase);
}
