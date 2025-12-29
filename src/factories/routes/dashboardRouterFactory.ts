import { DashboardRoutes } from "../../routes/dashboard.routes";
import { makeObterEstatisticasController } from "../controllers/dashboard/obterEstatisticasControllerFactory";

export const makeDashboardRoutes = (): DashboardRoutes => {
  return new DashboardRoutes(makeObterEstatisticasController());
};
