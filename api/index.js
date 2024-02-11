const express = require('express')

const app = express()
const productsList = [
    {
      id: 0,
      name: 'product A',
      imgURL: 'https://i.redd.it/ouodm9z9ycp51.png',
      category: 'cat_1',
      price: 10,
      height: 10,
      width: 10,
      available: true
    },
    {
      id: 1,
      name: 'product A1',
      imgURL: 'url_2',
      category: 'cat_1',
      price: 15,
      height: 20,
      width: 10,
      available: true
    },
    {
      id: 2,
      name: 'product B',
      imgURL: 'url_3',
      category: 'cat_2',
      price: 11,
      height: 10,
      width: 20,
      available: false
    },
    {
      id: 3,
      name: 'product C',
      imgURL: 'url_3',
      category: 'cat_3',
      price: 11,
      height: 10,
      width: 20,
      available: true
    },
    {
      id: 4,
      name: 'product C1',
      imgURL: 'url_3',
      category: 'cat_3',
      price: 11,
      height: 20,
      width: 20,
      available: true
    }
  ]
const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
app.use(allowCrossDomain)
app.get('/', (req, res) => {
    res.json(productsList)
})
app.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  res.json(productsList.filter(elem => elem.id === id))
})
app.listen(3001)
