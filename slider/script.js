import { fetchPhotos } from "./api.js";

async function displayPhotos() {
  const gallery = document.getElementById("gallery");
  const photos = await fetchPhotos();

  photos.forEach((photo) => {
    const imgElement = document.createElement("img");
    imgElement.src = photo.url;
    imgElement.alt = photo.title;
    gallery.appendChild(imgElement);
  });
}

displayPhotos();
