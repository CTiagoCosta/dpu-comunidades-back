import { BaseController, ValidateResponse } from "../../../../infra/BaseController";
import { HandleResponse } from "../../../../infra/HandleResponse";
import { HttpRequest, HttpResponse } from "../../../../infra/HttpAdapter";
import { SaveOrientacaoJuridicaUseCase } from "./SaveOrientacaoJuridicaUseCase";
import { Report } from "../../../../infra/Report";

export class SaveOrientacaoJuridicaController extends BaseController {
  private useCase: SaveOrientacaoJuridicaUseCase;

  constructor(useCase: SaveOrientacaoJuridicaUseCase) {
    super("Erro ao salvar orientação jurídica");
    this.useCase = useCase;
  }

  protected validateRequest(request: HttpRequest): undefined | ValidateResponse {
    const { orientacaoRealizada } = request.body;
    const reports: Report[] = [];

    if (!orientacaoRealizada) {
      reports.push(new Report("orientacaoRealizada", "Campo obrigatório: orientacaoRealizada"));
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
    const { orientacaoRealizada } = request.body;
    const operadorId = request.user?.id;

    console.log('[SaveOrientacaoJuridica] Recebendo requisição:', {
      atendimentoId,
      orientacaoRealizada,
      operadorId,
    });

    const result = await this.useCase.execute({
      atendimentoId,
      orientacaoRealizada,
      operadorId,
    });

    console.log('[SaveOrientacaoJuridica] Salvo com sucesso:', result.id);

    return HandleResponse.created(
      result,
      "Orientação jurídica salva com sucesso"
    );
  }
}
