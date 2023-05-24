"use strict";
(self["webpackChunkcalc"] = self["webpackChunkcalc"] || []).push([["src_pages_Home_Home_tsx"],{

/***/ "./src/pages/Home/Home.tsx":
/*!*********************************!*\
  !*** ./src/pages/Home/Home.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var shared_ui_Carousels_BannerCarousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/ui/Carousels/BannerCarousel */ "./src/shared/ui/Carousels/BannerCarousel.tsx");
/* harmony import */ var widgets_ProductCarousel_ProductCarousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! widgets/ProductCarousel/ProductCarousel */ "./src/widgets/ProductCarousel/ProductCarousel.tsx");
/* harmony import */ var _app_ui_PageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/ui/PageLayout */ "./src/app/ui/PageLayout.tsx");
/* harmony import */ var _shared_lib_mocks_banners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/lib/mocks/banners */ "./src/shared/lib/mocks/banners.ts");
/* harmony import */ var _shared_lib_mocks_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/lib/mocks/products */ "./src/shared/lib/mocks/products.ts");
/* harmony import */ var _widgets_Categories_Categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/Categories/Categories */ "./src/widgets/Categories/Categories.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");









var Home = function Home(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_app_ui_PageLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    withNavbarOn: "all",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_widgets_Categories_Categories__WEBPACK_IMPORTED_MODULE_5__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(shared_ui_Carousels_BannerCarousel__WEBPACK_IMPORTED_MODULE_0__["default"], {
      images: _shared_lib_mocks_banners__WEBPACK_IMPORTED_MODULE_3__["default"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(widgets_ProductCarousel_ProductCarousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
      size: "md",
      title: "Hot Sales",
      products: _shared_lib_mocks_products__WEBPACK_IMPORTED_MODULE_4__["default"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(widgets_ProductCarousel_ProductCarousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
      size: "lg",
      title: "Recently Viewed",
      products: _shared_lib_mocks_products__WEBPACK_IMPORTED_MODULE_4__["default"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(widgets_ProductCarousel_ProductCarousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
      size: "lg",
      title: "Recently Viewed",
      products: _shared_lib_mocks_products__WEBPACK_IMPORTED_MODULE_4__["default"]
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

/***/ "./src/shared/lib/hooks/useTapMouseScroll.tsx":
/*!****************************************************!*\
  !*** ./src/shared/lib/hooks/useTapMouseScroll.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_s(function () {
  _s();
  var startXRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  var scrollLeftRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  var isDownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var onMouseDown = function onMouseDown(e) {
      var _e$currentTarget = e.currentTarget,
        offsetLeft = _e$currentTarget.offsetLeft,
        scrollLeft = _e$currentTarget.scrollLeft;
      startXRef.current = e.pageX - offsetLeft;
      scrollLeftRef.current = scrollLeft;
      isDownRef.current = true;
    };
    var onMouseMove = function onMouseMove(e) {
      if (isDownRef.current) {
        var offsetLeft = e.currentTarget.offsetLeft;
        var startX = e.pageX - offsetLeft;
        var diff = startX - startXRef.current;
        e.currentTarget.scrollTo({
          left: scrollLeftRef.current - diff,
          behavior: 'smooth'
        });
      }
    };
    var onMouseLeave = function onMouseLeave(e) {
      isDownRef.current = false;
    };
    var onMouseUp = function onMouseUp(e) {
      isDownRef.current = false;
    };
    return {
      onMouseDown: onMouseDown,
      onMouseLeave: onMouseLeave,
      onMouseMove: onMouseMove,
      onMouseUp: onMouseUp
    };
  }, []);
}, "yYh4ec5yG8DvVW8MMeLXSne2m/0="));

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

/***/ "./src/shared/lib/mocks/banners.ts":
/*!*****************************************!*\
  !*** ./src/shared/lib/mocks/banners.ts ***!
  \*****************************************/
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

/***/ "./src/shared/lib/mocks/categories.ts":
/*!********************************************!*\
  !*** ./src/shared/lib/mocks/categories.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _phone_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone.webp */ "./src/shared/lib/mocks/phone.webp");
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

/***/ "./src/shared/ui/Carousels/BannerCarousel.tsx":
/*!****************************************************!*\
  !*** ./src/shared/ui/Carousels/BannerCarousel.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _Blocks_CarouselPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Blocks/CarouselPagination */ "./src/shared/ui/Blocks/CarouselPagination.tsx");
/* harmony import */ var _BannerCarousel_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BannerCarousel.module.scss */ "./src/shared/ui/Carousels/BannerCarousel.module.scss");
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Carousel */ "./src/shared/ui/Carousels/Carousel.tsx");
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

/***/ "./src/shared/ui/Carousels/MinifyCarousel.tsx":
/*!****************************************************!*\
  !*** ./src/shared/ui/Carousels/MinifyCarousel.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MinifyCarousel_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MinifyCarousel.module.scss */ "./src/shared/ui/Carousels/MinifyCarousel.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var MinifyCarousel = function MinifyCarousel(_ref) {
  var categories = _ref.categories;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: _MinifyCarousel_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].main,
    children: categories.map(function (el) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
        className: _MinifyCarousel_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].item,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          src: el.preview,
          alt: "category_preview"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          children: el.title
        })]
      }, el.title);
    })
  });
};
_c = MinifyCarousel;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MinifyCarousel);
var _c;
__webpack_require__.$Refresh$.register(_c, "MinifyCarousel");

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

/***/ "./src/widgets/Categories/Categories.tsx":
/*!***********************************************!*\
  !*** ./src/widgets/Categories/Categories.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/go */ "./node_modules/react-icons/go/index.esm.js");
/* harmony import */ var _shared_lib_mocks_categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/lib/mocks/categories */ "./src/shared/lib/mocks/categories.ts");
/* harmony import */ var _Categories_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories.module.scss */ "./src/widgets/Categories/Categories.module.scss");
/* harmony import */ var shared_ui_Buttons_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ui/Buttons/Button */ "./src/shared/ui/Buttons/Button.tsx");
/* harmony import */ var shared_ui_Carousels_MinifyCarousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/ui/Carousels/MinifyCarousel */ "./src/shared/ui/Carousels/MinifyCarousel.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");








var Categories = function Categories(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: _Categories_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].main,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(shared_ui_Buttons_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_go__WEBPACK_IMPORTED_MODULE_5__.GoSettings, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(shared_ui_Carousels_MinifyCarousel__WEBPACK_IMPORTED_MODULE_3__["default"], {
      categories: _shared_lib_mocks_categories__WEBPACK_IMPORTED_MODULE_0__["default"]
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

/***/ "./src/widgets/ProductCarousel/ProductCarousel.tsx":
/*!*********************************************************!*\
  !*** ./src/widgets/ProductCarousel/ProductCarousel.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var entities_product_card_ui_ProductCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entities/product-card/ui/ProductCard */ "./src/entities/product-card/ui/ProductCard.tsx");
/* harmony import */ var shared_lib_hooks_useTapMouseScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/hooks/useTapMouseScroll */ "./src/shared/lib/hooks/useTapMouseScroll.tsx");
/* harmony import */ var _ProductCarousel_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductCarousel.module.scss */ "./src/widgets/ProductCarousel/ProductCarousel.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _s = __webpack_require__.$Refresh$.signature();
var _excluded = ["title", "subtitle", "products", "size"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var ProductCarousel = function ProductCarousel(_ref) {
  _s();
  var title = _ref.title,
    _ref$subtitle = _ref.subtitle,
    subtitle = _ref$subtitle === void 0 ? 'See all' : _ref$subtitle,
    products = _ref.products,
    size = _ref.size,
    props = _objectWithoutProperties(_ref, _excluded);
  var events = (0,shared_lib_hooks_useTapMouseScroll__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: _ProductCarousel_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].main,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: _ProductCarousel_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].headerBlock,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
        className: _ProductCarousel_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].title,
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        className: _ProductCarousel_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].more,
        children: subtitle
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", _objectSpread(_objectSpread({
      className: _ProductCarousel_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].itemList
    }, events), {}, {
      children: products.map(function (el) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(entities_product_card_ui_ProductCard__WEBPACK_IMPORTED_MODULE_0__["default"], _objectSpread(_objectSpread({}, el), {}, {
          size: size,
          withFavorite: size === 'lg',
          withCart: size === 'lg'
        }), el.id);
      })
    }))]
  });
};
_s(ProductCarousel, "pteeSnW/+mRzYjv+RLfbdhb21ow=", false, function () {
  return [shared_lib_hooks_useTapMouseScroll__WEBPACK_IMPORTED_MODULE_1__["default"]];
});
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Carousels/BannerCarousel.module.scss":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Carousels/BannerCarousel.module.scss ***!
  \***********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@media (min-width: 768px) {\n  .WbBG7GZz2gMy3Q26uCXA {\n    aspect-ratio: 3/1;\n  }\n}\n@media (max-width: 767px) {\n  .WbBG7GZz2gMy3Q26uCXA {\n    aspect-ratio: 2/1;\n  }\n}\n.WbBG7GZz2gMy3Q26uCXA {\n  position: relative;\n  flex-shrink: 0;\n  display: flex;\n  justify-content: center;\n}\n.WbBG7GZz2gMy3Q26uCXA span {\n  background-size: cover !important;\n}\n.WbBG7GZz2gMy3Q26uCXA .tOrmGN5DsSk4d2QSlnpy, .WbBG7GZz2gMy3Q26uCXA .pzAflBmcj1RYf0q4OWAg {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 6rem;\n  background-color: rgba(0, 0, 0, 0.05);\n  opacity: 0.3;\n  transition: opacity 0.3s ease;\n}\n.WbBG7GZz2gMy3Q26uCXA .tOrmGN5DsSk4d2QSlnpy:hover, .WbBG7GZz2gMy3Q26uCXA .pzAflBmcj1RYf0q4OWAg:hover {\n  opacity: 1;\n}\n.WbBG7GZz2gMy3Q26uCXA .tOrmGN5DsSk4d2QSlnpy svg, .WbBG7GZz2gMy3Q26uCXA .pzAflBmcj1RYf0q4OWAg svg {\n  margin: auto;\n  font-size: var(--font-xl);\n}\n.WbBG7GZz2gMy3Q26uCXA .tOrmGN5DsSk4d2QSlnpy {\n  left: 0;\n}\n.WbBG7GZz2gMy3Q26uCXA .tOrmGN5DsSk4d2QSlnpy svg {\n  transform: rotate(180deg);\n}\n.WbBG7GZz2gMy3Q26uCXA .pzAflBmcj1RYf0q4OWAg {\n  right: 0;\n}", "",{"version":3,"sources":["webpack://./src/app/styles/utils.scss","webpack://./src/shared/ui/Carousels/BannerCarousel.module.scss"],"names":[],"mappings":"AAGC;ECAA;IACC,iBAAA;EADA;AACF;ADKC;ECAA;IACC,iBAAA;EAFA;AACF;AAKA;EACC,kBAAA;EACA,cAAA;EACA,aAAA;EACA,uBAAA;AAHD;AAKC;EACC,iCAAA;AAHF;AAMC;EACC,kBAAA;EACA,MAAA;EACA,YAAA;EACA,WAAA;EACA,qCAAA;EACA,YAAA;EACA,6BAAA;AAJF;AAME;EACC,UAAA;AAJH;AAOE;EACC,YAAA;EACA,yBAAA;AALH;AASC;EACC,OAAA;AAPF;AASE;EACC,yBAAA;AAPH;AAWC;EACC,QAAA;AATF","sourcesContent":["\r\n\r\n@mixin media-tablet-min {\r\n\t@media(width >= 768px) {\r\n\t\t@content\r\n\t}\r\n};\r\n\r\n@mixin media-mobile {\r\n\t@media(width <= 767px) {\r\n\t\t@content\r\n\t}\r\n}","@import 'app/styles/utils';\r\n\r\n@include media-tablet-min {\r\n\t.main {\r\n\t\taspect-ratio: 3/1;\r\n\t}\r\n}\r\n\r\n@include media-mobile {\r\n\t.main {\r\n\t\taspect-ratio: 2/1\r\n\t}\r\n}\r\n\r\n.main {\r\n\tposition: relative;\r\n\tflex-shrink: 0;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\r\n\t& span {\r\n\t\tbackground-size: cover !important\r\n\t}\r\n\r\n\t.prevBtn, .nextBtn {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\theight: 100%;\r\n\t\twidth: 6rem;\r\n\t\tbackground-color: rgb(0 0 0 / 0.05);\r\n\t\topacity: 0.3;\r\n\t\ttransition: opacity 0.3s ease;\r\n\r\n\t\t&:hover {\r\n\t\t\topacity: 1;\r\n\t\t}\r\n\t\t\r\n\t\tsvg {\r\n\t\t\tmargin: auto;\r\n\t\t\tfont-size: var(--font-xl);\r\n\t\t}\r\n\t}\r\n\r\n\t.prevBtn {\r\n\t\tleft: 0;\r\n\r\n\t\tsvg {\r\n\t\t\ttransform: rotate(180deg);\r\n\t\t}\r\n\t}\r\n\r\n\t.nextBtn {\r\n\t\tright: 0;\r\n\t}\r\n\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"main": "WbBG7GZz2gMy3Q26uCXA",
	"prevBtn": "tOrmGN5DsSk4d2QSlnpy",
	"nextBtn": "pzAflBmcj1RYf0q4OWAg"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Carousels/MinifyCarousel.module.scss":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Carousels/MinifyCarousel.module.scss ***!
  \***********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".VldgOyQNh1v75APNMQCX {\n  display: flex;\n  gap: 0 0.3rem;\n  overflow-x: auto;\n}\n.VldgOyQNh1v75APNMQCX::-webkit-scrollbar {\n  display: none;\n}\n.VldgOyQNh1v75APNMQCX .Rjy_Gs7TMFjbfe7veA73 {\n  font-size: var(--font-lg);\n  padding: 0.5rem 0.7rem;\n  border: 0.05rem solid var(--clr-other);\n  border-radius: var(--round-sm);\n  display: flex;\n  align-items: center;\n  gap: 0 0.2rem;\n}\n.VldgOyQNh1v75APNMQCX img {\n  display: block;\n  height: 100%;\n  width: auto;\n}", "",{"version":3,"sources":["webpack://./src/shared/ui/Carousels/MinifyCarousel.module.scss"],"names":[],"mappings":"AAAA;EACC,aAAA;EACA,aAAA;EACA,gBAAA;AACD;AACC;EACC,aAAA;AACF;AAEC;EACC,yBAAA;EACA,sBAAA;EACA,sCAAA;EACA,8BAAA;EACA,aAAA;EACA,mBAAA;EACA,aAAA;AAAF;AAGC;EACC,cAAA;EACA,YAAA;EACA,WAAA;AADF","sourcesContent":[".main {\r\n\tdisplay: flex;\r\n\tgap: 0 0.3rem;\r\n\toverflow-x: auto;\r\n\r\n\t&::-webkit-scrollbar {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.item {\r\n\t\tfont-size: var(--font-lg);\r\n\t\tpadding: 0.5rem 0.7rem;\r\n\t\tborder: 0.05rem solid var(--clr-other);\r\n\t\tborder-radius: var(--round-sm);\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tgap: 0 0.2rem;\r\n\t}\r\n\r\n\timg {\r\n\t\tdisplay: block;\r\n\t\theight: 100%;\r\n\t\twidth: auto;\r\n\t}\r\n}\r\n\r\n// .main {\r\n// \tdisplay: flex;\r\n// \tgap: 0 0.3rem;\r\n// \toverflow-x: auto;\r\n// \theight: 100%;\r\n\r\n// \t&::-webkit-scrollbar {\r\n// \t\tdisplay: none;\r\n// \t}\r\n\r\n// \t.item {\r\n// \t\tfont-size: var(--font-lg);\r\n// \t\tpadding: 0.5rem 0.7rem;\r\n// \t\tborder: 0.05rem solid var(--clr-other);\r\n// \t\tborder-radius: var(--round-sm);\r\n// \t\tdisplay: flex;\r\n// \t\talign-items: center;\r\n// \t\tgap: 0 0.2rem;\r\n// \t}\r\n\r\n// \timg {\r\n// \t\tdisplay: block;\r\n// \t\theight: 100%;\r\n// \t\twidth: auto;\r\n// \t}\r\n// }"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"main": "VldgOyQNh1v75APNMQCX",
	"item": "Rjy_Gs7TMFjbfe7veA73"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Categories/Categories.module.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Categories/Categories.module.scss ***!
  \******************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".f6RacjdkMz_r2nO9n1_6 {\n  display: flex;\n  align-items: center;\n  gap: 0 1rem;\n  height: 2.5rem;\n  position: sticky;\n  top: 0;\n  padding-left: var(--g-padding-x);\n}", "",{"version":3,"sources":["webpack://./src/widgets/Categories/Categories.module.scss"],"names":[],"mappings":"AACA;EACC,aAAA;EACA,mBAAA;EACA,WAAA;EACA,cAAA;EACA,gBAAA;EACA,MAAA;EACA,gCAAA;AAAD","sourcesContent":["\r\n.main {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 0 1rem;\r\n\theight: 2.5rem;\r\n\tposition: sticky;\r\n\ttop: 0;\r\n\tpadding-left: var(--g-padding-x);\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"main": "f6RacjdkMz_r2nO9n1_6"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/widgets/ProductCarousel/ProductCarousel.module.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/widgets/ProductCarousel/ProductCarousel.module.scss ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".in5EH_b5HILay6bNT0aw {\n  display: flex;\n  flex-direction: column;\n}\n.in5EH_b5HILay6bNT0aw .zuv_7eVz4MgB0eXFDl3C {\n  padding: 1.5rem 0 1.2rem;\n  display: flex;\n  justify-content: space-between;\n}\n.in5EH_b5HILay6bNT0aw .nWXsZBy31GkD3FheSYX3 {\n  color: var(--clr-other);\n}\n.in5EH_b5HILay6bNT0aw .e3AI8y1ly65uGc7YqZnR {\n  display: grid;\n  grid-gap: 0 1rem;\n  gap: 0 1rem;\n  grid-auto-flow: column;\n  grid-auto-columns: 10rem;\n  overflow-x: auto;\n  flex: 1;\n}\n.in5EH_b5HILay6bNT0aw .e3AI8y1ly65uGc7YqZnR::-webkit-scrollbar {\n  display: none;\n}\n.in5EH_b5HILay6bNT0aw .e3AI8y1ly65uGc7YqZnR * {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}", "",{"version":3,"sources":["webpack://./src/widgets/ProductCarousel/ProductCarousel.module.scss"],"names":[],"mappings":"AACA;EACC,aAAA;EACA,sBAAA;AAAD;AAEC;EACC,wBAAA;EACA,aAAA;EACA,8BAAA;AAAF;AAGC;EACC,uBAAA;AADF;AAIC;EACC,aAAA;EACA,gBAAA;EAAA,WAAA;EACA,sBAAA;EACA,wBAAA;EACA,gBAAA;EACA,OAAA;AAFF;AAIE;EACC,aAAA;AAFH;AAKE;EACC,yBAAA;KAAA,sBAAA;UAAA,iBAAA;AAHH","sourcesContent":["\r\n.main {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\r\n\t.headerBlock {\r\n\t\tpadding: 1.5rem 0 1.2rem;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t}\r\n\r\n\t.more {\r\n\t\tcolor: var(--clr-other);\r\n\t}\r\n\r\n\t.itemList {\r\n\t\tdisplay: grid;\r\n\t\tgap: 0 1rem;\r\n\t\tgrid-auto-flow: column;\r\n\t\tgrid-auto-columns: 10rem;\r\n\t\toverflow-x: auto;\r\n\t\tflex: 1;\r\n\r\n\t\t&::-webkit-scrollbar {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\r\n\t\t& * {\r\n\t\t\tuser-select: none;\r\n\t\t}\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"main": "in5EH_b5HILay6bNT0aw",
	"headerBlock": "zuv_7eVz4MgB0eXFDl3C",
	"more": "nWXsZBy31GkD3FheSYX3",
	"itemList": "e3AI8y1ly65uGc7YqZnR"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/shared/ui/Carousels/BannerCarousel.module.scss":
/*!************************************************************!*\
  !*** ./src/shared/ui/Carousels/BannerCarousel.module.scss ***!
  \************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BannerCarousel_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./BannerCarousel.module.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Carousels/BannerCarousel.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BannerCarousel_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BannerCarousel_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BannerCarousel_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BannerCarousel_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/shared/ui/Carousels/MinifyCarousel.module.scss":
/*!************************************************************!*\
  !*** ./src/shared/ui/Carousels/MinifyCarousel.module.scss ***!
  \************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MinifyCarousel_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./MinifyCarousel.module.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Carousels/MinifyCarousel.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MinifyCarousel_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MinifyCarousel_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MinifyCarousel_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MinifyCarousel_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/widgets/Categories/Categories.module.scss":
/*!*******************************************************!*\
  !*** ./src/widgets/Categories/Categories.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Categories_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Categories.module.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Categories/Categories.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Categories_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Categories_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Categories_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Categories_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/widgets/ProductCarousel/ProductCarousel.module.scss":
/*!*****************************************************************!*\
  !*** ./src/widgets/ProductCarousel/ProductCarousel.module.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ProductCarousel_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./ProductCarousel.module.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/widgets/ProductCarousel/ProductCarousel.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ProductCarousel_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ProductCarousel_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ProductCarousel_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ProductCarousel_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_pages_Home_Home_tsx.js.map