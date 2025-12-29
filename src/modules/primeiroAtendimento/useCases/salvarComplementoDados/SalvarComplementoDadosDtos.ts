export interface EnderecoData {
  cep?: string;
  logradouro?: string;
  endereco?: string; // alias para logradouro
  numero?: string;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  uf?: string;
}

export interface SalvarComplementoDadosRequest {
  primeiroAtendimentoId: string;
  nome?: string;
  cpf?: string;
  rg?: string;
  dataNascimento?: Date | string;
  sexo?: string;
  estadoCivilId?: string;
  profissaoId?: string;
  telefone?: string;
  email?: string;
  endereco?: EnderecoData;
  tipoDomicilioId?: string;
  concluirEtapa: boolean;
  operadorId: string;
}

export interface SalvarComplementoDadosResponse {
  id: string;
  status: string;
  etapaAtual: string;
  proximaEtapa: string | null;
  percentualConclusao: number;
  etapaConcluida: boolean;
}
