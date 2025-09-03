import { Role } from "@prisma/client";
import { IRoleRepository } from "../../interfaces/IRoleRepository";

export class GetRolesUseCase {
  constructor(private roleRepository: IRoleRepository) {}

  public async handler(): Promise<Role[] | null> {
    const roles = await this.roleRepository.findAll();
    return roles;
  }
}
