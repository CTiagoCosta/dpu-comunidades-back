import prismaClient from "../../../../prisma";

export interface TipoDemandaDTO {
  id: number;
  descricao: string;
}

export class ListarTiposDemandaUseCase {
  async execute(): Promise<TipoDemandaDTO[]> {
    const tiposDemanda = await prismaClient.tipoDemandaPrevidenciaria.findMany({
      select: {
        id: true,
        descricao: true,
      },
      orderBy: {
        descricao: "asc",
      },
    });

    return tiposDemanda;
  }
}
