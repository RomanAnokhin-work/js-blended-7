import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com';

export async function getProductsCategories() {
  try {
    const response = await axios.get('/products/category-list');

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getProducts(currentPage = 1) {
  try {
    const response = await axios.get(
      `/products?limit=12&skip=${(currentPage - 1) * 12}`
    );

    return response.data.products;
  } catch (error) {
    console.log(error.message);
  }
}
