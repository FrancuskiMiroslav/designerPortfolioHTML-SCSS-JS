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

/***/ 0:
/*!***************************************************************************************!*\
  !*** multi ./src/js/formValidaiton.js ./src/js/main.js ./src/js/skill.bars.jquery.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\Front-end projects\KristinaDžolić - Portfolio\src\js\formValidaiton.js */"./src/js/formValidaiton.js");
__webpack_require__(/*! D:\Front-end projects\KristinaDžolić - Portfolio\src\js\main.js */"./src/js/main.js");
module.exports = __webpack_require__(/*! D:\Front-end projects\KristinaDžolić - Portfolio\src\js\skill.bars.jquery.js */"./src/js/skill.bars.jquery.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zvcm1WYWxpZGFpdG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9za2lsbC5iYXJzLmpxdWVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMseUJBQXlCLDZCQUE2QixJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLGdDQUFnQyxHQUFHO0FBQ2xLO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdkZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2hHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDs7QUFFQSxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0Ly8gZm9ybSB2YWxpZGF0aW9uXHJcblx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWZvcm0nKTtcclxuXHRjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKTtcclxuXHRjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpO1xyXG5cdGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZScpO1xyXG5cdGNvbnN0IGZvcm1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1idG4nKTtcclxuXHJcblx0aWYgKGZvcm0pIHtcclxuXHRcdFtcclxuXHRcdFx0J2NsaWNrJyxcclxuXHRcdFx0J29udG91Y2hzdGFydCcsXHJcblx0XHRcdCdtb3VzZW92ZXInLFxyXG5cdFx0XHQna2V5ZG93bicsXHJcblx0XHRcdCdrZXlwcmVzcycsXHJcblx0XHRcdCd0b3VjaHN0YXJ0JyxcclxuXHRcdFx0J3RvdWNobW92ZScsXHJcblx0XHRdLmZvckVhY2goXHJcblx0XHRcdChldmVudCkgPT5cclxuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoY2hlY2tJbnB1dHMoKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0Zm9ybUJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRmb3JtQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGNoZWNrSW5wdXRzKCkge1xyXG5cdFx0XHRjb25zdCBuYW1lVmFsdWUgPSBuYW1lLnZhbHVlLnRyaW0oKTtcclxuXHRcdFx0Y29uc3QgZW1haWxWYWx1ZSA9IGVtYWlsLnZhbHVlLnRyaW0oKTtcclxuXHRcdFx0Y29uc3QgbWVzc2FnZVZhbHVlID0gbWVzc2FnZS52YWx1ZS50cmltKCk7XHJcblxyXG5cdFx0XHRpZiAobmFtZVZhbHVlID09PSAnJykge1xyXG5cdFx0XHRcdHNldEVycm9yRm9yKG5hbWUsICdQbGVhc2UgZW50ZXIgeW91ciBmdWxsIG5hbWUnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRTdWNjZXNzRm9yKG5hbWUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoZW1haWxWYWx1ZSA9PT0gJycpIHtcclxuXHRcdFx0XHRzZXRFcnJvckZvcihlbWFpbCwgJ1BsZWFzZSBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MnKTtcclxuXHRcdFx0fSBlbHNlIGlmICghZW1haWxJc1ZhbGlkKGVtYWlsVmFsdWUpKSB7XHJcblx0XHRcdFx0c2V0RXJyb3JGb3IoZW1haWwsICdFbWFpbCBpcyBub3QgdmFsaWQnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRTdWNjZXNzRm9yKGVtYWlsKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG1lc3NhZ2VWYWx1ZSA9PT0gJycpIHtcclxuXHRcdFx0XHRzZXRFcnJvckZvcihtZXNzYWdlLCAnUGxlYXNlIGVudGVyIHlvdXIgbWVzc2FnZScpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFN1Y2Nlc3NGb3IobWVzc2FnZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRuYW1lVmFsdWUgPT09ICcnIHx8XHJcblx0XHRcdFx0ZW1haWxWYWx1ZSA9PT0gJycgfHxcclxuXHRcdFx0XHRtZXNzYWdlVmFsdWUgPT09ICcnIHx8XHJcblx0XHRcdFx0IWVtYWlsSXNWYWxpZChlbWFpbFZhbHVlKVxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzZXRFcnJvckZvcihpbnB1dCwgbWVzc2FnZSkge1xyXG5cdFx0XHRjb25zdCBmb3JtID0gaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHRcdFx0Y29uc3Qgc21hbGwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ3NtYWxsJyk7XHJcblxyXG5cdFx0XHRzbWFsbC5pbm5lclRleHQgPSBtZXNzYWdlO1xyXG5cdFx0XHRmb3JtLmNsYXNzTmFtZSA9ICdmb3JtX19ncm91cCBlcnJvcic7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2V0U3VjY2Vzc0ZvcihpbnB1dCkge1xyXG5cdFx0XHRjb25zdCBmb3JtID0gaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHRcdFx0Zm9ybS5jbGFzc05hbWUgPSAnZm9ybV9fZ3JvdXAgc3VjY2Vzcyc7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZW1haWxJc1ZhbGlkKGVtYWlsKSB7XHJcblx0XHRcdGNvbnN0IHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8udGVzdChcclxuXHRcdFx0XHRlbWFpbFxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHJlO1xyXG5cdFx0fVxyXG5cdH1cclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZSkgPT4ge1xyXG5cdFx0Y29uc3QgcHJlbG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkJyk7XHJcblxyXG5cdFx0cHJlbG9hZC5jbGFzc0xpc3QuYWRkKCdwcmVsb2FkLWZpbmlzaGVkJyk7XHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IGJ0blNjcm9sbFRvVG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0blNjcm9sbFRvVG9wJyk7XHJcblxyXG5cdGlmIChidG5TY3JvbGxUb1RvcCkge1xyXG5cdFx0YnRuU2Nyb2xsVG9Ub3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oe1xyXG5cdFx0XHRcdHRvcDogMCxcclxuXHRcdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHRcdGJlaGF2aW9yOiAnc21vb3RoJyxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cdCQoJy5tZW51LWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdCQoJ25hdiB1bCcpLnRvZ2dsZUNsYXNzKCdzaG93aW5nJyk7XHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1idG4nKTtcclxuXHRsZXQgbWVudU9wZW4gPSBmYWxzZTtcclxuXHRtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0aWYgKCFtZW51T3Blbikge1xyXG5cdFx0XHRtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuXHRcdFx0bWVudU9wZW4gPSB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcblx0XHRcdG1lbnVPcGVuID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdC8vIHNraWxsIGJhciBBQk9VVCBQQUdFXHJcblx0JCgnLnNraWxsYmFyJykuc2tpbGxCYXJzKHtcclxuXHRcdC8vIG51bWJlciBzdGFydFxyXG5cdFx0ZnJvbTogMCxcclxuXHJcblx0XHQvLyBudW1iZXIgZW5kXHJcblx0XHR0bzogZmFsc2UsXHJcblxyXG5cdFx0Ly8gYW5pbWF0aW9uIHNwZWVkXHJcblx0XHRzcGVlZDogMzAwMCxcclxuXHJcblx0XHQvLyBob3cgb2Z0ZW4gdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHVwPGEgaHJlZj1cImh0dHBzOi8vd3d3LmpxdWVyeXNjcmlwdC5uZXQvdGltZS1jbG9jay9cIj5kYXRlPC9hPmRcclxuXHRcdGludGVydmFsOiAxMDAsXHJcblxyXG5cdFx0Ly8gdGhlIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyB0byBzaG93XHJcblx0XHRkZWNpbWFsczogMCxcclxuXHJcblx0XHQvLyBjYWxsYmFjayBtZXRob2QgZm9yIGV2ZXJ5IHRpbWUgdGhlIGVsZW1lbnQgaXMgdXBkYXRlZCxcclxuXHRcdG9uVXBkYXRlOiBudWxsLFxyXG5cclxuXHRcdC8vIGNhbGxiYWNrIG1ldGhvZCBmb3Igd2hlbiB0aGUgZWxlbWVudCBmaW5pc2hlcyB1cGRhdGluZ1xyXG5cdFx0b25Db21wbGV0ZTogbnVsbCxcclxuXHJcblx0XHQvLyBDU1MgY2xhc3Nlc1xyXG5cdFx0Y2xhc3Nlczoge1xyXG5cdFx0XHRza2lsbEJhckJhcjogJy5za2lsbGJhci1iYXInLFxyXG5cdFx0XHRza2lsbEJhclBlcmNlbnQ6ICcuc2tpbGwtYmFyLXBlcmNlbnQnLFxyXG5cdFx0fSxcclxuXHR9KTtcclxufSk7XHJcblxyXG4kKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuXHRpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpKSB7XHJcblx0XHQkKCcubmF2LXRvcCcpLmFkZENsYXNzKCduYXYtdG9wLS1zdGlja3knKTtcclxuXHRcdCQoJy5wb3J0Zm9saW8tbWVudV9fbGlzdCcpLmFkZENsYXNzKCdwb3J0Zm9saW8tbWVudV9fbGlzdC0tc3RpY2t5Jyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoJy5uYXYtdG9wJykucmVtb3ZlQ2xhc3MoJ25hdi10b3AtLXN0aWNreScpO1xyXG5cdFx0JCgnLnBvcnRmb2xpby1tZW51X19saXN0JykucmVtb3ZlQ2xhc3MoJ3BvcnRmb2xpby1tZW51X19saXN0LS1zdGlja3knKTtcclxuXHR9XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5uYXYgdWwgbGkgYScsIGZ1bmN0aW9uICgpIHtcclxuXHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxufSk7XHJcblxyXG4kKCcucG9ydGZvbGlvLWl0ZW0nKS5pc290b3BlKHtcclxuXHRpdGVtU2VsZWN0b3I6ICcuaXRlbScsXHJcblx0bGF5b3V0TW9kZTogJ2ZpdFJvd3MnLFxyXG59KTtcclxuXHJcbiQoJy5wb3J0Zm9saW8tbWVudSB1bCBsaScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHQkKCcucG9ydGZvbGlvLW1lbnUgdWwgbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG5cdHZhciBzZWxlY3RvciA9ICQodGhpcykuYXR0cignZGF0YS1maWx0ZXInKTtcclxuXHQkKCcucG9ydGZvbGlvLWl0ZW0nKS5pc290b3BlKHtcclxuXHRcdGZpbHRlcjogc2VsZWN0b3IsXHJcblx0fSk7XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59KTtcclxuIiwiLyohXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdW1hcndlYmRldmVsb3Blci9qcXVlcnktY3NzLXNraWxscy1iYXJcbiAqIEF1dGhvcjogQHVtYXJ3ZWJkZXZlbG9wZXJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG4gXG4oZnVuY3Rpb24gKCAkICkge1xuIFxuICAgICQuZm4uc2tpbGxCYXJzID0gZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG4gXG4gICAgICAgIHZhciBzZXR0aW5ncyA9ICQuZXh0ZW5kKHtcblx0XHRcdGZyb206IDAsICBcdFx0XHQvLyBudW1iZXIgc3RhcnRcblx0XHRcdHRvOiBmYWxzZSxcdFx0XHQvLyBudW1iZXIgZW5kXG5cdFx0XHRzcGVlZDogMTAwMCwgIFx0XHQvLyBob3cgbG9uZyBpdCBzaG91bGQgdGFrZSB0byBjb3VudCBiZXR3ZWVuIHRoZSB0YXJnZXQgbnVtYmVyc1xuXHRcdFx0aW50ZXJ2YWw6IDEwMCxcdCAgLy8gaG93IG9mdGVuIHRoZSBlbGVtZW50IHNob3VsZCBiZSB1cGRhdGVkXG5cdFx0XHRkZWNpbWFsczogMCxcdFx0ICAvLyB0aGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIHRvIHNob3dcblx0XHRcdG9uVXBkYXRlOiBudWxsLFx0ICAvLyBjYWxsYmFjayBtZXRob2QgZm9yIGV2ZXJ5IHRpbWUgdGhlIGVsZW1lbnQgaXMgdXBkYXRlZCxcblx0XHRcdG9uQ29tcGxldGU6IG51bGwsXHQgIC8vIGNhbGxiYWNrIG1ldGhvZCBmb3Igd2hlbiB0aGUgZWxlbWVudCBmaW5pc2hlcyB1cGRhdGluZ1xuXHRcdFx0LypvbkNvbXBsZXRlOiBmdW5jdGlvbihmcm9tKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1Zyh0aGlzKTtcbiAgICAgICAgICAgIH0qL1xuXHRcdFx0Y2xhc3Nlczp7XG5cdFx0XHRcdHNraWxsQmFyQmFyIDogJy5za2lsbGJhci1iYXInLFxuXHRcdFx0XHRza2lsbEJhclBlcmNlbnQgOiAnLnNraWxsLWJhci1wZXJjZW50Jyxcblx0XHRcdH1cbiAgICAgICAgfSwgb3B0aW9ucyApO1xuIFxuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0XHRcblx0XHRcdHZhciBvYmogPSAkKHRoaXMpLFxuXHRcdFx0XHR0byA9IChzZXR0aW5ncy50byAhPSBmYWxzZSkgPyBzZXR0aW5ncy50byA6IHBhcnNlSW50KG9iai5hdHRyKCdkYXRhLXBlcmNlbnQnKSk7XG5cdFx0XHRcdGlmKHRvID4gMTAwKXtcblx0XHRcdFx0XHR0byA9IDEwMDtcblx0XHRcdFx0fTtcblx0XHRcdHZhciBmcm9tID0gc2V0dGluZ3MuZnJvbSxcblx0XHRcdFx0bG9vcHMgPSBNYXRoLmNlaWwoc2V0dGluZ3Muc3BlZWQgLyBzZXR0aW5ncy5pbnRlcnZhbCksXG4gICAgICAgICAgICBcdGluY3JlbWVudCA9ICh0byAtIGZyb20pIC8gbG9vcHMsXG5cdFx0XHRcdGxvb3BDb3VudCA9IDAsXG5cdFx0XHRcdGludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlVmFsdWUsIHNldHRpbmdzLmludGVydmFsKTtcblx0XHRcdFxuXHRcdFx0b2JqLmZpbmQoc2V0dGluZ3MuY2xhc3Nlcy5za2lsbEJhckJhcikuYW5pbWF0ZSh7XG5cdFx0XHRcdHdpZHRoOiBwYXJzZUludChvYmouYXR0cignZGF0YS1wZXJjZW50JykpKyclJ1xuXHRcdFx0fSwgc2V0dGluZ3Muc3BlZWQpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRmdW5jdGlvbiB1cGRhdGVWYWx1ZSgpe1xuXHRcdFx0XHRmcm9tICs9IGluY3JlbWVudDtcbiAgICAgICAgICAgICAgICBsb29wQ291bnQrKztcbiAgICAgICAgICAgICAgICAkKG9iaikuZmluZChzZXR0aW5ncy5jbGFzc2VzLnNraWxsQmFyUGVyY2VudCkudGV4dChmcm9tLnRvRml4ZWQoc2V0dGluZ3MuZGVjaW1hbHMpKyclJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mKHNldHRpbmdzLm9uVXBkYXRlKSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLm9uVXBkYXRlLmNhbGwob2JqLCBmcm9tKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobG9vcENvdW50ID49IGxvb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICBmcm9tID0gdG87XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZihzZXR0aW5ncy5vbkNvbXBsZXRlKSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5vbkNvbXBsZXRlLmNhbGwob2JqLCBmcm9tKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblx0XHRcdH1cblx0XHRcdFxuICAgICAgICB9KTtcbiBcbiAgICB9O1xuIFxufSggalF1ZXJ5ICkpO1xuIl0sInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OWliMjkwYzNSeVlYQWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMnB6TDJadmNtMVdZV3hwWkdGcGRHOXVMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5cWN5OXRZV2x1TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OXFjeTl6YTJsc2JDNWlZWEp6TG1weGRXVnllUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzFGQlFVRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN096dFJRVWRCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHM3VVVGRlFUdFJRVU5CTzFGQlEwRTdVVUZEUVN3d1EwRkJNRU1zWjBOQlFXZERPMUZCUXpGRk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFc2QwUkJRWGRFTEd0Q1FVRnJRanRSUVVNeFJUdFJRVU5CTEdsRVFVRnBSQ3hqUVVGak8xRkJReTlFT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3g1UTBGQmVVTXNhVU5CUVdsRE8xRkJRekZGTEdkSVFVRm5TQ3h0UWtGQmJVSXNSVUZCUlR0UlFVTnlTVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdVVUZEUVR0UlFVTkJMREpDUVVFeVFpd3dRa0ZCTUVJc1JVRkJSVHRSUVVOMlJDeHBRMEZCYVVNc1pVRkJaVHRSUVVOb1JEdFJRVU5CTzFGQlEwRTdPMUZCUlVFN1VVRkRRU3h6UkVGQmMwUXNLMFJCUVN0RU96dFJRVVZ5U0R0UlFVTkJPenM3VVVGSFFUdFJRVU5CT3pzN096czdPenM3T3pzN1FVTnNSa0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRTFCUVUwN1FVRkRUanRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRWxCUVVrN1FVRkRTanRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4SlFVRkpPMEZCUTBvN1FVRkRRU3hKUVVGSk8wRkJRMG83UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1NVRkJTVHRCUVVOS08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEpRVUZKTzBGQlEwbzdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hwUTBGQmFVTXNlVUpCUVhsQ0xEWkNRVUUyUWl4SlFVRkpMRkZCUVZFc1NVRkJTU3hSUVVGUkxFbEJRVWtzVVVGQlVTeEpRVUZKTEdkRFFVRm5ReXhIUVVGSE8wRkJRMnhMTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUTBGQlF6czdPenM3T3pzN096czdPMEZEZGtaRU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRVZCUVVVN08wRkJSVVk3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzU1VGQlNUdEJRVU5LTEVkQlFVYzdRVUZEU0R0QlFVTkJMRU5CUVVNN08wRkJSVVE3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlRzN1FVRkZSanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0N4RlFVRkZPMEZCUTBZc1EwRkJRenM3UVVGRlJEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRVZCUVVVN1FVRkRSanRCUVVOQk8wRkJRMEU3UVVGRFFTeERRVUZET3p0QlFVVkVPMEZCUTBFN1FVRkRRU3hEUVVGRE96dEJRVVZFTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN08wRkJSVVE3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFVkJRVVU3UVVGRFJqdEJRVU5CTEVOQlFVTTdPenM3T3pzN096czdPenRCUTJoSFJEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1lVRkJZVHRCUVVOaU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXpzN1FVRkZWRHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1NVRkJTVHM3UVVGRlNqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc1UwRkJVenM3UVVGRlZEczdRVUZGUVN4RFFVRkRJaXdpWm1sc1pTSTZJbVpoT1RWalpUTmlNVEEyWVdVMk5HVmxZbU00TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lJRngwTHk4Z1ZHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBkbUZ5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE1nUFNCN2ZUdGNibHh1SUZ4MEx5OGdWR2hsSUhKbGNYVnBjbVVnWm5WdVkzUnBiMjVjYmlCY2RHWjFibU4wYVc5dUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9iVzlrZFd4bFNXUXBJSHRjYmx4dUlGeDBYSFF2THlCRGFHVmpheUJwWmlCdGIyUjFiR1VnYVhNZ2FXNGdZMkZqYUdWY2JpQmNkRngwYVdZb2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwcElIdGNiaUJjZEZ4MFhIUnlaWFIxY200Z2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVpYaHdiM0owY3p0Y2JpQmNkRngwZlZ4dUlGeDBYSFF2THlCRGNtVmhkR1VnWVNCdVpYY2diVzlrZFd4bElDaGhibVFnY0hWMElHbDBJR2x1ZEc4Z2RHaGxJR05oWTJobEtWeHVJRngwWEhSMllYSWdiVzlrZFd4bElEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMGdQU0I3WEc0Z1hIUmNkRngwYVRvZ2JXOWtkV3hsU1dRc1hHNGdYSFJjZEZ4MGJEb2dabUZzYzJVc1hHNGdYSFJjZEZ4MFpYaHdiM0owY3pvZ2UzMWNiaUJjZEZ4MGZUdGNibHh1SUZ4MFhIUXZMeUJGZUdWamRYUmxJSFJvWlNCdGIyUjFiR1VnWm5WdVkzUnBiMjVjYmlCY2RGeDBiVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVZMkZzYkNodGIyUjFiR1V1Wlhod2IzSjBjeXdnYlc5a2RXeGxMQ0J0YjJSMWJHVXVaWGh3YjNKMGN5d2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWs3WEc1Y2JpQmNkRngwTHk4Z1JteGhaeUIwYUdVZ2JXOWtkV3hsSUdGeklHeHZZV1JsWkZ4dUlGeDBYSFJ0YjJSMWJHVXViQ0E5SUhSeWRXVTdYRzVjYmlCY2RGeDBMeThnVW1WMGRYSnVJSFJvWlNCbGVIQnZjblJ6SUc5bUlIUm9aU0J0YjJSMWJHVmNiaUJjZEZ4MGNtVjBkWEp1SUcxdlpIVnNaUzVsZUhCdmNuUnpPMXh1SUZ4MGZWeHVYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxjeUJ2WW1wbFkzUWdLRjlmZDJWaWNHRmphMTl0YjJSMWJHVnpYMThwWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTBnUFNCdGIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWpJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjenRjYmx4dUlGeDBMeThnWkdWbWFXNWxJR2RsZEhSbGNpQm1kVzVqZEdsdmJpQm1iM0lnYUdGeWJXOXVlU0JsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpMQ0J1WVcxbExDQm5aWFIwWlhJcElIdGNiaUJjZEZ4MGFXWW9JVjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlobGVIQnZjblJ6TENCdVlXMWxLU2tnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQnVZVzFsTENCN0lHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc0lHZGxkRG9nWjJWMGRHVnlJSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdYMTlsYzAxdlpIVnNaU0J2YmlCbGVIQnZjblJ6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbklnUFNCbWRXNWpkR2x2YmlobGVIQnZjblJ6S1NCN1hHNGdYSFJjZEdsbUtIUjVjR1Z2WmlCVGVXMWliMndnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUZONWJXSnZiQzUwYjFOMGNtbHVaMVJoWnlrZ2UxeHVJRngwWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0JUZVcxaWIyd3VkRzlUZEhKcGJtZFVZV2NzSUhzZ2RtRnNkV1U2SUNkTmIyUjFiR1VuSUgwcE8xeHVJRngwWEhSOVhHNGdYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQW5YMTlsYzAxdlpIVnNaU2NzSUhzZ2RtRnNkV1U2SUhSeWRXVWdmU2s3WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJqY21WaGRHVWdZU0JtWVd0bElHNWhiV1Z6Y0dGalpTQnZZbXBsWTNSY2JpQmNkQzh2SUcxdlpHVWdKaUF4T2lCMllXeDFaU0JwY3lCaElHMXZaSFZzWlNCcFpDd2djbVZ4ZFdseVpTQnBkRnh1SUZ4MEx5OGdiVzlrWlNBbUlESTZJRzFsY21kbElHRnNiQ0J3Y205d1pYSjBhV1Z6SUc5bUlIWmhiSFZsSUdsdWRHOGdkR2hsSUc1elhHNGdYSFF2THlCdGIyUmxJQ1lnTkRvZ2NtVjBkWEp1SUhaaGJIVmxJSGRvWlc0Z1lXeHlaV0ZrZVNCdWN5QnZZbXBsWTNSY2JpQmNkQzh2SUcxdlpHVWdKaUE0ZkRFNklHSmxhR0YyWlNCc2FXdGxJSEpsY1hWcGNtVmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWRDQTlJR1oxYm1OMGFXOXVLSFpoYkhWbExDQnRiMlJsS1NCN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBeEtTQjJZV3gxWlNBOUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9kbUZzZFdVcE8xeHVJRngwWEhScFppaHRiMlJsSUNZZ09Da2djbVYwZFhKdUlIWmhiSFZsTzF4dUlGeDBYSFJwWmlnb2JXOWtaU0FtSURRcElDWW1JSFI1Y0dWdlppQjJZV3gxWlNBOVBUMGdKMjlpYW1WamRDY2dKaVlnZG1Gc2RXVWdKaVlnZG1Gc2RXVXVYMTlsYzAxdlpIVnNaU2tnY21WMGRYSnVJSFpoYkhWbE8xeHVJRngwWEhSMllYSWdibk1nUFNCUFltcGxZM1F1WTNKbFlYUmxLRzUxYkd3cE8xeHVJRngwWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuSW9ibk1wTzF4dUlGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb2JuTXNJQ2RrWldaaGRXeDBKeXdnZXlCbGJuVnRaWEpoWW14bE9pQjBjblZsTENCMllXeDFaVG9nZG1Gc2RXVWdmU2s3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUF5SUNZbUlIUjVjR1Z2WmlCMllXeDFaU0FoUFNBbmMzUnlhVzVuSnlrZ1ptOXlLSFpoY2lCclpYa2dhVzRnZG1Gc2RXVXBJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNodWN5d2dhMlY1TENCbWRXNWpkR2x2YmloclpYa3BJSHNnY21WMGRYSnVJSFpoYkhWbFcydGxlVjA3SUgwdVltbHVaQ2h1ZFd4c0xDQnJaWGtwS1R0Y2JpQmNkRngwY21WMGRYSnVJRzV6TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnWjJWMFJHVm1ZWFZzZEVWNGNHOXlkQ0JtZFc1amRHbHZiaUJtYjNJZ1kyOXRjR0YwYVdKcGJHbDBlU0IzYVhSb0lHNXZiaTFvWVhKdGIyNTVJRzF2WkhWc1pYTmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJpQTlJR1oxYm1OMGFXOXVLRzF2WkhWc1pTa2dlMXh1SUZ4MFhIUjJZWElnWjJWMGRHVnlJRDBnYlc5a2RXeGxJQ1ltSUcxdlpIVnNaUzVmWDJWelRXOWtkV3hsSUQ5Y2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUkVaV1poZFd4MEtDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bFd5ZGtaV1poZFd4MEoxMDdJSDBnT2x4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFMXZaSFZzWlVWNGNHOXlkSE1vS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1U3SUgwN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDaG5aWFIwWlhJc0lDZGhKeXdnWjJWMGRHVnlLVHRjYmlCY2RGeDBjbVYwZFhKdUlHZGxkSFJsY2p0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2SUQwZ1puVnVZM1JwYjI0b2IySnFaV04wTENCd2NtOXdaWEowZVNrZ2V5QnlaWFIxY200Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcE95QjlPMXh1WEc0Z1hIUXZMeUJmWDNkbFluQmhZMnRmY0hWaWJHbGpYM0JoZEdoZlgxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1d0lEMGdYQ0pjSWp0Y2JseHVYRzRnWEhRdkx5Qk1iMkZrSUdWdWRISjVJRzF2WkhWc1pTQmhibVFnY21WMGRYSnVJR1Y0Y0c5eWRITmNiaUJjZEhKbGRIVnliaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0Y5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWN5QTlJREFwTzF4dUlpd2laRzlqZFcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25SRTlOUTI5dWRHVnVkRXh2WVdSbFpDY3NJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSFF2THlCbWIzSnRJSFpoYkdsa1lYUnBiMjVjY2x4dVhIUmpiMjV6ZENCbWIzSnRJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMk52Ym5SaFkzUXRabTl5YlNjcE8xeHlYRzVjZEdOdmJuTjBJRzVoYldVZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnbmJtRnRaU2NwTzF4eVhHNWNkR052Ym5OMElHVnRZV2xzSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjJWdFlXbHNKeWs3WEhKY2JseDBZMjl1YzNRZ2JXVnpjMkZuWlNBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkdFpYTnpZV2RsSnlrN1hISmNibHgwWTI5dWMzUWdabTl5YlVKMGJpQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZG1iM0p0TFdKMGJpY3BPMXh5WEc1Y2NseHVYSFJwWmlBb1ptOXliU2tnZTF4eVhHNWNkRngwVzF4eVhHNWNkRngwWEhRblkyeHBZMnNuTEZ4eVhHNWNkRngwWEhRbmIyNTBiM1ZqYUhOMFlYSjBKeXhjY2x4dVhIUmNkRngwSjIxdmRYTmxiM1psY2ljc1hISmNibHgwWEhSY2RDZHJaWGxrYjNkdUp5eGNjbHh1WEhSY2RGeDBKMnRsZVhCeVpYTnpKeXhjY2x4dVhIUmNkRngwSjNSdmRXTm9jM1JoY25RbkxGeHlYRzVjZEZ4MFhIUW5kRzkxWTJodGIzWmxKeXhjY2x4dVhIUmNkRjB1Wm05eVJXRmphQ2hjY2x4dVhIUmNkRngwS0dWMlpXNTBLU0E5UGx4eVhHNWNkRngwWEhSY2RHUnZZM1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb1pYWmxiblFzSUNncElEMCtJSHRjY2x4dVhIUmNkRngwWEhSY2RHbG1JQ2hqYUdWamEwbHVjSFYwY3lncElEMDlQU0JtWVd4elpTa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUm1iM0p0UW5SdUxtUnBjMkZpYkdWa0lEMGdkSEoxWlR0Y2NseHVYSFJjZEZ4MFhIUmNkSDBnWld4elpTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RHWnZjbTFDZEc0dVpHbHpZV0pzWldRZ1BTQm1ZV3h6WlR0Y2NseHVYSFJjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwWEhSOUtTeGNjbHh1WEhSY2RGeDBabUZzYzJWY2NseHVYSFJjZENrN1hISmNibHh5WEc1Y2RGeDBablZ1WTNScGIyNGdZMmhsWTJ0SmJuQjFkSE1vS1NCN1hISmNibHgwWEhSY2RHTnZibk4wSUc1aGJXVldZV3gxWlNBOUlHNWhiV1V1ZG1Gc2RXVXVkSEpwYlNncE8xeHlYRzVjZEZ4MFhIUmpiMjV6ZENCbGJXRnBiRlpoYkhWbElEMGdaVzFoYVd3dWRtRnNkV1V1ZEhKcGJTZ3BPMXh5WEc1Y2RGeDBYSFJqYjI1emRDQnRaWE56WVdkbFZtRnNkV1VnUFNCdFpYTnpZV2RsTG5aaGJIVmxMblJ5YVcwb0tUdGNjbHh1WEhKY2JseDBYSFJjZEdsbUlDaHVZVzFsVm1Gc2RXVWdQVDA5SUNjbktTQjdYSEpjYmx4MFhIUmNkRngwYzJWMFJYSnliM0pHYjNJb2JtRnRaU3dnSjFCc1pXRnpaU0JsYm5SbGNpQjViM1Z5SUdaMWJHd2dibUZ0WlNjcE8xeHlYRzVjZEZ4MFhIUjlJR1ZzYzJVZ2UxeHlYRzVjZEZ4MFhIUmNkSE5sZEZOMVkyTmxjM05HYjNJb2JtRnRaU2s3WEhKY2JseDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkR2xtSUNobGJXRnBiRlpoYkhWbElEMDlQU0FuSnlrZ2UxeHlYRzVjZEZ4MFhIUmNkSE5sZEVWeWNtOXlSbTl5S0dWdFlXbHNMQ0FuVUd4bFlYTmxJR1Z1ZEdWeUlIbHZkWElnWlcxaGFXd2dZV1JrY21WemN5Y3BPMXh5WEc1Y2RGeDBYSFI5SUdWc2MyVWdhV1lnS0NGbGJXRnBiRWx6Vm1Gc2FXUW9aVzFoYVd4V1lXeDFaU2twSUh0Y2NseHVYSFJjZEZ4MFhIUnpaWFJGY25KdmNrWnZjaWhsYldGcGJDd2dKMFZ0WVdsc0lHbHpJRzV2ZENCMllXeHBaQ2NwTzF4eVhHNWNkRngwWEhSOUlHVnNjMlVnZTF4eVhHNWNkRngwWEhSY2RITmxkRk4xWTJObGMzTkdiM0lvWlcxaGFXd3BPMXh5WEc1Y2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUnBaaUFvYldWemMyRm5aVlpoYkhWbElEMDlQU0FuSnlrZ2UxeHlYRzVjZEZ4MFhIUmNkSE5sZEVWeWNtOXlSbTl5S0cxbGMzTmhaMlVzSUNkUWJHVmhjMlVnWlc1MFpYSWdlVzkxY2lCdFpYTnpZV2RsSnlrN1hISmNibHgwWEhSY2RIMGdaV3h6WlNCN1hISmNibHgwWEhSY2RGeDBjMlYwVTNWalkyVnpjMFp2Y2lodFpYTnpZV2RsS1R0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwYVdZZ0tGeHlYRzVjZEZ4MFhIUmNkRzVoYldWV1lXeDFaU0E5UFQwZ0p5Y2dmSHhjY2x4dVhIUmNkRngwWEhSbGJXRnBiRlpoYkhWbElEMDlQU0FuSnlCOGZGeHlYRzVjZEZ4MFhIUmNkRzFsYzNOaFoyVldZV3gxWlNBOVBUMGdKeWNnZkh4Y2NseHVYSFJjZEZ4MFhIUWhaVzFoYVd4SmMxWmhiR2xrS0dWdFlXbHNWbUZzZFdVcFhISmNibHgwWEhSY2RDa2dlMXh5WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUJtWVd4elpUdGNjbHh1WEhSY2RGeDBmU0JsYkhObElIdGNjbHh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdkSEoxWlR0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkR1oxYm1OMGFXOXVJSE5sZEVWeWNtOXlSbTl5S0dsdWNIVjBMQ0J0WlhOellXZGxLU0I3WEhKY2JseDBYSFJjZEdOdmJuTjBJR1p2Y20wZ1BTQnBibkIxZEM1d1lYSmxiblJGYkdWdFpXNTBPMXh5WEc1Y2RGeDBYSFJqYjI1emRDQnpiV0ZzYkNBOUlHWnZjbTB1Y1hWbGNubFRaV3hsWTNSdmNpZ25jMjFoYkd3bktUdGNjbHh1WEhKY2JseDBYSFJjZEhOdFlXeHNMbWx1Ym1WeVZHVjRkQ0E5SUcxbGMzTmhaMlU3WEhKY2JseDBYSFJjZEdadmNtMHVZMnhoYzNOT1lXMWxJRDBnSjJadmNtMWZYMmR5YjNWd0lHVnljbTl5Snp0Y2NseHVYSFJjZEgxY2NseHVYSEpjYmx4MFhIUm1kVzVqZEdsdmJpQnpaWFJUZFdOalpYTnpSbTl5S0dsdWNIVjBLU0I3WEhKY2JseDBYSFJjZEdOdmJuTjBJR1p2Y20wZ1BTQnBibkIxZEM1d1lYSmxiblJGYkdWdFpXNTBPMXh5WEc1Y2RGeDBYSFJtYjNKdExtTnNZWE56VG1GdFpTQTlJQ2RtYjNKdFgxOW5jbTkxY0NCemRXTmpaWE56Snp0Y2NseHVYSFJjZEgxY2NseHVYSEpjYmx4MFhIUm1kVzVqZEdsdmJpQmxiV0ZwYkVselZtRnNhV1FvWlcxaGFXd3BJSHRjY2x4dVhIUmNkRngwWTI5dWMzUWdjbVVnUFNBdlhpZ29XMTQ4UGlncFhGeGJYRnhkWEZ4Y1hDNHNPenBjWEhOQVhDSmRLeWhjWEM1YlhqdytLQ2xjWEZ0Y1hGMWNYRnhjTGl3N09seGNjMEJjSWwwcktTb3BmQ2hjSWk0clhDSXBLVUFvS0Z4Y1cxc3dMVGxkZXpFc00zMWNYQzViTUMwNVhYc3hMRE45WEZ3dVd6QXRPVjE3TVN3emZWeGNMbHN3TFRsZGV6RXNNMzFkS1h3b0tGdGhMWHBCTFZwY1hDMHdMVGxkSzF4Y0xpa3JXMkV0ZWtFdFdsMTdNaXg5S1Nra0x5NTBaWE4wS0Z4eVhHNWNkRngwWEhSY2RHVnRZV2xzWEhKY2JseDBYSFJjZENrN1hISmNibHh5WEc1Y2RGeDBYSFJ5WlhSMWNtNGdjbVU3WEhKY2JseDBYSFI5WEhKY2JseDBmVnh5WEc1OUtUdGNjbHh1SWl3aVpHOWpkVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblJFOU5RMjl1ZEdWdWRFeHZZV1JsWkNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhIUjNhVzVrYjNjdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnbmJHOWhaQ2NzSUNobEtTQTlQaUI3WEhKY2JseDBYSFJqYjI1emRDQndjbVZzYjJGa0lEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxuQnlaV3h2WVdRbktUdGNjbHh1WEhKY2JseDBYSFJ3Y21Wc2IyRmtMbU5zWVhOelRHbHpkQzVoWkdRb0ozQnlaV3h2WVdRdFptbHVhWE5vWldRbktUdGNjbHh1WEhSOUtUdGNjbHh1WEhKY2JseDBZMjl1YzNRZ1luUnVVMk55YjJ4c1ZHOVViM0FnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duWW5SdVUyTnliMnhzVkc5VWIzQW5LVHRjY2x4dVhISmNibHgwYVdZZ0tHSjBibE5qY205c2JGUnZWRzl3S1NCN1hISmNibHgwWEhSaWRHNVRZM0p2Ykd4VWIxUnZjQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJQ2hsS1NBOVBpQjdYSEpjYmx4MFhIUmNkSGRwYm1SdmR5NXpZM0p2Ykd4VWJ5aDdYSEpjYmx4MFhIUmNkRngwZEc5d09pQXdMRnh5WEc1Y2RGeDBYSFJjZEd4bFpuUTZJREFzWEhKY2JseDBYSFJjZEZ4MFltVm9ZWFpwYjNJNklDZHpiVzl2ZEdnbkxGeHlYRzVjZEZ4MFhIUjlLVHRjY2x4dVhIUmNkSDBwTzF4eVhHNWNkSDFjY2x4dWZTazdYSEpjYmx4eVhHNGtLR1J2WTNWdFpXNTBLUzV5WldGa2VTaG1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseDBKQ2duTG0xbGJuVXRZblJ1SnlrdWIyNG9KMk5zYVdOckp5d2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNkRngwSkNnbmJtRjJJSFZzSnlrdWRHOW5aMnhsUTJ4aGMzTW9KM05vYjNkcGJtY25LVHRjY2x4dVhIUjlLVHRjY2x4dVhISmNibHgwWTI5dWMzUWdiV1Z1ZFVKMGJpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NXRaVzUxTFdKMGJpY3BPMXh5WEc1Y2RHeGxkQ0J0Wlc1MVQzQmxiaUE5SUdaaGJITmxPMXh5WEc1Y2RHMWxiblZDZEc0dVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENBb0tTQTlQaUI3WEhKY2JseDBYSFJwWmlBb0lXMWxiblZQY0dWdUtTQjdYSEpjYmx4MFhIUmNkRzFsYm5WQ2RHNHVZMnhoYzNOTWFYTjBMbUZrWkNnbmIzQmxiaWNwTzF4eVhHNWNkRngwWEhSdFpXNTFUM0JsYmlBOUlIUnlkV1U3WEhKY2JseDBYSFI5SUdWc2MyVWdlMXh5WEc1Y2RGeDBYSFJ0Wlc1MVFuUnVMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9KMjl3Wlc0bktUdGNjbHh1WEhSY2RGeDBiV1Z1ZFU5d1pXNGdQU0JtWVd4elpUdGNjbHh1WEhSY2RIMWNjbHh1WEhSOUtUdGNjbHh1WEhKY2JseDBMeThnYzJ0cGJHd2dZbUZ5SUVGQ1QxVlVJRkJCUjBWY2NseHVYSFFrS0NjdWMydHBiR3hpWVhJbktTNXphMmxzYkVKaGNuTW9lMXh5WEc1Y2RGeDBMeThnYm5WdFltVnlJSE4wWVhKMFhISmNibHgwWEhSbWNtOXRPaUF3TEZ4eVhHNWNjbHh1WEhSY2RDOHZJRzUxYldKbGNpQmxibVJjY2x4dVhIUmNkSFJ2T2lCbVlXeHpaU3hjY2x4dVhISmNibHgwWEhRdkx5QmhibWx0WVhScGIyNGdjM0JsWldSY2NseHVYSFJjZEhOd1pXVmtPaUF6TURBd0xGeHlYRzVjY2x4dVhIUmNkQzh2SUdodmR5QnZablJsYmlCMGFHVWdaV3hsYldWdWRDQnphRzkxYkdRZ1ltVWdkWEE4WVNCb2NtVm1QVndpYUhSMGNITTZMeTkzZDNjdWFuRjFaWEo1YzJOeWFYQjBMbTVsZEM5MGFXMWxMV05zYjJOckwxd2lQbVJoZEdVOEwyRStaRnh5WEc1Y2RGeDBhVzUwWlhKMllXdzZJREV3TUN4Y2NseHVYSEpjYmx4MFhIUXZMeUIwYUdVZ2JuVnRZbVZ5SUc5bUlHUmxZMmx0WVd3Z2NHeGhZMlZ6SUhSdklITm9iM2RjY2x4dVhIUmNkR1JsWTJsdFlXeHpPaUF3TEZ4eVhHNWNjbHh1WEhSY2RDOHZJR05oYkd4aVlXTnJJRzFsZEdodlpDQm1iM0lnWlhabGNua2dkR2x0WlNCMGFHVWdaV3hsYldWdWRDQnBjeUIxY0dSaGRHVmtMRnh5WEc1Y2RGeDBiMjVWY0dSaGRHVTZJRzUxYkd3c1hISmNibHh5WEc1Y2RGeDBMeThnWTJGc2JHSmhZMnNnYldWMGFHOWtJR1p2Y2lCM2FHVnVJSFJvWlNCbGJHVnRaVzUwSUdacGJtbHphR1Z6SUhWd1pHRjBhVzVuWEhKY2JseDBYSFJ2YmtOdmJYQnNaWFJsT2lCdWRXeHNMRnh5WEc1Y2NseHVYSFJjZEM4dklFTlRVeUJqYkdGemMyVnpYSEpjYmx4MFhIUmpiR0Z6YzJWek9pQjdYSEpjYmx4MFhIUmNkSE5yYVd4c1FtRnlRbUZ5T2lBbkxuTnJhV3hzWW1GeUxXSmhjaWNzWEhKY2JseDBYSFJjZEhOcmFXeHNRbUZ5VUdWeVkyVnVkRG9nSnk1emEybHNiQzFpWVhJdGNHVnlZMlZ1ZENjc1hISmNibHgwWEhSOUxGeHlYRzVjZEgwcE8xeHlYRzU5S1R0Y2NseHVYSEpjYmlRb2QybHVaRzkzS1M1dmJpZ25jMk55YjJ4c0p5d2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNkR2xtSUNna0tIZHBibVJ2ZHlrdWMyTnliMnhzVkc5d0tDa3BJSHRjY2x4dVhIUmNkQ1FvSnk1dVlYWXRkRzl3SnlrdVlXUmtRMnhoYzNNb0oyNWhkaTEwYjNBdExYTjBhV05yZVNjcE8xeHlYRzVjZEZ4MEpDZ25MbkJ2Y25SbWIyeHBieTF0Wlc1MVgxOXNhWE4wSnlrdVlXUmtRMnhoYzNNb0ozQnZjblJtYjJ4cGJ5MXRaVzUxWDE5c2FYTjBMUzF6ZEdsamEza25LVHRjY2x4dVhIUjlJR1ZzYzJVZ2UxeHlYRzVjZEZ4MEpDZ25MbTVoZGkxMGIzQW5LUzV5WlcxdmRtVkRiR0Z6Y3lnbmJtRjJMWFJ2Y0MwdGMzUnBZMnQ1SnlrN1hISmNibHgwWEhRa0tDY3VjRzl5ZEdadmJHbHZMVzFsYm5WZlgyeHBjM1FuS1M1eVpXMXZkbVZEYkdGemN5Z25jRzl5ZEdadmJHbHZMVzFsYm5WZlgyeHBjM1F0TFhOMGFXTnJlU2NwTzF4eVhHNWNkSDFjY2x4dWZTazdYSEpjYmx4eVhHNGtLR1J2WTNWdFpXNTBLUzV2YmlnblkyeHBZMnNuTENBbkxtNWhkaUIxYkNCc2FTQmhKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjZENRb2RHaHBjeWt1WVdSa1EyeGhjM01vSjJGamRHbDJaU2NwTG5OcFlteHBibWR6S0NrdWNtVnRiM1psUTJ4aGMzTW9KMkZqZEdsMlpTY3BPMXh5WEc1OUtUdGNjbHh1WEhKY2JpUW9KeTV3YjNKMFptOXNhVzh0YVhSbGJTY3BMbWx6YjNSdmNHVW9lMXh5WEc1Y2RHbDBaVzFUWld4bFkzUnZjam9nSnk1cGRHVnRKeXhjY2x4dVhIUnNZWGx2ZFhSTmIyUmxPaUFuWm1sMFVtOTNjeWNzWEhKY2JuMHBPMXh5WEc1Y2NseHVKQ2duTG5CdmNuUm1iMnhwYnkxdFpXNTFJSFZzSUd4cEp5a3VZMnhwWTJzb1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2RDUW9KeTV3YjNKMFptOXNhVzh0YldWdWRTQjFiQ0JzYVNjcExuSmxiVzkyWlVOc1lYTnpLQ2RoWTNScGRtVW5LVHRjY2x4dVhIUWtLSFJvYVhNcExtRmtaRU5zWVhOektDZGhZM1JwZG1VbktUdGNjbHh1WEhKY2JseDBkbUZ5SUhObGJHVmpkRzl5SUQwZ0pDaDBhR2x6S1M1aGRIUnlLQ2RrWVhSaExXWnBiSFJsY2ljcE8xeHlYRzVjZENRb0p5NXdiM0owWm05c2FXOHRhWFJsYlNjcExtbHpiM1J2Y0dVb2UxeHlYRzVjZEZ4MFptbHNkR1Z5T2lCelpXeGxZM1J2Y2l4Y2NseHVYSFI5S1R0Y2NseHVYSFJ5WlhSMWNtNGdabUZzYzJVN1hISmNibjBwTzF4eVhHNGlMQ0l2S2lGY2JpQXFJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzkxYldGeWQyVmlaR1YyWld4dmNHVnlMMnB4ZFdWeWVTMWpjM010YzJ0cGJHeHpMV0poY2x4dUlDb2dRWFYwYUc5eU9pQkFkVzFoY25kbFltUmxkbVZzYjNCbGNseHVJQ29nVEdsalpXNXpaV1FnZFc1a1pYSWdkR2hsSUUxSlZDQnNhV05sYm5ObFhHNGdLaTljYmlCY2JpaG1kVzVqZEdsdmJpQW9JQ1FnS1NCN1hHNGdYRzRnSUNBZ0pDNW1iaTV6YTJsc2JFSmhjbk1nUFNCbWRXNWpkR2x2YmlnZ2IzQjBhVzl1Y3lBcElIdGNiaUJjYmlBZ0lDQWdJQ0FnZG1GeUlITmxkSFJwYm1keklEMGdKQzVsZUhSbGJtUW9lMXh1WEhSY2RGeDBabkp2YlRvZ01Dd2dJRngwWEhSY2RDOHZJRzUxYldKbGNpQnpkR0Z5ZEZ4dVhIUmNkRngwZEc4NklHWmhiSE5sTEZ4MFhIUmNkQzh2SUc1MWJXSmxjaUJsYm1SY2JseDBYSFJjZEhOd1pXVmtPaUF4TURBd0xDQWdYSFJjZEM4dklHaHZkeUJzYjI1bklHbDBJSE5vYjNWc1pDQjBZV3RsSUhSdklHTnZkVzUwSUdKbGRIZGxaVzRnZEdobElIUmhjbWRsZENCdWRXMWlaWEp6WEc1Y2RGeDBYSFJwYm5SbGNuWmhiRG9nTVRBd0xGeDBJQ0F2THlCb2IzY2diMlowWlc0Z2RHaGxJR1ZzWlcxbGJuUWdjMmh2ZFd4a0lHSmxJSFZ3WkdGMFpXUmNibHgwWEhSY2RHUmxZMmx0WVd4ek9pQXdMRngwWEhRZ0lDOHZJSFJvWlNCdWRXMWlaWElnYjJZZ1pHVmphVzFoYkNCd2JHRmpaWE1nZEc4Z2MyaHZkMXh1WEhSY2RGeDBiMjVWY0dSaGRHVTZJRzUxYkd3c1hIUWdJQzh2SUdOaGJHeGlZV05ySUcxbGRHaHZaQ0JtYjNJZ1pYWmxjbmtnZEdsdFpTQjBhR1VnWld4bGJXVnVkQ0JwY3lCMWNHUmhkR1ZrTEZ4dVhIUmNkRngwYjI1RGIyMXdiR1YwWlRvZ2JuVnNiQ3hjZENBZ0x5OGdZMkZzYkdKaFkyc2diV1YwYUc5a0lHWnZjaUIzYUdWdUlIUm9aU0JsYkdWdFpXNTBJR1pwYm1semFHVnpJSFZ3WkdGMGFXNW5YRzVjZEZ4MFhIUXZLbTl1UTI5dGNHeGxkR1U2SUdaMWJtTjBhVzl1S0daeWIyMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emIyeGxMbVJsWW5WbktIUm9hWE1wTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU292WEc1Y2RGeDBYSFJqYkdGemMyVnpPbnRjYmx4MFhIUmNkRngwYzJ0cGJHeENZWEpDWVhJZ09pQW5Mbk5yYVd4c1ltRnlMV0poY2ljc1hHNWNkRngwWEhSY2RITnJhV3hzUW1GeVVHVnlZMlZ1ZENBNklDY3VjMnRwYkd3dFltRnlMWEJsY21ObGJuUW5MRnh1WEhSY2RGeDBmVnh1SUNBZ0lDQWdJQ0I5TENCdmNIUnBiMjV6SUNrN1hHNGdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG1WaFkyZ29ablZ1WTNScGIyNG9LWHRjYmx4MFhIUmNkRnh1WEhSY2RGeDBkbUZ5SUc5aWFpQTlJQ1FvZEdocGN5a3NYRzVjZEZ4MFhIUmNkSFJ2SUQwZ0tITmxkSFJwYm1kekxuUnZJQ0U5SUdaaGJITmxLU0EvSUhObGRIUnBibWR6TG5SdklEb2djR0Z5YzJWSmJuUW9iMkpxTG1GMGRISW9KMlJoZEdFdGNHVnlZMlZ1ZENjcEtUdGNibHgwWEhSY2RGeDBhV1lvZEc4Z1BpQXhNREFwZTF4dVhIUmNkRngwWEhSY2RIUnZJRDBnTVRBd08xeHVYSFJjZEZ4MFhIUjlPMXh1WEhSY2RGeDBkbUZ5SUdaeWIyMGdQU0J6WlhSMGFXNW5jeTVtY205dExGeHVYSFJjZEZ4MFhIUnNiMjl3Y3lBOUlFMWhkR2d1WTJWcGJDaHpaWFIwYVc1bmN5NXpjR1ZsWkNBdklITmxkSFJwYm1kekxtbHVkR1Z5ZG1Gc0tTeGNiaUFnSUNBZ0lDQWdJQ0FnSUZ4MGFXNWpjbVZ0Wlc1MElEMGdLSFJ2SUMwZ1puSnZiU2tnTHlCc2IyOXdjeXhjYmx4MFhIUmNkRngwYkc5dmNFTnZkVzUwSUQwZ01DeGNibHgwWEhSY2RGeDBhVzUwWlhKMllXd2dQU0J6WlhSSmJuUmxjblpoYkNoMWNHUmhkR1ZXWVd4MVpTd2djMlYwZEdsdVozTXVhVzUwWlhKMllXd3BPMXh1WEhSY2RGeDBYRzVjZEZ4MFhIUnZZbW91Wm1sdVpDaHpaWFIwYVc1bmN5NWpiR0Z6YzJWekxuTnJhV3hzUW1GeVFtRnlLUzVoYm1sdFlYUmxLSHRjYmx4MFhIUmNkRngwZDJsa2RHZzZJSEJoY25ObFNXNTBLRzlpYWk1aGRIUnlLQ2RrWVhSaExYQmxjbU5sYm5RbktTa3JKeVVuWEc1Y2RGeDBYSFI5TENCelpYUjBhVzVuY3k1emNHVmxaQ2s3WEc1Y2RGeDBYSFJjZEZ4MFhIUmNibHgwWEhSY2RHWjFibU4wYVc5dUlIVndaR0YwWlZaaGJIVmxLQ2w3WEc1Y2RGeDBYSFJjZEdaeWIyMGdLejBnYVc1amNtVnRaVzUwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUd4dmIzQkRiM1Z1ZENzck8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDUW9iMkpxS1M1bWFXNWtLSE5sZEhScGJtZHpMbU5zWVhOelpYTXVjMnRwYkd4Q1lYSlFaWEpqWlc1MEtTNTBaWGgwS0daeWIyMHVkRzlHYVhobFpDaHpaWFIwYVc1bmN5NWtaV05wYldGc2N5a3JKeVVuS1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwZVhCbGIyWW9jMlYwZEdsdVozTXViMjVWY0dSaGRHVXBJRDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzJWMGRHbHVaM011YjI1VmNHUmhkR1V1WTJGc2JDaHZZbW9zSUdaeWIyMHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHNiMjl3UTI5MWJuUWdQajBnYkc5dmNITXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyeGxZWEpKYm5SbGNuWmhiQ2hwYm5SbGNuWmhiQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnliMjBnUFNCMGJ6dGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kSGx3Wlc5bUtITmxkSFJwYm1kekxtOXVRMjl0Y0d4bGRHVXBJRDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITmxkSFJwYm1kekxtOXVRMjl0Y0d4bGRHVXVZMkZzYkNodlltb3NJR1p5YjIwcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhIUmNkRngwZlZ4dVhIUmNkRngwWEc0Z0lDQWdJQ0FnSUgwcE8xeHVJRnh1SUNBZ0lIMDdYRzRnWEc1OUtDQnFVWFZsY25rZ0tTazdYRzRpWFN3aWMyOTFjbU5sVW05dmRDSTZJaUo5In0=
