// Hamburger mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');

menuToggle.addEventListener('click', function() {
  nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', nav.classList.contains('open'));
});

// Optional: auto-close menu when clicking links (for good UX on mobile)
document.querySelectorAll('#navLinks a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Contact form handler (simple feedback, not real send)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = "Thank you for reaching out! We will get back to you soon.";
  this.reset();
  setTimeout(() => { status.textContent = ""; }, 3500);
});

// Optional: Pause slider auto-animation on mouse enter (desktop UX)
const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
if(slider && slides) {
  slider.addEventListener('mouseenter', () => {
    slides.style.animationPlayState = 'paused';
  });
  slider.addEventListener('mouseleave', () => {
    slides.style.animationPlayState = 'running';
  });
}
