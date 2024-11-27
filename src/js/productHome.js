import { mobileNavbar } from './modules/mobileNavbar.js';
import { productCard } from "./modules/productCard.js"
import { toggleFav } from './modules/ToggleFav.js';


document.addEventListener("DOMContentLoaded", () => {
    mobileNavbar();

    fetch('data/products.json')
        .then((res) => res.json())
        .then((data) => {
            const limitedProducts = data['menProducts'].slice(0, 6);

            const productContainer = document.querySelector('#top-picks');
            productContainer.innerHTML = '';

            limitedProducts.forEach(product => {
                const productCardHTML = productCard(product);
                const productCardWrapper = document.createElement('div');
                productCardWrapper.innerHTML = productCardHTML;
                productContainer.appendChild(productCardWrapper);
            });

            toggleFav();
        })
        .catch((error) => console.error('Error fetching products:', error));
})
