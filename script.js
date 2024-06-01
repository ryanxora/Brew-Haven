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

