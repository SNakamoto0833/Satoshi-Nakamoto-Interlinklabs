// assets/scripts/main.js
// Lightweight dynamic loader for navbar + footer and small enhancements.

document.addEventListener("DOMContentLoaded", async () => {
  async function loadInto(path, selector) {
    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error('Load failed: ' + path);
      const text = await res.text();
      document.querySelector(selector).innerHTML = text;
    } catch (err) {
      console.error(err);
    }
  }

  // load navbar and footer
  await loadInto('navbar.html', '#navbar-container');
  await loadInto('footer.html', '#footer-container');

  // progressive enhancement: highlight active nav link
  const navLinks = document.querySelectorAll('.nav-links a, .navbar a');
  const current = location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(a => {
    if(a.getAttribute('href') === current) a.style.opacity = '1';
  });
});
