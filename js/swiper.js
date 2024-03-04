const swiper = new Swiper('.swiper', {
  slidesPerView: "auto",
  direction: 'horizontal',
  spaceBetween: 24,
  breakpoints: {
    1170: {
      enabled: false,
    }
  },
});

const swiperGrid = new Swiper(".benefits__wrapper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  breakpoints: {
    900: {
      enabled: false,
    },
  }
});


