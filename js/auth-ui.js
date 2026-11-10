async function initAuthUI() {
  try {
    const user = await getCurrentUser();
    document.querySelectorAll('a[href*="cuenta"], a[href*="login"]').forEach(link => {
      if (user) {
        const avatar = localStorage.getItem('avatar_preview') || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.user_metadata?.full_name || 'U')}&background=111&color=fff&size=64`;
        const wrapper = document.createElement('div');
        wrapper.className = 'account-dropdown';
        wrapper.innerHTML = `
          <button type="button" class="account-btn">
            <img src="${avatar}" alt="" style="width:28px;height:28px;border-radius:50%;object-fit:cover;vertical-align:middle;margin-right:8px;">
            ${(user.user_metadata?.full_name || user.email.split('@')[0])} ▾
          </button>
          <div class="dropdown-menu">
            <a href="cuenta.html">🏠 Mi cuenta</a>
            <a href="editar-perfil.html">⚙️ Editar perfil</a>
            <a href="favoritos.html">⭐ Favoritos</a>
            <button type="button" onclick="toggleTheme()">🌗 Cambiar tema</button>
            <button type="button" onclick="signOut()">⏻ Cerrar sesión</button>
          </div>
        `;
        link.parentNode.replaceChild(wrapper, link);
      } else {
        link.textContent = 'Iniciar sesión';
        link.href = 'login.html';
      }
    });
  } catch (e) { console.log(e); }
}

function initTheme() {
  const theme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

if (location.pathname.includes('login') || location.pathname.includes('registro')) {
  supabaseClient.auth.onAuthStateChange((event) => {
    if (event === 'SIGNED_IN') location.href = 'index.html';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initAuthUI();
});
