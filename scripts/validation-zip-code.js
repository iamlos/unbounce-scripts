lp.jQuery(function($) {

  var ruleID = 'zipCode'
  var field = 'zip_code';
  var message = 'Please enter a valid ZIP code';

  var rules = module.lp.form.data.validationRules[field];

  $.validator.addMethod(ruleID, function(value, field) {
    var valid = /^\d{5}([\-]?\d{4})?$/.test(value);
    return valid || (!rules.required && !value);
  }, message);

  rules[ruleID] = true;

});
