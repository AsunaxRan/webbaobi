$(window).on('load', function() {
  if ($('#slider').length > 0) {
    $('#slider').nivoSlider({
      directionNav:true,
      controlNav: true
    });
  }
});