import { Notifiable } from "../../../../infra/Notifiable";
import { Validator } from "../../../../infra/Validator";
import {
  CreateAssistedInput,
  CreateAssistedInputAndAddToServiceQueue,
} from "./CreateAssistedAndAddToServiceQueueDtos";

export class CreateAssistedAndAddToServiceQueueContract extends Notifiable {
  private dto!: CreateAssistedInputAndAddToServiceQueue;
  private validator: Validator;

  constructor() {
    super();
    this.validator = new Validator();
  }

  validate(dto: CreateAssistedInputAndAddToServiceQueue): boolean {
    this.dto = dto;
    this.clearReports();
    this.validateAssisted();
    this.validateQueue();
    this.addReports(this.validator.reports);
    return this.isValid();
  }

  clearReports() {
    super.clearReports();
    this.validator.clearReports();
  }

  private validateAssisted() {
    const { cellphone, cpf, fullName, isMigrant, socialName } =
      this.dto.assisted;

    this.validator.stringIsRequired(
      fullName,
      "fullName",
      "Nome completo é obrigatório"
    );
    isMigrant === false &&
      this.validator.isRequired(cpf, "cpf", "CPF é obrigatório");
    isMigrant === false &&
      cpf &&
      this.validator.isValidCpf(cpf, "cpf", "CPF inválido");
    this.validator.stringIsRequired(
      cellphone,
      "cellphone",
      "Telefone é obrigatório"
    );
    this.validator.isRequiredBoolean(
      isMigrant,
      "isMigrant",
      "Campo migrante é obrigatório"
    );
  }

  private validateQueue() {
    const { isPriority, priorityTypeId, attendanceTypeId, operatorId } =
      this.dto;

    this.validator.isRequiredBoolean(
      isPriority,
      "isPriority",
      "Campo de prioridade é obrigatório"
    );
    isPriority &&
      isPriority == true &&
      this.validator.isRequired(
        priorityTypeId,
        "priorityTypeId",
        "Tipo de prioridade é obrigatório"
      );
    this.validator.isRequired(
      attendanceTypeId,
      "attendanceTypeId",
      "Tipo de atendimento é obrigatório"
    );
    this.validator.isRequired(
      operatorId,
      "operatorId",
      "ID do operador é obrigatório"
    );
  }
}
