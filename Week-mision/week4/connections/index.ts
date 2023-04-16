import mongoose from 'mongoose';
import * as dotenv  from 'dotenv';
dotenv.config();

const databaseUrl: string = process.env.DATABASE_URL as string;

const DB: string = databaseUrl.replace(
    '<password>',
    process.env.PASSWORD as string
);


mongoose
  .connect(DB)
  .then(() => console.log('資料庫連接成功'))
  .catch((err) => console.log(err));

export default mongoose;
