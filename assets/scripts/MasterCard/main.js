'use strict';

$(document).ready(function () {
	$(window).on('load', function () {
		$('html, body').animate({
			scrollTop: 0
		}, 800);

		setTimeout(function () {
			$('body').removeClass('animstart');
		}, 4000);
	});
	$('.navbar').on('show.bs.collapse', function () {
		$('.navbar-fixed-top').addClass('back-color');
	}).on('hide.bs.collapse', function () {
		$('.navbar-fixed-top').removeClass('back-color');
	});

	$('.menus').click(function () {
		$('.navbar-collapse').toggleClass('collapse');
	});

	//
	$('.menus').on('click', function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		// $('html, body').stop().animate({
		//     'scrollTop': $target.offset().top
		// }, 900, 'swing', function () {
		//     window.location.hash = target;
		//     $('').css('width','0');
		// });

		$('#navbar').collapse('hide');
	});

	//scrol
	// $(document).on('scroll', function() {
	//   if ($(document).scrollTop() >= 100 && $(window).width() <=768 ) {
	//     $('.navbar-fixed-top').css('background-color', '#d8f6ff');

	//   } else {
	//     $('.navbar-fixed-top').css('background-color', 'transparent');           
	//     }
	// });

	//smooth
	$('a').on('click', function (event) {
		if (this.hash !== '') {
			event.preventDefault();
			var hash = this.hash;
			var offsetTop = $(hash).offset().top - 50;
			if (hash == '#promo' || hash == '#notice') offsetTop = $(hash).offset().top - 80;
			$('html, body').animate({
				scrollTop: offsetTop
			}, 800, function () {
				// window.location.hash = hash;
			});
		} // End if
	});

	//AOS
	AOS.init();

	//
	new WOW().init();

	//
	$('.card-slide').slick({
		slidesToShow: 1,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000
	});
});
//# sourceMappingURL=main.js.map
