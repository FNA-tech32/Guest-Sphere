document.addEventListener('DOMContentLoaded', function () {
  // Initialize carousel if element exists
  if (document.querySelector('#slider')) {
    bulmaCarousel.attach('#slider', {
      slidesToScroll: 1,
      slidesToShow: 3,
      infinite: true,
    });
  }

  // Mobile menu burger toggle
  const burger = document.querySelector('.burger');
  const navbar = document.querySelector('.navbar-menu');
  if (burger && navbar) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      navbar.classList.toggle('is-active');
    });

    // Close menu when clicking any nav link
    const navLinks = navbar.querySelectorAll('.navbar-item');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        burger.classList.remove('is-active');
        navbar.classList.remove('is-active');
      });
    });
  }

  // Features / Room Details Modal
  const modal = document.querySelector('.modal');
  const openModalButtons = document.querySelectorAll('.open-modal');
  const closeModalButtons = document.querySelectorAll('.modal-close, .modal-background');

  if (modal) {
    openModalButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('is-active');
      });
    });

    closeModalButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('is-active');
      });
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-active')) {
        modal.classList.remove('is-active');
      }
    });
  }

  // Contact Form Submission Feedback
  const contactForm = document.querySelector('#contact-us form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for reaching out to Guest Sphere! Our concierge team will get back to you shortly.');
      contactForm.reset();
    });
  }

  // Newsletter Form Feedback
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for subscribing to Guest Sphere updates and offers!');
      newsletterForm.reset();
    });
  }
});
