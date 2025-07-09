import { Notifiable } from "../../../../infra/Notifiable";
import { Validator } from "../../../../infra/Validator";
import { CreateServiceQueueInput } from "./CreateServiceQueueDtos";

export class CreateServiceQueueContract extends Notifiable {
  private dto!: CreateServiceQueueInput;
  private validator: Validator;

  constructor() {
    super();
    this.validator = new Validator();
  }

  validate(dto: CreateServiceQueueInput): boolean {
    this.dto = dto;
    this.clearReports();
    this.validateStateId();
    this.addReports(this.validator.reports);
    return this.isValid();
  }

  clearReports() {
    super.clearReports();
    this.validator.clearReports();
  }

  private validateStateId() {
    const {
      fullName,
      socialName,
      cpf,
      telephone,
      migrante,
      isPriority,
      serviceTypeId,
      screeningOperatorId,
    } = this.dto;

    this.validator.isRequired(
      fullName,
      "fullName",
      "O nome completo é obrigatório"
    );
    !migrante && this.validator.isRequired(cpf, "cpf", "O CPF é obrigatório");
    (!migrante && cpf) && this.validator.isValidCpf(cpf, "cpf", "O CPF é inválido");
    this.validator.isRequired(
      telephone,
      "telephone",
      "O telefone é obrigatório"
    );
    telephone &&
      this.validator.isValidPhoneNumber(
        telephone,
        "telephone",
        "O telefone é inválido"
      );
    this.validator.isRequired(
      serviceTypeId,
      "serviceTypeId",
      "O tipo de serviço é obrigatório"
    );
  }
}
