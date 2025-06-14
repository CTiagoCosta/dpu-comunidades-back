import { ListTypeOfServiceController } from "../modules/complementaryData/useCase/listTypeOfService/ListTypeOfServiceController";
import { adaptRoute } from "../infra/adapters/expressRouteAdapter";
import { Route } from "../infra/Route";
import { Router } from "express";
import { ListTypeOfAttendanceServiceController } from "../modules/complementaryData/useCase/listTypeOfAttendanceService/ListTypeOfAttendanceServiceController";
import { CreateUserController } from "../modules/user/useCases/createUser/CreateUserController";

export class UserRoutes implements Route {
  private router: Router;

  constructor(private createUserController: CreateUserController) {
    this.router = Router();
  }

  getRouter(): Router {
    this.router.post("/create", adaptRoute(this.createUserController));
    return this.router;
  }
}
