import { InvalidCredentials } from "../../../../infra/errors/InvalidCredentials";
import { InvalidValueError } from "../../../../infra/errors/InvalidValueError";
import { IUserRepository } from "../../../user/interfaces/IUserRepository";
import { IAuthService } from "../../interfaces/IAuthService";
import { LoginInput, LoginOutput } from "./LoginDtos";

export class LoginUseCase {
  constructor(
    private userRepository: IUserRepository,
    private authService: IAuthService
  ) {}

  public async handler(dto: LoginInput): Promise<LoginOutput | null> {
    const userFound = await this.userRepository.findByEmail(dto.email);
    if (!userFound) {
      throw new InvalidCredentials("email", "Email não encontrado.");
    }

    const hashedPassword = await this.authService.comparePassword(
      dto.password,
      userFound.senha
    );

    if (!hashedPassword) {
      throw new InvalidCredentials("password", "Senha inválida.");
    }

    if (userFound.aprovado === false) {
      throw new InvalidCredentials(
        "user",
        "Seu cadastro está pendente de aprovação. Por favor, aguarde a aprovação para acessar o sistema."
      );
    }

    return this.authService.generateToken(userFound.id);
  }
}
