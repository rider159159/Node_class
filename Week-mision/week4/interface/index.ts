import { Types } from "mongoose";

export interface PostInterFace {
  user: Types.ObjectId;
  content: string;
  image: string;
  tags: string[];
  type: string;
  likes: number;
  comments: number;
  createAt: Date
}

export interface userInterFace{
  name: String,
  email: String,
  password: String,
  photo: String,
}