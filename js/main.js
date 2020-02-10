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

// Functions
function search(input) {
  // Declare variables
  var filter, ul, li, a, i, txtValue;
  filter = input.toUpperCase();
  ul = document.getElementsByClassName("list")[0];
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}