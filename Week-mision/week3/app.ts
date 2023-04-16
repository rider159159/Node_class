import express from 'express';
import routers from './routes';

const cors = require('cors');
const app = express();
require('./connections')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/posts', routers.posts);

app.listen(3000,function(){
  console.log('Serve Started');
})
