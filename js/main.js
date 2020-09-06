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
  $(".testimonial-slider").hover(
    function () {
      this.swiper.autoplay.stop();
    },
    function () {
      this.swiper.autoplay.start();
    }
  );
  var storiesSlider = new Swiper(".stories-slide", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    breakpoints: {
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
    freeMode: true,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".stories__button--next",
      prevEl: ".stories__button--prev",
    },
  });

  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
      },
    });
  });

  var buttonNext = $(".stories__button--next");
  var buttonPrev = $(".stories__button--prev");

  buttonNext.on("click", function (evet) {
      buttonNext.css({
        "background-image": "url('img/arrow-next-active.svg')",
        border: "2px solid #183B56",
      });
      buttonPrev.css({
        "background-image": "url('img/arrow-prev.svg')",
        border: "2px solid #5A7184",
      });
    }),
    buttonPrev.on("click", function (evet) {
      buttonPrev.css({
        "background-image": "url('img/arrow-prev-active.svg')",
        border: "2px solid #183B56",
      });
      buttonNext.css({
        "background-image": "url('img/arrow-next.svg')",
        border: "2px solid #5A7184",
      });
    });

  var menuMobile = $(".menu-button");
  menuMobile.on("click", function () {
    $(".header-menu__list").toggleClass("header-menu__list_visible");
  });

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".menu-button").toggleClass("menu-button--active");
  });


});