const galleries = document.querySelectorAll("[data-gallery]");

galleries.forEach((gallery) => {
  const mainImage = gallery.querySelector(".project-card__main-image");
  const thumbs = gallery.querySelectorAll(".project-thumb");

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const nextSrc = thumb.dataset.full;
      const nextAlt = thumb.dataset.alt || thumb.querySelector("img")?.alt || "";

      if (!nextSrc || !mainImage) {
        return;
      }

      mainImage.src = nextSrc;
      mainImage.alt = nextAlt;

      thumbs.forEach((item) => item.classList.remove("is-active"));
      thumb.classList.add("is-active");
    });
  });
});

const pointerButtons = document.querySelectorAll(".button");

pointerButtons.forEach((button) => {
  button.addEventListener("pointermove", (event) => {
    const rect = button.getBoundingClientRect();
    const x = `${event.clientX - rect.left}px`;
    const y = `${event.clientY - rect.top}px`;

    button.style.setProperty("--pointer-x", x);
    button.style.setProperty("--pointer-y", y);
  });
});
