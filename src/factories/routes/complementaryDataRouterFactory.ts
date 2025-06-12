import { ComplementaryRoutes } from "../../routes/complementary.routes";
import { makeListComplementaryDataController } from "../controllers/listComplementaryDataControllerFactory";

export const makeComplementaryDataRoutes = (): ComplementaryRoutes => {
  return new ComplementaryRoutes(makeListComplementaryDataController());
};
