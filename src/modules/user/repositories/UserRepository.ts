import { User } from "@prisma/client";
import { BaseRepository } from "../../shared/repositories/BaseRepository";
import { IUserRepository } from "../interfaces/IUserRepository";
import { UserWithRole } from "../type/User";

export class UserRepository
  extends BaseRepository<User>
  implements IUserRepository
{
  protected get model() {
    return this.prisma.user;
  }

  async createUser(dto: User): Promise<UserWithRole | null> {
    const result = await this.model.create({
      data: {
        nome: dto.nome,
        email: dto.email,
        senha: dto.senha,
        roleId: dto.roleId,
        aprovado: dto.aprovado,
        dataCadastro: new Date(),
      },
      include: {
        role: true,
      },
    });

    return result ?? null;
  }

  async emailExists(email: string): Promise<boolean> {
    const user = await this.model.findUnique({
      where: { email },
    });
    return !!user;
  }

  async findByEmail(email: string): Promise<UserWithRole | null> {
    const user = await this.model.findUnique({
      where: { email },
      include: { role: true },
    });
    return user ?? null;
  }

  async findById(id: string): Promise<UserWithRole | null> {
    const user = await this.model.findUnique({
      where: { id },
      include: { role: true },
    });
    return user ?? null;
  }
}
