import { BaseController, ValidateResponse } from "../../../../infra/BaseController";
import { HandleResponse } from "../../../../infra/HandleResponse";
import { HttpRequest, HttpResponse } from "../../../../infra/HttpAdapter";
import { FinalizarAtendimentoUseCase } from "./FinalizarAtendimentoUseCase";

export class FinalizarAtendimentoController extends BaseController {
  private useCase: FinalizarAtendimentoUseCase;

  constructor(useCase: FinalizarAtendimentoUseCase) {
    super("Erro ao finalizar atendimento");
    this.useCase = useCase;
  }

  protected validateRequest(request: HttpRequest): undefined | ValidateResponse {
    return undefined; 
  }

  protected async specificImplementation(request: HttpRequest): Promise<HttpResponse> {
    const { atendimentoId } = request.params;

    const result = await this.useCase.execute({ atendimentoId });

    return HandleResponse.success(
      result,
      "Atendimento finalizado com sucesso"
    );
  }
}
