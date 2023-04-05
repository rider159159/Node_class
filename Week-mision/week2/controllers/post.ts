import { Post } from '../models/Post'
import { successHandler } from '../utils/successHandler'
import { errorHandler } from '../utils/errorHandler'
import { ServerResponse } from 'http'
import { PostInterFace } from '../interface'

class PostController {
  public async getAll (res: ServerResponse) :Promise<void> {
    try {
      const data = await Post.find()
      successHandler(res, data)
    } catch(e) {
      errorHandler(res, e)
    }
  }
  public async create(res: ServerResponse, body: string) :Promise<void> {
    try {
      const postData: PostInterFace = JSON.parse(body)
      const data = await Post.create(postData)
      successHandler(res, data)
    } catch(e) {
      console.log(e)
      errorHandler(res, e)
    }
  }
  public async update(res: ServerResponse, body: string) :Promise<void> {
    try {
      const patchData: PostInterFace = JSON.parse(body)
      const { _id } = patchData
      const exist = await Post.find({ _id }).count()
      if (exist) {
        await Post.updateOne({ _id }, { $set: patchData } )
        const newData = await Post.findById(_id) || {}
        successHandler(res, newData)
      } else {
        throw '沒有對應 id 資料'
      } 
    } catch(e) {
      errorHandler(res, e)
    }
  }
  public async deleteById(res: ServerResponse, _id: string) :Promise<void> {
    try {
      const data = await Post.find({ _id })
      if (data.length) {
        await Post.deleteOne({ _id })
        successHandler(res, data)
      } else {
        throw '沒有對應 id 資料'
      }
    } catch(e) {
    errorHandler(res, e)
  }
  }
  public async deleteAll(res: ServerResponse) :Promise<void> {
    try {
      await Post.deleteMany({})
      successHandler(res)
    } catch (e) {
      errorHandler(res, e)
    }
  }
}

export const postController = new PostController()