const swiper = new Swiper('.hero-slider-container', {
  // Optional parameters
  loop: true,
  effect: 'slide',
  
});


var swiperGallery = new Swiper(".gallery__slider", {
  slidesPerView: 1,
  slidesPerColumn: 1,
  //spaceBetween: 10,
  pagination: {
    el: ".gallery-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".gallery-button-next",
    prevEl: ".gallery-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      //spaceBetween: 34,
    },
    1500: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      //spaceBetween: 50,
    },
  },
});