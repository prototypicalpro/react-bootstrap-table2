(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapTable2Filter"] = factory(require("react"));
	else
		root["ReactBootstrapTable2Filter"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LIKE = exports.LIKE = 'LIKE';
var EQ = exports.EQ = '=';
var NE = exports.NE = '!=';
var GT = exports.GT = '>';
var GE = exports.GE = '>=';
var LT = exports.LT = '<';
var LE = exports.LE = '<=';

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FILTER_TYPE = exports.FILTER_TYPE = {
  TEXT: 'TEXT',
  SELECT: 'SELECT',
  MULTISELECT: 'MULTISELECT',
  NUMBER: 'NUMBER',
  DATE: 'DATE'
};

var FILTER_DELAY = exports.FILTER_DELAY = 500;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customFilter = exports.dateFilter = exports.numberFilter = exports.multiSelectFilter = exports.selectFilter = exports.textFilter = exports.Comparator = exports.FILTER_TYPES = undefined;

var _text = __webpack_require__(5);

var _text2 = _interopRequireDefault(_text);

var _select = __webpack_require__(10);

var _select2 = _interopRequireDefault(_select);

var _multiselect = __webpack_require__(11);

var _multiselect2 = _interopRequireDefault(_multiselect);

var _number = __webpack_require__(12);

var _number2 = _interopRequireDefault(_number);

var _date = __webpack_require__(13);

var _date2 = _interopRequireDefault(_date);

var _context = __webpack_require__(14);

var _context2 = _interopRequireDefault(_context);

var _comparison = __webpack_require__(0);

var Comparison = _interopRequireWildcard(_comparison);

var _const = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    createContext: _context2.default,
    options: options
  };
};

var FILTER_TYPES = exports.FILTER_TYPES = _const.FILTER_TYPE;

var Comparator = exports.Comparator = Comparison;

var textFilter = exports.textFilter = function textFilter() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    Filter: _text2.default,
    props: props
  };
};

var selectFilter = exports.selectFilter = function selectFilter() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    Filter: _select2.default,
    props: props
  };
};

var multiSelectFilter = exports.multiSelectFilter = function multiSelectFilter() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    Filter: _multiselect2.default,
    props: props
  };
};

var numberFilter = exports.numberFilter = function numberFilter() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    Filter: _number2.default,
    props: props
  };
};

var dateFilter = exports.dateFilter = function dateFilter() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    Filter: _date2.default,
    props: props
  };
};

var customFilter = exports.customFilter = function customFilter() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    props: props
  };
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _comparison = __webpack_require__(0);

var _const = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */
/* eslint react/prop-types: 0 */
/* eslint no-return-assign: 0 */
/* eslint camelcase: 0 */


var TextFilter = function (_Component) {
  _inherits(TextFilter, _Component);

  function TextFilter(props) {
    _classCallCheck(this, TextFilter);

    var _this = _possibleConstructorReturn(this, (TextFilter.__proto__ || Object.getPrototypeOf(TextFilter)).call(this, props));

    _this.filter = _this.filter.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.timeout = null;
    function getDefaultValue() {
      if (props.filterState && typeof props.filterState.filterVal !== 'undefined') {
        return props.filterState.filterVal;
      }
      return props.defaultValue;
    }
    _this.state = {
      value: getDefaultValue()
    };
    return _this;
  }

  _createClass(TextFilter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          onFilter = _props.onFilter,
          getFilter = _props.getFilter,
          column = _props.column;

      var defaultValue = this.input.value;

      if (defaultValue) {
        onFilter(this.props.column, _const.FILTER_TYPE.TEXT, true)(defaultValue);
      }

      // export onFilter function to allow users to access
      if (getFilter) {
        getFilter(function (filterVal) {
          _this2.setState(function () {
            return { value: filterVal };
          });
          onFilter(column, _const.FILTER_TYPE.TEXT)(filterVal);
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.cleanTimer();
    }
  }, {
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.defaultValue !== this.props.defaultValue) {
        this.applyFilter(nextProps.defaultValue);
      }
    }
  }, {
    key: 'filter',
    value: function filter(e) {
      var _this3 = this;

      e.stopPropagation();
      this.cleanTimer();
      var filterValue = e.target.value;
      this.setState(function () {
        return { value: filterValue };
      });
      this.timeout = setTimeout(function () {
        _this3.props.onFilter(_this3.props.column, _const.FILTER_TYPE.TEXT)(filterValue);
      }, this.props.delay);
    }
  }, {
    key: 'cleanTimer',
    value: function cleanTimer() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      var value = this.props.defaultValue;
      this.setState(function () {
        return { value: value };
      });
      this.props.onFilter(this.props.column, _const.FILTER_TYPE.TEXT)(value);
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(filterText) {
      this.setState(function () {
        return { value: filterText };
      });
      this.props.onFilter(this.props.column, _const.FILTER_TYPE.TEXT)(filterText);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      e.stopPropagation();
      if (this.props.onClick) {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props2 = this.props,
          id = _props2.id,
          placeholder = _props2.placeholder,
          _props2$column = _props2.column,
          dataField = _props2$column.dataField,
          text = _props2$column.text,
          style = _props2.style,
          className = _props2.className,
          onFilter = _props2.onFilter,
          caseSensitive = _props2.caseSensitive,
          defaultValue = _props2.defaultValue,
          getFilter = _props2.getFilter,
          filterState = _props2.filterState,
          rest = _objectWithoutProperties(_props2, ['id', 'placeholder', 'column', 'style', 'className', 'onFilter', 'caseSensitive', 'defaultValue', 'getFilter', 'filterState']);

      var elmId = 'text-filter-column-' + dataField + (id ? '-' + id : '');

      return _react2.default.createElement(
        'label',
        {
          className: 'filter-label',
          htmlFor: elmId
        },
        _react2.default.createElement(
          'span',
          { className: 'sr-only' },
          'Filter by ',
          text
        ),
        _react2.default.createElement('input', _extends({}, rest, {
          ref: function ref(n) {
            return _this4.input = n;
          },
          type: 'text',
          id: elmId,
          className: 'filter text-filter form-control ' + className,
          style: style,
          onChange: this.filter,
          onClick: this.handleClick,
          placeholder: placeholder || 'Enter ' + text + '...',
          value: this.state.value
        }))
      );
    }
  }]);

  return TextFilter;
}(_react.Component);

TextFilter.propTypes = {
  onFilter: _propTypes.PropTypes.func.isRequired,
  column: _propTypes.PropTypes.object.isRequired,
  id: _propTypes.PropTypes.string,
  filterState: _propTypes.PropTypes.object,
  comparator: _propTypes.PropTypes.oneOf([_comparison.LIKE, _comparison.EQ]),
  defaultValue: _propTypes.PropTypes.string,
  delay: _propTypes.PropTypes.number,
  placeholder: _propTypes.PropTypes.string,
  style: _propTypes.PropTypes.object,
  className: _propTypes.PropTypes.string,
  caseSensitive: _propTypes.PropTypes.bool,
  getFilter: _propTypes.PropTypes.func
};

TextFilter.defaultProps = {
  delay: _const.FILTER_DELAY,
  filterState: {},
  defaultValue: '',
  caseSensitive: false,
  id: null
};

exports.default = TextFilter;

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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _comparison = __webpack_require__(0);

var _const = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */
/* eslint no-return-assign: 0 */
/* eslint react/no-unused-prop-types: 0 */
/* eslint class-methods-use-this: 0 */


function optionsEquals(currOpts, prevOpts) {
  if (Array.isArray(currOpts)) {
    if (currOpts.length === prevOpts.length) {
      for (var i = 0; i < currOpts.length; i += 1) {
        if (currOpts[i].value !== prevOpts[i].value || currOpts[i].label !== prevOpts[i].label) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
  var keys = Object.keys(currOpts);
  for (var _i = 0; _i < keys.length; _i += 1) {
    if (currOpts[keys[_i]] !== prevOpts[keys[_i]]) {
      return false;
    }
  }
  return Object.keys(currOpts).length === Object.keys(prevOpts).length;
}

function getOptionValue(options, key) {
  if (Array.isArray(options)) {
    var result = options.filter(function (_ref) {
      var label = _ref.label;
      return label === key;
    }).map(function (_ref2) {
      var value = _ref2.value;
      return value;
    });
    return result[0];
  }
  return options[key];
}

var SelectFilter = function (_Component) {
  _inherits(SelectFilter, _Component);

  function SelectFilter(props) {
    _classCallCheck(this, SelectFilter);

    var _this = _possibleConstructorReturn(this, (SelectFilter.__proto__ || Object.getPrototypeOf(SelectFilter)).call(this, props));

    _this.filter = _this.filter.bind(_this);
    _this.options = _this.getOptions(props);
    var isSelected = getOptionValue(_this.options, _this.getDefaultValue()) !== undefined;
    _this.state = { isSelected: isSelected };
    return _this;
  }

  _createClass(SelectFilter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          column = _props.column,
          onFilter = _props.onFilter,
          getFilter = _props.getFilter;


      var value = this.selectInput.value;
      if (value && value !== '') {
        onFilter(column, _const.FILTER_TYPE.SELECT, true)(value);
      }

      // export onFilter function to allow users to access
      if (getFilter) {
        getFilter(function (filterVal) {
          _this2.setState(function () {
            return { isSelected: filterVal !== '' };
          });
          _this2.selectInput.value = filterVal;

          onFilter(column, _const.FILTER_TYPE.SELECT)(filterVal);
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var needFilter = false;
      var _props2 = this.props,
          column = _props2.column,
          onFilter = _props2.onFilter,
          defaultValue = _props2.defaultValue;

      var nextOptions = this.getOptions(this.props);
      if (defaultValue !== prevProps.defaultValue) {
        needFilter = true;
      } else if (!optionsEquals(nextOptions, this.options)) {
        this.options = nextOptions;
        needFilter = true;
      }
      if (needFilter) {
        var value = this.selectInput.value;
        if (value) {
          onFilter(column, _const.FILTER_TYPE.SELECT)(value);
        }
      }
    }
  }, {
    key: 'getOptions',
    value: function getOptions(props) {
      return typeof props.options === 'function' ? props.options(props.column) : props.options;
    }
  }, {
    key: 'getDefaultValue',
    value: function getDefaultValue() {
      var _props3 = this.props,
          filterState = _props3.filterState,
          defaultValue = _props3.defaultValue;

      if (filterState && typeof filterState.filterVal !== 'undefined') {
        return filterState.filterVal;
      }
      return defaultValue;
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      var value = this.props.defaultValue !== undefined ? this.props.defaultValue : '';
      this.setState(function () {
        return { isSelected: value !== '' };
      });
      this.selectInput.value = value;
      this.props.onFilter(this.props.column, _const.FILTER_TYPE.SELECT)(value);
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(value) {
      this.selectInput.value = value;
      this.setState(function () {
        return { isSelected: value !== '' };
      });
      this.props.onFilter(this.props.column, _const.FILTER_TYPE.SELECT)(value);
    }
  }, {
    key: 'filter',
    value: function filter(e) {
      var value = e.target.value;

      this.setState(function () {
        return { isSelected: value !== '' };
      });
      this.props.onFilter(this.props.column, _const.FILTER_TYPE.SELECT)(value);
    }
  }, {
    key: 'renderOptions',
    value: function renderOptions() {
      var optionTags = [];
      var options = this.options;
      var _props4 = this.props,
          placeholder = _props4.placeholder,
          column = _props4.column,
          withoutEmptyOption = _props4.withoutEmptyOption;

      if (!withoutEmptyOption) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: '-1', value: '' },
          placeholder || 'Select ' + column.text + '...'
        ));
      }
      if (Array.isArray(options)) {
        options.forEach(function (_ref3) {
          var value = _ref3.value,
              label = _ref3.label;
          return optionTags.push(_react2.default.createElement(
            'option',
            { key: value, value: value },
            label
          ));
        });
      } else {
        Object.keys(options).forEach(function (key) {
          return optionTags.push(_react2.default.createElement(
            'option',
            { key: key, value: key },
            options[key]
          ));
        });
      }
      return optionTags;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props5 = this.props,
          id = _props5.id,
          style = _props5.style,
          className = _props5.className,
          defaultValue = _props5.defaultValue,
          onFilter = _props5.onFilter,
          column = _props5.column,
          options = _props5.options,
          comparator = _props5.comparator,
          withoutEmptyOption = _props5.withoutEmptyOption,
          caseSensitive = _props5.caseSensitive,
          getFilter = _props5.getFilter,
          filterState = _props5.filterState,
          rest = _objectWithoutProperties(_props5, ['id', 'style', 'className', 'defaultValue', 'onFilter', 'column', 'options', 'comparator', 'withoutEmptyOption', 'caseSensitive', 'getFilter', 'filterState']);

      var selectClass = 'filter select-filter form-control ' + className + ' ' + (this.state.isSelected ? '' : 'placeholder-selected');
      var elmId = 'select-filter-column-' + column.dataField + (id ? '-' + id : '');

      return _react2.default.createElement(
        'label',
        {
          className: 'filter-label',
          htmlFor: elmId
        },
        _react2.default.createElement(
          'span',
          { className: 'sr-only' },
          'Filter by ',
          column.text
        ),
        _react2.default.createElement(
          'select',
          _extends({}, rest, {
            ref: function ref(n) {
              return _this3.selectInput = n;
            },
            id: elmId,
            style: style,
            className: selectClass,
            onChange: this.filter,
            onClick: function onClick(e) {
              return e.stopPropagation();
            },
            defaultValue: this.getDefaultValue() || ''
          }),
          this.renderOptions()
        )
      );
    }
  }]);

  return SelectFilter;
}(_react.Component);

SelectFilter.propTypes = {
  onFilter: _propTypes2.default.func.isRequired,
  column: _propTypes2.default.object.isRequired,
  id: _propTypes2.default.string,
  filterState: _propTypes2.default.object,
  options: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array]).isRequired,
  comparator: _propTypes2.default.oneOf([_comparison.LIKE, _comparison.EQ]),
  placeholder: _propTypes2.default.string,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  withoutEmptyOption: _propTypes2.default.bool,
  defaultValue: _propTypes2.default.any,
  caseSensitive: _propTypes2.default.bool,
  getFilter: _propTypes2.default.func
};

SelectFilter.defaultProps = {
  defaultValue: '',
  filterState: {},
  className: '',
  withoutEmptyOption: false,
  comparator: _comparison.EQ,
  caseSensitive: true,
  id: null
};

exports.default = SelectFilter;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _comparison = __webpack_require__(0);

var _const = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */
/* eslint no-return-assign: 0 */
/* eslint no-param-reassign: 0 */
/* eslint react/no-unused-prop-types: 0 */


function optionsEquals(currOpts, prevOpts) {
  var keys = Object.keys(currOpts);
  for (var i = 0; i < keys.length; i += 1) {
    if (currOpts[keys[i]] !== prevOpts[keys[i]]) {
      return false;
    }
  }
  return Object.keys(currOpts).length === Object.keys(prevOpts).length;
}

var getSelections = function getSelections(container) {
  if (container.selectedOptions) {
    return Array.from(container.selectedOptions).map(function (item) {
      return item.value;
    });
  }
  var selections = [];
  var totalLen = container.options.length;
  for (var i = 0; i < totalLen; i += 1) {
    var option = container.options.item(i);
    if (option.selected) selections.push(option.value);
  }
  return selections;
};

var MultiSelectFilter = function (_Component) {
  _inherits(MultiSelectFilter, _Component);

  function MultiSelectFilter(props) {
    _classCallCheck(this, MultiSelectFilter);

    var _this = _possibleConstructorReturn(this, (MultiSelectFilter.__proto__ || Object.getPrototypeOf(MultiSelectFilter)).call(this, props));

    _this.filter = _this.filter.bind(_this);
    _this.applyFilter = _this.applyFilter.bind(_this);
    var isSelected = props.defaultValue.map(function (item) {
      return props.options[item];
    }).length > 0;
    _this.state = { isSelected: isSelected };
    return _this;
  }

  _createClass(MultiSelectFilter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var getFilter = this.props.getFilter;


      var value = getSelections(this.selectInput);
      if (value && value.length > 0) {
        this.applyFilter(value);
      }

      // export onFilter function to allow users to access
      if (getFilter) {
        getFilter(function (filterVal) {
          _this2.selectInput.value = filterVal;
          _this2.applyFilter(filterVal);
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var needFilter = false;
      if (this.props.defaultValue !== prevProps.defaultValue) {
        needFilter = true;
      } else if (!optionsEquals(this.props.options, prevProps.options)) {
        needFilter = true;
      }
      if (needFilter) {
        this.applyFilter(getSelections(this.selectInput));
      }
    }
  }, {
    key: 'getDefaultValue',
    value: function getDefaultValue() {
      var _props = this.props,
          filterState = _props.filterState,
          defaultValue = _props.defaultValue;

      if (filterState && typeof filterState.filterVal !== 'undefined') {
        return filterState.filterVal;
      }
      return defaultValue;
    }
  }, {
    key: 'getOptions',
    value: function getOptions() {
      var optionTags = [];
      var _props2 = this.props,
          options = _props2.options,
          placeholder = _props2.placeholder,
          column = _props2.column,
          withoutEmptyOption = _props2.withoutEmptyOption;

      if (!withoutEmptyOption) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: '-1', value: '' },
          placeholder || 'Select ' + column.text + '...'
        ));
      }
      Object.keys(options).forEach(function (key) {
        return optionTags.push(_react2.default.createElement(
          'option',
          { key: key, value: key },
          options[key]
        ));
      });
      return optionTags;
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      var value = this.props.defaultValue !== undefined ? this.props.defaultValue : [];
      this.selectInput.value = value;
      this.applyFilter(value);
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(value) {
      if (value.length === 1 && value[0] === '') {
        value = [];
      }
      this.setState(function () {
        return { isSelected: value.length > 0 };
      });
      this.props.onFilter(this.props.column, _const.FILTER_TYPE.MULTISELECT)(value);
    }
  }, {
    key: 'filter',
    value: function filter(e) {
      var value = getSelections(e.target);
      this.applyFilter(value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props3 = this.props,
          id = _props3.id,
          style = _props3.style,
          className = _props3.className,
          filterState = _props3.filterState,
          defaultValue = _props3.defaultValue,
          onFilter = _props3.onFilter,
          column = _props3.column,
          options = _props3.options,
          comparator = _props3.comparator,
          withoutEmptyOption = _props3.withoutEmptyOption,
          caseSensitive = _props3.caseSensitive,
          getFilter = _props3.getFilter,
          rest = _objectWithoutProperties(_props3, ['id', 'style', 'className', 'filterState', 'defaultValue', 'onFilter', 'column', 'options', 'comparator', 'withoutEmptyOption', 'caseSensitive', 'getFilter']);

      var selectClass = 'filter select-filter form-control ' + className + ' ' + (this.state.isSelected ? '' : 'placeholder-selected');
      var elmId = 'multiselect-filter-column-' + column.dataField + (id ? '-' + id : '');

      return _react2.default.createElement(
        'label',
        {
          className: 'filter-label',
          htmlFor: elmId
        },
        _react2.default.createElement(
          'span',
          { className: 'sr-only' },
          'Filter by ',
          column.text
        ),
        _react2.default.createElement(
          'select',
          _extends({}, rest, {
            ref: function ref(n) {
              return _this3.selectInput = n;
            },
            id: elmId,
            style: style,
            multiple: true,
            className: selectClass,
            onChange: this.filter,
            onClick: function onClick(e) {
              return e.stopPropagation();
            },
            defaultValue: this.getDefaultValue()
          }),
          this.getOptions()
        )
      );
    }
  }]);

  return MultiSelectFilter;
}(_react.Component);

MultiSelectFilter.propTypes = {
  onFilter: _propTypes2.default.func.isRequired,
  column: _propTypes2.default.object.isRequired,
  options: _propTypes2.default.object.isRequired,
  id: _propTypes2.default.string,
  filterState: _propTypes2.default.object,
  comparator: _propTypes2.default.oneOf([_comparison.LIKE, _comparison.EQ]),
  placeholder: _propTypes2.default.string,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  withoutEmptyOption: _propTypes2.default.bool,
  defaultValue: _propTypes2.default.array,
  caseSensitive: _propTypes2.default.bool,
  getFilter: _propTypes2.default.func
};

MultiSelectFilter.defaultProps = {
  defaultValue: [],
  filterState: {},
  className: '',
  withoutEmptyOption: false,
  comparator: _comparison.EQ,
  caseSensitive: true,
  id: null
};

exports.default = MultiSelectFilter;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _comparison = __webpack_require__(0);

var Comparator = _interopRequireWildcard(_comparison);

var _const = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint jsx-a11y/no-static-element-interactions: 0 */
/* eslint react/require-default-props: 0 */
/* eslint no-return-assign: 0 */

var legalComparators = [Comparator.EQ, Comparator.NE, Comparator.GT, Comparator.GE, Comparator.LT, Comparator.LE];

var NumberFilter = function (_Component) {
  _inherits(NumberFilter, _Component);

  function NumberFilter(props) {
    _classCallCheck(this, NumberFilter);

    var _this = _possibleConstructorReturn(this, (NumberFilter.__proto__ || Object.getPrototypeOf(NumberFilter)).call(this, props));

    _this.comparators = props.comparators || legalComparators;
    _this.timeout = null;
    var isSelected = props.defaultValue !== undefined && props.defaultValue.number !== undefined;
    if (props.options && isSelected) {
      isSelected = props.options.indexOf(props.defaultValue.number) > -1;
    }
    _this.state = { isSelected: isSelected };
    _this.onChangeNumber = _this.onChangeNumber.bind(_this);
    _this.onChangeNumberSet = _this.onChangeNumberSet.bind(_this);
    _this.onChangeComparator = _this.onChangeComparator.bind(_this);
    return _this;
  }

  _createClass(NumberFilter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          column = _props.column,
          onFilter = _props.onFilter,
          getFilter = _props.getFilter;

      var comparator = this.numberFilterComparator.value;
      var number = this.numberFilter.value;
      if (comparator && number) {
        onFilter(column, _const.FILTER_TYPE.NUMBER, true)({ number: number, comparator: comparator });
      }

      // export onFilter function to allow users to access
      if (getFilter) {
        getFilter(function (filterVal) {
          _this2.setState(function () {
            return { isSelected: filterVal !== '' };
          });
          _this2.numberFilterComparator.value = filterVal.comparator;
          _this2.numberFilter.value = filterVal.number;

          onFilter(column, _const.FILTER_TYPE.NUMBER)({
            number: filterVal.number,
            comparator: filterVal.comparator
          });
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'onChangeNumber',
    value: function onChangeNumber(e) {
      var _props2 = this.props,
          delay = _props2.delay,
          column = _props2.column,
          onFilter = _props2.onFilter;

      var comparator = this.numberFilterComparator.value;
      if (comparator === '') {
        return;
      }
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      var filterValue = e.target.value;
      this.timeout = setTimeout(function () {
        onFilter(column, _const.FILTER_TYPE.NUMBER)({ number: filterValue, comparator: comparator });
      }, delay);
    }
  }, {
    key: 'onChangeNumberSet',
    value: function onChangeNumberSet(e) {
      var _props3 = this.props,
          column = _props3.column,
          onFilter = _props3.onFilter;

      var comparator = this.numberFilterComparator.value;
      var value = e.target.value;

      this.setState(function () {
        return { isSelected: value !== '' };
      });
      // if (comparator === '') {
      //   return;
      // }
      onFilter(column, _const.FILTER_TYPE.NUMBER)({ number: value, comparator: comparator });
    }
  }, {
    key: 'onChangeComparator',
    value: function onChangeComparator(e) {
      var _props4 = this.props,
          column = _props4.column,
          onFilter = _props4.onFilter;

      var value = this.numberFilter.value;
      var comparator = e.target.value;
      // if (value === '') {
      //   return;
      // }
      onFilter(column, _const.FILTER_TYPE.NUMBER)({ number: value, comparator: comparator });
    }
  }, {
    key: 'getDefaultComparator',
    value: function getDefaultComparator() {
      var _props5 = this.props,
          defaultValue = _props5.defaultValue,
          filterState = _props5.filterState;

      if (filterState && filterState.filterVal) {
        return filterState.filterVal.comparator;
      }
      if (defaultValue && defaultValue.comparator) {
        return defaultValue.comparator;
      }
      return '';
    }
  }, {
    key: 'getDefaultValue',
    value: function getDefaultValue() {
      var _props6 = this.props,
          defaultValue = _props6.defaultValue,
          filterState = _props6.filterState;

      if (filterState && filterState.filterVal) {
        return filterState.filterVal.number;
      }
      if (defaultValue && defaultValue.number) {
        return defaultValue.number;
      }
      return '';
    }
  }, {
    key: 'getComparatorOptions',
    value: function getComparatorOptions() {
      var optionTags = [];
      var withoutEmptyComparatorOption = this.props.withoutEmptyComparatorOption;

      if (!withoutEmptyComparatorOption) {
        optionTags.push(_react2.default.createElement('option', { key: '-1' }));
      }
      for (var i = 0; i < this.comparators.length; i += 1) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: i, value: this.comparators[i] },
          this.comparators[i]
        ));
      }
      return optionTags;
    }
  }, {
    key: 'getNumberOptions',
    value: function getNumberOptions() {
      var optionTags = [];
      var _props7 = this.props,
          options = _props7.options,
          column = _props7.column,
          withoutEmptyNumberOption = _props7.withoutEmptyNumberOption;

      if (!withoutEmptyNumberOption) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: '-1', value: '' },
          this.props.placeholder || 'Select ' + column.text + '...'
        ));
      }
      for (var i = 0; i < options.length; i += 1) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: i, value: options[i] },
          options[i]
        ));
      }
      return optionTags;
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(filterObj) {
      var _props8 = this.props,
          column = _props8.column,
          onFilter = _props8.onFilter;
      var number = filterObj.number,
          comparator = filterObj.comparator;

      this.setState(function () {
        return { isSelected: number !== '' };
      });
      this.numberFilterComparator.value = comparator;
      this.numberFilter.value = number;
      onFilter(column, _const.FILTER_TYPE.NUMBER)({ number: number, comparator: comparator });
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      var _props9 = this.props,
          column = _props9.column,
          onFilter = _props9.onFilter,
          defaultValue = _props9.defaultValue;

      var value = defaultValue ? defaultValue.number : '';
      var comparator = defaultValue ? defaultValue.comparator : '';
      this.setState(function () {
        return { isSelected: value !== '' };
      });
      this.numberFilterComparator.value = comparator;
      this.numberFilter.value = value;
      onFilter(column, _const.FILTER_TYPE.NUMBER)({ number: value, comparator: comparator });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var isSelected = this.state.isSelected;
      var _props10 = this.props,
          id = _props10.id,
          column = _props10.column,
          options = _props10.options,
          style = _props10.style,
          className = _props10.className,
          numberStyle = _props10.numberStyle,
          numberClassName = _props10.numberClassName,
          comparatorStyle = _props10.comparatorStyle,
          comparatorClassName = _props10.comparatorClassName,
          placeholder = _props10.placeholder;

      var selectClass = '\n      select-filter \n      number-filter-input \n      form-control \n      ' + numberClassName + ' \n      ' + (!isSelected ? 'placeholder-selected' : '') + '\n    ';

      var comparatorElmId = 'number-filter-comparator-' + column.dataField + (id ? '-' + id : '');
      var inputElmId = 'number-filter-column-' + column.dataField + (id ? '-' + id : '');

      return _react2.default.createElement(
        'div',
        {
          onClick: function onClick(e) {
            return e.stopPropagation();
          },
          className: 'filter number-filter ' + className,
          style: style
        },
        _react2.default.createElement(
          'label',
          {
            className: 'filter-label',
            htmlFor: comparatorElmId
          },
          _react2.default.createElement(
            'span',
            { className: 'sr-only' },
            'Filter comparator'
          ),
          _react2.default.createElement(
            'select',
            {
              ref: function ref(n) {
                return _this3.numberFilterComparator = n;
              },
              style: comparatorStyle,
              id: comparatorElmId,
              className: 'number-filter-comparator form-control ' + comparatorClassName,
              onChange: this.onChangeComparator,
              defaultValue: this.getDefaultComparator()
            },
            this.getComparatorOptions()
          )
        ),
        options ? _react2.default.createElement(
          'label',
          {
            className: 'filter-label',
            htmlFor: inputElmId
          },
          _react2.default.createElement(
            'span',
            { className: 'sr-only' },
            'Select ' + column.text
          ),
          _react2.default.createElement(
            'select',
            {
              ref: function ref(n) {
                return _this3.numberFilter = n;
              },
              id: inputElmId,
              style: numberStyle,
              className: selectClass,
              onChange: this.onChangeNumberSet,
              defaultValue: this.getDefaultValue()
            },
            this.getNumberOptions()
          )
        ) : _react2.default.createElement(
          'label',
          { htmlFor: inputElmId },
          _react2.default.createElement(
            'span',
            { className: 'sr-only' },
            'Enter ' + column.text
          ),
          _react2.default.createElement('input', {
            ref: function ref(n) {
              return _this3.numberFilter = n;
            },
            id: inputElmId,
            type: 'number',
            style: numberStyle,
            className: 'number-filter-input form-control ' + numberClassName,
            placeholder: placeholder || 'Enter ' + column.text + '...',
            onChange: this.onChangeNumber,
            defaultValue: this.getDefaultValue()
          })
        )
      );
    }
  }]);

  return NumberFilter;
}(_react.Component);

NumberFilter.propTypes = {
  onFilter: _propTypes2.default.func.isRequired,
  column: _propTypes2.default.object.isRequired,
  id: _propTypes2.default.string,
  filterState: _propTypes2.default.object,
  options: _propTypes2.default.arrayOf(_propTypes2.default.number),
  defaultValue: _propTypes2.default.shape({
    number: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    comparator: _propTypes2.default.oneOf([].concat(legalComparators, ['']))
  }),
  delay: _propTypes2.default.number,
  /* eslint consistent-return: 0 */
  comparators: function comparators(props, propName) {
    if (!props[propName]) {
      return;
    }
    for (var i = 0; i < props[propName].length; i += 1) {
      var comparatorIsValid = false;
      for (var j = 0; j < legalComparators.length; j += 1) {
        if (legalComparators[j] === props[propName][i] || props[propName][i] === '') {
          comparatorIsValid = true;
          break;
        }
      }
      if (!comparatorIsValid) {
        return new Error('Number comparator provided is not supported.\n          Use only ' + legalComparators);
      }
    }
  },
  placeholder: _propTypes2.default.string,
  withoutEmptyComparatorOption: _propTypes2.default.bool,
  withoutEmptyNumberOption: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  comparatorStyle: _propTypes2.default.object,
  comparatorClassName: _propTypes2.default.string,
  numberStyle: _propTypes2.default.object,
  numberClassName: _propTypes2.default.string,
  getFilter: _propTypes2.default.func
};

NumberFilter.defaultProps = {
  delay: _const.FILTER_DELAY,
  options: undefined,
  defaultValue: {
    number: undefined,
    comparator: ''
  },
  filterState: {},
  withoutEmptyComparatorOption: false,
  withoutEmptyNumberOption: false,
  comparators: legalComparators,
  placeholder: undefined,
  style: undefined,
  className: '',
  comparatorStyle: undefined,
  comparatorClassName: '',
  numberStyle: undefined,
  numberClassName: '',
  id: null
};

exports.default = NumberFilter;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _comparison = __webpack_require__(0);

var Comparator = _interopRequireWildcard(_comparison);

var _const = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */
/* eslint no-return-assign: 0 */
/* eslint prefer-template: 0 */


var legalComparators = [Comparator.EQ, Comparator.NE, Comparator.GT, Comparator.GE, Comparator.LT, Comparator.LE];

function dateParser(d) {
  return d.getUTCFullYear() + '-' + ('0' + (d.getUTCMonth() + 1)).slice(-2) + '-' + ('0' + d.getUTCDate()).slice(-2);
}

var DateFilter = function (_Component) {
  _inherits(DateFilter, _Component);

  function DateFilter(props) {
    _classCallCheck(this, DateFilter);

    var _this = _possibleConstructorReturn(this, (DateFilter.__proto__ || Object.getPrototypeOf(DateFilter)).call(this, props));

    _this.timeout = null;
    _this.comparators = props.comparators || legalComparators;
    _this.applyFilter = _this.applyFilter.bind(_this);
    _this.onChangeDate = _this.onChangeDate.bind(_this);
    _this.onChangeComparator = _this.onChangeComparator.bind(_this);
    return _this;
  }

  _createClass(DateFilter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var getFilter = this.props.getFilter;

      var comparator = this.dateFilterComparator.value;
      var date = this.inputDate.value;
      if (comparator && date) {
        this.applyFilter(date, comparator, true);
      }

      // export onFilter function to allow users to access
      if (getFilter) {
        getFilter(function (filterVal) {
          var nullableFilterVal = filterVal || { date: null, comparator: null };
          _this2.dateFilterComparator.value = nullableFilterVal.comparator;
          _this2.inputDate.value = nullableFilterVal.date ? dateParser(nullableFilterVal.date) : null;

          _this2.applyFilter(nullableFilterVal.date, nullableFilterVal.comparator);
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.timeout) clearTimeout(this.timeout);
    }
  }, {
    key: 'onChangeDate',
    value: function onChangeDate(e) {
      var comparator = this.dateFilterComparator.value;
      var filterValue = e.target.value;
      this.applyFilter(filterValue, comparator);
    }
  }, {
    key: 'onChangeComparator',
    value: function onChangeComparator(e) {
      var value = this.inputDate.value;
      var comparator = e.target.value;
      this.applyFilter(value, comparator);
    }
  }, {
    key: 'getComparatorOptions',
    value: function getComparatorOptions() {
      var optionTags = [];
      var withoutEmptyComparatorOption = this.props.withoutEmptyComparatorOption;

      if (!withoutEmptyComparatorOption) {
        optionTags.push(_react2.default.createElement('option', { key: '-1' }));
      }
      for (var i = 0; i < this.comparators.length; i += 1) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: i, value: this.comparators[i] },
          this.comparators[i]
        ));
      }
      return optionTags;
    }
  }, {
    key: 'getDefaultComparator',
    value: function getDefaultComparator() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          filterState = _props.filterState;

      if (filterState && filterState.filterVal) {
        return filterState.filterVal.comparator;
      }
      if (defaultValue && defaultValue.comparator) {
        return defaultValue.comparator;
      }
      return '';
    }
  }, {
    key: 'getDefaultDate',
    value: function getDefaultDate() {
      // Set the appropriate format for the input type=date, i.e. "YYYY-MM-DD"
      var _props2 = this.props,
          defaultValue = _props2.defaultValue,
          filterState = _props2.filterState;

      if (filterState && filterState.filterVal && filterState.filterVal.date) {
        return dateParser(filterState.filterVal.date);
      }
      if (defaultValue && defaultValue.date) {
        return dateParser(new Date(defaultValue.date));
      }
      return '';
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(value, comparator, isInitial) {
      // if (!comparator || !value) {
      //  return;
      // }
      var _props3 = this.props,
          column = _props3.column,
          onFilter = _props3.onFilter,
          delay = _props3.delay;

      var execute = function execute() {
        // Incoming value should always be a string, and the defaultDate
        // above is implemented as an empty string, so we can just check for that.
        // instead of parsing an invalid Date. The filter function will interpret
        // null as an empty date field
        var date = value === '' ? null : new Date(value);
        onFilter(column, _const.FILTER_TYPE.DATE, isInitial)({ date: date, comparator: comparator });
      };
      if (delay) {
        this.timeout = setTimeout(function () {
          execute();
        }, delay);
      } else {
        execute();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props4 = this.props,
          id = _props4.id,
          placeholder = _props4.placeholder,
          _props4$column = _props4.column,
          dataField = _props4$column.dataField,
          text = _props4$column.text,
          style = _props4.style,
          comparatorStyle = _props4.comparatorStyle,
          dateStyle = _props4.dateStyle,
          className = _props4.className,
          comparatorClassName = _props4.comparatorClassName,
          dateClassName = _props4.dateClassName;


      var comparatorElmId = 'date-filter-comparator-' + dataField + (id ? '-' + id : '');
      var inputElmId = 'date-filter-column-' + dataField + (id ? '-' + id : '');

      return _react2.default.createElement(
        'div',
        {
          onClick: function onClick(e) {
            return e.stopPropagation();
          },
          className: 'filter date-filter ' + className,
          style: style
        },
        _react2.default.createElement(
          'label',
          {
            className: 'filter-label',
            htmlFor: comparatorElmId
          },
          _react2.default.createElement(
            'span',
            { className: 'sr-only' },
            'Filter comparator'
          ),
          _react2.default.createElement(
            'select',
            {
              ref: function ref(n) {
                return _this3.dateFilterComparator = n;
              },
              id: comparatorElmId,
              style: comparatorStyle,
              className: 'date-filter-comparator form-control ' + comparatorClassName,
              onChange: this.onChangeComparator,
              defaultValue: this.getDefaultComparator()
            },
            this.getComparatorOptions()
          )
        ),
        _react2.default.createElement(
          'label',
          { htmlFor: inputElmId },
          _react2.default.createElement(
            'span',
            { className: 'sr-only' },
            'Enter $',
            text
          ),
          _react2.default.createElement('input', {
            ref: function ref(n) {
              return _this3.inputDate = n;
            },
            id: inputElmId,
            className: 'filter date-filter-input form-control ' + dateClassName,
            style: dateStyle,
            type: 'date',
            onChange: this.onChangeDate,
            placeholder: placeholder || 'Enter ' + text + '...',
            defaultValue: this.getDefaultDate()
          })
        )
      );
    }
  }]);

  return DateFilter;
}(_react.Component);

DateFilter.propTypes = {
  onFilter: _propTypes.PropTypes.func.isRequired,
  column: _propTypes.PropTypes.object.isRequired,
  id: _propTypes.PropTypes.string,
  filterState: _propTypes.PropTypes.object,
  delay: _propTypes.PropTypes.number,
  defaultValue: _propTypes.PropTypes.shape({
    date: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.object]),
    comparator: _propTypes.PropTypes.oneOf([].concat(legalComparators, ['']))
  }),
  /* eslint consistent-return: 0 */
  comparators: function comparators(props, propName) {
    if (!props[propName]) {
      return;
    }
    for (var i = 0; i < props[propName].length; i += 1) {
      var comparatorIsValid = false;
      for (var j = 0; j < legalComparators.length; j += 1) {
        if (legalComparators[j] === props[propName][i] || props[propName][i] === '') {
          comparatorIsValid = true;
          break;
        }
      }
      if (!comparatorIsValid) {
        return new Error('Date comparator provided is not supported.\n          Use only ' + legalComparators);
      }
    }
  },
  placeholder: _propTypes.PropTypes.string,
  withoutEmptyComparatorOption: _propTypes.PropTypes.bool,
  style: _propTypes.PropTypes.object,
  comparatorStyle: _propTypes.PropTypes.object,
  dateStyle: _propTypes.PropTypes.object,
  className: _propTypes.PropTypes.string,
  comparatorClassName: _propTypes.PropTypes.string,
  dateClassName: _propTypes.PropTypes.string,
  getFilter: _propTypes.PropTypes.func
};

DateFilter.defaultProps = {
  delay: 0,
  defaultValue: {
    date: undefined,
    comparator: ''
  },
  filterState: {},
  withoutEmptyComparatorOption: false,
  comparators: legalComparators,
  placeholder: undefined,
  style: undefined,
  className: '',
  comparatorStyle: undefined,
  comparatorClassName: '',
  dateStyle: undefined,
  dateClassName: '',
  id: null
};

exports.default = DateFilter;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _filter = __webpack_require__(15);

var _comparison = __webpack_require__(0);

var _const = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint react/require-default-props: 0 */
/* eslint camelcase: 0 */


exports.default = function (_, isRemoteFiltering, handleFilterChange) {
  var FilterContext = _react2.default.createContext();

  var FilterProvider = function (_React$Component) {
    _inherits(FilterProvider, _React$Component);

    function FilterProvider(props) {
      _classCallCheck(this, FilterProvider);

      var _this = _possibleConstructorReturn(this, (FilterProvider.__proto__ || Object.getPrototypeOf(FilterProvider)).call(this, props));

      _this.currFilters = {};
      _this.clearFilters = {};
      _this.onFilter = _this.onFilter.bind(_this);
      _this.doFilter = _this.doFilter.bind(_this);
      _this.onExternalFilter = _this.onExternalFilter.bind(_this);
      _this.data = props.data;
      _this.isEmitDataChange = false;
      return _this;
    }

    _createClass(FilterProvider, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (isRemoteFiltering() && Object.keys(this.currFilters).length > 0) {
          handleFilterChange(this.currFilters);
        }
      }
    }, {
      key: 'onFilter',
      value: function onFilter(column, filterType) {
        var _this2 = this;

        var initialize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        return function (filterVal) {
          // watch out here if migration to context API, #334
          var currFilters = Object.assign({}, _this2.currFilters);
          _this2.clearFilters = {};
          var dataField = column.dataField,
              filter = column.filter;


          var needClearFilters = !_.isDefined(filterVal) || filterVal === '' || filterVal.length === 0;

          if (needClearFilters) {
            delete currFilters[dataField];
            _this2.clearFilters = _defineProperty({}, dataField, { clear: true, filterVal: filterVal });
          } else {
            // select default comparator is EQ, others are LIKE
            var _filter$props = filter.props,
                _filter$props$compara = _filter$props.comparator,
                comparator = _filter$props$compara === undefined ? filterType === _const.FILTER_TYPE.SELECT ? _comparison.EQ : _comparison.LIKE : _filter$props$compara,
                _filter$props$caseSen = _filter$props.caseSensitive,
                caseSensitive = _filter$props$caseSen === undefined ? false : _filter$props$caseSen;

            currFilters[dataField] = { filterVal: filterVal, filterType: filterType, comparator: comparator, caseSensitive: caseSensitive };
          }

          _this2.currFilters = currFilters;

          if (isRemoteFiltering()) {
            if (!initialize) {
              handleFilterChange(_this2.currFilters);
            }
            return;
          }
          _this2.doFilter(_this2.props);
        };
      }
    }, {
      key: 'onExternalFilter',
      value: function onExternalFilter(column, filterType) {
        var _this3 = this;

        return function (value) {
          _this3.onFilter(column, filterType)(value);
        };
      }
    }, {
      key: 'getFiltered',
      value: function getFiltered() {
        return this.data;
      }
    }, {
      key: 'UNSAFE_componentWillReceiveProps',
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        // let nextData = nextProps.data;
        if (!isRemoteFiltering() && !_.isEqual(nextProps.data, this.data)) {
          this.doFilter(nextProps, this.isEmitDataChange);
        } else {
          this.data = nextProps.data;
        }
      }
    }, {
      key: 'doFilter',
      value: function doFilter(props) {
        var ignoreEmitDataChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var dataChangeListener = props.dataChangeListener,
            data = props.data,
            columns = props.columns,
            filter = props.filter;

        var result = (0, _filter.filters)(data, columns, _)(this.currFilters, this.clearFilters);
        if (filter.afterFilter) {
          filter.afterFilter(result, this.currFilters);
        }
        this.data = result;
        if (dataChangeListener && !ignoreEmitDataChange) {
          this.isEmitDataChange = true;
          dataChangeListener.emit('filterChanged', result.length);
        } else {
          this.isEmitDataChange = false;
          this.forceUpdate();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          FilterContext.Provider,
          { value: {
              data: this.data,
              onFilter: this.onFilter,
              onExternalFilter: this.onExternalFilter,
              currFilters: this.currFilters
            }
          },
          this.props.children
        );
      }
    }]);

    return FilterProvider;
  }(_react2.default.Component);

  FilterProvider.propTypes = {
    data: _propTypes2.default.array.isRequired,
    columns: _propTypes2.default.array.isRequired,
    dataChangeListener: _propTypes2.default.object
  };


  return {
    Provider: FilterProvider,
    Consumer: FilterContext.Consumer
  };
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filters = exports.filterFactory = exports.filterByArray = exports.filterByDate = exports.filterByNumber = exports.filterByText = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* eslint eqeqeq: 0 */
/* eslint no-console: 0 */


var _const = __webpack_require__(1);

var _comparison = __webpack_require__(0);

var filterByText = exports.filterByText = function filterByText(_) {
  return function (data, dataField, _ref, customFilterValue) {
    var _ref$filterVal = _ref.filterVal,
        userInput = _ref$filterVal === undefined ? '' : _ref$filterVal,
        _ref$comparator = _ref.comparator,
        comparator = _ref$comparator === undefined ? _comparison.LIKE : _ref$comparator,
        caseSensitive = _ref.caseSensitive;

    // make sure filter value to be a string
    var filterVal = userInput.toString();

    return data.filter(function (row) {
      var cell = _.get(row, dataField);
      if (customFilterValue) {
        cell = customFilterValue(cell, row);
      }
      var cellStr = _.isDefined(cell) ? cell.toString() : '';
      if (comparator === _comparison.EQ) {
        return cellStr === filterVal;
      }
      if (caseSensitive) {
        return cellStr.includes(filterVal);
      }

      return cellStr.toLocaleUpperCase().indexOf(filterVal.toLocaleUpperCase()) !== -1;
    });
  };
};

var filterByNumber = exports.filterByNumber = function filterByNumber(_) {
  return function (data, dataField, _ref2, customFilterValue) {
    var _ref2$filterVal = _ref2.filterVal,
        comparator = _ref2$filterVal.comparator,
        number = _ref2$filterVal.number;
    return data.filter(function (row) {
      if (number === '' || !comparator) return true;
      var cell = _.get(row, dataField);

      if (customFilterValue) {
        cell = customFilterValue(cell, row);
      }

      switch (comparator) {
        case _comparison.EQ:
          {
            return cell == number;
          }
        case _comparison.GT:
          {
            return cell > number;
          }
        case _comparison.GE:
          {
            return cell >= number;
          }
        case _comparison.LT:
          {
            return cell < number;
          }
        case _comparison.LE:
          {
            return cell <= number;
          }
        case _comparison.NE:
          {
            return cell != number;
          }
        default:
          {
            console.error('Number comparator provided is not supported');
            return true;
          }
      }
    });
  };
};

var filterByDate = exports.filterByDate = function filterByDate(_) {
  return function (data, dataField, _ref3, customFilterValue) {
    var _ref3$filterVal = _ref3.filterVal,
        comparator = _ref3$filterVal.comparator,
        date = _ref3$filterVal.date;

    if (!date || !comparator) return data;
    var filterDate = date.getUTCDate();
    var filterMonth = date.getUTCMonth();
    var filterYear = date.getUTCFullYear();

    return data.filter(function (row) {
      var valid = true;
      var cell = _.get(row, dataField);

      if (customFilterValue) {
        cell = customFilterValue(cell, row);
      }

      if ((typeof cell === 'undefined' ? 'undefined' : _typeof(cell)) !== 'object') {
        cell = new Date(cell);
      }

      var targetDate = cell.getUTCDate();
      var targetMonth = cell.getUTCMonth();
      var targetYear = cell.getUTCFullYear();

      switch (comparator) {
        case _comparison.EQ:
          {
            if (filterDate !== targetDate || filterMonth !== targetMonth || filterYear !== targetYear) {
              valid = false;
            }
            break;
          }
        case _comparison.GT:
          {
            if (cell <= date) {
              valid = false;
            }
            break;
          }
        case _comparison.GE:
          {
            if (targetYear < filterYear) {
              valid = false;
            } else if (targetYear === filterYear && targetMonth < filterMonth) {
              valid = false;
            } else if (targetYear === filterYear && targetMonth === filterMonth && targetDate < filterDate) {
              valid = false;
            }
            break;
          }
        case _comparison.LT:
          {
            if (cell >= date) {
              valid = false;
            }
            break;
          }
        case _comparison.LE:
          {
            if (targetYear > filterYear) {
              valid = false;
            } else if (targetYear === filterYear && targetMonth > filterMonth) {
              valid = false;
            } else if (targetYear === filterYear && targetMonth === filterMonth && targetDate > filterDate) {
              valid = false;
            }
            break;
          }
        case _comparison.NE:
          {
            if (filterDate === targetDate && filterMonth === targetMonth && filterYear === targetYear) {
              valid = false;
            }
            break;
          }
        default:
          {
            console.error('Date comparator provided is not supported');
            break;
          }
      }
      return valid;
    });
  };
};

var filterByArray = exports.filterByArray = function filterByArray(_) {
  return function (data, dataField, _ref4) {
    var filterVal = _ref4.filterVal,
        comparator = _ref4.comparator;

    if (filterVal.length === 0) return data;
    var refinedFilterVal = filterVal.filter(function (x) {
      return _.isDefined(x);
    }).map(function (x) {
      return x.toString();
    });
    return data.filter(function (row) {
      var cell = _.get(row, dataField);
      if (Array.isArray(cell)) {
        if (comparator === _comparison.EQ) {
          return refinedFilterVal.length === cell.length && refinedFilterVal.every(function (val, i) {
            return val === cell[i].toString();
          });
        }
        var lookup = new Set(refinedFilterVal);
        return cell.some(function (val) {
          return lookup.has(val.toString());
        });
      }
      var cellStr = _.isDefined(cell) ? cell.toString() : '';
      if (comparator === _comparison.EQ) {
        return refinedFilterVal.indexOf(cellStr) !== -1;
      }
      cellStr = cellStr.toLocaleUpperCase();
      return refinedFilterVal.some(function (item) {
        return cellStr.indexOf(item.toLocaleUpperCase()) !== -1;
      });
    });
  };
};

var filterFactory = exports.filterFactory = function filterFactory(_) {
  return function (filterType) {
    switch (filterType) {
      case _const.FILTER_TYPE.MULTISELECT:
        return filterByArray(_);
      case _const.FILTER_TYPE.NUMBER:
        return filterByNumber(_);
      case _const.FILTER_TYPE.DATE:
        return filterByDate(_);
      case _const.FILTER_TYPE.TEXT:
      case _const.FILTER_TYPE.SELECT:
      default:
        // Use `text` filter as default filter
        return filterByText(_);
    }
  };
};

var filters = exports.filters = function filters(data, columns, _) {
  return function (currFilters) {
    var clearFilters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var factory = filterFactory(_);
    var filterState = _extends({}, clearFilters, currFilters);
    var result = data;
    var filterFn = void 0;
    Object.keys(filterState).forEach(function (dataField) {
      var currentResult = void 0;
      var filterValue = void 0;
      var customFilter = void 0;
      for (var i = 0; i < columns.length; i += 1) {
        if (columns[i].dataField === dataField) {
          filterValue = columns[i].filterValue;
          if (columns[i].filter) {
            customFilter = columns[i].filter.props.onFilter;
          }
          break;
        }
      }

      if (clearFilters[dataField] && customFilter) {
        currentResult = customFilter(clearFilters[dataField].filterVal, result);
        if (typeof currentResult !== 'undefined') {
          result = currentResult;
        }
      } else {
        var filterObj = filterState[dataField];
        filterFn = factory(filterObj.filterType);
        if (customFilter) {
          currentResult = customFilter(filterObj.filterVal, result);
        }
        if (typeof currentResult === 'undefined') {
          result = filterFn(result, dataField, filterObj, filterValue);
        } else {
          result = currentResult;
        }
      }
    });
    return result;
  };
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0NGVlN2Q5ZWE4YTE4YzAyNTRmMSIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLWZpbHRlci9zcmMvY29tcGFyaXNvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLWZpbHRlci9zcmMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn0iLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1maWx0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1maWx0ZXIvc3JjL2NvbXBvbmVudHMvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1maWx0ZXIvc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItZmlsdGVyL3NyYy9jb21wb25lbnRzL211bHRpc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItZmlsdGVyL3NyYy9jb21wb25lbnRzL251bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLWZpbHRlci9zcmMvY29tcG9uZW50cy9kYXRlLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItZmlsdGVyL3NyYy9jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItZmlsdGVyL3NyYy9maWx0ZXIuanMiXSwibmFtZXMiOlsiTElLRSIsIkVRIiwiTkUiLCJHVCIsIkdFIiwiTFQiLCJMRSIsIkZJTFRFUl9UWVBFIiwiVEVYVCIsIlNFTEVDVCIsIk1VTFRJU0VMRUNUIiwiTlVNQkVSIiwiREFURSIsIkZJTFRFUl9ERUxBWSIsIkNvbXBhcmlzb24iLCJvcHRpb25zIiwiY3JlYXRlQ29udGV4dCIsIkZJTFRFUl9UWVBFUyIsIkNvbXBhcmF0b3IiLCJ0ZXh0RmlsdGVyIiwicHJvcHMiLCJGaWx0ZXIiLCJUZXh0RmlsdGVyIiwic2VsZWN0RmlsdGVyIiwiU2VsZWN0RmlsdGVyIiwibXVsdGlTZWxlY3RGaWx0ZXIiLCJNdWx0aVNlbGVjdEZpbHRlciIsIm51bWJlckZpbHRlciIsIk51bWJlckZpbHRlciIsImRhdGVGaWx0ZXIiLCJEYXRlRmlsdGVyIiwiY3VzdG9tRmlsdGVyIiwiZmlsdGVyIiwiYmluZCIsImhhbmRsZUNsaWNrIiwidGltZW91dCIsImdldERlZmF1bHRWYWx1ZSIsImZpbHRlclN0YXRlIiwiZmlsdGVyVmFsIiwiZGVmYXVsdFZhbHVlIiwic3RhdGUiLCJ2YWx1ZSIsIm9uRmlsdGVyIiwiZ2V0RmlsdGVyIiwiY29sdW1uIiwiaW5wdXQiLCJzZXRTdGF0ZSIsImNsZWFuVGltZXIiLCJuZXh0UHJvcHMiLCJhcHBseUZpbHRlciIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJmaWx0ZXJWYWx1ZSIsInRhcmdldCIsInNldFRpbWVvdXQiLCJkZWxheSIsImNsZWFyVGltZW91dCIsImZpbHRlclRleHQiLCJvbkNsaWNrIiwiaWQiLCJwbGFjZWhvbGRlciIsImRhdGFGaWVsZCIsInRleHQiLCJzdHlsZSIsImNsYXNzTmFtZSIsImNhc2VTZW5zaXRpdmUiLCJyZXN0IiwiZWxtSWQiLCJuIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJzdHJpbmciLCJjb21wYXJhdG9yIiwib25lT2YiLCJudW1iZXIiLCJib29sIiwiZGVmYXVsdFByb3BzIiwib3B0aW9uc0VxdWFscyIsImN1cnJPcHRzIiwicHJldk9wdHMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJpIiwibGFiZWwiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3B0aW9uVmFsdWUiLCJrZXkiLCJyZXN1bHQiLCJtYXAiLCJnZXRPcHRpb25zIiwiaXNTZWxlY3RlZCIsInVuZGVmaW5lZCIsInNlbGVjdElucHV0IiwicHJldlByb3BzIiwibmVlZEZpbHRlciIsIm5leHRPcHRpb25zIiwib3B0aW9uVGFncyIsIndpdGhvdXRFbXB0eU9wdGlvbiIsInB1c2giLCJmb3JFYWNoIiwic2VsZWN0Q2xhc3MiLCJyZW5kZXJPcHRpb25zIiwib25lT2ZUeXBlIiwiYXJyYXkiLCJhbnkiLCJnZXRTZWxlY3Rpb25zIiwiY29udGFpbmVyIiwic2VsZWN0ZWRPcHRpb25zIiwiZnJvbSIsIml0ZW0iLCJzZWxlY3Rpb25zIiwidG90YWxMZW4iLCJvcHRpb24iLCJzZWxlY3RlZCIsImxlZ2FsQ29tcGFyYXRvcnMiLCJjb21wYXJhdG9ycyIsImluZGV4T2YiLCJvbkNoYW5nZU51bWJlciIsIm9uQ2hhbmdlTnVtYmVyU2V0Iiwib25DaGFuZ2VDb21wYXJhdG9yIiwibnVtYmVyRmlsdGVyQ29tcGFyYXRvciIsIndpdGhvdXRFbXB0eUNvbXBhcmF0b3JPcHRpb24iLCJ3aXRob3V0RW1wdHlOdW1iZXJPcHRpb24iLCJmaWx0ZXJPYmoiLCJudW1iZXJTdHlsZSIsIm51bWJlckNsYXNzTmFtZSIsImNvbXBhcmF0b3JTdHlsZSIsImNvbXBhcmF0b3JDbGFzc05hbWUiLCJjb21wYXJhdG9yRWxtSWQiLCJpbnB1dEVsbUlkIiwiZ2V0RGVmYXVsdENvbXBhcmF0b3IiLCJnZXRDb21wYXJhdG9yT3B0aW9ucyIsImdldE51bWJlck9wdGlvbnMiLCJhcnJheU9mIiwic2hhcGUiLCJwcm9wTmFtZSIsImNvbXBhcmF0b3JJc1ZhbGlkIiwiaiIsIkVycm9yIiwiZGF0ZVBhcnNlciIsImQiLCJnZXRVVENGdWxsWWVhciIsImdldFVUQ01vbnRoIiwic2xpY2UiLCJnZXRVVENEYXRlIiwib25DaGFuZ2VEYXRlIiwiZGF0ZUZpbHRlckNvbXBhcmF0b3IiLCJkYXRlIiwiaW5wdXREYXRlIiwibnVsbGFibGVGaWx0ZXJWYWwiLCJEYXRlIiwiaXNJbml0aWFsIiwiZXhlY3V0ZSIsImRhdGVTdHlsZSIsImRhdGVDbGFzc05hbWUiLCJnZXREZWZhdWx0RGF0ZSIsIl8iLCJpc1JlbW90ZUZpbHRlcmluZyIsImhhbmRsZUZpbHRlckNoYW5nZSIsIkZpbHRlckNvbnRleHQiLCJSZWFjdCIsIkZpbHRlclByb3ZpZGVyIiwiY3VyckZpbHRlcnMiLCJjbGVhckZpbHRlcnMiLCJkb0ZpbHRlciIsIm9uRXh0ZXJuYWxGaWx0ZXIiLCJkYXRhIiwiaXNFbWl0RGF0YUNoYW5nZSIsImZpbHRlclR5cGUiLCJpbml0aWFsaXplIiwiYXNzaWduIiwibmVlZENsZWFyRmlsdGVycyIsImlzRGVmaW5lZCIsImNsZWFyIiwiaXNFcXVhbCIsImlnbm9yZUVtaXREYXRhQ2hhbmdlIiwiZGF0YUNoYW5nZUxpc3RlbmVyIiwiY29sdW1ucyIsImFmdGVyRmlsdGVyIiwiZW1pdCIsImZvcmNlVXBkYXRlIiwiY2hpbGRyZW4iLCJQcm92aWRlciIsIkNvbnN1bWVyIiwiZmlsdGVyQnlUZXh0IiwiY3VzdG9tRmlsdGVyVmFsdWUiLCJ1c2VySW5wdXQiLCJ0b1N0cmluZyIsInJvdyIsImNlbGwiLCJnZXQiLCJjZWxsU3RyIiwiaW5jbHVkZXMiLCJ0b0xvY2FsZVVwcGVyQ2FzZSIsImZpbHRlckJ5TnVtYmVyIiwiY29uc29sZSIsImVycm9yIiwiZmlsdGVyQnlEYXRlIiwiZmlsdGVyRGF0ZSIsImZpbHRlck1vbnRoIiwiZmlsdGVyWWVhciIsInZhbGlkIiwidGFyZ2V0RGF0ZSIsInRhcmdldE1vbnRoIiwidGFyZ2V0WWVhciIsImZpbHRlckJ5QXJyYXkiLCJyZWZpbmVkRmlsdGVyVmFsIiwieCIsImV2ZXJ5IiwidmFsIiwibG9va3VwIiwiU2V0Iiwic29tZSIsImhhcyIsImZpbHRlckZhY3RvcnkiLCJmaWx0ZXJzIiwiZmFjdG9yeSIsImZpbHRlckZuIiwiY3VycmVudFJlc3VsdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTs7Ozs7Ozs7Ozs7OztBQzdETyxJQUFNQSxzQkFBTyxNQUFiO0FBQ0EsSUFBTUMsa0JBQUssR0FBWDtBQUNBLElBQU1DLGtCQUFLLElBQVg7QUFDQSxJQUFNQyxrQkFBSyxHQUFYO0FBQ0Es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QVIsRUFBV3ZELE1BQVgsQ0FBa0JaLEtBQWxCLENBQXdCc0IsUUFBdkM7QUFDRDtBQUNEO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJK0gsYUFBYTVHLFNBQWIsS0FBMkI5QixZQUEvQixFQUE2QztBQUMzQ2lNLHdCQUFnQmpNLGFBQWEwSSxhQUFhNUcsU0FBYixFQUF3QnZCLFNBQXJDLEVBQWdEdUQsTUFBaEQsQ0FBaEI7QUFDQSxZQUFJLE9BQU9tSSxhQUFQLEtBQXlCLFdBQTdCLEVBQTBDO0FBQ3hDbkksbUJBQVNtSSxhQUFUO0FBQ0Q7QUFDRixPQUxELE1BS087QUFDTCxZQUFNL0YsWUFBWTVGLFlBQVl3QixTQUFaLENBQWxCO0FBQ0FrSyxtQkFBV0QsUUFBUTdGLFVBQVU2QyxVQUFsQixDQUFYO0FBQ0EsWUFBSS9JLFlBQUosRUFBa0I7QUFDaEJpTSwwQkFBZ0JqTSxhQUFha0csVUFBVTNGLFNBQXZCLEVBQWtDdUQsTUFBbEMsQ0FBaEI7QUFDRDtBQUNELFlBQUksT0FBT21JLGFBQVAsS0FBeUIsV0FBN0IsRUFBMEM7QUFDeENuSSxtQkFBU2tJLFNBQVNsSSxNQUFULEVBQWlCaEMsU0FBakIsRUFBNEJvRSxTQUE1QixFQUF1QzdFLFdBQXZDLENBQVQ7QUFDRCxTQUZELE1BRU87QUFDTHlDLG1CQUFTbUksYUFBVDtBQUNEO0FBQ0Y7QUFDRixLQS9CRDtBQWdDQSxXQUFPbkksTUFBUDtBQUNELEdBdENzQjtBQUFBLENBQWhCLEMiLCJmaWxlIjoicmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1maWx0ZXIvZGlzdC9yZWFjdC1ib290c3RyYXAtdGFibGUyLWZpbHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJlYWN0Qm9vdHN0cmFwVGFibGUyRmlsdGVyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlJlYWN0Qm9vdHN0cmFwVGFibGUyRmlsdGVyXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDRlZTdkOWVhOGExOGMwMjU0ZjEiLCJleHBvcnQgY29uc3QgTElLRSA9ICdMSUtFJztcbmV4cG9ydCBjb25zdCBFUSA9ICc9JztcbmV4cG9ydCBjb25zdCBORSA9ICchPSc7XG5leHBvcnQgY29uc3QgR1QgPSAnPic7XG5leHBvcnQgY29uc3QgR0UgPSAnPj0nO1xuZXhwb3J0IGNvbnN0IExUID0gJzwnO1xuZXhwb3J0IGNvbnN0IExFID0gJzw9JztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItZmlsdGVyL3NyYy9jb21wYXJpc29uLmpzIiwiZXhwb3J0IGNvbnN0IEZJTFRFUl9UWVBFID0ge1xuICBURVhUOiAnVEVYVCcsXG4gIFNFTEVDVDogJ1NFTEVDVCcsXG4gIE1VTFRJU0VMRUNUOiAnTVVMVElTRUxFQ1QnLFxuICBOVU1CRVI6ICdOVU1CRVInLFxuICBEQVRFOiAnREFURSdcbn07XG5cbmV4cG9ydCBjb25zdCBGSUxURVJfREVMQVkgPSA1MDA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLWZpbHRlci9zcmMvY29uc3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn1cbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICBTeW1ib2wuZm9yICYmXG4gICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuICAgIDB4ZWFjNztcblxuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH07XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBUZXh0RmlsdGVyIGZyb20gJy4vc3JjL2NvbXBvbmVudHMvdGV4dCc7XG5pbXBvcnQgU2VsZWN0RmlsdGVyIGZyb20gJy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0JztcbmltcG9ydCBNdWx0aVNlbGVjdEZpbHRlciBmcm9tICcuL3NyYy9jb21wb25lbnRzL211bHRpc2VsZWN0JztcbmltcG9ydCBOdW1iZXJGaWx0ZXIgZnJvbSAnLi9zcmMvY29tcG9uZW50cy9udW1iZXInO1xuaW1wb3J0IERhdGVGaWx0ZXIgZnJvbSAnLi9zcmMvY29tcG9uZW50cy9kYXRlJztcbmltcG9ydCBjcmVhdGVDb250ZXh0IGZyb20gJy4vc3JjL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgQ29tcGFyaXNvbiBmcm9tICcuL3NyYy9jb21wYXJpc29uJztcbmltcG9ydCB7IEZJTFRFUl9UWVBFIH0gZnJvbSAnLi9zcmMvY29uc3QnO1xuXG5leHBvcnQgZGVmYXVsdCAob3B0aW9ucyA9IHt9KSA9PiAoe1xuICBjcmVhdGVDb250ZXh0LFxuICBvcHRpb25zXG59KTtcblxuZXhwb3J0IGNvbnN0IEZJTFRFUl9UWVBFUyA9IEZJTFRFUl9UWVBFO1xuXG5leHBvcnQgY29uc3QgQ29tcGFyYXRvciA9IENvbXBhcmlzb247XG5cbmV4cG9ydCBjb25zdCB0ZXh0RmlsdGVyID0gKHByb3BzID0ge30pID0+ICh7XG4gIEZpbHRlcjogVGV4dEZpbHRlcixcbiAgcHJvcHNcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0RmlsdGVyID0gKHByb3BzID0ge30pID0+ICh7XG4gIEZpbHRlcjogU2VsZWN0RmlsdGVyLFxuICBwcm9wc1xufSk7XG5cbmV4cG9ydCBjb25zdCBtdWx0aVNlbGVjdEZpbHRlciA9IChwcm9wcyA9IHt9KSA9PiAoe1xuICBGaWx0ZXI6IE11bHRpU2VsZWN0RmlsdGVyLFxuICBwcm9wc1xufSk7XG5cbmV4cG9ydCBjb25zdCBudW1iZXJGaWx0ZXIgPSAocHJvcHMgPSB7fSkgPT4gKHtcbiAgRmlsdGVyOiBOdW1iZXJGaWx0ZXIsXG4gIHByb3BzXG59KTtcblxuZXhwb3J0IGNvbnN0IGRhdGVGaWx0ZXIgPSAocHJvcHMgPSB7fSkgPT4gKHtcbiAgRmlsdGVyOiBEYXRlRmlsdGVyLFxuICBwcm9wc1xufSk7XG5cbmV4cG9ydCBjb25zdCBjdXN0b21GaWx0ZXIgPSAocHJvcHMgPSB7fSkgPT4gKHtcbiAgcHJvcHNcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1maWx0ZXIvaW5kZXguanMiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG4vKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuLyogZXNsaW50IG5vLXJldHVybi1hc3NpZ246IDAgKi9cbi8qIGVzbGludCBjYW1lbGNhc2U6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgTElLRSwgRVEgfSBmcm9tICcuLi9jb21wYXJpc29uJztcbmltcG9ydCB7IEZJTFRFUl9UWVBFLCBGSUxURVJfREVMQVkgfSBmcm9tICcuLi9jb25zdCc7XG5cbmNsYXNzIFRleHRGaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmZpbHRlciA9IHRoaXMuZmlsdGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xuICAgIGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgIGlmIChwcm9wcy5maWx0ZXJTdGF0ZSAmJiB0eXBlb2YgcHJvcHMuZmlsdGVyU3RhdGUuZmlsdGVyVmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gcHJvcHMuZmlsdGVyU3RhdGUuZmlsdGVyVmFsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb3BzLmRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiBnZXREZWZhdWx0VmFsdWUoKVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IG9uRmlsdGVyLCBnZXRGaWx0ZXIsIGNvbHVtbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlO1xuXG4gICAgaWYgKGRlZmF1bHRWYWx1ZSkge1xuICAgICAgb25GaWx0ZXIodGhpcy5wcm9wcy5jb2x1bW4sIEZJTFRFUl9UWVBFLlRFWFQsIHRydWUpKGRlZmF1bHRWYWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gZXhwb3J0IG9uRmlsdGVyIGZ1bmN0aW9uIHRvIGFsbG93IHVzZXJzIHRvIGFjY2Vzc1xuICAgIGlmIChnZXRGaWx0ZXIpIHtcbiAgICAgIGdldEZpbHRlcigoZmlsdGVyVmFsKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgdmFsdWU6IGZpbHRlclZhbCB9KSk7XG4gICAgICAgIG9uRmlsdGVyKGNvbHVtbiwgRklMVEVSX1RZUEUuVEVYVCkoZmlsdGVyVmFsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2xlYW5UaW1lcigpO1xuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5kZWZhdWx0VmFsdWUgIT09IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlKSB7XG4gICAgICB0aGlzLmFwcGx5RmlsdGVyKG5leHRQcm9wcy5kZWZhdWx0VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlcihlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmNsZWFuVGltZXIoKTtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgdmFsdWU6IGZpbHRlclZhbHVlIH0pKTtcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25GaWx0ZXIodGhpcy5wcm9wcy5jb2x1bW4sIEZJTFRFUl9UWVBFLlRFWFQpKGZpbHRlclZhbHVlKTtcbiAgICB9LCB0aGlzLnByb3BzLmRlbGF5KTtcbiAgfVxuXG4gIGNsZWFuVGltZXIoKSB7XG4gICAgaWYgKHRoaXMudGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYW5GaWx0ZXJlZCgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgdmFsdWUgfSkpO1xuICAgIHRoaXMucHJvcHMub25GaWx0ZXIodGhpcy5wcm9wcy5jb2x1bW4sIEZJTFRFUl9UWVBFLlRFWFQpKHZhbHVlKTtcbiAgfVxuXG4gIGFwcGx5RmlsdGVyKGZpbHRlclRleHQpIHtcbiAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IHZhbHVlOiBmaWx0ZXJUZXh0IH0pKTtcbiAgICB0aGlzLnByb3BzLm9uRmlsdGVyKHRoaXMucHJvcHMuY29sdW1uLCBGSUxURVJfVFlQRS5URVhUKShmaWx0ZXJUZXh0KTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIGNvbHVtbjogeyBkYXRhRmllbGQsIHRleHQgfSxcbiAgICAgIHN0eWxlLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgb25GaWx0ZXIsXG4gICAgICBjYXNlU2Vuc2l0aXZlLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgZ2V0RmlsdGVyLFxuICAgICAgZmlsdGVyU3RhdGUsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBlbG1JZCA9IGB0ZXh0LWZpbHRlci1jb2x1bW4tJHtkYXRhRmllbGR9JHtpZCA/IGAtJHtpZH1gIDogJyd9YDtcblxuICAgIHJldHVybiAoXG4gICAgICA8bGFiZWxcbiAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyLWxhYmVsXCJcbiAgICAgICAgaHRtbEZvcj17IGVsbUlkIH1cbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkZpbHRlciBieSB7dGV4dH08L3NwYW4+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHsgLi4ucmVzdCB9XG4gICAgICAgICAgcmVmPXsgbiA9PiB0aGlzLmlucHV0ID0gbiB9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlkPXsgZWxtSWQgfVxuICAgICAgICAgIGNsYXNzTmFtZT17IGBmaWx0ZXIgdGV4dC1maWx0ZXIgZm9ybS1jb250cm9sICR7Y2xhc3NOYW1lfWAgfVxuICAgICAgICAgIHN0eWxlPXsgc3R5bGUgfVxuICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5maWx0ZXIgfVxuICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZUNsaWNrIH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17IHBsYWNlaG9sZGVyIHx8IGBFbnRlciAke3RleHR9Li4uYCB9XG4gICAgICAgICAgdmFsdWU9eyB0aGlzLnN0YXRlLnZhbHVlIH1cbiAgICAgICAgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgKTtcbiAgfVxufVxuXG5UZXh0RmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgb25GaWx0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNvbHVtbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmlsdGVyU3RhdGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGNvbXBhcmF0b3I6IFByb3BUeXBlcy5vbmVPZihbTElLRSwgRVFdKSxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNhc2VTZW5zaXRpdmU6IFByb3BUeXBlcy5ib29sLFxuICBnZXRGaWx0ZXI6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5UZXh0RmlsdGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGVsYXk6IEZJTFRFUl9ERUxBWSxcbiAgZmlsdGVyU3RhdGU6IHt9LFxuICBkZWZhdWx0VmFsdWU6ICcnLFxuICBjYXNlU2Vuc2l0aXZlOiBmYWxzZSxcbiAgaWQ6IG51bGxcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgVGV4dEZpbHRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItZmlsdGVyL3NyYy9jb21wb25lbnRzL3RleHQuanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGludmFyaWFudChcbiAgICAgIGZhbHNlLFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW1cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGVtcHR5RnVuY3Rpb247XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvaW52YXJpYW50LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG4vKiBlc2xpbnQgbm8tcmV0dXJuLWFzc2lnbjogMCAqL1xuLyogZXNsaW50IHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzOiAwICovXG4vKiBlc2xpbnQgY2xhc3MtbWV0aG9kcy11c2UtdGhpczogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMSUtFLCBFUSB9IGZyb20gJy4uL2NvbXBhcmlzb24nO1xuaW1wb3J0IHsgRklMVEVSX1RZUEUgfSBmcm9tICcuLi9jb25zdCc7XG5cbmZ1bmN0aW9uIG9wdGlvbnNFcXVhbHMoY3Vyck9wdHMsIHByZXZPcHRzKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGN1cnJPcHRzKSkge1xuICAgIGlmIChjdXJyT3B0cy5sZW5ndGggPT09IHByZXZPcHRzLmxlbmd0aCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyT3B0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY3Vyck9wdHNbaV0udmFsdWUgIT09IHByZXZPcHRzW2ldLnZhbHVlIHx8XG4gICAgICAgICAgY3Vyck9wdHNbaV0ubGFiZWwgIT09IHByZXZPcHRzW2ldLmxhYmVsXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY3Vyck9wdHMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoY3Vyck9wdHNba2V5c1tpXV0gIT09IHByZXZPcHRzW2tleXNbaV1dKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3Qua2V5cyhjdXJyT3B0cykubGVuZ3RoID09PSBPYmplY3Qua2V5cyhwcmV2T3B0cykubGVuZ3RoO1xufVxuXG5mdW5jdGlvbiBnZXRPcHRpb25WYWx1ZShvcHRpb25zLCBrZXkpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICBjb25zdCByZXN1bHQgPSBvcHRpb25zXG4gICAgICAuZmlsdGVyKCh7IGxhYmVsIH0pID0+IGxhYmVsID09PSBrZXkpXG4gICAgICAubWFwKCh7IHZhbHVlIH0pID0+IHZhbHVlKTtcbiAgICByZXR1cm4gcmVzdWx0WzBdO1xuICB9XG4gIHJldHVybiBvcHRpb25zW2tleV07XG59XG5cbmNsYXNzIFNlbGVjdEZpbHRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZmlsdGVyID0gdGhpcy5maWx0ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnMocHJvcHMpO1xuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBnZXRPcHRpb25WYWx1ZSh0aGlzLm9wdGlvbnMsIHRoaXMuZ2V0RGVmYXVsdFZhbHVlKCkpICE9PSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaXNTZWxlY3RlZCB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBjb2x1bW4sIG9uRmlsdGVyLCBnZXRGaWx0ZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2VsZWN0SW5wdXQudmFsdWU7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlICE9PSAnJykge1xuICAgICAgb25GaWx0ZXIoY29sdW1uLCBGSUxURVJfVFlQRS5TRUxFQ1QsIHRydWUpKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBleHBvcnQgb25GaWx0ZXIgZnVuY3Rpb24gdG8gYWxsb3cgdXNlcnMgdG8gYWNjZXNzXG4gICAgaWYgKGdldEZpbHRlcikge1xuICAgICAgZ2V0RmlsdGVyKChmaWx0ZXJWYWwpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBpc1NlbGVjdGVkOiBmaWx0ZXJWYWwgIT09ICcnIH0pKTtcbiAgICAgICAgdGhpcy5zZWxlY3RJbnB1dC52YWx1ZSA9IGZpbHRlclZhbDtcblxuICAgICAgICBvbkZpbHRlcihjb2x1bW4sIEZJTFRFUl9UWVBFLlNFTEVDVCkoZmlsdGVyVmFsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBsZXQgbmVlZEZpbHRlciA9IGZhbHNlO1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbHVtbixcbiAgICAgIG9uRmlsdGVyLFxuICAgICAgZGVmYXVsdFZhbHVlXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbmV4dE9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnModGhpcy5wcm9wcyk7XG4gICAgaWYgKGRlZmF1bHRWYWx1ZSAhPT0gcHJldlByb3BzLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgbmVlZEZpbHRlciA9IHRydWU7XG4gICAgfSBlbHNlIGlmICghb3B0aW9uc0VxdWFscyhuZXh0T3B0aW9ucywgdGhpcy5vcHRpb25zKSkge1xuICAgICAgdGhpcy5vcHRpb25zID0gbmV4dE9wdGlvbnM7XG4gICAgICBuZWVkRmlsdGVyID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG5lZWRGaWx0ZXIpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zZWxlY3RJbnB1dC52YWx1ZTtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBvbkZpbHRlcihjb2x1bW4sIEZJTFRFUl9UWVBFLlNFTEVDVCkodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldE9wdGlvbnMocHJvcHMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHByb3BzLm9wdGlvbnMgPT09ICdmdW5jdGlvbicgPyBwcm9wcy5vcHRpb25zKHByb3BzLmNvbHVtbikgOiBwcm9wcy5vcHRpb25zO1xuICB9XG5cbiAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgIGNvbnN0IHsgZmlsdGVyU3RhdGUsIGRlZmF1bHRWYWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoZmlsdGVyU3RhdGUgJiYgdHlwZW9mIGZpbHRlclN0YXRlLmZpbHRlclZhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBmaWx0ZXJTdGF0ZS5maWx0ZXJWYWw7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gIH1cblxuICBjbGVhbkZpbHRlcmVkKCkge1xuICAgIGNvbnN0IHZhbHVlID0gKHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpID8gdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgOiAnJztcbiAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGlzU2VsZWN0ZWQ6IHZhbHVlICE9PSAnJyB9KSk7XG4gICAgdGhpcy5zZWxlY3RJbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMucHJvcHMub25GaWx0ZXIodGhpcy5wcm9wcy5jb2x1bW4sIEZJTFRFUl9UWVBFLlNFTEVDVCkodmFsdWUpO1xuICB9XG5cbiAgYXBwbHlGaWx0ZXIodmFsdWUpIHtcbiAgICB0aGlzLnNlbGVjdElucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBpc1NlbGVjdGVkOiB2YWx1ZSAhPT0gJycgfSkpO1xuICAgIHRoaXMucHJvcHMub25GaWx0ZXIodGhpcy5wcm9wcy5jb2x1bW4sIEZJTFRFUl9UWVBFLlNFTEVDVCkodmFsdWUpO1xuICB9XG5cbiAgZmlsdGVyKGUpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGlzU2VsZWN0ZWQ6IHZhbHVlICE9PSAnJyB9KSk7XG4gICAgdGhpcy5wcm9wcy5vbkZpbHRlcih0aGlzLnByb3BzLmNvbHVtbiwgRklMVEVSX1RZUEUuU0VMRUNUKSh2YWx1ZSk7XG4gIH1cblxuICByZW5kZXJPcHRpb25zKCkge1xuICAgIGNvbnN0IG9wdGlvblRhZ3MgPSBbXTtcbiAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHRoaXM7XG4gICAgY29uc3QgeyBwbGFjZWhvbGRlciwgY29sdW1uLCB3aXRob3V0RW1wdHlPcHRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCF3aXRob3V0RW1wdHlPcHRpb24pIHtcbiAgICAgIG9wdGlvblRhZ3MucHVzaCgoXG4gICAgICAgIDxvcHRpb24ga2V5PVwiLTFcIiB2YWx1ZT1cIlwiPnsgcGxhY2Vob2xkZXIgfHwgYFNlbGVjdCAke2NvbHVtbi50ZXh0fS4uLmAgfTwvb3B0aW9uPlxuICAgICAgKSk7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgICBvcHRpb25zLmZvckVhY2goKHsgdmFsdWUsIGxhYmVsIH0pID0+XG4gICAgICAgIG9wdGlvblRhZ3MucHVzaCg8b3B0aW9uIGtleT17IHZhbHVlIH0gdmFsdWU9eyB2YWx1ZSB9PnsgbGFiZWwgfTwvb3B0aW9uPikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGtleSA9PlxuICAgICAgICBvcHRpb25UYWdzLnB1c2goPG9wdGlvbiBrZXk9eyBrZXkgfSB2YWx1ZT17IGtleSB9Pnsgb3B0aW9uc1trZXldIH08L29wdGlvbj4pXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gb3B0aW9uVGFncztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIHN0eWxlLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgb25GaWx0ZXIsXG4gICAgICBjb2x1bW4sXG4gICAgICBvcHRpb25zLFxuICAgICAgY29tcGFyYXRvcixcbiAgICAgIHdpdGhvdXRFbXB0eU9wdGlvbixcbiAgICAgIGNhc2VTZW5zaXRpdmUsXG4gICAgICBnZXRGaWx0ZXIsXG4gICAgICBmaWx0ZXJTdGF0ZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHNlbGVjdENsYXNzID1cbiAgICAgIGBmaWx0ZXIgc2VsZWN0LWZpbHRlciBmb3JtLWNvbnRyb2wgJHtjbGFzc05hbWV9ICR7dGhpcy5zdGF0ZS5pc1NlbGVjdGVkID8gJycgOiAncGxhY2Vob2xkZXItc2VsZWN0ZWQnfWA7XG4gICAgY29uc3QgZWxtSWQgPSBgc2VsZWN0LWZpbHRlci1jb2x1bW4tJHtjb2x1bW4uZGF0YUZpZWxkfSR7aWQgPyBgLSR7aWR9YCA6ICcnfWA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsXG4gICAgICAgIGNsYXNzTmFtZT1cImZpbHRlci1sYWJlbFwiXG4gICAgICAgIGh0bWxGb3I9eyBlbG1JZCB9XG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5GaWx0ZXIgYnkgeyBjb2x1bW4udGV4dCB9PC9zcGFuPlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgeyAuLi5yZXN0IH1cbiAgICAgICAgICByZWY9eyBuID0+IHRoaXMuc2VsZWN0SW5wdXQgPSBuIH1cbiAgICAgICAgICBpZD17IGVsbUlkIH1cbiAgICAgICAgICBzdHlsZT17IHN0eWxlIH1cbiAgICAgICAgICBjbGFzc05hbWU9eyBzZWxlY3RDbGFzcyB9XG4gICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLmZpbHRlciB9XG4gICAgICAgICAgb25DbGljaz17IGUgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSB9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXsgdGhpcy5nZXREZWZhdWx0VmFsdWUoKSB8fCAnJyB9XG4gICAgICAgID5cbiAgICAgICAgICB7IHRoaXMucmVuZGVyT3B0aW9ucygpIH1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2xhYmVsPlxuICAgICk7XG4gIH1cbn1cblxuU2VsZWN0RmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgb25GaWx0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNvbHVtbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmlsdGVyU3RhdGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5hcnJheV0pLmlzUmVxdWlyZWQsXG4gIGNvbXBhcmF0b3I6IFByb3BUeXBlcy5vbmVPZihbTElLRSwgRVFdKSxcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdpdGhvdXRFbXB0eU9wdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgY2FzZVNlbnNpdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIGdldEZpbHRlcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cblNlbGVjdEZpbHRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGRlZmF1bHRWYWx1ZTogJycsXG4gIGZpbHRlclN0YXRlOiB7fSxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgd2l0aG91dEVtcHR5T3B0aW9uOiBmYWxzZSxcbiAgY29tcGFyYXRvcjogRVEsXG4gIGNhc2VTZW5zaXRpdmU6IHRydWUsXG4gIGlkOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RGaWx0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLWZpbHRlci9zcmMvY29tcG9uZW50cy9zZWxlY3QuanMiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG4vKiBlc2xpbnQgbm8tcmV0dXJuLWFzc2lnbjogMCAqL1xuLyogZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOiAwICovXG4vKiBlc2xpbnQgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTElLRSwgRVEgfSBmcm9tICcuLi9jb21wYXJpc29uJztcbmltcG9ydCB7IEZJTFRFUl9UWVBFIH0gZnJvbSAnLi4vY29uc3QnO1xuXG5cbmZ1bmN0aW9uIG9wdGlvbnNFcXVhbHMoY3Vyck9wdHMsIHByZXZPcHRzKSB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjdXJyT3B0cyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChjdXJyT3B0c1trZXlzW2ldXSAhPT0gcHJldk9wdHNba2V5c1tpXV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5rZXlzKGN1cnJPcHRzKS5sZW5ndGggPT09IE9iamVjdC5rZXlzKHByZXZPcHRzKS5sZW5ndGg7XG59XG5cbmNvbnN0IGdldFNlbGVjdGlvbnMgPSAoY29udGFpbmVyKSA9PiB7XG4gIGlmIChjb250YWluZXIuc2VsZWN0ZWRPcHRpb25zKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oY29udGFpbmVyLnNlbGVjdGVkT3B0aW9ucykubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSk7XG4gIH1cbiAgY29uc3Qgc2VsZWN0aW9ucyA9IFtdO1xuICBjb25zdCB0b3RhbExlbiA9IGNvbnRhaW5lci5vcHRpb25zLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbExlbjsgaSArPSAxKSB7XG4gICAgY29uc3Qgb3B0aW9uID0gY29udGFpbmVyLm9wdGlvbnMuaXRlbShpKTtcbiAgICBpZiAob3B0aW9uLnNlbGVjdGVkKSBzZWxlY3Rpb25zLnB1c2gob3B0aW9uLnZhbHVlKTtcbiAgfVxuICByZXR1cm4gc2VsZWN0aW9ucztcbn07XG5cbmNsYXNzIE11bHRpU2VsZWN0RmlsdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5maWx0ZXIgPSB0aGlzLmZpbHRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYXBwbHlGaWx0ZXIgPSB0aGlzLmFwcGx5RmlsdGVyLmJpbmQodGhpcyk7XG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IHByb3BzLmRlZmF1bHRWYWx1ZS5tYXAoaXRlbSA9PiBwcm9wcy5vcHRpb25zW2l0ZW1dKS5sZW5ndGggPiAwO1xuICAgIHRoaXMuc3RhdGUgPSB7IGlzU2VsZWN0ZWQgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZ2V0RmlsdGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgdmFsdWUgPSBnZXRTZWxlY3Rpb25zKHRoaXMuc2VsZWN0SW5wdXQpO1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmFwcGx5RmlsdGVyKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBleHBvcnQgb25GaWx0ZXIgZnVuY3Rpb24gdG8gYWxsb3cgdXNlcnMgdG8gYWNjZXNzXG4gICAgaWYgKGdldEZpbHRlcikge1xuICAgICAgZ2V0RmlsdGVyKChmaWx0ZXJWYWwpID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3RJbnB1dC52YWx1ZSA9IGZpbHRlclZhbDtcbiAgICAgICAgdGhpcy5hcHBseUZpbHRlcihmaWx0ZXJWYWwpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGxldCBuZWVkRmlsdGVyID0gZmFsc2U7XG4gICAgaWYgKHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlICE9PSBwcmV2UHJvcHMuZGVmYXVsdFZhbHVlKSB7XG4gICAgICBuZWVkRmlsdGVyID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCFvcHRpb25zRXF1YWxzKHRoaXMucHJvcHMub3B0aW9ucywgcHJldlByb3BzLm9wdGlvbnMpKSB7XG4gICAgICBuZWVkRmlsdGVyID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG5lZWRGaWx0ZXIpIHtcbiAgICAgIHRoaXMuYXBwbHlGaWx0ZXIoZ2V0U2VsZWN0aW9ucyh0aGlzLnNlbGVjdElucHV0KSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgIGNvbnN0IHsgZmlsdGVyU3RhdGUsIGRlZmF1bHRWYWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoZmlsdGVyU3RhdGUgJiYgdHlwZW9mIGZpbHRlclN0YXRlLmZpbHRlclZhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBmaWx0ZXJTdGF0ZS5maWx0ZXJWYWw7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gIH1cblxuICBnZXRPcHRpb25zKCkge1xuICAgIGNvbnN0IG9wdGlvblRhZ3MgPSBbXTtcbiAgICBjb25zdCB7IG9wdGlvbnMsIHBsYWNlaG9sZGVyLCBjb2x1bW4sIHdpdGhvdXRFbXB0eU9wdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIXdpdGhvdXRFbXB0eU9wdGlvbikge1xuICAgICAgb3B0aW9uVGFncy5wdXNoKChcbiAgICAgICAgPG9wdGlvbiBrZXk9XCItMVwiIHZhbHVlPVwiXCI+eyBwbGFjZWhvbGRlciB8fCBgU2VsZWN0ICR7Y29sdW1uLnRleHR9Li4uYCB9PC9vcHRpb24+XG4gICAgICApKTtcbiAgICB9XG4gICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChrZXkgPT5cbiAgICAgIG9wdGlvblRhZ3MucHVzaCg8b3B0aW9uIGtleT17IGtleSB9IHZhbHVlPXsga2V5IH0+eyBvcHRpb25zW2tleV0gfTwvb3B0aW9uPilcbiAgICApO1xuICAgIHJldHVybiBvcHRpb25UYWdzO1xuICB9XG5cbiAgY2xlYW5GaWx0ZXJlZCgpIHtcbiAgICBjb25zdCB2YWx1ZSA9ICh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSA/IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlIDogW107XG4gICAgdGhpcy5zZWxlY3RJbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuYXBwbHlGaWx0ZXIodmFsdWUpO1xuICB9XG5cbiAgYXBwbHlGaWx0ZXIodmFsdWUpIHtcbiAgICBpZiAodmFsdWUubGVuZ3RoID09PSAxICYmIHZhbHVlWzBdID09PSAnJykge1xuICAgICAgdmFsdWUgPSBbXTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBpc1NlbGVjdGVkOiB2YWx1ZS5sZW5ndGggPiAwIH0pKTtcbiAgICB0aGlzLnByb3BzLm9uRmlsdGVyKHRoaXMucHJvcHMuY29sdW1uLCBGSUxURVJfVFlQRS5NVUxUSVNFTEVDVCkodmFsdWUpO1xuICB9XG5cbiAgZmlsdGVyKGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGdldFNlbGVjdGlvbnMoZS50YXJnZXQpO1xuICAgIHRoaXMuYXBwbHlGaWx0ZXIodmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgc3R5bGUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBmaWx0ZXJTdGF0ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIG9uRmlsdGVyLFxuICAgICAgY29sdW1uLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIGNvbXBhcmF0b3IsXG4gICAgICB3aXRob3V0RW1wdHlPcHRpb24sXG4gICAgICBjYXNlU2Vuc2l0aXZlLFxuICAgICAgZ2V0RmlsdGVyLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qgc2VsZWN0Q2xhc3MgPVxuICAgICAgYGZpbHRlciBzZWxlY3QtZmlsdGVyIGZvcm0tY29udHJvbCAke2NsYXNzTmFtZX0gJHt0aGlzLnN0YXRlLmlzU2VsZWN0ZWQgPyAnJyA6ICdwbGFjZWhvbGRlci1zZWxlY3RlZCd9YDtcbiAgICBjb25zdCBlbG1JZCA9IGBtdWx0aXNlbGVjdC1maWx0ZXItY29sdW1uLSR7Y29sdW1uLmRhdGFGaWVsZH0ke2lkID8gYC0ke2lkfWAgOiAnJ31gO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsYWJlbFxuICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXItbGFiZWxcIlxuICAgICAgICBodG1sRm9yPXsgZWxtSWQgfVxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+RmlsdGVyIGJ5IHtjb2x1bW4udGV4dH08L3NwYW4+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICB7IC4uLnJlc3QgfVxuICAgICAgICAgIHJlZj17IG4gPT4gdGhpcy5zZWxlY3RJbnB1dCA9IG4gfVxuICAgICAgICAgIGlkPXsgZWxtSWQgfVxuICAgICAgICAgIHN0eWxlPXsgc3R5bGUgfVxuICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgY2xhc3NOYW1lPXsgc2VsZWN0Q2xhc3MgfVxuICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5maWx0ZXIgfVxuICAgICAgICAgIG9uQ2xpY2s9eyBlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkgfVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17IHRoaXMuZ2V0RGVmYXVsdFZhbHVlKCkgfVxuICAgICAgICA+XG4gICAgICAgICAgeyB0aGlzLmdldE9wdGlvbnMoKSB9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9sYWJlbD5cbiAgICApO1xuICB9XG59XG5cbk11bHRpU2VsZWN0RmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgb25GaWx0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNvbHVtbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBvcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmaWx0ZXJTdGF0ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgY29tcGFyYXRvcjogUHJvcFR5cGVzLm9uZU9mKFtMSUtFLCBFUV0pLFxuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgd2l0aG91dEVtcHR5T3B0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYXJyYXksXG4gIGNhc2VTZW5zaXRpdmU6IFByb3BUeXBlcy5ib29sLFxuICBnZXRGaWx0ZXI6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5NdWx0aVNlbGVjdEZpbHRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGRlZmF1bHRWYWx1ZTogW10sXG4gIGZpbHRlclN0YXRlOiB7fSxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgd2l0aG91dEVtcHR5T3B0aW9uOiBmYWxzZSxcbiAgY29tcGFyYXRvcjogRVEsXG4gIGNhc2VTZW5zaXRpdmU6IHRydWUsXG4gIGlkOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNdWx0aVNlbGVjdEZpbHRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItZmlsdGVyL3NyYy9jb21wb25lbnRzL211bHRpc2VsZWN0LmpzIiwiLyogZXNsaW50IGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9uczogMCAqL1xuLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuLyogZXNsaW50IG5vLXJldHVybi1hc3NpZ246IDAgKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgKiBhcyBDb21wYXJhdG9yIGZyb20gJy4uL2NvbXBhcmlzb24nO1xuaW1wb3J0IHsgRklMVEVSX1RZUEUsIEZJTFRFUl9ERUxBWSB9IGZyb20gJy4uL2NvbnN0JztcblxuY29uc3QgbGVnYWxDb21wYXJhdG9ycyA9IFtcbiAgQ29tcGFyYXRvci5FUSxcbiAgQ29tcGFyYXRvci5ORSxcbiAgQ29tcGFyYXRvci5HVCxcbiAgQ29tcGFyYXRvci5HRSxcbiAgQ29tcGFyYXRvci5MVCxcbiAgQ29tcGFyYXRvci5MRVxuXTtcblxuY2xhc3MgTnVtYmVyRmlsdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jb21wYXJhdG9ycyA9IHByb3BzLmNvbXBhcmF0b3JzIHx8IGxlZ2FsQ29tcGFyYXRvcnM7XG4gICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcbiAgICBsZXQgaXNTZWxlY3RlZCA9IHByb3BzLmRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHByb3BzLmRlZmF1bHRWYWx1ZS5udW1iZXIgIT09IHVuZGVmaW5lZDtcbiAgICBpZiAocHJvcHMub3B0aW9ucyAmJiBpc1NlbGVjdGVkKSB7XG4gICAgICBpc1NlbGVjdGVkID0gcHJvcHMub3B0aW9ucy5pbmRleE9mKHByb3BzLmRlZmF1bHRWYWx1ZS5udW1iZXIpID4gLTE7XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSB7IGlzU2VsZWN0ZWQgfTtcbiAgICB0aGlzLm9uQ2hhbmdlTnVtYmVyID0gdGhpcy5vbkNoYW5nZU51bWJlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DaGFuZ2VOdW1iZXJTZXQgPSB0aGlzLm9uQ2hhbmdlTnVtYmVyU2V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNoYW5nZUNvbXBhcmF0b3IgPSB0aGlzLm9uQ2hhbmdlQ29tcGFyYXRvci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBjb2x1bW4sIG9uRmlsdGVyLCBnZXRGaWx0ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY29tcGFyYXRvciA9IHRoaXMubnVtYmVyRmlsdGVyQ29tcGFyYXRvci52YWx1ZTtcbiAgICBjb25zdCBudW1iZXIgPSB0aGlzLm51bWJlckZpbHRlci52YWx1ZTtcbiAgICBpZiAoY29tcGFyYXRvciAmJiBudW1iZXIpIHtcbiAgICAgIG9uRmlsdGVyKGNvbHVtbiwgRklMVEVSX1RZUEUuTlVNQkVSLCB0cnVlKSh7IG51bWJlciwgY29tcGFyYXRvciB9KTtcbiAgICB9XG5cbiAgICAvLyBleHBvcnQgb25GaWx0ZXIgZnVuY3Rpb24gdG8gYWxsb3cgdXNlcnMgdG8gYWNjZXNzXG4gICAgaWYgKGdldEZpbHRlcikge1xuICAgICAgZ2V0RmlsdGVyKChmaWx0ZXJWYWwpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBpc1NlbGVjdGVkOiAoZmlsdGVyVmFsICE9PSAnJykgfSkpO1xuICAgICAgICB0aGlzLm51bWJlckZpbHRlckNvbXBhcmF0b3IudmFsdWUgPSBmaWx0ZXJWYWwuY29tcGFyYXRvcjtcbiAgICAgICAgdGhpcy5udW1iZXJGaWx0ZXIudmFsdWUgPSBmaWx0ZXJWYWwubnVtYmVyO1xuXG4gICAgICAgIG9uRmlsdGVyKGNvbHVtbiwgRklMVEVSX1RZUEUuTlVNQkVSKSh7XG4gICAgICAgICAgbnVtYmVyOiBmaWx0ZXJWYWwubnVtYmVyLFxuICAgICAgICAgIGNvbXBhcmF0b3I6IGZpbHRlclZhbC5jb21wYXJhdG9yXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gIH1cblxuICBvbkNoYW5nZU51bWJlcihlKSB7XG4gICAgY29uc3QgeyBkZWxheSwgY29sdW1uLCBvbkZpbHRlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjb21wYXJhdG9yID0gdGhpcy5udW1iZXJGaWx0ZXJDb21wYXJhdG9yLnZhbHVlO1xuICAgIGlmIChjb21wYXJhdG9yID09PSAnJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy50aW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB9XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG9uRmlsdGVyKGNvbHVtbiwgRklMVEVSX1RZUEUuTlVNQkVSKSh7IG51bWJlcjogZmlsdGVyVmFsdWUsIGNvbXBhcmF0b3IgfSk7XG4gICAgfSwgZGVsYXkpO1xuICB9XG5cbiAgb25DaGFuZ2VOdW1iZXJTZXQoZSkge1xuICAgIGNvbnN0IHsgY29sdW1uLCBvbkZpbHRlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjb21wYXJhdG9yID0gdGhpcy5udW1iZXJGaWx0ZXJDb21wYXJhdG9yLnZhbHVlO1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgaXNTZWxlY3RlZDogKHZhbHVlICE9PSAnJykgfSkpO1xuICAgIC8vIGlmIChjb21wYXJhdG9yID09PSAnJykge1xuICAgIC8vICAgcmV0dXJuO1xuICAgIC8vIH1cbiAgICBvbkZpbHRlcihjb2x1bW4sIEZJTFRFUl9UWVBFLk5VTUJFUikoeyBudW1iZXI6IHZhbHVlLCBjb21wYXJhdG9yIH0pO1xuICB9XG5cbiAgb25DaGFuZ2VDb21wYXJhdG9yKGUpIHtcbiAgICBjb25zdCB7IGNvbHVtbiwgb25GaWx0ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLm51bWJlckZpbHRlci52YWx1ZTtcbiAgICBjb25zdCBjb21wYXJhdG9yID0gZS50YXJnZXQudmFsdWU7XG4gICAgLy8gaWYgKHZhbHVlID09PSAnJykge1xuICAgIC8vICAgcmV0dXJuO1xuICAgIC8vIH1cbiAgICBvbkZpbHRlcihjb2x1bW4sIEZJTFRFUl9UWVBFLk5VTUJFUikoeyBudW1iZXI6IHZhbHVlLCBjb21wYXJhdG9yIH0pO1xuICB9XG5cbiAgZ2V0RGVmYXVsdENvbXBhcmF0b3IoKSB7XG4gICAgY29uc3QgeyBkZWZhdWx0VmFsdWUsIGZpbHRlclN0YXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChmaWx0ZXJTdGF0ZSAmJiBmaWx0ZXJTdGF0ZS5maWx0ZXJWYWwpIHtcbiAgICAgIHJldHVybiBmaWx0ZXJTdGF0ZS5maWx0ZXJWYWwuY29tcGFyYXRvcjtcbiAgICB9XG4gICAgaWYgKGRlZmF1bHRWYWx1ZSAmJiBkZWZhdWx0VmFsdWUuY29tcGFyYXRvcikge1xuICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZS5jb21wYXJhdG9yO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgY29uc3QgeyBkZWZhdWx0VmFsdWUsIGZpbHRlclN0YXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChmaWx0ZXJTdGF0ZSAmJiBmaWx0ZXJTdGF0ZS5maWx0ZXJWYWwpIHtcbiAgICAgIHJldHVybiBmaWx0ZXJTdGF0ZS5maWx0ZXJWYWwubnVtYmVyO1xuICAgIH1cbiAgICBpZiAoZGVmYXVsdFZhbHVlICYmIGRlZmF1bHRWYWx1ZS5udW1iZXIpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0VmFsdWUubnVtYmVyO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBnZXRDb21wYXJhdG9yT3B0aW9ucygpIHtcbiAgICBjb25zdCBvcHRpb25UYWdzID0gW107XG4gICAgY29uc3QgeyB3aXRob3V0RW1wdHlDb21wYXJhdG9yT3B0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghd2l0aG91dEVtcHR5Q29tcGFyYXRvck9wdGlvbikge1xuICAgICAgb3B0aW9uVGFncy5wdXNoKDxvcHRpb24ga2V5PVwiLTFcIiAvPik7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb21wYXJhdG9ycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgb3B0aW9uVGFncy5wdXNoKFxuICAgICAgICA8b3B0aW9uIGtleT17IGkgfSB2YWx1ZT17IHRoaXMuY29tcGFyYXRvcnNbaV0gfT5cbiAgICAgICAgICB7IHRoaXMuY29tcGFyYXRvcnNbaV0gfVxuICAgICAgICA8L29wdGlvbj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25UYWdzO1xuICB9XG5cbiAgZ2V0TnVtYmVyT3B0aW9ucygpIHtcbiAgICBjb25zdCBvcHRpb25UYWdzID0gW107XG4gICAgY29uc3QgeyBvcHRpb25zLCBjb2x1bW4sIHdpdGhvdXRFbXB0eU51bWJlck9wdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIXdpdGhvdXRFbXB0eU51bWJlck9wdGlvbikge1xuICAgICAgb3B0aW9uVGFncy5wdXNoKFxuICAgICAgICA8b3B0aW9uIGtleT1cIi0xXCIgdmFsdWU9XCJcIj5cbiAgICAgICAgICB7IHRoaXMucHJvcHMucGxhY2Vob2xkZXIgfHwgYFNlbGVjdCAke2NvbHVtbi50ZXh0fS4uLmAgfVxuICAgICAgICA8L29wdGlvbj5cbiAgICAgICk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgb3B0aW9uVGFncy5wdXNoKDxvcHRpb24ga2V5PXsgaSB9IHZhbHVlPXsgb3B0aW9uc1tpXSB9Pnsgb3B0aW9uc1tpXSB9PC9vcHRpb24+KTtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvblRhZ3M7XG4gIH1cblxuICBhcHBseUZpbHRlcihmaWx0ZXJPYmopIHtcbiAgICBjb25zdCB7IGNvbHVtbiwgb25GaWx0ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBudW1iZXIsIGNvbXBhcmF0b3IgfSA9IGZpbHRlck9iajtcbiAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGlzU2VsZWN0ZWQ6IChudW1iZXIgIT09ICcnKSB9KSk7XG4gICAgdGhpcy5udW1iZXJGaWx0ZXJDb21wYXJhdG9yLnZhbHVlID0gY29tcGFyYXRvcjtcbiAgICB0aGlzLm51bWJlckZpbHRlci52YWx1ZSA9IG51bWJlcjtcbiAgICBvbkZpbHRlcihjb2x1bW4sIEZJTFRFUl9UWVBFLk5VTUJFUikoeyBudW1iZXIsIGNvbXBhcmF0b3IgfSk7XG4gIH1cblxuICBjbGVhbkZpbHRlcmVkKCkge1xuICAgIGNvbnN0IHsgY29sdW1uLCBvbkZpbHRlciwgZGVmYXVsdFZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHZhbHVlID0gZGVmYXVsdFZhbHVlID8gZGVmYXVsdFZhbHVlLm51bWJlciA6ICcnO1xuICAgIGNvbnN0IGNvbXBhcmF0b3IgPSBkZWZhdWx0VmFsdWUgPyBkZWZhdWx0VmFsdWUuY29tcGFyYXRvciA6ICcnO1xuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgaXNTZWxlY3RlZDogKHZhbHVlICE9PSAnJykgfSkpO1xuICAgIHRoaXMubnVtYmVyRmlsdGVyQ29tcGFyYXRvci52YWx1ZSA9IGNvbXBhcmF0b3I7XG4gICAgdGhpcy5udW1iZXJGaWx0ZXIudmFsdWUgPSB2YWx1ZTtcbiAgICBvbkZpbHRlcihjb2x1bW4sIEZJTFRFUl9UWVBFLk5VTUJFUikoeyBudW1iZXI6IHZhbHVlLCBjb21wYXJhdG9yIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNTZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGNvbHVtbixcbiAgICAgIG9wdGlvbnMsXG4gICAgICBzdHlsZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIG51bWJlclN0eWxlLFxuICAgICAgbnVtYmVyQ2xhc3NOYW1lLFxuICAgICAgY29tcGFyYXRvclN0eWxlLFxuICAgICAgY29tcGFyYXRvckNsYXNzTmFtZSxcbiAgICAgIHBsYWNlaG9sZGVyXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc2VsZWN0Q2xhc3MgPSBgXG4gICAgICBzZWxlY3QtZmlsdGVyIFxuICAgICAgbnVtYmVyLWZpbHRlci1pbnB1dCBcbiAgICAgIGZvcm0tY29udHJvbCBcbiAgICAgICR7bnVtYmVyQ2xhc3NOYW1lfSBcbiAgICAgICR7IWlzU2VsZWN0ZWQgPyAncGxhY2Vob2xkZXItc2VsZWN0ZWQnIDogJyd9XG4gICAgYDtcblxuICAgIGNvbnN0IGNvbXBhcmF0b3JFbG1JZCA9IGBudW1iZXItZmlsdGVyLWNvbXBhcmF0b3ItJHtjb2x1bW4uZGF0YUZpZWxkfSR7aWQgPyBgLSR7aWR9YCA6ICcnfWA7XG4gICAgY29uc3QgaW5wdXRFbG1JZCA9IGBudW1iZXItZmlsdGVyLWNvbHVtbi0ke2NvbHVtbi5kYXRhRmllbGR9JHtpZCA/IGAtJHtpZH1gIDogJyd9YDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eyBlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkgfVxuICAgICAgICBjbGFzc05hbWU9eyBgZmlsdGVyIG51bWJlci1maWx0ZXIgJHtjbGFzc05hbWV9YCB9XG4gICAgICAgIHN0eWxlPXsgc3R5bGUgfVxuICAgICAgPlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXItbGFiZWxcIlxuICAgICAgICAgIGh0bWxGb3I9eyBjb21wYXJhdG9yRWxtSWQgfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkZpbHRlciBjb21wYXJhdG9yPC9zcGFuPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIHJlZj17IG4gPT4gdGhpcy5udW1iZXJGaWx0ZXJDb21wYXJhdG9yID0gbiB9XG4gICAgICAgICAgICBzdHlsZT17IGNvbXBhcmF0b3JTdHlsZSB9XG4gICAgICAgICAgICBpZD17IGNvbXBhcmF0b3JFbG1JZCB9XG4gICAgICAgICAgICBjbGFzc05hbWU9eyBgbnVtYmVyLWZpbHRlci1jb21wYXJhdG9yIGZvcm0tY29udHJvbCAke2NvbXBhcmF0b3JDbGFzc05hbWV9YCB9XG4gICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VDb21wYXJhdG9yIH1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17IHRoaXMuZ2V0RGVmYXVsdENvbXBhcmF0b3IoKSB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyB0aGlzLmdldENvbXBhcmF0b3JPcHRpb25zKCkgfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICB7XG4gICAgICAgICAgb3B0aW9ucyA/XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyLWxhYmVsXCJcbiAgICAgICAgICAgICAgaHRtbEZvcj17IGlucHV0RWxtSWQgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+e2BTZWxlY3QgJHtjb2x1bW4udGV4dH1gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgIHJlZj17IG4gPT4gdGhpcy5udW1iZXJGaWx0ZXIgPSBuIH1cbiAgICAgICAgICAgICAgICBpZD17IGlucHV0RWxtSWQgfVxuICAgICAgICAgICAgICAgIHN0eWxlPXsgbnVtYmVyU3R5bGUgfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IHNlbGVjdENsYXNzIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VOdW1iZXJTZXQgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17IHRoaXMuZ2V0RGVmYXVsdFZhbHVlKCkgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyB0aGlzLmdldE51bWJlck9wdGlvbnMoKSB9XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9sYWJlbD4gOlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9eyBpbnB1dEVsbUlkIH0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj57YEVudGVyICR7Y29sdW1uLnRleHR9YH08L3NwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHJlZj17IG4gPT4gdGhpcy5udW1iZXJGaWx0ZXIgPSBuIH1cbiAgICAgICAgICAgICAgICBpZD17IGlucHV0RWxtSWQgfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXsgbnVtYmVyU3R5bGUgfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGBudW1iZXItZmlsdGVyLWlucHV0IGZvcm0tY29udHJvbCAke251bWJlckNsYXNzTmFtZX1gIH1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17IHBsYWNlaG9sZGVyIHx8IGBFbnRlciAke2NvbHVtbi50ZXh0fS4uLmAgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZU51bWJlciB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsgdGhpcy5nZXREZWZhdWx0VmFsdWUoKSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbk51bWJlckZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIG9uRmlsdGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjb2x1bW46IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZpbHRlclN0YXRlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIG51bWJlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIGNvbXBhcmF0b3I6IFByb3BUeXBlcy5vbmVPZihbLi4ubGVnYWxDb21wYXJhdG9ycywgJyddKVxuICB9KSxcbiAgZGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qIGVzbGludCBjb25zaXN0ZW50LXJldHVybjogMCAqL1xuICBjb21wYXJhdG9yczogKHByb3BzLCBwcm9wTmFtZSkgPT4ge1xuICAgIGlmICghcHJvcHNbcHJvcE5hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHNbcHJvcE5hbWVdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBsZXQgY29tcGFyYXRvcklzVmFsaWQgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVnYWxDb21wYXJhdG9ycy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBpZiAobGVnYWxDb21wYXJhdG9yc1tqXSA9PT0gcHJvcHNbcHJvcE5hbWVdW2ldIHx8IHByb3BzW3Byb3BOYW1lXVtpXSA9PT0gJycpIHtcbiAgICAgICAgICBjb21wYXJhdG9ySXNWYWxpZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghY29tcGFyYXRvcklzVmFsaWQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgTnVtYmVyIGNvbXBhcmF0b3IgcHJvdmlkZWQgaXMgbm90IHN1cHBvcnRlZC5cbiAgICAgICAgICBVc2Ugb25seSAke2xlZ2FsQ29tcGFyYXRvcnN9YCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgd2l0aG91dEVtcHR5Q29tcGFyYXRvck9wdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIHdpdGhvdXRFbXB0eU51bWJlck9wdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbXBhcmF0b3JTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgY29tcGFyYXRvckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbnVtYmVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIG51bWJlckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZ2V0RmlsdGVyOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuTnVtYmVyRmlsdGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGVsYXk6IEZJTFRFUl9ERUxBWSxcbiAgb3B0aW9uczogdW5kZWZpbmVkLFxuICBkZWZhdWx0VmFsdWU6IHtcbiAgICBudW1iZXI6IHVuZGVmaW5lZCxcbiAgICBjb21wYXJhdG9yOiAnJ1xuICB9LFxuICBmaWx0ZXJTdGF0ZToge30sXG4gIHdpdGhvdXRFbXB0eUNvbXBhcmF0b3JPcHRpb246IGZhbHNlLFxuICB3aXRob3V0RW1wdHlOdW1iZXJPcHRpb246IGZhbHNlLFxuICBjb21wYXJhdG9yczogbGVnYWxDb21wYXJhdG9ycyxcbiAgcGxhY2Vob2xkZXI6IHVuZGVmaW5lZCxcbiAgc3R5bGU6IHVuZGVmaW5lZCxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgY29tcGFyYXRvclN0eWxlOiB1bmRlZmluZWQsXG4gIGNvbXBhcmF0b3JDbGFzc05hbWU6ICcnLFxuICBudW1iZXJTdHlsZTogdW5kZWZpbmVkLFxuICBudW1iZXJDbGFzc05hbWU6ICcnLFxuICBpZDogbnVsbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRmlsdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1maWx0ZXIvc3JjL2NvbXBvbmVudHMvbnVtYmVyLmpzIiwiLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuLyogZXNsaW50IGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9uczogMCAqL1xuLyogZXNsaW50IG5vLXJldHVybi1hc3NpZ246IDAgKi9cbi8qIGVzbGludCBwcmVmZXItdGVtcGxhdGU6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0ICogYXMgQ29tcGFyYXRvciBmcm9tICcuLi9jb21wYXJpc29uJztcbmltcG9ydCB7IEZJTFRFUl9UWVBFIH0gZnJvbSAnLi4vY29uc3QnO1xuXG5jb25zdCBsZWdhbENvbXBhcmF0b3JzID0gW1xuICBDb21wYXJhdG9yLkVRLFxuICBDb21wYXJhdG9yLk5FLFxuICBDb21wYXJhdG9yLkdULFxuICBDb21wYXJhdG9yLkdFLFxuICBDb21wYXJhdG9yLkxULFxuICBDb21wYXJhdG9yLkxFXG5dO1xuXG5mdW5jdGlvbiBkYXRlUGFyc2VyKGQpIHtcbiAgcmV0dXJuIGAke2QuZ2V0VVRDRnVsbFllYXIoKX0tJHsoJzAnICsgKGQuZ2V0VVRDTW9udGgoKSArIDEpKS5zbGljZSgtMil9LSR7KCcwJyArIGQuZ2V0VVRDRGF0ZSgpKS5zbGljZSgtMil9YDtcbn1cblxuY2xhc3MgRGF0ZUZpbHRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMudGltZW91dCA9IG51bGw7XG4gICAgdGhpcy5jb21wYXJhdG9ycyA9IHByb3BzLmNvbXBhcmF0b3JzIHx8IGxlZ2FsQ29tcGFyYXRvcnM7XG4gICAgdGhpcy5hcHBseUZpbHRlciA9IHRoaXMuYXBwbHlGaWx0ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2hhbmdlRGF0ZSA9IHRoaXMub25DaGFuZ2VEYXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNoYW5nZUNvbXBhcmF0b3IgPSB0aGlzLm9uQ2hhbmdlQ29tcGFyYXRvci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBnZXRGaWx0ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY29tcGFyYXRvciA9IHRoaXMuZGF0ZUZpbHRlckNvbXBhcmF0b3IudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuaW5wdXREYXRlLnZhbHVlO1xuICAgIGlmIChjb21wYXJhdG9yICYmIGRhdGUpIHtcbiAgICAgIHRoaXMuYXBwbHlGaWx0ZXIoZGF0ZSwgY29tcGFyYXRvciwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gZXhwb3J0IG9uRmlsdGVyIGZ1bmN0aW9uIHRvIGFsbG93IHVzZXJzIHRvIGFjY2Vzc1xuICAgIGlmIChnZXRGaWx0ZXIpIHtcbiAgICAgIGdldEZpbHRlcigoZmlsdGVyVmFsKSA9PiB7XG4gICAgICAgIGNvbnN0IG51bGxhYmxlRmlsdGVyVmFsID0gZmlsdGVyVmFsIHx8IHsgZGF0ZTogbnVsbCwgY29tcGFyYXRvcjogbnVsbCB9O1xuICAgICAgICB0aGlzLmRhdGVGaWx0ZXJDb21wYXJhdG9yLnZhbHVlID0gbnVsbGFibGVGaWx0ZXJWYWwuY29tcGFyYXRvcjtcbiAgICAgICAgdGhpcy5pbnB1dERhdGUudmFsdWUgPSBudWxsYWJsZUZpbHRlclZhbC5kYXRlID8gZGF0ZVBhcnNlcihudWxsYWJsZUZpbHRlclZhbC5kYXRlKSA6IG51bGw7XG5cbiAgICAgICAgdGhpcy5hcHBseUZpbHRlcihudWxsYWJsZUZpbHRlclZhbC5kYXRlLCBudWxsYWJsZUZpbHRlclZhbC5jb21wYXJhdG9yKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnRpbWVvdXQpIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICB9XG5cbiAgb25DaGFuZ2VEYXRlKGUpIHtcbiAgICBjb25zdCBjb21wYXJhdG9yID0gdGhpcy5kYXRlRmlsdGVyQ29tcGFyYXRvci52YWx1ZTtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuYXBwbHlGaWx0ZXIoZmlsdGVyVmFsdWUsIGNvbXBhcmF0b3IpO1xuICB9XG5cbiAgb25DaGFuZ2VDb21wYXJhdG9yKGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXREYXRlLnZhbHVlO1xuICAgIGNvbnN0IGNvbXBhcmF0b3IgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLmFwcGx5RmlsdGVyKHZhbHVlLCBjb21wYXJhdG9yKTtcbiAgfVxuXG4gIGdldENvbXBhcmF0b3JPcHRpb25zKCkge1xuICAgIGNvbnN0IG9wdGlvblRhZ3MgPSBbXTtcbiAgICBjb25zdCB7IHdpdGhvdXRFbXB0eUNvbXBhcmF0b3JPcHRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCF3aXRob3V0RW1wdHlDb21wYXJhdG9yT3B0aW9uKSB7XG4gICAgICBvcHRpb25UYWdzLnB1c2goPG9wdGlvbiBrZXk9XCItMVwiIC8+KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbXBhcmF0b3JzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBvcHRpb25UYWdzLnB1c2goXG4gICAgICAgIDxvcHRpb24ga2V5PXsgaSB9IHZhbHVlPXsgdGhpcy5jb21wYXJhdG9yc1tpXSB9PlxuICAgICAgICAgIHsgdGhpcy5jb21wYXJhdG9yc1tpXSB9XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvblRhZ3M7XG4gIH1cblxuICBnZXREZWZhdWx0Q29tcGFyYXRvcigpIHtcbiAgICBjb25zdCB7IGRlZmF1bHRWYWx1ZSwgZmlsdGVyU3RhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGZpbHRlclN0YXRlICYmIGZpbHRlclN0YXRlLmZpbHRlclZhbCkge1xuICAgICAgcmV0dXJuIGZpbHRlclN0YXRlLmZpbHRlclZhbC5jb21wYXJhdG9yO1xuICAgIH1cbiAgICBpZiAoZGVmYXVsdFZhbHVlICYmIGRlZmF1bHRWYWx1ZS5jb21wYXJhdG9yKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlLmNvbXBhcmF0b3I7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGdldERlZmF1bHREYXRlKCkge1xuICAgIC8vIFNldCB0aGUgYXBwcm9wcmlhdGUgZm9ybWF0IGZvciB0aGUgaW5wdXQgdHlwZT1kYXRlLCBpLmUuIFwiWVlZWS1NTS1ERFwiXG4gICAgY29uc3QgeyBkZWZhdWx0VmFsdWUsIGZpbHRlclN0YXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChmaWx0ZXJTdGF0ZSAmJiBmaWx0ZXJTdGF0ZS5maWx0ZXJWYWwgJiYgZmlsdGVyU3RhdGUuZmlsdGVyVmFsLmRhdGUpIHtcbiAgICAgIHJldHVybiBkYXRlUGFyc2VyKGZpbHRlclN0YXRlLmZpbHRlclZhbC5kYXRlKTtcbiAgICB9XG4gICAgaWYgKGRlZmF1bHRWYWx1ZSAmJiBkZWZhdWx0VmFsdWUuZGF0ZSkge1xuICAgICAgcmV0dXJuIGRhdGVQYXJzZXIobmV3IERhdGUoZGVmYXVsdFZhbHVlLmRhdGUpKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgYXBwbHlGaWx0ZXIodmFsdWUsIGNvbXBhcmF0b3IsIGlzSW5pdGlhbCkge1xuICAgIC8vIGlmICghY29tcGFyYXRvciB8fCAhdmFsdWUpIHtcbiAgICAvLyAgcmV0dXJuO1xuICAgIC8vIH1cbiAgICBjb25zdCB7IGNvbHVtbiwgb25GaWx0ZXIsIGRlbGF5IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGV4ZWN1dGUgPSAoKSA9PiB7XG4gICAgICAvLyBJbmNvbWluZyB2YWx1ZSBzaG91bGQgYWx3YXlzIGJlIGEgc3RyaW5nLCBhbmQgdGhlIGRlZmF1bHREYXRlXG4gICAgICAvLyBhYm92ZSBpcyBpbXBsZW1lbnRlZCBhcyBhbiBlbXB0eSBzdHJpbmcsIHNvIHdlIGNhbiBqdXN0IGNoZWNrIGZvciB0aGF0LlxuICAgICAgLy8gaW5zdGVhZCBvZiBwYXJzaW5nIGFuIGludmFsaWQgRGF0ZS4gVGhlIGZpbHRlciBmdW5jdGlvbiB3aWxsIGludGVycHJldFxuICAgICAgLy8gbnVsbCBhcyBhbiBlbXB0eSBkYXRlIGZpZWxkXG4gICAgICBjb25zdCBkYXRlID0gdmFsdWUgPT09ICcnID8gbnVsbCA6IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgIG9uRmlsdGVyKGNvbHVtbiwgRklMVEVSX1RZUEUuREFURSwgaXNJbml0aWFsKSh7IGRhdGUsIGNvbXBhcmF0b3IgfSk7XG4gICAgfTtcbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4geyBleGVjdXRlKCk7IH0sIGRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhlY3V0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgY29sdW1uOiB7IGRhdGFGaWVsZCwgdGV4dCB9LFxuICAgICAgc3R5bGUsXG4gICAgICBjb21wYXJhdG9yU3R5bGUsXG4gICAgICBkYXRlU3R5bGUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjb21wYXJhdG9yQ2xhc3NOYW1lLFxuICAgICAgZGF0ZUNsYXNzTmFtZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgY29tcGFyYXRvckVsbUlkID0gYGRhdGUtZmlsdGVyLWNvbXBhcmF0b3ItJHtkYXRhRmllbGR9JHtpZCA/IGAtJHtpZH1gIDogJyd9YDtcbiAgICBjb25zdCBpbnB1dEVsbUlkID0gYGRhdGUtZmlsdGVyLWNvbHVtbi0ke2RhdGFGaWVsZH0ke2lkID8gYC0ke2lkfWAgOiAnJ31gO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17IGUgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSB9XG4gICAgICAgIGNsYXNzTmFtZT17IGBmaWx0ZXIgZGF0ZS1maWx0ZXIgJHtjbGFzc05hbWV9YCB9XG4gICAgICAgIHN0eWxlPXsgc3R5bGUgfVxuICAgICAgPlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXItbGFiZWxcIlxuICAgICAgICAgIGh0bWxGb3I9eyBjb21wYXJhdG9yRWxtSWQgfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkZpbHRlciBjb21wYXJhdG9yPC9zcGFuPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIHJlZj17IG4gPT4gdGhpcy5kYXRlRmlsdGVyQ29tcGFyYXRvciA9IG4gfVxuICAgICAgICAgICAgaWQ9eyBjb21wYXJhdG9yRWxtSWQgfVxuICAgICAgICAgICAgc3R5bGU9eyBjb21wYXJhdG9yU3R5bGUgfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXsgYGRhdGUtZmlsdGVyLWNvbXBhcmF0b3IgZm9ybS1jb250cm9sICR7Y29tcGFyYXRvckNsYXNzTmFtZX1gIH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZUNvbXBhcmF0b3IgfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsgdGhpcy5nZXREZWZhdWx0Q29tcGFyYXRvcigpIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IHRoaXMuZ2V0Q29tcGFyYXRvck9wdGlvbnMoKSB9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPXsgaW5wdXRFbG1JZCB9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5FbnRlciAkeyB0ZXh0IH08L3NwYW4+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9eyBuID0+IHRoaXMuaW5wdXREYXRlID0gbiB9XG4gICAgICAgICAgICBpZD17IGlucHV0RWxtSWQgfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXsgYGZpbHRlciBkYXRlLWZpbHRlci1pbnB1dCBmb3JtLWNvbnRyb2wgJHtkYXRlQ2xhc3NOYW1lfWAgfVxuICAgICAgICAgICAgc3R5bGU9eyBkYXRlU3R5bGUgfVxuICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlRGF0ZSB9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17IHBsYWNlaG9sZGVyIHx8IGBFbnRlciAke3RleHR9Li4uYCB9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9eyB0aGlzLmdldERlZmF1bHREYXRlKCkgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkRhdGVGaWx0ZXIucHJvcFR5cGVzID0ge1xuICBvbkZpbHRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY29sdW1uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmaWx0ZXJTdGF0ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgZGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBkYXRlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgY29tcGFyYXRvcjogUHJvcFR5cGVzLm9uZU9mKFsuLi5sZWdhbENvbXBhcmF0b3JzLCAnJ10pXG4gIH0pLFxuICAvKiBlc2xpbnQgY29uc2lzdGVudC1yZXR1cm46IDAgKi9cbiAgY29tcGFyYXRvcnM6IChwcm9wcywgcHJvcE5hbWUpID0+IHtcbiAgICBpZiAoIXByb3BzW3Byb3BOYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzW3Byb3BOYW1lXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbGV0IGNvbXBhcmF0b3JJc1ZhbGlkID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlZ2FsQ29tcGFyYXRvcnMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKGxlZ2FsQ29tcGFyYXRvcnNbal0gPT09IHByb3BzW3Byb3BOYW1lXVtpXSB8fCBwcm9wc1twcm9wTmFtZV1baV0gPT09ICcnKSB7XG4gICAgICAgICAgY29tcGFyYXRvcklzVmFsaWQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWNvbXBhcmF0b3JJc1ZhbGlkKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoYERhdGUgY29tcGFyYXRvciBwcm92aWRlZCBpcyBub3Qgc3VwcG9ydGVkLlxuICAgICAgICAgIFVzZSBvbmx5ICR7bGVnYWxDb21wYXJhdG9yc31gKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB3aXRob3V0RW1wdHlDb21wYXJhdG9yT3B0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGNvbXBhcmF0b3JTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgZGF0ZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbXBhcmF0b3JDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRhdGVDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGdldEZpbHRlcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbkRhdGVGaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuICBkZWxheTogMCxcbiAgZGVmYXVsdFZhbHVlOiB7XG4gICAgZGF0ZTogdW5kZWZpbmVkLFxuICAgIGNvbXBhcmF0b3I6ICcnXG4gIH0sXG4gIGZpbHRlclN0YXRlOiB7fSxcbiAgd2l0aG91dEVtcHR5Q29tcGFyYXRvck9wdGlvbjogZmFsc2UsXG4gIGNvbXBhcmF0b3JzOiBsZWdhbENvbXBhcmF0b3JzLFxuICBwbGFjZWhvbGRlcjogdW5kZWZpbmVkLFxuICBzdHlsZTogdW5kZWZpbmVkLFxuICBjbGFzc05hbWU6ICcnLFxuICBjb21wYXJhdG9yU3R5bGU6IHVuZGVmaW5lZCxcbiAgY29tcGFyYXRvckNsYXNzTmFtZTogJycsXG4gIGRhdGVTdHlsZTogdW5kZWZpbmVkLFxuICBkYXRlQ2xhc3NOYW1lOiAnJyxcbiAgaWQ6IG51bGxcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgRGF0ZUZpbHRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItZmlsdGVyL3NyYy9jb21wb25lbnRzL2RhdGUuanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuLyogZXNsaW50IGNhbWVsY2FzZTogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGZpbHRlcnMgfSBmcm9tICcuL2ZpbHRlcic7XG5pbXBvcnQgeyBMSUtFLCBFUSB9IGZyb20gJy4vY29tcGFyaXNvbic7XG5pbXBvcnQgeyBGSUxURVJfVFlQRSB9IGZyb20gJy4vY29uc3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoXG4gIF8sXG4gIGlzUmVtb3RlRmlsdGVyaW5nLFxuICBoYW5kbGVGaWx0ZXJDaGFuZ2VcbikgPT4ge1xuICBjb25zdCBGaWx0ZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG4gIGNsYXNzIEZpbHRlclByb3ZpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICAgIGRhdGFDaGFuZ2VMaXN0ZW5lcjogUHJvcFR5cGVzLm9iamVjdFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLmN1cnJGaWx0ZXJzID0ge307XG4gICAgICB0aGlzLmNsZWFyRmlsdGVycyA9IHt9O1xuICAgICAgdGhpcy5vbkZpbHRlciA9IHRoaXMub25GaWx0ZXIuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuZG9GaWx0ZXIgPSB0aGlzLmRvRmlsdGVyLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLm9uRXh0ZXJuYWxGaWx0ZXIgPSB0aGlzLm9uRXh0ZXJuYWxGaWx0ZXIuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuZGF0YSA9IHByb3BzLmRhdGE7XG4gICAgICB0aGlzLmlzRW1pdERhdGFDaGFuZ2UgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmIChpc1JlbW90ZUZpbHRlcmluZygpICYmIE9iamVjdC5rZXlzKHRoaXMuY3VyckZpbHRlcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaGFuZGxlRmlsdGVyQ2hhbmdlKHRoaXMuY3VyckZpbHRlcnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG9uRmlsdGVyKGNvbHVtbiwgZmlsdGVyVHlwZSwgaW5pdGlhbGl6ZSA9IGZhbHNlKSB7XG4gICAgICByZXR1cm4gKGZpbHRlclZhbCkgPT4ge1xuICAgICAgICAvLyB3YXRjaCBvdXQgaGVyZSBpZiBtaWdyYXRpb24gdG8gY29udGV4dCBBUEksICMzMzRcbiAgICAgICAgY29uc3QgY3VyckZpbHRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmN1cnJGaWx0ZXJzKTtcbiAgICAgICAgdGhpcy5jbGVhckZpbHRlcnMgPSB7fTtcbiAgICAgICAgY29uc3QgeyBkYXRhRmllbGQsIGZpbHRlciB9ID0gY29sdW1uO1xuXG4gICAgICAgIGNvbnN0IG5lZWRDbGVhckZpbHRlcnMgPVxuICAgICAgICAgICFfLmlzRGVmaW5lZChmaWx0ZXJWYWwpIHx8XG4gICAgICAgICAgZmlsdGVyVmFsID09PSAnJyB8fFxuICAgICAgICAgIGZpbHRlclZhbC5sZW5ndGggPT09IDA7XG5cbiAgICAgICAgaWYgKG5lZWRDbGVhckZpbHRlcnMpIHtcbiAgICAgICAgICBkZWxldGUgY3VyckZpbHRlcnNbZGF0YUZpZWxkXTtcbiAgICAgICAgICB0aGlzLmNsZWFyRmlsdGVycyA9IHsgW2RhdGFGaWVsZF06IHsgY2xlYXI6IHRydWUsIGZpbHRlclZhbCB9IH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gc2VsZWN0IGRlZmF1bHQgY29tcGFyYXRvciBpcyBFUSwgb3RoZXJzIGFyZSBMSUtFXG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgY29tcGFyYXRvciA9IChmaWx0ZXJUeXBlID09PSBGSUxURVJfVFlQRS5TRUxFQ1QgPyBFUSA6IExJS0UpLFxuICAgICAgICAgICAgY2FzZVNlbnNpdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgfSA9IGZpbHRlci5wcm9wcztcbiAgICAgICAgICBjdXJyRmlsdGVyc1tkYXRhRmllbGRdID0geyBmaWx0ZXJWYWwsIGZpbHRlclR5cGUsIGNvbXBhcmF0b3IsIGNhc2VTZW5zaXRpdmUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VyckZpbHRlcnMgPSBjdXJyRmlsdGVycztcblxuICAgICAgICBpZiAoaXNSZW1vdGVGaWx0ZXJpbmcoKSkge1xuICAgICAgICAgIGlmICghaW5pdGlhbGl6ZSkge1xuICAgICAgICAgICAgaGFuZGxlRmlsdGVyQ2hhbmdlKHRoaXMuY3VyckZpbHRlcnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kb0ZpbHRlcih0aGlzLnByb3BzKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgb25FeHRlcm5hbEZpbHRlcihjb2x1bW4sIGZpbHRlclR5cGUpIHtcbiAgICAgIHJldHVybiAodmFsdWUpID0+IHtcbiAgICAgICAgdGhpcy5vbkZpbHRlcihjb2x1bW4sIGZpbHRlclR5cGUpKHZhbHVlKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RmlsdGVyZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgLy8gbGV0IG5leHREYXRhID0gbmV4dFByb3BzLmRhdGE7XG4gICAgICBpZiAoIWlzUmVtb3RlRmlsdGVyaW5nKCkgJiYgIV8uaXNFcXVhbChuZXh0UHJvcHMuZGF0YSwgdGhpcy5kYXRhKSkge1xuICAgICAgICB0aGlzLmRvRmlsdGVyKG5leHRQcm9wcywgdGhpcy5pc0VtaXREYXRhQ2hhbmdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5leHRQcm9wcy5kYXRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRvRmlsdGVyKHByb3BzLCBpZ25vcmVFbWl0RGF0YUNoYW5nZSA9IGZhbHNlKSB7XG4gICAgICBjb25zdCB7IGRhdGFDaGFuZ2VMaXN0ZW5lciwgZGF0YSwgY29sdW1ucywgZmlsdGVyIH0gPSBwcm9wcztcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGZpbHRlcnMoZGF0YSwgY29sdW1ucywgXykodGhpcy5jdXJyRmlsdGVycywgdGhpcy5jbGVhckZpbHRlcnMpO1xuICAgICAgaWYgKGZpbHRlci5hZnRlckZpbHRlcikge1xuICAgICAgICBmaWx0ZXIuYWZ0ZXJGaWx0ZXIocmVzdWx0LCB0aGlzLmN1cnJGaWx0ZXJzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0YSA9IHJlc3VsdDtcbiAgICAgIGlmIChkYXRhQ2hhbmdlTGlzdGVuZXIgJiYgIWlnbm9yZUVtaXREYXRhQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMuaXNFbWl0RGF0YUNoYW5nZSA9IHRydWU7XG4gICAgICAgIGRhdGFDaGFuZ2VMaXN0ZW5lci5lbWl0KCdmaWx0ZXJDaGFuZ2VkJywgcmVzdWx0Lmxlbmd0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzRW1pdERhdGFDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGaWx0ZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXsge1xuICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgICAgICBvbkZpbHRlcjogdGhpcy5vbkZpbHRlcixcbiAgICAgICAgICBvbkV4dGVybmFsRmlsdGVyOiB0aGlzLm9uRXh0ZXJuYWxGaWx0ZXIsXG4gICAgICAgICAgY3VyckZpbHRlcnM6IHRoaXMuY3VyckZpbHRlcnNcbiAgICAgICAgfSB9XG4gICAgICAgID5cbiAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8L0ZpbHRlckNvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgUHJvdmlkZXI6IEZpbHRlclByb3ZpZGVyLFxuICAgIENvbnN1bWVyOiBGaWx0ZXJDb250ZXh0LkNvbnN1bWVyXG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1maWx0ZXIvc3JjL2NvbnRleHQuanMiLCIvKiBlc2xpbnQgZXFlcWVxOiAwICovXG4vKiBlc2xpbnQgbm8tY29uc29sZTogMCAqL1xuaW1wb3J0IHsgRklMVEVSX1RZUEUgfSBmcm9tICcuL2NvbnN0JztcbmltcG9ydCB7IExJS0UsIEVRLCBORSwgR1QsIEdFLCBMVCwgTEUgfSBmcm9tICcuL2NvbXBhcmlzb24nO1xuXG5leHBvcnQgY29uc3QgZmlsdGVyQnlUZXh0ID0gXyA9PiAoXG4gIGRhdGEsXG4gIGRhdGFGaWVsZCxcbiAgeyBmaWx0ZXJWYWw6IHVzZXJJbnB1dCA9ICcnLCBjb21wYXJhdG9yID0gTElLRSwgY2FzZVNlbnNpdGl2ZSB9LFxuICBjdXN0b21GaWx0ZXJWYWx1ZVxuKSA9PiB7XG4gIC8vIG1ha2Ugc3VyZSBmaWx0ZXIgdmFsdWUgdG8gYmUgYSBzdHJpbmdcbiAgY29uc3QgZmlsdGVyVmFsID0gdXNlcklucHV0LnRvU3RyaW5nKCk7XG5cbiAgcmV0dXJuIChcbiAgICBkYXRhLmZpbHRlcigocm93KSA9PiB7XG4gICAgICBsZXQgY2VsbCA9IF8uZ2V0KHJvdywgZGF0YUZpZWxkKTtcbiAgICAgIGlmIChjdXN0b21GaWx0ZXJWYWx1ZSkge1xuICAgICAgICBjZWxsID0gY3VzdG9tRmlsdGVyVmFsdWUoY2VsbCwgcm93KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNlbGxTdHIgPSBfLmlzRGVmaW5lZChjZWxsKSA/IGNlbGwudG9TdHJpbmcoKSA6ICcnO1xuICAgICAgaWYgKGNvbXBhcmF0b3IgPT09IEVRKSB7XG4gICAgICAgIHJldHVybiBjZWxsU3RyID09PSBmaWx0ZXJWYWw7XG4gICAgICB9XG4gICAgICBpZiAoY2FzZVNlbnNpdGl2ZSkge1xuICAgICAgICByZXR1cm4gY2VsbFN0ci5pbmNsdWRlcyhmaWx0ZXJWYWwpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2VsbFN0ci50b0xvY2FsZVVwcGVyQ2FzZSgpLmluZGV4T2YoZmlsdGVyVmFsLnRvTG9jYWxlVXBwZXJDYXNlKCkpICE9PSAtMTtcbiAgICB9KVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbHRlckJ5TnVtYmVyID0gXyA9PiAoXG4gIGRhdGEsXG4gIGRhdGFGaWVsZCxcbiAgeyBmaWx0ZXJWYWw6IHsgY29tcGFyYXRvciwgbnVtYmVyIH0gfSxcbiAgY3VzdG9tRmlsdGVyVmFsdWVcbikgPT4gKFxuICBkYXRhLmZpbHRlcigocm93KSA9PiB7XG4gICAgaWYgKG51bWJlciA9PT0gJycgfHwgIWNvbXBhcmF0b3IpIHJldHVybiB0cnVlO1xuICAgIGxldCBjZWxsID0gXy5nZXQocm93LCBkYXRhRmllbGQpO1xuXG4gICAgaWYgKGN1c3RvbUZpbHRlclZhbHVlKSB7XG4gICAgICBjZWxsID0gY3VzdG9tRmlsdGVyVmFsdWUoY2VsbCwgcm93KTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGNvbXBhcmF0b3IpIHtcbiAgICAgIGNhc2UgRVE6IHtcbiAgICAgICAgcmV0dXJuIGNlbGwgPT0gbnVtYmVyO1xuICAgICAgfVxuICAgICAgY2FzZSBHVDoge1xuICAgICAgICByZXR1cm4gY2VsbCA+IG51bWJlcjtcbiAgICAgIH1cbiAgICAgIGNhc2UgR0U6IHtcbiAgICAgICAgcmV0dXJuIGNlbGwgPj0gbnVtYmVyO1xuICAgICAgfVxuICAgICAgY2FzZSBMVDoge1xuICAgICAgICByZXR1cm4gY2VsbCA8IG51bWJlcjtcbiAgICAgIH1cbiAgICAgIGNhc2UgTEU6IHtcbiAgICAgICAgcmV0dXJuIGNlbGwgPD0gbnVtYmVyO1xuICAgICAgfVxuICAgICAgY2FzZSBORToge1xuICAgICAgICByZXR1cm4gY2VsbCAhPSBudW1iZXI7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ051bWJlciBjb21wYXJhdG9yIHByb3ZpZGVkIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KVxuKTtcblxuZXhwb3J0IGNvbnN0IGZpbHRlckJ5RGF0ZSA9IF8gPT4gKFxuICBkYXRhLFxuICBkYXRhRmllbGQsXG4gIHsgZmlsdGVyVmFsOiB7IGNvbXBhcmF0b3IsIGRhdGUgfSB9LFxuICBjdXN0b21GaWx0ZXJWYWx1ZVxuKSA9PiB7XG4gIGlmICghZGF0ZSB8fCAhY29tcGFyYXRvcikgcmV0dXJuIGRhdGE7XG4gIGNvbnN0IGZpbHRlckRhdGUgPSBkYXRlLmdldFVUQ0RhdGUoKTtcbiAgY29uc3QgZmlsdGVyTW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gIGNvbnN0IGZpbHRlclllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG5cbiAgcmV0dXJuIGRhdGEuZmlsdGVyKChyb3cpID0+IHtcbiAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgIGxldCBjZWxsID0gXy5nZXQocm93LCBkYXRhRmllbGQpO1xuXG4gICAgaWYgKGN1c3RvbUZpbHRlclZhbHVlKSB7XG4gICAgICBjZWxsID0gY3VzdG9tRmlsdGVyVmFsdWUoY2VsbCwgcm93KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNlbGwgIT09ICdvYmplY3QnKSB7XG4gICAgICBjZWxsID0gbmV3IERhdGUoY2VsbCk7XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0RGF0ZSA9IGNlbGwuZ2V0VVRDRGF0ZSgpO1xuICAgIGNvbnN0IHRhcmdldE1vbnRoID0gY2VsbC5nZXRVVENNb250aCgpO1xuICAgIGNvbnN0IHRhcmdldFllYXIgPSBjZWxsLmdldFVUQ0Z1bGxZZWFyKCk7XG5cblxuICAgIHN3aXRjaCAoY29tcGFyYXRvcikge1xuICAgICAgY2FzZSBFUToge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZmlsdGVyRGF0ZSAhPT0gdGFyZ2V0RGF0ZSB8fFxuICAgICAgICAgIGZpbHRlck1vbnRoICE9PSB0YXJnZXRNb250aCB8fFxuICAgICAgICAgIGZpbHRlclllYXIgIT09IHRhcmdldFllYXJcbiAgICAgICAgKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgR1Q6IHtcbiAgICAgICAgaWYgKGNlbGwgPD0gZGF0ZSkge1xuICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIEdFOiB7XG4gICAgICAgIGlmICh0YXJnZXRZZWFyIDwgZmlsdGVyWWVhcikge1xuICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0WWVhciA9PT0gZmlsdGVyWWVhciAmJlxuICAgICAgICAgIHRhcmdldE1vbnRoIDwgZmlsdGVyTW9udGgpIHtcbiAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldFllYXIgPT09IGZpbHRlclllYXIgJiZcbiAgICAgICAgICB0YXJnZXRNb250aCA9PT0gZmlsdGVyTW9udGggJiZcbiAgICAgICAgICB0YXJnZXREYXRlIDwgZmlsdGVyRGF0ZSkge1xuICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIExUOiB7XG4gICAgICAgIGlmIChjZWxsID49IGRhdGUpIHtcbiAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBMRToge1xuICAgICAgICBpZiAodGFyZ2V0WWVhciA+IGZpbHRlclllYXIpIHtcbiAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldFllYXIgPT09IGZpbHRlclllYXIgJiZcbiAgICAgICAgICB0YXJnZXRNb250aCA+IGZpbHRlck1vbnRoKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRZZWFyID09PSBmaWx0ZXJZZWFyICYmXG4gICAgICAgICAgdGFyZ2V0TW9udGggPT09IGZpbHRlck1vbnRoICYmXG4gICAgICAgICAgdGFyZ2V0RGF0ZSA+IGZpbHRlckRhdGUpIHtcbiAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBORToge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZmlsdGVyRGF0ZSA9PT0gdGFyZ2V0RGF0ZSAmJlxuICAgICAgICAgIGZpbHRlck1vbnRoID09PSB0YXJnZXRNb250aCAmJlxuICAgICAgICAgIGZpbHRlclllYXIgPT09IHRhcmdldFllYXJcbiAgICAgICAgKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRGF0ZSBjb21wYXJhdG9yIHByb3ZpZGVkIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWxpZDtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmlsdGVyQnlBcnJheSA9IF8gPT4gKFxuICBkYXRhLFxuICBkYXRhRmllbGQsXG4gIHsgZmlsdGVyVmFsLCBjb21wYXJhdG9yIH1cbikgPT4ge1xuICBpZiAoZmlsdGVyVmFsLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGRhdGE7XG4gIGNvbnN0IHJlZmluZWRGaWx0ZXJWYWwgPSBmaWx0ZXJWYWxcbiAgICAuZmlsdGVyKHggPT4gXy5pc0RlZmluZWQoeCkpXG4gICAgLm1hcCh4ID0+IHgudG9TdHJpbmcoKSk7XG4gIHJldHVybiBkYXRhLmZpbHRlcigocm93KSA9PiB7XG4gICAgY29uc3QgY2VsbCA9IF8uZ2V0KHJvdywgZGF0YUZpZWxkKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjZWxsKSkge1xuICAgICAgaWYgKGNvbXBhcmF0b3IgPT09IEVRKSB7XG4gICAgICAgIHJldHVybiByZWZpbmVkRmlsdGVyVmFsLmxlbmd0aCA9PT0gY2VsbC5sZW5ndGhcbiAgICAgICAgICAmJiByZWZpbmVkRmlsdGVyVmFsLmV2ZXJ5KCh2YWwsIGkpID0+IHZhbCA9PT0gY2VsbFtpXS50b1N0cmluZygpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxvb2t1cCA9IG5ldyBTZXQocmVmaW5lZEZpbHRlclZhbCk7XG4gICAgICByZXR1cm4gY2VsbC5zb21lKHZhbCA9PiBsb29rdXAuaGFzKHZhbC50b1N0cmluZygpKSk7XG4gICAgfVxuICAgIGxldCBjZWxsU3RyID0gXy5pc0RlZmluZWQoY2VsbCkgPyBjZWxsLnRvU3RyaW5nKCkgOiAnJztcbiAgICBpZiAoY29tcGFyYXRvciA9PT0gRVEpIHtcbiAgICAgIHJldHVybiByZWZpbmVkRmlsdGVyVmFsLmluZGV4T2YoY2VsbFN0cikgIT09IC0xO1xuICAgIH1cbiAgICBjZWxsU3RyID0gY2VsbFN0ci50b0xvY2FsZVVwcGVyQ2FzZSgpO1xuICAgIHJldHVybiByZWZpbmVkRmlsdGVyVmFsLnNvbWUoaXRlbSA9PiBjZWxsU3RyLmluZGV4T2YoaXRlbS50b0xvY2FsZVVwcGVyQ2FzZSgpKSAhPT0gLTEpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXJGYWN0b3J5ID0gXyA9PiAoZmlsdGVyVHlwZSkgPT4ge1xuICBzd2l0Y2ggKGZpbHRlclR5cGUpIHtcbiAgICBjYXNlIEZJTFRFUl9UWVBFLk1VTFRJU0VMRUNUOlxuICAgICAgcmV0dXJuIGZpbHRlckJ5QXJyYXkoXyk7XG4gICAgY2FzZSBGSUxURVJfVFlQRS5OVU1CRVI6XG4gICAgICByZXR1cm4gZmlsdGVyQnlOdW1iZXIoXyk7XG4gICAgY2FzZSBGSUxURVJfVFlQRS5EQVRFOlxuICAgICAgcmV0dXJuIGZpbHRlckJ5RGF0ZShfKTtcbiAgICBjYXNlIEZJTFRFUl9UWVBFLlRFWFQ6XG4gICAgY2FzZSBGSUxURVJfVFlQRS5TRUxFQ1Q6XG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIFVzZSBgdGV4dGAgZmlsdGVyIGFzIGRlZmF1bHQgZmlsdGVyXG4gICAgICByZXR1cm4gZmlsdGVyQnlUZXh0KF8pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZmlsdGVycyA9IChkYXRhLCBjb2x1bW5zLCBfKSA9PiAoY3VyckZpbHRlcnMsIGNsZWFyRmlsdGVycyA9IHt9KSA9PiB7XG4gIGNvbnN0IGZhY3RvcnkgPSBmaWx0ZXJGYWN0b3J5KF8pO1xuICBjb25zdCBmaWx0ZXJTdGF0ZSA9IHsgLi4uY2xlYXJGaWx0ZXJzLCAuLi5jdXJyRmlsdGVycyB9O1xuICBsZXQgcmVzdWx0ID0gZGF0YTtcbiAgbGV0IGZpbHRlckZuO1xuICBPYmplY3Qua2V5cyhmaWx0ZXJTdGF0ZSkuZm9yRWFjaCgoZGF0YUZpZWxkKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRSZXN1bHQ7XG4gICAgbGV0IGZpbHRlclZhbHVlO1xuICAgIGxldCBjdXN0b21GaWx0ZXI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoY29sdW1uc1tpXS5kYXRhRmllbGQgPT09IGRhdGFGaWVsZCkge1xuICAgICAgICBmaWx0ZXJWYWx1ZSA9IGNvbHVtbnNbaV0uZmlsdGVyVmFsdWU7XG4gICAgICAgIGlmIChjb2x1bW5zW2ldLmZpbHRlcikge1xuICAgICAgICAgIGN1c3RvbUZpbHRlciA9IGNvbHVtbnNbaV0uZmlsdGVyLnByb3BzLm9uRmlsdGVyO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjbGVhckZpbHRlcnNbZGF0YUZpZWxkXSAmJiBjdXN0b21GaWx0ZXIpIHtcbiAgICAgIGN1cnJlbnRSZXN1bHQgPSBjdXN0b21GaWx0ZXIoY2xlYXJGaWx0ZXJzW2RhdGFGaWVsZF0uZmlsdGVyVmFsLCByZXN1bHQpO1xuICAgICAgaWYgKHR5cGVvZiBjdXJyZW50UmVzdWx0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXN1bHQgPSBjdXJyZW50UmVzdWx0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaWx0ZXJPYmogPSBmaWx0ZXJTdGF0ZVtkYXRhRmllbGRdO1xuICAgICAgZmlsdGVyRm4gPSBmYWN0b3J5KGZpbHRlck9iai5maWx0ZXJUeXBlKTtcbiAgICAgIGlmIChjdXN0b21GaWx0ZXIpIHtcbiAgICAgICAgY3VycmVudFJlc3VsdCA9IGN1c3RvbUZpbHRlcihmaWx0ZXJPYmouZmlsdGVyVmFsLCByZXN1bHQpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBjdXJyZW50UmVzdWx0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXN1bHQgPSBmaWx0ZXJGbihyZXN1bHQsIGRhdGFGaWVsZCwgZmlsdGVyT2JqLCBmaWx0ZXJWYWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBjdXJyZW50UmVzdWx0O1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1maWx0ZXIvc3JjL2ZpbHRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=react-bootstrap-table2-filter.js.map