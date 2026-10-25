// Shared focus-timer engine. Each themed page draws its own visuals through render(state).
// state = {left, total, frac (0..1 elapsed), phase:'focus'|'break', running, mode, sessions}
window.FocusTimer = function (opts) {
  const breaks = { 25: 5, 50: 10, 90: 15 };
  const key = 'studiora:focus:' + (opts.id || 'main');
  const today = new Date().toDateString();
  let log; try { log = JSON.parse(localStorage.getItem(key)) || {}; } catch (e) { log = {}; }
  if (log.day !== today) log = { day: today, n: 0 };
  const st = { mode: 25, phase: 'focus', total: 1500, left: 1500, running: false, sessions: log.n, frac: 0 };
  let endAt = 0, t = null;
  const save = () => { try { localStorage.setItem(key, JSON.stringify({ day: today, n: st.sessions })); } catch (e) { } };
  const chime = () => { try { const a = new (window.AudioContext || window.webkitAudioContext)(); (opts.notes || [660, 880]).forEach((f, i) => { const o = a.createOscillator(), g = a.createGain(); o.type = opts.wave || 'sine'; o.frequency.value = f; o.connect(g); g.connect(a.destination); const s = a.currentTime + i * .22; g.gain.setValueAtTime(.0001, s); g.gain.exponentialRampToValueAtTime(.18, s + .02); g.gain.exponentialRampToValueAtTime(.0001, s + .6); o.start(s); o.stop(s + .65); }); } catch (e) { } };
  const draw = () => { st.frac = 1 - st.left / st.total; opts.render(st); };
  const step = () => {
    st.left = Math.max(0, Math.round((endAt - Date.now()) / 1000));
    if (st.left === 0) {
      chime();
      if (st.phase === 'focus') { st.sessions++; save(); st.phase = 'break'; st.total = breaks[st.mode] * 60; }
      else { st.phase = 'focus'; st.total = st.mode * 60; }
      st.left = st.total; endAt = Date.now() + st.left * 1000;
      if (opts.announce) opts.announce(st.phase === 'focus' ? 'Break over. Back to focus.' : 'Session complete. Take a break.');
    }
    draw();
  };
  const api = {
    state: st,
    toggle() { st.running = !st.running; if (st.running) { endAt = Date.now() + st.left * 1000; t = setInterval(step, 250); } else clearInterval(t); draw(); return st.running; },
    reset() { clearInterval(t); st.running = false; st.phase = 'focus'; st.total = st.left = st.mode * 60; draw(); },
    setMode(m) { if (!breaks[m]) return; st.mode = m; api.reset(); },
    fmt(s) { s = s == null ? st.left : s; return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); },
  };
  const m = +(new URLSearchParams(location.search).get('minutes') || 25);
  st.mode = breaks[m] ? m : 25; st.total = st.left = st.mode * 60;
  // wire common controls if present
  document.querySelectorAll('[data-m]').forEach(b => { b.setAttribute('aria-pressed', +b.dataset.m === st.mode); b.addEventListener('click', () => { api.setMode(+b.dataset.m); document.querySelectorAll('[data-m]').forEach(x => x.setAttribute('aria-pressed', x === b)); }); });
  const go = document.querySelector('[data-go]'), rs = document.querySelector('[data-reset]');
  if (go) go.addEventListener('click', () => { const r = api.toggle(); go.textContent = r ? (go.dataset.pause || 'Pause') : (go.dataset.start || 'Start'); });
  if (rs) rs.addEventListener('click', () => { api.reset(); if (go) go.textContent = go.dataset.start || 'Start'; });
  setTimeout(draw, 0);
  return api;
};
