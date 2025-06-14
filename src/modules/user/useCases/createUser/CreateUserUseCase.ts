import { ConflictError } from "../../../../infra/errors/ConflictError";
import { InvalidValueError } from "../../../../infra/errors/InvalidValueError";
import { IAuthService } from "../../../auth/interfaces/IAuthService";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { UserMapper } from "../../mappers/UserMapper";
import { CreateUserInput, UserOutput } from "./CreateUserDtos";

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private authService: IAuthService
  ) {}

  public async handler(
    createUserDto: CreateUserInput
  ): Promise<UserOutput | null> {
    await this.validate(createUserDto);
    const encryptedPassword = await this.authService.encodePassword(
      createUserDto.password
    );

    const user = UserMapper.toDatabase(createUserDto, encryptedPassword);

    const userCreated = await this.userRepository.createUser(user);

    return userCreated;
  }

  private async validate(createUserDto: CreateUserInput): Promise<void> {
    await this.validatePasswords(createUserDto);

    await this.validateUserExists(createUserDto);
  }

  private async validateUserExists(
    createUserDto: CreateUserInput
  ): Promise<void> {
    const userByEmail = await this.userRepository.emailExists(
      createUserDto.email
    );
    if (userByEmail) {
      throw new ConflictError("email", "Email já está sendo utilizado.");
    }
  }

  private async validatePasswords(createUserDto: CreateUserInput): Promise<void> {
    const isValidatePassword = this.authService.validatePassword(
      createUserDto.password
    );

    if (!isValidatePassword) {
      throw new InvalidValueError(
        "password",
        "Senha deve conter no mínimo uma letra maiúscula, um caracter especial, um numero e no mínimo 8 caracteres!"
      );
    }
  }
}
