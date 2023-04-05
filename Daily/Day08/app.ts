import * as mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/store')
  .then(() => console.log('連線成功'))
  .catch(({ reason }) => console.log(reason))

const schemaOption = {
  versionKey: false
}
const drinkSchema = new mongoose.Schema({  
  /* 請在此填入答案 */
  product: {
  type: String,
  require: [ true, '產品名稱未填寫' ]
  },
  price: {
    type: Number,
    require: [ true, '價錢名稱未填寫' ]
  },
  ice: {
    type: String,
    default: '正常冰'
  },
  sugar: {
    type: String,
    default: '全糖'
  },
  toppings: {
    type: Array<String>,
  },
  createdAt: {
    type: Date, 
    default: Date.now,
    select: false
  }
}, schemaOption);

