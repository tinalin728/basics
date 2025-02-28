
export function fetchFeatureCard(dataType, containerId, featuredType) {
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