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
