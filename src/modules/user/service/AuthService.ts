import { IAuthService } from "../interfaces/IAuthService";
import { hash, compare } from "bcryptjs";

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
    if(!password) {
      return false;
    }
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValid = regex.test(password);
    return isValid;
  }
}
