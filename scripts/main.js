// one page

$(document).on('ready', function(){

	$('nav a').on('click',function(e){
		e.preventDefault();
		var target = $(this).data('target');
		$.scrollTo(target, 2000, {
			offset: { 
				top: -$('.nav-wrapper').height() 
			}
			
		});
	});

	$(window).on('resize', function(){

		var w = $(window).width();
		var nav = $('nav');

		if(w > 600 && nav.is(':hidden')){
			nav.show();
		} else if(w < 600 && nav.is(':visible')){
			nav.hide();
			
		}
	});
//make sure this only happens in small screen!!***//
	$('.hamburger-menu').on('click', function(){
			$('.fa-arrow-circle-o-left').toggleClass('rotate');
			if($('.fa-arrow-circle-o-left').hasClass('rotate')){
				$('nav').slideDown(400);
			} else {
				$('nav').slideUp(400);
			}
		});
//make this go back to original unrotated state if user resizes screen and 
//and then makes it small again

});

// $('section').height($(window).height()-$('.nav-wrapper').height());




// 	var imageHeight = $('img').height();
// 	var imageWidth = $('img').width();

// 	$('.col p').height(imageHeight);
// 	$('.col p').width(imageWidth);
	
// $('.col img').on('click', function(){
// 	$('.col p').css("display", "block");
// })