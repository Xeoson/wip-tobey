"use strict";
(self["webpackChunkcalc"] = self["webpackChunkcalc"] || []).push([["src_pages_MobileFavorites_MobileFavorites_tsx"],{

/***/ "./src/components/Sections/FavoriteProducts.tsx":
/*!******************************************************!*\
  !*** ./src/components/Sections/FavoriteProducts.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mocks_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mocks/products */ "./src/mocks/products.ts");
/* harmony import */ var _UI_Cards_ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Cards/ProductCard */ "./src/components/UI/Cards/ProductCard.tsx");
/* harmony import */ var _FavoriteProducts_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FavoriteProducts.module.scss */ "./src/components/Sections/FavoriteProducts.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var FavoriteProducts = function FavoriteProducts(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: _FavoriteProducts_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].main,
    children: _mocks_products__WEBPACK_IMPORTED_MODULE_0__["default"].map(function (el) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_UI_Cards_ProductCard__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread(_objectSpread({}, el), {}, {
        withFavorite: true,
        withCart: true,
        size: "cart"
      }), el.id);
    })
  });
};
_c = FavoriteProducts;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoriteProducts);
var _c;
__webpack_require__.$Refresh$.register(_c, "FavoriteProducts");

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

/***/ "./src/pages/MobileFavorites/MobileFavorites.tsx":
/*!*******************************************************!*\
  !*** ./src/pages/MobileFavorites/MobileFavorites.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Sections_FavoriteProducts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Sections/FavoriteProducts */ "./src/components/Sections/FavoriteProducts.tsx");
/* harmony import */ var _components_UI_Containers_PageLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/UI/Containers/PageLayout */ "./src/components/UI/Containers/PageLayout.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var MobileFavorites = function MobileFavorites(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_UI_Containers_PageLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    mobileHeaderTitle: "Favorites",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Sections_FavoriteProducts__WEBPACK_IMPORTED_MODULE_0__["default"], {})
  });
};
_c = MobileFavorites;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileFavorites);
var _c;
__webpack_require__.$Refresh$.register(_c, "MobileFavorites");

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

/***/ "./src/components/Sections/FavoriteProducts.module.scss":
/*!**************************************************************!*\
  !*** ./src/components/Sections/FavoriteProducts.module.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"main":"e_iwCu6pOJY0tTPqF0wr"});

/***/ })

}]);
//# sourceMappingURL=src_pages_MobileFavorites_MobileFavorites_tsx.js.map