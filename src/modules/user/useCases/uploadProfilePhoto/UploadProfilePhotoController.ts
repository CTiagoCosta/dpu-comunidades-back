import { Request, Response } from "express";
import { UploadProfilePhotoUseCase } from "./UploadProfilePhotoUseCase";
import { UploadProfilePhotoRequest } from "./UploadProfilePhotoDtos";

export class UploadProfilePhotoController {
  constructor(private uploadProfilePhotoUseCase: UploadProfilePhotoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const userId = (request as any).user?.id; // Corrigido: usar .id ao invés de .userId
      const file = request.file;

      if (!userId) {
        return response.status(401).json({
          data: null,
          success: false,
          message: "Usuário não autenticado",
          errors: []
        });
      }

      if (!file) {
        return response.status(400).json({
          data: null,
          success: false,
          message: "Nenhum arquivo foi enviado",
          errors: ["file"]
        });
      }

      const dto: UploadProfilePhotoRequest = {
        userId,
        file
      };

      const result = await this.uploadProfilePhotoUseCase.execute(dto);

      return response.status(200).json({
        data: {
          photoUrl: result.photoUrl,
          user: result.user
        },
        success: true,
        message: "Foto de perfil atualizada com sucesso",
        errors: []
      });
    } catch (error: any) {
      console.error("[UploadProfilePhotoController] Erro ao fazer upload:", error);

      return response.status(500).json({
        data: null,
        success: false,
        message: error.message || "Erro ao fazer upload da foto",
        errors: [error.message]
      });
    }
  }
}
