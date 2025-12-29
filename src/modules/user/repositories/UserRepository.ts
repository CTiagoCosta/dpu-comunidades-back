import { PrismaClient, User } from "../../../generated/prisma";
import { IUserRepository, UpdateProfileData, UserStatistics } from "../interfaces/IUserRepository";
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

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    return user ?? null;
  }

  async updateProfile(userId: string, data: UpdateProfileData): Promise<UserOutput | null> {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: {
        ...(data.nome && { nome: data.nome }),
        ...(data.email && { email: data.email }),
        ...(data.telefone !== undefined && { telefone: data.telefone }),
        ...(data.cargo !== undefined && { cargo: data.cargo }),
        ...(data.unidadeId !== undefined && { unidadeId: data.unidadeId }),
      },
      include: {
        unidade: true
      }
    });

    return UserMapper.toDomain(user) ?? null;
  }

  async updatePassword(userId: string, hashedPassword: string): Promise<boolean> {
    try {
      await this.prisma.user.update({
        where: { id: userId },
        data: { senha: hashedPassword }
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  async updateProfilePhoto(userId: string, photoPath: string): Promise<UserOutput | null> {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: { fotoPerfil: photoPath },
      include: {
        unidade: true
      }
    });

    return UserMapper.toDomain(user) ?? null;
  }

  async getUserStatistics(userId: string): Promise<UserStatistics> {
    // Total de atendimentos do operador
    const totalAtendimentos = await this.prisma.primeiroAtendimento.count({
      where: { operadorId: userId }
    });

    // Atendimentos do mês atual
    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    const atendimentosMes = await this.prisma.primeiroAtendimento.count({
      where: {
        operadorId: userId,
        dataInicio: {
          gte: firstDayOfMonth
        }
      }
    });

    // Atendimentos concluídos
    const atendimentosConcluidos = await this.prisma.primeiroAtendimento.count({
      where: {
        operadorId: userId,
        status: 'CONCLUIDO'
      }
    });

    // Calcular tempo médio de atendimento
    const atendimentosCompletos = await this.prisma.primeiroAtendimento.findMany({
      where: {
        operadorId: userId,
        status: 'CONCLUIDO',
        dataConclusao: { not: null }
      },
      select: {
        dataInicio: true,
        dataConclusao: true
      }
    });

    let tempoMedioAtendimento = '-';

    if (atendimentosCompletos.length > 0) {
      const totalMinutos = atendimentosCompletos.reduce((acc, atendimento) => {
        if (atendimento.dataConclusao) {
          const diff = atendimento.dataConclusao.getTime() - atendimento.dataInicio.getTime();
          return acc + (diff / (1000 * 60)); // Converter para minutos
        }
        return acc;
      }, 0);

      const mediaMinutos = Math.round(totalMinutos / atendimentosCompletos.length);

      if (mediaMinutos < 60) {
        tempoMedioAtendimento = `${mediaMinutos} min`;
      } else {
        const horas = Math.floor(mediaMinutos / 60);
        const minutos = mediaMinutos % 60;
        tempoMedioAtendimento = `${horas}h ${minutos}min`;
      }
    }

    return {
      totalAtendimentos,
      atendimentosMes,
      atendimentosConcluidos,
      tempoMedioAtendimento
    };
  }
}
