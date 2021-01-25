/* eslint-disable no-param-reassign */
/* eslint-disable comma-dangle */
/* eslint-disable no-loop-func */
/* eslint-disable no-undef */
import {
  countTotal,
  setNameProduct,
  setCountProduct,
  setPriceForOneProduct,
  setResultTotal,
} from './products-methods';
import 'regenerator-runtime/runtime';
import { getProducts, deleteProduct, addProduct, editProduct } from './api';
import { createObservableObject, createObservableArray } from '../utils/observable-structures';

let resultTotal = 0;
function checkForNumber(value) {
  return value.match(/^\d*[.]?\d+$/);
}
let productsList;
window.onload = function upload() {
  async function updateUI() {
    productsList = await getProducts();
    productsList.forEach((element) => {
      element.priceTotal = countTotal(element);
    });
    resultTotal = setResultTotal(productsList);
    const source = document.getElementById('store-template').innerHTML;
    const template = Handlebars.compile(source);

    const html = template({ productsList, resultTotal });
    document.getElementById('result-table').innerHTML = html;

    const buttonAdd = document.querySelector('.products__button-add');
    const modalAdd = document.querySelector('.modal--add');
    buttonAdd.addEventListener('click', () => {
      modalAdd.style.display = 'block';
    });
    const buttonCloseModal = modalAdd.querySelector('.modal-close');
    buttonCloseModal.addEventListener('click', () => {
      modalAdd.style.display = 'none';
    });
    window.onclick = function (event) {
      if (event.target === modalAdd) {
        modalAdd.style.display = 'none';
      }
    };
    const modalEdit = document.querySelector('.modal--edit');
    modalEdit.querySelector('.modal-close').addEventListener('click', () => {
      modalEdit.style.display = 'none';
    });
    window.onclick = function (event) {
      if (event.target === modalEdit) {
        modalEdit.style.display = 'none';
      }
    };
    const formAddProduct = document.querySelector('.add-product');
    formAddProduct.onsubmit = async (e) => {
      e.preventDefault();
      const id = productsList.length === 0 ? 1 : productsList[productsList.length - 1].id + 1;

      const product = {
        id,
        product_name: formAddProduct.querySelector('.add-product-name').value,
        product_amount: formAddProduct.querySelector('.add-product-amount').value,
        product_price: formAddProduct.querySelector('.add-product-price').value,
      };

      const isAdd = await addProduct(product);
      console.log(isAdd);
      if (isAdd) {
        alert('Продукт успешно добавлен');
        modalAdd.style.display = 'none';
      } else {
        alert('Продукт не был добавлен');
        modalAdd.style.display = 'none';
      }
      updateUI();
    };
    document.querySelectorAll('.products__button-edit').forEach((element) => {
      element.addEventListener('click', (event) => {
        const id = event.target.id.replace('edit-', '');
        const record = element.parentElement.parentElement;
        const name = record.querySelector('.table-column__input-name').value;
        const price = record.querySelector('.table-column__input-priceForOne').value;
        const amount = record.querySelector('.table-column__input-count').value;
        console.log(name);
        modalEdit.querySelector('.edit-product-name').value = name;
        modalEdit.querySelector('.edit-product-price').value = price;
        modalEdit.querySelector('.edit-product-amount').value = amount;
        modalEdit.querySelector('.edit-product-id').value = id;
        modalEdit.style.display = 'block';
      });
    });
    const formEditProduct = document.querySelector('.edit-product');
    formEditProduct.onsubmit = async (e) => {
      e.preventDefault();
      const id = Number(formEditProduct.querySelector('.edit-product-id').value);
      const name = formEditProduct.querySelector('.edit-product-name').value;
      const amount = formEditProduct.querySelector('.edit-product-amount').value;
      const price = formEditProduct.querySelector('.edit-product-price').value;
      const product = {
        id,
        product_name: name,
        product_amount: amount,
        product_price: price,
      };
      const isEdit = await editProduct(id, product);
      if (isEdit) {
        alert('Продукт успешно изменён');
        modalEdit.style.display = 'none';
      } else {
        alert('Продукт не был изменён');
        modalEdit.style.display = 'none';
      }
      updateUI();
    };
    document.querySelectorAll('.products__button-delete').forEach((element) => {
      element.addEventListener('click', async (event) => {
        const id = event.target.id.replace('delete-', '');
        const isDelete = await deleteProduct(id);
        if (isDelete) {
          alert('Продукт успешно удалён');
        } else {
          alert('Продукт не был удалён');
        }
        updateUI();
      });
    });
  }
  updateUI();
};
