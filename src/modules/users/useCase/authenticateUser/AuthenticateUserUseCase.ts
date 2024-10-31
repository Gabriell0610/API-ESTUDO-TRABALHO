import {} from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { IUserRepository } from "../../repositories/IUserRepository";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticanteUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,
  ) {}

  async execute(data: IRequest): Promise<IResponse> {
    //Verificar se Usuario existe
    const user = await this.userRepository.findByEmail(data.email);
    if (!user) {
      throw new AppError("Email or password incorrect", 400);
    }

    //- Se a senha está correta
    const passwordIsCorrect = await compare(data.password, user.password);
    if (!passwordIsCorrect) {
      throw new AppError("email or password incorrect", 400);
    }

    //- Gerar token JWT
    const token = sign({}, "secret", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };

    // Retornar resposta
    return tokenReturn;
  }
}

export { AuthenticanteUserUseCase, IResponse };
