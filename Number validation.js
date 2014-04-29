$(function(){

  // Change this to the name of your numbers-only field
  var numField = 'phone_number';
  
  var numError = 'Field must contain numbers only';

  window.module.lp.form.data.validationRules[numField].digits = true;
  window.module.lp.form.data.validationMessages[numField].digits = numError;

});