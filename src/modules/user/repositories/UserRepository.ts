import { PrismaClient, User } from "../../../generated/prisma";
import { IUserRepository } from "../interfaces/IUserRepository";
import { UserMapper } from "../mappers/UserMapper";
import {
  CreateUserInput,
  UserOutput,
} from "../useCases/createUser/CreateUserDtos";

export class UserRepository implements IUserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createUser(dto: User): Promise<UserOutput | null> {
    const result = await this.prisma.user.create({
      data: {
        nome: dto.nome,
        email: dto.email,
        senha: dto.senha,
        role: dto.role,
        aprovado: dto.aprovado,
        dataCadastro: new Date(),
      },
    });

    return UserMapper.toDomain(result) ?? null;
  }

  async emailExists(email: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    return !!user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    return user ?? null;
  }
}
