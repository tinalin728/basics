//homepage
export function fetchAndRenderItems(dataType, containerId, featuredType) {
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


// productlisting: filter sidebar
export function fetchFilterCategory(dataType, categoryMapping) {
    fetch(dataType)
        .then(res => res.json())
        .then(data => {
            categoryMapping.forEach(({ filterCatType, containerId }) => {
                const container = document.querySelector(containerId);

                data[filterCatType].forEach(category => {
                    const li = document.createElement('li');
                    li.classList.add('pb-2');
                    li.innerHTML = `<a href="#">${category}</a>`;
                    container.appendChild(li);
                });
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

export function fetchFilterOptions(dataPath, filterOptMapping) {
    fetch(dataPath)
        .then(res => res.json())
        .then(data => {
            filterOptMapping.forEach(({ filterOptType, containerId }) => {
                const containerFilter = document.querySelector(containerId);

                // navigate nested objects dynamically
                //filterOptType.split('.') = ['sizes', 'letters']
                //reduce method processes the array (['sizes', 'letters']) one item at a time
                const filterOptions = filterOptType.split('.').reduce((obj, key) => obj ? obj[key] : undefined, data);


                filterOptions.forEach((filterOpt) => {
                    const div = document.createElement('div');
                    div.innerHTML = `
                    <input type="checkbox" class="mr-1">
                    <label for="${filterOpt}"> ${filterOpt} </label>`;
                    containerFilter.appendChild(div);
                });
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}


export function fetchProducts(dataPath, containerId, productType) {
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
                        <a href="${product.link}" class="bg-gold text-white py-2 px-10 rounded-full">Quick Overview</a>
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
