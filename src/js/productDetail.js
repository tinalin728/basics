import { mobileNavbar } from './modules/mobileNavbar.js';
import { dropdownWithPlus } from "./modules/dropdownWithPlus.js";
import { fetchSimilarProducts } from './modules/fetchSimilarProducts.js';
import { productCarousel } from './modules/productCarousel.js';

document.addEventListener('DOMContentLoaded', async () => {
    mobileNavbar();

    dropdownWithPlus('.dropdown-header', '.dropdown-detail', '.dropdown-icon');


    const productId = 3;
    const targetElement = '.similar-product-list';
    try {
        const similarProducts = await fetchSimilarProducts(productId);
        console.log('Similar Products:', similarProducts); // Check fetched products

        // Check if the target element exists
        const targetEl = document.querySelector(targetElement);
        console.log('Target Element:', targetEl); // Should not be null

        productCarousel(similarProducts, targetElement);
        toggleFav();

    } catch (error) {
        console.error('Failed to fetch or display similar products:', error);
    }

})

