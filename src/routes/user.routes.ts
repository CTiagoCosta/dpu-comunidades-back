import { ListTypeOfServiceController } from "../modules/complementaryData/useCase/listTypeOfService/ListTypeOfServiceController";
import { adaptRoute } from "../infra/adapters/expressRouteAdapter";
import { Route } from "../infra/Route";
import { Router } from "express";
import { ListTypeOfAttendanceServiceController } from "../modules/complementaryData/useCase/listTypeOfAttendanceService/ListTypeOfAttendanceServiceController";
import { CreateUserController } from "../modules/user/useCases/createUser/CreateUserController";
import { LoginController } from "../modules/auth/useCases/login/LoginController";
import { GetUserController } from "../modules/user/useCases/getUser/GetUserController";
import { authenticate } from "../modules/auth/middleware/authMiddleware";
import { listUnidadesControllerFactory } from "../factories/controllers/user/listUnidadesControllerFactory";
import { updateProfileControllerFactory } from "../factories/controllers/user/updateProfileControllerFactory";
import { changePasswordControllerFactory } from "../factories/controllers/user/changePasswordControllerFactory";
import { uploadProfilePhotoControllerFactory } from "../factories/controllers/user/uploadProfilePhotoControllerFactory";
import { getUserStatisticsControllerFactory } from "../factories/controllers/user/getUserStatisticsControllerFactory";
import { uploadProfilePhoto } from "../configs/multerConfig";
import { getRecentActivitiesController } from "../modules/user/useCases/getRecentActivities";

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

    this.router.get("/unidades", authenticate, async (req, res) => {
      await listUnidadesControllerFactory().handle(req, res);
    });

    this.router.put("/profile", authenticate, async (req, res) => {
      await updateProfileControllerFactory().handle(req, res);
    });

    this.router.put("/password", authenticate, async (req, res) => {
      await changePasswordControllerFactory().handle(req, res);
    });

    this.router.post("/profile/photo", authenticate, uploadProfilePhoto.single('photo'), async (req, res) => {
      await uploadProfilePhotoControllerFactory().handle(req, res);
    });

    this.router.get("/statistics", authenticate, async (req, res) => {
      await getUserStatisticsControllerFactory().handle(req, res);
    });

    this.router.get("/recent-activities", authenticate, async (req, res) => {
      await getRecentActivitiesController.handle(req, res);
    });

    return this.router;
  }
}
