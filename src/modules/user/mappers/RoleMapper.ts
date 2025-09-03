import { Role } from "../../../generated/prisma";

export abstract class RoleMapper {
  public static toDomain(dto: Role): any {
    return {
      id: dto.id,
      name: dto.name,
    };
  }
}
