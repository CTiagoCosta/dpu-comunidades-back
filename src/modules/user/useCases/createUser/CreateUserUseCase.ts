import { ConflictError } from "../../../../infra/errors/ConflictError";
import { InvalidValueError } from "../../../../infra/errors/InvalidValueError";
import { IAuthService } from "../../../auth/interfaces/IAuthService";
import { IRoleRepository } from "../../interfaces/IRoleRepository";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { UserMapper } from "../../mappers/UserMapper";
import { UserWithRole } from "../../type/User";
import { CreateUserInput, UserOutput } from "./CreateUserDtos";

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private authService: IAuthService,
    private roleRepository: IRoleRepository
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

    return UserMapper.toDomain(userCreated);
  }

  private async validate(createUserDto: CreateUserInput): Promise<void> {
    await this.validateUserExists(createUserDto);
    await this.validateRoleExists(createUserDto.roleId);
    await this.validatePasswords(createUserDto);
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

  private async validatePasswords(
    createUserDto: CreateUserInput
  ): Promise<void> {
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

  private async validateRoleExists(roleId: number): Promise<void> {
    const role = await this.roleRepository.findById(roleId);
    if (!role) {
      throw new InvalidValueError("roleId", "O ID do papel não existe.");
    }
  }
}
