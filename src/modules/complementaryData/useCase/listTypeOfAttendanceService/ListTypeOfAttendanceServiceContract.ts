import { Notifiable } from "../../../../infra/Notifiable";
import { Validator } from "../../../../infra/Validator";
import { ListTypeofAttendanceServiceInput } from "./ListTypeOfAttendanceServiceDtos";

export class ListTypeOfAttendanceServiceContract extends Notifiable {
  private dto!: ListTypeofAttendanceServiceInput;
  private validator: Validator;

  constructor() {
    super();
    this.validator = new Validator();
  }

  validate(dto: ListTypeofAttendanceServiceInput): boolean {
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
    const { attendenceId } = this.dto;
    this.validator.isRequired(
      attendenceId,
      "attendenceId",
      "O Id do tipo de atendimento é obrigátorio"
    );
  }
}
