document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (typeof PROPERTIES !== "undefined") {
    renderProperties("featured-grid", PROPERTIES.filter(p => p.featured));
    renderProperties("all-grid", PROPERTIES);
  }
});
