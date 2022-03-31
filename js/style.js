jQuery( document ).ready(function() {
    jQuery('.experiences-landing').owlCarousel({
        margin: 20,
        loop: true,
        items: 2,
        center:true,
        nav:false,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            991:{
                items:2,
                nav:true,
                loop:true,
                center:false,
            },
            1199:{
                center:true,
            }
        }
    })
    
    jQuery(".main-banner").owlCarousel({ 
        loop:true,
        margin:10,
        items: 1,
        nav:false,
        dots:true,
        autoplay:true,
    })
    jQuery(".press-says-slider").owlCarousel({ 
        loop:true,
        margin:10,
        items: 1,
        nav:false,
        dots:true,
    })
    jQuery('.testimonial').owlCarousel({
        margin: 20,
        loop: true,
        items: 3,
        center:true,
        autoplay:true,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
                loop:true
            }
        }
    })
    jQuery('.investor-owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        navText:["<div class='prev-inv'><img src='images/icons/prev.svg'></div>","<div class='next-inv'><img src='images/icons/next.svg'></div>"],
        dots:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
                dots:true,
                nav:false,
            },
            600:{
                items:3,
                nav:false,
            },
            1000:{
                items:4,
                nav:true,
            }
        }
    })
    jQuery('.deals_slider-owl').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText:["<div class='prev-inv'><img src='images/icons/prev.svg'></div>","<div class='next-inv'><img src='images/icons/next.svg'></div>"],
        dots:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:true,
            },
            600:{
                items:2,
                nav:false,
            },
            1000:{
                items:3,
                nav:true,
            },
            1300:{
                items:4,
            }
        }
    })
    jQuery('.groups-owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        navText:["<div class='prev-inv'><img src='images/icons/prev.svg'></div>","<div class='next-inv'><img src='images/icons/next.svg'></div>"],
        dots:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            600:{
                items:1,
                nav:false,
            },
            1000:{
                items:1,
                nav:true,
            }
        }
    })
    jQuery('.whatto-owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        navText:["<div class='prev-inv'><img src='images/icons/prev.svg'></div>","<div class='next-inv'><img src='images/icons/next.svg'></div>"],
        dots:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:true,
            },
            600:{
                items:2,
                nav:false,
            },
            1000:{
                items:3,
                nav:true,
            }
        }
    })
    jQuery('.founder-owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        navText:["<div class='prev-inv'><img src='images/icons/prev.svg'></div>","<div class='next-inv'><img src='images/icons/next.svg'></div>"],
        dots:true,
        autoplay:true,
        items:1,
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            600:{
                items:1,
                nav:false,
            },
            1000:{
                items:1,
                nav:true,
            }
        }
    })
    jQuery(".scroll_down a[href^='#']").click(function(e) {
        e.preventDefault();
        var position = jQuery(jQuery(this).attr("href")).offset().top - 200;
        jQuery("body, html").animate({
            scrollTop: position
        },300 );
    });
    
    jQuery(".fixes_bar a[href^='#']").click(function(e) {
        e.preventDefault();
        var position = jQuery(jQuery(this).attr("href")).offset().top - 150;
        jQuery("body, html").animate({
            scrollTop: position
        });
        jQuery(".fixes_bar a.active").removeClass("active");
        jQuery(this).addClass("active");
    });
    
    
    var headr = jQuery(".navbar");
    jQuery(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos >= 50) {
			headr.addClass("stick");
		} else {
			headr.removeClass("stick");	
		}
	});
    //jQuery(".nav_panel_item:first").addClass("is_active")
    jQuery(".nav_panel_item").hover(function () {
        jQuery(this).toggleClass("is_active");
    });
    jQuery(".nav_megha").hover(function () {
        jQuery(this).toggleClass("is_active");
    });
    // 
    

  var windowWidth = jQuery(window).width();
    if(windowWidth <= 991){
        
        jQuery(".mobile_menu .megha_drop" ).wrap( "<span class='parent-wrap'></span>" );
        jQuery(".mobile_menu .parent-wrap").append("<span class='drop-arrow'></span>");
        jQuery(".mobile_menu .nav_panel_item > a" ).wrap( "<span class='parent-wrap'></span>" );
        jQuery(".mobile_menu .nav_panel_item .parent-wrap").append("<span class='drop-arrow'></span>");
        
        
        jQuery(".nav_megha .megha_drop").next(".drop-arrow").click(function(){
            jQuery(".nav_megha  .nav_panel_mobile").addClass("show")
        });
        jQuery(".nab_back").click(function(){
            jQuery(this).parent().parent().removeClass("is_active");
        });
        jQuery(".desti_back").click(function(){
            jQuery(this).parent().removeClass("show");
        });
    }
    // 
    jQuery(".hamburger").click(function(){
        jQuery(this).toggleClass("is-active");
      });
    jQuery(".navbar-toggler").click(function(){
        jQuery(".mobile_menu").toggleClass("active");
    });
    
    jQuery(".close_mobile").click(function(){
        jQuery(".mobile_menu").removeClass("active");
        jQuery(".hamburger").removeClass("is-active");
    });

    jQuery(".filter_toggle").click(function(){
        jQuery(".filter_body").toggleClass("show");
    });
    jQuery(".head_search_btn").click(function(){
        jQuery(".top_search").toggle();
    });
    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('.go_top').fadeIn();
        } else {
            $('.go_top').fadeOut();
        }
    }); 

    $('.go_top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 900);
        return false;
    });
    //
    function AddReadMore() {
        var carLmt = 80;
        var readMoreTxt = " ... Read More";
        var readLessTxt = " Read Less";
        $(".addReadMore").each(function() {
            if ($(this).find(".firstSec").length)
                return;

            var allstr = $(this).text();
            if (allstr.length > carLmt) {
                var firstSet = allstr.substring(0, carLmt);
                var secdHalf = allstr.substring(carLmt, allstr.length);
                var strtoadd = firstSet + "<span class='SecSec'>" + secdHalf + "</span><span class='readMore'  title='Click to Show More'>" + readMoreTxt + "</span><span class='readLess' title='Click to Show Less'>" + readLessTxt + "</span>";
                $(this).html(strtoadd);
            }

        });
        $(document).on("click", ".readMore,.readLess", function() {
            $(this).closest(".addReadMore").toggleClass("showlesscontent showmorecontent");
        });
    }
    $(function() {
        AddReadMore();
    });
});

