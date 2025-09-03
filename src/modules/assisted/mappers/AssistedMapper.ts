import { randomUUID } from "crypto";
import { AssistedOutput } from "../useCases/createAssistedAndAddToServiceQueue/CreateAssistedAndAddToServiceQueueDtos";
import { Assistido } from "@prisma/client";

export abstract class AssistedMapper {
  public static toDomain(dto: Assistido): AssistedOutput {
    return {
      id: dto.id,
      fullName: dto.nomeCompleto,
      socialName: dto.nomeSocial,
      cpf: dto.cpf,
      cellphone: dto.telefone,
      isMigrant: dto.migrante,
    };
  }

  public static toDatabase(dto: any): Assistido {
    return {
      id: randomUUID(),
      nomeCompleto: dto.fullName,
      nomeSocial: dto.socialName,
      cpf: dto.cpf,
      migrante: dto.isMigrant,
      telefone: dto.phone,
    };
  }
}
