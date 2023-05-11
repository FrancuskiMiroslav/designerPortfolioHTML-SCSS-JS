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
});


/***/ }),

/***/ "./src/js/projects.json":
/*!******************************!*\
  !*** ./src/js/projects.json ***!
  \******************************/
/*! exports provided: projects, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"projects\":[{\"id\":1,\"title\":\"Wine label („Merlot“ for Mr.&Mrs.)\",\"description\":\"Proposal design for the wine label, i made illustration special for matching the name of a wine brand \\\"Mr.&Mrs.\\\"\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Wine Label („Merlot“ for Mr.&Mrs.)\",\"imageMob\":\"./assets/images/projects/merlotLabel-min.jpg\",\"imageDesk\":\"./assets/images/projects/merlotLabel.jpg\"},{\"id\":2,\"title\":\"Wine bottle („Merlot“ for Mr.&Mrs.)\",\"description\":\"I made a desing for wine bottle. I used a self created drawing illustration just for this wine brand.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Wine bottle („Merlot“ for Mr.&Mrs.)\",\"imageMob\":\"./assets/images/projects/wine-min.jpg\",\"imageDesk\":\"./assets/images/projects/wine.jpg\"},{\"id\":3,\"title\":\"Wine bottle („Merlot“ for Mr.&Mrs.)\",\"description\":\"Business card for a veterinary clinic \\\"Božić-vet\\\" with a checkered illustration and the necessary company information.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Business card („Božić-Vet“)\",\"imageMob\":\"./assets/images/projects/vizitk1str-92x52mm-min.jpg\",\"imageDesk\":\"./assets/images/projects/vizitk1str-92x52mm.png\"},{\"id\":4,\"title\":\"Flyer for fight club \\\"Phoenix\\\"\",\"description\":\"A fight club flyer made up of illustrations, and photos with the correct training schedule and contact phone. Made in club colors-red and black.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Flyer for fight club Phoenix\",\"imageMob\":\"./assets/images/projects/phoenix-min.jpg\",\"imageDesk\":\"./assets/images/projects/phoenix.jpg\"},{\"id\":5,\"title\":\"Logo for tailoring salon („My best dress“)\",\"description\":\"A unique salon trademark, created from an illustration and a font customized for salon's name. It fits perfectly in a circular shape, gives a clear impression of a logo for those purposes.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Logo for tailoring salon („My best dress“)\",\"imageMob\":\"./assets/images/projects/krojacki-min.jpg\",\"imageDesk\":\"./assets/images/projects/krojacki.jpg\"},{\"id\":6,\"title\":\"Business card for-„My best dress“\",\"description\":\"Business card with a trademark and the necessary company information and contacts.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Business card for-„My best dress“\",\"imageMob\":\"./assets/images/projects/krojacki-bcard-min.jpg\",\"imageDesk\":\"./assets/images/projects/krojacki.jpg\"},{\"id\":7,\"title\":\"Book cover design („Seobe“)\",\"description\":\"Design and preparation for printing of M.Crnjanski's book \\\"Seobe\\\". Using the original photo \\\"seoba\\\".\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Book cover design („Seobe“)\",\"imageMob\":\"./assets/images/projects/KNJIGA-SEOBE-KRCKA-min.jpg\",\"imageDesk\":\"./assets/images/projects/KNJIGA-SEOBE-KRCKA.jpg\"},{\"id\":8,\"title\":\"Bakery label („Ceralni dvopek“)\",\"description\":\"Transparent label design for a double decker.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Bakery label („Ceralni dvopek“)\",\"imageMob\":\"./assets/images/projects/ETIKETA-min.jpg\",\"imageDesk\":\"./assets/images/projects/ETIKETA.png\"},{\"id\":9,\"title\":\"Wine label („Ždrepčeva krv“)\",\"description\":\"Proposal design for the wine label („Ždrepčeva krv“) using one color.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Wine label („Ždrepčeva krv“)\",\"imageMob\":\"./assets/images/projects/17500035_1508616912516594_1627627067_o-min.jpg\",\"imageDesk\":\"./assets/images/projects/17500035_1508616912516594_1627627067_o.jpg\"},{\"id\":10,\"title\":\"Bussiness card for University\",\"description\":\"Business card of the university with the logo, contacts and data.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"more\",\"imageDescription\":\"Bussiness card for University\",\"imageMob\":\"./assets/images/projects/university-card-min.jpg\",\"imageDesk\":\"./assets/images/projects/university-card.png\"},{\"id\":11,\"title\":\"University logo\",\"description\":\"Trademark redesign for „Viskoka tehnička škola-strukovnih studija“. The name is inside a circular form that emerged by writing a pen composed of 4 parts that make up 4 sections of the faculty.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"more\",\"imageDescription\":\"University logo\",\"imageMob\":\"./assets/images/projects/university-logo-vts-min.jpg\",\"imageDesk\":\"./assets/images/projects/university-logo-vts.jpg\"},{\"id\":12,\"title\":\"Lunch - ideas\",\"description\":\"Ideas for creating a logo „Lunch“, in a few stage.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Lunch - ideas\",\"imageMob\":\"./assets/images/projects/lunch-min.jpg\",\"imageDesk\":\"./assets/images/projects/lunch.jpg\"},{\"id\":13,\"title\":\"Label for „Pereca“\",\"description\":\"Two ideas for the design of pretzel label for the bakery \\\"Lakić\\\". Using illustrations, similar colors and texts.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"more\",\"imageDescription\":\"Label for „Pereca“\",\"imageMob\":\"./assets/images/projects/pereca-min.jpg\",\"imageDesk\":\"./assets/images/projects/pereca.png\"},{\"id\":14,\"title\":\"Roll up banner“\",\"description\":\"Design for roll up banner for hiking. Creating story from text, illustrations and default photos. With the main purpose of reading information and instructions.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Roll up banner\",\"imageMob\":\"./assets/images/projects/planinskoTrcanje-min.jpg\",\"imageDesk\":\"./assets/images/projects/planinskoTrcanje.jpg\"},{\"id\":15,\"title\":\"Photoshop works\",\"description\":\"Creating a virtual world through the big eye watching us, the work used to make the posters.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"more\",\"imageDescription\":\"Photoshop works\",\"imageMob\":\"./assets/images/projects/photoshop1-min.jpg\",\"imageDesk\":\"./assets/images/projects/photoshop1.jpg\"},{\"id\":16,\"title\":\"Photoshop works\",\"description\":\"...\",\"design\":[\"graphic design\"],\"colorsUsed\":\"more\",\"imageDescription\":\"Photoshop works\",\"imageMob\":\"./assets/images/projects/photoshop2-min.jpg\",\"imageDesk\":\"./assets/images/projects/photoshop2.jpg\"},{\"id\":17,\"title\":\"Poster for faculty presentations („Putokazi“)\",\"description\":\"A poster created only with typography, using one color (red). It gives a inresting and storng message that easily communicates with the audience.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Poster for faculty presentations („Putokazi“)\",\"imageMob\":\"./assets/images/projects/1-PUTOKAZI-poster-min.jpg\",\"imageDesk\":\"./assets/images/projects/1-PUTOKAZI-poster.jpg\"},{\"id\":18,\"title\":\"Illustrations (for website)\",\"description\":\"Creating special illustrations as an icon for a farm website.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Illustrations (for website)\",\"imageMob\":\"./assets/images/projects/4-illuctracije-za-sajt-min.jpg\",\"imageDesk\":\"./assets/images/projects/4-illuctracije-za-sajt.png\"},{\"id\":19,\"title\":\"Poster for New Year parrty\",\"description\":\"Poster for the New Year&#39;s Party with information. My goal was to use only colors of caffe bar.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Poster for New Year parrty\",\"imageMob\":\"./assets/images/projects/7-PosterforNewYear-min.jpg\",\"imageDesk\":\"./assets/images/projects/7-PosterforNewYear.jpg\"},{\"id\":20,\"title\":\"Book cover design („Zločin i kazna“)\",\"description\":\"Preparation for printing and design for the book cover crime and punishment by F. M. Dostojevski.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Book cover design („Zločin i kazna“)\",\"imageMob\":\"./assets/images/projects/9-Bookscoverdesign-min.jpg\",\"imageDesk\":\"./assets/images/projects/9-Bookscoverdesign.png\"},{\"id\":21,\"title\":\"T-shirt design (black)\",\"description\":\"Two t-shirt designs using my brother&#39;s original drawings. That I retouched and transfered to the negative in the photoshop.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"T-shirt design (black)\",\"imageMob\":\"./assets/images/projects/10-T-shirtdesig,bleck-min.jpg\",\"imageDesk\":\"./assets/images/projects/10-T-shirtdesig,bleck.jpg\"},{\"id\":22,\"title\":\"T-shirt design (white)\",\"description\":\"A white T-shirt with my brother&#39;s original drawing, which was processed using a filter in a photoshop to fit the model of the T-shirt.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"T-shirt design (white)\",\"imageMob\":\"./assets/images/projects/11-T-shirtdesingwithe-min.jpg\",\"imageDesk\":\"./assets/images/projects/11-T-shirtdesingwithe.jpg\"},{\"id\":23,\"title\":\"Cycling federation national team jersey\",\"description\":\"T-shirt and shorts designed for Serbia&#39;s cycling team, using several illustrations and 3 colors that are on the flag.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Cycling federation national team jersey\",\"imageMob\":\"./assets/images/projects/12-cyclingfederationnationalteamjersey-min.jpg\",\"imageDesk\":\"./assets/images/projects/12-cyclingfederationnationalteamjersey.jpg\"},{\"id\":24,\"title\":\"Sweatshirt for fight club („Phoenix“)\",\"description\":\"Sweatshirt design for fight club &quot;Phoenix&quot;- trademark redesign, with a few changes such as: font correction, and creation of a new drawing, using colors that match the club&#39;s red and yellow.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Sweatshirt for fight club („Phoenix“)\",\"imageMob\":\"./assets/images/projects/13-Sweatshirtforfightclub-min.jpg\",\"imageDesk\":\"./assets/images/projects/13-Sweatshirtforfightclub.jpg\"},{\"id\":25,\"title\":\"T-shirt for fight club („Phoenix“)\",\"description\":\"Designing shirts for fight club.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"T-shirt for fight club („Phoenix“)\",\"imageMob\":\"./assets/images/projects/14-T-shirtforfightclub-min.jpg\",\"imageDesk\":\"./assets/images/projects/14-T-shirtforfightclub.png\"},{\"id\":26,\"title\":\"Photoshop work\",\"description\":\"Black and white photography through 3 processes in photoshop.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Photoshop work\",\"imageMob\":\"./assets/images/projects/16-Photoshopwork-min.jpg\",\"imageDesk\":\"./assets/images/projects/16-Photoshopwork.jpg\"},{\"id\":27,\"title\":\"Logo and business card for bakery \\\"Slatko cartstvo\\\"\",\"description\":\"Black and white photography through 3 processes in photoshop.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"\",\"imageDescription\":\"Logo and business card for bakery \\\"Slatko cartstvo\\\"\",\"imageMob\":\"./assets/images/projects/SlatkoCarstvo-min.jpg\",\"imageDesk\":\"./assets/images/projects/SlatkoCarstvo.jpg\"},{\"id\":28,\"title\":\"Logo and business card for the agency \\\"Digitals\\\"\",\"description\":\"The logo is designed: So that the initials of the owner (double \\\"C\\\") are facing each other, they create a computer screen that is a trademark of the company. I made a business card of the same colors, with information about the company.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Logo and business card for the agency \\\"Digitals\\\"\",\"imageMob\":\"./assets/images/projects/Digitals-min.jpg\",\"imageDesk\":\"./assets/images/projects/Digitals.jpg\"},{\"id\":29,\"title\":\"Logo for organic food \\\"Power of the purple\\\"\",\"description\":\"Logo made for organic food for the client on \\\"designhell\\\" site. Created according to a given theme and given colors.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"\",\"imageDescription\":\"Logo for organic food \\\"Power of the purple\\\"\",\"imageMob\":\"./assets/images/projects/Powerofthepurple-min.jpg\",\"imageDesk\":\"./assets/images/projects/Powerofthepurple.jpg\"},{\"id\":30,\"title\":\"Flayer for restaurant \\\"Lunch\\\"\",\"description\":\"A5 flyer with a restaurant menu and important information.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"\",\"imageDescription\":\"Flayer for restaurant \\\"Lunch\\\"\",\"imageMob\":\"./assets/images/projects/restaurantflyer-min.jpg\",\"imageDesk\":\"./assets/images/projects/restaurantflyer.jpg\"},{\"id\":31,\"title\":\"Photoshop Manipulation\",\"description\":\"Photoshop fantasy manipulation for 'Čarda' restaurant.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"\",\"imageDescription\":\"Photoshop Manipulation\",\"imageMob\":\"./assets/images/projects/PhotoshopManipulation-min.jpg\",\"imageDesk\":\"./assets/images/projects/PhotoshopManipulation.jpg\"},{\"id\":32,\"title\":\"Photography / drawing / manipulation\",\"description\":\"Example of showing a person through 3 different forms: Photography, manipulating photography, creating drawings by looking at photography.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"\",\"imageDescription\":\"Photography / drawing / manipulation\",\"imageMob\":\"./assets/images/projects/Paja-min.jpg\",\"imageDesk\":\"./assets/images/projects/Paja.jpg\"},{\"id\":33,\"title\":\"Coat of arms of a football club\",\"description\":\"Coat of arms of a football club \\\"Železničar\\\"\",\"design\":[\"graphic design\"],\"colorsUsed\":\"\",\"imageDescription\":\"Coat of arms of a football club\",\"imageMob\":\"./assets/images/projects/grb-min.jpg\",\"imageDesk\":\"./assets/images/projects/grb.jpg\"},{\"id\":34,\"title\":\"Window sticker for \\\"Lunch\\\" restaurant\",\"description\":\"Creating interesting content for the sticker that fills the window of the restaurant, which shows the invitation to lunch.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"\",\"imageDescription\":\"Window sticker for \\\"Lunch\\\" restaurant\",\"imageMob\":\"./assets/images/projects/stickerlunch-min.jpg\",\"imageDesk\":\"./assets/images/projects/stickerlunch.jpg\"},{\"id\":35,\"title\":\"Flayer for fast food restaurant \\\"Buja planet\\\"\",\"description\":\"Flayer for fast food restaurant, with a menu and supplemented with illustrations for a stronger impression.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"\",\"imageDescription\":\"Flayer for fast food restaurant \\\"Buja planet\\\"\",\"imageMob\":\"./assets/images/projects/fastfoodflayer-min.jpg\",\"imageDesk\":\"./assets/images/projects/fastfoodflayer.jpg\"},{\"id\":36,\"title\":\"Logo designed for food delivery („Colorado“)\",\"description\":\"Logo for food delivery \\\"Colorado\\\"\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Logo („Colorado“)\",\"imageMob\":\"./assets/images/projects/colorado-min.jpg\",\"imageDesk\":\"./assets/images/projects/colorado.jpg\"},{\"id\":37,\"title\":\"Logo („Motheralnd“)\",\"description\":\"Logo for tanning salon. The desing of main figure of women is vectorized.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Logo („Motheralnd“)\",\"imageMob\":\"./assets/images/projects/motherland-min.jpg\",\"imageDesk\":\"./assets/images/projects/motherland.jpg\"},{\"id\":38,\"title\":\"Instagram content („Motheralnd tanning“)\",\"description\":\"“Content created for the instagram profile \\\"Motherland\\\" salon.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Instagram contet („Motherland“)\",\"imageMob\":\"./assets/images/projects/motheralndInstagram-min.jpg\",\"imageDesk\":\"./assets/images/projects/motheralndInstagram.jpg\"},{\"id\":39,\"title\":\"Illustration \\\"Drunk fruit\\\"\",\"description\":\"Illustration created in Photoshop for the brandy label.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Illustration for brandy\",\"imageMob\":\"./assets/images/projects/pijaneKruske-min.jpg\",\"imageDesk\":\"./assets/images/projects/pijaneKruske.jpg\"},{\"id\":40,\"title\":\"Brandy label („Durković“)\",\"description\":\"Labels of brandy for different types of fruit.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Brandy label („Durković“)\",\"imageMob\":\"./assets/images/projects/rakija-min.jpg\",\"imageDesk\":\"./assets/images/projects/rakija.jpg\"},{\"id\":41,\"title\":\"Pizzeria logo („Manila“)\",\"description\":\"Pizzeria logo made in the commissioned colors.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Pizzeria logo („Manila“)\",\"imageMob\":\"./assets/images/projects/manila-min.jpg\",\"imageDesk\":\"./assets/images/projects/manila.jpg\"},{\"id\":42,\"title\":\"Glass stickers („Manila“)\",\"description\":\"The illustrations of the redesign, that is displayed on front window were inspired by Pop art style .\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Glass stickers („Manila“)\",\"imageMob\":\"./assets/images/projects/beforeAfter-min.jpg\",\"imageDesk\":\"./assets/images/projects/beforeAfter.jpg\"},{\"id\":43,\"title\":\"Logo redesign („Molero“)\",\"description\":\"Redesign logo for painting works.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Logo redesign („Molero“)\",\"imageMob\":\"./assets/images/projects/molero-min.jpg\",\"imageDesk\":\"./assets/images/projects/molero.jpg\"},{\"id\":44,\"title\":\"Logo for moldings („Bovira“)\",\"description\":\"Logo created for a company that manufactures moldings and decorative elements.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Logo for moldings („Bovira“)\",\"imageMob\":\"./assets/images/projects/boviraLogo-min.jpg\",\"imageDesk\":\"./assets/images/projects/boviraLogo.jpg\"},{\"id\":45,\"title\":\"Catalog cover („Bovira“)\",\"description\":\"I did desing in photoshop and Illustator, and i also include all moldings on 3D Maz Studio.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"more\",\"imageDescription\":\"Catalog cover („Bovira“)\",\"imageMob\":\"./assets/images/projects/katalog-min.jpg\",\"imageDesk\":\"./assets/images/projects/katalog.jpg\"},{\"id\":46,\"title\":\"Page of catalog („Bovira“)\",\"description\":\"This the example the one of the pages from the catalog.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"more\",\"imageDescription\":\"Page of catalog („Bovira“)\",\"imageMob\":\"./assets/images/projects/str1-min.jpg\",\"imageDesk\":\"./assets/images/projects/str1.jpg\"},{\"id\":47,\"title\":\"Digital Portrait in Photoshop\",\"description\":\"Digital portrait created with brushes in photoshop.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Digital Portrait in Photoshop\",\"imageMob\":\"./assets/images/projects/digital-min.jpg\",\"imageDesk\":\"./assets/images/projects/digital.jpg\"},{\"id\":48,\"title\":\"Animal shelter logo („Good Hope“)\",\"description\":\"Logo created for the animal shelter, using only limited color palette from site.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"one\",\"imageDescription\":\"Animal shelter logo („Good Hope“)\",\"imageMob\":\"./assets/images/projects/azil-min.jpg\",\"imageDesk\":\"./assets/images/projects/azil.jpg\"},{\"id\":47,\"title\":\"Digital Portrait in Photoshop\",\"description\":\"Digital portrait created with brushes in photoshop.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Digital Portrait in Photoshop\",\"imageMob\":\"./assets/images/projects/digital-min.jpg\",\"imageDesk\":\"./assets/images/projects/digital.jpg\"},{\"id\":48,\"title\":\"Digitas Logo REDESIGN\",\"description\":\"Creatine agency trademark redesign.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Logo Redesing\",\"imageMob\":\"./assets/images/projects/digitals-redesing-min.jpg\",\"imageDesk\":\"./assets/images/projects/digitals-redesing.jpg\"},{\"id\":49,\"title\":\"Branding\",\"description\":\"Farm vehicle branding.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Branding\",\"imageMob\":\"./assets/images/projects/bredndiranje-vozila-min.jpg\",\"imageDesk\":\"./assets/images/projects/bredndiranje-vozila.jpg\"},{\"id\":50,\"title\":\"Advertising solution\",\"description\":\"Advertising solution in the magazine 'Lepota i Zdravlje'.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Advertising solution\",\"imageMob\":\"./assets/images/projects/Oglasno-resenje-Lepota-i-zdravlje-min.jpg\",\"imageDesk\":\"./assets/images/projects/Oglasno-resenje-Lepota-i-zdravlje.jpg\"},{\"id\":51,\"title\":\"Brandy label\",\"description\":\"Label for brandy for farming 'Kolarski'.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Brandy label\",\"imageMob\":\"./assets/images/projects/rakija-etiketa-min.jpg\",\"imageDesk\":\"./assets/images/projects/rakija-etiketa.jpg\"},{\"id\":52,\"title\":\"Shop branding\",\"description\":\"Shop branding 'Džidžabidžarnica'.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Shop branding\",\"imageMob\":\"./assets/images/projects/dzidzabidzarnica-min.jpg\",\"imageDesk\":\"./assets/images/projects/dzidzabidzarnica.jpg\"},{\"id\":53,\"title\":\"Shop branding\",\"description\":\"Shop branding 'motherland-branding'.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"Shop branding\",\"imageMob\":\"./assets/images/projects/motherland-branding-min.jpg\",\"imageDesk\":\"./assets/images/projects/motherland-branding.jpg\"},{\"id\":54,\"title\":\"Posts for social media\",\"description\":\"Creation of posts for social networks, construction companies, including creative posts, animations, video.\",\"design\":[\"graphic design\"],\"colorsUsed\":\"two\",\"imageDescription\":\"social media posts\",\"imageMob\":\"./assets/images/projects/SG-social-media-min.jpg\",\"imageDesk\":\"./assets/images/projects/SG-social-media.jpg\"},{\"id\":55,\"title\":\"Site page design\",\"description\":\"Site page design 'Les appuis le ring'.\",\"design\":[\"UI/UX\"],\"colorsUsed\":\"two\",\"imageDescription\":\"site desing\",\"imageMob\":\"./assets/images/projects/les-appuis-le-ring-min.jpg\",\"imageDesk\":\"./assets/images/projects/les-appuis-le-ring.jpg\"},{\"id\":56,\"title\":\"Site page design\",\"description\":\"Site page design 'Concord'.\",\"design\":[\"UI/UX\"],\"colorsUsed\":\"two\",\"imageDescription\":\"site desing\",\"imageMob\":\"./assets/images/projects/concordsite-min.jpg\",\"imageDesk\":\"./assets/images/projects/concordsite.jpg\"},{\"id\":57,\"title\":\"Site page design\",\"description\":\"Site page design 'Bistrica'.\",\"design\":[\"UI/UX\"],\"colorsUsed\":\"two\",\"imageDescription\":\"site desing\",\"imageMob\":\"./assets/images/projects/bistricasite-min.jpg\",\"imageDesk\":\"./assets/images/projects/bistricasite.jpg\"},{\"id\":58,\"title\":\"Site page design\",\"description\":\"Site page design 'Bistrica'.\",\"design\":[\"UI/UX\"],\"colorsUsed\":\"two\",\"imageDescription\":\"site desing\",\"imageMob\":\"./assets/images/projects/bistricasite2.jpg\",\"imageDesk\":\"./assets/images/projects/bistricasite2.jpg\"}]}");

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZldGNoSlNPTmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zvcm1WYWxpZGFpdG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9za2lsbC5iYXJzLmpxdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2tpbGxCYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQSwyQkFBMkIsbUJBQU8sQ0FBQywrQ0FBaUI7O0FBRXBEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQSxvQkFBb0IsR0FBRyxXQUFXO0FBQ2xDO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkIsY0FBYyxpQkFBaUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFc7QUFDQSxzQkFBc0I7QUFDdEIsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsZ0JBQWdCLFVBQVU7QUFDMUI7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0osR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3ZGRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyx5QkFBeUIsNkJBQTZCLElBQUksUUFBUSxJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUksZ0NBQWdDLEdBQUc7QUFDbEs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN2RkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTOztBQUVUOztBQUVBLENBQUM7Ozs7Ozs7Ozs7OztBQ25FRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRixDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMtY29udGFpbmVyJyk7XHJcblx0Y29uc3QgbG9jYWxQcm9qZWN0c0pTT04gPSByZXF1aXJlKCcuL3Byb2plY3RzLmpzb24nKTtcclxuXHJcblx0Y29uc3QgZ2V0UHJvamVjdHNGcm9tSnNvbiA9IGFzeW5jICgpID0+IHtcclxuXHRcdGNvbnN0IHByb2plY3RzID0gYXdhaXQgbG9jYWxQcm9qZWN0c0pTT04ucHJvamVjdHM7XHJcblxyXG5cdFx0cHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gcHJvamVjdHNcclxuXHRcdFx0Lm1hcCgocHJvamVjdCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHtcclxuXHRcdFx0XHRcdGlkLFxyXG5cdFx0XHRcdFx0dGl0bGUsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbixcclxuXHRcdFx0XHRcdGRlc2lnbixcclxuXHRcdFx0XHRcdGNvbG9yc1VzZWQsXHJcblx0XHRcdFx0XHRpbWFnZURlc2NyaXB0aW9uLFxyXG5cdFx0XHRcdFx0aW1hZ2VNb2IsXHJcblx0XHRcdFx0XHRpbWFnZURlc2ssXHJcblx0XHRcdFx0fSA9IHByb2plY3Q7XHJcblxyXG5cdFx0XHRcdHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94ZXNfX2JveCBpdGVtICR7ZGVzaWduXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5tYXAoKHNpbmxnZURlc2lnbikgPT4gc2lubGdlRGVzaWduKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuam9pbignICcpfSAke2NvbG9yc1VzZWR9XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYm94ZXNfX2JveC0taW1nXCI+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRzcmM9XCIke2ltYWdlTW9ifVwiXHJcblx0XHRcdFx0XHRcdFx0YWx0PVwiJHtpbWFnZURlc2NyaXB0aW9ufVwiXHJcblx0XHRcdFx0XHRcdFx0bG9hZGluZz1cImxhenlcIlxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYm94ZXNfX2JveC0tb3ZlcmxheSBcclxuICAgICAgICAgICAgICAgICAgICAke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3JzVXNlZCA9PT0gJycgfHwgJ29uZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyAnYm94ZXNfX2JveC0tcHJpbWFyeV9jbHInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IFxyXG4gICAgICAgICAgICAgICAgICAgICR7Y29sb3JzVXNlZCA9PT0gJ3R3bycgPyAnYm94ZXNfX2JveC0tc2Vjb25kYXJ5X2NscicgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAke2NvbG9yc1VzZWQgPT09ICdtb3JlJyA/ICdib3hlc19fYm94LS10ZXJ0aWFyeV9jbHInIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJib3hlc19fYm94LS1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0PGgyPiR7dGl0bGV9PC9oMj5cclxuXHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdCR7ZGVzY3JpcHRpb259XHJcblx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRocmVmPVwiJHtpbWFnZURlc2t9XCJcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtbGlnaHRib3g9XCJteWdhbGxlcnlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS10aXRsZT1cIiR7aW1hZ2VEZXNjcmlwdGlvbn1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJidG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3BlblxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgYDtcclxuXHRcdFx0fSlcclxuXHRcdFx0LnJldmVyc2UoKVxyXG5cdFx0XHQuam9pbignJyk7XHJcblxyXG5cdFx0bGV0IGlzbyA9IG5ldyBJc290b3BlKHByb2plY3RzQ29udGFpbmVyLCB7XHJcblx0XHRcdC8vIG9wdGlvbnNcclxuXHRcdFx0aXRlbVNlbGVjdG9yOiAnLml0ZW0nLFxyXG5cdFx0XHRsYXlvdXRNb2RlOiAnZml0Um93cycsXHJcblx0XHR9KTtcclxuXHJcblx0XHRjb25zdCBmaWx0ZXJJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXInKTtcclxuXHJcblx0XHRmaWx0ZXJJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblx0XHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdGZpbHRlckl0ZW1zLmZvckVhY2goKGZpbHRlcikgPT4gZmlsdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuXHRcdFx0XHRlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdGxldCBmaWx0ZXJTZWxlY3RvciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZpbHRlcjtcclxuXHJcblx0XHRcdFx0aXNvLmFycmFuZ2Uoe1xyXG5cdFx0XHRcdFx0Ly8gaXRlbSBlbGVtZW50IHByb3ZpZGVkIGFzIGFyZ3VtZW50XHJcblx0XHRcdFx0XHRmaWx0ZXI6IGZpbHRlclNlbGVjdG9yLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGlmIChwcm9qZWN0c0NvbnRhaW5lcikge1xyXG5cdFx0Z2V0UHJvamVjdHNGcm9tSnNvbigpO1xyXG5cdH1cclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0Ly8gZm9ybSB2YWxpZGF0aW9uXHJcblx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWZvcm0nKTtcclxuXHRjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKTtcclxuXHRjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpO1xyXG5cdGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZScpO1xyXG5cdGNvbnN0IGZvcm1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1idG4nKTtcclxuXHJcblx0aWYgKGZvcm0pIHtcclxuXHRcdFtcclxuXHRcdFx0J2NsaWNrJyxcclxuXHRcdFx0J29udG91Y2hzdGFydCcsXHJcblx0XHRcdCdtb3VzZW92ZXInLFxyXG5cdFx0XHQna2V5ZG93bicsXHJcblx0XHRcdCdrZXlwcmVzcycsXHJcblx0XHRcdCd0b3VjaHN0YXJ0JyxcclxuXHRcdFx0J3RvdWNobW92ZScsXHJcblx0XHRdLmZvckVhY2goXHJcblx0XHRcdChldmVudCkgPT5cclxuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoY2hlY2tJbnB1dHMoKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0Zm9ybUJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRmb3JtQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGNoZWNrSW5wdXRzKCkge1xyXG5cdFx0XHRjb25zdCBuYW1lVmFsdWUgPSBuYW1lLnZhbHVlLnRyaW0oKTtcclxuXHRcdFx0Y29uc3QgZW1haWxWYWx1ZSA9IGVtYWlsLnZhbHVlLnRyaW0oKTtcclxuXHRcdFx0Y29uc3QgbWVzc2FnZVZhbHVlID0gbWVzc2FnZS52YWx1ZS50cmltKCk7XHJcblxyXG5cdFx0XHRpZiAobmFtZVZhbHVlID09PSAnJykge1xyXG5cdFx0XHRcdHNldEVycm9yRm9yKG5hbWUsICdQbGVhc2UgZW50ZXIgeW91ciBmdWxsIG5hbWUnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRTdWNjZXNzRm9yKG5hbWUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoZW1haWxWYWx1ZSA9PT0gJycpIHtcclxuXHRcdFx0XHRzZXRFcnJvckZvcihlbWFpbCwgJ1BsZWFzZSBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MnKTtcclxuXHRcdFx0fSBlbHNlIGlmICghZW1haWxJc1ZhbGlkKGVtYWlsVmFsdWUpKSB7XHJcblx0XHRcdFx0c2V0RXJyb3JGb3IoZW1haWwsICdFbWFpbCBpcyBub3QgdmFsaWQnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRTdWNjZXNzRm9yKGVtYWlsKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG1lc3NhZ2VWYWx1ZSA9PT0gJycpIHtcclxuXHRcdFx0XHRzZXRFcnJvckZvcihtZXNzYWdlLCAnUGxlYXNlIGVudGVyIHlvdXIgbWVzc2FnZScpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFN1Y2Nlc3NGb3IobWVzc2FnZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRuYW1lVmFsdWUgPT09ICcnIHx8XHJcblx0XHRcdFx0ZW1haWxWYWx1ZSA9PT0gJycgfHxcclxuXHRcdFx0XHRtZXNzYWdlVmFsdWUgPT09ICcnIHx8XHJcblx0XHRcdFx0IWVtYWlsSXNWYWxpZChlbWFpbFZhbHVlKVxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzZXRFcnJvckZvcihpbnB1dCwgbWVzc2FnZSkge1xyXG5cdFx0XHRjb25zdCBmb3JtID0gaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHRcdFx0Y29uc3Qgc21hbGwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ3NtYWxsJyk7XHJcblxyXG5cdFx0XHRzbWFsbC5pbm5lclRleHQgPSBtZXNzYWdlO1xyXG5cdFx0XHRmb3JtLmNsYXNzTmFtZSA9ICdmb3JtX19ncm91cCBlcnJvcic7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2V0U3VjY2Vzc0ZvcihpbnB1dCkge1xyXG5cdFx0XHRjb25zdCBmb3JtID0gaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHRcdFx0Zm9ybS5jbGFzc05hbWUgPSAnZm9ybV9fZ3JvdXAgc3VjY2Vzcyc7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZW1haWxJc1ZhbGlkKGVtYWlsKSB7XHJcblx0XHRcdGNvbnN0IHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8udGVzdChcclxuXHRcdFx0XHRlbWFpbFxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHJlO1xyXG5cdFx0fVxyXG5cdH1cclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZSkgPT4ge1xyXG5cdFx0Y29uc3QgcHJlbG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkJyk7XHJcblxyXG5cdFx0cHJlbG9hZC5jbGFzc0xpc3QuYWRkKCdwcmVsb2FkLWZpbmlzaGVkJyk7XHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IGJ0blNjcm9sbFRvVG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0blNjcm9sbFRvVG9wJyk7XHJcblxyXG5cdGlmIChidG5TY3JvbGxUb1RvcCkge1xyXG5cdFx0YnRuU2Nyb2xsVG9Ub3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oe1xyXG5cdFx0XHRcdHRvcDogMCxcclxuXHRcdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHRcdGJlaGF2aW9yOiAnc21vb3RoJyxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZSkgPT4ge1xyXG5cdFx0aWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiAwKSB7XHJcblx0XHRcdHRvcE5hdi5jbGFzc0xpc3QuYWRkKCduYXYtdG9wLS1zdGlja3knKTtcclxuXHRcdFx0aWYgKHRvcE5hdkxpc3QpIHtcclxuXHRcdFx0XHR0b3BOYXZMaXN0LmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpby1tZW51X19saXN0LS1zdGlja3knKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YnRuU2Nyb2xsVG9Ub3Auc3R5bGUub3BhY2l0eSA9IDE7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0b3BOYXYuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LXRvcC0tc3RpY2t5Jyk7XHJcblx0XHRcdGlmICh0b3BOYXZMaXN0KSB7XHJcblx0XHRcdFx0dG9wTmF2TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdwb3J0Zm9saW8tbWVudV9fbGlzdC0tc3RpY2t5Jyk7XHJcblx0XHRcdH1cclxuXHRcdFx0YnRuU2Nyb2xsVG9Ub3Auc3R5bGUub3BhY2l0eSA9IDA7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHRvcE5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3AtbmF2Jyk7XHJcblx0Y29uc3QgdG9wTmF2TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3J0Zm9saW8tbWVudV9fbGlzdCcpO1xyXG5cdGNvbnN0IG5hdlVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi11bCcpO1xyXG5cdGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1idG4nKTtcclxuXHRsZXQgbWVudU9wZW4gPSBmYWxzZTtcclxuXHJcblx0bWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdG5hdlVsLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3dpbmcnKTtcclxuXHJcblx0XHRpZiAoIW1lbnVPcGVuKSB7XHJcblx0XHRcdG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG5cdFx0XHRtZW51T3BlbiA9IHRydWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuXHRcdFx0bWVudU9wZW4gPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9KTtcclxufSk7XHJcbiIsIi8qIVxuICogaHR0cHM6Ly9naXRodWIuY29tL3VtYXJ3ZWJkZXZlbG9wZXIvanF1ZXJ5LWNzcy1za2lsbHMtYmFyXG4gKiBBdXRob3I6IEB1bWFyd2ViZGV2ZWxvcGVyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuIFxuKGZ1bmN0aW9uICggJCApIHtcbiBcbiAgICAkLmZuLnNraWxsQmFycyA9IGZ1bmN0aW9uKCBvcHRpb25zICkge1xuIFxuICAgICAgICB2YXIgc2V0dGluZ3MgPSAkLmV4dGVuZCh7XG5cdFx0XHRmcm9tOiAwLCAgXHRcdFx0Ly8gbnVtYmVyIHN0YXJ0XG5cdFx0XHR0bzogZmFsc2UsXHRcdFx0Ly8gbnVtYmVyIGVuZFxuXHRcdFx0c3BlZWQ6IDEwMDAsICBcdFx0Ly8gaG93IGxvbmcgaXQgc2hvdWxkIHRha2UgdG8gY291bnQgYmV0d2VlbiB0aGUgdGFyZ2V0IG51bWJlcnNcblx0XHRcdGludGVydmFsOiAxMDAsXHQgIC8vIGhvdyBvZnRlbiB0aGUgZWxlbWVudCBzaG91bGQgYmUgdXBkYXRlZFxuXHRcdFx0ZGVjaW1hbHM6IDAsXHRcdCAgLy8gdGhlIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyB0byBzaG93XG5cdFx0XHRvblVwZGF0ZTogbnVsbCxcdCAgLy8gY2FsbGJhY2sgbWV0aG9kIGZvciBldmVyeSB0aW1lIHRoZSBlbGVtZW50IGlzIHVwZGF0ZWQsXG5cdFx0XHRvbkNvbXBsZXRlOiBudWxsLFx0ICAvLyBjYWxsYmFjayBtZXRob2QgZm9yIHdoZW4gdGhlIGVsZW1lbnQgZmluaXNoZXMgdXBkYXRpbmdcblx0XHRcdC8qb25Db21wbGV0ZTogZnVuY3Rpb24oZnJvbSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcodGhpcyk7XG4gICAgICAgICAgICB9Ki9cblx0XHRcdGNsYXNzZXM6e1xuXHRcdFx0XHRza2lsbEJhckJhciA6ICcuc2tpbGxiYXItYmFyJyxcblx0XHRcdFx0c2tpbGxCYXJQZXJjZW50IDogJy5za2lsbC1iYXItcGVyY2VudCcsXG5cdFx0XHR9XG4gICAgICAgIH0sIG9wdGlvbnMgKTtcbiBcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1xuXHRcdFx0XG5cdFx0XHR2YXIgb2JqID0gJCh0aGlzKSxcblx0XHRcdFx0dG8gPSAoc2V0dGluZ3MudG8gIT0gZmFsc2UpID8gc2V0dGluZ3MudG8gOiBwYXJzZUludChvYmouYXR0cignZGF0YS1wZXJjZW50JykpO1xuXHRcdFx0XHRpZih0byA+IDEwMCl7XG5cdFx0XHRcdFx0dG8gPSAxMDA7XG5cdFx0XHRcdH07XG5cdFx0XHR2YXIgZnJvbSA9IHNldHRpbmdzLmZyb20sXG5cdFx0XHRcdGxvb3BzID0gTWF0aC5jZWlsKHNldHRpbmdzLnNwZWVkIC8gc2V0dGluZ3MuaW50ZXJ2YWwpLFxuICAgICAgICAgICAgXHRpbmNyZW1lbnQgPSAodG8gLSBmcm9tKSAvIGxvb3BzLFxuXHRcdFx0XHRsb29wQ291bnQgPSAwLFxuXHRcdFx0XHRpbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZVZhbHVlLCBzZXR0aW5ncy5pbnRlcnZhbCk7XG5cdFx0XHRcblx0XHRcdG9iai5maW5kKHNldHRpbmdzLmNsYXNzZXMuc2tpbGxCYXJCYXIpLmFuaW1hdGUoe1xuXHRcdFx0XHR3aWR0aDogcGFyc2VJbnQob2JqLmF0dHIoJ2RhdGEtcGVyY2VudCcpKSsnJSdcblx0XHRcdH0sIHNldHRpbmdzLnNwZWVkKTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0ZnVuY3Rpb24gdXBkYXRlVmFsdWUoKXtcblx0XHRcdFx0ZnJvbSArPSBpbmNyZW1lbnQ7XG4gICAgICAgICAgICAgICAgbG9vcENvdW50Kys7XG4gICAgICAgICAgICAgICAgJChvYmopLmZpbmQoc2V0dGluZ3MuY2xhc3Nlcy5za2lsbEJhclBlcmNlbnQpLnRleHQoZnJvbS50b0ZpeGVkKHNldHRpbmdzLmRlY2ltYWxzKSsnJScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZihzZXR0aW5ncy5vblVwZGF0ZSkgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5vblVwZGF0ZS5jYWxsKG9iaiwgZnJvbSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGxvb3BDb3VudCA+PSBsb29wcykge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgZnJvbSA9IHRvO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Yoc2V0dGluZ3Mub25Db21wbGV0ZSkgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mub25Db21wbGV0ZS5jYWxsKG9iaiwgZnJvbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cdFx0XHR9XG5cdFx0XHRcbiAgICAgICAgfSk7XG4gXG4gICAgfTtcbiBcbn0oIGpRdWVyeSApKTtcbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHQvLyBza2lsbCBiYXIgQUJPVVQgUEFHRVxyXG5cdCQoJy5za2lsbGJhcicpLnNraWxsQmFycyh7XHJcblx0XHQvLyBudW1iZXIgc3RhcnRcclxuXHRcdGZyb206IDAsXHJcblxyXG5cdFx0Ly8gbnVtYmVyIGVuZFxyXG5cdFx0dG86IGZhbHNlLFxyXG5cclxuXHRcdC8vIGFuaW1hdGlvbiBzcGVlZFxyXG5cdFx0c3BlZWQ6IDMwMDAsXHJcblxyXG5cdFx0Ly8gaG93IG9mdGVuIHRoZSBlbGVtZW50IHNob3VsZCBiZSB1cDxhIGhyZWY9XCJodHRwczovL3d3dy5qcXVlcnlzY3JpcHQubmV0L3RpbWUtY2xvY2svXCI+ZGF0ZTwvYT5kXHJcblx0XHRpbnRlcnZhbDogMTAwLFxyXG5cclxuXHRcdC8vIHRoZSBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgdG8gc2hvd1xyXG5cdFx0ZGVjaW1hbHM6IDAsXHJcblxyXG5cdFx0Ly8gY2FsbGJhY2sgbWV0aG9kIGZvciBldmVyeSB0aW1lIHRoZSBlbGVtZW50IGlzIHVwZGF0ZWQsXHJcblx0XHRvblVwZGF0ZTogbnVsbCxcclxuXHJcblx0XHQvLyBjYWxsYmFjayBtZXRob2QgZm9yIHdoZW4gdGhlIGVsZW1lbnQgZmluaXNoZXMgdXBkYXRpbmdcclxuXHRcdG9uQ29tcGxldGU6IG51bGwsXHJcblxyXG5cdFx0Ly8gQ1NTIGNsYXNzZXNcclxuXHRcdGNsYXNzZXM6IHtcclxuXHRcdFx0c2tpbGxCYXJCYXI6ICcuc2tpbGxiYXItYmFyJyxcclxuXHRcdFx0c2tpbGxCYXJQZXJjZW50OiAnLnNraWxsLWJhci1wZXJjZW50JyxcclxuXHRcdH0sXHJcblx0fSk7XHJcbn0pO1xyXG4iXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwycHpMMlpsZEdOb1NsTlBUbVJoZEdFdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMnB6TDJadmNtMVdZV3hwWkdGcGRHOXVMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5cWN5OXRZV2x1TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OXFjeTl6YTJsc2JDNWlZWEp6TG1weGRXVnllUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmFuTXZjMnRwYkd4Q1lYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRSUVVGQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHM3VVVGRlFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUdFJRVU5CT3pzN1VVRkhRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEVzTUVOQlFUQkRMR2REUVVGblF6dFJRVU14UlR0UlFVTkJPenRSUVVWQk8xRkJRMEU3VVVGRFFUdFJRVU5CTEhkRVFVRjNSQ3hyUWtGQmEwSTdVVUZETVVVN1VVRkRRU3hwUkVGQmFVUXNZMEZCWXp0UlFVTXZSRHM3VVVGRlFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRXNlVU5CUVhsRExHbERRVUZwUXp0UlFVTXhSU3huU0VGQlowZ3NiVUpCUVcxQ0xFVkJRVVU3VVVGRGNrazdVVUZEUVRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFTd3lRa0ZCTWtJc01FSkJRVEJDTEVWQlFVVTdVVUZEZGtRc2FVTkJRV2xETEdWQlFXVTdVVUZEYUVRN1VVRkRRVHRSUVVOQk96dFJRVVZCTzFGQlEwRXNjMFJCUVhORUxDdEVRVUVyUkRzN1VVRkZja2c3VVVGRFFUczdPMUZCUjBFN1VVRkRRVHM3T3pzN096czdPenM3TzBGRGJFWkJPMEZCUTBFN1FVRkRRU3d5UWtGQk1rSXNiVUpCUVU4c1EwRkJReXdyUTBGQmFVSTdPMEZCUlhCRU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN08wRkJSVXc3UVVGRFFTdzRRMEZCT0VNN1FVRkRPVU03UVVGRFFTeHZRa0ZCYjBJc1IwRkJSeXhYUVVGWE8wRkJRMnhETzBGQlEwRTdRVUZEUVN4alFVRmpMRk5CUVZNN1FVRkRka0lzWTBGQll5eHBRa0ZCYVVJN1FVRkRMMEk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGYzdRVUZEUVN4elFrRkJjMEk3UVVGRGRFSXNjMEpCUVhOQ08wRkJRM1JDTzBGQlEwRTdRVUZEUVR0QlFVTkJMR0ZCUVdFc1RVRkJUVHRCUVVOdVFqdEJRVU5CTEZWQlFWVTdRVUZEVmp0QlFVTkJPMEZCUTBFc1owSkJRV2RDTEZWQlFWVTdRVUZETVVJN1FVRkRRU3h6UWtGQmMwSXNhVUpCUVdsQ08wRkJRM1pETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzU1VGQlNUdEJRVU5LTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZIT3p0QlFVVklPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVEN4SlFVRkpPMEZCUTBvc1IwRkJSenRCUVVOSU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN096czdPenM3T3pzN096dEJRM1pHUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVFVGQlRUdEJRVU5PTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzU1VGQlNUdEJRVU5LTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFbEJRVWs3UVVGRFNqdEJRVU5CTEVsQlFVazdRVUZEU2p0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEpRVUZKTzBGQlEwbzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWxCUVVrN1FVRkRTanRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEdsRFFVRnBReXg1UWtGQmVVSXNOa0pCUVRaQ0xFbEJRVWtzVVVGQlVTeEpRVUZKTEZGQlFWRXNTVUZCU1N4UlFVRlJMRWxCUVVrc1owTkJRV2RETEVkQlFVYzdRVUZEYkVzN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPenM3T3pzN096czdPenM3UVVOMlJrUTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzUlVGQlJUczdRVUZGUmpzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SlFVRkpPMEZCUTBvc1IwRkJSenRCUVVOSU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFc1JVRkJSVHRCUVVOR0xFTkJRVU03T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkRja1JFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hoUVVGaE8wRkJRMkk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRlRPenRCUVVWVU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hKUVVGSk96dEJRVVZLTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3hUUVVGVE96dEJRVVZVT3p0QlFVVkJMRU5CUVVNN096czdPenM3T3pzN096dEJRMjVGUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklMRVZCUVVVN1FVRkRSaXhEUVVGRElpd2labWxzWlNJNklqRmxZekU1TW1KbFpHRmpPREV4TVdJd01UVmhMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUlGeDBMeThnVkdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MGRtRnlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTWdQU0I3ZlR0Y2JseHVJRngwTHk4Z1ZHaGxJSEpsY1hWcGNtVWdablZ1WTNScGIyNWNiaUJjZEdaMWJtTjBhVzl1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2JXOWtkV3hsU1dRcElIdGNibHh1SUZ4MFhIUXZMeUJEYUdWamF5QnBaaUJ0YjJSMWJHVWdhWE1nYVc0Z1kyRmphR1ZjYmlCY2RGeDBhV1lvYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBwSUh0Y2JpQmNkRngwWEhSeVpYUjFjbTRnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1Wlhod2IzSjBjenRjYmlCY2RGeDBmVnh1SUZ4MFhIUXZMeUJEY21WaGRHVWdZU0J1WlhjZ2JXOWtkV3hsSUNoaGJtUWdjSFYwSUdsMElHbHVkRzhnZEdobElHTmhZMmhsS1Z4dUlGeDBYSFIyWVhJZ2JXOWtkV3hsSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwZ1BTQjdYRzRnWEhSY2RGeDBhVG9nYlc5a2RXeGxTV1FzWEc0Z1hIUmNkRngwYkRvZ1ptRnNjMlVzWEc0Z1hIUmNkRngwWlhod2IzSjBjem9nZTMxY2JpQmNkRngwZlR0Y2JseHVJRngwWEhRdkx5QkZlR1ZqZFhSbElIUm9aU0J0YjJSMWJHVWdablZ1WTNScGIyNWNiaUJjZEZ4MGJXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVkyRnNiQ2h0YjJSMWJHVXVaWGh3YjNKMGN5d2diVzlrZFd4bExDQnRiMlIxYkdVdVpYaHdiM0owY3l3Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5azdYRzVjYmlCY2RGeDBMeThnUm14aFp5QjBhR1VnYlc5a2RXeGxJR0Z6SUd4dllXUmxaRnh1SUZ4MFhIUnRiMlIxYkdVdWJDQTlJSFJ5ZFdVN1hHNWNiaUJjZEZ4MEx5OGdVbVYwZFhKdUlIUm9aU0JsZUhCdmNuUnpJRzltSUhSb1pTQnRiMlIxYkdWY2JpQmNkRngwY21WMGRYSnVJRzF2WkhWc1pTNWxlSEJ2Y25Sek8xeHVJRngwZlZ4dVhHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bGN5QnZZbXBsWTNRZ0tGOWZkMlZpY0dGamExOXRiMlIxYkdWelgxOHBYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtMGdQU0J0YjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1aklEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaR1ZtYVc1bElHZGxkSFJsY2lCbWRXNWpkR2x2YmlCbWIzSWdhR0Z5Ylc5dWVTQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1RZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SekxDQnVZVzFsTENCblpYUjBaWElwSUh0Y2JpQmNkRngwYVdZb0lWOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieWhsZUhCdmNuUnpMQ0J1WVcxbEtTa2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCdVlXMWxMQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUdkbGREb2daMlYwZEdWeUlIMHBPMXh1SUZ4MFhIUjlYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1gxOWxjMDF2WkhWc1pTQnZiaUJsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuSWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpLU0I3WEc0Z1hIUmNkR2xtS0hSNWNHVnZaaUJUZVcxaWIyd2dJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeWtnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQlRlVzFpYjJ3dWRHOVRkSEpwYm1kVVlXY3NJSHNnZG1Gc2RXVTZJQ2ROYjJSMWJHVW5JSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENBblgxOWxjMDF2WkhWc1pTY3NJSHNnZG1Gc2RXVTZJSFJ5ZFdVZ2ZTazdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QmpjbVZoZEdVZ1lTQm1ZV3RsSUc1aGJXVnpjR0ZqWlNCdlltcGxZM1JjYmlCY2RDOHZJRzF2WkdVZ0ppQXhPaUIyWVd4MVpTQnBjeUJoSUcxdlpIVnNaU0JwWkN3Z2NtVnhkV2x5WlNCcGRGeHVJRngwTHk4Z2JXOWtaU0FtSURJNklHMWxjbWRsSUdGc2JDQndjbTl3WlhKMGFXVnpJRzltSUhaaGJIVmxJR2x1ZEc4Z2RHaGxJRzV6WEc0Z1hIUXZMeUJ0YjJSbElDWWdORG9nY21WMGRYSnVJSFpoYkhWbElIZG9aVzRnWVd4eVpXRmtlU0J1Y3lCdlltcGxZM1JjYmlCY2RDOHZJRzF2WkdVZ0ppQTRmREU2SUdKbGFHRjJaU0JzYVd0bElISmxjWFZwY21WY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1ZENBOUlHWjFibU4wYVc5dUtIWmhiSFZsTENCdGIyUmxLU0I3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUF4S1NCMllXeDFaU0E5SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2RtRnNkV1VwTzF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnT0NrZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUZ4MFhIUnBaaWdvYlc5a1pTQW1JRFFwSUNZbUlIUjVjR1Z2WmlCMllXeDFaU0E5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkbUZzZFdVZ0ppWWdkbUZzZFdVdVgxOWxjMDF2WkhWc1pTa2djbVYwZFhKdUlIWmhiSFZsTzF4dUlGeDBYSFIyWVhJZ2JuTWdQU0JQWW1wbFkzUXVZM0psWVhSbEtHNTFiR3dwTzF4dUlGeDBYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5Jb2JuTXBPMXh1SUZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvYm5Nc0lDZGtaV1poZFd4MEp5d2dleUJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMQ0IyWVd4MVpUb2dkbUZzZFdVZ2ZTazdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQXlJQ1ltSUhSNWNHVnZaaUIyWVd4MVpTQWhQU0FuYzNSeWFXNW5KeWtnWm05eUtIWmhjaUJyWlhrZ2FXNGdkbUZzZFdVcElGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2h1Y3l3Z2EyVjVMQ0JtZFc1amRHbHZiaWhyWlhrcElIc2djbVYwZFhKdUlIWmhiSFZsVzJ0bGVWMDdJSDB1WW1sdVpDaHVkV3hzTENCclpYa3BLVHRjYmlCY2RGeDBjbVYwZFhKdUlHNXpPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaMlYwUkdWbVlYVnNkRVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm1iM0lnWTI5dGNHRjBhV0pwYkdsMGVTQjNhWFJvSUc1dmJpMW9ZWEp0YjI1NUlHMXZaSFZzWlhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YmlBOUlHWjFibU4wYVc5dUtHMXZaSFZzWlNrZ2UxeHVJRngwWEhSMllYSWdaMlYwZEdWeUlEMGdiVzlrZFd4bElDWW1JRzF2WkhWc1pTNWZYMlZ6VFc5a2RXeGxJRDljYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSRVpXWmhkV3gwS0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsV3lka1pXWmhkV3gwSjEwN0lIMGdPbHh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEUxdlpIVnNaVVY0Y0c5eWRITW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVTdJSDA3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNoblpYUjBaWElzSUNkaEp5d2daMlYwZEdWeUtUdGNiaUJjZEZ4MGNtVjBkWEp1SUdkbGRIUmxjanRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiRnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZJRDBnWm5WdVkzUnBiMjRvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2tnZXlCeVpYUjFjbTRnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwT3lCOU8xeHVYRzRnWEhRdkx5QmZYM2RsWW5CaFkydGZjSFZpYkdsalgzQmhkR2hmWDF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV3SUQwZ1hDSmNJanRjYmx4dVhHNGdYSFF2THlCTWIyRmtJR1Z1ZEhKNUlHMXZaSFZzWlNCaGJtUWdjbVYwZFhKdUlHVjRjRzl5ZEhOY2JpQmNkSEpsZEhWeWJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y3lBOUlEQXBPMXh1SWl3aVpHOWpkVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblJFOU5RMjl1ZEdWdWRFeHZZV1JsWkNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhIUmpiMjV6ZENCd2NtOXFaV04wYzBOdmJuUmhhVzVsY2lBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0Nkd2NtOXFaV04wY3kxamIyNTBZV2x1WlhJbktUdGNjbHh1WEhSamIyNXpkQ0JzYjJOaGJGQnliMnBsWTNSelNsTlBUaUE5SUhKbGNYVnBjbVVvSnk0dmNISnZhbVZqZEhNdWFuTnZiaWNwTzF4eVhHNWNjbHh1WEhSamIyNXpkQ0JuWlhSUWNtOXFaV04wYzBaeWIyMUtjMjl1SUQwZ1lYTjVibU1nS0NrZ1BUNGdlMXh5WEc1Y2RGeDBZMjl1YzNRZ2NISnZhbVZqZEhNZ1BTQmhkMkZwZENCc2IyTmhiRkJ5YjJwbFkzUnpTbE5QVGk1d2NtOXFaV04wY3p0Y2NseHVYSEpjYmx4MFhIUndjbTlxWldOMGMwTnZiblJoYVc1bGNpNXBibTVsY2toVVRVd2dQU0J3Y205cVpXTjBjMXh5WEc1Y2RGeDBYSFF1YldGd0tDaHdjbTlxWldOMEtTQTlQaUI3WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnZTF4eVhHNWNkRngwWEhSY2RGeDBhV1FzWEhKY2JseDBYSFJjZEZ4MFhIUjBhWFJzWlN4Y2NseHVYSFJjZEZ4MFhIUmNkR1JsYzJOeWFYQjBhVzl1TEZ4eVhHNWNkRngwWEhSY2RGeDBaR1Z6YVdkdUxGeHlYRzVjZEZ4MFhIUmNkRngwWTI5c2IzSnpWWE5sWkN4Y2NseHVYSFJjZEZ4MFhIUmNkR2x0WVdkbFJHVnpZM0pwY0hScGIyNHNYSEpjYmx4MFhIUmNkRngwWEhScGJXRm5aVTF2WWl4Y2NseHVYSFJjZEZ4MFhIUmNkR2x0WVdkbFJHVnpheXhjY2x4dVhIUmNkRngwWEhSOUlEMGdjSEp2YW1WamREdGNjbHh1WEhKY2JseDBYSFJjZEZ4MGNtVjBkWEp1SUdCY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTTlYQ0ppYjNobGMxOWZZbTk0SUdsMFpXMGdKSHRrWlhOcFoyNWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwTG0xaGNDZ29jMmx1YkdkbFJHVnphV2R1S1NBOVBpQnphVzVzWjJWRVpYTnBaMjRwWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RDNXFiMmx1S0NjZ0p5bDlJQ1I3WTI5c2IzSnpWWE5sWkgxY0lqNWNjbHh1WEhSY2RGeDBYSFJjZER4a2FYWWdZMnhoYzNNOVhDSmliM2hsYzE5ZlltOTRMUzFwYldkY0lqNWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFBHbHRaMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkSE55WXoxY0lpUjdhVzFoWjJWTmIySjlYQ0pjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJoYkhROVhDSWtlMmx0WVdkbFJHVnpZM0pwY0hScGIyNTlYQ0pjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJzYjJGa2FXNW5QVndpYkdGNmVWd2lYSEpjYmx4MFhIUmNkRngwWEhSY2RDOCtYSEpjYmx4MFhIUmNkRngwWEhROEwyUnBkajVjY2x4dVhIUmNkRngwWEhSY2REeGthWFlnWTJ4aGMzTTlYQ0ppYjNobGMxOWZZbTk0TFMxdmRtVnliR0Y1SUZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ1I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJqYjJ4dmNuTlZjMlZrSUQwOVBTQW5KeUI4ZkNBbmIyNWxKMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFEvSUNkaWIzaGxjMTlmWW05NExTMXdjbWx0WVhKNVgyTnNjaWRjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwT2lBbkoxeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEgwZ1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSkh0amIyeHZjbk5WYzJWa0lEMDlQU0FuZEhkdkp5QS9JQ2RpYjNobGMxOWZZbTk0TFMxelpXTnZibVJoY25sZlkyeHlKeUE2SUNjbmZWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNSN1kyOXNiM0p6VlhObFpDQTlQVDBnSjIxdmNtVW5JRDhnSjJKdmVHVnpYMTlpYjNndExYUmxjblJwWVhKNVgyTnNjaWNnT2lBbkozMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY0lseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUQ1Y2NseHVYSFJjZEZ4MFhIUmNkRngwUEdScGRpQmpiR0Z6Y3oxY0ltSnZlR1Z6WDE5aWIzZ3RMV052Ym5SbGJuUmNJajVjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFE4YURJK0pIdDBhWFJzWlgwOEwyZ3lQbHh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRHh3UGx4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MEpIdGtaWE5qY21sd2RHbHZibjFjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFE4TDNBK1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFBHRmNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkR2h5WldZOVhDSWtlMmx0WVdkbFJHVnphMzFjSWx4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFpHRjBZUzFzYVdkb2RHSnZlRDFjSW0xNVoyRnNiR1Z5ZVZ3aVhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmtZWFJoTFhScGRHeGxQVndpSkh0cGJXRm5aVVJsYzJOeWFYQjBhVzl1ZlZ3aVhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmpiR0Z6Y3oxY0ltSjBibHdpUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQlBjR1Z1WEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwUEM5aFBseHlYRzVjZEZ4MFhIUmNkRngwWEhROEwyUnBkajVjY2x4dVhIUmNkRngwWEhSY2REd3ZaR2wyUGx4eVhHNWNkRngwWEhSY2REd3ZaR2wyUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JnTzF4eVhHNWNkRngwWEhSOUtWeHlYRzVjZEZ4MFhIUXVjbVYyWlhKelpTZ3BYSEpjYmx4MFhIUmNkQzVxYjJsdUtDY25LVHRjY2x4dVhISmNibHgwWEhSc1pYUWdhWE52SUQwZ2JtVjNJRWx6YjNSdmNHVW9jSEp2YW1WamRITkRiMjUwWVdsdVpYSXNJSHRjY2x4dVhIUmNkRngwTHk4Z2IzQjBhVzl1YzF4eVhHNWNkRngwWEhScGRHVnRVMlZzWldOMGIzSTZJQ2N1YVhSbGJTY3NYSEpjYmx4MFhIUmNkR3hoZVc5MWRFMXZaR1U2SUNkbWFYUlNiM2R6Snl4Y2NseHVYSFJjZEgwcE8xeHlYRzVjY2x4dVhIUmNkR052Ym5OMElHWnBiSFJsY2tsMFpXMXpJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2duTG1acGJIUmxjaWNwTzF4eVhHNWNjbHh1WEhSY2RHWnBiSFJsY2tsMFpXMXpMbVp2Y2tWaFkyZ29LR2wwWlcwcElEMCtJSHRjY2x4dVhIUmNkRngwYVhSbGJTNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lDaGxLU0E5UGlCN1hISmNibHgwWEhSY2RGeDBabWxzZEdWeVNYUmxiWE11Wm05eVJXRmphQ2dvWm1sc2RHVnlLU0E5UGlCbWFXeDBaWEl1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duWVdOMGFYWmxKeWtwTzF4eVhHNWNkRngwWEhSY2RHVXVZM1Z5Y21WdWRGUmhjbWRsZEM1amJHRnpjMHhwYzNRdVlXUmtLQ2RoWTNScGRtVW5LVHRjY2x4dVhISmNibHgwWEhSY2RGeDBiR1YwSUdacGJIUmxjbE5sYkdWamRHOXlJRDBnWlM1amRYSnlaVzUwVkdGeVoyVjBMbVJoZEdGelpYUXVabWxzZEdWeU8xeHlYRzVjY2x4dVhIUmNkRngwWEhScGMyOHVZWEp5WVc1blpTaDdYSEpjYmx4MFhIUmNkRngwWEhRdkx5QnBkR1Z0SUdWc1pXMWxiblFnY0hKdmRtbGtaV1FnWVhNZ1lYSm5kVzFsYm5SY2NseHVYSFJjZEZ4MFhIUmNkR1pwYkhSbGNqb2dabWxzZEdWeVUyVnNaV04wYjNJc1hISmNibHgwWEhSY2RGeDBmU2s3WEhKY2JseDBYSFJjZEgwcE8xeHlYRzVjZEZ4MGZTazdYSEpjYmx4MGZUdGNjbHh1WEhKY2JseDBhV1lnS0hCeWIycGxZM1J6UTI5dWRHRnBibVZ5S1NCN1hISmNibHgwWEhSblpYUlFjbTlxWldOMGMwWnliMjFLYzI5dUtDazdYSEpjYmx4MGZWeHlYRzU5S1R0Y2NseHVJaXdpWkc5amRXMWxiblF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduUkU5TlEyOXVkR1Z1ZEV4dllXUmxaQ2NzSUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhRdkx5Qm1iM0p0SUhaaGJHbGtZWFJwYjI1Y2NseHVYSFJqYjI1emRDQm1iM0p0SUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjJOdmJuUmhZM1F0Wm05eWJTY3BPMXh5WEc1Y2RHTnZibk4wSUc1aGJXVWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25ibUZ0WlNjcE8xeHlYRzVjZEdOdmJuTjBJR1Z0WVdsc0lEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyVnRZV2xzSnlrN1hISmNibHgwWTI5dWMzUWdiV1Z6YzJGblpTQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZHRaWE56WVdkbEp5azdYSEpjYmx4MFkyOXVjM1FnWm05eWJVSjBiaUE5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RtYjNKdExXSjBiaWNwTzF4eVhHNWNjbHh1WEhScFppQW9abTl5YlNrZ2UxeHlYRzVjZEZ4MFcxeHlYRzVjZEZ4MFhIUW5ZMnhwWTJzbkxGeHlYRzVjZEZ4MFhIUW5iMjUwYjNWamFITjBZWEowSnl4Y2NseHVYSFJjZEZ4MEoyMXZkWE5sYjNabGNpY3NYSEpjYmx4MFhIUmNkQ2RyWlhsa2IzZHVKeXhjY2x4dVhIUmNkRngwSjJ0bGVYQnlaWE56Snl4Y2NseHVYSFJjZEZ4MEozUnZkV05vYzNSaGNuUW5MRnh5WEc1Y2RGeDBYSFFuZEc5MVkyaHRiM1psSnl4Y2NseHVYSFJjZEYwdVptOXlSV0ZqYUNoY2NseHVYSFJjZEZ4MEtHVjJaVzUwS1NBOVBseHlYRzVjZEZ4MFhIUmNkR1J2WTNWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9aWFpsYm5Rc0lDZ3BJRDArSUh0Y2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNoamFHVmphMGx1Y0hWMGN5Z3BJRDA5UFNCbVlXeHpaU2tnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJtYjNKdFFuUnVMbVJwYzJGaWJHVmtJRDBnZEhKMVpUdGNjbHh1WEhSY2RGeDBYSFJjZEgwZ1pXeHpaU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkR1p2Y20xQ2RHNHVaR2x6WVdKc1pXUWdQU0JtWVd4elpUdGNjbHh1WEhSY2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MFhIUjlLU3hjY2x4dVhIUmNkRngwWm1Gc2MyVmNjbHh1WEhSY2RDazdYSEpjYmx4eVhHNWNkRngwWm5WdVkzUnBiMjRnWTJobFkydEpibkIxZEhNb0tTQjdYSEpjYmx4MFhIUmNkR052Ym5OMElHNWhiV1ZXWVd4MVpTQTlJRzVoYldVdWRtRnNkV1V1ZEhKcGJTZ3BPMXh5WEc1Y2RGeDBYSFJqYjI1emRDQmxiV0ZwYkZaaGJIVmxJRDBnWlcxaGFXd3VkbUZzZFdVdWRISnBiU2dwTzF4eVhHNWNkRngwWEhSamIyNXpkQ0J0WlhOellXZGxWbUZzZFdVZ1BTQnRaWE56WVdkbExuWmhiSFZsTG5SeWFXMG9LVHRjY2x4dVhISmNibHgwWEhSY2RHbG1JQ2h1WVcxbFZtRnNkV1VnUFQwOUlDY25LU0I3WEhKY2JseDBYSFJjZEZ4MGMyVjBSWEp5YjNKR2IzSW9ibUZ0WlN3Z0oxQnNaV0Z6WlNCbGJuUmxjaUI1YjNWeUlHWjFiR3dnYm1GdFpTY3BPMXh5WEc1Y2RGeDBYSFI5SUdWc2MyVWdlMXh5WEc1Y2RGeDBYSFJjZEhObGRGTjFZMk5sYzNOR2IzSW9ibUZ0WlNrN1hISmNibHgwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEdsbUlDaGxiV0ZwYkZaaGJIVmxJRDA5UFNBbkp5a2dlMXh5WEc1Y2RGeDBYSFJjZEhObGRFVnljbTl5Um05eUtHVnRZV2xzTENBblVHeGxZWE5sSUdWdWRHVnlJSGx2ZFhJZ1pXMWhhV3dnWVdSa2NtVnpjeWNwTzF4eVhHNWNkRngwWEhSOUlHVnNjMlVnYVdZZ0tDRmxiV0ZwYkVselZtRnNhV1FvWlcxaGFXeFdZV3gxWlNrcElIdGNjbHh1WEhSY2RGeDBYSFJ6WlhSRmNuSnZja1p2Y2lobGJXRnBiQ3dnSjBWdFlXbHNJR2x6SUc1dmRDQjJZV3hwWkNjcE8xeHlYRzVjZEZ4MFhIUjlJR1ZzYzJVZ2UxeHlYRzVjZEZ4MFhIUmNkSE5sZEZOMVkyTmxjM05HYjNJb1pXMWhhV3dwTzF4eVhHNWNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJwWmlBb2JXVnpjMkZuWlZaaGJIVmxJRDA5UFNBbkp5a2dlMXh5WEc1Y2RGeDBYSFJjZEhObGRFVnljbTl5Um05eUtHMWxjM05oWjJVc0lDZFFiR1ZoYzJVZ1pXNTBaWElnZVc5MWNpQnRaWE56WVdkbEp5azdYSEpjYmx4MFhIUmNkSDBnWld4elpTQjdYSEpjYmx4MFhIUmNkRngwYzJWMFUzVmpZMlZ6YzBadmNpaHRaWE56WVdkbEtUdGNjbHh1WEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MGFXWWdLRnh5WEc1Y2RGeDBYSFJjZEc1aGJXVldZV3gxWlNBOVBUMGdKeWNnZkh4Y2NseHVYSFJjZEZ4MFhIUmxiV0ZwYkZaaGJIVmxJRDA5UFNBbkp5QjhmRnh5WEc1Y2RGeDBYSFJjZEcxbGMzTmhaMlZXWVd4MVpTQTlQVDBnSnljZ2ZIeGNjbHh1WEhSY2RGeDBYSFFoWlcxaGFXeEpjMVpoYkdsa0tHVnRZV2xzVm1Gc2RXVXBYSEpjYmx4MFhIUmNkQ2tnZTF4eVhHNWNkRngwWEhSY2RISmxkSFZ5YmlCbVlXeHpaVHRjY2x4dVhIUmNkRngwZlNCbGJITmxJSHRjY2x4dVhIUmNkRngwWEhSeVpYUjFjbTRnZEhKMVpUdGNjbHh1WEhSY2RGeDBmVnh5WEc1Y2RGeDBmVnh5WEc1Y2NseHVYSFJjZEdaMWJtTjBhVzl1SUhObGRFVnljbTl5Um05eUtHbHVjSFYwTENCdFpYTnpZV2RsS1NCN1hISmNibHgwWEhSY2RHTnZibk4wSUdadmNtMGdQU0JwYm5CMWRDNXdZWEpsYm5SRmJHVnRaVzUwTzF4eVhHNWNkRngwWEhSamIyNXpkQ0J6YldGc2JDQTlJR1p2Y20wdWNYVmxjbmxUWld4bFkzUnZjaWduYzIxaGJHd25LVHRjY2x4dVhISmNibHgwWEhSY2RITnRZV3hzTG1sdWJtVnlWR1Y0ZENBOUlHMWxjM05oWjJVN1hISmNibHgwWEhSY2RHWnZjbTB1WTJ4aGMzTk9ZVzFsSUQwZ0oyWnZjbTFmWDJkeWIzVndJR1Z5Y205eUp6dGNjbHh1WEhSY2RIMWNjbHh1WEhKY2JseDBYSFJtZFc1amRHbHZiaUJ6WlhSVGRXTmpaWE56Um05eUtHbHVjSFYwS1NCN1hISmNibHgwWEhSY2RHTnZibk4wSUdadmNtMGdQU0JwYm5CMWRDNXdZWEpsYm5SRmJHVnRaVzUwTzF4eVhHNWNkRngwWEhSbWIzSnRMbU5zWVhOelRtRnRaU0E5SUNkbWIzSnRYMTluY205MWNDQnpkV05qWlhOekp6dGNjbHh1WEhSY2RIMWNjbHh1WEhKY2JseDBYSFJtZFc1amRHbHZiaUJsYldGcGJFbHpWbUZzYVdRb1pXMWhhV3dwSUh0Y2NseHVYSFJjZEZ4MFkyOXVjM1FnY21VZ1BTQXZYaWdvVzE0OFBpZ3BYRnhiWEZ4ZFhGeGNYQzRzT3pwY1hITkFYQ0pkS3loY1hDNWJYancrS0NsY1hGdGNYRjFjWEZ4Y0xpdzdPbHhjYzBCY0lsMHJLU29wZkNoY0lpNHJYQ0lwS1VBb0tGeGNXMXN3TFRsZGV6RXNNMzFjWEM1Yk1DMDVYWHN4TEROOVhGd3VXekF0T1YxN01Td3pmVnhjTGxzd0xUbGRlekVzTTMxZEtYd29LRnRoTFhwQkxWcGNYQzB3TFRsZEsxeGNMaWtyVzJFdGVrRXRXbDE3TWl4OUtTa2tMeTUwWlhOMEtGeHlYRzVjZEZ4MFhIUmNkR1Z0WVdsc1hISmNibHgwWEhSY2RDazdYSEpjYmx4eVhHNWNkRngwWEhSeVpYUjFjbTRnY21VN1hISmNibHgwWEhSOVhISmNibHgwZlZ4eVhHNTlLVHRjY2x4dUlpd2laRzlqZFcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25SRTlOUTI5dWRHVnVkRXh2WVdSbFpDY3NJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSFIzYVc1a2IzY3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25iRzloWkNjc0lDaGxLU0E5UGlCN1hISmNibHgwWEhSamIyNXpkQ0J3Y21Wc2IyRmtJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbkJ5Wld4dllXUW5LVHRjY2x4dVhISmNibHgwWEhSd2NtVnNiMkZrTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KM0J5Wld4dllXUXRabWx1YVhOb1pXUW5LVHRjY2x4dVhIUjlLVHRjY2x4dVhISmNibHgwWTI5dWMzUWdZblJ1VTJOeWIyeHNWRzlVYjNBZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnblluUnVVMk55YjJ4c1ZHOVViM0FuS1R0Y2NseHVYSEpjYmx4MGFXWWdLR0owYmxOamNtOXNiRlJ2Vkc5d0tTQjdYSEpjYmx4MFhIUmlkRzVUWTNKdmJHeFViMVJ2Y0M1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUNobEtTQTlQaUI3WEhKY2JseDBYSFJjZEhkcGJtUnZkeTV6WTNKdmJHeFVieWg3WEhKY2JseDBYSFJjZEZ4MGRHOXdPaUF3TEZ4eVhHNWNkRngwWEhSY2RHeGxablE2SURBc1hISmNibHgwWEhSY2RGeDBZbVZvWVhacGIzSTZJQ2R6Ylc5dmRHZ25MRnh5WEc1Y2RGeDBYSFI5S1R0Y2NseHVYSFJjZEgwcE8xeHlYRzVjZEgxY2NseHVYSEpjYmx4MGQybHVaRzkzTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjNOamNtOXNiQ2NzSUNobEtTQTlQaUI3WEhKY2JseDBYSFJwWmlBb1pHOWpkVzFsYm5RdVpHOWpkVzFsYm5SRmJHVnRaVzUwTG5OamNtOXNiRlJ2Y0NBK0lEQXBJSHRjY2x4dVhIUmNkRngwZEc5d1RtRjJMbU5zWVhOelRHbHpkQzVoWkdRb0oyNWhkaTEwYjNBdExYTjBhV05yZVNjcE8xeHlYRzVjZEZ4MFhIUnBaaUFvZEc5d1RtRjJUR2x6ZENrZ2UxeHlYRzVjZEZ4MFhIUmNkSFJ2Y0U1aGRreHBjM1F1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25jRzl5ZEdadmJHbHZMVzFsYm5WZlgyeHBjM1F0TFhOMGFXTnJlU2NwTzF4eVhHNWNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJpZEc1VFkzSnZiR3hVYjFSdmNDNXpkSGxzWlM1dmNHRmphWFI1SUQwZ01UdGNjbHh1WEhSY2RIMGdaV3h6WlNCN1hISmNibHgwWEhSY2RIUnZjRTVoZGk1amJHRnpjMHhwYzNRdWNtVnRiM1psS0NkdVlYWXRkRzl3TFMxemRHbGphM2tuS1R0Y2NseHVYSFJjZEZ4MGFXWWdLSFJ2Y0U1aGRreHBjM1FwSUh0Y2NseHVYSFJjZEZ4MFhIUjBiM0JPWVhaTWFYTjBMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9KM0J2Y25SbWIyeHBieTF0Wlc1MVgxOXNhWE4wTFMxemRHbGphM2tuS1R0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUmlkRzVUWTNKdmJHeFViMVJ2Y0M1emRIbHNaUzV2Y0dGamFYUjVJRDBnTUR0Y2NseHVYSFJjZEgxY2NseHVYSFI5S1R0Y2NseHVYSEpjYmx4MFkyOXVjM1FnZEc5d1RtRjJJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KM1J2Y0MxdVlYWW5LVHRjY2x4dVhIUmpiMjV6ZENCMGIzQk9ZWFpNYVhOMElEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0ozQnZjblJtYjJ4cGJ5MXRaVzUxWDE5c2FYTjBKeWs3WEhKY2JseDBZMjl1YzNRZ2JtRjJWV3dnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duYm1GMkxYVnNKeWs3WEhKY2JseDBZMjl1YzNRZ2JXVnVkVUowYmlBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnk1dFpXNTFMV0owYmljcE8xeHlYRzVjZEd4bGRDQnRaVzUxVDNCbGJpQTlJR1poYkhObE8xeHlYRzVjY2x4dVhIUnRaVzUxUW5SdUxtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyTnNhV05ySnl3Z0tDa2dQVDRnZTF4eVhHNWNkRngwYm1GMlZXd3VZMnhoYzNOTWFYTjBMblJ2WjJkc1pTZ25jMmh2ZDJsdVp5Y3BPMXh5WEc1Y2NseHVYSFJjZEdsbUlDZ2hiV1Z1ZFU5d1pXNHBJSHRjY2x4dVhIUmNkRngwYldWdWRVSjBiaTVqYkdGemMweHBjM1F1WVdSa0tDZHZjR1Z1SnlrN1hISmNibHgwWEhSY2RHMWxiblZQY0dWdUlEMGdkSEoxWlR0Y2NseHVYSFJjZEgwZ1pXeHpaU0I3WEhKY2JseDBYSFJjZEcxbGJuVkNkRzR1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duYjNCbGJpY3BPMXh5WEc1Y2RGeDBYSFJ0Wlc1MVQzQmxiaUE5SUdaaGJITmxPMXh5WEc1Y2RGeDBmVnh5WEc1Y2RIMHBPMXh5WEc1OUtUdGNjbHh1SWl3aUx5b2hYRzRnS2lCb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdmRXMWhjbmRsWW1SbGRtVnNiM0JsY2k5cWNYVmxjbmt0WTNOekxYTnJhV3hzY3kxaVlYSmNiaUFxSUVGMWRHaHZjam9nUUhWdFlYSjNaV0prWlhabGJHOXdaWEpjYmlBcUlFeHBZMlZ1YzJWa0lIVnVaR1Z5SUhSb1pTQk5TVlFnYkdsalpXNXpaVnh1SUNvdlhHNGdYRzRvWm5WdVkzUnBiMjRnS0NBa0lDa2dlMXh1SUZ4dUlDQWdJQ1F1Wm00dWMydHBiR3hDWVhKeklEMGdablZ1WTNScGIyNG9JRzl3ZEdsdmJuTWdLU0I3WEc0Z1hHNGdJQ0FnSUNBZ0lIWmhjaUJ6WlhSMGFXNW5jeUE5SUNRdVpYaDBaVzVrS0h0Y2JseDBYSFJjZEdaeWIyMDZJREFzSUNCY2RGeDBYSFF2THlCdWRXMWlaWElnYzNSaGNuUmNibHgwWEhSY2RIUnZPaUJtWVd4elpTeGNkRngwWEhRdkx5QnVkVzFpWlhJZ1pXNWtYRzVjZEZ4MFhIUnpjR1ZsWkRvZ01UQXdNQ3dnSUZ4MFhIUXZMeUJvYjNjZ2JHOXVaeUJwZENCemFHOTFiR1FnZEdGclpTQjBieUJqYjNWdWRDQmlaWFIzWldWdUlIUm9aU0IwWVhKblpYUWdiblZ0WW1WeWMxeHVYSFJjZEZ4MGFXNTBaWEoyWVd3NklERXdNQ3hjZENBZ0x5OGdhRzkzSUc5bWRHVnVJSFJvWlNCbGJHVnRaVzUwSUhOb2IzVnNaQ0JpWlNCMWNHUmhkR1ZrWEc1Y2RGeDBYSFJrWldOcGJXRnNjem9nTUN4Y2RGeDBJQ0F2THlCMGFHVWdiblZ0WW1WeUlHOW1JR1JsWTJsdFlXd2djR3hoWTJWeklIUnZJSE5vYjNkY2JseDBYSFJjZEc5dVZYQmtZWFJsT2lCdWRXeHNMRngwSUNBdkx5QmpZV3hzWW1GamF5QnRaWFJvYjJRZ1ptOXlJR1YyWlhKNUlIUnBiV1VnZEdobElHVnNaVzFsYm5RZ2FYTWdkWEJrWVhSbFpDeGNibHgwWEhSY2RHOXVRMjl0Y0d4bGRHVTZJRzUxYkd3c1hIUWdJQzh2SUdOaGJHeGlZV05ySUcxbGRHaHZaQ0JtYjNJZ2QyaGxiaUIwYUdVZ1pXeGxiV1Z1ZENCbWFXNXBjMmhsY3lCMWNHUmhkR2x1WjF4dVhIUmNkRngwTHlwdmJrTnZiWEJzWlhSbE9pQm1kVzVqZEdsdmJpaG1jbTl0S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1a1pXSjFaeWgwYUdsektUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgwcUwxeHVYSFJjZEZ4MFkyeGhjM05sY3pwN1hHNWNkRngwWEhSY2RITnJhV3hzUW1GeVFtRnlJRG9nSnk1emEybHNiR0poY2kxaVlYSW5MRnh1WEhSY2RGeDBYSFJ6YTJsc2JFSmhjbEJsY21ObGJuUWdPaUFuTG5OcmFXeHNMV0poY2kxd1pYSmpaVzUwSnl4Y2JseDBYSFJjZEgxY2JpQWdJQ0FnSUNBZ2ZTd2diM0IwYVc5dWN5QXBPMXh1SUZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NWxZV05vS0daMWJtTjBhVzl1S0NsN1hHNWNkRngwWEhSY2JseDBYSFJjZEhaaGNpQnZZbW9nUFNBa0tIUm9hWE1wTEZ4dVhIUmNkRngwWEhSMGJ5QTlJQ2h6WlhSMGFXNW5jeTUwYnlBaFBTQm1ZV3h6WlNrZ1B5QnpaWFIwYVc1bmN5NTBieUE2SUhCaGNuTmxTVzUwS0c5aWFpNWhkSFJ5S0Nka1lYUmhMWEJsY21ObGJuUW5LU2s3WEc1Y2RGeDBYSFJjZEdsbUtIUnZJRDRnTVRBd0tYdGNibHgwWEhSY2RGeDBYSFIwYnlBOUlERXdNRHRjYmx4MFhIUmNkRngwZlR0Y2JseDBYSFJjZEhaaGNpQm1jbTl0SUQwZ2MyVjBkR2x1WjNNdVpuSnZiU3hjYmx4MFhIUmNkRngwYkc5dmNITWdQU0JOWVhSb0xtTmxhV3dvYzJWMGRHbHVaM011YzNCbFpXUWdMeUJ6WlhSMGFXNW5jeTVwYm5SbGNuWmhiQ2tzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmNkR2x1WTNKbGJXVnVkQ0E5SUNoMGJ5QXRJR1p5YjIwcElDOGdiRzl2Y0hNc1hHNWNkRngwWEhSY2RHeHZiM0JEYjNWdWRDQTlJREFzWEc1Y2RGeDBYSFJjZEdsdWRHVnlkbUZzSUQwZ2MyVjBTVzUwWlhKMllXd29kWEJrWVhSbFZtRnNkV1VzSUhObGRIUnBibWR6TG1sdWRHVnlkbUZzS1R0Y2JseDBYSFJjZEZ4dVhIUmNkRngwYjJKcUxtWnBibVFvYzJWMGRHbHVaM011WTJ4aGMzTmxjeTV6YTJsc2JFSmhja0poY2lrdVlXNXBiV0YwWlNoN1hHNWNkRngwWEhSY2RIZHBaSFJvT2lCd1lYSnpaVWx1ZENodlltb3VZWFIwY2lnblpHRjBZUzF3WlhKalpXNTBKeWtwS3ljbEoxeHVYSFJjZEZ4MGZTd2djMlYwZEdsdVozTXVjM0JsWldRcE8xeHVYSFJjZEZ4MFhIUmNkRngwWEc1Y2RGeDBYSFJtZFc1amRHbHZiaUIxY0dSaGRHVldZV3gxWlNncGUxeHVYSFJjZEZ4MFhIUm1jbTl0SUNzOUlHbHVZM0psYldWdWREdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNiMjl3UTI5MWJuUXJLenRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FrS0c5aWFpa3VabWx1WkNoelpYUjBhVzVuY3k1amJHRnpjMlZ6TG5OcmFXeHNRbUZ5VUdWeVkyVnVkQ2t1ZEdWNGRDaG1jbTl0TG5SdlJtbDRaV1FvYzJWMGRHbHVaM011WkdWamFXMWhiSE1wS3ljbEp5azdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RIbHdaVzltS0hObGRIUnBibWR6TG05dVZYQmtZWFJsS1NBOVBTQW5ablZ1WTNScGIyNG5LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITmxkSFJwYm1kekxtOXVWWEJrWVhSbExtTmhiR3dvYjJKcUxDQm1jbTl0S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYkc5dmNFTnZkVzUwSUQ0OUlHeHZiM0J6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05zWldGeVNXNTBaWEoyWVd3b2FXNTBaWEoyWVd3cE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtY205dElEMGdkRzg3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaWh6WlhSMGFXNW5jeTV2YmtOdmJYQnNaWFJsS1NBOVBTQW5ablZ1WTNScGIyNG5LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6WlhSMGFXNW5jeTV2YmtOdmJYQnNaWFJsTG1OaGJHd29iMkpxTENCbWNtOXRLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHgwWEhSY2RIMWNibHgwWEhSY2RGeHVJQ0FnSUNBZ0lDQjlLVHRjYmlCY2JpQWdJQ0I5TzF4dUlGeHVmU2dnYWxGMVpYSjVJQ2twTzF4dUlpd2lKQ2hrYjJOMWJXVnVkQ2t1Y21WaFpIa29ablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNkQzh2SUhOcmFXeHNJR0poY2lCQlFrOVZWQ0JRUVVkRlhISmNibHgwSkNnbkxuTnJhV3hzWW1GeUp5a3VjMnRwYkd4Q1lYSnpLSHRjY2x4dVhIUmNkQzh2SUc1MWJXSmxjaUJ6ZEdGeWRGeHlYRzVjZEZ4MFpuSnZiVG9nTUN4Y2NseHVYSEpjYmx4MFhIUXZMeUJ1ZFcxaVpYSWdaVzVrWEhKY2JseDBYSFIwYnpvZ1ptRnNjMlVzWEhKY2JseHlYRzVjZEZ4MEx5OGdZVzVwYldGMGFXOXVJSE53WldWa1hISmNibHgwWEhSemNHVmxaRG9nTXpBd01DeGNjbHh1WEhKY2JseDBYSFF2THlCb2IzY2diMlowWlc0Z2RHaGxJR1ZzWlcxbGJuUWdjMmh2ZFd4a0lHSmxJSFZ3UEdFZ2FISmxaajFjSW1oMGRIQnpPaTh2ZDNkM0xtcHhkV1Z5ZVhOamNtbHdkQzV1WlhRdmRHbHRaUzFqYkc5amF5OWNJajVrWVhSbFBDOWhQbVJjY2x4dVhIUmNkR2x1ZEdWeWRtRnNPaUF4TURBc1hISmNibHh5WEc1Y2RGeDBMeThnZEdobElHNTFiV0psY2lCdlppQmtaV05wYldGc0lIQnNZV05sY3lCMGJ5QnphRzkzWEhKY2JseDBYSFJrWldOcGJXRnNjem9nTUN4Y2NseHVYSEpjYmx4MFhIUXZMeUJqWVd4c1ltRmpheUJ0WlhSb2IyUWdabTl5SUdWMlpYSjVJSFJwYldVZ2RHaGxJR1ZzWlcxbGJuUWdhWE1nZFhCa1lYUmxaQ3hjY2x4dVhIUmNkRzl1VlhCa1lYUmxPaUJ1ZFd4c0xGeHlYRzVjY2x4dVhIUmNkQzh2SUdOaGJHeGlZV05ySUcxbGRHaHZaQ0JtYjNJZ2QyaGxiaUIwYUdVZ1pXeGxiV1Z1ZENCbWFXNXBjMmhsY3lCMWNHUmhkR2x1WjF4eVhHNWNkRngwYjI1RGIyMXdiR1YwWlRvZ2JuVnNiQ3hjY2x4dVhISmNibHgwWEhRdkx5QkRVMU1nWTJ4aGMzTmxjMXh5WEc1Y2RGeDBZMnhoYzNObGN6b2dlMXh5WEc1Y2RGeDBYSFJ6YTJsc2JFSmhja0poY2pvZ0p5NXphMmxzYkdKaGNpMWlZWEluTEZ4eVhHNWNkRngwWEhSemEybHNiRUpoY2xCbGNtTmxiblE2SUNjdWMydHBiR3d0WW1GeUxYQmxjbU5sYm5RbkxGeHlYRzVjZEZ4MGZTeGNjbHh1WEhSOUtUdGNjbHh1ZlNrN1hISmNiaUpkTENKemIzVnlZMlZTYjI5MElqb2lJbjA9In0=
