// Redirect to either
var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|webos|palm/i.test(navigator.userAgent.toLowerCase()));
var params = window.location.href.split('?')[1];
if(mobile){
  var url = 'YOUR MOBILE PAGE URL';
}else{
  var url = 'YOUR DESKTOP PAGE URL';
}
document.location = (params === undefined) ? url : url + '?' + params;



// Just redirect to mobile
var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|webos|palm/i.test(navigator.userAgent.toLowerCase()));
if(mobile){
  var params = window.location.href.split('?')[1];
  var url = 'YOUR MOBILE PAGE URL';
  document.location = (params === undefined) ? url : url + '?' + params;
}