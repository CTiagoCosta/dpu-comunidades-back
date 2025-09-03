import { Notifiable } from "../../../../infra/Notifiable";
import { Validator } from "../../../../infra/Validator";
import { CreateUserInput } from "./CreateUserDtos";

export class CreateUserContract extends Notifiable {
  private dto!: CreateUserInput;
  private validator: Validator;

  constructor() {
    super();
    this.validator = new Validator();
  }

  validate(dto: CreateUserInput): boolean {
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
    const { name, email, password, roleId } = this.dto;
    
    this.validator.isRequired(name, "name", "O nome é obrigatório");
    this.validator.isRequired(email, "email", "O email é obrigatório");
    this.validator.isRequired(password, "password", "A senha é obrigatória");
    this.validator.isRequired(roleId, "roleId", "O papel é obrigatório");
    this.validator.isValidNumber(roleId, "roleId", "O papel deve ser um ID válido");
    email &&
      this.validator.isValidEmail(email, "email", "O email deve ser válido");
  }
}
