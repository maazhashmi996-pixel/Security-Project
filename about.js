/* =========================
   About Sections Scroll Reveal
============================ */
const sections = document.querySelectorAll('.about-section');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('show');
        }
    });
};

// Trigger on scroll and on page load
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


/* =========================
   Team Carousel
============================ */
const wrapper = document.querySelector('.team-wrapper');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let scrollPosition = 0;
const cardWidth = 300; // approximate card width + gap

// Calculate max scroll dynamically
const updateMaxScroll = () => wrapper.scrollWidth - wrapper.offsetWidth;

// Update arrow opacity based on scroll
const updateArrows = () => {
    leftArrow.style.opacity = scrollPosition === 0 ? '0.3' : '1';
    rightArrow.style.opacity = scrollPosition >= updateMaxScroll() ? '0.3' : '1';
};

// Slide right
rightArrow.addEventListener('click', () => {
    scrollPosition += cardWidth;
    const maxScroll = updateMaxScroll();
    if (scrollPosition > maxScroll) scrollPosition = maxScroll;
    wrapper.style.transform = `translateX(-${scrollPosition}px)`;
    updateArrows();
});

// Slide left
leftArrow.addEventListener('click', () => {
    scrollPosition -= cardWidth;
    if (scrollPosition < 0) scrollPosition = 0;
    wrapper.style.transform = `translateX(-${scrollPosition}px)`;
    updateArrows();
});

// Update arrows on window resize
window.addEventListener('resize', () => {
    const maxScroll = updateMaxScroll();
    if (scrollPosition > maxScroll) scrollPosition = maxScroll;
    wrapper.style.transform = `translateX(-${scrollPosition}px)`;
    updateArrows();
});

// Initialize arrow state
updateArrows();

