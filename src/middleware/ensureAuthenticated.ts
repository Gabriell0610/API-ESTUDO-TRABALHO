import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository } from "../modules/users/repositories/UserRepository";
import { AppError } from "../errors/AppError";

interface ITokenPayload {
  sub: string;
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new AppError("token missing", 401);
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    const { sub: user_id } = verify(token, "secret") as ITokenPayload;
    const userRepository = new UserRepository();

    const user = await userRepository.findById(user_id);
    if (!user) {
      throw new AppError("user not found", 401);
    }

    //Criando uma propriedade de request para armazenar o ID do usuário
    req.user = {
      id: user_id,
    };

    next();
  } catch (error) {
    throw new AppError("invalid token", 401);
  }
}
