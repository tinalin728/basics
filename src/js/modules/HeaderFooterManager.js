class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <header class="font-gothic shadow-sm">
        <nav class="max-container py-6 flex justify-between items-center relative ">

            <div
                class="js-hamburger-menu fixed z-50 top-0 left-0 bg-white h-screen w-[50vw] -translate-x-full transition-transform lg:relative lg:translate-x-0 lg:w-auto lg:h-auto">
                <!-- close button -->
                <button class="js-close-menu text-2xl float-right mt-6 mr-4"><i class="fa fa-x lg:hidden"></i></button>

                <ul class="block mt-16 z-50 cursor-pointer lg:flex lg:items-center lg:justify-center lg:gap-12 lg:mt-0">
                    <li class="relative border-b-[1px] group lg:border-0">
                        <div class="navbar_menu_wrapper">
                            <a href="product_home.html">Men</a>
                            <span class="js-toggle-submenu">
                                <i class="js-arrow-icon fa fa-angle-down navbar_menu_arrow-icon"></i>
                            </span>
                        </div>
                        <!-- submenu -->
                        <div class="js-submenu hidden lg:absolute lg:-left-4 lg:shadow-lg lg:group-hover:block">
                            <ul class="lg:w-[150px]">
                                <li class="navbar_submenu">
                                    <a href="#">New
                                        Arrivals</a>
                                </li>
                                <li class="navbar_submenu">
                                    <a href=" #">Best
                                        Sellers</a>
                                </li>
                                <li class="navbar_submenu">
                                    <a href=" #">Tops</a>
                                </li>
                                <li class="navbar_submenu">
                                    <a href=" #">Bottom</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="relative border-b-[1px] group lg:border-0">
                        <div class="navbar_menu_wrapper">
                            <a href="#">Women</a>
                            <span class="js-toggle-submenu">
                                <i class="js-arrow-icon fa fa-angle-down navbar_menu_arrow-icon"></i>
                            </span>
                        </div>
                        <div class="js-submenu hidden lg:absolute lg:-left-4 lg:shadow-lg lg:group-hover:block">
                            <ul class="">
                                <li class="navbar_submenu">
                                    <a href="#">New
                                        Arrivals</a>
                                </li>
                                <li class="navbar_submenu">
                                    <a href=" #">Best
                                        Sellers</a>
                                </li>
                                <li class="navbar_submenu">
                                    <a href=" #">Tops</a>
                                </li>
                                <li class="navbar_submenu">
                                    <a href=" #">Bottom</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="relative border-b-[1px] group lg:border-0">
                        <div class="navbar_menu_wrapper">
                            <a href="#">Sales</a>
                            <span class="js-toggle-submenu">
                                <i class="js-arrow-icon fa fa-angle-down navbar_menu_arrow-icon"></i>
                            </span>
                        </div>
                        <div class="js-submenu hidden lg:absolute lg:-left-4 lg:shadow-lg lg:group-hover:block">
                            <ul class="">
                                <li class="navbar_submenu">
                                    <a href="#">Men's Sales</a>
                                </li>
                                <li class="navbar_submenu">
                                    <a href="#">Women's Sales</a>
                                </li>
                                <li class="navbar_submenu">
                                    <a href="#">Limited-Time Offers</a>
                                </li>
                                <li class="navbar_submenu">
                                    <a href="#">Basics. Clearance</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="border-b-[1px] lg:hidden">
                        <div
                            class="p-4 flex items-center justify-between bg-white hover:bg-light-beige transition duration-500 ease-in-out">
                            <a href="#">My Account</a>
                            <i class="fa fa-user text-xl text-gold"></i>
                        </div>
                    </li>
                </ul>
            </div>

            <!-- mobile nav left -->
            <div class="flex gap-6 text-xl md:gap-10 lg:hidden">
                <button class="js-toggle-menu">
                    <i class="fa fa-bars"></i>
                </button>
                <button>
                    <i class="fa fa-search"></i>
                </button>
            </div>

            <a href="index.html" class="flex-grow flex justify-center lg:grow-0">
                <img src="/src/assets/images/home/BasicsLogo.svg" alt="logo" width="120" class="lg:w-[150px]">
            </a>

            <ul class="flex gap-6 md:gap-10 lg:gap-12">
                <li class="hidden lg:block "><a href="#" class="hover:text-gold text-xl"><i
                            class="fa fa-search"></i></a></li>
                <li><a href="#" class="hover:text-gold text-xl"><i class="fa fa-heart"></i></a></li>
                <li><a href="#" class="hover:text-gold text-xl"><i class="fa fa-shopping-bag"></i></a></li>
                <li class="hidden lg:block text-xl"><a href="#" class="hover:text-gold"><i class="fa fa-user"></i></a>
                </li>
            </ul>

        </nav>
    </header>
`
    }
}

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
            <footer class="bg-dark-grey">
        <div class="max-container  py-12 md:py-14 lg:py-16">
            <div class="flex flex-col gap-8 justify-between lg:flex-row">
                <div class="flex flex-col gap-4">
                    <h3 class="text-light-grey">Subscribe to Our Newsletter</h3>
                    <form>
                        <input class="p-2 mb-4" type="email" placeholder="Enter your email" required>
                        <button class="primary-cta  py-2" type="submit">Submit</button>
                    </form>
                    <div class="text-white flex gap-4 ">
                        <a href="#" class="text-xl hover:text-gold transition duration-300"><i
                                class="fab fa-facebook-f"></i></a>
                        <a href="#" class="text-xl hover:text-gold transition duration-300"><i
                                class="fab fa-twitter"></i></a>
                        <a href="#" class="text-xl hover:text-gold transition duration-300"><i
                                class="fab fa-instagram"></i></a>
                        <a href="#" class="text-xl hover:text-gold transition duration-300"><i
                                class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="flex flex-col gap-4">
                    <h3 class="text-light-grey">Basics.</h3>
                    <ul class="text-white flex flex-col gap-2">
                        <li class="hover:text-gold transition duration-300"><a href=" about.html">About Us</a></li>
                        <li class="hover:text-gold transition duration-300"><a href="#">Contact Us</a></li>
                        <li class="hover:text-gold transition duration-300"><a href="#">Terms of Service</a></li>
                        <li class="hover:text-gold transition duration-300"><a href="#">Cookies Used</a></li>
                    </ul>
                </div>
                <div class="flex flex-col gap-4">
                    <h3 class="text-light-grey">Support</h3>
                    <ul class="text-white flex flex-col gap-2">
                        <li class="hover:text-gold transition duration-300"><a href="#">FAQ</a></li>
                        <li class="hover:text-gold transition duration-300"><a href="#">Help Center</a></li>
                        <li class="hover:text-gold transition duration-300"><a href="#">Privacy Policy</a></li>
                        <li class="hover:text-gold transition duration-300"><a href="#">Report a Problem</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
        `
    }
}


customElements.define('my-header', MyHeader)
customElements.define('my-footer', MyFooter)