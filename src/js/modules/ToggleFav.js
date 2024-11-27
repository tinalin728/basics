export function toggleFav() {
    const heartButtons = document.querySelectorAll('.heart-btn');

    heartButtons.forEach((button) => {
        button.addEventListener('click', () => {

            const heartIcon = button.querySelector('i');
            if (heartIcon) {
                const currentColor = heartIcon.style.color;
                heartIcon.style.color = currentColor === 'red' ? 'white' : 'red'
            }
        });

        console.log('toggled!')
    });
}
