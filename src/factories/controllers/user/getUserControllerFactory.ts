import { UserRepository } from "../../../modules/user/repositories/UserRepository";
import { GetUserContract } from "../../../modules/user/useCases/getUser/GetUserContract";
import { GetUserController } from "../../../modules/user/useCases/getUser/GetUserController";
import { GetUserUseCase } from "../../../modules/user/useCases/getUser/GetUserUseCase";

export const makeGetUserController = (): GetUserController => {
  const contract = new GetUserContract();

  const userRepository = new UserRepository();
  const useCase = new GetUserUseCase(userRepository);

  return new GetUserController(contract, useCase);
};
