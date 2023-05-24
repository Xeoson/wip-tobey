"use strict";
(self["webpackChunkcalc"] = self["webpackChunkcalc"] || []).push([["src_shared_ui_Blocks_TabBar_tsx"],{

/***/ "./src/shared/ui/Blocks/TabBar.tsx":
/*!*****************************************!*\
  !*** ./src/shared/ui/Blocks/TabBar.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _TabBar_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabBar.module.scss */ "./src/shared/ui/Blocks/TabBar.module.scss");
/* harmony import */ var app_lib_browserRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/lib/browserRoutes */ "./src/app/lib/browserRoutes.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();






var variants = [{
  title: 'Home',
  icon: react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiOutlineHome,
  path: app_lib_browserRoutes__WEBPACK_IMPORTED_MODULE_1__["default"].home
}, {
  title: 'Profile',
  icon: react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiOutlineUser,
  path: app_lib_browserRoutes__WEBPACK_IMPORTED_MODULE_1__["default"].profile('')
}, {
  title: 'Cart',
  icon: react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiOutlineShoppingCart,
  path: app_lib_browserRoutes__WEBPACK_IMPORTED_MODULE_1__["default"].cart
}];
var TabBar = function TabBar(props) {
  _s();
  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useLocation)(),
    pathname = _useLocation.pathname;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("nav", {
    className: _TabBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].main,
    children: variants.map(function (el) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
        className: "".concat(_TabBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].item, " ").concat(pathname === el.path ? _TabBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].active : ''),
        to: el.path,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(el.icon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          children: el.title
        })]
      }, el.path);
    })
  });
};
_s(TabBar, "qVMqkCpYCjknUqSjfMln5RFSkbo=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useLocation];
});
_c = TabBar;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabBar);
var _c;
__webpack_require__.$Refresh$.register(_c, "TabBar");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Blocks/TabBar.module.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Blocks/TabBar.module.scss ***!
  \************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".DaiRHOFreDuKEirbrcv4 {\n  display: flex;\n  gap: 0 2rem;\n  justify-content: space-around;\n  padding: var(--g-padding-y) 4rem;\n  border-top: 0.05rem solid var(--clr-other);\n  position: sticky;\n  bottom: 0;\n  background-color: white;\n  z-index: 2;\n  margin-top: auto;\n}\n.DaiRHOFreDuKEirbrcv4 .sgpdir77tpIhVBb_NEq1 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 1rem;\n  gap: 0.3rem 0;\n  color: var(--clr-text-user);\n}\n.DaiRHOFreDuKEirbrcv4 .sgpdir77tpIhVBb_NEq1.zzDFoVJjZzpG2M7VSfKP {\n  color: var(--clr-secondary);\n}\n.DaiRHOFreDuKEirbrcv4 .sgpdir77tpIhVBb_NEq1 svg {\n  font-size: var(--font-xl);\n}", "",{"version":3,"sources":["webpack://./src/shared/ui/Blocks/TabBar.module.scss"],"names":[],"mappings":"AAAA;EACC,aAAA;EACA,WAAA;EACA,6BAAA;EACA,gCAAA;EACA,0CAAA;EACA,gBAAA;EACA,SAAA;EACA,uBAAA;EACA,UAAA;EACA,gBAAA;AACD;AACC;EACC,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,eAAA;EACA,aAAA;EACA,2BAAA;AACF;AACE;EACC,2BAAA;AACH;AAEE;EACC,yBAAA;AAAH","sourcesContent":[".main {\r\n\tdisplay: flex;\r\n\tgap: 0 2rem;\r\n\tjustify-content: space-around;\r\n\tpadding: var(--g-padding-y) 4rem;\r\n\tborder-top: 0.05rem solid var(--clr-other);\r\n\tposition: sticky;\r\n\tbottom: 0;\r\n\tbackground-color: white;\r\n\tz-index: 2;\r\n\tmargin-top: auto;\r\n\r\n\t.item {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: center;\r\n\t\tpadding: 0 1rem;\r\n\t\tgap: 0.3rem 0;\r\n\t\tcolor: var(--clr-text-user);\r\n\r\n\t\t&.active {\r\n\t\t\tcolor: var(--clr-secondary);\r\n\t\t}\r\n\r\n\t\tsvg {\r\n\t\t\tfont-size: var(--font-xl);\r\n\t\t}\r\n\t} \r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"main": "DaiRHOFreDuKEirbrcv4",
	"item": "sgpdir77tpIhVBb_NEq1",
	"active": "zzDFoVJjZzpG2M7VSfKP"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/shared/ui/Blocks/TabBar.module.scss":
/*!*************************************************!*\
  !*** ./src/shared/ui/Blocks/TabBar.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TabBar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./TabBar.module.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Blocks/TabBar.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TabBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TabBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TabBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TabBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_shared_ui_Blocks_TabBar_tsx.js.map