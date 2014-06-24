function responsiveScript() {
  var breakpoint = 600;

  if ( $(window).width() <= breakpoint ) {

    // Your mobile code goes here

  }else{

    // Your desktop code goes here

  }
}

// Run on load
$(responsiveScript);

// Run on resize
$(window).resize(responsiveScript);
