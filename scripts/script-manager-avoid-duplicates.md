These are JavaScript snippets that wrap around the Script Manager versions of a tracking script,
and ensure that the script won’t be run twice. Using these snippets does require a working knowledge
of JavaScript. This is definitely a hacky workaround, and in most cases, the much better solution
is to manually remove the scripts from individual pages.



## Universal Analytics
*Replace `UA-XXXXXXX-X` with your tracking code*

```html
<script>
  if ( typeof ga === 'undefined') {


    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-XXXXXXX-X', 'auto');
    ga('send', 'pageview');


  }
</script>
```




## Classic Analytics
*Replace `UA-XXXXX-X` with your tracking code*

```html
<script>
  if ( typeof _gaq === 'undefined' ) {


    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-XXXXX-X']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();


  }
</script>
```




## Adwords Conversion Tracking
*Take the regular script and add this line to bottom of CDATA section (right after the last `var` statement, e.g. `var google_remarketing_only = false;`*

```javascript
if ( lp && lp.jQuery('script[src="//www.googleadservices.com/pagead/conversion.js"]').length > 0 ) google_conversion_id = 0;
```




## Google Tag Manager
*Replace `GTM-XXXXXX` with your container ID*

```html
<script>
  if ( typeof dataLayer !== 'object' ) {


    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-XXXXXX');


  }
</script>
```




## Kissmetrics
*Replace `XXXXXXXX` with your _kmk ID*

```
<script>
  if ( typeof _kmq === 'undefined') {


    var _kmq = _kmq || [];
    var _kmk = _kmk || 'XXXXXXXX';
    function _kms(u){
      setTimeout(function(){
        var d = document, f = d.getElementsByTagName('script')[0],
        s = d.createElement('script');
        s.type = 'text/javascript'; s.async = true; s.src = u;
        f.parentNode.insertBefore(s, f);
      }, 1);
    }
    _kms('//i.kissmetrics.com/i.js');
    _kms('//doug1izaerwt3.cloudfront.net/' + _kmk + '.1.js');


  }
</script>
```
