import { ComplementaryRoutes } from "../../routes/complementary.routes";
import { makeListComplementaryDataController } from "../controllers/listComplementaryDataControllerFactory";
import { makeListMaritalStatusController } from "../controllers/listMaritalStatusControllerFactory";
import { makeListTypeOfPrioritaryController } from "../controllers/listPrioritaryTypeControllerFactory";
import { makeListTypeOfAttendanceController } from "../controllers/listTypeOfAttendanceControllerFactory";

export const makeComplementaryDataRoutes = (): ComplementaryRoutes => {
  return new ComplementaryRoutes(
    makeListComplementaryDataController(),
    makeListTypeOfAttendanceController(),
    makeListTypeOfPrioritaryController(),
    makeListMaritalStatusController()
  );
};
