// Scroll-reveal for sections. Falls back to instantly visible
// if IntersectionObserver isn't available or motion is reduced.
(function () {
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('.reveal');

  if (prefersReduced || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach(function (el) { observer.observe(el); });
  }
})();

// Light / dark theme toggle. Respects saved preference, otherwise
// falls back to the visitor's system preference.
(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');
  var label = document.getElementById('toggleLabel');
  var STORAGE_KEY = 'isabel-cv-theme';

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (window.__isabelSyncThemeLabel) {
      window.__isabelSyncThemeLabel();
    } else if (label) {
      label.textContent = theme === 'dark' ? 'Escuro' : 'Claro';
    }
  }

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }

  var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (systemDark ? 'dark' : 'light'));

  if (toggle) {
    toggle.addEventListener('click', function () {
      var current = root.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* ignore */ }
    });
  }
})();
