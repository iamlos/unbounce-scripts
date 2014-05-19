function ValidationErrors(){
  this.data = window.module.lp.form.data;
  this.title = $('#' + this.data.errorContainerId).find('div.error');
  this.messages = this.data.validationMessages;
  this.rules = this.data.validationRules;

  this.changeTitle = function(titleText) {
    var _this = this;
    $(function(){
      _this.title.text(titleText);
    });
  };

  this.changeField = function(field, required, invalid){
    if ( this.messages[field] ){
      this.messages[field].required = required;
      if ( invalid && this.rules[field].email ) this.messages[field].email = invalid;
      if ( invalid && this.rules[field].phone ) this.messages[field].phone = invalid;
    }
  };
} var errors = new ValidationErrors();

// Change the title bar of the validation error box
errors.changeTitle('Please fix these issues:');

// Change the error text for specific fields. The first is shown when nothing is
// entered, the second is shown when an invalid email/phone number is entered.
errors.changeField('name', 'You forgot to enter your name!');
errors.changeField('email', 'You forgot to enter an email address!', 'That doesn\'t seem to be a valid email!');
errors.changeField('phone_number', 'You forgot to enter a phone number!', 'That doesn\'t seem to be a valid phone number!');
