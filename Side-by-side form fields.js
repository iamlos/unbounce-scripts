$(function(){

  var width = 75;
  var spacing = 10;

  var month = $('#retirement_date').parent();
  var year = $('#retirement_date_year').parent();

  var both = month.add(year);
  both.css('width', width+'px');
  both.children('input, select').css('width', '100%');
  both.children('label').css('width', '280px');

  var newTop = month.position().top;
  if(!year.children('label').length) newTop = newTop + 19;
  year.css({
    'top': newTop+'px',
    'left': width+spacing +'px'
  });

  var nextFields = year.nextAll().add( $('.lp-pom-form .lp-pom-button').eq(0) );

  nextFields.each(function(){
    $(this).css('margin-top', '-'+$(this).height()+'px');
  });

});