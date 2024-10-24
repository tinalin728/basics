import { MobileNavbar } from './modules/MobileNavbar.js';

document.addEventListener("DOMContentLoaded", function () {
    MobileNavbar();


    // highlgiht animation
    function animation() {

        const highlight = document.querySelectorAll('.highlight');
        const philosophyHeader = document.querySelector('.philosophy-header');
        const commitmentHeader = document.querySelector('.commitment-header');
        window.addEventListener('scroll', checkHighlight);

        function checkHighlight() {
            const triggerBottom = (window.innerHeight * 0.75);
            console.log(triggerBottom)

            highlight.forEach(slide => {
                const slideTop = slide.getBoundingClientRect().top;
                const philosophyHeaderBottom = philosophyHeader.getBoundingClientRect().bottom;
                const commitmentHeaderBottom = commitmentHeader.getBoundingClientRect().bottom;
                // Log the bottom positions of philosophy and commitment sections
                console.log('Philosophy Bottom:', philosophyHeaderBottom);
                console.log('Commitment Bottom:', commitmentHeaderBottom);


                if (slideTop < triggerBottom && (philosophyHeaderBottom > 0 || commitmentHeaderBottom > 0)) {
                    slide.classList.add('active');
                    slide.classList.remove('reverse');
                } else {
                    slide.classList.add('reverse');
                    slide.classList.remove('active');

                }
            })
        }
        checkHighlight();
    }
    animation()

})

