document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('nav');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function () {
      nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        if (window.innerWidth <= 768 && nav.style.display === 'block') {
          nav.style.display = 'none';
        }
      }
    });
  });

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = contactForm.querySelector('#name').value;
      const email = contactForm.querySelector('#email').value;
      const message = contactForm.querySelector('#message').value;
      alert(`Thank you, ${name}! Your message has been received. We will contact you at ${email} shortly.`);
      contactForm.reset();
    });
  }
});
