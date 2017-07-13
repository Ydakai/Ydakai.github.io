// JavaScript Document
$(function(){

/*党员风采轮播*/
	$(".fengcai_list").hover(function(){ jQuery(this).find(".arrow").stop(true,true).fadeIn(2000) },function(){ jQuery(this).find(".arrow").fadeOut(2000) });
	$(".fengcai_list").slide({ titCell:".hd ul", mainCell:".img_list ul", effect:"leftLoop",autoPlay:true, vis:3,autoPage:true, trigger:"click"});


	/*党员活动轮播*/
	$(".roll_box").hover(function(){ jQuery(this).find(".jt").stop(true,true).fadeIn(300) },function(){ jQuery(this).find(".jt").fadeOut(300) });
	$(".roll_box").slide({ titCell:".hd ul", mainCell:".list_box .hd_list", effect:"leftLoop",autoPlay:true, vis:6,autoPage:true, trigger:"click"});



	$(".dj_tab li").click( function(){
		$(this).addClass("active").siblings().removeClass("active");	
	    $('.dj_tab_con').eq($(this).index()).show().siblings().hide();
		
	})




/*banner图轮播*/


	var myClone=$('.banner ul li').eq(0).clone(true);
	var myTag=$(myClone);
	var olliKey=0;
	var imgKey=0;
	var timer01=null;
	var myFn=function(){
		olliKey++;
		if(olliKey>4){
			olliKey=0;
		};
		$('ol li').eq(olliKey).addClass('cur').siblings().removeClass('cur');
		imgKey++;
		if(imgKey>5){
			imgKey=1;
			$('.banner ul').css('left','0px');	
		};
		var imgWeizhi=imgKey*-450;
		$('.banner ul').stop().animate({'left':imgWeizhi+'px'},1000);		
	}
	timer01=setInterval(myFn,3000);
	
	$('.banner ul').append(myTag);
	$('.banner ol li').click(function(){
		olliKey=$(this).index();		
		imgKey=$(this).index();
		$('.banner ol li').eq($(this).index()).addClass('cur').siblings().removeClass('cur');
		var imgWeizhi=imgKey*-450;
		$('.banner ul').stop().animate({'left':imgWeizhi+'px'},1000);
	});
	$('.banner').hover(function(){
		clearInterval(timer01);	
	},function(){
		timer01=setInterval(myFn,3000);	
	});
});

/*党员之家*/
$(document).ready(function(){
	$(".brand_detail").hide();

	$(".brand_detail3").hide();

	$(".brand_detail4").hide();

	$(".brand_detail5").hide();

		$(".brand_item").click(function(){

			$(".brand_name").hide();
			$(".brand_item").css('background-image','url(about:blank)');
			$(".brand_item1").css('background-image','url(about:blank)');
			$(".brand_item2").css('background-image','url(about:blank)');
			$(".brand_item3").css('background-image','url(about:blank)');

			$(".brand_detail").show();

				$(".brand_item1").hover(function(){

						$(".brand_detail").hide();

						$(".brand_detail3").show();

				},function(){

					$(".brand_detail3").hide();

					$(".brand_detail").show();

				});

				$(".brand_item2").hover(function(){

						$(".brand_detail").hide();

						$(".brand_detail4").show();

				},function(){

					$(".brand_detail4").hide();

					$(".brand_detail").show();

				});

				$(".brand_item3").hover(function(){

						$(".brand_detail").hide();

						$(".brand_detail5").show();

				},function(){

					$(".brand_detail5").hide();

					$(".brand_detail").show();

				});		

		})
});

