import { ObterEstatisticasController } from "../../../modules/dashboard/controllers/ObterEstatisticasController";
import { ObterEstatisticasUseCase } from "../../../modules/dashboard/useCases/obterEstatisticas/ObterEstatisticasUseCase";

export const makeObterEstatisticasController = (): ObterEstatisticasController => {
  const obterEstatisticasUseCase = new ObterEstatisticasUseCase();
  return new ObterEstatisticasController(obterEstatisticasUseCase);
};
