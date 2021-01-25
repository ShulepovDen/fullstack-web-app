/* eslint-disable comma-dangle */
const productsMethods = require('./products-methods');
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const fileNameJSON = path.resolve(__dirname, 'products.json');
function checkId(id) {
  return !isNaN(parseInt(id));
}
const app = express();
const newProduct = {
  id: 7,
  product_name: 'Кукуруза',
  product_price: 222,
  product_amount: 222,
};
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.get('/products', (req, res) => {
  res.json(productsMethods.getAllProducts(fileNameJSON));
});

app.get('/product/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!checkId(id)) {
    res.status(482).send({
      error: 'Incorrect id',
    });
    return;
  }
  const result = res.json(productsMethods.getProductById(fileNameJSON, id));
  if (result === undefined) {
    res.status(483).send({
      error: 'Product not found',
    });
  }
  res.send();
});
app.post('/product', (req, res) => {
  if (productsMethods.addNewProduct(fileNameJSON, req.body)) {
    res.status(200).json({ result: 'ok' });
  } else {
    res.status(454).json({ error: 'failed to create product' });
  }
});
app.put('/product/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!checkId(id)) {
    res.status(444).send({
      error: 'Incorrect id',
    });
    return;
  }
  if (productsMethods.updateProductById(fileNameJSON, id, req.body)) {
    res.status(200).json({ result: 'ok' });
  } else {
    res.status(454).json({ error: 'failed to update product' });
  }
});

app.delete('/product/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!checkId(id)) {
    res.status(444).send({
      error: 'Incorrect id',
    });
    return;
  }
  if (productsMethods.deleteProductById(fileNameJSON, id)) {
    res.status(200).json({ result: 'ok' });
  } else {
    res.status(454).json({ error: 'failed to delete product' });
  }
});

app.listen(80, (err) => {
  if (err) return console.log('something bad', err);
  console.log('server is listening 80');
});
// fetch('http://localhost/product/20')
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });
//console.log(addNewProduct(fileNameJSON, newProduct));
