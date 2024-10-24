import { MobileNavbar } from './modules/MobileNavbar.js';
import { toggleDropdown } from "./modules/DropdownWithPlus.js";
import { productCarousel } from "./modules/slickCarousel.js";

document.addEventListener('DOMContentLoaded', () => {
    MobileNavbar();

    toggleDropdown('.dropdown-header', '.dropdown-detail', '.dropdown-icon');

    productCarousel('data/products.json', '#featured-category-output', 'featuredCategories')

})

