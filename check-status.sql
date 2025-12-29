-- Verificar FilaAtendimento que estão AGUARDANDO mas já têm PrimeiroAtendimento
SELECT
    fa.id as fila_id,
    fa.nomeCompleto,
    fa.status as status_fila,
    pa.id as primeiro_atendimento_id,
    pa.status as status_primeiro_atendimento
FROM FilaAtendimento fa
LEFT JOIN PrimeiroAtendimento pa ON pa.filaId = fa.id
WHERE fa.status = 'AGUARDANDO'
ORDER BY fa.dataEntrada;

-- Contar totais
SELECT
    fa.status as status_fila,
    COUNT(*) as total,
    SUM(CASE WHEN pa.id IS NOT NULL THEN 1 ELSE 0 END) as com_primeiro_atendimento,
    SUM(CASE WHEN pa.id IS NULL THEN 1 ELSE 0 END) as sem_primeiro_atendimento
FROM FilaAtendimento fa
LEFT JOIN PrimeiroAtendimento pa ON pa.filaId = fa.id
GROUP BY fa.status
ORDER BY fa.status;
