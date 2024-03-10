let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlides() {
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  slideIndex = (slideIndex + 1) % totalSlides;
  slides[slideIndex].style.display = 'block';
}

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlides();
});

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlides();
});

setInterval(showSlides, 3000); // Mude a cada 3 segundos (3000 milissegundos)