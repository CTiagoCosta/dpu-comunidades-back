import { ChangePasswordController } from "../../../modules/user/useCases/changePassword/ChangePasswordController";
import { ChangePasswordContract } from "../../../modules/user/useCases/changePassword/ChangePasswordContract";
import { ChangePasswordUseCase } from "../../../modules/user/useCases/changePassword/ChangePasswordUseCase";
import { UserRepository } from "../../../modules/user/repositories/UserRepository";

export const changePasswordControllerFactory = (): ChangePasswordController => {
  const userRepository = new UserRepository();
  const contract = new ChangePasswordContract();
  const useCase = new ChangePasswordUseCase(userRepository);
  return new ChangePasswordController(contract, useCase);
};
