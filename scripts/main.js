

$(document).on('ready', function(){

//SCROLLING STUFF

	$('nav a').on('click',function(e){
		e.preventDefault();
		// alert('hi');
		var target = '#' + $(this).data('target');
		// alert(target);
		//$(window).scrollTo(target, 5000);
		$(window).scrollTo(target, 900,{
			offset:{
				top: -$('.nav-wrapper').height()
			},
			onAfter: function() {
				var w = $(window).width();
				if (w < 560) {
					$('nav ul').toggleClass('mobile-on');
					$('.fa-arrow-circle-o-left').toggleClass('rotate');
				}
			}
		});
	});


//NAV STUFF

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


//MODAL STUFF
	$(".js-modal-activate").on("click", function(e){
		// e.preventDefault();
		$('.modal-wrapper').show();
		$('body').addClass("modal-on");
	});

	$('.btn-cancel').on('click', function(){
		$('.modal-wrapper').hide();
		$('body').removeClass("modal-on");
	});


	// dont need this because html5 already has...

		// $('.btn-send').on('click', function(){
		// 	var myReg =	 /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/;
		// 	var input = $('input').val();
		// 	if(myReg.test(input) == true){
		// 		alert('woow');
		// 		return false;
		// 	} else{
		// 		alert('booo');
		// 		return false;
		// }
 	//  })

	//COUNTER
	$(function(){
		$('#message').on('keyup', function(){
			var maxCount = 300;
			$('#count').html(maxCount - $(this).val().length + " characters left!");
		});
	});


//SCROLL ANIMATIONS

	$(window).on('scroll', function(){
		$('h2').addClass('fadeInDown');
	})


});

