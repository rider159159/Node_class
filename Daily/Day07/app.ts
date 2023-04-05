import * as mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/store')
  .then(() => console.log('連線成功'))
  .catch(({ reason }) => console.log(reason))

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
  }
});

const Drink = mongoose.model('Drink', drinkSchema)

Drink.create({
    product: '鮮奶茶',
    price: 55,
    sugar: '微糖'
  })
  .then(() => {console.log('新增資料成功')})
  .catch((error) => {console.log(error)})
