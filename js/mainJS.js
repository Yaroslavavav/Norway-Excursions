 $(document).ready(function () {
    //initialize swiper when document ready
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 35,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-nex',
        prevEl: '.swiper-button-pre ',
      },
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
 