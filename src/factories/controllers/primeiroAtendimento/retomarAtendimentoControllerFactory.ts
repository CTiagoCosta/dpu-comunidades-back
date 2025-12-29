import { RetomarAtendimentoController } from "../../../modules/primeiroAtendimento/controllers/RetomarAtendimentoController";
import { RetomarAtendimentoUseCase } from "../../../modules/primeiroAtendimento/useCases/retomarAtendimento/RetomarAtendimentoUseCase";
import { PrimeiroAtendimentoRepository } from "../../../modules/primeiroAtendimento/repositories/PrimeiroAtendimentoRepository";
import { HistoricoProgressoRepository } from "../../../modules/primeiroAtendimento/repositories/HistoricoProgressoRepository";

export const makeRetomarAtendimentoController = (): RetomarAtendimentoController => {
  const primeiroAtendimentoRepo = new PrimeiroAtendimentoRepository();
  const historicoRepo = new HistoricoProgressoRepository();
  const retomarAtendimentoUseCase = new RetomarAtendimentoUseCase(
    primeiroAtendimentoRepo,
    historicoRepo
  );
  return new RetomarAtendimentoController(retomarAtendimentoUseCase);
};
