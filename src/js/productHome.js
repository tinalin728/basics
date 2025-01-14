import { mobileNavbar } from './modules/MobileNavbar.js';
import { productCard } from "./modules/ProductCard.js"
import { toggleFav } from './modules/ToggleFav.js';


document.addEventListener("DOMContentLoaded", () => {
    mobileNavbar();

    fetch('src/data/products.json')
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
