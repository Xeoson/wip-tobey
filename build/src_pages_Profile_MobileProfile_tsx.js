"use strict";
(self["webpackChunkcalc"] = self["webpackChunkcalc"] || []).push([["src_pages_Profile_MobileProfile_tsx"],{

/***/ "./src/pages/Profile/MobileProfile.tsx":
/*!*********************************************!*\
  !*** ./src/pages/Profile/MobileProfile.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var entities_user_card_ui_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entities/user-card/ui/User */ "./src/entities/user-card/ui/User.tsx");
/* harmony import */ var shared_ui_Blocks_LinksBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/ui/Blocks/LinksBlock */ "./src/shared/ui/Blocks/LinksBlock.tsx");
/* harmony import */ var _app_lib_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/lib/const */ "./src/app/lib/const.tsx");
/* harmony import */ var _app_ui_PageLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/ui/PageLayout */ "./src/app/ui/PageLayout.tsx");
/* harmony import */ var _shared_lib_mocks_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/lib/mocks/user */ "./src/shared/lib/mocks/user.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");








var MobileProfile = function MobileProfile(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_app_ui_PageLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    withNavbarOn: "tablet",
    mobileHeaderTitle: "Profile",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(entities_user_card_ui_User__WEBPACK_IMPORTED_MODULE_0__["default"], {
      user: _shared_lib_mocks_user__WEBPACK_IMPORTED_MODULE_4__.userMock
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(shared_ui_Blocks_LinksBlock__WEBPACK_IMPORTED_MODULE_1__["default"], {
      items: _app_lib_const__WEBPACK_IMPORTED_MODULE_2__.profileSettings,
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

/***/ "./src/shared/ui/Blocks/LinksBlock.tsx":
/*!*********************************************!*\
  !*** ./src/shared/ui/Blocks/LinksBlock.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _LinksBlock_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinksBlock.module.scss */ "./src/shared/ui/Blocks/LinksBlock.module.scss");
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Blocks/LinksBlock.module.scss":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Blocks/LinksBlock.module.scss ***!
  \****************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".ayRzdjCnoMrRIwRQPiet {\n  margin: 1rem 0;\n}\n.ayRzdjCnoMrRIwRQPiet .JuQFL1OOYumYNG6FCpxi {\n  opacity: 0.3;\n  text-transform: uppercase;\n}\n.ayRzdjCnoMrRIwRQPiet .tpiZQOWWVf7yG5s3NkQ3 {\n  display: flex;\n  gap: 0 0.3rem;\n  padding: 1rem 0;\n  font-weight: bold;\n  border-top: 0.05rem solid var(--clr-other);\n}\n.ayRzdjCnoMrRIwRQPiet .tpiZQOWWVf7yG5s3NkQ3 > * {\n  display: flex;\n  align-items: center;\n  gap: 0 0.5rem;\n  font-weight: bold;\n  width: 100%;\n}\n.ayRzdjCnoMrRIwRQPiet .tpiZQOWWVf7yG5s3NkQ3 svg {\n  font-size: var(--font-xl);\n}\n.ayRzdjCnoMrRIwRQPiet .tpiZQOWWVf7yG5s3NkQ3 .pkQKkM2pmgMa_kmynQkm {\n  opacity: 0.3;\n  font-size: var(--font-md);\n  margin-left: auto;\n}\n.ayRzdjCnoMrRIwRQPiet .tpiZQOWWVf7yG5s3NkQ3:first-child {\n  border: none;\n}", "",{"version":3,"sources":["webpack://./src/shared/ui/Blocks/LinksBlock.module.scss"],"names":[],"mappings":"AACA;EACC,cAAA;AAAD;AAEC;EACC,YAAA;EACA,yBAAA;AAAF;AAGC;EACC,aAAA;EACA,aAAA;EACA,eAAA;EACA,iBAAA;EACA,0CAAA;AADF;AAGE;EACC,aAAA;EACA,mBAAA;EACA,aAAA;EACA,iBAAA;EACA,WAAA;AADH;AAIE;EACC,yBAAA;AAFH;AAKE;EACC,YAAA;EACA,yBAAA;EACA,iBAAA;AAHH;AAME;EACC,YAAA;AAJH","sourcesContent":["\r\n.main {\r\n\tmargin: 1rem 0;\r\n\r\n\t.title {\r\n\t\topacity: 0.3;\r\n\t\ttext-transform: uppercase;\r\n\t}\r\n\r\n\t.item {\r\n\t\tdisplay: flex;\r\n\t\tgap: 0 0.3rem;\r\n\t\tpadding: 1rem 0;\r\n\t\tfont-weight: bold;\r\n\t\tborder-top: 0.05rem solid var(--clr-other);\r\n\r\n\t\t& > * {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tgap: 0 0.5rem;\r\n\t\t\tfont-weight: bold;\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\r\n\t\t& svg {\r\n\t\t\tfont-size: var(--font-xl);\r\n\t\t}\r\n\r\n\t\t.arrow {\r\n\t\t\topacity: 0.3;\r\n\t\t\tfont-size: var(--font-md);\r\n\t\t\tmargin-left: auto;\r\n\t\t}\r\n\r\n\t\t&:first-child {\r\n\t\t\tborder: none;\r\n\t\t}\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"main": "ayRzdjCnoMrRIwRQPiet",
	"title": "JuQFL1OOYumYNG6FCpxi",
	"item": "tpiZQOWWVf7yG5s3NkQ3",
	"arrow": "pkQKkM2pmgMa_kmynQkm"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/shared/ui/Blocks/LinksBlock.module.scss":
/*!*****************************************************!*\
  !*** ./src/shared/ui/Blocks/LinksBlock.module.scss ***!
  \*****************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LinksBlock_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./LinksBlock.module.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Blocks/LinksBlock.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LinksBlock_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LinksBlock_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LinksBlock_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LinksBlock_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_pages_Profile_MobileProfile_tsx.js.map