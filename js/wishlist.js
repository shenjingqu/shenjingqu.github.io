function renderWishlist() {
  const cards = data.cars.map((car) => `
    <article class="wish-card" data-status="${car.status}" data-reveal>
      <span class="car-tag">${car.status === "owned" ? "已拥有" : "待入手"} · ${car.tag}</span>
      <h2 class="car-name">${car.name}</h2>
      <p class="car-desc">${car.desc}</p>
      <div class="car-art">
        ${car.img ? `<img src="${imagePath(car.img)}" alt="${car.name}" loading="lazy" decoding="async">` : `<div class="silhouette" aria-hidden="true"></div>`}
      </div>
    </article>
  `).join("");
  document.getElementById("wishlistGrid").innerHTML = cards;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("navMount").innerHTML = createNav("wishlist");
  setupTheme();
  renderWishlist();
  setupReveal();
  setupPageTransition();
});
