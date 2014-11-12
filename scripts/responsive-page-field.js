lp.jQuery(function($){
  $('input#responsive_page').val( $(window).width() > 600 ? 'desktop' : 'mobile' );
});
