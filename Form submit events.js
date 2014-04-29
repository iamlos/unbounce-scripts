var yourSubmitFunction = function(e){
  e.preventDefault();
  // Your code goes in here

  alert('Hold on...');

  // If your code is asynchronous, call this line as a callback to your code instead
  //lp.jQuery('form').submit();
}
  
$(document).ready(function(){
    
  $('.lp-pom-form .lp-pom-button').unbind('click').bind('click.formSubmit', function(e){
    yourSubmitFunction(e);
  });
  
  $('form').bind('keypress.formSubmit', function(e) {
    if(e.which === 13 && e.target.nodeName.toLowerCase() !== 'textarea') yourSubmitFunction(e);
  });

  // Remove a listener
  //$('.lp-pom-form .lp-pom-button').unbind('click.formSubmit keypress.formSubmit');
  
});