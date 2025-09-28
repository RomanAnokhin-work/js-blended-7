import { categoriesList, productsList, notFoundProducts, modal } from './refs';

export function renderCategoriesMarkup(arr) {
  const markup = arr
    .map(
      element => `<li class="categories__item">
   <button class="categories__btn" type="button">${element}</button>
 </li>`
    )
    .join('');

  categoriesList.innerHTML = markup;
}

export function renderProductsMarkup(arr) {
  if (!arr.length) {
    notFoundProducts.classList.add('not-found--visible');
    productsList.innerHTML = '';
    return;
  }

  notFoundProducts.classList.remove('not-found--visible');

  const markup = arr
    .map(
      element => `<li class="products__item" data-id="${element.id}">
    <img class="products__image" src="${element.images[0]}" alt="${element.title}"/>
    <p class="products__title">${element.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${element.brand}</p>
    <p class="products__category">Category: ${element.category}</p>
    <p class="products__price">Price: ${element.price} $</p>
 </li>`
    )
    .join('');

  productsList.innerHTML = markup;
}

export function createModalMarkUp(product) {
  const markup = `<img class="modal-product__img" src="${product.thumbnail}" alt="${product.description}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${product.title}</p>
        <ul class="modal-product__tags"></ul>
        <p class="modal-product__description">${product.description}</p>
        <p class="modal-product__shipping-information">Shipping: ${product.shippingInformation}</p>
        <p class="modal-product__return-policy">Return Policy: ${product.returnPolicy}</p>
        <p class="modal-product__price">Price: ${product.price} $</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>`
  modal.innerHTML = markup;
}