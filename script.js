// Contact form feedback
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      formStatus.textContent = "Thank you for reaching out! We will get back to you soon.";
      contactForm.reset();
      setTimeout(() => {
        formStatus.textContent = "";
      }, 3500);
    });
  }

  // Pause slider animation on hover
  const slider = document.querySelector('.slider');
  const slides = document.querySelector('.slides');

  if (slider && slides) {
    slider.addEventListener('mouseenter', () => {
      slides.style.animationPlayState = 'paused';
    });
    slider.addEventListener('mouseleave', () => {
      slides.style.animationPlayState = 'running';
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});