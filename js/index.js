let activeOwner = "all";
let activeTypes = new Set(["all"]);
let searchTerm = "";

const ownedCars = getOwnedCars();
const carGrid = document.getElementById("carGrid");
const ownerWrap = document.getElementById("ownerWrap");
const filterWrap = document.getElementById("filterWrap");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const randomBtn = document.getElementById("randomBtn");
const clearBtn = document.getElementById("clearBtn");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

function renderOwners() {
  const allCard = `
    <button class="owner-card owner-card-all ${activeOwner === "all" ? "active" : ""}" data-owner="all" data-index="ALL" data-reveal>
      <span>
        <span class="owner-name">全部藏品汇总</span>
        <span class="owner-desc">四个车库合并展示</span>
        <span class="owner-meta">${ownedCars.length} 台收藏</span>
      </span>
    </button>
  `;
  const ownerCards = data.owners.map((owner) => `
    <button class="owner-card ${owner.id === activeOwner ? "active" : ""}" data-owner="${owner.id}" data-index="${owner.index}" data-reveal>
      <span>
        <span class="owner-name">${owner.name}</span>
        <span class="owner-desc">${owner.desc}</span>
        <span class="owner-meta">${getOwnerCount(owner.id)} 台收藏</span>
      </span>
    </button>
  `).join("");
  ownerWrap.innerHTML = allCard + ownerCards;
}

function setupOwnerSelection() {
  ownerWrap.addEventListener("click", (event) => {
    const card = event.target.closest("[data-owner]");
    if (!card) return;
    activeOwner = card.dataset.owner;
    activeTypes = new Set(["all"]);
    searchTerm = "";
    searchInput.value = "";
    renderOwners();
    renderFilters();
    renderCars();
    setupReveal();
    document.getElementById("catalog").scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function renderFilters() {
  filterWrap.innerHTML = Object.entries(data.brandLabels).map(([type, label]) => `
    <button class="filter-btn ${activeTypes.has(type) ? "active" : ""}" data-type="${type}">${label}</button>
  `).join("");
}

function renderCars() {
  const selectedTypes = [...activeTypes].filter((type) => type !== "all");
  const cars = ownedCars.filter((car) => {
    const ownerMatch = activeOwner === "all" || car.owner === activeOwner;
    const typeMatch = activeTypes.has("all") || selectedTypes.includes(car.type);
    const term = `${car.name} ${car.desc} ${car.tag}`.toLowerCase();
    return ownerMatch && typeMatch && term.includes(searchTerm.toLowerCase());
  });

  carGrid.innerHTML = cars.map((car) => `
    <article class="car-card" id="car-${car.id}" data-reveal>
      <div>
        <span class="car-tag">${car.tag}</span>
        <h3 class="car-name">${car.name}</h3>
        <p class="car-desc">${car.desc}</p>
      </div>
      <div class="car-art">
        ${car.img ? `<img src="${imagePath(car.img)}" alt="${car.name}" data-lightbox="${imagePath(car.img)}" loading="lazy" decoding="async">` : `<div class="silhouette" aria-hidden="true"></div>`}
      </div>
    </article>
  `).join("");

  if (!cars.length) {
    emptyState.textContent = activeOwner === "all" ? "没有匹配的车模，换个关键词或清空筛选试试。" : "该车库暂无藏品";
  }
  emptyState.classList.toggle("show", cars.length === 0);
  setupReveal();
}

function setupFilters() {
  filterWrap.addEventListener("click", (event) => {
    const button = event.target.closest("[data-type]");
    if (!button) return;
    const type = button.dataset.type;
    if (type === "all") {
      activeTypes = new Set(["all"]);
    } else {
      activeTypes.delete("all");
      activeTypes.has(type) ? activeTypes.delete(type) : activeTypes.add(type);
      if (!activeTypes.size) activeTypes.add("all");
    }
    renderFilters();
    renderCars();
  });
  clearBtn.addEventListener("click", () => {
    activeTypes = new Set(["all"]);
    searchTerm = "";
    searchInput.value = "";
    renderFilters();
    renderCars();
  });
}

function setupSearchAndRandom() {
  searchInput.addEventListener("input", () => {
    searchTerm = searchInput.value.trim();
    renderCars();
  });
  randomBtn.addEventListener("click", () => {
    const visible = [...document.querySelectorAll(".car-card")];
    if (!visible.length) return;
    document.querySelectorAll(".car-card").forEach((card) => card.classList.remove("is-picked"));
    const picked = visible[Math.floor(Math.random() * visible.length)];
    picked.classList.add("is-picked");
    picked.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

function setupLightbox() {
  carGrid.addEventListener("click", (event) => {
    const image = event.target.closest("[data-lightbox]");
    if (!image) return;
    lightboxImg.src = image.dataset.lightbox;
    lightboxImg.alt = image.alt;
    lightbox.classList.add("show");
  });
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });
}

function closeLightbox() {
  lightbox.classList.remove("show");
  lightboxImg.removeAttribute("src");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("navMount").innerHTML = createNav("home");
  setupTheme();
  setupPageTransition();
  renderOwners();
  setupOwnerSelection();
  renderFilters();
  renderCars();
  setupFilters();
  setupSearchAndRandom();
  setupLightbox();
  setupReveal();
});
