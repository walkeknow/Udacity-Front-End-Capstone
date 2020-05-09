var Client =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/style.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/style.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../fonts/Oswald-VariableFont_wght.ttf */ "./src/client/fonts/Oswald-VariableFont_wght.ttf");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "/*\n  All a user has to do to change the calendar size is\n  change the font-size on the container and everything\n  magically resizes accordingly. Relative units ftw!\n*/\n.qs-datepicker-container {\n  font-size: 1rem;\n  font-family: sans-serif;\n  color: black;\n  position: absolute;\n  width: 15.625em;\n  display: flex;\n  flex-direction: column;\n  z-index: 9001;\n  user-select: none;\n  border: 1px solid gray;\n  border-radius: 0.263921875em;\n  overflow: hidden;\n  background: white;\n  box-shadow: 0 1.25em 1.25em -0.9375em rgba(0, 0, 0, 0.3);\n}\n.qs-datepicker-container * {\n  box-sizing: border-box;\n}\n.qs-datepicker-container.qs-centered {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.qs-datepicker-container.qs-hidden {\n  display: none;\n}\n\n.qs-datepicker .qs-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.75);\n  color: white;\n  width: 100%;\n  height: 100%;\n  padding: 0.5em;\n  z-index: 1;\n  opacity: 1;\n  transition: opacity 0.3s;\n  display: flex;\n  flex-direction: column;\n}\n.qs-datepicker .qs-overlay.qs-hidden {\n  opacity: 0;\n  z-index: -1;\n}\n.qs-datepicker .qs-overlay .qs-overlay-year {\n  border: none;\n  background: transparent;\n  border-bottom: 1px solid white;\n  border-radius: 0;\n  color: white;\n  font-size: 0.875em;\n  padding: 0.25em 0;\n  width: 80%;\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n}\n.qs-datepicker .qs-overlay .qs-overlay-year::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n.qs-datepicker .qs-overlay .qs-close {\n  padding: 0.5em;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.qs-datepicker .qs-overlay .qs-submit {\n  border: 1px solid white;\n  border-radius: 0.263921875em;\n  padding: 0.5em;\n  margin: 0 auto auto;\n  cursor: pointer;\n  background: rgba(128, 128, 128, 0.4);\n}\n.qs-datepicker .qs-overlay .qs-submit.qs-disabled {\n  color: gray;\n  border-color: gray;\n  cursor: not-allowed;\n}\n.qs-datepicker .qs-overlay .qs-overlay-month-container {\n  display: flex;\n  flex-wrap: wrap;\n  flex-grow: 1;\n}\n.qs-datepicker .qs-overlay .qs-overlay-month {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: calc(100% / 3);\n  cursor: pointer;\n  opacity: 0.5;\n  transition: opacity 0.15s;\n}\n.qs-datepicker .qs-overlay .qs-overlay-month.active, .qs-datepicker .qs-overlay .qs-overlay-month:hover {\n  opacity: 1;\n}\n.qs-datepicker .qs-controls {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-grow: 1;\n  flex-shrink: 0;\n  background: lightgray;\n  filter: blur(0px);\n  transition: filter 0.3s;\n}\n.qs-datepicker .qs-controls.qs-blur {\n  filter: blur(5px);\n}\n.qs-datepicker .qs-arrow {\n  height: 1.5625em;\n  width: 1.5625em;\n  position: relative;\n  cursor: pointer;\n  border-radius: 0.263921875em;\n  transition: background 0.15s;\n}\n.qs-datepicker .qs-arrow:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n.qs-datepicker .qs-arrow:hover.qs-left:after {\n  border-right-color: black;\n}\n.qs-datepicker .qs-arrow:hover.qs-right:after {\n  border-left-color: black;\n}\n.qs-datepicker .qs-arrow:after {\n  content: \"\";\n  border: 0.390625em solid transparent;\n  position: absolute;\n  top: 50%;\n  transition: border 0.2s;\n}\n.qs-datepicker .qs-arrow.qs-left:after {\n  border-right-color: gray;\n  right: 50%;\n  transform: translate(25%, -50%);\n}\n.qs-datepicker .qs-arrow.qs-right:after {\n  border-left-color: gray;\n  left: 50%;\n  transform: translate(-25%, -50%);\n}\n.qs-datepicker .qs-month-year {\n  font-weight: bold;\n  transition: border 0.2s;\n  border-bottom: 1px solid transparent;\n  cursor: pointer;\n}\n.qs-datepicker .qs-month-year:hover {\n  border-bottom: 1px solid gray;\n}\n.qs-datepicker .qs-month-year:focus, .qs-datepicker .qs-month-year:active:focus {\n  outline: none;\n}\n.qs-datepicker .qs-month {\n  padding-right: 0.5ex;\n}\n.qs-datepicker .qs-year {\n  padding-left: 0.5ex;\n}\n.qs-datepicker .qs-squares {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0.3125em;\n  filter: blur(0px);\n  transition: filter 0.3s;\n}\n.qs-datepicker .qs-squares.qs-blur {\n  filter: blur(5px);\n}\n.qs-datepicker .qs-square {\n  width: calc(100% / 7);\n  height: 1.5625em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background 0.1s;\n  border-radius: 0.263921875em;\n}\n.qs-datepicker .qs-square.qs-current {\n  font-weight: bold;\n}\n.qs-datepicker .qs-square.qs-current span {\n  text-decoration: underline;\n}\n.qs-datepicker .qs-square.qs-active {\n  background: lightblue;\n}\n.qs-datepicker .qs-square.qs-range-date-start:not(.qs-range-date-6) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.qs-datepicker .qs-square.qs-range-date-middle {\n  background: #d4ebf2;\n}\n.qs-datepicker .qs-square.qs-range-date-middle:not(.qs-range-date-0):not(.qs-range-date-6) {\n  border-radius: 0;\n}\n.qs-datepicker .qs-square.qs-range-date-middle.qs-range-date-0 {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.qs-datepicker .qs-square.qs-range-date-middle.qs-range-date-6 {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.qs-datepicker .qs-square.qs-range-date-end:not(.qs-range-date-0) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.qs-datepicker .qs-square.qs-disabled span {\n  opacity: 0.2;\n}\n.qs-datepicker .qs-square.qs-empty {\n  cursor: default;\n}\n.qs-datepicker .qs-square.qs-disabled {\n  cursor: not-allowed;\n}\n.qs-datepicker .qs-square.qs-day {\n  cursor: default;\n  font-weight: bold;\n  color: gray;\n}\n.qs-datepicker .qs-square:not(.qs-empty):not(.qs-disabled):not(.qs-day):not(.qs-active):hover {\n  background: orange;\n}\n.qs-datepicker .qs-event {\n  position: relative;\n}\n.qs-datepicker .qs-event:after {\n  content: \"\";\n  position: absolute;\n  width: 0.46875em;\n  height: 0.46875em;\n  border-radius: 50%;\n  background: #07f;\n  bottom: 0;\n  right: 0;\n}\n.qs-datepicker .qs-event.qs-disabled:after, .qs-datepicker .qs-event.qs-empty:after {\n  background: #cce4ff;\n}\n\n@font-face {\n  font-family: \"Oswald\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n}\nbody {\n  background: #fffff8;\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n}\n\n#app {\n  display: grid;\n  grid-auto-rows: minmax(150px, auto);\n  /* grid-template-columns:  */\n  background: #f23557;\n  color: #f0d43a;\n  justify-content: center;\n  grid-gap: 1em;\n  font-size: 20px;\n  font-family: \"Oswald\", sans-serif;\n  padding: 20px;\n  overflow: auto;\n  height: 100vh;\n}\n\n.holder {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n\n.entry {\n  background: rgba(59, 74, 107, 0.4);\n  display: flex;\n  flex: 1;\n  min-height: min-content;\n}\n\n.entryHolder {\n  padding: 10px;\n}\n\n#title {\n  font-size: 36px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n}\n\n#holder-title {\n  font-size: 27px;\n  padding: 10px;\n}\n\n/*  Basic Styling To Override Default For Basic HTML Elements */\nlabel {\n  display: block;\n  font-size: 27px;\n}\n\ninput {\n  display: block;\n  height: 60px;\n  width: 70vw;\n  background: #22b2da;\n  color: #f0d43a;\n  font-size: 20px;\n  font-family: \"Oswald\", sans-serif;\n  border: none;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nbutton {\n  margin-top: 10px;\n  height: 100px;\n  background: #3b4a6b;\n  color: #f0d43a;\n  font-size: 26px;\n  font-family: \"Oswald\", sans-serif;\n  border-radius: 5px;\n  border: none;\n}\nbutton:hover {\n  cursor: pointer;\n}\nbutton:active {\n  opacity: 0.8;\n}\n\nh1 {\n  font-size: 36px;\n}\n\ntextarea {\n  background: #22b2da;\n  color: #f0d43a;\n  font-size: 20px;\n  font-family: \"Oswald\", sans-serif;\n}\n\n/* Reset style for HTML element on active to have no border*/\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n  outline: none;\n}\n\n/* Style for Placeholder Text*/\n::placeholder {\n  /* Firefox, Chrome, Opera */\n  color: #f0d43a;\n  font-family: \"Oswald\", sans-serif;\n}\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #f0d43a;\n  font-family: \"Oswald\", sans-serif;\n}\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #f0d43a;\n  font-family: \"Oswald\", sans-serif;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/js-datepicker/dist/datepicker.min.js":
/*!***********************************************************!*\
  !*** ./node_modules/js-datepicker/dist/datepicker.min.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,(function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1);var a=[],i=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],o=["January","February","March","April","May","June","July","August","September","October","November","December"],r={t:"top",r:"right",b:"bottom",l:"left",c:"centered"};function s(){}var l=["click","focusin","keydown","input"];function d(e){l.forEach((function(t){e.addEventListener(t,e===document?j:E)}))}function c(e){return Array.isArray(e)?e.map(c):"[object Object]"===C(e)?Object.keys(e).reduce((function(t,n){return t[n]=c(e[n]),t}),{}):e}function u(e,t){var n=e.calendar.querySelector(".qs-overlay"),a=n&&!n.classList.contains("qs-hidden");t=t||new Date(e.currentYear,e.currentMonth),e.calendar.innerHTML=[h(t,e,a),f(t,e,a),v(e,a)].join(""),a&&window.requestAnimationFrame((function(){M(!0,e)}))}function h(e,t,n){return['<div class="qs-controls'+(n?" qs-blur":"")+'">','<div class="qs-arrow qs-left"></div>','<div class="qs-month-year">','<span class="qs-month">'+t.months[e.getMonth()]+"</span>",'<span class="qs-year">'+e.getFullYear()+"</span>","</div>",'<div class="qs-arrow qs-right"></div>',"</div>"].join("")}function f(e,t,n){var a=t.currentMonth,i=t.currentYear,o=t.dateSelected,r=t.maxDate,s=t.minDate,l=t.showAllDates,d=t.days,c=t.disabledDates,u=t.disabler,h=t.noWeekends,f=t.startDay,v=t.weekendIndices,m=t.events,p=t.getRange?t.getRange():{},y=+p.start,D=+p.end,b=new Date,g=i===b.getFullYear()&&a===b.getMonth(),w=q(new Date(e).setDate(1)),S=w.getDay()-f,M=S<0?7:0;w.setMonth(w.getMonth()+1),w.setDate(0);var x=w.getDate(),C=[],Y=M+7*((S+x)/7|0);Y+=(S+x)%7?7:0;for(var j=1;j<=Y;j++){var E=(j-1)%7,L=d[E],P=j-(S>=0?S:7+S),k=new Date(i,a,P),O=m[+k],N="qs-num",_='<span class="qs-num">'+k.getDate()+"</span>",I=y&&D&&+k>=y&&+k<=D;P<1||P>x?(N="qs-empty qs-outside-current-month",l?(O&&(N+=" qs-event"),N+=" qs-disabled"):_=""):((s&&k<s||r&&k>r||u(k)||c.some((function(e){return e===+k}))||h&&v.some((function(e){return e===E})))&&(N="qs-disabled"),O&&(N+=" qs-event"),g&&P===b.getDate()&&(N+=" qs-current"),+k==+o&&(N+=" qs-active"),I&&(N+=" qs-range-date-"+E,y!==D&&(N+=+k===y?" qs-range-date-start qs-active":+k===D?" qs-range-date-end qs-active":" qs-range-date-middle"))),C.push('<div class="qs-square '+N+" "+L+'">'+_+"</div>")}var R=d.map((function(e){return'<div class="qs-square qs-day">'+e+"</div>"})).concat(C);if(R.length%7!=0)throw"Calendar not constructed properly. The # of squares should be a multiple of 7.";return R.unshift('<div class="qs-squares'+(n?" qs-blur":"")+'">'),R.push("</div>"),R.join("")}function v(e,t){var n=e.overlayPlaceholder,a=e.overlayButton;return['<div class="qs-overlay'+(t?"":" qs-hidden")+'">',"<div>",'<input class="qs-overlay-year" placeholder="'+n+'" />','<div class="qs-close">&#10005;</div>',"</div>",'<div class="qs-overlay-month-container">'+e.overlayMonths.map((function(e,t){return['<div class="qs-overlay-month" data-month-num="'+t+'">','<span data-month-num="'+t+'">'+e+"</span>","</div>"].join("")})).join("")+"</div>",'<div class="qs-submit qs-disabled">'+a+"</div>","</div>"].join("")}function m(e,t,n){var a=t.el,i=t.calendar.querySelector(".qs-active"),o=e.textContent,r=t.sibling;(a.disabled||a.readOnly)&&t.respectDisabledReadOnly||(t.dateSelected=n?void 0:new Date(t.currentYear,t.currentMonth,o),i&&i.classList.remove("qs-active"),n||e.classList.add("qs-active"),y(a,t,n),n||w(t),r&&(p({instance:t,deselect:n}),t.first&&!r.dateSelected&&(r.currentYear=t.currentYear,r.currentMonth=t.currentMonth,r.currentMonthName=t.currentMonthName),u(t),u(r)),t.onSelect(t,n?void 0:new Date(t.dateSelected)))}function p(e){var t=e.instance.first?e.instance:e.instance.sibling,n=t.sibling;t===e.instance?e.deselect?(t.minDate=t.originalMinDate,n.minDate=n.originalMinDate):n.minDate=t.dateSelected:e.deselect?(n.maxDate=n.originalMaxDate,t.maxDate=t.originalMaxDate):t.maxDate=n.dateSelected}function y(e,t,n){if(!t.nonInput)return n?e.value="":t.formatter!==s?t.formatter(e,t.dateSelected,t):void(e.value=t.dateSelected.toDateString())}function D(e,t,n,a){n||a?(n&&(t.currentYear=+n),a&&(t.currentMonth=+a)):(t.currentMonth+=e.contains("qs-right")?1:-1,12===t.currentMonth?(t.currentMonth=0,t.currentYear++):-1===t.currentMonth&&(t.currentMonth=11,t.currentYear--)),t.currentMonthName=t.months[t.currentMonth],u(t),t.onMonthChange(t)}function b(e){if(!e.noPosition){var t=e.position.top,n=e.position.right;if(e.position.centered)return e.calendarContainer.classList.add("qs-centered");var a=e.positionedEl.getBoundingClientRect(),i=e.el.getBoundingClientRect(),o=e.calendarContainer.getBoundingClientRect(),r=i.top-a.top+(t?-1*o.height:i.height)+"px",s=i.left-a.left+(n?i.width-o.width:0)+"px";e.calendarContainer.style.setProperty("top",r),e.calendarContainer.style.setProperty("left",s)}}function g(e){return"[object Date]"===C(e)&&"Invalid Date"!==e.toString()}function q(e){if(g(e)||"number"==typeof e&&!isNaN(e)){var t=new Date(+e);return new Date(t.getFullYear(),t.getMonth(),t.getDate())}}function w(e){e.disabled||!e.calendarContainer.classList.contains("qs-hidden")&&!e.alwaysShow&&(M(!0,e),e.calendarContainer.classList.add("qs-hidden"),e.onHide(e))}function S(e){e.disabled||(e.calendarContainer.classList.remove("qs-hidden"),b(e),e.onShow(e))}function M(e,t){var n=t.calendar,a=n.querySelector(".qs-overlay"),i=a.querySelector(".qs-overlay-year"),o=n.querySelector(".qs-controls"),r=n.querySelector(".qs-squares");e?(a.classList.add("qs-hidden"),o.classList.remove("qs-blur"),r.classList.remove("qs-blur"),i.value=""):(a.classList.remove("qs-hidden"),o.classList.add("qs-blur"),r.classList.add("qs-blur"),i.focus())}function x(e,t,n,a){var i=isNaN(+(new Date).setFullYear(t.value||void 0)),o=i?null:t.value;if(13===(e.which||e.keyCode)||"click"===e.type)a?D(null,n,o,a):i||t.classList.contains("qs-disabled")||D(null,n,o,a);else if(n.calendar.contains(t)){n.calendar.querySelector(".qs-submit").classList[i?"add":"remove"]("qs-disabled")}}function C(e){return{}.toString.call(e)}function Y(e){a.forEach((function(t){t!==e&&w(t)}))}function j(e){if(!e.__qs_shadow_dom){var t=e.which||e.keyCode,n=e.type,i=e.target,o=i.classList,r=a.filter((function(e){return e.calendar.contains(i)||e.el===i}))[0],s=r&&r.calendar.contains(i);if(!(r&&r.isMobile&&r.disableMobile))if("click"===n){if(!r)return a.forEach(w);if(r.disabled)return;var l=r.calendar,d=r.calendarContainer,c=r.disableYearOverlay,u=r.nonInput,h=l.querySelector(".qs-overlay-year"),f=!!l.querySelector(".qs-hidden"),v=l.querySelector(".qs-month-year").contains(i),p=i.dataset.monthNum;if(r.noPosition&&!s)(d.classList.contains("qs-hidden")?S:w)(r);else if(o.contains("qs-arrow"))D(o,r);else if(v||o.contains("qs-close"))c||M(!f,r);else if(p)x(e,h,r,p);else{if(o.contains("qs-num")){var y="SPAN"===i.nodeName?i.parentNode:i,b=i.textContent;return void(+new Date(r.currentYear,r.currentMonth,b)==+r.dateSelected?m(y,r,!0):y.classList.contains("qs-disabled")||m(y,r))}o.contains("qs-submit")&&!o.contains("qs-disabled")?x(e,h,r):u&&i===r.el&&(S(r),Y(r))}}else if("focusin"===n&&r)S(r),Y(r);else if("keydown"===n&&9===t&&r)w(r);else if("keydown"===n&&r&&!r.disabled){var g=!r.calendar.querySelector(".qs-overlay").classList.contains("qs-hidden");13===t&&g&&s?x(e,i,r):27===t&&g&&s&&M(!0,r)}else if("input"===n){if(!r||!r.calendar.contains(i))return;var q=r.calendar.querySelector(".qs-submit"),C=i.value.split("").reduce((function(e,t){return e||"0"!==t?e+(t.match(/[0-9]/)?t:""):""}),"").slice(0,4);i.value=C,q.classList[4===C.length?"remove":"add"]("qs-disabled")}}}function E(e){j(e),e.__qs_shadow_dom=!0}function L(e,t){l.forEach((function(n){e.removeEventListener(n,t)}))}function P(){S(this)}function k(){w(this)}function O(e,t){var n=q(e),a=this.currentYear,i=this.currentMonth,o=this.sibling;if(null==e)return this.dateSelected=void 0,y(this.el,this,!0),o&&(p({instance:this,deselect:!0}),u(o)),u(this),this;if(!g(e))throw"`setDate` needs a JavaScript Date object.";if(this.disabledDates.some((function(e){return+e==+n}))||n<this.minDate||n>this.maxDate)throw"You can't manually set a date that's disabled.";return this.dateSelected=n,t&&(this.currentYear=n.getFullYear(),this.currentMonth=n.getMonth(),this.currentMonthName=this.months[n.getMonth()]),y(this.el,this),o&&(p({instance:this}),u(o)),(a===n.getFullYear()&&i===n.getMonth()||t)&&u(this,n),this}function N(e){return I(this,e,!0)}function _(e){return I(this,e)}function I(e,t,n){var a=e.dateSelected,i=e.first,o=e.sibling,r=e.minDate,s=e.maxDate,l=q(t),d=n?"Min":"Max";function c(){return"original"+d+"Date"}function h(){return d.toLowerCase()+"Date"}function f(){return"set"+d}function v(){throw"Out-of-range date passed to "+f()}if(null==t)e[c()]=void 0,o?(o[c()]=void 0,n?(i&&!a||!i&&!o.dateSelected)&&(e.minDate=void 0,o.minDate=void 0):(i&&!o.dateSelected||!i&&!a)&&(e.maxDate=void 0,o.maxDate=void 0)):e[h()]=void 0;else{if(!g(t))throw"Invalid date passed to "+f();o?((i&&n&&l>(a||s)||i&&!n&&l<(o.dateSelected||r)||!i&&n&&l>(o.dateSelected||s)||!i&&!n&&l<(a||r))&&v(),e[c()]=l,o[c()]=l,(n&&(i&&!a||!i&&!o.dateSelected)||!n&&(i&&!o.dateSelected||!i&&!a))&&(e[h()]=l,o[h()]=l)):((n&&l>(a||s)||!n&&l<(a||r))&&v(),e[h()]=l)}return o&&u(o),u(e),e}function R(){var e=this.first?this:this.sibling,t=e.sibling;return{start:e.dateSelected,end:t.dateSelected}}function A(){var e=this.shadowDom,t=this.positionedEl,n=this.calendarContainer,i=this.sibling,o=this;this.inlinePosition&&(a.some((function(e){return e!==o&&e.positionedEl===t}))||t.style.setProperty("position",null));n.remove(),a=a.filter((function(e){return e!==o})),i&&delete i.sibling,a.length||L(document,j);var r=a.some((function(t){return t.shadowDom===e}));for(var s in e&&!r&&L(e,E),this)delete this[s];a.length||l.forEach((function(e){document.removeEventListener(e,j)}))}function F(e,t){if(date=new Date(e),!g(date))throw"`navigate` needs a JavaScript Date object.";this.currentYear=date.getFullYear(),this.currentMonth=date.getMonth(),u(this),t&&this.onMonthChange(this)}e.exports=function(e,t){var n=function(e,t){var n,l,d=function(e){var t=c(e);t.events&&(t.events=t.events.reduce((function(e,t){if(!g(t))throw'"options.events" must only contain valid JavaScript Date objects.';return e[+q(t)]=!0,e}),{}));["startDate","dateSelected","minDate","maxDate"].forEach((function(e){var n=t[e];if(n&&!g(n))throw'"options.'+e+'" needs to be a valid JavaScript Date object.';t[e]=q(n)}));var n=t.position,o=t.maxDate,l=t.minDate,d=t.dateSelected,u=t.overlayPlaceholder,h=t.overlayButton,f=t.startDay,v=t.id;if(t.startDate=q(t.startDate||d||new Date),t.disabledDates=(t.disabledDates||[]).map((function(e){var t=+q(e);if(!g(e))throw'You supplied an invalid date to "options.disabledDates".';if(t===+q(d))throw'"disabledDates" cannot contain the same date as "dateSelected".';return t})),t.hasOwnProperty("id")&&null==v)throw"Id cannot be `null` or `undefined`";if(null!=v){var m=a.filter((function(e){return e.id===v}));if(m.length>1)throw"Only two datepickers can share an id.";m.length?(t.second=!0,t.sibling=m[0]):t.first=!0}var p=["tr","tl","br","bl","c"].some((function(e){return n===e}));if(n&&!p)throw'"options.position" must be one of the following: tl, tr, bl, br, or c.';if(t.position=function(e){var t=e[0],n=e[1],a={};a[r[t]]=1,n&&(a[r[n]]=1);return a}(n||"bl"),o<l)throw'"maxDate" in options is less than "minDate".';if(d){function y(e){throw'"dateSelected" in options is '+(e?"less":"greater")+' than "'+(e||"max")+'Date".'}l>d&&y("min"),o<d&&y()}if(["onSelect","onShow","onHide","onMonthChange","formatter","disabler"].forEach((function(e){"function"!=typeof t[e]&&(t[e]=s)})),["customDays","customMonths","customOverlayMonths"].forEach((function(e,n){var a=t[e],i=n?12:7;if(a){if(!Array.isArray(a)||a.length!==i||a.some((function(e){return"string"!=typeof e})))throw'"'+e+'" must be an array with ${num} strings.';t[n?n<2?"months":"overlayMonths":"days"]=a}})),f&&f>0&&f<7){var D=(t.customDays||i).slice(),b=D.splice(0,f);t.customDays=D.concat(b),t.startDay=+f,t.weekendIndices=[D.length-1,D.length]}else t.startDay=0,t.weekendIndices=[6,0];"string"!=typeof u&&delete t.overlayPlaceholder;"string"!=typeof h&&delete t.overlayButton;return t}(t||{startDate:q(new Date),position:"bl"}),u=e;if("string"==typeof u)u="#"===u[0]?document.getElementById(u.slice(1)):document.querySelector(u);else{if("[object ShadowRoot]"===C(u))throw"Using a shadow DOM as your selector is not supported.";try{var h=u.getRootNode();"[object ShadowRoot]"===C(h)&&(n=h,l=h.host)}catch(e){throw console.warn("You have to polyfill the web components spec - http://bit.ly/3axUZHC"),e}}if(!u)throw"No selector / element found.";if(a.some((function(e){return e.el===u})))throw"A datepicker already exists on that element.";var f=u===document.body,v=n?u.parentElement||n:f?document.body:u.parentElement,m=n?u.parentElement||l:v,p=document.createElement("div"),D=document.createElement("div");p.className="qs-datepicker-container qs-hidden",D.className="qs-datepicker";var b={shadowDom:n,customElement:l,positionedEl:m,el:u,parent:v,nonInput:"INPUT"!==u.nodeName,noPosition:f,position:!f&&d.position,startDate:d.startDate,dateSelected:d.dateSelected,disabledDates:d.disabledDates,minDate:d.minDate,maxDate:d.maxDate,noWeekends:!!d.noWeekends,weekendIndices:d.weekendIndices,calendarContainer:p,calendar:D,currentMonth:(d.startDate||d.dateSelected).getMonth(),currentMonthName:(d.months||o)[(d.startDate||d.dateSelected).getMonth()],currentYear:(d.startDate||d.dateSelected).getFullYear(),events:d.events||{},setDate:O,remove:A,setMin:N,setMax:_,show:P,hide:k,navigate:F,onSelect:d.onSelect,onShow:d.onShow,onHide:d.onHide,onMonthChange:d.onMonthChange,formatter:d.formatter,disabler:d.disabler,months:d.months||o,days:d.customDays||i,startDay:d.startDay,overlayMonths:d.overlayMonths||(d.months||o).map((function(e){return e.slice(0,3)})),overlayPlaceholder:d.overlayPlaceholder||"4-digit year",overlayButton:d.overlayButton||"Submit",disableYearOverlay:!!d.disableYearOverlay,disableMobile:!!d.disableMobile,isMobile:"ontouchstart"in window,alwaysShow:!!d.alwaysShow,id:d.id,showAllDates:!!d.showAllDates,respectDisabledReadOnly:!!d.respectDisabledReadOnly,first:d.first,second:d.second};if(d.sibling){var w=d.sibling,M=b,x=w.minDate||M.minDate,Y=w.maxDate||M.maxDate;M.sibling=w,w.sibling=M,w.minDate=x,w.maxDate=Y,M.minDate=x,M.maxDate=Y,w.originalMinDate=x,w.originalMaxDate=Y,M.originalMinDate=x,M.originalMaxDate=Y,w.getRange=R,M.getRange=R}d.dateSelected&&y(u,b);var j=getComputedStyle(m).position;f||j&&"static"!==j||(b.inlinePosition=!0,m.style.setProperty("position","relative"));b.inlinePosition&&a.forEach((function(e){e.positionedEl===b.positionedEl&&(e.inlinePosition=!0)}));p.appendChild(D),v.appendChild(p),b.alwaysShow&&S(b);return b}(e,t);if(a.length||d(document),n.shadowDom&&(a.some((function(e){return e.shadowDom===n.shadowDom}))||d(n.shadowDom)),a.push(n),n.second){var l=n.sibling;p({instance:n,deselect:!n.dateSelected}),p({instance:l,deselect:!l.dateSelected}),u(l)}return u(n,n.startDate||n.dateSelected),n.alwaysShow&&b(n),n}},function(e,t,n){}])}));

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/client/fonts/Oswald-VariableFont_wght.ttf":
/*!*******************************************************!*\
  !*** ./src/client/fonts/Oswald-VariableFont_wght.ttf ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/Oswald-VariableFont_wght.ttf");

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! exports provided: loadDatePicker, handleSubmit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/date */ "./src/client/js/date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadDatePicker", function() { return _js_date__WEBPACK_IMPORTED_MODULE_0__["loadDatePicker"]; });

/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ "./src/client/js/app.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleSubmit", function() { return _js_app__WEBPACK_IMPORTED_MODULE_1__["handleSubmit"]; });

/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.scss */ "./src/client/styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_2__);







/***/ }),

/***/ "./src/client/js/app.js":
/*!******************************!*\
  !*** ./src/client/js/app.js ***!
  \******************************/
/*! exports provided: handleSubmit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleSubmit", function() { return handleSubmit; });
function isDateValid() {
    // regex to verify date syntax
    const dateExp = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})[\s]*$/
    const inpDate = document.getElementById("date").value;
    if (dateExp.test(inpDate)) {
        // check if entered date is valid (checking for Leap Years)
        const matches = dateExp.exec(inpDate);
        const month = matches[1];
        const date = matches[2];
        const year = matches[3]
        const inpDateObj = new Date(year, month - 1, date);
        console.log(inpDateObj.getTime(), today.getTime())

        /* In case Feb 29 2021 is entered, the Date object automatically
        changes the month, therefore the below statement will return 
        false*/
        if (inpDateObj && (inpDateObj.getMonth() + 1) == month) {
            // check if min date is today
            /* creating the today object from current year, month and 
            date instead of Date.now() so that the time becomes zero 
            and today's date can be selected with equality operator*/
            const temp = new Date()
            const todayObj = new Date(temp.getFullYear(), temp.getMonth(), temp.getDate())
            if (inpDateObj.getTime() >= todayObj.getTime()) {
                console.log("yay")
                return {
                    todayObj,
                    inputDateObj,
                }
            }
        };
        console.log("noo")
        return null;
    } else {
        alert("Please enter date in MM/DD/YYYY format!")
        return null;
    }
}


/* Function called by event listener */
function handleSubmit(event) {
    event.preventDefault();

    // Personal API Key for OpenWeatherMap API
    const geonamesKey = "&username=walkeknow";
    const geoNamesApi = "http://api.geonames.org/searchJSON?name_equals=";
    const city = "Paris"
    // const city  = document.getElementById("city").value;
    const geoNamesUrl = geoNamesApi + city + geonamesKey
    console.log(geoNamesUrl);

    if (isDateValid()) {
        // Calling functions
        getData(geoNamesUrl)
            .then(function (data) {
                const placeObj = {
                    long: data.geonames[0].lng,
                    lat: data.geonames[0].lat,
                }
                console.log(placeObj)
                postData('/addEntry', placeObj);
            }

                // Alert user if promise is rejected due to invalid Zipcode
                , (error) => {
                    alert("Sorry! Failed to find city details");
                })
            .then(function () {
                updateUI('/all')
            })
    }
}

/* Function to GET Web API Data*/
const getData = async (url = '') => {
    const response = await fetch(url);
    try {
        const allData = await response.json();
        return allData;
    } catch (error) {
        console.log("error: ", error);
        throw error;
    }
}

/* Function to POST data */
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error: ", error)
    }
}

/* Function to GET Project Data */
const updateUI = async (url = '') => {
    const response = await fetch(url);
    try {
        const serverData = await response.json();

        // Updating UI 
        const entry = serverData.entryData;
        const temp = document.getElementById('inpDateObj');
        temp.innerHTML = `<strong>inpDateObjerature:</strong> ${entry.inpDateObjerature}`;
    } catch (error) {
        console.log("error", error);
    }
}




/***/ }),

/***/ "./src/client/js/date.js":
/*!*******************************!*\
  !*** ./src/client/js/date.js ***!
  \*******************************/
/*! exports provided: loadDatePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDatePicker", function() { return loadDatePicker; });
/* harmony import */ var js_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-datepicker */ "./node_modules/js-datepicker/dist/datepicker.min.js");
/* harmony import */ var js_datepicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_datepicker__WEBPACK_IMPORTED_MODULE_0__);


// Using datepicker package to enable cross-browser support
function loadDatePicker() {
    const d = new Date();
    const picker = js_datepicker__WEBPACK_IMPORTED_MODULE_0___default()('#date', {
        minDate: new Date(d.getFullYear(), d.getMonth(), d.getDate()),
        formatter: (input, date, instance) => {
            const newDate = String(date.getMonth() + 1).padStart(2, '0') + '/' + String(date.getDate()).padStart(2, '0') + '/' + date.getFullYear();
            input.value = newDate
        }
    });
}




/***/ }),

/***/ "./src/client/styles/style.scss":
/*!**************************************!*\
  !*** ./src/client/styles/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=main.js.map