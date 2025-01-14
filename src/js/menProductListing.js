import { mobileNavbar } from './modules/MobileNavbar.js';
import { fetchProductList } from "./modules/dataFetching/fetchProductList.js";
import { fetchFilterCategory } from "./modules/dataFetching/fetchFilterCategory.js";
import { fetchFilterOptions } from './modules/dataFetching/fetchFilterOptions.js';
import { dropdownWithPlus } from "./modules/DropdownWithPlus.js";
import { toggleFav } from './modules/ToggleFav.js';

document.addEventListener("DOMContentLoaded", () => {
    mobileNavbar();

    // filters
    fetchFilterCategory('src/data/filters.json',
        [
            { filterCatType: 'categories', containerId: '#categories-list' },
            { filterCatType: 'collections', containerId: '#collection-list' }
        ]
    );

    fetchFilterOptions('src/data/filters.json', [
        { filterOptType: 'sizes.letters', containerId: '#size-filter' },
        { filterOptType: 'sizes.numbers', containerId: '#size-filter' },
        { filterOptType: 'colors', containerId: '#color-filter' }
    ])
    fetchFilterOptions('src/data/filters.json', [
        { filterOptType: 'sizes.letters', containerId: '#mobile-size-filter' },
        { filterOptType: 'sizes.numbers', containerId: '#mobile-size-filter' },
        { filterOptType: 'colors', containerId: '#mobile-color-filter' }
    ])

    // product listing
    fetchProductList('src/data/products.json', '#product-list', 'menProducts', () => {
        toggleFav()
    });


    dropdownWithPlus('.js-filter-expand', '.js-filter-menu', '.js-filter-icon');

    // Mobile filter dropdown
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

    //Sort dropdown with arrow icon
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
    });

})
