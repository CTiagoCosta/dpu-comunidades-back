import prismaClient from "../../../prisma";
import { PrimeiroAtendimento, Prisma } from "../../../generated/prisma";

export class PrimeiroAtendimentoRepository {
  async findById(id: string): Promise<PrimeiroAtendimento | null> {
    return await prismaClient.primeiroAtendimento.findUnique({
      where: { id },
      include: {
        fila: true,
        operador: {
          select: { id: true, nome: true, email: true },
        },
        estadoCivil: true,
        profissao: true,
        tipoDomicilio: true,
        tipoVulnerabilidade: true,
        tipoDemandaPrevidenciaria: true,
        competenciaJudicial: true,
        representanteLegal: {
          include: {
            documentos: true,
          },
        },
        analiseRenda: {
          include: {
            documentos: true,
          },
        },
        loasIdoso: {
          include: {
            membrosFamiliares: true,
          },
        },
        loasDeficiente: {
          include: {
            membrosFamiliares: true,
          },
        },
        aposentadoriaRural: true,
        seguroDefeso: true,
        pensaoMorteRural: true,
        salarioMaternidadeRural: true,
        auxilioDoencaInvalidez: true,
        aposentadoriaUrbana: true,
        salarioMaternidadeUrbano: true,
        documentos: true,
        historicoProgresso: {
          orderBy: { timestamp: 'desc' },
        },
      },
    });
  }

  async findByFilaId(filaId: string): Promise<PrimeiroAtendimento | null> {
    return await prismaClient.primeiroAtendimento.findUnique({
      where: { filaId },
      include: {
        fila: true,
        operador: {
          select: { id: true, nome: true, email: true },
        },
        estadoCivil: true,
        profissao: true,
        tipoDomicilio: true,
        tipoVulnerabilidade: true,
        tipoDemandaPrevidenciaria: true,
        competenciaJudicial: true,
        representanteLegal: {
          include: {
            documentos: true,
          },
        },
        analiseRenda: {
          include: {
            documentos: true,
          },
        },
        loasIdoso: {
          include: {
            membrosFamiliares: true,
          },
        },
        loasDeficiente: {
          include: {
            membrosFamiliares: true,
          },
        },
        aposentadoriaRural: true,
        seguroDefeso: true,
        pensaoMorteRural: true,
        salarioMaternidadeRural: true,
        auxilioDoencaInvalidez: true,
        aposentadoriaUrbana: true,
        salarioMaternidadeUrbano: true,
        documentos: true,
        historicoProgresso: {
          orderBy: { timestamp: 'desc' },
        },
      },
    });
  }

  async create(
    data: Prisma.PrimeiroAtendimentoCreateInput
  ): Promise<PrimeiroAtendimento> {
    return await prismaClient.primeiroAtendimento.create({
      data,
      include: {
        fila: true,
        operador: {
          select: { id: true, nome: true, email: true },
        },
      },
    });
  }

  async update(
    id: string,
    data: Prisma.PrimeiroAtendimentoUpdateInput
  ): Promise<PrimeiroAtendimento> {
    return await prismaClient.primeiroAtendimento.update({
      where: { id },
      data,
      include: {
        fila: true,
        operador: {
          select: { id: true, nome: true, email: true },
        },
        estadoCivil: true,
        profissao: true,
        tipoDomicilio: true,
        tipoVulnerabilidade: true,
        tipoDemandaPrevidenciaria: true,
        competenciaJudicial: true,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prismaClient.primeiroAtendimento.delete({
      where: { id },
    });
  }
}
