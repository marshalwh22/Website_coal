let index = 0;
const images = document.querySelectorAll(".carousel-img");

function showNextImage() {
  images.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) img.classList.add("active");
  });
  index = (index + 1) % images.length;
}

setInterval(showNextImage, 3000);
