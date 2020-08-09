 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function() {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/favicon.ico");
         document.title = 'ヽ(●-`Д´-)ノ真的要离开了吗？';
         clearTimeout(titleTime);
     } else {
         $('[rel="icon"]').attr('href', "/img/favicon.ico");
         document.title = 'ヾ(Ő∀Ő3)ノ欢迎回家！' + OriginTitle;
         titleTime = setTimeout(function() {
             document.title = OriginTitle;
         }, 2000);
     }
 });
