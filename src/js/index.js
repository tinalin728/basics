
import { setupHamburgerMenu } from './modules/menu.js';
import { fetchAndRenderSlickData } from './modules/slick-init.js';
import { fetchAndRenderItems } from './modules/data-fetcher.js';


document.addEventListener("DOMContentLoaded", function () {
    setupHamburgerMenu();
    fetchAndRenderSlickData();
    fetchAndRenderItems('data/products.json', '#featured-category-output', 'featuredCategories');
})


