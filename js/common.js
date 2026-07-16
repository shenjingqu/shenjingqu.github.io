const data = window.COLLECTION_DATA;

// 公共工具：所有页面都从同一份前端数据读取藏品。
function getOwnedCars() {
  return data.cars.filter((car) => car.status === "owned");
}

function getOwnerCount(ownerId) {
  return data.cars.filter((car) => car.owner === ownerId && car.status === "owned").length;
}

function imagePath(fileName) {
  return fileName ? `cars/${fileName}` : "";
}

function setupTheme() {
  // 主题设置保存在 localStorage，刷新后保持用户选择。
  const savedTheme = localStorage.getItem("collection-theme") || "dark";
  document.documentElement.dataset.theme = savedTheme;
  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.textContent = savedTheme === "dark" ? "浅色" : "深色";
    button.addEventListener("click", () => {
      const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;
      localStorage.setItem("collection-theme", nextTheme);
      document.querySelectorAll("[data-theme-toggle]").forEach((item) => {
        item.textContent = nextTheme === "dark" ? "浅色" : "深色";
      });
    });
  });
}

function setupReveal() {
  // 页面滚动到可视区域后，为卡片添加渐入动画。
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll("[data-reveal]").forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 45, 260)}ms`;
    observer.observe(element);
  });
}

function setupPageTransition() {
  document.body.classList.add("page-ready");
  document.querySelectorAll("a[href$='.html'], a[href='/']").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (link.target || link.origin !== location.origin) return;
      event.preventDefault();
      document.body.classList.remove("page-ready");
      setTimeout(() => { location.href = link.href; }, 160);
    });
  });
}

function setupLoading() {
  window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });
}

function createNav(active = "home") {
  return `
    <nav class="top-nav" aria-label="主导航">
      <div class="nav-inner">
        <a class="brand" href="index.html">1:64 Collection</a>
        <div class="nav-links">
          <a class="${active === "home" ? "active" : ""}" href="index.html#owners">车库</a>
          <a class="${active === "home" ? "active" : ""}" href="index.html#catalog">车型</a>
          <a class="${active === "stats" ? "active" : ""}" href="stats.html">统计</a>
          <a class="${active === "wishlist" ? "active" : ""}" href="wishlist.html">愿望</a>
          <button class="theme-toggle" type="button" data-theme-toggle>浅色</button>
        </div>
      </div>
    </nav>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  setupTheme();
  setupLoading();
  setupPageTransition();
});
