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