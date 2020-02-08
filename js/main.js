$(window).on('load', function() {
  if ($('#slider').length > 0) {
    $('#slider').nivoSlider({
      directionNav:true,
      controlNav: true
    });
  }
});

$('.nav__close').on('click', function() {
  $('.nav').removeClass('open');
});

$('.nav-collapse').on('click', function() {
  $('.nav').addClass('open');
});

$('.dropdown__toggle').on('click', function() {
  $(this).next().slideToggle();
});

$('.sub-menu__toggle').on('click', function() {
  $(this).next().slideToggle();
});