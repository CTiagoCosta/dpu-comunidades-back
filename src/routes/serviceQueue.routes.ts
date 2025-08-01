import { adaptRoute } from "../infra/adapters/expressRouteAdapter";
import { Route } from "../infra/Route";
import { Router } from "express";
import { CreateServiceQueueController } from "../modules/serviceQueue/useCases/createServiceQueue/CreateServiceQueueController";
import { authenticate } from "../modules/auth/middleware/authMiddleware";
import { ListServiceQueueController } from "../modules/serviceQueue/useCases/listServiceQueue/ListServiceQueueController";
import { GetServiceQueueByIdController } from "../modules/serviceQueue/useCases/getServiceQueueById/GetServiceQueueByIdController";

export class ServiceQueueRoutes implements Route {
  private router: Router;

  constructor(
    private createServiceQueueController: CreateServiceQueueController,
    private getServiceQueueByIdController: GetServiceQueueByIdController,
    private listServiceQueueController: ListServiceQueueController
  ) {
    this.router = Router();
  }

  getRouter(): Router {
    this.router.post(
      "/create",
      authenticate,
      adaptRoute(this.createServiceQueueController)
    );

    this.router.get("/list", authenticate, adaptRoute(this.listServiceQueueController));

    this.router.get("/:id", authenticate, adaptRoute(this.getServiceQueueByIdController));
    return this.router;
  }
}
