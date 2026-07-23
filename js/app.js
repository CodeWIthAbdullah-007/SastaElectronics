const ICONS = {
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  heartFilled: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  starEmpty: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  chevronDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>',
  chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>',
  arrowUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>',
  package: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  mapPin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  filter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
  tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
};

const Cart = {
  get() { const d = localStorage.getItem('sasta_cart'); return d ? JSON.parse(d) : []; },
  save(items) { localStorage.setItem('sasta_cart', JSON.stringify(items)); this.updateBadge(); },
  add(productId, qty = 1) {
    const items = this.get();
    const existing = items.find(i => i.id === productId);
    if (existing) { existing.qty += qty; } else { items.push({ id: productId, qty }); }
    this.save(items);
  },
  remove(productId) { this.save(this.get().filter(i => i.id !== productId)); },
  updateQty(productId, qty) { const items = this.get(); const item = items.find(i => i.id === productId); if (item) { item.qty = Math.max(1, qty); this.save(items); } },
  clear() { this.save([]); },
  count() { return this.get().reduce((s, i) => s + i.qty, 0); },
  total() { return this.get().reduce((s, i) => { const p = getProductById(i.id); return s + (p ? p.price * i.qty : 0); }, 0); },
  updateBadge() {
    const count = this.count();
    document.querySelectorAll('.cart-badge').forEach(b => { b.textContent = count; b.style.display = count > 0 ? 'flex' : 'none'; });
  }
};

const Wishlist = {
  get() { return JSON.parse(localStorage.getItem('sasta_wishlist') || '[]'); },
  save(items) { localStorage.setItem('sasta_wishlist', JSON.stringify(items)); this.updateBadge(); },
  toggle(productId) {
    let items = this.get();
    if (items.includes(productId)) { items = items.filter(id => id !== productId); showToast('Removed from wishlist', 'info'); }
    else { items.push(productId); showToast('Added to wishlist', 'success'); }
    this.save(items); return items.includes(productId);
  },
  has(productId) { return this.get().includes(productId); },
  remove(productId) { this.save(this.get().filter(id => id !== productId)); },
  count() { return this.get().length; },
  updateBadge() {
    const count = this.count();
    document.querySelectorAll('.wishlist-badge').forEach(b => { b.textContent = count; b.style.display = count > 0 ? 'flex' : 'none'; });
  }
};

function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) { container = document.createElement('div'); container.className = 'toast-container'; document.body.appendChild(container); }
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  let icon = ICONS.info;
  if (type === 'success') icon = ICONS.check;
  if (type === 'error') icon = ICONS.close;
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-message">${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(100%) scale(0.9)'; toast.style.transition = 'all 0.3s ease'; setTimeout(() => toast.remove(), 300); }, 3000);
}

function renderStars(rating) {
  let html = '<div class="stars">';
  for (let i = 1; i <= 5; i++) { html += i <= Math.round(rating) ? ICONS.star : ICONS.starEmpty; }
  html += '</div>'; return html;
}

function renderProductCard(product) {
  const discount = product.originalPrice ? getDiscount(product.originalPrice, product.price) : 0;
  const isWishlisted = Wishlist.has(product.id);
  let badgeHtml = '';
  if (product.badge) { const bc = product.badge === 'Sale' ? 'badge-danger' : product.badge === 'New' ? 'badge-accent' : 'badge-primary'; badgeHtml = `<span class="badge ${bc}">${product.badge}</span>`; }
  if (discount > 0) badgeHtml += `<span class="badge badge-accent">-${discount}%</span>`;
  return `<article class="product-card">
    <div class="product-card-image">
      <a href="product.html?id=${product.id}"><img src="${product.image}" alt="${product.name}" loading="lazy"></a>
      <div class="product-card-badges">${badgeHtml}</div>
      <div class="product-card-actions">
        <button onclick="toggleWishlist('${product.id}', this)" class="${isWishlisted ? 'wishlisted' : ''}" title="Wishlist">${isWishlisted ? ICONS.heartFilled : ICONS.heart}</button>
        <a href="product.html?id=${product.id}" title="View">${ICONS.eye}</a>
      </div>
    </div>
    <div class="product-card-body">
      <div class="product-card-category">${getCategoryName(product.category)}</div>
      <h3 class="product-card-title"><a href="product.html?id=${product.id}">${product.name}</a></h3>
      <div class="product-card-rating">${renderStars(product.rating)}<span class="rating-count">(${product.reviews})</span></div>
      <div class="product-card-price">
        <span class="price-current">${formatPrice(product.price)}</span>
        ${product.originalPrice ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` : ''}
      </div>
      <button class="product-card-cart-btn" onclick="addToCart('${product.id}')">Add to Cart</button>
    </div>
  </article>`;
}

function toggleWishlist(productId, btn) { const isNow = Wishlist.toggle(productId); if (btn) { btn.classList.toggle('wishlisted', isNow); btn.innerHTML = isNow ? ICONS.heartFilled : ICONS.heart; } }
function addToCart(productId) { Cart.add(productId); showToast(`${getProductById(productId).name} added to cart`, 'success'); }
function getCategoryName(catId) { const cat = CATEGORIES_DATA.find(c => c.id === catId); return cat ? cat.name : catId; }

function getCategoryIcon(iconName) {
  const icons = {
    ac: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="10" rx="2"/><path d="M6 17v4M12 17v4M18 17v4"/></svg>',
    fridge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="4" y1="10" x2="20" y2="10"/><line x1="10" y1="6" x2="10" y2="6.01"/><line x1="10" y1="14" x2="10" y2="14.01"/></svg>',
    washer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="2"/><circle cx="12" cy="13" r="5"/><circle cx="12" cy="13" r="2"/></svg>',
    tv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="15" rx="2"/><polyline points="17 2 12 7 7 2"/></svg>',
    mobile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18.01"/></svg>',
    fan: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="2"/><path d="M12 2C6.5 2 2 6.5 2 12M12 22c5.5 0 10-4.5 10-10M2 12c0 5.5 4.5 10 10 10M22 12c0-5.5-4.5-10-10-10"/></svg>',
    kitchen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8h1a4 4 0 0 0 0-8h-1"/><path d="M2 8h16"/><path d="M6 1v6M10 1v6M14 1v6"/><path d="M2 12h16l-1 10H3L2 12z"/></svg>',
    laptop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="12" rx="2"/><line x1="2" y1="20" x2="22" y2="20"/></svg>',
    audio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>',
    camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
    cooler: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/></svg>',
    freezer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="12" x2="21" y2="12"/></svg>'
  };
  return icons[iconName] || icons.ac;
}

function renderHeader(activePage) {
  const links = [{ href: 'index.html', label: 'Home', key: 'home' }, { href: 'shop.html', label: 'Shop', key: 'shop' }, { href: 'categories.html', label: 'Categories', key: 'categories' }, { href: 'about.html', label: 'About', key: 'about' }, { href: 'contact.html', label: 'Contact', key: 'contact' }];
  const navHtml = links.map(l => `<a href="${l.href}" class="${activePage === l.key ? 'active' : ''}">${l.label}</a>`).join('');

  // Check synced header data (set by header-sync.js)
  const hasAvatar = localStorage.getItem('header_hasAvatar') === 'true';
  const headerAvatar = localStorage.getItem('header_avatar');
  const headerUserName = localStorage.getItem('header_userName') || '';

  // Also check localStorage user
  const localUser = JSON.parse(localStorage.getItem('sasta_current_user') || 'null');
  const isLoggedIn = localUser || hasAvatar;

  let userAvatarHtml = `<a href="login.html" class="header-action-btn" title="Account" style="background:var(--bg-secondary)">${ICONS.user}</a>`;

  if (isLoggedIn) {
    const userId = localUser ? (localUser.id || localUser.email) : 'user';
    const savedAvatar = localStorage.getItem('user_avatar_' + userId);
    const userName = headerUserName || localUser?.user_metadata?.first_name || localUser?.firstName || localUser?.email?.split('@')[0] || 'User';
    const initial = userName.charAt(0).toUpperCase();

    let avatarContent;
    if (savedAvatar || headerAvatar) {
      avatarContent = `<img src="${savedAvatar || headerAvatar}" alt="${userName}" style="width:100%;height:100%;border-radius:50%;object-fit:cover">`;
    } else {
      avatarContent = initial;
    }

    userAvatarHtml = `
      <a href="profile.html" class="header-action-btn" title="${userName}" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;font-weight:700;font-size:0.9rem;border:none;overflow:hidden;padding:0;flex-shrink:0">
        ${avatarContent}
      </a>
      <a href="profile.html" class="header-action-btn" title="${userName}" style="width:auto;padding:0 14px;border-radius:var(--radius-full);font-size:0.82rem;font-weight:600;gap:6px;max-width:120px;background:var(--bg-secondary);border:1.5px solid var(--border-light)">
        <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${userName}</span>
      </a>`;
  }

  return `<header class="site-header" id="siteHeader">
    <div class="header-inner">
      <a href="index.html" class="header-logo"><img src="assets/logo.svg" alt="SastaElectronics"><span>SastaElectronics</span></a>
      <nav class="header-nav">${navHtml}</nav>
      <div class="header-search">${ICONS.search}<input type="text" placeholder="Search products..." id="headerSearchInput" autocomplete="off"></div>
      <div class="header-actions">
        <a href="wishlist.html" class="header-action-btn" title="Wishlist">${ICONS.heart}<span class="action-badge wishlist-badge" style="display:none">0</span></a>
        <a href="cart.html" class="header-action-btn" title="Cart">${ICONS.cart}<span class="action-badge cart-badge" style="display:none">0</span></a>
        ${userAvatarHtml}
        <div class="mobile-toggle" id="mobileToggle" onclick="toggleMobileMenu()"><span></span><span></span><span></span></div>
      </div>
    </div>
  </header>
  <div class="mobile-nav" id="mobileNav">${navHtml}<a href="wishlist.html">Wishlist</a><a href="cart.html">Cart</a><a href="${isLoggedIn ? 'profile.html' : 'login.html'}">${isLoggedIn ? 'My Profile' : 'My Account'}</a></div>`;
}

function toggleMobileMenu() {
  const nav = document.getElementById('mobileNav');
  const toggle = document.getElementById('mobileToggle');
  if (nav && toggle) {
    nav.classList.toggle('open');
    toggle.classList.toggle('active');
  }
}

function renderFooter() {
  return `<footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="header-logo"><img src="assets/logo.svg" alt="SastaElectronics"><span>SastaElectronics</span></a>
          <p>Pakistan's trusted destination for premium electronics at the best prices. Quality products, genuine warranty, and fast delivery across the country.</p>
          <div class="footer-social" style="margin-top:20px">
            <a href="#" title="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="#" title="Twitter"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>
            <a href="#" title="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
          </div>
        </div>
        <div>
          <h4 class="footer-title">Quick Links</h4>
          <div class="footer-links">
            <a href="shop.html">All Products</a><a href="categories.html">Categories</a><a href="cart.html">Shopping Cart</a><a href="wishlist.html">Wishlist</a><a href="orders.html">Track Order</a>
          </div>
        </div>
        <div>
          <h4 class="footer-title">Support</h4>
          <div class="footer-links">
            <a href="faq.html">FAQ</a><a href="contact.html">Contact Us</a><a href="about.html">About Us</a><a href="privacy.html">Privacy Policy</a><a href="terms.html">Terms & Conditions</a>
          </div>
        </div>
        <div>
          <h4 class="footer-title">Contact Info</h4>
          <div class="footer-links">
            <a href="tel:+923001234567">${ICONS.phone} +92 300 1234567</a>
            <a href="mailto:mabdullahanwar85@gmail.com">${ICONS.mail} mabdullahanwar85@gmail.com</a>
            <a href="#">${ICONS.mapPin} Karachi, Pakistan</a>
            <a href="#">${ICONS.clock} Mon-Sat: 10AM - 10PM</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p> 2026 SastaElectronics. All rights reserved.</p>
        <p>Designed with passion in Pakistan</p>
      </div>
    </div>
  </footer>
  <button class="back-to-top" id="backToTop" onclick="window.scrollTo({top:0,behavior:'smooth'})">${ICONS.arrowUp}</button>`;
}

function initPage(activePage) {
  const hEl = document.getElementById('pageHeader'); if (hEl) hEl.innerHTML = renderHeader(activePage);
  const fEl = document.getElementById('pageFooter'); if (fEl) fEl.innerHTML = renderFooter();
  Cart.updateBadge(); Wishlist.updateBadge();
  window.addEventListener('scroll', () => {
    const header = document.getElementById('siteHeader');
    const backTop = document.getElementById('backToTop');
    if (header) header.classList.toggle('scrolled', window.scrollY > 50);
    if (backTop) backTop.classList.toggle('visible', window.scrollY > 300);
  });
  const si = document.getElementById('headerSearchInput');
  if (si) { si.addEventListener('keydown', (e) => { if (e.key === 'Enter' && si.value.trim()) { window.location.href = `shop.html?search=${encodeURIComponent(si.value.trim())}`; } }); }
}

function getUrlParam(key) { return new URLSearchParams(window.location.search).get(key); }
