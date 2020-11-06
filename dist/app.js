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

function goBack() {
	window.history.back();
}


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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zvcm1WYWxpZGFpdG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9za2lsbC5iYXJzLmpxdWVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMseUJBQXlCLDZCQUE2QixJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLGdDQUFnQyxHQUFHO0FBQ2xLO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdkZEO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7O0FBRVQ7O0FBRUEsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdC8vIGZvcm0gdmFsaWRhdGlvblxyXG5cdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1mb3JtJyk7XHJcblx0Y29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XHJcblx0Y29uc3QgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKTtcclxuXHRjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UnKTtcclxuXHRjb25zdCBmb3JtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tYnRuJyk7XHJcblxyXG5cdGlmIChmb3JtKSB7XHJcblx0XHRbXHJcblx0XHRcdCdjbGljaycsXHJcblx0XHRcdCdvbnRvdWNoc3RhcnQnLFxyXG5cdFx0XHQnbW91c2VvdmVyJyxcclxuXHRcdFx0J2tleWRvd24nLFxyXG5cdFx0XHQna2V5cHJlc3MnLFxyXG5cdFx0XHQndG91Y2hzdGFydCcsXHJcblx0XHRcdCd0b3VjaG1vdmUnLFxyXG5cdFx0XS5mb3JFYWNoKFxyXG5cdFx0XHQoZXZlbnQpID0+XHJcblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGNoZWNrSW5wdXRzKCkgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdGZvcm1CdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Zm9ybUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcblx0XHRmdW5jdGlvbiBjaGVja0lucHV0cygpIHtcclxuXHRcdFx0Y29uc3QgbmFtZVZhbHVlID0gbmFtZS52YWx1ZS50cmltKCk7XHJcblx0XHRcdGNvbnN0IGVtYWlsVmFsdWUgPSBlbWFpbC52YWx1ZS50cmltKCk7XHJcblx0XHRcdGNvbnN0IG1lc3NhZ2VWYWx1ZSA9IG1lc3NhZ2UudmFsdWUudHJpbSgpO1xyXG5cclxuXHRcdFx0aWYgKG5hbWVWYWx1ZSA9PT0gJycpIHtcclxuXHRcdFx0XHRzZXRFcnJvckZvcihuYW1lLCAnUGxlYXNlIGVudGVyIHlvdXIgZnVsbCBuYW1lJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0U3VjY2Vzc0ZvcihuYW1lKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGVtYWlsVmFsdWUgPT09ICcnKSB7XHJcblx0XHRcdFx0c2V0RXJyb3JGb3IoZW1haWwsICdQbGVhc2UgZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzJyk7XHJcblx0XHRcdH0gZWxzZSBpZiAoIWVtYWlsSXNWYWxpZChlbWFpbFZhbHVlKSkge1xyXG5cdFx0XHRcdHNldEVycm9yRm9yKGVtYWlsLCAnRW1haWwgaXMgbm90IHZhbGlkJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0U3VjY2Vzc0ZvcihlbWFpbCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChtZXNzYWdlVmFsdWUgPT09ICcnKSB7XHJcblx0XHRcdFx0c2V0RXJyb3JGb3IobWVzc2FnZSwgJ1BsZWFzZSBlbnRlciB5b3VyIG1lc3NhZ2UnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRTdWNjZXNzRm9yKG1lc3NhZ2UpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0bmFtZVZhbHVlID09PSAnJyB8fFxyXG5cdFx0XHRcdGVtYWlsVmFsdWUgPT09ICcnIHx8XHJcblx0XHRcdFx0bWVzc2FnZVZhbHVlID09PSAnJyB8fFxyXG5cdFx0XHRcdCFlbWFpbElzVmFsaWQoZW1haWxWYWx1ZSlcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2V0RXJyb3JGb3IoaW5wdXQsIG1lc3NhZ2UpIHtcclxuXHRcdFx0Y29uc3QgZm9ybSA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdGNvbnN0IHNtYWxsID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdzbWFsbCcpO1xyXG5cclxuXHRcdFx0c21hbGwuaW5uZXJUZXh0ID0gbWVzc2FnZTtcclxuXHRcdFx0Zm9ybS5jbGFzc05hbWUgPSAnZm9ybV9fZ3JvdXAgZXJyb3InO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNldFN1Y2Nlc3NGb3IoaW5wdXQpIHtcclxuXHRcdFx0Y29uc3QgZm9ybSA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdGZvcm0uY2xhc3NOYW1lID0gJ2Zvcm1fX2dyb3VwIHN1Y2Nlc3MnO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGVtYWlsSXNWYWxpZChlbWFpbCkge1xyXG5cdFx0XHRjb25zdCByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvLnRlc3QoXHJcblx0XHRcdFx0ZW1haWxcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHJldHVybiByZTtcclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG4iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblx0JCgnLm1lbnUtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0JCgnbmF2IHVsJykudG9nZ2xlQ2xhc3MoJ3Nob3dpbmcnKTtcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ0bicpO1xyXG5cdGxldCBtZW51T3BlbiA9IGZhbHNlO1xyXG5cdG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRpZiAoIW1lbnVPcGVuKSB7XHJcblx0XHRcdG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG5cdFx0XHRtZW51T3BlbiA9IHRydWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuXHRcdFx0bWVudU9wZW4gPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0Ly8gc2tpbGwgYmFyIEFCT1VUIFBBR0VcclxuXHQkKCcuc2tpbGxiYXInKS5za2lsbEJhcnMoe1xyXG5cdFx0Ly8gbnVtYmVyIHN0YXJ0XHJcblx0XHRmcm9tOiAwLFxyXG5cclxuXHRcdC8vIG51bWJlciBlbmRcclxuXHRcdHRvOiBmYWxzZSxcclxuXHJcblx0XHQvLyBhbmltYXRpb24gc3BlZWRcclxuXHRcdHNwZWVkOiAzMDAwLFxyXG5cclxuXHRcdC8vIGhvdyBvZnRlbiB0aGUgZWxlbWVudCBzaG91bGQgYmUgdXA8YSBocmVmPVwiaHR0cHM6Ly93d3cuanF1ZXJ5c2NyaXB0Lm5ldC90aW1lLWNsb2NrL1wiPmRhdGU8L2E+ZFxyXG5cdFx0aW50ZXJ2YWw6IDEwMCxcclxuXHJcblx0XHQvLyB0aGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIHRvIHNob3dcclxuXHRcdGRlY2ltYWxzOiAwLFxyXG5cclxuXHRcdC8vIGNhbGxiYWNrIG1ldGhvZCBmb3IgZXZlcnkgdGltZSB0aGUgZWxlbWVudCBpcyB1cGRhdGVkLFxyXG5cdFx0b25VcGRhdGU6IG51bGwsXHJcblxyXG5cdFx0Ly8gY2FsbGJhY2sgbWV0aG9kIGZvciB3aGVuIHRoZSBlbGVtZW50IGZpbmlzaGVzIHVwZGF0aW5nXHJcblx0XHRvbkNvbXBsZXRlOiBudWxsLFxyXG5cclxuXHRcdC8vIENTUyBjbGFzc2VzXHJcblx0XHRjbGFzc2VzOiB7XHJcblx0XHRcdHNraWxsQmFyQmFyOiAnLnNraWxsYmFyLWJhcicsXHJcblx0XHRcdHNraWxsQmFyUGVyY2VudDogJy5za2lsbC1iYXItcGVyY2VudCcsXHJcblx0XHR9LFxyXG5cdH0pO1xyXG59KTtcclxuXHJcbiQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG5cdGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkpIHtcclxuXHRcdCQoJy5uYXYtdG9wJykuYWRkQ2xhc3MoJ25hdi10b3AtLXN0aWNreScpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKCcubmF2LXRvcCcpLnJlbW92ZUNsYXNzKCduYXYtdG9wLS1zdGlja3knKTtcclxuXHR9XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5uYXYgdWwgbGkgYScsIGZ1bmN0aW9uICgpIHtcclxuXHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxufSk7XHJcblxyXG4kKCcucG9ydGZvbGlvLWl0ZW0nKS5pc290b3BlKHtcclxuXHRpdGVtU2VsZWN0b3I6ICcuaXRlbScsXHJcblx0bGF5b3V0TW9kZTogJ2ZpdFJvd3MnLFxyXG59KTtcclxuXHJcbiQoJy5wb3J0Zm9saW8tbWVudSB1bCBsaScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHQkKCcucG9ydGZvbGlvLW1lbnUgdWwgbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG5cdHZhciBzZWxlY3RvciA9ICQodGhpcykuYXR0cignZGF0YS1maWx0ZXInKTtcclxuXHQkKCcucG9ydGZvbGlvLWl0ZW0nKS5pc290b3BlKHtcclxuXHRcdGZpbHRlcjogc2VsZWN0b3IsXHJcblx0fSk7XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGdvQmFjaygpIHtcclxuXHR3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcbn1cclxuIiwiLyohXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdW1hcndlYmRldmVsb3Blci9qcXVlcnktY3NzLXNraWxscy1iYXJcbiAqIEF1dGhvcjogQHVtYXJ3ZWJkZXZlbG9wZXJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG4gXG4oZnVuY3Rpb24gKCAkICkge1xuIFxuICAgICQuZm4uc2tpbGxCYXJzID0gZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG4gXG4gICAgICAgIHZhciBzZXR0aW5ncyA9ICQuZXh0ZW5kKHtcblx0XHRcdGZyb206IDAsICBcdFx0XHQvLyBudW1iZXIgc3RhcnRcblx0XHRcdHRvOiBmYWxzZSxcdFx0XHQvLyBudW1iZXIgZW5kXG5cdFx0XHRzcGVlZDogMTAwMCwgIFx0XHQvLyBob3cgbG9uZyBpdCBzaG91bGQgdGFrZSB0byBjb3VudCBiZXR3ZWVuIHRoZSB0YXJnZXQgbnVtYmVyc1xuXHRcdFx0aW50ZXJ2YWw6IDEwMCxcdCAgLy8gaG93IG9mdGVuIHRoZSBlbGVtZW50IHNob3VsZCBiZSB1cGRhdGVkXG5cdFx0XHRkZWNpbWFsczogMCxcdFx0ICAvLyB0aGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIHRvIHNob3dcblx0XHRcdG9uVXBkYXRlOiBudWxsLFx0ICAvLyBjYWxsYmFjayBtZXRob2QgZm9yIGV2ZXJ5IHRpbWUgdGhlIGVsZW1lbnQgaXMgdXBkYXRlZCxcblx0XHRcdG9uQ29tcGxldGU6IG51bGwsXHQgIC8vIGNhbGxiYWNrIG1ldGhvZCBmb3Igd2hlbiB0aGUgZWxlbWVudCBmaW5pc2hlcyB1cGRhdGluZ1xuXHRcdFx0LypvbkNvbXBsZXRlOiBmdW5jdGlvbihmcm9tKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1Zyh0aGlzKTtcbiAgICAgICAgICAgIH0qL1xuXHRcdFx0Y2xhc3Nlczp7XG5cdFx0XHRcdHNraWxsQmFyQmFyIDogJy5za2lsbGJhci1iYXInLFxuXHRcdFx0XHRza2lsbEJhclBlcmNlbnQgOiAnLnNraWxsLWJhci1wZXJjZW50Jyxcblx0XHRcdH1cbiAgICAgICAgfSwgb3B0aW9ucyApO1xuIFxuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0XHRcblx0XHRcdHZhciBvYmogPSAkKHRoaXMpLFxuXHRcdFx0XHR0byA9IChzZXR0aW5ncy50byAhPSBmYWxzZSkgPyBzZXR0aW5ncy50byA6IHBhcnNlSW50KG9iai5hdHRyKCdkYXRhLXBlcmNlbnQnKSk7XG5cdFx0XHRcdGlmKHRvID4gMTAwKXtcblx0XHRcdFx0XHR0byA9IDEwMDtcblx0XHRcdFx0fTtcblx0XHRcdHZhciBmcm9tID0gc2V0dGluZ3MuZnJvbSxcblx0XHRcdFx0bG9vcHMgPSBNYXRoLmNlaWwoc2V0dGluZ3Muc3BlZWQgLyBzZXR0aW5ncy5pbnRlcnZhbCksXG4gICAgICAgICAgICBcdGluY3JlbWVudCA9ICh0byAtIGZyb20pIC8gbG9vcHMsXG5cdFx0XHRcdGxvb3BDb3VudCA9IDAsXG5cdFx0XHRcdGludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlVmFsdWUsIHNldHRpbmdzLmludGVydmFsKTtcblx0XHRcdFxuXHRcdFx0b2JqLmZpbmQoc2V0dGluZ3MuY2xhc3Nlcy5za2lsbEJhckJhcikuYW5pbWF0ZSh7XG5cdFx0XHRcdHdpZHRoOiBwYXJzZUludChvYmouYXR0cignZGF0YS1wZXJjZW50JykpKyclJ1xuXHRcdFx0fSwgc2V0dGluZ3Muc3BlZWQpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRmdW5jdGlvbiB1cGRhdGVWYWx1ZSgpe1xuXHRcdFx0XHRmcm9tICs9IGluY3JlbWVudDtcbiAgICAgICAgICAgICAgICBsb29wQ291bnQrKztcbiAgICAgICAgICAgICAgICAkKG9iaikuZmluZChzZXR0aW5ncy5jbGFzc2VzLnNraWxsQmFyUGVyY2VudCkudGV4dChmcm9tLnRvRml4ZWQoc2V0dGluZ3MuZGVjaW1hbHMpKyclJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mKHNldHRpbmdzLm9uVXBkYXRlKSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLm9uVXBkYXRlLmNhbGwob2JqLCBmcm9tKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobG9vcENvdW50ID49IGxvb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICBmcm9tID0gdG87XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZihzZXR0aW5ncy5vbkNvbXBsZXRlKSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5vbkNvbXBsZXRlLmNhbGwob2JqLCBmcm9tKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblx0XHRcdH1cblx0XHRcdFxuICAgICAgICB9KTtcbiBcbiAgICB9O1xuIFxufSggalF1ZXJ5ICkpO1xuIl0sInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OWliMjkwYzNSeVlYQWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMnB6TDJadmNtMVdZV3hwWkdGcGRHOXVMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5cWN5OXRZV2x1TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OXFjeTl6YTJsc2JDNWlZWEp6TG1weGRXVnllUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzFGQlFVRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN096dFJRVWRCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHM3VVVGRlFUdFJRVU5CTzFGQlEwRTdVVUZEUVN3d1EwRkJNRU1zWjBOQlFXZERPMUZCUXpGRk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFc2QwUkJRWGRFTEd0Q1FVRnJRanRSUVVNeFJUdFJRVU5CTEdsRVFVRnBSQ3hqUVVGak8xRkJReTlFT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3g1UTBGQmVVTXNhVU5CUVdsRE8xRkJRekZGTEdkSVFVRm5TQ3h0UWtGQmJVSXNSVUZCUlR0UlFVTnlTVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdVVUZEUVR0UlFVTkJMREpDUVVFeVFpd3dRa0ZCTUVJc1JVRkJSVHRSUVVOMlJDeHBRMEZCYVVNc1pVRkJaVHRSUVVOb1JEdFJRVU5CTzFGQlEwRTdPMUZCUlVFN1VVRkRRU3h6UkVGQmMwUXNLMFJCUVN0RU96dFJRVVZ5U0R0UlFVTkJPenM3VVVGSFFUdFJRVU5CT3pzN096czdPenM3T3pzN1FVTnNSa0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRTFCUVUwN1FVRkRUanRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRWxCUVVrN1FVRkRTanRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4SlFVRkpPMEZCUTBvN1FVRkRRU3hKUVVGSk8wRkJRMG83UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1NVRkJTVHRCUVVOS08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEpRVUZKTzBGQlEwbzdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hwUTBGQmFVTXNlVUpCUVhsQ0xEWkNRVUUyUWl4SlFVRkpMRkZCUVZFc1NVRkJTU3hSUVVGUkxFbEJRVWtzVVVGQlVTeEpRVUZKTEdkRFFVRm5ReXhIUVVGSE8wRkJRMnhMTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUTBGQlF6czdPenM3T3pzN096czdPMEZEZGtaRU8wRkJRMEU3UVVGRFFUdEJRVU5CTEVWQlFVVTdPMEZCUlVZN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQkxFVkJRVVU3TzBGQlJVWTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZ3NSVUZCUlR0QlFVTkdMRU5CUVVNN08wRkJSVVE3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlR0QlFVTkdPMEZCUTBFN1FVRkRRU3hEUVVGRE96dEJRVVZFTzBGQlEwRTdRVUZEUVN4RFFVRkRPenRCUVVWRU8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdPMEZCUlVRN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRVZCUVVVN1FVRkRSanRCUVVOQkxFTkJRVU03TzBGQlJVUTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3UVVNNVJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHRkJRV0U3UVVGRFlqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN08wRkJSVlE3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFbEJRVWs3TzBGQlJVbzdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQkxGTkJRVk03TzBGQlJWUTdPMEZCUlVFc1EwRkJReUlzSW1acGJHVWlPaUkyWldKaVpERTFNalZsTjJJeU5HVTFObVUzT0M1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaUJjZEM4dklGUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkSFpoY2lCcGJuTjBZV3hzWldSTmIyUjFiR1Z6SUQwZ2UzMDdYRzVjYmlCY2RDOHZJRlJvWlNCeVpYRjFhWEpsSUdaMWJtTjBhVzl1WEc0Z1hIUm1kVzVqZEdsdmJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRzF2WkhWc1pVbGtLU0I3WEc1Y2JpQmNkRngwTHk4Z1EyaGxZMnNnYVdZZ2JXOWtkV3hsSUdseklHbHVJR05oWTJobFhHNGdYSFJjZEdsbUtHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZEtTQjdYRzRnWEhSY2RGeDBjbVYwZFhKdUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtVjRjRzl5ZEhNN1hHNGdYSFJjZEgxY2JpQmNkRngwTHk4Z1EzSmxZWFJsSUdFZ2JtVjNJRzF2WkhWc1pTQW9ZVzVrSUhCMWRDQnBkQ0JwYm5SdklIUm9aU0JqWVdOb1pTbGNiaUJjZEZ4MGRtRnlJRzF2WkhWc1pTQTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRJRDBnZTF4dUlGeDBYSFJjZEdrNklHMXZaSFZzWlVsa0xGeHVJRngwWEhSY2RHdzZJR1poYkhObExGeHVJRngwWEhSY2RHVjRjRzl5ZEhNNklIdDlYRzRnWEhSY2RIMDdYRzVjYmlCY2RGeDBMeThnUlhobFkzVjBaU0IwYUdVZ2JXOWtkV3hsSUdaMWJtTjBhVzl1WEc0Z1hIUmNkRzF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbU5oYkd3b2JXOWtkV3hsTG1WNGNHOXlkSE1zSUcxdlpIVnNaU3dnYlc5a2RXeGxMbVY0Y0c5eWRITXNJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThwTzF4dVhHNGdYSFJjZEM4dklFWnNZV2NnZEdobElHMXZaSFZzWlNCaGN5QnNiMkZrWldSY2JpQmNkRngwYlc5a2RXeGxMbXdnUFNCMGNuVmxPMXh1WEc0Z1hIUmNkQzh2SUZKbGRIVnliaUIwYUdVZ1pYaHdiM0owY3lCdlppQjBhR1VnYlc5a2RXeGxYRzRnWEhSY2RISmxkSFZ5YmlCdGIyUjFiR1V1Wlhod2IzSjBjenRjYmlCY2RIMWNibHh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaWE1nYjJKcVpXTjBJQ2hmWDNkbFluQmhZMnRmYlc5a2RXeGxjMTlmS1Z4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV0SUQwZ2JXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVZeUE5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdSbFptbHVaU0JuWlhSMFpYSWdablZ1WTNScGIyNGdabTl5SUdoaGNtMXZibmtnWlhod2IzSjBjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtJRDBnWm5WdVkzUnBiMjRvWlhod2IzSjBjeXdnYm1GdFpTd2daMlYwZEdWeUtTQjdYRzRnWEhSY2RHbG1LQ0ZmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04b1pYaHdiM0owY3l3Z2JtRnRaU2twSUh0Y2JpQmNkRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dibUZ0WlN3Z2V5QmxiblZ0WlhKaFlteGxPaUIwY25WbExDQm5aWFE2SUdkbGRIUmxjaUI5S1R0Y2JpQmNkRngwZlZ4dUlGeDBmVHRjYmx4dUlGeDBMeThnWkdWbWFXNWxJRjlmWlhOTmIyUjFiR1VnYjI0Z1pYaHdiM0owYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV5SUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3lrZ2UxeHVJRngwWEhScFppaDBlWEJsYjJZZ1UzbHRZbTlzSUNFOVBTQW5kVzVrWldacGJtVmtKeUFtSmlCVGVXMWliMnd1ZEc5VGRISnBibWRVWVdjcElIdGNiaUJjZEZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuTENCN0lIWmhiSFZsT2lBblRXOWtkV3hsSnlCOUtUdGNiaUJjZEZ4MGZWeHVJRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dKMTlmWlhOTmIyUjFiR1VuTENCN0lIWmhiSFZsT2lCMGNuVmxJSDBwTzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnWTNKbFlYUmxJR0VnWm1GclpTQnVZVzFsYzNCaFkyVWdiMkpxWldOMFhHNGdYSFF2THlCdGIyUmxJQ1lnTVRvZ2RtRnNkV1VnYVhNZ1lTQnRiMlIxYkdVZ2FXUXNJSEpsY1hWcGNtVWdhWFJjYmlCY2RDOHZJRzF2WkdVZ0ppQXlPaUJ0WlhKblpTQmhiR3dnY0hKdmNHVnlkR2xsY3lCdlppQjJZV3gxWlNCcGJuUnZJSFJvWlNCdWMxeHVJRngwTHk4Z2JXOWtaU0FtSURRNklISmxkSFZ5YmlCMllXeDFaU0IzYUdWdUlHRnNjbVZoWkhrZ2JuTWdiMkpxWldOMFhHNGdYSFF2THlCdGIyUmxJQ1lnT0h3eE9pQmlaV2hoZG1VZ2JHbHJaU0J5WlhGMWFYSmxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuUWdQU0JtZFc1amRHbHZiaWgyWVd4MVpTd2diVzlrWlNrZ2UxeHVJRngwWEhScFppaHRiMlJsSUNZZ01Ta2dkbUZzZFdVZ1BTQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLSFpoYkhWbEtUdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlEZ3BJSEpsZEhWeWJpQjJZV3gxWlR0Y2JpQmNkRngwYVdZb0tHMXZaR1VnSmlBMEtTQW1KaUIwZVhCbGIyWWdkbUZzZFdVZ1BUMDlJQ2R2WW1wbFkzUW5JQ1ltSUhaaGJIVmxJQ1ltSUhaaGJIVmxMbDlmWlhOTmIyUjFiR1VwSUhKbGRIVnliaUIyWVd4MVpUdGNiaUJjZEZ4MGRtRnlJRzV6SUQwZ1QySnFaV04wTG1OeVpXRjBaU2h1ZFd4c0tUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXlLRzV6S1R0Y2JpQmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHNXpMQ0FuWkdWbVlYVnNkQ2NzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z2RtRnNkV1U2SUhaaGJIVmxJSDBwTzF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnTWlBbUppQjBlWEJsYjJZZ2RtRnNkV1VnSVQwZ0ozTjBjbWx1WnljcElHWnZjaWgyWVhJZ2EyVjVJR2x1SUhaaGJIVmxLU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1Rb2JuTXNJR3RsZVN3Z1puVnVZM1JwYjI0b2EyVjVLU0I3SUhKbGRIVnliaUIyWVd4MVpWdHJaWGxkT3lCOUxtSnBibVFvYm5Wc2JDd2dhMlY1S1NrN1hHNGdYSFJjZEhKbGRIVnliaUJ1Y3p0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdkbGRFUmxabUYxYkhSRmVIQnZjblFnWm5WdVkzUnBiMjRnWm05eUlHTnZiWEJoZEdsaWFXeHBkSGtnZDJsMGFDQnViMjR0YUdGeWJXOXVlU0J0YjJSMWJHVnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtNGdQU0JtZFc1amRHbHZiaWh0YjJSMWJHVXBJSHRjYmlCY2RGeDBkbUZ5SUdkbGRIUmxjaUE5SUcxdlpIVnNaU0FtSmlCdGIyUjFiR1V1WDE5bGMwMXZaSFZzWlNBL1hHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBSR1ZtWVhWc2RDZ3BJSHNnY21WMGRYSnVJRzF2WkhWc1pWc25aR1ZtWVhWc2RDZGRPeUI5SURwY2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUk5iMlIxYkdWRmVIQnZjblJ6S0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsT3lCOU8xeHVJRngwWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUW9aMlYwZEdWeUxDQW5ZU2NzSUdkbGRIUmxjaWs3WEc0Z1hIUmNkSEpsZEhWeWJpQm5aWFIwWlhJN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd4Y2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlBOUlHWjFibU4wYVc5dUtHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcElIc2djbVYwZFhKdUlFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaHZZbXBsWTNRc0lIQnliM0JsY25SNUtUc2dmVHRjYmx4dUlGeDBMeThnWDE5M1pXSndZV05yWDNCMVlteHBZMTl3WVhSb1gxOWNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNDQTlJRndpWENJN1hHNWNibHh1SUZ4MEx5OGdURzloWkNCbGJuUnllU0J0YjJSMWJHVWdZVzVrSUhKbGRIVnliaUJsZUhCdmNuUnpYRzRnWEhSeVpYUjFjbTRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuTWdQU0F3S1R0Y2JpSXNJbVJ2WTNWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMFJQVFVOdmJuUmxiblJNYjJGa1pXUW5MQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHgwTHk4Z1ptOXliU0IyWVd4cFpHRjBhVzl1WEhKY2JseDBZMjl1YzNRZ1ptOXliU0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RqYjI1MFlXTjBMV1p2Y20wbktUdGNjbHh1WEhSamIyNXpkQ0J1WVcxbElEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyNWhiV1VuS1R0Y2NseHVYSFJqYjI1emRDQmxiV0ZwYkNBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkbGJXRnBiQ2NwTzF4eVhHNWNkR052Ym5OMElHMWxjM05oWjJVZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnbmJXVnpjMkZuWlNjcE8xeHlYRzVjZEdOdmJuTjBJR1p2Y20xQ2RHNGdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25abTl5YlMxaWRHNG5LVHRjY2x4dVhISmNibHgwYVdZZ0tHWnZjbTBwSUh0Y2NseHVYSFJjZEZ0Y2NseHVYSFJjZEZ4MEoyTnNhV05ySnl4Y2NseHVYSFJjZEZ4MEoyOXVkRzkxWTJoemRHRnlkQ2NzWEhKY2JseDBYSFJjZENkdGIzVnpaVzkyWlhJbkxGeHlYRzVjZEZ4MFhIUW5hMlY1Wkc5M2JpY3NYSEpjYmx4MFhIUmNkQ2RyWlhsd2NtVnpjeWNzWEhKY2JseDBYSFJjZENkMGIzVmphSE4wWVhKMEp5eGNjbHh1WEhSY2RGeDBKM1J2ZFdOb2JXOTJaU2NzWEhKY2JseDBYSFJkTG1admNrVmhZMmdvWEhKY2JseDBYSFJjZENobGRtVnVkQ2tnUFQ1Y2NseHVYSFJjZEZ4MFhIUmtiMk4xYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtHVjJaVzUwTENBb0tTQTlQaUI3WEhKY2JseDBYSFJjZEZ4MFhIUnBaaUFvWTJobFkydEpibkIxZEhNb0tTQTlQVDBnWm1Gc2MyVXBJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBabTl5YlVKMGJpNWthWE5oWW14bFpDQTlJSFJ5ZFdVN1hISmNibHgwWEhSY2RGeDBYSFI5SUdWc2MyVWdlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUm1iM0p0UW5SdUxtUnBjMkZpYkdWa0lEMGdabUZzYzJVN1hISmNibHgwWEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEZ4MGZTa3NYSEpjYmx4MFhIUmNkR1poYkhObFhISmNibHgwWEhRcE8xeHlYRzVjY2x4dVhIUmNkR1oxYm1OMGFXOXVJR05vWldOclNXNXdkWFJ6S0NrZ2UxeHlYRzVjZEZ4MFhIUmpiMjV6ZENCdVlXMWxWbUZzZFdVZ1BTQnVZVzFsTG5aaGJIVmxMblJ5YVcwb0tUdGNjbHh1WEhSY2RGeDBZMjl1YzNRZ1pXMWhhV3hXWVd4MVpTQTlJR1Z0WVdsc0xuWmhiSFZsTG5SeWFXMG9LVHRjY2x4dVhIUmNkRngwWTI5dWMzUWdiV1Z6YzJGblpWWmhiSFZsSUQwZ2JXVnpjMkZuWlM1MllXeDFaUzUwY21sdEtDazdYSEpjYmx4eVhHNWNkRngwWEhScFppQW9ibUZ0WlZaaGJIVmxJRDA5UFNBbkp5a2dlMXh5WEc1Y2RGeDBYSFJjZEhObGRFVnljbTl5Um05eUtHNWhiV1VzSUNkUWJHVmhjMlVnWlc1MFpYSWdlVzkxY2lCbWRXeHNJRzVoYldVbktUdGNjbHh1WEhSY2RGeDBmU0JsYkhObElIdGNjbHh1WEhSY2RGeDBYSFJ6WlhSVGRXTmpaWE56Um05eUtHNWhiV1VwTzF4eVhHNWNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJwWmlBb1pXMWhhV3hXWVd4MVpTQTlQVDBnSnljcElIdGNjbHh1WEhSY2RGeDBYSFJ6WlhSRmNuSnZja1p2Y2lobGJXRnBiQ3dnSjFCc1pXRnpaU0JsYm5SbGNpQjViM1Z5SUdWdFlXbHNJR0ZrWkhKbGMzTW5LVHRjY2x4dVhIUmNkRngwZlNCbGJITmxJR2xtSUNnaFpXMWhhV3hKYzFaaGJHbGtLR1Z0WVdsc1ZtRnNkV1VwS1NCN1hISmNibHgwWEhSY2RGeDBjMlYwUlhKeWIzSkdiM0lvWlcxaGFXd3NJQ2RGYldGcGJDQnBjeUJ1YjNRZ2RtRnNhV1FuS1R0Y2NseHVYSFJjZEZ4MGZTQmxiSE5sSUh0Y2NseHVYSFJjZEZ4MFhIUnpaWFJUZFdOalpYTnpSbTl5S0dWdFlXbHNLVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBhV1lnS0cxbGMzTmhaMlZXWVd4MVpTQTlQVDBnSnljcElIdGNjbHh1WEhSY2RGeDBYSFJ6WlhSRmNuSnZja1p2Y2lodFpYTnpZV2RsTENBblVHeGxZWE5sSUdWdWRHVnlJSGx2ZFhJZ2JXVnpjMkZuWlNjcE8xeHlYRzVjZEZ4MFhIUjlJR1ZzYzJVZ2UxeHlYRzVjZEZ4MFhIUmNkSE5sZEZOMVkyTmxjM05HYjNJb2JXVnpjMkZuWlNrN1hISmNibHgwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEdsbUlDaGNjbHh1WEhSY2RGeDBYSFJ1WVcxbFZtRnNkV1VnUFQwOUlDY25JSHg4WEhKY2JseDBYSFJjZEZ4MFpXMWhhV3hXWVd4MVpTQTlQVDBnSnljZ2ZIeGNjbHh1WEhSY2RGeDBYSFJ0WlhOellXZGxWbUZzZFdVZ1BUMDlJQ2NuSUh4OFhISmNibHgwWEhSY2RGeDBJV1Z0WVdsc1NYTldZV3hwWkNobGJXRnBiRlpoYkhWbEtWeHlYRzVjZEZ4MFhIUXBJSHRjY2x4dVhIUmNkRngwWEhSeVpYUjFjbTRnWm1Gc2MyVTdYSEpjYmx4MFhIUmNkSDBnWld4elpTQjdYSEpjYmx4MFhIUmNkRngwY21WMGRYSnVJSFJ5ZFdVN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RIMWNjbHh1WEhKY2JseDBYSFJtZFc1amRHbHZiaUJ6WlhSRmNuSnZja1p2Y2locGJuQjFkQ3dnYldWemMyRm5aU2tnZTF4eVhHNWNkRngwWEhSamIyNXpkQ0JtYjNKdElEMGdhVzV3ZFhRdWNHRnlaVzUwUld4bGJXVnVkRHRjY2x4dVhIUmNkRngwWTI5dWMzUWdjMjFoYkd3Z1BTQm1iM0p0TG5GMVpYSjVVMlZzWldOMGIzSW9KM050WVd4c0p5azdYSEpjYmx4eVhHNWNkRngwWEhSemJXRnNiQzVwYm01bGNsUmxlSFFnUFNCdFpYTnpZV2RsTzF4eVhHNWNkRngwWEhSbWIzSnRMbU5zWVhOelRtRnRaU0E5SUNkbWIzSnRYMTluY205MWNDQmxjbkp2Y2ljN1hISmNibHgwWEhSOVhISmNibHh5WEc1Y2RGeDBablZ1WTNScGIyNGdjMlYwVTNWalkyVnpjMFp2Y2locGJuQjFkQ2tnZTF4eVhHNWNkRngwWEhSamIyNXpkQ0JtYjNKdElEMGdhVzV3ZFhRdWNHRnlaVzUwUld4bGJXVnVkRHRjY2x4dVhIUmNkRngwWm05eWJTNWpiR0Z6YzA1aGJXVWdQU0FuWm05eWJWOWZaM0p2ZFhBZ2MzVmpZMlZ6Y3ljN1hISmNibHgwWEhSOVhISmNibHh5WEc1Y2RGeDBablZ1WTNScGIyNGdaVzFoYVd4SmMxWmhiR2xrS0dWdFlXbHNLU0I3WEhKY2JseDBYSFJjZEdOdmJuTjBJSEpsSUQwZ0wxNG9LRnRlUEQ0b0tWeGNXMXhjWFZ4Y1hGd3VMRHM2WEZ4elFGd2lYU3NvWEZ3dVcxNDhQaWdwWEZ4YlhGeGRYRnhjWEM0c096cGNYSE5BWENKZEt5a3FLWHdvWENJdUsxd2lLU2xBS0NoY1hGdGJNQzA1WFhzeExETjlYRnd1V3pBdE9WMTdNU3d6ZlZ4Y0xsc3dMVGxkZXpFc00zMWNYQzViTUMwNVhYc3hMRE45WFNsOEtDaGJZUzE2UVMxYVhGd3RNQzA1WFN0Y1hDNHBLMXRoTFhwQkxWcGRleklzZlNrcEpDOHVkR1Z6ZENoY2NseHVYSFJjZEZ4MFhIUmxiV0ZwYkZ4eVhHNWNkRngwWEhRcE8xeHlYRzVjY2x4dVhIUmNkRngwY21WMGRYSnVJSEpsTzF4eVhHNWNkRngwZlZ4eVhHNWNkSDFjY2x4dWZTazdYSEpjYmlJc0lpUW9aRzlqZFcxbGJuUXBMbkpsWVdSNUtHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhIUWtLQ2N1YldWdWRTMWlkRzRuS1M1dmJpZ25ZMnhwWTJzbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseDBYSFFrS0NkdVlYWWdkV3duS1M1MGIyZG5iR1ZEYkdGemN5Z25jMmh2ZDJsdVp5Y3BPMXh5WEc1Y2RIMHBPMXh5WEc1Y2NseHVYSFJqYjI1emRDQnRaVzUxUW5SdUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxtMWxiblV0WW5SdUp5azdYSEpjYmx4MGJHVjBJRzFsYm5WUGNHVnVJRDBnWm1Gc2MyVTdYSEpjYmx4MGJXVnVkVUowYmk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUNncElEMCtJSHRjY2x4dVhIUmNkR2xtSUNnaGJXVnVkVTl3Wlc0cElIdGNjbHh1WEhSY2RGeDBiV1Z1ZFVKMGJpNWpiR0Z6YzB4cGMzUXVZV1JrS0NkdmNHVnVKeWs3WEhKY2JseDBYSFJjZEcxbGJuVlBjR1Z1SUQwZ2RISjFaVHRjY2x4dVhIUmNkSDBnWld4elpTQjdYSEpjYmx4MFhIUmNkRzFsYm5WQ2RHNHVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTZ25iM0JsYmljcE8xeHlYRzVjZEZ4MFhIUnRaVzUxVDNCbGJpQTlJR1poYkhObE8xeHlYRzVjZEZ4MGZWeHlYRzVjZEgwcE8xeHlYRzVjY2x4dVhIUXZMeUJ6YTJsc2JDQmlZWElnUVVKUFZWUWdVRUZIUlZ4eVhHNWNkQ1FvSnk1emEybHNiR0poY2ljcExuTnJhV3hzUW1GeWN5aDdYSEpjYmx4MFhIUXZMeUJ1ZFcxaVpYSWdjM1JoY25SY2NseHVYSFJjZEdaeWIyMDZJREFzWEhKY2JseHlYRzVjZEZ4MEx5OGdiblZ0WW1WeUlHVnVaRnh5WEc1Y2RGeDBkRzg2SUdaaGJITmxMRnh5WEc1Y2NseHVYSFJjZEM4dklHRnVhVzFoZEdsdmJpQnpjR1ZsWkZ4eVhHNWNkRngwYzNCbFpXUTZJRE13TURBc1hISmNibHh5WEc1Y2RGeDBMeThnYUc5M0lHOW1kR1Z1SUhSb1pTQmxiR1Z0Wlc1MElITm9iM1ZzWkNCaVpTQjFjRHhoSUdoeVpXWTlYQ0pvZEhSd2N6b3ZMM2QzZHk1cWNYVmxjbmx6WTNKcGNIUXVibVYwTDNScGJXVXRZMnh2WTJzdlhDSStaR0YwWlR3dllUNWtYSEpjYmx4MFhIUnBiblJsY25aaGJEb2dNVEF3TEZ4eVhHNWNjbHh1WEhSY2RDOHZJSFJvWlNCdWRXMWlaWElnYjJZZ1pHVmphVzFoYkNCd2JHRmpaWE1nZEc4Z2MyaHZkMXh5WEc1Y2RGeDBaR1ZqYVcxaGJITTZJREFzWEhKY2JseHlYRzVjZEZ4MEx5OGdZMkZzYkdKaFkyc2diV1YwYUc5a0lHWnZjaUJsZG1WeWVTQjBhVzFsSUhSb1pTQmxiR1Z0Wlc1MElHbHpJSFZ3WkdGMFpXUXNYSEpjYmx4MFhIUnZibFZ3WkdGMFpUb2diblZzYkN4Y2NseHVYSEpjYmx4MFhIUXZMeUJqWVd4c1ltRmpheUJ0WlhSb2IyUWdabTl5SUhkb1pXNGdkR2hsSUdWc1pXMWxiblFnWm1sdWFYTm9aWE1nZFhCa1lYUnBibWRjY2x4dVhIUmNkRzl1UTI5dGNHeGxkR1U2SUc1MWJHd3NYSEpjYmx4eVhHNWNkRngwTHk4Z1ExTlRJR05zWVhOelpYTmNjbHh1WEhSY2RHTnNZWE56WlhNNklIdGNjbHh1WEhSY2RGeDBjMnRwYkd4Q1lYSkNZWEk2SUNjdWMydHBiR3hpWVhJdFltRnlKeXhjY2x4dVhIUmNkRngwYzJ0cGJHeENZWEpRWlhKalpXNTBPaUFuTG5OcmFXeHNMV0poY2kxd1pYSmpaVzUwSnl4Y2NseHVYSFJjZEgwc1hISmNibHgwZlNrN1hISmNibjBwTzF4eVhHNWNjbHh1SkNoM2FXNWtiM2NwTG05dUtDZHpZM0p2Ykd3bkxDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseDBhV1lnS0NRb2QybHVaRzkzS1M1elkzSnZiR3hVYjNBb0tTa2dlMXh5WEc1Y2RGeDBKQ2duTG01aGRpMTBiM0FuS1M1aFpHUkRiR0Z6Y3lnbmJtRjJMWFJ2Y0MwdGMzUnBZMnQ1SnlrN1hISmNibHgwZlNCbGJITmxJSHRjY2x4dVhIUmNkQ1FvSnk1dVlYWXRkRzl3SnlrdWNtVnRiM1psUTJ4aGMzTW9KMjVoZGkxMGIzQXRMWE4wYVdOcmVTY3BPMXh5WEc1Y2RIMWNjbHh1ZlNrN1hISmNibHh5WEc0a0tHUnZZM1Z0Wlc1MEtTNXZiaWduWTJ4cFkyc25MQ0FuTG01aGRpQjFiQ0JzYVNCaEp5d2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNkQ1FvZEdocGN5a3VZV1JrUTJ4aGMzTW9KMkZqZEdsMlpTY3BMbk5wWW14cGJtZHpLQ2t1Y21WdGIzWmxRMnhoYzNNb0oyRmpkR2wyWlNjcE8xeHlYRzU5S1R0Y2NseHVYSEpjYmlRb0p5NXdiM0owWm05c2FXOHRhWFJsYlNjcExtbHpiM1J2Y0dVb2UxeHlYRzVjZEdsMFpXMVRaV3hsWTNSdmNqb2dKeTVwZEdWdEp5eGNjbHh1WEhSc1lYbHZkWFJOYjJSbE9pQW5abWwwVW05M2N5Y3NYSEpjYm4wcE8xeHlYRzVjY2x4dUpDZ25MbkJ2Y25SbWIyeHBieTF0Wlc1MUlIVnNJR3hwSnlrdVkyeHBZMnNvWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjZENRb0p5NXdiM0owWm05c2FXOHRiV1Z1ZFNCMWJDQnNhU2NwTG5KbGJXOTJaVU5zWVhOektDZGhZM1JwZG1VbktUdGNjbHh1WEhRa0tIUm9hWE1wTG1Ga1pFTnNZWE56S0NkaFkzUnBkbVVuS1R0Y2NseHVYSEpjYmx4MGRtRnlJSE5sYkdWamRHOXlJRDBnSkNoMGFHbHpLUzVoZEhSeUtDZGtZWFJoTFdacGJIUmxjaWNwTzF4eVhHNWNkQ1FvSnk1d2IzSjBabTlzYVc4dGFYUmxiU2NwTG1semIzUnZjR1VvZTF4eVhHNWNkRngwWm1sc2RHVnlPaUJ6Wld4bFkzUnZjaXhjY2x4dVhIUjlLVHRjY2x4dVhIUnlaWFIxY200Z1ptRnNjMlU3WEhKY2JuMHBPMXh5WEc1Y2NseHVablZ1WTNScGIyNGdaMjlDWVdOcktDa2dlMXh5WEc1Y2RIZHBibVJ2ZHk1b2FYTjBiM0o1TG1KaFkyc29LVHRjY2x4dWZWeHlYRzRpTENJdktpRmNiaUFxSUdoMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5MWJXRnlkMlZpWkdWMlpXeHZjR1Z5TDJweGRXVnllUzFqYzNNdGMydHBiR3h6TFdKaGNseHVJQ29nUVhWMGFHOXlPaUJBZFcxaGNuZGxZbVJsZG1Wc2IzQmxjbHh1SUNvZ1RHbGpaVzV6WldRZ2RXNWtaWElnZEdobElFMUpWQ0JzYVdObGJuTmxYRzRnS2k5Y2JpQmNiaWhtZFc1amRHbHZiaUFvSUNRZ0tTQjdYRzRnWEc0Z0lDQWdKQzVtYmk1emEybHNiRUpoY25NZ1BTQm1kVzVqZEdsdmJpZ2diM0IwYVc5dWN5QXBJSHRjYmlCY2JpQWdJQ0FnSUNBZ2RtRnlJSE5sZEhScGJtZHpJRDBnSkM1bGVIUmxibVFvZTF4dVhIUmNkRngwWm5KdmJUb2dNQ3dnSUZ4MFhIUmNkQzh2SUc1MWJXSmxjaUJ6ZEdGeWRGeHVYSFJjZEZ4MGRHODZJR1poYkhObExGeDBYSFJjZEM4dklHNTFiV0psY2lCbGJtUmNibHgwWEhSY2RITndaV1ZrT2lBeE1EQXdMQ0FnWEhSY2RDOHZJR2h2ZHlCc2IyNW5JR2wwSUhOb2IzVnNaQ0IwWVd0bElIUnZJR052ZFc1MElHSmxkSGRsWlc0Z2RHaGxJSFJoY21kbGRDQnVkVzFpWlhKelhHNWNkRngwWEhScGJuUmxjblpoYkRvZ01UQXdMRngwSUNBdkx5Qm9iM2NnYjJaMFpXNGdkR2hsSUdWc1pXMWxiblFnYzJodmRXeGtJR0psSUhWd1pHRjBaV1JjYmx4MFhIUmNkR1JsWTJsdFlXeHpPaUF3TEZ4MFhIUWdJQzh2SUhSb1pTQnVkVzFpWlhJZ2IyWWdaR1ZqYVcxaGJDQndiR0ZqWlhNZ2RHOGdjMmh2ZDF4dVhIUmNkRngwYjI1VmNHUmhkR1U2SUc1MWJHd3NYSFFnSUM4dklHTmhiR3hpWVdOcklHMWxkR2h2WkNCbWIzSWdaWFpsY25rZ2RHbHRaU0IwYUdVZ1pXeGxiV1Z1ZENCcGN5QjFjR1JoZEdWa0xGeHVYSFJjZEZ4MGIyNURiMjF3YkdWMFpUb2diblZzYkN4Y2RDQWdMeThnWTJGc2JHSmhZMnNnYldWMGFHOWtJR1p2Y2lCM2FHVnVJSFJvWlNCbGJHVnRaVzUwSUdacGJtbHphR1Z6SUhWd1pHRjBhVzVuWEc1Y2RGeDBYSFF2S205dVEyOXRjR3hsZEdVNklHWjFibU4wYVc5dUtHWnliMjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpiMnhsTG1SbFluVm5LSFJvYVhNcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNvdlhHNWNkRngwWEhSamJHRnpjMlZ6T250Y2JseDBYSFJjZEZ4MGMydHBiR3hDWVhKQ1lYSWdPaUFuTG5OcmFXeHNZbUZ5TFdKaGNpY3NYRzVjZEZ4MFhIUmNkSE5yYVd4c1FtRnlVR1Z5WTJWdWRDQTZJQ2N1YzJ0cGJHd3RZbUZ5TFhCbGNtTmxiblFuTEZ4dVhIUmNkRngwZlZ4dUlDQWdJQ0FnSUNCOUxDQnZjSFJwYjI1eklDazdYRzRnWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtVmhZMmdvWm5WdVkzUnBiMjRvS1h0Y2JseDBYSFJjZEZ4dVhIUmNkRngwZG1GeUlHOWlhaUE5SUNRb2RHaHBjeWtzWEc1Y2RGeDBYSFJjZEhSdklEMGdLSE5sZEhScGJtZHpMblJ2SUNFOUlHWmhiSE5sS1NBL0lITmxkSFJwYm1kekxuUnZJRG9nY0dGeWMyVkpiblFvYjJKcUxtRjBkSElvSjJSaGRHRXRjR1Z5WTJWdWRDY3BLVHRjYmx4MFhIUmNkRngwYVdZb2RHOGdQaUF4TURBcGUxeHVYSFJjZEZ4MFhIUmNkSFJ2SUQwZ01UQXdPMXh1WEhSY2RGeDBYSFI5TzF4dVhIUmNkRngwZG1GeUlHWnliMjBnUFNCelpYUjBhVzVuY3k1bWNtOXRMRnh1WEhSY2RGeDBYSFJzYjI5d2N5QTlJRTFoZEdndVkyVnBiQ2h6WlhSMGFXNW5jeTV6Y0dWbFpDQXZJSE5sZEhScGJtZHpMbWx1ZEdWeWRtRnNLU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lGeDBhVzVqY21WdFpXNTBJRDBnS0hSdklDMGdabkp2YlNrZ0x5QnNiMjl3Y3l4Y2JseDBYSFJjZEZ4MGJHOXZjRU52ZFc1MElEMGdNQ3hjYmx4MFhIUmNkRngwYVc1MFpYSjJZV3dnUFNCelpYUkpiblJsY25aaGJDaDFjR1JoZEdWV1lXeDFaU3dnYzJWMGRHbHVaM011YVc1MFpYSjJZV3dwTzF4dVhIUmNkRngwWEc1Y2RGeDBYSFJ2WW1vdVptbHVaQ2h6WlhSMGFXNW5jeTVqYkdGemMyVnpMbk5yYVd4c1FtRnlRbUZ5S1M1aGJtbHRZWFJsS0h0Y2JseDBYSFJjZEZ4MGQybGtkR2c2SUhCaGNuTmxTVzUwS0c5aWFpNWhkSFJ5S0Nka1lYUmhMWEJsY21ObGJuUW5LU2tySnlVblhHNWNkRngwWEhSOUxDQnpaWFIwYVc1bmN5NXpjR1ZsWkNrN1hHNWNkRngwWEhSY2RGeDBYSFJjYmx4MFhIUmNkR1oxYm1OMGFXOXVJSFZ3WkdGMFpWWmhiSFZsS0NsN1hHNWNkRngwWEhSY2RHWnliMjBnS3owZ2FXNWpjbVZ0Wlc1ME8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHeHZiM0JEYjNWdWRDc3JPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ1FvYjJKcUtTNW1hVzVrS0hObGRIUnBibWR6TG1Oc1lYTnpaWE11YzJ0cGJHeENZWEpRWlhKalpXNTBLUzUwWlhoMEtHWnliMjB1ZEc5R2FYaGxaQ2h6WlhSMGFXNW5jeTVrWldOcGJXRnNjeWtySnlVbktUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGVYQmxiMllvYzJWMGRHbHVaM011YjI1VmNHUmhkR1VwSUQwOUlDZG1kVzVqZEdsdmJpY3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MyVjBkR2x1WjNNdWIyNVZjR1JoZEdVdVkyRnNiQ2h2WW1vc0lHWnliMjBwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hzYjI5d1EyOTFiblFnUGowZ2JHOXZjSE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMnhsWVhKSmJuUmxjblpoYkNocGJuUmxjblpoYkNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1p5YjIwZ1BTQjBienRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEhsd1pXOW1LSE5sZEhScGJtZHpMbTl1UTI5dGNHeGxkR1VwSUQwOUlDZG1kVzVqZEdsdmJpY3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE5sZEhScGJtZHpMbTl1UTI5dGNHeGxkR1V1WTJGc2JDaHZZbW9zSUdaeWIyMHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYSFJjZEZ4MGZWeHVYSFJjZEZ4MFhHNGdJQ0FnSUNBZ0lIMHBPMXh1SUZ4dUlDQWdJSDA3WEc0Z1hHNTlLQ0JxVVhWbGNua2dLU2s3WEc0aVhTd2ljMjkxY21ObFVtOXZkQ0k2SWlKOSJ9
