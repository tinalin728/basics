
export function animation() {

    const highlight = document.querySelectorAll('.highlight');

    window.addEventListener('scroll', checkHighlight);

    function checkHighlight() {
        const triggerOffset = 250;
        const triggerBottom = (window.innerHeight - triggerOffset);
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
