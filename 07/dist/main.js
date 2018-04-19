(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["main"] = factory();
	else
		root["Comp"] = root["Comp"] || {}, root["Comp"]["main"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/domready/ready.js":
/*!*****************************************!*\
  !*** ../node_modules/domready/ready.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*!\n  * domready (c) Dustin Diaz 2014 - License MIT\n  */\n!function (name, definition) {\n\n  if (true) module.exports = definition()\n  else {}\n\n}('domready', function () {\n\n  var fns = [], listener\n    , doc = document\n    , hack = doc.documentElement.doScroll\n    , domContentLoaded = 'DOMContentLoaded'\n    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)\n\n\n  if (!loaded)\n  doc.addEventListener(domContentLoaded, listener = function () {\n    doc.removeEventListener(domContentLoaded, listener)\n    loaded = 1\n    while (listener = fns.shift()) listener()\n  })\n\n  return function (fn) {\n    loaded ? setTimeout(fn, 0) : fns.push(fn)\n  }\n\n});\n\n\n//# sourceURL=webpack://Comp.%5Bname%5D/../node_modules/domready/ready.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"foo\":\"_2Iat4J0tT2GihOcKfcKdFD\"};\n\n//# sourceURL=webpack://Comp.%5Bname%5D/./src/main.css?");

/***/ }),

/***/ "./src/main.tsx":
/*!**********************!*\
  !*** ./src/main.tsx ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var domready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! domready */ \"../node_modules/domready/ready.js\");\n/* harmony import */ var domready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(domready__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndomready__WEBPACK_IMPORTED_MODULE_1___default()(() => {\n    const root = document.getElementById('root');\n    root.classList.add(_main_css__WEBPACK_IMPORTED_MODULE_0___default.a.foo);\n    root.innerHTML = '<h1>I am groot!</h1>';\n});\n\n\n//# sourceURL=webpack://Comp.%5Bname%5D/./src/main.tsx?");

/***/ })

/******/ });
});