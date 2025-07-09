import { ListTypeOfServiceController } from "../modules/complementaryData/useCase/listTypeOfService/ListTypeOfServiceController";
import { adaptRoute } from "../infra/adapters/expressRouteAdapter";
import { Route } from "../infra/Route";
import { Router } from "express";
import { ListTypeOfAttendanceServiceController } from "../modules/complementaryData/useCase/listTypeOfAttendanceService/ListTypeOfAttendanceServiceController";
import { CreateUserController } from "../modules/user/useCases/createUser/CreateUserController";
import { LoginController } from "../modules/auth/useCases/login/LoginController";
import { GetUserController } from "../modules/user/useCases/getUser/GetUserController";
import { authenticate } from "../modules/auth/middleware/authMiddleware";

export class UserRoutes implements Route {
  private router: Router;

  constructor(
    private createUserController: CreateUserController,
    private loginController: LoginController,
    private getUserController: GetUserController
  ) {
    this.router = Router();
  }

  getRouter(): Router {
    this.router.post("/create", adaptRoute(this.createUserController));
    this.router.post("/login", adaptRoute(this.loginController));
    this.router.get("/", authenticate, adaptRoute(this.getUserController));
    return this.router;
  }
}
