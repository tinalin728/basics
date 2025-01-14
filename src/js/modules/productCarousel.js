import { productCard } from "./productCard.js";

export function productCarousel(data, targetElement) {
    const productCarouselContainer = document.querySelector(targetElement);
    //productCarouselContainer.innerHTML = '';

    data.forEach(product => {
        const cardHTML =
            `
                <div class="pr-4 cursor-pointer">
                    ${productCard(product)}
                </div>
            `
        productCarouselContainer.innerHTML += cardHTML;
    });

    $(productCarouselContainer).slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: ".arrow-prev",
        nextArrow: ".arrow-nxt",
        centerMode: false,
        infinite: false,
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
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                }
            }
        ]
    });

}

