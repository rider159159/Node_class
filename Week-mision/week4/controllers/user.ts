import { User } from '../models/User'
import { successHandler } from '../utils/successHandler'
import { errorHandler } from '../utils/errorHandler'
import { userInterFace } from '../interface'
import { Response , Request } from 'express';

class UserController {
  public async getAll (req: Request, res: Response):Promise<void> {
    try {
      const users = await User.find({
        name: { $regex: req.query.search },
      });
      successHandler(res, users)
    } catch (error:any) {
      errorHandler(res,error)
    }
  }
  public async createOne(req: Request, res: Response):Promise<void>{
    try {
      const userData = await User.create(req.body as userInterFace);
      successHandler(res, userData)
    } catch (error:any) {
      errorHandler(res,error)
    }
  }

  public async deleteAll(req: Request, res: Response):Promise<void>{
    try {
      await User.deleteMany({});
      successHandler(res)
    } catch (error:any) {
      errorHandler(res,error)
    }
  }
}

export const userController = new UserController()