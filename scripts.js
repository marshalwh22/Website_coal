
document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('carouselTrack');
  const slides = track.children;
  const total = slides.length;
  let index = 0;
  function nextSlide() {
    index = (index + 1) % total;
    track.style.transform = `translateX(-${100 * index}%)`;
  }
  setInterval(nextSlide, 5000);
});
