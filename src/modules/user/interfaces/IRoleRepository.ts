import { Role } from "../../../generated/prisma";

export interface IRoleRepository {
  findById(id: number): Promise<Role | null>;
  findAll(): Promise<Role[] | null>;
}
