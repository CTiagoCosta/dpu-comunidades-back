import { Notifiable } from "../../../../infra/Notifiable";
import { Validator } from "../../../../infra/Validator";
import { LoginInput } from "./LoginDtos";

export class LoginContract extends Notifiable {
  private dto!: LoginInput;
  private validator: Validator;

  constructor() {
    super();
    this.validator = new Validator();
  }

  validate(dto: LoginInput): boolean {
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
    const { email, password } = this.dto;

    this.validator.isRequired(email, "email", "O email é obrigatório");
    this.validator.isRequired(password, "password", "A senha é obrigatória");
    email &&
      this.validator.isValidEmail(email, "email", "O email deve ser válido");
  }
}
