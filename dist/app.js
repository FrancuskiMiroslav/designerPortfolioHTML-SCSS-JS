/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/fetchJSONdata.js":
/*!*********************************!*\
  !*** ./src/js/fetchJSONdata.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

document.addEventListener('DOMContentLoaded', function () {
	const projectsContainer = document.getElementById('projects-container');
	const localProjectsJSON = __webpack_require__(/*! ./projects.json */ "./src/js/projects.json");

	const getProjectsFromJson = async () => {
		const projects = await localProjectsJSON.projects;

		projectsContainer.innerHTML = projects
			.map((project) => {
				const {
					id,
					title,
					description,
					design,
					colorsUsed,
					imageDescription,
					imageMob,
					imageDesk,
				} = project;

				return `
                <div class="boxes__box item ${design
									.map((sinlgeDesign) => sinlgeDesign)
									.join(' ')} ${colorsUsed}">
					<div class="boxes__box--img">
						<img
							src="${imageMob}"
							alt="${imageDescription}"
							loading="lazy"
						/>
					</div>
					<div class="boxes__box--overlay 
                    ${
											colorsUsed === '' || 'one'
												? 'boxes__box--primary_clr'
												: ''
										} 
                    ${colorsUsed === 'two' ? 'boxes__box--secondary_clr' : ''}
                    ${colorsUsed === 'more' ? 'boxes__box--tertiary_clr' : ''}
                    "
                    >
						<div class="boxes__box--content">
							<h2>${title}</h2>
							<p>
								${description}
							</p>
							<a
								href="${imageDesk}"
								data-lightbox="mygallery"
								data-title="${imageDescription}"
								class="btn">
                                    Open
							</a>
						</div>
					</div>
				</div>
            `;
			})
			.reverse()
			.join('');

		let iso = new Isotope(projectsContainer, {
			// options
			itemSelector: '.item',
			layoutMode: 'fitRows',
		});

		const filterItems = document.querySelectorAll('.filter');

		filterItems.forEach((item) => {
			item.addEventListener('click', (e) => {
				filterItems.forEach((filter) => filter.classList.remove('active'));
				e.currentTarget.classList.add('active');

				let filterSelector = e.currentTarget.dataset.filter;

				iso.arrange({
					// item element provided as argument
					filter: filterSelector,
				});
			});
		});
	};

	if (projectsContainer) {
		getProjectsFromJson();
	}
});


/***/ }),

/***/ "./src/js/formValidaiton.js":
/*!**********************************!*\
  !*** ./src/js/formValidaiton.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
	// form validation
	const form = document.getElementById('contact-form');
	const name = document.getElementById('name');
	const email = document.getElementById('email');
	const message = document.getElementById('message');
	const formBtn = document.getElementById('form-btn');

	if (form) {
		[
			'click',
			'ontouchstart',
			'mouseover',
			'keydown',
			'keypress',
			'touchstart',
			'touchmove',
		].forEach(
			(event) =>
				document.addEventListener(event, () => {
					if (checkInputs() === false) {
						formBtn.disabled = true;
					} else {
						formBtn.disabled = false;
					}
				}),
			false
		);

		function checkInputs() {
			const nameValue = name.value.trim();
			const emailValue = email.value.trim();
			const messageValue = message.value.trim();

			if (nameValue === '') {
				setErrorFor(name, 'Please enter your full name');
			} else {
				setSuccessFor(name);
			}

			if (emailValue === '') {
				setErrorFor(email, 'Please enter your email address');
			} else if (!emailIsValid(emailValue)) {
				setErrorFor(email, 'Email is not valid');
			} else {
				setSuccessFor(email);
			}

			if (messageValue === '') {
				setErrorFor(message, 'Please enter your message');
			} else {
				setSuccessFor(message);
			}

			if (
				nameValue === '' ||
				emailValue === '' ||
				messageValue === '' ||
				!emailIsValid(emailValue)
			) {
				return false;
			} else {
				return true;
			}
		}

		function setErrorFor(input, message) {
			const form = input.parentElement;
			const small = form.querySelector('small');

			small.innerText = message;
			form.className = 'form__group error';
		}

		function setSuccessFor(input) {
			const form = input.parentElement;
			form.className = 'form__group success';
		}

		function emailIsValid(email) {
			const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				email
			);

			return re;
		}
	}
});


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

	const year = document.getElementById('dynamic-year');

	function currentYear() {
		year.innerText = new Date().getFullYear();
	}

	currentYear();
});


/***/ }),

/***/ "./src/js/projects.json":
/*!******************************!*\
  !*** ./src/js/projects.json ***!
  \******************************/
/*! exports provided: projects, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"projects\":[{\"id\":1,\"title\":\"Wine label („Merlot“ for Mr.&Mrs.)\",\"description\":\"Proposal design for the wine label, i made illustration special for matching the name of a wine brand \\\"Mr.&Mrs.\\\"\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Wine Label („Merlot“ for Mr.&Mrs.)\",\"imageMob\":\"./assets/images/projects/merlotLabel-min.jpg\",\"imageDesk\":\"./assets/images/projects/merlotLabel.jpg\"},{\"id\":2,\"title\":\"Wine bottle („Merlot“ for Mr.&Mrs.)\",\"description\":\"I made a desing for wine bottle. I used a self created drawing illustration just for this wine brand.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Wine bottle („Merlot“ for Mr.&Mrs.)\",\"imageMob\":\"./assets/images/projects/wine-min.jpg\",\"imageDesk\":\"./assets/images/projects/wine.jpg\"},{\"id\":3,\"title\":\"Wine bottle („Merlot“ for Mr.&Mrs.)\",\"description\":\"Business card for a veterinary clinic \\\"Božić-vet\\\" with a checkered illustration and the necessary company information.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Business card („Božić-Vet“)\",\"imageMob\":\"./assets/images/projects/vizitk1str-92x52mm-min.jpg\",\"imageDesk\":\"./assets/images/projects/vizitk1str-92x52mm.png\"},{\"id\":4,\"title\":\"Flyer for fight club \\\"Phoenix\\\"\",\"description\":\"A fight club flyer made up of illustrations, and photos with the correct training schedule and contact phone. Made in club colors-red and black.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Flyer for fight club Phoenix\",\"imageMob\":\"./assets/images/projects/phoenix-min.jpg\",\"imageDesk\":\"./assets/images/projects/phoenix.jpg\"},{\"id\":5,\"title\":\"Logo for tailoring salon („My best dress“)\",\"description\":\"A unique salon trademark, created from an illustration and a font customized for salon's name. It fits perfectly in a circular shape, gives a clear impression of a logo for those purposes.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Logo for tailoring salon („My best dress“)\",\"imageMob\":\"./assets/images/projects/krojacki-min.jpg\",\"imageDesk\":\"./assets/images/projects/krojacki.jpg\"},{\"id\":6,\"title\":\"Business card for-„My best dress“\",\"description\":\"Business card with a trademark and the necessary company information and contacts.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Business card for-„My best dress“\",\"imageMob\":\"./assets/images/projects/krojacki-bcard-min.jpg\",\"imageDesk\":\"./assets/images/projects/krojacki.jpg\"},{\"id\":7,\"title\":\"Book cover design („Seobe“)\",\"description\":\"Design and preparation for printing of M.Crnjanski's book \\\"Seobe\\\". Using the original photo \\\"seoba\\\".\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Book cover design („Seobe“)\",\"imageMob\":\"./assets/images/projects/KNJIGA-SEOBE-KRCKA-min.jpg\",\"imageDesk\":\"./assets/images/projects/KNJIGA-SEOBE-KRCKA.jpg\"},{\"id\":8,\"title\":\"Bakery label („Ceralni dvopek“)\",\"description\":\"Transparent label design for a double decker.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Bakery label („Ceralni dvopek“)\",\"imageMob\":\"./assets/images/projects/ETIKETA-min.jpg\",\"imageDesk\":\"./assets/images/projects/ETIKETA.png\"},{\"id\":9,\"title\":\"Wine label („Ždrepčeva krv“)\",\"description\":\"Proposal design for the wine label („Ždrepčeva krv“) using one color.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Wine label („Ždrepčeva krv“)\",\"imageMob\":\"./assets/images/projects/17500035_1508616912516594_1627627067_o-min.jpg\",\"imageDesk\":\"./assets/images/projects/17500035_1508616912516594_1627627067_o.jpg\"},{\"id\":10,\"title\":\"Bussiness card for University\",\"description\":\"Business card of the university with the logo, contacts and data.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"more\",\"imageDescription\":\"Bussiness card for University\",\"imageMob\":\"./assets/images/projects/university-card-min.jpg\",\"imageDesk\":\"./assets/images/projects/university-card.png\"},{\"id\":11,\"title\":\"University logo\",\"description\":\"Trademark redesign for „Viskoka tehnička škola-strukovnih studija“. The name is inside a circular form that emerged by writing a pen composed of 4 parts that make up 4 sections of the faculty.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"more\",\"imageDescription\":\"University logo\",\"imageMob\":\"./assets/images/projects/university-logo-vts-min.jpg\",\"imageDesk\":\"./assets/images/projects/university-logo-vts.jpg\"},{\"id\":12,\"title\":\"Lunch - ideas\",\"description\":\"Ideas for creating a logo „Lunch“, in a few stage.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Lunch - ideas\",\"imageMob\":\"./assets/images/projects/lunch-min.jpg\",\"imageDesk\":\"./assets/images/projects/lunch.jpg\"},{\"id\":13,\"title\":\"Label for „Pereca“\",\"description\":\"Two ideas for the design of pretzel label for the bakery \\\"Lakić\\\". Using illustrations, similar colors and texts.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"more\",\"imageDescription\":\"Label for „Pereca“\",\"imageMob\":\"./assets/images/projects/pereca-min.jpg\",\"imageDesk\":\"./assets/images/projects/pereca.png\"},{\"id\":14,\"title\":\"Roll up banner“\",\"description\":\"Design for roll up banner for hiking. Creating story from text, illustrations and default photos. With the main purpose of reading information and instructions.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Roll up banner\",\"imageMob\":\"./assets/images/projects/planinskoTrcanje-min.jpg\",\"imageDesk\":\"./assets/images/projects/planinskoTrcanje.jpg\"},{\"id\":15,\"title\":\"Photoshop works\",\"description\":\"Creating a virtual world through the big eye watching us, the work used to make the posters.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"more\",\"imageDescription\":\"Photoshop works\",\"imageMob\":\"./assets/images/projects/photoshop1-min.jpg\",\"imageDesk\":\"./assets/images/projects/photoshop1.jpg\"},{\"id\":16,\"title\":\"Photoshop works\",\"description\":\"...\",\"design\":[\"graphic design\"],\"colorsUsed\":\"more\",\"imageDescription\":\"Photoshop works\",\"imageMob\":\"./assets/images/projects/photoshop2-min.jpg\",\"imageDesk\":\"./assets/images/projects/photoshop2.jpg\"},{\"id\":17,\"title\":\"Poster for faculty presentations („Putokazi“)\",\"description\":\"A poster created only with typography, using one color (red). It gives a inresting and storng message that easily communicates with the audience.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Poster for faculty presentations („Putokazi“)\",\"imageMob\":\"./assets/images/projects/1-PUTOKAZI-poster-min.jpg\",\"imageDesk\":\"./assets/images/projects/1-PUTOKAZI-poster.jpg\"},{\"id\":18,\"title\":\"Illustrations (for website)\",\"description\":\"Creating special illustrations as an icon for a farm website.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Illustrations (for website)\",\"imageMob\":\"./assets/images/projects/4-illuctracije-za-sajt-min.jpg\",\"imageDesk\":\"./assets/images/projects/4-illuctracije-za-sajt.png\"},{\"id\":19,\"title\":\"Poster for New Year parrty\",\"description\":\"Poster for the New Year&#39;s Party with information. My goal was to use only colors of caffe bar.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Poster for New Year parrty\",\"imageMob\":\"./assets/images/projects/7-PosterforNewYear-min.jpg\",\"imageDesk\":\"./assets/images/projects/7-PosterforNewYear.jpg\"},{\"id\":20,\"title\":\"Book cover design („Zločin i kazna“)\",\"description\":\"Preparation for printing and design for the book cover crime and punishment by F. M. Dostojevski.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Book cover design („Zločin i kazna“)\",\"imageMob\":\"./assets/images/projects/9-Bookscoverdesign-min.jpg\",\"imageDesk\":\"./assets/images/projects/9-Bookscoverdesign.png\"},{\"id\":21,\"title\":\"T-shirt design (black)\",\"description\":\"Two t-shirt designs using my brother&#39;s original drawings. That I retouched and transfered to the negative in the photoshop.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"T-shirt design (black)\",\"imageMob\":\"./assets/images/projects/10-T-shirtdesig,bleck-min.jpg\",\"imageDesk\":\"./assets/images/projects/10-T-shirtdesig,bleck.jpg\"},{\"id\":22,\"title\":\"T-shirt design (white)\",\"description\":\"A white T-shirt with my brother&#39;s original drawing, which was processed using a filter in a photoshop to fit the model of the T-shirt.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"T-shirt design (white)\",\"imageMob\":\"./assets/images/projects/11-T-shirtdesingwithe-min.jpg\",\"imageDesk\":\"./assets/images/projects/11-T-shirtdesingwithe.jpg\"},{\"id\":23,\"title\":\"Cycling federation national team jersey\",\"description\":\"T-shirt and shorts designed for Serbia&#39;s cycling team, using several illustrations and 3 colors that are on the flag.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Cycling federation national team jersey\",\"imageMob\":\"./assets/images/projects/12-cyclingfederationnationalteamjersey-min.jpg\",\"imageDesk\":\"./assets/images/projects/12-cyclingfederationnationalteamjersey.jpg\"},{\"id\":24,\"title\":\"Sweatshirt for fight club („Phoenix“)\",\"description\":\"Sweatshirt design for fight club &quot;Phoenix&quot;- trademark redesign, with a few changes such as: font correction, and creation of a new drawing, using colors that match the club&#39;s red and yellow.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Sweatshirt for fight club („Phoenix“)\",\"imageMob\":\"./assets/images/projects/13-Sweatshirtforfightclub-min.jpg\",\"imageDesk\":\"./assets/images/projects/13-Sweatshirtforfightclub.jpg\"},{\"id\":25,\"title\":\"T-shirt for fight club („Phoenix“)\",\"description\":\"Designing shirts for fight club.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"T-shirt for fight club („Phoenix“)\",\"imageMob\":\"./assets/images/projects/14-T-shirtforfightclub-min.jpg\",\"imageDesk\":\"./assets/images/projects/14-T-shirtforfightclub.png\"},{\"id\":26,\"title\":\"Photoshop work\",\"description\":\"Black and white photography through 3 processes in photoshop.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Photoshop work\",\"imageMob\":\"./assets/images/projects/16-Photoshopwork-min.jpg\",\"imageDesk\":\"./assets/images/projects/16-Photoshopwork.jpg\"},{\"id\":27,\"title\":\"Logo and business card for bakery \\\"Slatko cartstvo\\\"\",\"description\":\"Black and white photography through 3 processes in photoshop.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"\",\"imageDescription\":\"Logo and business card for bakery \\\"Slatko cartstvo\\\"\",\"imageMob\":\"./assets/images/projects/SlatkoCarstvo-min.jpg\",\"imageDesk\":\"./assets/images/projects/SlatkoCarstvo.jpg\"},{\"id\":28,\"title\":\"Logo and business card for the agency \\\"Digitals\\\"\",\"description\":\"The logo is designed: So that the initials of the owner (double \\\"C\\\") are facing each other, they create a computer screen that is a trademark of the company. I made a business card of the same colors, with information about the company.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Logo and business card for the agency \\\"Digitals\\\"\",\"imageMob\":\"./assets/images/projects/Digitals-min.jpg\",\"imageDesk\":\"./assets/images/projects/Digitals.jpg\"},{\"id\":29,\"title\":\"Logo for organic food \\\"Power of the purple\\\"\",\"description\":\"Logo made for organic food for the client on \\\"designhell\\\" site. Created according to a given theme and given colors.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"\",\"imageDescription\":\"Logo for organic food \\\"Power of the purple\\\"\",\"imageMob\":\"./assets/images/projects/Powerofthepurple-min.jpg\",\"imageDesk\":\"./assets/images/projects/Powerofthepurple.jpg\"},{\"id\":30,\"title\":\"Flayer for restaurant \\\"Lunch\\\"\",\"description\":\"A5 flyer with a restaurant menu and important information.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"\",\"imageDescription\":\"Flayer for restaurant \\\"Lunch\\\"\",\"imageMob\":\"./assets/images/projects/restaurantflyer-min.jpg\",\"imageDesk\":\"./assets/images/projects/restaurantflyer.jpg\"},{\"id\":31,\"title\":\"Photoshop Manipulation\",\"description\":\"Photoshop fantasy manipulation for 'Čarda' restaurant.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"\",\"imageDescription\":\"Photoshop Manipulation\",\"imageMob\":\"./assets/images/projects/PhotoshopManipulation-min.jpg\",\"imageDesk\":\"./assets/images/projects/PhotoshopManipulation.jpg\"},{\"id\":32,\"title\":\"Photography / drawing / manipulation\",\"description\":\"Example of showing a person through 3 different forms: Photography, manipulating photography, creating drawings by looking at photography.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"\",\"imageDescription\":\"Photography / drawing / manipulation\",\"imageMob\":\"./assets/images/projects/Paja-min.jpg\",\"imageDesk\":\"./assets/images/projects/Paja.jpg\"},{\"id\":33,\"title\":\"Coat of arms of a football club\",\"description\":\"Coat of arms of a football club \\\"Železničar\\\"\",\"design\":[\"graphic design\"],\"colorsUsed\":\"\",\"imageDescription\":\"Coat of arms of a football club\",\"imageMob\":\"./assets/images/projects/grb-min.jpg\",\"imageDesk\":\"./assets/images/projects/grb.jpg\"},{\"id\":34,\"title\":\"Window sticker for \\\"Lunch\\\" restaurant\",\"description\":\"Creating interesting content for the sticker that fills the window of the restaurant, which shows the invitation to lunch.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"\",\"imageDescription\":\"Window sticker for \\\"Lunch\\\" restaurant\",\"imageMob\":\"./assets/images/projects/stickerlunch-min.jpg\",\"imageDesk\":\"./assets/images/projects/stickerlunch.jpg\"},{\"id\":35,\"title\":\"Flayer for fast food restaurant \\\"Buja planet\\\"\",\"description\":\"Flayer for fast food restaurant, with a menu and supplemented with illustrations for a stronger impression.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"\",\"imageDescription\":\"Flayer for fast food restaurant \\\"Buja planet\\\"\",\"imageMob\":\"./assets/images/projects/fastfoodflayer-min.jpg\",\"imageDesk\":\"./assets/images/projects/fastfoodflayer.jpg\"},{\"id\":36,\"title\":\"Logo designed for food delivery („Colorado“)\",\"description\":\"Logo for food delivery \\\"Colorado\\\"\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Logo („Colorado“)\",\"imageMob\":\"./assets/images/projects/colorado-min.jpg\",\"imageDesk\":\"./assets/images/projects/colorado.jpg\"},{\"id\":37,\"title\":\"Logo („Motheralnd“)\",\"description\":\"Logo for tanning salon. The desing of main figure of women is vectorized.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Logo („Motheralnd“)\",\"imageMob\":\"./assets/images/projects/motherland-min.jpg\",\"imageDesk\":\"./assets/images/projects/motherland.jpg\"},{\"id\":38,\"title\":\"Instagram content („Motheralnd tanning“)\",\"description\":\"“Content created for the instagram profile \\\"Motherland\\\" salon.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Instagram contet („Motherland“)\",\"imageMob\":\"./assets/images/projects/motheralndInstagram-min.jpg\",\"imageDesk\":\"./assets/images/projects/motheralndInstagram.jpg\"},{\"id\":39,\"title\":\"Illustration \\\"Drunk fruit\\\"\",\"description\":\"Illustration created in Photoshop for the brandy label.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Illustration for brandy\",\"imageMob\":\"./assets/images/projects/pijaneKruske-min.jpg\",\"imageDesk\":\"./assets/images/projects/pijaneKruske.jpg\"},{\"id\":40,\"title\":\"Brandy label („Durković“)\",\"description\":\"Labels of brandy for different types of fruit.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Brandy label („Durković“)\",\"imageMob\":\"./assets/images/projects/rakija-min.jpg\",\"imageDesk\":\"./assets/images/projects/rakija.jpg\"},{\"id\":41,\"title\":\"Pizzeria logo („Manila“)\",\"description\":\"Pizzeria logo made in the commissioned colors.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Pizzeria logo („Manila“)\",\"imageMob\":\"./assets/images/projects/manila-min.jpg\",\"imageDesk\":\"./assets/images/projects/manila.jpg\"},{\"id\":42,\"title\":\"Glass stickers („Manila“)\",\"description\":\"The illustrations of the redesign, that is displayed on front window were inspired by Pop art style .\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Glass stickers („Manila“)\",\"imageMob\":\"./assets/images/projects/beforeAfter-min.jpg\",\"imageDesk\":\"./assets/images/projects/beforeAfter.jpg\"},{\"id\":43,\"title\":\"Logo redesign („Molero“)\",\"description\":\"Redesign logo for painting works.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Logo redesign („Molero“)\",\"imageMob\":\"./assets/images/projects/molero-min.jpg\",\"imageDesk\":\"./assets/images/projects/molero.jpg\"},{\"id\":44,\"title\":\"Logo for moldings („Bovira“)\",\"description\":\"Logo created for a company that manufactures moldings and decorative elements.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Logo for moldings („Bovira“)\",\"imageMob\":\"./assets/images/projects/boviraLogo-min.jpg\",\"imageDesk\":\"./assets/images/projects/boviraLogo.jpg\"},{\"id\":45,\"title\":\"Catalog cover („Bovira“)\",\"description\":\"I did desing in photoshop and Illustator, and i also include all moldings on 3D Maz Studio.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"more\",\"imageDescription\":\"Catalog cover („Bovira“)\",\"imageMob\":\"./assets/images/projects/katalog-min.jpg\",\"imageDesk\":\"./assets/images/projects/katalog.jpg\"},{\"id\":46,\"title\":\"Page of catalog („Bovira“)\",\"description\":\"This the example the one of the pages from the catalog.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"more\",\"imageDescription\":\"Page of catalog („Bovira“)\",\"imageMob\":\"./assets/images/projects/str1-min.jpg\",\"imageDesk\":\"./assets/images/projects/str1.jpg\"},{\"id\":47,\"title\":\"Digital Portrait in Photoshop\",\"description\":\"Digital portrait created with brushes in photoshop.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Digital Portrait in Photoshop\",\"imageMob\":\"./assets/images/projects/digital-min.jpg\",\"imageDesk\":\"./assets/images/projects/digital.jpg\"},{\"id\":48,\"title\":\"Animal shelter logo („Good Hope“)\",\"description\":\"Logo created for the animal shelter, using only limited color palette from site.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Animal shelter logo („Good Hope“)\",\"imageMob\":\"./assets/images/projects/azil-min.jpg\",\"imageDesk\":\"./assets/images/projects/azil.jpg\"},{\"id\":49,\"title\":\"Digitas Logo REDESIGN\",\"description\":\"Creatine agency trademark redesign.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Logo Redesing\",\"imageMob\":\"./assets/images/projects/digitals-redesing-min.jpg\",\"imageDesk\":\"./assets/images/projects/digitals-redesing.jpg\"},{\"id\":50,\"title\":\"Branding\",\"description\":\"Farm vehicle branding.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Branding\",\"imageMob\":\"./assets/images/projects/bredndiranje-vozila-min.jpg\",\"imageDesk\":\"./assets/images/projects/bredndiranje-vozila.jpg\"},{\"id\":51,\"title\":\"Advertising solution\",\"description\":\"Advertising solution in the magazine 'Lepota i Zdravlje'.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Advertising solution\",\"imageMob\":\"./assets/images/projects/Oglasno-resenje-Lepota-i-zdravlje-min.jpg\",\"imageDesk\":\"./assets/images/projects/Oglasno-resenje-Lepota-i-zdravlje.jpg\"},{\"id\":52,\"title\":\"Brandy label\",\"description\":\"Label for brandy for farming 'Kolarski'.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Brandy label\",\"imageMob\":\"./assets/images/projects/rakija-etiketa-min.jpg\",\"imageDesk\":\"./assets/images/projects/rakija-etiketa.jpg\"},{\"id\":53,\"title\":\"Shop branding\",\"description\":\"Shop branding 'Džidžabidžarnica'.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Shop branding\",\"imageMob\":\"./assets/images/projects/dzidzabidzarnica-min.jpg\",\"imageDesk\":\"./assets/images/projects/dzidzabidzarnica.jpg\"},{\"id\":54,\"title\":\"Shop branding\",\"description\":\"Shop branding 'motherland-branding'.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Shop branding\",\"imageMob\":\"./assets/images/projects/motherland-branding-min.jpg\",\"imageDesk\":\"./assets/images/projects/motherland-branding.jpg\"},{\"id\":55,\"title\":\"Posts for social media\",\"description\":\"Creation of posts for social networks, construction companies, including creative posts, animations, video.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"social media posts\",\"imageMob\":\"./assets/images/projects/SG-social-media-min.jpg\",\"imageDesk\":\"./assets/images/projects/SG-social-media.jpg\"},{\"id\":56,\"title\":\"Site page design\",\"description\":\"Site page design 'Les appuis le ring'.\",\"design\":[\"UI/UX\"],\"colorsUsed\":\"two\",\"imageDescription\":\"site desing\",\"imageMob\":\"./assets/images/projects/les-appuis-le-ring-min.jpg\",\"imageDesk\":\"./assets/images/projects/les-appuis-le-ring.jpg\"},{\"id\":57,\"title\":\"Site page design\",\"description\":\"Site page design 'Concord'.\",\"design\":[\"UI/UX\"],\"colorsUsed\":\"two\",\"imageDescription\":\"site desing\",\"imageMob\":\"./assets/images/projects/concordsite-min.jpg\",\"imageDesk\":\"./assets/images/projects/concordsite.jpg\"},{\"id\":58,\"title\":\"Site page design\",\"description\":\"Site page design 'Bistrica'.\",\"design\":[\"UI/UX\"],\"colorsUsed\":\"two\",\"imageDescription\":\"site desing\",\"imageMob\":\"./assets/images/projects/bistricasite-min.jpg\",\"imageDesk\":\"./assets/images/projects/bistricasite.jpg\"},{\"id\":59,\"title\":\"Site page design\",\"description\":\"Site page design 'Bistrica'.\",\"design\":[\"UI/UX\"],\"colorsUsed\":\"two\",\"imageDescription\":\"site desing\",\"imageMob\":\"./assets/images/projects/bistricasite2.jpg\",\"imageDesk\":\"./assets/images/projects/bistricasite2.jpg\"}]}");

/***/ }),

/***/ "./src/js/skill.bars.jquery.js":
/*!*************************************!*\
  !*** ./src/js/skill.bars.jquery.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * https://github.com/umarwebdeveloper/jquery-css-skills-bar
 * Author: @umarwebdeveloper
 * Licensed under the MIT license
 */
 
(function ( $ ) {
 
    $.fn.skillBars = function( options ) {
 
        var settings = $.extend({
			from: 0,  			// number start
			to: false,			// number end
			speed: 1000,  		// how long it should take to count between the target numbers
			interval: 100,	  // how often the element should be updated
			decimals: 0,		  // the number of decimal places to show
			onUpdate: null,	  // callback method for every time the element is updated,
			onComplete: null,	  // callback method for when the element finishes updating
			/*onComplete: function(from) {
                console.debug(this);
            }*/
			classes:{
				skillBarBar : '.skillbar-bar',
				skillBarPercent : '.skill-bar-percent',
			}
        }, options );
 
        return this.each(function(){
			
			var obj = $(this),
				to = (settings.to != false) ? settings.to : parseInt(obj.attr('data-percent'));
				if(to > 100){
					to = 100;
				};
			var from = settings.from,
				loops = Math.ceil(settings.speed / settings.interval),
            	increment = (to - from) / loops,
				loopCount = 0,
				interval = setInterval(updateValue, settings.interval);
			
			obj.find(settings.classes.skillBarBar).animate({
				width: parseInt(obj.attr('data-percent'))+'%'
			}, settings.speed);
						
			function updateValue(){
				from += increment;
                loopCount++;
                $(obj).find(settings.classes.skillBarPercent).text(from.toFixed(settings.decimals)+'%');

                if (typeof(settings.onUpdate) == 'function') {
                    settings.onUpdate.call(obj, from);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    from = to;

                    if (typeof(settings.onComplete) == 'function') {
                        settings.onComplete.call(obj, from);
                    }
                }
			}
			
        });
 
    };
 
}( jQuery ));


/***/ }),

/***/ "./src/js/skillBar.js":
/*!****************************!*\
  !*** ./src/js/skillBar.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
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


/***/ }),

/***/ 0:
/*!**************************************************************************************************************************************!*\
  !*** multi ./src/js/fetchJSONdata.js ./src/js/formValidaiton.js ./src/js/main.js ./src/js/skill.bars.jquery.js ./src/js/skillBar.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\franc\Franc\Front-end projects\KristinaDžolić - Portfolio\src\js\fetchJSONdata.js */"./src/js/fetchJSONdata.js");
__webpack_require__(/*! C:\Users\franc\Franc\Front-end projects\KristinaDžolić - Portfolio\src\js\formValidaiton.js */"./src/js/formValidaiton.js");
__webpack_require__(/*! C:\Users\franc\Franc\Front-end projects\KristinaDžolić - Portfolio\src\js\main.js */"./src/js/main.js");
__webpack_require__(/*! C:\Users\franc\Franc\Front-end projects\KristinaDžolić - Portfolio\src\js\skill.bars.jquery.js */"./src/js/skill.bars.jquery.js");
module.exports = __webpack_require__(/*! C:\Users\franc\Franc\Front-end projects\KristinaDžolić - Portfolio\src\js\skillBar.js */"./src/js/skillBar.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZldGNoSlNPTmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zvcm1WYWxpZGFpdG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9za2lsbC5iYXJzLmpxdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2tpbGxCYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQSwyQkFBMkIsbUJBQU8sQ0FBQywrQ0FBaUI7O0FBRXBEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQSxvQkFBb0IsR0FBRyxXQUFXO0FBQ2xDO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkIsY0FBYyxpQkFBaUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFc7QUFDQSxzQkFBc0I7QUFDdEIsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsZ0JBQWdCLFVBQVU7QUFDMUI7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0osR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3ZGRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyx5QkFBeUIsNkJBQTZCLElBQUksUUFBUSxJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUksZ0NBQWdDLEdBQUc7QUFDbEs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN2RkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdERDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNuRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0YsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLWNvbnRhaW5lcicpO1xyXG5cdGNvbnN0IGxvY2FsUHJvamVjdHNKU09OID0gcmVxdWlyZSgnLi9wcm9qZWN0cy5qc29uJyk7XHJcblxyXG5cdGNvbnN0IGdldFByb2plY3RzRnJvbUpzb24gPSBhc3luYyAoKSA9PiB7XHJcblx0XHRjb25zdCBwcm9qZWN0cyA9IGF3YWl0IGxvY2FsUHJvamVjdHNKU09OLnByb2plY3RzO1xyXG5cclxuXHRcdHByb2plY3RzQ29udGFpbmVyLmlubmVySFRNTCA9IHByb2plY3RzXHJcblx0XHRcdC5tYXAoKHByb2plY3QpID0+IHtcclxuXHRcdFx0XHRjb25zdCB7XHJcblx0XHRcdFx0XHRpZCxcclxuXHRcdFx0XHRcdHRpdGxlLFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb24sXHJcblx0XHRcdFx0XHRkZXNpZ24sXHJcblx0XHRcdFx0XHRjb2xvcnNVc2VkLFxyXG5cdFx0XHRcdFx0aW1hZ2VEZXNjcmlwdGlvbixcclxuXHRcdFx0XHRcdGltYWdlTW9iLFxyXG5cdFx0XHRcdFx0aW1hZ2VEZXNrLFxyXG5cdFx0XHRcdH0gPSBwcm9qZWN0O1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveGVzX19ib3ggaXRlbSAke2Rlc2lnblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQubWFwKChzaW5sZ2VEZXNpZ24pID0+IHNpbmxnZURlc2lnbilcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmpvaW4oJyAnKX0gJHtjb2xvcnNVc2VkfVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJveGVzX19ib3gtLWltZ1wiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0c3JjPVwiJHtpbWFnZU1vYn1cIlxyXG5cdFx0XHRcdFx0XHRcdGFsdD1cIiR7aW1hZ2VEZXNjcmlwdGlvbn1cIlxyXG5cdFx0XHRcdFx0XHRcdGxvYWRpbmc9XCJsYXp5XCJcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJveGVzX19ib3gtLW92ZXJsYXkgXHJcbiAgICAgICAgICAgICAgICAgICAgJHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yc1VzZWQgPT09ICcnIHx8ICdvbmUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gJ2JveGVzX19ib3gtLXByaW1hcnlfY2xyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBcclxuICAgICAgICAgICAgICAgICAgICAke2NvbG9yc1VzZWQgPT09ICd0d28nID8gJ2JveGVzX19ib3gtLXNlY29uZGFyeV9jbHInIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgJHtjb2xvcnNVc2VkID09PSAnbW9yZScgPyAnYm94ZXNfX2JveC0tdGVydGlhcnlfY2xyJyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYm94ZXNfX2JveC0tY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMj4ke3RpdGxlfTwvaDI+XHJcblx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHQke2Rlc2NyaXB0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0aHJlZj1cIiR7aW1hZ2VEZXNrfVwiXHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLWxpZ2h0Ym94PVwibXlnYWxsZXJ5XCJcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtdGl0bGU9XCIke2ltYWdlRGVzY3JpcHRpb259XCJcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9wZW5cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5yZXZlcnNlKClcclxuXHRcdFx0LmpvaW4oJycpO1xyXG5cclxuXHRcdGxldCBpc28gPSBuZXcgSXNvdG9wZShwcm9qZWN0c0NvbnRhaW5lciwge1xyXG5cdFx0XHQvLyBvcHRpb25zXHJcblx0XHRcdGl0ZW1TZWxlY3RvcjogJy5pdGVtJyxcclxuXHRcdFx0bGF5b3V0TW9kZTogJ2ZpdFJvd3MnLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgZmlsdGVySXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyJyk7XHJcblxyXG5cdFx0ZmlsdGVySXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0XHRmaWx0ZXJJdGVtcy5mb3JFYWNoKChmaWx0ZXIpID0+IGZpbHRlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcblx0XHRcdFx0ZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHRsZXQgZmlsdGVyU2VsZWN0b3IgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5maWx0ZXI7XHJcblxyXG5cdFx0XHRcdGlzby5hcnJhbmdlKHtcclxuXHRcdFx0XHRcdC8vIGl0ZW0gZWxlbWVudCBwcm92aWRlZCBhcyBhcmd1bWVudFxyXG5cdFx0XHRcdFx0ZmlsdGVyOiBmaWx0ZXJTZWxlY3RvcixcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRpZiAocHJvamVjdHNDb250YWluZXIpIHtcclxuXHRcdGdldFByb2plY3RzRnJvbUpzb24oKTtcclxuXHR9XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdC8vIGZvcm0gdmFsaWRhdGlvblxyXG5cdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1mb3JtJyk7XHJcblx0Y29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XHJcblx0Y29uc3QgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKTtcclxuXHRjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UnKTtcclxuXHRjb25zdCBmb3JtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tYnRuJyk7XHJcblxyXG5cdGlmIChmb3JtKSB7XHJcblx0XHRbXHJcblx0XHRcdCdjbGljaycsXHJcblx0XHRcdCdvbnRvdWNoc3RhcnQnLFxyXG5cdFx0XHQnbW91c2VvdmVyJyxcclxuXHRcdFx0J2tleWRvd24nLFxyXG5cdFx0XHQna2V5cHJlc3MnLFxyXG5cdFx0XHQndG91Y2hzdGFydCcsXHJcblx0XHRcdCd0b3VjaG1vdmUnLFxyXG5cdFx0XS5mb3JFYWNoKFxyXG5cdFx0XHQoZXZlbnQpID0+XHJcblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGNoZWNrSW5wdXRzKCkgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdGZvcm1CdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Zm9ybUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcblx0XHRmdW5jdGlvbiBjaGVja0lucHV0cygpIHtcclxuXHRcdFx0Y29uc3QgbmFtZVZhbHVlID0gbmFtZS52YWx1ZS50cmltKCk7XHJcblx0XHRcdGNvbnN0IGVtYWlsVmFsdWUgPSBlbWFpbC52YWx1ZS50cmltKCk7XHJcblx0XHRcdGNvbnN0IG1lc3NhZ2VWYWx1ZSA9IG1lc3NhZ2UudmFsdWUudHJpbSgpO1xyXG5cclxuXHRcdFx0aWYgKG5hbWVWYWx1ZSA9PT0gJycpIHtcclxuXHRcdFx0XHRzZXRFcnJvckZvcihuYW1lLCAnUGxlYXNlIGVudGVyIHlvdXIgZnVsbCBuYW1lJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0U3VjY2Vzc0ZvcihuYW1lKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGVtYWlsVmFsdWUgPT09ICcnKSB7XHJcblx0XHRcdFx0c2V0RXJyb3JGb3IoZW1haWwsICdQbGVhc2UgZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzJyk7XHJcblx0XHRcdH0gZWxzZSBpZiAoIWVtYWlsSXNWYWxpZChlbWFpbFZhbHVlKSkge1xyXG5cdFx0XHRcdHNldEVycm9yRm9yKGVtYWlsLCAnRW1haWwgaXMgbm90IHZhbGlkJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0U3VjY2Vzc0ZvcihlbWFpbCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChtZXNzYWdlVmFsdWUgPT09ICcnKSB7XHJcblx0XHRcdFx0c2V0RXJyb3JGb3IobWVzc2FnZSwgJ1BsZWFzZSBlbnRlciB5b3VyIG1lc3NhZ2UnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRTdWNjZXNzRm9yKG1lc3NhZ2UpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0bmFtZVZhbHVlID09PSAnJyB8fFxyXG5cdFx0XHRcdGVtYWlsVmFsdWUgPT09ICcnIHx8XHJcblx0XHRcdFx0bWVzc2FnZVZhbHVlID09PSAnJyB8fFxyXG5cdFx0XHRcdCFlbWFpbElzVmFsaWQoZW1haWxWYWx1ZSlcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2V0RXJyb3JGb3IoaW5wdXQsIG1lc3NhZ2UpIHtcclxuXHRcdFx0Y29uc3QgZm9ybSA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdGNvbnN0IHNtYWxsID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdzbWFsbCcpO1xyXG5cclxuXHRcdFx0c21hbGwuaW5uZXJUZXh0ID0gbWVzc2FnZTtcclxuXHRcdFx0Zm9ybS5jbGFzc05hbWUgPSAnZm9ybV9fZ3JvdXAgZXJyb3InO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNldFN1Y2Nlc3NGb3IoaW5wdXQpIHtcclxuXHRcdFx0Y29uc3QgZm9ybSA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdGZvcm0uY2xhc3NOYW1lID0gJ2Zvcm1fX2dyb3VwIHN1Y2Nlc3MnO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGVtYWlsSXNWYWxpZChlbWFpbCkge1xyXG5cdFx0XHRjb25zdCByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvLnRlc3QoXHJcblx0XHRcdFx0ZW1haWxcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHJldHVybiByZTtcclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGUpID0+IHtcclxuXHRcdGNvbnN0IHByZWxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZCcpO1xyXG5cclxuXHRcdHByZWxvYWQuY2xhc3NMaXN0LmFkZCgncHJlbG9hZC1maW5pc2hlZCcpO1xyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBidG5TY3JvbGxUb1RvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5TY3JvbGxUb1RvcCcpO1xyXG5cclxuXHRpZiAoYnRuU2Nyb2xsVG9Ub3ApIHtcclxuXHRcdGJ0blNjcm9sbFRvVG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0d2luZG93LnNjcm9sbFRvKHtcclxuXHRcdFx0XHR0b3A6IDAsXHJcblx0XHRcdFx0bGVmdDogMCxcclxuXHRcdFx0XHRiZWhhdmlvcjogJ3Ntb290aCcsXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGUpID0+IHtcclxuXHRcdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gMCkge1xyXG5cdFx0XHR0b3BOYXYuY2xhc3NMaXN0LmFkZCgnbmF2LXRvcC0tc3RpY2t5Jyk7XHJcblx0XHRcdGlmICh0b3BOYXZMaXN0KSB7XHJcblx0XHRcdFx0dG9wTmF2TGlzdC5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tbWVudV9fbGlzdC0tc3RpY2t5Jyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGJ0blNjcm9sbFRvVG9wLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dG9wTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ25hdi10b3AtLXN0aWNreScpO1xyXG5cdFx0XHRpZiAodG9wTmF2TGlzdCkge1xyXG5cdFx0XHRcdHRvcE5hdkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvLW1lbnVfX2xpc3QtLXN0aWNreScpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJ0blNjcm9sbFRvVG9wLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB0b3BOYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9wLW5hdicpO1xyXG5cdGNvbnN0IHRvcE5hdkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9ydGZvbGlvLW1lbnVfX2xpc3QnKTtcclxuXHRjb25zdCBuYXZVbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtdWwnKTtcclxuXHRjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYnRuJyk7XHJcblx0bGV0IG1lbnVPcGVuID0gZmFsc2U7XHJcblxyXG5cdG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRuYXZVbC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93aW5nJyk7XHJcblxyXG5cdFx0aWYgKCFtZW51T3Blbikge1xyXG5cdFx0XHRtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuXHRcdFx0bWVudU9wZW4gPSB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcblx0XHRcdG1lbnVPcGVuID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHllYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHluYW1pYy15ZWFyJyk7XHJcblxyXG5cdGZ1bmN0aW9uIGN1cnJlbnRZZWFyKCkge1xyXG5cdFx0eWVhci5pbm5lclRleHQgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcblx0fVxyXG5cclxuXHRjdXJyZW50WWVhcigpO1xyXG59KTtcclxuIiwiLyohXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdW1hcndlYmRldmVsb3Blci9qcXVlcnktY3NzLXNraWxscy1iYXJcbiAqIEF1dGhvcjogQHVtYXJ3ZWJkZXZlbG9wZXJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG4gXG4oZnVuY3Rpb24gKCAkICkge1xuIFxuICAgICQuZm4uc2tpbGxCYXJzID0gZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG4gXG4gICAgICAgIHZhciBzZXR0aW5ncyA9ICQuZXh0ZW5kKHtcblx0XHRcdGZyb206IDAsICBcdFx0XHQvLyBudW1iZXIgc3RhcnRcblx0XHRcdHRvOiBmYWxzZSxcdFx0XHQvLyBudW1iZXIgZW5kXG5cdFx0XHRzcGVlZDogMTAwMCwgIFx0XHQvLyBob3cgbG9uZyBpdCBzaG91bGQgdGFrZSB0byBjb3VudCBiZXR3ZWVuIHRoZSB0YXJnZXQgbnVtYmVyc1xuXHRcdFx0aW50ZXJ2YWw6IDEwMCxcdCAgLy8gaG93IG9mdGVuIHRoZSBlbGVtZW50IHNob3VsZCBiZSB1cGRhdGVkXG5cdFx0XHRkZWNpbWFsczogMCxcdFx0ICAvLyB0aGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIHRvIHNob3dcblx0XHRcdG9uVXBkYXRlOiBudWxsLFx0ICAvLyBjYWxsYmFjayBtZXRob2QgZm9yIGV2ZXJ5IHRpbWUgdGhlIGVsZW1lbnQgaXMgdXBkYXRlZCxcblx0XHRcdG9uQ29tcGxldGU6IG51bGwsXHQgIC8vIGNhbGxiYWNrIG1ldGhvZCBmb3Igd2hlbiB0aGUgZWxlbWVudCBmaW5pc2hlcyB1cGRhdGluZ1xuXHRcdFx0LypvbkNvbXBsZXRlOiBmdW5jdGlvbihmcm9tKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1Zyh0aGlzKTtcbiAgICAgICAgICAgIH0qL1xuXHRcdFx0Y2xhc3Nlczp7XG5cdFx0XHRcdHNraWxsQmFyQmFyIDogJy5za2lsbGJhci1iYXInLFxuXHRcdFx0XHRza2lsbEJhclBlcmNlbnQgOiAnLnNraWxsLWJhci1wZXJjZW50Jyxcblx0XHRcdH1cbiAgICAgICAgfSwgb3B0aW9ucyApO1xuIFxuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0XHRcblx0XHRcdHZhciBvYmogPSAkKHRoaXMpLFxuXHRcdFx0XHR0byA9IChzZXR0aW5ncy50byAhPSBmYWxzZSkgPyBzZXR0aW5ncy50byA6IHBhcnNlSW50KG9iai5hdHRyKCdkYXRhLXBlcmNlbnQnKSk7XG5cdFx0XHRcdGlmKHRvID4gMTAwKXtcblx0XHRcdFx0XHR0byA9IDEwMDtcblx0XHRcdFx0fTtcblx0XHRcdHZhciBmcm9tID0gc2V0dGluZ3MuZnJvbSxcblx0XHRcdFx0bG9vcHMgPSBNYXRoLmNlaWwoc2V0dGluZ3Muc3BlZWQgLyBzZXR0aW5ncy5pbnRlcnZhbCksXG4gICAgICAgICAgICBcdGluY3JlbWVudCA9ICh0byAtIGZyb20pIC8gbG9vcHMsXG5cdFx0XHRcdGxvb3BDb3VudCA9IDAsXG5cdFx0XHRcdGludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlVmFsdWUsIHNldHRpbmdzLmludGVydmFsKTtcblx0XHRcdFxuXHRcdFx0b2JqLmZpbmQoc2V0dGluZ3MuY2xhc3Nlcy5za2lsbEJhckJhcikuYW5pbWF0ZSh7XG5cdFx0XHRcdHdpZHRoOiBwYXJzZUludChvYmouYXR0cignZGF0YS1wZXJjZW50JykpKyclJ1xuXHRcdFx0fSwgc2V0dGluZ3Muc3BlZWQpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRmdW5jdGlvbiB1cGRhdGVWYWx1ZSgpe1xuXHRcdFx0XHRmcm9tICs9IGluY3JlbWVudDtcbiAgICAgICAgICAgICAgICBsb29wQ291bnQrKztcbiAgICAgICAgICAgICAgICAkKG9iaikuZmluZChzZXR0aW5ncy5jbGFzc2VzLnNraWxsQmFyUGVyY2VudCkudGV4dChmcm9tLnRvRml4ZWQoc2V0dGluZ3MuZGVjaW1hbHMpKyclJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mKHNldHRpbmdzLm9uVXBkYXRlKSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLm9uVXBkYXRlLmNhbGwob2JqLCBmcm9tKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobG9vcENvdW50ID49IGxvb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICBmcm9tID0gdG87XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZihzZXR0aW5ncy5vbkNvbXBsZXRlKSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5vbkNvbXBsZXRlLmNhbGwob2JqLCBmcm9tKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblx0XHRcdH1cblx0XHRcdFxuICAgICAgICB9KTtcbiBcbiAgICB9O1xuIFxufSggalF1ZXJ5ICkpO1xuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cdC8vIHNraWxsIGJhciBBQk9VVCBQQUdFXHJcblx0JCgnLnNraWxsYmFyJykuc2tpbGxCYXJzKHtcclxuXHRcdC8vIG51bWJlciBzdGFydFxyXG5cdFx0ZnJvbTogMCxcclxuXHJcblx0XHQvLyBudW1iZXIgZW5kXHJcblx0XHR0bzogZmFsc2UsXHJcblxyXG5cdFx0Ly8gYW5pbWF0aW9uIHNwZWVkXHJcblx0XHRzcGVlZDogMzAwMCxcclxuXHJcblx0XHQvLyBob3cgb2Z0ZW4gdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHVwPGEgaHJlZj1cImh0dHBzOi8vd3d3LmpxdWVyeXNjcmlwdC5uZXQvdGltZS1jbG9jay9cIj5kYXRlPC9hPmRcclxuXHRcdGludGVydmFsOiAxMDAsXHJcblxyXG5cdFx0Ly8gdGhlIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyB0byBzaG93XHJcblx0XHRkZWNpbWFsczogMCxcclxuXHJcblx0XHQvLyBjYWxsYmFjayBtZXRob2QgZm9yIGV2ZXJ5IHRpbWUgdGhlIGVsZW1lbnQgaXMgdXBkYXRlZCxcclxuXHRcdG9uVXBkYXRlOiBudWxsLFxyXG5cclxuXHRcdC8vIGNhbGxiYWNrIG1ldGhvZCBmb3Igd2hlbiB0aGUgZWxlbWVudCBmaW5pc2hlcyB1cGRhdGluZ1xyXG5cdFx0b25Db21wbGV0ZTogbnVsbCxcclxuXHJcblx0XHQvLyBDU1MgY2xhc3Nlc1xyXG5cdFx0Y2xhc3Nlczoge1xyXG5cdFx0XHRza2lsbEJhckJhcjogJy5za2lsbGJhci1iYXInLFxyXG5cdFx0XHRza2lsbEJhclBlcmNlbnQ6ICcuc2tpbGwtYmFyLXBlcmNlbnQnLFxyXG5cdFx0fSxcclxuXHR9KTtcclxufSk7XHJcbiJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFpTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJwekwyWmxkR05vU2xOUFRtUmhkR0V1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwycHpMMlp2Y20xV1lXeHBaR0ZwZEc5dUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTlxY3k5dFlXbHVMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5cWN5OXphMmxzYkM1aVlYSnpMbXB4ZFdWeWVTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12YW5NdmMydHBiR3hDWVhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdFJRVUZCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHM3VVVGRlFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUczdVVUZGUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPenM3VVVGSFFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUdFJRVU5CTzFGQlEwRXNNRU5CUVRCRExHZERRVUZuUXp0UlFVTXhSVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdVVUZEUVR0UlFVTkJMSGRFUVVGM1JDeHJRa0ZCYTBJN1VVRkRNVVU3VVVGRFFTeHBSRUZCYVVRc1kwRkJZenRSUVVNdlJEczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFc2VVTkJRWGxETEdsRFFVRnBRenRSUVVNeFJTeG5TRUZCWjBnc2JVSkJRVzFDTEVWQlFVVTdVVUZEY2trN1VVRkRRVHM3VVVGRlFUdFJRVU5CTzFGQlEwRTdVVUZEUVN3eVFrRkJNa0lzTUVKQlFUQkNMRVZCUVVVN1VVRkRka1FzYVVOQlFXbERMR1ZCUVdVN1VVRkRhRVE3VVVGRFFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFc2MwUkJRWE5FTEN0RVFVRXJSRHM3VVVGRmNrZzdVVUZEUVRzN08xRkJSMEU3VVVGRFFUczdPenM3T3pzN096czdPMEZEYkVaQk8wRkJRMEU3UVVGRFFTd3lRa0ZCTWtJc2JVSkJRVThzUTBGQlF5d3JRMEZCYVVJN08wRkJSWEJFTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3TzBGQlJVdzdRVUZEUVN3NFEwRkJPRU03UVVGRE9VTTdRVUZEUVN4dlFrRkJiMElzUjBGQlJ5eFhRVUZYTzBGQlEyeERPMEZCUTBFN1FVRkRRU3hqUVVGakxGTkJRVk03UVVGRGRrSXNZMEZCWXl4cFFrRkJhVUk3UVVGREwwSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZjN1FVRkRRU3h6UWtGQmMwSTdRVUZEZEVJc2MwSkJRWE5DTzBGQlEzUkNPMEZCUTBFN1FVRkRRVHRCUVVOQkxHRkJRV0VzVFVGQlRUdEJRVU51UWp0QlFVTkJMRlZCUVZVN1FVRkRWanRCUVVOQk8wRkJRMEVzWjBKQlFXZENMRlZCUVZVN1FVRkRNVUk3UVVGRFFTeHpRa0ZCYzBJc2FVSkJRV2xDTzBGQlEzWkRPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTVUZCU1R0QlFVTktPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPenRCUVVWSU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRUQ3hKUVVGSk8wRkJRMG9zUjBGQlJ6dEJRVU5JT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03T3pzN096czdPenM3T3p0QlEzWkdSRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUVUZCVFR0QlFVTk9PMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNTVUZCU1R0QlFVTktPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEVsQlFVazdRVUZEU2p0QlFVTkJMRWxCUVVrN1FVRkRTanRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4SlFVRkpPMEZCUTBvN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFbEJRVWs3UVVGRFNqdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMR2xEUVVGcFF5eDVRa0ZCZVVJc05rSkJRVFpDTEVsQlFVa3NVVUZCVVN4SlFVRkpMRkZCUVZFc1NVRkJTU3hSUVVGUkxFbEJRVWtzWjBOQlFXZERMRWRCUVVjN1FVRkRiRXM3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE96czdPenM3T3pzN096czdRVU4yUmtRN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNSVUZCUlRzN1FVRkZSanM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hKUVVGSk8wRkJRMG9zUjBGQlJ6dEJRVU5JT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEVzUlVGQlJUczdRVUZGUmpzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4RFFVRkRPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlF6ZEVSRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNZVUZCWVR0QlFVTmlPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6czdRVUZGVkRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNTVUZCU1RzN1FVRkZTanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNVMEZCVXpzN1FVRkZWRHM3UVVGRlFTeERRVUZET3pzN096czdPenM3T3pzN1FVTnVSVVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNDeEZRVUZGTzBGQlEwWXNRMEZCUXlJc0ltWnBiR1VpT2lKak0yTTBOV00zTVRkaU16WTNNV0prWVdJNE5TNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlCY2RDOHZJRlJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEhaaGNpQnBibk4wWVd4c1pXUk5iMlIxYkdWeklEMGdlMzA3WEc1Y2JpQmNkQzh2SUZSb1pTQnlaWEYxYVhKbElHWjFibU4wYVc5dVhHNGdYSFJtZFc1amRHbHZiaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0cxdlpIVnNaVWxrS1NCN1hHNWNiaUJjZEZ4MEx5OGdRMmhsWTJzZ2FXWWdiVzlrZFd4bElHbHpJR2x1SUdOaFkyaGxYRzRnWEhSY2RHbG1LR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRLU0I3WEc0Z1hIUmNkRngwY21WMGRYSnVJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbVY0Y0c5eWRITTdYRzRnWEhSY2RIMWNiaUJjZEZ4MEx5OGdRM0psWVhSbElHRWdibVYzSUcxdlpIVnNaU0FvWVc1a0lIQjFkQ0JwZENCcGJuUnZJSFJvWlNCallXTm9aU2xjYmlCY2RGeDBkbUZ5SUcxdlpIVnNaU0E5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkSUQwZ2UxeHVJRngwWEhSY2RHazZJRzF2WkhWc1pVbGtMRnh1SUZ4MFhIUmNkR3c2SUdaaGJITmxMRnh1SUZ4MFhIUmNkR1Y0Y0c5eWRITTZJSHQ5WEc0Z1hIUmNkSDA3WEc1Y2JpQmNkRngwTHk4Z1JYaGxZM1YwWlNCMGFHVWdiVzlrZFd4bElHWjFibU4wYVc5dVhHNGdYSFJjZEcxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1OaGJHd29iVzlrZFd4bExtVjRjRzl5ZEhNc0lHMXZaSFZzWlN3Z2JXOWtkV3hsTG1WNGNHOXlkSE1zSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4cE8xeHVYRzRnWEhSY2RDOHZJRVpzWVdjZ2RHaGxJRzF2WkhWc1pTQmhjeUJzYjJGa1pXUmNiaUJjZEZ4MGJXOWtkV3hsTG13Z1BTQjBjblZsTzF4dVhHNGdYSFJjZEM4dklGSmxkSFZ5YmlCMGFHVWdaWGh3YjNKMGN5QnZaaUIwYUdVZ2JXOWtkV3hsWEc0Z1hIUmNkSEpsZEhWeWJpQnRiMlIxYkdVdVpYaHdiM0owY3p0Y2JpQmNkSDFjYmx4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlhNZ2IySnFaV04wSUNoZlgzZGxZbkJoWTJ0ZmJXOWtkV3hsYzE5ZktWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dElEMGdiVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WXlBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHUmxabWx1WlNCblpYUjBaWElnWm5WdVkzUnBiMjRnWm05eUlHaGhjbTF2Ym5rZ1pYaHdiM0owYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrSUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3l3Z2JtRnRaU3dnWjJWMGRHVnlLU0I3WEc0Z1hIUmNkR2xtS0NGZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOG9aWGh3YjNKMGN5d2dibUZ0WlNrcElIdGNiaUJjZEZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnYm1GdFpTd2dleUJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMQ0JuWlhRNklHZGxkSFJsY2lCOUtUdGNiaUJjZEZ4MGZWeHVJRngwZlR0Y2JseHVJRngwTHk4Z1pHVm1hVzVsSUY5ZlpYTk5iMlIxYkdVZ2IyNGdaWGh3YjNKMGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eUlEMGdablZ1WTNScGIyNG9aWGh3YjNKMGN5a2dlMXh1SUZ4MFhIUnBaaWgwZVhCbGIyWWdVM2x0WW05c0lDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUppQlRlVzFpYjJ3dWRHOVRkSEpwYm1kVVlXY3BJSHRjYmlCY2RGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z1UzbHRZbTlzTG5SdlUzUnlhVzVuVkdGbkxDQjdJSFpoYkhWbE9pQW5UVzlrZFd4bEp5QjlLVHRjYmlCY2RGeDBmVnh1SUZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnSjE5ZlpYTk5iMlIxYkdVbkxDQjdJSFpoYkhWbE9pQjBjblZsSUgwcE8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1kzSmxZWFJsSUdFZ1ptRnJaU0J1WVcxbGMzQmhZMlVnYjJKcVpXTjBYRzRnWEhRdkx5QnRiMlJsSUNZZ01Ub2dkbUZzZFdVZ2FYTWdZU0J0YjJSMWJHVWdhV1FzSUhKbGNYVnBjbVVnYVhSY2JpQmNkQzh2SUcxdlpHVWdKaUF5T2lCdFpYSm5aU0JoYkd3Z2NISnZjR1Z5ZEdsbGN5QnZaaUIyWVd4MVpTQnBiblJ2SUhSb1pTQnVjMXh1SUZ4MEx5OGdiVzlrWlNBbUlEUTZJSEpsZEhWeWJpQjJZV3gxWlNCM2FHVnVJR0ZzY21WaFpIa2dibk1nYjJKcVpXTjBYRzRnWEhRdkx5QnRiMlJsSUNZZ09Id3hPaUJpWldoaGRtVWdiR2xyWlNCeVpYRjFhWEpsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMblFnUFNCbWRXNWpkR2x2YmloMllXeDFaU3dnYlc5a1pTa2dlMXh1SUZ4MFhIUnBaaWh0YjJSbElDWWdNU2tnZG1Gc2RXVWdQU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0haaGJIVmxLVHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JRGdwSUhKbGRIVnliaUIyWVd4MVpUdGNiaUJjZEZ4MGFXWW9LRzF2WkdVZ0ppQTBLU0FtSmlCMGVYQmxiMllnZG1Gc2RXVWdQVDA5SUNkdlltcGxZM1FuSUNZbUlIWmhiSFZsSUNZbUlIWmhiSFZsTGw5ZlpYTk5iMlIxYkdVcElISmxkSFZ5YmlCMllXeDFaVHRjYmlCY2RGeDBkbUZ5SUc1eklEMGdUMkpxWldOMExtTnlaV0YwWlNodWRXeHNLVHRjYmlCY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV5S0c1ektUdGNiaUJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLRzV6TENBblpHVm1ZWFZzZENjc0lIc2daVzUxYldWeVlXSnNaVG9nZEhKMVpTd2dkbUZzZFdVNklIWmhiSFZsSUgwcE8xeHVJRngwWEhScFppaHRiMlJsSUNZZ01pQW1KaUIwZVhCbGIyWWdkbUZzZFdVZ0lUMGdKM04wY21sdVp5Y3BJR1p2Y2loMllYSWdhMlY1SUdsdUlIWmhiSFZsS1NCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUW9ibk1zSUd0bGVTd2dablZ1WTNScGIyNG9hMlY1S1NCN0lISmxkSFZ5YmlCMllXeDFaVnRyWlhsZE95QjlMbUpwYm1Rb2JuVnNiQ3dnYTJWNUtTazdYRzRnWEhSY2RISmxkSFZ5YmlCdWN6dGNiaUJjZEgwN1hHNWNiaUJjZEM4dklHZGxkRVJsWm1GMWJIUkZlSEJ2Y25RZ1puVnVZM1JwYjI0Z1ptOXlJR052YlhCaGRHbGlhV3hwZEhrZ2QybDBhQ0J1YjI0dGFHRnliVzl1ZVNCdGIyUjFiR1Z6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTRnUFNCbWRXNWpkR2x2YmlodGIyUjFiR1VwSUh0Y2JpQmNkRngwZG1GeUlHZGxkSFJsY2lBOUlHMXZaSFZzWlNBbUppQnRiMlIxYkdVdVgxOWxjMDF2WkhWc1pTQS9YRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwUkdWbVlYVnNkQ2dwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVnNuWkdWbVlYVnNkQ2RkT3lCOUlEcGNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJOYjJSMWJHVkZlSEJ2Y25SektDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bE95QjlPMXh1SUZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFvWjJWMGRHVnlMQ0FuWVNjc0lHZGxkSFJsY2lrN1hHNGdYSFJjZEhKbGRIVnliaUJuWlhSMFpYSTdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHeGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5QTlJR1oxYm1OMGFXOXVLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BJSHNnY21WMGRYSnVJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2h2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLVHNnZlR0Y2JseHVJRngwTHk4Z1gxOTNaV0p3WVdOclgzQjFZbXhwWTE5d1lYUm9YMTljYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjQ0E5SUZ3aVhDSTdYRzVjYmx4dUlGeDBMeThnVEc5aFpDQmxiblJ5ZVNCdGIyUjFiR1VnWVc1a0lISmxkSFZ5YmlCbGVIQnZjblJ6WEc0Z1hIUnlaWFIxY200Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aGZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbk1nUFNBd0tUdGNiaUlzSW1SdlkzVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjBSUFRVTnZiblJsYm5STWIyRmtaV1FuTENCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4MFkyOXVjM1FnY0hKdmFtVmpkSE5EYjI1MFlXbHVaWElnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duY0hKdmFtVmpkSE10WTI5dWRHRnBibVZ5SnlrN1hISmNibHgwWTI5dWMzUWdiRzlqWVd4UWNtOXFaV04wYzBwVFQwNGdQU0J5WlhGMWFYSmxLQ2N1TDNCeWIycGxZM1J6TG1wemIyNG5LVHRjY2x4dVhISmNibHgwWTI5dWMzUWdaMlYwVUhKdmFtVmpkSE5HY205dFNuTnZiaUE5SUdGemVXNWpJQ2dwSUQwK0lIdGNjbHh1WEhSY2RHTnZibk4wSUhCeWIycGxZM1J6SUQwZ1lYZGhhWFFnYkc5allXeFFjbTlxWldOMGMwcFRUMDR1Y0hKdmFtVmpkSE03WEhKY2JseHlYRzVjZEZ4MGNISnZhbVZqZEhORGIyNTBZV2x1WlhJdWFXNXVaWEpJVkUxTUlEMGdjSEp2YW1WamRITmNjbHh1WEhSY2RGeDBMbTFoY0Nnb2NISnZhbVZqZENrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJSHRjY2x4dVhIUmNkRngwWEhSY2RHbGtMRnh5WEc1Y2RGeDBYSFJjZEZ4MGRHbDBiR1VzWEhKY2JseDBYSFJjZEZ4MFhIUmtaWE5qY21sd2RHbHZiaXhjY2x4dVhIUmNkRngwWEhSY2RHUmxjMmxuYml4Y2NseHVYSFJjZEZ4MFhIUmNkR052Ykc5eWMxVnpaV1FzWEhKY2JseDBYSFJjZEZ4MFhIUnBiV0ZuWlVSbGMyTnlhWEIwYVc5dUxGeHlYRzVjZEZ4MFhIUmNkRngwYVcxaFoyVk5iMklzWEhKY2JseDBYSFJjZEZ4MFhIUnBiV0ZuWlVSbGMyc3NYSEpjYmx4MFhIUmNkRngwZlNBOUlIQnliMnBsWTNRN1hISmNibHh5WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUJnWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelBWd2lZbTk0WlhOZlgySnZlQ0JwZEdWdElDUjdaR1Z6YVdkdVhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkQzV0WVhBb0tITnBibXhuWlVSbGMybG5iaWtnUFQ0Z2MybHViR2RsUkdWemFXZHVLVnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhRdWFtOXBiaWduSUNjcGZTQWtlMk52Ykc5eWMxVnpaV1I5WENJK1hISmNibHgwWEhSY2RGeDBYSFE4WkdsMklHTnNZWE56UFZ3aVltOTRaWE5mWDJKdmVDMHRhVzFuWENJK1hISmNibHgwWEhSY2RGeDBYSFJjZER4cGJXZGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUnpjbU05WENJa2UybHRZV2RsVFc5aWZWd2lYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBZV3gwUFZ3aUpIdHBiV0ZuWlVSbGMyTnlhWEIwYVc5dWZWd2lYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBiRzloWkdsdVp6MWNJbXhoZW5sY0lseHlYRzVjZEZ4MFhIUmNkRngwWEhRdlBseHlYRzVjZEZ4MFhIUmNkRngwUEM5a2FYWStYSEpjYmx4MFhIUmNkRngwWEhROFpHbDJJR05zWVhOelBWd2lZbTk0WlhOZlgySnZlQzB0YjNabGNteGhlU0JjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWtlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBZMjlzYjNKelZYTmxaQ0E5UFQwZ0p5Y2dmSHdnSjI5dVpTZGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBQeUFuWW05NFpYTmZYMkp2ZUMwdGNISnBiV0Z5ZVY5amJISW5YSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRG9nSnlkY2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFI5SUZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ1I3WTI5c2IzSnpWWE5sWkNBOVBUMGdKM1IzYnljZ1B5QW5ZbTk0WlhOZlgySnZlQzB0YzJWamIyNWtZWEo1WDJOc2NpY2dPaUFuSjMxY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FrZTJOdmJHOXljMVZ6WldRZ1BUMDlJQ2R0YjNKbEp5QS9JQ2RpYjNobGMxOWZZbTk0TFMxMFpYSjBhV0Z5ZVY5amJISW5JRG9nSnlkOVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWENKY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0ErWEhKY2JseDBYSFJjZEZ4MFhIUmNkRHhrYVhZZ1kyeGhjM005WENKaWIzaGxjMTlmWW05NExTMWpiMjUwWlc1MFhDSStYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBQR2d5UGlSN2RHbDBiR1Y5UEM5b01qNWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUThjRDVjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZENSN1pHVnpZM0pwY0hScGIyNTlYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBQQzl3UGx4eVhHNWNkRngwWEhSY2RGeDBYSFJjZER4aFhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUm9jbVZtUFZ3aUpIdHBiV0ZuWlVSbGMydDlYQ0pjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEdSaGRHRXRiR2xuYUhSaWIzZzlYQ0p0ZVdkaGJHeGxjbmxjSWx4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFpHRjBZUzEwYVhSc1pUMWNJaVI3YVcxaFoyVkVaWE5qY21sd2RHbHZibjFjSWx4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFkyeGhjM005WENKaWRHNWNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1QzQmxibHh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRHd2WVQ1Y2NseHVYSFJjZEZ4MFhIUmNkRngwUEM5a2FYWStYSEpjYmx4MFhIUmNkRngwWEhROEwyUnBkajVjY2x4dVhIUmNkRngwWEhROEwyUnBkajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZRHRjY2x4dVhIUmNkRngwZlNsY2NseHVYSFJjZEZ4MExuSmxkbVZ5YzJVb0tWeHlYRzVjZEZ4MFhIUXVhbTlwYmlnbkp5azdYSEpjYmx4eVhHNWNkRngwYkdWMElHbHpieUE5SUc1bGR5QkpjMjkwYjNCbEtIQnliMnBsWTNSelEyOXVkR0ZwYm1WeUxDQjdYSEpjYmx4MFhIUmNkQzh2SUc5d2RHbHZibk5jY2x4dVhIUmNkRngwYVhSbGJWTmxiR1ZqZEc5eU9pQW5MbWwwWlcwbkxGeHlYRzVjZEZ4MFhIUnNZWGx2ZFhSTmIyUmxPaUFuWm1sMFVtOTNjeWNzWEhKY2JseDBYSFI5S1R0Y2NseHVYSEpjYmx4MFhIUmpiMjV6ZENCbWFXeDBaWEpKZEdWdGN5QTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KeTVtYVd4MFpYSW5LVHRjY2x4dVhISmNibHgwWEhSbWFXeDBaWEpKZEdWdGN5NW1iM0pGWVdOb0tDaHBkR1Z0S1NBOVBpQjdYSEpjYmx4MFhIUmNkR2wwWlcwdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENBb1pTa2dQVDRnZTF4eVhHNWNkRngwWEhSY2RHWnBiSFJsY2tsMFpXMXpMbVp2Y2tWaFkyZ29LR1pwYkhSbGNpa2dQVDRnWm1sc2RHVnlMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9KMkZqZEdsMlpTY3BLVHRjY2x4dVhIUmNkRngwWEhSbExtTjFjbkpsYm5SVVlYSm5aWFF1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25ZV04wYVhabEp5azdYSEpjYmx4eVhHNWNkRngwWEhSY2RHeGxkQ0JtYVd4MFpYSlRaV3hsWTNSdmNpQTlJR1V1WTNWeWNtVnVkRlJoY21kbGRDNWtZWFJoYzJWMExtWnBiSFJsY2p0Y2NseHVYSEpjYmx4MFhIUmNkRngwYVhOdkxtRnljbUZ1WjJVb2UxeHlYRzVjZEZ4MFhIUmNkRngwTHk4Z2FYUmxiU0JsYkdWdFpXNTBJSEJ5YjNacFpHVmtJR0Z6SUdGeVozVnRaVzUwWEhKY2JseDBYSFJjZEZ4MFhIUm1hV3gwWlhJNklHWnBiSFJsY2xObGJHVmpkRzl5TEZ4eVhHNWNkRngwWEhSY2RIMHBPMXh5WEc1Y2RGeDBYSFI5S1R0Y2NseHVYSFJjZEgwcE8xeHlYRzVjZEgwN1hISmNibHh5WEc1Y2RHbG1JQ2h3Y205cVpXTjBjME52Ym5SaGFXNWxjaWtnZTF4eVhHNWNkRngwWjJWMFVISnZhbVZqZEhOR2NtOXRTbk52YmlncE8xeHlYRzVjZEgxY2NseHVmU2s3WEhKY2JpSXNJbVJ2WTNWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMFJQVFVOdmJuUmxiblJNYjJGa1pXUW5MQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHgwTHk4Z1ptOXliU0IyWVd4cFpHRjBhVzl1WEhKY2JseDBZMjl1YzNRZ1ptOXliU0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RqYjI1MFlXTjBMV1p2Y20wbktUdGNjbHh1WEhSamIyNXpkQ0J1WVcxbElEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyNWhiV1VuS1R0Y2NseHVYSFJqYjI1emRDQmxiV0ZwYkNBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkbGJXRnBiQ2NwTzF4eVhHNWNkR052Ym5OMElHMWxjM05oWjJVZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnbmJXVnpjMkZuWlNjcE8xeHlYRzVjZEdOdmJuTjBJR1p2Y20xQ2RHNGdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25abTl5YlMxaWRHNG5LVHRjY2x4dVhISmNibHgwYVdZZ0tHWnZjbTBwSUh0Y2NseHVYSFJjZEZ0Y2NseHVYSFJjZEZ4MEoyTnNhV05ySnl4Y2NseHVYSFJjZEZ4MEoyOXVkRzkxWTJoemRHRnlkQ2NzWEhKY2JseDBYSFJjZENkdGIzVnpaVzkyWlhJbkxGeHlYRzVjZEZ4MFhIUW5hMlY1Wkc5M2JpY3NYSEpjYmx4MFhIUmNkQ2RyWlhsd2NtVnpjeWNzWEhKY2JseDBYSFJjZENkMGIzVmphSE4wWVhKMEp5eGNjbHh1WEhSY2RGeDBKM1J2ZFdOb2JXOTJaU2NzWEhKY2JseDBYSFJkTG1admNrVmhZMmdvWEhKY2JseDBYSFJjZENobGRtVnVkQ2tnUFQ1Y2NseHVYSFJjZEZ4MFhIUmtiMk4xYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtHVjJaVzUwTENBb0tTQTlQaUI3WEhKY2JseDBYSFJjZEZ4MFhIUnBaaUFvWTJobFkydEpibkIxZEhNb0tTQTlQVDBnWm1Gc2MyVXBJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBabTl5YlVKMGJpNWthWE5oWW14bFpDQTlJSFJ5ZFdVN1hISmNibHgwWEhSY2RGeDBYSFI5SUdWc2MyVWdlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUm1iM0p0UW5SdUxtUnBjMkZpYkdWa0lEMGdabUZzYzJVN1hISmNibHgwWEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEZ4MGZTa3NYSEpjYmx4MFhIUmNkR1poYkhObFhISmNibHgwWEhRcE8xeHlYRzVjY2x4dVhIUmNkR1oxYm1OMGFXOXVJR05vWldOclNXNXdkWFJ6S0NrZ2UxeHlYRzVjZEZ4MFhIUmpiMjV6ZENCdVlXMWxWbUZzZFdVZ1BTQnVZVzFsTG5aaGJIVmxMblJ5YVcwb0tUdGNjbHh1WEhSY2RGeDBZMjl1YzNRZ1pXMWhhV3hXWVd4MVpTQTlJR1Z0WVdsc0xuWmhiSFZsTG5SeWFXMG9LVHRjY2x4dVhIUmNkRngwWTI5dWMzUWdiV1Z6YzJGblpWWmhiSFZsSUQwZ2JXVnpjMkZuWlM1MllXeDFaUzUwY21sdEtDazdYSEpjYmx4eVhHNWNkRngwWEhScFppQW9ibUZ0WlZaaGJIVmxJRDA5UFNBbkp5a2dlMXh5WEc1Y2RGeDBYSFJjZEhObGRFVnljbTl5Um05eUtHNWhiV1VzSUNkUWJHVmhjMlVnWlc1MFpYSWdlVzkxY2lCbWRXeHNJRzVoYldVbktUdGNjbHh1WEhSY2RGeDBmU0JsYkhObElIdGNjbHh1WEhSY2RGeDBYSFJ6WlhSVGRXTmpaWE56Um05eUtHNWhiV1VwTzF4eVhHNWNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJwWmlBb1pXMWhhV3hXWVd4MVpTQTlQVDBnSnljcElIdGNjbHh1WEhSY2RGeDBYSFJ6WlhSRmNuSnZja1p2Y2lobGJXRnBiQ3dnSjFCc1pXRnpaU0JsYm5SbGNpQjViM1Z5SUdWdFlXbHNJR0ZrWkhKbGMzTW5LVHRjY2x4dVhIUmNkRngwZlNCbGJITmxJR2xtSUNnaFpXMWhhV3hKYzFaaGJHbGtLR1Z0WVdsc1ZtRnNkV1VwS1NCN1hISmNibHgwWEhSY2RGeDBjMlYwUlhKeWIzSkdiM0lvWlcxaGFXd3NJQ2RGYldGcGJDQnBjeUJ1YjNRZ2RtRnNhV1FuS1R0Y2NseHVYSFJjZEZ4MGZTQmxiSE5sSUh0Y2NseHVYSFJjZEZ4MFhIUnpaWFJUZFdOalpYTnpSbTl5S0dWdFlXbHNLVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBhV1lnS0cxbGMzTmhaMlZXWVd4MVpTQTlQVDBnSnljcElIdGNjbHh1WEhSY2RGeDBYSFJ6WlhSRmNuSnZja1p2Y2lodFpYTnpZV2RsTENBblVHeGxZWE5sSUdWdWRHVnlJSGx2ZFhJZ2JXVnpjMkZuWlNjcE8xeHlYRzVjZEZ4MFhIUjlJR1ZzYzJVZ2UxeHlYRzVjZEZ4MFhIUmNkSE5sZEZOMVkyTmxjM05HYjNJb2JXVnpjMkZuWlNrN1hISmNibHgwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEdsbUlDaGNjbHh1WEhSY2RGeDBYSFJ1WVcxbFZtRnNkV1VnUFQwOUlDY25JSHg4WEhKY2JseDBYSFJjZEZ4MFpXMWhhV3hXWVd4MVpTQTlQVDBnSnljZ2ZIeGNjbHh1WEhSY2RGeDBYSFJ0WlhOellXZGxWbUZzZFdVZ1BUMDlJQ2NuSUh4OFhISmNibHgwWEhSY2RGeDBJV1Z0WVdsc1NYTldZV3hwWkNobGJXRnBiRlpoYkhWbEtWeHlYRzVjZEZ4MFhIUXBJSHRjY2x4dVhIUmNkRngwWEhSeVpYUjFjbTRnWm1Gc2MyVTdYSEpjYmx4MFhIUmNkSDBnWld4elpTQjdYSEpjYmx4MFhIUmNkRngwY21WMGRYSnVJSFJ5ZFdVN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RIMWNjbHh1WEhKY2JseDBYSFJtZFc1amRHbHZiaUJ6WlhSRmNuSnZja1p2Y2locGJuQjFkQ3dnYldWemMyRm5aU2tnZTF4eVhHNWNkRngwWEhSamIyNXpkQ0JtYjNKdElEMGdhVzV3ZFhRdWNHRnlaVzUwUld4bGJXVnVkRHRjY2x4dVhIUmNkRngwWTI5dWMzUWdjMjFoYkd3Z1BTQm1iM0p0TG5GMVpYSjVVMlZzWldOMGIzSW9KM050WVd4c0p5azdYSEpjYmx4eVhHNWNkRngwWEhSemJXRnNiQzVwYm01bGNsUmxlSFFnUFNCdFpYTnpZV2RsTzF4eVhHNWNkRngwWEhSbWIzSnRMbU5zWVhOelRtRnRaU0E5SUNkbWIzSnRYMTluY205MWNDQmxjbkp2Y2ljN1hISmNibHgwWEhSOVhISmNibHh5WEc1Y2RGeDBablZ1WTNScGIyNGdjMlYwVTNWalkyVnpjMFp2Y2locGJuQjFkQ2tnZTF4eVhHNWNkRngwWEhSamIyNXpkQ0JtYjNKdElEMGdhVzV3ZFhRdWNHRnlaVzUwUld4bGJXVnVkRHRjY2x4dVhIUmNkRngwWm05eWJTNWpiR0Z6YzA1aGJXVWdQU0FuWm05eWJWOWZaM0p2ZFhBZ2MzVmpZMlZ6Y3ljN1hISmNibHgwWEhSOVhISmNibHh5WEc1Y2RGeDBablZ1WTNScGIyNGdaVzFoYVd4SmMxWmhiR2xrS0dWdFlXbHNLU0I3WEhKY2JseDBYSFJjZEdOdmJuTjBJSEpsSUQwZ0wxNG9LRnRlUEQ0b0tWeGNXMXhjWFZ4Y1hGd3VMRHM2WEZ4elFGd2lYU3NvWEZ3dVcxNDhQaWdwWEZ4YlhGeGRYRnhjWEM0c096cGNYSE5BWENKZEt5a3FLWHdvWENJdUsxd2lLU2xBS0NoY1hGdGJNQzA1WFhzeExETjlYRnd1V3pBdE9WMTdNU3d6ZlZ4Y0xsc3dMVGxkZXpFc00zMWNYQzViTUMwNVhYc3hMRE45WFNsOEtDaGJZUzE2UVMxYVhGd3RNQzA1WFN0Y1hDNHBLMXRoTFhwQkxWcGRleklzZlNrcEpDOHVkR1Z6ZENoY2NseHVYSFJjZEZ4MFhIUmxiV0ZwYkZ4eVhHNWNkRngwWEhRcE8xeHlYRzVjY2x4dVhIUmNkRngwY21WMGRYSnVJSEpsTzF4eVhHNWNkRngwZlZ4eVhHNWNkSDFjY2x4dWZTazdYSEpjYmlJc0ltUnZZM1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0owUlBUVU52Ym5SbGJuUk1iMkZrWldRbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseDBkMmx1Wkc5M0xtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyeHZZV1FuTENBb1pTa2dQVDRnZTF4eVhHNWNkRngwWTI5dWMzUWdjSEpsYkc5aFpDQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NXdjbVZzYjJGa0p5azdYSEpjYmx4eVhHNWNkRngwY0hKbGJHOWhaQzVqYkdGemMweHBjM1F1WVdSa0tDZHdjbVZzYjJGa0xXWnBibWx6YUdWa0p5azdYSEpjYmx4MGZTazdYSEpjYmx4eVhHNWNkR052Ym5OMElHSjBibE5qY205c2JGUnZWRzl3SUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjJKMGJsTmpjbTlzYkZSdlZHOXdKeWs3WEhKY2JseHlYRzVjZEdsbUlDaGlkRzVUWTNKdmJHeFViMVJ2Y0NrZ2UxeHlYRzVjZEZ4MFluUnVVMk55YjJ4c1ZHOVViM0F1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0FvWlNrZ1BUNGdlMXh5WEc1Y2RGeDBYSFIzYVc1a2IzY3VjMk55YjJ4c1ZHOG9lMXh5WEc1Y2RGeDBYSFJjZEhSdmNEb2dNQ3hjY2x4dVhIUmNkRngwWEhSc1pXWjBPaUF3TEZ4eVhHNWNkRngwWEhSY2RHSmxhR0YyYVc5eU9pQW5jMjF2YjNSb0p5eGNjbHh1WEhSY2RGeDBmU2s3WEhKY2JseDBYSFI5S1R0Y2NseHVYSFI5WEhKY2JseHlYRzVjZEhkcGJtUnZkeTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2R6WTNKdmJHd25MQ0FvWlNrZ1BUNGdlMXh5WEc1Y2RGeDBhV1lnS0dSdlkzVnRaVzUwTG1SdlkzVnRaVzUwUld4bGJXVnVkQzV6WTNKdmJHeFViM0FnUGlBd0tTQjdYSEpjYmx4MFhIUmNkSFJ2Y0U1aGRpNWpiR0Z6YzB4cGMzUXVZV1JrS0NkdVlYWXRkRzl3TFMxemRHbGphM2tuS1R0Y2NseHVYSFJjZEZ4MGFXWWdLSFJ2Y0U1aGRreHBjM1FwSUh0Y2NseHVYSFJjZEZ4MFhIUjBiM0JPWVhaTWFYTjBMbU5zWVhOelRHbHpkQzVoWkdRb0ozQnZjblJtYjJ4cGJ5MXRaVzUxWDE5c2FYTjBMUzF6ZEdsamEza25LVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBZblJ1VTJOeWIyeHNWRzlVYjNBdWMzUjViR1V1YjNCaFkybDBlU0E5SURFN1hISmNibHgwWEhSOUlHVnNjMlVnZTF4eVhHNWNkRngwWEhSMGIzQk9ZWFl1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duYm1GMkxYUnZjQzB0YzNScFkydDVKeWs3WEhKY2JseDBYSFJjZEdsbUlDaDBiM0JPWVhaTWFYTjBLU0I3WEhKY2JseDBYSFJjZEZ4MGRHOXdUbUYyVEdsemRDNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZHdiM0owWm05c2FXOHRiV1Z1ZFY5ZmJHbHpkQzB0YzNScFkydDVKeWs3WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEZ4MFluUnVVMk55YjJ4c1ZHOVViM0F1YzNSNWJHVXViM0JoWTJsMGVTQTlJREE3WEhKY2JseDBYSFI5WEhKY2JseDBmU2s3WEhKY2JseHlYRzVjZEdOdmJuTjBJSFJ2Y0U1aGRpQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZDBiM0F0Ym1GMkp5azdYSEpjYmx4MFkyOXVjM1FnZEc5d1RtRjJUR2x6ZENBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0Nkd2IzSjBabTlzYVc4dGJXVnVkVjlmYkdsemRDY3BPMXh5WEc1Y2RHTnZibk4wSUc1aGRsVnNJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMjVoZGkxMWJDY3BPMXh5WEc1Y2RHTnZibk4wSUcxbGJuVkNkRzRnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1YldWdWRTMWlkRzRuS1R0Y2NseHVYSFJzWlhRZ2JXVnVkVTl3Wlc0Z1BTQm1ZV3h6WlR0Y2NseHVYSEpjYmx4MGJXVnVkVUowYmk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUNncElEMCtJSHRjY2x4dVhIUmNkRzVoZGxWc0xtTnNZWE56VEdsemRDNTBiMmRuYkdVb0ozTm9iM2RwYm1jbktUdGNjbHh1WEhKY2JseDBYSFJwWmlBb0lXMWxiblZQY0dWdUtTQjdYSEpjYmx4MFhIUmNkRzFsYm5WQ2RHNHVZMnhoYzNOTWFYTjBMbUZrWkNnbmIzQmxiaWNwTzF4eVhHNWNkRngwWEhSdFpXNTFUM0JsYmlBOUlIUnlkV1U3WEhKY2JseDBYSFI5SUdWc2MyVWdlMXh5WEc1Y2RGeDBYSFJ0Wlc1MVFuUnVMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9KMjl3Wlc0bktUdGNjbHh1WEhSY2RGeDBiV1Z1ZFU5d1pXNGdQU0JtWVd4elpUdGNjbHh1WEhSY2RIMWNjbHh1WEhSOUtUdGNjbHh1WEhKY2JseDBZMjl1YzNRZ2VXVmhjaUE5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RrZVc1aGJXbGpMWGxsWVhJbktUdGNjbHh1WEhKY2JseDBablZ1WTNScGIyNGdZM1Z5Y21WdWRGbGxZWElvS1NCN1hISmNibHgwWEhSNVpXRnlMbWx1Ym1WeVZHVjRkQ0E5SUc1bGR5QkVZWFJsS0NrdVoyVjBSblZzYkZsbFlYSW9LVHRjY2x4dVhIUjlYSEpjYmx4eVhHNWNkR04xY25KbGJuUlpaV0Z5S0NrN1hISmNibjBwTzF4eVhHNGlMQ0l2S2lGY2JpQXFJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzkxYldGeWQyVmlaR1YyWld4dmNHVnlMMnB4ZFdWeWVTMWpjM010YzJ0cGJHeHpMV0poY2x4dUlDb2dRWFYwYUc5eU9pQkFkVzFoY25kbFltUmxkbVZzYjNCbGNseHVJQ29nVEdsalpXNXpaV1FnZFc1a1pYSWdkR2hsSUUxSlZDQnNhV05sYm5ObFhHNGdLaTljYmlCY2JpaG1kVzVqZEdsdmJpQW9JQ1FnS1NCN1hHNGdYRzRnSUNBZ0pDNW1iaTV6YTJsc2JFSmhjbk1nUFNCbWRXNWpkR2x2YmlnZ2IzQjBhVzl1Y3lBcElIdGNiaUJjYmlBZ0lDQWdJQ0FnZG1GeUlITmxkSFJwYm1keklEMGdKQzVsZUhSbGJtUW9lMXh1WEhSY2RGeDBabkp2YlRvZ01Dd2dJRngwWEhSY2RDOHZJRzUxYldKbGNpQnpkR0Z5ZEZ4dVhIUmNkRngwZEc4NklHWmhiSE5sTEZ4MFhIUmNkQzh2SUc1MWJXSmxjaUJsYm1SY2JseDBYSFJjZEhOd1pXVmtPaUF4TURBd0xDQWdYSFJjZEM4dklHaHZkeUJzYjI1bklHbDBJSE5vYjNWc1pDQjBZV3RsSUhSdklHTnZkVzUwSUdKbGRIZGxaVzRnZEdobElIUmhjbWRsZENCdWRXMWlaWEp6WEc1Y2RGeDBYSFJwYm5SbGNuWmhiRG9nTVRBd0xGeDBJQ0F2THlCb2IzY2diMlowWlc0Z2RHaGxJR1ZzWlcxbGJuUWdjMmh2ZFd4a0lHSmxJSFZ3WkdGMFpXUmNibHgwWEhSY2RHUmxZMmx0WVd4ek9pQXdMRngwWEhRZ0lDOHZJSFJvWlNCdWRXMWlaWElnYjJZZ1pHVmphVzFoYkNCd2JHRmpaWE1nZEc4Z2MyaHZkMXh1WEhSY2RGeDBiMjVWY0dSaGRHVTZJRzUxYkd3c1hIUWdJQzh2SUdOaGJHeGlZV05ySUcxbGRHaHZaQ0JtYjNJZ1pYWmxjbmtnZEdsdFpTQjBhR1VnWld4bGJXVnVkQ0JwY3lCMWNHUmhkR1ZrTEZ4dVhIUmNkRngwYjI1RGIyMXdiR1YwWlRvZ2JuVnNiQ3hjZENBZ0x5OGdZMkZzYkdKaFkyc2diV1YwYUc5a0lHWnZjaUIzYUdWdUlIUm9aU0JsYkdWdFpXNTBJR1pwYm1semFHVnpJSFZ3WkdGMGFXNW5YRzVjZEZ4MFhIUXZLbTl1UTI5dGNHeGxkR1U2SUdaMWJtTjBhVzl1S0daeWIyMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emIyeGxMbVJsWW5WbktIUm9hWE1wTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU292WEc1Y2RGeDBYSFJqYkdGemMyVnpPbnRjYmx4MFhIUmNkRngwYzJ0cGJHeENZWEpDWVhJZ09pQW5Mbk5yYVd4c1ltRnlMV0poY2ljc1hHNWNkRngwWEhSY2RITnJhV3hzUW1GeVVHVnlZMlZ1ZENBNklDY3VjMnRwYkd3dFltRnlMWEJsY21ObGJuUW5MRnh1WEhSY2RGeDBmVnh1SUNBZ0lDQWdJQ0I5TENCdmNIUnBiMjV6SUNrN1hHNGdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG1WaFkyZ29ablZ1WTNScGIyNG9LWHRjYmx4MFhIUmNkRnh1WEhSY2RGeDBkbUZ5SUc5aWFpQTlJQ1FvZEdocGN5a3NYRzVjZEZ4MFhIUmNkSFJ2SUQwZ0tITmxkSFJwYm1kekxuUnZJQ0U5SUdaaGJITmxLU0EvSUhObGRIUnBibWR6TG5SdklEb2djR0Z5YzJWSmJuUW9iMkpxTG1GMGRISW9KMlJoZEdFdGNHVnlZMlZ1ZENjcEtUdGNibHgwWEhSY2RGeDBhV1lvZEc4Z1BpQXhNREFwZTF4dVhIUmNkRngwWEhSY2RIUnZJRDBnTVRBd08xeHVYSFJjZEZ4MFhIUjlPMXh1WEhSY2RGeDBkbUZ5SUdaeWIyMGdQU0J6WlhSMGFXNW5jeTVtY205dExGeHVYSFJjZEZ4MFhIUnNiMjl3Y3lBOUlFMWhkR2d1WTJWcGJDaHpaWFIwYVc1bmN5NXpjR1ZsWkNBdklITmxkSFJwYm1kekxtbHVkR1Z5ZG1Gc0tTeGNiaUFnSUNBZ0lDQWdJQ0FnSUZ4MGFXNWpjbVZ0Wlc1MElEMGdLSFJ2SUMwZ1puSnZiU2tnTHlCc2IyOXdjeXhjYmx4MFhIUmNkRngwYkc5dmNFTnZkVzUwSUQwZ01DeGNibHgwWEhSY2RGeDBhVzUwWlhKMllXd2dQU0J6WlhSSmJuUmxjblpoYkNoMWNHUmhkR1ZXWVd4MVpTd2djMlYwZEdsdVozTXVhVzUwWlhKMllXd3BPMXh1WEhSY2RGeDBYRzVjZEZ4MFhIUnZZbW91Wm1sdVpDaHpaWFIwYVc1bmN5NWpiR0Z6YzJWekxuTnJhV3hzUW1GeVFtRnlLUzVoYm1sdFlYUmxLSHRjYmx4MFhIUmNkRngwZDJsa2RHZzZJSEJoY25ObFNXNTBLRzlpYWk1aGRIUnlLQ2RrWVhSaExYQmxjbU5sYm5RbktTa3JKeVVuWEc1Y2RGeDBYSFI5TENCelpYUjBhVzVuY3k1emNHVmxaQ2s3WEc1Y2RGeDBYSFJjZEZ4MFhIUmNibHgwWEhSY2RHWjFibU4wYVc5dUlIVndaR0YwWlZaaGJIVmxLQ2w3WEc1Y2RGeDBYSFJjZEdaeWIyMGdLejBnYVc1amNtVnRaVzUwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUd4dmIzQkRiM1Z1ZENzck8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDUW9iMkpxS1M1bWFXNWtLSE5sZEhScGJtZHpMbU5zWVhOelpYTXVjMnRwYkd4Q1lYSlFaWEpqWlc1MEtTNTBaWGgwS0daeWIyMHVkRzlHYVhobFpDaHpaWFIwYVc1bmN5NWtaV05wYldGc2N5a3JKeVVuS1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwZVhCbGIyWW9jMlYwZEdsdVozTXViMjVWY0dSaGRHVXBJRDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzJWMGRHbHVaM011YjI1VmNHUmhkR1V1WTJGc2JDaHZZbW9zSUdaeWIyMHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHNiMjl3UTI5MWJuUWdQajBnYkc5dmNITXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyeGxZWEpKYm5SbGNuWmhiQ2hwYm5SbGNuWmhiQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnliMjBnUFNCMGJ6dGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kSGx3Wlc5bUtITmxkSFJwYm1kekxtOXVRMjl0Y0d4bGRHVXBJRDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITmxkSFJwYm1kekxtOXVRMjl0Y0d4bGRHVXVZMkZzYkNodlltb3NJR1p5YjIwcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhIUmNkRngwZlZ4dVhIUmNkRngwWEc0Z0lDQWdJQ0FnSUgwcE8xeHVJRnh1SUNBZ0lIMDdYRzRnWEc1OUtDQnFVWFZsY25rZ0tTazdYRzRpTENJa0tHUnZZM1Z0Wlc1MEtTNXlaV0ZrZVNobWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4MEx5OGdjMnRwYkd3Z1ltRnlJRUZDVDFWVUlGQkJSMFZjY2x4dVhIUWtLQ2N1YzJ0cGJHeGlZWEluS1M1emEybHNiRUpoY25Nb2UxeHlYRzVjZEZ4MEx5OGdiblZ0WW1WeUlITjBZWEowWEhKY2JseDBYSFJtY205dE9pQXdMRnh5WEc1Y2NseHVYSFJjZEM4dklHNTFiV0psY2lCbGJtUmNjbHh1WEhSY2RIUnZPaUJtWVd4elpTeGNjbHh1WEhKY2JseDBYSFF2THlCaGJtbHRZWFJwYjI0Z2MzQmxaV1JjY2x4dVhIUmNkSE53WldWa09pQXpNREF3TEZ4eVhHNWNjbHh1WEhSY2RDOHZJR2h2ZHlCdlpuUmxiaUIwYUdVZ1pXeGxiV1Z1ZENCemFHOTFiR1FnWW1VZ2RYQThZU0JvY21WbVBWd2lhSFIwY0hNNkx5OTNkM2N1YW5GMVpYSjVjMk55YVhCMExtNWxkQzkwYVcxbExXTnNiMk5yTDF3aVBtUmhkR1U4TDJFK1pGeHlYRzVjZEZ4MGFXNTBaWEoyWVd3NklERXdNQ3hjY2x4dVhISmNibHgwWEhRdkx5QjBhR1VnYm5WdFltVnlJRzltSUdSbFkybHRZV3dnY0d4aFkyVnpJSFJ2SUhOb2IzZGNjbHh1WEhSY2RHUmxZMmx0WVd4ek9pQXdMRnh5WEc1Y2NseHVYSFJjZEM4dklHTmhiR3hpWVdOcklHMWxkR2h2WkNCbWIzSWdaWFpsY25rZ2RHbHRaU0IwYUdVZ1pXeGxiV1Z1ZENCcGN5QjFjR1JoZEdWa0xGeHlYRzVjZEZ4MGIyNVZjR1JoZEdVNklHNTFiR3dzWEhKY2JseHlYRzVjZEZ4MEx5OGdZMkZzYkdKaFkyc2diV1YwYUc5a0lHWnZjaUIzYUdWdUlIUm9aU0JsYkdWdFpXNTBJR1pwYm1semFHVnpJSFZ3WkdGMGFXNW5YSEpjYmx4MFhIUnZia052YlhCc1pYUmxPaUJ1ZFd4c0xGeHlYRzVjY2x4dVhIUmNkQzh2SUVOVFV5QmpiR0Z6YzJWelhISmNibHgwWEhSamJHRnpjMlZ6T2lCN1hISmNibHgwWEhSY2RITnJhV3hzUW1GeVFtRnlPaUFuTG5OcmFXeHNZbUZ5TFdKaGNpY3NYSEpjYmx4MFhIUmNkSE5yYVd4c1FtRnlVR1Z5WTJWdWREb2dKeTV6YTJsc2JDMWlZWEl0Y0dWeVkyVnVkQ2NzWEhKY2JseDBYSFI5TEZ4eVhHNWNkSDBwTzF4eVhHNTlLVHRjY2x4dUlsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT0ifQ==
