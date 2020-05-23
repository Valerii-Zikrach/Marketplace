$(function () {
	$('.item-description__rate').rateYo({
		rating: 4.5,
		starWidth: "17px",
		readOnly: true,
		ratedFill: "#ffc000"
	});

	$('.featured-products__inner').slick({
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.followers-feed__inner').slick({
		dots: false,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
	});


	const menuBtn = $('.icon-dots-three-vertical, .head-filter__text'),
		menu = $('.head-filter__list');
	menuBtn.on('click', function () {
		if ($('.head-filter__list').hasClass('head-filter__list--active')) {
			$('.head-filter__list').removeClass('head-filter__list--active');
			menu.slideUp();
		} else {
			$('.head-filter__list').addClass('head-filter__list--active');
			menu.slideDown();
		}
	});

	$(document).click(function (e) {
		if (!menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
			menu.slideUp();
			menu.removeClass('head-filter__list--active');
		};
	});

	var mixer = mixitup('.release-products__inner');

});