"use strict";
(self["webpackChunkcalc"] = self["webpackChunkcalc"] || []).push([["src_pages_Profile_MobileProfile_tsx"],{

/***/ "./src/components/UI/Blocks/LinksBlock.tsx":
/*!*************************************************!*\
  !*** ./src/components/UI/Blocks/LinksBlock.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _LinksBlock_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinksBlock.module.scss */ "./src/components/UI/Blocks/LinksBlock.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");






var LinksBlock = function LinksBlock(_ref) {
  var items = _ref.items,
    title = _ref.title;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: _LinksBlock_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].main,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4", {
      className: _LinksBlock_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].title,
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
      className: _LinksBlock_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].list,
      children: items.map(function (el) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
          className: _LinksBlock_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].item,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
            to: el.url,
            children: [el.icon, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              children: el.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineRight, {
              className: _LinksBlock_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].arrow
            })]
          })
        }, el.url);
      })
    })]
  });
};
_c = LinksBlock;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinksBlock);
var _c;
__webpack_require__.$Refresh$.register(_c, "LinksBlock");

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

/***/ "./src/pages/Profile/MobileProfile.tsx":
/*!*********************************************!*\
  !*** ./src/pages/Profile/MobileProfile.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/const */ "./src/common/const.tsx");
/* harmony import */ var _components_UI_Blocks_LinksBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/UI/Blocks/LinksBlock */ "./src/components/UI/Blocks/LinksBlock.tsx");
/* harmony import */ var _components_UI_Cards_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/UI/Cards/User */ "./src/components/UI/Cards/User.tsx");
/* harmony import */ var _components_UI_Containers_PageLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/UI/Containers/PageLayout */ "./src/components/UI/Containers/PageLayout.tsx");
/* harmony import */ var _mocks_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mocks/user */ "./src/mocks/user.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");








var MobileProfile = function MobileProfile(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_UI_Containers_PageLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    withNavbarOn: "tablet",
    mobileHeaderTitle: "Profile",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_UI_Cards_User__WEBPACK_IMPORTED_MODULE_2__["default"], {
      user: _mocks_user__WEBPACK_IMPORTED_MODULE_4__.userMock
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_UI_Blocks_LinksBlock__WEBPACK_IMPORTED_MODULE_1__["default"], {
      items: _common_const__WEBPACK_IMPORTED_MODULE_0__.profileSettings,
      title: "Account"
    })]
  });
};
_c = MobileProfile;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileProfile);
var _c;
__webpack_require__.$Refresh$.register(_c, "MobileProfile");

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

/***/ "./src/components/UI/Blocks/LinksBlock.module.scss":
/*!*********************************************************!*\
  !*** ./src/components/UI/Blocks/LinksBlock.module.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"main":"D2l6rGdpe1SWaINGMhuX","title":"DPkcMfTKbleAzO8zC6aU","item":"EpK3H5ECHi_vLhHz2eVx","arrow":"W2e77h0_gkpMr4MPBvJQ"});

/***/ })

}]);
//# sourceMappingURL=src_pages_Profile_MobileProfile_tsx.js.map