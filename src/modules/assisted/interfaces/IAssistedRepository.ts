import { Assistido } from "@prisma/client";

export interface IAssistedRepository {
  createAssisted(dto: Assistido): Promise<Assistido | null>;
  findByCpf(cpf: string): Promise<Assistido | null>;
}
