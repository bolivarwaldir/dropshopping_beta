// Cart management - robust version
function getCart() {
  return JSON.parse(localStorage.getItem('chingones_cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('chingones_cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function addToCart(productId, qty = 1) {
  const cart = getCart();
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty });
  }
  saveCart(cart);
  showNotification('Producto añadido al carrito');
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  showNotification('Producto eliminado del carrito');
  if (typeof renderCart === 'function') renderCart();
}

function updateQuantity(productId, newQty) {
  if (newQty < 1) {
    removeFromCart(productId);
    return;
  }
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.qty = newQty;
    saveCart(cart);
    if (typeof renderCart === 'function') renderCart();
  }
}

function clearCart() {
  localStorage.removeItem('chingones_cart');
  updateCartCount();
}

function showNotification(msg) {
  const notif = document.createElement('div');
  notif.textContent = msg;
  notif.style.cssText = `
    position: fixed; bottom: 20px; right: 20px; background: #111;
    color: white; padding: 16px 24px; border-radius: 12px; z-index: 1000;
    box-shadow: 0 10px 25px rgba(0,0,0,0.15); animation: fadeIn 0.3s;
    font-weight: 500;
  `;
  document.body.appendChild(notif);
  setTimeout(() => notif.remove(), 2500);
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
});
