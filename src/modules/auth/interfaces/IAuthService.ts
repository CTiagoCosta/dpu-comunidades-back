import { JwtPayload } from "jsonwebtoken";
import { LoginOutput } from "../../auth/useCases/login/LoginDtos";

export interface IAuthService {
  encodePassword(password: string): Promise<string>;
  comparePassword(password: string, hashedPassword: string): Promise<boolean>;
  validatePassword(password: string): boolean;
  generateToken(userId: string): LoginOutput;
  verifyToken(token: string, jwtSecret: string): Promise<JwtPayload | null>;
}
