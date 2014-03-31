$(function(){

	$('#lp-pom-text-22 a').fancybox({
		type: 'iframe',
		width: 840,
		height: 480,
		onComplete: function(){ 
			newSrc = $('iframe#fancybox-frame').attr('src') + window.location.search;
			$('iframe#fancybox-frame').attr('src',newSrc); 
		}
	});

});