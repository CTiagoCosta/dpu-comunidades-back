import { randomUUID } from "crypto";
import { User } from "../../../generated/prisma";
import {
  CreateUserInput,
  UserOutput,
} from "../useCases/createUser/CreateUserDtos";
import { RoleMapper } from "./RoleMapper";
import { UserWithRole } from "../type/User";

export abstract class UserMapper {
  public static toDomain(dto: UserWithRole): UserOutput {
    return {
      id: dto.id,
      name: dto.nome,
      email: dto.email,
      role: RoleMapper.toDomain(dto.role),
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
      roleId: dto.roleId,
      aprovado: false,
      dataCadastro: new Date(),
    };
  }
}
