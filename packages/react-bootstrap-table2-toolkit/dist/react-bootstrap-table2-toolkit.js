(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapTable2Toolkit"] = factory(require("react"));
	else
		root["ReactBootstrapTable2Toolkit"] = factory(root["React"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
  module.exports = __webpack_require__(6)();
}


/***/ }),
/* 2 */
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

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _statelessOp = __webpack_require__(15);

var _statelessOp2 = _interopRequireDefault(_statelessOp);

var _context = __webpack_require__(21);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-param-reassign: 0 */

var ToolkitContext = _react2.default.createContext();

var ToolkitProvider = function (_statelessDecorator) {
  _inherits(ToolkitProvider, _statelessDecorator);

  function ToolkitProvider(props) {
    _classCallCheck(this, ToolkitProvider);

    var _this = _possibleConstructorReturn(this, (ToolkitProvider.__proto__ || Object.getPrototypeOf(ToolkitProvider)).call(this, props));

    var state = {};
    _this._ = null;
    _this.onClear = _this.onClear.bind(_this);
    _this.onSearch = _this.onSearch.bind(_this);
    _this.onColumnToggle = _this.onColumnToggle.bind(_this);
    _this.setDependencyModules = _this.setDependencyModules.bind(_this);

    if (props.columnToggle) {
      state.columnToggle = props.columns.reduce(function (obj, column) {
        obj[column.dataField] = !column.hidden;
        return obj;
      }, {});
    }
    state.searchText = _typeof(props.search) === 'object' ? props.search.defaultSearch || '' : '';
    _this.state = state;
    return _this;
  }

  // eslint-disable-next-line camelcase


  _createClass(ToolkitProvider, [{
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var columnToggle = this.state.columnToggle;
      if (nextProps.columnToggle) {
        columnToggle = nextProps.columns.reduce(function (obj, column) {
          obj[column.dataField] = !column.hidden;
          return obj;
        }, {});
      } else {
        columnToggle = null;
      }
      this.setState(_extends({}, this.state, {
        columnToggle: columnToggle
      }));
    }
  }, {
    key: 'onSearch',
    value: function onSearch(searchText) {
      if (searchText !== this.state.searchText) {
        this.setState({ searchText: searchText });
      }
    }
  }, {
    key: 'onClear',
    value: function onClear() {
      this.setState({ searchText: '' });
    }
  }, {
    key: 'onColumnToggle',
    value: function onColumnToggle(dataField) {
      var columnToggle = this.state.columnToggle;

      columnToggle[dataField] = !columnToggle[dataField];
      this.setState(_extends({}, this.state, {
        columnToggle: columnToggle
      }));
    }
    /**
     * 
     * @param {*} _ 
     * this function will be called only one time when table render
     * react-bootstrap-table-next/src/context/index.js will call this cb for passing the _ module
     * Please consider to extract a common module to handle _ module.
     * this is just a quick fix
     */

  }, {
    key: 'setDependencyModules',
    value: function setDependencyModules(_) {
      this._ = _;
    }
  }, {
    key: 'render',
    value: function render() {
      var baseProps = {
        keyField: this.props.keyField,
        columns: this.props.columns,
        data: this.props.data,
        bootstrap4: this.props.bootstrap4,
        setDependencyModules: this.setDependencyModules,
        registerExposedAPI: this.registerExposedAPI
      };
      if (this.props.search) {
        baseProps.search = {
          searchContext: (0, _context2.default)(this.props.search),
          searchText: this.state.searchText
        };
      }
      if (this.props.columnToggle) {
        baseProps.columnToggle = {
          toggles: this.state.columnToggle
        };
      }
      return _react2.default.createElement(
        ToolkitContext.Provider,
        { value: {
            searchProps: {
              searchText: this.state.searchText,
              onSearch: this.onSearch,
              onClear: this.onClear
            },
            csvProps: {
              onExport: this.handleExportCSV
            },
            columnToggleProps: {
              columns: this.props.columns,
              toggles: this.state.columnToggle,
              onColumnToggle: this.onColumnToggle
            },
            baseProps: baseProps
          }
        },
        this.props.children
      );
    }
  }]);

  return ToolkitProvider;
}((0, _statelessOp2.default)(_react2.default.Component));

ToolkitProvider.propTypes = {
  keyField: _propTypes2.default.string.isRequired,
  data: _propTypes2.default.array.isRequired,
  columns: _propTypes2.default.array.isRequired,
  children: _propTypes2.default.node.isRequired,
  bootstrap4: _propTypes2.default.bool,
  search: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
    defaultSearch: _propTypes2.default.string,
    searchFormatted: _propTypes2.default.bool
  })]),
  exportCSV: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
    fileName: _propTypes2.default.string,
    separator: _propTypes2.default.string,
    ignoreHeader: _propTypes2.default.bool,
    ignoreFooter: _propTypes2.default.bool,
    noAutoBOM: _propTypes2.default.bool,
    blobType: _propTypes2.default.string,
    exportAll: _propTypes2.default.bool,
    onlyExportFiltered: _propTypes2.default.bool,
    onlyExportSelection: _propTypes2.default.bool
  })])
};
ToolkitProvider.defaultProps = {
  search: false,
  exportCSV: false,
  bootstrap4: false
};
exports.default = {
  Provider: ToolkitProvider,
  Consumer: ToolkitContext.Consumer
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColumnToggle = exports.CSVExport = exports.Search = exports.ToolkitContext = undefined;

var _search = __webpack_require__(4);

Object.defineProperty(exports, 'Search', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_search).default;
  }
});

var _csv = __webpack_require__(11);

Object.defineProperty(exports, 'CSVExport', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_csv).default;
  }
});

var _columnToggle = __webpack_require__(13);

Object.defineProperty(exports, 'ColumnToggle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_columnToggle).default;
  }
});

var _context = __webpack_require__(2);

var _context2 = _interopRequireDefault(_context);

var _provider = __webpack_require__(22);

var _provider2 = _interopRequireDefault(_provider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _provider2.default;
var ToolkitContext = exports.ToolkitContext = _context2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SearchBar = __webpack_require__(5);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _clearButton = __webpack_require__(10);

var _clearButton2 = _interopRequireDefault(_clearButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { SearchBar: _SearchBar2.default, ClearSearchButton: _clearButton2.default };

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _arguments = arguments; /* eslint camelcase: 0 */
/* eslint no-return-assign: 0 */

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var handleDebounce = function handleDebounce(func, wait, immediate) {
  var timeout = void 0;

  return function () {
    var later = function later() {
      timeout = null;

      if (!immediate) {
        func.apply(undefined, _arguments);
      }
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait || 0);

    if (callNow) {
      func.appy(undefined, _arguments);
    }
  };
};

var SearchBar = function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

    _this.onChangeValue = function (e) {
      _this.setState({ value: e.target.value });
    };

    _this.onKeyup = function () {
      var _this$props = _this.props,
          delay = _this$props.delay,
          onSearch = _this$props.onSearch;

      var debounceCallback = handleDebounce(function () {
        onSearch(_this.input.value);
      }, delay);
      debounceCallback();
    };

    _this.state = {
      value: props.searchText
    };
    return _this;
  }

  _createClass(SearchBar, [{
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.setState({ value: nextProps.searchText });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          style = _props.style,
          placeholder = _props.placeholder,
          tableId = _props.tableId,
          srText = _props.srText;


      return _react2.default.createElement(
        'label',
        {
          htmlFor: 'search-bar-' + tableId,
          className: 'search-label'
        },
        _react2.default.createElement(
          'span',
          { id: 'search-bar-' + tableId + '-label', className: 'sr-only' },
          srText
        ),
        _react2.default.createElement('input', {
          ref: function ref(n) {
            return _this2.input = n;
          },
          id: 'search-bar-' + tableId,
          type: 'text',
          style: style,
          'aria-labelledby': 'search-bar-' + tableId + '-label',
          onKeyUp: function onKeyUp() {
            return _this2.onKeyup();
          },
          onChange: this.onChangeValue,
          className: 'form-control ' + className,
          value: this.state.value,
          placeholder: placeholder || SearchBar.defaultProps.placeholder
        })
      );
    }
  }]);

  return SearchBar;
}(_react2.default.Component);

SearchBar.propTypes = {
  onSearch: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  style: _propTypes2.default.object,
  delay: _propTypes2.default.number,
  searchText: _propTypes2.default.string,
  tableId: _propTypes2.default.string,
  srText: _propTypes2.default.string
};

SearchBar.defaultProps = {
  className: '',
  style: {},
  placeholder: 'Search',
  delay: 250,
  searchText: '',
  tableId: '0',
  srText: 'Search this table'
};

exports.default = SearchBar;

/***/ }),
/* 6 */
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



var emptyFunction = __webpack_require__(7);
var invariant = __webpack_require__(8);
var ReactPropTypesSecret = __webpack_require__(9);

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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
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

var ClearButton = function ClearButton(_ref) {
  var onClear = _ref.onClear,
      text = _ref.text,
      className = _ref.className;
  return _react2.default.createElement(
    'button',
    { className: 'btn btn-default ' + className, onClick: onClear },
    text
  );
};

ClearButton.propTypes = {
  onClear: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  text: _propTypes2.default.string
};

ClearButton.defaultProps = {
  text: 'Clear',
  className: ''
};

exports.default = ClearButton;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(12);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { ExportCSVButton: _button2.default };

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ExportCSVButton = function ExportCSVButton(props) {
  var onExport = props.onExport,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, ['onExport', 'children', 'className']);

  return _react2.default.createElement(
    'button',
    _extends({
      type: 'button',
      className: 'react-bs-table-csv-btn btn btn-default ' + className,
      onClick: function onClick() {
        return onExport();
      }
    }, rest),
    children
  );
};

ExportCSVButton.propTypes = {
  children: _propTypes2.default.node.isRequired,
  onExport: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
};
ExportCSVButton.defaultProps = {
  className: '',
  style: {}
};

exports.default = ExportCSVButton;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toggleList = __webpack_require__(14);

var _toggleList2 = _interopRequireDefault(_toggleList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { ToggleList: _toggleList2.default };

/***/ }),
/* 14 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleList = function ToggleList(_ref) {
  var columns = _ref.columns,
      onColumnToggle = _ref.onColumnToggle,
      toggles = _ref.toggles,
      contextual = _ref.contextual,
      className = _ref.className,
      btnClassName = _ref.btnClassName;
  return _react2.default.createElement(
    'div',
    { className: 'btn-group btn-group-toggle ' + className, 'data-toggle': 'buttons' },
    columns.map(function (column) {
      return _extends({}, column, {
        toggle: toggles[column.dataField]
      });
    }).map(function (column) {
      return _react2.default.createElement(
        'button',
        {
          type: 'button',
          key: column.dataField,
          className: btnClassName + ' btn btn-' + contextual + ' ' + (column.toggle ? 'active' : ''),
          'data-toggle': 'button',
          'aria-pressed': column.toggle ? 'true' : 'false',
          onClick: function onClick() {
            return onColumnToggle(column.dataField);
          }
        },
        column.text
      );
    })
  );
};

ToggleList.propTypes = {
  columns: _propTypes2.default.array.isRequired,
  toggles: _propTypes2.default.object.isRequired,
  onColumnToggle: _propTypes2.default.func.isRequired,
  btnClassName: _propTypes2.default.string,
  className: _propTypes2.default.string,
  contextual: _propTypes2.default.string
};

ToggleList.defaultProps = {
  btnClassName: '',
  className: '',
  contextual: 'primary'
};

exports.default = ToggleList;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _op = __webpack_require__(16);

var _op2 = _interopRequireDefault(_op);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (Base) {
  return function (_Operation$csvOperati) {
    _inherits(StatelessOperation, _Operation$csvOperati);

    function StatelessOperation() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, StatelessOperation);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StatelessOperation.__proto__ || Object.getPrototypeOf(StatelessOperation)).call.apply(_ref, [this].concat(args))), _this), _this.registerExposedAPI = function (tableExposedAPIEmitter) {
        _this.tableExposedAPIEmitter = tableExposedAPIEmitter;
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return StatelessOperation;
  }(_op2.default.csvOperation(Base));
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _csv = __webpack_require__(17);

var _csv2 = _interopRequireDefault(_csv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  csvOperation: _csv2.default
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _exporter = __webpack_require__(18);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var csvDefaultOptions = {
  fileName: 'spreadsheet.csv',
  separator: ',',
  ignoreHeader: false,
  ignoreFooter: true,
  noAutoBOM: true,
  blobType: 'text/plain;charset=utf-8',
  exportAll: true,
  onlyExportSelection: false
};

exports.default = function (Base) {
  return function (_Base) {
    _inherits(CSVOperation, _Base);

    function CSVOperation() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, CSVOperation);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CSVOperation.__proto__ || Object.getPrototypeOf(CSVOperation)).call.apply(_ref, [this].concat(args))), _this), _this.handleExportCSV = function (source) {
        var _this$props = _this.props,
            columns = _this$props.columns,
            exportCSV = _this$props.exportCSV,
            keyField = _this$props.keyField;

        var meta = (0, _exporter.getMetaInfo)(columns);
        var options = exportCSV === true ? csvDefaultOptions : _extends({}, csvDefaultOptions, exportCSV);

        // get data for csv export
        var data = void 0;
        if (typeof source !== 'undefined') {
          data = source;
        } else if (options.exportAll) {
          data = _this.props.data;
        } else if (options.onlyExportFiltered) {
          var payload = {};
          _this.tableExposedAPIEmitter.emit('get.filtered.rows', payload);
          data = payload.result;
        } else {
          var _payload = {};
          _this.tableExposedAPIEmitter.emit('get.table.data', _payload);
          data = _payload.result;
        }

        // filter data by row selection
        if (options.onlyExportSelection) {
          var _payload2 = {};
          _this.tableExposedAPIEmitter.emit('get.selected.rows', _payload2);
          var selections = _payload2.result;
          data = data.filter(function (row) {
            return !!selections.find(function (sel) {
              return row[keyField] === sel;
            });
          });
        }

        var content = (0, _exporter.transform)(data, meta, columns, _this._, options);
        (0, _exporter.save)(content, options);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return CSVOperation;
  }(Base);
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.save = exports.transform = exports.getMetaInfo = undefined;

var _fileSaver = __webpack_require__(19);

var _fileSaver2 = _interopRequireDefault(_fileSaver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getMetaInfo = exports.getMetaInfo = function getMetaInfo(columns) {
  return columns.map(function (column) {
    return {
      field: column.dataField,
      type: column.csvType || String,
      formatter: column.csvFormatter,
      formatExtraData: column.formatExtraData,
      header: column.csvText || column.text,
      export: column.csvExport === false ? false : true,
      row: Number(column.row) || 0,
      rowSpan: Number(column.rowSpan) || 1,
      colSpan: Number(column.colSpan) || 1,
      footer: column.footer,
      footerFormatter: column.footerFormatter
    };
  }).filter(function (_) {
    return _.export;
  });
}; /* eslint no-unneeded-ternary: 0 */
var transform = exports.transform = function transform(data, meta, columns, _, _ref) {
  var separator = _ref.separator,
      ignoreHeader = _ref.ignoreHeader,
      ignoreFooter = _ref.ignoreFooter;

  var visibleColumns = meta.filter(function (m) {
    return m.export;
  });
  var content = '';
  // extract csv header
  if (!ignoreHeader) {
    content += visibleColumns.map(function (m) {
      return '"' + m.header + '"';
    }).join(separator);
    content += '\n';
  }
  // extract csv body
  if (data.length === 0) return content;
  content += data.map(function (row, rowIndex) {
    return visibleColumns.map(function (m) {
      var cellContent = _.get(row, m.field);
      if (m.formatter) {
        cellContent = m.formatter(cellContent, row, rowIndex, m.formatExtraData);
      }
      if (m.type === String) {
        return '"' + ('' + cellContent).replace(/"/g, '""') + '"';
      }
      return cellContent;
    }).join(separator);
  }).join('\n');

  if (!ignoreFooter) {
    content += '\n';
    content += visibleColumns.map(function (m, i) {
      if (typeof m.footer === 'function') {
        var columnData = _.pluck(data, columns[i].dataField);
        return '"' + m.footer(columnData, columns[i], i) + '"';
      } else if (m.footerFormatter) {
        return '"' + m.footerFormatter(columns[i], i) + '"';
      }
      return '"' + m.footer + '"';
    }).join(separator);
  }
  return content;
};

var save = exports.save = function save(content, _ref2) {
  var noAutoBOM = _ref2.noAutoBOM,
      fileName = _ref2.fileName,
      blobType = _ref2.blobType;

  _fileSaver2.default.saveAs(new Blob([content], { type: blobType }), fileName, noAutoBOM);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if("undefined"!=typeof exports)b();else{b(),a.FileSaver={exports:{}}.exports}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a,"undefined"!=typeof module&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint react/require-default-props: 0 */
/* eslint no-continue: 0 */
/* eslint no-lonely-if: 0 */
/* eslint class-methods-use-this: 0 */
/* eslint camelcase: 0 */


exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    searchFormatted: false,
    afterSearch: null,
    onColumnMatch: null
  };
  return function (_, isRemoteSearch, handleRemoteSearchChange) {
    var SearchContext = _react2.default.createContext();

    var SearchProvider = function (_React$Component) {
      _inherits(SearchProvider, _React$Component);

      function SearchProvider(props) {
        _classCallCheck(this, SearchProvider);

        var _this = _possibleConstructorReturn(this, (SearchProvider.__proto__ || Object.getPrototypeOf(SearchProvider)).call(this, props));

        var initialData = props.data;
        if (isRemoteSearch() && _this.props.searchText !== '') {
          handleRemoteSearchChange(_this.props.searchText);
        } else {
          initialData = _this.search(props);
          _this.triggerListener(initialData, true);
        }
        _this.state = { data: initialData };
        return _this;
      }

      _createClass(SearchProvider, [{
        key: 'getSearched',
        value: function getSearched() {
          return this.state.data;
        }
      }, {
        key: 'triggerListener',
        value: function triggerListener(result, skipInit) {
          if (options.afterSearch && !skipInit) {
            options.afterSearch(result);
          }
          if (this.props.dataChangeListener) {
            this.props.dataChangeListener.emit('filterChanged', result.length);
          }
        }
      }, {
        key: 'UNSAFE_componentWillReceiveProps',
        value: function UNSAFE_componentWillReceiveProps(nextProps) {
          if (nextProps.searchText !== this.props.searchText) {
            if (isRemoteSearch()) {
              handleRemoteSearchChange(nextProps.searchText);
            } else {
              var result = this.search(nextProps);
              this.triggerListener(result);
              this.setState({
                data: result
              });
            }
          } else {
            if (isRemoteSearch()) {
              this.setState({ data: nextProps.data });
            } else if (!_.isEqual(nextProps.data, this.props.data)) {
              var _result = this.search(nextProps);
              this.triggerListener(_result);
              this.setState({
                data: _result
              });
            }
          }
        }
      }, {
        key: 'search',
        value: function search(props) {
          var data = props.data,
              columns = props.columns;

          var searchText = props.searchText.toLowerCase();
          return data.filter(function (row, ridx) {
            for (var cidx = 0; cidx < columns.length; cidx += 1) {
              var column = columns[cidx];
              if (column.searchable === false) continue;
              var targetValue = _.get(row, column.dataField);
              if (column.formatter && options.searchFormatted) {
                targetValue = column.formatter(targetValue, row, ridx, column.formatExtraData);
              } else if (column.filterValue) {
                targetValue = column.filterValue(targetValue, row);
              }
              if (options.onColumnMatch) {
                if (options.onColumnMatch({
                  searchText: searchText,
                  value: targetValue,
                  column: column,
                  row: row
                })) {
                  return true;
                }
              } else {
                if (targetValue !== null && typeof targetValue !== 'undefined') {
                  targetValue = targetValue.toString().toLowerCase();
                  if (targetValue.indexOf(searchText) > -1) {
                    return true;
                  }
                }
              }
            }
            return false;
          });
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(
            SearchContext.Provider,
            { value: { data: this.state.data } },
            this.props.children
          );
        }
      }]);

      return SearchProvider;
    }(_react2.default.Component);

    SearchProvider.propTypes = {
      data: _propTypes2.default.array.isRequired,
      columns: _propTypes2.default.array.isRequired,
      searchText: _propTypes2.default.string,
      dataChangeListener: _propTypes2.default.object
    };


    return {
      Provider: SearchProvider,
      Consumer: SearchContext.Consumer
    };
  };
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(2);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toolkitprovider = function Toolkitprovider(props) {
  return _react2.default.createElement(
    _context2.default.Provider,
    props,
    _react2.default.createElement(
      _context2.default.Consumer,
      null,
      function (tookKitProps) {
        return props.children(tookKitProps);
      }
    )
  );
};

Toolkitprovider.propTypes = {
  children: _propTypes2.default.func.isRequired
};

exports.default = Toolkitprovider;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0NjkzMjA5YTQwZjkyMGQ4ZjYwZiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXRvb2xraXQvY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXRvb2xraXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi10b29sa2l0L3NyYy9zZWFyY2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi10b29sa2l0L3NyYy9zZWFyY2gvU2VhcmNoQmFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvaW52YXJpYW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXRvb2xraXQvc3JjL3NlYXJjaC9jbGVhci1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi10b29sa2l0L3NyYy9jc3YvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi10b29sa2l0L3NyYy9jc3YvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItdG9vbGtpdC9zcmMvY29sdW1uLXRvZ2dsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXRvb2xraXQvc3JjL2NvbHVtbi10b2dnbGUvdG9nZ2xlLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi10b29sa2l0L3N0YXRlbGVzc09wLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItdG9vbGtpdC9zcmMvb3AvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi10b29sa2l0L3NyYy9vcC9jc3YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi10b29sa2l0L3NyYy9jc3YvZXhwb3J0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi10b29sa2l0L25vZGVfbW9kdWxlcy9maWxlLXNhdmVyL2Rpc3QvRmlsZVNhdmVyLm1pbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItdG9vbGtpdC9zcmMvc2VhcmNoL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi10b29sa2l0L3Byb3ZpZGVyLmpzIl0sIm5hbWVzIjpbIlRvb2xraXRDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiVG9vbGtpdFByb3ZpZGVyIiwicHJvcHMiLCJzdGF0ZSIsIl8iLCJvbkNsZWFyIiwiYmluZCIsIm9uU2VhcmNoIiwib25Db2x1bW5Ub2dnbGUiLCJzZXREZXBlbmRlbmN5TW9kdWxlcyIsImNvbHVtblRvZ2dsZSIsImNvbHVtbnMiLCJyZWR1Y2UiLCJvYmoiLCJjb2x1bW4iLCJkYXRhRmllbGQiLCJoaWRkZW4iLCJzZWFyY2hUZXh0Iiwic2VhcmNoIiwiZGVmYXVsdFNlYXJjaCIsIm5leHRQcm9wcyIsInNldFN0YXRlIiwiYmFzZVByb3BzIiwia2V5RmllbGQiLCJkYXRhIiwiYm9vdHN0cmFwNCIsInJlZ2lzdGVyRXhwb3NlZEFQSSIsInNlYXJjaENvbnRleHQiLCJ0b2dnbGVzIiwic2VhcmNoUHJvcHMiLCJjc3ZQcm9wcyIsIm9uRXhwb3J0IiwiaGFuZGxlRXhwb3J0Q1NWIiwiY29sdW1uVG9nZ2xlUHJvcHMiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhcnJheSIsIm5vZGUiLCJib29sIiwib25lT2ZUeXBlIiwic2hhcGUiLCJzZWFyY2hGb3JtYXR0ZWQiLCJleHBvcnRDU1YiLCJmaWxlTmFtZSIsInNlcGFyYXRvciIsImlnbm9yZUhlYWRlciIsImlnbm9yZUZvb3RlciIsIm5vQXV0b0JPTSIsImJsb2JUeXBlIiwiZXhwb3J0QWxsIiwib25seUV4cG9ydEZpbHRlcmVkIiwib25seUV4cG9ydFNlbGVjdGlvbiIsImRlZmF1bHRQcm9wcyIsIlByb3ZpZGVyIiwiQ29uc3VtZXIiLCJkZWZhdWx0IiwiQ29udGV4dCIsIlNlYXJjaEJhciIsIkNsZWFyU2VhcmNoQnV0dG9uIiwiaGFuZGxlRGVib3VuY2UiLCJmdW5jIiwid2FpdCIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJsYXRlciIsImFwcGx5IiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJhcHB5Iiwib25DaGFuZ2VWYWx1ZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsIm9uS2V5dXAiLCJkZWxheSIsImRlYm91bmNlQ2FsbGJhY2siLCJpbnB1dCIsImNsYXNzTmFtZSIsInN0eWxlIiwicGxhY2Vob2xkZXIiLCJ0YWJsZUlkIiwic3JUZXh0IiwibiIsIm9iamVjdCIsIm51bWJlciIsIkNsZWFyQnV0dG9uIiwidGV4dCIsIkV4cG9ydENTVkJ1dHRvbiIsInJlc3QiLCJUb2dnbGVMaXN0IiwiY29udGV4dHVhbCIsImJ0bkNsYXNzTmFtZSIsIm1hcCIsInRvZ2dsZSIsInRhYmxlRXhwb3NlZEFQSUVtaXR0ZXIiLCJPcGVyYXRpb24iLCJjc3ZPcGVyYXRpb24iLCJCYXNlIiwiY3N2RGVmYXVsdE9wdGlvbnMiLCJzb3VyY2UiLCJtZXRhIiwib3B0aW9ucyIsInBheWxvYWQiLCJlbWl0IiwicmVzdWx0Iiwic2VsZWN0aW9ucyIsImZpbHRlciIsImZpbmQiLCJyb3ciLCJzZWwiLCJjb250ZW50IiwiZ2V0TWV0YUluZm8iLCJmaWVsZCIsInR5cGUiLCJjc3ZUeXBlIiwiU3RyaW5nIiwiZm9ybWF0dGVyIiwiY3N2Rm9ybWF0dGVyIiwiZm9ybWF0RXh0cmFEYXRhIiwiaGVhZGVyIiwiY3N2VGV4dCIsImV4cG9ydCIsImNzdkV4cG9ydCIsIk51bWJlciIsInJvd1NwYW4iLCJjb2xTcGFuIiwiZm9vdGVyIiwiZm9vdGVyRm9ybWF0dGVyIiwidHJhbnNmb3JtIiwidmlzaWJsZUNvbHVtbnMiLCJtIiwiam9pbiIsImxlbmd0aCIsInJvd0luZGV4IiwiY2VsbENvbnRlbnQiLCJnZXQiLCJyZXBsYWNlIiwiaSIsImNvbHVtbkRhdGEiLCJwbHVjayIsInNhdmUiLCJGaWxlU2F2ZXIiLCJzYXZlQXMiLCJCbG9iIiwiYWZ0ZXJTZWFyY2giLCJvbkNvbHVtbk1hdGNoIiwiaXNSZW1vdGVTZWFyY2giLCJoYW5kbGVSZW1vdGVTZWFyY2hDaGFuZ2UiLCJTZWFyY2hDb250ZXh0IiwiU2VhcmNoUHJvdmlkZXIiLCJpbml0aWFsRGF0YSIsInRyaWdnZXJMaXN0ZW5lciIsInNraXBJbml0IiwiZGF0YUNoYW5nZUxpc3RlbmVyIiwiaXNFcXVhbCIsInRvTG93ZXJDYXNlIiwicmlkeCIsImNpZHgiLCJzZWFyY2hhYmxlIiwidGFyZ2V0VmFsdWUiLCJmaWx0ZXJWYWx1ZSIsInRvU3RyaW5nIiwiaW5kZXhPZiIsIlRvb2xraXRwcm92aWRlciIsInRvb2tLaXRQcm9wcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTs7Ozs7OztBQzdEQSwrQzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLEtBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLENBQTRCO0FBQ3ZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7OzsrZUFOQTs7QUFRQSxJQUFNQSxpQkFBaUJDLGdCQUFNQyxhQUFOLEVBQXZCOztJQUVNQyxlOzs7QUFvQ0osMkJBQVlDLEtBQVosRUFB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TGhHLGdCQUFVK0YsY0FBYy9GO0FBRm5CLEtBQVA7QUFJRCxHQXBIYztBQUFBLEM7Ozs7Ozs7Ozs7Ozs7QUNUZjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU04RyxrQkFBa0IsU0FBbEJBLGVBQWtCO0FBQUEsU0FDdEI7QUFBQyxxQkFBRCxDQUFnQixRQUFoQjtBQUE4QnRLLFNBQTlCO0FBQ0U7QUFBQyx1QkFBRCxDQUFnQixRQUFoQjtBQUFBO0FBRUk7QUFBQSxlQUFnQkEsTUFBTWdDLFFBQU4sQ0FBZXVJLFlBQWYsQ0FBaEI7QUFBQTtBQUZKO0FBREYsR0FEc0I7QUFBQSxDQUF4Qjs7QUFVQUQsZ0JBQWdCcEksU0FBaEIsR0FBNEI7QUFDMUJGLFlBQVVHLG9CQUFVMkIsSUFBVixDQUFlekI7QUFEQyxDQUE1Qjs7a0JBSWVpSSxlIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC10YWJsZTItdG9vbGtpdC9kaXN0L3JlYWN0LWJvb3RzdHJhcC10YWJsZTItdG9vbGtpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJlYWN0Qm9vdHN0cmFwVGFibGUyVG9vbGtpdFwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSZWFjdEJvb3RzdHJhcFRhYmxlMlRvb2xraXRcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0NjkzMjA5YTQwZjkyMGQ4ZjYwZiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIFN5bWJvbC5mb3IgJiZcbiAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gICAgMHhlYWM3O1xuXG4gIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG4gICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyogZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOiAwICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0YXRlbGVzc0RlY29yYXRvciBmcm9tICcuL3N0YXRlbGVzc09wJztcblxuaW1wb3J0IGNyZWF0ZVNlYXJjaENvbnRleHQgZnJvbSAnLi9zcmMvc2VhcmNoL2NvbnRleHQnO1xuXG5jb25zdCBUb29sa2l0Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuY2xhc3MgVG9vbGtpdFByb3ZpZGVyIGV4dGVuZHMgc3RhdGVsZXNzRGVjb3JhdG9yKFJlYWN0LkNvbXBvbmVudCkge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGtleUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgYm9vdHN0cmFwNDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2VhcmNoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgZGVmYXVsdFNlYXJjaDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgc2VhcmNoRm9ybWF0dGVkOiBQcm9wVHlwZXMuYm9vbFxuICAgICAgfSlcbiAgICBdKSxcbiAgICBleHBvcnRDU1Y6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBmaWxlTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgc2VwYXJhdG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBpZ25vcmVIZWFkZXI6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBpZ25vcmVGb290ZXI6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBub0F1dG9CT006IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBibG9iVHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZXhwb3J0QWxsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgb25seUV4cG9ydEZpbHRlcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgb25seUV4cG9ydFNlbGVjdGlvbjogUHJvcFR5cGVzLmJvb2xcbiAgICAgIH0pXG4gICAgXSlcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2VhcmNoOiBmYWxzZSxcbiAgICBleHBvcnRDU1Y6IGZhbHNlLFxuICAgIGJvb3RzdHJhcDQ6IGZhbHNlXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzdGF0ZSA9IHt9O1xuICAgIHRoaXMuXyA9IG51bGw7XG4gICAgdGhpcy5vbkNsZWFyID0gdGhpcy5vbkNsZWFyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblNlYXJjaCA9IHRoaXMub25TZWFyY2guYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ29sdW1uVG9nZ2xlID0gdGhpcy5vbkNvbHVtblRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0RGVwZW5kZW5jeU1vZHVsZXMgPSB0aGlzLnNldERlcGVuZGVuY3lNb2R1bGVzLmJpbmQodGhpcyk7XG5cbiAgICBpZiAocHJvcHMuY29sdW1uVG9nZ2xlKSB7XG4gICAgICBzdGF0ZS5jb2x1bW5Ub2dnbGUgPSBwcm9wcy5jb2x1bW5zXG4gICAgICAgIC5yZWR1Y2UoKG9iaiwgY29sdW1uKSA9PiB7XG4gICAgICAgICAgb2JqW2NvbHVtbi5kYXRhRmllbGRdID0gIWNvbHVtbi5oaWRkZW47XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSwge30pO1xuICAgIH1cbiAgICBzdGF0ZS5zZWFyY2hUZXh0ID0gdHlwZW9mIHByb3BzLnNlYXJjaCA9PT0gJ29iamVjdCcgPyAocHJvcHMuc2VhcmNoLmRlZmF1bHRTZWFyY2ggfHwgJycpIDogJyc7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBsZXQgY29sdW1uVG9nZ2xlID0gdGhpcy5zdGF0ZS5jb2x1bW5Ub2dnbGU7XG4gICAgaWYgKG5leHRQcm9wcy5jb2x1bW5Ub2dnbGUpIHtcbiAgICAgIGNvbHVtblRvZ2dsZSA9IG5leHRQcm9wcy5jb2x1bW5zXG4gICAgICAgIC5yZWR1Y2UoKG9iaiwgY29sdW1uKSA9PiB7XG4gICAgICAgICAgb2JqW2NvbHVtbi5kYXRhRmllbGRdID0gIWNvbHVtbi5oaWRkZW47XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSwge30pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2x1bW5Ub2dnbGUgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICBjb2x1bW5Ub2dnbGVcbiAgICB9KTtcbiAgfVxuXG4gIG9uU2VhcmNoKHNlYXJjaFRleHQpIHtcbiAgICBpZiAoc2VhcmNoVGV4dCAhPT0gdGhpcy5zdGF0ZS5zZWFyY2hUZXh0KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoVGV4dCB9KTtcbiAgICB9XG4gIH1cblxuICBvbkNsZWFyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hUZXh0OiAnJyB9KTtcbiAgfVxuXG4gIG9uQ29sdW1uVG9nZ2xlKGRhdGFGaWVsZCkge1xuICAgIGNvbnN0IHsgY29sdW1uVG9nZ2xlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbHVtblRvZ2dsZVtkYXRhRmllbGRdID0gIWNvbHVtblRvZ2dsZVtkYXRhRmllbGRdO1xuICAgIHRoaXMuc2V0U3RhdGUoKHtcbiAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICBjb2x1bW5Ub2dnbGVcbiAgICB9KSk7XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0geyp9IF8gXG4gICAqIHRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgb25seSBvbmUgdGltZSB3aGVuIHRhYmxlIHJlbmRlclxuICAgKiByZWFjdC1ib290c3RyYXAtdGFibGUtbmV4dC9zcmMvY29udGV4dC9pbmRleC5qcyB3aWxsIGNhbGwgdGhpcyBjYiBmb3IgcGFzc2luZyB0aGUgXyBtb2R1bGVcbiAgICogUGxlYXNlIGNvbnNpZGVyIHRvIGV4dHJhY3QgYSBjb21tb24gbW9kdWxlIHRvIGhhbmRsZSBfIG1vZHVsZS5cbiAgICogdGhpcyBpcyBqdXN0IGEgcXVpY2sgZml4XG4gICAqL1xuICBzZXREZXBlbmRlbmN5TW9kdWxlcyhfKSB7XG4gICAgdGhpcy5fID0gXztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBiYXNlUHJvcHMgPSB7XG4gICAgICBrZXlGaWVsZDogdGhpcy5wcm9wcy5rZXlGaWVsZCxcbiAgICAgIGNvbHVtbnM6IHRoaXMucHJvcHMuY29sdW1ucyxcbiAgICAgIGRhdGE6IHRoaXMucHJvcHMuZGF0YSxcbiAgICAgIGJvb3RzdHJhcDQ6IHRoaXMucHJvcHMuYm9vdHN0cmFwNCxcbiAgICAgIHNldERlcGVuZGVuY3lNb2R1bGVzOiB0aGlzLnNldERlcGVuZGVuY3lNb2R1bGVzLFxuICAgICAgcmVnaXN0ZXJFeHBvc2VkQVBJOiB0aGlzLnJlZ2lzdGVyRXhwb3NlZEFQSVxuICAgIH07XG4gICAgaWYgKHRoaXMucHJvcHMuc2VhcmNoKSB7XG4gICAgICBiYXNlUHJvcHMuc2VhcmNoID0ge1xuICAgICAgICBzZWFyY2hDb250ZXh0OiBjcmVhdGVTZWFyY2hDb250ZXh0KHRoaXMucHJvcHMuc2VhcmNoKSxcbiAgICAgICAgc2VhcmNoVGV4dDogdGhpcy5zdGF0ZS5zZWFyY2hUZXh0XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5jb2x1bW5Ub2dnbGUpIHtcbiAgICAgIGJhc2VQcm9wcy5jb2x1bW5Ub2dnbGUgPSB7XG4gICAgICAgIHRvZ2dsZXM6IHRoaXMuc3RhdGUuY29sdW1uVG9nZ2xlXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPFRvb2xraXRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXsge1xuICAgICAgICBzZWFyY2hQcm9wczoge1xuICAgICAgICAgIHNlYXJjaFRleHQ6IHRoaXMuc3RhdGUuc2VhcmNoVGV4dCxcbiAgICAgICAgICBvblNlYXJjaDogdGhpcy5vblNlYXJjaCxcbiAgICAgICAgICBvbkNsZWFyOiB0aGlzLm9uQ2xlYXJcbiAgICAgICAgfSxcbiAgICAgICAgY3N2UHJvcHM6IHtcbiAgICAgICAgICBvbkV4cG9ydDogdGhpcy5oYW5kbGVFeHBvcnRDU1ZcbiAgICAgICAgfSxcbiAgICAgICAgY29sdW1uVG9nZ2xlUHJvcHM6IHtcbiAgICAgICAgICBjb2x1bW5zOiB0aGlzLnByb3BzLmNvbHVtbnMsXG4gICAgICAgICAgdG9nZ2xlczogdGhpcy5zdGF0ZS5jb2x1bW5Ub2dnbGUsXG4gICAgICAgICAgb25Db2x1bW5Ub2dnbGU6IHRoaXMub25Db2x1bW5Ub2dnbGVcbiAgICAgICAgfSxcbiAgICAgICAgYmFzZVByb3BzXG4gICAgICB9IH1cbiAgICAgID5cbiAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgIDwvVG9vbGtpdENvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFByb3ZpZGVyOiBUb29sa2l0UHJvdmlkZXIsXG4gIENvbnN1bWVyOiBUb29sa2l0Q29udGV4dC5Db25zdW1lclxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItdG9vbGtpdC9jb250ZXh0LmpzIiwiaW1wb3J0IENvbnRleHQgZnJvbSAnLi9jb250ZXh0JztcbmltcG9ydCBUb29sa2l0UHJvdmlkZXIgZnJvbSAnLi9wcm92aWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2xraXRQcm92aWRlcjtcbmV4cG9ydCBjb25zdCBUb29sa2l0Q29udGV4dCA9IENvbnRleHQ7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlYXJjaCB9IGZyb20gJy4vc3JjL3NlYXJjaCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENTVkV4cG9ydCB9IGZyb20gJy4vc3JjL2Nzdic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbHVtblRvZ2dsZSB9IGZyb20gJy4vc3JjL2NvbHVtbi10b2dnbGUnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi10b29sa2l0L2luZGV4LmpzIiwiaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuL1NlYXJjaEJhcic7XG5pbXBvcnQgQ2xlYXJTZWFyY2hCdXR0b24gZnJvbSAnLi9jbGVhci1idXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCB7IFNlYXJjaEJhciwgQ2xlYXJTZWFyY2hCdXR0b24gfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItdG9vbGtpdC9zcmMvc2VhcmNoL2luZGV4LmpzIiwiLyogZXNsaW50IGNhbWVsY2FzZTogMCAqL1xuLyogZXNsaW50IG5vLXJldHVybi1hc3NpZ246IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBoYW5kbGVEZWJvdW5jZSA9IChmdW5jLCB3YWl0LCBpbW1lZGlhdGUpID0+IHtcbiAgbGV0IHRpbWVvdXQ7XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBsYXRlciA9ICgpID0+IHtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuXG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG5cbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCB8fCAwKTtcblxuICAgIGlmIChjYWxsTm93KSB7XG4gICAgICBmdW5jLmFwcHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG59O1xuXG5jbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IHByb3BzLnNlYXJjaFRleHRcbiAgICB9O1xuICB9XG5cbiAgb25DaGFuZ2VWYWx1ZSA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIG9uS2V5dXAgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkZWxheSwgb25TZWFyY2ggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGVib3VuY2VDYWxsYmFjayA9IGhhbmRsZURlYm91bmNlKCgpID0+IHtcbiAgICAgIG9uU2VhcmNoKHRoaXMuaW5wdXQudmFsdWUpO1xuICAgIH0sIGRlbGF5KTtcbiAgICBkZWJvdW5jZUNhbGxiYWNrKCk7XG4gIH1cblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IG5leHRQcm9wcy5zZWFyY2hUZXh0IH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHN0eWxlLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICB0YWJsZUlkLFxuICAgICAgc3JUZXh0XG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsXG4gICAgICAgIGh0bWxGb3I9eyBgc2VhcmNoLWJhci0ke3RhYmxlSWR9YCB9XG4gICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1sYWJlbFwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuIGlkPXsgYHNlYXJjaC1iYXItJHt0YWJsZUlkfS1sYWJlbGAgfSBjbGFzc05hbWU9XCJzci1vbmx5XCI+XG4gICAgICAgICAgeyBzclRleHQgfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHJlZj17IG4gPT4gdGhpcy5pbnB1dCA9IG4gfVxuICAgICAgICAgIGlkPXsgYHNlYXJjaC1iYXItJHt0YWJsZUlkfWAgfVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBzdHlsZT17IHN0eWxlIH1cbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9eyBgc2VhcmNoLWJhci0ke3RhYmxlSWR9LWxhYmVsYCB9XG4gICAgICAgICAgb25LZXlVcD17ICgpID0+IHRoaXMub25LZXl1cCgpIH1cbiAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VWYWx1ZSB9XG4gICAgICAgICAgY2xhc3NOYW1lPXsgYGZvcm0tY29udHJvbCAke2NsYXNzTmFtZX1gIH1cbiAgICAgICAgICB2YWx1ZT17IHRoaXMuc3RhdGUudmFsdWUgfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXsgcGxhY2Vob2xkZXIgfHwgU2VhcmNoQmFyLmRlZmF1bHRQcm9wcy5wbGFjZWhvbGRlciB9XG4gICAgICAgIC8+XG4gICAgICA8L2xhYmVsPlxuICAgICk7XG4gIH1cbn1cblxuU2VhcmNoQmFyLnByb3BUeXBlcyA9IHtcbiAgb25TZWFyY2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBkZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgc2VhcmNoVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGFibGVJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3JUZXh0OiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5TZWFyY2hCYXIuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxuICBzdHlsZToge30sXG4gIHBsYWNlaG9sZGVyOiAnU2VhcmNoJyxcbiAgZGVsYXk6IDI1MCxcbiAgc2VhcmNoVGV4dDogJycsXG4gIHRhYmxlSWQ6ICcwJyxcbiAgc3JUZXh0OiAnU2VhcmNoIHRoaXMgdGFibGUnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXRvb2xraXQvc3JjL3NlYXJjaC9TZWFyY2hCYXIuanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGludmFyaWFudChcbiAgICAgIGZhbHNlLFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW1cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGVtcHR5RnVuY3Rpb247XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvaW52YXJpYW50LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgQ2xlYXJCdXR0b24gPSAoe1xuICBvbkNsZWFyLFxuICB0ZXh0LFxuICBjbGFzc05hbWVcbn0pID0+IChcbiAgPGJ1dHRvbiBjbGFzc05hbWU9eyBgYnRuIGJ0bi1kZWZhdWx0ICR7Y2xhc3NOYW1lfWAgfSBvbkNsaWNrPXsgb25DbGVhciB9PnsgdGV4dCB9PC9idXR0b24+XG4pO1xuXG5DbGVhckJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIG9uQ2xlYXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuQ2xlYXJCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICB0ZXh0OiAnQ2xlYXInLFxuICBjbGFzc05hbWU6ICcnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbGVhckJ1dHRvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItdG9vbGtpdC9zcmMvc2VhcmNoL2NsZWFyLWJ1dHRvbi5qcyIsImltcG9ydCBFeHBvcnRDU1ZCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCB7IEV4cG9ydENTVkJ1dHRvbiB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi10b29sa2l0L3NyYy9jc3YvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgRXhwb3J0Q1NWQnV0dG9uID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBvbkV4cG9ydCxcbiAgICBjaGlsZHJlbixcbiAgICBjbGFzc05hbWUsXG4gICAgLi4ucmVzdFxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzTmFtZT17IGByZWFjdC1icy10YWJsZS1jc3YtYnRuIGJ0biBidG4tZGVmYXVsdCAke2NsYXNzTmFtZX1gIH1cbiAgICAgIG9uQ2xpY2s9eyAoKSA9PiBvbkV4cG9ydCgpIH1cbiAgICAgIHsgLi4ucmVzdCB9XG4gICAgPlxuICAgICAgeyBjaGlsZHJlbiB9XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5FeHBvcnRDU1ZCdXR0b24ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgb25FeHBvcnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5FeHBvcnRDU1ZCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxuICBzdHlsZToge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cG9ydENTVkJ1dHRvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItdG9vbGtpdC9zcmMvY3N2L2J1dHRvbi5qcyIsImltcG9ydCBUb2dnbGVMaXN0IGZyb20gJy4vdG9nZ2xlLWxpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCB7IFRvZ2dsZUxpc3QgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItdG9vbGtpdC9zcmMvY29sdW1uLXRvZ2dsZS9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBUb2dnbGVMaXN0ID0gKHtcbiAgY29sdW1ucyxcbiAgb25Db2x1bW5Ub2dnbGUsXG4gIHRvZ2dsZXMsXG4gIGNvbnRleHR1YWwsXG4gIGNsYXNzTmFtZSxcbiAgYnRuQ2xhc3NOYW1lXG59KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXsgYGJ0bi1ncm91cCBidG4tZ3JvdXAtdG9nZ2xlICR7Y2xhc3NOYW1lfWAgfSBkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIj5cbiAgICB7XG4gICAgICBjb2x1bW5zXG4gICAgICAgIC5tYXAoY29sdW1uID0+ICh7XG4gICAgICAgICAgLi4uY29sdW1uLFxuICAgICAgICAgIHRvZ2dsZTogdG9nZ2xlc1tjb2x1bW4uZGF0YUZpZWxkXVxuICAgICAgICB9KSlcbiAgICAgICAgLm1hcChjb2x1bW4gPT4gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAga2V5PXsgY29sdW1uLmRhdGFGaWVsZCB9XG4gICAgICAgICAgICBjbGFzc05hbWU9eyBgJHtidG5DbGFzc05hbWV9IGJ0biBidG4tJHtjb250ZXh0dWFsfSAke2NvbHVtbi50b2dnbGUgPyAnYWN0aXZlJyA6ICcnfWAgfVxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgYXJpYS1wcmVzc2VkPXsgY29sdW1uLnRvZ2dsZSA/ICd0cnVlJyA6ICdmYWxzZScgfVxuICAgICAgICAgICAgb25DbGljaz17ICgpID0+IG9uQ29sdW1uVG9nZ2xlKGNvbHVtbi5kYXRhRmllbGQpIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IGNvbHVtbi50ZXh0IH1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSlcbiAgICB9XG4gIDwvZGl2PlxuKTtcblxuVG9nZ2xlTGlzdC5wcm9wVHlwZXMgPSB7XG4gIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICB0b2dnbGVzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIG9uQ29sdW1uVG9nZ2xlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBidG5DbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29udGV4dHVhbDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuVG9nZ2xlTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gIGJ0bkNsYXNzTmFtZTogJycsXG4gIGNsYXNzTmFtZTogJycsXG4gIGNvbnRleHR1YWw6ICdwcmltYXJ5J1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlTGlzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItdG9vbGtpdC9zcmMvY29sdW1uLXRvZ2dsZS90b2dnbGUtbGlzdC5qcyIsImltcG9ydCBPcGVyYXRpb24gZnJvbSAnLi9zcmMvb3AnO1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlID0+XG4gIGNsYXNzIFN0YXRlbGVzc09wZXJhdGlvbiBleHRlbmRzIE9wZXJhdGlvbi5jc3ZPcGVyYXRpb24oQmFzZSkge1xuICAgIHJlZ2lzdGVyRXhwb3NlZEFQSSA9ICh0YWJsZUV4cG9zZWRBUElFbWl0dGVyKSA9PiB7XG4gICAgICB0aGlzLnRhYmxlRXhwb3NlZEFQSUVtaXR0ZXIgPSB0YWJsZUV4cG9zZWRBUElFbWl0dGVyO1xuICAgIH1cbiAgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItdG9vbGtpdC9zdGF0ZWxlc3NPcC5qcyIsImltcG9ydCBjc3ZPcGVyYXRpb24gZnJvbSAnLi9jc3YnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNzdk9wZXJhdGlvblxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItdG9vbGtpdC9zcmMvb3AvaW5kZXguanMiLCJpbXBvcnQgeyBnZXRNZXRhSW5mbywgdHJhbnNmb3JtLCBzYXZlIH0gZnJvbSAnLi4vY3N2L2V4cG9ydGVyJztcblxuY29uc3QgY3N2RGVmYXVsdE9wdGlvbnMgPSB7XG4gIGZpbGVOYW1lOiAnc3ByZWFkc2hlZXQuY3N2JyxcbiAgc2VwYXJhdG9yOiAnLCcsXG4gIGlnbm9yZUhlYWRlcjogZmFsc2UsXG4gIGlnbm9yZUZvb3RlcjogdHJ1ZSxcbiAgbm9BdXRvQk9NOiB0cnVlLFxuICBibG9iVHlwZTogJ3RleHQvcGxhaW47Y2hhcnNldD11dGYtOCcsXG4gIGV4cG9ydEFsbDogdHJ1ZSxcbiAgb25seUV4cG9ydFNlbGVjdGlvbjogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2UgPT5cbiAgY2xhc3MgQ1NWT3BlcmF0aW9uIGV4dGVuZHMgQmFzZSB7XG4gICAgaGFuZGxlRXhwb3J0Q1NWID0gKHNvdXJjZSkgPT4ge1xuICAgICAgY29uc3QgeyBjb2x1bW5zLCBleHBvcnRDU1YsIGtleUZpZWxkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgbWV0YSA9IGdldE1ldGFJbmZvKGNvbHVtbnMpO1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IGV4cG9ydENTViA9PT0gdHJ1ZSA/XG4gICAgICAgIGNzdkRlZmF1bHRPcHRpb25zIDpcbiAgICAgICAge1xuICAgICAgICAgIC4uLmNzdkRlZmF1bHRPcHRpb25zLFxuICAgICAgICAgIC4uLmV4cG9ydENTVlxuICAgICAgICB9O1xuXG4gICAgICAvLyBnZXQgZGF0YSBmb3IgY3N2IGV4cG9ydFxuICAgICAgbGV0IGRhdGE7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZGF0YSA9IHNvdXJjZTtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5leHBvcnRBbGwpIHtcbiAgICAgICAgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5vbmx5RXhwb3J0RmlsdGVyZWQpIHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHt9O1xuICAgICAgICB0aGlzLnRhYmxlRXhwb3NlZEFQSUVtaXR0ZXIuZW1pdCgnZ2V0LmZpbHRlcmVkLnJvd3MnLCBwYXlsb2FkKTtcbiAgICAgICAgZGF0YSA9IHBheWxvYWQucmVzdWx0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHt9O1xuICAgICAgICB0aGlzLnRhYmxlRXhwb3NlZEFQSUVtaXR0ZXIuZW1pdCgnZ2V0LnRhYmxlLmRhdGEnLCBwYXlsb2FkKTtcbiAgICAgICAgZGF0YSA9IHBheWxvYWQucmVzdWx0O1xuICAgICAgfVxuXG4gICAgICAvLyBmaWx0ZXIgZGF0YSBieSByb3cgc2VsZWN0aW9uXG4gICAgICBpZiAob3B0aW9ucy5vbmx5RXhwb3J0U2VsZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7fTtcbiAgICAgICAgdGhpcy50YWJsZUV4cG9zZWRBUElFbWl0dGVyLmVtaXQoJ2dldC5zZWxlY3RlZC5yb3dzJywgcGF5bG9hZCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSBwYXlsb2FkLnJlc3VsdDtcbiAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKHJvdyA9PiAhIXNlbGVjdGlvbnMuZmluZChzZWwgPT4gcm93W2tleUZpZWxkXSA9PT0gc2VsKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0cmFuc2Zvcm0oZGF0YSwgbWV0YSwgY29sdW1ucywgdGhpcy5fLCBvcHRpb25zKTtcbiAgICAgIHNhdmUoY29udGVudCwgb3B0aW9ucyk7XG4gICAgfVxuICB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi10b29sa2l0L3NyYy9vcC9jc3YuanMiLCIvKiBlc2xpbnQgbm8tdW5uZWVkZWQtdGVybmFyeTogMCAqL1xuaW1wb3J0IEZpbGVTYXZlciBmcm9tICdmaWxlLXNhdmVyJztcblxuZXhwb3J0IGNvbnN0IGdldE1ldGFJbmZvID0gY29sdW1ucyA9PlxuICBjb2x1bW5zXG4gICAgLm1hcChjb2x1bW4gPT4gKHtcbiAgICAgIGZpZWxkOiBjb2x1bW4uZGF0YUZpZWxkLFxuICAgICAgdHlwZTogY29sdW1uLmNzdlR5cGUgfHwgU3RyaW5nLFxuICAgICAgZm9ybWF0dGVyOiBjb2x1bW4uY3N2Rm9ybWF0dGVyLFxuICAgICAgZm9ybWF0RXh0cmFEYXRhOiBjb2x1bW4uZm9ybWF0RXh0cmFEYXRhLFxuICAgICAgaGVhZGVyOiBjb2x1bW4uY3N2VGV4dCB8fCBjb2x1bW4udGV4dCxcbiAgICAgIGV4cG9ydDogY29sdW1uLmNzdkV4cG9ydCA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWUsXG4gICAgICByb3c6IE51bWJlcihjb2x1bW4ucm93KSB8fCAwLFxuICAgICAgcm93U3BhbjogTnVtYmVyKGNvbHVtbi5yb3dTcGFuKSB8fCAxLFxuICAgICAgY29sU3BhbjogTnVtYmVyKGNvbHVtbi5jb2xTcGFuKSB8fCAxLFxuICAgICAgZm9vdGVyOiBjb2x1bW4uZm9vdGVyLFxuICAgICAgZm9vdGVyRm9ybWF0dGVyOiBjb2x1bW4uZm9vdGVyRm9ybWF0dGVyXG4gICAgfSkpXG4gICAgLmZpbHRlcihfID0+IF8uZXhwb3J0KTtcblxuZXhwb3J0IGNvbnN0IHRyYW5zZm9ybSA9IChcbiAgZGF0YSxcbiAgbWV0YSxcbiAgY29sdW1ucyxcbiAgXyxcbiAge1xuICAgIHNlcGFyYXRvcixcbiAgICBpZ25vcmVIZWFkZXIsXG4gICAgaWdub3JlRm9vdGVyXG4gIH1cbikgPT4ge1xuICBjb25zdCB2aXNpYmxlQ29sdW1ucyA9IG1ldGEuZmlsdGVyKG0gPT4gbS5leHBvcnQpO1xuICBsZXQgY29udGVudCA9ICcnO1xuICAvLyBleHRyYWN0IGNzdiBoZWFkZXJcbiAgaWYgKCFpZ25vcmVIZWFkZXIpIHtcbiAgICBjb250ZW50ICs9IHZpc2libGVDb2x1bW5zLm1hcChtID0+IGBcIiR7bS5oZWFkZXJ9XCJgKS5qb2luKHNlcGFyYXRvcik7XG4gICAgY29udGVudCArPSAnXFxuJztcbiAgfVxuICAvLyBleHRyYWN0IGNzdiBib2R5XG4gIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGNvbnRlbnQ7XG4gIGNvbnRlbnQgKz0gZGF0YVxuICAgIC5tYXAoKHJvdywgcm93SW5kZXgpID0+XG4gICAgICB2aXNpYmxlQ29sdW1ucy5tYXAoKG0pID0+IHtcbiAgICAgICAgbGV0IGNlbGxDb250ZW50ID0gXy5nZXQocm93LCBtLmZpZWxkKTtcbiAgICAgICAgaWYgKG0uZm9ybWF0dGVyKSB7XG4gICAgICAgICAgY2VsbENvbnRlbnQgPSBtLmZvcm1hdHRlcihjZWxsQ29udGVudCwgcm93LCByb3dJbmRleCwgbS5mb3JtYXRFeHRyYURhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtLnR5cGUgPT09IFN0cmluZykge1xuICAgICAgICAgIHJldHVybiBgXCIke2Ake2NlbGxDb250ZW50fWAucmVwbGFjZSgvXCIvZywgJ1wiXCInKX1cImA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNlbGxDb250ZW50O1xuICAgICAgfSkuam9pbihzZXBhcmF0b3IpKS5qb2luKCdcXG4nKTtcblxuICBpZiAoIWlnbm9yZUZvb3Rlcikge1xuICAgIGNvbnRlbnQgKz0gJ1xcbic7XG4gICAgY29udGVudCArPSB2aXNpYmxlQ29sdW1ucy5tYXAoKG0sIGkpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgbS5mb290ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3QgY29sdW1uRGF0YSA9IF8ucGx1Y2soZGF0YSwgY29sdW1uc1tpXS5kYXRhRmllbGQpO1xuICAgICAgICByZXR1cm4gYFwiJHttLmZvb3Rlcihjb2x1bW5EYXRhLCBjb2x1bW5zW2ldLCBpKX1cImA7XG4gICAgICB9IGVsc2UgaWYgKG0uZm9vdGVyRm9ybWF0dGVyKSB7XG4gICAgICAgIHJldHVybiBgXCIke20uZm9vdGVyRm9ybWF0dGVyKGNvbHVtbnNbaV0sIGkpfVwiYDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBgXCIke20uZm9vdGVyfVwiYDtcbiAgICB9KS5qb2luKHNlcGFyYXRvcik7XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgY29uc3Qgc2F2ZSA9IChcbiAgY29udGVudCxcbiAge1xuICAgIG5vQXV0b0JPTSxcbiAgICBmaWxlTmFtZSxcbiAgICBibG9iVHlwZVxuICB9XG4pID0+IHtcbiAgRmlsZVNhdmVyLnNhdmVBcyhcbiAgICBuZXcgQmxvYihbY29udGVudF0sIHsgdHlwZTogYmxvYlR5cGUgfSksXG4gICAgZmlsZU5hbWUsXG4gICAgbm9BdXRvQk9NXG4gICk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi10b29sa2l0L3NyYy9jc3YvZXhwb3J0ZXIuanMiLCIoZnVuY3Rpb24oYSxiKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGIpO2Vsc2UgaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGV4cG9ydHMpYigpO2Vsc2V7YigpLGEuRmlsZVNhdmVyPXtleHBvcnRzOnt9fS5leHBvcnRzfX0pKHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGI/Yj17YXV0b0JvbTohMX06XCJvYmplY3RcIiE9dHlwZW9mIGImJihjb25zb2xlLndhcm4oXCJEZXByZWNhdGVkOiBFeHBlY3RlZCB0aGlyZCBhcmd1bWVudCB0byBiZSBhIG9iamVjdFwiKSxiPXthdXRvQm9tOiFifSksYi5hdXRvQm9tJiYvXlxccyooPzp0ZXh0XFwvXFxTKnxhcHBsaWNhdGlvblxcL3htbHxcXFMqXFwvXFxTKlxcK3htbClcXHMqOy4qY2hhcnNldFxccyo9XFxzKnV0Zi04L2kudGVzdChhLnR5cGUpP25ldyBCbG9iKFtcIlxcdUZFRkZcIixhXSx7dHlwZTphLnR5cGV9KTphfWZ1bmN0aW9uIGMoYixjLGQpe3ZhciBlPW5ldyBYTUxIdHRwUmVxdWVzdDtlLm9wZW4oXCJHRVRcIixiKSxlLnJlc3BvbnNlVHlwZT1cImJsb2JcIixlLm9ubG9hZD1mdW5jdGlvbigpe2EoZS5yZXNwb25zZSxjLGQpfSxlLm9uZXJyb3I9ZnVuY3Rpb24oKXtjb25zb2xlLmVycm9yKFwiY291bGQgbm90IGRvd25sb2FkIGZpbGVcIil9LGUuc2VuZCgpfWZ1bmN0aW9uIGQoYSl7dmFyIGI9bmV3IFhNTEh0dHBSZXF1ZXN0O2Iub3BlbihcIkhFQURcIixhLCExKTt0cnl7Yi5zZW5kKCl9Y2F0Y2goYSl7fXJldHVybiAyMDA8PWIuc3RhdHVzJiYyOTk+PWIuc3RhdHVzfWZ1bmN0aW9uIGUoYSl7dHJ5e2EuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIpKX1jYXRjaChjKXt2YXIgYj1kb2N1bWVudC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRzXCIpO2IuaW5pdE1vdXNlRXZlbnQoXCJjbGlja1wiLCEwLCEwLHdpbmRvdywwLDAsMCw4MCwyMCwhMSwhMSwhMSwhMSwwLG51bGwpLGEuZGlzcGF0Y2hFdmVudChiKX19dmFyIGY9XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93LndpbmRvdz09PXdpbmRvdz93aW5kb3c6XCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYuc2VsZj09PXNlbGY/c2VsZjpcIm9iamVjdFwiPT10eXBlb2YgZ2xvYmFsJiZnbG9iYWwuZ2xvYmFsPT09Z2xvYmFsP2dsb2JhbDp2b2lkIDAsYT1mLnNhdmVBc3x8KFwib2JqZWN0XCIhPXR5cGVvZiB3aW5kb3d8fHdpbmRvdyE9PWY/ZnVuY3Rpb24oKXt9OlwiZG93bmxvYWRcImluIEhUTUxBbmNob3JFbGVtZW50LnByb3RvdHlwZT9mdW5jdGlvbihiLGcsaCl7dmFyIGk9Zi5VUkx8fGYud2Via2l0VVJMLGo9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7Zz1nfHxiLm5hbWV8fFwiZG93bmxvYWRcIixqLmRvd25sb2FkPWcsai5yZWw9XCJub29wZW5lclwiLFwic3RyaW5nXCI9PXR5cGVvZiBiPyhqLmhyZWY9YixqLm9yaWdpbj09PWxvY2F0aW9uLm9yaWdpbj9lKGopOmQoai5ocmVmKT9jKGIsZyxoKTplKGosai50YXJnZXQ9XCJfYmxhbmtcIikpOihqLmhyZWY9aS5jcmVhdGVPYmplY3RVUkwoYiksc2V0VGltZW91dChmdW5jdGlvbigpe2kucmV2b2tlT2JqZWN0VVJMKGouaHJlZil9LDRFNCksc2V0VGltZW91dChmdW5jdGlvbigpe2Uoail9LDApKX06XCJtc1NhdmVPck9wZW5CbG9iXCJpbiBuYXZpZ2F0b3I/ZnVuY3Rpb24oZixnLGgpe2lmKGc9Z3x8Zi5uYW1lfHxcImRvd25sb2FkXCIsXCJzdHJpbmdcIiE9dHlwZW9mIGYpbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IoYihmLGgpLGcpO2Vsc2UgaWYoZChmKSljKGYsZyxoKTtlbHNle3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2kuaHJlZj1mLGkudGFyZ2V0PVwiX2JsYW5rXCIsc2V0VGltZW91dChmdW5jdGlvbigpe2UoaSl9KX19OmZ1bmN0aW9uKGEsYixkLGUpe2lmKGU9ZXx8b3BlbihcIlwiLFwiX2JsYW5rXCIpLGUmJihlLmRvY3VtZW50LnRpdGxlPWUuZG9jdW1lbnQuYm9keS5pbm5lclRleHQ9XCJkb3dubG9hZGluZy4uLlwiKSxcInN0cmluZ1wiPT10eXBlb2YgYSlyZXR1cm4gYyhhLGIsZCk7dmFyIGc9XCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIj09PWEudHlwZSxoPS9jb25zdHJ1Y3Rvci9pLnRlc3QoZi5IVE1MRWxlbWVudCl8fGYuc2FmYXJpLGk9L0NyaU9TXFwvW1xcZF0rLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO2lmKChpfHxnJiZoKSYmXCJvYmplY3RcIj09dHlwZW9mIEZpbGVSZWFkZXIpe3ZhciBqPW5ldyBGaWxlUmVhZGVyO2oub25sb2FkZW5kPWZ1bmN0aW9uKCl7dmFyIGE9ai5yZXN1bHQ7YT1pP2E6YS5yZXBsYWNlKC9eZGF0YTpbXjtdKjsvLFwiZGF0YTphdHRhY2htZW50L2ZpbGU7XCIpLGU/ZS5sb2NhdGlvbi5ocmVmPWE6bG9jYXRpb249YSxlPW51bGx9LGoucmVhZEFzRGF0YVVSTChhKX1lbHNle3ZhciBrPWYuVVJMfHxmLndlYmtpdFVSTCxsPWsuY3JlYXRlT2JqZWN0VVJMKGEpO2U/ZS5sb2NhdGlvbj1sOmxvY2F0aW9uLmhyZWY9bCxlPW51bGwsc2V0VGltZW91dChmdW5jdGlvbigpe2sucmV2b2tlT2JqZWN0VVJMKGwpfSw0RTQpfX0pO2Yuc2F2ZUFzPWEuc2F2ZUFzPWEsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmKG1vZHVsZS5leHBvcnRzPWEpfSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZpbGVTYXZlci5taW4uanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXRvb2xraXQvbm9kZV9tb2R1bGVzL2ZpbGUtc2F2ZXIvZGlzdC9GaWxlU2F2ZXIubWluLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuLyogZXNsaW50IG5vLWNvbnRpbnVlOiAwICovXG4vKiBlc2xpbnQgbm8tbG9uZWx5LWlmOiAwICovXG4vKiBlc2xpbnQgY2xhc3MtbWV0aG9kcy11c2UtdGhpczogMCAqL1xuLyogZXNsaW50IGNhbWVsY2FzZTogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChvcHRpb25zID0ge1xuICBzZWFyY2hGb3JtYXR0ZWQ6IGZhbHNlLFxuICBhZnRlclNlYXJjaDogbnVsbCxcbiAgb25Db2x1bW5NYXRjaDogbnVsbFxufSkgPT4gKFxuICBfLFxuICBpc1JlbW90ZVNlYXJjaCxcbiAgaGFuZGxlUmVtb3RlU2VhcmNoQ2hhbmdlXG4pID0+IHtcbiAgY29uc3QgU2VhcmNoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuICBjbGFzcyBTZWFyY2hQcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgICBzZWFyY2hUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgZGF0YUNoYW5nZUxpc3RlbmVyOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIGxldCBpbml0aWFsRGF0YSA9IHByb3BzLmRhdGE7XG4gICAgICBpZiAoaXNSZW1vdGVTZWFyY2goKSAmJiB0aGlzLnByb3BzLnNlYXJjaFRleHQgIT09ICcnKSB7XG4gICAgICAgIGhhbmRsZVJlbW90ZVNlYXJjaENoYW5nZSh0aGlzLnByb3BzLnNlYXJjaFRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdGlhbERhdGEgPSB0aGlzLnNlYXJjaChwcm9wcyk7XG4gICAgICAgIHRoaXMudHJpZ2dlckxpc3RlbmVyKGluaXRpYWxEYXRhLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUgPSB7IGRhdGE6IGluaXRpYWxEYXRhIH07XG4gICAgfVxuXG4gICAgZ2V0U2VhcmNoZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5kYXRhO1xuICAgIH1cblxuICAgIHRyaWdnZXJMaXN0ZW5lcihyZXN1bHQsIHNraXBJbml0KSB7XG4gICAgICBpZiAob3B0aW9ucy5hZnRlclNlYXJjaCAmJiAhc2tpcEluaXQpIHtcbiAgICAgICAgb3B0aW9ucy5hZnRlclNlYXJjaChyZXN1bHQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMuZGF0YUNoYW5nZUxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZGF0YUNoYW5nZUxpc3RlbmVyLmVtaXQoJ2ZpbHRlckNoYW5nZWQnLCByZXN1bHQubGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMuc2VhcmNoVGV4dCAhPT0gdGhpcy5wcm9wcy5zZWFyY2hUZXh0KSB7XG4gICAgICAgIGlmIChpc1JlbW90ZVNlYXJjaCgpKSB7XG4gICAgICAgICAgaGFuZGxlUmVtb3RlU2VhcmNoQ2hhbmdlKG5leHRQcm9wcy5zZWFyY2hUZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnNlYXJjaChuZXh0UHJvcHMpO1xuICAgICAgICAgIHRoaXMudHJpZ2dlckxpc3RlbmVyKHJlc3VsdCk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkYXRhOiByZXN1bHRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzUmVtb3RlU2VhcmNoKCkpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogbmV4dFByb3BzLmRhdGEgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIV8uaXNFcXVhbChuZXh0UHJvcHMuZGF0YSwgdGhpcy5wcm9wcy5kYXRhKSkge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc2VhcmNoKG5leHRQcm9wcyk7XG4gICAgICAgICAgdGhpcy50cmlnZ2VyTGlzdGVuZXIocmVzdWx0KTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2VhcmNoKHByb3BzKSB7XG4gICAgICBjb25zdCB7IGRhdGEsIGNvbHVtbnMgfSA9IHByb3BzO1xuICAgICAgY29uc3Qgc2VhcmNoVGV4dCA9IHByb3BzLnNlYXJjaFRleHQudG9Mb3dlckNhc2UoKTtcbiAgICAgIHJldHVybiBkYXRhLmZpbHRlcigocm93LCByaWR4KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGNpZHggPSAwOyBjaWR4IDwgY29sdW1ucy5sZW5ndGg7IGNpZHggKz0gMSkge1xuICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IGNvbHVtbnNbY2lkeF07XG4gICAgICAgICAgaWYgKGNvbHVtbi5zZWFyY2hhYmxlID09PSBmYWxzZSkgY29udGludWU7XG4gICAgICAgICAgbGV0IHRhcmdldFZhbHVlID0gXy5nZXQocm93LCBjb2x1bW4uZGF0YUZpZWxkKTtcbiAgICAgICAgICBpZiAoY29sdW1uLmZvcm1hdHRlciAmJiBvcHRpb25zLnNlYXJjaEZvcm1hdHRlZCkge1xuICAgICAgICAgICAgdGFyZ2V0VmFsdWUgPSBjb2x1bW4uZm9ybWF0dGVyKHRhcmdldFZhbHVlLCByb3csIHJpZHgsIGNvbHVtbi5mb3JtYXRFeHRyYURhdGEpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29sdW1uLmZpbHRlclZhbHVlKSB7XG4gICAgICAgICAgICB0YXJnZXRWYWx1ZSA9IGNvbHVtbi5maWx0ZXJWYWx1ZSh0YXJnZXRWYWx1ZSwgcm93KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG9wdGlvbnMub25Db2x1bW5NYXRjaCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMub25Db2x1bW5NYXRjaCh7XG4gICAgICAgICAgICAgIHNlYXJjaFRleHQsXG4gICAgICAgICAgICAgIHZhbHVlOiB0YXJnZXRWYWx1ZSxcbiAgICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgICAgICByb3dcbiAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0VmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHRhcmdldFZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICB0YXJnZXRWYWx1ZSA9IHRhcmdldFZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgaWYgKHRhcmdldFZhbHVlLmluZGV4T2Yoc2VhcmNoVGV4dCkgPiAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTZWFyY2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXsgeyBkYXRhOiB0aGlzLnN0YXRlLmRhdGEgfSB9PlxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgIDwvU2VhcmNoQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBQcm92aWRlcjogU2VhcmNoUHJvdmlkZXIsXG4gICAgQ29uc3VtZXI6IFNlYXJjaENvbnRleHQuQ29uc3VtZXJcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXRvb2xraXQvc3JjL3NlYXJjaC9jb250ZXh0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVG9vbGtpdENvbnRleHQgZnJvbSAnLi9jb250ZXh0JztcblxuY29uc3QgVG9vbGtpdHByb3ZpZGVyID0gcHJvcHMgPT4gKFxuICA8VG9vbGtpdENvbnRleHQuUHJvdmlkZXIgeyAuLi5wcm9wcyB9PlxuICAgIDxUb29sa2l0Q29udGV4dC5Db25zdW1lcj5cbiAgICAgIHtcbiAgICAgICAgdG9va0tpdFByb3BzID0+IHByb3BzLmNoaWxkcmVuKHRvb2tLaXRQcm9wcylcbiAgICAgIH1cbiAgICA8L1Rvb2xraXRDb250ZXh0LkNvbnN1bWVyPlxuICA8L1Rvb2xraXRDb250ZXh0LlByb3ZpZGVyPlxuKTtcblxuVG9vbGtpdHByb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2xraXRwcm92aWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItdG9vbGtpdC9wcm92aWRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=react-bootstrap-table2-toolkit.js.map