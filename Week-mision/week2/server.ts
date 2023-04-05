const http = require('http');
const mongoose = require('mongoose');
import { requestListener } from './routers/posts'
import * as dotenv  from 'dotenv';
dotenv.config();
const databaseUrl = process.env.DATABASE_URL;

mongoose
  .connect(databaseUrl)
  .then(() => console.log('資料庫連接成功'));

const server = http.createServer(requestListener);
server.listen(3000);