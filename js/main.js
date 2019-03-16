$(document).ready(function() {
	$(".slider").slick({
		arrows: true,
		infinite: true,
		dots: true,
		slidesToShow: 1,
  		slidesToScroll: 1,
		speed: 500,
		autoplay: true,
		prevArrow: '<button class="slide-left" type="button"><img src="img/slide-left.png"></button>',
        nextArrow: '<button class="slide-right" type="button"><img src="img/slide-right.png"></button>'
	});

	$( document ).ready(function() {
	$('.bars').on('click', function() {		
		$('.menu').toggle(1000);
	});
	
		$('.menu__item').on('click', function() {		
			if(window.matchMedia('(max-width: 1024px)').matches) {
		$('.menu').toggle(1000);
		};
	});
	
	
});
});