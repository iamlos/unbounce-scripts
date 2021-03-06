function HorizontalForm(spacing, submitPlacement) {
  var _this = this;

  this.spacing = spacing;
  this.submitPlacement = submitPlacement;
  this.$ = window.lp.jQuery;

  // Wait for the DOM
  this.$(function() {

    // Grab all form fields and the submit button
    _this.$form = _this.$('.lp-pom-form').eq(0);
    _this.$fields = _this.$('div.lp-pom-form-field');
    _this.$button = _this.$('.lp-pom-form .lp-pom-button').eq(0);

    if ( _this.submitPlacement !== 'manual' ) {
      _this.$fields = _this.$fields.add( _this.$button );
    }

    // Lay out the form
    _this.doLayout();
  });

  // Lay out the form again when breakpoint changes
  this.$(window).resize(function() {
    _this.doLayout();
  });
}

HorizontalForm.prototype.doLayout = function() {

  // Work out the horizontal offset of fields
  var width = this.$fields.eq(0).width() + this.spacing;

  // Record the first field's height as tallest for now
  var tallest = this.$fields.eq(0).height();

  // Get the maximum width the form can be
  // Parent will either be .lp-positioned-content or .lp-pom-box
  var maxWidth = this.$form.parent().width() - this.$form.position().left;

  var top = 0;
  var left = 0;

  // Loop through each field
  for ( var i = 0 ; i < this.$fields.length ; i ++ ) {
    field = this.$fields.eq(i);

    // Add a new 'width' amount to last field's left position for placement later
    left = i === 0 ? left : left + width;

    // Check if the right edge of this field will be beyond maximum width
    if ( left + width > maxWidth ) {

      // If so, start a new line under the tallest field on current line -
      // unless this is the first field, which means the script isn't going
      // to change the layout at all, e.g. on mobile
      top = i === 0 ? top: top + tallest + this.spacing;
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
        var submitHeight = this.$form.find(':text').eq(0).height();
        field.css('height', submitHeight - 1 + 'px');
      }

    // If it's a field without a label, add additional vertical offset
    } else if ( !this.$(field).children('label').length ) {
      thisTop = top + 19;
    }

    // Position the field
    field.css({
      top: thisTop + 'px',
      left: left + 'px'
    });

    // If this field is taller than the others on this line so far, record it as the tallest
    if ( field.height() > tallest ) { tallest = field.height(); }

  }

  // Resize the form container so error boxes are positioned better
  this.$form.css({
    right: '0',
    width: 'auto',
    height: top + tallest + 'px'
  });

};

//new HorizontalForm(20, 'inline');
