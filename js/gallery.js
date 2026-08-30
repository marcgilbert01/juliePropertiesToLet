const GALLERY_PHOTOS = [
  "photo-16.jpg",
  "photo-19.jpg",
  "photo-01.avif",
  "photo-06.avif",
  "photo-07.avif",
  "photo-03.avif",
  "photo-05.avif",
  "photo-15.jpg",
  "photo-12.jpg",
  "photo-13.jpg",
  "photo-14.jpg",
  "photo-08.avif",
  "photo-11.avif",
  "photo-10.avif",
  "photo-09.avif",
  "photo-04.avif",
  "photo-02.avif",
  "photo-17.jpg",
  "photo-18.jpg"
].map((f) => `images/photos/${f}`);

document.addEventListener("DOMContentLoaded", () => {
  const slideImage = document.getElementById("slideImage");
  const slideCounter = document.getElementById("slideCounter");
  const thumbStrip = document.getElementById("thumbStrip");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (!slideImage) return;

  let currentIndex = 0;

  function showSlide(index) {
    currentIndex = (index + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length;
    slideImage.src = GALLERY_PHOTOS[currentIndex];
    slideCounter.textContent = `${currentIndex + 1} / ${GALLERY_PHOTOS.length}`;
    thumbStrip.querySelectorAll("img").forEach((thumb, i) => {
      thumb.classList.toggle("active", i === currentIndex);
    });
    const activeThumb = thumbStrip.children[currentIndex];
    if (activeThumb) {
      activeThumb.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }

  GALLERY_PHOTOS.forEach((src, i) => {
    const thumb = document.createElement("img");
    thumb.src = src;
    thumb.alt = `Photo ${i + 1}`;
    thumb.addEventListener("click", () => showSlide(i));
    thumbStrip.appendChild(thumb);
  });

  prevBtn.addEventListener("click", () => showSlide(currentIndex - 1));
  nextBtn.addEventListener("click", () => showSlide(currentIndex + 1));

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") showSlide(currentIndex - 1);
    if (e.key === "ArrowRight") showSlide(currentIndex + 1);
  });

  showSlide(0);
});
