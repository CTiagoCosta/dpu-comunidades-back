import { ListTypeOfServiceController } from "../modules/complementaryData/useCase/listTypeOfService/ListTypeOfServiceController";
import { adaptRoute } from "../infra/adapters/expressRouteAdapter";
import { Route } from "../infra/Route";
import { Router } from "express";
import { ListTypeOfAttendanceServiceController } from "../modules/complementaryData/useCase/listTypeOfAttendanceService/ListTypeOfAttendanceServiceController";
import { ListPriorityTypeController } from "../modules/complementaryData/useCase/listPriorityType/ListPriorityTypeController";
import { ListMaritalStatusController } from "../modules/complementaryData/useCase/listMaritalStatus/ListMaritalStatusController";
import { ListProfessionsController } from "../modules/complementaryData/useCase/listProfessions/ListProfessionsController";
import { ListTypeOfResidenceController } from "../modules/complementaryData/useCase/listTypeOfResidence/ListTypeOfResidenceController";
import { ListVulnerabilityTypeController } from "../modules/complementaryData/useCase/listVulnerabilityType/ListVulnerabilityTypeController";
import { ListRequestForLegalAssistanceController } from "../modules/complementaryData/useCase/listRequestForLegalAssistance/ListRequestForLegalAssistanceController";
import { ListTypeOfReferalOrganizationController } from "../modules/complementaryData/useCase/listTypeOfReferalOrganization/ListTypeOfReferalOrganizationController";
import { ListReferalOrganizationController } from "../modules/complementaryData/useCase/listReferalOrganization/ListReferalOrganizationController";

export class ComplementaryRoutes implements Route {
  private router: Router;

  constructor(
    private complementaryDataController: ListTypeOfServiceController,
    private listTypeOfAttendanceController: ListTypeOfAttendanceServiceController,
    private listTypeOfPriorityController: ListPriorityTypeController,
    private listMaritalStatusController: ListMaritalStatusController,
    private listProfessionsController: ListProfessionsController,
    private listTypeOfResidenceController: ListTypeOfResidenceController,
    private listVulnerabilityTypeController: ListVulnerabilityTypeController,
    private listRequestForLegalAssistanceController: ListRequestForLegalAssistanceController,
    private typeOfReferalOrganizationController: ListTypeOfReferalOrganizationController,
    private listReferalOrganizationController: ListReferalOrganizationController
  ) {
    this.router = Router();
  }

  getRouter(): Router {
    this.router.get(
      "/type-of-attendance",
      adaptRoute(this.complementaryDataController)
    );
    this.router.get(
      "/type-of-service/attendance/:attendenceId",
      adaptRoute(this.listTypeOfAttendanceController)
    );
    this.router.get(
      "/prioritary-type", adaptRoute(this.listTypeOfPriorityController)
    );
    this.router.get(
      "/marital-status",
      adaptRoute(this.listMaritalStatusController)
    );
    this.router.get(
      "/professions",
      adaptRoute(this.listProfessionsController)
    );
    this.router.get(
      "/type-of-residence",
      adaptRoute(this.listTypeOfResidenceController)
    );
    this.router.get(
      "/vulnerability-type",
      adaptRoute(this.listVulnerabilityTypeController)
    );
    this.router.get(
      "/request-for-legal-assistance",
      adaptRoute(this.listRequestForLegalAssistanceController)
    );
    this.router.get(
      "/type-of-referal-organization",
      adaptRoute(this.typeOfReferalOrganizationController)
    );

    this.router.get(
      "/referal-organization/:typeOfReferalId",
      adaptRoute(this.listReferalOrganizationController)
    );
    return this.router;
  }
}
