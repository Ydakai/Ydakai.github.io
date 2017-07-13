
$(function(){

    // 导航点击
    $('.nav ul li a').click(function(){
        $(this).addClass('active')
        $(this).parent('.nav ul li').siblings().children('a').removeClass('active');
    });

    // 社区动态tab切换
    $('.news_tab ul li').click(function(){
        $(this).addClass('now').siblings().removeClass('now');
        $('.news_con_box .item').eq($(this).index()).addClass('show').siblings().removeClass('show');

    });

   
    // 工作人员轮播
    $(".people_list").slide({ mainCell:".pic", effect:"leftLoop", vis:5, scroll:2,  autoPage:true, switchLoad:"_src" });




})