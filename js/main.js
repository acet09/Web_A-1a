// Jquery
$(document).ready(function(){
  //GNB
  $("#GNB > ul > li").hover(function(){
    $(".GNB__sub").stop().slideDown(200);
  },function(){
    $(".GNB__sub").stop().slideUp(200);
  }); 

  // slide
  function slidemove(){
    var smv=$(".slide__box > div").height();
    $(".slide__box").animate({
      top:-smv
    },function(){
      $(".slide__box > div:first").appendTo(".slide__box");
      $(".slide__box").css({
        top:0
      });
    });
  }
  setInterval(slidemove, 3000);

  // tab  
  $(".notgall__list").hide();
  $(".notgall__list:first-child").show();
  $(".notgall__title a").click(function(){
    let num=$(this).index();    
    console.log(num);
    $(".notgall__title a").removeClass('active');
    $(this).addClass('active');
    $(".notgall__list").hide();
    $(".notgall__list").eq(num).show();
  });

  // pop
  $("#pop").hide();
  $("#notice ul li:first-child").click(function(){
    $("#pop").show();
  });

  $("#pop #popclose").click(function(){
    $("#pop").hide();
  });
  
});

