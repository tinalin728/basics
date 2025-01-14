export async function fetchSimilarProducts(productId) {
    try {
        const response = await fetch('src/data/products.json');
        const data = await response.json();

        // Find the product with the given productId
        const product = data.menProducts.find(p => p.id === productId);

        // Return the similar products if the product is found
        return product ? product.similarProducts : [];
    } catch (error) {
        console.error('Error fetching similar products', error);
        return []; // Return an empty array on error
    }
}
