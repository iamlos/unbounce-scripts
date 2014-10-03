function yourSubmitFunction(e, $) {
  e.preventDefault();

  // Your code goes here, e.g.:
  dataLayer.push({'event': 'unbounceFormSubmit'});

  // If your code is asynchronous, call this final line as a callback to your code instead
  $('form').submit();
}

lp.jQuery(function($) {
  $('.lp-pom-form .lp-pom-button').unbind('click').bind('click.formSubmit', function(e) {
    if ( $('.lp-pom-form form').valid() ) yourSubmitFunction(e, $);
  });

  $('form').unbind('keypress').bind('keypress.formSubmit', function(e) {
    if(e.which === 13 && e.target.nodeName.toLowerCase() !== 'textarea' && $('.lp-pom-form form').valid() )
      yourSubmitFunction(e, $);
  });
});
