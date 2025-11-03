// Load navbar dynamically
fetch('navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
  });

// Smooth scroll animation (optional)
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({ duration: 800, once: true });
});
