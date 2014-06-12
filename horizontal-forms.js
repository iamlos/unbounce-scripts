lp.jQuery(function($) {

  // Spacing between fields, in pixels:
  var spacing = 20;

  // Options for the submit button placement are 'inline', 'newline' or 'manual':
  // Manual means the script won't touch the submit button - it can be positioned in the builder.
  var submitPlacement = 'inline';

  // There's usually no need to change anything beyond here.

  // Grab all form fields and the submit button
  var form = $('.lp-pom-form').eq(0);
  var fields = $('div.lp-pom-form-field');
  var button = $('.lp-pom-form .lp-pom-button').eq(0);
  if ( submitPlacement != 'manual' ) fields = fields.add(button);

  // Work out the horizontal offset of fields
  var width = fields.eq(0).width() + spacing;

  // Record the first field's height as tallest for now
  var tallest = fields.eq(0).height();

  // Get the maximum width the form can be
  var maxWidth = $('.lp-pom-block').eq(0).width() - form.position().left;

  var top = 0;
  var left = 0;

  // Loop through each field
  for ( var i = 1 ; i < fields.length ; i ++ ) {
    field = fields.eq(i);

    // Add a new 'width' amount to last field's left position for placement later
    left = left + width;

    // Check if the right edge of this field will be beyond maximum width
    if ( left + width > maxWidth ) {

      // If so, start a new line under the tallest field on current line
      top = top + tallest + spacing;
      left = 0;

      // Reset tallest to current field, for now
      tallest = field.height();
    }

    var thisTop = top;

    if ( field.is('.lp-pom-button') ) {

      if ( submitPlacement === 'newline' ) {
        // Put button on new line
        thisTop = top + tallest + spacing;
        left = 0;
      } else {
        // Format button to better align with form fields
        thisTop = top + 19;
        field.css('height', '32px');
      }

    // If it's a field without a label, add additional vertical offset
    } else if ( !$(field).children('label').length ) {
      thisTop = top + 19;
    }

    // Position the field
    field.css({
      'top': thisTop + 'px',
      'left': left + 'px'
    });

    // If this field is taller than the others on this line so far, record it as the tallest
    if ( field.height() > tallest ) tallest = field.height();

  }

  // Resize the form container so error boxes are positioned better
  form.css({
    'right': '0',
    'width': 'auto',
    'height': top + tallest +'px'
  });

});
