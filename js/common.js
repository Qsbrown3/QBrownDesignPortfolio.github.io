const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('nav-active');

  //animate links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.7s ease forwards $(index / 7 + 1.5)s`;
    }
  });
  //Burger animation
  burger.classList.toggle('toggle');

  });

}

navSlide();

document.body.style.position = 'fixed';
document.body.style.top = `=${window.scrollY}`;

const scrollY = document.body.style.top;
document.body.style.position = '';
document.body.style.top = '';
window.scrollTo(0, parseInt(scrollY || '0') * -1);
