export function productThumbCarousel(product, setMainImage) {

    const images = product.detailedImages || [{ image: product.image, alt: product.alt }];

    const setMainImage = (index) => {
        document.querySelector('#main-image').src = "./assets/images/menProducts/" + img_arr[index];
        updateThumbnails(index);
    }

    images.forEach((img, currentIndex) => {
        const thumb = document.createElement("img");
        thumb.src = img + images[currentIndex];
        thumb.className = "clickable w-[100px] h-[100px] object-cover mr-4 border";
        thumb.addEventListener("click", () => {
            setMainImage(currentIndex);
        })
        document.querySelector('#thumbnail-area').appendChild(thumb);
    });


}