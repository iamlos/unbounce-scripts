function responsiveScript() {
  var breakpoint = 600;

  if ( $(window).width() <= breakpoint ) {

    alert('Mobile');
    // Your mobile code goes here

  }else{

    alert('Desktop');
    // Your desktop code goes here

  }
}

// Run on load
$(responsiveScript);

// Run on resize
$(window).resize(responsiveScript);
