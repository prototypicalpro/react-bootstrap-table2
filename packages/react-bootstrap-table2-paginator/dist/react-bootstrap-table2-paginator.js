(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapTable2Paginator"] = factory(require("react"));
	else
		root["ReactBootstrapTable2Paginator"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(16)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  PAGINATION_SIZE: 5,
  PAGE_START_INDEX: 1,
  With_FIRST_AND_LAST: true,
  SHOW_ALL_PAGE_BTNS: false,
  SHOW_TOTAL: false,
  PAGINATION_TOTAL: null,
  FIRST_PAGE_TEXT: '<<',
  PRE_PAGE_TEXT: '<',
  NEXT_PAGE_TEXT: '>',
  LAST_PAGE_TEXT: '>>',
  NEXT_PAGE_TITLE: 'next page',
  LAST_PAGE_TITLE: 'last page',
  PRE_PAGE_TITLE: 'previous page',
  FIRST_PAGE_TITLE: 'first page',
  SIZE_PER_PAGE_LIST: [10, 25, 30, 50],
  HIDE_SIZE_PER_PAGE: false,
  HIDE_PAGE_LIST_ONLY_ONE_PAGE: false
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-mixed-operators: 0 */


exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(PageResolver, _ExtendBase);

    function PageResolver() {
      _classCallCheck(this, PageResolver);

      return _possibleConstructorReturn(this, (PageResolver.__proto__ || Object.getPrototypeOf(PageResolver)).apply(this, arguments));
    }

    _createClass(PageResolver, [{
      key: 'backToPrevPage',
      value: function backToPrevPage() {
        var _props = this.props,
            currPage = _props.currPage,
            pageStartIndex = _props.pageStartIndex;

        return currPage - 1 < pageStartIndex ? pageStartIndex : currPage - 1;
      }
    }, {
      key: 'initialState',
      value: function initialState() {
        var totalPages = this.calculateTotalPage();
        var lastPage = this.calculateLastPage(totalPages);
        return { totalPages: totalPages, lastPage: lastPage };
      }
    }, {
      key: 'calculateTotalPage',
      value: function calculateTotalPage() {
        var sizePerPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.currSizePerPage;
        var dataSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.dataSize;

        return Math.ceil(dataSize / sizePerPage);
      }
    }, {
      key: 'calculateLastPage',
      value: function calculateLastPage(totalPages) {
        var pageStartIndex = this.props.pageStartIndex;

        return pageStartIndex + totalPages - 1;
      }
    }, {
      key: 'calculateFromTo',
      value: function calculateFromTo() {
        var _props2 = this.props,
            dataSize = _props2.dataSize,
            currPage = _props2.currPage,
            currSizePerPage = _props2.currSizePerPage,
            pageStartIndex = _props2.pageStartIndex;

        var offset = Math.abs(_const2.default.PAGE_START_INDEX - pageStartIndex);

        var from = (currPage - pageStartIndex) * currSizePerPage;
        from = dataSize === 0 ? 0 : from + 1;
        var to = Math.min(currSizePerPage * (currPage + offset), dataSize);
        if (to > dataSize) to = dataSize;

        return [from, to];
      }
    }, {
      key: 'calculatePages',
      value: function calculatePages(totalPages, lastPage) {
        var _props3 = this.props,
            currPage = _props3.currPage,
            paginationSize = _props3.paginationSize,
            pageStartIndex = _props3.pageStartIndex,
            withFirstAndLast = _props3.withFirstAndLast,
            firstPageText = _props3.firstPageText,
            prePageText = _props3.prePageText,
            nextPageText = _props3.nextPageText,
            lastPageText = _props3.lastPageText,
            alwaysShowAllBtns = _props3.alwaysShowAllBtns;


        var pages = [];
        var endPage = totalPages;
        if (endPage <= 0) return [];

        var startPage = Math.max(currPage - Math.floor(paginationSize / 2), pageStartIndex);
        endPage = startPage + paginationSize - 1;

        if (endPage > lastPage) {
          endPage = lastPage;
          startPage = endPage - paginationSize + 1;
        }

        if (alwaysShowAllBtns) {
          if (withFirstAndLast) {
            pages = [firstPageText, prePageText];
          } else {
            pages = [prePageText];
          }
        }

        if (startPage !== pageStartIndex && totalPages > paginationSize && withFirstAndLast && pages.length === 0) {
          pages = [firstPageText, prePageText];
        } else if (totalPages > 1 && pages.length === 0) {
          pages = [prePageText];
        }

        for (var i = startPage; i <= endPage; i += 1) {
          if (i >= pageStartIndex) pages.push(i);
        }

        if (alwaysShowAllBtns || endPage <= lastPage && pages.length > 1) {
          pages.push(nextPageText);
        }
        if (endPage !== lastPage && withFirstAndLast || withFirstAndLast && alwaysShowAllBtns) {
          pages.push(lastPageText);
        }

        // if ((endPage <= lastPage && pages.length > 1) || alwaysShowAllBtns) {
        //   pages.push(nextPageText);
        // }
        // if (endPage !== lastPage && withFirstAndLast) {
        //   pages.push(lastPageText);
        // }

        return pages;
      }
    }, {
      key: 'calculatePageStatus',
      value: function calculatePageStatus() {
        var pages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        var _this2 = this;

        var lastPage = arguments[1];
        var disablePageTitle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var _props4 = this.props,
            currPage = _props4.currPage,
            pageStartIndex = _props4.pageStartIndex,
            firstPageText = _props4.firstPageText,
            prePageText = _props4.prePageText,
            nextPageText = _props4.nextPageText,
            lastPageText = _props4.lastPageText,
            alwaysShowAllBtns = _props4.alwaysShowAllBtns;

        var isStart = function isStart(page) {
          return currPage === pageStartIndex && (page === firstPageText || page === prePageText);
        };
        var isEnd = function isEnd(page) {
          return currPage === lastPage && (page === nextPageText || page === lastPageText);
        };

        return pages.filter(function (page) {
          if (alwaysShowAllBtns) {
            return true;
          }
          return !(isStart(page) || isEnd(page));
        }).map(function (page) {
          var title = void 0;
          var active = page === currPage;
          var disabled = isStart(page) || isEnd(page);

          if (page === nextPageText) {
            title = _this2.props.nextPageTitle;
          } else if (page === prePageText) {
            title = _this2.props.prePageTitle;
          } else if (page === firstPageText) {
            title = _this2.props.firstPageTitle;
          } else if (page === lastPageText) {
            title = _this2.props.lastPageTitle;
          } else {
            title = '' + page;
          }

          var pageResult = { page: page, active: active, disabled: disabled };
          if (!disablePageTitle) {
            pageResult.title = title;
          }
          return pageResult;
        });
      }
    }, {
      key: 'calculateSizePerPageStatus',
      value: function calculateSizePerPageStatus() {
        var sizePerPageList = this.props.sizePerPageList;

        return sizePerPageList.map(function (_sizePerPage) {
          var pageText = typeof _sizePerPage.text !== 'undefined' ? _sizePerPage.text : _sizePerPage;
          var pageNumber = typeof _sizePerPage.value !== 'undefined' ? _sizePerPage.value : _sizePerPage;
          return {
            text: '' + pageText,
            page: pageNumber
          };
        });
      }
    }]);

    return PageResolver;
  }(ExtendBase);
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pageResolver2 = __webpack_require__(3);

var _pageResolver3 = _interopRequireDefault(_pageResolver2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint camelcase: 0 */


exports.default = function (WrappedComponent) {
  return function (_pageResolver) {
    _inherits(PaginationHandler, _pageResolver);

    function PaginationHandler(props) {
      _classCallCheck(this, PaginationHandler);

      var _this = _possibleConstructorReturn(this, (PaginationHandler.__proto__ || Object.getPrototypeOf(PaginationHandler)).call(this, props));

      _this.handleChangePage = _this.handleChangePage.bind(_this);
      _this.handleChangeSizePerPage = _this.handleChangeSizePerPage.bind(_this);
      _this.state = _this.initialState();
      return _this;
    }

    _createClass(PaginationHandler, [{
      key: 'UNSAFE_componentWillReceiveProps',
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        var dataSize = nextProps.dataSize,
            currSizePerPage = nextProps.currSizePerPage;

        if (currSizePerPage !== this.props.currSizePerPage || dataSize !== this.props.dataSize) {
          var totalPages = this.calculateTotalPage(currSizePerPage, dataSize);
          var lastPage = this.calculateLastPage(totalPages);
          this.setState({ totalPages: totalPages, lastPage: lastPage });
        }
      }
    }, {
      key: 'handleChangeSizePerPage',
      value: function handleChangeSizePerPage(sizePerPage) {
        var _props = this.props,
            currSizePerPage = _props.currSizePerPage,
            onSizePerPageChange = _props.onSizePerPageChange;

        var selectedSize = typeof sizePerPage === 'string' ? parseInt(sizePerPage, 10) : sizePerPage;
        var currPage = this.props.currPage;

        if (selectedSize !== currSizePerPage) {
          var newTotalPages = this.calculateTotalPage(selectedSize);
          var newLastPage = this.calculateLastPage(newTotalPages);
          if (currPage > newLastPage) currPage = newLastPage;
          onSizePerPageChange(selectedSize, currPage);
        }
      }
    }, {
      key: 'handleChangePage',
      value: function handleChangePage(newPage) {
        var page = void 0;
        var _props2 = this.props,
            currPage = _props2.currPage,
            pageStartIndex = _props2.pageStartIndex,
            prePageText = _props2.prePageText,
            nextPageText = _props2.nextPageText,
            lastPageText = _props2.lastPageText,
            firstPageText = _props2.firstPageText,
            onPageChange = _props2.onPageChange;
        var lastPage = this.state.lastPage;


        if (newPage === prePageText) {
          page = this.backToPrevPage();
        } else if (newPage === nextPageText) {
          page = currPage + 1 > lastPage ? lastPage : currPage + 1;
        } else if (newPage === lastPageText) {
          page = lastPage;
        } else if (newPage === firstPageText) {
          page = pageStartIndex;
        } else {
          page = parseInt(newPage, 10);
        }
        if (page !== currPage) {
          onPageChange(page);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, _extends({}, this.props, {
          lastPage: this.state.lastPage,
          totalPages: this.state.totalPages,
          onPageChange: this.handleChangePage,
          onSizePerPageChange: this.handleChangeSizePerPage
        }));
      }
    }]);

    return PaginationHandler;
  }((0, _pageResolver3.default)(_react.Component));
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint react/prop-types: 0 */


exports.default = function (WrappedComponent) {
  return function (_ref) {
    var page = _ref.page,
        sizePerPage = _ref.sizePerPage,
        rest = _objectWithoutProperties(_ref, ['page', 'sizePerPage']);

    return _react2.default.createElement(WrappedComponent, _extends({}, rest, {
      currPage: page,
      currSizePerPage: sizePerPage
    }));
  };
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _events = __webpack_require__(20);

var _events2 = _interopRequireDefault(_events);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

var _page = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint react/require-default-props: 0 */
/* eslint no-lonely-if: 0 */
/* eslint camelcase: 0 */


var StateContext = _react2.default.createContext();

var StateProvider = function (_React$Component) {
  _inherits(StateProvider, _React$Component);

  function StateProvider(props) {
    _classCallCheck(this, StateProvider);

    var _this = _possibleConstructorReturn(this, (StateProvider.__proto__ || Object.getPrototypeOf(StateProvider)).call(this, props));

    _initialiseProps.call(_this);

    _this.handleChangePage = _this.handleChangePage.bind(_this);
    _this.handleDataSizeChange = _this.handleDataSizeChange.bind(_this);
    _this.handleChangeSizePerPage = _this.handleChangeSizePerPage.bind(_this);

    var currPage = void 0;
    var currSizePerPage = void 0;
    var options = props.pagination.options;

    var sizePerPageList = options.sizePerPageList || _const2.default.SIZE_PER_PAGE_LIST;

    // initialize current page
    if (typeof options.page !== 'undefined') {
      currPage = options.page;
    } else if (typeof options.pageStartIndex !== 'undefined') {
      currPage = options.pageStartIndex;
    } else {
      currPage = _const2.default.PAGE_START_INDEX;
    }

    // initialize current sizePerPage
    if (typeof options.sizePerPage !== 'undefined') {
      currSizePerPage = options.sizePerPage;
    } else if (_typeof(sizePerPageList[0]) === 'object') {
      currSizePerPage = sizePerPageList[0].value;
    } else {
      currSizePerPage = sizePerPageList[0];
    }

    _this.currPage = currPage;
    _this.dataSize = options.totalSize;
    _this.currSizePerPage = currSizePerPage;
    _this.dataChangeListener = new _events2.default();
    _this.dataChangeListener.on('filterChanged', _this.handleDataSizeChange);
    return _this;
  }

  _createClass(StateProvider, [{
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var custom = nextProps.pagination.options.custom;

      // user should align the page when the page is not fit to the data size when remote enable

      if (this.isRemotePagination() || custom) {
        if (typeof nextProps.pagination.options.page !== 'undefined') {
          this.currPage = nextProps.pagination.options.page;
        }
        if (typeof nextProps.pagination.options.sizePerPage !== 'undefined') {
          this.currSizePerPage = nextProps.pagination.options.sizePerPage;
        }
        if (typeof nextProps.pagination.options.totalSize !== 'undefined') {
          this.dataSize = nextProps.pagination.options.totalSize;
        }
      }
    }
  }, {
    key: 'handleDataSizeChange',
    value: function handleDataSizeChange(newDataSize) {
      var options = this.props.pagination.options;

      var pageStartIndex = typeof options.pageStartIndex === 'undefined' ? _const2.default.PAGE_START_INDEX : options.pageStartIndex;
      this.currPage = (0, _page.alignPage)(newDataSize, this.dataSize, this.currPage, this.currSizePerPage, pageStartIndex);
      this.dataSize = newDataSize;
      this.forceUpdate();
    }
  }, {
    key: 'handleChangePage',
    value: function handleChangePage(currPage) {
      var currSizePerPage = this.currSizePerPage;
      var options = this.props.pagination.options;


      if (options.onPageChange) {
        options.onPageChange(currPage, currSizePerPage);
      }

      this.currPage = currPage;

      if (this.isRemotePagination()) {
        this.getPaginationRemoteEmitter().emit('paginationChange', currPage, currSizePerPage);
        return;
      }
      this.forceUpdate();
    }
  }, {
    key: 'handleChangeSizePerPage',
    value: function handleChangeSizePerPage(currSizePerPage, currPage) {
      var options = this.props.pagination.options;


      if (options.onSizePerPageChange) {
        options.onSizePerPageChange(currSizePerPage, currPage);
      }

      this.currPage = currPage;
      this.currSizePerPage = currSizePerPage;

      if (this.isRemotePagination()) {
        this.getPaginationRemoteEmitter().emit('paginationChange', currPage, currSizePerPage);
        return;
      }
      this.forceUpdate();
    }
  }, {
    key: 'render',
    value: function render() {
      var paginationProps = this.getPaginationProps();
      var pagination = _extends({}, this.props.pagination, {
        options: paginationProps
      });

      return _react2.default.createElement(
        StateContext.Provider,
        {
          value: {
            paginationProps: paginationProps,
            paginationTableProps: {
              pagination: pagination,
              setPaginationRemoteEmitter: this.setPaginationRemoteEmitter,
              dataChangeListener: this.dataChangeListener
            }
          }
        },
        this.props.children
      );
    }
  }]);

  return StateProvider;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.getPaginationProps = function () {
    var _props = _this2.props,
        options = _props.pagination.options,
        bootstrap4 = _props.bootstrap4,
        tableId = _props.tableId;
    var currPage = _this2.currPage,
        currSizePerPage = _this2.currSizePerPage,
        dataSize = _this2.dataSize;

    var withFirstAndLast = typeof options.withFirstAndLast === 'undefined' ? _const2.default.With_FIRST_AND_LAST : options.withFirstAndLast;
    var alwaysShowAllBtns = typeof options.alwaysShowAllBtns === 'undefined' ? _const2.default.SHOW_ALL_PAGE_BTNS : options.alwaysShowAllBtns;
    var hideSizePerPage = typeof options.hideSizePerPage === 'undefined' ? _const2.default.HIDE_SIZE_PER_PAGE : options.hideSizePerPage;
    var hidePageListOnlyOnePage = typeof options.hidePageListOnlyOnePage === 'undefined' ? _const2.default.HIDE_PAGE_LIST_ONLY_ONE_PAGE : options.hidePageListOnlyOnePage;
    var pageStartIndex = typeof options.pageStartIndex === 'undefined' ? _const2.default.PAGE_START_INDEX : options.pageStartIndex;
    return _extends({}, options, {
      bootstrap4: bootstrap4,
      tableId: tableId,
      page: currPage,
      sizePerPage: currSizePerPage,
      pageStartIndex: pageStartIndex,
      hidePageListOnlyOnePage: hidePageListOnlyOnePage,
      hideSizePerPage: hideSizePerPage,
      alwaysShowAllBtns: alwaysShowAllBtns,
      withFirstAndLast: withFirstAndLast,
      dataSize: dataSize,
      sizePerPageList: options.sizePerPageList || _const2.default.SIZE_PER_PAGE_LIST,
      paginationSize: options.paginationSize || _const2.default.PAGINATION_SIZE,
      showTotal: options.showTotal,
      pageListRenderer: options.pageListRenderer,
      pageButtonRenderer: options.pageButtonRenderer,
      sizePerPageRenderer: options.sizePerPageRenderer,
      paginationTotalRenderer: options.paginationTotalRenderer,
      sizePerPageOptionRenderer: options.sizePerPageOptionRenderer,
      firstPageText: options.firstPageText || _const2.default.FIRST_PAGE_TEXT,
      prePageText: options.prePageText || _const2.default.PRE_PAGE_TEXT,
      nextPageText: options.nextPageText || _const2.default.NEXT_PAGE_TEXT,
      lastPageText: options.lastPageText || _const2.default.LAST_PAGE_TEXT,
      prePageTitle: options.prePageTitle || _const2.default.PRE_PAGE_TITLE,
      nextPageTitle: options.nextPageTitle || _const2.default.NEXT_PAGE_TITLE,
      firstPageTitle: options.firstPageTitle || _const2.default.FIRST_PAGE_TITLE,
      lastPageTitle: options.lastPageTitle || _const2.default.LAST_PAGE_TITLE,
      onPageChange: _this2.handleChangePage,
      onSizePerPageChange: _this2.handleChangeSizePerPage
    });
  };

  this.setPaginationRemoteEmitter = function (remoteEmitter) {
    _this2.remoteEmitter = remoteEmitter;
  };

  this.getPaginationRemoteEmitter = function () {
    return _this2.remoteEmitter || _this2.props.remoteEmitter;
  };

  this.isRemotePagination = function () {
    var e = {};
    _this2.remoteEmitter.emit('isRemotePagination', e);
    return e.result;
  };
};

exports.default = function () {
  return {
    Provider: StateProvider,
    Consumer: StateContext.Consumer
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getByCurrPage = exports.alignPage = undefined;

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getNormalizedPage = function getNormalizedPage(page, pageStartIndex) {
  var offset = Math.abs(1 - pageStartIndex);
  return page + offset;
};

var endIndex = function endIndex(page, sizePerPage, pageStartIndex) {
  return getNormalizedPage(page, pageStartIndex) * sizePerPage - 1;
};

var startIndex = function startIndex(end, sizePerPage) {
  return end - (sizePerPage - 1);
};

var alignPage = exports.alignPage = function alignPage(dataSize, prevDataSize, page, sizePerPage, pageStartIndex) {
  if (prevDataSize < dataSize) return page;
  if (page < pageStartIndex) return pageStartIndex;
  if (dataSize <= 0) return pageStartIndex;
  if (page >= Math.floor(dataSize / sizePerPage) + pageStartIndex && pageStartIndex === 1) {
    return Math.ceil(dataSize / sizePerPage);
  }
  if (page >= Math.floor(dataSize / sizePerPage) && pageStartIndex === 0) {
    var newPage = Math.ceil(dataSize / sizePerPage);
    return newPage - Math.abs(_const2.default.PAGE_START_INDEX - pageStartIndex);
  }
  return page;
};

var getByCurrPage = exports.getByCurrPage = function getByCurrPage(data, page, sizePerPage, pageStartIndex) {
  var dataSize = data.length;
  if (!dataSize) return [];

  var end = endIndex(page, sizePerPage, pageStartIndex);
  var start = startIndex(end, sizePerPage);

  var result = [];
  for (var i = start; i <= end; i += 1) {
    result.push(data[i]);
    if (i + 1 === dataSize) break;
  }
  return result;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SizePerPageDropdownWithAdapter = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pageResolver2 = __webpack_require__(3);

var _pageResolver3 = _interopRequireDefault(_pageResolver2);

var _sizePerPageDropdown = __webpack_require__(10);

var _sizePerPageDropdown2 = _interopRequireDefault(_sizePerPageDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */


var sizePerPageDropdownAdapter = function sizePerPageDropdownAdapter(WrappedComponent) {
  return function (_pageResolver) {
    _inherits(SizePerPageDropdownAdapter, _pageResolver);

    function SizePerPageDropdownAdapter(props) {
      _classCallCheck(this, SizePerPageDropdownAdapter);

      var _this = _possibleConstructorReturn(this, (SizePerPageDropdownAdapter.__proto__ || Object.getPrototypeOf(SizePerPageDropdownAdapter)).call(this, props));

      _this.closeDropDown = _this.closeDropDown.bind(_this);
      _this.toggleDropDown = _this.toggleDropDown.bind(_this);
      _this.handleChangeSizePerPage = _this.handleChangeSizePerPage.bind(_this);
      _this.state = { dropdownOpen: false };
      return _this;
    }

    _createClass(SizePerPageDropdownAdapter, [{
      key: 'toggleDropDown',
      value: function toggleDropDown() {
        var dropdownOpen = !this.state.dropdownOpen;
        this.setState(function () {
          return { dropdownOpen: dropdownOpen };
        });
      }
    }, {
      key: 'closeDropDown',
      value: function closeDropDown() {
        this.setState(function () {
          return { dropdownOpen: false };
        });
      }
    }, {
      key: 'handleChangeSizePerPage',
      value: function handleChangeSizePerPage(sizePerPage) {
        this.props.onSizePerPageChange(sizePerPage);
        this.closeDropDown();
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            tableId = _props.tableId,
            bootstrap4 = _props.bootstrap4,
            sizePerPageList = _props.sizePerPageList,
            currSizePerPage = _props.currSizePerPage,
            hideSizePerPage = _props.hideSizePerPage,
            sizePerPageRenderer = _props.sizePerPageRenderer,
            sizePerPageOptionRenderer = _props.sizePerPageOptionRenderer;
        var open = this.state.dropdownOpen;


        if (sizePerPageList.length > 1 && !hideSizePerPage) {
          if (sizePerPageRenderer) {
            return sizePerPageRenderer({
              options: this.calculateSizePerPageStatus(),
              currSizePerPage: '' + currSizePerPage,
              onSizePerPageChange: this.handleChangeSizePerPage
            });
          }
          return _react2.default.createElement(WrappedComponent, _extends({}, this.props, {
            currSizePerPage: '' + currSizePerPage,
            options: this.calculateSizePerPageStatus(),
            optionRenderer: sizePerPageOptionRenderer,
            onSizePerPageChange: this.handleChangeSizePerPage,
            onClick: this.toggleDropDown,
            onBlur: this.closeDropDown,
            open: open,
            tableId: tableId,
            bootstrap4: bootstrap4
          }));
        }
        return null;
      }
    }]);

    return SizePerPageDropdownAdapter;
  }((0, _pageResolver3.default)(_react.Component));
};

var SizePerPageDropdownWithAdapter = exports.SizePerPageDropdownWithAdapter = sizePerPageDropdownAdapter(_sizePerPageDropdown2.default);
exports.default = sizePerPageDropdownAdapter;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _sizePerPageOption = __webpack_require__(23);

var _sizePerPageOption2 = _interopRequireDefault(_sizePerPageOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizePerPageDefaultClass = 'react-bs-table-sizePerPage-dropdown';

var SizePerPageDropDown = function SizePerPageDropDown(props) {
  var open = props.open,
      tableId = props.tableId,
      hidden = props.hidden,
      onClick = props.onClick,
      onBlur = props.onBlur,
      options = props.options,
      className = props.className,
      variation = props.variation,
      bootstrap4 = props.bootstrap4,
      btnContextual = props.btnContextual,
      optionRenderer = props.optionRenderer,
      currSizePerPage = props.currSizePerPage,
      onSizePerPageChange = props.onSizePerPageChange;


  var dropDownStyle = { visibility: hidden ? 'hidden' : 'visible' };
  var openClass = open ? 'open show' : '';
  var dropdownClasses = (0, _classnames2.default)(openClass, sizePerPageDefaultClass, variation, className);

  var id = tableId ? tableId + '-pageDropDown' : 'pageDropDown';

  return _react2.default.createElement(
    'span',
    {
      style: dropDownStyle,
      className: dropdownClasses
    },
    _react2.default.createElement(
      'button',
      {
        id: id,
        type: 'button',
        className: 'btn ' + btnContextual + ' dropdown-toggle',
        'data-toggle': 'dropdown',
        'aria-expanded': open,
        onClick: onClick,
        onBlur: onBlur
      },
      currSizePerPage,
      ' ',
      bootstrap4 ? null : _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement('span', { className: 'caret' })
      )
    ),
    _react2.default.createElement(
      'ul',
      {
        className: 'dropdown-menu ' + openClass,
        role: 'menu',
        'aria-labelledby': id
      },
      options.map(function (option) {
        if (optionRenderer) {
          return optionRenderer(_extends({}, option, {
            onSizePerPageChange: onSizePerPageChange
          }));
        }
        return _react2.default.createElement(_sizePerPageOption2.default, _extends({}, option, {
          key: option.text,
          bootstrap4: bootstrap4,
          onSizePerPageChange: onSizePerPageChange
        }));
      })
    )
  );
};

SizePerPageDropDown.propTypes = {
  currSizePerPage: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.array.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  onBlur: _propTypes2.default.func.isRequired,
  onSizePerPageChange: _propTypes2.default.func.isRequired,
  bootstrap4: _propTypes2.default.bool,
  tableId: _propTypes2.default.string,
  open: _propTypes2.default.bool,
  hidden: _propTypes2.default.bool,
  btnContextual: _propTypes2.default.string,
  variation: _propTypes2.default.oneOf(['dropdown', 'dropup']),
  className: _propTypes2.default.string,
  optionRenderer: _propTypes2.default.func
};
SizePerPageDropDown.defaultProps = {
  open: false,
  hidden: false,
  btnContextual: 'btn-default btn-secondary',
  variation: 'dropdown',
  className: '',
  optionRenderer: null,
  bootstrap4: false,
  tableId: null
};

exports.default = SizePerPageDropDown;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaginationListWithAdapter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pageResolver2 = __webpack_require__(3);

var _pageResolver3 = _interopRequireDefault(_pageResolver2);

var _paginationList = __webpack_require__(12);

var _paginationList2 = _interopRequireDefault(_paginationList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */


var paginationListAdapter = function paginationListAdapter(WrappedComponent) {
  return function (_pageResolver) {
    _inherits(PaginationListAdapter, _pageResolver);

    function PaginationListAdapter() {
      _classCallCheck(this, PaginationListAdapter);

      return _possibleConstructorReturn(this, (PaginationListAdapter.__proto__ || Object.getPrototypeOf(PaginationListAdapter)).apply(this, arguments));
    }

    _createClass(PaginationListAdapter, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            lastPage = _props.lastPage,
            totalPages = _props.totalPages,
            pageButtonRenderer = _props.pageButtonRenderer,
            onPageChange = _props.onPageChange,
            disablePageTitle = _props.disablePageTitle,
            hidePageListOnlyOnePage = _props.hidePageListOnlyOnePage;

        var pages = this.calculatePageStatus(this.calculatePages(totalPages, lastPage), lastPage, disablePageTitle);
        if (totalPages === 1 && hidePageListOnlyOnePage) {
          return null;
        }
        return _react2.default.createElement(WrappedComponent, {
          pageButtonRenderer: pageButtonRenderer,
          onPageChange: onPageChange,
          pages: pages
        });
      }
    }]);

    return PaginationListAdapter;
  }((0, _pageResolver3.default)(_react.Component));
};

var PaginationListWithAdapter = exports.PaginationListWithAdapter = paginationListAdapter(_paginationList2.default);
exports.default = paginationListAdapter;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pageButton = __webpack_require__(24);

var _pageButton2 = _interopRequireDefault(_pageButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaginatonList = function PaginatonList(props) {
  return _react2.default.createElement(
    'ul',
    { className: 'pagination react-bootstrap-table-page-btns-ul' },
    props.pages.map(function (pageProps) {
      if (props.pageButtonRenderer) {
        return props.pageButtonRenderer(_extends({}, pageProps, {
          onPageChange: props.onPageChange
        }));
      }
      return _react2.default.createElement(_pageButton2.default, _extends({
        key: pageProps.page
      }, pageProps, {
        onPageChange: props.onPageChange
      }));
    })
  );
};

PaginatonList.propTypes = {
  pages: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    page: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.number, _propTypes2.default.string]),
    active: _propTypes2.default.bool,
    disable: _propTypes2.default.bool,
    title: _propTypes2.default.string
  })).isRequired,
  onPageChange: _propTypes2.default.func.isRequired,
  pageButtonRenderer: _propTypes2.default.func
};

PaginatonList.defaultProps = {
  pageButtonRenderer: null
};

exports.default = PaginatonList;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaginationTotalWithAdapter = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pageResolver2 = __webpack_require__(3);

var _pageResolver3 = _interopRequireDefault(_pageResolver2);

var _paginationTotal = __webpack_require__(14);

var _paginationTotal2 = _interopRequireDefault(_paginationTotal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */


var paginationTotalAdapter = function paginationTotalAdapter(WrappedComponent) {
  return function (_pageResolver) {
    _inherits(PaginationTotalAdapter, _pageResolver);

    function PaginationTotalAdapter() {
      _classCallCheck(this, PaginationTotalAdapter);

      return _possibleConstructorReturn(this, (PaginationTotalAdapter.__proto__ || Object.getPrototypeOf(PaginationTotalAdapter)).apply(this, arguments));
    }

    _createClass(PaginationTotalAdapter, [{
      key: 'render',
      value: function render() {
        var _calculateFromTo = this.calculateFromTo(),
            _calculateFromTo2 = _slicedToArray(_calculateFromTo, 2),
            from = _calculateFromTo2[0],
            to = _calculateFromTo2[1];

        return _react2.default.createElement(WrappedComponent, {
          from: from,
          to: to,
          dataSize: this.props.dataSize,
          paginationTotalRenderer: this.props.paginationTotalRenderer
        });
      }
    }]);

    return PaginationTotalAdapter;
  }((0, _pageResolver3.default)(_react.Component));
};

var PaginationTotalWithAdapter = exports.PaginationTotalWithAdapter = paginationTotalAdapter(_paginationTotal2.default);
exports.default = paginationTotalAdapter;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaginationTotal = function PaginationTotal(props) {
  if (props.paginationTotalRenderer) {
    return props.paginationTotalRenderer(props.from, props.to, props.dataSize);
  }
  return _react2.default.createElement(
    'span',
    { className: 'react-bootstrap-table-pagination-total' },
    '\xA0Showing rows ',
    props.from,
    ' to\xA0',
    props.to,
    ' of\xA0',
    props.dataSize
  );
};

PaginationTotal.propTypes = {
  from: _propTypes2.default.number.isRequired,
  to: _propTypes2.default.number.isRequired,
  dataSize: _propTypes2.default.number.isRequired,
  paginationTotalRenderer: _propTypes2.default.func
};

PaginationTotal.defaultProps = {
  paginationTotalRenderer: undefined
};

exports.default = PaginationTotal;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaginationTotalStandalone = exports.SizePerPageDropdownStandalone = exports.PaginationListStandalone = exports.PaginationProvider = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _stateContext = __webpack_require__(7);

var _stateContext2 = _interopRequireDefault(_stateContext);

var _dataContext = __webpack_require__(21);

var _dataContext2 = _interopRequireDefault(_dataContext);

var _paginationListStandalone = __webpack_require__(25);

var _paginationListStandalone2 = _interopRequireDefault(_paginationListStandalone);

var _sizePerPageDropdownStandalone = __webpack_require__(26);

var _sizePerPageDropdownStandalone2 = _interopRequireDefault(_sizePerPageDropdownStandalone);

var _paginationTotalStandalone = __webpack_require__(27);

var _paginationTotalStandalone2 = _interopRequireDefault(_paginationTotalStandalone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    createContext: _dataContext2.default,
    options: options
  };
};

var _createBaseContext = (0, _stateContext2.default)(),
    Provider = _createBaseContext.Provider,
    Consumer = _createBaseContext.Consumer;

var CustomizableProvider = function CustomizableProvider(props) {
  return _react2.default.createElement(
    Provider,
    props,
    _react2.default.createElement(
      Consumer,
      null,
      function (paginationProps) {
        return props.children(paginationProps);
      }
    )
  );
};

CustomizableProvider.propTypes = {
  children: _propTypes2.default.func.isRequired
};

var PaginationProvider = exports.PaginationProvider = CustomizableProvider;
exports.PaginationListStandalone = _paginationListStandalone2.default;
exports.SizePerPageDropdownStandalone = _sizePerPageDropdownStandalone2.default;
exports.PaginationTotalStandalone = _paginationTotalStandalone2.default;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(17);
var invariant = __webpack_require__(18);
var ReactPropTypesSecret = __webpack_require__(19);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function eventListener() {
      if (errorListener !== undefined) {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };
    var errorListener;

    // Adding an error listener is not optional because
    // if an error is thrown on an event emitter we cannot
    // guarantee that the actual event we are waiting will
    // be fired. The result could be a silent way to create
    // memory or file descriptor leaks, which is something
    // we should avoid.
    if (name !== 'error') {
      errorListener = function errorListener(err) {
        emitter.removeListener(name, eventListener);
        reject(err);
      };

      emitter.once('error', errorListener);
    }

    emitter.once(name, eventListener);
  });
}


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

var _pagination = __webpack_require__(22);

var _pagination2 = _interopRequireDefault(_pagination);

var _page = __webpack_require__(8);

var _stateContext = __webpack_require__(7);

var _stateContext2 = _interopRequireDefault(_stateContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint react/require-default-props: 0 */
/* eslint no-lonely-if: 0 */


var _createBaseContext = (0, _stateContext2.default)(),
    Provider = _createBaseContext.Provider;

var PaginationDataContext = _react2.default.createContext();

var PaginationDataProvider = function (_Provider) {
  _inherits(PaginationDataProvider, _Provider);

  function PaginationDataProvider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PaginationDataProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PaginationDataProvider.__proto__ || Object.getPrototypeOf(PaginationDataProvider)).call.apply(_ref, [this].concat(args))), _this), _this.isRemotePagination = function () {
      return _this.props.isRemotePagination();
    }, _this.renderDefaultPagination = function () {
      if (!_this.props.pagination.options.custom) {
        var _this$getPaginationPr = _this.getPaginationProps(),
            currPage = _this$getPaginationPr.page,
            currSizePerPage = _this$getPaginationPr.sizePerPage,
            dataSize = _this$getPaginationPr.dataSize,
            rest = _objectWithoutProperties(_this$getPaginationPr, ['page', 'sizePerPage', 'dataSize']);

        return _react2.default.createElement(_pagination2.default, _extends({}, rest, {
          key: 'pagination',
          dataSize: dataSize || _this.props.data.length,
          currPage: currPage,
          currSizePerPage: currSizePerPage
        }));
      }
      return null;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PaginationDataProvider, [{
    key: 'UNSAFE_componentWillReceiveProps',


    // eslint-disable-next-line camelcase, react/sort-comp
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      _get(PaginationDataProvider.prototype.__proto__ || Object.getPrototypeOf(PaginationDataProvider.prototype), 'UNSAFE_componentWillReceiveProps', this).call(this, nextProps);
      var currSizePerPage = this.currSizePerPage;
      var _nextProps$pagination = nextProps.pagination.options,
          custom = _nextProps$pagination.custom,
          onPageChange = _nextProps$pagination.onPageChange;


      var pageStartIndex = typeof nextProps.pagination.options.pageStartIndex !== 'undefined' ? nextProps.pagination.options.pageStartIndex : _const2.default.PAGE_START_INDEX;

      // user should align the page when the page is not fit to the data size when remote enable
      if (!this.isRemotePagination() && !custom) {
        var newPage = (0, _page.alignPage)(nextProps.data.length, this.props.data.length, this.currPage, currSizePerPage, pageStartIndex);

        if (this.currPage !== newPage) {
          if (onPageChange) {
            onPageChange(newPage, currSizePerPage);
          }
          this.currPage = newPage;
        }
      }
      if (nextProps.onDataSizeChange && nextProps.data.length !== this.props.data.length) {
        nextProps.onDataSizeChange({ dataSize: nextProps.data.length });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.props.data;
      var options = this.props.pagination.options;
      var currPage = this.currPage,
          currSizePerPage = this.currSizePerPage;

      var pageStartIndex = typeof options.pageStartIndex === 'undefined' ? _const2.default.PAGE_START_INDEX : options.pageStartIndex;

      data = this.isRemotePagination() ? data : (0, _page.getByCurrPage)(data, currPage, currSizePerPage, pageStartIndex);

      return _react2.default.createElement(
        PaginationDataContext.Provider,
        { value: { data: data, setRemoteEmitter: this.setRemoteEmitter } },
        this.props.children,
        this.renderDefaultPagination()
      );
    }
  }]);

  return PaginationDataProvider;
}(Provider);

PaginationDataProvider.propTypes = {
  data: _propTypes2.default.array.isRequired,
  remoteEmitter: _propTypes2.default.object.isRequired,
  isRemotePagination: _propTypes2.default.func.isRequired };

exports.default = function () {
  return {
    Provider: PaginationDataProvider,
    Consumer: PaginationDataContext.Consumer
  };
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pageResolver2 = __webpack_require__(3);

var _pageResolver3 = _interopRequireDefault(_pageResolver2);

var _paginationHandler = __webpack_require__(5);

var _paginationHandler2 = _interopRequireDefault(_paginationHandler);

var _sizePerPageDropdownAdapter = __webpack_require__(9);

var _paginationListAdapter = __webpack_require__(11);

var _paginationTotalAdapter = __webpack_require__(13);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */
/* eslint arrow-body-style: 0 */


var Pagination = function (_pageResolver) {
  _inherits(Pagination, _pageResolver);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));
  }

  _createClass(Pagination, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          tableId = _props.tableId,
          currPage = _props.currPage,
          pageStartIndex = _props.pageStartIndex,
          showTotal = _props.showTotal,
          dataSize = _props.dataSize,
          pageListRenderer = _props.pageListRenderer,
          pageButtonRenderer = _props.pageButtonRenderer,
          paginationTotalRenderer = _props.paginationTotalRenderer,
          hidePageListOnlyOnePage = _props.hidePageListOnlyOnePage,
          totalPages = _props.totalPages,
          lastPage = _props.lastPage,
          onPageChange = _props.onPageChange,
          sizePerPageList = _props.sizePerPageList,
          currSizePerPage = _props.currSizePerPage,
          hideSizePerPage = _props.hideSizePerPage,
          sizePerPageRenderer = _props.sizePerPageRenderer,
          sizePerPageOptionRenderer = _props.sizePerPageOptionRenderer,
          onSizePerPageChange = _props.onSizePerPageChange,
          bootstrap4 = _props.bootstrap4,
          rest = _objectWithoutProperties(_props, ['tableId', 'currPage', 'pageStartIndex', 'showTotal', 'dataSize', 'pageListRenderer', 'pageButtonRenderer', 'paginationTotalRenderer', 'hidePageListOnlyOnePage', 'totalPages', 'lastPage', 'onPageChange', 'sizePerPageList', 'currSizePerPage', 'hideSizePerPage', 'sizePerPageRenderer', 'sizePerPageOptionRenderer', 'onSizePerPageChange', 'bootstrap4']);

      var pages = this.calculatePageStatus(this.calculatePages(totalPages, lastPage), lastPage);
      var pageListClass = (0, _classnames2.default)('react-bootstrap-table-pagination-list', 'col-md-6 col-xs-6 col-sm-6 col-lg-6', {
        'react-bootstrap-table-pagination-list-hidden': hidePageListOnlyOnePage && totalPages === 1
      });
      return _react2.default.createElement(
        'div',
        { className: 'row react-bootstrap-table-pagination' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-6 col-xs-6 col-sm-6 col-lg-6' },
          _react2.default.createElement(_sizePerPageDropdownAdapter.SizePerPageDropdownWithAdapter, {
            bootstrap4: bootstrap4,
            tableId: tableId,
            sizePerPageList: sizePerPageList,
            currSizePerPage: currSizePerPage,
            hideSizePerPage: hideSizePerPage,
            sizePerPageRenderer: sizePerPageRenderer,
            sizePerPageOptionRenderer: sizePerPageOptionRenderer,
            onSizePerPageChange: onSizePerPageChange
          }),
          showTotal ? _react2.default.createElement(_paginationTotalAdapter.PaginationTotalWithAdapter, {
            currPage: currPage,
            currSizePerPage: currSizePerPage,
            pageStartIndex: pageStartIndex,
            dataSize: dataSize,
            paginationTotalRenderer: paginationTotalRenderer
          }) : null
        ),
        pageListRenderer ? pageListRenderer({
          pages: pages,
          onPageChange: onPageChange
        }) : _react2.default.createElement(
          'div',
          { className: pageListClass },
          _react2.default.createElement(_paginationListAdapter.PaginationListWithAdapter, _extends({}, rest, {
            currPage: currPage,
            currSizePerPage: currSizePerPage,
            pageStartIndex: pageStartIndex,
            lastPage: lastPage,
            totalPages: totalPages,
            pageButtonRenderer: pageButtonRenderer,
            onPageChange: onPageChange
          }))
        )
      );
    }
  }]);

  return Pagination;
}((0, _pageResolver3.default)(_react.Component));

Pagination.propTypes = {
  dataSize: _propTypes2.default.number.isRequired,
  sizePerPageList: _propTypes2.default.array.isRequired,
  currPage: _propTypes2.default.number.isRequired,
  currSizePerPage: _propTypes2.default.number.isRequired,
  onPageChange: _propTypes2.default.func.isRequired,
  onSizePerPageChange: _propTypes2.default.func.isRequired,
  disablePageTitle: _propTypes2.default.bool,
  pageStartIndex: _propTypes2.default.number,
  paginationSize: _propTypes2.default.number,
  showTotal: _propTypes2.default.bool,
  pageListRenderer: _propTypes2.default.func,
  pageButtonRenderer: _propTypes2.default.func,
  sizePerPageRenderer: _propTypes2.default.func,
  paginationTotalRenderer: _propTypes2.default.func,
  sizePerPageOptionRenderer: _propTypes2.default.func,
  firstPageText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  prePageText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  nextPageText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  lastPageText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  nextPageTitle: _propTypes2.default.string,
  prePageTitle: _propTypes2.default.string,
  firstPageTitle: _propTypes2.default.string,
  lastPageTitle: _propTypes2.default.string,
  withFirstAndLast: _propTypes2.default.bool,
  alwaysShowAllBtns: _propTypes2.default.bool,
  hideSizePerPage: _propTypes2.default.bool,
  hidePageListOnlyOnePage: _propTypes2.default.bool,
  bootstrap4: _propTypes2.default.bool
};

Pagination.defaultProps = {
  disablePageTitle: false,
  bootstrap4: false,
  pageStartIndex: _const2.default.PAGE_START_INDEX,
  paginationSize: _const2.default.PAGINATION_SIZE,
  withFirstAndLast: _const2.default.With_FIRST_AND_LAST,
  alwaysShowAllBtns: _const2.default.SHOW_ALL_PAGE_BTNS,
  showTotal: _const2.default.SHOW_TOTAL,
  pageListRenderer: null,
  pageButtonRenderer: null,
  sizePerPageRenderer: null,
  paginationTotalRenderer: _const2.default.PAGINATION_TOTAL,
  sizePerPageOptionRenderer: null,
  firstPageText: _const2.default.FIRST_PAGE_TEXT,
  prePageText: _const2.default.PRE_PAGE_TEXT,
  nextPageText: _const2.default.NEXT_PAGE_TEXT,
  lastPageText: _const2.default.LAST_PAGE_TEXT,
  sizePerPageList: _const2.default.SIZE_PER_PAGE_LIST,
  nextPageTitle: _const2.default.NEXT_PAGE_TITLE,
  prePageTitle: _const2.default.PRE_PAGE_TITLE,
  firstPageTitle: _const2.default.FIRST_PAGE_TITLE,
  lastPageTitle: _const2.default.LAST_PAGE_TITLE,
  hideSizePerPage: _const2.default.HIDE_SIZE_PER_PAGE,
  hidePageListOnlyOnePage: _const2.default.HIDE_PAGE_LIST_ONLY_ONE_PAGE
};

exports.default = (0, _paginationHandler2.default)(Pagination);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint jsx-a11y/href-no-hash: 0 */
var SizePerPageOption = function SizePerPageOption(_ref) {
  var text = _ref.text,
      page = _ref.page,
      onSizePerPageChange = _ref.onSizePerPageChange,
      bootstrap4 = _ref.bootstrap4;
  return bootstrap4 ? _react2.default.createElement(
    'a',
    {
      href: '#',
      tabIndex: '-1',
      role: 'menuitem',
      className: 'dropdown-item',
      'data-page': page,
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
        onSizePerPageChange(page);
      }
    },
    text
  ) : _react2.default.createElement(
    'li',
    {
      key: text,
      role: 'presentation',
      className: 'dropdown-item'
    },
    _react2.default.createElement(
      'a',
      {
        href: '#',
        tabIndex: '-1',
        role: 'menuitem',
        'data-page': page,
        onMouseDown: function onMouseDown(e) {
          e.preventDefault();
          onSizePerPageChange(page);
        }
      },
      text
    )
  );
};

SizePerPageOption.propTypes = {
  text: _propTypes2.default.string.isRequired,
  page: _propTypes2.default.number.isRequired,
  onSizePerPageChange: _propTypes2.default.func.isRequired,
  bootstrap4: _propTypes2.default.bool
};

SizePerPageOption.defaultProps = {
  bootstrap4: false
};

exports.default = SizePerPageOption;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */
/* eslint jsx-a11y/href-no-hash: 0 */


var PageButton = function (_Component) {
  _inherits(PageButton, _Component);

  function PageButton(props) {
    _classCallCheck(this, PageButton);

    var _this = _possibleConstructorReturn(this, (PageButton.__proto__ || Object.getPrototypeOf(PageButton)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(PageButton, [{
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
      this.props.onPageChange(this.props.page);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          page = _props.page,
          title = _props.title,
          active = _props.active,
          disabled = _props.disabled,
          className = _props.className;

      var classes = (0, _classnames2.default)({
        active: active,
        disabled: disabled,
        'page-item': true
      }, className);

      return _react2.default.createElement(
        'li',
        { className: classes, title: title },
        _react2.default.createElement(
          'a',
          { href: '#', onClick: this.handleClick, className: 'page-link' },
          page
        )
      );
    }
  }]);

  return PageButton;
}(_react.Component);

PageButton.propTypes = {
  onPageChange: _propTypes2.default.func.isRequired,
  page: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.number, _propTypes2.default.string]).isRequired,
  active: _propTypes2.default.bool.isRequired,
  disabled: _propTypes2.default.bool.isRequired,
  className: _propTypes2.default.string,
  title: _propTypes2.default.string
};

exports.default = PageButton;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _paginationList = __webpack_require__(12);

var _paginationList2 = _interopRequireDefault(_paginationList);

var _standaloneAdapter = __webpack_require__(6);

var _standaloneAdapter2 = _interopRequireDefault(_standaloneAdapter);

var _paginationHandler = __webpack_require__(5);

var _paginationHandler2 = _interopRequireDefault(_paginationHandler);

var _paginationListAdapter = __webpack_require__(11);

var _paginationListAdapter2 = _interopRequireDefault(_paginationListAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaginationListStandalone = function PaginationListStandalone(props) {
  return _react2.default.createElement(_paginationList2.default, props);
};

exports.default = (0, _standaloneAdapter2.default)((0, _paginationHandler2.default)((0, _paginationListAdapter2.default)(PaginationListStandalone)));

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _sizePerPageDropdown = __webpack_require__(10);

var _sizePerPageDropdown2 = _interopRequireDefault(_sizePerPageDropdown);

var _standaloneAdapter = __webpack_require__(6);

var _standaloneAdapter2 = _interopRequireDefault(_standaloneAdapter);

var _paginationHandler = __webpack_require__(5);

var _paginationHandler2 = _interopRequireDefault(_paginationHandler);

var _sizePerPageDropdownAdapter = __webpack_require__(9);

var _sizePerPageDropdownAdapter2 = _interopRequireDefault(_sizePerPageDropdownAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SizePerPageDropdownStandalone = function SizePerPageDropdownStandalone(props) {
  return _react2.default.createElement(_sizePerPageDropdown2.default, props);
};

exports.default = (0, _standaloneAdapter2.default)((0, _paginationHandler2.default)((0, _sizePerPageDropdownAdapter2.default)(SizePerPageDropdownStandalone)));

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _paginationTotal = __webpack_require__(14);

var _paginationTotal2 = _interopRequireDefault(_paginationTotal);

var _standaloneAdapter = __webpack_require__(6);

var _standaloneAdapter2 = _interopRequireDefault(_standaloneAdapter);

var _paginationTotalAdapter = __webpack_require__(13);

var _paginationTotalAdapter2 = _interopRequireDefault(_paginationTotalAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaginationTotalStandalone = function PaginationTotalStandalone(props) {
  return _react2.default.createElement(_paginationTotal2.default, props);
};

exports.default = (0, _standaloneAdapter2.default)((0, _paginationTotalAdapter2.default)(PaginationTotalStandalone));

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkOTJiOGUwOTE3NGJkOTdiZTg4YyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3Ivc3JjL3BhZ2UtcmVzb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3Ivc3JjL3BhZ2luYXRpb24taGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvc3RhbmRhbG9uZS1hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9zdGF0ZS1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9wYWdlLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9zaXplLXBlci1wYWdlLWRyb3Bkb3duLWFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3Ivc3JjL3NpemUtcGVyLXBhZ2UtZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3Ivc3JjL3BhZ2luYXRpb24tbGlzdC1hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9wYWdpbmF0aW9uLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3Ivc3JjL3BhZ2luYXRpb24tdG90YWwtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvcGFnaW5hdGlvbi10b3RhbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3Ivc3JjL2RhdGEtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvcGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvc2l6ZS1wZXItcGFnZS1vcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3Ivc3JjL3BhZ2UtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9wYWdpbmF0aW9uLWxpc3Qtc3RhbmRhbG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvc2l6ZS1wZXItcGFnZS1kcm9wZG93bi1zdGFuZGFsb25lLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9wYWdpbmF0aW9uLXRvdGFsLXN0YW5kYWxvbmUuanMiXSwibmFtZXMiOlsiUEFHSU5BVElPTl9TSVpFIiwiUEFHRV9TVEFSVF9JTkRFWCIsIldpdGhfRklSU1RfQU5EX0xBU1QiLCJTSE9XX0FMTF9QQUdFX0JUTlMiLCJTSE9XX1RPVEFMIiwiUEFHSU5BVElPTl9UT1RBTCIsIkZJUlNUX1BBR0VfVEVYVCIsIlBSRV9QQUdFX1RFWFQiLCJORVhUX1BBR0VfVEVYVCIsIkxBU1RfUEFHRV9URVhUIiwiTkVYVF9QQUdFX1RJVExFIiwiTEFTVF9QQUdFX1RJVExFIiwiUFJFX1BBR0VfVElUTEUiLCJGSVJTVF9QQUdFX1RJVExFIiwiU0laRV9QRVJfUEFHRV9MSVNUIiwiSElERV9TSVpFX1BFUl9QQUdFIiwiSElERV9QQUdFX0xJU1RfT05MWV9PTkVfUEFHRSIsInByb3BzIiwiY3VyclBhZ2UiLCJwYWdlU3RhcnRJbmRleCIsInRvdGFsUGFnZXMiLCJjYWxjdWxhdGVUb3RhbFBhZ2UiLCJsYXN0UGFnZSIsImNhbGN1bGF0ZUxhc3RQYWdlIiwic2l6ZVBlclBhZ2UiLCJjdXJyU2l6ZVBlclBhZ2UiLCJkYXRhU2l6ZSIsIk1hdGgiLCJjZWlsIiwib2Zmc2V0IiwiYWJzIiwiQ29uc3QiLCJmcm9tIiwidG8iLCJtaW4iLCJwYWdpbmF0aW9uU2l6ZSIsIndpdGhGaXJzdEFuZExhc3QiLCJmaXJzdFBhZ2VUZXh0IiwicHJlUGFnZVRleHQiLCJuZXh0UGFnZVRleHQiLCJsYXN0UGFnZVRleHQiLCJhbHdheXNTaG93QWxsQnRucyIsInBhZ2VzIiwiZW5kUGFnZSIsInN0YXJ0UGFnZSIsIm1heCIsImZsb29yIiwibGVuZ3RoIiwiaSIsInB1c2giLCJkaXNhYmxlUGFnZVRpdGxlIiwiaXNTdGFydCIsInBhZ2UiLCJpc0VuZCIsImZpbHRlciIsIm1hcCIsInRpdGxlIiwiYWN0aXZlIiwiZGlzYWJsZWQiLCJuZXh0UGFnZVRpdGxlIiwicHJlUGFnZVRpdGxlIiwiZmlyc3RQYWdlVGl0bGUiLCJsYXN0UGFnZVRpdGxlIiwicGFnZVJlc3VsdCIsInNpemVQZXJQYWdlTGlzdCIsIl9zaXplUGVyUGFnZSIsInBhZ2VUZXh0IiwidGV4dCIsInBhZ2VOdW1iZXIiLCJ2YWx1ZSIsIkV4dGVuZEJhc2UiLCJoYW5kbGVDaGFuZ2VQYWdlIiwiYmluZCIsImhhbmRsZUNoYW5nZVNpemVQZXJQYWdlIiwic3RhdGUiLCJpbml0aWFsU3RhdGUiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsIm9uU2l6ZVBlclBhZ2VDaGFuZ2UiLCJzZWxlY3RlZFNpemUiLCJwYXJzZUludCIsIm5ld1RvdGFsUGFnZXMiLCJuZXdMYXN0UGFnZSIsIm5ld1BhZ2UiLCJvblBhZ2VDaGFuZ2UiLCJiYWNrVG9QcmV2UGFnZSIsIkNvbXBvbmVudCIsInJlc3QiLCJTdGF0ZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJTdGF0ZVByb3ZpZGVyIiwiaGFuZGxlRGF0YVNpemVDaGFuZ2UiLCJvcHRpb25zIiwicGFnaW5hdGlvbiIsInRvdGFsU2l6ZSIsImRhdGFDaGFuZ2VMaXN0ZW5lciIsIkV2ZW50RW1pdHRlciIsIm9uIiwiY3VzdG9tIiwiaXNSZW1vdGVQYWdpbmF0aW9uIiwibmV3RGF0YVNpemUiLCJmb3JjZVVwZGF0ZSIsImdldFBhZ2luYXRpb25SZW1vdGVFbWl0dGVyIiwiZW1pdCIsInBhZ2luYXRpb25Qcm9wcyIsImdldFBhZ2luYXRpb25Qcm9wcyIsInBhZ2luYXRpb25UYWJsZVByb3BzIiwic2V0UGFnaW5hdGlvblJlbW90ZUVtaXR0ZXIiLCJjaGlsZHJlbiIsImJvb3RzdHJhcDQiLCJ0YWJsZUlkIiwiaGlkZVNpemVQZXJQYWdlIiwiaGlkZVBhZ2VMaXN0T25seU9uZVBhZ2UiLCJzaG93VG90YWwiLCJwYWdlTGlzdFJlbmRlcmVyIiwicGFnZUJ1dHRvblJlbmRlcmVyIiwic2l6ZVBlclBhZ2VSZW5kZXJlciIsInBhZ2luYXRpb25Ub3RhbFJlbmRlcmVyIiwic2l6ZVBlclBhZ2VPcHRpb25SZW5kZXJlciIsInJlbW90ZUVtaXR0ZXIiLCJlIiwicmVzdWx0IiwiUHJvdmlkZXIiLCJDb25zdW1lciIsImdldE5vcm1hbGl6ZWRQYWdlIiwiZW5kSW5kZXgiLCJzdGFydEluZGV4IiwiZW5kIiwiYWxpZ25QYWdlIiwicHJldkRhdGFTaXplIiwiZ2V0QnlDdXJyUGFnZSIsImRhdGEiLCJzdGFydCIsInNpemVQZXJQYWdlRHJvcGRvd25BZGFwdGVyIiwiY2xvc2VEcm9wRG93biIsInRvZ2dsZURyb3BEb3duIiwiZHJvcGRvd25PcGVuIiwib3BlbiIsImNhbGN1bGF0ZVNpemVQZXJQYWdlU3RhdHVzIiwiU2l6ZVBlclBhZ2VEcm9wZG93bldpdGhBZGFwdGVyIiwiU2l6ZVBlclBhZ2VEcm9wRG93biIsInNpemVQZXJQYWdlRGVmYXVsdENsYXNzIiwiaGlkZGVuIiwib25DbGljayIsIm9uQmx1ciIsImNsYXNzTmFtZSIsInZhcmlhdGlvbiIsImJ0bkNvbnRleHR1YWwiLCJvcHRpb25SZW5kZXJlciIsImRyb3BEb3duU3R5bGUiLCJ2aXNpYmlsaXR5Iiwib3BlbkNsYXNzIiwiZHJvcGRvd25DbGFzc2VzIiwiaWQiLCJvcHRpb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJmdW5jIiwiYm9vbCIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwicGFnaW5hdGlvbkxpc3RBZGFwdGVyIiwiY2FsY3VsYXRlUGFnZVN0YXR1cyIsImNhbGN1bGF0ZVBhZ2VzIiwiUGFnaW5hdGlvbkxpc3RXaXRoQWRhcHRlciIsIlBhZ2luYXRpb25MaXN0IiwiUGFnaW5hdG9uTGlzdCIsInBhZ2VQcm9wcyIsImFycmF5T2YiLCJzaGFwZSIsIm9uZU9mVHlwZSIsIm5vZGUiLCJudW1iZXIiLCJkaXNhYmxlIiwicGFnaW5hdGlvblRvdGFsQWRhcHRlciIsImNhbGN1bGF0ZUZyb21UbyIsIlBhZ2luYXRpb25Ub3RhbFdpdGhBZGFwdGVyIiwiUGFnaW5hdGlvblRvdGFsIiwidW5kZWZpbmVkIiwiY3JlYXRlRGF0YUNvbnRleHQiLCJDdXN0b21pemFibGVQcm92aWRlciIsIlBhZ2luYXRpb25Qcm92aWRlciIsIlBhZ2luYXRpb25MaXN0U3RhbmRhbG9uZSIsIlNpemVQZXJQYWdlRHJvcGRvd25TdGFuZGFsb25lIiwiUGFnaW5hdGlvblRvdGFsU3RhbmRhbG9uZSIsIlBhZ2luYXRpb25EYXRhQ29udGV4dCIsIlBhZ2luYXRpb25EYXRhUHJvdmlkZXIiLCJyZW5kZXJEZWZhdWx0UGFnaW5hdGlvbiIsIm9uRGF0YVNpemVDaGFuZ2UiLCJzZXRSZW1vdGVFbWl0dGVyIiwib2JqZWN0IiwiUGFnaW5hdGlvbiIsInBhZ2VMaXN0Q2xhc3MiLCJTaXplUGVyUGFnZU9wdGlvbiIsInByZXZlbnREZWZhdWx0IiwiUGFnZUJ1dHRvbiIsImhhbmRsZUNsaWNrIiwiY2xhc3NlcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Es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LENBQWxCLENBQWxCLEM7Ozs7Ozs7Ozs7Ozs7QUNYQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQyxnQ0FBZ0MsU0FBaENBLDZCQUFnQztBQUFBLFNBQ3BDLDhCQUFDLDZCQUFELEVBQTBCMUssS0FBMUIsQ0FEb0M7QUFBQSxDQUF0Qzs7a0JBS0EsaUNBQWtCLGlDQUFrQiwwQ0FBMkIwSyw2QkFBM0IsQ0FBbEIsQ0FBbEIsQzs7Ozs7Ozs7Ozs7OztBQ1hBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQyw0QkFBNEIsU0FBNUJBLHlCQUE0QjtBQUFBLFNBQ2hDLDhCQUFDLHlCQUFELEVBQXNCM0ssS0FBdEIsQ0FEZ0M7QUFBQSxDQUFsQzs7a0JBS0EsaUNBQWtCLHNDQUF1QjJLLHlCQUF2QixDQUFsQixDIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL2Rpc3QvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSZWFjdEJvb3RzdHJhcFRhYmxlMlBhZ2luYXRvclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSZWFjdEJvb3RzdHJhcFRhYmxlMlBhZ2luYXRvclwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkOTJiOGUwOTE3NGJkOTdiZTg4YyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIFN5bWJvbC5mb3IgJiZcbiAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gICAgMHhlYWM3O1xuXG4gIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG4gICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGRlZmF1bHQge1xuICBQQUdJTkFUSU9OX1NJWkU6IDUsXG4gIFBBR0VfU1RBUlRfSU5ERVg6IDEsXG4gIFdpdGhfRklSU1RfQU5EX0xBU1Q6IHRydWUsXG4gIFNIT1dfQUxMX1BBR0VfQlROUzogZmFsc2UsXG4gIFNIT1dfVE9UQUw6IGZhbHNlLFxuICBQQUdJTkFUSU9OX1RPVEFMOiBudWxsLFxuICBGSVJTVF9QQUdFX1RFWFQ6ICc8PCcsXG4gIFBSRV9QQUdFX1RFWFQ6ICc8JyxcbiAgTkVYVF9QQUdFX1RFWFQ6ICc+JyxcbiAgTEFTVF9QQUdFX1RFWFQ6ICc+PicsXG4gIE5FWFRfUEFHRV9USVRMRTogJ25leHQgcGFnZScsXG4gIExBU1RfUEFHRV9USVRMRTogJ2xhc3QgcGFnZScsXG4gIFBSRV9QQUdFX1RJVExFOiAncHJldmlvdXMgcGFnZScsXG4gIEZJUlNUX1BBR0VfVElUTEU6ICdmaXJzdCBwYWdlJyxcbiAgU0laRV9QRVJfUEFHRV9MSVNUOiBbMTAsIDI1LCAzMCwgNTBdLFxuICBISURFX1NJWkVfUEVSX1BBR0U6IGZhbHNlLFxuICBISURFX1BBR0VfTElTVF9PTkxZX09ORV9QQUdFOiBmYWxzZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9jb25zdC5qcyIsIi8qIGVzbGludCBuby1taXhlZC1vcGVyYXRvcnM6IDAgKi9cbmltcG9ydCBDb25zdCBmcm9tICcuL2NvbnN0JztcblxuZXhwb3J0IGRlZmF1bHQgRXh0ZW5kQmFzZSA9PlxuICBjbGFzcyBQYWdlUmVzb2x2ZXIgZXh0ZW5kcyBFeHRlbmRCYXNlIHtcbiAgICBiYWNrVG9QcmV2UGFnZSgpIHtcbiAgICAgIGNvbnN0IHsgY3VyclBhZ2UsIHBhZ2VTdGFydEluZGV4IH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIChjdXJyUGFnZSAtIDEpIDwgcGFnZVN0YXJ0SW5kZXggPyBwYWdlU3RhcnRJbmRleCA6IGN1cnJQYWdlIC0gMTtcbiAgICB9XG5cbiAgICBpbml0aWFsU3RhdGUoKSB7XG4gICAgICBjb25zdCB0b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2UoKTtcbiAgICAgIGNvbnN0IGxhc3RQYWdlID0gdGhpcy5jYWxjdWxhdGVMYXN0UGFnZSh0b3RhbFBhZ2VzKTtcbiAgICAgIHJldHVybiB7IHRvdGFsUGFnZXMsIGxhc3RQYWdlIH07XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlVG90YWxQYWdlKHNpemVQZXJQYWdlID0gdGhpcy5wcm9wcy5jdXJyU2l6ZVBlclBhZ2UsIGRhdGFTaXplID0gdGhpcy5wcm9wcy5kYXRhU2l6ZSkge1xuICAgICAgcmV0dXJuIE1hdGguY2VpbChkYXRhU2l6ZSAvIHNpemVQZXJQYWdlKTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVMYXN0UGFnZSh0b3RhbFBhZ2VzKSB7XG4gICAgICBjb25zdCB7IHBhZ2VTdGFydEluZGV4IH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIHBhZ2VTdGFydEluZGV4ICsgdG90YWxQYWdlcyAtIDE7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlRnJvbVRvKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBkYXRhU2l6ZSxcbiAgICAgICAgY3VyclBhZ2UsXG4gICAgICAgIGN1cnJTaXplUGVyUGFnZSxcbiAgICAgICAgcGFnZVN0YXJ0SW5kZXhcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gTWF0aC5hYnMoQ29uc3QuUEFHRV9TVEFSVF9JTkRFWCAtIHBhZ2VTdGFydEluZGV4KTtcblxuICAgICAgbGV0IGZyb20gPSAoKGN1cnJQYWdlIC0gcGFnZVN0YXJ0SW5kZXgpICogY3VyclNpemVQZXJQYWdlKTtcbiAgICAgIGZyb20gPSBkYXRhU2l6ZSA9PT0gMCA/IDAgOiBmcm9tICsgMTtcbiAgICAgIGxldCB0byA9IE1hdGgubWluKGN1cnJTaXplUGVyUGFnZSAqIChjdXJyUGFnZSArIG9mZnNldCksIGRhdGFTaXplKTtcbiAgICAgIGlmICh0byA+IGRhdGFTaXplKSB0byA9IGRhdGFTaXplO1xuXG4gICAgICByZXR1cm4gW2Zyb20sIHRvXTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVQYWdlcyhcbiAgICAgIHRvdGFsUGFnZXMsXG4gICAgICBsYXN0UGFnZVxuICAgICkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBjdXJyUGFnZSxcbiAgICAgICAgcGFnaW5hdGlvblNpemUsXG4gICAgICAgIHBhZ2VTdGFydEluZGV4LFxuICAgICAgICB3aXRoRmlyc3RBbmRMYXN0LFxuICAgICAgICBmaXJzdFBhZ2VUZXh0LFxuICAgICAgICBwcmVQYWdlVGV4dCxcbiAgICAgICAgbmV4dFBhZ2VUZXh0LFxuICAgICAgICBsYXN0UGFnZVRleHQsXG4gICAgICAgIGFsd2F5c1Nob3dBbGxCdG5zXG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgbGV0IHBhZ2VzID0gW107XG4gICAgICBsZXQgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgICBpZiAoZW5kUGFnZSA8PSAwKSByZXR1cm4gW107XG5cbiAgICAgIGxldCBzdGFydFBhZ2UgPSBNYXRoLm1heChjdXJyUGFnZSAtIE1hdGguZmxvb3IocGFnaW5hdGlvblNpemUgLyAyKSwgcGFnZVN0YXJ0SW5kZXgpO1xuICAgICAgZW5kUGFnZSA9IHN0YXJ0UGFnZSArIHBhZ2luYXRpb25TaXplIC0gMTtcblxuICAgICAgaWYgKGVuZFBhZ2UgPiBsYXN0UGFnZSkge1xuICAgICAgICBlbmRQYWdlID0gbGFzdFBhZ2U7XG4gICAgICAgIHN0YXJ0UGFnZSA9IGVuZFBhZ2UgLSBwYWdpbmF0aW9uU2l6ZSArIDE7XG4gICAgICB9XG5cbiAgICAgIGlmIChhbHdheXNTaG93QWxsQnRucykge1xuICAgICAgICBpZiAod2l0aEZpcnN0QW5kTGFzdCkge1xuICAgICAgICAgIHBhZ2VzID0gW2ZpcnN0UGFnZVRleHQsIHByZVBhZ2VUZXh0XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYWdlcyA9IFtwcmVQYWdlVGV4dF07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXJ0UGFnZSAhPT0gcGFnZVN0YXJ0SW5kZXggJiZcbiAgICAgICAgdG90YWxQYWdlcyA+IHBhZ2luYXRpb25TaXplICYmXG4gICAgICAgIHdpdGhGaXJzdEFuZExhc3QgJiZcbiAgICAgICAgcGFnZXMubGVuZ3RoID09PSAwXG4gICAgICApIHtcbiAgICAgICAgcGFnZXMgPSBbZmlyc3RQYWdlVGV4dCwgcHJlUGFnZVRleHRdO1xuICAgICAgfSBlbHNlIGlmICh0b3RhbFBhZ2VzID4gMSAmJiBwYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcGFnZXMgPSBbcHJlUGFnZVRleHRdO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRQYWdlOyBpIDw9IGVuZFBhZ2U7IGkgKz0gMSkge1xuICAgICAgICBpZiAoaSA+PSBwYWdlU3RhcnRJbmRleCkgcGFnZXMucHVzaChpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFsd2F5c1Nob3dBbGxCdG5zIHx8IChlbmRQYWdlIDw9IGxhc3RQYWdlICYmIHBhZ2VzLmxlbmd0aCA+IDEpKSB7XG4gICAgICAgIHBhZ2VzLnB1c2gobmV4dFBhZ2VUZXh0KTtcbiAgICAgIH1cbiAgICAgIGlmICgoZW5kUGFnZSAhPT0gbGFzdFBhZ2UgJiYgd2l0aEZpcnN0QW5kTGFzdCkgfHwgKHdpdGhGaXJzdEFuZExhc3QgJiYgYWx3YXlzU2hvd0FsbEJ0bnMpKSB7XG4gICAgICAgIHBhZ2VzLnB1c2gobGFzdFBhZ2VUZXh0KTtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgKChlbmRQYWdlIDw9IGxhc3RQYWdlICYmIHBhZ2VzLmxlbmd0aCA+IDEpIHx8IGFsd2F5c1Nob3dBbGxCdG5zKSB7XG4gICAgICAvLyAgIHBhZ2VzLnB1c2gobmV4dFBhZ2VUZXh0KTtcbiAgICAgIC8vIH1cbiAgICAgIC8vIGlmIChlbmRQYWdlICE9PSBsYXN0UGFnZSAmJiB3aXRoRmlyc3RBbmRMYXN0KSB7XG4gICAgICAvLyAgIHBhZ2VzLnB1c2gobGFzdFBhZ2VUZXh0KTtcbiAgICAgIC8vIH1cblxuICAgICAgcmV0dXJuIHBhZ2VzO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVBhZ2VTdGF0dXMocGFnZXMgPSBbXSwgbGFzdFBhZ2UsIGRpc2FibGVQYWdlVGl0bGUgPSBmYWxzZSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBjdXJyUGFnZSxcbiAgICAgICAgcGFnZVN0YXJ0SW5kZXgsXG4gICAgICAgIGZpcnN0UGFnZVRleHQsXG4gICAgICAgIHByZVBhZ2VUZXh0LFxuICAgICAgICBuZXh0UGFnZVRleHQsXG4gICAgICAgIGxhc3RQYWdlVGV4dCxcbiAgICAgICAgYWx3YXlzU2hvd0FsbEJ0bnNcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgaXNTdGFydCA9IHBhZ2UgPT5cbiAgICAgICAgKGN1cnJQYWdlID09PSBwYWdlU3RhcnRJbmRleCAmJiAocGFnZSA9PT0gZmlyc3RQYWdlVGV4dCB8fCBwYWdlID09PSBwcmVQYWdlVGV4dCkpO1xuICAgICAgY29uc3QgaXNFbmQgPSBwYWdlID0+XG4gICAgICAgIChjdXJyUGFnZSA9PT0gbGFzdFBhZ2UgJiYgKHBhZ2UgPT09IG5leHRQYWdlVGV4dCB8fCBwYWdlID09PSBsYXN0UGFnZVRleHQpKTtcblxuICAgICAgcmV0dXJuIHBhZ2VzXG4gICAgICAgIC5maWx0ZXIoKHBhZ2UpID0+IHtcbiAgICAgICAgICBpZiAoYWx3YXlzU2hvd0FsbEJ0bnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gIShpc1N0YXJ0KHBhZ2UpIHx8IGlzRW5kKHBhZ2UpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm1hcCgocGFnZSkgPT4ge1xuICAgICAgICAgIGxldCB0aXRsZTtcbiAgICAgICAgICBjb25zdCBhY3RpdmUgPSBwYWdlID09PSBjdXJyUGFnZTtcbiAgICAgICAgICBjb25zdCBkaXNhYmxlZCA9IChpc1N0YXJ0KHBhZ2UpIHx8IGlzRW5kKHBhZ2UpKTtcblxuICAgICAgICAgIGlmIChwYWdlID09PSBuZXh0UGFnZVRleHQpIHtcbiAgICAgICAgICAgIHRpdGxlID0gdGhpcy5wcm9wcy5uZXh0UGFnZVRpdGxlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocGFnZSA9PT0gcHJlUGFnZVRleHQpIHtcbiAgICAgICAgICAgIHRpdGxlID0gdGhpcy5wcm9wcy5wcmVQYWdlVGl0bGU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwYWdlID09PSBmaXJzdFBhZ2VUZXh0KSB7XG4gICAgICAgICAgICB0aXRsZSA9IHRoaXMucHJvcHMuZmlyc3RQYWdlVGl0bGU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwYWdlID09PSBsYXN0UGFnZVRleHQpIHtcbiAgICAgICAgICAgIHRpdGxlID0gdGhpcy5wcm9wcy5sYXN0UGFnZVRpdGxlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aXRsZSA9IGAke3BhZ2V9YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBwYWdlUmVzdWx0ID0geyBwYWdlLCBhY3RpdmUsIGRpc2FibGVkIH07XG4gICAgICAgICAgaWYgKCFkaXNhYmxlUGFnZVRpdGxlKSB7XG4gICAgICAgICAgICBwYWdlUmVzdWx0LnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBwYWdlUmVzdWx0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVTaXplUGVyUGFnZVN0YXR1cygpIHtcbiAgICAgIGNvbnN0IHsgc2l6ZVBlclBhZ2VMaXN0IH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIHNpemVQZXJQYWdlTGlzdC5tYXAoKF9zaXplUGVyUGFnZSkgPT4ge1xuICAgICAgICBjb25zdCBwYWdlVGV4dCA9IHR5cGVvZiBfc2l6ZVBlclBhZ2UudGV4dCAhPT0gJ3VuZGVmaW5lZCcgPyBfc2l6ZVBlclBhZ2UudGV4dCA6IF9zaXplUGVyUGFnZTtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlciA9IHR5cGVvZiBfc2l6ZVBlclBhZ2UudmFsdWUgIT09ICd1bmRlZmluZWQnID8gX3NpemVQZXJQYWdlLnZhbHVlIDogX3NpemVQZXJQYWdlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRleHQ6IGAke3BhZ2VUZXh0fWAsXG4gICAgICAgICAgcGFnZTogcGFnZU51bWJlclxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvcGFnZS1yZXNvbHZlci5qcyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuLyogZXNsaW50IGNhbWVsY2FzZTogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHBhZ2VSZXNvbHZlciBmcm9tICcuL3BhZ2UtcmVzb2x2ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVkQ29tcG9uZW50ID0+XG4gIGNsYXNzIFBhZ2luYXRpb25IYW5kbGVyIGV4dGVuZHMgcGFnZVJlc29sdmVyKENvbXBvbmVudCkge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLmhhbmRsZUNoYW5nZVBhZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZVBhZ2UuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlU2l6ZVBlclBhZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZVNpemVQZXJQYWdlLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnN0YXRlID0gdGhpcy5pbml0aWFsU3RhdGUoKTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGNvbnN0IHsgZGF0YVNpemUsIGN1cnJTaXplUGVyUGFnZSB9ID0gbmV4dFByb3BzO1xuICAgICAgaWYgKGN1cnJTaXplUGVyUGFnZSAhPT0gdGhpcy5wcm9wcy5jdXJyU2l6ZVBlclBhZ2UgfHwgZGF0YVNpemUgIT09IHRoaXMucHJvcHMuZGF0YVNpemUpIHtcbiAgICAgICAgY29uc3QgdG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlKGN1cnJTaXplUGVyUGFnZSwgZGF0YVNpemUpO1xuICAgICAgICBjb25zdCBsYXN0UGFnZSA9IHRoaXMuY2FsY3VsYXRlTGFzdFBhZ2UodG90YWxQYWdlcyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b3RhbFBhZ2VzLCBsYXN0UGFnZSB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2VTaXplUGVyUGFnZShzaXplUGVyUGFnZSkge1xuICAgICAgY29uc3QgeyBjdXJyU2l6ZVBlclBhZ2UsIG9uU2l6ZVBlclBhZ2VDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBzZWxlY3RlZFNpemUgPSB0eXBlb2Ygc2l6ZVBlclBhZ2UgPT09ICdzdHJpbmcnID8gcGFyc2VJbnQoc2l6ZVBlclBhZ2UsIDEwKSA6IHNpemVQZXJQYWdlO1xuICAgICAgbGV0IHsgY3VyclBhZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgICBpZiAoc2VsZWN0ZWRTaXplICE9PSBjdXJyU2l6ZVBlclBhZ2UpIHtcbiAgICAgICAgY29uc3QgbmV3VG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlKHNlbGVjdGVkU2l6ZSk7XG4gICAgICAgIGNvbnN0IG5ld0xhc3RQYWdlID0gdGhpcy5jYWxjdWxhdGVMYXN0UGFnZShuZXdUb3RhbFBhZ2VzKTtcbiAgICAgICAgaWYgKGN1cnJQYWdlID4gbmV3TGFzdFBhZ2UpIGN1cnJQYWdlID0gbmV3TGFzdFBhZ2U7XG4gICAgICAgIG9uU2l6ZVBlclBhZ2VDaGFuZ2Uoc2VsZWN0ZWRTaXplLCBjdXJyUGFnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlUGFnZShuZXdQYWdlKSB7XG4gICAgICBsZXQgcGFnZTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY3VyclBhZ2UsXG4gICAgICAgIHBhZ2VTdGFydEluZGV4LFxuICAgICAgICBwcmVQYWdlVGV4dCxcbiAgICAgICAgbmV4dFBhZ2VUZXh0LFxuICAgICAgICBsYXN0UGFnZVRleHQsXG4gICAgICAgIGZpcnN0UGFnZVRleHQsXG4gICAgICAgIG9uUGFnZUNoYW5nZVxuICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7IGxhc3RQYWdlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICBpZiAobmV3UGFnZSA9PT0gcHJlUGFnZVRleHQpIHtcbiAgICAgICAgcGFnZSA9IHRoaXMuYmFja1RvUHJldlBhZ2UoKTtcbiAgICAgIH0gZWxzZSBpZiAobmV3UGFnZSA9PT0gbmV4dFBhZ2VUZXh0KSB7XG4gICAgICAgIHBhZ2UgPSAoY3VyclBhZ2UgKyAxKSA+IGxhc3RQYWdlID8gbGFzdFBhZ2UgOiBjdXJyUGFnZSArIDE7XG4gICAgICB9IGVsc2UgaWYgKG5ld1BhZ2UgPT09IGxhc3RQYWdlVGV4dCkge1xuICAgICAgICBwYWdlID0gbGFzdFBhZ2U7XG4gICAgICB9IGVsc2UgaWYgKG5ld1BhZ2UgPT09IGZpcnN0UGFnZVRleHQpIHtcbiAgICAgICAgcGFnZSA9IHBhZ2VTdGFydEluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFnZSA9IHBhcnNlSW50KG5ld1BhZ2UsIDEwKTtcbiAgICAgIH1cbiAgICAgIGlmIChwYWdlICE9PSBjdXJyUGFnZSkge1xuICAgICAgICBvblBhZ2VDaGFuZ2UocGFnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFdyYXBwZWRDb21wb25lbnRcbiAgICAgICAgICB7IC4uLnRoaXMucHJvcHMgfVxuICAgICAgICAgIGxhc3RQYWdlPXsgdGhpcy5zdGF0ZS5sYXN0UGFnZSB9XG4gICAgICAgICAgdG90YWxQYWdlcz17IHRoaXMuc3RhdGUudG90YWxQYWdlcyB9XG4gICAgICAgICAgb25QYWdlQ2hhbmdlPXsgdGhpcy5oYW5kbGVDaGFuZ2VQYWdlIH1cbiAgICAgICAgICBvblNpemVQZXJQYWdlQ2hhbmdlPXsgdGhpcy5oYW5kbGVDaGFuZ2VTaXplUGVyUGFnZSB9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3Ivc3JjL3BhZ2luYXRpb24taGFuZGxlci5qcyIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVkQ29tcG9uZW50ID0+ICh7XG4gIHBhZ2UsXG4gIHNpemVQZXJQYWdlLFxuICAuLi5yZXN0XG59KSA9PiAoXG4gIDxXcmFwcGVkQ29tcG9uZW50XG4gICAgeyAuLi5yZXN0IH1cbiAgICBjdXJyUGFnZT17IHBhZ2UgfVxuICAgIGN1cnJTaXplUGVyUGFnZT17IHNpemVQZXJQYWdlIH1cbiAgLz5cbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvc3RhbmRhbG9uZS1hZGFwdGVyLmpzIiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cbi8qIGVzbGludCBuby1sb25lbHktaWY6IDAgKi9cbi8qIGVzbGludCBjYW1lbGNhc2U6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50cyc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9jb25zdCc7XG5pbXBvcnQgeyBhbGlnblBhZ2UgfSBmcm9tICcuL3BhZ2UnO1xuXG5jb25zdCBTdGF0ZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmNsYXNzIFN0YXRlUHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZVBhZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZVBhZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZURhdGFTaXplQ2hhbmdlID0gdGhpcy5oYW5kbGVEYXRhU2l6ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlU2l6ZVBlclBhZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZVNpemVQZXJQYWdlLmJpbmQodGhpcyk7XG5cbiAgICBsZXQgY3VyclBhZ2U7XG4gICAgbGV0IGN1cnJTaXplUGVyUGFnZTtcbiAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHByb3BzLnBhZ2luYXRpb247XG4gICAgY29uc3Qgc2l6ZVBlclBhZ2VMaXN0ID0gb3B0aW9ucy5zaXplUGVyUGFnZUxpc3QgfHwgQ29uc3QuU0laRV9QRVJfUEFHRV9MSVNUO1xuXG4gICAgLy8gaW5pdGlhbGl6ZSBjdXJyZW50IHBhZ2VcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMucGFnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGN1cnJQYWdlID0gb3B0aW9ucy5wYWdlO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMucGFnZVN0YXJ0SW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjdXJyUGFnZSA9IG9wdGlvbnMucGFnZVN0YXJ0SW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJQYWdlID0gQ29uc3QuUEFHRV9TVEFSVF9JTkRFWDtcbiAgICB9XG5cbiAgICAvLyBpbml0aWFsaXplIGN1cnJlbnQgc2l6ZVBlclBhZ2VcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuc2l6ZVBlclBhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjdXJyU2l6ZVBlclBhZ2UgPSBvcHRpb25zLnNpemVQZXJQYWdlO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHNpemVQZXJQYWdlTGlzdFswXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGN1cnJTaXplUGVyUGFnZSA9IHNpemVQZXJQYWdlTGlzdFswXS52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VyclNpemVQZXJQYWdlID0gc2l6ZVBlclBhZ2VMaXN0WzBdO1xuICAgIH1cblxuICAgIHRoaXMuY3VyclBhZ2UgPSBjdXJyUGFnZTtcbiAgICB0aGlzLmRhdGFTaXplID0gb3B0aW9ucy50b3RhbFNpemU7XG4gICAgdGhpcy5jdXJyU2l6ZVBlclBhZ2UgPSBjdXJyU2l6ZVBlclBhZ2U7XG4gICAgdGhpcy5kYXRhQ2hhbmdlTGlzdGVuZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgdGhpcy5kYXRhQ2hhbmdlTGlzdGVuZXIub24oJ2ZpbHRlckNoYW5nZWQnLCB0aGlzLmhhbmRsZURhdGFTaXplQ2hhbmdlKTtcbiAgfVxuXG4gIGdldFBhZ2luYXRpb25Qcm9wcyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHBhZ2luYXRpb246IHsgb3B0aW9ucyB9LCBib290c3RyYXA0LCB0YWJsZUlkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY3VyclBhZ2UsIGN1cnJTaXplUGVyUGFnZSwgZGF0YVNpemUgfSA9IHRoaXM7XG4gICAgY29uc3Qgd2l0aEZpcnN0QW5kTGFzdCA9IHR5cGVvZiBvcHRpb25zLndpdGhGaXJzdEFuZExhc3QgPT09ICd1bmRlZmluZWQnID9cbiAgICAgIENvbnN0LldpdGhfRklSU1RfQU5EX0xBU1QgOiBvcHRpb25zLndpdGhGaXJzdEFuZExhc3Q7XG4gICAgY29uc3QgYWx3YXlzU2hvd0FsbEJ0bnMgPSB0eXBlb2Ygb3B0aW9ucy5hbHdheXNTaG93QWxsQnRucyA9PT0gJ3VuZGVmaW5lZCcgP1xuICAgICAgQ29uc3QuU0hPV19BTExfUEFHRV9CVE5TIDogb3B0aW9ucy5hbHdheXNTaG93QWxsQnRucztcbiAgICBjb25zdCBoaWRlU2l6ZVBlclBhZ2UgPSB0eXBlb2Ygb3B0aW9ucy5oaWRlU2l6ZVBlclBhZ2UgPT09ICd1bmRlZmluZWQnID9cbiAgICAgIENvbnN0LkhJREVfU0laRV9QRVJfUEFHRSA6IG9wdGlvbnMuaGlkZVNpemVQZXJQYWdlO1xuICAgIGNvbnN0IGhpZGVQYWdlTGlzdE9ubHlPbmVQYWdlID0gdHlwZW9mIG9wdGlvbnMuaGlkZVBhZ2VMaXN0T25seU9uZVBhZ2UgPT09ICd1bmRlZmluZWQnID9cbiAgICAgIENvbnN0LkhJREVfUEFHRV9MSVNUX09OTFlfT05FX1BBR0UgOiBvcHRpb25zLmhpZGVQYWdlTGlzdE9ubHlPbmVQYWdlO1xuICAgIGNvbnN0IHBhZ2VTdGFydEluZGV4ID0gdHlwZW9mIG9wdGlvbnMucGFnZVN0YXJ0SW5kZXggPT09ICd1bmRlZmluZWQnID9cbiAgICAgIENvbnN0LlBBR0VfU1RBUlRfSU5ERVggOiBvcHRpb25zLnBhZ2VTdGFydEluZGV4O1xuICAgIHJldHVybiB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgYm9vdHN0cmFwNCxcbiAgICAgIHRhYmxlSWQsXG4gICAgICBwYWdlOiBjdXJyUGFnZSxcbiAgICAgIHNpemVQZXJQYWdlOiBjdXJyU2l6ZVBlclBhZ2UsXG4gICAgICBwYWdlU3RhcnRJbmRleCxcbiAgICAgIGhpZGVQYWdlTGlzdE9ubHlPbmVQYWdlLFxuICAgICAgaGlkZVNpemVQZXJQYWdlLFxuICAgICAgYWx3YXlzU2hvd0FsbEJ0bnMsXG4gICAgICB3aXRoRmlyc3RBbmRMYXN0LFxuICAgICAgZGF0YVNpemUsXG4gICAgICBzaXplUGVyUGFnZUxpc3Q6IG9wdGlvbnMuc2l6ZVBlclBhZ2VMaXN0IHx8IENvbnN0LlNJWkVfUEVSX1BBR0VfTElTVCxcbiAgICAgIHBhZ2luYXRpb25TaXplOiBvcHRpb25zLnBhZ2luYXRpb25TaXplIHx8IENvbnN0LlBBR0lOQVRJT05fU0laRSxcbiAgICAgIHNob3dUb3RhbDogb3B0aW9ucy5zaG93VG90YWwsXG4gICAgICBwYWdlTGlzdFJlbmRlcmVyOiBvcHRpb25zLnBhZ2VMaXN0UmVuZGVyZXIsXG4gICAgICBwYWdlQnV0dG9uUmVuZGVyZXI6IG9wdGlvbnMucGFnZUJ1dHRvblJlbmRlcmVyLFxuICAgICAgc2l6ZVBlclBhZ2VSZW5kZXJlcjogb3B0aW9ucy5zaXplUGVyUGFnZVJlbmRlcmVyLFxuICAgICAgcGFnaW5hdGlvblRvdGFsUmVuZGVyZXI6IG9wdGlvbnMucGFnaW5hdGlvblRvdGFsUmVuZGVyZXIsXG4gICAgICBzaXplUGVyUGFnZU9wdGlvblJlbmRlcmVyOiBvcHRpb25zLnNpemVQZXJQYWdlT3B0aW9uUmVuZGVyZXIsXG4gICAgICBmaXJzdFBhZ2VUZXh0OiBvcHRpb25zLmZpcnN0UGFnZVRleHQgfHwgQ29uc3QuRklSU1RfUEFHRV9URVhULFxuICAgICAgcHJlUGFnZVRleHQ6IG9wdGlvbnMucHJlUGFnZVRleHQgfHwgQ29uc3QuUFJFX1BBR0VfVEVYVCxcbiAgICAgIG5leHRQYWdlVGV4dDogb3B0aW9ucy5uZXh0UGFnZVRleHQgfHwgQ29uc3QuTkVYVF9QQUdFX1RFWFQsXG4gICAgICBsYXN0UGFnZVRleHQ6IG9wdGlvbnMubGFzdFBhZ2VUZXh0IHx8IENvbnN0LkxBU1RfUEFHRV9URVhULFxuICAgICAgcHJlUGFnZVRpdGxlOiBvcHRpb25zLnByZVBhZ2VUaXRsZSB8fCBDb25zdC5QUkVfUEFHRV9USVRMRSxcbiAgICAgIG5leHRQYWdlVGl0bGU6IG9wdGlvbnMubmV4dFBhZ2VUaXRsZSB8fCBDb25zdC5ORVhUX1BBR0VfVElUTEUsXG4gICAgICBmaXJzdFBhZ2VUaXRsZTogb3B0aW9ucy5maXJzdFBhZ2VUaXRsZSB8fCBDb25zdC5GSVJTVF9QQUdFX1RJVExFLFxuICAgICAgbGFzdFBhZ2VUaXRsZTogb3B0aW9ucy5sYXN0UGFnZVRpdGxlIHx8IENvbnN0LkxBU1RfUEFHRV9USVRMRSxcbiAgICAgIG9uUGFnZUNoYW5nZTogdGhpcy5oYW5kbGVDaGFuZ2VQYWdlLFxuICAgICAgb25TaXplUGVyUGFnZUNoYW5nZTogdGhpcy5oYW5kbGVDaGFuZ2VTaXplUGVyUGFnZVxuICAgIH07XG4gIH1cblxuICBzZXRQYWdpbmF0aW9uUmVtb3RlRW1pdHRlciA9IChyZW1vdGVFbWl0dGVyKSA9PiB7XG4gICAgdGhpcy5yZW1vdGVFbWl0dGVyID0gcmVtb3RlRW1pdHRlcjtcbiAgfVxuXG4gIGdldFBhZ2luYXRpb25SZW1vdGVFbWl0dGVyID0gKCkgPT4gdGhpcy5yZW1vdGVFbWl0dGVyIHx8IHRoaXMucHJvcHMucmVtb3RlRW1pdHRlcjtcblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zdCB7IGN1c3RvbSB9ID0gbmV4dFByb3BzLnBhZ2luYXRpb24ub3B0aW9ucztcblxuICAgIC8vIHVzZXIgc2hvdWxkIGFsaWduIHRoZSBwYWdlIHdoZW4gdGhlIHBhZ2UgaXMgbm90IGZpdCB0byB0aGUgZGF0YSBzaXplIHdoZW4gcmVtb3RlIGVuYWJsZVxuICAgIGlmICh0aGlzLmlzUmVtb3RlUGFnaW5hdGlvbigpIHx8IGN1c3RvbSkge1xuICAgICAgaWYgKHR5cGVvZiBuZXh0UHJvcHMucGFnaW5hdGlvbi5vcHRpb25zLnBhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuY3VyclBhZ2UgPSBuZXh0UHJvcHMucGFnaW5hdGlvbi5vcHRpb25zLnBhZ2U7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIG5leHRQcm9wcy5wYWdpbmF0aW9uLm9wdGlvbnMuc2l6ZVBlclBhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuY3VyclNpemVQZXJQYWdlID0gbmV4dFByb3BzLnBhZ2luYXRpb24ub3B0aW9ucy5zaXplUGVyUGFnZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbmV4dFByb3BzLnBhZ2luYXRpb24ub3B0aW9ucy50b3RhbFNpemUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuZGF0YVNpemUgPSBuZXh0UHJvcHMucGFnaW5hdGlvbi5vcHRpb25zLnRvdGFsU2l6ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc1JlbW90ZVBhZ2luYXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgZSA9IHt9O1xuICAgIHRoaXMucmVtb3RlRW1pdHRlci5lbWl0KCdpc1JlbW90ZVBhZ2luYXRpb24nLCBlKTtcbiAgICByZXR1cm4gZS5yZXN1bHQ7XG4gIH07XG5cbiAgaGFuZGxlRGF0YVNpemVDaGFuZ2UobmV3RGF0YVNpemUpIHtcbiAgICBjb25zdCB7IHBhZ2luYXRpb246IHsgb3B0aW9ucyB9IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHBhZ2VTdGFydEluZGV4ID0gdHlwZW9mIG9wdGlvbnMucGFnZVN0YXJ0SW5kZXggPT09ICd1bmRlZmluZWQnID9cbiAgICAgIENvbnN0LlBBR0VfU1RBUlRfSU5ERVggOiBvcHRpb25zLnBhZ2VTdGFydEluZGV4O1xuICAgIHRoaXMuY3VyclBhZ2UgPSBhbGlnblBhZ2UoXG4gICAgICBuZXdEYXRhU2l6ZSxcbiAgICAgIHRoaXMuZGF0YVNpemUsXG4gICAgICB0aGlzLmN1cnJQYWdlLFxuICAgICAgdGhpcy5jdXJyU2l6ZVBlclBhZ2UsXG4gICAgICBwYWdlU3RhcnRJbmRleFxuICAgICk7XG4gICAgdGhpcy5kYXRhU2l6ZSA9IG5ld0RhdGFTaXplO1xuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZVBhZ2UoY3VyclBhZ2UpIHtcbiAgICBjb25zdCB7IGN1cnJTaXplUGVyUGFnZSB9ID0gdGhpcztcbiAgICBjb25zdCB7IHBhZ2luYXRpb246IHsgb3B0aW9ucyB9IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKG9wdGlvbnMub25QYWdlQ2hhbmdlKSB7XG4gICAgICBvcHRpb25zLm9uUGFnZUNoYW5nZShjdXJyUGFnZSwgY3VyclNpemVQZXJQYWdlKTtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJQYWdlID0gY3VyclBhZ2U7XG5cbiAgICBpZiAodGhpcy5pc1JlbW90ZVBhZ2luYXRpb24oKSkge1xuICAgICAgdGhpcy5nZXRQYWdpbmF0aW9uUmVtb3RlRW1pdHRlcigpLmVtaXQoJ3BhZ2luYXRpb25DaGFuZ2UnLCBjdXJyUGFnZSwgY3VyclNpemVQZXJQYWdlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlU2l6ZVBlclBhZ2UoY3VyclNpemVQZXJQYWdlLCBjdXJyUGFnZSkge1xuICAgIGNvbnN0IHsgcGFnaW5hdGlvbjogeyBvcHRpb25zIH0gfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAob3B0aW9ucy5vblNpemVQZXJQYWdlQ2hhbmdlKSB7XG4gICAgICBvcHRpb25zLm9uU2l6ZVBlclBhZ2VDaGFuZ2UoY3VyclNpemVQZXJQYWdlLCBjdXJyUGFnZSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyUGFnZSA9IGN1cnJQYWdlO1xuICAgIHRoaXMuY3VyclNpemVQZXJQYWdlID0gY3VyclNpemVQZXJQYWdlO1xuXG4gICAgaWYgKHRoaXMuaXNSZW1vdGVQYWdpbmF0aW9uKCkpIHtcbiAgICAgIHRoaXMuZ2V0UGFnaW5hdGlvblJlbW90ZUVtaXR0ZXIoKS5lbWl0KCdwYWdpbmF0aW9uQ2hhbmdlJywgY3VyclBhZ2UsIGN1cnJTaXplUGVyUGFnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwYWdpbmF0aW9uUHJvcHMgPSB0aGlzLmdldFBhZ2luYXRpb25Qcm9wcygpO1xuICAgIGNvbnN0IHBhZ2luYXRpb24gPSB7XG4gICAgICAuLi50aGlzLnByb3BzLnBhZ2luYXRpb24sXG4gICAgICBvcHRpb25zOiBwYWdpbmF0aW9uUHJvcHNcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdGF0ZUNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgdmFsdWU9eyB7XG4gICAgICAgICAgcGFnaW5hdGlvblByb3BzLFxuICAgICAgICAgIHBhZ2luYXRpb25UYWJsZVByb3BzOiB7XG4gICAgICAgICAgICBwYWdpbmF0aW9uLFxuICAgICAgICAgICAgc2V0UGFnaW5hdGlvblJlbW90ZUVtaXR0ZXI6IHRoaXMuc2V0UGFnaW5hdGlvblJlbW90ZUVtaXR0ZXIsXG4gICAgICAgICAgICBkYXRhQ2hhbmdlTGlzdGVuZXI6IHRoaXMuZGF0YUNoYW5nZUxpc3RlbmVyXG4gICAgICAgICAgfVxuICAgICAgICB9IH1cbiAgICAgID5cbiAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgIDwvU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKHtcbiAgUHJvdmlkZXI6IFN0YXRlUHJvdmlkZXIsXG4gIENvbnN1bWVyOiBTdGF0ZUNvbnRleHQuQ29uc3VtZXJcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3Ivc3JjL3N0YXRlLWNvbnRleHQuanMiLCJpbXBvcnQgQ29uc3QgZnJvbSAnLi9jb25zdCc7XG5cbmNvbnN0IGdldE5vcm1hbGl6ZWRQYWdlID0gKFxuICBwYWdlLFxuICBwYWdlU3RhcnRJbmRleFxuKSA9PiB7XG4gIGNvbnN0IG9mZnNldCA9IE1hdGguYWJzKDEgLSBwYWdlU3RhcnRJbmRleCk7XG4gIHJldHVybiBwYWdlICsgb2Zmc2V0O1xufTtcblxuY29uc3QgZW5kSW5kZXggPSAoXG4gIHBhZ2UsXG4gIHNpemVQZXJQYWdlLFxuICBwYWdlU3RhcnRJbmRleFxuKSA9PiAoZ2V0Tm9ybWFsaXplZFBhZ2UocGFnZSwgcGFnZVN0YXJ0SW5kZXgpICogc2l6ZVBlclBhZ2UpIC0gMTtcblxuY29uc3Qgc3RhcnRJbmRleCA9IChcbiAgZW5kLFxuICBzaXplUGVyUGFnZSxcbikgPT4gZW5kIC0gKHNpemVQZXJQYWdlIC0gMSk7XG5cbmV4cG9ydCBjb25zdCBhbGlnblBhZ2UgPSAoXG4gIGRhdGFTaXplLFxuICBwcmV2RGF0YVNpemUsXG4gIHBhZ2UsXG4gIHNpemVQZXJQYWdlLFxuICBwYWdlU3RhcnRJbmRleFxuKSA9PiB7XG4gIGlmIChwcmV2RGF0YVNpemUgPCBkYXRhU2l6ZSkgcmV0dXJuIHBhZ2U7XG4gIGlmIChwYWdlIDwgcGFnZVN0YXJ0SW5kZXgpIHJldHVybiBwYWdlU3RhcnRJbmRleDtcbiAgaWYgKGRhdGFTaXplIDw9IDApIHJldHVybiBwYWdlU3RhcnRJbmRleDtcbiAgaWYgKChwYWdlID49IChNYXRoLmZsb29yKGRhdGFTaXplIC8gc2l6ZVBlclBhZ2UpICsgcGFnZVN0YXJ0SW5kZXgpKSAmJiBwYWdlU3RhcnRJbmRleCA9PT0gMSkge1xuICAgIHJldHVybiBNYXRoLmNlaWwoZGF0YVNpemUgLyBzaXplUGVyUGFnZSk7XG4gIH1cbiAgaWYgKHBhZ2UgPj0gTWF0aC5mbG9vcihkYXRhU2l6ZSAvIHNpemVQZXJQYWdlKSAmJiBwYWdlU3RhcnRJbmRleCA9PT0gMCkge1xuICAgIGNvbnN0IG5ld1BhZ2UgPSBNYXRoLmNlaWwoZGF0YVNpemUgLyBzaXplUGVyUGFnZSk7XG4gICAgcmV0dXJuIG5ld1BhZ2UgLSBNYXRoLmFicygoQ29uc3QuUEFHRV9TVEFSVF9JTkRFWCAtIHBhZ2VTdGFydEluZGV4KSk7XG4gIH1cbiAgcmV0dXJuIHBhZ2U7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QnlDdXJyUGFnZSA9IChcbiAgZGF0YSxcbiAgcGFnZSxcbiAgc2l6ZVBlclBhZ2UsXG4gIHBhZ2VTdGFydEluZGV4XG4pID0+IHtcbiAgY29uc3QgZGF0YVNpemUgPSBkYXRhLmxlbmd0aDtcbiAgaWYgKCFkYXRhU2l6ZSkgcmV0dXJuIFtdO1xuXG4gIGNvbnN0IGVuZCA9IGVuZEluZGV4KHBhZ2UsIHNpemVQZXJQYWdlLCBwYWdlU3RhcnRJbmRleCk7XG4gIGNvbnN0IHN0YXJ0ID0gc3RhcnRJbmRleChlbmQsIHNpemVQZXJQYWdlKTtcblxuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSArPSAxKSB7XG4gICAgcmVzdWx0LnB1c2goZGF0YVtpXSk7XG4gICAgaWYgKGkgKyAxID09PSBkYXRhU2l6ZSkgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvcGFnZS5qcyIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgcGFnZVJlc29sdmVyIGZyb20gJy4vcGFnZS1yZXNvbHZlcic7XG5pbXBvcnQgU2l6ZVBlclBhZ2VEcm9wRG93biBmcm9tICcuL3NpemUtcGVyLXBhZ2UtZHJvcGRvd24nO1xuXG5jb25zdCBzaXplUGVyUGFnZURyb3Bkb3duQWRhcHRlciA9IFdyYXBwZWRDb21wb25lbnQgPT5cbiAgY2xhc3MgU2l6ZVBlclBhZ2VEcm9wZG93bkFkYXB0ZXIgZXh0ZW5kcyBwYWdlUmVzb2x2ZXIoQ29tcG9uZW50KSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuY2xvc2VEcm9wRG93biA9IHRoaXMuY2xvc2VEcm9wRG93bi5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy50b2dnbGVEcm9wRG93biA9IHRoaXMudG9nZ2xlRHJvcERvd24uYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlU2l6ZVBlclBhZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZVNpemVQZXJQYWdlLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnN0YXRlID0geyBkcm9wZG93bk9wZW46IGZhbHNlIH07XG4gICAgfVxuXG4gICAgdG9nZ2xlRHJvcERvd24oKSB7XG4gICAgICBjb25zdCBkcm9wZG93bk9wZW4gPSAhdGhpcy5zdGF0ZS5kcm9wZG93bk9wZW47XG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGRyb3Bkb3duT3BlbiB9KSk7XG4gICAgfVxuXG4gICAgY2xvc2VEcm9wRG93bigpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgZHJvcGRvd25PcGVuOiBmYWxzZSB9KSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlU2l6ZVBlclBhZ2Uoc2l6ZVBlclBhZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25TaXplUGVyUGFnZUNoYW5nZShzaXplUGVyUGFnZSk7XG4gICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHRhYmxlSWQsXG4gICAgICAgIGJvb3RzdHJhcDQsXG4gICAgICAgIHNpemVQZXJQYWdlTGlzdCxcbiAgICAgICAgY3VyclNpemVQZXJQYWdlLFxuICAgICAgICBoaWRlU2l6ZVBlclBhZ2UsXG4gICAgICAgIHNpemVQZXJQYWdlUmVuZGVyZXIsXG4gICAgICAgIHNpemVQZXJQYWdlT3B0aW9uUmVuZGVyZXJcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgeyBkcm9wZG93bk9wZW46IG9wZW4gfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgIGlmIChzaXplUGVyUGFnZUxpc3QubGVuZ3RoID4gMSAmJiAhaGlkZVNpemVQZXJQYWdlKSB7XG4gICAgICAgIGlmIChzaXplUGVyUGFnZVJlbmRlcmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHNpemVQZXJQYWdlUmVuZGVyZXIoe1xuICAgICAgICAgICAgb3B0aW9uczogdGhpcy5jYWxjdWxhdGVTaXplUGVyUGFnZVN0YXR1cygpLFxuICAgICAgICAgICAgY3VyclNpemVQZXJQYWdlOiBgJHtjdXJyU2l6ZVBlclBhZ2V9YCxcbiAgICAgICAgICAgIG9uU2l6ZVBlclBhZ2VDaGFuZ2U6IHRoaXMuaGFuZGxlQ2hhbmdlU2l6ZVBlclBhZ2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxXcmFwcGVkQ29tcG9uZW50XG4gICAgICAgICAgICB7IC4uLnRoaXMucHJvcHMgfVxuICAgICAgICAgICAgY3VyclNpemVQZXJQYWdlPXsgYCR7Y3VyclNpemVQZXJQYWdlfWAgfVxuICAgICAgICAgICAgb3B0aW9ucz17IHRoaXMuY2FsY3VsYXRlU2l6ZVBlclBhZ2VTdGF0dXMoKSB9XG4gICAgICAgICAgICBvcHRpb25SZW5kZXJlcj17IHNpemVQZXJQYWdlT3B0aW9uUmVuZGVyZXIgfVxuICAgICAgICAgICAgb25TaXplUGVyUGFnZUNoYW5nZT17IHRoaXMuaGFuZGxlQ2hhbmdlU2l6ZVBlclBhZ2UgfVxuICAgICAgICAgICAgb25DbGljaz17IHRoaXMudG9nZ2xlRHJvcERvd24gfVxuICAgICAgICAgICAgb25CbHVyPXsgdGhpcy5jbG9zZURyb3BEb3duIH1cbiAgICAgICAgICAgIG9wZW49eyBvcGVuIH1cbiAgICAgICAgICAgIHRhYmxlSWQ9eyB0YWJsZUlkIH1cbiAgICAgICAgICAgIGJvb3RzdHJhcDQ9eyBib290c3RyYXA0IH1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG5cbmV4cG9ydCBjb25zdCBTaXplUGVyUGFnZURyb3Bkb3duV2l0aEFkYXB0ZXIgPSBzaXplUGVyUGFnZURyb3Bkb3duQWRhcHRlcihTaXplUGVyUGFnZURyb3BEb3duKTtcbmV4cG9ydCBkZWZhdWx0IHNpemVQZXJQYWdlRHJvcGRvd25BZGFwdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3Ivc3JjL3NpemUtcGVyLXBhZ2UtZHJvcGRvd24tYWRhcHRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFNpemVQZXJQYWdlT3B0aW9uIGZyb20gJy4vc2l6ZS1wZXItcGFnZS1vcHRpb24nO1xuXG5jb25zdCBzaXplUGVyUGFnZURlZmF1bHRDbGFzcyA9ICdyZWFjdC1icy10YWJsZS1zaXplUGVyUGFnZS1kcm9wZG93bic7XG5cbmNvbnN0IFNpemVQZXJQYWdlRHJvcERvd24gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIG9wZW4sXG4gICAgdGFibGVJZCxcbiAgICBoaWRkZW4sXG4gICAgb25DbGljayxcbiAgICBvbkJsdXIsXG4gICAgb3B0aW9ucyxcbiAgICBjbGFzc05hbWUsXG4gICAgdmFyaWF0aW9uLFxuICAgIGJvb3RzdHJhcDQsXG4gICAgYnRuQ29udGV4dHVhbCxcbiAgICBvcHRpb25SZW5kZXJlcixcbiAgICBjdXJyU2l6ZVBlclBhZ2UsXG4gICAgb25TaXplUGVyUGFnZUNoYW5nZVxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZHJvcERvd25TdHlsZSA9IHsgdmlzaWJpbGl0eTogaGlkZGVuID8gJ2hpZGRlbicgOiAndmlzaWJsZScgfTtcbiAgY29uc3Qgb3BlbkNsYXNzID0gb3BlbiA/ICdvcGVuIHNob3cnIDogJyc7XG4gIGNvbnN0IGRyb3Bkb3duQ2xhc3NlcyA9IGNzKFxuICAgIG9wZW5DbGFzcyxcbiAgICBzaXplUGVyUGFnZURlZmF1bHRDbGFzcyxcbiAgICB2YXJpYXRpb24sXG4gICAgY2xhc3NOYW1lLFxuICApO1xuXG4gIGNvbnN0IGlkID0gdGFibGVJZCA/IGAke3RhYmxlSWR9LXBhZ2VEcm9wRG93bmAgOiAncGFnZURyb3BEb3duJztcblxuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICBzdHlsZT17IGRyb3BEb3duU3R5bGUgfVxuICAgICAgY2xhc3NOYW1lPXsgZHJvcGRvd25DbGFzc2VzIH1cbiAgICA+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGlkPXsgaWQgfVxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXsgYGJ0biAke2J0bkNvbnRleHR1YWx9IGRyb3Bkb3duLXRvZ2dsZWAgfVxuICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcbiAgICAgICAgYXJpYS1leHBhbmRlZD17IG9wZW4gfVxuICAgICAgICBvbkNsaWNrPXsgb25DbGljayB9XG4gICAgICAgIG9uQmx1cj17IG9uQmx1ciB9XG4gICAgICA+XG4gICAgICAgIHsgY3VyclNpemVQZXJQYWdlIH1cbiAgICAgICAgeyAnICcgfVxuICAgICAgICB7XG4gICAgICAgICAgYm9vdHN0cmFwNCA/IG51bGwgOiAoXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZXRcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9idXR0b24+XG4gICAgICA8dWxcbiAgICAgICAgY2xhc3NOYW1lPXsgYGRyb3Bkb3duLW1lbnUgJHtvcGVuQ2xhc3N9YCB9XG4gICAgICAgIHJvbGU9XCJtZW51XCJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXsgaWQgfVxuICAgICAgPlxuICAgICAgICB7XG4gICAgICAgICAgb3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKG9wdGlvblJlbmRlcmVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvcHRpb25SZW5kZXJlcih7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9uLFxuICAgICAgICAgICAgICAgIG9uU2l6ZVBlclBhZ2VDaGFuZ2VcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8U2l6ZVBlclBhZ2VPcHRpb25cbiAgICAgICAgICAgICAgICB7IC4uLm9wdGlvbiB9XG4gICAgICAgICAgICAgICAga2V5PXsgb3B0aW9uLnRleHQgfVxuICAgICAgICAgICAgICAgIGJvb3RzdHJhcDQ9eyBib290c3RyYXA0IH1cbiAgICAgICAgICAgICAgICBvblNpemVQZXJQYWdlQ2hhbmdlPXsgb25TaXplUGVyUGFnZUNoYW5nZSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgPC9zcGFuPlxuICApO1xufTtcblxuU2l6ZVBlclBhZ2VEcm9wRG93bi5wcm9wVHlwZXMgPSB7XG4gIGN1cnJTaXplUGVyUGFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvblNpemVQZXJQYWdlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBib290c3RyYXA0OiBQcm9wVHlwZXMuYm9vbCxcbiAgdGFibGVJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIGhpZGRlbjogUHJvcFR5cGVzLmJvb2wsXG4gIGJ0bkNvbnRleHR1YWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhcmlhdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnZHJvcGRvd24nLCAnZHJvcHVwJ10pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9wdGlvblJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuY1xufTtcblNpemVQZXJQYWdlRHJvcERvd24uZGVmYXVsdFByb3BzID0ge1xuICBvcGVuOiBmYWxzZSxcbiAgaGlkZGVuOiBmYWxzZSxcbiAgYnRuQ29udGV4dHVhbDogJ2J0bi1kZWZhdWx0IGJ0bi1zZWNvbmRhcnknLFxuICB2YXJpYXRpb246ICdkcm9wZG93bicsXG4gIGNsYXNzTmFtZTogJycsXG4gIG9wdGlvblJlbmRlcmVyOiBudWxsLFxuICBib290c3RyYXA0OiBmYWxzZSxcbiAgdGFibGVJZDogbnVsbFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBTaXplUGVyUGFnZURyb3BEb3duO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3Ivc3JjL3NpemUtcGVyLXBhZ2UtZHJvcGRvd24uanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHBhZ2VSZXNvbHZlciBmcm9tICcuL3BhZ2UtcmVzb2x2ZXInO1xuaW1wb3J0IFBhZ2luYXRpb25MaXN0IGZyb20gJy4vcGFnaW5hdGlvbi1saXN0JztcblxuY29uc3QgcGFnaW5hdGlvbkxpc3RBZGFwdGVyID0gV3JhcHBlZENvbXBvbmVudCA9PlxuICBjbGFzcyBQYWdpbmF0aW9uTGlzdEFkYXB0ZXIgZXh0ZW5kcyBwYWdlUmVzb2x2ZXIoQ29tcG9uZW50KSB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBsYXN0UGFnZSxcbiAgICAgICAgdG90YWxQYWdlcyxcbiAgICAgICAgcGFnZUJ1dHRvblJlbmRlcmVyLFxuICAgICAgICBvblBhZ2VDaGFuZ2UsXG4gICAgICAgIGRpc2FibGVQYWdlVGl0bGUsXG4gICAgICAgIGhpZGVQYWdlTGlzdE9ubHlPbmVQYWdlXG4gICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHBhZ2VzID0gdGhpcy5jYWxjdWxhdGVQYWdlU3RhdHVzKFxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVBhZ2VzKHRvdGFsUGFnZXMsIGxhc3RQYWdlKSxcbiAgICAgICAgbGFzdFBhZ2UsXG4gICAgICAgIGRpc2FibGVQYWdlVGl0bGVcbiAgICAgICk7XG4gICAgICBpZiAodG90YWxQYWdlcyA9PT0gMSAmJiBoaWRlUGFnZUxpc3RPbmx5T25lUGFnZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxXcmFwcGVkQ29tcG9uZW50XG4gICAgICAgICAgcGFnZUJ1dHRvblJlbmRlcmVyPXsgcGFnZUJ1dHRvblJlbmRlcmVyIH1cbiAgICAgICAgICBvblBhZ2VDaGFuZ2U9eyBvblBhZ2VDaGFuZ2UgfVxuICAgICAgICAgIHBhZ2VzPXsgcGFnZXMgfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cblxuZXhwb3J0IGNvbnN0IFBhZ2luYXRpb25MaXN0V2l0aEFkYXB0ZXIgPSBwYWdpbmF0aW9uTGlzdEFkYXB0ZXIoUGFnaW5hdGlvbkxpc3QpO1xuZXhwb3J0IGRlZmF1bHQgcGFnaW5hdGlvbkxpc3RBZGFwdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3Ivc3JjL3BhZ2luYXRpb24tbGlzdC1hZGFwdGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBQYWdlQnV0dG9uIGZyb20gJy4vcGFnZS1idXR0b24nO1xuXG5jb25zdCBQYWdpbmF0b25MaXN0ID0gcHJvcHMgPT4gKFxuICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvbiByZWFjdC1ib290c3RyYXAtdGFibGUtcGFnZS1idG5zLXVsXCI+XG4gICAge1xuICAgICAgcHJvcHMucGFnZXMubWFwKChwYWdlUHJvcHMpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLnBhZ2VCdXR0b25SZW5kZXJlcikge1xuICAgICAgICAgIHJldHVybiBwcm9wcy5wYWdlQnV0dG9uUmVuZGVyZXIoe1xuICAgICAgICAgICAgLi4ucGFnZVByb3BzLFxuICAgICAgICAgICAgb25QYWdlQ2hhbmdlOiBwcm9wcy5vblBhZ2VDaGFuZ2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxQYWdlQnV0dG9uXG4gICAgICAgICAgICBrZXk9eyBwYWdlUHJvcHMucGFnZSB9XG4gICAgICAgICAgICB7IC4uLnBhZ2VQcm9wcyB9XG4gICAgICAgICAgICBvblBhZ2VDaGFuZ2U9eyBwcm9wcy5vblBhZ2VDaGFuZ2UgfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9KVxuICAgIH1cbiAgPC91bD5cbik7XG5cblBhZ2luYXRvbkxpc3QucHJvcFR5cGVzID0ge1xuICBwYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBwYWdlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ub2RlLFxuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5zdHJpbmdcbiAgICBdKSxcbiAgICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0pKS5pc1JlcXVpcmVkLFxuICBvblBhZ2VDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHBhZ2VCdXR0b25SZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cblBhZ2luYXRvbkxpc3QuZGVmYXVsdFByb3BzID0ge1xuICBwYWdlQnV0dG9uUmVuZGVyZXI6IG51bGxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRvbkxpc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvcGFnaW5hdGlvbi1saXN0LmpzIiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBwYWdlUmVzb2x2ZXIgZnJvbSAnLi9wYWdlLXJlc29sdmVyJztcbmltcG9ydCBQYWdpbmF0aW9uVG90YWwgZnJvbSAnLi9wYWdpbmF0aW9uLXRvdGFsJztcblxuY29uc3QgcGFnaW5hdGlvblRvdGFsQWRhcHRlciA9IFdyYXBwZWRDb21wb25lbnQgPT5cbiAgY2xhc3MgUGFnaW5hdGlvblRvdGFsQWRhcHRlciBleHRlbmRzIHBhZ2VSZXNvbHZlcihDb21wb25lbnQpIHtcbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCBbZnJvbSwgdG9dID0gdGhpcy5jYWxjdWxhdGVGcm9tVG8oKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxXcmFwcGVkQ29tcG9uZW50XG4gICAgICAgICAgZnJvbT17IGZyb20gfVxuICAgICAgICAgIHRvPXsgdG8gfVxuICAgICAgICAgIGRhdGFTaXplPXsgdGhpcy5wcm9wcy5kYXRhU2l6ZSB9XG4gICAgICAgICAgcGFnaW5hdGlvblRvdGFsUmVuZGVyZXI9eyB0aGlzLnByb3BzLnBhZ2luYXRpb25Ub3RhbFJlbmRlcmVyIH1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG5cbmV4cG9ydCBjb25zdCBQYWdpbmF0aW9uVG90YWxXaXRoQWRhcHRlciA9IHBhZ2luYXRpb25Ub3RhbEFkYXB0ZXIoUGFnaW5hdGlvblRvdGFsKTtcbmV4cG9ydCBkZWZhdWx0IHBhZ2luYXRpb25Ub3RhbEFkYXB0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvcGFnaW5hdGlvbi10b3RhbC1hZGFwdGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IFBhZ2luYXRpb25Ub3RhbCA9IChwcm9wcykgPT4ge1xuICBpZiAocHJvcHMucGFnaW5hdGlvblRvdGFsUmVuZGVyZXIpIHtcbiAgICByZXR1cm4gcHJvcHMucGFnaW5hdGlvblRvdGFsUmVuZGVyZXIocHJvcHMuZnJvbSwgcHJvcHMudG8sIHByb3BzLmRhdGFTaXplKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlYWN0LWJvb3RzdHJhcC10YWJsZS1wYWdpbmF0aW9uLXRvdGFsXCI+XG4gICAgICAmbmJzcDtTaG93aW5nIHJvd3MgeyBwcm9wcy5mcm9tIH0gdG8mbmJzcDt7IHByb3BzLnRvIH0gb2YmbmJzcDt7IHByb3BzLmRhdGFTaXplIH1cbiAgICA8L3NwYW4+XG4gICk7XG59O1xuXG5QYWdpbmF0aW9uVG90YWwucHJvcFR5cGVzID0ge1xuICBmcm9tOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRvOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGRhdGFTaXplOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHBhZ2luYXRpb25Ub3RhbFJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuUGFnaW5hdGlvblRvdGFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgcGFnaW5hdGlvblRvdGFsUmVuZGVyZXI6IHVuZGVmaW5lZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvblRvdGFsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3Ivc3JjL3BhZ2luYXRpb24tdG90YWwuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjcmVhdGVCYXNlQ29udGV4dCBmcm9tICcuL3NyYy9zdGF0ZS1jb250ZXh0JztcbmltcG9ydCBjcmVhdGVEYXRhQ29udGV4dCBmcm9tICcuL3NyYy9kYXRhLWNvbnRleHQnO1xuaW1wb3J0IFBhZ2luYXRpb25MaXN0U3RhbmRhbG9uZSBmcm9tICcuL3NyYy9wYWdpbmF0aW9uLWxpc3Qtc3RhbmRhbG9uZSc7XG5pbXBvcnQgU2l6ZVBlclBhZ2VEcm9wZG93blN0YW5kYWxvbmUgZnJvbSAnLi9zcmMvc2l6ZS1wZXItcGFnZS1kcm9wZG93bi1zdGFuZGFsb25lJztcbmltcG9ydCBQYWdpbmF0aW9uVG90YWxTdGFuZGFsb25lIGZyb20gJy4vc3JjL3BhZ2luYXRpb24tdG90YWwtc3RhbmRhbG9uZSc7XG5cbmV4cG9ydCBkZWZhdWx0IChvcHRpb25zID0ge30pID0+ICh7XG4gIGNyZWF0ZUNvbnRleHQ6IGNyZWF0ZURhdGFDb250ZXh0LFxuICBvcHRpb25zXG59KTtcblxuY29uc3QgeyBQcm92aWRlciwgQ29uc3VtZXIgfSA9IGNyZWF0ZUJhc2VDb250ZXh0KCk7XG5cbmNvbnN0IEN1c3RvbWl6YWJsZVByb3ZpZGVyID0gcHJvcHMgPT4gKFxuICA8UHJvdmlkZXIgeyAuLi5wcm9wcyB9PlxuICAgIDxDb25zdW1lcj57IHBhZ2luYXRpb25Qcm9wcyA9PiBwcm9wcy5jaGlsZHJlbihwYWdpbmF0aW9uUHJvcHMpIH08L0NvbnN1bWVyPlxuICA8L1Byb3ZpZGVyPlxuKTtcblxuQ3VzdG9taXphYmxlUHJvdmlkZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGNvbnN0IFBhZ2luYXRpb25Qcm92aWRlciA9IEN1c3RvbWl6YWJsZVByb3ZpZGVyO1xuZXhwb3J0IHsgUGFnaW5hdGlvbkxpc3RTdGFuZGFsb25lLCBTaXplUGVyUGFnZURyb3Bkb3duU3RhbmRhbG9uZSwgUGFnaW5hdGlvblRvdGFsU3RhbmRhbG9uZSB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3IvaW5kZXguanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGludmFyaWFudChcbiAgICAgIGZhbHNlLFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW1cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGVtcHR5RnVuY3Rpb247XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xudmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbm1vZHVsZS5leHBvcnRzLm9uY2UgPSBvbmNlO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gX2dldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gX2dldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9IF9nZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gb25jZShlbWl0dGVyLCBuYW1lKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZnVuY3Rpb24gZXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgIGlmIChlcnJvckxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBlcnJvckxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9O1xuICAgIHZhciBlcnJvckxpc3RlbmVyO1xuXG4gICAgLy8gQWRkaW5nIGFuIGVycm9yIGxpc3RlbmVyIGlzIG5vdCBvcHRpb25hbCBiZWNhdXNlXG4gICAgLy8gaWYgYW4gZXJyb3IgaXMgdGhyb3duIG9uIGFuIGV2ZW50IGVtaXR0ZXIgd2UgY2Fubm90XG4gICAgLy8gZ3VhcmFudGVlIHRoYXQgdGhlIGFjdHVhbCBldmVudCB3ZSBhcmUgd2FpdGluZyB3aWxsXG4gICAgLy8gYmUgZmlyZWQuIFRoZSByZXN1bHQgY291bGQgYmUgYSBzaWxlbnQgd2F5IHRvIGNyZWF0ZVxuICAgIC8vIG1lbW9yeSBvciBmaWxlIGRlc2NyaXB0b3IgbGVha3MsIHdoaWNoIGlzIHNvbWV0aGluZ1xuICAgIC8vIHdlIHNob3VsZCBhdm9pZC5cbiAgICBpZiAobmFtZSAhPT0gJ2Vycm9yJykge1xuICAgICAgZXJyb3JMaXN0ZW5lciA9IGZ1bmN0aW9uIGVycm9yTGlzdGVuZXIoZXJyKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIobmFtZSwgZXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfTtcblxuICAgICAgZW1pdHRlci5vbmNlKCdlcnJvcicsIGVycm9yTGlzdGVuZXIpO1xuICAgIH1cblxuICAgIGVtaXR0ZXIub25jZShuYW1lLCBldmVudExpc3RlbmVyKTtcbiAgfSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG4vKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG4vKiBlc2xpbnQgbm8tbG9uZWx5LWlmOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IENvbnN0IGZyb20gJy4vY29uc3QnO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi9wYWdpbmF0aW9uJztcbmltcG9ydCB7IGdldEJ5Q3VyclBhZ2UsIGFsaWduUGFnZSB9IGZyb20gJy4vcGFnZSc7XG5pbXBvcnQgY3JlYXRlQmFzZUNvbnRleHQgZnJvbSAnLi9zdGF0ZS1jb250ZXh0JztcblxuY29uc3QgeyBQcm92aWRlciB9ID0gY3JlYXRlQmFzZUNvbnRleHQoKTtcblxuY29uc3QgUGFnaW5hdGlvbkRhdGFDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5jbGFzcyBQYWdpbmF0aW9uRGF0YVByb3ZpZGVyIGV4dGVuZHMgUHJvdmlkZXIge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIHJlbW90ZUVtaXR0ZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBpc1JlbW90ZVBhZ2luYXRpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2UsIHJlYWN0L3NvcnQtY29tcFxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBzdXBlci5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xuICAgIGNvbnN0IHsgY3VyclNpemVQZXJQYWdlIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgY3VzdG9tLCBvblBhZ2VDaGFuZ2UgfSA9IG5leHRQcm9wcy5wYWdpbmF0aW9uLm9wdGlvbnM7XG5cbiAgICBjb25zdCBwYWdlU3RhcnRJbmRleCA9IHR5cGVvZiBuZXh0UHJvcHMucGFnaW5hdGlvbi5vcHRpb25zLnBhZ2VTdGFydEluZGV4ICE9PSAndW5kZWZpbmVkJyA/XG4gICAgICBuZXh0UHJvcHMucGFnaW5hdGlvbi5vcHRpb25zLnBhZ2VTdGFydEluZGV4IDogQ29uc3QuUEFHRV9TVEFSVF9JTkRFWDtcblxuICAgIC8vIHVzZXIgc2hvdWxkIGFsaWduIHRoZSBwYWdlIHdoZW4gdGhlIHBhZ2UgaXMgbm90IGZpdCB0byB0aGUgZGF0YSBzaXplIHdoZW4gcmVtb3RlIGVuYWJsZVxuICAgIGlmICghdGhpcy5pc1JlbW90ZVBhZ2luYXRpb24oKSAmJiAhY3VzdG9tKSB7XG4gICAgICBjb25zdCBuZXdQYWdlID0gYWxpZ25QYWdlKFxuICAgICAgICBuZXh0UHJvcHMuZGF0YS5sZW5ndGgsXG4gICAgICAgIHRoaXMucHJvcHMuZGF0YS5sZW5ndGgsXG4gICAgICAgIHRoaXMuY3VyclBhZ2UsXG4gICAgICAgIGN1cnJTaXplUGVyUGFnZSxcbiAgICAgICAgcGFnZVN0YXJ0SW5kZXhcbiAgICAgICk7XG5cbiAgICAgIGlmICh0aGlzLmN1cnJQYWdlICE9PSBuZXdQYWdlKSB7XG4gICAgICAgIGlmIChvblBhZ2VDaGFuZ2UpIHtcbiAgICAgICAgICBvblBhZ2VDaGFuZ2UobmV3UGFnZSwgY3VyclNpemVQZXJQYWdlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJQYWdlID0gbmV3UGFnZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5leHRQcm9wcy5vbkRhdGFTaXplQ2hhbmdlICYmIG5leHRQcm9wcy5kYXRhLmxlbmd0aCAhPT0gdGhpcy5wcm9wcy5kYXRhLmxlbmd0aCkge1xuICAgICAgbmV4dFByb3BzLm9uRGF0YVNpemVDaGFuZ2UoeyBkYXRhU2l6ZTogbmV4dFByb3BzLmRhdGEubGVuZ3RoIH0pO1xuICAgIH1cbiAgfVxuXG4gIGlzUmVtb3RlUGFnaW5hdGlvbiA9ICgpID0+IHRoaXMucHJvcHMuaXNSZW1vdGVQYWdpbmF0aW9uKCk7XG5cbiAgcmVuZGVyRGVmYXVsdFBhZ2luYXRpb24gPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnByb3BzLnBhZ2luYXRpb24ub3B0aW9ucy5jdXN0b20pIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcGFnZTogY3VyclBhZ2UsXG4gICAgICAgIHNpemVQZXJQYWdlOiBjdXJyU2l6ZVBlclBhZ2UsXG4gICAgICAgIGRhdGFTaXplLFxuICAgICAgICAuLi5yZXN0XG4gICAgICB9ID0gdGhpcy5nZXRQYWdpbmF0aW9uUHJvcHMoKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgeyAuLi5yZXN0IH1cbiAgICAgICAgICBrZXk9XCJwYWdpbmF0aW9uXCJcbiAgICAgICAgICBkYXRhU2l6ZT17IGRhdGFTaXplIHx8IHRoaXMucHJvcHMuZGF0YS5sZW5ndGggfVxuICAgICAgICAgIGN1cnJQYWdlPXsgY3VyclBhZ2UgfVxuICAgICAgICAgIGN1cnJTaXplUGVyUGFnZT17IGN1cnJTaXplUGVyUGFnZSB9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcGFnaW5hdGlvbjogeyBvcHRpb25zIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjdXJyUGFnZSwgY3VyclNpemVQZXJQYWdlIH0gPSB0aGlzO1xuICAgIGNvbnN0IHBhZ2VTdGFydEluZGV4ID0gdHlwZW9mIG9wdGlvbnMucGFnZVN0YXJ0SW5kZXggPT09ICd1bmRlZmluZWQnID9cbiAgICAgIENvbnN0LlBBR0VfU1RBUlRfSU5ERVggOiBvcHRpb25zLnBhZ2VTdGFydEluZGV4O1xuXG4gICAgZGF0YSA9IHRoaXMuaXNSZW1vdGVQYWdpbmF0aW9uKCkgP1xuICAgICAgZGF0YSA6XG4gICAgICBnZXRCeUN1cnJQYWdlKFxuICAgICAgICBkYXRhLFxuICAgICAgICBjdXJyUGFnZSxcbiAgICAgICAgY3VyclNpemVQZXJQYWdlLFxuICAgICAgICBwYWdlU3RhcnRJbmRleFxuICAgICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFnaW5hdGlvbkRhdGFDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXsgeyBkYXRhLCBzZXRSZW1vdGVFbWl0dGVyOiB0aGlzLnNldFJlbW90ZUVtaXR0ZXIgfSB9PlxuICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICB7IHRoaXMucmVuZGVyRGVmYXVsdFBhZ2luYXRpb24oKSB9XG4gICAgICA8L1BhZ2luYXRpb25EYXRhQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+ICh7XG4gIFByb3ZpZGVyOiBQYWdpbmF0aW9uRGF0YVByb3ZpZGVyLFxuICBDb25zdW1lcjogUGFnaW5hdGlvbkRhdGFDb250ZXh0LkNvbnN1bWVyXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9kYXRhLWNvbnRleHQuanMiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG4vKiBlc2xpbnQgYXJyb3ctYm9keS1zdHlsZTogMCAqL1xuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgcGFnZVJlc29sdmVyIGZyb20gJy4vcGFnZS1yZXNvbHZlcic7XG5pbXBvcnQgcGFnaW5hdGlvbkhhbmRsZXIgZnJvbSAnLi9wYWdpbmF0aW9uLWhhbmRsZXInO1xuaW1wb3J0IHsgU2l6ZVBlclBhZ2VEcm9wZG93bldpdGhBZGFwdGVyIH0gZnJvbSAnLi9zaXplLXBlci1wYWdlLWRyb3Bkb3duLWFkYXB0ZXInO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkxpc3RXaXRoQWRhcHRlciB9IGZyb20gJy4vcGFnaW5hdGlvbi1saXN0LWFkYXB0ZXInO1xuaW1wb3J0IHsgUGFnaW5hdGlvblRvdGFsV2l0aEFkYXB0ZXIgfSBmcm9tICcuL3BhZ2luYXRpb24tdG90YWwtYWRhcHRlcic7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9jb25zdCc7XG5cbmNsYXNzIFBhZ2luYXRpb24gZXh0ZW5kcyBwYWdlUmVzb2x2ZXIoQ29tcG9uZW50KSB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0YWJsZUlkLFxuICAgICAgY3VyclBhZ2UsXG4gICAgICBwYWdlU3RhcnRJbmRleCxcbiAgICAgIHNob3dUb3RhbCxcbiAgICAgIGRhdGFTaXplLFxuICAgICAgcGFnZUxpc3RSZW5kZXJlcixcbiAgICAgIHBhZ2VCdXR0b25SZW5kZXJlcixcbiAgICAgIHBhZ2luYXRpb25Ub3RhbFJlbmRlcmVyLFxuICAgICAgaGlkZVBhZ2VMaXN0T25seU9uZVBhZ2UsXG4gICAgICB0b3RhbFBhZ2VzLFxuICAgICAgbGFzdFBhZ2UsXG4gICAgICBvblBhZ2VDaGFuZ2UsXG4gICAgICBzaXplUGVyUGFnZUxpc3QsXG4gICAgICBjdXJyU2l6ZVBlclBhZ2UsXG4gICAgICBoaWRlU2l6ZVBlclBhZ2UsXG4gICAgICBzaXplUGVyUGFnZVJlbmRlcmVyLFxuICAgICAgc2l6ZVBlclBhZ2VPcHRpb25SZW5kZXJlcixcbiAgICAgIG9uU2l6ZVBlclBhZ2VDaGFuZ2UsXG4gICAgICBib290c3RyYXA0LFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgcGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVBhZ2VTdGF0dXModGhpcy5jYWxjdWxhdGVQYWdlcyh0b3RhbFBhZ2VzLCBsYXN0UGFnZSksIGxhc3RQYWdlKTtcbiAgICBjb25zdCBwYWdlTGlzdENsYXNzID0gY3MoXG4gICAgICAncmVhY3QtYm9vdHN0cmFwLXRhYmxlLXBhZ2luYXRpb24tbGlzdCcsXG4gICAgICAnY29sLW1kLTYgY29sLXhzLTYgY29sLXNtLTYgY29sLWxnLTYnLCB7XG4gICAgICAgICdyZWFjdC1ib290c3RyYXAtdGFibGUtcGFnaW5hdGlvbi1saXN0LWhpZGRlbic6IChoaWRlUGFnZUxpc3RPbmx5T25lUGFnZSAmJiB0b3RhbFBhZ2VzID09PSAxKVxuICAgICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJlYWN0LWJvb3RzdHJhcC10YWJsZS1wYWdpbmF0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXhzLTYgY29sLXNtLTYgY29sLWxnLTZcIj5cbiAgICAgICAgICA8U2l6ZVBlclBhZ2VEcm9wZG93bldpdGhBZGFwdGVyXG4gICAgICAgICAgICBib290c3RyYXA0PXsgYm9vdHN0cmFwNCB9XG4gICAgICAgICAgICB0YWJsZUlkPXsgdGFibGVJZCB9XG4gICAgICAgICAgICBzaXplUGVyUGFnZUxpc3Q9eyBzaXplUGVyUGFnZUxpc3QgfVxuICAgICAgICAgICAgY3VyclNpemVQZXJQYWdlPXsgY3VyclNpemVQZXJQYWdlIH1cbiAgICAgICAgICAgIGhpZGVTaXplUGVyUGFnZT17IGhpZGVTaXplUGVyUGFnZSB9XG4gICAgICAgICAgICBzaXplUGVyUGFnZVJlbmRlcmVyPXsgc2l6ZVBlclBhZ2VSZW5kZXJlciB9XG4gICAgICAgICAgICBzaXplUGVyUGFnZU9wdGlvblJlbmRlcmVyPXsgc2l6ZVBlclBhZ2VPcHRpb25SZW5kZXJlciB9XG4gICAgICAgICAgICBvblNpemVQZXJQYWdlQ2hhbmdlPXsgb25TaXplUGVyUGFnZUNoYW5nZSB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzaG93VG90YWwgP1xuICAgICAgICAgICAgICA8UGFnaW5hdGlvblRvdGFsV2l0aEFkYXB0ZXJcbiAgICAgICAgICAgICAgICBjdXJyUGFnZT17IGN1cnJQYWdlIH1cbiAgICAgICAgICAgICAgICBjdXJyU2l6ZVBlclBhZ2U9eyBjdXJyU2l6ZVBlclBhZ2UgfVxuICAgICAgICAgICAgICAgIHBhZ2VTdGFydEluZGV4PXsgcGFnZVN0YXJ0SW5kZXggfVxuICAgICAgICAgICAgICAgIGRhdGFTaXplPXsgZGF0YVNpemUgfVxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb25Ub3RhbFJlbmRlcmVyPXsgcGFnaW5hdGlvblRvdGFsUmVuZGVyZXIgfVxuICAgICAgICAgICAgICAvPiA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgcGFnZUxpc3RSZW5kZXJlciA/IHBhZ2VMaXN0UmVuZGVyZXIoe1xuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBvblBhZ2VDaGFuZ2VcbiAgICAgICAgICB9KSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgcGFnZUxpc3RDbGFzcyB9PlxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbkxpc3RXaXRoQWRhcHRlclxuICAgICAgICAgICAgICAgIHsgLi4ucmVzdCB9XG4gICAgICAgICAgICAgICAgY3VyclBhZ2U9eyBjdXJyUGFnZSB9XG4gICAgICAgICAgICAgICAgY3VyclNpemVQZXJQYWdlPXsgY3VyclNpemVQZXJQYWdlIH1cbiAgICAgICAgICAgICAgICBwYWdlU3RhcnRJbmRleD17IHBhZ2VTdGFydEluZGV4IH1cbiAgICAgICAgICAgICAgICBsYXN0UGFnZT17IGxhc3RQYWdlIH1cbiAgICAgICAgICAgICAgICB0b3RhbFBhZ2VzPXsgdG90YWxQYWdlcyB9XG4gICAgICAgICAgICAgICAgcGFnZUJ1dHRvblJlbmRlcmVyPXsgcGFnZUJ1dHRvblJlbmRlcmVyIH1cbiAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9eyBvblBhZ2VDaGFuZ2UgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblBhZ2luYXRpb24ucHJvcFR5cGVzID0ge1xuICBkYXRhU2l6ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBzaXplUGVyUGFnZUxpc3Q6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBjdXJyUGFnZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBjdXJyU2l6ZVBlclBhZ2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgb25QYWdlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvblNpemVQZXJQYWdlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBkaXNhYmxlUGFnZVRpdGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgcGFnZVN0YXJ0SW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIHBhZ2luYXRpb25TaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzaG93VG90YWw6IFByb3BUeXBlcy5ib29sLFxuICBwYWdlTGlzdFJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgcGFnZUJ1dHRvblJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2l6ZVBlclBhZ2VSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIHBhZ2luYXRpb25Ub3RhbFJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2l6ZVBlclBhZ2VPcHRpb25SZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGZpcnN0UGFnZVRleHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG4gIHByZVBhZ2VUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuICBuZXh0UGFnZVRleHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG4gIGxhc3RQYWdlVGV4dDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcbiAgbmV4dFBhZ2VUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJlUGFnZVRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmaXJzdFBhZ2VUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFzdFBhZ2VUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgd2l0aEZpcnN0QW5kTGFzdDogUHJvcFR5cGVzLmJvb2wsXG4gIGFsd2F5c1Nob3dBbGxCdG5zOiBQcm9wVHlwZXMuYm9vbCxcbiAgaGlkZVNpemVQZXJQYWdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgaGlkZVBhZ2VMaXN0T25seU9uZVBhZ2U6IFByb3BUeXBlcy5ib29sLFxuICBib290c3RyYXA0OiBQcm9wVHlwZXMuYm9vbFxufTtcblxuUGFnaW5hdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVQYWdlVGl0bGU6IGZhbHNlLFxuICBib290c3RyYXA0OiBmYWxzZSxcbiAgcGFnZVN0YXJ0SW5kZXg6IENvbnN0LlBBR0VfU1RBUlRfSU5ERVgsXG4gIHBhZ2luYXRpb25TaXplOiBDb25zdC5QQUdJTkFUSU9OX1NJWkUsXG4gIHdpdGhGaXJzdEFuZExhc3Q6IENvbnN0LldpdGhfRklSU1RfQU5EX0xBU1QsXG4gIGFsd2F5c1Nob3dBbGxCdG5zOiBDb25zdC5TSE9XX0FMTF9QQUdFX0JUTlMsXG4gIHNob3dUb3RhbDogQ29uc3QuU0hPV19UT1RBTCxcbiAgcGFnZUxpc3RSZW5kZXJlcjogbnVsbCxcbiAgcGFnZUJ1dHRvblJlbmRlcmVyOiBudWxsLFxuICBzaXplUGVyUGFnZVJlbmRlcmVyOiBudWxsLFxuICBwYWdpbmF0aW9uVG90YWxSZW5kZXJlcjogQ29uc3QuUEFHSU5BVElPTl9UT1RBTCxcbiAgc2l6ZVBlclBhZ2VPcHRpb25SZW5kZXJlcjogbnVsbCxcbiAgZmlyc3RQYWdlVGV4dDogQ29uc3QuRklSU1RfUEFHRV9URVhULFxuICBwcmVQYWdlVGV4dDogQ29uc3QuUFJFX1BBR0VfVEVYVCxcbiAgbmV4dFBhZ2VUZXh0OiBDb25zdC5ORVhUX1BBR0VfVEVYVCxcbiAgbGFzdFBhZ2VUZXh0OiBDb25zdC5MQVNUX1BBR0VfVEVYVCxcbiAgc2l6ZVBlclBhZ2VMaXN0OiBDb25zdC5TSVpFX1BFUl9QQUdFX0xJU1QsXG4gIG5leHRQYWdlVGl0bGU6IENvbnN0Lk5FWFRfUEFHRV9USVRMRSxcbiAgcHJlUGFnZVRpdGxlOiBDb25zdC5QUkVfUEFHRV9USVRMRSxcbiAgZmlyc3RQYWdlVGl0bGU6IENvbnN0LkZJUlNUX1BBR0VfVElUTEUsXG4gIGxhc3RQYWdlVGl0bGU6IENvbnN0LkxBU1RfUEFHRV9USVRMRSxcbiAgaGlkZVNpemVQZXJQYWdlOiBDb25zdC5ISURFX1NJWkVfUEVSX1BBR0UsXG4gIGhpZGVQYWdlTGlzdE9ubHlPbmVQYWdlOiBDb25zdC5ISURFX1BBR0VfTElTVF9PTkxZX09ORV9QQUdFXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYWdpbmF0aW9uSGFuZGxlcihQYWdpbmF0aW9uKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9wYWdpbmF0aW9uLmpzIiwiLyogZXNsaW50IGpzeC1hMTF5L2hyZWYtbm8taGFzaDogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IFNpemVQZXJQYWdlT3B0aW9uID0gKHtcbiAgdGV4dCxcbiAgcGFnZSxcbiAgb25TaXplUGVyUGFnZUNoYW5nZSxcbiAgYm9vdHN0cmFwNFxufSkgPT4gKGJvb3RzdHJhcDQgPyAoXG4gIDxhXG4gICAgaHJlZj1cIiNcIlxuICAgIHRhYkluZGV4PVwiLTFcIlxuICAgIHJvbGU9XCJtZW51aXRlbVwiXG4gICAgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiXG4gICAgZGF0YS1wYWdlPXsgcGFnZSB9XG4gICAgb25Nb3VzZURvd249eyAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgb25TaXplUGVyUGFnZUNoYW5nZShwYWdlKTtcbiAgICB9IH1cbiAgPlxuICAgIHsgdGV4dCB9XG4gIDwvYT5cbikgOiAoXG4gIDxsaVxuICAgIGtleT17IHRleHQgfVxuICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIlxuICA+XG4gICAgPGFcbiAgICAgIGhyZWY9XCIjXCJcbiAgICAgIHRhYkluZGV4PVwiLTFcIlxuICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcbiAgICAgIGRhdGEtcGFnZT17IHBhZ2UgfVxuICAgICAgb25Nb3VzZURvd249eyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG9uU2l6ZVBlclBhZ2VDaGFuZ2UocGFnZSk7XG4gICAgICB9IH1cbiAgICA+XG4gICAgICB7IHRleHQgfVxuICAgIDwvYT5cbiAgPC9saT5cbikpO1xuXG5TaXplUGVyUGFnZU9wdGlvbi5wcm9wVHlwZXMgPSB7XG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcGFnZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBvblNpemVQZXJQYWdlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBib290c3RyYXA0OiBQcm9wVHlwZXMuYm9vbFxufTtcblxuU2l6ZVBlclBhZ2VPcHRpb24uZGVmYXVsdFByb3BzID0ge1xuICBib290c3RyYXA0OiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2l6ZVBlclBhZ2VPcHRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvc2l6ZS1wZXItcGFnZS1vcHRpb24uanMiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG4vKiBlc2xpbnQganN4LWExMXkvaHJlZi1uby1oYXNoOiAwICovXG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgUGFnZUJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25QYWdlQ2hhbmdlKHRoaXMucHJvcHMucGFnZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGFnZSxcbiAgICAgIHRpdGxlLFxuICAgICAgYWN0aXZlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBjbGFzc05hbWVcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjbGFzc2VzID0gY3Moe1xuICAgICAgYWN0aXZlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICAncGFnZS1pdGVtJzogdHJ1ZVxuICAgIH0sIGNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT17IGNsYXNzZXMgfSB0aXRsZT17IHRpdGxlIH0+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17IHRoaXMuaGFuZGxlQ2xpY2sgfSBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIj57IHBhZ2UgfTwvYT5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufVxuXG5QYWdlQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgb25QYWdlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwYWdlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5zdHJpbmdcbiAgXSkuaXNSZXF1aXJlZCxcbiAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUJ1dHRvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9wYWdlLWJ1dHRvbi5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFnaW5hdGlvbkxpc3QgZnJvbSAnLi9wYWdpbmF0aW9uLWxpc3QnO1xuaW1wb3J0IHN0YW5kYWxvbmVBZGFwdGVyIGZyb20gJy4vc3RhbmRhbG9uZS1hZGFwdGVyJztcbmltcG9ydCBQYWdpbmF0aW9uSGFuZGxlciBmcm9tICcuL3BhZ2luYXRpb24taGFuZGxlcic7XG5pbXBvcnQgcGFnaW5hdGlvbkxpc3RBZGFwdGVyIGZyb20gJy4vcGFnaW5hdGlvbi1saXN0LWFkYXB0ZXInO1xuXG5jb25zdCBQYWdpbmF0aW9uTGlzdFN0YW5kYWxvbmUgPSBwcm9wcyA9PiAoXG4gIDxQYWdpbmF0aW9uTGlzdCB7IC4uLnByb3BzIH0gLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0XG5zdGFuZGFsb25lQWRhcHRlcihQYWdpbmF0aW9uSGFuZGxlcihwYWdpbmF0aW9uTGlzdEFkYXB0ZXIoUGFnaW5hdGlvbkxpc3RTdGFuZGFsb25lKSkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3Ivc3JjL3BhZ2luYXRpb24tbGlzdC1zdGFuZGFsb25lLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaXplUGVyUGFnZURyb3Bkb3duIGZyb20gJy4vc2l6ZS1wZXItcGFnZS1kcm9wZG93bic7XG5pbXBvcnQgc3RhbmRhbG9uZUFkYXB0ZXIgZnJvbSAnLi9zdGFuZGFsb25lLWFkYXB0ZXInO1xuaW1wb3J0IHBhZ2luYXRpb25IYW5kbGVyIGZyb20gJy4vcGFnaW5hdGlvbi1oYW5kbGVyJztcbmltcG9ydCBzaXplUGVyUGFnZURyb3Bkb3duQWRhcHRlciBmcm9tICcuL3NpemUtcGVyLXBhZ2UtZHJvcGRvd24tYWRhcHRlcic7XG5cbmNvbnN0IFNpemVQZXJQYWdlRHJvcGRvd25TdGFuZGFsb25lID0gcHJvcHMgPT4gKFxuICA8U2l6ZVBlclBhZ2VEcm9wZG93biB7IC4uLnByb3BzIH0gLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0XG5zdGFuZGFsb25lQWRhcHRlcihwYWdpbmF0aW9uSGFuZGxlcihzaXplUGVyUGFnZURyb3Bkb3duQWRhcHRlcihTaXplUGVyUGFnZURyb3Bkb3duU3RhbmRhbG9uZSkpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9zaXplLXBlci1wYWdlLWRyb3Bkb3duLXN0YW5kYWxvbmUuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhZ2luYXRpb25Ub3RhbCBmcm9tICcuL3BhZ2luYXRpb24tdG90YWwnO1xuaW1wb3J0IHN0YW5kYWxvbmVBZGFwdGVyIGZyb20gJy4vc3RhbmRhbG9uZS1hZGFwdGVyJztcbmltcG9ydCBwYWdpbmF0aW9uVG90YWxBZGFwdGVyIGZyb20gJy4vcGFnaW5hdGlvbi10b3RhbC1hZGFwdGVyJztcblxuY29uc3QgUGFnaW5hdGlvblRvdGFsU3RhbmRhbG9uZSA9IHByb3BzID0+IChcbiAgPFBhZ2luYXRpb25Ub3RhbCB7IC4uLnByb3BzIH0gLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0XG5zdGFuZGFsb25lQWRhcHRlcihwYWdpbmF0aW9uVG90YWxBZGFwdGVyKFBhZ2luYXRpb25Ub3RhbFN0YW5kYWxvbmUpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9wYWdpbmF0aW9uLXRvdGFsLXN0YW5kYWxvbmUuanMiXSwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=react-bootstrap-table2-paginator.js.map