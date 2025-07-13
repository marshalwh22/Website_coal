let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
  slides.forEach((s, i) => {
    s.classList.toggle('active', i === slideIndex);
  });
  slideIndex = (slideIndex + 1) % slides.length;
  setTimeout(showSlide, 3000);
}

window.addEventListener('load', showSlide);
