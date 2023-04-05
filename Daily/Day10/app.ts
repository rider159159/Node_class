// app.js
const http = require('http');
const mongoose = require('mongoose');
const { Drink } = require('./models/drinks');

mongoose.connect('mongodb://localhost:27017/test')
  .then(() => {
    console.log('資料庫連線成功');
  })
  .catch((error:any) => {
    console.log(error);
  });

const requestListener = async (req:any, res:any) => {
  let body = '';
  req.on('data', (chunk:string) => {
    body += chunk;
  });
  const headers = {
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
    'Content-Type': 'application/json',
  };
  if (req.url === '/drinks' && req.method === 'GET') {
    const drinks = await Drink.find();
    res.writeHead(200, headers);
    res.write(JSON.stringify({
      status: 'success',
      drinks,
    }));
    res.end();
  } else if (req.url === '/drinks' && req.method === 'POST') {
    req.on('end', async () => {
      try {
        const data = JSON.parse(body);
        const newDrink = await Drink.create({
          product: data.product,
          price: data.price,
          toppings: data.toppings,
        });
        res.writeHead(200, headers);
        res.write(JSON.stringify({
          status: 'success',
          drinks: newDrink,
        }));
        res.end();
      } catch (error) {
        res.writeHead(400, headers);
        res.write(JSON.stringify({
          status: 'false',
          message: '欄位沒有正確，或沒有此 ID',
          error,
        }));
        res.end();
      }
    });
  } else if (req.url === '/drinks' && req.method === 'DELETE') {
    await Drink.deleteMany({});
    res.writeHead(200, headers);
    res.write(JSON.stringify({
      status: 'success',
      drinks: [],
    }));
    res.end();
  } else if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
  } else {
    res.writeHead(404, headers);
    res.write(JSON.stringify({
      status: 'false',
      message: '無此網站路由',
    }));
    res.end();
  }
};

const server = http.createServer(requestListener);
server.listen(3005);