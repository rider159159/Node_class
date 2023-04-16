import { Router } from 'express';
import { postController } from '../controllers/post';

const router = Router();

router
  .get('/', postController.getAll)
  .post('/', postController.create)
  .patch('/', postController.update)
  .delete('/:id',postController.deleteById)
  .delete('/', postController.deleteAll)

export default router;
