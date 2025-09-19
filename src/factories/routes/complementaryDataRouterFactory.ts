import { ComplementaryRoutes } from "../../routes/complementary.routes";
import { makeListComplementaryDataController } from "../controllers/listComplementaryDataControllerFactory";
import { makeListMaritalStatusController } from "../controllers/listMaritalStatusControllerFactory";
import { makeListTypeOfPrioritaryController } from "../controllers/listPrioritaryTypeControllerFactory";
import { makeListProfessionsController } from "../controllers/listProfessionsControllerFactory";
import { makeListTypeOfReferalOrganizationController } from "../controllers/listTypeOfReferalOrganizationControllerFactory";
import { makeListTypeOfAttendanceController } from "../controllers/listTypeOfAttendanceControllerFactory";
import { makeListTypeOfRequestForLegalAssistanceController } from "../controllers/listTypeOfRequestForLegalAssistance";
import { makeListTypeOfResidenceController } from "../controllers/listTypeOfResidenceControllerFactory";
import { makeListVulnerabilityController } from "../controllers/listVulnerabilityControllerFactory";
import { makeListReferalOrganizationController } from "../controllers/listReferalOrganizationControllerFactory";

export const makeComplementaryDataRoutes = (): ComplementaryRoutes => {
  return new ComplementaryRoutes(
    makeListComplementaryDataController(),
    makeListTypeOfAttendanceController(),
    makeListTypeOfPrioritaryController(),
    makeListMaritalStatusController(),
    makeListProfessionsController(),
    makeListTypeOfResidenceController(),
    makeListVulnerabilityController(),
    makeListTypeOfRequestForLegalAssistanceController(),
    makeListTypeOfReferalOrganizationController(),
    makeListReferalOrganizationController()
  );
};
