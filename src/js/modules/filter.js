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
