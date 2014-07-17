lp.jQuery(function($) {

  // Config
  var field = 'email';
  var message = 'Please enter a valid ZIP code';

  // Define the rule and apply it to the field
  $.validator.addMethod('zipCode', function(value) {
    return !isNaN(value) && value % 1 === 0 && value.length === 5;
  }, message);
  module.lp.form.data.validationRules[field].zipCode = true;

});
