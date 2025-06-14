import { IAuthService } from "../interfaces/IAuthService";
import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { LoginOutput } from "../../auth/useCases/login/LoginDtos";

export class AuthService implements IAuthService {
  async encodePassword(password: string): Promise<string> {
    const senhaHash = await hash(password, 8);
    return senhaHash;
  }

  async comparePassword(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    const senhaMatch = await compare(password, hashedPassword);

    return senhaMatch;
  }

  validatePassword(password: string): boolean {
    if (!password) {
      return false;
    }
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValid = regex.test(password);
    return isValid;
  }

  generateToken(userId: string): LoginOutput {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      throw new Error("JWT_SECRET não está definido nas variáveis de ambiente");
    }
    const token = sign(
      {
        userId: userId,
      },
      jwtSecret,
      {
        subject: String(userId),
        expiresIn: "1d",
      }
    );
    return { token: token };
  }
}
