import { NotFoundError } from "../../../../infra/errors/NotFoundError";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { UserMapper } from "../../mappers/UserMapper";
import { UserWithRole } from "../../type/User";
import { UserOutput } from "../createUser/CreateUserDtos";
import { GetUserDto } from "./GetUserDto";

export class GetUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  public async handler(getUserDto: GetUserDto): Promise<UserOutput | null> {
    const userFounded = await this.userRepository.findById(getUserDto.userId);
    if (!userFounded) {
      throw new NotFoundError("user", "Usuário não encontrado");
    }

    return UserMapper.toDomain(userFounded);
  }
}
