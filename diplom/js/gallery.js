document.addEventListener('DOMContentLoaded', function() {
  const slides = {
    painting: [
      `<div class="swiper-slide"><div class="gallery__img" style="background-image: url('img/gallery-01.jpg')"></div></div>`,
      `<div class="swiper-slide"><div class="gallery__img" style="background-image: url('img/gallery-02.jpg')"></div></div>`,
      `<div class="swiper-slide"><div class="gallery__img" style="background-image: url('img/gallery-03.jpg')"></div></div>`,
      `<div class="swiper-slide"><div class="gallery__img" style="background-image: url('img/gallery-04.jpg')"></div></div>`,
      `<div class="swiper-slide"><div class="gallery__img" style="background-image: url('img/gallery-05.jpg')"></div></div>`,
      `<div class="swiper-slide"><div class="gallery__img" style="background-image: url('img/gallery-06.jpg')"></div></div>`,
      `<div class="swiper-slide"><div class="gallery__img" style="background-image: url('img/gallery-07.jpg')"></div></div>`,
      `<div class="swiper-slide"><div class="gallery__img" style="background-image: url('img/gallery-08.jpg')"></div></div>`,
      `<div class="swiper-slide"><div class="gallery__img" style="background-image: url('img/gallery-09.jpg')"></div></div>`,
      `<div class="swiper-slide"><div class="gallery__img" style="background-image: url('img/gallery-10.jpg')"></div></div>`,
      `<div class="swiper-slide"><div class="gallery__img" style="background-image: url('img/gallery-11.jpg')"></div></div>`,
      `<div class="swiper-slide"><div class="gallery__img" style="background-image: url('img/gallery-12.jpg')"></div></div>`,
    ],
    picture: [
      `<div class="swiper-slide"><div class="gallery__img" style="background-image: url('img/gallery-13.jpg')"></div></div>`,
      `<div class="swiper-slide"><div class="gallery__img" style="background-image: url('img/gallery-14.jpg')"></div></div>`,
      `<div class="swiper-slide"><div class="gallery__img" style="background-image: url('img/gallery-15.jpg')"></div></div>`,
      `<div class="swiper-slide"><div class="gallery__img" style="background-image: url('img/gallery-16.jpg')"></div></div>`,
      `<div class="swiper-slide"><div class="gallery__img" style="background-image: url('img/gallery-17.jpg')"></div></div>`,
      `<div class="swiper-slide"><div class="gallery__img" style="background-image: url('img/gallery-18.jpg')"></div></div>`,      
    ],
    sculpture: [
      `<div class="swiper-slide"><div class="gallery__img" style="background-image: url('img/gallery-19.jpg')"></div></div>`,
      `<div class="swiper-slide"><div class="gallery__img" style="background-image: url('img/gallery-20.jpg')"></div></div>`,
      `<div class="swiper-slide"><div class="gallery__img" style="background-image: url('img/gallery-21.jpg')"></div></div>`,
      `<div class="swiper-slide"><div class="gallery__img" style="background-image: url('img/gallery-22.jpg')"></div></div>`,
      `<div class="swiper-slide"><div class="gallery__img" style="background-image: url('img/gallery-23.jpg')"></div></div>`,
      `<div class="swiper-slide"><div class="gallery__img" style="background-image: url('img/gallery-24.jpg')"></div></div>`,
    ]
  };

  const swiperGallery = new Swiper("#gallery", {
    slidesPerView: 1,
    slidesPerColumn: 1,
    observer: true,
    observeSlideChildren: true,
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
      },
      1500: {
        slidesPerView: 3,
        slidesPerColumn: 2,
      },
    },
  });

 
  swiperGallery.appendSlide(slides.painting);

  const selectElement = document.getElementById('galleryFilter');

  selectElement.addEventListener('change', (event) => {
    swiperGallery.removeAllSlides();
    swiperGallery.appendSlide(slides[event.target.value]);
    swiperGallery.slideTo(0);
  });
});