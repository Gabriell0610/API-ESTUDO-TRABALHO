import { UserModel } from "../model/User";

interface ICreateUserDto {
  name: string;
  password: string;
  email: string;
  driver_license: string;
  avatar?: string;
}

interface IUserRepository {
  create(data: ICreateUserDto): Promise<void>;
  findByEmail(email: string): Promise<UserModel | null>;
  findById(id: string): Promise<UserModel | null>;
}

export { IUserRepository, ICreateUserDto };
