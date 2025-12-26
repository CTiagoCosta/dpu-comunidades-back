import { BaseController, ValidateResponse } from "../../../../infra/BaseController";
import { HandleResponse } from "../../../../infra/HandleResponse";
import { HttpRequest, HttpResponse } from "../../../../infra/HttpAdapter";
import { SaveRetornoDemandaJudicialUseCase } from "./SaveRetornoDemandaJudicialUseCase";
import { Report } from "../../../../infra/Report";

export class SaveRetornoDemandaJudicialController extends BaseController {
  private useCase: SaveRetornoDemandaJudicialUseCase;

  constructor(useCase: SaveRetornoDemandaJudicialUseCase) {
    super("Erro ao salvar retorno de demanda judicial");
    this.useCase = useCase;
  }

  protected validateRequest(request: HttpRequest): undefined | ValidateResponse {
    const { pajAssistido, retornoRealizado } = request.body;
    const reports: Report[] = [];

    if (!pajAssistido) {
      reports.push(new Report("pajAssistido", "Campo obrigatório: pajAssistido"));
    }

    if (!retornoRealizado) {
      reports.push(new Report("retornoRealizado", "Campo obrigatório: retornoRealizado"));
    }

    if (reports.length > 0) {
      return {
        reports,
        message: "Campos obrigatórios não preenchidos",
      };
    }

    return undefined;
  }

  protected async specificImplementation(request: HttpRequest): Promise<HttpResponse> {
    const { atendimentoId } = request.params;
    const { pajAssistido, retornoRealizado } = request.body;
    const operadorId = request.user?.id;

    console.log('[SaveRetornoDemandaJudicial] Recebendo requisição:', {
      atendimentoId,
      pajAssistido,
      retornoRealizado,
      operadorId,
    });

    const result = await this.useCase.execute({
      atendimentoId,
      pajAssistido,
      retornoRealizado,
      operadorId,
    });

    console.log('[SaveRetornoDemandaJudicial] Salvo com sucesso:', result.id);

    return HandleResponse.created(
      result,
      "Retorno de demanda judicial salvo com sucesso"
    );
  }
}
