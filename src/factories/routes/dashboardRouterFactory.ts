import { DashboardRoutes } from "../../routes/dashboard.routes";
import { makeObterEstatisticasController } from "../controllers/dashboard/obterEstatisticasControllerFactory";
import { makeObterRelatoriosController } from "../controllers/dashboard/obterRelatoriosControllerFactory";

export const makeDashboardRoutes = (): DashboardRoutes => {
  return new DashboardRoutes(
    makeObterEstatisticasController(),
    makeObterRelatoriosController()
  );
};
