

// homepage: fetch data and initialize slick slider
export function fetchAndRenderSlickData() {
    const heroSliders = document.querySelector('#hero-slider-output');
    const newArrivalsList = document.querySelector('#featured-list-output');
    const smPosts = document.querySelector('#sm-posts-output');

    fetch("data/products.json")

        .then(res => res.json())
        .then(data => {
            //console.log('Fetched Data:', data);

            // hero
            data.heroSlides.forEach(product => {
                const heroContent = `
                <div class="relative h-[80vh]">
                    <img src="${product.image}" alt="${product.alt}" class="w-full object-cover" />
                    <div class="absolute inset-0 h-full flex flex-col items-center justify-center text-center text-white p-5 bg-black bg-opacity-30">
                        <h3 class="text-light-blue mb-2 italic font-medium">${product.tagline}</h3>
                        <h1> <span class="text-5xl md:text-6xl lg:text-7xl uppercase"> ${product.title}</span> <br>${product.subtitle}</h1>
                        <div class="mt-6 flex flex-col gap-4 justify-center md:flex-row">
                            <a href="${product.link}" class="primary-cta">Shop Women</a>
                            <a href="${product.link}" class="primary-cta">Shop Men</a>
                        </div>
                    </div>
                </div>`;

                heroSliders.innerHTML += heroContent;
            });

            console.log('Hero Sliders Element:', heroSliders);
            // initialize slick after rendering
            $(heroSliders).slick({
                slidesToShow: 1,
                infinite: true,
                autoplay: false,
                speed: 1500,
                prevArrow: '.button--prev',
                nextArrow: '.button--next'
            });
            console.log('Slick Slider Initialized');

            // New arrivals product list
            data.featuredProducts.forEach(product => {
                const productCard = `
                <div class="pr-4 cursor-pointer">
                    <div class="relative group cursor-pointer">
                        <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10"></div>

                        <button class="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20 cursor-pointer">
                        <i class="fas fa-heart text-3xl"></i>
                        </button>

                        <div class="absolute bottom-6 right-0 left-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20">
                        <a href="${product.link}" class="bg-gold text-white py-2 px-10 rounded-full">Quick Overview</a>
                        </div>

                        <img src="${product.image}" alt="${product.alt}" class="w-full">
                    </div>
                    <a href="${product.link}" class="cursor-pointer">
                        <h4 class="my-2 hover:text-gray-600">${product.name}</h4>
                        <p class="price">${product.price}</p>
                    </a>
                </div>`;
                newArrivalsList.innerHTML += productCard;
            });

            $(newArrivalsList).slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                prevArrow: ".arrow-prev",
                nextArrow: ".arrow-nxt",
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });

            // social media posts
            data.instagramPosts.forEach(post => {
                const postCard = `
                <div class="">
                    <div class="relative w-[150px] h-[150px] md:h-[200px] md:w-[200px]">
                        <img class="w-full h-full object-cover" src="${post.image}" alt="${post.alt}">
                        <div class="overlay absolute inset-0 bg-black flex justify-center items-center z-10 opacity-0 hover:opacity-50 transition duration-500">
                            <a class="text-white" href="${post.link}">
                                <i class="fa-brands fa-2x fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>`;
                smPosts.innerHTML += postCard;
            });

            $(smPosts).slick({
                slidesToShow: 5,
                infinite: true,
                autoplay: false,
                speed: 1500,
                responsive: [
                    {
                        breakpoint: 1125,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 880,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                ]
            });
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
}
