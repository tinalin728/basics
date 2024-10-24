// Header Nav

export function MobileNavbar() {

    const menu = document.querySelector(".js-hamburger-menu");
    const overlay = document.querySelector(".js-overlay");

    document.querySelector(".js-toggle-menu").addEventListener("click", () => {
        menu.classList.remove('-translate-x-full');
        menu.classList.add('translate-x-0');
        overlay.classList.remove('hidden');
    });

    document.querySelector(".js-close-menu").addEventListener("click", () => {
        menu.classList.add('-translate-x-full');
        menu.classList.remove('translate-x-0');
        overlay.classList.add('hidden');
    });

    document.querySelectorAll(".js-toggle-submenu").forEach((toggle) => {
        toggle.addEventListener("click", () => {
            const submenu = toggle.closest("li").querySelector(".js-submenu");
            const arrowIcon = toggle.querySelector(".js-arrow-icon");

            submenu.classList.toggle('hidden');
            if (arrowIcon) {
                arrowIcon.classList.toggle("fa-angle-down");
                arrowIcon.classList.toggle("fa-angle-up");

            }
        });
    });
}

