import { UserRoutes } from "../../routes/user.routes";
import { makeLoginController } from "../controllers/auth/loginControllerFactory";
import { makeCreateUserController } from "../controllers/user/createUserControllerFactory";

export const makeUserDataRoutes = (): UserRoutes => {
  return new UserRoutes(makeCreateUserController(), makeLoginController());
};
