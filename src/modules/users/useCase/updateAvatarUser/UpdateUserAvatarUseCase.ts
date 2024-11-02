import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { deleteFile } from "../../../../config/file";

interface IRequest {
  userId: string;
  avatarFile: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,
  ) {}
  async execute({ userId, avatarFile }: IRequest): Promise<void> {
    try {
      const user = await this.userRepository.findById(userId);

      //Verifica se o usuário existe e lança uma exceção caso não exista
      if (!user) {
        throw new AppError("User not found", 404);
      }

      //Verifica se o avatar já existe e deleta caso exista
      if (user.avatar) {
        await deleteFile(`./tmp/avatar/${user?.avatar}`);
      }

      user.avatar = avatarFile; // Salva o novo avatar no usuário

      await this.userRepository.create(user);
    } catch (error) {
      if (error instanceof AppError)
        throw new AppError(error.message, error.statusCode);
    }
  }
}

export { UpdateUserAvatarUseCase };
