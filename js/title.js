 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function() {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/favicon.ico");
         document.title = '!!!∑(ﾟДﾟノ)ノ';
         clearTimeout(titleTime);
     } else {
         $('[rel="icon"]').attr('href', "/img/favicon.ico");
         document.title = '(〃'▽'〃)' + OriginTitle;
         titleTime = setTimeout(function() {
             document.title = OriginTitle;
         }, 2000);
     }
 });
