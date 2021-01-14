;(function(window,document,$,undefined){
    
    var stonehenge = {
        init:    function(){
            var that = this;
    
                that.headerFn();
                that.section01Fn();
                that.section02Fn();
                that.section03Fn();
                that.section04Fn();
                that.section05Fn();
                that.section06Fn();
                that.section07Fn();
                that.section08Fn();


        },
        headerFn: function(){
            //섹션전체 변수
            var sec1Top = $('#section01').offset().top;
            var sec2Top = $('#section02').offset().top;
            var sec3Top = $('#section03').offset().top;
            var sec4Top = $('#section04').offset().top;
            var sec5Top = $('#section05').offset().top;
            var sec6Top = $('#section06').offset().top;
            var sec7Top = $('#section07').offset().top;




            // 랭귀지 버튼이벤트
            $(".language-btn").on({
                click:  function(e){
                    e.preventDefault();
                    
                    $(this).toggleClass("addUp");
                    $(".world").stop().slideToggle(500);
                }
            });

            //고탑
            $(window).scroll(function(){
                if( $(window).scrollTop() >= 30 ) {
                    $('.goTop').addClass('addGotop');
                }
                else{
                    $('.goTop').removeClass('addGotop');
                }
            });

            $(".menu-btn").on({
                mouseenter:function(){  //mouseenter = mouseover

                    //서브메뉴의 슬라이드 다운 업 효과(애니메이션)
                    $(".sub").stop().slideUp(0);
                    $(this).next().stop().slideDown(500,"easeOutCirc");
    
                },

            });
        
        
            //마우스가 #nav를 떠나면 mouseleave = mouseout
            $("#nav").on({
                mouseleave:function(){
                    $(".sub").stop().slideUp(500);
                    $(".menu-btn").removeClass("addMainbtn");
                }
            });


            //전체섹션 스크롤 이벤트
            $(window).scroll(function(){
                if($(this).scrollTop() >= sec1Top){
                    $('.scroll-btn-wrap li').removeClass('addPage');
                    $('.scroll-btn-wrap li').eq(0).addClass('addPage');
                }
                if($(this).scrollTop() >= sec2Top){
                    $('.scroll-btn-wrap li').removeClass('addPage');
                    $('.scroll-btn-wrap li').eq(1).addClass('addPage');
                }
                if($(this).scrollTop() >= sec3Top){
                    $('.scroll-btn-wrap li').removeClass('addPage');
                    $('.scroll-btn-wrap li').eq(2).addClass('addPage');
                }
                if($(this).scrollTop() >= sec4Top){
                    $('.scroll-btn-wrap li').removeClass('addPage');
                    $('.scroll-btn-wrap li').eq(3).addClass('addPage');
                }
                if($(this).scrollTop() >= sec5Top){
                    $('.scroll-btn-wrap li').removeClass('addPage');
                    $('.scroll-btn-wrap li').eq(4).addClass('addPage');
                }
                if($(this).scrollTop() >= sec6Top){
                    $('.scroll-btn-wrap li').removeClass('addPage');
                    $('.scroll-btn-wrap li').eq(5).addClass('addPage');
                }
                if($(this).scrollTop() >= sec7Top){
                    $('.scroll-btn-wrap li').removeClass('addPage');
                    $('.scroll-btn-wrap li').eq(6).addClass('addPage');
                }
            });


            $('.scroll-btn').each(function(idx){
               $(this).on({
                   click:   function(){
                        $('.scroll-btn-wrap li').removeClass('addPage');
                        $('.scroll-btn-wrap li').eq(idx).addClass('addPage');   
                        var sec = $(this).attr('href');
                        $('html,body').stop().animate({scrollTop:$( sec ).offset().top});
                   }
               });
            });       


            //////////////////////////////////////////////////////////////////////////////////////////////////////
            // 휠이벤트 

            var _wheelDelta = null;
            var n = $('.wheel-event').length; //9개
            
            
            $('.wheel-event').each(function(idx){
                             
                $(this).on('mousewheel DOMMouseScroll', function(e){
                    e.preventDefault();

                    if(e.detail){
                        _wheelDelta = e.detail*(-1*40);
                    }
                    else{
                        _wheelDelta = e.originalEvent.wheelDelta;
                    }

                        //헤더영역이 마우스 방향에 따라서 변한다
                        if(_wheelDelta < 0){ // 마우스 휠 아래로 돌리면 메뉴바 부드럽게 사라짐
                            
                                if(idx < n-1){
                                    $('html,body').stop().animate({ scrollTop: $(this).next().offset().top }, 600, 'swing');
                            }   
                        }
                        else{ // 마우스 휠 위로 돌리면 메뉴바 부드럽게 나타남
                            
                                if(idx > 0){
                                    $('html,body').stop().animate({ scrollTop: $(this).prev().offset().top }, 600), 'swing';
                                }
                            }

                });

            });


        },


        section01Fn:   function(){
    
            var cnt = 0;
            var n = $('.slide').length-1;  //3=4-1

                //Smooth Scrolling Event
                $('.scroll-down-btn').on({
                    click:  function(){
                        $('html,body').stop().animate({ scrollTop: $('#section02').offset().top }, 1000);
                    }
                });

               
                // 페이드 인아웃 효과 슬라이드
                //메인 다음 슬라이드
                //포인트 : 현재 슬라이드 위에 다음 슬라이드가 서서히 나타난다.
                function mainNextSlideFn(){
                    $('.slide').css({zIndex:1});
                    //현재슬라이드 에]첫번째
                    $('.slide').eq(cnt==0?n:cnt-1).css({zIndex:2});
                    //다음슬라이드 예]두번째
                    $('.slide').eq(cnt).css({zIndex:3}).animate({opacity:0},0).animate({opacity:1},1000); 
                   
                    pageBtnFn(cnt);                             

                }

                
                //메인 이전 슬라이드
                //포인트 : 현재 슬라이드를 사라지게하면 이전 슬라이드 보인다.
                function mainPrevSlideFn(){
                    $('.slide').css({zIndex:1}).animate({opacity:1},0); //초기화
                    //이전 슬라이드
                    $('.slide').eq(cnt).css({zIndex:2});
                    //현재 슬라이드를 사라지게하면 이전 슬라이드가 보인다.
                    $('.slide').eq(cnt==n?0:cnt+1).css({zIndex:3}).animate({opacity:1},0).animate({opacity:0},1000);
                    
                    pageBtnFn(cnt);
                }

                //다음 카운트 함수
                function nextCountFn(){
                    cnt++; //0 1 2
                    if(cnt>n){cnt=0;}
                    mainNextSlideFn();
                }
                //이전 카운트 함수
                function prevCountFn(){
                    cnt--; //2 1 0 2 1 0
                    if(cnt<0){cnt=n;}
                    mainPrevSlideFn();

                    
                }

                //다음 버튼 클릭 이벤트
                 $('.next-btn').on({
                     click:  function(e){
                        e.preventDefault();
                         if( !$('.slide').is(':animated') ){
                             nextCountFn(); //다음카운트
                         }
                     }
                 });

                //이전 버튼 클릭 이벤트
                 $('.prev-btn').on({
                     click:  function(e){
                        e.preventDefault();
                         if( !$('.slide').is(':animated') ){
                             prevCountFn(); //이전카운트
                         }
                     }
                 });
        

                //4-1 인디게이터(페이지버튼) 이벤트 함수(모양 또는 마킹(표시))
                function pageBtnFn(){            
                    $('.page-btn-wrap li').removeClass('addPage');
                    $('.page-btn-wrap li').eq(cnt).addClass('addPage');
                  }


                  //4-2 인디게티터(페이지버튼) 클릭 이벤트 리스너 / 이벤트 핸들러
                  $('.page-btn-wrap').on({
                    click:  function(e){
                       e.preventDefault();
                        if( !$('.slide').is(':animated') ){
                            nextCountFn(); //다음카운트
                            
                        }
                    }
                });
    
            },
            section02Fn: function(){

            },
            section03Fn: function(){
    
            },
            section04Fn: function(){
    
            },
            section05Fn: function(){
    
            },
            section06Fn: function(){
    
            },
            section07Fn: function(){
    
            },
            section08Fn: function(){
    
            },    
    
        };
    
    stonehenge.init();




})(window,document,jQuery);