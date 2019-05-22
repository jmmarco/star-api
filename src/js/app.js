import './router'

// Highlight active navbar element on click
$(".nav-item").on("click", function(e) {
  var $a = $(e.target)
  var $ul = $a.parent().parent()
  $ul.find('.active').removeClass('active')
  $a.addClass('active')
});