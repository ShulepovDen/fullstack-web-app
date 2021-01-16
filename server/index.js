/* eslint-disable comma-dangle */
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

function getAllProducts(fileJSON) {
  return JSON.parse(
    fs.readFileSync(fileJSON, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      }
    })
  );
}

function getProductById(fileJSON, id) {
  const productsList = JSON.parse(
    fs.readFileSync(fileJSON, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      }
    })
  );
  for (let i = 0; i < productsList.length; i += 1) {
    if (productsList[i].id === id) {
      return productsList[i];
    }
  }
}

function addNewProduct(fileJSON, newProductId, newProductName, newProductPrice, newProductAmount) {
  const productsList = JSON.parse(
    fs.readFileSync(fileJSON, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      }
    })
  );

  productsList.push({
    id: newProductId,
    product_name: newProductName,
    product_price: newProductPrice,
    product_amount: newProductAmount,
  });
  fs.writeFileSync(fileJSON, JSON.stringify(productsList), (err) => {
    if (err) {
      console.error(err);
    }
  });
}
function updateProductById(fileJSON, productid, newProductName, newProductPrice, newProductAmount) {
  const productsList = JSON.parse(
    fs.readFileSync(fileJSON, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      }
    })
  );
  productsList[productsList.findIndex((element) => element.id === productid)] = {
    id: productid,
    product_name: newProductName,
    product_price: newProductPrice,
    product_amount: newProductAmount,
  };

  fs.writeFileSync(fileJSON, JSON.stringify(productsList), (err) => {
    if (err) {
      console.error(err);
    }
  });
}
function deleteProductById(fileJSON, productid) {
  const productsList = JSON.parse(
    fs.readFileSync(fileJSON, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      }
    })
  );
  productsList.splice(
    productsList.findIndex((element) => element.id === productid),
    1
  );

  fs.writeFileSync(fileJSON, JSON.stringify(productsList), (err) => {
    if (err) {
      console.error(err);
    }
  });
}
const JSONfileName = path.resolve(__dirname, 'products.json');
console.log(deleteProductById(JSONfileName, 5));
