var url = 'https://gist.githubusercontent.com/markwainwright/9517529/raw/dropdown_data.json',
		dropdownElement,
		success;

// The JSONP file runs this function once loaded.
function dropdown(json) {
	success = true;
	var options = '';
	lp.jQuery.each(json.options, function() {
		options += '<option value="'+this.value+'">'+this.title+'</option>';
	});
	dropdownElement.html(options);
}

lp.jQuery(function($) {
	dropdownElement = $('#my_dropdown');
	var success = false;

	//Make an AJAX request to the JSONP file.
	$.ajax({
		type: 'GET',
		url: 'http://markwainwright.com/dropdown-data.json',
		dataType: 'jsonp'
	});
});

// Wait 2 seconds and throw an error if nothing has happened.
setTimeout(function() {
	if ( !success ) dropdownElement.html( '<option disabled>Failed to load options.' +
																				'Please try reloading the page.</option>' );
}, 2000);
