import mongoose  from "../connections"
import { userInterFace } from "../interface/index"

const userSchema = new mongoose.Schema<userInterFace>(
  {
    name: {
      type: String,
      required: [true, "請輸入您的名字"],
    },
    email: {
      type: String,
      required: [true, "請輸入您的 Email"],
      unique: true,
      lowercase: true,
      select: false,
    },
    password: {
      type: String,
      required: [true, "密碼必填"],
      select: false,
    },
    photo: String,
  },
  { versionKey: false }
);

const User = mongoose.model('User', userSchema);

export {
  User,
  userSchema
}