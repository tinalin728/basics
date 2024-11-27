export function productCard(product) {

    return `
                <div class="relative group cursor-pointer">
                    <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10"></div>

                    <button class="heart-btn absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20 cursor-pointer">
                        <i class="fa fa-heart text-3xl" style="color:white"></i>
                    </button>

                    <div class="absolute bottom-6 right-0 left-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20">
                        <a href="#" class="bg-gold text-white py-2 px-10 rounded-full">Quick Overview</a>
                    </div>

                    <img src="${product.image}" alt="${product.alt}" class="w-full">
                </div>
                
                <a href="${product.link}" class="cursor-pointer">
                    <h4 class="my-2 hover:text-gray-600">${product.name}</h4>
                    <p class="price">${product.price}</p>
                </a>
    `;
}