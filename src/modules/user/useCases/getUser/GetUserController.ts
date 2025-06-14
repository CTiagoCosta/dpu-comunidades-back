import { BaseController, ValidateResponse } from '../../../../infra/BaseController';
import { HandleResponse } from '../../../../infra/HandleResponse';
import { HttpRequest, HttpResponse } from '../../../../infra/HttpAdapter';
import { GetUserContract } from './GetUserContract';
import { GetUserDto } from './GetUserDto';
import { GetUserUseCase } from './GetUserUseCase';

export class GetUserController extends BaseController {
  private getUserUseCase: GetUserUseCase;
  private contract: GetUserContract;

  constructor(contract: GetUserContract, getUserUseCase: GetUserUseCase) {
    super(
      'Falha ao buscar um usuario'
    );
    this.getUserUseCase = getUserUseCase;
    this.contract = contract;
  }

  protected validateRequest(request: HttpRequest): ValidateResponse | undefined {
    const getUserDto = this.getUserDto(request);
    if (!this.contract.validate(getUserDto)) {
      return {
        message: this.defaultErrorMessage,
        reports: this.contract.reports
      };
    }
  }

  protected async specificImplementation(request: HttpRequest): Promise<HttpResponse> {
    const userFound = await this.getUserUseCase.handler(this.getUserDto(request));

    return HandleResponse.success(userFound, 'Sucesso ao buscar um usuario');
  }

  private getUserDto(request: HttpRequest): GetUserDto {
    const body = request.body;
    const getUserDto: GetUserDto = {
      userId: body?.accessUser.id
    };
    return getUserDto;
  }
}
