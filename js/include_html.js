//ヘッダー
 $(function(){ $.ajaxSetup({cache:false}); $("#include_header").load("./include/header.html"); });

 //showroom
 $(function(){ $.ajaxSetup({cache:false}); $("#include_showroom").load("./include/showroom.html"); });

 //aside
 $(function(){ $.ajaxSetup({cache:false}); $("aside").load("./include/aside.html"); });

  //footer
  $(function(){ $.ajaxSetup({cache:false}); $("#include_footer").load("./include/footer.html"); });

    //スムーズスクロール
    $(function(){
        $('a[href^="#"]').click(function(){
          var speed = 500;
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top;
          $("html, body").animate({scrollTop:position}, speed, "swing");
          return false;
        });
      });