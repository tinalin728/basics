
import { setupHamburgerMenu } from './menu.js';
import { fetchAndRenderSlickData } from './slick-init.js';
import { fetchAndRenderItems } from './data-fetcher.js';
import { animation } from './animation.js';


$(document).ready(function () {
    setupHamburgerMenu();
    fetchAndRenderSlickData();
    fetchAndRenderItems();
    animation();
});


