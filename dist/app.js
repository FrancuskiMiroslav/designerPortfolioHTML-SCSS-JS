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
	} else {
		$('.nav-top').removeClass('nav-top--sticky');
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zvcm1WYWxpZGFpdG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9za2lsbC5iYXJzLmpxdWVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMseUJBQXlCLDZCQUE2QixJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLGdDQUFnQyxHQUFHO0FBQ2xLO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdkZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDOUZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTOztBQUVUOztBQUVBLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHQvLyBmb3JtIHZhbGlkYXRpb25cclxuXHRjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtZm9ybScpO1xyXG5cdGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpO1xyXG5cdGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJyk7XHJcblx0Y29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlJyk7XHJcblx0Y29uc3QgZm9ybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWJ0bicpO1xyXG5cclxuXHRpZiAoZm9ybSkge1xyXG5cdFx0W1xyXG5cdFx0XHQnY2xpY2snLFxyXG5cdFx0XHQnb250b3VjaHN0YXJ0JyxcclxuXHRcdFx0J21vdXNlb3ZlcicsXHJcblx0XHRcdCdrZXlkb3duJyxcclxuXHRcdFx0J2tleXByZXNzJyxcclxuXHRcdFx0J3RvdWNoc3RhcnQnLFxyXG5cdFx0XHQndG91Y2htb3ZlJyxcclxuXHRcdF0uZm9yRWFjaChcclxuXHRcdFx0KGV2ZW50KSA9PlxyXG5cdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsICgpID0+IHtcclxuXHRcdFx0XHRcdGlmIChjaGVja0lucHV0cygpID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0XHRmb3JtQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGZvcm1CdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gY2hlY2tJbnB1dHMoKSB7XHJcblx0XHRcdGNvbnN0IG5hbWVWYWx1ZSA9IG5hbWUudmFsdWUudHJpbSgpO1xyXG5cdFx0XHRjb25zdCBlbWFpbFZhbHVlID0gZW1haWwudmFsdWUudHJpbSgpO1xyXG5cdFx0XHRjb25zdCBtZXNzYWdlVmFsdWUgPSBtZXNzYWdlLnZhbHVlLnRyaW0oKTtcclxuXHJcblx0XHRcdGlmIChuYW1lVmFsdWUgPT09ICcnKSB7XHJcblx0XHRcdFx0c2V0RXJyb3JGb3IobmFtZSwgJ1BsZWFzZSBlbnRlciB5b3VyIGZ1bGwgbmFtZScpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFN1Y2Nlc3NGb3IobmFtZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChlbWFpbFZhbHVlID09PSAnJykge1xyXG5cdFx0XHRcdHNldEVycm9yRm9yKGVtYWlsLCAnUGxlYXNlIGVudGVyIHlvdXIgZW1haWwgYWRkcmVzcycpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKCFlbWFpbElzVmFsaWQoZW1haWxWYWx1ZSkpIHtcclxuXHRcdFx0XHRzZXRFcnJvckZvcihlbWFpbCwgJ0VtYWlsIGlzIG5vdCB2YWxpZCcpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFN1Y2Nlc3NGb3IoZW1haWwpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobWVzc2FnZVZhbHVlID09PSAnJykge1xyXG5cdFx0XHRcdHNldEVycm9yRm9yKG1lc3NhZ2UsICdQbGVhc2UgZW50ZXIgeW91ciBtZXNzYWdlJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0U3VjY2Vzc0ZvcihtZXNzYWdlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdG5hbWVWYWx1ZSA9PT0gJycgfHxcclxuXHRcdFx0XHRlbWFpbFZhbHVlID09PSAnJyB8fFxyXG5cdFx0XHRcdG1lc3NhZ2VWYWx1ZSA9PT0gJycgfHxcclxuXHRcdFx0XHQhZW1haWxJc1ZhbGlkKGVtYWlsVmFsdWUpXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNldEVycm9yRm9yKGlucHV0LCBtZXNzYWdlKSB7XHJcblx0XHRcdGNvbnN0IGZvcm0gPSBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cdFx0XHRjb25zdCBzbWFsbCA9IGZvcm0ucXVlcnlTZWxlY3Rvcignc21hbGwnKTtcclxuXHJcblx0XHRcdHNtYWxsLmlubmVyVGV4dCA9IG1lc3NhZ2U7XHJcblx0XHRcdGZvcm0uY2xhc3NOYW1lID0gJ2Zvcm1fX2dyb3VwIGVycm9yJztcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzZXRTdWNjZXNzRm9yKGlucHV0KSB7XHJcblx0XHRcdGNvbnN0IGZvcm0gPSBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cdFx0XHRmb3JtLmNsYXNzTmFtZSA9ICdmb3JtX19ncm91cCBzdWNjZXNzJztcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBlbWFpbElzVmFsaWQoZW1haWwpIHtcclxuXHRcdFx0Y29uc3QgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLy50ZXN0KFxyXG5cdFx0XHRcdGVtYWlsXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gcmU7XHJcblx0XHR9XHJcblx0fVxyXG59KTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChlKSA9PiB7XHJcblx0XHRjb25zdCBwcmVsb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWQnKTtcclxuXHJcblx0XHRwcmVsb2FkLmNsYXNzTGlzdC5hZGQoJ3ByZWxvYWQtZmluaXNoZWQnKTtcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgYnRuU2Nyb2xsVG9Ub3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuU2Nyb2xsVG9Ub3AnKTtcclxuXHJcblx0aWYgKGJ0blNjcm9sbFRvVG9wKSB7XHJcblx0XHRidG5TY3JvbGxUb1RvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdHdpbmRvdy5zY3JvbGxUbyh7XHJcblx0XHRcdFx0dG9wOiAwLFxyXG5cdFx0XHRcdGxlZnQ6IDAsXHJcblx0XHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblx0JCgnLm1lbnUtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0JCgnbmF2IHVsJykudG9nZ2xlQ2xhc3MoJ3Nob3dpbmcnKTtcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ0bicpO1xyXG5cdGxldCBtZW51T3BlbiA9IGZhbHNlO1xyXG5cdG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRpZiAoIW1lbnVPcGVuKSB7XHJcblx0XHRcdG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG5cdFx0XHRtZW51T3BlbiA9IHRydWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuXHRcdFx0bWVudU9wZW4gPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0Ly8gc2tpbGwgYmFyIEFCT1VUIFBBR0VcclxuXHQkKCcuc2tpbGxiYXInKS5za2lsbEJhcnMoe1xyXG5cdFx0Ly8gbnVtYmVyIHN0YXJ0XHJcblx0XHRmcm9tOiAwLFxyXG5cclxuXHRcdC8vIG51bWJlciBlbmRcclxuXHRcdHRvOiBmYWxzZSxcclxuXHJcblx0XHQvLyBhbmltYXRpb24gc3BlZWRcclxuXHRcdHNwZWVkOiAzMDAwLFxyXG5cclxuXHRcdC8vIGhvdyBvZnRlbiB0aGUgZWxlbWVudCBzaG91bGQgYmUgdXA8YSBocmVmPVwiaHR0cHM6Ly93d3cuanF1ZXJ5c2NyaXB0Lm5ldC90aW1lLWNsb2NrL1wiPmRhdGU8L2E+ZFxyXG5cdFx0aW50ZXJ2YWw6IDEwMCxcclxuXHJcblx0XHQvLyB0aGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIHRvIHNob3dcclxuXHRcdGRlY2ltYWxzOiAwLFxyXG5cclxuXHRcdC8vIGNhbGxiYWNrIG1ldGhvZCBmb3IgZXZlcnkgdGltZSB0aGUgZWxlbWVudCBpcyB1cGRhdGVkLFxyXG5cdFx0b25VcGRhdGU6IG51bGwsXHJcblxyXG5cdFx0Ly8gY2FsbGJhY2sgbWV0aG9kIGZvciB3aGVuIHRoZSBlbGVtZW50IGZpbmlzaGVzIHVwZGF0aW5nXHJcblx0XHRvbkNvbXBsZXRlOiBudWxsLFxyXG5cclxuXHRcdC8vIENTUyBjbGFzc2VzXHJcblx0XHRjbGFzc2VzOiB7XHJcblx0XHRcdHNraWxsQmFyQmFyOiAnLnNraWxsYmFyLWJhcicsXHJcblx0XHRcdHNraWxsQmFyUGVyY2VudDogJy5za2lsbC1iYXItcGVyY2VudCcsXHJcblx0XHR9LFxyXG5cdH0pO1xyXG59KTtcclxuXHJcbiQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG5cdGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkpIHtcclxuXHRcdCQoJy5uYXYtdG9wJykuYWRkQ2xhc3MoJ25hdi10b3AtLXN0aWNreScpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKCcubmF2LXRvcCcpLnJlbW92ZUNsYXNzKCduYXYtdG9wLS1zdGlja3knKTtcclxuXHR9XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5uYXYgdWwgbGkgYScsIGZ1bmN0aW9uICgpIHtcclxuXHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxufSk7XHJcblxyXG4kKCcucG9ydGZvbGlvLWl0ZW0nKS5pc290b3BlKHtcclxuXHRpdGVtU2VsZWN0b3I6ICcuaXRlbScsXHJcblx0bGF5b3V0TW9kZTogJ2ZpdFJvd3MnLFxyXG59KTtcclxuXHJcbiQoJy5wb3J0Zm9saW8tbWVudSB1bCBsaScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHQkKCcucG9ydGZvbGlvLW1lbnUgdWwgbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG5cdHZhciBzZWxlY3RvciA9ICQodGhpcykuYXR0cignZGF0YS1maWx0ZXInKTtcclxuXHQkKCcucG9ydGZvbGlvLWl0ZW0nKS5pc290b3BlKHtcclxuXHRcdGZpbHRlcjogc2VsZWN0b3IsXHJcblx0fSk7XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59KTtcclxuIiwiLyohXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdW1hcndlYmRldmVsb3Blci9qcXVlcnktY3NzLXNraWxscy1iYXJcbiAqIEF1dGhvcjogQHVtYXJ3ZWJkZXZlbG9wZXJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG4gXG4oZnVuY3Rpb24gKCAkICkge1xuIFxuICAgICQuZm4uc2tpbGxCYXJzID0gZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG4gXG4gICAgICAgIHZhciBzZXR0aW5ncyA9ICQuZXh0ZW5kKHtcblx0XHRcdGZyb206IDAsICBcdFx0XHQvLyBudW1iZXIgc3RhcnRcblx0XHRcdHRvOiBmYWxzZSxcdFx0XHQvLyBudW1iZXIgZW5kXG5cdFx0XHRzcGVlZDogMTAwMCwgIFx0XHQvLyBob3cgbG9uZyBpdCBzaG91bGQgdGFrZSB0byBjb3VudCBiZXR3ZWVuIHRoZSB0YXJnZXQgbnVtYmVyc1xuXHRcdFx0aW50ZXJ2YWw6IDEwMCxcdCAgLy8gaG93IG9mdGVuIHRoZSBlbGVtZW50IHNob3VsZCBiZSB1cGRhdGVkXG5cdFx0XHRkZWNpbWFsczogMCxcdFx0ICAvLyB0aGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIHRvIHNob3dcblx0XHRcdG9uVXBkYXRlOiBudWxsLFx0ICAvLyBjYWxsYmFjayBtZXRob2QgZm9yIGV2ZXJ5IHRpbWUgdGhlIGVsZW1lbnQgaXMgdXBkYXRlZCxcblx0XHRcdG9uQ29tcGxldGU6IG51bGwsXHQgIC8vIGNhbGxiYWNrIG1ldGhvZCBmb3Igd2hlbiB0aGUgZWxlbWVudCBmaW5pc2hlcyB1cGRhdGluZ1xuXHRcdFx0LypvbkNvbXBsZXRlOiBmdW5jdGlvbihmcm9tKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1Zyh0aGlzKTtcbiAgICAgICAgICAgIH0qL1xuXHRcdFx0Y2xhc3Nlczp7XG5cdFx0XHRcdHNraWxsQmFyQmFyIDogJy5za2lsbGJhci1iYXInLFxuXHRcdFx0XHRza2lsbEJhclBlcmNlbnQgOiAnLnNraWxsLWJhci1wZXJjZW50Jyxcblx0XHRcdH1cbiAgICAgICAgfSwgb3B0aW9ucyApO1xuIFxuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0XHRcblx0XHRcdHZhciBvYmogPSAkKHRoaXMpLFxuXHRcdFx0XHR0byA9IChzZXR0aW5ncy50byAhPSBmYWxzZSkgPyBzZXR0aW5ncy50byA6IHBhcnNlSW50KG9iai5hdHRyKCdkYXRhLXBlcmNlbnQnKSk7XG5cdFx0XHRcdGlmKHRvID4gMTAwKXtcblx0XHRcdFx0XHR0byA9IDEwMDtcblx0XHRcdFx0fTtcblx0XHRcdHZhciBmcm9tID0gc2V0dGluZ3MuZnJvbSxcblx0XHRcdFx0bG9vcHMgPSBNYXRoLmNlaWwoc2V0dGluZ3Muc3BlZWQgLyBzZXR0aW5ncy5pbnRlcnZhbCksXG4gICAgICAgICAgICBcdGluY3JlbWVudCA9ICh0byAtIGZyb20pIC8gbG9vcHMsXG5cdFx0XHRcdGxvb3BDb3VudCA9IDAsXG5cdFx0XHRcdGludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlVmFsdWUsIHNldHRpbmdzLmludGVydmFsKTtcblx0XHRcdFxuXHRcdFx0b2JqLmZpbmQoc2V0dGluZ3MuY2xhc3Nlcy5za2lsbEJhckJhcikuYW5pbWF0ZSh7XG5cdFx0XHRcdHdpZHRoOiBwYXJzZUludChvYmouYXR0cignZGF0YS1wZXJjZW50JykpKyclJ1xuXHRcdFx0fSwgc2V0dGluZ3Muc3BlZWQpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRmdW5jdGlvbiB1cGRhdGVWYWx1ZSgpe1xuXHRcdFx0XHRmcm9tICs9IGluY3JlbWVudDtcbiAgICAgICAgICAgICAgICBsb29wQ291bnQrKztcbiAgICAgICAgICAgICAgICAkKG9iaikuZmluZChzZXR0aW5ncy5jbGFzc2VzLnNraWxsQmFyUGVyY2VudCkudGV4dChmcm9tLnRvRml4ZWQoc2V0dGluZ3MuZGVjaW1hbHMpKyclJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mKHNldHRpbmdzLm9uVXBkYXRlKSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLm9uVXBkYXRlLmNhbGwob2JqLCBmcm9tKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobG9vcENvdW50ID49IGxvb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICBmcm9tID0gdG87XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZihzZXR0aW5ncy5vbkNvbXBsZXRlKSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5vbkNvbXBsZXRlLmNhbGwob2JqLCBmcm9tKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblx0XHRcdH1cblx0XHRcdFxuICAgICAgICB9KTtcbiBcbiAgICB9O1xuIFxufSggalF1ZXJ5ICkpO1xuIl0sInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OWliMjkwYzNSeVlYQWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMnB6TDJadmNtMVdZV3hwWkdGcGRHOXVMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5cWN5OXRZV2x1TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OXFjeTl6YTJsc2JDNWlZWEp6TG1weGRXVnllUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzFGQlFVRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN096dFJRVWRCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHM3VVVGRlFUdFJRVU5CTzFGQlEwRTdVVUZEUVN3d1EwRkJNRU1zWjBOQlFXZERPMUZCUXpGRk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFc2QwUkJRWGRFTEd0Q1FVRnJRanRSUVVNeFJUdFJRVU5CTEdsRVFVRnBSQ3hqUVVGak8xRkJReTlFT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3g1UTBGQmVVTXNhVU5CUVdsRE8xRkJRekZGTEdkSVFVRm5TQ3h0UWtGQmJVSXNSVUZCUlR0UlFVTnlTVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdVVUZEUVR0UlFVTkJMREpDUVVFeVFpd3dRa0ZCTUVJc1JVRkJSVHRSUVVOMlJDeHBRMEZCYVVNc1pVRkJaVHRSUVVOb1JEdFJRVU5CTzFGQlEwRTdPMUZCUlVFN1VVRkRRU3h6UkVGQmMwUXNLMFJCUVN0RU96dFJRVVZ5U0R0UlFVTkJPenM3VVVGSFFUdFJRVU5CT3pzN096czdPenM3T3pzN1FVTnNSa0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRTFCUVUwN1FVRkRUanRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRWxCUVVrN1FVRkRTanRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4SlFVRkpPMEZCUTBvN1FVRkRRU3hKUVVGSk8wRkJRMG83UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1NVRkJTVHRCUVVOS08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEpRVUZKTzBGQlEwbzdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hwUTBGQmFVTXNlVUpCUVhsQ0xEWkNRVUUyUWl4SlFVRkpMRkZCUVZFc1NVRkJTU3hSUVVGUkxFbEJRVWtzVVVGQlVTeEpRVUZKTEdkRFFVRm5ReXhIUVVGSE8wRkJRMnhMTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUTBGQlF6czdPenM3T3pzN096czdPMEZEZGtaRU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRVZCUVVVN08wRkJSVVk3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzU1VGQlNUdEJRVU5LTEVkQlFVYzdRVUZEU0R0QlFVTkJMRU5CUVVNN08wRkJSVVE3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlRzN1FVRkZSanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0N4RlFVRkZPMEZCUTBZc1EwRkJRenM3UVVGRlJEdEJRVU5CTzBGQlEwRTdRVUZEUVN4RlFVRkZPMEZCUTBZN1FVRkRRVHRCUVVOQkxFTkJRVU03TzBGQlJVUTdRVUZEUVR0QlFVTkJMRU5CUVVNN08wRkJSVVE3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXpzN1FVRkZSRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1JVRkJSVHRCUVVOR08wRkJRMEVzUTBGQlF6czdPenM3T3pzN096czdPMEZET1VaRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4aFFVRmhPMEZCUTJJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZUT3p0QlFVVlVPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4SlFVRkpPenRCUVVWS08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN4VFFVRlRPenRCUVVWVU96dEJRVVZCTEVOQlFVTWlMQ0ptYVd4bElqb2laVEV5T1dRd016a3hNRFkxTkRoa01XRXlaVGt1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SWdYSFF2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUjJZWElnYVc1emRHRnNiR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVYRzRnWEhRdkx5QlVhR1VnY21WeGRXbHlaU0JtZFc1amRHbHZibHh1SUZ4MFpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEc0Z1hIUmNkQzh2SUVOb1pXTnJJR2xtSUcxdlpIVnNaU0JwY3lCcGJpQmpZV05vWlZ4dUlGeDBYSFJwWmlocGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNrZ2UxeHVJRngwWEhSY2RISmxkSFZ5YmlCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1bGVIQnZjblJ6TzF4dUlGeDBYSFI5WEc0Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNGdYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQTlJSHRjYmlCY2RGeDBYSFJwT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSc09pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSbGVIQnZjblJ6T2lCN2ZWeHVJRngwWEhSOU8xeHVYRzRnWEhSY2RDOHZJRVY0WldOMWRHVWdkR2hsSUcxdlpIVnNaU0JtZFc1amRHbHZibHh1SUZ4MFhIUnRiMlIxYkdWelcyMXZaSFZzWlVsa1hTNWpZV3hzS0cxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLVHRjYmx4dUlGeDBYSFF2THlCR2JHRm5JSFJvWlNCdGIyUjFiR1VnWVhNZ2JHOWhaR1ZrWEc0Z1hIUmNkRzF2WkhWc1pTNXNJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXNJRzVoYldVc0lHZGxkSFJsY2lrZ2UxeHVJRngwWEhScFppZ2hYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUc1aGJXVXBLU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z1oyVjBPaUJuWlhSMFpYSWdmU2s3WEc0Z1hIUmNkSDFjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQmZYMlZ6VFc5a2RXeGxJRzl1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaUE5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1wSUh0Y2JpQmNkRngwYVdZb2RIbHdaVzltSUZONWJXSnZiQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeXdnZXlCMllXeDFaVG9nSjAxdlpIVnNaU2NnZlNrN1hHNGdYSFJjZEgxY2JpQmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lDZGZYMlZ6VFc5a2RXeGxKeXdnZXlCMllXeDFaVG9nZEhKMVpTQjlLVHRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR055WldGMFpTQmhJR1poYTJVZ2JtRnRaWE53WVdObElHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JREU2SUhaaGJIVmxJR2x6SUdFZ2JXOWtkV3hsSUdsa0xDQnlaWEYxYVhKbElHbDBYRzRnWEhRdkx5QnRiMlJsSUNZZ01qb2diV1Z5WjJVZ1lXeHNJSEJ5YjNCbGNuUnBaWE1nYjJZZ2RtRnNkV1VnYVc1MGJ5QjBhR1VnYm5OY2JpQmNkQzh2SUcxdlpHVWdKaUEwT2lCeVpYUjFjbTRnZG1Gc2RXVWdkMmhsYmlCaGJISmxZV1I1SUc1eklHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JRGg4TVRvZ1ltVm9ZWFpsSUd4cGEyVWdjbVZ4ZFdseVpWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1MElEMGdablZ1WTNScGIyNG9kbUZzZFdVc0lHMXZaR1VwSUh0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURFcElIWmhiSFZsSUQwZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aDJZV3gxWlNrN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBNEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z1hIUmNkR2xtS0NodGIyUmxJQ1lnTkNrZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUQwOVBTQW5iMkpxWldOMEp5QW1KaUIyWVd4MVpTQW1KaUIyWVd4MVpTNWZYMlZ6VFc5a2RXeGxLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEhaaGNpQnVjeUE5SUU5aWFtVmpkQzVqY21WaGRHVW9iblZzYkNrN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpaHVjeWs3WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNodWN5d2dKMlJsWm1GMWJIUW5MQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUhaaGJIVmxPaUIyWVd4MVpTQjlLVHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JRElnSmlZZ2RIbHdaVzltSUhaaGJIVmxJQ0U5SUNkemRISnBibWNuS1NCbWIzSW9kbUZ5SUd0bGVTQnBiaUIyWVd4MVpTa2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0c1ekxDQnJaWGtzSUdaMWJtTjBhVzl1S0d0bGVTa2dleUJ5WlhSMWNtNGdkbUZzZFdWYmEyVjVYVHNnZlM1aWFXNWtLRzUxYkd3c0lHdGxlU2twTzF4dUlGeDBYSFJ5WlhSMWNtNGdibk03WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJuWlhSRVpXWmhkV3gwUlhod2IzSjBJR1oxYm1OMGFXOXVJR1p2Y2lCamIyMXdZWFJwWW1sc2FYUjVJSGRwZEdnZ2JtOXVMV2hoY20xdmJua2diVzlrZFd4bGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dUlEMGdablZ1WTNScGIyNG9iVzlrZFd4bEtTQjdYRzRnWEhSY2RIWmhjaUJuWlhSMFpYSWdQU0J0YjJSMWJHVWdKaVlnYlc5a2RXeGxMbDlmWlhOTmIyUjFiR1VnUDF4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFUmxabUYxYkhRb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdWYkoyUmxabUYxYkhRblhUc2dmU0E2WEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFRXOWtkV3hsUlhod2IzSjBjeWdwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVHNnZlR0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHZGxkSFJsY2l3Z0oyRW5MQ0JuWlhSMFpYSXBPMXh1SUZ4MFhIUnlaWFIxY200Z1oyVjBkR1Z5TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThnUFNCbWRXNWpkR2x2YmlodlltcGxZM1FzSUhCeWIzQmxjblI1S1NCN0lISmxkSFZ5YmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IySnFaV04wTENCd2NtOXdaWEowZVNrN0lIMDdYRzVjYmlCY2RDOHZJRjlmZDJWaWNHRmphMTl3ZFdKc2FXTmZjR0YwYUY5ZlhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5BZ1BTQmNJbHdpTzF4dVhHNWNiaUJjZEM4dklFeHZZV1FnWlc1MGNua2diVzlrZFd4bElHRnVaQ0J5WlhSMWNtNGdaWGh3YjNKMGMxeHVJRngwY21WMGRYSnVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eklEMGdNQ2s3WEc0aUxDSmtiMk4xYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZEVUMDFEYjI1MFpXNTBURzloWkdWa0p5d2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNkQzh2SUdadmNtMGdkbUZzYVdSaGRHbHZibHh5WEc1Y2RHTnZibk4wSUdadmNtMGdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25ZMjl1ZEdGamRDMW1iM0p0SnlrN1hISmNibHgwWTI5dWMzUWdibUZ0WlNBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkdVlXMWxKeWs3WEhKY2JseDBZMjl1YzNRZ1pXMWhhV3dnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duWlcxaGFXd25LVHRjY2x4dVhIUmpiMjV6ZENCdFpYTnpZV2RsSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjIxbGMzTmhaMlVuS1R0Y2NseHVYSFJqYjI1emRDQm1iM0p0UW5SdUlEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyWnZjbTB0WW5SdUp5azdYSEpjYmx4eVhHNWNkR2xtSUNobWIzSnRLU0I3WEhKY2JseDBYSFJiWEhKY2JseDBYSFJjZENkamJHbGpheWNzWEhKY2JseDBYSFJjZENkdmJuUnZkV05vYzNSaGNuUW5MRnh5WEc1Y2RGeDBYSFFuYlc5MWMyVnZkbVZ5Snl4Y2NseHVYSFJjZEZ4MEoydGxlV1J2ZDI0bkxGeHlYRzVjZEZ4MFhIUW5hMlY1Y0hKbGMzTW5MRnh5WEc1Y2RGeDBYSFFuZEc5MVkyaHpkR0Z5ZENjc1hISmNibHgwWEhSY2RDZDBiM1ZqYUcxdmRtVW5MRnh5WEc1Y2RGeDBYUzVtYjNKRllXTm9LRnh5WEc1Y2RGeDBYSFFvWlhabGJuUXBJRDArWEhKY2JseDBYSFJjZEZ4MFpHOWpkVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lobGRtVnVkQ3dnS0NrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLR05vWldOclNXNXdkWFJ6S0NrZ1BUMDlJR1poYkhObEtTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RHWnZjbTFDZEc0dVpHbHpZV0pzWldRZ1BTQjBjblZsTzF4eVhHNWNkRngwWEhSY2RGeDBmU0JsYkhObElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFptOXliVUowYmk1a2FYTmhZbXhsWkNBOUlHWmhiSE5sTzF4eVhHNWNkRngwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEgwcExGeHlYRzVjZEZ4MFhIUm1ZV3h6WlZ4eVhHNWNkRngwS1R0Y2NseHVYSEpjYmx4MFhIUm1kVzVqZEdsdmJpQmphR1ZqYTBsdWNIVjBjeWdwSUh0Y2NseHVYSFJjZEZ4MFkyOXVjM1FnYm1GdFpWWmhiSFZsSUQwZ2JtRnRaUzUyWVd4MVpTNTBjbWx0S0NrN1hISmNibHgwWEhSY2RHTnZibk4wSUdWdFlXbHNWbUZzZFdVZ1BTQmxiV0ZwYkM1MllXeDFaUzUwY21sdEtDazdYSEpjYmx4MFhIUmNkR052Ym5OMElHMWxjM05oWjJWV1lXeDFaU0E5SUcxbGMzTmhaMlV1ZG1Gc2RXVXVkSEpwYlNncE8xeHlYRzVjY2x4dVhIUmNkRngwYVdZZ0tHNWhiV1ZXWVd4MVpTQTlQVDBnSnljcElIdGNjbHh1WEhSY2RGeDBYSFJ6WlhSRmNuSnZja1p2Y2lodVlXMWxMQ0FuVUd4bFlYTmxJR1Z1ZEdWeUlIbHZkWElnWm5Wc2JDQnVZVzFsSnlrN1hISmNibHgwWEhSY2RIMGdaV3h6WlNCN1hISmNibHgwWEhSY2RGeDBjMlYwVTNWalkyVnpjMFp2Y2lodVlXMWxLVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBhV1lnS0dWdFlXbHNWbUZzZFdVZ1BUMDlJQ2NuS1NCN1hISmNibHgwWEhSY2RGeDBjMlYwUlhKeWIzSkdiM0lvWlcxaGFXd3NJQ2RRYkdWaGMyVWdaVzUwWlhJZ2VXOTFjaUJsYldGcGJDQmhaR1J5WlhOekp5azdYSEpjYmx4MFhIUmNkSDBnWld4elpTQnBaaUFvSVdWdFlXbHNTWE5XWVd4cFpDaGxiV0ZwYkZaaGJIVmxLU2tnZTF4eVhHNWNkRngwWEhSY2RITmxkRVZ5Y205eVJtOXlLR1Z0WVdsc0xDQW5SVzFoYVd3Z2FYTWdibTkwSUhaaGJHbGtKeWs3WEhKY2JseDBYSFJjZEgwZ1pXeHpaU0I3WEhKY2JseDBYSFJjZEZ4MGMyVjBVM1ZqWTJWemMwWnZjaWhsYldGcGJDazdYSEpjYmx4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RHbG1JQ2h0WlhOellXZGxWbUZzZFdVZ1BUMDlJQ2NuS1NCN1hISmNibHgwWEhSY2RGeDBjMlYwUlhKeWIzSkdiM0lvYldWemMyRm5aU3dnSjFCc1pXRnpaU0JsYm5SbGNpQjViM1Z5SUcxbGMzTmhaMlVuS1R0Y2NseHVYSFJjZEZ4MGZTQmxiSE5sSUh0Y2NseHVYSFJjZEZ4MFhIUnpaWFJUZFdOalpYTnpSbTl5S0cxbGMzTmhaMlVwTzF4eVhHNWNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJwWmlBb1hISmNibHgwWEhSY2RGeDBibUZ0WlZaaGJIVmxJRDA5UFNBbkp5QjhmRnh5WEc1Y2RGeDBYSFJjZEdWdFlXbHNWbUZzZFdVZ1BUMDlJQ2NuSUh4OFhISmNibHgwWEhSY2RGeDBiV1Z6YzJGblpWWmhiSFZsSUQwOVBTQW5KeUI4ZkZ4eVhHNWNkRngwWEhSY2RDRmxiV0ZwYkVselZtRnNhV1FvWlcxaGFXeFdZV3gxWlNsY2NseHVYSFJjZEZ4MEtTQjdYSEpjYmx4MFhIUmNkRngwY21WMGRYSnVJR1poYkhObE8xeHlYRzVjZEZ4MFhIUjlJR1ZzYzJVZ2UxeHlYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQjBjblZsTzF4eVhHNWNkRngwWEhSOVhISmNibHgwWEhSOVhISmNibHh5WEc1Y2RGeDBablZ1WTNScGIyNGdjMlYwUlhKeWIzSkdiM0lvYVc1d2RYUXNJRzFsYzNOaFoyVXBJSHRjY2x4dVhIUmNkRngwWTI5dWMzUWdabTl5YlNBOUlHbHVjSFYwTG5CaGNtVnVkRVZzWlcxbGJuUTdYSEpjYmx4MFhIUmNkR052Ym5OMElITnRZV3hzSUQwZ1ptOXliUzV4ZFdWeWVWTmxiR1ZqZEc5eUtDZHpiV0ZzYkNjcE8xeHlYRzVjY2x4dVhIUmNkRngwYzIxaGJHd3VhVzV1WlhKVVpYaDBJRDBnYldWemMyRm5aVHRjY2x4dVhIUmNkRngwWm05eWJTNWpiR0Z6YzA1aGJXVWdQU0FuWm05eWJWOWZaM0p2ZFhBZ1pYSnliM0luTzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RHWjFibU4wYVc5dUlITmxkRk4xWTJObGMzTkdiM0lvYVc1d2RYUXBJSHRjY2x4dVhIUmNkRngwWTI5dWMzUWdabTl5YlNBOUlHbHVjSFYwTG5CaGNtVnVkRVZzWlcxbGJuUTdYSEpjYmx4MFhIUmNkR1p2Y20wdVkyeGhjM05PWVcxbElEMGdKMlp2Y20xZlgyZHliM1Z3SUhOMVkyTmxjM01uTzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RHWjFibU4wYVc5dUlHVnRZV2xzU1hOV1lXeHBaQ2hsYldGcGJDa2dlMXh5WEc1Y2RGeDBYSFJqYjI1emRDQnlaU0E5SUM5ZUtDaGJYancrS0NsY1hGdGNYRjFjWEZ4Y0xpdzdPbHhjYzBCY0lsMHJLRnhjTGx0ZVBENG9LVnhjVzF4Y1hWeGNYRnd1TERzNlhGeHpRRndpWFNzcEtpbDhLRndpTGl0Y0lpa3BRQ2dvWEZ4Yld6QXRPVjE3TVN3emZWeGNMbHN3TFRsZGV6RXNNMzFjWEM1Yk1DMDVYWHN4TEROOVhGd3VXekF0T1YxN01Td3pmVjBwZkNnb1cyRXRla0V0V2x4Y0xUQXRPVjByWEZ3dUtTdGJZUzE2UVMxYVhYc3lMSDBwS1NRdkxuUmxjM1FvWEhKY2JseDBYSFJjZEZ4MFpXMWhhV3hjY2x4dVhIUmNkRngwS1R0Y2NseHVYSEpjYmx4MFhIUmNkSEpsZEhWeWJpQnlaVHRjY2x4dVhIUmNkSDFjY2x4dVhIUjlYSEpjYm4wcE8xeHlYRzRpTENKa2IyTjFiV1Z1ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkRVQwMURiMjUwWlc1MFRHOWhaR1ZrSnl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2RIZHBibVJ2ZHk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0Nkc2IyRmtKeXdnS0dVcElEMCtJSHRjY2x4dVhIUmNkR052Ym5OMElIQnlaV3h2WVdRZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWNISmxiRzloWkNjcE8xeHlYRzVjY2x4dVhIUmNkSEJ5Wld4dllXUXVZMnhoYzNOTWFYTjBMbUZrWkNnbmNISmxiRzloWkMxbWFXNXBjMmhsWkNjcE8xeHlYRzVjZEgwcE8xeHlYRzVjY2x4dVhIUmpiMjV6ZENCaWRHNVRZM0p2Ykd4VWIxUnZjQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RpZEc1VFkzSnZiR3hVYjFSdmNDY3BPMXh5WEc1Y2NseHVYSFJwWmlBb1luUnVVMk55YjJ4c1ZHOVViM0FwSUh0Y2NseHVYSFJjZEdKMGJsTmpjbTlzYkZSdlZHOXdMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dLR1VwSUQwK0lIdGNjbHh1WEhSY2RGeDBkMmx1Wkc5M0xuTmpjbTlzYkZSdktIdGNjbHh1WEhSY2RGeDBYSFIwYjNBNklEQXNYSEpjYmx4MFhIUmNkRngwYkdWbWREb2dNQ3hjY2x4dVhIUmNkRngwWEhSaVpXaGhkbWx2Y2pvZ0ozTnRiMjkwYUNjc1hISmNibHgwWEhSY2RIMHBPMXh5WEc1Y2RGeDBmU2s3WEhKY2JseDBmVnh5WEc1OUtUdGNjbHh1WEhKY2JpUW9aRzlqZFcxbGJuUXBMbkpsWVdSNUtHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhIUWtLQ2N1YldWdWRTMWlkRzRuS1M1dmJpZ25ZMnhwWTJzbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseDBYSFFrS0NkdVlYWWdkV3duS1M1MGIyZG5iR1ZEYkdGemN5Z25jMmh2ZDJsdVp5Y3BPMXh5WEc1Y2RIMHBPMXh5WEc1Y2NseHVYSFJqYjI1emRDQnRaVzUxUW5SdUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxtMWxiblV0WW5SdUp5azdYSEpjYmx4MGJHVjBJRzFsYm5WUGNHVnVJRDBnWm1Gc2MyVTdYSEpjYmx4MGJXVnVkVUowYmk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUNncElEMCtJSHRjY2x4dVhIUmNkR2xtSUNnaGJXVnVkVTl3Wlc0cElIdGNjbHh1WEhSY2RGeDBiV1Z1ZFVKMGJpNWpiR0Z6YzB4cGMzUXVZV1JrS0NkdmNHVnVKeWs3WEhKY2JseDBYSFJjZEcxbGJuVlBjR1Z1SUQwZ2RISjFaVHRjY2x4dVhIUmNkSDBnWld4elpTQjdYSEpjYmx4MFhIUmNkRzFsYm5WQ2RHNHVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTZ25iM0JsYmljcE8xeHlYRzVjZEZ4MFhIUnRaVzUxVDNCbGJpQTlJR1poYkhObE8xeHlYRzVjZEZ4MGZWeHlYRzVjZEgwcE8xeHlYRzVjY2x4dVhIUXZMeUJ6YTJsc2JDQmlZWElnUVVKUFZWUWdVRUZIUlZ4eVhHNWNkQ1FvSnk1emEybHNiR0poY2ljcExuTnJhV3hzUW1GeWN5aDdYSEpjYmx4MFhIUXZMeUJ1ZFcxaVpYSWdjM1JoY25SY2NseHVYSFJjZEdaeWIyMDZJREFzWEhKY2JseHlYRzVjZEZ4MEx5OGdiblZ0WW1WeUlHVnVaRnh5WEc1Y2RGeDBkRzg2SUdaaGJITmxMRnh5WEc1Y2NseHVYSFJjZEM4dklHRnVhVzFoZEdsdmJpQnpjR1ZsWkZ4eVhHNWNkRngwYzNCbFpXUTZJRE13TURBc1hISmNibHh5WEc1Y2RGeDBMeThnYUc5M0lHOW1kR1Z1SUhSb1pTQmxiR1Z0Wlc1MElITm9iM1ZzWkNCaVpTQjFjRHhoSUdoeVpXWTlYQ0pvZEhSd2N6b3ZMM2QzZHk1cWNYVmxjbmx6WTNKcGNIUXVibVYwTDNScGJXVXRZMnh2WTJzdlhDSStaR0YwWlR3dllUNWtYSEpjYmx4MFhIUnBiblJsY25aaGJEb2dNVEF3TEZ4eVhHNWNjbHh1WEhSY2RDOHZJSFJvWlNCdWRXMWlaWElnYjJZZ1pHVmphVzFoYkNCd2JHRmpaWE1nZEc4Z2MyaHZkMXh5WEc1Y2RGeDBaR1ZqYVcxaGJITTZJREFzWEhKY2JseHlYRzVjZEZ4MEx5OGdZMkZzYkdKaFkyc2diV1YwYUc5a0lHWnZjaUJsZG1WeWVTQjBhVzFsSUhSb1pTQmxiR1Z0Wlc1MElHbHpJSFZ3WkdGMFpXUXNYSEpjYmx4MFhIUnZibFZ3WkdGMFpUb2diblZzYkN4Y2NseHVYSEpjYmx4MFhIUXZMeUJqWVd4c1ltRmpheUJ0WlhSb2IyUWdabTl5SUhkb1pXNGdkR2hsSUdWc1pXMWxiblFnWm1sdWFYTm9aWE1nZFhCa1lYUnBibWRjY2x4dVhIUmNkRzl1UTI5dGNHeGxkR1U2SUc1MWJHd3NYSEpjYmx4eVhHNWNkRngwTHk4Z1ExTlRJR05zWVhOelpYTmNjbHh1WEhSY2RHTnNZWE56WlhNNklIdGNjbHh1WEhSY2RGeDBjMnRwYkd4Q1lYSkNZWEk2SUNjdWMydHBiR3hpWVhJdFltRnlKeXhjY2x4dVhIUmNkRngwYzJ0cGJHeENZWEpRWlhKalpXNTBPaUFuTG5OcmFXeHNMV0poY2kxd1pYSmpaVzUwSnl4Y2NseHVYSFJjZEgwc1hISmNibHgwZlNrN1hISmNibjBwTzF4eVhHNWNjbHh1SkNoM2FXNWtiM2NwTG05dUtDZHpZM0p2Ykd3bkxDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseDBhV1lnS0NRb2QybHVaRzkzS1M1elkzSnZiR3hVYjNBb0tTa2dlMXh5WEc1Y2RGeDBKQ2duTG01aGRpMTBiM0FuS1M1aFpHUkRiR0Z6Y3lnbmJtRjJMWFJ2Y0MwdGMzUnBZMnQ1SnlrN1hISmNibHgwZlNCbGJITmxJSHRjY2x4dVhIUmNkQ1FvSnk1dVlYWXRkRzl3SnlrdWNtVnRiM1psUTJ4aGMzTW9KMjVoZGkxMGIzQXRMWE4wYVdOcmVTY3BPMXh5WEc1Y2RIMWNjbHh1ZlNrN1hISmNibHh5WEc0a0tHUnZZM1Z0Wlc1MEtTNXZiaWduWTJ4cFkyc25MQ0FuTG01aGRpQjFiQ0JzYVNCaEp5d2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNkQ1FvZEdocGN5a3VZV1JrUTJ4aGMzTW9KMkZqZEdsMlpTY3BMbk5wWW14cGJtZHpLQ2t1Y21WdGIzWmxRMnhoYzNNb0oyRmpkR2wyWlNjcE8xeHlYRzU5S1R0Y2NseHVYSEpjYmlRb0p5NXdiM0owWm05c2FXOHRhWFJsYlNjcExtbHpiM1J2Y0dVb2UxeHlYRzVjZEdsMFpXMVRaV3hsWTNSdmNqb2dKeTVwZEdWdEp5eGNjbHh1WEhSc1lYbHZkWFJOYjJSbE9pQW5abWwwVW05M2N5Y3NYSEpjYm4wcE8xeHlYRzVjY2x4dUpDZ25MbkJ2Y25SbWIyeHBieTF0Wlc1MUlIVnNJR3hwSnlrdVkyeHBZMnNvWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjZENRb0p5NXdiM0owWm05c2FXOHRiV1Z1ZFNCMWJDQnNhU2NwTG5KbGJXOTJaVU5zWVhOektDZGhZM1JwZG1VbktUdGNjbHh1WEhRa0tIUm9hWE1wTG1Ga1pFTnNZWE56S0NkaFkzUnBkbVVuS1R0Y2NseHVYSEpjYmx4MGRtRnlJSE5sYkdWamRHOXlJRDBnSkNoMGFHbHpLUzVoZEhSeUtDZGtZWFJoTFdacGJIUmxjaWNwTzF4eVhHNWNkQ1FvSnk1d2IzSjBabTlzYVc4dGFYUmxiU2NwTG1semIzUnZjR1VvZTF4eVhHNWNkRngwWm1sc2RHVnlPaUJ6Wld4bFkzUnZjaXhjY2x4dVhIUjlLVHRjY2x4dVhIUnlaWFIxY200Z1ptRnNjMlU3WEhKY2JuMHBPMXh5WEc0aUxDSXZLaUZjYmlBcUlHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOTFiV0Z5ZDJWaVpHVjJaV3h2Y0dWeUwycHhkV1Z5ZVMxamMzTXRjMnRwYkd4ekxXSmhjbHh1SUNvZ1FYVjBhRzl5T2lCQWRXMWhjbmRsWW1SbGRtVnNiM0JsY2x4dUlDb2dUR2xqWlc1elpXUWdkVzVrWlhJZ2RHaGxJRTFKVkNCc2FXTmxibk5sWEc0Z0tpOWNiaUJjYmlobWRXNWpkR2x2YmlBb0lDUWdLU0I3WEc0Z1hHNGdJQ0FnSkM1bWJpNXphMmxzYkVKaGNuTWdQU0JtZFc1amRHbHZiaWdnYjNCMGFXOXVjeUFwSUh0Y2JpQmNiaUFnSUNBZ0lDQWdkbUZ5SUhObGRIUnBibWR6SUQwZ0pDNWxlSFJsYm1Rb2UxeHVYSFJjZEZ4MFpuSnZiVG9nTUN3Z0lGeDBYSFJjZEM4dklHNTFiV0psY2lCemRHRnlkRnh1WEhSY2RGeDBkRzg2SUdaaGJITmxMRngwWEhSY2RDOHZJRzUxYldKbGNpQmxibVJjYmx4MFhIUmNkSE53WldWa09pQXhNREF3TENBZ1hIUmNkQzh2SUdodmR5QnNiMjVuSUdsMElITm9iM1ZzWkNCMFlXdGxJSFJ2SUdOdmRXNTBJR0psZEhkbFpXNGdkR2hsSUhSaGNtZGxkQ0J1ZFcxaVpYSnpYRzVjZEZ4MFhIUnBiblJsY25aaGJEb2dNVEF3TEZ4MElDQXZMeUJvYjNjZ2IyWjBaVzRnZEdobElHVnNaVzFsYm5RZ2MyaHZkV3hrSUdKbElIVndaR0YwWldSY2JseDBYSFJjZEdSbFkybHRZV3h6T2lBd0xGeDBYSFFnSUM4dklIUm9aU0J1ZFcxaVpYSWdiMllnWkdWamFXMWhiQ0J3YkdGalpYTWdkRzhnYzJodmQxeHVYSFJjZEZ4MGIyNVZjR1JoZEdVNklHNTFiR3dzWEhRZ0lDOHZJR05oYkd4aVlXTnJJRzFsZEdodlpDQm1iM0lnWlhabGNua2dkR2x0WlNCMGFHVWdaV3hsYldWdWRDQnBjeUIxY0dSaGRHVmtMRnh1WEhSY2RGeDBiMjVEYjIxd2JHVjBaVG9nYm5Wc2JDeGNkQ0FnTHk4Z1kyRnNiR0poWTJzZ2JXVjBhRzlrSUdadmNpQjNhR1Z1SUhSb1pTQmxiR1Z0Wlc1MElHWnBibWx6YUdWeklIVndaR0YwYVc1blhHNWNkRngwWEhRdkttOXVRMjl0Y0d4bGRHVTZJR1oxYm1OMGFXOXVLR1p5YjIwcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExtUmxZblZuS0hSb2FYTXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTb3ZYRzVjZEZ4MFhIUmpiR0Z6YzJWek9udGNibHgwWEhSY2RGeDBjMnRwYkd4Q1lYSkNZWElnT2lBbkxuTnJhV3hzWW1GeUxXSmhjaWNzWEc1Y2RGeDBYSFJjZEhOcmFXeHNRbUZ5VUdWeVkyVnVkQ0E2SUNjdWMydHBiR3d0WW1GeUxYQmxjbU5sYm5RbkxGeHVYSFJjZEZ4MGZWeHVJQ0FnSUNBZ0lDQjlMQ0J2Y0hScGIyNXpJQ2s3WEc0Z1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbVZoWTJnb1puVnVZM1JwYjI0b0tYdGNibHgwWEhSY2RGeHVYSFJjZEZ4MGRtRnlJRzlpYWlBOUlDUW9kR2hwY3lrc1hHNWNkRngwWEhSY2RIUnZJRDBnS0hObGRIUnBibWR6TG5SdklDRTlJR1poYkhObEtTQS9JSE5sZEhScGJtZHpMblJ2SURvZ2NHRnljMlZKYm5Rb2IySnFMbUYwZEhJb0oyUmhkR0V0Y0dWeVkyVnVkQ2NwS1R0Y2JseDBYSFJjZEZ4MGFXWW9kRzhnUGlBeE1EQXBlMXh1WEhSY2RGeDBYSFJjZEhSdklEMGdNVEF3TzF4dVhIUmNkRngwWEhSOU8xeHVYSFJjZEZ4MGRtRnlJR1p5YjIwZ1BTQnpaWFIwYVc1bmN5NW1jbTl0TEZ4dVhIUmNkRngwWEhSc2IyOXdjeUE5SUUxaGRHZ3VZMlZwYkNoelpYUjBhVzVuY3k1emNHVmxaQ0F2SUhObGRIUnBibWR6TG1sdWRHVnlkbUZzS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJRngwYVc1amNtVnRaVzUwSUQwZ0tIUnZJQzBnWm5KdmJTa2dMeUJzYjI5d2N5eGNibHgwWEhSY2RGeDBiRzl2Y0VOdmRXNTBJRDBnTUN4Y2JseDBYSFJjZEZ4MGFXNTBaWEoyWVd3Z1BTQnpaWFJKYm5SbGNuWmhiQ2gxY0dSaGRHVldZV3gxWlN3Z2MyVjBkR2x1WjNNdWFXNTBaWEoyWVd3cE8xeHVYSFJjZEZ4MFhHNWNkRngwWEhSdlltb3VabWx1WkNoelpYUjBhVzVuY3k1amJHRnpjMlZ6TG5OcmFXeHNRbUZ5UW1GeUtTNWhibWx0WVhSbEtIdGNibHgwWEhSY2RGeDBkMmxrZEdnNklIQmhjbk5sU1c1MEtHOWlhaTVoZEhSeUtDZGtZWFJoTFhCbGNtTmxiblFuS1Nrckp5VW5YRzVjZEZ4MFhIUjlMQ0J6WlhSMGFXNW5jeTV6Y0dWbFpDazdYRzVjZEZ4MFhIUmNkRngwWEhSY2JseDBYSFJjZEdaMWJtTjBhVzl1SUhWd1pHRjBaVlpoYkhWbEtDbDdYRzVjZEZ4MFhIUmNkR1p5YjIwZ0t6MGdhVzVqY21WdFpXNTBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3h2YjNCRGIzVnVkQ3NyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNRb2IySnFLUzVtYVc1a0tITmxkSFJwYm1kekxtTnNZWE56WlhNdWMydHBiR3hDWVhKUVpYSmpaVzUwS1M1MFpYaDBLR1p5YjIwdWRHOUdhWGhsWkNoelpYUjBhVzVuY3k1a1pXTnBiV0ZzY3lrckp5VW5LVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBlWEJsYjJZb2MyVjBkR2x1WjNNdWIyNVZjR1JoZEdVcElEMDlJQ2RtZFc1amRHbHZiaWNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjMlYwZEdsdVozTXViMjVWY0dSaGRHVXVZMkZzYkNodlltb3NJR1p5YjIwcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoc2IyOXdRMjkxYm5RZ1BqMGdiRzl2Y0hNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJ4bFlYSkpiblJsY25aaGJDaHBiblJsY25aaGJDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdaeWIyMGdQU0IwYnp0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RIbHdaVzltS0hObGRIUnBibWR6TG05dVEyOXRjR3hsZEdVcElEMDlJQ2RtZFc1amRHbHZiaWNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhObGRIUnBibWR6TG05dVEyOXRjR3hsZEdVdVkyRnNiQ2h2WW1vc0lHWnliMjBwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEhSY2RGeDBmVnh1WEhSY2RGeDBYRzRnSUNBZ0lDQWdJSDBwTzF4dUlGeHVJQ0FnSUgwN1hHNGdYRzU5S0NCcVVYVmxjbmtnS1NrN1hHNGlYU3dpYzI5MWNtTmxVbTl2ZENJNklpSjkifQ==
