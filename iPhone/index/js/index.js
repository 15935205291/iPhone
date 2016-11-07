(function (doc, win) {
var docEl = doc.documentElement,
resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
recalc = function () {
var clientWidth = docEl.clientWidth;
if (!clientWidth) return;
docEl.style.fontSize = 100 * (clientWidth / 414) + 'px';
};
if (!doc.addEventListener) return;
win.addEventListener(resizeEvt, recalc, false);
doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
// 轮播图
var firstImg = $('#ul li').first().clone();
// 放在 ul 的最后
$('#ul').append(firstImg).width($('#ul li').length*$('#ul img').width());
var i = 0;
var timer;
autoPlay();
function autoPlay(){
	timer = setInterval(function(){
		i++;
		moveImg(i);
	}, 3000);
}
function moveImg(num){
	// 如果是最后一张图片我们怎么办
	if(i==$('#ul li').length){
		i = 1;
		$('#ul').css({left:0});
	}
	// 是第一张
	if(i==-1){
		i=$('#ul li').length-2;
		$('#ul').css({left:($('#ul li').length-1)*-414});
	}
	// 移动图片
	$('#ul').stop().animate({left:i*-4.14 + 'rem'},800);	

	// 换小点的标记
	if(i==($('#ul li').length-1)){
		$('#ol li').eq(0).addClass('bg').siblings().removeClass('bg');
	}else{
		$('#ol li').eq(i).addClass('bg').siblings().removeClass('bg');
	}
}
// 点击小图标 跳转到指定的页面
$('#ol li').click(function(){
	i = $(this).index();	
	moveImg(i);
})
// 导航栏下拉(左)
$('#header #navLeft img').click(function(){
	$('#navTwo').show();
	$('#content').hide();
	$('#footer').hide();
})
$('#navA').click(function(){
	$('#navTwo').hide();
	$('#content').show();
})
// 导航栏下拉(右)
$('#header #navRight img').click(function(){
	$('#logo img').show();
	$('#navThree').show();
})
$('#logo img').click(function(){
	$('#logo img').hide();
	$('#navThree').hide();
})