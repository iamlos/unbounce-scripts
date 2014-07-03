lp.jQuery(function($){

  // The dropdown's ID
  var id = '#country';

  // Map of old to new values
  var values = {
    'Australia': 'AU',
    'Canada': 'CA',
    'United States': 'US',
    'United Kingdom': 'UK'
  };

  $.each(values, function(oldVal, newVal) {
    $('select' + id +' option[value="' + oldVal + '"]').val( newVal );
  });

});
