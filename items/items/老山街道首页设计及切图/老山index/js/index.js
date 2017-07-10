// JavaScript Document
$(function(){
	// 导航下拉
	$(".nav li").hover(function(){
		$(this).children('.m_ul').toggle();	
	});

	// 政务公开、公告、政策切换
	$(".tab_new .tab ul li").hover(function(){
		$(this).addClass("curr").siblings().removeClass("curr");
		$(".tab_new .tab_con .dongtai_content").eq($(this).index()).show().siblings().hide();	
	});

	$('tab_new .tab ul li').hover(function(){
		$(this).addClass('curr').siblings().removeClass('curr');
		$(".tab_new .tab_con .dongtai_content").eq($(this).index()).show.siblings().hide();


	});


})

// 轮播图
$(function(){
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
		$('ol li').eq(olliKey).addClass('current').siblings().removeClass('current');
		imgKey++;
		if(imgKey>5){
			imgKey=1;
			$('.banner ul').css('left','0px');	
		};
		var imgWeizhi=imgKey*-630;
		$('.banner ul').stop().animate({'left':imgWeizhi+'px'},500);		
	}
	timer01=setInterval(myFn,2000);
	
	$('.banner ul').append(myTag);
	$('.banner ol li').click(function(){
		olliKey=$(this).index();		
		imgKey=$(this).index();
		$('.banner ol li').eq($(this).index()).addClass('current').siblings().removeClass('current');
		var imgWeizhi=imgKey*-630;
		$('.banner ul').stop().animate({'left':imgWeizhi+'px'},500);
	});
	$('.banner').hover(function(){
		clearInterval(timer01);	
	},function(){
		timer01=setInterval(myFn,2000);	
	});
})