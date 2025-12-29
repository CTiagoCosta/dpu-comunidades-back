-- Buscar último atendimento da Maria da Silvagfhgf
SELECT 
  f.id as filaId,
  f.nomeCompleto,
  f.status as filaStatus,
  f.dataInicio as filaDataInicio,
  f.dataFim as filaDataFim,
  p.id as atendimentoId,
  p.status as atendimentoStatus,
  p.percentualConclusao,
  p.etapaAtual,
  p.capacidadeCivil,
  p.etapaCapacidadeCivilConcluida,
  p.representanteLegalId,
  p.etapaRepresentanteConcluida,
  p.etapaComplementoDadosConcluida,
  p.analiseRendaId,
  p.etapaAnaliseRendaConcluida,
  p.tipoDemandaPrevidenciariaId,
  p.etapaTipoDemandaConcluida,
  p.seguroDefesoId,
  p.aposentadoriaRuralId,
  p.loasIdosoId,
  p.etapaFormularioBeneficioConcluida,
  p.viabilidadeDemanda,
  p.etapaViabilidadeConcluida,
  p.etapaDocumentosConcluida,
  p.dataConclusao
FROM "FilaAtendimento" f
LEFT JOIN "PrimeiroAtendimento" p ON f.id = p.filaId
WHERE f.nomeCompleto LIKE '%Maria da Silva%'
ORDER BY f.dataInicio DESC
LIMIT 1;
