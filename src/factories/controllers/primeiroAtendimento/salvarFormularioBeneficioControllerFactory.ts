import { SalvarFormularioBeneficioController } from "../../../modules/primeiroAtendimento/controllers/SalvarFormularioBeneficioController";
import { SalvarFormularioBeneficioUseCase } from "../../../modules/primeiroAtendimento/useCases/salvarFormularioBeneficio/SalvarFormularioBeneficioUseCase";
import { PrimeiroAtendimentoRepository } from "../../../modules/primeiroAtendimento/repositories/PrimeiroAtendimentoRepository";
import { HistoricoProgressoRepository } from "../../../modules/primeiroAtendimento/repositories/HistoricoProgressoRepository";
import { NavigationService } from "../../../modules/primeiroAtendimento/services/NavigationService";
import { ProgressCalculator } from "../../../modules/primeiroAtendimento/services/ProgressCalculator";

export function makeSalvarFormularioBeneficioController(): SalvarFormularioBeneficioController {
  const primeiroAtendimentoRepo = new PrimeiroAtendimentoRepository();
  const historicoRepo = new HistoricoProgressoRepository();
  const navigationService = new NavigationService();
  const progressCalculator = new ProgressCalculator();
  const useCase = new SalvarFormularioBeneficioUseCase(
    primeiroAtendimentoRepo,
    navigationService,
    progressCalculator,
    historicoRepo
  );
  return new SalvarFormularioBeneficioController(useCase);
}
