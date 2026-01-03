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

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

/* =========================
   Hero Slider Auto Move
============================ */
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const totalSlides = slides.length;

const showSlide = index => {
    document.querySelector('.slider').style.transform = `translateX(-${index * 100}vw)`;
};

// Auto slide every 4 seconds
let heroInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 4000);

// Hero arrows
const heroLeft = document.querySelector('.hero .left');
const heroRight = document.querySelector('.hero .right');

heroRight.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
    resetHeroInterval();
});

heroLeft.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
    resetHeroInterval();
});

function resetHeroInterval() {
    clearInterval(heroInterval);
    heroInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 4000);
}
/* =========================
   Team Carousel Fixed
============================ */
const wrapper = document.querySelector('.team-wrapper');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const cards = document.querySelectorAll('.team-card');

let cardWidth = cards[0].offsetWidth + 20; // width + gap
let speed = 0.5; // pixels per frame, adjust for faster/slower
let scrollPos = 0;
let isHover = false;

// Update arrow opacity
const updateArrows = () => {
    leftArrow.style.opacity = scrollPos <= 0 ? '0.3' : '1';
    rightArrow.style.opacity = scrollPos + wrapper.offsetWidth >= wrapper.scrollWidth ? '0.3' : '1';
};

// Arrow click
rightArrow.addEventListener('click', () => {
    wrapper.scrollBy({ left: cardWidth, behavior: 'smooth' });
});

leftArrow.addEventListener('click', () => {
    wrapper.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});

// Hover pause
wrapper.addEventListener('mouseenter', () => isHover = true);
wrapper.addEventListener('mouseleave', () => isHover = false);

// Continuous scroll function
function continuousScroll() {
    if (!isHover) {
        scrollPos += speed;

        if (scrollPos + wrapper.offsetWidth >= wrapper.scrollWidth) {
            scrollPos = 0; // loop back
        }

        wrapper.scrollLeft = scrollPos;
        updateArrows();
    }

    requestAnimationFrame(continuousScroll);
}

// Initialize
updateArrows();
requestAnimationFrame(continuousScroll);

// Resize handler
window.addEventListener('resize', () => {
    cardWidth = cards[0].offsetWidth + 20;
});
