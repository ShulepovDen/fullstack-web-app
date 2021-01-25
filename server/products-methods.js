/* eslint-disable comma-dangle */
const fs = require('fs');
module.exports.getAllProducts = function getAllProducts(fileJSON) {
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
};

module.exports.getProductById = function getProductById(fileJSON, id) {
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
  if (
    productsList.findIndex((element, index, array) => {
      if (element.id === id) {
        return true;
      }
    }) !== -1
  ) {
    return productsList[
      productsList.findIndex((element, index, array) => {
        if (element.id === id) {
          return true;
        }
      })
    ];
  }
  return { error: 'wrong id' };
};

module.exports.addNewProduct = function addNewProduct(fileJSON, product) {
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
};
module.exports.updateProductById = function updateProductById(fileJSON, productId, product) {
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
};
module.exports.deleteProductById = function deleteProductById(fileJSON, productId) {
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
};
