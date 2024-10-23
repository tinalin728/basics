//homepage
export function fetchFeaturedCardData(dataType, containerId, featuredType) {
    const featuredContainer = document.querySelector(containerId);

    fetch(dataType)
        .then(res => res.json())
        .then(data => {
            data[featuredType].forEach(product => {
                const categoryCard = `
                <div style="background-image: url('${product.image}');"
                    class="card col-span-12 h-[300px] w-full bg-no-repeat bg-center flex items-center justify-center shadow-md hover:scale-105 transition duration-500 ease-in md:col-span-4 cursor-pointer relative rounded-xl">
                    <a href="${product.link}"
                        class="text-white text-2xl font-bold uppercase cursor-pointer font-gothic z-10">${product.title}</a>
                </div>
                `;
                featuredContainer.innerHTML += categoryCard;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}


export function fetchProductList(dataPath, containerId, productType) {
    fetch(dataPath)
        .then(res => res.json())
        .then(data => {
            const productContainer = document.querySelector(containerId);
            productContainer.innerHTML = '';

            data[productType].forEach(product => {
                const productCard = document.createElement('div');

                productCard.innerHTML = `
                 <div class="relative group cursor-pointer">
                    <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10"></div>

                     <button class="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20">
                        <i class="fas fa-heart text-3xl"></i>
                     </button>

                    <div class="absolute bottom-6 right-0 left-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20">
                        <a href="${product.link}" class="bg-gold text-white rounded-full font-gothic px-8 py-2">Quick Overview</a>
                    </div>
                    <img src="${product.image}" alt="${product.alt}" class="w-full">
                </div>
                <a href="${product.link}">
                    <h4 class="my-2 hover:text-gray-600">${product.name}</h4>
                    <p class="price">${product.price}</p>
                </a>
                `
                productContainer.appendChild(productCard);
            })
        })
}





