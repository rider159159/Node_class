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

const Drink = mongoose.model('Drink', drinkSchema)
// 1.尋找一筆 document 並將 ice 改為 去冰，sugar 改為 半糖
// 使用 findByIdAndUpdate 做更新
Drink.findByIdAndUpdate("642a7ac87f24e1f2b115ffca", {
  ice: "去冰",
  sugar: "半糖"
})
  .then(() => {console.log('編輯成功')})
  .catch((error) => {console.log(error)})

// 使用 updateOne 做更新
Drink.updateOne(
  {
    product:'烏龍鮮奶茶'
  }, 
  {
    ice: "去冰",
    sugar: "半糖"
  }
)
  .then(() => {console.log('編輯成功')})
  .catch((error) => {console.log(error)})

// 2.以 ID 尋找一筆 document 並將其刪除
Drink.findByIdAndDelete('642a7ac87f24e1f2b115ffcc')
  .then(() => {console.log('刪除資料成功')})
  .catch((error:any) => {console.log(error)})

// 3. 刪除全部 documents
Drink.deleteMany({})
  .then(() => {console.log('刪除資料成功')})
  .catch((error:any) => {console.log(error)})

