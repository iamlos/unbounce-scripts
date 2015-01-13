lp.jQuery(function($) {

  var ruleID = 'notWebmail';
  var field = 'email_address';
  var message = 'Please enter your work mail address.';

  var rules = module.lp.form.data.validationRules[field];

  $.validator.addMethod(ruleID, function(value, field) {
    var valid = /\@(?!(me|mac|icloud|gmail|googlemail|hotmail|live|msn|outlook|yahoo|ymail|aol)\.)/.test(value.toLowerCase());
    return valid || (!rules.required && !value);
  }, message);

  rules[ruleID] = true;

});
