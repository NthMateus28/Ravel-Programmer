//Carrosel de imagens
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');

let currentIndex = 0;
const numItems = document.querySelectorAll('.carousel-item').length;

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + numItems) % numItems;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % numItems;
    updateCarousel();
});

function updateCarousel() {
    const translateX = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
}