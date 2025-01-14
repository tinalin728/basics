export function toggleFav() {
    const heartButtons = document.querySelectorAll('.heart-btn');

    heartButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const heartIcon = button.querySelector('i'); // Select the icon inside the button
            if (heartIcon) {
                // Check the current class and toggle
                if (heartIcon.classList.contains('fa-regular')) {
                    heartIcon.classList.remove('fa-regular');
                    heartIcon.classList.add('fa');
                    heartIcon.style.color = 'red';
                } else {
                    heartIcon.classList.remove('fa');
                    heartIcon.classList.add('fa-regular');
                    heartIcon.style.color = '';
                }
            }
        });
    });
    console.log('Toggle event attached!');
}
