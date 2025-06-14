import { UserRepository } from "../../../modules/user/repositories/UserRepository";
import { AuthService } from "../../../modules/user/service/AuthService";
import { CreateUserContract } from "../../../modules/user/useCases/createUser/CreateUserContract";
import { CreateUserController } from "../../../modules/user/useCases/createUser/CreateUserController";
import { CreateUserUseCase } from "../../../modules/user/useCases/createUser/CreateUserUseCase";

export const makeCreateUserController = (): CreateUserController => {
  const contract = new CreateUserContract();

  const userRepository = new UserRepository();
  const authService = new AuthService();
  const useCase = new CreateUserUseCase(userRepository, authService);

  return new CreateUserController(contract, useCase);
};
