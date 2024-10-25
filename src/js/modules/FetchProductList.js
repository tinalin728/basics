import { productCard } from "./productCard.js";

export function fetchProductList(dataPath, containerId, productType) {
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
        })
}





