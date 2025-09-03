import { Role } from "@prisma/client";
import { BaseRepository } from "../../shared/repositories/BaseRepository";
import { IRoleRepository } from "../interfaces/IRoleRepository";

export class RoleRepository
  extends BaseRepository<Role>
  implements IRoleRepository
{
  protected get model() {
    return this.prisma.role;
  }

  async findById(id: number): Promise<Role | null> {
    const role = await this.model.findUnique({
      where: { id },
    });
    return role ?? null;
  }

  async findAll(): Promise<Role[] | null> {
    const roles = await this.model.findMany();
    return roles ?? null;
  }
}
