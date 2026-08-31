(function () {
  const params = new URLSearchParams(window.location.search);
  const catName = params.get('cat') || '';
  const grid = document.getElementById('productGrid');
  const heading = document.getElementById('catHeading');
  const count = document.getElementById('catCount');
  const pageTitle = document.getElementById('pageTitle');

  if (typeof CATALOG === 'undefined') return;

  const imgs = CATALOG[catName];

  if (!imgs) {
    heading.textContent = 'Category not found';
    count.textContent = 'Please go back and choose a category from the products page.';
    return;
  }

  heading.textContent = catName;
  count.textContent = `${imgs.length} piece${imgs.length === 1 ? '' : 's'} in this range — all 100% wool felt, handmade in Jaipur.`;
  pageTitle.textContent = `${catName} — Parampara Exports`;

  imgs.forEach((src, i) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `<img src="${src}" alt="${catName} wool felt piece, item ${i + 1}" loading="lazy">`;
    grid.appendChild(card);
  });
})();
