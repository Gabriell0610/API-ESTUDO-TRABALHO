import {
  ICreateUserDto,
  IUserRepository,
} from "../../../repositories/IUserRepository";

import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/http/database/data-source";
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

  async findByEmail(email: string): Promise<UserModel | undefined> {
    const userExists = await this.repository.findOne({ where: { email } });

    if (!userExists) {
      return undefined; // Caso não exista um usuário com este email, retorna undefined
    }
    return userExists;
  }

  async findById(id: string): Promise<UserModel | undefined> {
    const userExists = await this.repository.findOne({ where: { id } });
    if (!userExists) {
      return undefined; // Caso não exista um usuário com este id, retorna undefined
    }
    return userExists;
  }
}

export { UserRepository };
