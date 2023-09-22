const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 60)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}


ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 1000,
    delay: 100
  });
  
  ScrollReveal().reveal('.home-text h5, .country-text h5, .center-text h2, .connect h2', { origin:'top' });
  ScrollReveal().reveal('.home-text h1, .home-text p, .country-text p, .projects-container', { origin:'bottom' });
  ScrollReveal().reveal('.country-img, .connect-container', { origin:'left' });
  
  const typed= new Typed('.multiple-text',{
    strings:['Frontend Developer','Graphic Designer','Student'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 80,
    loop: true
  });