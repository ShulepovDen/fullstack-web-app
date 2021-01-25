/* eslint-disable no-undef */
const moduleProduct = require('../script/products-methods');

test('check receipt of the count of each item', () => {
  const productElements = [
    {
      id: 1,
      name: 'Молоко',
      count: 40,
      priceForOne: 50,
      priceTotal: 2000,
    },
    {
      id: 2,
      name: 'Хлеб',
      count: 100,
      priceForOne: 20,
      priceTotal: 2000,
    },
    {
      id: 3,
      name: 'Лук',
      count: 200,
      priceForOne: 5,
      priceTotal: 1000,
    },
  ];
  moduleProduct.setCountProduct(productElements[0], 4);
  moduleProduct.setCountProduct(productElements[1], 7);
  moduleProduct.setCountProduct(productElements[2], 10);
  expect(productElements[0].count).toEqual(4);
  expect(productElements[1].count).toEqual(7);
  expect(productElements[2].count).toEqual(10);
  expect(productElements[0].count).not.toEqual('n');
  expect(productElements[1].count).not.toEqual('n');
  expect(productElements[2].count).not.toEqual('n');
  expect(productElements[0].count).not.toEqual(15);
  expect(productElements[1].count).not.toEqual(15);
  expect(productElements[2].count).not.toEqual(15);
  expect(productElements[0].count).not.toEqual('');
  expect(productElements[1].count).not.toEqual('');
  expect(productElements[2].count).not.toEqual('');
  expect(productElements[2].count).not.toEqual(null);
  expect(productElements[2].count).not.toEqual({});
  expect(productElements[2].count).not.toEqual([]);
  expect(productElements[2].count).not.toEqual();
  expect(moduleProduct.setCountProduct(productElements[0], null)).toEqual(false);
  expect(moduleProduct.setCountProduct(null, 1)).toEqual(false);
  expect(moduleProduct.setCountProduct(productElements[0], false)).toEqual(false);
  expect(moduleProduct.setCountProduct(false, 1)).toEqual(false);
  expect(moduleProduct.setCountProduct(productElements[0], 'Nope')).toEqual(false);
  expect(moduleProduct.setCountProduct('Nope', 4)).toEqual(false);
});
test('check price invoice of each item', () => {
  const productElements = [
    {
      id: 1,
      name: 'Молоко',
      count: 40,
      priceForOne: 50,
      priceTotal: 2000,
    },
    {
      id: 2,
      name: 'Хлеб',
      count: 100,
      priceForOne: 20,
      priceTotal: 2000,
    },
    {
      id: 3,
      name: 'Лук',
      count: 200,
      priceForOne: 5,
      priceTotal: 1000,
    },
  ];
  const firstTotal = moduleProduct.countTotal(productElements[0]);
  const secondTotal = moduleProduct.countTotal(productElements[1]);
  const thirdTotal = moduleProduct.countTotal(productElements[2]);
  expect(firstTotal).toBe(2000);
  expect(secondTotal).toBe(2000);
  expect(thirdTotal).toBe(1000);
  expect(firstTotal).not.toBe('n');
  expect(secondTotal).not.toBe('n');
  expect(thirdTotal).not.toBe('n');
  expect(firstTotal).not.toBe(15);
  expect(secondTotal).not.toBe(15);
  expect(thirdTotal).not.toBe(15);
  expect(firstTotal).not.toBe('');
  expect(secondTotal).not.toBe('');
  expect(thirdTotal).not.toBe('');
  expect(thirdTotal).not.toBe(null);
  expect(thirdTotal).not.toBe({});
  expect(thirdTotal).not.toBe([]);
  expect(thirdTotal).not.toBe();
  expect(moduleProduct.countTotal(null)).toEqual(false);
  expect(moduleProduct.countTotal(false)).toEqual(false);
  expect(moduleProduct.countTotal('Nope')).toEqual(false);
  expect(moduleProduct.countTotal(2)).toEqual(false);
});
test('check receipt of the price of each item', () => {
  const productElements = [
    {
      id: 1,
      name: 'Молоко',
      count: 40,
      priceForOne: 50,
      priceTotal: 2000,
    },
    {
      id: 2,
      name: 'Хлеб',
      count: 100,
      priceForOne: 20,
      priceTotal: 2000,
    },
    {
      id: 3,
      name: 'Лук',
      count: 200,
      priceForOne: 5,
      priceTotal: 1000,
    },
  ];
  moduleProduct.setPriceForOneProduct(productElements[0], 4);
  moduleProduct.setPriceForOneProduct(productElements[1], 7);
  moduleProduct.setPriceForOneProduct(productElements[2], 10);
  expect(productElements[0].priceForOne).toEqual(4);
  expect(productElements[1].priceForOne).toEqual(7);
  expect(productElements[2].priceForOne).toEqual(10);
  expect(productElements[0].priceForOne).not.toEqual('n');
  expect(productElements[1].priceForOne).not.toEqual(15);
  expect(productElements[2].priceForOne).not.toEqual('');
  expect(productElements[0].priceForOne).not.toEqual('n');
  expect(productElements[1].priceForOne).not.toEqual('n');
  expect(productElements[2].priceForOne).not.toEqual('n');
  expect(productElements[0].priceForOne).not.toEqual(15);
  expect(productElements[1].priceForOne).not.toEqual(15);
  expect(productElements[2].priceForOne).not.toEqual(15);
  expect(productElements[0].priceForOne).not.toEqual('');
  expect(productElements[1].priceForOne).not.toEqual('');
  expect(productElements[2].priceForOne).not.toEqual('');
  expect(productElements[2].priceForOne).not.toEqual(null);
  expect(productElements[2].priceForOne).not.toEqual({});
  expect(productElements[2].priceForOne).not.toEqual([]);
  expect(productElements[2].priceForOne).not.toEqual();
  expect(moduleProduct.setPriceForOneProduct(false, 4)).toEqual(false);
  expect(moduleProduct.setPriceForOneProduct(productElements[0], false)).toEqual(false);
  expect(moduleProduct.setPriceForOneProduct(null, 4)).toEqual(false);
  expect(moduleProduct.setPriceForOneProduct(productElements[0], null)).toEqual(false);
  expect(moduleProduct.setPriceForOneProduct('Nope', 4)).toEqual(false);
  expect(moduleProduct.setPriceForOneProduct(productElements[0], 'Nope')).toEqual(false);
  expect(moduleProduct.setPriceForOneProduct(2, 4)).toEqual(false);
});
test('check receipt of the full value of the goods', () => {
  const productElements = [
    {
      id: 1,
      name: 'Молоко',
      count: 40,
      priceForOne: 50,
      priceTotal: 2000,
    },
    {
      id: 2,
      name: 'Хлеб',
      count: 100,
      priceForOne: 20,
      priceTotal: 2000,
    },
    {
      id: 3,
      name: 'Лук',
      count: 200,
      priceForOne: 5,
      priceTotal: 1000,
    },
  ];
  const resultTotal = moduleProduct.setResultTotal(productElements);
  expect(resultTotal).toEqual(5000);
  expect(resultTotal).not.toEqual('n');
  expect(resultTotal).not.toEqual(10);
  expect(resultTotal).not.toEqual('');
  expect(resultTotal).not.toEqual(null);
  expect(resultTotal).not.toEqual({});
  expect(resultTotal).not.toEqual([]);
  expect(resultTotal).not.toEqual();
  expect(moduleProduct.setResultTotal(3)).toEqual(false);
  expect(moduleProduct.setResultTotal('Nope')).toEqual(false);
  expect(moduleProduct.setResultTotal(false)).toEqual(false);
  expect(moduleProduct.setResultTotal(null)).toEqual(false);
});
test('check receipt of the name of the goods', () => {
  const productElements = [
    {
      id: 1,
      name: 'Молоко',
      count: 40,
      priceForOne: 50,
      priceTotal: 2000,
    },
    {
      id: 2,
      name: 'Хлеб',
      count: 100,
      priceForOne: 20,
      priceTotal: 2000,
    },
    {
      id: 3,
      name: 'Лук',
      count: 200,
      priceForOne: 5,
      priceTotal: 1000,
    },
  ];
  moduleProduct.setNameProduct(productElements[0], 'Пельмени');
  moduleProduct.setNameProduct(productElements[1], 'Сыр');
  moduleProduct.setNameProduct(productElements[2], 'Чеснок');
  expect(productElements[0].name).toEqual('Пельмени');
  expect(productElements[1].name).toEqual('Сыр');
  expect(productElements[2].name).toEqual('Чеснок');
  expect(productElements[0].name).not.toEqual('n');
  expect(productElements[0].name).not.toEqual(10);
  expect(productElements[0].name).not.toEqual('');
  expect(productElements[1].name).not.toEqual('n');
  expect(productElements[1].name).not.toEqual(10);
  expect(productElements[1].name).not.toEqual('');
  expect(productElements[2].name).not.toEqual('n');
  expect(productElements[2].name).not.toEqual(10);
  expect(productElements[2].name).not.toEqual('');
  expect(productElements[2].name).not.toEqual(null);
  expect(productElements[2].name).not.toEqual({});
  expect(productElements[2].name).not.toEqual([]);
  expect(productElements[2].name).not.toEqual();
  expect(moduleProduct.setNameProduct(false, 'мясо')).toEqual(false);
  expect(moduleProduct.setNameProduct(productElements[0], false)).toEqual(false);
  expect(moduleProduct.setNameProduct(null, 'мясо')).toEqual(false);
  expect(moduleProduct.setNameProduct(productElements[0], null)).toEqual(false);
  expect(moduleProduct.setNameProduct(2, 'мясо')).toEqual(false);
  expect(moduleProduct.setNameProduct(productElements[0], 2)).toEqual(false);
});
