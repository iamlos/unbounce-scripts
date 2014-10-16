/*
This script fires a `gtm.formSubmit` event to Google Tag Manager, which
individual tags could subscribe to, such that they are only run when the form
is submitted and valid.

It works by hijacking the click and enter key handlers, which would normally
just submit the form. Instead, the custom function at the top of the script
runs, before finally actually submitting the form.
*/

function submitHandler(e) {
  e.preventDefault();
  dataLayer.push({'event': 'gtm.formSubmit'});
  lp.jQuery('.lp-pom-form form').submit();
}

lp.jQuery(function($) {
  $('.lp-pom-form .lp-pom-button').unbind('click').bind('click.formSubmit', function(e) {
    if ( $('.lp-pom-form form').valid() ) submitHandler(e);
  });

  $('form').unbind('keypress').bind('keypress.formSubmit', function(e) {
    if( e.which === 13 && e.target.nodeName.toLowerCase() !== 'textarea' && $('.lp-pom-form form').valid() )
      submitHandler(e);
  });
});
