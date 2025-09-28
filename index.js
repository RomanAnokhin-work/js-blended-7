import"./assets/styles-JE8YjOlG.js";import{a as o}from"./assets/vendor-CWxt7QI6.js";o.defaults.baseURL="https://dummyjson.com";async function c(){try{return(await o.get("/products/category-list")).data}catch(s){console.log(s.message)}}async function a(s=1){try{return(await o.get(`/products?limit=12&skip=${(s-1)*12}`)).data.products}catch(r){console.log(r.message)}}const e=document.querySelector(".categories"),n=document.querySelector(".products");function i(s){const r=s.map(t=>`<li class="categories__item">
   <button class="categories__btn" type="button">${t}</button>
 </li>`).join("");e.innerHTML=r}function p(s){const r=s.map(t=>`<li class="products__item" data-id="${t.id}">
    <img class="products__image" src="${t.images[0]}" alt="${t.title}"/>
    <p class="products__title">${t.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${t.brand}</p>
    <p class="products__category">Category: ${t.category}</p>
    <p class="products__price">Price: ${t.price} $</p>
 </li>`).join("");n.innerHTML=r}async function u(){try{const r=["All",...await c()];i(r)}catch(s){console.log(s.message)}}async function d(){try{const s=await a();p(s)}catch(s){console.log(s.message)}}u();d();
//# sourceMappingURL=index.js.map
