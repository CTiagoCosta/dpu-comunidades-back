import { BaseController, ValidateResponse } from '../../../../infra/BaseController';
import { HandleResponse } from '../../../../infra/HandleResponse';
import { HttpRequest, HttpResponse } from '../../../../infra/HttpAdapter';
import { GetRolesUseCase } from './GetUserUseCase';

export class GetRolesController extends BaseController {
  private getRolesUseCase: GetRolesUseCase;

  constructor(getRolesUseCase: GetRolesUseCase) {
    super(
      'Falha ao listar os papéis',
    );
    this.getRolesUseCase = getRolesUseCase;
  }

  protected validateRequest(request: HttpRequest): ValidateResponse | undefined {
    return undefined;
  }

  protected async specificImplementation(request: HttpRequest): Promise<HttpResponse> {
    const roles = await this.getRolesUseCase.handler();

    return HandleResponse.success(roles, 'Roles listadas com sucesso');
  }
}
