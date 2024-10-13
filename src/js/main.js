
import { setupHamburgerMenu } from './menu.js';
import { fetchAndRenderSlickData } from './slick-init.js';
import { fetchAndRenderItems } from './data-fetcher.js';

$(document).ready(function () {
    setupHamburgerMenu();
    fetchAndRenderSlickData();
    fetchAndRenderItems();
});


