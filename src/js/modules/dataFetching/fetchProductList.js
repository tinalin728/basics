import { productCard } from "../productCard.js";


export function fetchProductList(dataPath, containerId, productType, callback) {
    fetch(dataPath)
        .then(res => res.json())
        .then(data => {
            const productContainer = document.querySelector(containerId);
            productContainer.innerHTML = '';

            data[productType].forEach(product => {

                const productCardHTML = productCard(product);
                const productCardWrapper = document.createElement('div');
                productCardWrapper.innerHTML = productCardHTML;

                productContainer.appendChild(productCardWrapper);
            })

            console.log('product added to container')

            if (callback) {
                console.log('calling back');
                callback();
            }
        })
        .catch((error) => console.error('Error fetching product list:', error));
}





