import { Notifiable } from "../../../../infra/Notifiable";
import { Validator } from "../../../../infra/Validator";
import { ChangePasswordRequest } from "./ChangePasswordDtos";

export class ChangePasswordContract extends Notifiable {
  private validator: Validator;

  constructor() {
    super();
    this.validator = new Validator();
  }

  validate(dto: ChangePasswordRequest): boolean {
    this.clearReports();

    // Validar senha atual
    this.validator.isRequired(dto.currentPassword, "currentPassword", "Senha atual é obrigatória");

    // Validar nova senha
    this.validator.isRequired(dto.newPassword, "newPassword", "Nova senha é obrigatória");

    if (dto.newPassword) {
      // Validar força da senha
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(dto.newPassword)) {
        this.validator.reports.push({
          message: "A senha deve ter no mínimo 8 caracteres, incluindo maiúsculas, minúsculas, números e caracteres especiais (@$!%*?&)",
          name: "newPassword",
        });
      }
    }

    // Verificar se a nova senha é diferente da atual
    if (dto.currentPassword && dto.newPassword && dto.currentPassword === dto.newPassword) {
      this.validator.reports.push({
        message: "A nova senha deve ser diferente da senha atual",
        name: "newPassword",
      });
    }

    this.addReports(this.validator.reports);
    return this.isValid();
  }

  clearReports() {
    super.clearReports();
    this.validator.clearReports();
  }
}
