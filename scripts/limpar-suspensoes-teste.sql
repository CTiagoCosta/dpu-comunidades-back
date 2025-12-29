-- Script para limpar suspensões de teste
-- Use este script APENAS em ambiente de desenvolvimento/teste

-- Visualizar atendimentos suspensos
SELECT
  id,
  filaId,
  etapaAtual,
  suspensoPeloOperador,
  motivoSuspensao,
  dataSuspensao,
  dataUltimaAtualizacao
FROM "PrimeiroAtendimento"
WHERE suspensoPeloOperador = true;

-- Remover flag de suspensão de todos os atendimentos
-- DESCOMENTE a linha abaixo para executar:
-- UPDATE "PrimeiroAtendimento" SET suspensoPeloOperador = false, motivoSuspensao = NULL, dataSuspensao = NULL WHERE suspensoPeloOperador = true;
