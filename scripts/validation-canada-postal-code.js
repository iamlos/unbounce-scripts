lp.jQuery(function($) {

  var ruleID = 'canadianPostalCode';
  var field = 'postal_code';
  var message = 'Please enter a valid Canadian postal code';

  var rules = module.lp.form.data.validationRules[field];

  $.validator.addMethod(ruleID, function(value, field) {
    var valid = /^([a-zA-Z]\d[a-zA-z]\s?\d[a-zA-Z]\d)$/.test(value);
    return valid || (!rules.required && !value);
  }, message);

  rules[ruleID] = true;

});
