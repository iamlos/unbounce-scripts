$(function(){

	// The speed of the scroll in milliseconds:
	var speed = 1000;

	// Find links that are #anchors
	$('a[href^=#]').not('.lp-pom-form .lp-pom-button').click(function(event){

	// Prevent browser from navigating to link
	event.preventDefault();

	// Scroll to this anchor
	var anchor = $(this).attr('href');
	$('html, body').animate({ scrollTop: $(anchor).offset().top }, speed);

	});

});