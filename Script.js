const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

let index = 0;
const totalSlides = slides.length;
let interval;

/* ===== FUNCTIONS ===== */
function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}vw)`;
    slider.style.transition = "transform 0.8s ease-in-out";
}

function nextSlide() {
    index++;
    if (index >= totalSlides) {
        index = 0;
    }
    updateSlider();
}

function prevSlide() {
    index--;
    if (index < 0) {
        index = totalSlides - 1;
    }
    updateSlider();
}

/* ===== AUTO SLIDE ===== */
function startAutoSlide() {
    interval = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
    clearInterval(interval);
}

/* ===== EVENTS ===== */
rightArrow.addEventListener("click", () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});

leftArrow.addEventListener("click", () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
});

/* START */
startAutoSlide();
const track = document.getElementById("clientsTrack");
track.addEventListener("mouseenter", () => track.style.animationPlayState = "paused");
track.addEventListener("mouseleave", () => track.style.animationPlayState = "running");

function slideClients(dir) {
    track.style.animationPlayState = "paused";
    track.scrollLeft += dir * 250;
}