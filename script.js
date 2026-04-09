
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("[data-lightbox]");
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-image");
  const close = document.getElementById("lightbox-close");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      img.src = link.getAttribute("href");
      img.alt = link.getAttribute("data-alt") || "Project photo";
      lightbox.classList.add("open");
    });
  });

  if (close) {
    close.addEventListener("click", () => lightbox.classList.remove("open"));
  }

  if (lightbox) {
    lightbox.addEventListener("click", e => {
      if (e.target === lightbox) lightbox.classList.remove("open");
    });
  }
});
