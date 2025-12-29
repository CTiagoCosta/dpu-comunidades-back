import { Unidade } from "../../../generated/prisma";

export interface IUnidadeRepository {
  findAll(): Promise<Unidade[]>;
  findByActive(): Promise<Unidade[]>;
  findById(id: number): Promise<Unidade | null>;
}
