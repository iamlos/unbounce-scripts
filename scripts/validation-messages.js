function ValidationErrors() {
  var data = window.module.lp.form.data;
  var messages = data.validationMessages;
  var rules = data.validationRules;

  this.changeTitle = function(titleText) {
    lp.jQuery(function($) {
      $('#' + data.errorContainerId).find('div.error').text(titleText);
    });
  };

  this.changeField = function(field, required, invalid) {
    if ( !messages[field] ) return;
    messages[field].required = required;
    if ( invalid && rules[field].email ) messages[field].email = invalid;
    if ( invalid && rules[field].phone ) messages[field].phone = invalid;
  };
}
var errors = new ValidationErrors(lp.jQuery);

// Change the title bar of the validation error box
errors.changeTitle('Please fix these issues:');

// Change the error text for specific fields. The first message is shown when nothing is
// entered and the second is shown when an invalid email/phone number is entered.
errors.changeField("name", "You forgot to enter your name!");
errors.changeField("email", "You forgot to enter an email address!", "That doesn't seem to be a valid email!");
errors.changeField("phone_number", "You forgot to enter a phone number!", "That doesn't seem to be a valid phone number!");
