window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.booking-form');
  const agree = form.querySelector('#agree');
  const button = form.querySelector('button');

  function toggleButton() {
    if (agree.checked) {
      button.style.background = '#ffbf00';
      button.disabled = false;
      button.style.pointerEvents = 'auto';
      button.style.opacity = '1';
    } else {
      button.style.background = 'rgba(255, 192, 0, 0.5)';
      button.disabled = true;
      button.style.pointerEvents = 'none';
      button.style.opacity = '0.7';
    }
  }

  // Initial state
  toggleButton();

  agree.addEventListener('change', toggleButton);

  // Optional: Prevent form submit if button is disabled
  form.addEventListener('submit', function(e) {
    if (button.disabled) e.preventDefault();
  });
});

// Parallax effect for testimonial-section
$(document).ready(function () {
    $('.testimonial-section').parallax();
  });