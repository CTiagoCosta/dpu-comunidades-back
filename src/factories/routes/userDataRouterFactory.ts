import { UserRoutes } from "../../routes/user.routes";
import { makeLoginController } from "../controllers/auth/loginControllerFactory";
import { makeCreateUserController } from "../controllers/user/createUserControllerFactory";
import { makeGetUserController } from "../controllers/user/getUserControllerFactory";

export const makeUserDataRoutes = (): UserRoutes => {
  return new UserRoutes(makeCreateUserController(), makeLoginController(), makeGetUserController());
};
