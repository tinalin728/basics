import { mobileNavbar } from './modules/mobileNavbar.js';
import { fetchProductList } from "./modules/fetchProductList.js"
import { fetchFilterOptions, fetchFilterCategory } from "./modules/fetchFilter.js"
import { dropdownWithPlus } from "./modules/dropdownWithPlus.js";
import { toggleFav } from './modules/ToggleFav.js';

document.addEventListener("DOMContentLoaded", () => {
    mobileNavbar();

    // filters
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

    // product listing
    fetchProductList('data/products.json', '#product-list', 'menProducts', () => {
        console.log('Simple test callback executed');
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
