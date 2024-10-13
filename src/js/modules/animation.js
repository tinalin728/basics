
export function animation() {

    const highlight = document.querySelectorAll('.highlight');

    window.addEventListener('scroll', checkHighlight);

    function checkHighlight() {
        const triggerBottom = (window.innerHeight / 2);
        console.log(triggerBottom)

        highlight.forEach(slide => {
            const slideTop = slide.getBoundingClientRect().top;


            if (slideTop < triggerBottom) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        })
    }
    checkHighlight();
}
