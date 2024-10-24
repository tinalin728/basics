import { MobileNavbar } from './modules/MobileNavbar.js';
import { fetchProductList } from "./modules/FetchProductList.js"
import { fetchFilterOptions, fetchFilterCategory } from "./modules/FetchFilter.js"
import { DropdownWithPlus } from "./modules/DropdownWithPlus.js";

document.addEventListener("DOMContentLoaded", () => {
    MobileNavbar();
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
    fetchFilterOptions('data/filters.json', [
        { filterOptType: 'sizes.letters', containerId: '#mobile-size-filter' },
        { filterOptType: 'sizes.numbers', containerId: '#mobile-size-filter' },
        { filterOptType: 'colors', containerId: '#mobile-color-filter' }
    ])

    fetchProductList('data/products.json', '#product-list', 'menProducts');

    DropdownWithPlus('.js-filter-expand', '.js-filter-menu', '.js-filter-icon');

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
})


const toggleMobileFilter = document.querySelector('.mobile-filter-toggle')
const mobileFilterMenu = document.querySelector('.mobile-filter-menu')
const closeFilterMenu = document.querySelector('.close-filter-menu')

toggleMobileFilter.addEventListener('click', () => {
    mobileFilterMenu.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
})

closeFilterMenu.addEventListener('click', () => {
    mobileFilterMenu.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');

})