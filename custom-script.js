let currentIndex = 0;
const slides = document.querySelector('.slider').children;

function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    updateSlider();
}

function updateSlider() {
    const translateValue = -currentIndex * 100 + '%';
    document.querySelector('.slider').style.transform = 'translateX(' + translateValue + ')';
}

// Optional: Auto slide change every 3 seconds
setInterval(() => {
    changeSlide(1);
}, 3000);
