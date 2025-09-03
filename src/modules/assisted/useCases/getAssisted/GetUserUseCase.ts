import { NotFoundError } from "../../../../infra/errors/NotFoundError";
import { IAssistedRepository } from "../../interfaces/IAssistedRepository";
import { AssistedMapper } from "../../mappers/AssistedMapper";
import { UserWithRole } from "../../type/User";
import { AssistedOutput } from "../createAssistedAndAddToServiceQueue/CreateAssistedAndAddToServiceQueueDtos";
import { GetUserDto } from "./GetUserDto";

export class GetUserUseCase {
  constructor(private userRepository: IAssistedRepository) {}

  public async handler(getUserDto: GetUserDto): Promise<AssistedOutput | null> {
    const userFounded = await this.userRepository.findById(getUserDto.userId);
    if (!userFounded) {
      throw new NotFoundError("user", "Usuário não encontrado");
    }

    return AssistedMapper.toDomain(userFounded);
  }
}
