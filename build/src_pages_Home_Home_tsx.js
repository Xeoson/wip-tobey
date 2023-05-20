"use strict";
(self["webpackChunkcalc"] = self["webpackChunkcalc"] || []).push([["src_pages_Home_Home_tsx"],{

/***/ "./src/components/Sections/Categories.tsx":
/*!************************************************!*\
  !*** ./src/components/Sections/Categories.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/go */ "./node_modules/react-icons/go/index.esm.js");
/* harmony import */ var _mocks_categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mocks/categories */ "./src/mocks/categories.ts");
/* harmony import */ var _UI_Buttons_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Buttons/Button */ "./src/components/UI/Buttons/Button.tsx");
/* harmony import */ var _UI_Carousels_CategoriesCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/Carousels/CategoriesCarousel */ "./src/components/UI/Carousels/CategoriesCarousel.tsx");
/* harmony import */ var _Categories_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Categories.module.scss */ "./src/components/Sections/Categories.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");








var Categories = function Categories(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: _Categories_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].main,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_UI_Buttons_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_go__WEBPACK_IMPORTED_MODULE_5__.GoSettings, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_UI_Carousels_CategoriesCarousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
      categories: _mocks_categories__WEBPACK_IMPORTED_MODULE_0__["default"]
    })]
  });
};
_c = Categories;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Categories);
var _c;
__webpack_require__.$Refresh$.register(_c, "Categories");

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

/***/ "./src/components/UI/Blocks/CarouselPagination.tsx":
/*!*********************************************************!*\
  !*** ./src/components/UI/Blocks/CarouselPagination.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CarouselPagination_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarouselPagination.module.scss */ "./src/components/UI/Blocks/CarouselPagination.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



var CarouselPagination = function CarouselPagination(_ref) {
  var currentIdx = _ref.currentIdx,
    itemsCount = _ref.itemsCount,
    onSetCurrentIdx = _ref.onSetCurrentIdx;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: _CarouselPagination_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].main,
    children: Array(itemsCount).fill('').map(function (el, i) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "".concat(_CarouselPagination_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].item, " ").concat(i === currentIdx ? _CarouselPagination_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].current : ''),
        onClick: function onClick() {
          onSetCurrentIdx(i);
        }
      }, el);
    })
  });
};
_c = CarouselPagination;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselPagination);
var _c;
__webpack_require__.$Refresh$.register(_c, "CarouselPagination");

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

/***/ "./src/components/UI/Carousels/BannerCarousel.tsx":
/*!********************************************************!*\
  !*** ./src/components/UI/Carousels/BannerCarousel.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _Blocks_CarouselPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Blocks/CarouselPagination */ "./src/components/UI/Blocks/CarouselPagination.tsx");
/* harmony import */ var _BannerCarousel_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BannerCarousel.module.scss */ "./src/components/UI/Carousels/BannerCarousel.module.scss");
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Carousel */ "./src/components/UI/Carousels/Carousel.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var BannerCarousel = function BannerCarousel(_ref) {
  _s2();
  var images = _ref.images;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    idx = _useState2[0],
    setIdx = _useState2[1];
  var onPrev = function onPrev() {
    if (idx > 0) {
      setIdx(function (prev) {
        return prev - 1;
      });
    } else {
      setIdx(images.length - 1);
    }
  };
  var onNext = function onNext() {
    if (idx >= images.length - 1) {
      setIdx(0);
    } else {
      setIdx(function (prev) {
        return prev + 1;
      });
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: _BannerCarousel_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].main,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"], {
      currentIdx: idx,
      images: images,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        onClick: onPrev,
        className: _BannerCarousel_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].prevBtn,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineRight, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        onClick: onNext,
        className: _BannerCarousel_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].nextBtn,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineRight, {})
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Blocks_CarouselPagination__WEBPACK_IMPORTED_MODULE_1__["default"], {
      currentIdx: idx,
      itemsCount: images.length,
      onSetCurrentIdx: function onSetCurrentIdx(i) {
        setIdx(i);
      }
    })]
  });
};
_s2(BannerCarousel, "uLNXp11TVAHb/Uw+TtMzDY6Cb9o=");
_c = BannerCarousel;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerCarousel);
var _c;
__webpack_require__.$Refresh$.register(_c, "BannerCarousel");

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

/***/ "./src/components/UI/Carousels/Carousel.tsx":
/*!**************************************************!*\
  !*** ./src/components/UI/Carousels/Carousel.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel.module.scss */ "./src/components/UI/Carousels/Carousel.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["currentIdx", "images", "children", "className"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Carousel = function Carousel(_ref) {
  var currentIdx = _ref.currentIdx,
    images = _ref.images,
    children = _ref.children,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", _objectSpread(_objectSpread({}, props), {}, {
    className: "".concat(_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].main, " ").concat(className !== null && className !== void 0 ? className : ''),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      style: {
        transform: "translateX(-".concat(currentIdx * 100, "%)")
      },
      className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].list,
      children: images.map(function (el) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          style: {
            backgroundImage: "url(".concat(el, ")")
          },
          className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].item
        }, el);
      })
    }), children]
  }));
};
_c = Carousel;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);
var _c;
__webpack_require__.$Refresh$.register(_c, "Carousel");

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

/***/ "./src/components/UI/Carousels/CategoriesCarousel.tsx":
/*!************************************************************!*\
  !*** ./src/components/UI/Carousels/CategoriesCarousel.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CategoriesCarousel_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoriesCarousel.module.scss */ "./src/components/UI/Carousels/CategoriesCarousel.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var CategoriesCarousel = function CategoriesCarousel(_ref) {
  var categories = _ref.categories;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: _CategoriesCarousel_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].main,
    children: categories.map(function (el) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
        className: _CategoriesCarousel_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].item,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          src: el.preview,
          alt: "category_preview"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          children: el.title
        })]
      }, el.slug);
    })
  });
};
_c = CategoriesCarousel;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriesCarousel);
var _c;
__webpack_require__.$Refresh$.register(_c, "CategoriesCarousel");

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

/***/ "./src/components/UI/Carousels/ProductCarousel.tsx":
/*!*********************************************************!*\
  !*** ./src/components/UI/Carousels/ProductCarousel.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Cards_ProductCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Cards/ProductCard */ "./src/components/UI/Cards/ProductCard.tsx");
/* harmony import */ var _ProductCarousel_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductCarousel.module.scss */ "./src/components/UI/Carousels/ProductCarousel.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["title", "subtitle", "products", "size"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var ProductCarousel = function ProductCarousel(_ref) {
  var title = _ref.title,
    _ref$subtitle = _ref.subtitle,
    subtitle = _ref$subtitle === void 0 ? 'See all' : _ref$subtitle,
    products = _ref.products,
    size = _ref.size,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: _ProductCarousel_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].main,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: _ProductCarousel_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].headerBlock,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
        className: _ProductCarousel_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title,
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        className: _ProductCarousel_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].more,
        children: subtitle
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: _ProductCarousel_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].itemList,
      children: products.map(function (el) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Cards_ProductCard__WEBPACK_IMPORTED_MODULE_0__["default"], _objectSpread(_objectSpread({}, el), {}, {
          size: size,
          withFavorite: size === 'lg',
          withCart: size === 'lg'
        }), el.id);
      })
    })]
  });
};
_c = ProductCarousel;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCarousel);
var _c;
__webpack_require__.$Refresh$.register(_c, "ProductCarousel");

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

/***/ "./src/mocks/banners.ts":
/*!******************************!*\
  !*** ./src/mocks/banners.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (["https://res.cloudinary.com/ds3ctqoro/image/upload/v1684166171/banner1_chvnu2.jpg", "https://marketplace.canva.com/EAE6uxzge6c/1/0/1600w/canva-yellow-and-white-minimalist-big-sale-banner-BjBIq-T_6j4.jpg", "https://marketplace.canva.com/EAE8j_zPDIA/1/0/1600w/canva-coming-soon-banner-landscape-YTXa0JsfQrs.jpg"]);

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

/***/ "./src/mocks/categories.ts":
/*!*********************************!*\
  !*** ./src/mocks/categories.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _phone_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone.webp */ "./src/mocks/phone.webp");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


var categories = ['Camera', 'Audio', 'Computers', 'Phone', 'Camera', 'Audio', 'Computers', 'Phone', 'Camera', 'Audio', 'Computers', 'Phone'].map(function (el) {
  return {
    title: el,
    preview: _phone_webp__WEBPACK_IMPORTED_MODULE_0__
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categories);

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

/***/ "./src/pages/Home/Home.tsx":
/*!*********************************!*\
  !*** ./src/pages/Home/Home.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Sections_Categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Sections/Categories */ "./src/components/Sections/Categories.tsx");
/* harmony import */ var _components_UI_Carousels_BannerCarousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/UI/Carousels/BannerCarousel */ "./src/components/UI/Carousels/BannerCarousel.tsx");
/* harmony import */ var _components_UI_Carousels_ProductCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/UI/Carousels/ProductCarousel */ "./src/components/UI/Carousels/ProductCarousel.tsx");
/* harmony import */ var _components_UI_Containers_PageLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/UI/Containers/PageLayout */ "./src/components/UI/Containers/PageLayout.tsx");
/* harmony import */ var _mocks_banners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mocks/banners */ "./src/mocks/banners.ts");
/* harmony import */ var _mocks_products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mocks/products */ "./src/mocks/products.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");









var Home = function Home(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_UI_Containers_PageLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    withNavbarOn: "all",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Sections_Categories__WEBPACK_IMPORTED_MODULE_0__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_UI_Carousels_BannerCarousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
      images: _mocks_banners__WEBPACK_IMPORTED_MODULE_4__["default"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_UI_Carousels_ProductCarousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: "md",
      title: "Hot Sales",
      products: _mocks_products__WEBPACK_IMPORTED_MODULE_5__["default"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_UI_Carousels_ProductCarousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: "lg",
      title: "Recently Viewed",
      products: _mocks_products__WEBPACK_IMPORTED_MODULE_5__["default"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_UI_Carousels_ProductCarousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: "lg",
      title: "Recently Viewed",
      products: _mocks_products__WEBPACK_IMPORTED_MODULE_5__["default"]
    })]
  });
};
_c = Home;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
var _c;
__webpack_require__.$Refresh$.register(_c, "Home");

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

/***/ "./src/components/Sections/Categories.module.scss":
/*!********************************************************!*\
  !*** ./src/components/Sections/Categories.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"main":"x42OaTI92SkYxYGAFO4O"});

/***/ }),

/***/ "./src/components/UI/Blocks/CarouselPagination.module.scss":
/*!*****************************************************************!*\
  !*** ./src/components/UI/Blocks/CarouselPagination.module.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"main":"_JmQFLa81AMfyvs4XfRW","item":"SHBlwsG1XsYuqXs4Ut6d","current":"wF5HfOuBQzTuNldyJwQp"});

/***/ }),

/***/ "./src/components/UI/Carousels/BannerCarousel.module.scss":
/*!****************************************************************!*\
  !*** ./src/components/UI/Carousels/BannerCarousel.module.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"main":"N9cpoCS3afe2VUrdZOaQ","prevBtn":"TCYAYUeHcuxImoKoIhsA","nextBtn":"p2950pSDQQa2GHRpwuJ1"});

/***/ }),

/***/ "./src/components/UI/Carousels/Carousel.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/UI/Carousels/Carousel.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"main":"pycevWSWg4clFcZewLEw","list":"sXD7aIRvX9llNr3_s5jE","item":"n8Fbg6lSjQdiBOjgNGnH"});

/***/ }),

/***/ "./src/components/UI/Carousels/CategoriesCarousel.module.scss":
/*!********************************************************************!*\
  !*** ./src/components/UI/Carousels/CategoriesCarousel.module.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"main":"kgz7O9wef7aiUFIrYD6y","item":"vNpZ0FfJPJupZ2Ce0ONm"});

/***/ }),

/***/ "./src/components/UI/Carousels/ProductCarousel.module.scss":
/*!*****************************************************************!*\
  !*** ./src/components/UI/Carousels/ProductCarousel.module.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"main":"CL5G_nxfROlxCDNE6ROk","headerBlock":"lkKMowyQoQTDhOe3UngG","more":"rerHtOjjeWe3mSQPqPQy","itemList":"BjjYGKpmhE_q0L_m9LKz"});

/***/ })

}]);
//# sourceMappingURL=src_pages_Home_Home_tsx.js.map