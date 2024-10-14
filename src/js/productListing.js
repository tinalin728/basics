import { setupHamburgerMenu } from "./modules/menu.js";
import { fetchFilter, fetchProducts } from "./modules/data-fetcher.js"

document.addEventListener("DOMContentLoaded", () => {
    setupHamburgerMenu();
    fetchFilter();
    fetchProducts();

    // sort by options menu
    const toggleOptions = document.querySelector('.js-options-toggle');
    const optionsMenu = document.querySelector('.js-options-menu');
    const optionsArrow = document.querySelector('.js-option-icon');
    const selectedOption = document.querySelectorAll('.js-option');

    toggleOptions.addEventListener('click', () => {
        optionsMenu.classList.toggle('hidden');
        optionsArrow.classList.toggle('fa-angle-up');
    })

    selectedOption.forEach((option) => {
        option.addEventListener('click', () => {
            toggleOptions.querySelector('.js-option-selected').textContent = option.textContent;

            selectedOption.forEach((opt) => {
                opt.setAttribute('aria-selected', 'false');
            });

            option.setAttribute('aria-selected', 'true');
            optionsMenu.classList.add('hidden');
            optionsArrow.classList.remove('fa-angle-up');
        })
    })

    // side nav-filter
    const toggleFilters = document.querySelectorAll('.js-filter-expand');
    const filterMenus = document.querySelectorAll('.js-filter-menu');
    const filterMenuIcons = document.querySelectorAll('.js-filter-icon');

    toggleFilters.forEach((toggleFilter, index) => {
        toggleFilter.addEventListener('click', () => {
            filterMenus[index].classList.toggle('hidden');
            filterMenuIcons[index].classList.toggle('fa-minus');
            filterMenuIcons[index].classList.toggle('fa-plus');
        });
    });
})