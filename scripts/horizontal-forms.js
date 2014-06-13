function HorizontalForm(spacing, submitPlacement) {

  this.spacing = spacing;
  this.submitPlacement = submitPlacement;

  // Grab all form fields and the submit button
  this.form = $('.lp-pom-form').eq(0);
  this.fields = $('div.lp-pom-form-field');
  this.button = $('.lp-pom-form .lp-pom-button').eq(0);
  if ( this.submitPlacement !== 'manual' ) this.fields = this.fields.add( this.button );
  var _this = this;

  // Lay the form out when ready
  lp.jQuery(function(){
    _this.layout();
  });

  // Re-layout when breakpoint changes
  lp.jQuery(window).resize(function() {
    _this.layout();
  });
}

HorizontalForm.prototype.layout = function() {

  // Work out the horizontal offset of fields
  var width = this.fields.eq(0).width() + this.spacing;

  // Record the first field's height as tallest for now
  var tallest = this.fields.eq(0).height();

  // Get the maximum width the form can be
  var maxWidth = $('.lp-pom-block').eq(0).width() - this.form.position().left;

  var top = 0;
  var left = 0;

  // Loop through each field
  for ( var i = 1 ; i < this.fields.length ; i ++ ) {
    field = this.fields.eq(i);

    // Add a new 'width' amount to last field's left position for placement later
    left = left + width;

    // Check if the right edge of this field will be beyond maximum width
    if ( left + width > maxWidth ) {

      // If so, start a new line under the tallest field on current line
      top = top + tallest + this.spacing;
      left = 0;

      // Reset tallest to current field, for now
      tallest = field.height();
    }

    var thisTop = top;

    if ( field.is('.lp-pom-button') ) {

      if ( this.submitPlacement === 'newline' ) {
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
  this.form.css({
    'right': '0',
    'width': 'auto',
    'height': top + tallest +'px'
  });

};

//new HorizontalForm(20, 'inline');
