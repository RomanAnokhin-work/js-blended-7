import { categoriesList, productsList } from './refs';

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
