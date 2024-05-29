import { fetchPhotos } from "./api.js";

async function displayPhotos() {
  const slider = document.getElementById("slider");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const photos = await fetchPhotos();

  let currentIndex = 0;
  const imagesPerSlide = 3;
  const totalSlides = Math.ceil(photos.length / imagesPerSlide);

  function showSlide(index) {
    const slides = slider.querySelectorAll(".slide");
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    if (slides[index]) {
      slides[index].classList.add("active");
    }
    updateButtons();
  }

  function updateButtons() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === totalSlides - 1;

    prevBtn.classList.toggle("disabled", prevBtn.disabled);
    nextBtn.classList.toggle("disabled", nextBtn.disabled);
  }

  function nextSlide() {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      showSlide(currentIndex);
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      showSlide(currentIndex);
    }
  }

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  for (let i = 0; i < photos.length; i += imagesPerSlide) {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    const imagesInSlide = photos.slice(i, i + imagesPerSlide);
    imagesInSlide.forEach((photo) => {
      const card = document.createElement("div");
      card.classList.add("card");
      const imgElement = document.createElement("img");
      imgElement.src = photo.url;
      imgElement.alt = photo.title;
      const titleElement = document.createElement("h3");
      titleElement.textContent = photo.title;
      card.appendChild(imgElement);
      card.appendChild(titleElement);
      slide.appendChild(card);
    });
    slider.appendChild(slide);
  }

  updateButtons();
  showSlide(currentIndex);
}

displayPhotos();
