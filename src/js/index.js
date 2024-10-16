
import { setupHamburgerMenu } from './modules/menu.js';
import { fetchAndRenderSlickData } from './modules/slickInit.js';
import { fetchFeaturedCardData } from './modules/dataFetcher.js';


document.addEventListener("DOMContentLoaded", function () {
    setupHamburgerMenu();
    fetchAndRenderSlickData();
    fetchFeaturedCardData('data/products.json', '#featured-category-output', 'featuredCategories');
})


