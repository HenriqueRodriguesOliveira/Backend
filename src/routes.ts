import {Router, Request, Response} from 'express';

const router = Router();

router.get('/teste', (require: Request, response: Response) => {
  return response.json({ nome: "Henrique" })
}) 
export { router };