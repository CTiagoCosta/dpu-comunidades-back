import { UserRepository } from "../../../modules/user/repositories/UserRepository";
import { AuthService } from "../../../modules/auth/services/AuthService";
import { CreateUserContract } from "../../../modules/user/useCases/createUser/CreateUserContract";
import { CreateUserController } from "../../../modules/user/useCases/createUser/CreateUserController";
import { CreateUserUseCase } from "../../../modules/user/useCases/createUser/CreateUserUseCase";
import { RoleRepository } from "../../../modules/user/repositories/RoleRepository";

export const makeCreateUserController = (): CreateUserController => {
  const contract = new CreateUserContract();

  const userRepository = new UserRepository();
  const authService = new AuthService();
  const roleRepository = new RoleRepository();
  const useCase = new CreateUserUseCase(userRepository, authService, roleRepository);

  return new CreateUserController(contract, useCase);
};
