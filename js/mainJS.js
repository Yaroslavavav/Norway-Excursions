 $(document).ready(function () {
    //initialize swiper when document ready
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-nex',
        prevEl: '.swiper-button-pre ',
      },
    breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is <= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1240: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
    });
    var swiperReviews = new Swiper('.swiper-container-reviews', {
      slidesPerView: 4,
      spaceBetween: 0,
      freeMode: true,
      navigation: {
        nextEl: '.swiper-button-nex',
        prevEl: '.swiper-button-pre ',
      },
    });
  });

 var icon = $('.search-icon');
 var form = $('form.search');

 icon.click(function() {
  form.toggleClass('open');
  if (form.hasClass('open')) {
    form.children('input.search').focus();
  }
});
 