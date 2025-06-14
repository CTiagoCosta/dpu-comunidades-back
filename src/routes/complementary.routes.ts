import { ListTypeOfServiceController } from "../modules/complementaryData/useCase/listTypeOfService/ListTypeOfServiceController";
import { adaptRoute } from "../infra/adapters/expressRouteAdapter";
import { Route } from "../infra/Route";
import { Router } from "express";
import { ListTypeOfAttendanceServiceController } from "../modules/complementaryData/useCase/listTypeOfAttendanceService/ListTypeOfAttendanceServiceController";
import { ListPriorityTypeController } from "../modules/complementaryData/useCase/listPriorityType/ListPriorityTypeController";
import { ListMaritalStatusController } from "../modules/complementaryData/useCase/listMaritalStatus/ListMaritalStatusController";
import { ListProfessionsController } from "../modules/complementaryData/useCase/listProfessions/ListProfessionsController";

export class ComplementaryRoutes implements Route {
  private router: Router;

  constructor(
    private complementaryDataController: ListTypeOfServiceController,
    private listTypeOfAttendanceController: ListTypeOfAttendanceServiceController,
    private listTypeOfPriorityController: ListPriorityTypeController,
    private listMaritalStatusController: ListMaritalStatusController,
    private listProfessionsController: ListProfessionsController
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
    return this.router;
  }
}
