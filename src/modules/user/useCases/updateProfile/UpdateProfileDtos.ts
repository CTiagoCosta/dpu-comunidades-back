import { UserOutput } from "../createUser/CreateUserDtos";

export interface UpdateProfileRequest {
  userId: string;
  nome?: string;
  email?: string;
  telefone?: string;
  cargo?: string;
  unidadeId?: number;
}

export interface UpdateProfileResponse {
  user: UserOutput;
}
