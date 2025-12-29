import prismaClient from "../../../prisma";
import { Unidade } from "../../../generated/prisma";
import { IUnidadeRepository } from "../interfaces/IUnidadeRepository";

export class UnidadeRepository implements IUnidadeRepository {
  async findAll(): Promise<Unidade[]> {
    return await prismaClient.unidade.findMany({
      orderBy: {
        nome: 'asc'
      }
    });
  }

  async findByActive(): Promise<Unidade[]> {
    return await prismaClient.unidade.findMany({
      where: {
        ativo: true
      },
      orderBy: {
        nome: 'asc'
      }
    });
  }

  async findById(id: number): Promise<Unidade | null> {
    return await prismaClient.unidade.findUnique({
      where: { id }
    });
  }
}
