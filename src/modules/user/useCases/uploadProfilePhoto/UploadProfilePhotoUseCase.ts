import fs from "fs";
import path from "path";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { UploadProfilePhotoRequest, UploadProfilePhotoResponse } from "./UploadProfilePhotoDtos";

export class UploadProfilePhotoUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(request: UploadProfilePhotoRequest): Promise<UploadProfilePhotoResponse> {
    const { userId, file } = request;

    // Verificar se usuário existe
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    // Se o usuário já tem uma foto, deletar a antiga
    if (user.fotoPerfil) {
      // Extrair o nome do arquivo da URL (pode ser URL completa ou caminho relativo)
      const filename = user.fotoPerfil.includes('/uploads/profile-photos/')
        ? user.fotoPerfil.split('/uploads/profile-photos/')[1]
        : path.basename(user.fotoPerfil);

      const oldPhotoPath = path.join(__dirname, '../../../../uploads/profile-photos', filename);
      if (fs.existsSync(oldPhotoPath)) {
        try {
          fs.unlinkSync(oldPhotoPath);
          console.log("[UploadProfilePhoto] Foto antiga deletada:", oldPhotoPath);
        } catch (error) {
          console.error("[UploadProfilePhoto] Erro ao deletar foto antiga:", error);
          // Não falhar o upload por causa disso
        }
      }
    }

    // URL completa para armazenar no banco
    const baseUrl = process.env.API_URL || "http://localhost:3003";
    const photoUrl = `${baseUrl}/uploads/profile-photos/${file.filename}`;

    // Atualizar no banco
    const updatedUser = await this.userRepository.updateProfilePhoto(userId, photoUrl);

    if (!updatedUser) {
      throw new Error("Erro ao atualizar foto de perfil");
    }

    return {
      photoUrl: photoUrl,
      user: updatedUser
    };
  }
}
