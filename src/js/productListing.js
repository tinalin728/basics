import { setupHamburgerMenu } from "./modules/menu.js";

document.addEventListener("DOMContentLoaded", () => {
    setupHamburgerMenu();


    const toggleOptions = document.querySelector('.js-options-toggle');
    const optionsMenu = document.querySelector('.js-options-menu');
    const optionsArrow = document.querySelector('.js-option-icon');
    const selectedOption = document.querySelectorAll('.js-option-selected');

    toggleOptions.addEventListener('click', () => {
        optionsMenu.classList.toggle('hidden');
        optionsArrow.classList.toggle('fa-angle-up');
    })

    selectedOption.forEach((option) => {
        option.addEventListener('click', () => {
            toggleOptions.querySelector('span').textContent = option.textContent;
            optionsMenu.classList.add('hidden');
            optionsArrow.classList.remove('fa-angle-up');

        })
    })
})