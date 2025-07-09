import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import jwt, { JwtPayload } from "jsonwebtoken";
import { LoginOutput } from "../useCases/login/LoginDtos";
import configs from "../../../configs";
import { IAuthService } from "../interfaces/IAuthService";

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
    const jwtSecret = configs.JWT_SECRET;
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

  async verifyToken(token: string, secret: string): Promise<JwtPayload> {
    const decoded = jwt.verify(token, secret) as JwtPayload;
    return decoded;
  }
}
