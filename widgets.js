// Shared helpers. No tracking, no network calls, no cookies. Settings come from the URL; personal entries stay in this browser.
(function () {
  const q = new URLSearchParams(location.search);
  const theme = q.get('theme');
  if (['cream', 'midnight', 'espresso'].includes(theme)) document.documentElement.dataset.theme = theme;
  if (q.get('bg') === 'transparent') document.documentElement.dataset.bg = 'transparent';
  if (q.get('frame') === 'none') document.documentElement.dataset.frame = 'none';
  window.W = {
    q,
    param(name, def) { const v = q.get(name); return v === null || v === '' ? def : v; },
    store: {
      get(k, d) { try { const v = localStorage.getItem('studiora:' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
      set(k, v) { try { localStorage.setItem('studiora:' + k, JSON.stringify(v)); } catch (e) { } },
    },
    money(n, cur) {
      try { return new Intl.NumberFormat(undefined, { style: 'currency', currency: cur || 'USD', maximumFractionDigits: 0 }).format(n); }
      catch (e) { return '$' + Math.round(n).toLocaleString(); }
    },
    clamp: (v, a, b) => Math.min(b, Math.max(a, v)),
  };
})();
