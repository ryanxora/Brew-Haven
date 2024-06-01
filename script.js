// navigation-menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })) 


    
// minn height problem

function adjustForDesktopMode() {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const isDesktopMode = window.innerWidth > 768 && isMobile;

    if (isDesktopMode) {
      document.body.style.minHeight = 'auto'; // Adjust this as needed
    } else {
      document.body.style.minHeight = '100vh';
    }
  }

  window.addEventListener('resize', adjustForDesktopMode);
  window.addEventListener('load', adjustForDesktopMode);






  // JavaScript to change the logo when the screen size is below 480px
  window.addEventListener('resize', function() {
    var mainLogo = document.getElementById('main-logo');
    var mobileLogo = document.getElementById('mobile-logo');
    if (window.innerWidth <= 480) {
        mainLogo.style.display = 'none';
        mobileLogo.style.display = 'block';
    } else {
        mainLogo.style.display = 'block';
        mobileLogo.style.display = 'none';
    }
});






