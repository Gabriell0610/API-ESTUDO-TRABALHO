import { UserModel } from "../../infra/typeorm/model/User";
import { ICreateUserDto, IUserRepository } from "../IUserRepository";

class UserRepositoryInMemory implements IUserRepository {
  usersDb: UserModel[] = [];

  async create(data: ICreateUserDto): Promise<void> {
    const user = new UserModel();

    Object.assign(user, data);

    this.usersDb.push(user);
  }

  async findByEmail(email: string): Promise<UserModel | undefined> {
    return this.usersDb.find((user) => user.email === email);
  }

  async findById(id: string): Promise<UserModel | undefined> {
    return this.usersDb.find((user) => user.id === id);
  }
}

export { UserRepositoryInMemory };
