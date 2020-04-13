module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Landing/AboutSchool/Advertisement/index.tsx":
/*!********************************************************************!*\
  !*** ./src/components/Landing/AboutSchool/Advertisement/index.tsx ***!
  \********************************************************************/
/*! exports provided: Advertisement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Advertisement", function() { return Advertisement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common */ "./src/components/common/index.ts");
var _jsxFileName = "/home/exoriri/Documents/pet-projects/online-school/frontend/src/components/Landing/AboutSchool/Advertisement/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_common__WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "Advertisement__Container",
  componentId: "sc-1rcy9lt-0"
})(["display:flex;flex-wrap:wrap;flex-direction:", ";@media screen and (min-width:1024px){flex-wrap:nowrap;}"], props => props.isReversed ? 'row-reverse' : 'row');
const VideoBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_common__WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "Advertisement__VideoBox",
  componentId: "sc-1rcy9lt-1"
})(["width:100%;height:400px;@media screen and (min-width:1024px){width:50%;height:auto;}"]);
const TextBlock = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_common__WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "Advertisement__TextBlock",
  componentId: "sc-1rcy9lt-2"
})(["display:flex;flex-direction:column;width:100%;padding:20px 60px 20px 30px;background:#888888;h1{padding-bottom:20px;}@media screen and (min-width:1024px){width:50%;}"]);
const StyledH1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_common__WEBPACK_IMPORTED_MODULE_2__["H1"]).withConfig({
  displayName: "Advertisement__StyledH1",
  componentId: "sc-1rcy9lt-3"
})(["text-transform:uppercase;"]);
const StyledParagraph = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_common__WEBPACK_IMPORTED_MODULE_2__["Paragraph"]).withConfig({
  displayName: "Advertisement__StyledParagraph",
  componentId: "sc-1rcy9lt-4"
})(["font-size:20px;padding-top:10px;line-height:30px;"]);
const Advertisement = ({
  isReversed = false
}) => __jsx(Container, {
  isReversed: isReversed,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }
}, __jsx(VideoBox, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 9
  }
}, __jsx("iframe", {
  width: "100%",
  height: "100%",
  src: "https://www.youtube.com/embed/z97MvXxHXgY",
  allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 13
  }
})), __jsx(TextBlock, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 9
  }
}, __jsx(StyledH1, {
  bold: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 13
  }
}, "Sng"), __jsx(StyledParagraph, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 13
  }
}, "School of new generation - \u043B\u044E\u0434\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435\u0440\u0430\u0432\u043D\u043E\u0434\u0443\u0448\u043D\u044B \u043A \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F\u043C \u0432 \u0441\u0444\u0435\u0440\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F. \u0412\u0441\u0435 \u043C\u044B \u0443\u0436\u0435 \u043D\u0435 \u0440\u0430\u0437 \u0441\u043B\u044B\u0448\u0430\u043B\u0438, \u0447\u0442\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u0432 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430\u0445 \u0431\u044B\u0441\u0442\u0440\u043E \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0430\u044E\u0442 \u0438 \u0441\u0438\u043B\u044C\u043D\u043E \u0440\u0430\u0437\u043D\u044F\u0442\u0441\u044F \u0441 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C\u0438 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0440\u044B\u043D\u043A\u0430. \u0412\u0441\u0435 \u043C\u044B \u0437\u043D\u0430\u0435\u043C \u2014 \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438 \u0432 21 \u0432\u0435\u043A\u0435, \u043D\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u0438\u0434\u0435\u0442\u044C \u0432 \u043E\u0444\u0438\u0441\u0435, \u0442\u0430\u0441\u043A\u0430\u0442\u044C \u0442\u044F\u0436\u0435\u043B\u044B\u0435 \u043A\u0430\u043C\u043D\u0438, \u043E\u0434\u0435\u0432\u0430\u0442\u044C \u0441\u0442\u0440\u043E\u0433\u0438\u0435 \u043A\u043E\u0441\u0442\u044E\u043C\u044B. \u041F\u043E\u043D\u044F\u0442\u0438\u0435 \u201C\u043E\u0444\u0438\u0441\u043D\u044B\u0439 \u043A\u043B\u0435\u0440\u043A\u201D \u0441 \u043A\u0430\u0436\u0434\u044B\u043C \u0433\u043E\u0434\u043E\u043C \u0440\u0430\u0437\u043C\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432\u0441\u0435 \u0441\u0438\u043B\u044C\u043D\u0435\u0435 \u0438 \u0441\u0438\u043B\u044C\u043D\u0435\u0435. \u041E\u0434\u043D\u0430\u043A\u043E, \u043A\u0430\u043A \u0436\u0435 \u0431\u044B\u0442\u044C \u0442\u0435\u043C, \u043A\u0442\u043E \u0435\u0449\u0435 \u043D\u0435 \u0437\u043D\u0430\u0435\u0442 \u043A\u0430\u043A \u044D\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C. \u0412\u044B\u0445\u043E\u0434 \u043E\u0434\u0438\u043D - \u043F\u0435\u0440\u0435\u0443\u0447\u0438\u0432\u0430\u0442\u044C\u0441\u044F."), __jsx(StyledParagraph, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 13
  }
}, "\u041D\u0430\u0448\u0430 \u0446\u0435\u043B\u044C - \u0434\u0430\u0442\u044C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0431\u044B\u0442\u044C \u0433\u0438\u0431\u043A\u0438\u043C\u0438 \u043A \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F\u043C \u0438 \u0432\u044B\u043F\u0443\u0441\u043A\u0430\u0442\u044C \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0441\u043F\u043E\u0441\u043E\u0431\u043D\u044B\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432 \u0432 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u044F\u0445.")));

/***/ }),

/***/ "./src/components/Landing/AboutSchool/index.tsx":
/*!******************************************************!*\
  !*** ./src/components/Landing/AboutSchool/index.tsx ***!
  \******************************************************/
/*! exports provided: AboutSchool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutSchool", function() { return AboutSchool; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common */ "./src/components/common/index.ts");
/* harmony import */ var _Advertisement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Advertisement */ "./src/components/Landing/AboutSchool/Advertisement/index.tsx");
var _jsxFileName = "/home/exoriri/Documents/pet-projects/online-school/frontend/src/components/Landing/AboutSchool/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AboutSchool = () => __jsx(_common__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  id: "school",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}, __jsx(_Advertisement__WEBPACK_IMPORTED_MODULE_2__["Advertisement"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}), __jsx(_Advertisement__WEBPACK_IMPORTED_MODULE_2__["Advertisement"], {
  isReversed: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}));

/***/ }),

/***/ "./src/components/Landing/Courses/CoursesList.tsx":
/*!********************************************************!*\
  !*** ./src/components/Landing/Courses/CoursesList.tsx ***!
  \********************************************************/
/*! exports provided: CoursesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesList", function() { return CoursesList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common */ "./src/components/common/index.ts");
var _jsxFileName = "/home/exoriri/Documents/pet-projects/online-school/frontend/src/components/Landing/Courses/CoursesList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const List = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "CoursesList__List",
  componentId: "onj04d-0"
})(["display:flex;flex-wrap:wrap;li{max-width:300px;margin:0 auto;padding-bottom:30px;&:last-child{}}@media screen and (min-width:700px){li{margin:0 20px;}}"]);
const StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_common__WEBPACK_IMPORTED_MODULE_2__["Image"]).withConfig({
  displayName: "CoursesList__StyledImage",
  componentId: "onj04d-1"
})(["max-width:300px;min-width:270px;width:100%;height:200px;margin-top:20px;"]);
const CoursesList = ({
  courses
}) => __jsx(List, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }
}, courses.map(course => __jsx("li", {
  key: course.id,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 13
  }
}, __jsx(_common__WEBPACK_IMPORTED_MODULE_2__["H2"], {
  bold: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 17
  }
}, course.title), __jsx(StyledImage, {
  src: `http://picsum.photos/248/152?r=${Math.random()}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 17
  }
}))));

/***/ }),

/***/ "./src/components/Landing/Courses/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/Landing/Courses/index.tsx ***!
  \**************************************************/
/*! exports provided: Courses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Courses", function() { return Courses; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common */ "./src/components/common/index.ts");
/* harmony import */ var _CoursesList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CoursesList */ "./src/components/Landing/Courses/CoursesList.tsx");
var _jsxFileName = "/home/exoriri/Documents/pet-projects/online-school/frontend/src/components/Landing/Courses/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const courses = [{
  id: 1,
  title: 'FRONTEND ДЛЯ ЧАЙНИКОВ'
}, {
  id: 2,
  title: 'ОСНОВЫ ОСНОВ JavaScript'
}, {
  id: 3,
  title: 'ОСНОВЫ ОСНОВ JavaScript'
}];
const StyledH1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_common__WEBPACK_IMPORTED_MODULE_2__["H1"]).withConfig({
  displayName: "Courses__StyledH1",
  componentId: "h5o0a0-0"
})(["text-transform:uppercase;padding-bottom:50px;text-align:center;"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_common__WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "Courses__Container",
  componentId: "h5o0a0-1"
})(["max-width:1024px;margin:0 auto;padding:28px 20px;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_common__WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "Courses__Wrapper",
  componentId: "h5o0a0-2"
})(["display:flex;flex-direction:column;"]);
const Courses = () => __jsx(Container, {
  id: "courses",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }
}, __jsx(Wrapper, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }
}, __jsx(StyledH1, {
  bold: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 13
  }
}, "\u041D\u0430\u0448\u0438 \u043A\u0443\u0440\u0441\u044B"), __jsx(_CoursesList__WEBPACK_IMPORTED_MODULE_3__["CoursesList"], {
  courses: courses,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 13
  }
})));

/***/ }),

/***/ "./src/components/Landing/Footer/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/Landing/Footer/index.tsx ***!
  \*************************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common */ "./src/components/common/index.ts");
var _jsxFileName = "/home/exoriri/Documents/pet-projects/online-school/frontend/src/components/Landing/Footer/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer.withConfig({
  displayName: "Footer__Container",
  componentId: "sc-17tow0d-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;background:#929292;height:200px;"]);
const List = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "Footer__List",
  componentId: "sc-17tow0d-1"
})(["display:flex;"]);
const StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_common__WEBPACK_IMPORTED_MODULE_2__["Image"]).withConfig({
  displayName: "Footer__StyledImage",
  componentId: "sc-17tow0d-2"
})(["width:50px;height:50px;"]);
const StyledParagraph = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_common__WEBPACK_IMPORTED_MODULE_2__["Paragraph"]).withConfig({
  displayName: "Footer__StyledParagraph",
  componentId: "sc-17tow0d-3"
})(["padding-top:10px;"]);
const Footer = () => __jsx(Container, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }
}, __jsx(List, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 13
  }
}, __jsx(_common__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 17
  }
}, __jsx(StyledImage, {
  src: '/social-images/vk.svg',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 21
  }
}))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 13
  }
}, __jsx(_common__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 17
  }
}, __jsx(StyledImage, {
  src: '/social-images/instagram.svg',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 21
  }
}))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 13
  }
}, __jsx(_common__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 17
  }
}, __jsx(StyledImage, {
  src: '/social-images/youtube.svg',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 21
  }
})))), __jsx(StyledParagraph, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 9
  }
}, "\u0418\u041F \u041B\u0430\u0432\u0440\u0438\u043A \u0420\u043E\u043C\u0430\u043D"), __jsx(StyledParagraph, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 9
  }
}, "\u0425\u043E\u0447\u0435\u0448\u044C \u0443\u043A\u0440\u0430\u0441\u0442\u044C \u043F\u0440\u0430\u0432\u0430 - \u0432\u044B\u0445\u043E\u0434\u0438 \u0432 \u043E\u043A\u0442\u0430\u0433\u043E\u043D"));

/***/ }),

/***/ "./src/components/Landing/Main/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/Landing/Main/index.tsx ***!
  \***********************************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common */ "./src/components/common/index.ts");
var _jsxFileName = "/home/exoriri/Documents/pet-projects/online-school/frontend/src/components/Landing/Main/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const StyledMain = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.main.withConfig({
  displayName: "Main__StyledMain",
  componentId: "htzitl-0"
})(["display:flex;justify-content:center;align-items:center;height:500px;background:#888888;text-align:center;"]);
const StyledH1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_common__WEBPACK_IMPORTED_MODULE_2__["H1"]).withConfig({
  displayName: "Main__StyledH1",
  componentId: "htzitl-1"
})(["font-size:30px;padding:0 20px;@media screen and (min-width:1024px){font-size:36px;}"]);
const Main = () => __jsx(StyledMain, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }
}, __jsx(StyledH1, {
  bold: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }
}, "SNG - \u0428\u041A\u041E\u041B\u0410 \u0421\u041E\u0412\u0420\u0415\u041C\u0415\u041D\u041D\u041E\u0413\u041E \u041E\u0411\u0420\u0410\u0417\u041E\u0412\u0410\u041D\u0418\u042F"));

/***/ }),

/***/ "./src/components/Landing/Question/index.tsx":
/*!***************************************************!*\
  !*** ./src/components/Landing/Question/index.tsx ***!
  \***************************************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common */ "./src/components/common/index.ts");
var _jsxFileName = "/home/exoriri/Documents/pet-projects/online-school/frontend/src/components/Landing/Question/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_common__WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "Question__Container",
  componentId: "ikh6iy-0"
})(["display:flex;max-width:400px;flex-direction:column;justify-content:center;margin:0 auto;text-align:center;height:400px;"]);
const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "Question__StyledButton",
  componentId: "ikh6iy-1"
})(["font-family:'Roboto-Bold';font-weight:bold;background:#c4c4c4;font-size:24px;width:50%;padding:10px 0;text-transform:uppercase;margin:10px auto;cursor:pointer;"]);
const Question = () => __jsx(Container, {
  id: "question",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }
}, __jsx(_common__WEBPACK_IMPORTED_MODULE_2__["H2"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }
}, "\u041F\u043E\u044F\u0432\u0438\u043B\u0438\u0441\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435?"), __jsx(_common__WEBPACK_IMPORTED_MODULE_2__["Paragraph"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }
}, "\u041D\u0430\u043F\u0438\u0448\u0438 \u0441\u0432\u043E\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u0432 \u043D\u0430\u0448\u0443 \u0433\u0440\u0443\u043F\u043F\u0443 \u0432 VK. \u041C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F , \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u043D\u0435\u0433\u043E"), __jsx(StyledButton, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }
}, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C"));

/***/ }),

/***/ "./src/components/Landing/index.ts":
/*!*****************************************!*\
  !*** ./src/components/Landing/index.ts ***!
  \*****************************************/
/*! exports provided: Main, Courses, AboutSchool, Question, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main */ "./src/components/Landing/Main/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return _Main__WEBPACK_IMPORTED_MODULE_0__["Main"]; });

/* harmony import */ var _Courses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Courses */ "./src/components/Landing/Courses/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Courses", function() { return _Courses__WEBPACK_IMPORTED_MODULE_1__["Courses"]; });

/* harmony import */ var _AboutSchool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AboutSchool */ "./src/components/Landing/AboutSchool/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AboutSchool", function() { return _AboutSchool__WEBPACK_IMPORTED_MODULE_2__["AboutSchool"]; });

/* harmony import */ var _Question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Question */ "./src/components/Landing/Question/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return _Question__WEBPACK_IMPORTED_MODULE_3__["Question"]; });

/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./src/components/Landing/Footer/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _Footer__WEBPACK_IMPORTED_MODULE_4__["Footer"]; });







/***/ }),

/***/ "./src/components/common/Box/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/common/Box/index.tsx ***!
  \*********************************************/
/*! exports provided: Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/exoriri/Documents/pet-projects/online-school/frontend/src/components/common/Box/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const Box = (_ref) => {
  let {
    children,
    className = ""
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "className"]);

  return __jsx("div", _extends({}, rest, {
    className: className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }), children);
};

/***/ }),

/***/ "./src/components/common/Button/index.tsx":
/*!************************************************!*\
  !*** ./src/components/common/Button/index.tsx ***!
  \************************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/exoriri/Documents/pet-projects/online-school/frontend/src/components/common/Button/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "symura-0"
})(["background:none;border:none;outline:none;cursor:pointer;"]);
const Button = ({
  children,
  className = ""
}) => __jsx(StyledButton, {
  className: className,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}, children);

/***/ }),

/***/ "./src/components/common/Header/index.tsx":
/*!************************************************!*\
  !*** ./src/components/common/Header/index.tsx ***!
  \************************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./src/components/common/index.ts");
/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./links */ "./src/components/common/Header/links.ts");
var _jsxFileName = "/home/exoriri/Documents/pet-projects/online-school/frontend/src/components/common/Header/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.header.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "gse31n-0"
})(["position:fixed;padding:10px 0px;width:100%;background:#fff;z-index:9999;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(___WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "Header__Wrapper",
  componentId: "gse31n-1"
})(["max-width:1200px;margin:0 auto;display:flex;padding:0 20px;align-items:center;"]);
const StyledH1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Header__StyledH1",
  componentId: "gse31n-2"
})(["font-family:'Roboto-Bold';font-weight:bold;font-size:36px;"]);
const LeftDesktop = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(___WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "Header__LeftDesktop",
  componentId: "gse31n-3"
})(["display:none;a{margin-right:7px;}@media screen and (min-width:1024px){display:flex;align-items:center;flex:1;}"]);
const RightList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "Header__RightList",
  componentId: "gse31n-4"
})(["display:none;li{padding-right:17px;&:last-child{padding-right:0;}}@media screen and (min-width:1024px){display:flex;justify-content:flex-end;flex:1;}"]);
const StyledListLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(___WEBPACK_IMPORTED_MODULE_2__["Link"]).withConfig({
  displayName: "Header__StyledListLink",
  componentId: "gse31n-5"
})(["font-family:'Roboto-Regular';font-size:20px;text-transform:uppercase;"]);
const Header = () => {
  return __jsx(StyledHeader, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx(LeftDesktop, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_2__["Link"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: '/social-images/vk.svg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 24
    }
  })), __jsx(___WEBPACK_IMPORTED_MODULE_2__["Link"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: '/social-images/instagram.svg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  })), __jsx(___WEBPACK_IMPORTED_MODULE_2__["Link"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: '/social-images/youtube.svg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }))), __jsx(StyledH1, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, "SNG"), __jsx(RightList, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, _links__WEBPACK_IMPORTED_MODULE_3__["links"].map(link => __jsx("li", {
    key: link.id,
    role: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }, __jsx(StyledListLink, {
    href: link.href,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 29
    }
  }, link.title))))));
};

/***/ }),

/***/ "./src/components/common/Header/links.ts":
/*!***********************************************!*\
  !*** ./src/components/common/Header/links.ts ***!
  \***********************************************/
/*! exports provided: links */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "links", function() { return links; });
const links = [{
  id: 1,
  title: 'Курсы',
  href: '#courses'
}, {
  id: 2,
  title: 'О школе',
  href: '#school'
}, {
  id: 3,
  title: 'Контакты',
  href: '#question'
}];

/***/ }),

/***/ "./src/components/common/Image/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/common/Image/index.tsx ***!
  \***********************************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/exoriri/Documents/pet-projects/online-school/frontend/src/components/common/Image/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Image = ({
  src,
  width = 36,
  height = 36,
  className = ""
}) => __jsx("img", {
  src: src,
  width: width,
  height: height,
  className: className,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
});

/***/ }),

/***/ "./src/components/common/Link/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/common/Link/index.tsx ***!
  \**********************************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/exoriri/Documents/pet-projects/online-school/frontend/src/components/common/Link/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "Link__StyledLink",
  componentId: "dc8ep4-0"
})(["text-decoration:none;color:#000;"]);
const Link = ({
  children,
  href = "#",
  className = ""
}) => __jsx(StyledLink, {
  href: href,
  className: className,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}, children);

/***/ }),

/***/ "./src/components/common/Typography/index.tsx":
/*!****************************************************!*\
  !*** ./src/components/common/Typography/index.tsx ***!
  \****************************************************/
/*! exports provided: H1, H2, Paragraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return H1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H2", function() { return H2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return Paragraph; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const H1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "Typography__H1",
  componentId: "lmstyf-0"
})(["font-family:", ";font-size:36px;font-weight:", ";"], props => props.bold ? 'Roboto-Bold' : 'Roboto-Regular', props => props.bold ? 'bold' : 'normal');
const H2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "Typography__H2",
  componentId: "lmstyf-1"
})(["font-family:", ";font-size:30px;font-weight:", ";"], props => props.bold ? 'Roboto-Bold' : 'Roboto-Regular', props => props.bold ? 'bold' : 'normal');
const Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "Typography__Paragraph",
  componentId: "lmstyf-2"
})(["font-family:", ";"], props => props.bold ? 'Roboto-Bold' : 'Roboto-Regular');

/***/ }),

/***/ "./src/components/common/index.ts":
/*!****************************************!*\
  !*** ./src/components/common/index.ts ***!
  \****************************************/
/*! exports provided: Box, Link, Header, Image, H1, H2, Paragraph, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box */ "./src/components/common/Box/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return _Box__WEBPACK_IMPORTED_MODULE_0__["Box"]; });

/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Link */ "./src/components/common/Link/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _Link__WEBPACK_IMPORTED_MODULE_1__["Link"]; });

/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/components/common/Header/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_2__["Header"]; });

/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Image */ "./src/components/common/Image/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _Image__WEBPACK_IMPORTED_MODULE_3__["Image"]; });

/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Typography */ "./src/components/common/Typography/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return _Typography__WEBPACK_IMPORTED_MODULE_4__["H1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H2", function() { return _Typography__WEBPACK_IMPORTED_MODULE_4__["H2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return _Typography__WEBPACK_IMPORTED_MODULE_4__["Paragraph"]; });

/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Button */ "./src/components/common/Button/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_5__["Button"]; });








/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/common */ "./src/components/common/index.ts");
/* harmony import */ var _components_Landing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Landing */ "./src/components/Landing/index.ts");
var _jsxFileName = "/home/exoriri/Documents/pet-projects/online-school/frontend/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const HomePage = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_common__WEBPACK_IMPORTED_MODULE_1__["Header"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}), __jsx(_components_Landing__WEBPACK_IMPORTED_MODULE_2__["Main"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}), __jsx(_components_Landing__WEBPACK_IMPORTED_MODULE_2__["Courses"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}), __jsx(_components_Landing__WEBPACK_IMPORTED_MODULE_2__["AboutSchool"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}), __jsx(_components_Landing__WEBPACK_IMPORTED_MODULE_2__["Question"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}), __jsx(_components_Landing__WEBPACK_IMPORTED_MODULE_2__["Footer"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/exoriri/Documents/pet-projects/online-school/frontend/src/pages/index.tsx */"./src/pages/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map