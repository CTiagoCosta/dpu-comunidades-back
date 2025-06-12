import { ListTypeOfServiceController } from "../modules/complementaryData/useCase/listTypeOfService/ListTypeOfServiceController";
import { adaptRoute } from "../infra/adapters/expressRouteAdapter";
import { Route } from "../infra/Route";
import { Router } from "express";

export class ComplementaryRoutes implements Route {
  private router: Router;

  constructor(private complementaryDataController: ListTypeOfServiceController) {
    this.router = Router();
  }

  getRouter(): Router {
    this.router.get('/type-of-service', adaptRoute(this.complementaryDataController));
    return this.router;
  }
}