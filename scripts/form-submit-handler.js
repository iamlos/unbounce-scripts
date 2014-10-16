/*
This script adds a custom handler to form submissions. The code will be run
*before* Unbounce's form handler kicks in and *after* validation has been
confirmed.

This means it isn't suitable for navigating users away from the landing page
(as this would likely happen before the data has been saved to Unbounce).
However, it could be useful for sending data to analytics platforms, etc. In the
example below, it fires a `gtm.formSubmit` event to Google Tag Manager, which
individual tags could subscribe to, such that they are only run when the form
is submitted and valid.

It works by hijacking the click and enter key handlers, which would normally
just submit the form. Instead, the custom function at the top of the script
runs, before finally actually submitting the form.
*/

function yourSubmitFunction(e, $) {
  e.preventDefault();

  // Your code goes here, e.g.:
  dataLayer.push({'event': 'gtm.formSubmit'});

  // If your code is asynchronous, call this final line as a callback to your code instead
  $('.lp-pom-form form').submit();
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
