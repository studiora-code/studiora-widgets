// Tiny helper for the analog clocks: returns hand angles in degrees for the current local time.
window.handAngles = function (d) {
  d = d || new Date();
  const s = d.getSeconds() + d.getMilliseconds() / 1000, m = d.getMinutes() + s / 60, h = (d.getHours() % 12) + m / 60;
  return { h: h * 30, m: m * 6, s: s * 6 };
};
window.dateLine = d => (d || new Date()).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
