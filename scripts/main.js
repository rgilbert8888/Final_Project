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
			// $('nav ul').toggle();
			$('.fa-arrow-circle-o-left').toggleClass('rotate');
			if($('.fa-arrow-circle-o-left').hasClass('rotate')){
				
				// var list = $('ul');
				// var listItems = list.children('li');
				// list.append(listItems.get().reverse());
				
				$('nav').slideDown(400);
			} else {
				$('nav').slideUp(400);
			}
		});


});


