import { Notifiable } from '../../../../infra/Notifiable';
import { Validator } from '../../../../infra/Validator';
import { GetUserDto } from './GetUserDto';

export class GetUserContract extends Notifiable {
  private dto!: GetUserDto;
  private validator: Validator;

  constructor() {
    super();
    this.validator = new Validator();
  }

  validate(dto: GetUserDto): boolean {
    this.dto = dto;
    this.clearReports();
    this.validateUserId();
    this.addReports(this.validator.reports);
    return this.isValid();
  }

  clearReports() {
    super.clearReports();
    this.validator.clearReports();
  }

  private validateUserId() {
    const { userId } = this.dto;
    this.validator.stringIsRequired(userId, 'userId', 'O Id do usuário é obrigátorio');
  }
}
