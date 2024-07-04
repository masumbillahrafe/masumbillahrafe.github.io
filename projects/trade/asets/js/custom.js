let currentSlide = 0;

function changeSlide(slideIndex) {
    const slides = document.querySelectorAll('.slide');
    currentSlide = slideIndex;
    updateSlides();
    updateBullets
}

function updateSlides() {
    const slides = document.querySelector('.slides');
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function updateBullets() {
    const bullets = document.querySelectorAll('.bullet');
    bullets.forEach((bullet, index) => {
        bullet.classList.toggle('active', index === currentSlide);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        currentSlide = (currentSlide + 1) % document.querySelectorAll('.slide').length;
        updateSlides();
        updateBullets();
    }, 3000); // Auto-slide every 3 seconds
    updateBullets();
});
