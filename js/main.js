//图片展示区
function AutoScroll(){
	$("#img_ul").animate({
		marginLeft: "-1920px"},
		1000, function() {
		$("#img_ul").css("marginLeft", "0px").find("li:first").appendTo('#img_ul');
	});
}

function initAutoScroll(){
	var _scrolling = setInterval("AutoScroll()",3000);
	$("#img_ul").hover(function() {
		clearInterval(_scrolling);
	}, function() {
		_scrolling=setInterval("AutoScroll()",3000);
	});
}