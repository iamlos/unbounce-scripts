$(function(){

  // Change this to the name of your ZIP code field
  var zipField = 'zip';

  var zipError = 'ZIP code must contain five numbers only';

  var zipRule = window.module.lp.form.data.validationRules[zipField];
  zipRule.digits = true;
  zipRule.minlength = 5;
  zipRule.maxlength = 5;

  var zipMessage = window.module.lp.form.data.validationMessages[zipField];
  zipMessage.digits = zipError;
  zipMessage.minlength = zipError;
  zipMessage.maxlength = zipError;

});