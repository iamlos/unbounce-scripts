lp.jQuery(function($) {

  // Config
  var ruleID = 'myCustomRule';
  var field = 'your_form_field_id';
  var message = 'Message that appears if validation fails';

  var rules = module.lp.form.data.validationRules[field];

  $.validator.addMethod(ruleID, function(value, field) {

    // Replace this with any expression you like. It should evaluate to true
    // if the field validates and false if not. This example adds a validation
    // rule that the user must enter an integer into the field.
    var valid = ( value == parseInt(value, 10) );

    return valid || (!rules.required && !value);
  }, message);

  rules[ruleID] = true;

});
