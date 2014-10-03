lp.jQuery(function($) {

  // Config
  var field = 'postal_code';
  var message = 'Please enter a valid Canadian postal code';

  // Define the rule and apply it to the field
  $.validator.addMethod('canadianPostalCode', function(value) {
    return /^([a-zA-Z]\d[a-zA-z]\s?\d[a-zA-Z]\d)$/.test(value);
  }, message);

  var rule = module.lp.form.data.validationRules[field];
  if ( rule ) rule.canadianPostalCode = true;

});
