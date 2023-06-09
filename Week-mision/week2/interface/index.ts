import { Types } from "mongoose";
export interface PostInterFace {
  user: Types.ObjectId;
  organization: Types.ObjectId;
  content: string;
  image: string;
  tags: string[];
  type: string;
  likes: number;
  comments: number;
  createAt: Date
}
