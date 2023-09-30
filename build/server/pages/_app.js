/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/_App/GoTop.js":
/*!**********************************!*\
  !*** ./components/_App/GoTop.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst GoTop = ({ scrollStepInPx , delayInMs  })=>{\n    const [thePosition, setThePosition] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);\n    const timeoutRef = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{\n        document.addEventListener(\"scroll\", ()=>{\n            if (window.scrollY > 170) {\n                setThePosition(true);\n            } else {\n                setThePosition(false);\n            }\n        });\n    }, []);\n    const onScrollStep = ()=>{\n        if (window.pageYOffset === 0) {\n            clearInterval(timeoutRef.current);\n        }\n        window.scroll(0, window.pageYOffset - scrollStepInPx);\n    };\n    const scrollToTop = ()=>{\n        timeoutRef.current = setInterval(onScrollStep, delayInMs);\n    };\n    const renderGoTopIcon = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: scrollToTop,\n                className: \"jsx-fa60d1ebae2f1884\" + \" \" + `go-top ${thePosition ? \"active\" : \"\"}`,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"jsx-fa60d1ebae2f1884\" + \" \" + \"ri-arrow-up-s-line\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Eurl Traxy\\\\Desktop\\\\Traxy-Site-main\\\\components\\\\_App\\\\GoTop.js\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, undefined),\n                    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        id: \"fa60d1ebae2f1884\",\n                        children: \".go-top.jsx-fa60d1ebae2f1884{bottom:0;z-index:4;opacity:0;right:20px;width:45px;height:45px;position:fixed;cursor:pointer;font-size:27px;text-align:center;visibility:hidden;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;color:var(--whiteColor);-webkit-transition:var(--transition);-moz-transition:var(--transition);-o-transition:var(--transition);transition:var(--transition);background:var(--gradientColor);-webkit-box-shadow:0px 3px 10px rgba(0,0,0,.1);-moz-box-shadow:0px 3px 10px rgba(0,0,0,.1);box-shadow:0px 3px 10px rgba(0,0,0,.1)}.go-top.jsx-fa60d1ebae2f1884 i.jsx-fa60d1ebae2f1884{left:0;top:50%;right:0;position:absolute;text-align:center;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);margin-left:auto;margin-right:auto}.go-top.active.jsx-fa60d1ebae2f1884{opacity:1;bottom:20px;visibility:visible}.go-top.jsx-fa60d1ebae2f1884:hover{-webkit-transform:translateY(-5px);-moz-transform:translateY(-5px);-ms-transform:translateY(-5px);-o-transform:translateY(-5px);transform:translateY(-5px)}@media only screen and (max-width:767px){.go-top.jsx-fa60d1ebae2f1884{right:10px;width:35px;height:35px;font-size:22px}.go-top.active.jsx-fa60d1ebae2f1884{bottom:10px}}@media only screen and (min-width:768px)and (max-width:991px){}@media only screen and (min-width:992px)and (max-width:1199px){}\"\n                    }, void 0, false, void 0, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Eurl Traxy\\\\Desktop\\\\Traxy-Site-main\\\\components\\\\_App\\\\GoTop.js\",\n                lineNumber: 32,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: renderGoTopIcon()\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoTop);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL19BcHAvR29Ub3AuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUUxQixNQUFNQyxLQUFLLEdBQUcsQ0FBQyxFQUFDQyxjQUFjLEdBQUVDLFNBQVMsR0FBQyxHQUFLO0lBRTNDLE1BQU0sQ0FBQ0MsV0FBVyxFQUFFQyxjQUFjLENBQUMsR0FBR0wscURBQWMsQ0FBQyxLQUFLLENBQUM7SUFDM0QsTUFBTU8sVUFBVSxHQUFHUCxtREFBWSxDQUFDLElBQUksQ0FBQztJQUVyQ0Esc0RBQWUsQ0FBQyxJQUFNO1FBQ2xCVSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFNO1lBQ3RDLElBQUlDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLEdBQUcsRUFBRTtnQkFDdEJSLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDeEIsT0FBTztnQkFDSEEsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsRUFBRSxFQUFFLENBQUM7SUFFTixNQUFNUyxZQUFZLEdBQUcsSUFBTTtRQUN2QixJQUFJRixNQUFNLENBQUNHLFdBQVcsS0FBSyxDQUFDLEVBQUM7WUFDekJDLGFBQWEsQ0FBQ1QsVUFBVSxDQUFDVSxPQUFPLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0RMLE1BQU0sQ0FBQ00sTUFBTSxDQUFDLENBQUMsRUFBRU4sTUFBTSxDQUFDRyxXQUFXLEdBQUdiLGNBQWMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxNQUFNaUIsV0FBVyxHQUFHLElBQU07UUFDdEJaLFVBQVUsQ0FBQ1UsT0FBTyxHQUFHRyxXQUFXLENBQUNOLFlBQVksRUFBRVgsU0FBUyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELE1BQU1rQixlQUFlLEdBQUcsSUFBTTtRQUMxQixxQkFDSTtzQkFDSSw0RUFBQ0MsS0FBRztnQkFBcURDLE9BQU8sRUFBRUosV0FBVzswREFBN0QsQ0FBQyxPQUFPLEVBQUVmLFdBQVcsR0FBRyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUM7O2tDQUNuRCw4REFBQ29CLEdBQUM7a0VBQVcsb0JBQW9COzs7OztpQ0FBSzs7Ozs7Ozs7Ozt5QkE2RHBDO3lCQUNQLENBQ047SUFDTCxDQUFDO0lBRUQscUJBQ0k7a0JBQ0tILGVBQWUsRUFBRTtxQkFDbkIsQ0FDTjtBQUNMLENBQUM7QUFFRCxpRUFBZXBCLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RyYXh5Ly4vY29tcG9uZW50cy9fQXBwL0dvVG9wLmpzPzdlM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgR29Ub3AgPSAoe3Njcm9sbFN0ZXBJblB4LCBkZWxheUluTXN9KSA9PiB7XG5cbiAgICBjb25zdCBbdGhlUG9zaXRpb24sIHNldFRoZVBvc2l0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB0aW1lb3V0UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxNzApIHtcbiAgICAgICAgICAgICAgICBzZXRUaGVQb3NpdGlvbih0cnVlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaGVQb3NpdGlvbihmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKVxuICAgIFxuICAgIGNvbnN0IG9uU2Nyb2xsU3RlcCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA9PT0gMCl7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVvdXRSZWYuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LnNjcm9sbCgwLCB3aW5kb3cucGFnZVlPZmZzZXQgLSBzY3JvbGxTdGVwSW5QeCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XG4gICAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHNldEludGVydmFsKG9uU2Nyb2xsU3RlcCwgZGVsYXlJbk1zKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJHb1RvcEljb24gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZ28tdG9wICR7dGhlUG9zaXRpb24gPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9e3Njcm9sbFRvVG9wfT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdyaS1hcnJvdy11cC1zLWxpbmUnPjwvaT5cblxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ28tdG9wIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGVDb2xvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnRDb2xvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5nby10b3AgaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZ28tdG9wLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5nby10b3A6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzcG9uc2l2ZSBTdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nby10b3Age1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ28tdG9wLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDc2OHB4KSBhbmQgKG1heC13aWR0aCA6IDk5MXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDk5MnB4KSBhbmQgKG1heC13aWR0aCA6IDExOTlweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7cmVuZGVyR29Ub3BJY29uKCl9XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR29Ub3A7Il0sIm5hbWVzIjpbIlJlYWN0IiwiR29Ub3AiLCJzY3JvbGxTdGVwSW5QeCIsImRlbGF5SW5NcyIsInRoZVBvc2l0aW9uIiwic2V0VGhlUG9zaXRpb24iLCJ1c2VTdGF0ZSIsInRpbWVvdXRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwib25TY3JvbGxTdGVwIiwicGFnZVlPZmZzZXQiLCJjbGVhckludGVydmFsIiwiY3VycmVudCIsInNjcm9sbCIsInNjcm9sbFRvVG9wIiwic2V0SW50ZXJ2YWwiLCJyZW5kZXJHb1RvcEljb24iLCJkaXYiLCJvbkNsaWNrIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/_App/GoTop.js\n");

/***/ }),

/***/ "./components/_App/Layout.js":
/*!***********************************!*\
  !*** ./components/_App/Layout.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _GoTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GoTop */ \"./components/_App/GoTop.js\");\n/* harmony import */ var _Preloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Preloader */ \"./components/_App/Preloader.js\");\n\n\n\n\n\nconst Layout = ({ children  })=>{\n    // Preloader\n    const [loader, setLoader] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        setTimeout(()=>setLoader(false), 1500);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charSet: \"utf-8\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Eurl Traxy\\\\Desktop\\\\Traxy-Site-main\\\\components\\\\_App\\\\Layout.js\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Eurl Traxy\\\\Desktop\\\\Traxy-Site-main\\\\components\\\\_App\\\\Layout.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Traxy - Protecting your property, is our Priority\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Eurl Traxy\\\\Desktop\\\\Traxy-Site-main\\\\components\\\\_App\\\\Layout.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Eurl Traxy\\\\Desktop\\\\Traxy-Site-main\\\\components\\\\_App\\\\Layout.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined),\n            children,\n            loader ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Preloader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eurl Traxy\\\\Desktop\\\\Traxy-Site-main\\\\components\\\\_App\\\\Layout.js\",\n                lineNumber: 26,\n                columnNumber: 23\n            }, undefined) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GoTop__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                scrollStepInPx: \"100\",\n                delayInMs: \"10.50\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eurl Traxy\\\\Desktop\\\\Traxy-Site-main\\\\components\\\\_App\\\\Layout.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL19BcHAvTGF5b3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBQ0c7QUFDRDtBQUNRO0FBRW5DLE1BQU1JLE1BQU0sR0FBRyxDQUFDLEVBQUVDLFFBQVEsR0FBRSxHQUFLO0lBRTdCLFlBQVk7SUFDWixNQUFNLENBQUNDLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUdQLHFEQUFjLENBQUMsSUFBSSxDQUFDO0lBQ2hEQSxzREFBZSxDQUFDLElBQU07UUFDbEJVLFVBQVUsQ0FBQyxJQUFNSCxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUVOLHFCQUNJOzswQkFDSSw4REFBQ04sa0RBQUk7O2tDQUVELDhEQUFDVSxNQUFJO3dCQUFDQyxPQUFPLEVBQUMsT0FBTzs7Ozs7aUNBQUc7a0NBQ3hCLDhEQUFDRCxNQUFJO3dCQUFDRSxJQUFJLEVBQUMsVUFBVTt3QkFBQ0MsT0FBTyxFQUFDLHFDQUFxQzs7Ozs7aUNBQUc7a0NBRXRFLDhEQUFDQyxPQUFLO2tDQUFDLG1EQUFpRDs7Ozs7aUNBQVE7Ozs7Ozt5QkFDN0Q7WUFFTlYsUUFBUTtZQUVSQyxNQUFNLGlCQUFHLDhEQUFDSCxrREFBUzs7Ozt5QkFBRyxHQUFHLElBQUk7MEJBRTlCLDhEQUFDRCw4Q0FBSztnQkFBQ2MsY0FBYyxFQUFDLEtBQUs7Z0JBQUNDLFNBQVMsRUFBQyxPQUFPOzs7Ozt5QkFBRzs7b0JBQ2pELENBQ0w7QUFDTixDQUFDO0FBRUQsaUVBQWViLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RyYXh5Ly4vY29tcG9uZW50cy9fQXBwL0xheW91dC5qcz8wZjhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IEdvVG9wIGZyb20gJy4vR29Ub3AnXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJy4vUHJlbG9hZGVyJ1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cbiAgICAvLyBQcmVsb2FkZXJcbiAgICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRMb2FkZXIoZmFsc2UpLCAxNTAwKTtcbiAgICB9LCBbXSlcblxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIHsvKiBSZXF1aXJlZCBtZXRhIHRhZ3MgKi99XG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuIFxuICAgICAgICAgICAgICAgIDx0aXRsZT5UcmF4eSAtIFByb3RlY3RpbmcgeW91ciBwcm9wZXJ0eSwgaXMgb3VyIFByaW9yaXR5PC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAge2NoaWxkcmVufVxuXG4gICAgICAgICAgICB7bG9hZGVyID8gPFByZWxvYWRlciAvPiA6IG51bGx9XG4gXG4gICAgICAgICAgICA8R29Ub3Agc2Nyb2xsU3RlcEluUHg9XCIxMDBcIiBkZWxheUluTXM9XCIxMC41MFwiIC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiR29Ub3AiLCJQcmVsb2FkZXIiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImxvYWRlciIsInNldExvYWRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsIm1ldGEiLCJjaGFyU2V0IiwibmFtZSIsImNvbnRlbnQiLCJ0aXRsZSIsInNjcm9sbFN0ZXBJblB4IiwiZGVsYXlJbk1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/_App/Layout.js\n");

/***/ }),

/***/ "./components/_App/Preloader.js":
/*!**************************************!*\
  !*** ./components/_App/Preloader.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Preloader = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-de6b7eeb71f75d71\" + \" \" + \"preloader-area\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-de6b7eeb71f75d71\" + \" \" + \"d-table\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-de6b7eeb71f75d71\" + \" \" + \"d-table-cell\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/images/logotraxyblack.png\",\n                                alt: \"logo\",\n                                width: \"180\",\n                                height: \"180\",\n                                className: \"jsx-de6b7eeb71f75d71\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Eurl Traxy\\\\Desktop\\\\Traxy-Site-main\\\\components\\\\_App\\\\Preloader.js\",\n                                lineNumber: 9,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"jsx-de6b7eeb71f75d71\",\n                                children: \"Loading...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Eurl Traxy\\\\Desktop\\\\Traxy-Site-main\\\\components\\\\_App\\\\Preloader.js\",\n                                lineNumber: 10,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Eurl Traxy\\\\Desktop\\\\Traxy-Site-main\\\\components\\\\_App\\\\Preloader.js\",\n                        lineNumber: 8,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Eurl Traxy\\\\Desktop\\\\Traxy-Site-main\\\\components\\\\_App\\\\Preloader.js\",\n                    lineNumber: 7,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eurl Traxy\\\\Desktop\\\\Traxy-Site-main\\\\components\\\\_App\\\\Preloader.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"de6b7eeb71f75d71\",\n                children: \".preloader-area.jsx-de6b7eeb71f75d71{position:fixed;background:#fff;width:100%;top:0;height:100%;z-index:1010;left:0;text-align:center;opacity:.96}.preloader-area.jsx-de6b7eeb71f75d71 img.jsx-de6b7eeb71f75d71{margin-bottom:5px}.preloader-area.jsx-de6b7eeb71f75d71 p.jsx-de6b7eeb71f75d71{font-size:17px}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Preloader);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL19BcHAvUHJlbG9hZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBeUI7QUFFekIsTUFBTUMsU0FBUyxHQUFHLElBQU07SUFDcEIscUJBQ0k7OzBCQUNJLDhEQUFDQyxLQUFHOzBEQUFXLGdCQUFnQjswQkFDM0IsNEVBQUNBLEtBQUc7OERBQVcsU0FBUzs4QkFDcEIsNEVBQUNBLEtBQUc7a0VBQVcsY0FBYzs7MENBQ3pCLDhEQUFDQyxLQUFHO2dDQUFDQyxHQUFHLEVBQUMsNEJBQTRCO2dDQUFDQyxHQUFHLEVBQUMsTUFBTTtnQ0FBQ0MsS0FBSyxFQUFDLEtBQUs7Z0NBQUNDLE1BQU0sRUFBQyxLQUFLOzs7Ozs7eUNBQUc7MENBQzVFLDhEQUFDQyxHQUFDOzswQ0FBQyxZQUFVOzs7Ozt5Q0FBSTs7Ozs7O2lDQUVmOzs7Ozs2QkFDSjs7Ozs7eUJBQ0o7Ozs7OztvQkFxQlAsQ0FDTjtBQUNMLENBQUM7QUFFRCxpRUFBZVAsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJheHkvLi9jb21wb25lbnRzL19BcHAvUHJlbG9hZGVyLmpzPzJlYWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBQcmVsb2FkZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlbG9hZGVyLWFyZWFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtdGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLXRhYmxlLWNlbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvdHJheHlibGFjay5wbmdcIiBhbHQ9XCJsb2dvXCIgd2lkdGg9XCIxODBcIiBoZWlnaHQ9XCIxODBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLnByZWxvYWRlci1hcmVhIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMTA7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjk2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucHJlbG9hZGVyLWFyZWEgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucHJlbG9hZGVyLWFyZWEgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJlbG9hZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJlbG9hZGVyIiwiZGl2IiwiaW1nIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/_App/Preloader.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/public/css/bootstrap.min.css */ \"./public/css/bootstrap.min.css\");\n/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/public/css/fontawesome.min.css */ \"./public/css/fontawesome.min.css\");\n/* harmony import */ var _public_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_css_remixicon_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/css/remixicon.css */ \"./public/css/remixicon.css\");\n/* harmony import */ var _public_css_remixicon_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_css_remixicon_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_css_animate_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/css/animate.min.css */ \"./public/css/animate.min.css\");\n/* harmony import */ var _public_css_animate_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_css_animate_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../node_modules/swiper/swiper.min.css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var _node_modules_swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../node_modules/react-modal-video/css/modal-video.min.css */ \"./node_modules/react-modal-video/css/modal-video.min.css\");\n/* harmony import */ var _node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ \"./node_modules/react-accessible-accordion/dist/fancy-example.css\");\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-image-lightbox/style.css */ \"./node_modules/react-image-lightbox/style.css\");\n/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-tabs/style/react-tabs.css */ \"./node_modules/react-tabs/style/react-tabs.css\");\n/* harmony import */ var react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _public_css_styles_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/public/css/styles.css */ \"./public/css/styles.css\");\n/* harmony import */ var _public_css_styles_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_css_styles_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_App_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/_App/Layout */ \"./components/_App/Layout.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// Global CSS\n\n\nconst MyApp = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_App_Layout__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Eurl Traxy\\\\Desktop\\\\Traxy-Site-main\\\\pages\\\\_app.js\",\n            lineNumber: 22,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Eurl Traxy\\\\Desktop\\\\Traxy-Site-main\\\\pages\\\\_app.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXVDO0FBQ0U7QUFDTjtBQUNFO0FBQ1M7QUFDNEI7QUFDVTtBQUNaO0FBQ0E7QUFDTjtBQUNSO0FBQ25CO0FBQ0M7QUFDeEMsYUFBYTtBQUNtQjtBQUVjO0FBRTlDLE1BQU1DLEtBQUssR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEdBQUs7SUFDeEMscUJBQ0ksOERBQUNILCtEQUFNO2tCQUNILDRFQUFDRSxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7cUJBQUk7Ozs7O2lCQUN2QixDQUNaO0FBQ0wsQ0FBQztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmF4eS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0AvcHVibGljL2Nzcy9ib290c3RyYXAubWluLmNzcydcbmltcG9ydCAnQC9wdWJsaWMvY3NzL2ZvbnRhd2Vzb21lLm1pbi5jc3MnXG5pbXBvcnQgJ0AvcHVibGljL2Nzcy9yZW1peGljb24uY3NzJ1xuaW1wb3J0ICdAL3B1YmxpYy9jc3MvYW5pbWF0ZS5taW4uY3NzJ1xuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvc3dpcGVyL3N3aXBlci5taW4uY3NzJ1xuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvbXBvbmVudHMvZWZmZWN0LWN1YmUvZWZmZWN0LWN1YmUubWluLmNzcydcbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb21wb25lbnRzL2VmZmVjdC1jb3ZlcmZsb3cvZWZmZWN0LWNvdmVyZmxvdy5taW4uY3NzJ1xuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLm1pbi5jc3MnXG5pbXBvcnQgJy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24ubWluLmNzcydcbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsLXZpZGVvL2Nzcy9tb2RhbC12aWRlby5taW4uY3NzJ1xuaW1wb3J0ICdyZWFjdC1hY2Nlc3NpYmxlLWFjY29yZGlvbi9kaXN0L2ZhbmN5LWV4YW1wbGUuY3NzJ1xuaW1wb3J0ICdyZWFjdC1pbWFnZS1saWdodGJveC9zdHlsZS5jc3MnXG5pbXBvcnQgJ3JlYWN0LXRhYnMvc3R5bGUvcmVhY3QtdGFicy5jc3MnXG4vLyBHbG9iYWwgQ1NTXG5pbXBvcnQgJ0AvcHVibGljL2Nzcy9zdHlsZXMuY3NzJ1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9fQXBwL0xheW91dCc7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sIm5hbWVzIjpbIkxheW91dCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/react-accessible-accordion/dist/fancy-example.css":
/*!************************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/fancy-example.css ***!
  \************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-image-lightbox/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-image-lightbox/style.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-modal-video/css/modal-video.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-modal-video/css/modal-video.min.css ***!
  \****************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-tabs/style/react-tabs.css":
/*!******************************************************!*\
  !*** ./node_modules/react-tabs/style/react-tabs.css ***!
  \******************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/swiper.min.css":
/*!********************************************!*\
  !*** ./node_modules/swiper/swiper.min.css ***!
  \********************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/animate.min.css":
/*!************************************!*\
  !*** ./public/css/animate.min.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/bootstrap.min.css":
/*!**************************************!*\
  !*** ./public/css/bootstrap.min.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/fontawesome.min.css":
/*!****************************************!*\
  !*** ./public/css/fontawesome.min.css ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/remixicon.css":
/*!**********************************!*\
  !*** ./public/css/remixicon.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/styles.css":
/*!*******************************!*\
  !*** ./public/css/styles.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();