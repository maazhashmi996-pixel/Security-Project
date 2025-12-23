document.addEventListener("DOMContentLoaded", () => {
    // ===== SLIDER =====
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const leftArrow = document.querySelector(".arrow.left");
    const rightArrow = document.querySelector(".arrow.right");

    if (slider && slides.length > 0) {
        let index = 0;
        const totalSlides = slides.length;
        let interval;

        function updateSlider() {
            slider.style.transform = `translateX(-${index * 100}vw)`;
            slider.style.transition = "transform 0.8s ease-in-out";
        }

        function nextSlide() {
            index++;
            if (index >= totalSlides) index = 0;
            updateSlider();
        }

        function prevSlide() {
            index--;
            if (index < 0) index = totalSlides - 1;
            updateSlider();
        }

        function startAutoSlide() { interval = setInterval(nextSlide, 4000); }
        function stopAutoSlide() { clearInterval(interval); }

        if (rightArrow) rightArrow.addEventListener("click", () => { stopAutoSlide(); nextSlide(); startAutoSlide(); });
        if (leftArrow) leftArrow.addEventListener("click", () => { stopAutoSlide(); prevSlide(); startAutoSlide(); });

        startAutoSlide();
    }

    // ===== CLIENT TRACK =====
    const track = document.getElementById("clientsTrack");
    if (track) {
        let position = 0;
        let speed = 0.3;
        let autoMove = true;

        function animate() {
            if (autoMove) {
                position -= speed;
                track.style.transform = `translateX(${position}px)`;
            }
            requestAnimationFrame(animate);
        }
        animate();

        track.addEventListener("mouseenter", () => autoMove = false);
        track.addEventListener("mouseleave", () => autoMove = true);
    }

    // ===== FORM WHATSAPP =====
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const company = document.getElementById("company").value;
            const message = document.getElementById("message").value;
            const whatsappNumber = "923001234567";
            const text = `Name: ${name}%0AEmail: ${email}%0ACompany: ${company}%0AMessage: ${message}`;
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;
            window.open(whatsappURL, "_blank");
        });
    }

    // ===== SCROLL REVEAL =====
    const reveals = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) el.classList.add("show");
        });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
