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
