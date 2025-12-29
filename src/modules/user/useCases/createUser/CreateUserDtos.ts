export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  role: "ADMIN" | "OPERADOR" | "JURISTA";
  approved: boolean;
}

export interface UserOutput {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "OPERADOR" | "JURISTA";
  approved: boolean;
  telefone?: string | null;
  cargo?: string | null;
  fotoPerfil?: string | null;
  unidadeId?: number | null;
  createdAt?: string;
}
