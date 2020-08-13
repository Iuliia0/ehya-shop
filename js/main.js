$(document).ready(function () {
  var tabsItem = $('.trending__item');
  var contentItem = $('.trending-ware');

  tabsItem.on('click', function (event) {
    var activeContent = $(this).attr('data-target');
    tabsItem.removeClass('trending__item--active');
    contentItem.removeClass('trending-ware--active');
    $(activeContent).addClass('trending-ware--active');
    $(this).addClass('trending__item--active');
  });
});