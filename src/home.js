//Логіка сторінки Home
import { getProductsCategories, getProducts } from './js/products-api';
import {
  renderCategoriesMarkup,
  renderProductsMarkup,
} from './js/render-function';

async function renderCategories() {
  try {
    const categories = await getProductsCategories();
    const allCategories = ['All', ...categories];
    renderCategoriesMarkup(allCategories);
  } catch (error) {
    console.log(error.message);
  }
}

async function renderProducts() {
  try {
    const products = await getProducts();
    renderProductsMarkup(products);
  } catch (error) {
    console.log(error.message);
  }
}

renderCategories();
renderProducts();
