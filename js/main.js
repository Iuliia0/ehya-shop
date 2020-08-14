$(document).ready(function () {
  var tabsItem = $(".trending__item");
  var contentItem = $(".trending-ware");

  tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("trending__item--active");
    contentItem.removeClass("trending-ware--active");
    $(activeContent).addClass("trending-ware--active");
    $(this).addClass("trending__item--active");
  });

  var testimonialSlider = new Swiper(".testimonial-slider", {
    autoplay: {
      delay: 7000,
    },
    autoHeight: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      dynamicMainBullets: 3,
    },
    loop: true,

  });
  $(".testimonial-slider").hover(function () {
    (this).swiper.autoplay.stop();
  }, function () {
    (this).swiper.autoplay.start();
  });
  var storiesSlider = new Swiper(".stories-slide", {
    freeMode: true,
    slidesPerColumnFill: 'column',
    slidesPerColumn: 1,
    slidesPerView: 2,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.stories__button--next',
      prevEl: '.stories__button--prev',
    },
    breakpoints: {
      680: {
        slidesPerColumn: 2,
      },
    },
  });
});