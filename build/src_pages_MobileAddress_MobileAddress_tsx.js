"use strict";
(self["webpackChunkcalc"] = self["webpackChunkcalc"] || []).push([["src_pages_MobileAddress_MobileAddress_tsx"],{

/***/ "./src/components/Sections/UserAddressList.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Sections/UserAddressList.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _mocks_addresses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mocks/addresses */ "./src/mocks/addresses.ts");
/* harmony import */ var _UserAddressList_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserAddressList.module.scss */ "./src/components/Sections/UserAddressList.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var UserAddressList = function UserAddressList(props) {
  _s2();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    editingIdx = _useState2[0],
    setEditingIdx = _useState2[1];
  var inputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var handleChange = function handleChange(e) {
    inputValueRef.current = e.target.value;
  };
  var handleEditClick = function handleEditClick(idx) {
    return function () {
      if (idx === editingIdx) {
        if (inputValueRef.current) {
          // onAddressEditSave(idx, inputValueRef.current);
          inputValueRef.current = '';
        }
        setEditingIdx(undefined);
      } else {
        inputValueRef.current = '';
        setEditingIdx(idx);
      }
    };
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: _UserAddressList_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].main,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4", {
      className: _UserAddressList_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].header,
      children: "My Address"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
      className: _UserAddressList_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].list,
      children: _mocks_addresses__WEBPACK_IMPORTED_MODULE_1__["default"].map(function (el, i) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
          className: _UserAddressList_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].item,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
            disabled: i !== editingIdx,
            defaultValue: el,
            onChange: handleChange
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            onClick: handleEditClick(i),
            children: editingIdx === i ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineCheck, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdOutlineEdit, {})
          })]
        }, el);
      })
    })]
  });
};
_s2(UserAddressList, "vHDXRcmcQ/BMsQFLHHe9PNNRmTY=");
_c = UserAddressList;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserAddressList);
var _c;
__webpack_require__.$Refresh$.register(_c, "UserAddressList");

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

/***/ "./src/mocks/addresses.ts":
/*!********************************!*\
  !*** ./src/mocks/addresses.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (["Университетский пр., 6к1, Москва, Россия, 119333", "Электролитный пр-д, 3 строение 23, Москва, Россия, 115230", "ул. Симоновский Вал, 7 корпус 1, Москва, Россия, 109044"]);

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

/***/ "./src/pages/MobileAddress/MobileAddress.tsx":
/*!***************************************************!*\
  !*** ./src/pages/MobileAddress/MobileAddress.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Sections_UserAddressList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Sections/UserAddressList */ "./src/components/Sections/UserAddressList.tsx");
/* harmony import */ var _components_UI_Containers_PageLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/UI/Containers/PageLayout */ "./src/components/UI/Containers/PageLayout.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var MobileAddress = function MobileAddress(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_UI_Containers_PageLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    mobileHeaderTitle: "Address",
    withNavbarOn: "tablet",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Sections_UserAddressList__WEBPACK_IMPORTED_MODULE_0__["default"], {})
  });
};
_c = MobileAddress;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileAddress);
var _c;
__webpack_require__.$Refresh$.register(_c, "MobileAddress");

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

/***/ "./src/components/Sections/UserAddressList.module.scss":
/*!*************************************************************!*\
  !*** ./src/components/Sections/UserAddressList.module.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"main":"QKyMr7mEQ2UjOmvX5Dt4","header":"wblbx4rS6g0jBHg2WHXQ","list":"NySRq9NzBdE533MNAbkZ","item":"sXp5x_am3CcwarBUIs0t"});

/***/ })

}]);
//# sourceMappingURL=src_pages_MobileAddress_MobileAddress_tsx.js.map