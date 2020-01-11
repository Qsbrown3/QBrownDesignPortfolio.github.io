


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

function scrollAppear() {
  var card-content = document.querySelector('.card-content');
  var introPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.3;

  if(introPosition < screenPosition) {
    introText.classList.add('intro-appear');
  }
}

  window.addEventListener('scroll', scrollAppear);
