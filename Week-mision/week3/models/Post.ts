import mongoose from "../connections"
import { PostInterFace } from "../interface/index"
const PostSchema =  new mongoose.Schema<PostInterFace>({
  name: {
    type: String,
    required: [ true, '貼文姓名未填寫' ]
  },
  content: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  tags: {
    type: [String],
    default: []
  },
  type: {
    type: String,
    default: ''
  },
  likes: {
    type: Number,
    default:0
  },
  comments: {
    type: Number,
    required: [ true, '評論數必填' ]
  }
})

const Post = mongoose.model('Post', PostSchema);

export {
  Post,
  PostSchema
}