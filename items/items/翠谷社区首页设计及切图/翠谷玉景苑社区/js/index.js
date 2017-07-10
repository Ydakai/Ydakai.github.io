// JavaScript Document
$(function(){
	/*导航下拉*/
	$(".nav li").hover(function(){
		$(this).children('.m_ul').toggle();	
	});

	/*政策法规、办事指南切换*/
	$(".zcfg .tab_title ul li").hover(function(){
		$(this).addClass("curr").siblings().removeClass("curr");
		$(".zcfg .tab .tab_con").eq($(this).index()).show().siblings().hide();	
	});

})

/*社区动态轮播图*/
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
		var imgWeizhi=imgKey*-560;
		$('.banner ul').stop().animate({'left':imgWeizhi+'px'},500);		
	}
	timer01=setInterval(myFn,3000);
	
	$('.banner ul').append(myTag);
	$('.banner ol li').click(function(){
		olliKey=$(this).index();		
		imgKey=$(this).index();
		$('.banner ol li').eq($(this).index()).addClass('current').siblings().removeClass('current');
		var imgWeizhi=imgKey*-560;
		$('.banner ul').stop().animate({'left':imgWeizhi+'px'},500);
	});
	$('.banner').hover(function(){
		clearInterval(timer01);	
	},function(){
		timer01=setInterval(myFn,3000);	
	});

});
/*居委会工作人员轮播*/
$(function(){
	var speed=20; //数字越大速度越慢
	var tab=document.getElementById("people_img");
	var tab1=document.getElementById("pic_box1");
	var tab2=document.getElementById("pic_box2");
	tab2.innerHTML=tab1.innerHTML;
	function Marquee2(){
		if(tab2.offsetWidth-tab.scrollLeft<=0){
			tab.scrollLeft = 0;
		}
		else{
			tab.scrollLeft++;
		}
	}
	var MyMar=setInterval(Marquee2,speed);
	tab.onmouseover=function() {clearInterval(MyMar)};
	tab.onmouseout=function() {MyMar=setInterval(Marquee2,speed)};
});