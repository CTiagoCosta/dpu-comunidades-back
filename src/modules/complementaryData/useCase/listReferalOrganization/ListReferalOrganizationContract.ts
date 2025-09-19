import { Notifiable } from "../../../../infra/Notifiable";
import { Validator } from "../../../../infra/Validator";
import { ListReferalOrganizationInput } from "./ListReferalOrganizationDtos";

export class ListReferalOrganizationContract extends Notifiable {
  private dto!: ListReferalOrganizationInput;
  private validator: Validator;

  constructor() {
    super();
    this.validator = new Validator();
  }

  validate(dto: ListReferalOrganizationInput): boolean {
    this.dto = dto;
    this.clearReports();
    this.validateData();
    this.addReports(this.validator.reports);
    return this.isValid();
  }

  clearReports() {
    super.clearReports();
    this.validator.clearReports();
  }

  private validateData() {
    const { typeReferalOrganization } = this.dto;
    this.validator.isRequired(
      typeReferalOrganization,
      "typeReferalOrganization",
      "O Id do tipo de orgão de encaminhamento é obrigatório"
    );
  }
}
