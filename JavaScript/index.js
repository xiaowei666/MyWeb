$(function(){

    $(window).scroll(function(){
        $(".h-ban").css({height:"100%"});
        $("")
    });
    var flag = false;
    $(".home").click(function(){
        $(".head-ab").toggle();
        if(flag){
            $(this).css({"background":"#47464E",color:"#fff"});
            flag = false;
        }else{
            $(this).css({"background":"#000",color:"#fff"});
            flag = true;
        }
    })

    //点击下拉
    $("#xiala").click(function(){
        var top = $("#ski").offset().top;
        $({top: $(window).scrollTop()}).animate({top: top},{
            duration: 700,
            step:function(){
                $(window).scrollTop(this.top);
            }
        });
    })
    //head头部跳转
    $(".xiba").each(function(i){
        $(this).data("index",i);
    })
    $(".axiba").each(function(i){
        $(this).data("index",i);
    })
    $(".aad li").each(function(i){
        $(this).data("index",i);
    })
    $(".bbd li").each(function(i){
        $(this).data("index",i);
    })
    $(".aad li").click(function(){
        var index = $(this).data("index");
        $(".xiba").removeClass("back");
        $(".axiba").removeClass("back");
        $(this).addClass("back");
        $($(".axiba")[index]).addClass("back");

        var aj =$(".kaiji")[index];

        var top2  =$(aj) .offset().top;
        console.log(top2);
        $({top: $(window).scrollTop()}).animate({top: top2},{
            duration: 700,
            step:function(){
                $(window).scrollTop(this.top);
            }
        });
    })
    $(".bbd li").click(function(){
        var index = $(this).data("index");
        $(".xiba").removeClass("back");
        $(".axiba").removeClass("back");
        $(this).addClass("back");
        $($(".axiba")[index]).addClass("back");

        var aj =$(".kaiji")[index];

        var top2  =$(aj) .offset().top;
        $({top: $(window).scrollTop()}).animate({top: top2},{
            duration: 700,
            step:function(){
                $(window).scrollTop(this.top);
            }
        });
    })

    $(".xiba").click(function(){
        var index = $(this).data("index");
        $(".xiba").removeClass("back");
        $(".axiba").removeClass("back");
        $(this).addClass("back");
        $($(".axiba")[index]).addClass("back");

        var aj =$(".kaiji")[index];

        var top2  =$(aj) .offset().top;
        console.log(top2);
        $({top: $(window).scrollTop()}).animate({top: top2},{
            duration: 700,
            step:function(){
                $(window).scrollTop(this.top);
            }
        });
    })
    $(".axiba").click(function(){
        var index = $(this).data("index");
        var bj = $(".kaiji")[index];
        $(".xiba").removeClass("back");
        $(".axiba").removeClass("back");
        $($(".xiba")[index]).addClass("back");
        $(this).addClass("back");
        var top3  = $(bj).offset().top;
        console.log(top3);
        $({top: $(window).scrollTop()}).animate({top: top3},{
            duration: 700,
            step:function(){
                $(window).scrollTop(this.top);
            }
        });
    })
    //$(window).scroll(function() {
    //    for(var i = 0 ; i < $(".kaiji").length ;i++){
    //        if($(window).scrollTop()>=$($(".kaiji")[i]).offset().top && $(window).scrollTop()<=$($(".kaiji")[i+1]).offset().
    //                top){
    //          $(".kaiji .row .a-h").removeAttr("data-role");
    //            $($(".kaiji")[i]).attr("data-role","animate-left");
    //        }
    //    }
    //
    //});
    //导航栏的显示
    var ti;
    $(window).scroll(function(){
        if($(window).scrollTop() > 300){
            clearTimeout(ti);
            ti = setTimeout(function(){
                $('.head2').show();
                $('.top').show();
            },100);
        }else{
            clearTimeout(ti);
            $('.head2').hide();
            $(".top").hide();
        };
    });


    //回到顶部
    $(".top").click(function(){
        var aa = $(window).scrollTop() ;
        var s = aa/10;
        $({top: $(window).scrollTop()}).animate({top: 0},{
            duration: 700,
            step:function(){
                $(window).scrollTop(this.top);
            }
        });
    });

    //saysomething动态布局
    var tt,ll,lef = 0,ri=200;
    function pai(){
        for(var i = 0 ; i < $(".saysome h3").length  ;i++){
            if(i%2==0){
               tt = 12;
                ri+=200;
                $($(".saysome h3")[i]).css({position:"absolute",top:tt,left:lef});
            }else{
                tt = 160 ;
                $($(".saysome h3")[i]).css({position:"absolute",top:tt,left:ri});
                lef+=200;
            }


        }
    }
    pai();
    //滚动检测
    setInterval(function(){
        for(var i = 0 ; i < $(".kaiji").length ; i++ ){
            var wit = $(window).scrollTop() , tht = $( $('.kaiji')[i] ).offset().top，tat = $( $('.kaiji')[i+1] ).offset().top ;

            if(wit >= tht && wit <= tat){
                $(".xiba").removeClass("back");
                $($(".xiba")[i+1]).addClass("back");
                 $(".axiba").removeClass("back");
                $($(".axiba")[i+1]).addClass("back");
            }
        }
    },100);

    //滑动事件
     touch.on(".big-ban","dragstart",function(e){
        margin = $(".big-ban")[0].offsetLeft;
    })
    touch.on(".big-ban","drag",function(e){
        margin = margin + e.x;
        $('.big-ban').css({'margin-left': margin});
    })
    touch.on(".big-ban","dragend",function(e){
        if(Math.abs(e.x)>=300 || e.factor<5){
            if(e.direction == "left" ){
                index++;
                if(index==4){
                    index=0;
                    $('.big-ban').animate({'margin-left':'0px'},200);
                    return ;
                }
                var left = -index*100+"%";
                $('.big-ban').animate({'margin-left':left},200);
                changecolor(index);
            }else if(e.direction == "right"){
                index--;
                if(index==-1){
    
                    index=0;
                    $('.big-ban').animate({'margin-left':'0px'},200);
                    return;
                }else{
                    if(index==4){
                        index=0;
                        $('.big-ban').animate({'margin-left':'0px'},200);
                        return ;
                    }
                    var left = -index*100+"%";
                    $('.big-ban').animate({'margin-left':left},200);
                    changecolor(index);
                }
                changecolor(index);
            }
            }else{$('.big-ban').animate({'margin-left':'0px'});}
        console.log(index,"12121");
    })


    $(".big-ban").mousedown(function(e){
        e.preventDefault();
    })


})