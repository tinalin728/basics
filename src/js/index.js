
import { setupHamburgerMenu } from './modules/menu.js';
import { fetchAndRenderSlickData } from './modules/slick-init.js';
import { fetchAndRenderItems } from './modules/data-fetcher.js';


$(document).ready(function () {
    setupHamburgerMenu();
    fetchAndRenderSlickData();
    fetchAndRenderItems();
});


