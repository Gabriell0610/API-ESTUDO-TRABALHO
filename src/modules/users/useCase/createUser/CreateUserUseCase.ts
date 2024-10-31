import { injectable, inject } from "tsyringe";
import {
  ICreateUserDto,
  IUserRepository,
} from "../../repositories/IUserRepository";

import { hash } from "bcrypt";
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,
  ) {}

  async execute(data: ICreateUserDto): Promise<void> {
    const hashedPassword = await hash(data.password, 10); // Hashing the password using bcrypt
    data.password = hashedPassword;

    const existingUser = await this.userRepository.findByEmail(data.email);

    if (existingUser) {
      throw new AppError("User already exists", 409);
    }

    await this.userRepository.create(data);
  }
}

export { CreateUserUseCase };
