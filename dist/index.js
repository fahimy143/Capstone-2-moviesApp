/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/reset.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/reset.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/ 2. v2.0 | 20110126\\r\\n  License: none (public domain)\\r\\n*/\\r\\n\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  border: 0;\\r\\n  font: inherit;\\r\\n  font-size: 100%;\\r\\n  vertical-align: baseline;\\r\\n  box-sizing: border-box;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n\\r\\n/* HTML5 display-role reset for older browsers */\\r\\n\\r\\narticle,\\r\\naside,\\r\\ndetails,\\r\\nfigcaption,\\r\\nfigure,\\r\\nfooter,\\r\\nheader,\\r\\nhgroup,\\r\\nmenu,\\r\\nnav,\\r\\nsection {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\nol,\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\nblockquote,\\r\\nq {\\r\\n  quotes: none;\\r\\n}\\r\\n\\r\\nblockquote:before,\\r\\nblockquote:after,\\r\\nq:before,\\r\\nq:after {\\r\\n  content: '';\\r\\n  content: none;\\r\\n}\\r\\n\\r\\ntable {\\r\\n  border-collapse: collapse;\\r\\n  border-spacing: 0;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://set-up-webpack/./src/assets/stylesheets/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/style.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/style.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --primary-color: #22254b;\\r\\n  --secondary-color: #373b69;\\r\\n}\\r\\n\\r\\n.html {\\r\\n  font-size: 87.5%;\\r\\n  scroll-behavior: smooth;\\r\\n}\\r\\n\\r\\n.body {\\r\\n  position: relative;\\r\\n  background-color: var(--primary-color);\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.offscreen {\\r\\n  border: 0;\\r\\n  clip: rect(0 0 0 0);\\r\\n  height: 1px;\\r\\n  margin: -1px;\\r\\n  overflow: hidden;\\r\\n  padding: 0;\\r\\n  position: absolute;\\r\\n  width: 1px;\\r\\n}\\r\\n\\r\\n.appwidth {\\r\\n  max-width: 80rem;\\r\\n  width: 80%;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n/** header **/\\r\\n\\r\\n.header {\\r\\n  background-color: var(--secondary-color);\\r\\n}\\r\\n\\r\\n.applogo {\\r\\n  padding-right: 9%;\\r\\n}\\r\\n\\r\\n.logoimg {\\r\\n  width: 100px;\\r\\n}\\r\\n\\r\\n.navbar {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.tvshows {\\r\\n  font-weight: bolder;\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.tvshows,\\r\\n.about,\\r\\n.contact {\\r\\n  font-size: 1.3rem;\\r\\n  padding-right: 10%;\\r\\n}\\r\\n\\r\\n/* Main Content */\\r\\n\\r\\n.main {\\r\\n  padding: 4rem 0;\\r\\n}\\r\\n\\r\\n.img {\\r\\n  width: 100%;\\r\\n  border-radius: 5%;\\r\\n}\\r\\n\\r\\n.loader {\\r\\n  padding: 10rem;\\r\\n  font-size: 4rem;\\r\\n}\\r\\n\\r\\n.shows {\\r\\n  display: grid;\\r\\n  gap: 2rem;\\r\\n  grid-template-columns: auto;\\r\\n}\\r\\n\\r\\n.show {\\r\\n  background-color: var(--secondary-color);\\r\\n  box-shadow: 0 4px 5px rgb(0, 0, 0, 0.2);\\r\\n  border-radius: 3px;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  display: block;\\r\\n  width: 100%;\\r\\n  padding: 0.3rem;\\r\\n  font-size: 1.15rem;\\r\\n  border: 1px solid black;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.comments1 {\\r\\n  display: block;\\r\\n  width: 26%;\\r\\n  padding: 0.3rem;\\r\\n  font-size: 2rem;\\r\\n  border: 1px solid black;\\r\\n  margin: 18px 10px 10px 58px;\\r\\n}\\r\\n\\r\\n.comments1:hover {\\r\\n  background-color: #aaa;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.info {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding: 0.6rem 0.2rem;\\r\\n  align-items: center;\\r\\n  gap: 0.3rem;\\r\\n}\\r\\n\\r\\n.likesinfo {\\r\\n  padding: 0 0 0.6rem 0;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n/* The Modal (background) */\\r\\n.modal {\\r\\n  display: none;\\r\\n  position: fixed;\\r\\n  z-index: 1;\\r\\n  padding-top: 100px;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  overflow: auto;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n/* Modal Content */\\r\\n.modal-content {\\r\\n  background-color: #fefefe;\\r\\n  margin: auto;\\r\\n  padding: 20px;\\r\\n  border: 1px solid #888;\\r\\n  width: 80%;\\r\\n}\\r\\n\\r\\n/* The Close Button */\\r\\n.close {\\r\\n  color: #aaa;\\r\\n  float: right;\\r\\n  font-size: 28px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.close:hover,\\r\\n.close:focus {\\r\\n  color: #000;\\r\\n  text-decoration: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.commenttemplate {\\r\\n  max-width: 80rem;\\r\\n  width: 80%;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.cthumbnail {\\r\\n  text-align: center;\\r\\n  padding-top: 3rem;\\r\\n}\\r\\n\\r\\n.cimg {\\r\\n  background-color: var(--secondary-color);\\r\\n  box-shadow: 0 4px 5px rgb(0, 0, 0, 0.2);\\r\\n  border-radius: 3px;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  font-size: 1.8rem;\\r\\n  text-align: center;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.details {\\r\\n  padding: 1rem;\\r\\n  margin-left: 40px;\\r\\n}\\r\\n\\r\\n.viewcomments {\\r\\n  text-align: center;\\r\\n  font-size: 1.5rem;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.commentlist {\\r\\n  padding: 1rem 1.5rem;\\r\\n  margin-left: 40px;\\r\\n}\\r\\n\\r\\n.addacomment {\\r\\n  padding: 0 5%;\\r\\n}\\r\\n\\r\\n.commentheader {\\r\\n  text-align: center;\\r\\n  padding: 1rem;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.yourname {\\r\\n  margin: 4px 0 15px 23px;\\r\\n  width: 199px;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.yourname,\\r\\n.yourinsight {\\r\\n  display: block;\\r\\n  border: 1px solid black;\\r\\n  margin-bottom: 0.5rem;\\r\\n  padding-left: 0.4rem;\\r\\n}\\r\\n\\r\\n.yourinsight {\\r\\n  width: 60%;\\r\\n  padding: 0.5rem 4px;\\r\\n  margin-left: 21px;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 20px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.showtitle {\\r\\n  font-size: 0.9rem;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 384px) {\\r\\n  .shows {\\r\\n    grid-template-columns: auto auto;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 576px) {\\r\\n  .shows {\\r\\n    grid-template-columns: auto auto auto;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 768px) {\\r\\n  .shows {\\r\\n    grid-template-columns: auto auto auto auto;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 992px) {\\r\\n  .shows {\\r\\n    grid-template-columns: auto auto auto auto auto;\\r\\n  }\\r\\n}\\r\\n\\r\\n/* Footer */\\r\\n\\r\\n.footer {\\r\\n  background-color: var(--secondary-color);\\r\\n}\\r\\n\\r\\n.foot {\\r\\n  padding: 2rem 0;\\r\\n  font-size: 1.3rem;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.runtime {\\r\\n  display: flex;\\r\\n  flex-direction: row-reverse;\\r\\n  margin-right: 80px;\\r\\n  margin-top: -13px;\\r\\n}\\r\\n\\r\\n.commentcontent {\\r\\n  background-color: var(--primary-color);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://set-up-webpack/./src/assets/stylesheets/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://set-up-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://set-up-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/stylesheets/reset.css":
/*!******************************************!*\
  !*** ./src/assets/stylesheets/reset.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://set-up-webpack/./src/assets/stylesheets/reset.css?");

/***/ }),

/***/ "./src/assets/stylesheets/style.css":
/*!******************************************!*\
  !*** ./src/assets/stylesheets/style.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://set-up-webpack/./src/assets/stylesheets/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://set-up-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://set-up-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://set-up-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://set-up-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://set-up-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://set-up-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stylesheets_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheets/reset.css */ \"./src/assets/stylesheets/reset.css\");\n/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stylesheets/style.css */ \"./src/assets/stylesheets/style.css\");\n/* harmony import */ var _modules_App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/App.js */ \"./src/assets/js/modules/App.js\");\n\n\n\n\n\n(0,_modules_App_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://set-up-webpack/./src/assets/js/index.js?");

/***/ }),

/***/ "./src/assets/js/modules/App.js":
/*!**************************************!*\
  !*** ./src/assets/js/modules/App.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvolvementAPI.js */ \"./src/assets/js/modules/InvolvementAPI.js\");\n/* harmony import */ var _TvAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TvAPI.js */ \"./src/assets/js/modules/TvAPI.js\");\n/* harmony import */ var _DisplayData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DisplayData.js */ \"./src/assets/js/modules/DisplayData.js\");\n\n\n\n\n\nconst key = 'tvapp';\nconst runApp = () => {\n  const content = document.querySelector('.shows');\n  if (content.innerHTML === '') {\n    content.innerHTML = '<div class=\\'loader\\'>Loading...</div>';\n  }\n\n  if (localStorage.getItem(key) === null) {\n    const appid = _InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.createNewApp();\n    const shows = (0,_TvAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n    Promise.all([appid, shows])\n      .then((responses) => {\n        responses.forEach((element) => {\n          if (typeof element === 'string') {\n            localStorage.setItem(key, JSON.stringify({ appId: element }));\n          } else {\n            const tvStorage = JSON.parse(localStorage.getItem(key));\n            tvStorage.shows = element;\n            tvStorage.likes = [];\n            tvStorage.comments = [];\n            localStorage.setItem(key, JSON.stringify(tvStorage));\n            _DisplayData_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].render(tvStorage);\n          }\n        });\n      });\n  } else {\n    const tvStorage = JSON.parse(localStorage.getItem(key));\n    _DisplayData_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].render(tvStorage);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (runApp);\n\n//# sourceURL=webpack://set-up-webpack/./src/assets/js/modules/App.js?");

/***/ }),

/***/ "./src/assets/js/modules/Comment.js":
/*!******************************************!*\
  !*** ./src/assets/js/modules/Comment.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Comment {\n  constructor(id, date, name, insight) {\n    this.id = id;\n    this.name = name;\n    this.date = date;\n    this.insight = insight;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);\n\n//# sourceURL=webpack://set-up-webpack/./src/assets/js/modules/Comment.js?");

/***/ }),

/***/ "./src/assets/js/modules/CommentMarkup.js":
/*!************************************************!*\
  !*** ./src/assets/js/modules/CommentMarkup.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentMarkup = (comment) => `<div class='comment' id='${comment.id}'>${comment.date} ${comment.name}: ${comment.insight}</div>`;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentMarkup);\n\n//# sourceURL=webpack://set-up-webpack/./src/assets/js/modules/CommentMarkup.js?");

/***/ }),

/***/ "./src/assets/js/modules/CommentModal.js":
/*!***********************************************!*\
  !*** ./src/assets/js/modules/CommentModal.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass CommentModal {\n  constructor(id, name, link, language, runtime) {\n    this.id = id;\n    this.name = name;\n    this.link = link;\n    this.language = language;\n    this.runtime = runtime;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentModal);\n\n//# sourceURL=webpack://set-up-webpack/./src/assets/js/modules/CommentModal.js?");

/***/ }),

/***/ "./src/assets/js/modules/CommentTemplate.js":
/*!**************************************************!*\
  !*** ./src/assets/js/modules/CommentTemplate.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commenttemplate = (commentInfo) => `<div class=\"commenttemplate\" id=${commentInfo.id}>\n  <div class='cthumbnail'>\n    <img class='cimg' src='${commentInfo.link}'/>\n  </div>\n  <div class='title'>${commentInfo.name}</div>\n  <div class='details'>\n    <div class='language'>Language: ${commentInfo.language}</div>\n    <div class='runtime'>Runtime: ${commentInfo.runtime}s</div>\n  </div>\n\n  <div class='commentsection'>\n    <h1 class='viewcomments'>Comments(<span class='commentnum'></span>)<h1>\n    <div class='commentlist'></div>\n  </div>\n\n  <div class='addacomment'>\n    <h1 class='commentheader'>Add a comment</h1>\n    <input type='text' name='' class='yourname' placeholder='  Your name' value='' id=''>\n    <textarea name=\"\" id=\"\" cols=\"30\" class='yourinsight' placeholder='  Your insights' value='' rows=\"10\"></textarea>\n  </div>\n  <button class='comments1'>Comment</button>\n</div>`;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commenttemplate);\n\n//# sourceURL=webpack://set-up-webpack/./src/assets/js/modules/CommentTemplate.js?");

/***/ }),

/***/ "./src/assets/js/modules/Date.js":
/*!***************************************!*\
  !*** ./src/assets/js/modules/Date.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// code reference:\n// https://bobbyhadz.com/blog/javascript-get-date-without-time#:~:text=Use%20the%20setHours()%20method,according%20to%20the%20provided%20values.\n\nconst formatDate = (date) => {\n  function padTo2Digits(num) {\n    return num.toString().padStart(2, '0');\n  }\n\n  return [\n    padTo2Digits(date.getMonth() + 1),\n    date.getFullYear(),\n    padTo2Digits(date.getDate()),\n  ].join('/');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDate);\n\n//# sourceURL=webpack://set-up-webpack/./src/assets/js/modules/Date.js?");

/***/ }),

/***/ "./src/assets/js/modules/DisplayData.js":
/*!**********************************************!*\
  !*** ./src/assets/js/modules/DisplayData.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Show_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.js */ \"./src/assets/js/modules/Show.js\");\n/* harmony import */ var _Shows_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shows.js */ \"./src/assets/js/modules/Shows.js\");\n/* harmony import */ var _ShowTemplate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShowTemplate.js */ \"./src/assets/js/modules/ShowTemplate.js\");\n/* harmony import */ var _GrabUserinput_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GrabUserinput.js */ \"./src/assets/js/modules/GrabUserinput.js\");\n/* harmony import */ var _Like_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Like.js */ \"./src/assets/js/modules/Like.js\");\n\n\n\n\n\n\nconst showsDiv = document.querySelector('.shows');\nconst shownum = document.querySelector('.num');\nlet showTemplate = '';\n\nclass Display {\n  render = (data) => {\n    const likesArr = [];\n    const tvStorage = JSON.parse(localStorage.getItem('tvapp'));\n    data.shows.forEach((element) => {\n      const show = new _Show_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](element.id, element.name, element.image.medium);\n      _Shows_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addShows(show);\n      showTemplate += (0,_ShowTemplate_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(show);\n    });\n    showsDiv.innerHTML = showTemplate;\n    shownum.innerHTML = tvStorage.shows.length;\n\n    if (tvStorage.likes.length === 0) {\n      data.shows.forEach((element) => {\n        const likess = new _Like_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](element.id, 0);\n        likesArr.push(likess);\n      });\n    } else {\n      const tvStorage = JSON.parse(localStorage.getItem('tvapp'));\n      tvStorage.likes.forEach((element) => {\n        const likess = new _Like_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](element.likeid, element.likes);\n        likesArr.push(likess);\n      });\n    }\n\n    const likeElement = document.querySelectorAll('.likesnum');\n    likesArr.forEach((element, index) => {\n      likeElement[index].innerHTML = element.likes;\n    });\n    tvStorage.likes = likesArr;\n    localStorage.setItem('tvapp', JSON.stringify(tvStorage));\n\n    const commentsbtns = document.querySelectorAll('.comments');\n    commentsbtns.forEach((element) => {\n      element.onclick = _GrabUserinput_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].openComment;\n    });\n\n    const likeAShow = document.querySelectorAll('.lovelogo');\n    likeAShow.forEach((element) => {\n      element.onclick = _GrabUserinput_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].like;\n    });\n\n    const span = document.getElementsByClassName('close')[0];\n    span.onclick = _GrabUserinput_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].closeComment;\n  }\n}\n\nconst display = new Display();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n//# sourceURL=webpack://set-up-webpack/./src/assets/js/modules/DisplayData.js?");

/***/ }),

/***/ "./src/assets/js/modules/GrabUserinput.js":
/*!************************************************!*\
  !*** ./src/assets/js/modules/GrabUserinput.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _InsertCommentContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InsertCommentContent.js */ \"./src/assets/js/modules/InsertCommentContent.js\");\n/* harmony import */ var _CommentTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentTemplate.js */ \"./src/assets/js/modules/CommentTemplate.js\");\n/* harmony import */ var _CommentModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommentModal.js */ \"./src/assets/js/modules/CommentModal.js\");\n/* harmony import */ var _Comment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Comment.js */ \"./src/assets/js/modules/Comment.js\");\n/* harmony import */ var _CommentMarkup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommentMarkup.js */ \"./src/assets/js/modules/CommentMarkup.js\");\n/* harmony import */ var _Date_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Date.js */ \"./src/assets/js/modules/Date.js\");\n\n\n\n\n\n\n\nclass GrabUserInput {\n  openComment = (e) => {\n    e.preventDefault();\n    const showId = e.target.parentElement.id;\n    const tvStorage = JSON.parse(localStorage.getItem('tvapp'));\n    let commentModal;\n    tvStorage.shows.forEach((element) => {\n      if (Number(showId) === element.id) {\n        commentModal = new _CommentModal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n          element.id,\n          element.name,\n          element.image.medium,\n          element.language,\n          element.runtime,\n        );\n      }\n    });\n    const modal = document.getElementById('myModal');\n    (0,_InsertCommentContent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(commentModal, _CommentTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    const commentNum = document.querySelector('.commentnum');\n    if (tvStorage.comments.length === 0) {\n      commentNum.innerHTML = 0;\n    } else {\n      let existingComment = '';\n      const commentList = document.querySelector('.commentlist');\n      let counter = 0;\n      tvStorage.comments.forEach((element) => {\n        if (showId === element.id) {\n          existingComment += (0,_CommentMarkup_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(element);\n          counter += 1;\n        }\n      });\n      commentList.innerHTML = existingComment;\n      commentNum.innerHTML = counter;\n    }\n    const makeAComment = document.querySelector('.comments1');\n    makeAComment.onclick = this.comment;\n    modal.style.display = 'block';\n  }\n\n  closeComment = (e) => {\n    e.preventDefault();\n    const modal = document.getElementById('myModal');\n    modal.style.display = 'none';\n  }\n\n  like = (e) => {\n    e.preventDefault();\n    const itemid = e.target.parentElement.parentElement.parentElement.id;\n    const likeElement = e.target.parentElement.parentElement\n      .parentElement.children[2].children[0].children[0];\n    let likenum = Number(likeElement.innerHTML);\n    likenum += 1;\n    likeElement.innerHTML = likenum;\n\n    const tvStorage = JSON.parse(localStorage.getItem('tvapp'));\n    tvStorage.likes.forEach((element) => {\n      if (Number(itemid) === element.likeid) {\n        element.likes = likenum;\n      }\n    });\n    localStorage.setItem('tvapp', JSON.stringify(tvStorage));\n  }\n\n  comment = (e) => {\n    e.preventDefault();\n    const { id } = e.target.parentElement;\n    const name = document.querySelector('.yourname');\n    const insight = document.querySelector('.yourinsight');\n    const namevalue = name.value;\n    const insightvalue = insight.value;\n    if (!namevalue || !insightvalue) {\n      return;\n    }\n    name.value = '';\n    insight.value = '';\n    const date = (0,_Date_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(new Date());\n    const tvStorage = JSON.parse(localStorage.getItem('tvapp'));\n    const newlyCreatedComment = new _Comment_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](id, date, namevalue, insightvalue);\n\n    const newlyCreatedCommentMarkup = (0,_CommentMarkup_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(newlyCreatedComment);\n    const commentList = document.querySelector('.commentlist');\n    let content = commentList.innerHTML;\n    content += newlyCreatedCommentMarkup;\n    commentList.innerHTML = content;\n    tvStorage.comments.push(newlyCreatedComment);\n    const commentNum = document.querySelector('.commentnum');\n    let counter = 0;\n    tvStorage.comments.forEach((element) => {\n      if (id === element.id) {\n        counter += 1;\n      }\n    });\n    commentNum.innerHTML = counter;\n    localStorage.setItem('tvapp', JSON.stringify(tvStorage));\n  }\n}\n\nconst grabInput = new GrabUserInput();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (grabInput);\n\n//# sourceURL=webpack://set-up-webpack/./src/assets/js/modules/GrabUserinput.js?");

/***/ }),

/***/ "./src/assets/js/modules/InsertCommentContent.js":
/*!*******************************************************!*\
  !*** ./src/assets/js/modules/InsertCommentContent.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst insertCommentModalInfo = (modal, commentmarkup) => {\n  const commentcontent = document.querySelector('.commentcontent');\n  let commentModalContent = '';\n  commentModalContent = commentmarkup(modal);\n  commentcontent.innerHTML = commentModalContent;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (insertCommentModalInfo);\n\n//# sourceURL=webpack://set-up-webpack/./src/assets/js/modules/InsertCommentContent.js?");

/***/ }),

/***/ "./src/assets/js/modules/InvolvementAPI.js":
/*!*************************************************!*\
  !*** ./src/assets/js/modules/InvolvementAPI.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewApp\": () => (/* binding */ createNewApp),\n/* harmony export */   \"createcomment\": () => (/* binding */ createcomment),\n/* harmony export */   \"createlike\": () => (/* binding */ createlike),\n/* harmony export */   \"getcomments\": () => (/* binding */ getcomments),\n/* harmony export */   \"getlikes\": () => (/* binding */ getlikes)\n/* harmony export */ });\nconst involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\n\nconst createNewApp = () => fetch(`${involvementApi}/apps/`, {\n  method: 'POST',\n})\n  .then((response) => response.text());\n\nconst createlike = (appid, item1) => fetch(`${involvementApi}/apps/${appid}/likes/`, {\n  method: 'POST',\n  body: JSON.stringify({ item_id: item1 }),\n  headers: {\n    'Content-Type': 'application/json',\n    Accept: 'application/json',\n  },\n})\n  .then((res) => res.json());\n\nconst getlikes = (appid) => fetch(`${involvementApi}/apps/${appid}/likes/`)\n  .then((res) => res.json());\n\nconst createcomment = (appid, item1, name, comment) => fetch(`${involvementApi}/apps/${appid}/comments/`, {\n  method: 'POST',\n  body: JSON.stringify({\n    item_id: item1,\n    username: name,\n    comment,\n  }),\n})\n  .then((res) => res.json());\n\nconst getcomments = (appid, item1) => fetch(`${involvementApi}/apps/${appid}/comments?item_id=${item1}/`)\n  .then((res) => res.json());\n\n//# sourceURL=webpack://set-up-webpack/./src/assets/js/modules/InvolvementAPI.js?");

/***/ }),

/***/ "./src/assets/js/modules/Like.js":
/*!***************************************!*\
  !*** ./src/assets/js/modules/Like.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Like {\n  constructor(showid, likes) {\n    this.likeid = showid;\n    this.likes = likes;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Like);\n\n//# sourceURL=webpack://set-up-webpack/./src/assets/js/modules/Like.js?");

/***/ }),

/***/ "./src/assets/js/modules/Show.js":
/*!***************************************!*\
  !*** ./src/assets/js/modules/Show.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Show {\n  constructor(id, title, imgUrl) {\n    this.id = id;\n    this.title = title;\n    this.imgUrl = imgUrl;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Show);\n\n//# sourceURL=webpack://set-up-webpack/./src/assets/js/modules/Show.js?");

/***/ }),

/***/ "./src/assets/js/modules/ShowTemplate.js":
/*!***********************************************!*\
  !*** ./src/assets/js/modules/ShowTemplate.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showtemplate = (show) => `<div class=\"show\" id=${show.id}>\n  <div class='thumbnail'>\n    <img class='img' src='${show.imgUrl}'/>\n  </div>\n  <div class='info'>\n    <div class='showtitle'>${show.title}</div>\n    <div class='lovelogo'><img src=\"https://img.icons8.com/ios/50/000000/filled-like.png\" class='logo'/></div>\n  </div>\n  <div class='likesinfo'>\n    <div class='likes'><span class='likesnum'></span> likes</div>\n  </div>\n\n  <button class='comments'>Comments</button>\n</div>\n\n</div>`;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showtemplate);\n\n//# sourceURL=webpack://set-up-webpack/./src/assets/js/modules/ShowTemplate.js?");

/***/ }),

/***/ "./src/assets/js/modules/Shows.js":
/*!****************************************!*\
  !*** ./src/assets/js/modules/Shows.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Shows {\n  constructor() {\n    this.shows = [];\n  }\n\n  addShows = (show) => {\n    this.shows.push(show);\n  }\n}\n\nconst shows = new Shows();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shows);\n\n//# sourceURL=webpack://set-up-webpack/./src/assets/js/modules/Shows.js?");

/***/ }),

/***/ "./src/assets/js/modules/TvAPI.js":
/*!****************************************!*\
  !*** ./src/assets/js/modules/TvAPI.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tvApi = 'https://api.tvmaze.com';\n\nconst getAllShows = () => fetch(`${tvApi}/shows`)\n  .then((res) => res.json());\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllShows);\n\n//# sourceURL=webpack://set-up-webpack/./src/assets/js/modules/TvAPI.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/index.js");
/******/ 	
/******/ })()
;