

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
                    <img src="${product.image}" alt="${product.alt}" class="w-full h-full object-cover" />
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
