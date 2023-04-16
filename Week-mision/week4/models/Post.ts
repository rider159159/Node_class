import mongoose  from "../connections"
import { PostInterFace } from "../interface/index"

const PostSchema = new mongoose.Schema<PostInterFace>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "貼文ID未填寫"],
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
  },
  createAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
})

const Post = mongoose.model('Post', PostSchema);

export {
  Post,
  PostSchema
}