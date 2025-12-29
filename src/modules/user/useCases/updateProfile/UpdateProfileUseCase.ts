import { IUserRepository } from "../../interfaces/IUserRepository";
import { UpdateProfileRequest, UpdateProfileResponse } from "./UpdateProfileDtos";

export class UpdateProfileUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(request: UpdateProfileRequest): Promise<UpdateProfileResponse> {
    const { userId, ...profileData } = request;

    // Verificar se usuário existe
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    // Se o email está sendo alterado, verificar se não está em uso
    if (profileData.email && profileData.email !== user.email) {
      const emailExists = await this.userRepository.emailExists(profileData.email);
      if (emailExists) {
        throw new Error("Este email já está em uso por outro usuário");
      }
    }

    // Atualizar perfil
    const updatedUser = await this.userRepository.updateProfile(userId, profileData);

    if (!updatedUser) {
      throw new Error("Erro ao atualizar perfil");
    }

    return {
      user: updatedUser
    };
  }
}
