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
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	$('.feedback__content').slick({
		dots: false,
		arrows: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false
				}
			}
		]
	});

	const menuBtn = $('.icon-dots-three-vertical, .icon-angle-down, .head-filter__text'),
		menu = $('.head-filter__list');

	menuBtn.on('click', function () {
		if ($('.head-filter__list').hasClass('head-filter__list--active')) {
			$('.head-filter__list').slideToggle(1000).removeClass('head-filter__list--active');
			menu.slideUp();
		} else {
			$('.head-filter__list').slideToggle(1000).addClass('head-filter__list--active');
			menu.slideDown();
		}
	});

	$(document).click(function (e) {
		if (!menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
			menu.slideUp();
			menu.removeClass('head-filter__list--active');
		};
	});

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 330,
		from: 30,
		to: 300,
		grid: true,
		prefix: "$"
	});

	$('.icon-th-list').on('click', function () {
		$('.category-page__product-item.product-item').addClass('list');
		$('.icon-th-list').addClass('active');
		$('.icon-th-large').removeClass('active');
	});
	$('.icon-th-large').on('click', function () {
		$('.category-page__product-item.product-item').removeClass('list');
		$('.icon-th-large').addClass('active');
		$('.icon-th-list').removeClass('active');
	});

	$('.icon-th-list').on('click', function () {
		$('.release-products__item.product-item').addClass('list');
		$('.icon-th-list').addClass('active');
		$('.icon-th-large').removeClass('active');
	});
	$('.icon-th-large').on('click', function () {
		$('.release-products__item.product-item').removeClass('list');
		$('.icon-th-large').addClass('active');
		$('.icon-th-list').removeClass('active');
	});

	$('.single__item-tabs .tab').on('click', function (event) {
		var id = $(this).attr('data-id');
		$('.single__item-tabs').find('.tab-item').removeClass('active-tab').hide();
		$('.single__item-tabs .tabs').find('.tab').removeClass('active');
		$(this).addClass('active');
		$('#' + id).addClass('active-tab').fadeIn();
		return false;
	});

	$('.aside-license__label, aside-license__input').on('click', function () {
		$('.aside-license__price').toggleClass('aside-license__price--active');
	});

	$('.blog-aside__btn--popular').on('click', function () {
		$('.blog-aside__btn--popular').addClass('blog-aside__btn--active');
		$('.blog-aside__btn--latest').removeClass('blog-aside__btn--active');
	});
	$('.blog-aside__btn--latest').on('click', function () {
		$('.blog-aside__btn--latest').addClass('blog-aside__btn--active');
		$('.blog-aside__btn--popular').removeClass('blog-aside__btn--active');
	});

	$('.header-btn').on('click', function () {
		$(this).toggleClass('active');
	});
	$('.header-btn').on('click', function () {
		$('.header__menu').slideToggle();
	});

	$('.pages-menu__title').on('click', function () {
		$(this).toggleClass('active');
	});
	$('.pages-menu__title--left').on('click', function () {
		$('.pages-menu__list--left').toggleClass('active');
	});
	$('.pages-menu__title--center').on('click', function () {
		$('.pages-menu__list--center').toggleClass('active');
	});
	$('.pages-menu__title--right').on('click', function () {
		$('.pages-menu__list--right').toggleClass('active');
	});

	$('#sort-select, #items-select, #category-select').styler();



	// var mixer = mixitup('.release-products__inner, .category-page__content-inner,.blog-articles, .blog-aside__news');
});