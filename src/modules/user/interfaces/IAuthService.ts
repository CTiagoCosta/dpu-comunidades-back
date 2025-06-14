export interface IAuthService {
  encodePassword(password: string): Promise<string>;
  comparePassword(password: string, hashedPassword: string): Promise<boolean>;
  validatePassword(password: string): boolean;
}
