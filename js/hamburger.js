document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navHeader = document.querySelector('.hamburger-nav');
  
    hamburger.addEventListener('click', function() {
      navHeader.classList.toggle('show-nav');
      document.body.classList.toggle('no-scroll');
      if (navHeader.classList.contains('show-nav')) {
        hamburger.innerHTML = '&times;'; // Close icon
        hamburger.style.fontSize = '50px';
      } else {
        hamburger.innerHTML = '&#9776;'; // Hamburger icon
        hamburger.style.fontSize = '30px';
      }
    });
  });
