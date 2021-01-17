/* eslint-disable comma-dangle */
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

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

  productsList.push({
    id: product.newProductId,
    product_name: product.newProductName,
    product_price: product.newProductPrice,
    product_amount: product.newProductAmount,
  });
  fs.writeFileSync(fileJSON, JSON.stringify(productsList), (err) => {
    if (err) {
      console.error(err);
    }
  });
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
  productsList[productsList.findIndex((element) => element.id === productId)] = {
    id: productId,
    product_name: product.newProductName,
    product_price: product.newProductPrice,
    product_amount: product.newProductAmount,
  };

  fs.writeFileSync(fileJSON, JSON.stringify(productsList), (err) => {
    if (err) {
      console.error(err);
    }
  });
}
function deleteProductById(fileJSON, productId) {
  const productsList = JSON.parse(
    fs.readFileSync(fileJSON, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      }
    })
  );
  productsList.splice(
    productsList.findIndex((element) => element.id === productId),
    1
  );

  fs.writeFileSync(fileJSON, JSON.stringify(productsList), (err) => {
    if (err) {
      console.error(err);
    }
  });
}
const JSONfileName = path.resolve(__dirname, 'products.json');
const newProduct = {
  id: 7,
  product_name: 'Кукуруза',
  product_price: 222,
  product_amount: 222,
};
console.log(deleteProductById(JSONfileName, 5));
