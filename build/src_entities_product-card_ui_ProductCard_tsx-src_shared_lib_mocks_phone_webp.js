"use strict";
(self["webpackChunkcalc"] = self["webpackChunkcalc"] || []).push([["src_entities_product-card_ui_ProductCard_tsx-src_shared_lib_mocks_phone_webp"],{

/***/ "./src/entities/product-card/ui/ProductCard.tsx":
/*!******************************************************!*\
  !*** ./src/entities/product-card/ui/ProductCard.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var app_lib_browserRoutes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/lib/browserRoutes */ "./src/app/lib/browserRoutes.ts");
/* harmony import */ var features_cart_ui_AddToCartButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! features/cart/ui/AddToCartButton */ "./src/features/cart/ui/AddToCartButton.tsx");
/* harmony import */ var features_favorite_ui_AddToFavoriteButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! features/favorite/ui/AddToFavoriteButton */ "./src/features/favorite/ui/AddToFavoriteButton.tsx");
/* harmony import */ var main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! main */ "./src/main.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var shared_lib_helpers_classNames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/lib/helpers/classNames */ "./src/shared/lib/helpers/classNames.ts");
/* harmony import */ var _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductCard.module.scss */ "./src/entities/product-card/ui/ProductCard.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _s = __webpack_require__.$Refresh$.signature();
var _excluded = ["size", "withCart", "withFavorite"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var HoveredImageCarouselAsync = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.lazy)(_c = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Promise.all(/*! import() */[__webpack_require__.e("src_shared_ui_Blocks_CarouselPagination_tsx-src_shared_ui_Carousels_Carousel_tsx"), __webpack_require__.e("src_entities_product-card_ui_HoveredImageCarousel_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./HoveredImageCarousel */ "./src/entities/product-card/ui/HoveredImageCarousel.tsx"));
        case 2:
          return _context.abrupt("return", _context.sent);
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function _c() {
    return _ref.apply(this, arguments);
  };
}());
_c2 = HoveredImageCarouselAsync;
var ProductCard = function ProductCard(_ref2) {
  _s();
  var _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? 'md' : _ref2$size,
    _ref2$withCart = _ref2.withCart,
    withCart = _ref2$withCart === void 0 ? false : _ref2$withCart,
    _ref2$withFavorite = _ref2.withFavorite,
    withFavorite = _ref2$withFavorite === void 0 ? false : _ref2$withFavorite,
    props = _objectWithoutProperties(_ref2, _excluded);
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  var matchHover = (0,main__WEBPACK_IMPORTED_MODULE_3__.useMatchHover)();
  var isScrollingRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(false);
  var handlePointerDown = function handlePointerDown(e) {
    isScrollingRef.current = false;
    setTimeout(function () {
      isScrollingRef.current = true;
    }, 120);
  };
  var handlePointerUp = function handlePointerUp() {
    if (!isScrollingRef.current) {
      navigate(app_lib_browserRoutes__WEBPACK_IMPORTED_MODULE_0__["default"].product(props.id));
    }
  };
  var handleLeave = function handleLeave(e) {
    isScrollingRef.current = false;
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    onPointerUp: handlePointerUp,
    onPointerLeave: handleLeave,
    onPointerDown: handlePointerDown,
    className: (0,shared_lib_helpers_classNames__WEBPACK_IMPORTED_MODULE_5__["default"])(_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].main, _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"][size]),
    children: [matchHover ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react__WEBPACK_IMPORTED_MODULE_4__.Suspense, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(HoveredImageCarouselAsync, {
        className: _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].imgBlock,
        images: props.images
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].imgBlock,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
        src: props.images[0]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].title,
      children: props.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].subtitle,
      children: props.description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].price,
      children: [props.price, "$"]
    }), withCart && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(features_cart_ui_AddToCartButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].cartBtn,
      rotation: size === 'sm' ? 'vertical' : 'horizontal',
      productId: props.id
    }), withFavorite && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(features_favorite_ui_AddToFavoriteButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].favorite,
      productId: props.id
    })]
  });
};
_s(ProductCard, "ckOIh2Skzw/twWIqgYgyAsKixgE=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate, main__WEBPACK_IMPORTED_MODULE_3__.useMatchHover];
});
_c3 = ProductCard;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);
var _c, _c2, _c3;
__webpack_require__.$Refresh$.register(_c, "HoveredImageCarouselAsync$lazy");
__webpack_require__.$Refresh$.register(_c2, "HoveredImageCarouselAsync");
__webpack_require__.$Refresh$.register(_c3, "ProductCard");

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

/***/ "./src/features/cart/ui/AddToCartButton.tsx":
/*!**************************************************!*\
  !*** ./src/features/cart/ui/AddToCartButton.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_lib_helpers_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/helpers/classNames */ "./src/shared/lib/helpers/classNames.ts");
/* harmony import */ var _AddToCartButton_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddToCartButton.module.scss */ "./src/features/cart/ui/AddToCartButton.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _excluded = ["initValue", "rotation", "productId", "className"];
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var AddToCartButton = function AddToCartButton(_ref) {
  _s2();
  var _ref$initValue = _ref.initValue,
    initValue = _ref$initValue === void 0 ? 0 : _ref$initValue,
    rotation = _ref.rotation,
    productId = _ref.productId,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var handleChange = function handleChange(inc) {
    return function (e) {
      e.stopPropagation();
      var val = value + inc;
      setValue(val);
    };
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: (0,shared_lib_helpers_classNames__WEBPACK_IMPORTED_MODULE_1__["default"])(_AddToCartButton_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].main, _AddToCartButton_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"][rotation], className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
      className: _AddToCartButton_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].moreBtn,
      onClick: handleChange(1)
    }), value > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        children: value
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        className: _AddToCartButton_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].lessBtn,
        onClick: handleChange(-1)
      })]
    })]
  });
};
_s2(AddToCartButton, "3/KZZe15POeHTXZ/y4Ob1+QN3No=");
_c = AddToCartButton;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddToCartButton);
var _c;
__webpack_require__.$Refresh$.register(_c, "AddToCartButton");

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

/***/ "./src/features/favorite/ui/AddToFavoriteButton.tsx":
/*!**********************************************************!*\
  !*** ./src/features/favorite/ui/AddToFavoriteButton.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _AddToFavoriteButton_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddToFavoriteButton.module.scss */ "./src/features/favorite/ui/AddToFavoriteButton.module.scss");
/* harmony import */ var shared_lib_helpers_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/lib/helpers/classNames */ "./src/shared/lib/helpers/classNames.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _excluded = ["productId", "className"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var AddToFavoriteButton = function AddToFavoriteButton(_ref) {
  var productId = _ref.productId,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  var onAddFavorite = function onAddFavorite(e) {
    e.stopPropagation();
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
    onClick: onAddFavorite,
    className: (0,shared_lib_helpers_classNames__WEBPACK_IMPORTED_MODULE_2__["default"])(_AddToFavoriteButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].main, className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdFavorite, {})
  });
};
_c = AddToFavoriteButton;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddToFavoriteButton);
var _c;
__webpack_require__.$Refresh$.register(_c, "AddToFavoriteButton");

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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/entities/product-card/ui/ProductCard.module.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/entities/product-card/ui/ProductCard.module.scss ***!
  \*************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".ZbVwTVPE0JJLmKFhsnhH {\n  display: grid;\n  grid-gap: 0 0.4rem;\n  gap: 0 0.4rem;\n  overflow: hidden;\n  position: relative;\n  cursor: pointer;\n}\n.ZbVwTVPE0JJLmKFhsnhH.HZQYr3diSsIB_WzNXvRd {\n  align-items: center;\n  grid-template: \"img title cartBtn\" \"img subtitle cartBtn\" \"img price cartBtn\"/min-content 1fr 3rem;\n}\n.ZbVwTVPE0JJLmKFhsnhH.HZQYr3diSsIB_WzNXvRd .Vc3yM8pW95nwZ4MuWhyv {\n  margin: 0.5rem 0 0.1rem;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n}\n.ZbVwTVPE0JJLmKFhsnhH.HZQYr3diSsIB_WzNXvRd .zkzhQB_YyMsc3owcrpxq {\n  margin: 0.1rem 0;\n}\n.ZbVwTVPE0JJLmKFhsnhH.HZQYr3diSsIB_WzNXvRd .WosdsHzZW19QNosWYVIr {\n  margin: 0.1rem 0 0.5rem;\n  font-size: var(--font-xl);\n}\n.ZbVwTVPE0JJLmKFhsnhH.HZQYr3diSsIB_WzNXvRd .PrB4rI3BSZlKeZJ77icx {\n  justify-self: end;\n}\n.ZbVwTVPE0JJLmKFhsnhH.pYiQf0xnbIcTO7lN03uQ {\n  grid-template: \"img img\" \"title price\" \"subtitle subtitle\"/1fr max-content;\n}\n.ZbVwTVPE0JJLmKFhsnhH.pYiQf0xnbIcTO7lN03uQ .Vc3yM8pW95nwZ4MuWhyv,\n.ZbVwTVPE0JJLmKFhsnhH.pYiQf0xnbIcTO7lN03uQ .WosdsHzZW19QNosWYVIr {\n  margin: 0.3rem 0;\n}\n.ZbVwTVPE0JJLmKFhsnhH.pYiQf0xnbIcTO7lN03uQ .PrB4rI3BSZlKeZJ77icx {\n  position: absolute;\n  top: 0;\n  margin: 0 auto;\n}\n.ZbVwTVPE0JJLmKFhsnhH.jHvNQ886kMEathjXQy4F {\n  gap: 0.5rem 1rem;\n  grid-template: \"img img\" \"title favorite\" min-content \"subtitle subtitle\" \"price price\"/1fr 2rem;\n}\n.ZbVwTVPE0JJLmKFhsnhH.jHvNQ886kMEathjXQy4F .PrB4rI3BSZlKeZJ77icx {\n  justify-self: end;\n  margin-right: 0.3rem;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n.ZbVwTVPE0JJLmKFhsnhH.GgUUByQKluKhcAwJgnCC {\n  grid-template: \"img title title favorite\" \"img subtitle subtitle .\" \"img price cartBtn cartBtn\"/1fr auto auto min-content;\n  gap: 0.5rem 1.5rem;\n  align-items: center;\n  justify-items: start;\n}\n.ZbVwTVPE0JJLmKFhsnhH.GgUUByQKluKhcAwJgnCC .PrB4rI3BSZlKeZJ77icx {\n  justify-self: end;\n  margin-right: 0.3rem;\n}\n.ZbVwTVPE0JJLmKFhsnhH.GgUUByQKluKhcAwJgnCC .XuROUON_GlkUyUklrPB1 {\n  display: flex;\n  box-shadow: inset 0 0 1em 0 var(--clr-text-user);\n  padding: 1rem;\n}\n.ZbVwTVPE0JJLmKFhsnhH .XuROUON_GlkUyUklrPB1 {\n  grid-area: img;\n  height: 100%;\n  aspect-ratio: 1/1;\n  border-radius: 12px;\n}\n.ZbVwTVPE0JJLmKFhsnhH .XuROUON_GlkUyUklrPB1 img {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.ZbVwTVPE0JJLmKFhsnhH .Vc3yM8pW95nwZ4MuWhyv {\n  grid-area: title;\n  font-weight: bold;\n}\n.ZbVwTVPE0JJLmKFhsnhH .zkzhQB_YyMsc3owcrpxq {\n  grid-area: subtitle;\n  font-size: var(--font-md);\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.ZbVwTVPE0JJLmKFhsnhH .WosdsHzZW19QNosWYVIr {\n  grid-area: price;\n  font-weight: bold;\n}\n.ZbVwTVPE0JJLmKFhsnhH .PrB4rI3BSZlKeZJ77icx {\n  grid-area: cartBtn;\n}\n.ZbVwTVPE0JJLmKFhsnhH .vm5eopKRkSWk79FSZeTO {\n  grid-area: favorite;\n}", "",{"version":3,"sources":["webpack://./src/entities/product-card/ui/ProductCard.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,kBAAA;EAAA,aAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;AACF;AACE;EACE,mBAAA;EACA,kGACE;AAAN;AAKI;EACE,uBAAA;EACA,gBAAA;EACA,oBAAA;EACA,4BAAA;EACA,qBAAA;AAHN;AAMI;EACE,gBAAA;AAJN;AAOI;EACE,uBAAA;EACA,yBAAA;AALN;AAQI;EACE,iBAAA;AANN;AAUE;EACE,0EACE;AATN;AAcI;;EAEE,gBAAA;AAZN;AAeI;EACE,kBAAA;EACA,MAAA;EACA,cAAA;AAbN;AAiBE;EACE,gBAAA;EACA,gGACE;AAhBN;AAsBI;EACE,iBAAA;EACA,oBAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;AApBN;AAwBE;EACE,yHACE;EAIF,kBAAA;EACA,mBAAA;EACA,oBAAA;AA1BJ;AA4BI;EACE,iBAAA;EACA,oBAAA;AA1BN;AA6BI;EACE,aAAA;EACA,gDAAA;EACA,aAAA;AA3BN;AA+BE;EACE,cAAA;EACA,YAAA;EACA,iBAAA;EACA,mBAAA;AA7BJ;AA+BI;EACE,YAAA;EACA,WAAA;EACA,sBAAA;KAAA,mBAAA;AA7BN;AAiCE;EACE,gBAAA;EACA,iBAAA;AA/BJ;AAkCE;EACE,mBAAA;EACA,yBAAA;EACA,gBAAA;EACA,oBAAA;EACA,4BAAA;EACA,qBAAA;AAhCJ;AAmCE;EACE,gBAAA;EACA,iBAAA;AAjCJ;AAoCE;EACE,kBAAA;AAlCJ;AAqCE;EACE,mBAAA;AAnCJ","sourcesContent":[".main {\r\n  display: grid;\r\n  gap: 0 0.4rem;\r\n  overflow: hidden;\r\n  position: relative;\r\n  cursor: pointer;\r\n\r\n  &.sm {\r\n    align-items: center;\r\n    grid-template:\r\n      'img title cartBtn'\r\n      'img subtitle cartBtn'\r\n      'img price cartBtn'\r\n      / min-content 1fr 3rem;\r\n\r\n    .title {\r\n      margin: 0.5rem 0 0.1rem;\r\n      overflow: hidden;\r\n      display: -webkit-box;\r\n      -webkit-box-orient: vertical;\r\n      -webkit-line-clamp: 1;\r\n    }\r\n\r\n    .subtitle {\r\n      margin: 0.1rem 0;\r\n    }\r\n\r\n    .price {\r\n      margin: 0.1rem 0 0.5rem;\r\n      font-size: var(--font-xl);\r\n    }\r\n\r\n    .cartBtn {\r\n      justify-self: end;\r\n    }\r\n  }\r\n\r\n  &.md {\r\n    grid-template:\r\n      'img img'\r\n      'title price'\r\n      'subtitle subtitle'\r\n      / 1fr max-content;\r\n\r\n    .title,\r\n    .price {\r\n      margin: 0.3rem 0;\r\n    }\r\n\r\n    .cartBtn {\r\n      position: absolute;\r\n      top: 0;\r\n      margin: 0 auto;\r\n    }\r\n  }\r\n\r\n  &.lg {\r\n    gap: 0.5rem 1rem;\r\n    grid-template:\r\n      'img img'\r\n      'title favorite' min-content\r\n      'subtitle subtitle'\r\n      'price price'\r\n      / 1fr 2rem;\r\n\r\n    .cartBtn {\r\n      justify-self: end;\r\n      margin-right: 0.3rem;\r\n      position: absolute;\r\n      bottom: 0;\r\n      right: 0;\r\n    }\r\n  }\r\n\r\n  &.cart {\r\n    grid-template:\r\n      'img title title favorite'\r\n      'img subtitle subtitle .'\r\n      'img price cartBtn cartBtn'\r\n      / 1fr auto auto min-content;\r\n    gap: 0.5rem 1.5rem;\r\n    align-items: center;\r\n    justify-items: start;\r\n\r\n    .cartBtn {\r\n      justify-self: end;\r\n      margin-right: 0.3rem;\r\n    }\r\n\r\n    .imgBlock {\r\n      display: flex;\r\n      box-shadow: inset 0 0 1em 0 var(--clr-text-user);\r\n      padding: 1rem;\r\n    }\r\n  }\r\n\r\n  .imgBlock {\r\n    grid-area: img;\r\n    height: 100%;\r\n    aspect-ratio: 1/1;\r\n    border-radius: 12px;\r\n\r\n    img {\r\n      height: 100%;\r\n      width: 100%;\r\n      object-fit: contain;\r\n    }\r\n  }\r\n\r\n  .title {\r\n    grid-area: title;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .subtitle {\r\n    grid-area: subtitle;\r\n    font-size: var(--font-md);\r\n    overflow: hidden;\r\n    display: -webkit-box;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-line-clamp: 2;\r\n  }\r\n\r\n  .price {\r\n    grid-area: price;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .cartBtn {\r\n    grid-area: cartBtn;\r\n  }\r\n\r\n  .favorite {\r\n    grid-area: favorite;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"main": "ZbVwTVPE0JJLmKFhsnhH",
	"sm": "HZQYr3diSsIB_WzNXvRd",
	"title": "Vc3yM8pW95nwZ4MuWhyv",
	"subtitle": "zkzhQB_YyMsc3owcrpxq",
	"price": "WosdsHzZW19QNosWYVIr",
	"cartBtn": "PrB4rI3BSZlKeZJ77icx",
	"md": "pYiQf0xnbIcTO7lN03uQ",
	"lg": "jHvNQ886kMEathjXQy4F",
	"cart": "GgUUByQKluKhcAwJgnCC",
	"imgBlock": "XuROUON_GlkUyUklrPB1",
	"favorite": "vm5eopKRkSWk79FSZeTO"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/features/cart/ui/AddToCartButton.module.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/features/cart/ui/AddToCartButton.module.scss ***!
  \*********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".AQGLiSe9a8pk3hMQckwr {\n  display: flex;\n  align-items: center;\n}\n.AQGLiSe9a8pk3hMQckwr.VY8bxTI59mkZJYE9EeDs {\n  gap: 0.5rem 0;\n  flex-direction: column;\n}\n.AQGLiSe9a8pk3hMQckwr.UxioMURVMX7XcphSPQo6 {\n  gap: 0 1rem;\n}\n.AQGLiSe9a8pk3hMQckwr span {\n  font-weight: bold;\n}\n.AQGLiSe9a8pk3hMQckwr .EUj_UcpxaOv5vNW_lndg, .AQGLiSe9a8pk3hMQckwr .E4dm12y3l0Xc8Vp6WTbo {\n  width: 1.5rem;\n  height: 1.5rem;\n  border: 2px solid var(--clr-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  border-radius: 5px;\n}\n.AQGLiSe9a8pk3hMQckwr .EUj_UcpxaOv5vNW_lndg::after, .AQGLiSe9a8pk3hMQckwr .E4dm12y3l0Xc8Vp6WTbo::after {\n  content: \"\";\n  position: absolute;\n  background-color: var(--clr-secondary);\n  width: 50%;\n  height: 1px;\n}\n.AQGLiSe9a8pk3hMQckwr .E4dm12y3l0Xc8Vp6WTbo {\n  background-color: var(--clr-secondary);\n}\n.AQGLiSe9a8pk3hMQckwr .E4dm12y3l0Xc8Vp6WTbo::after {\n  background-color: white;\n  width: 50%;\n  height: 2px;\n}\n.AQGLiSe9a8pk3hMQckwr .E4dm12y3l0Xc8Vp6WTbo::before {\n  content: \"\";\n  position: absolute;\n  background-color: white;\n  height: 50%;\n  width: 2px;\n}", "",{"version":3,"sources":["webpack://./src/features/cart/ui/AddToCartButton.module.scss"],"names":[],"mappings":"AACA;EACC,aAAA;EACA,mBAAA;AAAD;AAEC;EACC,aAAA;EACA,sBAAA;AAAF;AAGC;EACC,WAAA;AADF;AAIC;EACC,iBAAA;AAFF;AAKC;EACC,aAAA;EACA,cAAA;EACA,sCAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;AAHF;AAKE;EACC,WAAA;EACA,kBAAA;EACA,sCAAA;EACA,UAAA;EACA,WAAA;AAHH;AAOC;EACC,sCAAA;AALF;AAOE;EACC,uBAAA;EACA,UAAA;EACA,WAAA;AALH;AAQE;EACC,WAAA;EACA,kBAAA;EACA,uBAAA;EACA,WAAA;EACA,UAAA;AANH","sourcesContent":["\r\n.main {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\t\r\n\t&.vertical {\r\n\t\tgap: 0.5rem 0;\r\n\t\tflex-direction: column;\r\n\t}\r\n\r\n\t&.horizontal {\r\n\t\tgap: 0 1rem;\r\n\t}\r\n\r\n\tspan {\r\n\t\tfont-weight: bold;\r\n\t}\r\n\r\n\t.lessBtn, .moreBtn {\r\n\t\twidth: 1.5rem;\r\n\t\theight: 1.5rem;\r\n\t\tborder: 2px solid var(--clr-secondary);\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\tposition: relative;\r\n\t\tborder-radius: 5px;\r\n\r\n\t\t&::after {\r\n\t\t\tcontent: '';\r\n\t\t\tposition: absolute;\r\n\t\t\tbackground-color: var(--clr-secondary);\r\n\t\t\twidth: 50%;\r\n\t\t\theight: 1px;\r\n\t\t}\r\n\t}\r\n\r\n\t.moreBtn {\r\n\t\tbackground-color: var(--clr-secondary);\r\n\r\n\t\t&::after {\r\n\t\t\tbackground-color: white;\r\n\t\t\twidth: 50%;\r\n\t\t\theight: 2px;\r\n\t\t}\r\n\r\n\t\t&::before {\r\n\t\t\tcontent: '';\r\n\t\t\tposition: absolute;\r\n\t\t\tbackground-color: white;\r\n\t\t\theight: 50%;\r\n\t\t\twidth: 2px;\r\n\t\t}\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"main": "AQGLiSe9a8pk3hMQckwr",
	"vertical": "VY8bxTI59mkZJYE9EeDs",
	"horizontal": "UxioMURVMX7XcphSPQo6",
	"lessBtn": "EUj_UcpxaOv5vNW_lndg",
	"moreBtn": "E4dm12y3l0Xc8Vp6WTbo"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/features/favorite/ui/AddToFavoriteButton.module.scss":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/features/favorite/ui/AddToFavoriteButton.module.scss ***!
  \*****************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".pgJ5lsUNba9hnBGAlTm0 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  width: 2rem;\n  height: 2rem;\n  padding: 0.5rem;\n  border: 0.05rem solid var(--clr-other);\n  color: var(--clr-other);\n}", "",{"version":3,"sources":["webpack://./src/features/favorite/ui/AddToFavoriteButton.module.scss"],"names":[],"mappings":"AACA;EACC,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,sCAAA;EACA,uBAAA;AAAD","sourcesContent":["\r\n.main {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tborder-radius: 50%;\r\n\twidth: 2rem;\r\n\theight: 2rem;\r\n\tpadding: 0.5rem;\r\n\tborder: 0.05rem solid var(--clr-other);\r\n\tcolor: var(--clr-other);\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"main": "pgJ5lsUNba9hnBGAlTm0"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/entities/product-card/ui/ProductCard.module.scss":
/*!**************************************************************!*\
  !*** ./src/entities/product-card/ui/ProductCard.module.scss ***!
  \**************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./ProductCard.module.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/entities/product-card/ui/ProductCard.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/features/cart/ui/AddToCartButton.module.scss":
/*!**********************************************************!*\
  !*** ./src/features/cart/ui/AddToCartButton.module.scss ***!
  \**********************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AddToCartButton_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./AddToCartButton.module.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/features/cart/ui/AddToCartButton.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AddToCartButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AddToCartButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AddToCartButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AddToCartButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/features/favorite/ui/AddToFavoriteButton.module.scss":
/*!******************************************************************!*\
  !*** ./src/features/favorite/ui/AddToFavoriteButton.module.scss ***!
  \******************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AddToFavoriteButton_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./AddToFavoriteButton.module.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/features/favorite/ui/AddToFavoriteButton.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AddToFavoriteButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AddToFavoriteButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AddToFavoriteButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AddToFavoriteButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/shared/lib/mocks/phone.webp":
/*!*****************************************!*\
  !*** ./src/shared/lib/mocks/phone.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/phone.76d50edfa9858faa06b8.webp";

/***/ })

}]);
//# sourceMappingURL=src_entities_product-card_ui_ProductCard_tsx-src_shared_lib_mocks_phone_webp.js.map