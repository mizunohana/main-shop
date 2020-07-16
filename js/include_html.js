//ヘッダー
 $(function(){ $.ajaxSetup({cache:false}); $("#include_header").load("./include/header.html"); });

 //showroom
 $(function(){ $.ajaxSetup({cache:false}); $("#include_showroom").load("./include/showroom.html"); });

 //aside
 $(function(){ $.ajaxSetup({cache:false}); $("aside").load("./include/aside.html"); });

  //footer
  $(function(){ $.ajaxSetup({cache:false}); $("#include_footer").load("./include/footer.html"); });