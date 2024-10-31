import { ICreateUserDto, IUserRepository } from "./IUserRepository";

import { Repository } from "typeorm";
import { AppDataSource } from "../../../database/data-source";
import { UserModel } from "../model/User";

class UserRepository implements IUserRepository {
  private repository: Repository<UserModel>;

  constructor() {
    this.repository = AppDataSource.getRepository(UserModel);
  }

  async create(data: ICreateUserDto): Promise<void> {
    const user = this.repository.create(data);
    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<UserModel | null> {
    const userExists = await this.repository.findOne({ where: { email } });

    return userExists;
  }

  async findById(id: string): Promise<UserModel | null> {
    const userExists = await this.repository.findOne({ where: { id } });
    return userExists;
  }
}

export { UserRepository };
