import { setupHamburgerMenu } from "./modules/menu.js";
import { fetchProductList } from "./modules/dataFetcher.js"
import { fetchFilterOptions, fetchFilterCategory } from "./modules/filter.js"

document.addEventListener("DOMContentLoaded", () => {
    setupHamburgerMenu();
    fetchFilterCategory('data/filters.json',
        [
            { filterCatType: 'categories', containerId: '#categories-list' },
            { filterCatType: 'collections', containerId: '#collection-list' }
        ]
    );

    fetchFilterOptions('data/filters.json', [
        { filterOptType: 'sizes.letters', containerId: '#size-filter' },
        { filterOptType: 'sizes.numbers', containerId: '#size-filter' },
        { filterOptType: 'colors', containerId: '#color-filter' }
    ])

    fetchProductList('data/products.json', '#product-list', 'menProducts');

    const toggleOptions = document.querySelectorAll('.js-options-toggle');

    toggleOptions.forEach((filterDropdown) => {
        //the menu is placed after the toggle
        const optionsMenu = filterDropdown.nextElementSibling;
        const optionsArrow = filterDropdown.querySelector('.js-option-icon');
        const options = optionsMenu.querySelectorAll('.js-option')

        filterDropdown.addEventListener('click', () => {
            optionsMenu.classList.toggle('hidden');
            optionsArrow.classList.toggle('fa-angle-up');
        })

        options.forEach((option) => {
            option.addEventListener('click', () => {
                filterDropdown.querySelector('.js-option-selected').textContent = option.textContent;

                options.forEach((opt) => opt.setAttribute('aria-selected', 'false'));
                option.setAttribute('aria-selected', 'true');

                optionsMenu.classList.add('hidden');
                optionsArrow.classList.remove('fa-angle-up')
            })
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