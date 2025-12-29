import { PrimeiroAtendimento } from "../../../generated/prisma";

export class ProgressCalculator {
  /**
   * Calcula o percentual de conclusão baseado nas etapas concluídas
   */
  calcular(atendimento: Partial<PrimeiroAtendimento>): number {
    // Define todas as etapas possíveis
    const etapas: string[] = [
      "CAPACIDADE_CIVIL",
      // Se incapaz, adiciona REPRESENTANTE_LEGAL
      atendimento.capacidadeCivil === false ? "REPRESENTANTE_LEGAL" : null,
      "COMPLEMENTO_DADOS",
      // Se tipo vulnerabilidade exige análise, adiciona ANALISE_RENDA
      this.exigeAnaliseRenda(atendimento) ? "ANALISE_RENDA" : null,
      "TIPO_DEMANDA_PREVIDENCIARIA",
      "FORMULARIO_BENEFICIO",
      "VIABILIDADE_DEMANDA",
      "DOCUMENTOS_OBRIGATORIOS",
    ].filter((e): e is string => e !== null);

    const totalEtapas = etapas.length;

    // Conta quantas etapas foram concluídas
    const etapasConcluidas = [
      atendimento.etapaCapacidadeCivilConcluida,
      atendimento.capacidadeCivil === false
        ? atendimento.etapaRepresentanteConcluida
        : null,
      atendimento.etapaComplementoDadosConcluida,
      this.exigeAnaliseRenda(atendimento)
        ? atendimento.etapaAnaliseRendaConcluida
        : null,
      atendimento.etapaTipoDemandaConcluida,
      atendimento.etapaFormularioBeneficioConcluida,
      atendimento.etapaViabilidadeConcluida,
      atendimento.etapaDocumentosConcluida,
    ].filter((e): e is boolean => e === true).length;

    return Math.round((etapasConcluidas / totalEtapas) * 100);
  }

  /**
   * Verifica se o tipo de vulnerabilidade exige análise de renda
   * (Nota: Esta lógica pode ser refinada consultando o banco)
   */
  private exigeAnaliseRenda(atendimento: Partial<PrimeiroAtendimento>): boolean {
    // Por enquanto, retorna false
    // Na implementação real, deveria consultar TipoVulnerabilidade
    // e verificar se a descrição contém "RENDA SUPERIOR"
    return false;
  }
}
