export function dropdownWithPlus(toggleSelector, contentSelector, iconSelector) {
    const dropdowns = document.querySelectorAll(toggleSelector);
    const dropdownContent = document.querySelectorAll(contentSelector);
    const icon = document.querySelectorAll(iconSelector);

    dropdowns.forEach((toggleDropdown, index) => {
        toggleDropdown.addEventListener('click', () => {
            dropdownContent[index].classList.toggle('hidden');

            icon[index].classList.toggle('fa-minus');
            icon[index].classList.toggle('fa-plus');
        });
    });
}

