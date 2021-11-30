const hamburgerMenu = document.querySelector('#navigation .nav-icon');
const navContent = document.querySelector('#nav-content');
const closeNavButton = document.querySelector('#nav-content .close-btn');
const navLinks = document.querySelectorAll('#nav-content nav ul li a');
const scrollButton = document.querySelector(".scroll-top");

// scroll TOP Button Events

if(scrollButton){
  window.addEventListener('scroll', ()=> {
    if(pageYOffset > (window.innerHeight * 1.2)){
      scrollButton.style.display="flex";
    }else{
      scrollButton.style.display="none";
    }
  });
  scrollButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
}

// Hamburger Menu events
hamburgerMenu.addEventListener('click', ()=>{
  navContent.classList.add('show');
  document.body.style.overflow="hidden";
});
closeNavButton.addEventListener('click', ()=>{
  navContent.classList.remove('show');
  document.body.style.overflow="initial";
});
navLinks.forEach( link => {
  link.addEventListener('click', ()=> {
    navContent.classList.remove('show');
    document.body.style.overflow="initial";
  })
})






// PRELOADER EXIT
var loader = document.getElementById("preloader");
      window.addEventListener("load", function(){
        setTimeout(() => {
            loader.style.display = 'none';
        }, 2000);
      });




// TABS EVENTS

function _class(name){
  return document.getElementsByClassName(name);
}
 
let tabPanes = _class("tab-header")[0].getElementsByTagName("div");
 
for(let i=0;i<tabPanes.length;i++){
  tabPanes[i].addEventListener("click",function(){
    _class("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
    tabPanes[i].classList.add("active");
    
    _class("tab-indicator")[0].style.top = `calc(80px + ${i*50}px)`;
    
    _class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
    _class("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");
    
  });
}