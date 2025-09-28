//Логіка сторінки Home
import {
  getProductsCategories,
  getProducts,
  getProductByCategory,
  getProductById,
} from './js/products-api';
import {
  renderCategoriesMarkup,
  renderProductsMarkup,
  createModalMarkUp,
} from './js/render-function';
import { categoriesList, productsList, modalWindow } from './js/refs';

categoriesList.addEventListener('click', handlerClick);
productsList.addEventListener('click', handlerProductListClick);

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

async function handlerClick(event) {
  let products = [];

  const clickedBtn = event.target.closest('.categories__btn');

  if (!clickedBtn) {
    return;
  }

  const buttons = document.querySelectorAll('.categories__btn');

  buttons.forEach(button => button.classList.remove('categories__btn--active'));

  clickedBtn.classList.add('categories__btn--active');

  const categoryName = clickedBtn.textContent;

  if (categoryName === 'All') {
    products = await getProducts();
  } else {
    products = await getProductByCategory(categoryName);
  }
  renderProductsMarkup(products);
}

async function handlerProductListClick(event) {
  const productCard = event.target.closest('.products__item');
  if (!productCard) {
    return;
  }
  const productId = productCard.dataset.id;
  try {
    const product = await getProductById(productId);
    createModalMarkUp(product);
    modalWindow.classList.add('modal--is-open');
  } catch (error) {
    console.log(error.message);
  }
}

renderCategories();
renderProducts();
