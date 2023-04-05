import { Router } from 'express';
import { postController } from '../controllers/post';

const router = Router();

router.get('/', (req,res)=>{
  postController.getAll(res)
});

router.post('/', (req,res)=>{
  console.log(req.body)
  postController.create(res,req.body)
});

router.patch('/', (req,res)=>{
  postController.update(res,req.body)
});

router.delete('/:id', (req:any,res)=>{
  postController.deleteById(res,req._id)
});

router.delete('/:id', postController.deleteAll);

export default router;
