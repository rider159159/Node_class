import { Post } from '../models/Post'
import { successHandler } from '../utils/successHandler'
import { errorHandler } from '../utils/errorHandler'
import { PostInterFace } from '../interface'
import { Response , Request } from 'express';

class PostController {
  public async getAll (req: Request, res: Response) :Promise<void> {
    try {
      const timeSort = req.query.timeSort == "asc" ? "createdAt" : "-createdAt";
      const q = req.query?.q !== undefined ? { "content": new RegExp(req.query.q as string) } : {};
      // 若移除 populate 則使用 references 方式，獲得參數
      const data = await Post.find(q)
      .populate({
        path:'user',
        select:'name email'
      })
      .sort(timeSort)
      successHandler(res, data)
    } catch(e:any) {
      errorHandler(res,e)
    }
  }
  public async create(req: Request, res: Response) :Promise<void> {
    try {
      const postData = req.body as PostInterFace
      const data = await Post.create(postData)
      successHandler(res, data)
    } catch(e:any) {
      errorHandler(res,e)
    }
  }
  public async update(req: Request, res: Response) :Promise<void> {
    try {
      const patchData = req.body
      const { _id } = patchData
      const exist = await Post.find({ _id }).count()
      if (exist) {
        await Post.updateOne({ _id }, { $set: patchData } )
        const newData = await Post.findById(_id) || {}
        successHandler(res, newData)
      } else {
        throw '沒有對應 id 資料'
      } 
    } catch(e:any) {
      errorHandler(res,e)
    }
  }
  public async deleteById(req: Request, res: Response) :Promise<void> {
    try {
      const _id = req.params.id;
      console.log('test',_id,req.params)
      const data = await Post.find({ _id })
      if (data.length) {
        await Post.deleteOne({ _id })
        successHandler(res, data)
      } else {
        throw '沒有對應 id 資料'
      }
    } catch(e:any) {
      errorHandler(res,e)
    }
  }
  public async deleteAll(req: Request, res: Response) :Promise<void> {
    try {
      await Post.deleteMany({})
      successHandler(res)
    } catch (e:any) {
      errorHandler(res,e)
    }
  }
}

export const postController = new PostController()