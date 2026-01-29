import { Request, Response } from "express";
import { SalvarComplementoDadosUseCase } from "../useCases/salvarComplementoDados/SalvarComplementoDadosUseCase";

export class SalvarComplementoDadosController {
  constructor(
    private salvarComplementoDadosUseCase: SalvarComplementoDadosUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const {
        nome,
        cpf,
        rg,
        dataNascimento,
        sexo,
        estadoCivilId,
        profissaoId,
        telefone,
        email,
        endereco,
        tipoDomicilioId,
        descricaoDomicilio,
        tipoVulnerabilidadeId,
        outroTipoVulnerabilidade,
        concluirEtapa
      } = request.body;
      const operadorId = (request as any).user?.id;

      if (!operadorId) {
        return response.status(401).json({
          error: {
            code: "UNAUTHORIZED",
            message: "Usuário não autenticado",
          },
        });
      }

      // Validar campos obrigatórios quando for concluir a etapa
      if (concluirEtapa !== false) {
        const camposFaltantes: string[] = [];

        if (!estadoCivilId) camposFaltantes.push("Estado Civil");
        if (!profissaoId) camposFaltantes.push("Profissão");
        if (!tipoDomicilioId) camposFaltantes.push("Tipo de Domicílio");
        if (!tipoVulnerabilidadeId) camposFaltantes.push("Tipo de Vulnerabilidade Social");

        if (camposFaltantes.length > 0) {
          return response.status(400).json({
            success: false,
            error: {
              code: "VALIDATION_ERROR",
              message: `Campos obrigatórios faltando: ${camposFaltantes.join(", ")}`,
              campos: camposFaltantes,
            },
          });
        }
      }

      const result = await this.salvarComplementoDadosUseCase.execute({
        primeiroAtendimentoId: id,
        nome,
        cpf,
        rg,
        dataNascimento,
        sexo,
        estadoCivilId,
        profissaoId,
        telefone,
        email,
        endereco,
        tipoDomicilioId,
        descricaoDomicilio,
        tipoVulnerabilidadeId: tipoVulnerabilidadeId ? Number(tipoVulnerabilidadeId) : undefined,
        outroTipoVulnerabilidade,
        concluirEtapa: concluirEtapa ?? true,
        operadorId,
      });

      return response.status(200).json(result);
    } catch (error: any) {
      if (error.message.includes("não encontrado")) {
        return response.status(404).json({
          error: {
            code: "NOT_FOUND",
            message: error.message,
          },
        });
      }

      if (error.message.includes("não autorizado")) {
        return response.status(403).json({
          error: {
            code: "FORBIDDEN",
            message: error.message,
          },
        });
      }

      if (error.message.includes("já foi concluída")) {
        return response.status(400).json({
          error: {
            code: "VALIDATION_ERROR",
            message: error.message,
          },
        });
      }

      console.error("Erro ao salvar complemento de dados:", error);
      return response.status(500).json({
        error: {
          code: "INTERNAL_ERROR",
          message: "Erro interno do servidor",
        },
      });
    }
  }
}
