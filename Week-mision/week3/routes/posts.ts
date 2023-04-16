import { Router } from 'express';
import { postController } from '../controllers/post';

const router = Router();

router.get('/', postController.getAll);

router.post('/', postController.create);

router.patch('/', postController.update);

router.delete('/:id',postController.deleteById);

router.delete('/', postController.deleteAll);

export default router;
