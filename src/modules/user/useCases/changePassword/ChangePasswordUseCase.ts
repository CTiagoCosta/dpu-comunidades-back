import bcrypt from "bcryptjs";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { ChangePasswordRequest, ChangePasswordResponse } from "./ChangePasswordDtos";

export class ChangePasswordUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(request: ChangePasswordRequest): Promise<ChangePasswordResponse> {
    const { userId, currentPassword, newPassword } = request;

    // Buscar usuário
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    // Verificar senha atual
    const isPasswordValid = await bcrypt.compare(currentPassword, user.senha);
    if (!isPasswordValid) {
      throw new Error("Senha atual incorreta");
    }

    // Hash da nova senha
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Atualizar senha
    const success = await this.userRepository.updatePassword(userId, hashedPassword);

    if (!success) {
      throw new Error("Erro ao atualizar senha");
    }

    return {
      success: true,
      message: "Senha alterada com sucesso"
    };
  }
}
