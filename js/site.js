(function () {
  const root = document.documentElement;

  // Theme
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || saved === 'light') {
    root.dataset.theme = saved;
  } else {
    // Follow system by default
    root.dataset.theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(next) {
    root.dataset.theme = next;
    localStorage.setItem('theme', next);
  }

  const themeBtn = document.querySelector('[data-action="theme"]');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      setTheme(next);
    });
  }

  // Mobile menu
  const burger = document.querySelector('[data-action="menu"]');
  const panel = document.querySelector('[data-mobile-panel]');
  function setMenu(open) {
    if (!panel || !burger) return;
    panel.dataset.open = open ? 'true' : 'false';
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  if (burger && panel) {
    burger.addEventListener('click', () => {
      const open = panel.dataset.open === 'true';
      setMenu(!open);
    });

    // close on navigation
    panel.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => setMenu(false));
    });

    // close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setMenu(false);
    });
  }
})();
