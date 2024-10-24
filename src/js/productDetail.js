import { MobileNavbar } from './modules/MobileNavbar.js';
import { dropdownWithPlus } from "./modules/DropdownWithPlus.js";
import { fetchSimilarProducts } from './modules/FetchSimilarProducts.js';
import { productCarousel } from './modules/ProductCarousel.js';

document.addEventListener('DOMContentLoaded', async () => {
    MobileNavbar();

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
    } catch (error) {
        console.error('Failed to fetch or display similar products:', error);
    }

})

