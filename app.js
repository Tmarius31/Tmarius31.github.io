// HAMBURGER MENU EVENT 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navi-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));


// NAVIGATION BAR EFFECT ON SCROLL
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

var prevScrollbg = window.pageYOffset;





// PRELOADER EXIT
var loader = document.getElementById("preloader");
      window.addEventListener("load", function(){
        setTimeout(() => {
            loader.style.display = 'none';
        }, 2000);
      });
