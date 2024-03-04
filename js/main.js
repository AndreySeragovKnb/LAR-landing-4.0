const openMenuButton = document.querySelector('.header__menu');
const nav = document.querySelector('.nav');
const closeMenuButton = document.querySelector('.nav__menu');
const navLink = document.querySelectorAll('.nav__link');
const navList = document.querySelector('.nav__list');
const headerMenu = document.querySelector('.header__wrapper');
const reviewList = document.querySelector('.reviews__list');
const play = document.querySelectorAll('.reviews__play');
const video = document.querySelectorAll('.reviews__video');


//header menu
openMenuButton.addEventListener('click', () => {
  nav.classList.remove('fadeout');
  nav.classList.remove('hide');
  headerMenu.classList.add('hide');
});

closeMenuButton.addEventListener('click', () => {
  nav.classList.add('fadeout');
  // setTimeout(() => {
    nav.classList.add('hide')
  // }, 450);
  headerMenu.classList.remove('hide');
});

navList.addEventListener('click', (evt) => {
  const target = evt.target;
  navLink.forEach((item, i) => {
    if (target === item) {
      nav.classList.add('hide');
      headerMenu.classList.remove('hide');
    }
  });
});

//video

reviewList.addEventListener('click', (evt) => {
  const target = evt.target;
  video.forEach((item, i) => {
    if (target.parentElement === play[i] || target === item || target === play[i]) {
      play[i].classList.add('hide');
      if (video[i].paused) {
        video.forEach((item) => {
          item.pause();
        })
        video[i].play();
      } else {
        video[i].pause();
        play[i].classList.remove('hide');
      }
    }
  });
});












