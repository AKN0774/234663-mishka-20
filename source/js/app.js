var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navToggle.classList.remove('main-nav__toggle--nojs');
navToggle.classList.add('main-nav__toggle--open');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function() {
  if(navMain.classList.contains('main-nav--closed')){
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--open');
    navToggle.classList.add('main-nav__toggle--closed');
    navToggle.classList.remove('main-nav__toggle--open');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--open');
    navToggle.classList.add('main-nav__toggle--open');
    navToggle.classList.remove('main-nav__toggle--closed');
  }
});
