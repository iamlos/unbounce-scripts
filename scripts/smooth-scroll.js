lp.jQuery(function($) {

  // The speed of the scroll in milliseconds
  var speed = 1000;

  // Find links that are #anchors and scroll to them
  // Unbind existing handler first in case the script has already been run
  $('a[href^=#]').not('.lp-pom-form .lp-pom-button').unbind('click.smoothScroll').bind('click.smoothScroll', function(event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: $( $(this).attr('href') ).offset().top }, speed);
  });

});
