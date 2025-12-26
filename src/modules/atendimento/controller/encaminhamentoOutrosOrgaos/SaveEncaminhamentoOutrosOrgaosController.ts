import { BaseController, ValidateResponse } from "../../../../infra/BaseController";
import { HandleResponse } from "../../../../infra/HandleResponse";
import { HttpRequest, HttpResponse } from "../../../../infra/HttpAdapter";
import { SaveEncaminhamentoOutrosOrgaosUseCase } from "../../useCases/saveEncaminhamentoOutrosOrgaos/SaveEncaminhamentoOutrosOrgaosUseCase";
import { Report } from "../../../../infra/Report";

export class SaveEncaminhamentoOutrosOrgaosController extends BaseController {
  private useCase: SaveEncaminhamentoOutrosOrgaosUseCase;

  constructor(useCase: SaveEncaminhamentoOutrosOrgaosUseCase) {
    super("Erro ao salvar encaminhamento a outros órgãos");
    this.useCase = useCase;
  }

  protected validateRequest(request: HttpRequest): undefined | ValidateResponse {
    const { orgaoDestino, motivoEncaminhamento } = request.body;
    const reports: Report[] = [];

    if (!orgaoDestino) {
      reports.push(new Report("orgaoDestino", "Campo obrigatório: orgaoDestino"));
    }

    if (!motivoEncaminhamento) {
      reports.push(new Report("motivoEncaminhamento", "Campo obrigatório: motivoEncaminhamento"));
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
    const { orgaoDestino, motivoEncaminhamento, observacoes } = request.body;
    const operadorId = request.user?.id;

    console.log('[SaveEncaminhamentoOutrosOrgaos] Recebendo requisição:', {
      atendimentoId,
      orgaoDestino,
      motivoEncaminhamento,
      observacoes,
      operadorId,
    });

    const result = await this.useCase.execute({
      atendimentoId,
      orgaoDestino,
      motivoEncaminhamento,
      observacoes,
      operadorId,
    });

    console.log('[SaveEncaminhamentoOutrosOrgaos] Salvo com sucesso:', result.id);

    return HandleResponse.created(
      result,
      "Encaminhamento a outros órgãos salvo com sucesso"
    );
  }
}
