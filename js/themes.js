// initialise plugins
		$(function(){
			// Banners button
			$('ul.banners_cycle li').mouseenter(function(){
				$(this).find('.button').stop(false,true).fadeIn();
			})
			$('ul.banners_cycle li').mouseleave(function(){
				$(this).find('.button').stop(false,true).fadeOut();
			});
			
			// Banners
			$('ul.banners_cycle li:not(.style-1)').mouseenter(function(){
				$(this).css('z-index','6');
				$(this).stop(false, true).animate({right:'-64px'}, {easing:"swing", duration: 300});
				$(this).animate({right:'0'});
			});
			$('ul.banners_cycle li:not(.style-1)').mouseleave(function(){
				$(this).stop(false, true).animate({right:'-64px'});
				$(this).stop(false, true).animate({right:'0'}, 'slow');
			});
			
			// Banner #2
			$('ul.banners_cycle li.style-2').mouseleave(function(){
				$(this).css('z-index','5');
			});
			// Banner #3
			$('ul.banners_cycle li.style-3').mouseleave(function(){
				$(this).css('z-index','4');
			});
			// Banner #4
			$('ul.banners_cycle li.style-4').mouseleave(function(){
				$(this).css('z-index','3');
			});
			// Banner #5
			$('ul.banners_cycle li.style-5').mouseleave(function(){
				$(this).css('z-index','2');
			});
			// Banner #6
			$('ul.banners_cycle li.style-6').mouseenter(function(){
				$('body').css('overflow-x','hidden');
			});
			$('ul.banners_cycle li.style-6').mouseleave(function(){
				$(this).css('z-index','1');
				$('body').css('overflow-x','hidden');
			});
		});