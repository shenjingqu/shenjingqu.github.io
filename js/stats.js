function countBy(items, key) {
  return items.reduce((result, item) => {
    const value = typeof key === "function" ? key(item) : item[key];
    result[value] = (result[value] || 0) + 1;
    return result;
  }, {});
}

function renderSummary() {
  const owned = getOwnedCars();
  const wishlist = data.cars.filter((car) => car.status === "wishlist");
  const brandCount = Object.keys(countBy(owned, "type")).length;
  document.getElementById("summaryGrid").innerHTML = [
    ["已拥有藏品", owned.length],
    ["涉及品牌", brandCount],
    ["愿望清单", wishlist.length]
  ].map(([label, value]) => `
    <article class="summary-card" data-reveal>
      <p>${label}</p>
      <div class="summary-value">${value}</div>
    </article>
  `).join("");
}

function renderCharts() {
  const owned = getOwnedCars();
  const brandCounts = countBy(owned, (car) => data.brandLabels[car.type] || car.tag);
  const ownerCounts = countBy(owned, (car) => data.owners.find((owner) => owner.id === car.owner)?.name || car.owner);
  if (!window.Chart) {
    document.getElementById("brandChart").replaceWith(document.createTextNode("Chart.js 未加载，统计数据仍可在上方概览查看。"));
    return;
  }
  const colors = ["#d86f22", "#b7a17a", "#6d7f8f", "#8c8c8c", "#c75454", "#5f8f72"];
  new Chart(document.getElementById("brandChart"), {
    type: "pie",
    data: { labels: Object.keys(brandCounts), datasets: [{ data: Object.values(brandCounts), backgroundColor: colors }] },
    options: { plugins: { legend: { labels: { color: getComputedStyle(document.documentElement).getPropertyValue("--text") } } } }
  });
  new Chart(document.getElementById("ownerChart"), {
    type: "bar",
    data: { labels: Object.keys(ownerCounts), datasets: [{ label: "藏品数量", data: Object.values(ownerCounts), backgroundColor: "#d86f22" }] },
    options: {
      scales: { x: { ticks: { color: "#999" } }, y: { ticks: { color: "#999" }, beginAtZero: true, precision: 0 } },
      plugins: { legend: { labels: { color: "#999" } } }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("navMount").innerHTML = createNav("stats");
  setupTheme();
  renderSummary();
  renderCharts();
  setupReveal();
  setupPageTransition();
});
