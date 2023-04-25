import { Router } from 'express';

// Chamando o UserController
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailuserController } from './controllers/user/DetailUserController';

import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailuserController().handle)

export { router };

//Tipo post, pois eu quero cadastrar um usuário na aplicação.

// handle para chamar o método UserController.