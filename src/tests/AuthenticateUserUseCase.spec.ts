import { AppError } from "../shared/errors/AppError";
import { UserRepositoryInMemory } from "../modules/users/repositories/in-memory/UserRepositoryInMemory";
import { ICreateUserDto } from "../modules/users/repositories/IUserRepository";
import { CreateUserUseCase } from "../modules/users/useCase/createUser/CreateUserUseCase";
import { AuthenticanteUserUseCase } from "../modules/users/useCase/authenticateUser/AuthenticateUserUseCase";

let userRepositoryMock: UserRepositoryInMemory;
let authenticateUserUseCase: AuthenticanteUserUseCase;
let createUserUseCase: CreateUserUseCase;

describe("authenticate User ", () => {
  beforeEach(() => {
    userRepositoryMock = new UserRepositoryInMemory();
    authenticateUserUseCase = new AuthenticanteUserUseCase(userRepositoryMock);
    createUserUseCase = new CreateUserUseCase(userRepositoryMock); // Criando o useCase para criacao de usuario, pois para fazer o login do usuario é preciso ter um usuario cadastrado
  });

  it("should return a token when a valid email and password are provided", async () => {
    const user: ICreateUserDto = {
      // Criando dados de usuario mockado
      name: "Test User",
      email: "test@example.com",
      password: "1234",
      driver_license: "1234567890",
    };

    await createUserUseCase.execute(user); // criando um novo usuario para ter salvo no banco de dados

    const result = await authenticateUserUseCase.execute({
      email: "test@example.com",
      password: "1234",
    }); // Fazendo a autenticacao com os dados fornecidos do usuario criado

    console.log(result);

    expect(result.token).toBeTruthy(); // Verifica se o token foi gerado
  });

  it("should not be able to authenticate an inexistent user", async () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "false@email.com",
        password: "1234",
      });
    }).rejects.toBeInstanceOf(AppError); // Verifica se a autenticacao falha para um usuario inexistente
  });

  it("should not be able to authenticate with incorrect password", async () => {
    expect(async () => {
      const user: ICreateUserDto = {
        name: "Test User",
        email: "test@example.com",
        password: "1234",
        driver_license: "1234567890",
      };

      await createUserUseCase.execute(user); // criando um novo usuario para ter salvo no banco de dados
      await authenticateUserUseCase.execute({
        email: "test@example.com",
        password: "wrong_password",
      });
    }).rejects.toBeInstanceOf(AppError); // Verifica se a autenticacao falha para uma senha incorreta
  });
});
