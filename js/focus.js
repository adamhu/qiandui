// JavaScript Document
var lb = $("#limit-buy"),
		lb_cur = 1,
		lbp_w = lb.find(".products").width();
		lb_timer = null;
	t = 1;
	function showLimitBuyProducts(){
		if(lb_cur < 1){
			lb_cur = 3;
		} else if(lb_cur > 3){
			lb_cur = 1;
		}
		$("#J-lbcp").html(lb_cur);
		var products = $("#limit-buy .products").hide().eq(lb_cur-1).show(),
			ta = products.find("textarea");
			
		if(ta.length){
			products.html(ta.val());
		}
	}
	lb_timer = setInterval(function(){
		lb_cur++;
		showLimitBuyProducts();
	}, 4000);
	
	$(" #J-lb .btn-prev").click(function(){
		lb_cur--;
		showLimitBuyProducts();
	});
	$(" #J-lb .btn-next").click(function(){
		lb_cur++;
		showLimitBuyProducts();
	});
	$("#J-lb").hover(function(){
			clearInterval(lb_timer);
			lb_timer = null;
			
		}, function(){
			lb_timer = setInterval(function(){
				lb_cur++;
				showLimitBuyProducts();
			}, 10000);
			
	});
	




//轮播图
		$('#demo01').flexslider({
			animation: "slide",
			direction:"horizontal",
			easing:"swing"
		});
		
 