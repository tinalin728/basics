
// export async function fetchSimilarProducts(productId) {
//     try {
//         const response = await fetch('../../../data/products.json');
//         const data = await response.json();

//         // Find the product with the given productId
//         const product = data.menProducts.find(p => p.id === productId);

//         // Return the similar products if the product is found
//         return product ? product.similarProducts : [];
//     } catch (error) {
//         console.error('Error fetching similar products', error);
//         return []; // Return an empty array on error
//     }
// }

export async function fetchSimilarProducts(productId) {
    try {
        const response = await fetch('src/data/products.json');
        
        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        // Ensure the data has the expected structure
        if (!data.menProducts) {
            throw new Error('menProducts key is missing in the products data');
        }

        // Find the product with the given productId
        const product = data.menProducts.find(p => p.id == productId);

        // Return the similar products if the product is found
        return product ? product.similarProducts : [];
    } catch (error) {
        console.error('Error fetching similar products:', error.message);
        return []; // Return an empty array on error
    }
}
