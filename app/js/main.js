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

	$('.icon-dots-three-vertical , .head-filter__text').on('click', function () {
		$('.head-filter__list').toggleClass('head-filter__list--active');
	});


	var mixer = mixitup('.release-products__inner');

});