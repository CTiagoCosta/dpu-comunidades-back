import { Notifiable } from "../../../../infra/Notifiable";
import { Validator } from "../../../../infra/Validator";
import { GetServiceQueueByIdInput } from "./GetServiceQueueByIdDtos";

export class GetServiceQueueByIdContract extends Notifiable {
  private dto!: GetServiceQueueByIdInput;
  private validator: Validator;

  constructor() {
    super();
    this.validator = new Validator();
  }

  validate(dto: GetServiceQueueByIdInput): boolean {
    this.dto = dto;
    this.clearReports();
    this.validateRequest();
    this.addReports(this.validator.reports);
    return this.isValid();
  }

  clearReports() {
    super.clearReports();
    this.validator.clearReports();
  }

  private validateRequest() {
    const { queueId } = this.dto;
    this.validator.isRequired(queueId, "queueId", "O ID da fila é obrigatório");
  }
}
