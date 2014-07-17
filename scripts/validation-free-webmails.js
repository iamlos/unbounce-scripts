lp.jQuery(function($) {

  // Config
  var field = 'email';
  var message = 'Please enter your business email address.';

  // Define the rule and apply it to the field
  $.validator.addMethod('notWebmail', function(value) {
    return !/\@(gmail|googlemail|hotmail|live|msn|outlook|yahoo|ymail|aol)\./.test(value);
  }, message);
  module.lp.form.data.validationRules[field].notWebmail = true;

});
