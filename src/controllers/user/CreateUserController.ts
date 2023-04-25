import { Request, Response } from 'express'
import { CreateUserService } from '../../services/user/CreateUserService'
class CreateUserController{
  async handle(req: Request, res: Response){
    const { name, email, password } = req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      email,
      password
    });

    return res.json(user)
  }
}

export { CreateUserController }

//Pegar os dados da requisição e repassar para o services

// o serviço vai retornar o que eu quero mandar para o usuário

// O controle pega os dados do body

// inicializa o UserService

// executa o service e salva no banco de dados

// devolvendo para a váriavel user o que eu quero mandar para o usuário e retorna para o controller