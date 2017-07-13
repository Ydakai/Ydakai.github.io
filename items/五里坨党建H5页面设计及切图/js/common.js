//自写 公共JS

// 我的互动tab栏切换
$(window).load(function() {
	$(".ui-tab-nav li").click(function(){
		$(this).addClass("current").siblings().removeClass("current");
		$(".ui-tab-content").eq($(this).index()).show().siblings().hide();	
	})
})
