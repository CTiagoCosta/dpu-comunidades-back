import prismaClient from "../../../../prisma";
import { PrimeiroAtendimentoRepository } from "../../repositories/PrimeiroAtendimentoRepository";
import { NavigationService } from "../../services/NavigationService";
import { ProgressCalculator } from "../../services/ProgressCalculator";
import { HistoricoProgressoRepository } from "../../repositories/HistoricoProgressoRepository";
import {
  SalvarFormularioBeneficioRequest,
  SalvarFormularioBeneficioResponse,
} from "./SalvarFormularioBeneficioDtos";

export class SalvarFormularioBeneficioUseCase {
  constructor(
    private primeiroAtendimentoRepo: PrimeiroAtendimentoRepository,
    private navigationService: NavigationService,
    private progressCalculator: ProgressCalculator,
    private historicoRepo: HistoricoProgressoRepository
  ) {}

  async execute(
    request: SalvarFormularioBeneficioRequest
  ): Promise<SalvarFormularioBeneficioResponse> {
    const {
      primeiroAtendimentoId,
      operadorId,
      tipoBeneficio,
      dados,
      concluirEtapa = true,
    } = request;

    // Buscar atendimento
    const atendimento = await this.primeiroAtendimentoRepo.findById(
      primeiroAtendimentoId
    );

    if (!atendimento) {
      throw new Error("Primeiro atendimento não encontrado");
    }

    // Verificar se o operador está autenticado
    if (!operadorId) {
      throw new Error(
        "Operador não autenticado"
      );
    }

    // Determinar próxima etapa
    const proximaEtapa = concluirEtapa
      ? await this.navigationService.determinarProximaEtapa(
          "FORMULARIO_BENEFICIO",
          {}
        )
      : atendimento.etapaAtual;

    // Calcular percentual
    const percentual = this.progressCalculator.calcular({
      ...atendimento,
      etapaFormularioBeneficioConcluida: concluirEtapa,
    });

    // Atualizar dados em transação
    const atendimentoAtualizado = await prismaClient.$transaction(
      async (tx) => {
        // Salvar dados na tabela específica do benefício e obter o ID
        const beneficioId = await this.salvarDadosBeneficio(
          tx,
          primeiroAtendimentoId,
          tipoBeneficio,
          dados
        );

        // Preparar dados de atualização com o foreign key apropriado
        const updateData: any = {
          etapaFormularioBeneficioConcluida: concluirEtapa,
          etapaFormularioBeneficioTimestamp: concluirEtapa
            ? new Date()
            : undefined,
          etapaAtual: proximaEtapa,
          percentualConclusao: percentual,
        };

        // Adicionar o foreign key apropriado baseado no tipo de benefício
        switch (tipoBeneficio) {
          case "APOSENTADORIA_IDADE_RURAL":
            updateData.aposentadoriaRuralId = beneficioId;
            break;
          case "SEGURO_DEFESO":
            updateData.seguroDefesoId = beneficioId;
            break;
          case "PENSAO_MORTE_RURAL":
            updateData.pensaoMorteRuralId = beneficioId;
            break;
          case "SALARIO_MATERNIDADE_RURAL":
            updateData.salarioMaternidadeRuralId = beneficioId;
            break;
          case "LOAS_IDOSO":
            updateData.loasIdosoId = beneficioId;
            break;
          case "LOAS_DEFICIENTE":
            updateData.loasDeficienteId = beneficioId;
            break;
          case "AUXILIO_DOENCA":
          case "APOSENTADORIA_INVALIDEZ":
            updateData.auxilioDoencaInvalidezId = beneficioId;
            break;
          case "APOSENTADORIA_URBANA":
            updateData.aposentadoriaUrbanaId = beneficioId;
            break;
          case "SALARIO_MATERNIDADE_URBANO":
            updateData.salarioMaternidadeUrbanoId = beneficioId;
            break;
        }

        // Atualizar PrimeiroAtendimento
        const updated = await tx.primeiroAtendimento.update({
          where: { id: primeiroAtendimentoId },
          data: updateData,
        });

        // Registrar histórico
        await tx.historicoProgressoPrimeiroAtendimento.create({
          data: {
            primeiroAtendimentoId,
            etapa: "FORMULARIO_BENEFICIO",
            acao: concluirEtapa ? "ETAPA_CONCLUIDA" : "ETAPA_SALVA",
            dadosAlterados: JSON.stringify({
              tipoBeneficio,
              dados,
            }),
          },
        });

        return updated;
      }
    );

    const proximaEtapaRetorno = concluirEtapa ? proximaEtapa : null;

    return {
      id: atendimentoAtualizado.id,
      status: atendimentoAtualizado.status,
      etapaAtual: atendimentoAtualizado.etapaAtual,
      proximaEtapa: proximaEtapaRetorno,
      percentualConclusao: atendimentoAtualizado.percentualConclusao,
      etapaConcluida: concluirEtapa,
    };
  }

  /**
   * Salva dados na tabela específica do benefício e retorna o ID
   */
  private async salvarDadosBeneficio(
    tx: any,
    primeiroAtendimentoId: string,
    tipoBeneficio: string,
    dados: Record<string, any>
  ): Promise<string> {
    // Filtrar apenas os campos válidos para cada tipo de benefício
    const camposPorTipo: Record<string, string[]> = {
      APOSENTADORIA_IDADE_RURAL: ["requisitos", "narrativaCaso"],
      APOSENTADORIA_URBANA: ["requisitos", "narrativaCaso"],
      APOSENTADORIA_INVALIDEZ: ["requisitos", "narrativaCaso"],
      SEGURO_DEFESO: ["requisitos", "narrativaCaso"],
      PENSAO_MORTE_RURAL: ["requisitos", "narrativaCaso"],
      SALARIO_MATERNIDADE_RURAL: ["requisitos", "narrativaCaso"],
      SALARIO_MATERNIDADE_URBANO: ["requisitos", "narrativaCaso"],
      LOAS_IDOSO: ["requisitos", "narrativaCaso"],
      LOAS_DEFICIENTE: ["requisitos", "narrativaCaso"],
      BENEFICIO_ASSISTENCIAL_PESSOA_DEFICIENCIA: ["requisitos", "narrativaCaso"],
      AUXILIO_DOENCA: ["requisitos", "narrativaCaso"],
      AUXILIO_RECLUSAO: ["requisitos", "narrativaCaso"],
      OUTROS_BENEFICIOS: ["requisitos", "narrativaCaso"],
    };

    const camposValidos = camposPorTipo[tipoBeneficio] || [];
    const dadosValidos = Object.keys(dados)
      .filter(key => camposValidos.includes(key))
      .reduce((obj, key) => {
        obj[key] = dados[key];
        return obj;
      }, {} as Record<string, any>);
    let beneficio: any;

    switch (tipoBeneficio) {
      case "APOSENTADORIA_IDADE_RURAL":
        beneficio = await tx.aposentadoriaRural.upsert({
          where: { primeiroAtendimentoId },
          create: {
            primeiroAtendimentoId,
            ...dadosValidos,
          },
          update: dadosValidos,
        });
        break;

      case "APOSENTADORIA_INVALIDEZ":
        beneficio = await tx.aposentadoriaInvalidez.upsert({
          where: { primeiroAtendimentoId },
          create: {
            primeiroAtendimentoId,
            ...dadosValidos,
          },
          update: dadosValidos,
        });
        break;

      case "AUXILIO_DOENCA":
        beneficio = await tx.auxilioDoenca.upsert({
          where: { primeiroAtendimentoId },
          create: {
            primeiroAtendimentoId,
            ...dadosValidos,
          },
          update: dadosValidos,
        });
        break;

      case "AUXILIO_RECLUSAO":
        beneficio = await tx.auxilioReclusao.upsert({
          where: { primeiroAtendimentoId },
          create: {
            primeiroAtendimentoId,
            ...dadosValidos,
          },
          update: dadosValidos,
        });
        break;

      case "SEGURO_DEFESO":
        beneficio = await tx.seguroDefeso.upsert({
          where: { primeiroAtendimentoId },
          create: {
            primeiroAtendimentoId,
            ...dadosValidos,
          },
          update: dadosValidos,
        });
        break;

      case "PENSAO_MORTE_RURAL":
        beneficio = await tx.pensaoMorteRural.upsert({
          where: { primeiroAtendimentoId },
          create: {
            primeiroAtendimentoId,
            ...dadosValidos,
          },
          update: dadosValidos,
        });
        break;

      case "SALARIO_MATERNIDADE_RURAL":
        beneficio = await tx.salarioMaternidadeRural.upsert({
          where: { primeiroAtendimentoId },
          create: {
            primeiroAtendimentoId,
            ...dadosValidos,
          },
          update: dadosValidos,
        });
        break;

      case "LOAS_IDOSO":
        beneficio = await tx.loasIdoso.upsert({
          where: { primeiroAtendimentoId },
          create: {
            primeiroAtendimentoId,
            ...dadosValidos,
          },
          update: dadosValidos,
        });
        break;

      case "LOAS_DEFICIENTE":
        beneficio = await tx.loasDeficiente.upsert({
          where: { primeiroAtendimentoId },
          create: {
            primeiroAtendimentoId,
            ...dadosValidos,
          },
          update: dadosValidos,
        });
        break;

      case "APOSENTADORIA_URBANA":
        beneficio = await tx.aposentadoriaUrbana.upsert({
          where: { primeiroAtendimentoId },
          create: {
            primeiroAtendimentoId,
            ...dadosValidos,
          },
          update: dadosValidos,
        });
        break;

      case "SALARIO_MATERNIDADE_URBANO":
        beneficio = await tx.salarioMaternidadeUrbano.upsert({
          where: { primeiroAtendimentoId },
          create: {
            primeiroAtendimentoId,
            ...dadosValidos,
          },
          update: dadosValidos,
        });
        break;

      case "BENEFICIO_ASSISTENCIAL_PESSOA_DEFICIENCIA":
        beneficio = await tx.beneficioAssistencialPessoaDeficiencia.upsert({
          where: { primeiroAtendimentoId },
          create: {
            primeiroAtendimentoId,
            ...dadosValidos,
          },
          update: dadosValidos,
        });
        break;

      case "OUTROS_BENEFICIOS":
        beneficio = await tx.outrosBeneficios.upsert({
          where: { primeiroAtendimentoId },
          create: {
            primeiroAtendimentoId,
            ...dadosValidos,
          },
          update: dadosValidos,
        });
        break;

      default:
        throw new Error(`Tipo de benefício não reconhecido: ${tipoBeneficio}`);
    }

    return beneficio.id;
  }
}
