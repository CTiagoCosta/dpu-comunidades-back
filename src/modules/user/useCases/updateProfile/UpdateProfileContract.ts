import { Notifiable } from "../../../../infra/Notifiable";
import { Validator } from "../../../../infra/Validator";
import { UpdateProfileRequest } from "./UpdateProfileDtos";

export class UpdateProfileContract extends Notifiable {
  private validator: Validator;

  constructor() {
    super();
    this.validator = new Validator();
  }

  validate(dto: UpdateProfileRequest): boolean {
    this.clearReports();

    // Validar nome se fornecido
    if (dto.nome !== undefined) {
      if (!dto.nome || dto.nome.trim().length < 3) {
        this.validator.reports.push({
          message: "Nome deve ter pelo menos 3 caracteres",
          name: "nome",
        });
      }
    }

    // Validar email se fornecido
    if (dto.email !== undefined) {
      this.validator.isValidEmail(dto.email, "email", "Email inválido");
    }

    // Validar telefone se fornecido (formato brasileiro)
    if (dto.telefone !== undefined && dto.telefone !== null && dto.telefone.trim() !== "") {
      const telefoneRegex = /^\(\d{2}\)\s?\d{4,5}-?\d{4}$/;
      const telefoneLimpo = dto.telefone.replace(/\s/g, "");

      if (!telefoneRegex.test(telefoneLimpo)) {
        this.validator.reports.push({
          message: "Telefone deve estar no formato (XX) XXXXX-XXXX",
          name: "telefone",
        });
      }
    }

    this.addReports(this.validator.reports);
    return this.isValid();
  }

  clearReports() {
    super.clearReports();
    this.validator.clearReports();
  }
}
