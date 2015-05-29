function getNavHeight(){

	var navHeight = $('.nav-wrapper').height();
	var w = $(window).width();
	if (w < 650) {
		return -(navHeight - 75);
	}
	return -navHeight;
}

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
				top: getNavHeight()
			},
			onAfter: function() {
				var w = $(window).width();
				if (w < 650) {
					$('nav').slideUp(200);
					$('.fa-arrow-circle-o-left').toggleClass('rotate');
				}
			}
		});
	});


//NAV STUFF

	$(window).on('resize', function(){
		var w = $(window).width();
		var nav = $('nav');
		if(w > 650 && nav.is(':hidden')){
			nav.show();
		} else if(w < 650 && nav.is(':visible')){
			nav.hide();
		}
	});
//make sure this only happens in small screen!!***//
	$('.hamburger-menu').on('click', function(){
		$('.fa-arrow-circle-o-left').toggleClass('rotate');
			if($('.fa-arrow-circle-o-left').hasClass('rotate')){
				$('nav').slideDown(400);
			} else{

				$('nav').slideUp(200);
			}

		});
//make this go back to original unrotated state if user resizes screen and 
//and then makes it small again
//also, make the mobile nav always hidden unless arrow has rotate class 

//MODAL STUFF

	//MESSAGE ME and NAV TO GITHUB?

	$("button.js-modal-activate, i.fa-github-square").on("click", function(e){
		e.preventDefault();
		var wrapper = $(this).siblings().closest('.modal-wrapper');
		wrapper.show();
		$('body').addClass("modal-on");
	});

	$('.btn-cancel').on('click', function(){
		var wrapper = $(this).parents().closest('.modal-wrapper');
		wrapper.hide();
		$('body').removeClass("modal-on");
	});

	// //NAVIGATE TO GITHUB?
	// $(".fa-github-square").on('click', function(e){
	// 	e.preventDefault;
	// 	$('.wrapper-navigate').show();
	// 	$('body').addClass("modal-on");
	// });

	//CHARACTER COUNTER
	$(function(){
		$('#message').on('keyup', function(){
			var maxCount = 300;
			$('#count').html(maxCount - $(this).val().length + " characters left!");
		});
	});


//SCROLL ANIMATIONS

	$(window).on('load', function(){
		$('#home h2').addClass('fadeInDown');
	});

	// function getElemHeight(){

	// }


	
		$(window).on('scroll', function(){
		
			if($('#work h2').height() > 40){
				$('#work h2').addClass('fadeInDown');
			}	
		

		 })





















});
