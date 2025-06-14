import { UserRoutes } from "../../routes/user.routes";
import { makeCreateUserController } from "../controllers/user/createUserControllerFactory";

export const makeUserDataRoutes = (): UserRoutes => {
  return new UserRoutes(makeCreateUserController());
};
