import { User } from "../../../generated/prisma";
import {
  CreateUserInput,
  UserOutput,
} from "../useCases/createUser/CreateUserDtos";

export interface UpdateProfileData {
  nome?: string;
  email?: string;
  telefone?: string;
  cargo?: string;
  unidadeId?: number;
}

export interface UserStatistics {
  totalAtendimentos: number;
  atendimentosMes: number;
  atendimentosConcluidos: number;
  tempoMedioAtendimento: string;
}

export interface IUserRepository {
  createUser(dto: User): Promise<UserOutput | null>;
  emailExists(email: string): Promise<boolean>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;

  // Novos métodos para perfil
  updateProfile(userId: string, data: UpdateProfileData): Promise<UserOutput | null>;
  updatePassword(userId: string, hashedPassword: string): Promise<boolean>;
  updateProfilePhoto(userId: string, photoPath: string): Promise<UserOutput | null>;
  getUserStatistics(userId: string): Promise<UserStatistics>;
}
