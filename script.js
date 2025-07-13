let currentIndex = 0;
const carousel = document.getElementById("carousel");
const images = carousel.querySelectorAll("img");
const totalImages = images.length;
const imageWidth = images[0].clientWidth;

function slideTo(index) {
  carousel.style.transition = "transform 1s ease-in-out";
  carousel.style.transform = `translateX(-${index * imageWidth}px)`;
}

function resetSlide() {
  carousel.style.transition = "none";
  carousel.style.transform = `translateX(0)`;
  currentIndex = 0;
}

function nextSlide() {
  currentIndex++;
  slideTo(currentIndex);

  if (currentIndex === totalImages - 1) {
    setTimeout(() => {
      resetSlide();
    }, 1000);
  }
}

setInterval(nextSlide, 4000);

window.addEventListener("resize", () => {
  carousel.style.transition = "none";
  carousel.style.transform = `translateX(-${currentIndex * images[0].clientWidth}px)`;
});
