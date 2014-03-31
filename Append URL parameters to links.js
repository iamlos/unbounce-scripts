$(function(){ 

  // Grab parameters from URL
  var params = window.location.search;

  if(params){
    // Loop through each link on the page
    $('a[href]').each(function(i){

    // Check if this is an internal #anchor link
    var url = $(this).attr('href');
    if(url.indexOf('#') !== 0){

      // If not, add the params to the link, but before the anchor        
      var parts = url.split('#');
      var newUrl = parts[0]+params;

      if(parts[1]){
        newUrl += '#'+parts[1];
      }

      $(this).attr('href', newUrl);

      }
    }); 
  }
});