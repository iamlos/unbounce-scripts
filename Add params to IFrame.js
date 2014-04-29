$(function(){
  
  var iframe = $('#your_iframe_id');
  iframe.attr('src', iframe.attr('src')+window.location.search); 
  
});