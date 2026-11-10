// Auth UI enhancements
async function initAuthUI() {
  const user = await getCurrentUser();
  const cuentaLinks = document.querySelectorAll('a[href*="cuenta"], a[href*="login"]');
  
  cuentaLinks.forEach(link => {
    const parent = link.parentElement;
    if (user) {
      // Replace with dropdown
      const dropdown = document.createElement('div');
      dropdown.className = 'account-dropdown';
      dropdown.innerHTML = `
        <button class="account-btn">${user.user_metadata?.full_name || user.email.split('@')[0]} ▾</button>
        <div class="dropdown-menu">
          <a href="cuenta.html">Mi perfil</a>
          <a href="editar-perfil.html">Editar perfil</a>
          <button onclick="signOut()">Cerrar sesión</button>
        </div>
      `;
      link.replaceWith(dropdown);
    } else {
      link.textContent = 'Iniciar sesión';
      link.href = 'login.html';
    }
  });
}

// Redirect after login
if (window.location.pathname.includes('login.html') || window.location.pathname.includes('registro.html')) {
  supabaseClient.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
      window.location.href = 'index.html';
    }
  });
}

document.addEventListener('DOMContentLoaded', initAuthUI);

// Theme switcher
function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

// Add theme button to dropdown if logged in
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setTimeout(() => {
    const menu = document.querySelector('.dropdown-menu');
    if (menu && !menu.querySelector('.theme-btn')) {
      const btn = document.createElement('button');
      btn.className = 'theme-btn';
      btn.textContent = 'Cambiar tema';
      btn.onclick = toggleTheme;
      menu.insertBefore(btn, menu.lastElementChild);
    }
  }, 500);
});
