//homepage
export function fetchAndRenderItems() {
    const featuredCategories = document.querySelector('#featured-category-output');

    fetch("data/products.json")
        .then(res => res.json())
        .then(data => {
            data.featuredCategories.forEach(product => {
                const categoryCard = `
                <div style="background-image: url('${product.image}');"
                    class="card col-span-12 h-[300px] w-full bg-no-repeat bg-center flex items-center justify-center shadow-md hover:scale-105 transition duration-500 ease-in md:col-span-4 cursor-pointer relative rounded-xl">
                    <a href="${product.link}"
                        class="text-white text-2xl font-bold uppercase cursor-pointer font-gothic z-10">${product.title}</a>
                </div>
                `;
                featuredCategories.innerHTML += categoryCard;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

// productlisting: filter sidebar
export function fetchFilter() {
    fetch("data/filters.json")
        .then(res => res.json())
        .then(data => {
            // categories
            const categoryList = document.querySelector('#categories-list');
            data.categories.forEach((category) => {
                //console.log('Fetched filters:', data.categories);

                const li = document.createElement('li');
                li.classList.add('pb-2');
                li.innerHTML = `<a href="#">${category}</a>`;
                categoryList.appendChild(li);
            })

            const collectionList = document.querySelector('#collection-list');
            data.collections.forEach((collection) => {
                const li = document.createElement('li');
                li.classList.add('pb-2');
                li.innerHTML = `<a href="#">${collection}</a>`;
                collectionList.appendChild(li);
            })

            // size filter
            const sizeFilter = document.querySelector('#size-filter')
            data.sizes.letters.forEach(size => {
                const div = document.createElement('div');
                div.innerHTML = `
                    <input type="checkbox" class="mr-1">
                    <label for="${size.toLowerCase()}">${size}</label>
                `;
                sizeFilter.appendChild(div);
            });

            data.sizes.numbers.forEach(size => {
                const div = document.createElement('div');
                div.innerHTML = `
                    <input type="checkbox" class="mr-1">
                    <label for="${size}"> ${size} </label>
                `;
                sizeFilter.appendChild(div);
            });

            // color filter
            const colorFilter = document.querySelector('#color-filter');
            data.colors.forEach(color => {
                const div = document.createElement('div');
                div.innerHTML = `
                 <input type="checkbox" class="mr-1">
                    <label for="${color}"> ${color} </label>
                `
                colorFilter.appendChild(div);
            })

        })
        .catch(error => console.error('Error fetching data:', error));
}

export function fetchProducts() {
    // <div id="product-card" class="product">
    //     <div class="relative group">
    //         <div
    //             class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
    //         </div>
    //         <button
    //             class="absolute top-3 right-4 text-white text-2xl opacity-100 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20">
    //             <i class="fas fa-heart"></i>
    //         </button>
    //         <div
    //             class="absolute bottom-6 right-0 left-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20">
    //             <a href="/" class="bg-white text-black py-2 px-8 rounded-full">Quick Overview</a>
    //         </div>
    //         <img src="./assets/images/model/men1.jpg" alt="Product 1" class="w-full">
    //     </div>
    //     <h3 class="mt-4">Product 1</h3>
    //     <p>Description of Product 1</p>
    //     <p class="price">$29.99</p>
    // </div>

    fetch("data/products.json")
        .then(res => res.json())
        .then(data => {
            const menProducts = document.querySelector('#product-list');
            menProducts.innerHTML = '';

            data.menProducts.forEach(product => {
                const productCard = document.createElement('div');

                productCard.innerHTML = `
                 <div class="relative group">
                    <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10"></div>
                     <button class="absolute top-3 right-4 text-white text-2xl opacity-100 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20">
                        <i class="fas fa-heart"></i>
                     </button>
                    <div class="absolute bottom-6 right-0 left-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20">
                    <a href="${product.link}" class="bg-white text-black py-2 px-8 rounded-full">Quick Overview</a>
                    </div>
                    <img src="${product.image}" alt="${product.alt}" class="w-full">
                </div>
                <h4 class="my-4">${product.name}</h4>
                <p class="price">${product.price}</p>
                `

                menProducts.appendChild(productCard);
            })

        })
}
