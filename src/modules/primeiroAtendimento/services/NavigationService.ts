import { EtapaPrimeiroAtendimento } from "../../../generated/prisma";
import prismaClient from "../../../prisma";

interface NavigationContext {
  capacidadeCivil?: boolean;
  tipoVulnerabilidadeId?: number;
  tipoDemandaPrevidenciariaId?: number;
}

export class NavigationService {
  /**
   * Determina qual é a próxima etapa do fluxo baseado na etapa atual
   * e nos dados já preenchidos
   */
  async determinarProximaEtapa(
    etapaAtual: EtapaPrimeiroAtendimento,
    context: NavigationContext
  ): Promise<EtapaPrimeiroAtendimento> {
    switch (etapaAtual) {
      case "CAPACIDADE_CIVIL":
        // Se incapaz, vai para representante legal
        // Se capaz, pula direto para complemento de dados
        return context.capacidadeCivil
          ? "COMPLEMENTO_DADOS"
          : "REPRESENTANTE_LEGAL";

      case "REPRESENTANTE_LEGAL":
        // Sempre vai para complemento de dados
        return "COMPLEMENTO_DADOS";

      case "COMPLEMENTO_DADOS":
        // Verifica se o tipo de vulnerabilidade exige análise de renda
        if (context.tipoVulnerabilidadeId) {
          const tipoVuln = await prismaClient.tipoVulnerabilidade.findUnique({
            where: { id: context.tipoVulnerabilidadeId },
          });

          if (
            tipoVuln?.descricao.toUpperCase().includes("RENDA SUPERIOR")
          ) {
            return "ANALISE_RENDA";
          }
        }
        return "TIPO_DEMANDA_PREVIDENCIARIA";

      case "ANALISE_RENDA":
        return "TIPO_DEMANDA_PREVIDENCIARIA";

      case "TIPO_DEMANDA_PREVIDENCIARIA":
        return "FORMULARIO_BENEFICIO";

      case "FORMULARIO_BENEFICIO":
        return "VIABILIDADE_DEMANDA";

      case "VIABILIDADE_DEMANDA":
        return "DOCUMENTOS_OBRIGATORIOS";

      case "DOCUMENTOS_OBRIGATORIOS":
        return "FINALIZADO";

      default:
        throw new Error(`Etapa desconhecida: ${etapaAtual}`);
    }
  }

  /**
   * Retorna qual formulário específico de benefício deve ser usado
   * baseado no tipo de demanda previdenciária
   */
  async determinarFormularioBeneficio(
    tipoDemandaPrevidenciariaId: number
  ): Promise<{
    formulario: string;
    rota: string;
  }> {
    const tipoDemanda =
      await prismaClient.tipoDemandaPrevidenciaria.findUnique({
        where: { id: tipoDemandaPrevidenciariaId },
      });

    if (!tipoDemanda) {
      throw new Error("Tipo de demanda não encontrado");
    }

    const descricao = tipoDemanda.descricao.toUpperCase();

    // Mapeamento de descrições para formulários
    const mapeamento: Record<string, { formulario: string; rota: string }> = {
      "APOSENTADORIA POR IDADE RURAL": {
        formulario: "APOSENTADORIA_RURAL",
        rota: "/atendimento/primeiro-atendimento/aposentadoria-rural",
      },
      "CONVERSÃO DE LOAS": {
        formulario: "APOSENTADORIA_RURAL",
        rota: "/atendimento/primeiro-atendimento/aposentadoria-rural",
      },
      "SEGURO DEFESO": {
        formulario: "SEGURO_DEFESO",
        rota: "/atendimento/primeiro-atendimento/seguro-defeso",
      },
      "PENSÃO POR MORTE RURAL": {
        formulario: "PENSAO_MORTE_RURAL",
        rota: "/atendimento/primeiro-atendimento/pensao-morte-rural",
      },
      "AUXÍLIO RECLUSÃO": {
        formulario: "PENSAO_MORTE_RURAL",
        rota: "/atendimento/primeiro-atendimento/pensao-morte-rural",
      },
      "SALÁRIO MATERNIDADE RURAL": {
        formulario: "SALARIO_MATERNIDADE_RURAL",
        rota: "/atendimento/primeiro-atendimento/salario-maternidade-rural",
      },
      "BPC LOAS IDOSO": {
        formulario: "LOAS_IDOSO",
        rota: "/atendimento/primeiro-atendimento/loas-idoso",
      },
      "BPC LOAS DEFICIENTE": {
        formulario: "LOAS_DEFICIENTE",
        rota: "/atendimento/primeiro-atendimento/loas-deficiente",
      },
      "AUXÍLIO DOENÇA/INVALIDEZ": {
        formulario: "AUXILIO_DOENCA_INVALIDEZ",
        rota: "/atendimento/primeiro-atendimento/auxilio-doenca-invalidez",
      },
      "APOSENTADORIA URBANA": {
        formulario: "APOSENTADORIA_URBANA",
        rota: "/atendimento/primeiro-atendimento/aposentadoria-urbana",
      },
      "SALÁRIO MATERNIDADE URBANO": {
        formulario: "SALARIO_MATERNIDADE_URBANO",
        rota: "/atendimento/primeiro-atendimento/salario-maternidade-urbano",
      },
    };

    // Tenta match exato
    if (mapeamento[descricao]) {
      return mapeamento[descricao];
    }

    // Tenta match parcial (fuzzy)
    for (const [key, value] of Object.entries(mapeamento)) {
      if (descricao.includes(key) || key.includes(descricao)) {
        return value;
      }
    }

    // Fallback
    throw new Error(`Formulário não encontrado para: ${descricao}`);
  }
}
