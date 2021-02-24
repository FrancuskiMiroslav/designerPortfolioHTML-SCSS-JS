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

	window.addEventListener('scroll', (e) => {
		if (document.documentElement.scrollTop > 0) {
			topNav.classList.add('nav-top--sticky');
			if (topNavList) {
				topNavList.classList.add('portfolio-menu__list--sticky');
			}

			btnScrollToTop.style.opacity = 1;
		} else {
			topNav.classList.remove('nav-top--sticky');
			if (topNavList) {
				topNavList.classList.remove('portfolio-menu__list--sticky');
			}
			btnScrollToTop.style.opacity = 0;
		}
	});

	const topNav = document.getElementById('top-nav');
	const topNavList = document.getElementById('portfolio-menu__list');
	const navUl = document.getElementById('nav-ul');
	const menuBtn = document.querySelector('.menu-btn');
	let menuOpen = false;

	menuBtn.addEventListener('click', () => {
		navUl.classList.toggle('showing');

		if (!menuOpen) {
			menuBtn.classList.add('open');
			menuOpen = true;
		} else {
			menuBtn.classList.remove('open');
			menuOpen = false;
		}
	});
});
