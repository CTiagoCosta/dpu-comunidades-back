import { SalvarComplementoDadosController } from "../../../modules/primeiroAtendimento/controllers/SalvarComplementoDadosController";
import { SalvarComplementoDadosUseCase } from "../../../modules/primeiroAtendimento/useCases/salvarComplementoDados/SalvarComplementoDadosUseCase";
import { PrimeiroAtendimentoRepository } from "../../../modules/primeiroAtendimento/repositories/PrimeiroAtendimentoRepository";
import { HistoricoProgressoRepository } from "../../../modules/primeiroAtendimento/repositories/HistoricoProgressoRepository";
import { NavigationService } from "../../../modules/primeiroAtendimento/services/NavigationService";
import { ProgressCalculator } from "../../../modules/primeiroAtendimento/services/ProgressCalculator";

export function makeSalvarComplementoDadosController(): SalvarComplementoDadosController {
  const primeiroAtendimentoRepo = new PrimeiroAtendimentoRepository();
  const historicoRepo = new HistoricoProgressoRepository();
  const navigationService = new NavigationService();
  const progressCalculator = new ProgressCalculator();
  const useCase = new SalvarComplementoDadosUseCase(
    primeiroAtendimentoRepo,
    historicoRepo,
    navigationService,
    progressCalculator
  );
  return new SalvarComplementoDadosController(useCase);
}
