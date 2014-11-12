$(function() {
  $('a[href]').each(function(){
    $(this).attr('href', $(this).attr('href').replace(/clk(n|g)\/https\//, 'https://').replace(/clk(n|g)\/http\//, 'http://').replace(/clk(n|g)\/tel\//, 'tel:'));
  });
});
