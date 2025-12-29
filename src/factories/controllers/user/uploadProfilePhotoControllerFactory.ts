import { UploadProfilePhotoController } from "../../../modules/user/useCases/uploadProfilePhoto/UploadProfilePhotoController";
import { UploadProfilePhotoUseCase } from "../../../modules/user/useCases/uploadProfilePhoto/UploadProfilePhotoUseCase";
import { UserRepository } from "../../../modules/user/repositories/UserRepository";

export const uploadProfilePhotoControllerFactory = (): UploadProfilePhotoController => {
  const userRepository = new UserRepository();
  const useCase = new UploadProfilePhotoUseCase(userRepository);
  return new UploadProfilePhotoController(useCase);
};
