import { LoginContract } from "../../../modules/auth/useCases/login/LoginContract";
import { LoginController } from "../../../modules/auth/useCases/login/LoginController";
import { LoginUseCase } from "../../../modules/auth/useCases/login/LoginUseCase";
import { UserRepository } from "../../../modules/user/repositories/UserRepository";
import { AuthService } from "../../../modules/user/service/AuthService";

export const makeLoginController = (): LoginController => {
  const contract = new LoginContract();

  const userRepository = new UserRepository();
  const authService = new AuthService();
  const useCase = new LoginUseCase(userRepository, authService);

  return new LoginController(contract, useCase);
};
