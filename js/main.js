let body_box = $("body");

//gnb 서브메뉴 슬라이드
$(".gnb_btn").click(function(){
    $(".gnb").addClass("on");
    $(".back").fadeIn(300);
    body_box.addClass("on");

    if($(".gnb.on").length){
        $(".back").click(function(){
            $(".gnb").removeClass("on");
            $(".back").fadeOut(300);
            body_box.removeClass("on");
        })        
    }    


    //로그인팝업
    $(".order").click(function(){
        $(".login_pop").addClass("on");
        $(".login_pop_back").addClass("on");

        if($(".gnb.on").length){
            $(".gnb").removeClass("on");
            $(".back").fadeOut(300);            
        }    
/*
        if($(".login_pop.on").length){
            $(".login_pop_back").click(function(){
                $(".login_pop_back").removeClass("on");
                $(".login_pop").removeClass("on");
                body_box.removeClass("on");
            });
        }
        */
    });

    $(".close").on("click",function(){
        $(".login_pop_back").removeClass("on");
        $(".login_pop").removeClass("on");
        body_box.removeClass("on");
    });
});

