import { ComplementaryRoutes } from "../../routes/complementary.routes";
import { makeListComplementaryDataController } from "../controllers/listComplementaryDataControllerFactory";
import { makeListTypeOfAttendanceController } from "../controllers/listTypeOfAttendanceControllerFactory";

export const makeComplementaryDataRoutes = (): ComplementaryRoutes => {
  return new ComplementaryRoutes(
    makeListComplementaryDataController(),
    makeListTypeOfAttendanceController()
  );
};
