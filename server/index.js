/* eslint-disable comma-dangle */
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
let newProduct = {
  id: 7,
  product_name: 'Кукуруза',
  product_price: 222,
  product_amount: 222,
};
app.use(express.json());
app.get('/products', (req, res) => {
  res.json(getAllProducts(JSONfileName));
});

app.get('/product/:id', (req, res) => {
  const id = Number(req.params.id);
  res.json(getProductById(JSONfileName, id));
});
app.post('/product', (req, res) => {
  if (addNewProduct(JSONfileName, newProduct)) {
    res.json({ result: 'ok' });
  } else {
    res.json({ error: 'failed to create product' });
  }
});
app.put('/product/:id', (req, res) => {
  const id = Number(req.params.id);
  if (updateProductById(JSONfileName, id, req.body)) {
    res.json({ result: 'ok' });
  } else {
    res.json({ error: 'failed to update product' });
  }
});

app.delete('/product/:id', (req, res) => {
  const id = Number(req.params.id);
  if (deleteProductById(JSONfileName, id)) {
    res.json({ result: 'ok' });
  } else {
    res.json({ error: 'failed to delete product' });
  }
});

app.listen(80, (err) => {
  if (err) return console.log('something bad', err);
  console.log('server is listening 80');
});

function getAllProducts(fileJSON) {
  try {
    return JSON.parse(
      fs.readFileSync(fileJSON, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        }
      })
    );
  } catch (error) {
    console.error(error);
    return false;
  }
}

function getProductById(fileJSON, id) {
  let productsList;
  try {
    productsList = JSON.parse(
      fs.readFileSync(fileJSON, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        }
      })
    );
  } catch (error) {
    console.error(error);
    return false;
  }

  return productsList.find((item) => item.id === id);
}

function addNewProduct(fileJSON, product) {
  let productsList;
  try {
    productsList = JSON.parse(
      fs.readFileSync(fileJSON, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        }
      })
    );
  } catch (error) {
    console.error(error);
    return false;
  }

  productsList.push(product);
  fs.writeFileSync(fileJSON, JSON.stringify(productsList), (err) => {
    if (err) {
      console.error(err);
    }
  });
  return true;
}
function updateProductById(fileJSON, productId, product) {
  let productsList;
  try {
    productsList = JSON.parse(
      fs.readFileSync(fileJSON, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        }
      })
    );
  } catch (error) {
    console.error(error);
    return false;
  }
  if (productsList.findIndex((element) => element.id === productId) === -1) {
    return false;
  }
  productsList[productsList.findIndex((element) => element.id === productId)] = product;

  fs.writeFileSync(fileJSON, JSON.stringify(productsList), (err) => {
    if (err) {
      console.error(err);
    }
  });
  return true;
}
function deleteProductById(fileJSON, productId) {
  const productsList = JSON.parse(
    fs.readFileSync(fileJSON, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      }
    })
  );
  if (productsList.findIndex((element) => element.id === productId) === -1) {
    return false;
  }
  productsList.splice(
    productsList.findIndex((element) => element.id === productId),
    1
  );
  fs.writeFileSync(fileJSON, JSON.stringify(productsList), (err) => {
    if (err) {
      console.error(err);
    }
  });
  return true;
}
const JSONfileName = path.resolve(__dirname, 'products.json');

//console.log(addNewProduct(JSONfileName, newProduct));
