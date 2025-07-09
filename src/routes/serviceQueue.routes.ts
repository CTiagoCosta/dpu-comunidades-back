import { adaptRoute } from "../infra/adapters/expressRouteAdapter";
import { Route } from "../infra/Route";
import { Router } from "express";
import { CreateServiceQueueController } from "../modules/serviceQueue/useCases/createServiceQueue/CreateServiceQueueController";
import { authenticate } from "../modules/auth/middleware/authMiddleware";
import { ListServiceQueueController } from "../modules/serviceQueue/useCases/listServiceQueue/ListServiceQueueController";

export class ServiceQueueRoutes implements Route {
  private router: Router;

  constructor(
    private createServiceQueueController: CreateServiceQueueController
  ) {
    this.router = Router();
  }

  getRouter(): Router {
    this.router.post("/create", authenticate, adaptRoute(this.createServiceQueueController));
    this.router.get("/list", authenticate, async (req, res) => {
      await new ListServiceQueueController().handle(req, res);
    });
    return this.router;
  }
}
