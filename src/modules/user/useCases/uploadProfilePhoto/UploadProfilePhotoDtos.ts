import { UserOutput } from "../createUser/CreateUserDtos";

export interface UploadProfilePhotoRequest {
  userId: string;
  file: Express.Multer.File;
}

export interface UploadProfilePhotoResponse {
  photoUrl: string;
  user: UserOutput;
}
