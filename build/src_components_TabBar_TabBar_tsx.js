"use strict";
(self["webpackChunkcalc"] = self["webpackChunkcalc"] || []).push([["src_components_TabBar_TabBar_tsx"],{

/***/ "./src/components/TabBar/TabBar.tsx":
/*!******************************************!*\
  !*** ./src/components/TabBar/TabBar.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _common_browserRoutes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/browserRoutes */ "./src/common/browserRoutes.ts");
/* harmony import */ var _helpers_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/classNames */ "./src/helpers/classNames.ts");
/* harmony import */ var _TabBar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabBar.module.scss */ "./src/components/TabBar/TabBar.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







var variants = [{
  title: 'Home',
  icon: react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiOutlineHome,
  path: _common_browserRoutes__WEBPACK_IMPORTED_MODULE_0__["default"].home
}, {
  title: 'Profile',
  icon: react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiOutlineUser,
  path: _common_browserRoutes__WEBPACK_IMPORTED_MODULE_0__["default"].profile('')
}, {
  title: 'Cart',
  icon: react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiOutlineShoppingCart,
  path: _common_browserRoutes__WEBPACK_IMPORTED_MODULE_0__["default"].cart
}];
var cln = (0,_helpers_classNames__WEBPACK_IMPORTED_MODULE_1__["default"])(_TabBar_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].main, _defineProperty({}, _TabBar_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].item, false));
console.log('cln', cln);
var TabBar = function TabBar(props) {
  _s();
  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)(),
    pathname = _useLocation.pathname;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("nav", {
    className: _TabBar_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].main,
    children: variants.map(function (el) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
        className: "".concat(_TabBar_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].item, " ").concat(pathname === el.path ? _TabBar_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].active : ''),
        to: el.path,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(el.icon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          children: el.title
        })]
      }, el.path);
    })
  });
};
_s(TabBar, "qVMqkCpYCjknUqSjfMln5RFSkbo=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation];
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

/***/ "./src/components/TabBar/TabBar.module.scss":
/*!**************************************************!*\
  !*** ./src/components/TabBar/TabBar.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"main":"YuaNWeGujPeNDNzhU6A1","item":"dftwau4b2uQ7UiECjgZo","active":"Te9Gi221etqgtC8Eud5C"});

/***/ })

}]);
//# sourceMappingURL=src_components_TabBar_TabBar_tsx.js.map