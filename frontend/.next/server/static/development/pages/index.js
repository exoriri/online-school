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
})(["display:flex;flex-wrap:wrap;li{padding-right:35px;padding-bottom:30px;&:last-child{padding-right:0;}}"]);
const StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_common__WEBPACK_IMPORTED_MODULE_2__["Image"]).withConfig({
  displayName: "CoursesList__StyledImage",
  componentId: "onj04d-1"
})(["max-width:350px;min-width:300px;width:100%;height:250px;margin-top:20px;"]);
const CoursesList = ({
  courses
}) => __jsx(List, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }
}, courses.map(course => __jsx("li", {
  key: course.id,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 13
  }
}, __jsx(_common__WEBPACK_IMPORTED_MODULE_2__["H1"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 17
  }
}, course.title), __jsx(StyledImage, {
  src: `http://picsum.photos/248/152?r=${Math.random()}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
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
})(["max-width:980px;margin:0 auto;padding:28px;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_common__WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "Courses__Wrapper",
  componentId: "h5o0a0-2"
})(["display:flex;flex-direction:column;"]);
const Courses = () => __jsx(Container, {
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
})(["display:flex;justify-content:center;align-items:center;height:500px;background:#888888;"]);
const Main = () => __jsx(StyledMain, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
}, __jsx(_common__WEBPACK_IMPORTED_MODULE_2__["H1"], {
  bold: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }
}, "SNG - \u0428\u041A\u041E\u041B\u0410 \u0421\u041E\u0412\u0420\u0415\u041C\u0415\u041D\u041D\u041E\u0413\u041E \u041E\u0411\u0420\u0410\u0417\u041E\u0412\u0410\u041D\u0418\u042F"));

/***/ }),

/***/ "./src/components/Landing/index.ts":
/*!*****************************************!*\
  !*** ./src/components/Landing/index.ts ***!
  \*****************************************/
/*! exports provided: Main, Courses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main */ "./src/components/Landing/Main/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return _Main__WEBPACK_IMPORTED_MODULE_0__["Main"]; });

/* harmony import */ var _Courses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Courses */ "./src/components/Landing/Courses/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Courses", function() { return _Courses__WEBPACK_IMPORTED_MODULE_1__["Courses"]; });




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

const Box = ({
  children,
  className = ""
}) => __jsx("div", {
  className: className,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
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
})(["padding:10px 30px;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(___WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "Header__Wrapper",
  componentId: "gse31n-1"
})(["display:flex;align-items:center;"]);
const StyledH1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Header__StyledH1",
  componentId: "gse31n-2"
})(["font-family:'Roboto-Bold';font-weight:bold;font-size:36px;"]);
const LeftDesktop = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(___WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "Header__LeftDesktop",
  componentId: "gse31n-3"
})(["display:flex;align-items:center;flex:1;a{margin-right:7px;}"]);
const List = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "Header__List",
  componentId: "gse31n-4"
})(["display:flex;justify-content:flex-end;flex:1;li{padding-right:17px;&:last-child{padding-right:0;}}"]);
const StyledListLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(___WEBPACK_IMPORTED_MODULE_2__["Link"]).withConfig({
  displayName: "Header__StyledListLink",
  componentId: "gse31n-5"
})(["font-family:'Roboto-Regular';font-size:20px;text-transform:uppercase;"]);
const Header = () => {
  return __jsx(StyledHeader, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx(LeftDesktop, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_2__["Link"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: '/social-images/vk.svg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  })), __jsx(___WEBPACK_IMPORTED_MODULE_2__["Link"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: '/social-images/instagram.svg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  })), __jsx(___WEBPACK_IMPORTED_MODULE_2__["Link"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: '/social-images/youtube.svg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }))), __jsx(StyledH1, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, "SNG"), __jsx(List, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, _links__WEBPACK_IMPORTED_MODULE_3__["links"].map(link => __jsx("li", {
    key: link.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, __jsx(StyledListLink, {
    href: link.href,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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
  href: '#contacts'
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
/*! exports provided: H1, Paragraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return H1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return Paragraph; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/exoriri/Documents/pet-projects/online-school/frontend/src/components/common/Typography/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const StyledH1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Typography__StyledH1",
  componentId: "lmstyf-0"
})(["font-family:", ";font-size:36px;font-weight:", ";"], props => props.bold ? 'Roboto-Bold' : 'Roboto-Regular', props => props.bold ? 'bold' : 'normal');
const H1 = ({
  children,
  bold = false,
  className = ""
}) => __jsx(StyledH1, {
  bold: bold,
  className: className,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, children);
const Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "Typography__Paragraph",
  componentId: "lmstyf-1"
})(["font-family:", ";"], props => props.bold ? 'Roboto-Bold' : 'Roboto-Regular');

/***/ }),

/***/ "./src/components/common/index.ts":
/*!****************************************!*\
  !*** ./src/components/common/index.ts ***!
  \****************************************/
/*! exports provided: Box, Link, Header, Image, H1, Paragraph */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return _Typography__WEBPACK_IMPORTED_MODULE_4__["Paragraph"]; });







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