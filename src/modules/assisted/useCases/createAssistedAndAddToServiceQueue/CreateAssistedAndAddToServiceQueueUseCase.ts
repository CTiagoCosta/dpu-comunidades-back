import { ConflictError } from "../../../../infra/errors/ConflictError";
import { InvalidValueError } from "../../../../infra/errors/InvalidValueError";
import { IAssistedRepository } from "../../interfaces/IAssistedRepository";
import { AssistedMapper } from "../../mappers/AssistedMapper";
import {
  CreateAssistedInput,
  AssistedOutput,
  CreateAssistedInputAndAddToServiceQueue,
} from "./CreateAssistedAndAddToServiceQueueDtos";
import { IServiceQueueRepository } from "../../../serviceQueue/interfaces/IServiceQueueRepository";
import { ServiceQueueMapper } from "../../../serviceQueue/mappers/ServiceQueueMapper";

export class CreateAssistedAndAddToQueueUseCase {
  constructor(
    private assistedRepository: IAssistedRepository,
    private serviceQueue: IServiceQueueRepository
  ) {}

  public async handler(
    dto: CreateAssistedInputAndAddToServiceQueue
  ): Promise<AssistedOutput | null> {
    await this.validateAssistedExists(dto);

    const createdAssisted = await this.createAssisted(dto.assisted);

    await this.addToServiceQueue(dto, createdAssisted.id);

    return AssistedMapper.toDomain(userCreated);
  }

  private async validateAssistedExists(
    dto: CreateAssistedInputAndAddToServiceQueue
  ): Promise<void> {
    const assistedByCpf = await this.assistedRepository.findByCpf(
      dto.assisted.cpf
    );
    if (assistedByCpf) {
      throw new ConflictError("cpf", "CPF já está sendo utilizado.");
    }
  }

  private async createAssisted(dto: CreateAssistedInput) {
    const assisted = AssistedMapper.toDatabase(dto);
    return await this.assistedRepository.createAssisted(assisted);
  }

  private async addToServiceQueue(
    dto: CreateAssistedInputAndAddToServiceQueue,
    assistedId: string
  ) {
    const assisted = ServiceQueueMapper.toDatabase(dto);
    return await this.serviceQueue.create(assisted);
  }
}
