import { Router } from 'express';
import { userController } from '../controllers/user';

const router = Router();

router
  .get('/', userController.getAll)
  .post('/', userController.createOne)
  .delete('/', userController.deleteAll)

export default router;
