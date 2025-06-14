import { User } from "../../../generated/prisma";
import {
  CreateUserInput,
  UserOutput,
} from "../useCases/createUser/CreateUserDtos";

export interface IUserRepository {
  createUser(dto: User): Promise<UserOutput | null>;
  emailExists(email: string): Promise<boolean>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
}
