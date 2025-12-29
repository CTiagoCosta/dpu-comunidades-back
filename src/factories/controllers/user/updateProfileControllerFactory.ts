import { UpdateProfileController } from "../../../modules/user/useCases/updateProfile/UpdateProfileController";
import { UpdateProfileContract } from "../../../modules/user/useCases/updateProfile/UpdateProfileContract";
import { UpdateProfileUseCase } from "../../../modules/user/useCases/updateProfile/UpdateProfileUseCase";
import { UserRepository } from "../../../modules/user/repositories/UserRepository";

export const updateProfileControllerFactory = (): UpdateProfileController => {
  const userRepository = new UserRepository();
  const contract = new UpdateProfileContract();
  const useCase = new UpdateProfileUseCase(userRepository);
  return new UpdateProfileController(contract, useCase);
};
