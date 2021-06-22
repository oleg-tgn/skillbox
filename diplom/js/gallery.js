document.addEventListener('DOMContentLoaded', function() {
  var swiperGallery = new Swiper(".gallery__slider", {
    slidesPerView: 1,
    slidesPerColumn: 1,
    observer: true,
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


  const selectElement = document.getElementById('galleryFilter');
  const gallerySlide = document.querySelectorAll('.gallery__slider .swiper-slide');

  selectElement.addEventListener('change', (event) => {
    for (let slide of gallerySlide) {
     if (slide.dataset.gallerytype == event.target.value) {
      slide.style.display = 'block';
     } else {
      slide.style.display = 'none';
     }
    }    
    
    swiperGallery.slideTo(0);
    swiperGallery.update();
    
  });
});