import"./assets/styles-JE8YjOlG.js";import{a as c}from"./assets/vendor-CWxt7QI6.js";c.defaults.baseURL="https://dummyjson.com";async function p(){try{return(await c.get("/products/category-list")).data}catch(t){console.log(t.message)}}async function i(t=1){try{return(await c.get(`/products?limit=12&skip=${(t-1)*12}`)).data.products}catch(o){console.log(o.message)}}async function g(t="smartphones"){try{return(await c.get(`/products/category/${t}`)).data.products}catch(o){console.log(o.message)}}async function m(t=1){try{const o=await c.get(`/products/${t}`);return console.log(o.data),o.data}catch(o){console.log(o.message)}}const d=document.querySelector(".categories"),r=document.querySelector(".products"),n=document.querySelector(".not-found"),_=document.querySelector(".modal-product"),y=document.querySelector(".modal");function b(t){const o=t.map(s=>`<li class="categories__item">
   <button class="categories__btn" type="button">${s}</button>
 </li>`).join("");d.innerHTML=o}function l(t){if(!t.length){n.classList.add("not-found--visible"),r.innerHTML="";return}n.classList.remove("not-found--visible");const o=t.map(s=>`<li class="products__item" data-id="${s.id}">
    <img class="products__image" src="${s.images[0]}" alt="${s.title}"/>
    <p class="products__title">${s.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${s.brand}</p>
    <p class="products__category">Category: ${s.category}</p>
    <p class="products__price">Price: ${s.price} $</p>
 </li>`).join("");r.innerHTML=o}function f(t){const o=`<img class="modal-product__img" src="${t.thumbnail}" alt="${t.description}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${t.title}</p>
        <ul class="modal-product__tags"></ul>
        <p class="modal-product__description">${t.description}</p>
        <p class="modal-product__shipping-information">Shipping: ${t.shippingInformation}</p>
        <p class="modal-product__return-policy">Return Policy: ${t.returnPolicy}</p>
        <p class="modal-product__price">Price: ${t.price} $</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>`;_.innerHTML=o}d.addEventListener("click",L);r.addEventListener("click",k);async function $(){try{const o=["All",...await p()];b(o)}catch(t){console.log(t.message)}}async function h(){try{const t=await i();l(t)}catch(t){console.log(t.message)}}async function L(t){let o=[];const s=t.target.closest(".categories__btn");if(!s)return;document.querySelectorAll(".categories__btn").forEach(u=>u.classList.remove("categories__btn--active")),s.classList.add("categories__btn--active");const a=s.textContent;a==="All"?o=await i():o=await g(a),l(o)}async function k(t){const o=t.target.closest(".products__item");if(!o)return;const s=o.dataset.id;try{const e=await m(s);f(e),y.classList.add("modal--is-open")}catch(e){console.log(e.message)}}$();h();
//# sourceMappingURL=index.js.map
