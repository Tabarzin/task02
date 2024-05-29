const button = document.querySelector(".button");

function handleScroll() {
  const scrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 0) {
    button.style.display = "flex";
  } else {
    button.style.display = "none";
  }
}

window.addEventListener("scroll", handleScroll);

window.addEventListener("load", handleScroll);
window.addEventListener("DOMContentLoaded", handleScroll);
