function yourSubmitFunction(e, $) {
  e.preventDefault();

  // Your code goes in here
  alert('Form has been submitted.');

  // If your code is asynchronous, call this final line as a callback to your code instead
  $('form').submit();
}

lp.jQuery(function($) {
  $('.lp-pom-form .lp-pom-button').unbind('click').bind('click.formSubmit', function(e) {
    yourSubmitFunction(e, $);
  });

  $('form').unbind('keypress').bind('keypress.formSubmit', function(e) {
    if(e.which === 13 && e.target.nodeName.toLowerCase() !== 'textarea') yourSubmitFunction(e, $);
  });
});
