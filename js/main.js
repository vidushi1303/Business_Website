// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

// Homepage: render a curated preview of categories (first 8 alphabetically shuffled a bit for variety)
const catGrid = document.getElementById('catGrid');
if (catGrid && typeof CATALOG !== 'undefined') {
  const featured = ['Birds', 'Cushions', 'Dream Catchers', 'Wreaths', 'Owls', 'Reindeers', 'Rabbits', 'Ginger Bread'];
  featured.forEach(cat => {
    const imgs = CATALOG[cat];
    if (!imgs || !imgs.length) return;
    const tile = document.createElement('a');
    tile.href = `category.html?cat=${encodeURIComponent(cat)}`;
    tile.className = 'cat-tile';
    tile.innerHTML = `
      <img src="${imgs[0]}" alt="${cat} — Parampara wool felt collection" loading="lazy">
      <span class="cat-tile-label">${cat}</span>
    `;
    catGrid.appendChild(tile);
  });
}

// Products hub: render ALL categories
const catGridFull = document.getElementById('catGridFull');
if (catGridFull && typeof CATALOG !== 'undefined') {
  Object.keys(CATALOG).forEach(cat => {
    const imgs = CATALOG[cat];
    if (!imgs || !imgs.length) return;
    const tile = document.createElement('a');
    tile.href = `category.html?cat=${encodeURIComponent(cat)}`;
    tile.className = 'cat-tile';
    tile.innerHTML = `
      <img src="${imgs[0]}" alt="${cat} — Parampara wool felt collection" loading="lazy">
      <span class="cat-tile-label">${cat} <small>(${imgs.length})</small></span>
    `;
    catGridFull.appendChild(tile);
  });
}

// Header shrink-on-scroll shadow (subtle)
const header = document.getElementById('siteHeader');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 6px 20px rgba(0,0,0,.18)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
}
