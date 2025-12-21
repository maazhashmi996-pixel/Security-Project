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
const track = document.getElementById("clientsTrack");

let position = 0;
let speed = 0.3; // slow continuous speed
let autoMove = true;

// CONTINUOUS MOVE
function animate() {
    if (autoMove) {
        position -= speed;
        track.style.transform = `translateX(${position}px)`;
    }
    requestAnimationFrame(animate);
}
animate();

// PAUSE ON HOVER
track.addEventListener("mouseenter", () => autoMove = false);
track.addEventListener("mouseleave", () => autoMove = true);

// ARROW CONTROL
function slideClients(dir) {
    position += dir * 200;
    track.style.transform = `translateX(${position}px)`;
}



const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // default form submit stop

    // Input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const company = document.getElementById("company").value;
    const message = document.getElementById("message").value;

    // WhatsApp number (country code + number, e.g., 923001234567)
    const whatsappNumber = "923001234567";

    // WhatsApp text
    const text = `Name: ${name}%0AEmail: ${email}%0ACompany: ${company}%0AMessage: ${message}`;

    // Open WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappURL, "_blank");
});
