import { randomUUID } from "crypto";
import { User } from "../../../generated/prisma";
import {
  CreateUserInput,
  UserOutput,
} from "../useCases/createUser/CreateUserDtos";

export abstract class UserMapper {
  public static toDomain(dto: User): UserOutput {
    return {
      id: dto.id,
      name: dto.nome,
      email: dto.email,
      role: dto.role,
      approved: dto.aprovado,
    };
  }

  public static toDatabase(
    dto: CreateUserInput,
    encriptPassword: string
  ): User {
    return {
      id: randomUUID(),
      nome: dto.name,
      email: dto.email,
      senha: encriptPassword,
      role: dto.role || "OPERADOR",
      aprovado: dto.approved || false,
      dataCadastro: new Date(),
    };
  }
}
