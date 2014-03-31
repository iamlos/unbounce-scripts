  // Universal

  $(function(){

    $('.lp-pom-button').not('.lp-pom-form .lp-pom-button').click( function(e){

      e.preventDefault();
      var buttonLink = $(this).attr('href');
      
      function go(){
        window.location = buttonLink;
      }
      
      if(typeof ga == 'function'){
        var category = $(this).children('span').eq(0).html();
        ga('send', 'event', category, 'click', {
          'hitCallback': function(){
            go();
          }
        });
      }else{
        go();
      }

    });

  });



  // Classic

  $(function(){

    $('.lp-pom-button').not('.lp-pom-form .lp-pom-button').click( function(e){

      e.preventDefault();
      var buttonLink = $(this).attr('href');
      
      function go(){
        window.location = buttonLink;
      }
      
      if(window._gat){
        var category = $(this).children('span').eq(0).html();
        _gaq.push(['_set','hitCallback', go]);
        _gaq.push(['_trackEvent', 'Button', 'click', category]);
      }else{
        go();
      }
    
    });

  });