import { UserModel } from "../infra/typeorm/model/User";

interface ICreateUserDto {
  name: string;
  password: string;
  email: string;
  driver_license: string;
  avatar?: string;
}

interface IUserRepository {
  create(data: ICreateUserDto): Promise<void>;
  findByEmail(email: string): Promise<UserModel | undefined>;
  findById(id: string): Promise<UserModel | undefined>;
}

export { IUserRepository, ICreateUserDto };
