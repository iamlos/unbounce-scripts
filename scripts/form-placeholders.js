lp.jQuery(function($) {

  // Define your placeholder texts here, corresponding to Unbounce's field names
  var placeholders = {
    'first_name': 'First Name',
    'last_name': 'Last Name',
    'email': 'Email'
  };

  // Sets the HTML5 placeholders
  for ( var id in placeholders ) {
    $('#'+id).attr('placeholder', placeholders[id]);
  }

  // Polyfill to add support for browsers like IE<=9
  if( document.createElement('input').placeholder === undefined ) {
    $('html').attr('data-placeholder-focus', 'false');
    $.getScript('//jamesallardice.github.io/Placeholders.js/assets/js/placeholders.jquery.min.js', function() {
      $(function() {

        var rules = window.module.lp.form.data.validationRules;
        var messages = window.module.lp.form.data.validationMessages;

        // Adds validation rule that fields cannot be equal to their placeholder (unless that value was typed in)
        lp.jQuery.validator.addMethod('notEqual', function(value, element, placeholder) {
          return this.optional(element) || $(element).attr('data-placeholder-active') !== 'true' || value !== placeholder;
        }, function(value, element) {
          return messages[ $(element).attr('id') ].required;
        });

        // Applies this rule to all required fields
        for ( var id in placeholders ) {
          if ( $( '#'+id ).length ) {
            if ( typeof messages[id].required !== 'undefined' ) {
              rules[id].notEqual = placeholders[id];
            } else {
              rules[id] = {};
            }
          }
        }
      });
    });
  }

});
