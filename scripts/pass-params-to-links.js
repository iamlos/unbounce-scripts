lp.jQuery(function($){

  if ( window.location.search ) {
    // Loop through each link on the page
    $('a[href]').each(function(i){

      // Check if this is an internal #anchor link
      var url = $(this).attr('href');
      if ( url.indexOf('#') !== 0 ) {

        // If not, add the params to the link, before the anchor
        var parts = url.split('#');
        var newUrl = parts[0] + window.location.search + ( parts[1] ? '#' + parts[1] : '' );
        $(this).attr('href', newUrl);
      }

    });
  }
});
