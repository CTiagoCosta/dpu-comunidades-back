import { SalvarDocumentosController } from "../../../modules/primeiroAtendimento/controllers/SalvarDocumentosController";
import { SalvarDocumentosUseCase } from "../../../modules/primeiroAtendimento/useCases/salvarDocumentos/SalvarDocumentosUseCase";
import { PrimeiroAtendimentoRepository } from "../../../modules/primeiroAtendimento/repositories/PrimeiroAtendimentoRepository";
import { HistoricoProgressoRepository } from "../../../modules/primeiroAtendimento/repositories/HistoricoProgressoRepository";
import { NavigationService } from "../../../modules/primeiroAtendimento/services/NavigationService";
import { ProgressCalculator } from "../../../modules/primeiroAtendimento/services/ProgressCalculator";

export function makeSalvarDocumentosController(): SalvarDocumentosController {
  const primeiroAtendimentoRepo = new PrimeiroAtendimentoRepository();
  const historicoRepo = new HistoricoProgressoRepository();
  const navigationService = new NavigationService();
  const progressCalculator = new ProgressCalculator();
  const useCase = new SalvarDocumentosUseCase(
    primeiroAtendimentoRepo,
    navigationService,
    progressCalculator,
    historicoRepo
  );
  return new SalvarDocumentosController(useCase);
}
