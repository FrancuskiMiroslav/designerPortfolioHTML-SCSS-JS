document.addEventListener('DOMContentLoaded', function () {
	window.addEventListener('load', (e) => {
		const preload = document.querySelector('.preload');

		preload.classList.add('preload-finished');
	});

	const btnScrollToTop = document.getElementById('btnScrollToTop');

	if (btnScrollToTop) {
		btnScrollToTop.addEventListener('click', (e) => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth',
			});
		});
	}
});

$(document).ready(function () {
	$('.menu-btn').on('click', function () {
		$('nav ul').toggleClass('showing');
	});

	const menuBtn = document.querySelector('.menu-btn');
	let menuOpen = false;
	menuBtn.addEventListener('click', () => {
		if (!menuOpen) {
			menuBtn.classList.add('open');
			menuOpen = true;
		} else {
			menuBtn.classList.remove('open');
			menuOpen = false;
		}
	});

	// skill bar ABOUT PAGE
	$('.skillbar').skillBars({
		// number start
		from: 0,

		// number end
		to: false,

		// animation speed
		speed: 3000,

		// how often the element should be up<a href="https://www.jqueryscript.net/time-clock/">date</a>d
		interval: 100,

		// the number of decimal places to show
		decimals: 0,

		// callback method for every time the element is updated,
		onUpdate: null,

		// callback method for when the element finishes updating
		onComplete: null,

		// CSS classes
		classes: {
			skillBarBar: '.skillbar-bar',
			skillBarPercent: '.skill-bar-percent',
		},
	});
});

$(window).on('scroll', function () {
	if ($(window).scrollTop()) {
		$('.nav-top').addClass('nav-top--sticky');
		$('.portfolio-menu__list').addClass('portfolio-menu__list--sticky');
	} else {
		$('.nav-top').removeClass('nav-top--sticky');
		$('.portfolio-menu__list').removeClass('portfolio-menu__list--sticky');
	}
});

$(document).on('click', '.nav ul li a', function () {
	$(this).addClass('active').siblings().removeClass('active');
});

$('.portfolio-item').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows',
});

$('.portfolio-menu ul li').click(function () {
	$('.portfolio-menu ul li').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$('.portfolio-item').isotope({
		filter: selector,
	});
	return false;
});
