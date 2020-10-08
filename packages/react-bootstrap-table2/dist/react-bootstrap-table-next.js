(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapTable2"] = factory(require("react"), require("react-dom"));
	else
		root["ReactBootstrapTable2"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_21__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
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
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var ReactIs = require('react-is');

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(28)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = __webpack_require__(34);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function splitNested(str) {
  return [str].join('.').replace(/\[/g, '.').replace(/\]/g, '').split('.');
} /* eslint no-empty: 0 */
/* eslint no-param-reassign: 0 */
/* eslint prefer-rest-params: 0 */


function contains(list, value) {
  if (_underscore2.default.includes) {
    return _underscore2.default.includes(list, value);
  }

  return list.indexOf(value) > -1;
}

function get(target, field) {
  var directGet = target[field];
  if (directGet !== undefined && directGet !== null) {
    return directGet;
  }

  var pathArray = splitNested(field);
  var result = void 0;
  try {
    result = pathArray.reduce(function (curr, path) {
      return curr[path];
    }, target);
  } catch (e) {}
  return result;
}

function set(target, field, value) {
  var safe = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var pathArray = splitNested(field);
  var level = 0;
  pathArray.reduce(function (a, b) {
    level += 1;
    if (typeof a[b] === 'undefined') {
      if (!safe) throw new Error(a + '.' + b + ' is undefined');
      a[b] = {};
      return a[b];
    }

    if (level === pathArray.length) {
      a[b] = value;
      return value;
    }
    return a[b];
  }, target);
}

function isEmptyObject(obj) {
  if (!_underscore2.default.isObject(obj)) return false;

  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i += 1) {
    if (hasOwnProperty.call(obj, keys[i])) return false;
  }

  return true;
}

function isDefined(value) {
  return typeof value !== 'undefined' && value !== null;
}

function sleep(fn, ms) {
  return setTimeout(function () {
    return fn();
  }, ms);
}

function debounce(func, wait, immediate) {
  var _this = this,
      _arguments = arguments;

  var timeout = void 0;

  return function () {
    var later = function later() {
      timeout = null;

      if (!immediate) {
        func.apply(_this, _arguments);
      }
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait || 0);

    if (callNow) {
      func.apply(_this, _arguments);
    }
  };
}

exports.default = Object.assign(_underscore2.default, {
  get: get,
  set: set,
  isDefined: isDefined,
  isEmptyObject: isEmptyObject,
  sleep: sleep,
  debounce: debounce,
  contains: contains
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  SORT_ASC: 'asc',
  SORT_DESC: 'desc',
  ROW_SELECT_SINGLE: 'radio',
  ROW_SELECT_MULTIPLE: 'checkbox',
  ROW_SELECT_DISABLED: 'ROW_SELECT_DISABLED',
  CHECKBOX_STATUS_CHECKED: 'checked',
  CHECKBOX_STATUS_INDETERMINATE: 'indeterminate',
  CHECKBOX_STATUS_UNCHECKED: 'unchecked',
  INDICATOR_POSITION_LEFT: 'left',
  INDICATOR_POSITION_RIGHT: 'right',
  TYPE_STRING: 'string',
  TYPE_NUMBER: 'number',
  TYPE_BOOLEAN: 'bool',
  TYPE_DATE: 'date',
  FILTERS_POSITION_INLINE: 'inline',
  FILTERS_POSITION_TOP: 'top',
  FILTERS_POSITION_BOTTOM: 'bottom'
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
exports.BootstrapContext = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BootstrapContext = exports.BootstrapContext = _react2.default.createContext({
  bootstrap4: false
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _inheritsLoose;
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRowByRowId = exports.matchRow = undefined;

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matchRow = exports.matchRow = function matchRow(keyField, id) {
  return function (row) {
    return _utils2.default.get(row, keyField) === id;
  };
};

var getRowByRowId = exports.getRowByRowId = function getRowByRowId(data, keyField, id) {
  return data.find(matchRow(keyField, id));
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _objectWithoutPropertiesLoose;
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = ['onClick', 'onDoubleClick', 'onMouseEnter', 'onMouseLeave', 'onContextMenu', 'onAuxClick'];

exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(CellEventDelegater, _ExtendBase);

    function CellEventDelegater(props) {
      _classCallCheck(this, CellEventDelegater);

      var _this = _possibleConstructorReturn(this, (CellEventDelegater.__proto__ || Object.getPrototypeOf(CellEventDelegater)).call(this, props));

      _this.createDefaultEventHandler = _this.createDefaultEventHandler.bind(_this);
      return _this;
    }

    _createClass(CellEventDelegater, [{
      key: 'createDefaultEventHandler',
      value: function createDefaultEventHandler(cb) {
        var _this2 = this;

        return function (e) {
          var _props = _this2.props,
              column = _props.column,
              columnIndex = _props.columnIndex,
              index = _props.index;

          cb(e, column, typeof columnIndex !== 'undefined' ? columnIndex : index);
        };
      }
    }, {
      key: 'delegate',
      value: function delegate() {
        var _this3 = this;

        var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newAttrs = _extends({}, attrs);
        Object.keys(attrs).forEach(function (attr) {
          if (_utils2.default.contains(events, attr)) {
            newAttrs[attr] = _this3.createDefaultEventHandler(attrs[attr]);
          }
        });
        return newAttrs;
      }
    }]);

    return CellEventDelegater;
  }(ExtendBase);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _operators = __webpack_require__(11);

var _operators2 = _interopRequireDefault(_operators);

var _selection = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint camelcase: 0 */
/* eslint react/prop-types: 0 */


var SelectionContext = _react2.default.createContext();

var SelectionProvider = function (_React$Component) {
  _inherits(SelectionProvider, _React$Component);

  function SelectionProvider(props) {
    _classCallCheck(this, SelectionProvider);

    var _this = _possibleConstructorReturn(this, (SelectionProvider.__proto__ || Object.getPrototypeOf(SelectionProvider)).call(this, props));

    _this.handleRowSelect = function (rowKey, checked, rowIndex, e) {
      var _this$props = _this.props,
          data = _this$props.data,
          keyField = _this$props.keyField,
          _this$props$selectRow = _this$props.selectRow,
          mode = _this$props$selectRow.mode,
          onSelect = _this$props$selectRow.onSelect;
      var ROW_SELECT_SINGLE = _const2.default.ROW_SELECT_SINGLE;


      var currSelected = [].concat(_toConsumableArray(_this.selected));

      var result = true;
      if (onSelect) {
        var row = _operators2.default.getRowByRowId(data, keyField, rowKey);
        result = onSelect(row, checked, rowIndex, e);
      }

      if (result === true || result === undefined) {
        if (mode === ROW_SELECT_SINGLE) {
          // when select mode is radio
          currSelected = [rowKey];
        } else if (checked) {
          // when select mode is checkbox
          currSelected.push(rowKey);
        } else {
          currSelected = currSelected.filter(function (value) {
            return value !== rowKey;
          });
        }
      }
      _this.selected = currSelected;
      _this.forceUpdate();
    };

    _this.handleAllRowsSelect = function (e, isUnSelect) {
      var _this$props2 = _this.props,
          data = _this$props2.data,
          keyField = _this$props2.keyField,
          _this$props2$selectRo = _this$props2.selectRow,
          onSelectAll = _this$props2$selectRo.onSelectAll,
          nonSelectable = _this$props2$selectRo.nonSelectable;
      var selected = _this.selected;


      var currSelected = void 0;

      if (!isUnSelect) {
        currSelected = selected.concat(_operators2.default.selectableKeys(data, keyField, nonSelectable));
      } else {
        currSelected = selected.filter(function (s) {
          return typeof data.find(function (d) {
            return _utils2.default.get(d, keyField) === s;
          }) === 'undefined';
        });
      }

      var result = void 0;
      if (onSelectAll) {
        result = onSelectAll(!isUnSelect, _operators2.default.getSelectedRows(data, keyField, isUnSelect ? selected : currSelected), e);
        if (Array.isArray(result)) {
          currSelected = result;
        }
      }
      _this.selected = currSelected;
      _this.forceUpdate();
    };

    _this.selected = props.selectRow.selected || [];
    return _this;
  }

  // exposed API


  _createClass(SelectionProvider, [{
    key: 'getSelected',
    value: function getSelected() {
      return this.selected;
    }
  }, {
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.selectRow) {
        this.selected = nextProps.selectRow.selected || this.selected;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _getSelectionSummary = (0, _selection.getSelectionSummary)(this.props.data, this.props.keyField, this.selected),
          allRowsSelected = _getSelectionSummary.allRowsSelected,
          allRowsNotSelected = _getSelectionSummary.allRowsNotSelected;

      var checkedStatus = void 0;

      // checkbox status depending on selected rows counts
      if (allRowsSelected) checkedStatus = _const2.default.CHECKBOX_STATUS_CHECKED;else if (allRowsNotSelected) checkedStatus = _const2.default.CHECKBOX_STATUS_UNCHECKED;else checkedStatus = _const2.default.CHECKBOX_STATUS_INDETERMINATE;

      return _react2.default.createElement(
        SelectionContext.Provider,
        {
          value: _extends({}, this.props.selectRow, {
            selected: this.selected,
            onRowSelect: this.handleRowSelect,
            onAllRowsSelect: this.handleAllRowsSelect,
            allRowsSelected: allRowsSelected,
            allRowsNotSelected: allRowsNotSelected,
            checkedStatus: checkedStatus
          })
        },
        this.props.children
      );
    }
  }]);

  return SelectionProvider;
}(_react2.default.Component);

SelectionProvider.propTypes = {
  children: _propTypes2.default.node.isRequired,
  data: _propTypes2.default.array.isRequired,
  keyField: _propTypes2.default.string.isRequired
};
exports.default = {
  Provider: SelectionProvider,
  Consumer: SelectionContext.Consumer
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _rows = __webpack_require__(7);

var rows = _interopRequireWildcard(_rows);

var _selection = __webpack_require__(15);

var selection = _interopRequireWildcard(_selection);

var _expand = __webpack_require__(40);

var expand = _interopRequireWildcard(_expand);

var _mutate = __webpack_require__(41);

var mutate = _interopRequireWildcard(_mutate);

var _sort = __webpack_require__(42);

var sort = _interopRequireWildcard(_sort);

var _type = __webpack_require__(43);

var type = _interopRequireWildcard(_type);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = _extends({}, rows, selection, expand, mutate, sort, type);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _operators = __webpack_require__(11);

var _operators2 = _interopRequireDefault(_operators);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint camelcase: 0 */
/* eslint react/prop-types: 0 */


var RowExpandContext = _react2.default.createContext();

var RowExpandProvider = function (_React$Component) {
  _inherits(RowExpandProvider, _React$Component);

  function RowExpandProvider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RowExpandProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RowExpandProvider.__proto__ || Object.getPrototypeOf(RowExpandProvider)).call.apply(_ref, [this].concat(args))), _this), _this.state = { expanded: _this.props.expandRow.expanded || [],
      isClosing: _this.props.expandRow.isClosing || [] }, _this.onClosed = function (closedRow) {
      _this.setState({ isClosing: _this.state.isClosing.filter(function (value) {
          return value !== closedRow;
        }) });
    }, _this.handleRowExpand = function (rowKey, expanded, rowIndex, e) {
      var _this$props = _this.props,
          data = _this$props.data,
          keyField = _this$props.keyField,
          _this$props$expandRow = _this$props.expandRow,
          onExpand = _this$props$expandRow.onExpand,
          onlyOneExpanding = _this$props$expandRow.onlyOneExpanding,
          nonExpandable = _this$props$expandRow.nonExpandable;

      if (nonExpandable && _utils2.default.contains(nonExpandable, rowKey)) {
        return;
      }

      var currExpanded = [].concat(_toConsumableArray(_this.state.expanded));
      var isClosing = [].concat(_toConsumableArray(_this.state.isClosing));

      if (expanded) {
        if (onlyOneExpanding) {
          isClosing = isClosing.concat(currExpanded);
          currExpanded = [rowKey];
        } else currExpanded.push(rowKey);
      } else {
        isClosing.push(rowKey);
        currExpanded = currExpanded.filter(function (value) {
          return value !== rowKey;
        });
      }

      if (onExpand) {
        var row = _operators2.default.getRowByRowId(data, keyField, rowKey);
        onExpand(row, expanded, rowIndex, e);
      }
      _this.setState(function () {
        return { expanded: currExpanded, isClosing: isClosing };
      });
    }, _this.handleAllRowExpand = function (e, expandAll) {
      var _this$props2 = _this.props,
          data = _this$props2.data,
          keyField = _this$props2.keyField,
          _this$props2$expandRo = _this$props2.expandRow,
          onExpandAll = _this$props2$expandRo.onExpandAll,
          nonExpandable = _this$props2$expandRo.nonExpandable;
      var expanded = _this.state.expanded;


      var currExpanded = void 0;

      if (expandAll) {
        currExpanded = expanded.concat(_operators2.default.expandableKeys(data, keyField, nonExpandable));
      } else {
        currExpanded = expanded.filter(function (s) {
          return typeof data.find(function (d) {
            return _utils2.default.get(d, keyField) === s;
          }) === 'undefined';
        });
      }

      if (onExpandAll) {
        onExpandAll(expandAll, _operators2.default.getExpandedRows(data, keyField, currExpanded), e);
      }

      _this.setState(function () {
        return { expanded: currExpanded };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RowExpandProvider, [{
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.expandRow) {
        var nextExpanded = [].concat(_toConsumableArray(nextProps.expandRow.expanded || this.state.expanded));
        var _nextProps$expandRow$ = nextProps.expandRow.nonExpandable,
            nonExpandable = _nextProps$expandRow$ === undefined ? [] : _nextProps$expandRow$;

        nextExpanded = nextExpanded.filter(function (rowId) {
          return !_utils2.default.contains(nonExpandable, rowId);
        });
        var isClosing = this.state.expanded.reduce(function (acc, cur) {
          if (!_utils2.default.contains(nextExpanded, cur)) {
            acc.push(cur);
          }
          return acc;
        }, []);

        this.setState(function () {
          return {
            expanded: nextExpanded,
            isClosing: isClosing
          };
        });
      } else {
        this.setState(function () {
          return {
            expanded: _this2.state.expanded
          };
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          keyField = _props.keyField;

      return _react2.default.createElement(
        RowExpandContext.Provider,
        {
          value: _extends({}, this.props.expandRow, {
            nonExpandable: this.props.expandRow.nonExpandable,
            expanded: this.state.expanded,
            isClosing: this.state.isClosing,
            onClosed: this.onClosed,
            isAnyExpands: _operators2.default.isAnyExpands(data, keyField, this.state.expanded),
            onRowExpand: this.handleRowExpand,
            onAllRowExpand: this.handleAllRowExpand
          })
        },
        this.props.children
      );
    }
  }]);

  return RowExpandProvider;
}(_react2.default.Component);

RowExpandProvider.propTypes = {
  children: _propTypes2.default.node.isRequired,
  data: _propTypes2.default.array.isRequired,
  keyField: _propTypes2.default.string.isRequired
};
exports.default = {
  Provider: RowExpandProvider,
  Consumer: RowExpandContext.Consumer
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UNMOUNTED */
/* unused harmony export EXITED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENTERING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EXITING; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_PropTypes__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TransitionGroupContext__ = __webpack_require__(14);








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [__WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || __WEBPACK_IMPORTED_MODULE_5__config__["a" /* default */].disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : __WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || __WEBPACK_IMPORTED_MODULE_5__config__["a" /* default */].disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : __WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__TransitionGroupContext__["a" /* default */].Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : __WEBPACK_IMPORTED_MODULE_3_react___default.a.cloneElement(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Children.only(children), childProps))
    );
  };

  return Transition;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

Transition.contextType = __WEBPACK_IMPORTED_MODULE_7__TransitionGroupContext__["a" /* default */];
Transition.propTypes =  false ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: PropTypes.shape({
    current: typeof Element === 'undefined' ? PropTypes.any : PropTypes.instanceOf(Element)
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func
} : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ __webpack_exports__["d"] = (Transition);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext(null));

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSelectedRows = exports.unSelectableKeys = exports.selectableKeys = exports.getSelectionSummary = undefined;

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _rows = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getSelectionSummary = exports.getSelectionSummary = function getSelectionSummary() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var keyField = arguments[1];
  var selected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var allRowsSelected = data.length > 0;
  var allRowsNotSelected = true;

  var rowKeys = data.map(function (d) {
    return _utils2.default.get(d, keyField);
  });

  var _loop = function _loop(i) {
    var curr = rowKeys[i];
    if (typeof selected.find(function (x) {
      return x === curr;
    }) === 'undefined') {
      allRowsSelected = false;
    } else {
      allRowsNotSelected = false;
    }
  };

  for (var i = 0; i < rowKeys.length; i += 1) {
    _loop(i);
  }
  return {
    allRowsSelected: allRowsSelected,
    allRowsNotSelected: allRowsNotSelected
  };
};

var selectableKeys = exports.selectableKeys = function selectableKeys() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var keyField = arguments[1];
  var skips = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (skips.length === 0) {
    return data.map(function (row) {
      return _utils2.default.get(row, keyField);
    });
  }
  return data.filter(function (row) {
    return !_utils2.default.contains(skips, _utils2.default.get(row, keyField));
  }).map(function (row) {
    return _utils2.default.get(row, keyField);
  });
};

var unSelectableKeys = exports.unSelectableKeys = function unSelectableKeys(selected) {
  var skips = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (skips.length === 0) {
    return [];
  }
  return selected.filter(function (x) {
    return _utils2.default.contains(skips, x);
  });
};

var getSelectedRows = exports.getSelectedRows = function getSelectedRows() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var keyField = arguments[1];
  var selected = arguments[2];
  return selected.map(function (k) {
    return (0, _rows.getRowByRowId)(data, keyField, k);
  }).filter(function (x) {
    return !!x;
  });
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint react/require-default-props: 0 */


var RowTemplate = function RowTemplate(props) {
  var renderContent = props.renderContent,
      selectRow = props.selectRow,
      expandRow = props.expandRow,
      cellEl = props.cellEl,
      rest = _objectWithoutProperties(props, ['renderContent', 'selectRow', 'expandRow', 'cellEl']);

  var isRenderFunctionColumnInLeft = function isRenderFunctionColumnInLeft() {
    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _const2.default.INDICATOR_POSITION_LEFT;
    return position === _const2.default.INDICATOR_POSITION_LEFT;
  };

  var childrens = renderContent() || [];

  if (selectRow && selectRow.hideSelectColumn !== true) {
    if (isRenderFunctionColumnInLeft(selectRow.selectColumnPosition)) {
      childrens.unshift(_react2.default.createElement(cellEl, { key: 'selection' }));
    } else {
      childrens.push(_react2.default.createElement(cellEl, { key: 'selection' }));
    }
  }

  if (expandRow.showExpandColumn) {
    if (isRenderFunctionColumnInLeft(expandRow.expandColumnPosition)) {
      childrens.unshift(_react2.default.createElement(cellEl, { key: 'expansion' }));
    } else {
      childrens.push(_react2.default.createElement(cellEl, { key: 'expansion' }));
    }
  }

  return _react2.default.createElement(
    'tr',
    rest,
    childrens
  );
};

RowTemplate.propTypes = {
  renderContent: _propTypes2.default.func.isRequired,
  cellEl: _propTypes2.default.string.isRequired,
  selectRow: _propTypes2.default.object,
  expandRow: _propTypes2.default.object
};

exports.default = RowTemplate;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _cell = __webpack_require__(50);

var _cell2 = _interopRequireDefault(_cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint react/no-array-index-key: 0 */
/* eslint no-plusplus: 0 */


var RowPureContent = function (_React$Component) {
  _inherits(RowPureContent, _React$Component);

  function RowPureContent() {
    _classCallCheck(this, RowPureContent);

    return _possibleConstructorReturn(this, (RowPureContent.__proto__ || Object.getPrototypeOf(RowPureContent)).apply(this, arguments));
  }

  _createClass(RowPureContent, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (typeof nextProps.shouldUpdate !== 'undefined') {
        return nextProps.shouldUpdate;
      }
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          row = _props.row,
          keyField = _props.keyField,
          columns = _props.columns,
          rowIndex = _props.rowIndex,
          editable = _props.editable,
          editingRowIdx = _props.editingRowIdx,
          editingColIdx = _props.editingColIdx,
          onStart = _props.onStart,
          clickToEdit = _props.clickToEdit,
          dbclickToEdit = _props.dbclickToEdit,
          EditingCellComponent = _props.EditingCellComponent,
          tabIndexStart = _props.tabIndexStart;


      var tabIndex = tabIndexStart;

      return columns.map(function (column, index) {
        var dataField = column.dataField;

        var content = _utils2.default.get(row, dataField);
        if (rowIndex === editingRowIdx && index === editingColIdx) {
          return _react2.default.createElement(EditingCellComponent, {
            key: content + '-' + index + '-editing',
            row: row,
            rowIndex: rowIndex,
            column: column,
            columnIndex: index
          });
        }
        // render cell
        var cellTitle = void 0;
        var cellStyle = {};
        var cellAttrs = _extends({}, _utils2.default.isFunction(column.attrs) ? column.attrs(content, row, rowIndex, index) : column.attrs);

        if (column.events) {
          var events = Object.assign({}, column.events);
          Object.keys(Object.assign({}, column.events)).forEach(function (key) {
            var originFn = events[key];
            events[key] = function () {
              for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
                rest[_key] = arguments[_key];
              }

              return originFn.apply(undefined, rest.concat([row, rowIndex]));
            };
          });
          cellAttrs = _extends({}, cellAttrs, events);
        }

        var cellClasses = _utils2.default.isFunction(column.classes) ? column.classes(content, row, rowIndex, index) : column.classes;

        if (column.style) {
          cellStyle = _utils2.default.isFunction(column.style) ? column.style(content, row, rowIndex, index) : column.style;
          cellStyle = Object.assign({}, cellStyle) || {};
        }

        if (column.title) {
          cellTitle = _utils2.default.isFunction(column.title) ? column.title(content, row, rowIndex, index) : content;
          cellAttrs.title = cellTitle;
        }

        if (column.align) {
          cellStyle.textAlign = _utils2.default.isFunction(column.align) ? column.align(content, row, rowIndex, index) : column.align;
        }

        if (cellClasses) cellAttrs.className = cellClasses;
        if (!_utils2.default.isEmptyObject(cellStyle)) cellAttrs.style = cellStyle;

        var editableCell = _utils2.default.isDefined(column.editable) ? column.editable : true;
        if (column.dataField === keyField || !editable) editableCell = false;
        if (_utils2.default.isFunction(column.editable)) {
          editableCell = column.editable(content, row, rowIndex, index);
        }

        if (tabIndexStart !== -1) {
          cellAttrs.tabIndex = tabIndex++;
        }

        return _react2.default.createElement(_cell2.default, _extends({
          key: content + '-' + index,
          row: row,
          editable: editableCell,
          rowIndex: rowIndex,
          columnIndex: index,
          column: column,
          onStart: onStart,
          clickToEdit: clickToEdit,
          dbclickToEdit: dbclickToEdit
        }, cellAttrs));
      });
    }
  }]);

  return RowPureContent;
}(_react2.default.Component);

exports.default = RowPureContent;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = ['onClick', 'onDoubleClick', 'onMouseEnter', 'onMouseLeave', 'onContextMenu', 'onAuxClick'];

exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(RowEventDelegater, _ExtendBase);

    function RowEventDelegater(props) {
      _classCallCheck(this, RowEventDelegater);

      var _this = _possibleConstructorReturn(this, (RowEventDelegater.__proto__ || Object.getPrototypeOf(RowEventDelegater)).call(this, props));

      _this.clickNum = 0;
      _this.createDefaultEventHandler = _this.createDefaultEventHandler.bind(_this);
      _this.createClickEventHandler = _this.createClickEventHandler.bind(_this);
      return _this;
    }

    _createClass(RowEventDelegater, [{
      key: 'createClickEventHandler',
      value: function createClickEventHandler(cb) {
        var _this2 = this;

        return function (e) {
          var _props = _this2.props,
              row = _props.row,
              selected = _props.selected,
              keyField = _props.keyField,
              selectable = _props.selectable,
              expandable = _props.expandable,
              rowIndex = _props.rowIndex,
              expanded = _props.expanded,
              expandRow = _props.expandRow,
              selectRow = _props.selectRow,
              DELAY_FOR_DBCLICK = _props.DELAY_FOR_DBCLICK;

          var clickFn = function clickFn() {
            if (cb) {
              cb(e, row, rowIndex);
            }
            var key = _utils2.default.get(row, keyField);
            if (expandRow && expandable && !expandRow.expandByColumnOnly) {
              if (selectRow.mode !== _const2.default.ROW_SELECT_DISABLED && selectRow.clickToExpand || selectRow.mode === _const2.default.ROW_SELECT_DISABLED) {
                expandRow.onRowExpand(key, !expanded, rowIndex, e);
              }
            }
            if (selectRow.clickToSelect && selectable) {
              selectRow.onRowSelect(key, !selected, rowIndex, e);
            }
          };

          if (DELAY_FOR_DBCLICK) {
            _this2.clickNum += 1;
            _utils2.default.debounce(function () {
              if (_this2.clickNum === 1) {
                clickFn();
              }
              _this2.clickNum = 0;
            }, DELAY_FOR_DBCLICK)();
          } else {
            clickFn();
          }
        };
      }
    }, {
      key: 'createDefaultEventHandler',
      value: function createDefaultEventHandler(cb) {
        var _this3 = this;

        return function (e) {
          var _props2 = _this3.props,
              row = _props2.row,
              rowIndex = _props2.rowIndex;

          cb(e, row, rowIndex);
        };
      }
    }, {
      key: 'delegate',
      value: function delegate() {
        var _this4 = this;

        var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newAttrs = _extends({}, attrs);
        Object.keys(attrs).forEach(function (attr) {
          if (_utils2.default.contains(events, attr)) {
            newAttrs[attr] = _this4.createDefaultEventHandler(attrs[attr]);
          }
        });
        return newAttrs;
      }
    }]);

    return RowEventDelegater;
  }(ExtendBase);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */


exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(RowShouldUpdater, _ExtendBase);

    function RowShouldUpdater() {
      _classCallCheck(this, RowShouldUpdater);

      return _possibleConstructorReturn(this, (RowShouldUpdater.__proto__ || Object.getPrototypeOf(RowShouldUpdater)).apply(this, arguments));
    }

    _createClass(RowShouldUpdater, [{
      key: 'shouldUpdateByCellEditing',
      value: function shouldUpdateByCellEditing(nextProps) {
        if (!(this.props.clickToEdit || this.props.dbclickToEdit)) return false;
        return nextProps.editingRowIdx === nextProps.rowIndex || this.props.editingRowIdx === nextProps.rowIndex && nextProps.editingRowIdx === null || this.props.editingRowIdx === nextProps.rowIndex;
      }
    }, {
      key: 'shouldUpdatedBySelfProps',
      value: function shouldUpdatedBySelfProps(nextProps) {
        return this.props.className !== nextProps.className || !_utils2.default.isEqual(this.props.style, nextProps.style) || !_utils2.default.isEqual(this.props.attrs, nextProps.attrs);
      }

      // Only use for simple-row

    }, {
      key: 'shouldUpdateByColumnsForSimpleCheck',
      value: function shouldUpdateByColumnsForSimpleCheck(nextProps) {
        if (this.props.columns.length !== nextProps.columns.length) {
          return true;
        }
        for (var i = 0; i < this.props.columns.length; i += 1) {
          if (!_utils2.default.isEqual(this.props.columns[i], nextProps.columns[i])) {
            return true;
          }
        }
        return false;
      }
    }, {
      key: 'shouldUpdatedByNormalProps',
      value: function shouldUpdatedByNormalProps(nextProps) {
        var shouldUpdate = this.props.rowIndex !== nextProps.rowIndex || this.props.editable !== nextProps.editable || !_utils2.default.isEqual(this.props.row, nextProps.row) || this.props.columns.length !== nextProps.columns.length;

        return shouldUpdate;
      }
    }, {
      key: 'shouldUpdateChild',
      value: function shouldUpdateChild(nextProps) {
        return this.shouldUpdateByCellEditing(nextProps) || this.shouldUpdatedByNormalProps(nextProps);
      }
    }, {
      key: 'shouldRowContentUpdate',
      value: function shouldRowContentUpdate(nextProps) {
        return this.shouldUpdateChild(nextProps) || this.shouldUpdateByColumnsForSimpleCheck(nextProps);
      }
    }]);

    return RowShouldUpdater;
  }(ExtendBase);
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _extends;
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  disabled: false
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export timeoutsShape */
/* unused harmony export classNamesShape */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);

var timeoutsShape =  false ? PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
  enter: PropTypes.number,
  exit: PropTypes.number,
  appear: PropTypes.number
}).isRequired]) : null;
var classNamesShape =  false ? PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
  enter: PropTypes.string,
  exit: PropTypes.string,
  active: PropTypes.string
}), PropTypes.shape({
  enter: PropTypes.string,
  enterDone: PropTypes.string,
  enterActive: PropTypes.string,
  exit: PropTypes.string,
  exitDone: PropTypes.string,
  exitActive: PropTypes.string
})]) : null;

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TransitionGroupContext__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_ChildMapping__ = __webpack_require__(65);









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? Object(__WEBPACK_IMPORTED_MODULE_7__utils_ChildMapping__["b" /* getInitialChildMapping */])(nextProps, handleExited) : Object(__WEBPACK_IMPORTED_MODULE_7__utils_ChildMapping__["c" /* getNextChildMapping */])(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = Object(__WEBPACK_IMPORTED_MODULE_7__utils_ChildMapping__["a" /* getChildMapping */])(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__["a" /* default */])({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__TransitionGroupContext__["a" /* default */].Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__TransitionGroupContext__["a" /* default */].Provider, {
      value: contextValue
    }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Component, props, children));
  };

  return TransitionGroup;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

TransitionGroup.propTypes =  false ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: PropTypes.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: PropTypes.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: PropTypes.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: PropTypes.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: PropTypes.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: PropTypes.func
} : {};
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (TransitionGroup);

/***/ }),
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bootstrapTable = __webpack_require__(27);

var _bootstrapTable2 = _interopRequireDefault(_bootstrapTable);

var _contexts = __webpack_require__(71);

var _contexts2 = _interopRequireDefault(_contexts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _contexts2.default)(_bootstrapTable2.default);

/***/ }),
/* 27 */
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

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _header = __webpack_require__(30);

var _header2 = _interopRequireDefault(_header);

var _filters = __webpack_require__(45);

var _filters2 = _interopRequireDefault(_filters);

var _caption = __webpack_require__(47);

var _caption2 = _interopRequireDefault(_caption);

var _body = __webpack_require__(48);

var _body2 = _interopRequireDefault(_body);

var _footer = __webpack_require__(67);

var _footer2 = _interopRequireDefault(_footer);

var _propsResolver = __webpack_require__(69);

var _propsResolver2 = _interopRequireDefault(_propsResolver);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint camelcase: 0 */
/* eslint arrow-body-style: 0 */

var BootstrapTable = function (_PropsBaseResolver) {
  _inherits(BootstrapTable, _PropsBaseResolver);

  function BootstrapTable(props) {
    _classCallCheck(this, BootstrapTable);

    var _this = _possibleConstructorReturn(this, (BootstrapTable.__proto__ || Object.getPrototypeOf(BootstrapTable)).call(this, props));

    _this.getData = function () {
      return _this.visibleRows();
    };

    _this.validateProps();
    return _this;
  }

  _createClass(BootstrapTable, [{
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.onDataSizeChange && !nextProps.pagination) {
        if (nextProps.data.length !== this.props.data.length) {
          nextProps.onDataSizeChange({ dataSize: nextProps.data.length });
        }
      }
    }

    // Exposed APIs

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          loading = _props.loading,
          overlay = _props.overlay;

      if (overlay) {
        var LoadingOverlay = overlay(loading);
        return _react2.default.createElement(
          LoadingOverlay,
          null,
          this.renderTable()
        );
      }
      return this.renderTable();
    }
  }, {
    key: 'renderTable',
    value: function renderTable() {
      var _props2 = this.props,
          columns = _props2.columns,
          keyField = _props2.keyField,
          tabIndexCell = _props2.tabIndexCell,
          id = _props2.id,
          classes = _props2.classes,
          bootstrap4 = _props2.bootstrap4,
          striped = _props2.striped,
          hover = _props2.hover,
          bordered = _props2.bordered,
          condensed = _props2.condensed,
          noDataIndication = _props2.noDataIndication,
          caption = _props2.caption,
          rowStyle = _props2.rowStyle,
          rowClasses = _props2.rowClasses,
          wrapperClasses = _props2.wrapperClasses,
          rowEvents = _props2.rowEvents,
          selectRow = _props2.selectRow,
          expandRow = _props2.expandRow,
          cellEdit = _props2.cellEdit,
          filterPosition = _props2.filterPosition;


      var tableWrapperClass = (0, _classnames2.default)('react-bootstrap-table', wrapperClasses);

      var tableClass = (0, _classnames2.default)('table', _defineProperty({
        'table-striped': striped,
        'table-hover': hover,
        'table-bordered': bordered
      }, bootstrap4 ? 'table-sm' : 'table-condensed', condensed), classes);

      var hasFilters = columns.some(function (col) {
        return col.filter || col.filterRenderer;
      });

      var hasFooter = _utils2.default.filter(columns, function (col) {
        return _utils2.default.has(col, 'footer');
      }).length > 0;

      var tableCaption = caption && _react2.default.createElement(
        _caption2.default,
        { bootstrap4: bootstrap4 },
        caption
      );

      return _react2.default.createElement(
        'div',
        { className: tableWrapperClass },
        _react2.default.createElement(
          'table',
          { id: id, className: tableClass },
          tableCaption,
          _react2.default.createElement(_header2.default, {
            columns: columns,
            className: this.props.headerClasses,
            wrapperClasses: this.props.headerWrapperClasses,
            sortField: this.props.sortField,
            sortOrder: this.props.sortOrder,
            onSort: this.props.onSort,
            globalSortCaret: this.props.sort && this.props.sort.sortCaret,
            onFilter: this.props.onFilter,
            currFilters: this.props.currFilters,
            onExternalFilter: this.props.onExternalFilter,
            selectRow: selectRow,
            expandRow: expandRow,
            filterPosition: filterPosition
          }),
          hasFilters && filterPosition !== _const2.default.FILTERS_POSITION_INLINE && _react2.default.createElement(_filters2.default, {
            columns: columns,
            className: this.props.filtersClasses,
            onSort: this.props.onSort,
            onFilter: this.props.onFilter,
            currFilters: this.props.currFilters,
            filterPosition: this.props.filterPosition,
            onExternalFilter: this.props.onExternalFilter,
            selectRow: selectRow,
            expandRow: expandRow
          }),
          _react2.default.createElement(_body2.default, {
            className: this.props.bodyClasses,
            data: this.getData(),
            keyField: keyField,
            tabIndexCell: tabIndexCell,
            columns: columns,
            isEmpty: this.isEmpty(),
            visibleColumnSize: this.visibleColumnSize(),
            noDataIndication: noDataIndication,
            cellEdit: cellEdit,
            selectRow: selectRow,
            expandRow: expandRow,
            rowStyle: rowStyle,
            rowClasses: rowClasses,
            rowEvents: rowEvents
          }),
          hasFooter && _react2.default.createElement(_footer2.default, {
            data: this.getData(),
            columns: columns,
            selectRow: selectRow,
            expandRow: expandRow,
            className: this.props.footerClasses
          })
        )
      );
    }
  }]);

  return BootstrapTable;
}((0, _propsResolver2.default)(_react.Component));

BootstrapTable.propTypes = {
  keyField: _propTypes2.default.string.isRequired,
  data: _propTypes2.default.array.isRequired,
  columns: _propTypes2.default.array.isRequired,
  bootstrap4: _propTypes2.default.bool,
  remote: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
    pagination: _propTypes2.default.bool
  })]),
  noDataIndication: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  striped: _propTypes2.default.bool,
  bordered: _propTypes2.default.bool,
  hover: _propTypes2.default.bool,
  tabIndexCell: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  classes: _propTypes2.default.string,
  headerClasses: _propTypes2.default.string,
  bodyClasses: _propTypes2.default.string,
  wrapperClasses: _propTypes2.default.string,
  headerWrapperClasses: _propTypes2.default.string,
  condensed: _propTypes2.default.bool,
  caption: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),
  pagination: _propTypes2.default.object,
  filter: _propTypes2.default.object,
  cellEdit: _propTypes2.default.object,
  selectRow: _propTypes2.default.shape({
    mode: _propTypes2.default.oneOf([_const2.default.ROW_SELECT_SINGLE, _const2.default.ROW_SELECT_MULTIPLE, _const2.default.ROW_SELECT_DISABLED]).isRequired,
    clickToSelect: _propTypes2.default.bool,
    clickToExpand: _propTypes2.default.bool,
    clickToEdit: _propTypes2.default.bool,
    hideSelectAll: _propTypes2.default.bool,
    onSelect: _propTypes2.default.func,
    onSelectAll: _propTypes2.default.func,
    style: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    classes: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    nonSelectable: _propTypes2.default.array,
    nonSelectableStyle: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    nonSelectableClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    bgColor: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    hideSelectColumn: _propTypes2.default.bool,
    selectionRenderer: _propTypes2.default.func,
    selectionHeaderRenderer: _propTypes2.default.func,
    headerColumnStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    selectColumnStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    selectColumnPosition: _propTypes2.default.oneOf([_const2.default.INDICATOR_POSITION_LEFT, _const2.default.INDICATOR_POSITION_RIGHT])
  }),
  expandRow: _propTypes2.default.shape({
    renderer: _propTypes2.default.func,
    expanded: _propTypes2.default.array,
    onExpand: _propTypes2.default.func,
    onExpandAll: _propTypes2.default.func,
    nonExpandable: _propTypes2.default.array,
    showExpandColumn: _propTypes2.default.bool,
    onlyOneExpanding: _propTypes2.default.bool,
    expandByColumnOnly: _propTypes2.default.bool,
    expandColumnRenderer: _propTypes2.default.func,
    expandHeaderColumnRenderer: _propTypes2.default.func,
    expandColumnPosition: _propTypes2.default.oneOf([_const2.default.INDICATOR_POSITION_LEFT, _const2.default.INDICATOR_POSITION_RIGHT]),
    className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    parentClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
  }),
  rowStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
  rowEvents: _propTypes2.default.object,
  rowClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  filtersClasses: _propTypes2.default.string,
  filterPosition: _propTypes2.default.oneOf([_const2.default.FILTERS_POSITION_TOP, _const2.default.FILTERS_POSITION_INLINE, _const2.default.FILTERS_POSITION_BOTTOM]),
  footerClasses: _propTypes2.default.string,
  defaultSorted: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    dataField: _propTypes2.default.string.isRequired,
    order: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC]).isRequired
  })),
  sort: _propTypes2.default.shape({
    dataField: _propTypes2.default.string,
    order: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC]),
    sortFunc: _propTypes2.default.func,
    sortCaret: _propTypes2.default.func
  }),
  defaultSortDirection: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC]),
  overlay: _propTypes2.default.func,
  onTableChange: _propTypes2.default.func,
  onSort: _propTypes2.default.func,
  onFilter: _propTypes2.default.func,
  onExternalFilter: _propTypes2.default.func,
  onDataSizeChange: _propTypes2.default.func,
  // Inject from toolkit
  search: _propTypes2.default.shape({
    searchText: _propTypes2.default.string,
    searchContext: _propTypes2.default.func
  }),
  setDependencyModules: _propTypes2.default.func
};

BootstrapTable.defaultProps = {
  bootstrap4: false,
  remote: false,
  striped: false,
  bordered: true,
  hover: false,
  condensed: false,
  noDataIndication: null,
  selectRow: {
    mode: _const2.default.ROW_SELECT_DISABLED,
    selected: [],
    hideSelectColumn: true
  },
  expandRow: {
    renderer: undefined,
    expanded: [],
    nonExpandable: []
  },
  cellEdit: {
    mode: null,
    nonEditableRows: []
  },
  filterPosition: _const2.default.FILTERS_POSITION_INLINE
};

exports.default = BootstrapTable;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(29);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
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
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _headerCell = __webpack_require__(31);

var _headerCell2 = _interopRequireDefault(_headerCell);

var _selectionHeaderCell = __webpack_require__(37);

var _selectionHeaderCell2 = _interopRequireDefault(_selectionHeaderCell);

var _expandHeaderCell = __webpack_require__(38);

var _expandHeaderCell2 = _interopRequireDefault(_expandHeaderCell);

var _selectionHeaderCellConsumer = __webpack_require__(39);

var _selectionHeaderCellConsumer2 = _interopRequireDefault(_selectionHeaderCellConsumer);

var _expandHeaderCellConsumer = __webpack_require__(44);

var _expandHeaderCellConsumer2 = _interopRequireDefault(_expandHeaderCellConsumer);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/require-default-props: 0 */
var Header = function Header(props) {
  var className = props.className,
      columns = props.columns,
      onSort = props.onSort,
      onFilter = props.onFilter,
      sortField = props.sortField,
      sortOrder = props.sortOrder,
      selectRow = props.selectRow,
      expandRow = props.expandRow,
      currFilters = props.currFilters,
      onExternalFilter = props.onExternalFilter,
      filterPosition = props.filterPosition,
      globalSortCaret = props.globalSortCaret,
      wrapperClasses = props.wrapperClasses;


  var SelectionHeaderCellComp = function SelectionHeaderCellComp() {
    return null;
  };
  var ExpansionHeaderCellComp = function ExpansionHeaderCellComp() {
    return null;
  };

  if (expandRow.showExpandColumn) {
    ExpansionHeaderCellComp = (0, _expandHeaderCellConsumer2.default)(_expandHeaderCell2.default);
  }

  if (selectRow) {
    SelectionHeaderCellComp = (0, _selectionHeaderCellConsumer2.default)(_selectionHeaderCell2.default);
  }

  var isRenderFunctionColumnInLeft = function isRenderFunctionColumnInLeft() {
    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _const2.default.INDICATOR_POSITION_LEFT;
    return position === _const2.default.INDICATOR_POSITION_LEFT;
  };

  var childrens = [columns.map(function (column, i) {
    var currSort = column.dataField === sortField;
    var isLastSorting = column.dataField === sortField;

    return _react2.default.createElement(_headerCell2.default, {
      index: i,
      key: column.dataField,
      column: column,
      onSort: onSort,
      sorting: currSort,
      sortOrder: sortOrder,
      globalSortCaret: globalSortCaret,
      isLastSorting: isLastSorting,
      onFilter: onFilter,
      currFilters: currFilters,
      onExternalFilter: onExternalFilter,
      filterPosition: filterPosition
    });
  })];

  if (!selectRow.hideSelectColumn) {
    if (isRenderFunctionColumnInLeft(selectRow.selectColumnPosition)) {
      childrens.unshift(_react2.default.createElement(SelectionHeaderCellComp, { key: 'selection' }));
    } else {
      childrens.push(_react2.default.createElement(SelectionHeaderCellComp, { key: 'selection' }));
    }
  }

  if (expandRow.showExpandColumn) {
    if (isRenderFunctionColumnInLeft(expandRow.expandColumnPosition)) {
      childrens.unshift(_react2.default.createElement(ExpansionHeaderCellComp, { key: 'expansion' }));
    } else {
      childrens.push(_react2.default.createElement(ExpansionHeaderCellComp, { key: 'expansion' }));
    }
  }

  return _react2.default.createElement(
    'thead',
    { className: wrapperClasses },
    _react2.default.createElement(
      'tr',
      { className: className },
      childrens
    )
  );
};

Header.propTypes = {
  columns: _propTypes2.default.array.isRequired,
  onSort: _propTypes2.default.func,
  onFilter: _propTypes2.default.func,
  sortField: _propTypes2.default.string,
  sortOrder: _propTypes2.default.string,
  selectRow: _propTypes2.default.object,
  currFilters: _propTypes2.default.object,
  onExternalFilter: _propTypes2.default.func,
  globalSortCaret: _propTypes2.default.func,
  className: _propTypes2.default.string,
  wrapperClasses: _propTypes2.default.string,
  expandRow: _propTypes2.default.object,
  filterPosition: _propTypes2.default.oneOf([_const2.default.FILTERS_POSITION_TOP, _const2.default.FILTERS_POSITION_INLINE, _const2.default.FILTERS_POSITION_BOTTOM])
};

exports.default = Header;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _symbol = __webpack_require__(32);

var _symbol2 = _interopRequireDefault(_symbol);

var _caret = __webpack_require__(33);

var _caret2 = _interopRequireDefault(_caret);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _cellEventDelegater = __webpack_require__(9);

var _cellEventDelegater2 = _interopRequireDefault(_cellEventDelegater);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */


var HeaderCell = function (_eventDelegater) {
  _inherits(HeaderCell, _eventDelegater);

  function HeaderCell() {
    _classCallCheck(this, HeaderCell);

    return _possibleConstructorReturn(this, (HeaderCell.__proto__ || Object.getPrototypeOf(HeaderCell)).apply(this, arguments));
  }

  _createClass(HeaderCell, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          column = _props.column,
          index = _props.index,
          onSort = _props.onSort,
          sorting = _props.sorting,
          sortOrder = _props.sortOrder,
          isLastSorting = _props.isLastSorting,
          onFilter = _props.onFilter,
          currFilters = _props.currFilters,
          filterPosition = _props.filterPosition,
          onExternalFilter = _props.onExternalFilter,
          globalSortCaret = _props.globalSortCaret;
      var text = column.text,
          sort = column.sort,
          sortCaret = column.sortCaret,
          filter = column.filter,
          filterRenderer = column.filterRenderer,
          headerTitle = column.headerTitle,
          headerAlign = column.headerAlign,
          headerFormatter = column.headerFormatter,
          headerEvents = column.headerEvents,
          headerClasses = column.headerClasses,
          headerStyle = column.headerStyle,
          headerAttrs = column.headerAttrs,
          headerSortingClasses = column.headerSortingClasses,
          headerSortingStyle = column.headerSortingStyle;


      var sortCaretfunc = sortCaret || globalSortCaret;

      var delegateEvents = this.delegate(headerEvents);

      var customAttrs = _utils2.default.isFunction(headerAttrs) ? headerAttrs(column, index) : headerAttrs || {};

      var cellAttrs = _extends({}, customAttrs, delegateEvents, {
        tabIndex: _utils2.default.isDefined(customAttrs.tabIndex) ? customAttrs.tabIndex : 0
      });

      var sortSymbol = void 0;
      var filterElm = void 0;
      var cellStyle = {};
      var cellClasses = _utils2.default.isFunction(headerClasses) ? headerClasses(column, index) : headerClasses;

      if (headerStyle) {
        cellStyle = _utils2.default.isFunction(headerStyle) ? headerStyle(column, index) : headerStyle;
        cellStyle = cellStyle ? _extends({}, cellStyle) : cellStyle;
      }

      if (headerTitle) {
        cellAttrs.title = _utils2.default.isFunction(headerTitle) ? headerTitle(column, index) : text;
      }

      if (headerAlign) {
        cellStyle.textAlign = _utils2.default.isFunction(headerAlign) ? headerAlign(column, index) : headerAlign;
      }

      if (sort) {
        var customClick = cellAttrs.onClick;
        cellAttrs['aria-label'] = sorting ? text + ' sort ' + sortOrder : text + ' sortable';
        cellAttrs.onKeyUp = function (e) {
          if (e.key === 'Enter') {
            onSort(column);
            if (_utils2.default.isFunction(customClick)) customClick(e);
          }
        };
        cellAttrs.onClick = function (e) {
          onSort(column);
          if (_utils2.default.isFunction(customClick)) customClick(e);
        };
        cellAttrs.className = (0, _classnames2.default)(cellAttrs.className, 'sortable');

        if (sorting) {
          sortSymbol = sortCaretfunc ? sortCaretfunc(sortOrder, column) : _react2.default.createElement(_caret2.default, { order: sortOrder });

          // append customized classes or style if table was sorting based on the current column.
          cellClasses = (0, _classnames2.default)(cellClasses, _utils2.default.isFunction(headerSortingClasses) ? headerSortingClasses(column, sortOrder, isLastSorting, index) : headerSortingClasses);

          cellStyle = _extends({}, cellStyle, _utils2.default.isFunction(headerSortingStyle) ? headerSortingStyle(column, sortOrder, isLastSorting, index) : headerSortingStyle);
        } else {
          sortSymbol = sortCaretfunc ? sortCaretfunc(undefined, column) : _react2.default.createElement(_symbol2.default, null);
        }
      }

      if (cellClasses) cellAttrs.className = (0, _classnames2.default)(cellAttrs.className, cellClasses);
      if (!_utils2.default.isEmptyObject(cellStyle)) cellAttrs.style = cellStyle;

      if (filterPosition === _const2.default.FILTERS_POSITION_INLINE) {
        if (filterRenderer) {
          var onCustomFilter = onExternalFilter(column, filter.props.type);
          filterElm = filterRenderer(onCustomFilter, column);
        } else if (filter) {
          filterElm = _react2.default.createElement(filter.Filter, _extends({}, filter.props, {
            filterState: currFilters[column.dataField],
            onFilter: onFilter,
            column: column
          }));
        }
      }

      var children = headerFormatter ? headerFormatter(column, index, { sortElement: sortSymbol, filterElement: filterElm }) : text;

      if (headerFormatter) {
        return _react2.default.createElement('th', cellAttrs, children);
      }

      return _react2.default.createElement('th', cellAttrs, children, sortSymbol, filterElm);
    }
  }]);

  return HeaderCell;
}((0, _cellEventDelegater2.default)(_react2.default.Component));

HeaderCell.propTypes = {
  column: _propTypes2.default.shape({
    dataField: _propTypes2.default.string.isRequired,
    text: _propTypes2.default.string.isRequired,
    type: _propTypes2.default.oneOf([_const2.default.TYPE_STRING, _const2.default.TYPE_NUMBER, _const2.default.TYPE_BOOLEAN, _const2.default.TYPE_DATE]),
    isDummyField: _propTypes2.default.bool,
    hidden: _propTypes2.default.bool,
    headerFormatter: _propTypes2.default.func,
    formatter: _propTypes2.default.func,
    formatExtraData: _propTypes2.default.any,
    headerClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    classes: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    headerStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    style: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    headerTitle: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
    title: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
    headerEvents: _propTypes2.default.object,
    events: _propTypes2.default.object,
    headerAlign: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    align: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    headerAttrs: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    attrs: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    sort: _propTypes2.default.bool,
    sortFunc: _propTypes2.default.func,
    onSort: _propTypes2.default.func,
    editor: _propTypes2.default.object,
    editable: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
    editCellStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    editCellClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    editorStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    editorClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    editorRenderer: _propTypes2.default.func,
    validator: _propTypes2.default.func,
    filter: _propTypes2.default.object,
    filterRenderer: _propTypes2.default.func,
    filterValue: _propTypes2.default.func,
    searchable: _propTypes2.default.bool
  }).isRequired,
  index: _propTypes2.default.number.isRequired,
  onSort: _propTypes2.default.func,
  sorting: _propTypes2.default.bool,
  sortOrder: _propTypes2.default.oneOf([_const2.default.SORT_ASC, _const2.default.SORT_DESC]),
  sortCaret: _propTypes2.default.func,
  isLastSorting: _propTypes2.default.bool,
  onFilter: _propTypes2.default.func,
  filterPosition: _propTypes2.default.oneOf([_const2.default.FILTERS_POSITION_INLINE, _const2.default.FILTERS_POSITION_BOTTOM, _const2.default.FILTERS_POSITION_TOP]),
  currFilters: _propTypes2.default.object,
  onExternalFilter: _propTypes2.default.func
};

exports.default = HeaderCell;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bootstrap = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SortSymbol = function SortSymbol() {
  return _react2.default.createElement(
    _bootstrap.BootstrapContext.Consumer,
    null,
    function (_ref) {
      var bootstrap4 = _ref.bootstrap4;
      return bootstrap4 ? _react2.default.createElement('span', { className: 'order-4' }) : _react2.default.createElement(
        'span',
        { className: 'order' },
        _react2.default.createElement(
          'span',
          { className: 'dropdown' },
          _react2.default.createElement('span', { className: 'caret' })
        ),
        _react2.default.createElement(
          'span',
          { className: 'dropup' },
          _react2.default.createElement('span', { className: 'caret' })
        )
      );
    }
  );
};

exports.default = SortSymbol;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _bootstrap = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SortCaret = function SortCaret(_ref) {
  var order = _ref.order;

  var orderClass = (0, _classnames2.default)('react-bootstrap-table-sort-order', {
    dropup: order === _const2.default.SORT_ASC
  });

  return _react2.default.createElement(
    _bootstrap.BootstrapContext.Consumer,
    null,
    function (_ref2) {
      var bootstrap4 = _ref2.bootstrap4;
      return bootstrap4 ? _react2.default.createElement('span', { className: 'caret-4-' + order }) : _react2.default.createElement(
        'span',
        { className: orderClass },
        _react2.default.createElement('span', { className: 'caret' })
      );
    }
  );
};

SortCaret.propTypes = {
  order: _propTypes2.default.oneOf([_const2.default.SORT_ASC, _const2.default.SORT_DESC]).isRequired
};

exports.default = SortCaret;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.9.1
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` (`self`) in the browser, `global`
  // on the server, or `this` in some virtual machines. We use `self`
  // instead of `window` for `WebWorker` support.
  var root = typeof self == 'object' && self.self === self && self ||
            typeof global == 'object' && global.global === global && global ||
            this ||
            {};

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype;
  var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

  // Create quick reference variables for speed access to core prototypes.
  var push = ArrayProto.push,
      slice = ArrayProto.slice,
      toString = ObjProto.toString,
      hasOwnProperty = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var nativeIsArray = Array.isArray,
      nativeKeys = Object.keys,
      nativeCreate = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for their old module API. If we're in
  // the browser, add `_` as a global object.
  // (`nodeType` is checked to ensure that `module`
  // and `exports` are not HTML elements.)
  if (typeof exports != 'undefined' && !exports.nodeType) {
    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.9.1';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      // The 2-argument case is omitted because we’re not using it.
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  var builtinIteratee;

  // An internal function to generate callbacks that can be applied to each
  // element in a collection, returning the desired result — either `identity`,
  // an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (_.iteratee !== builtinIteratee) return _.iteratee(value, context);
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value) && !_.isArray(value)) return _.matcher(value);
    return _.property(value);
  };

  // External wrapper for our callback generator. Users may customize
  // `_.iteratee` if they want additional predicate/iteratee shorthand styles.
  // This abstraction hides the internal-only argCount argument.
  _.iteratee = builtinIteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // Some functions take a variable number of arguments, or a few expected
  // arguments at the beginning and then a variable number of values to operate
  // on. This helper accumulates all remaining arguments past the function’s
  // argument length (or an explicit `startIndex`), into an array that becomes
  // the last argument. Similar to ES6’s "rest parameter".
  var restArguments = function(func, startIndex) {
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    return function() {
      var length = Math.max(arguments.length - startIndex, 0),
          rest = Array(length),
          index = 0;
      for (; index < length; index++) {
        rest[index] = arguments[index + startIndex];
      }
      switch (startIndex) {
        case 0: return func.call(this, rest);
        case 1: return func.call(this, arguments[0], rest);
        case 2: return func.call(this, arguments[0], arguments[1], rest);
      }
      var args = Array(startIndex + 1);
      for (index = 0; index < startIndex; index++) {
        args[index] = arguments[index];
      }
      args[startIndex] = rest;
      return func.apply(this, args);
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var shallowProperty = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  var has = function(obj, path) {
    return obj != null && hasOwnProperty.call(obj, path);
  }

  var deepGet = function(obj, path) {
    var length = path.length;
    for (var i = 0; i < length; i++) {
      if (obj == null) return void 0;
      obj = obj[path[i]];
    }
    return length ? obj : void 0;
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object.
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = shallowProperty('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  var createReduce = function(dir) {
    // Wrap code that reassigns argument variables in a separate function than
    // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
    var reducer = function(obj, iteratee, memo, initial) {
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      if (!initial) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    };

    return function(obj, iteratee, memo, context) {
      var initial = arguments.length >= 3;
      return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
    };
  };

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var keyFinder = isArrayLike(obj) ? _.findIndex : _.findKey;
    var key = keyFinder(obj, predicate, context);
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = restArguments(function(obj, path, args) {
    var contextPath, func;
    if (_.isFunction(path)) {
      func = path;
    } else if (_.isArray(path)) {
      contextPath = path.slice(0, -1);
      path = path[path.length - 1];
    }
    return _.map(obj, function(context) {
      var method = func;
      if (!method) {
        if (contextPath && contextPath.length) {
          context = deepGet(context, contextPath);
        }
        if (context == null) return void 0;
        method = context[path];
      }
      return method == null ? method : method.apply(context, args);
    });
  });

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection.
  _.shuffle = function(obj) {
    return _.sample(obj, Infinity);
  };

  // Sample **n** random values from a collection using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    var sample = isArrayLike(obj) ? _.clone(obj) : _.values(obj);
    var length = getLength(sample);
    n = Math.max(Math.min(n, length), 0);
    var last = length - 1;
    for (var index = 0; index < n; index++) {
      var rand = _.random(index, last);
      var temp = sample[index];
      sample[index] = sample[rand];
      sample[rand] = temp;
    }
    return sample.slice(0, n);
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    var index = 0;
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, key, list) {
      return {
        value: value,
        index: index++,
        criteria: iteratee(value, key, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior, partition) {
    return function(obj, iteratee, context) {
      var result = partition ? [[], []] : {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (has(result, key)) result[key]++; else result[key] = 1;
  });

  var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (_.isString(obj)) {
      // Keep surrogate pair characters together
      return obj.match(reStrSymbol);
    }
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = group(function(result, value, pass) {
    result[pass ? 0 : 1].push(value);
  }, true);

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null || array.length < 1) return n == null ? void 0 : [];
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null || array.length < 1) return n == null ? void 0 : [];
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, Boolean);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, output) {
    output = output || [];
    var idx = output.length;
    for (var i = 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        // Flatten current level of array or arguments object.
        if (shallow) {
          var j = 0, len = value.length;
          while (j < len) output[idx++] = value[j++];
        } else {
          flatten(value, shallow, strict, output);
          idx = output.length;
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = restArguments(function(array, otherArrays) {
    return _.difference(array, otherArrays);
  });

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // The faster algorithm will not work with an iteratee if the iteratee
  // is not a one-to-one function, so providing an iteratee will disable
  // the faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted && !iteratee) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = restArguments(function(arrays) {
    return _.uniq(flatten(arrays, true, true));
  });

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      var j;
      for (j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = restArguments(function(array, rest) {
    rest = flatten(rest, true, true);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  });

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices.
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = restArguments(_.unzip);

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values. Passing by pairs is the reverse of _.pairs.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions.
  var createPredicateIndexFinder = function(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  };

  // Returns the first index on an array-like that passes a predicate test.
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions.
  var createIndexFinder = function(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
          i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
          length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  };

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    if (!step) {
      step = stop < start ? -1 : 1;
    }

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Chunk a single array into multiple arrays, each containing `count` or fewer
  // items.
  _.chunk = function(array, count) {
    if (count == null || count < 1) return [];
    var result = [];
    var i = 0, length = array.length;
    while (i < length) {
      result.push(slice.call(array, i, i += count));
    }
    return result;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments.
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = restArguments(function(func, context, args) {
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var bound = restArguments(function(callArgs) {
      return executeBound(func, bound, context, this, args.concat(callArgs));
    });
    return bound;
  });

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder by default, allowing any combination of arguments to be
  // pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
  _.partial = restArguments(function(func, boundArgs) {
    var placeholder = _.partial.placeholder;
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  });

  _.partial.placeholder = _;

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = restArguments(function(obj, keys) {
    keys = flatten(keys, false, false);
    var index = keys.length;
    if (index < 1) throw new Error('bindAll must be passed function names');
    while (index--) {
      var key = keys[index];
      obj[key] = _.bind(obj[key], obj);
    }
  });

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = restArguments(function(func, wait, args) {
    return setTimeout(function() {
      return func.apply(null, args);
    }, wait);
  });

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };

    var throttled = function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };

    throttled.cancel = function() {
      clearTimeout(timeout);
      previous = 0;
      timeout = context = args = null;
    };

    return throttled;
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, result;

    var later = function(context, args) {
      timeout = null;
      if (args) result = func.apply(context, args);
    };

    var debounced = restArguments(function(args) {
      if (timeout) clearTimeout(timeout);
      if (immediate) {
        var callNow = !timeout;
        timeout = setTimeout(later, wait);
        if (callNow) result = func.apply(this, args);
      } else {
        timeout = _.delay(later, wait, this, args);
      }

      return result;
    });

    debounced.cancel = function() {
      clearTimeout(timeout);
      timeout = null;
    };

    return debounced;
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  _.restArguments = restArguments;

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
    'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  var collectNonEnumProps = function(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  };

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`.
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object.
  // In contrast to _.map it returns an object.
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = _.keys(obj),
        length = keys.length,
        results = {};
    for (var index = 0; index < length; index++) {
      var currentKey = keys[index];
      results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  // The opposite of _.object.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`.
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, defaults) {
    return function(obj) {
      var length = arguments.length;
      if (defaults) obj = Object(obj);
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!defaults || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s).
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test.
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Internal pick helper function to determine if `obj` has key `key`.
  var keyInObj = function(value, key, obj) {
    return key in obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = restArguments(function(obj, keys) {
    var result = {}, iteratee = keys[0];
    if (obj == null) return result;
    if (_.isFunction(iteratee)) {
      if (keys.length > 1) iteratee = optimizeCb(iteratee, keys[1]);
      keys = _.allKeys(obj);
    } else {
      iteratee = keyInObj;
      keys = flatten(keys, false, false);
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  });

  // Return a copy of the object without the blacklisted properties.
  _.omit = restArguments(function(obj, keys) {
    var iteratee = keys[0], context;
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
      if (keys.length > 1) context = keys[1];
    } else {
      keys = _.map(flatten(keys, false, false), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  });

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq, deepEq;
  eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null) return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a) return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
    return deepEq(a, b, aStack, bStack);
  };

  // Internal recursive comparison function for `isEqual`.
  deepEq = function(a, b, aStack, bStack) {
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN.
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
      case '[object Symbol]':
        return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
  var nodelist = root.document && root.document.childNodes;
  if (typeof /./ != 'function' && typeof Int8Array != 'object' && typeof nodelist != 'function') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return !_.isSymbol(obj) && isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`?
  _.isNaN = function(obj) {
    return _.isNumber(obj) && isNaN(obj);
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, path) {
    if (!_.isArray(path)) {
      return has(obj, path);
    }
    var length = path.length;
    for (var i = 0; i < length; i++) {
      var key = path[i];
      if (obj == null || !hasOwnProperty.call(obj, key)) {
        return false;
      }
      obj = obj[key];
    }
    return !!length;
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  // Creates a function that, when passed an object, will traverse that object’s
  // properties down the given `path`, specified as an array of keys or indexes.
  _.property = function(path) {
    if (!_.isArray(path)) {
      return shallowProperty(path);
    }
    return function(obj) {
      return deepGet(obj, path);
    };
  };

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    if (obj == null) {
      return function(){};
    }
    return function(path) {
      return !_.isArray(path) ? obj[path] : deepGet(obj, path);
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

  // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped.
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // Traverses the children of `obj` along `path`. If a child is a function, it
  // is invoked with its parent as context. Returns the value of the final
  // child, or `fallback` if any child is undefined.
  _.result = function(obj, path, fallback) {
    if (!_.isArray(path)) path = [path];
    var length = path.length;
    if (!length) {
      return _.isFunction(fallback) ? fallback.call(obj) : fallback;
    }
    for (var i = 0; i < length; i++) {
      var prop = obj == null ? void 0 : obj[path[i]];
      if (prop === void 0) {
        prop = fallback;
        i = length; // Ensure we don't continue iterating.
      }
      obj = _.isFunction(prop) ? prop.call(obj) : prop;
    }
    return obj;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'": "'",
    '\\': '\\',
    '\r': 'r',
    '\n': 'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offset.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    var render;
    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var chainResult = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return chainResult(this, func.apply(_, args));
      };
    });
    return _;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return chainResult(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return chainResult(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return String(this._wrapped);
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return _;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}());

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35), __webpack_require__(36)(module)))

/***/ }),
/* 35 */
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
/* 36 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckBox = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _bootstrap = __webpack_require__(5);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */


var CheckBox = exports.CheckBox = function CheckBox(_ref) {
  var className = _ref.className,
      checked = _ref.checked,
      indeterminate = _ref.indeterminate;
  return _react2.default.createElement('input', {
    type: 'checkbox',
    checked: checked,
    className: className,
    ref: function ref(input) {
      if (input) input.indeterminate = indeterminate; // eslint-disable-line no-param-reassign
    },
    onChange: function onChange() {}
  });
};

CheckBox.propTypes = {
  checked: _propTypes2.default.bool.isRequired,
  indeterminate: _propTypes2.default.bool.isRequired,
  className: _propTypes2.default.string
};

var SelectionHeaderCell = function (_Component) {
  _inherits(SelectionHeaderCell, _Component);

  function SelectionHeaderCell() {
    _classCallCheck(this, SelectionHeaderCell);

    var _this = _possibleConstructorReturn(this, (SelectionHeaderCell.__proto__ || Object.getPrototypeOf(SelectionHeaderCell)).call(this));

    _this.handleCheckBoxClick = _this.handleCheckBoxClick.bind(_this);
    return _this;
  }

  /**
   * avoid updating if button is
   * 1. radio
   * 2. status was not changed.
   */


  _createClass(SelectionHeaderCell, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var ROW_SELECT_SINGLE = _const2.default.ROW_SELECT_SINGLE;
      var _props = this.props,
          mode = _props.mode,
          checkedStatus = _props.checkedStatus;


      if (mode === ROW_SELECT_SINGLE) return false;

      return nextProps.checkedStatus !== checkedStatus;
    }
  }, {
    key: 'handleCheckBoxClick',
    value: function handleCheckBoxClick(e) {
      var _props2 = this.props,
          onAllRowsSelect = _props2.onAllRowsSelect,
          checkedStatus = _props2.checkedStatus;

      var isUnSelect = checkedStatus === _const2.default.CHECKBOX_STATUS_CHECKED || checkedStatus === _const2.default.CHECKBOX_STATUS_INDETERMINATE;

      onAllRowsSelect(e, isUnSelect);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var CHECKBOX_STATUS_CHECKED = _const2.default.CHECKBOX_STATUS_CHECKED,
          CHECKBOX_STATUS_INDETERMINATE = _const2.default.CHECKBOX_STATUS_INDETERMINATE,
          ROW_SELECT_MULTIPLE = _const2.default.ROW_SELECT_MULTIPLE;
      var _props3 = this.props,
          mode = _props3.mode,
          checkedStatus = _props3.checkedStatus,
          selectionHeaderRenderer = _props3.selectionHeaderRenderer,
          hideSelectAll = _props3.hideSelectAll,
          headerColumnStyle = _props3.headerColumnStyle;

      if (hideSelectAll) {
        return _react2.default.createElement('th', { 'data-row-selection': true });
      }

      var checked = checkedStatus === CHECKBOX_STATUS_CHECKED;

      var indeterminate = checkedStatus === CHECKBOX_STATUS_INDETERMINATE;

      var attrs = {};
      var content = void 0;
      if (selectionHeaderRenderer || mode === ROW_SELECT_MULTIPLE) {
        attrs.onClick = this.handleCheckBoxClick;
      }

      attrs.style = _utils2.default.isFunction(headerColumnStyle) ? headerColumnStyle(checkedStatus) : headerColumnStyle;

      return _react2.default.createElement(
        _bootstrap.BootstrapContext.Consumer,
        null,
        function (_ref2) {
          var bootstrap4 = _ref2.bootstrap4;

          if (selectionHeaderRenderer) {
            content = selectionHeaderRenderer({
              mode: mode,
              checked: checked,
              indeterminate: indeterminate
            });
          } else if (mode === ROW_SELECT_MULTIPLE) {
            content = _react2.default.createElement(CheckBox, _extends({}, _this2.props, {
              checked: checked,
              className: bootstrap4 ? 'selection-input-4' : '',
              indeterminate: indeterminate
            }));
          }
          return _react2.default.createElement(
            'th',
            _extends({ className: 'selection-cell-header', 'data-row-selection': true }, attrs),
            content
          );
        }
      );
    }
  }]);

  return SelectionHeaderCell;
}(_react.Component);

SelectionHeaderCell.propTypes = {
  mode: _propTypes2.default.string.isRequired,
  checkedStatus: _propTypes2.default.string,
  onAllRowsSelect: _propTypes2.default.func,
  hideSelectAll: _propTypes2.default.bool,
  selectionHeaderRenderer: _propTypes2.default.func,
  headerColumnStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func])
};
exports.default = SelectionHeaderCell;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */
/* eslint no-nested-ternary: 0 */


var ExpansionHeaderCell = function (_Component) {
  _inherits(ExpansionHeaderCell, _Component);

  function ExpansionHeaderCell() {
    _classCallCheck(this, ExpansionHeaderCell);

    var _this = _possibleConstructorReturn(this, (ExpansionHeaderCell.__proto__ || Object.getPrototypeOf(ExpansionHeaderCell)).call(this));

    _this.handleCheckBoxClick = _this.handleCheckBoxClick.bind(_this);
    return _this;
  }

  _createClass(ExpansionHeaderCell, [{
    key: 'handleCheckBoxClick',
    value: function handleCheckBoxClick(e) {
      var _props = this.props,
          isAnyExpands = _props.isAnyExpands,
          onAllRowExpand = _props.onAllRowExpand;


      onAllRowExpand(e, !isAnyExpands);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          isAnyExpands = _props2.isAnyExpands,
          expandHeaderColumnRenderer = _props2.expandHeaderColumnRenderer;

      var attrs = {
        onClick: this.handleCheckBoxClick
      };

      return _react2.default.createElement(
        'th',
        _extends({ className: 'expand-cell-header', 'data-row-selection': true }, attrs),
        expandHeaderColumnRenderer ? expandHeaderColumnRenderer({ isAnyExpands: isAnyExpands }) : isAnyExpands ? '(-)' : '(+)'
      );
    }
  }]);

  return ExpansionHeaderCell;
}(_react.Component);

ExpansionHeaderCell.propTypes = {
  isAnyExpands: _propTypes2.default.bool.isRequired,
  onAllRowExpand: _propTypes2.default.func.isRequired,
  expandHeaderColumnRenderer: _propTypes2.default.func
};
exports.default = ExpansionHeaderCell;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _selectionContext = __webpack_require__(10);

var _selectionContext2 = _interopRequireDefault(_selectionContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Component) {
  return function () {
    return _react2.default.createElement(
      _selectionContext2.default.Consumer,
      null,
      function (selectRow) {
        return _react2.default.createElement(Component, selectRow);
      }
    );
  };
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExpandedRows = exports.expandableKeys = exports.isAnyExpands = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _rows = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isAnyExpands = exports.isAnyExpands = function isAnyExpands(data, keyField) {
  var expanded = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var _loop = function _loop(i) {
    var rowKey = _utils2.default.get(data[i], keyField);
    if (typeof expanded.find(function (x) {
      return x === rowKey;
    }) !== 'undefined') {
      return {
        v: true
      };
    }
  };

  for (var i = 0; i < data.length; i += 1) {
    var _ret = _loop(i);

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
  return false;
};

var expandableKeys = exports.expandableKeys = function expandableKeys(data, keyField) {
  var skips = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (skips.length === 0) {
    return data.map(function (row) {
      return _utils2.default.get(row, keyField);
    });
  }
  return data.filter(function (row) {
    return !_utils2.default.contains(skips, _utils2.default.get(row, keyField));
  }).map(function (row) {
    return _utils2.default.get(row, keyField);
  });
};

var getExpandedRows = exports.getExpandedRows = function getExpandedRows(data, keyField, expanded) {
  return expanded.map(function (k) {
    return (0, _rows.getRowByRowId)(data, keyField, k);
  });
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editCell = undefined;

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _rows = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var editCell = exports.editCell = function editCell(data, keyField, rowId, dataField, newValue) {
  var row = (0, _rows.getRowByRowId)(data, keyField, rowId);
  if (row) _utils2.default.set(row, dataField, newValue);
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nextOrder = exports.sort = undefined;

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* eslint no-nested-ternary: 0 */
/* eslint no-lonely-if: 0 */
/* eslint no-underscore-dangle: 0 */


function comparator(a, b) {
  var result = void 0;
  if (typeof b === 'string') {
    result = b.localeCompare(a);
  } else {
    result = a > b ? -1 : a < b ? 1 : 0;
  }
  return result;
}

var sort = exports.sort = function sort(data, sortOrder, _ref) {
  var dataField = _ref.dataField,
      sortFunc = _ref.sortFunc,
      sortValue = _ref.sortValue;

  var _data = [].concat(_toConsumableArray(data));
  _data.sort(function (a, b) {
    var result = void 0;
    var valueA = _utils2.default.get(a, dataField);
    var valueB = _utils2.default.get(b, dataField);
    if (sortValue) {
      valueA = sortValue(valueA, a);
      valueB = sortValue(valueB, b);
    } else {
      valueA = _utils2.default.isDefined(valueA) ? valueA : '';
      valueB = _utils2.default.isDefined(valueB) ? valueB : '';
    }

    if (sortFunc) {
      result = sortFunc(valueA, valueB, sortOrder, dataField, a, b);
    } else {
      if (sortOrder === _const2.default.SORT_DESC) {
        result = comparator(valueA, valueB);
      } else {
        result = comparator(valueB, valueA);
      }
    }
    return result;
  });
  return _data;
};

var nextOrder = exports.nextOrder = function nextOrder(currentSortColumn, _ref2) {
  var sortOrder = _ref2.sortOrder,
      sortColumn = _ref2.sortColumn;
  var defaultOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _const2.default.SORT_DESC;

  if (!sortColumn || currentSortColumn.dataField !== sortColumn.dataField) return defaultOrder;
  return sortOrder === _const2.default.SORT_DESC ? _const2.default.SORT_ASC : _const2.default.SORT_DESC;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeConvert = undefined;

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeConvert = exports.typeConvert = function typeConvert(type, value) {
  if (type === _const2.default.TYPE_STRING) {
    return String(value);
  } else if (type === _const2.default.TYPE_NUMBER) {
    return Number(value);
  } else if (type === _const2.default.TYPE_BOOLEAN) {
    if (typeof value === 'boolean') {
      return value;
    }
    return value === 'true';
  } else if (type === _const2.default.TYPE_DATE) {
    return new Date(value);
  }
  return value;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rowExpandContext = __webpack_require__(12);

var _rowExpandContext2 = _interopRequireDefault(_rowExpandContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Component) {
  return function () {
    return _react2.default.createElement(
      _rowExpandContext2.default.Consumer,
      null,
      function (expandRow) {
        return _react2.default.createElement(Component, expandRow);
      }
    );
  };
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _filtersCell = __webpack_require__(46);

var _filtersCell2 = _interopRequireDefault(_filtersCell);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _rowTemplate = __webpack_require__(16);

var _rowTemplate2 = _interopRequireDefault(_rowTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filters = function Filters(props) {
  var columns = props.columns,
      onFilter = props.onFilter,
      currFilters = props.currFilters,
      filterPosition = props.filterPosition,
      onExternalFilter = props.onExternalFilter,
      className = props.className,
      selectRow = props.selectRow,
      expandRow = props.expandRow;


  function renderContent() {
    var filterColumns = [];
    var showFiltersRow = false;

    columns.forEach(function (column, i) {
      filterColumns.push(_react2.default.createElement(_filtersCell2.default, {
        index: i,
        key: column.dataField,
        column: column,
        currFilters: currFilters,
        onExternalFilter: onExternalFilter,
        onFilter: onFilter
      }));

      if (column.filterRenderer || column.filter) {
        if (!showFiltersRow) {
          showFiltersRow = true;
        }
      }
    });
    return filterColumns;
  }

  return _react2.default.createElement(
    'tbody',
    {
      className: className,
      style: {
        display: filterPosition === _const2.default.FILTERS_POSITION_TOP ? 'table-header-group' : 'table-footer-group'
      }
    },
    _react2.default.createElement(_rowTemplate2.default, {
      renderContent: renderContent,
      selectRow: selectRow,
      expandRow: expandRow,
      cellEl: 'td'
    })
  );
}; /* eslint react/require-default-props: 0 */


Filters.propTypes = {
  columns: _propTypes2.default.array.isRequired,
  onFilter: _propTypes2.default.func,
  filterPosition: _propTypes2.default.oneOf([_const2.default.FILTERS_POSITION_TOP, _const2.default.FILTERS_POSITION_INLINE, _const2.default.FILTERS_POSITION_BOTTOM]),
  currFilters: _propTypes2.default.object,
  onExternalFilter: _propTypes2.default.func,
  className: _propTypes2.default.string,
  selectRow: _propTypes2.default.object,
  expandRow: _propTypes2.default.object
};

Filters.defaultProps = {
  position: _const2.default.FILTERS_POSITION_TOP
};

exports.default = Filters;

/***/ }),
/* 46 */
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

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FiltersCell = function FiltersCell(props) {
  var index = props.index,
      column = props.column,
      onExternalFilter = props.onExternalFilter,
      currFilters = props.currFilters,
      onFilter = props.onFilter;
  var filterRenderer = column.filterRenderer,
      filter = column.filter;

  var filterElm = void 0;
  var cellAttrs = {};
  var cellStyle = {};
  cellAttrs.style = cellStyle;
  if (column.headerAlign) {
    cellStyle.textAlign = _utils2.default.isFunction(column.headerAlign) ? column.headerAlign(column, index) : column.headerAlign;
  }
  if (column.filterRenderer) {
    var onCustomFilter = onExternalFilter(column, filter.props.type);
    filterElm = filterRenderer(onCustomFilter, column);
  } else if (filter) {
    filterElm = _react2.default.createElement(filter.Filter, _extends({}, filter.props, {
      filterState: currFilters[column.dataField],
      onFilter: onFilter,
      column: column
    }));
  }
  return _react2.default.createElement('th', cellAttrs, filterElm);
};

FiltersCell.propTypes = {
  index: _propTypes2.default.number.isRequired,
  column: _propTypes2.default.object.isRequired,
  currFilters: _propTypes2.default.object.isRequired,
  onFilter: _propTypes2.default.func,
  onExternalFilter: _propTypes2.default.func
};

FiltersCell.defaultProps = {
  onFilter: function onFilter() {},
  onExternalFilter: function onExternalFilter() {}
};

exports.default = FiltersCell;

/***/ }),
/* 47 */
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

/* eslint react/require-default-props: 0 */
var Caption = function Caption(props) {
  if (!props.children) return null;

  var caption = props.bootstrap4 ? _react2.default.createElement(
    'caption',
    { style: { captionSide: 'top' } },
    props.children
  ) : _react2.default.createElement(
    'caption',
    null,
    props.children
  );

  return caption;
};

Caption.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),
  bootstrap4: _propTypes2.default.bool
};

exports.default = Caption;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _simpleRow = __webpack_require__(49);

var _simpleRow2 = _interopRequireDefault(_simpleRow);

var _aggregateRow = __webpack_require__(51);

var _aggregateRow2 = _interopRequireDefault(_aggregateRow);

var _rowSection = __webpack_require__(54);

var _rowSection2 = _interopRequireDefault(_rowSection);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _rowConsumer = __webpack_require__(55);

var _rowConsumer2 = _interopRequireDefault(_rowConsumer);

var _rowConsumer3 = __webpack_require__(56);

var _rowConsumer4 = _interopRequireDefault(_rowConsumer3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint react/require-default-props: 0 */

var Body = function (_React$Component) {
  _inherits(Body, _React$Component);

  function Body(props) {
    _classCallCheck(this, Body);

    var _this = _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, props));

    var keyField = props.keyField,
        cellEdit = props.cellEdit,
        selectRow = props.selectRow,
        expandRow = props.expandRow;

    // Construct Editing Cell Component

    if (cellEdit.createContext) {
      _this.EditingCell = cellEdit.createEditingCell(_utils2.default, cellEdit.options.onStartEdit);
    }

    // Construct Row Component
    var RowComponent = _simpleRow2.default;
    var selectRowEnabled = selectRow.mode !== _const2.default.ROW_SELECT_DISABLED;
    var expandRowEnabled = !!expandRow.renderer;

    if (expandRowEnabled) {
      RowComponent = (0, _rowConsumer4.default)(_aggregateRow2.default);
    }

    if (selectRowEnabled) {
      RowComponent = (0, _rowConsumer2.default)(expandRowEnabled ? RowComponent : _aggregateRow2.default);
    }

    if (cellEdit.createContext) {
      RowComponent = cellEdit.withRowLevelCellEdit(RowComponent, selectRowEnabled, keyField, _utils2.default);
    }
    _this.RowComponent = RowComponent;
    return _this;
  }

  _createClass(Body, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          columns = _props.columns,
          data = _props.data,
          tabIndexCell = _props.tabIndexCell,
          keyField = _props.keyField,
          isEmpty = _props.isEmpty,
          noDataIndication = _props.noDataIndication,
          visibleColumnSize = _props.visibleColumnSize,
          cellEdit = _props.cellEdit,
          selectRow = _props.selectRow,
          rowStyle = _props.rowStyle,
          rowClasses = _props.rowClasses,
          rowEvents = _props.rowEvents,
          expandRow = _props.expandRow,
          className = _props.className;


      var content = void 0;

      if (isEmpty) {
        var indication = _utils2.default.isFunction(noDataIndication) ? noDataIndication() : noDataIndication;
        if (!indication) {
          return null;
        }
        content = _react2.default.createElement(_rowSection2.default, { content: indication, colSpan: visibleColumnSize });
      } else {
        var selectRowEnabled = selectRow.mode !== _const2.default.ROW_SELECT_DISABLED;
        var expandRowEnabled = !!expandRow.renderer;

        var additionalRowProps = {};

        if (cellEdit.createContext) {
          additionalRowProps.EditingCellComponent = this.EditingCell;
        }

        if (selectRowEnabled || expandRowEnabled) {
          additionalRowProps.expandRow = expandRow;
          additionalRowProps.selectRow = selectRow;
        }

        content = data.map(function (row, index) {
          var key = _utils2.default.get(row, keyField);
          var baseRowProps = _extends({
            key: key,
            row: row,
            tabIndexCell: tabIndexCell,
            columns: columns,
            keyField: keyField,
            cellEdit: cellEdit,
            value: key,
            rowIndex: index,
            visibleColumnSize: visibleColumnSize,
            attrs: rowEvents || {}
          }, additionalRowProps);

          baseRowProps.style = _utils2.default.isFunction(rowStyle) ? rowStyle(row, index) : rowStyle;
          baseRowProps.className = _utils2.default.isFunction(rowClasses) ? rowClasses(row, index) : rowClasses;

          return _react2.default.createElement(_this2.RowComponent, baseRowProps);
        });
      }

      return _react2.default.createElement(
        'tbody',
        { className: className },
        content
      );
    }
  }]);

  return Body;
}(_react2.default.Component);

Body.propTypes = {
  keyField: _propTypes2.default.string.isRequired,
  data: _propTypes2.default.array.isRequired,
  columns: _propTypes2.default.array.isRequired,
  selectRow: _propTypes2.default.object
};

exports.default = Body;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rowPureContent = __webpack_require__(17);

var _rowPureContent2 = _interopRequireDefault(_rowPureContent);

var _eventDelegater = __webpack_require__(18);

var _eventDelegater2 = _interopRequireDefault(_eventDelegater);

var _shouldUpdater2 = __webpack_require__(19);

var _shouldUpdater3 = _interopRequireDefault(_shouldUpdater2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint react/no-array-index-key: 0 */


var SimpleRow = function (_shouldUpdater) {
  _inherits(SimpleRow, _shouldUpdater);

  function SimpleRow(props) {
    _classCallCheck(this, SimpleRow);

    var _this = _possibleConstructorReturn(this, (SimpleRow.__proto__ || Object.getPrototypeOf(SimpleRow)).call(this, props));

    _this.shouldUpdateRowContent = false;
    return _this;
  }

  _createClass(SimpleRow, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      this.shouldUpdateRowContent = false;
      this.shouldUpdateRowContent = this.shouldRowContentUpdate(nextProps);
      if (this.shouldUpdateRowContent) return true;

      return this.shouldUpdatedBySelfProps(nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          attrs = _props.attrs,
          visibleColumnSize = _props.visibleColumnSize,
          tabIndexCell = _props.tabIndexCell,
          rest = _objectWithoutProperties(_props, ['className', 'style', 'attrs', 'visibleColumnSize', 'tabIndexCell']);

      var trAttrs = this.delegate(attrs);
      var tabIndexStart = this.props.rowIndex * visibleColumnSize + 1;

      return _react2.default.createElement(
        'tr',
        _extends({ style: style, className: className }, trAttrs),
        _react2.default.createElement(_rowPureContent2.default, _extends({
          shouldUpdate: this.shouldUpdateRowContent,
          tabIndexStart: tabIndexCell ? tabIndexStart : -1
        }, rest))
      );
    }
  }]);

  return SimpleRow;
}((0, _shouldUpdater3.default)((0, _eventDelegater2.default)(_react.Component)));

SimpleRow.propTypes = {
  row: _propTypes2.default.object.isRequired,
  rowIndex: _propTypes2.default.number.isRequired,
  columns: _propTypes2.default.array.isRequired,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  attrs: _propTypes2.default.object
};

SimpleRow.defaultProps = {
  editable: true,
  style: {},
  className: null,
  attrs: {}
};

exports.default = SimpleRow;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cellEventDelegater = __webpack_require__(9);

var _cellEventDelegater2 = _interopRequireDefault(_cellEventDelegater);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */


var Cell = function (_eventDelegater) {
  _inherits(Cell, _eventDelegater);

  function Cell(props) {
    _classCallCheck(this, Cell);

    var _this = _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).call(this, props));

    _this.createHandleEditingCell = function (originFunc) {
      return function (e) {
        var _this$props = _this.props,
            onStart = _this$props.onStart,
            rowIndex = _this$props.rowIndex,
            columnIndex = _this$props.columnIndex,
            clickToEdit = _this$props.clickToEdit,
            dbclickToEdit = _this$props.dbclickToEdit;

        if ((clickToEdit || dbclickToEdit) && _utils2.default.isFunction(originFunc)) {
          originFunc(e);
        }
        if (onStart) {
          onStart(rowIndex, columnIndex);
        }
      };
    };

    _this.createHandleEditingCell = _this.createHandleEditingCell.bind(_this);
    return _this;
  }

  _createClass(Cell, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var shouldUpdate = false;
      if (nextProps.column.isDummyField) {
        shouldUpdate = !_utils2.default.isEqual(this.props.row, nextProps.row);
      } else {
        shouldUpdate = _utils2.default.get(this.props.row, this.props.column.dataField) !== _utils2.default.get(nextProps.row, nextProps.column.dataField);
      }

      if (shouldUpdate) return true;

      // if (nextProps.formatter)

      shouldUpdate = (nextProps.column.formatter ? !_utils2.default.isEqual(this.props.row, nextProps.row) : false) || this.props.column.hidden !== nextProps.column.hidden || this.props.column.isDummyField !== nextProps.column.isDummyField || this.props.rowIndex !== nextProps.rowIndex || this.props.columnIndex !== nextProps.columnIndex || this.props.className !== nextProps.className || this.props.title !== nextProps.title || this.props.editable !== nextProps.editable || this.props.clickToEdit !== nextProps.clickToEdit || this.props.dbclickToEdit !== nextProps.dbclickToEdit || !_utils2.default.isEqual(this.props.style, nextProps.style) || !_utils2.default.isEqual(this.props.column.formatExtraData, nextProps.column.formatExtraData) || !_utils2.default.isEqual(this.props.column.events, nextProps.column.events) || !_utils2.default.isEqual(this.props.column.attrs, nextProps.column.attrs) || this.props.tabIndex !== nextProps.tabIndex;
      return shouldUpdate;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          row = _props.row,
          rowIndex = _props.rowIndex,
          column = _props.column,
          columnIndex = _props.columnIndex,
          onStart = _props.onStart,
          editable = _props.editable,
          clickToEdit = _props.clickToEdit,
          dbclickToEdit = _props.dbclickToEdit,
          rest = _objectWithoutProperties(_props, ['row', 'rowIndex', 'column', 'columnIndex', 'onStart', 'editable', 'clickToEdit', 'dbclickToEdit']);

      var dataField = column.dataField,
          formatter = column.formatter,
          formatExtraData = column.formatExtraData;

      var attrs = this.delegate(_extends({}, rest));
      var content = column.isDummyField ? null : _utils2.default.get(row, dataField);

      if (formatter) {
        content = column.formatter(content, row, rowIndex, formatExtraData);
      }

      if (clickToEdit && editable) {
        attrs.onClick = this.createHandleEditingCell(attrs.onClick);
      } else if (dbclickToEdit && editable) {
        attrs.onDoubleClick = this.createHandleEditingCell(attrs.onDoubleClick);
      }

      return _react2.default.createElement(
        'td',
        attrs,
        typeof content === 'boolean' ? '' + content : content
      );
    }
  }]);

  return Cell;
}((0, _cellEventDelegater2.default)(_react.Component));

Cell.propTypes = {
  row: _propTypes2.default.object.isRequired,
  rowIndex: _propTypes2.default.number.isRequired,
  column: _propTypes2.default.object.isRequired,
  columnIndex: _propTypes2.default.number.isRequired
};

exports.default = Cell;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _expandCell = __webpack_require__(52);

var _expandCell2 = _interopRequireDefault(_expandCell);

var _selectionCell = __webpack_require__(53);

var _selectionCell2 = _interopRequireDefault(_selectionCell);

var _shouldUpdater2 = __webpack_require__(19);

var _shouldUpdater3 = _interopRequireDefault(_shouldUpdater2);

var _eventDelegater = __webpack_require__(18);

var _eventDelegater2 = _interopRequireDefault(_eventDelegater);

var _rowPureContent = __webpack_require__(17);

var _rowPureContent2 = _interopRequireDefault(_rowPureContent);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint class-methods-use-this: 0 */
/* eslint react/prop-types: 0 */
/* eslint no-plusplus: 0 */


var RowAggregator = function (_shouldUpdater) {
  _inherits(RowAggregator, _shouldUpdater);

  function RowAggregator(props) {
    _classCallCheck(this, RowAggregator);

    var _this = _possibleConstructorReturn(this, (RowAggregator.__proto__ || Object.getPrototypeOf(RowAggregator)).call(this, props));

    _this.clickNum = 0;
    _this.shouldUpdateRowContent = false;
    _this.createClickEventHandler = _this.createClickEventHandler.bind(_this);
    return _this;
  }

  _createClass(RowAggregator, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.selected !== nextProps.selected || this.props.expanded !== nextProps.expanded || this.props.expandable !== nextProps.expandable || this.props.selectable !== nextProps.selectable || this.props.selectRow.hideSelectColumn !== nextProps.selectRow.hideSelectColumn || this.shouldUpdatedBySelfProps(nextProps)) {
        this.shouldUpdateRowContent = this.shouldRowContentUpdate(nextProps);
        return true;
      }
      this.shouldUpdateRowContent = this.shouldRowContentUpdate(nextProps);

      return this.shouldUpdateRowContent;
    }
  }, {
    key: 'isRenderFunctionColumnInLeft',
    value: function isRenderFunctionColumnInLeft() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _const2.default.INDICATOR_POSITION_LEFT;

      return position === _const2.default.INDICATOR_POSITION_LEFT;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          row = _props.row,
          columns = _props.columns,
          keyField = _props.keyField,
          rowIndex = _props.rowIndex,
          style = _props.style,
          className = _props.className,
          attrs = _props.attrs,
          selectRow = _props.selectRow,
          expandRow = _props.expandRow,
          expanded = _props.expanded,
          expandable = _props.expandable,
          selected = _props.selected,
          selectable = _props.selectable,
          visibleColumnSize = _props.visibleColumnSize,
          tabIndexCell = _props.tabIndexCell,
          rest = _objectWithoutProperties(_props, ['row', 'columns', 'keyField', 'rowIndex', 'style', 'className', 'attrs', 'selectRow', 'expandRow', 'expanded', 'expandable', 'selected', 'selectable', 'visibleColumnSize', 'tabIndexCell']);

      var key = _utils2.default.get(row, keyField);
      var hideSelectColumn = selectRow.hideSelectColumn,
          selectColumnPosition = selectRow.selectColumnPosition,
          clickToSelect = selectRow.clickToSelect;
      var showExpandColumn = expandRow.showExpandColumn,
          expandColumnPosition = expandRow.expandColumnPosition;


      var newAttrs = this.delegate(_extends({}, attrs));
      if (clickToSelect || !!expandRow.renderer) {
        newAttrs.onClick = this.createClickEventHandler(newAttrs.onClick);
      }

      var tabIndexStart = rowIndex * visibleColumnSize + 1;

      var childrens = [_react2.default.createElement(_rowPureContent2.default, _extends({
        key: 'row',
        row: row,
        columns: columns,
        keyField: keyField,
        rowIndex: rowIndex,
        shouldUpdate: this.shouldUpdateRowContent,
        tabIndexStart: tabIndexCell ? tabIndexStart : -1
      }, rest))];

      if (!hideSelectColumn) {
        var selectCell = _react2.default.createElement(_selectionCell2.default, _extends({}, selectRow, {
          key: 'selection-cell',
          rowKey: key,
          rowIndex: rowIndex,
          selected: selected,
          disabled: !selectable,
          tabIndex: tabIndexCell ? tabIndexStart++ : -1
        }));
        if (this.isRenderFunctionColumnInLeft(selectColumnPosition)) {
          childrens.unshift(selectCell);
        } else {
          childrens.push(selectCell);
        }
      }

      if (showExpandColumn) {
        var expandCell = _react2.default.createElement(_expandCell2.default, _extends({}, expandRow, {
          key: 'expand-cell',
          rowKey: key,
          rowIndex: rowIndex,
          expanded: expanded,
          expandable: expandable,
          tabIndex: tabIndexCell ? tabIndexStart++ : -1
        }));
        if (this.isRenderFunctionColumnInLeft(expandColumnPosition)) {
          childrens.unshift(expandCell);
        } else {
          childrens.push(expandCell);
        }
      }

      return _react2.default.createElement(
        'tr',
        _extends({
          style: style,
          className: className
        }, newAttrs),
        childrens
      );
    }
  }]);

  return RowAggregator;
}((0, _shouldUpdater3.default)((0, _eventDelegater2.default)(_react2.default.Component)));

RowAggregator.propTypes = {
  attrs: _propTypes2.default.object,
  style: _propTypes2.default.object
};
RowAggregator.defaultProps = {
  attrs: {},
  style: {}
};
exports.default = RowAggregator;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 react/require-default-props: 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 jsx-a11y/no-noninteractive-element-interactions: 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
/* eslint no-nested-ternary: 0 */


var ExpandCell = function (_Component) {
  _inherits(ExpandCell, _Component);

  function ExpandCell() {
    _classCallCheck(this, ExpandCell);

    var _this = _possibleConstructorReturn(this, (ExpandCell.__proto__ || Object.getPrototypeOf(ExpandCell)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(ExpandCell, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var shouldUpdate = this.props.rowIndex !== nextProps.rowIndex || this.props.expanded !== nextProps.expanded || this.props.rowKey !== nextProps.rowKey || this.props.tabIndex !== nextProps.tabIndex;

      return shouldUpdate;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var _props = this.props,
          rowKey = _props.rowKey,
          expanded = _props.expanded,
          onRowExpand = _props.onRowExpand,
          rowIndex = _props.rowIndex;

      e.stopPropagation();
      onRowExpand(rowKey, !expanded, rowIndex, e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          expanded = _props2.expanded,
          expandable = _props2.expandable,
          expandColumnRenderer = _props2.expandColumnRenderer,
          tabIndex = _props2.tabIndex,
          rowKey = _props2.rowKey;

      var attrs = {};
      if (tabIndex !== -1) attrs.tabIndex = tabIndex;

      return _react2.default.createElement(
        'td',
        _extends({ className: 'expand-cell', onClick: this.handleClick }, attrs),
        expandColumnRenderer ? expandColumnRenderer({
          expandable: expandable,
          expanded: expanded,
          rowKey: rowKey
        }) : expandable ? expanded ? '(-)' : '(+)' : ''
      );
    }
  }]);

  return ExpandCell;
}(_react.Component);

ExpandCell.propTypes = {
  rowKey: _propTypes2.default.any,
  expanded: _propTypes2.default.bool.isRequired,
  expandable: _propTypes2.default.bool.isRequired,
  onRowExpand: _propTypes2.default.func.isRequired,
  expandColumnRenderer: _propTypes2.default.func,
  rowIndex: _propTypes2.default.number,
  tabIndex: _propTypes2.default.number
};
exports.default = ExpandCell;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _bootstrap = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 react/require-default-props: 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 jsx-a11y/no-noninteractive-element-interactions: 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var SelectionCell = function (_Component) {
  _inherits(SelectionCell, _Component);

  function SelectionCell() {
    _classCallCheck(this, SelectionCell);

    var _this = _possibleConstructorReturn(this, (SelectionCell.__proto__ || Object.getPrototypeOf(SelectionCell)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(SelectionCell, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var shouldUpdate = this.props.rowIndex !== nextProps.rowIndex || this.props.selected !== nextProps.selected || this.props.disabled !== nextProps.disabled || this.props.rowKey !== nextProps.rowKey || this.props.tabIndex !== nextProps.tabIndex || this.props.selectColumnStyle !== nextProps.selectColumnStyle;

      return shouldUpdate;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var _props = this.props,
          inputType = _props.mode,
          rowKey = _props.rowKey,
          selected = _props.selected,
          onRowSelect = _props.onRowSelect,
          disabled = _props.disabled,
          rowIndex = _props.rowIndex;

      e.stopPropagation();
      if (disabled) return;

      var checked = inputType === _const2.default.ROW_SELECT_SINGLE ? true : !selected;

      onRowSelect(rowKey, checked, rowIndex, e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          rowKey = _props2.rowKey,
          inputType = _props2.mode,
          selected = _props2.selected,
          disabled = _props2.disabled,
          tabIndex = _props2.tabIndex,
          rowIndex = _props2.rowIndex,
          selectionRenderer = _props2.selectionRenderer,
          selectColumnStyle = _props2.selectColumnStyle;


      var attrs = {};
      if (tabIndex !== -1) attrs.tabIndex = tabIndex;

      attrs.style = _utils2.default.isFunction(selectColumnStyle) ? selectColumnStyle({
        checked: selected,
        disabled: disabled,
        rowIndex: rowIndex,
        rowKey: rowKey
      }) : selectColumnStyle;

      return _react2.default.createElement(
        _bootstrap.BootstrapContext.Consumer,
        null,
        function (_ref) {
          var bootstrap4 = _ref.bootstrap4;
          return _react2.default.createElement(
            'td',
            _extends({ className: 'selection-cell', onClick: _this2.handleClick }, attrs),
            selectionRenderer ? selectionRenderer({
              mode: inputType,
              checked: selected,
              disabled: disabled,
              rowIndex: rowIndex,
              rowKey: rowKey
            }) : _react2.default.createElement('input', {
              type: inputType,
              checked: selected,
              disabled: disabled,
              className: bootstrap4 ? 'selection-input-4' : '',
              onChange: function onChange() {}
            })
          );
        }
      );
    }
  }]);

  return SelectionCell;
}(_react.Component);

SelectionCell.propTypes = {
  mode: _propTypes2.default.string.isRequired,
  rowKey: _propTypes2.default.any,
  selected: _propTypes2.default.bool,
  onRowSelect: _propTypes2.default.func,
  disabled: _propTypes2.default.bool,
  rowIndex: _propTypes2.default.number,
  tabIndex: _propTypes2.default.number,
  clickToSelect: _propTypes2.default.bool,
  selectionRenderer: _propTypes2.default.func,
  selectColumnStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func])
};
exports.default = SelectionCell;

/***/ }),
/* 54 */
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

var RowSection = function RowSection(_ref) {
  var content = _ref.content,
      colSpan = _ref.colSpan;
  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      {
        'data-toggle': 'collapse',
        colSpan: colSpan,
        className: 'react-bs-table-no-data'
      },
      content
    )
  );
};

RowSection.propTypes = {
  content: _propTypes2.default.any,
  colSpan: _propTypes2.default.number
};

RowSection.defaultProps = {
  content: null,
  colSpan: 1
};

exports.default = RowSection;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint react/prop-types: 0 */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _selectionContext = __webpack_require__(10);

var _selectionContext2 = _interopRequireDefault(_selectionContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Component) {
  var renderWithSelection = function renderWithSelection(props, selectRow) {
    var key = props.value;
    var selected = _utils2.default.contains(selectRow.selected, key);
    var selectable = !selectRow.nonSelectable || !_utils2.default.contains(selectRow.nonSelectable, key);
    var notSelectable = _utils2.default.contains(selectRow.nonSelectable, key);

    var style = props.style,
        className = props.className;


    if (selected) {
      var selectedStyle = _utils2.default.isFunction(selectRow.style) ? selectRow.style(props.row, props.rowIndex) : selectRow.style;

      var selectedClasses = _utils2.default.isFunction(selectRow.classes) ? selectRow.classes(props.row, props.rowIndex) : selectRow.classes;

      style = _extends({}, style, selectedStyle);
      className = (0, _classnames2.default)(className, selectedClasses) || undefined;

      if (selectRow.bgColor) {
        style = style || {};
        style.backgroundColor = _utils2.default.isFunction(selectRow.bgColor) ? selectRow.bgColor(props.row, props.rowIndex) : selectRow.bgColor;
      }
    }

    if (notSelectable) {
      var notSelectableStyle = _utils2.default.isFunction(selectRow.nonSelectableStyle) ? selectRow.nonSelectableStyle(props.row, props.rowIndex) : selectRow.nonSelectableStyle;

      var notSelectableClasses = _utils2.default.isFunction(selectRow.nonSelectableClasses) ? selectRow.nonSelectableClasses(props.row, props.rowIndex) : selectRow.nonSelectableClasses;

      style = _extends({}, style, notSelectableStyle);
      className = (0, _classnames2.default)(className, notSelectableClasses) || undefined;
    }

    return _react2.default.createElement(Component, _extends({}, props, {
      style: style,
      className: className,
      selectRow: selectRow,
      selected: selected,
      selectable: selectable
    }));
  };

  function withConsumer(props) {
    return _react2.default.createElement(
      _selectionContext2.default.Consumer,
      null,
      function (selectRow) {
        return renderWithSelection(props, selectRow);
      }
    );
  }

  withConsumer.displayName = 'WithSelectionRowConsumer';
  return withConsumer;
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint react/prop-types: 0 */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _expandRow = __webpack_require__(57);

var _expandRow2 = _interopRequireDefault(_expandRow);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _rowExpandContext = __webpack_require__(12);

var _rowExpandContext2 = _interopRequireDefault(_rowExpandContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Component) {
  var renderWithExpansion = function renderWithExpansion(props, expandRow) {
    var parentClassName = '';
    var className = '';
    var key = props.value;

    var expanded = _utils2.default.contains(expandRow.expanded, key);
    var isClosing = _utils2.default.contains(expandRow.isClosing, key);
    var expandable = !expandRow.nonExpandable || !_utils2.default.contains(expandRow.nonExpandable, key);
    if (expanded) {
      parentClassName = _utils2.default.isFunction(expandRow.parentClassName) ? expandRow.parentClassName(expanded, props.row, props.rowIndex) : expandRow.parentClassName || '';

      className = _utils2.default.isFunction(expandRow.className) ? expandRow.className(expanded, props.row, props.rowIndex) : expandRow.className || '';
    }

    return [_react2.default.createElement(Component, _extends({}, props, {
      key: key,
      expanded: expanded,
      expandable: expandable,
      expandRow: _extends({}, expandRow),
      className: (0, _classnames2.default)(props.className, parentClassName)
    })), expanded || isClosing ? _react2.default.createElement(
      _expandRow2.default,
      {
        key: key + '-expanding',
        colSpan: props.visibleColumnSize,
        expanded: expanded,
        onClosed: function onClosed() {
          return expandRow.onClosed(key);
        },
        className: className
      },
      expandRow.renderer(props.row, props.rowIndex)
    ) : null];
  };
  return function (props) {
    return _react2.default.createElement(
      _rowExpandContext2.default.Consumer,
      null,
      function (expandRow) {
        return renderWithExpansion(props, expandRow);
      }
    );
  };
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = __webpack_require__(58);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ExpandRow = function ExpandRow(_ref) {
  var children = _ref.children,
      expanded = _ref.expanded,
      onClosed = _ref.onClosed,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['children', 'expanded', 'onClosed', 'className']);

  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      _extends({ className: (0, _classnames2.default)('reset-expansion-style', className) }, rest),
      _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        {
          appear: true,
          'in': expanded,
          timeout: 400,
          classNames: 'row-expand-slide',
          onExited: onClosed
        },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row-expansion-style' },
            children
          )
        )
      )
    )
  );
};

ExpandRow.propTypes = {
  children: _propTypes2.default.node,
  expanded: _propTypes2.default.bool,
  onClosed: _propTypes2.default.func,
  className: _propTypes2.default.string
};

ExpandRow.defaultProps = {
  children: null,
  expanded: false,
  onClosed: null,
  className: ''
};

exports.default = ExpandRow;

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CSSTransition__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CSSTransition", function() { return __WEBPACK_IMPORTED_MODULE_0__CSSTransition__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ReplaceTransition__ = __webpack_require__(63);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceTransition", function() { return __WEBPACK_IMPORTED_MODULE_1__ReplaceTransition__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SwitchTransition__ = __webpack_require__(66);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchTransition", function() { return __WEBPACK_IMPORTED_MODULE_2__SwitchTransition__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TransitionGroup__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionGroup", function() { return __WEBPACK_IMPORTED_MODULE_3__TransitionGroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Transition__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return __WEBPACK_IMPORTED_MODULE_4__Transition__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return __WEBPACK_IMPORTED_MODULE_5__config__["a"]; });







/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_dom_helpers_addClass__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_dom_helpers_removeClass__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Transition__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_PropTypes__ = __webpack_require__(23);










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(__WEBPACK_IMPORTED_MODULE_4_dom_helpers_addClass__["a" /* default */])(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(__WEBPACK_IMPORTED_MODULE_5_dom_helpers_removeClass__["a" /* default */])(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["classNames"]);

    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Transition__["d" /* default */], Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  false ? _extends({}, Transition.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes.func
}) : {};
/* harmony default export */ __webpack_exports__["a"] = (CSSTransition);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addClass;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hasClass__ = __webpack_require__(61);

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!Object(__WEBPACK_IMPORTED_MODULE_0__hasClass__["a" /* default */])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = hasClass;
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = removeClass;
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    ;
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TransitionGroup__ = __webpack_require__(24);






/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition = /*#__PURE__*/function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;
    var child = __WEBPACK_IMPORTED_MODULE_3_react___default.a.Children.toArray(children)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);

    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? undefined : __WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["children", "in"]);

    var _React$Children$toArr = __WEBPACK_IMPORTED_MODULE_3_react___default.a.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__TransitionGroup__["a" /* default */], props, inProp ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : __WEBPACK_IMPORTED_MODULE_3_react___default.a.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

ReplaceTransition.propTypes =  false ? {
  in: PropTypes.bool.isRequired,
  children: function children(props, propName) {
    if (React.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : {};
/* harmony default export */ __webpack_exports__["a"] = (ReplaceTransition);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _assertThisInitialized;
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getChildMapping;
/* unused harmony export mergeChildMappings */
/* harmony export (immutable) */ __webpack_exports__["b"] = getInitialChildMapping;
/* harmony export (immutable) */ __webpack_exports__["c"] = getNextChildMapping;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && Object(__WEBPACK_IMPORTED_MODULE_0_react__["isValidElement"])(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) __WEBPACK_IMPORTED_MODULE_0_react__["Children"].map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!Object(__WEBPACK_IMPORTED_MODULE_0_react__["isValidElement"])(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = Object(__WEBPACK_IMPORTED_MODULE_0_react__["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(child, {
        in: false
      });
    } else if (hasNext && hasPrev && Object(__WEBPACK_IMPORTED_MODULE_0_react__["isValidElement"])(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export modes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Transition__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TransitionGroupContext__ = __webpack_require__(14);


var _leaveRenders, _enterRenders;






function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (__WEBPACK_IMPORTED_MODULE_1_react___default.a.isValidElement(oldChildren) && __WEBPACK_IMPORTED_MODULE_1_react___default.a.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }

  return true;
}
/**
 * Enum of modes for SwitchTransition component
 * @enum { string }
 */


var modes = {
  out: 'out-in',
  in: 'in-out'
};

var callHook = function callHook(element, name, cb) {
  return function () {
    var _element$props;

    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};

var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
  var current = _ref.current,
      changeState = _ref.changeState;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(__WEBPACK_IMPORTED_MODULE_3__Transition__["b" /* ENTERING */], null);
    })
  });
}, _leaveRenders[modes.in] = function (_ref2) {
  var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
  return [current, __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(__WEBPACK_IMPORTED_MODULE_3__Transition__["b" /* ENTERING */]);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
  var children = _ref3.children,
      changeState = _ref3.changeState;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(__WEBPACK_IMPORTED_MODULE_3__Transition__["a" /* ENTERED */], __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(children, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function (_ref4) {
  var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
  return [__WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(__WEBPACK_IMPORTED_MODULE_3__Transition__["a" /* ENTERED */], __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(children, {
        in: true
      }));
    })
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(children, {
    in: true
  })];
}, _enterRenders);
/**
 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
 * You can use it when you want to control the render between state transitions.
 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
 *
 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child.
 *
 * **Note**: If you want the animation to happen simultaneously
 * (that is, to have the old child removed and a new child inserted **at the same time**),
 * you should use
 * [`TransitionGroup`](https://reactcommunity.org/react-transition-group/transition-group)
 * instead.
 *
 * ```jsx
 * function App() {
 *  const [state, setState] = useState(false);
 *  return (
 *    <SwitchTransition>
 *      <CSSTransition
 *        key={state ? "Goodbye, world!" : "Hello, world!"}
 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
 *        classNames='fade'
 *      >
 *        <button onClick={() => setState(state => !state)}>
 *          {state ? "Goodbye, world!" : "Hello, world!"}
 *        </button>
 *      </CSSTransition>
 *    </SwitchTransition>
 *  );
 * }
 * ```
 *
 * ```css
 * .fade-enter{
 *    opacity: 0;
 * }
 * .fade-exit{
 *    opacity: 1;
 * }
 * .fade-enter-active{
 *    opacity: 1;
 * }
 * .fade-exit-active{
 *    opacity: 0;
 * }
 * .fade-enter-active,
 * .fade-exit-active{
 *    transition: opacity 500ms;
 * }
 * ```
 */

var SwitchTransition = /*#__PURE__*/function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: __WEBPACK_IMPORTED_MODULE_3__Transition__["a" /* ENTERED */],
      current: null
    };
    _this.appeared = false;

    _this.changeState = function (status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }

      _this.setState({
        status: status,
        current: current
      });
    };

    return _this;
  }

  var _proto = SwitchTransition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }

    if (state.status === __WEBPACK_IMPORTED_MODULE_3__Transition__["b" /* ENTERING */] && props.mode === modes.in) {
      return {
        status: __WEBPACK_IMPORTED_MODULE_3__Transition__["b" /* ENTERING */]
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: __WEBPACK_IMPORTED_MODULE_3__Transition__["c" /* EXITING */]
      };
    }

    return {
      current: __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(props.children, {
        in: true
      })
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        mode = _this$props.mode,
        _this$state = this.state,
        status = _this$state.status,
        current = _this$state.current;
    var data = {
      children: children,
      current: current,
      changeState: this.changeState,
      status: status
    };
    var component;

    switch (status) {
      case __WEBPACK_IMPORTED_MODULE_3__Transition__["b" /* ENTERING */]:
        component = enterRenders[mode](data);
        break;

      case __WEBPACK_IMPORTED_MODULE_3__Transition__["c" /* EXITING */]:
        component = leaveRenders[mode](data);
        break;

      case __WEBPACK_IMPORTED_MODULE_3__Transition__["a" /* ENTERED */]:
        component = current;
    }

    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__TransitionGroupContext__["a" /* default */].Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };

  return SwitchTransition;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

SwitchTransition.propTypes =  false ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out`: New element transitions in first, then when complete, the current element transitions out.
   *
   * @type {'out-in'|'in-out'}
   */
  mode: PropTypes.oneOf([modes.in, modes.out]),

  /**
   * Any `Transition` or `CSSTransition` component.
   */
  children: PropTypes.oneOfType([PropTypes.element.isRequired])
} : {};
SwitchTransition.defaultProps = {
  mode: modes.out
};
/* harmony default export */ __webpack_exports__["a"] = (SwitchTransition);

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rowTemplate = __webpack_require__(16);

var _rowTemplate2 = _interopRequireDefault(_rowTemplate);

var _footerCell = __webpack_require__(68);

var _footerCell2 = _interopRequireDefault(_footerCell);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {
  var data = props.data,
      className = props.className,
      columns = props.columns,
      selectRow = props.selectRow,
      expandRow = props.expandRow;


  function renderContent() {
    return columns.map(function (column, i) {
      if (column.footer === undefined || column.footer === null) {
        return false;
      }

      var columnData = _utils2.default.pluck(data, column.dataField);

      return _react2.default.createElement(_footerCell2.default, {
        index: i,
        key: column.dataField,
        column: column,
        columnData: columnData
      });
    });
  }

  return _react2.default.createElement(
    'tfoot',
    null,
    _react2.default.createElement(_rowTemplate2.default, {
      renderContent: renderContent,
      selectRow: selectRow,
      expandRow: expandRow,
      className: className,
      cellEl: 'th'
    })
  );
}; /* eslint react/require-default-props: 0 */


Footer.propTypes = {
  data: _propTypes2.default.array,
  className: _propTypes2.default.string,
  columns: _propTypes2.default.array,
  selectRow: _propTypes2.default.object,
  expandRow: _propTypes2.default.object
};

exports.default = Footer;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _cellEventDelegater = __webpack_require__(9);

var _cellEventDelegater2 = _interopRequireDefault(_cellEventDelegater);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */


var FooterCell = function (_eventDelegater) {
  _inherits(FooterCell, _eventDelegater);

  function FooterCell() {
    _classCallCheck(this, FooterCell);

    return _possibleConstructorReturn(this, (FooterCell.__proto__ || Object.getPrototypeOf(FooterCell)).apply(this, arguments));
  }

  _createClass(FooterCell, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          index = _props.index,
          column = _props.column,
          columnData = _props.columnData;
      var footer = column.footer,
          footerTitle = column.footerTitle,
          footerAlign = column.footerAlign,
          footerFormatter = column.footerFormatter,
          footerEvents = column.footerEvents,
          footerClasses = column.footerClasses,
          footerStyle = column.footerStyle,
          footerAttrs = column.footerAttrs;


      var delegateEvents = this.delegate(footerEvents);
      var cellAttrs = _extends({}, _utils2.default.isFunction(footerAttrs) ? footerAttrs(column, index) : footerAttrs, delegateEvents);

      var text = '';
      if (_utils2.default.isString(footer)) {
        text = footer;
      } else if (_utils2.default.isFunction(footer)) {
        text = footer(columnData, column, index);
      }

      var cellStyle = {};
      var cellClasses = _utils2.default.isFunction(footerClasses) ? footerClasses(column, index) : footerClasses;

      if (footerStyle) {
        cellStyle = _utils2.default.isFunction(footerStyle) ? footerStyle(column, index) : footerStyle;
        cellStyle = cellStyle ? _extends({}, cellStyle) : cellStyle;
      }

      if (footerTitle) {
        cellAttrs.title = _utils2.default.isFunction(footerTitle) ? footerTitle(column, index) : text;
      }

      if (footerAlign) {
        cellStyle.textAlign = _utils2.default.isFunction(footerAlign) ? footerAlign(column, index) : footerAlign;
      }

      if (cellClasses) cellAttrs.className = (0, _classnames2.default)(cellAttrs.className, cellClasses);
      if (!_utils2.default.isEmptyObject(cellStyle)) cellAttrs.style = cellStyle;

      var children = footerFormatter ? footerFormatter(column, index, { text: text }) : text;

      return _react2.default.createElement('th', cellAttrs, children);
    }
  }]);

  return FooterCell;
}((0, _cellEventDelegater2.default)(_react2.default.Component));

FooterCell.propTypes = {
  columnData: _propTypes2.default.array,
  index: _propTypes2.default.number,
  column: _propTypes2.default.object
};

exports.default = FooterCell;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _columnResolver = __webpack_require__(70);

var _columnResolver2 = _interopRequireDefault(_columnResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ExtendBase) {
  return function (_ColumnResolver) {
    _inherits(TableResolver, _ColumnResolver);

    function TableResolver() {
      _classCallCheck(this, TableResolver);

      return _possibleConstructorReturn(this, (TableResolver.__proto__ || Object.getPrototypeOf(TableResolver)).apply(this, arguments));
    }

    _createClass(TableResolver, [{
      key: 'validateProps',
      value: function validateProps() {
        var keyField = this.props.keyField;

        if (!keyField) {
          throw new Error('Please specify a field as key via keyField');
        }
        if (this.visibleColumnSize(false) <= 0) {
          throw new Error('No visible columns detected');
        }
      }
    }, {
      key: 'isEmpty',
      value: function isEmpty() {
        return this.props.data.length === 0;
      }
    }, {
      key: 'visibleRows',
      value: function visibleRows() {
        var _props = this.props,
            data = _props.data,
            hiddenRows = _props.hiddenRows,
            keyField = _props.keyField;

        if (!hiddenRows || hiddenRows.length === 0) return data;
        return data.filter(function (row) {
          var key = _utils2.default.get(row, keyField);
          return !_utils2.default.contains(hiddenRows, key);
        });
      }
    }]);

    return TableResolver;
  }((0, _columnResolver2.default)(ExtendBase));
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(ColumnResolver, _ExtendBase);

    function ColumnResolver() {
      _classCallCheck(this, ColumnResolver);

      return _possibleConstructorReturn(this, (ColumnResolver.__proto__ || Object.getPrototypeOf(ColumnResolver)).apply(this, arguments));
    }

    _createClass(ColumnResolver, [{
      key: "visibleColumnSize",
      value: function visibleColumnSize() {
        var includeSelectColumn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        var columnLen = void 0;
        if (this.props.columnToggle && this.props.columnToggle.toggles) {
          var columns = this.props.columnToggle.toggles;
          columnLen = Object.keys(columns).filter(function (name) {
            return columns[name];
          }).length;
        } else {
          columnLen = this.props.columns.filter(function (c) {
            return !c.hidden;
          }).length;
        }
        if (!includeSelectColumn) return columnLen;
        if (this.props.selectRow && !this.props.selectRow.hideSelectColumn) {
          columnLen += 1;
        }
        if (this.props.expandRow && this.props.expandRow.showExpandColumn) {
          columnLen += 1;
        }
        return columnLen;
      }
    }]);

    return ColumnResolver;
  }(ExtendBase);
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _events = __webpack_require__(25);

var _events2 = _interopRequireDefault(_events);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _dataContext = __webpack_require__(72);

var _dataContext2 = _interopRequireDefault(_dataContext);

var _columnContext = __webpack_require__(73);

var _columnContext2 = _interopRequireDefault(_columnContext);

var _sortContext = __webpack_require__(74);

var _sortContext2 = _interopRequireDefault(_sortContext);

var _selectionContext = __webpack_require__(10);

var _selectionContext2 = _interopRequireDefault(_selectionContext);

var _rowExpandContext = __webpack_require__(12);

var _rowExpandContext2 = _interopRequireDefault(_rowExpandContext);

var _remoteResolver2 = __webpack_require__(75);

var _remoteResolver3 = _interopRequireDefault(_remoteResolver2);

var _bootstrap = __webpack_require__(5);

var _operators = __webpack_require__(11);

var _operators2 = _interopRequireDefault(_operators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint camelcase: 0 */
/* eslint no-return-assign: 0 */
/* eslint no-param-reassign: 0 */
/* eslint class-methods-use-this: 0 */


var withContext = function withContext(Base) {
  return function (_remoteResolver) {
    _inherits(BootstrapTableContainer, _remoteResolver);

    function BootstrapTableContainer(props) {
      _classCallCheck(this, BootstrapTableContainer);

      var _this = _possibleConstructorReturn(this, (BootstrapTableContainer.__proto__ || Object.getPrototypeOf(BootstrapTableContainer)).call(this, props));

      _this.DataContext = (0, _dataContext2.default)();

      if (props.registerExposedAPI) {
        var exposedAPIEmitter = new _events2.default();
        exposedAPIEmitter.on('get.table.data', function (payload) {
          return payload.result = _this.table.getData();
        });
        exposedAPIEmitter.on('get.selected.rows', function (payload) {
          return payload.result = _this.selectionContext.getSelected();
        });
        exposedAPIEmitter.on('get.filtered.rows', function (payload) {
          if (_this.searchContext) {
            payload.result = _this.searchContext.getSearched();
          } else if (_this.filterContext) {
            payload.result = _this.filterContext.getFiltered();
          } else {
            payload.result = _this.table.getData();
          }
        });
        props.registerExposedAPI(exposedAPIEmitter);
      }

      if (props.columns.filter(function (col) {
        return col.sort;
      }).length > 0) {
        _this.SortContext = (0, _sortContext2.default)(_operators2.default, _this.isRemoteSort, _this.handleRemoteSortChange);
      }

      if (props.columnToggle || props.columns.filter(function (col) {
        return col.hidden;
      }).length > 0) {
        _this.ColumnManagementContext = (0, _columnContext2.default)();
      }

      if (props.selectRow) {
        _this.SelectionContext = _selectionContext2.default;
      }

      if (props.expandRow) {
        _this.RowExpandContext = _rowExpandContext2.default;
      }

      if (props.cellEdit && props.cellEdit.createContext) {
        _this.CellEditContext = props.cellEdit.createContext(_utils2.default, _operators2.default, _this.isRemoteCellEdit, _this.handleRemoteCellChange);
      }

      if (props.filter) {
        _this.FilterContext = props.filter.createContext(_utils2.default, _this.isRemoteFiltering, _this.handleRemoteFilterChange);
      }

      if (props.pagination) {
        _this.PaginationContext = props.pagination.createContext();
      }

      if (props.search && props.search.searchContext) {
        _this.SearchContext = props.search.searchContext(_utils2.default, _this.isRemoteSearch, _this.handleRemoteSearchChange);
      }

      if (props.setDependencyModules) {
        props.setDependencyModules(_utils2.default);
      }

      if (props.setPaginationRemoteEmitter) {
        props.setPaginationRemoteEmitter(_this.remoteEmitter);
      }
      return _this;
    }

    _createClass(BootstrapTableContainer, [{
      key: 'UNSAFE_componentWillReceiveProps',
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.columns.filter(function (col) {
          return col.sort;
        }).length <= 0) {
          this.SortContext = null;
        } else if (!this.SortContext) {
          this.SortContext = (0, _sortContext2.default)(_operators2.default, this.isRemoteSort, this.handleRemoteSortChange);
        }
        if (!nextProps.pagination && this.props.pagination) {
          this.PaginationContext = null;
        }
        if (nextProps.pagination && !this.props.pagination) {
          this.PaginationContext = nextProps.pagination.createContext(this.isRemotePagination, this.handleRemotePageChange);
        }
        if (!nextProps.cellEdit && this.props.cellEdit) {
          this.CellEditContext = null;
        }
        if (nextProps.cellEdit && !this.props.cellEdit) {
          this.CellEditContext = nextProps.cellEdit.createContext(_utils2.default, _operators2.default, this.isRemoteCellEdit, this.handleRemoteCellChange);
        }
      }
    }, {
      key: 'renderBase',
      value: function renderBase() {
        var _this2 = this;

        return function (rootProps, filterProps, searchProps, sortProps, paginationProps, columnToggleProps) {
          return _react2.default.createElement(Base, _extends({
            ref: function ref(n) {
              return _this2.table = n;
            }
          }, _this2.props, sortProps, filterProps, searchProps, paginationProps, columnToggleProps, {
            data: rootProps.getData(filterProps, searchProps, sortProps, paginationProps)
          }));
        };
      }
    }, {
      key: 'renderWithColumnManagementCtx',
      value: function renderWithColumnManagementCtx(base, baseProps) {
        var _this3 = this;

        return function (rootProps, filterProps, searchProps, sortProps, paginationProps) {
          return _react2.default.createElement(
            _this3.ColumnManagementContext.Provider,
            _extends({}, baseProps, {
              toggles: _this3.props.columnToggle ? _this3.props.columnToggle.toggles : null
            }),
            _react2.default.createElement(
              _this3.ColumnManagementContext.Consumer,
              null,
              function (columnToggleProps) {
                return base(rootProps, filterProps, searchProps, sortProps, paginationProps, columnToggleProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithSelectionCtx',
      value: function renderWithSelectionCtx(base, baseProps) {
        var _this4 = this;

        return function (rootProps, filterProps, searchProps, sortProps, paginationProps) {
          return _react2.default.createElement(
            _this4.SelectionContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this4.selectionContext = n;
              },
              selectRow: _this4.props.selectRow,
              data: rootProps.getData(filterProps, searchProps, sortProps, paginationProps)
            }),
            base(rootProps, filterProps, searchProps, sortProps, paginationProps)
          );
        };
      }
    }, {
      key: 'renderWithRowExpandCtx',
      value: function renderWithRowExpandCtx(base, baseProps) {
        var _this5 = this;

        return function (rootProps, filterProps, searchProps, sortProps, paginationProps) {
          return _react2.default.createElement(
            _this5.RowExpandContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this5.rowExpandContext = n;
              },
              expandRow: _this5.props.expandRow,
              data: rootProps.getData(filterProps, searchProps, sortProps, paginationProps)
            }),
            base(rootProps, filterProps, searchProps, sortProps, paginationProps)
          );
        };
      }
    }, {
      key: 'renderWithPaginationCtx',
      value: function renderWithPaginationCtx(base) {
        var _this6 = this;

        return function (rootProps, filterProps, searchProps, sortProps) {
          return _react2.default.createElement(
            _this6.PaginationContext.Provider,
            {
              ref: function ref(n) {
                return _this6.paginationContext = n;
              },
              pagination: _this6.props.pagination,
              data: rootProps.getData(filterProps, searchProps, sortProps),
              bootstrap4: _this6.props.bootstrap4,
              isRemotePagination: _this6.isRemotePagination,
              remoteEmitter: _this6.remoteEmitter,
              onDataSizeChange: _this6.props.onDataSizeChange,
              tableId: _this6.props.id
            },
            _react2.default.createElement(
              _this6.PaginationContext.Consumer,
              null,
              function (paginationProps) {
                return base(rootProps, filterProps, searchProps, sortProps, paginationProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithSortCtx',
      value: function renderWithSortCtx(base, baseProps) {
        var _this7 = this;

        return function (rootProps, filterProps, searchProps) {
          return _react2.default.createElement(
            _this7.SortContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this7.sortContext = n;
              },
              defaultSorted: _this7.props.defaultSorted,
              defaultSortDirection: _this7.props.defaultSortDirection,
              sort: _this7.props.sort,
              data: rootProps.getData(filterProps, searchProps)
            }),
            _react2.default.createElement(
              _this7.SortContext.Consumer,
              null,
              function (sortProps) {
                return base(rootProps, filterProps, searchProps, sortProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithSearchCtx',
      value: function renderWithSearchCtx(base, baseProps) {
        var _this8 = this;

        return function (rootProps, filterProps) {
          return _react2.default.createElement(
            _this8.SearchContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this8.searchContext = n;
              },
              data: rootProps.getData(filterProps),
              searchText: _this8.props.search.searchText,
              dataChangeListener: _this8.props.dataChangeListener
            }),
            _react2.default.createElement(
              _this8.SearchContext.Consumer,
              null,
              function (searchProps) {
                return base(rootProps, filterProps, searchProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithFilterCtx',
      value: function renderWithFilterCtx(base, baseProps) {
        var _this9 = this;

        return function (rootProps) {
          return _react2.default.createElement(
            _this9.FilterContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this9.filterContext = n;
              },
              data: rootProps.getData(),
              filter: _this9.props.filter.options || {},
              dataChangeListener: _this9.props.dataChangeListener
            }),
            _react2.default.createElement(
              _this9.FilterContext.Consumer,
              null,
              function (filterProps) {
                return base(rootProps, filterProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithCellEditCtx',
      value: function renderWithCellEditCtx(base, baseProps) {
        var _this10 = this;

        return function (rootProps) {
          return _react2.default.createElement(
            _this10.CellEditContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this10.cellEditContext = n;
              },
              selectRow: _this10.props.selectRow,
              cellEdit: _this10.props.cellEdit,
              data: rootProps.getData()
            }),
            base(rootProps)
          );
        };
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            keyField = _props.keyField,
            columns = _props.columns,
            bootstrap4 = _props.bootstrap4;

        var baseProps = { keyField: keyField, columns: columns };

        var base = this.renderBase();

        if (this.ColumnManagementContext) {
          base = this.renderWithColumnManagementCtx(base, baseProps);
        }

        if (this.SelectionContext) {
          base = this.renderWithSelectionCtx(base, baseProps);
        }

        if (this.RowExpandContext) {
          base = this.renderWithRowExpandCtx(base, baseProps);
        }

        if (this.PaginationContext) {
          base = this.renderWithPaginationCtx(base, baseProps);
        }

        if (this.SortContext) {
          base = this.renderWithSortCtx(base, baseProps);
        }

        if (this.SearchContext) {
          base = this.renderWithSearchCtx(base, baseProps);
        }

        if (this.FilterContext) {
          base = this.renderWithFilterCtx(base, baseProps);
        }

        if (this.CellEditContext) {
          base = this.renderWithCellEditCtx(base, baseProps);
        }

        return _react2.default.createElement(
          _bootstrap.BootstrapContext.Provider,
          { value: { bootstrap4: bootstrap4 } },
          _react2.default.createElement(
            this.DataContext.Provider,
            _extends({}, baseProps, {
              data: this.props.data
            }),
            _react2.default.createElement(
              this.DataContext.Consumer,
              null,
              base
            )
          )
        );
      }
    }]);

    return BootstrapTableContainer;
  }((0, _remoteResolver3.default)(_react.Component));
};

exports.default = withContext;

/***/ }),
/* 72 */
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint camelcase: 0 */


exports.default = function () {
  var DataContext = _react2.default.createContext();

  var DataProvider = function (_Component) {
    _inherits(DataProvider, _Component);

    function DataProvider() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, DataProvider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DataProvider.__proto__ || Object.getPrototypeOf(DataProvider)).call.apply(_ref, [this].concat(args))), _this), _this.state = { data: _this.props.data }, _this.getData = function (filterProps, searchProps, sortProps, paginationProps) {
        if (paginationProps) return paginationProps.data;else if (sortProps) return sortProps.data;else if (searchProps) return searchProps.data;else if (filterProps) return filterProps.data;
        return _this.props.data;
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DataProvider, [{
      key: 'UNSAFE_componentWillReceiveProps',
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState(function () {
          return { data: nextProps.data };
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          DataContext.Provider,
          {
            value: {
              data: this.state.data,
              getData: this.getData
            }
          },
          this.props.children
        );
      }
    }]);

    return DataProvider;
  }(_react.Component);

  DataProvider.propTypes = {
    data: _propTypes2.default.array.isRequired,
    children: _propTypes2.default.node.isRequired
  };

  return {
    Provider: DataProvider,
    Consumer: DataContext.Consumer
  };
};

/***/ }),
/* 73 */
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
/* eslint react/prefer-stateless-function: 0 */


exports.default = function () {
  var ColumnManagementContext = _react2.default.createContext();

  var ColumnManagementProvider = function (_React$Component) {
    _inherits(ColumnManagementProvider, _React$Component);

    function ColumnManagementProvider() {
      _classCallCheck(this, ColumnManagementProvider);

      return _possibleConstructorReturn(this, (ColumnManagementProvider.__proto__ || Object.getPrototypeOf(ColumnManagementProvider)).apply(this, arguments));
    }

    _createClass(ColumnManagementProvider, [{
      key: 'render',
      value: function render() {
        var toggleColumn = void 0;
        var _props = this.props,
            columns = _props.columns,
            toggles = _props.toggles;

        if (toggles) {
          toggleColumn = columns.filter(function (column) {
            return toggles[column.dataField];
          });
        } else {
          toggleColumn = columns.filter(function (column) {
            return !column.hidden;
          });
        }
        return _react2.default.createElement(
          ColumnManagementContext.Provider,
          { value: { columns: toggleColumn } },
          this.props.children
        );
      }
    }]);

    return ColumnManagementProvider;
  }(_react2.default.Component);

  ColumnManagementProvider.propTypes = {
    columns: _propTypes2.default.array.isRequired,
    toggles: _propTypes2.default.object
  };
  ColumnManagementProvider.defaultProps = {
    toggles: null
  };


  return {
    Provider: ColumnManagementProvider,
    Consumer: ColumnManagementContext.Consumer
  };
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint camelcase: 0 */
/* eslint react/require-default-props: 0 */


exports.default = function (dataOperator, isRemoteSort, handleSortChange) {
  var SortContext = _react2.default.createContext();

  var SortProvider = function (_React$Component) {
    _inherits(SortProvider, _React$Component);

    function SortProvider(props) {
      _classCallCheck(this, SortProvider);

      var _this = _possibleConstructorReturn(this, (SortProvider.__proto__ || Object.getPrototypeOf(SortProvider)).call(this, props));

      _initialiseProps.call(_this);

      var sortOrder = void 0;
      var sortColumn = void 0;
      var defaultSorted = props.defaultSorted,
          defaultSortDirection = props.defaultSortDirection,
          sort = props.sort;


      if (defaultSorted && defaultSorted.length > 0) {
        sortOrder = defaultSorted[0].order || defaultSortDirection;
        sortColumn = _this.initSort(defaultSorted[0].dataField, sortOrder);
      } else if (sort && sort.dataField && sort.order) {
        sortOrder = sort.order;
        sortColumn = _this.initSort(sort.dataField, sortOrder);
      }
      _this.state = { sortOrder: sortOrder, sortColumn: sortColumn };
      return _this;
    }

    _createClass(SortProvider, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _state = this.state,
            sortOrder = _state.sortOrder,
            sortColumn = _state.sortColumn;

        if (isRemoteSort() && sortOrder && sortColumn) {
          handleSortChange(sortColumn.dataField, sortOrder);
        }
      }
    }, {
      key: 'UNSAFE_componentWillReceiveProps',
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        var sort = nextProps.sort,
            columns = nextProps.columns;

        if (sort && sort.dataField && sort.order) {
          this.setState({
            sortOrder: sort.order,
            sortColumn: columns.find(function (col) {
              return col.dataField === sort.dataField;
            })
          });
        }
      }
    }, {
      key: 'initSort',
      value: function initSort(sortField, sortOrder) {
        var sortColumn = void 0;
        var columns = this.props.columns;

        var sortColumns = columns.filter(function (col) {
          return col.dataField === sortField;
        });
        if (sortColumns.length > 0) {
          sortColumn = sortColumns[0];

          if (sortColumn.onSort) {
            sortColumn.onSort(sortField, sortOrder);
          }
        }
        return sortColumn;
      }
    }, {
      key: 'render',
      value: function render() {
        var data = this.props.data;
        var sort = this.props.sort;
        var _state2 = this.state,
            sortOrder = _state2.sortOrder,
            sortColumn = _state2.sortColumn;

        if (!isRemoteSort() && sortColumn) {
          var sortFunc = sortColumn.sortFunc ? sortColumn.sortFunc : sort && sort.sortFunc;
          data = dataOperator.sort(data, sortOrder, _extends({}, sortColumn, { sortFunc: sortFunc }));
        }

        return _react2.default.createElement(
          SortContext.Provider,
          {
            value: {
              data: data,
              sortOrder: sortOrder,
              onSort: this.handleSort,
              sortField: sortColumn ? sortColumn.dataField : null
            }
          },
          this.props.children
        );
      }
    }]);

    return SortProvider;
  }(_react2.default.Component);

  SortProvider.propTypes = {
    data: _propTypes2.default.array.isRequired,
    columns: _propTypes2.default.array.isRequired,
    children: _propTypes2.default.node.isRequired,
    defaultSorted: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      dataField: _propTypes2.default.string.isRequired,
      order: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC]).isRequired
    })),
    sort: _propTypes2.default.shape({
      dataField: _propTypes2.default.string,
      order: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC]),
      sortFunc: _propTypes2.default.func
    }),
    defaultSortDirection: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC])
  };

  var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.handleSort = function (column) {
      var sortOrder = dataOperator.nextOrder(column, _this2.state, _this2.props.defaultSortDirection);

      if (column.onSort) {
        column.onSort(column.dataField, sortOrder);
      }

      if (isRemoteSort()) {
        handleSortChange(column.dataField, sortOrder);
      }
      _this2.setState(function () {
        return {
          sortOrder: sortOrder,
          sortColumn: column
        };
      });
    };
  };

  return {
    Provider: SortProvider,
    Consumer: SortContext.Consumer
  };
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _events = __webpack_require__(25);

var _events2 = _interopRequireDefault(_events);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(RemoteResolver, _ExtendBase);

    function RemoteResolver(props) {
      _classCallCheck(this, RemoteResolver);

      var _this = _possibleConstructorReturn(this, (RemoteResolver.__proto__ || Object.getPrototypeOf(RemoteResolver)).call(this, props));

      _this.getNewestState = function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var sortOrder = void 0;
        var sortField = void 0;
        var page = void 0;
        var sizePerPage = void 0;
        var searchText = void 0;
        var filters = {};

        if (_this.sortContext) {
          sortOrder = _this.sortContext.state.sortOrder;
          sortField = _this.sortContext.state.sortColumn ? _this.sortContext.state.sortColumn.dataField : null;
        }

        if (_this.filterContext) {
          filters = _this.filterContext.currFilters;
        }

        if (_this.paginationContext) {
          page = _this.paginationContext.currPage;
          sizePerPage = _this.paginationContext.currSizePerPage;
        }

        if (_this.searchContext) {
          searchText = _this.props.search.searchText;
        }

        return _extends({
          sortOrder: sortOrder,
          sortField: sortField,
          filters: filters,
          page: page,
          sizePerPage: sizePerPage,
          searchText: searchText
        }, state, {
          data: _this.props.data
        });
      };

      _this.isRemoteSearch = function () {
        var remote = _this.props.remote;

        return remote === true || _utils2.default.isObject(remote) && remote.search || _this.isRemotePagination();
      };

      _this.isRemotePagination = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var remote = _this.props.remote;

        e.result = remote === true || _utils2.default.isObject(remote) && remote.pagination;
        return e.result;
      };

      _this.isRemoteFiltering = function () {
        var remote = _this.props.remote;

        return remote === true || _utils2.default.isObject(remote) && remote.filter || _this.isRemotePagination();
      };

      _this.isRemoteSort = function () {
        var remote = _this.props.remote;

        return remote === true || _utils2.default.isObject(remote) && remote.sort || _this.isRemotePagination();
      };

      _this.isRemoteCellEdit = function () {
        var remote = _this.props.remote;

        return remote === true || _utils2.default.isObject(remote) && remote.cellEdit;
      };

      _this.handleRemotePageChange = function (page, sizePerPage) {
        _this.props.onTableChange('pagination', _this.getNewestState({ page: page, sizePerPage: sizePerPage }));
      };

      _this.handleRemoteFilterChange = function (filters) {
        var newState = { filters: filters };
        if (_this.isRemotePagination()) {
          var options = _this.props.pagination.options || {};
          newState.page = _utils2.default.isDefined(options.pageStartIndex) ? options.pageStartIndex : 1;
        }
        _this.props.onTableChange('filter', _this.getNewestState(newState));
      };

      _this.handleRemoteSortChange = function (sortField, sortOrder) {
        _this.props.onTableChange('sort', _this.getNewestState({ sortField: sortField, sortOrder: sortOrder }));
      };

      _this.handleRemoteCellChange = function (rowId, dataField, newValue) {
        var cellEdit = { rowId: rowId, dataField: dataField, newValue: newValue };
        _this.props.onTableChange('cellEdit', _this.getNewestState({ cellEdit: cellEdit }));
      };

      _this.handleRemoteSearchChange = function (searchText) {
        _this.props.onTableChange('search', _this.getNewestState({ searchText: searchText }));
      };

      _this.remoteEmitter = new _events2.default();
      _this.remoteEmitter.on('paginationChange', _this.handleRemotePageChange);
      _this.remoteEmitter.on('isRemotePagination', _this.isRemotePagination);
      return _this;
    }

    return RemoteResolver;
  }(ExtendBase);
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiZjI2MzkxMjU1MThjMDUyMmU1OCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnN0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29udGV4dHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvcm93cy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NlbGwtZXZlbnQtZGVsZWdhdGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL3NlbGVjdGlvbi1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL29wZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9yb3ctZXhwYW5kLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vVHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9UcmFuc2l0aW9uR3JvdXBDb250ZXh0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3cvcm93LXRlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy9yb3ctcHVyZS1jb250ZW50LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy9ldmVudC1kZWxlZ2F0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93L3Nob3VsZC11cGRhdGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0RE9NXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiYW1kXCI6XCJyZWFjdC1kb21cIn0iLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vY29uZmlnLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL3V0aWxzL1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9UcmFuc2l0aW9uR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9ib290c3RyYXAtdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2hlYWRlci1jZWxsLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3NvcnQvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3NvcnQvY2FyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS91bmRlcnNjb3JlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctc2VsZWN0aW9uL3NlbGVjdGlvbi1oZWFkZXItY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1oZWFkZXItY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctc2VsZWN0aW9uL3NlbGVjdGlvbi1oZWFkZXItY2VsbC1jb25zdW1lci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9leHBhbmQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvbXV0YXRlLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL3NvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1oZWFkZXItY2VsbC1jb25zdW1lci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9maWx0ZXJzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2ZpbHRlcnMtY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jYXB0aW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93L3NpbXBsZS1yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3cvYWdncmVnYXRlLXJvdy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1jZWxsLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1zZWxlY3Rpb24vc2VsZWN0aW9uLWNlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93L3Jvdy1zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1zZWxlY3Rpb24vcm93LWNvbnN1bWVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1leHBhbmQvcm93LWNvbnN1bWVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1leHBhbmQvZXhwYW5kLXJvdy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9DU1NUcmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9hZGRDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vaGFzQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL3JlbW92ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL1JlcGxhY2VUcmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS91dGlscy9DaGlsZE1hcHBpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vU3dpdGNoVHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvZm9vdGVyLWNlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcHJvcHMtcmVzb2x2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcHJvcHMtcmVzb2x2ZXIvY29sdW1uLXJlc29sdmVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL2RhdGEtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9jb2x1bW4tY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9zb3J0LWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcHJvcHMtcmVzb2x2ZXIvcmVtb3RlLXJlc29sdmVyLmpzIl0sIm5hbWVzIjpbInNwbGl0TmVzdGVkIiwic3RyIiwiam9pbiIsInJlcGxhY2UiLCJzcGxpdCIsImNvbnRhaW5zIiwibGlzdCIsInZhbHVlIiwiXyIsImluY2x1ZGVzIiwiaW5kZXhPZiIsImdldCIsInRhcmdldCIsImZpZWxkIiwiZGlyZWN0R2V0IiwidW5kZWZpbmVkIiwicGF0aEFycmF5IiwicmVzdWx0IiwicmVkdWNlIiwiY3VyciIsInBhdGgiLCJlIiwic2V0Iiwic2FmZSIsImxldmVsIiwiYSIsImIiLCJFcnJvciIsImxlbmd0aCIsImlzRW1wdHlPYmplY3QiLCJvYmoiLCJpc09iamVjdCIsImhhc093blByb3BlcnR5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwia2V5cyIsImkiLCJjYWxsIiwiaXNEZWZpbmVkIiwic2xlZXAiLCJmbiIsIm1zIiwic2V0VGltZW91dCIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwibGF0ZXIiLCJhcHBseSIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiLCJhc3NpZ24iLCJTT1JUX0FTQyIsIlNPUlRfREVTQyIsIlJPV19TRUxFQ1RfU0lOR0xFIiwiUk9XX1NFTEVDVF9NVUxUSVBMRSIsIlJPV19TRUxFQ1RfRElTQUJMRUQiLCJDSEVDS0JPWF9TVEFUVVNfQ0hFQ0tFRCIsIkNIRUNLQk9YX1NUQVRVU19JTkRFVEVSTUlOQVRFIiwiQ0hFQ0tCT1hfU1RBVFVTX1VOQ0hFQ0tFRCIsIklORElDQVRPUl9QT1NJVElPTl9MRUZUIiwiSU5ESUNBVE9SX1BPU0lUSU9OX1JJR0hUIiwiVFlQRV9TVFJJTkciLCJUWVBFX05VTUJFUiIsIlRZUEVfQk9PTEVBTiIsIlRZUEVfREFURSIsIkZJTFRFUlNfUE9TSVRJT05fSU5MSU5FIiwiRklMVEVSU19QT1NJVElPTl9UT1AiLCJGSUxURVJTX1BPU0lUSU9OX0JPVFRPTSIsIkJvb3RzdHJhcENvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJib290c3RyYXA0IiwibWF0Y2hSb3ciLCJrZXlGaWVsZCIsImlkIiwicm93IiwiZ2V0Um93QnlSb3dJZCIsImRhdGEiLCJmaW5kIiwiZXZlbnRzIiwicHJvcHMiLCJjcmVhdGVEZWZhdWx0RXZlbnRIYW5kbGVyIiwiYmluZCIsImNiIiwiY29sdW1uIiwiY29sdW1uSW5kZXgiLCJpbmRleCIsImF0dHJzIiwibmV3QXR0cnMiLCJmb3JFYWNoIiwiYXR0ciIsIkV4dGVuZEJhc2UiLCJTZWxlY3Rpb25Db250ZXh0IiwiU2VsZWN0aW9uUHJvdmlkZXIiLCJoYW5kbGVSb3dTZWxlY3QiLCJyb3dLZXkiLCJjaGVja2VkIiwicm93SW5kZXgiLCJzZWxlY3RSb3ciLCJtb2RlIiwib25TZWxlY3QiLCJDb25zdCIsImN1cnJTZWxlY3RlZCIsInNlbGVjdGVkIiwiZGF0YU9wZXJhdG9yIiwicHVzaCIsImZpbHRlciIsImZvcmNlVXBkYXRlIiwiaGFuZGxlQWxsUm93c1NlbGVjdCIsImlzVW5TZWxlY3QiLCJvblNlbGVjdEFsbCIsIm5vblNlbGVjdGFibGUiLCJjb25jYXQiLCJzZWxlY3RhYmxlS2V5cyIsImQiLCJzIiwiZ2V0U2VsZWN0ZWRSb3dzIiwiQXJyYXkiLCJpc0FycmF5IiwibmV4dFByb3BzIiwiYWxsUm93c1NlbGVjdGVkIiwiYWxsUm93c05vdFNlbGVjdGVkIiwiY2hlY2tlZFN0YXR1cyIsIm9uUm93U2VsZWN0Iiwib25BbGxSb3dzU2VsZWN0IiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsImFycmF5Iiwic3RyaW5nIiwiUHJvdmlkZXIiLCJDb25zdW1lciIsInJvd3MiLCJzZWxlY3Rpb24iLCJleHBhbmQiLCJtdXRhdGUiLCJzb3J0IiwidHlwZSIsIlJvd0V4cGFuZENvbnRleHQiLCJSb3dFeHBhbmRQcm92aWRlciIsInN0YXRlIiwiZXhwYW5kZWQiLCJleHBhbmRSb3ciLCJpc0Nsb3NpbmciLCJvbkNsb3NlZCIsImNsb3NlZFJvdyIsInNldFN0YXRlIiwiaGFuZGxlUm93RXhwYW5kIiwib25FeHBhbmQiLCJvbmx5T25lRXhwYW5kaW5nIiwibm9uRXhwYW5kYWJsZSIsImN1cnJFeHBhbmRlZCIsImhhbmRsZUFsbFJvd0V4cGFuZCIsImV4cGFuZEFsbCIsIm9uRXhwYW5kQWxsIiwiZXhwYW5kYWJsZUtleXMiLCJnZXRFeHBhbmRlZFJvd3MiLCJuZXh0RXhwYW5kZWQiLCJyb3dJZCIsImFjYyIsImN1ciIsImlzQW55RXhwYW5kcyIsIm9uUm93RXhwYW5kIiwib25BbGxSb3dFeHBhbmQiLCJnZXRTZWxlY3Rpb25TdW1tYXJ5Iiwicm93S2V5cyIsIm1hcCIsIngiLCJza2lwcyIsInVuU2VsZWN0YWJsZUtleXMiLCJrIiwiUm93VGVtcGxhdGUiLCJyZW5kZXJDb250ZW50IiwiY2VsbEVsIiwicmVzdCIsImlzUmVuZGVyRnVuY3Rpb25Db2x1bW5JbkxlZnQiLCJwb3NpdGlvbiIsImNoaWxkcmVucyIsImhpZGVTZWxlY3RDb2x1bW4iLCJzZWxlY3RDb2x1bW5Qb3NpdGlvbiIsInVuc2hpZnQiLCJjcmVhdGVFbGVtZW50Iiwia2V5Iiwic2hvd0V4cGFuZENvbHVtbiIsImV4cGFuZENvbHVtblBvc2l0aW9uIiwib2JqZWN0IiwiUm93UHVyZUNvbnRlbnQiLCJzaG91bGRVcGRhdGUiLCJjb2x1bW5zIiwiZWRpdGFibGUiLCJlZGl0aW5nUm93SWR4IiwiZWRpdGluZ0NvbElkeCIsIm9uU3RhcnQiLCJjbGlja1RvRWRpdCIsImRiY2xpY2tUb0VkaXQiLCJFZGl0aW5nQ2VsbENvbXBvbmVudCIsInRhYkluZGV4U3RhcnQiLCJ0YWJJbmRleCIsImRhdGFGaWVsZCIsImNvbnRlbnQiLCJjZWxsVGl0bGUiLCJjZWxsU3R5bGUiLCJjZWxsQXR0cnMiLCJpc0Z1bmN0aW9uIiwib3JpZ2luRm4iLCJjZWxsQ2xhc3NlcyIsImNsYXNzZXMiLCJzdHlsZSIsInRpdGxlIiwiYWxpZ24iLCJ0ZXh0QWxpZ24iLCJjbGFzc05hbWUiLCJlZGl0YWJsZUNlbGwiLCJjbGlja051bSIsImNyZWF0ZUNsaWNrRXZlbnRIYW5kbGVyIiwic2VsZWN0YWJsZSIsImV4cGFuZGFibGUiLCJERUxBWV9GT1JfREJDTElDSyIsImNsaWNrRm4iLCJleHBhbmRCeUNvbHVtbk9ubHkiLCJjbGlja1RvRXhwYW5kIiwiY2xpY2tUb1NlbGVjdCIsImlzRXF1YWwiLCJzaG91bGRVcGRhdGVCeUNlbGxFZGl0aW5nIiwic2hvdWxkVXBkYXRlZEJ5Tm9ybWFsUHJvcHMiLCJzaG91bGRVcGRhdGVDaGlsZCIsInNob3VsZFVwZGF0ZUJ5Q29sdW1uc0ZvclNpbXBsZUNoZWNrIiwiQm9vdHN0cmFwVGFibGUiLCJnZXREYXRhIiwidmlzaWJsZVJvd3MiLCJ2YWxpZGF0ZVByb3BzIiwib25EYXRhU2l6ZUNoYW5nZSIsInBhZ2luYXRpb24iLCJkYXRhU2l6ZSIsImxvYWRpbmciLCJvdmVybGF5IiwiTG9hZGluZ092ZXJsYXkiLCJyZW5kZXJUYWJsZSIsInRhYkluZGV4Q2VsbCIsInN0cmlwZWQiLCJob3ZlciIsImJvcmRlcmVkIiwiY29uZGVuc2VkIiwibm9EYXRhSW5kaWNhdGlvbiIsImNhcHRpb24iLCJyb3dTdHlsZSIsInJvd0NsYXNzZXMiLCJ3cmFwcGVyQ2xhc3NlcyIsInJvd0V2ZW50cyIsImNlbGxFZGl0IiwiZmlsdGVyUG9zaXRpb24iLCJ0YWJsZVdyYXBwZXJDbGFzcyIsInRhYmxlQ2xhc3MiLCJoYXNGaWx0ZXJzIiwic29tZSIsImNvbCIsImZpbHRlclJlbmRlcmVyIiwiaGFzRm9vdGVyIiwiaGFzIiwidGFibGVDYXB0aW9uIiwiaGVhZGVyQ2xhc3NlcyIsImhlYWRlcldyYXBwZXJDbGFzc2VzIiwic29ydEZpZWxkIiwic29ydE9yZGVyIiwib25Tb3J0Iiwic29ydENhcmV0Iiwib25GaWx0ZXIiLCJjdXJyRmlsdGVycyIsIm9uRXh0ZXJuYWxGaWx0ZXIiLCJmaWx0ZXJzQ2xhc3NlcyIsImJvZHlDbGFzc2VzIiwiaXNFbXB0eSIsInZpc2libGVDb2x1bW5TaXplIiwiZm9vdGVyQ2xhc3NlcyIsImJvb2wiLCJyZW1vdGUiLCJvbmVPZlR5cGUiLCJzaGFwZSIsIm9uZU9mIiwiaGlkZVNlbGVjdEFsbCIsIm5vblNlbGVjdGFibGVTdHlsZSIsIm5vblNlbGVjdGFibGVDbGFzc2VzIiwiYmdDb2xvciIsInNlbGVjdGlvblJlbmRlcmVyIiwic2VsZWN0aW9uSGVhZGVyUmVuZGVyZXIiLCJoZWFkZXJDb2x1bW5TdHlsZSIsInNlbGVjdENvbHVtblN0eWxlIiwicmVuZGVyZXIiLCJleHBhbmRDb2x1bW5SZW5kZXJlciIsImV4cGFuZEhlYWRlckNvbHVtblJlbmRlcmVyIiwicGFyZW50Q2xhc3NOYW1lIiwiZGVmYXVsdFNvcnRlZCIsImFycmF5T2YiLCJvcmRlciIsInNvcnRGdW5jIiwiZGVmYXVsdFNvcnREaXJlY3Rpb24iLCJvblRhYmxlQ2hhbmdlIiwic2VhcmNoIiwic2VhcmNoVGV4dCIsInNlYXJjaENvbnRleHQiLCJzZXREZXBlbmRlbmN5TW9kdWxlcyIsImRlZmF1bHRQcm9wcyIsIm5vbkVkaXRhYmxlUm93cyIsIkhlYWRlciIsImdsb2JhbFNvcnRDYXJldCIsIlNlbGVjdGlvbkhlYWRlckNlbGxDb21wIiwiRXhwYW5zaW9uSGVhZGVyQ2VsbENvbXAiLCJFeHBhbmRIZWFkZXJDZWxsIiwiU2VsZWN0aW9uSGVhZGVyQ2VsbCIsImN1cnJTb3J0IiwiaXNMYXN0U29ydGluZyIsIkhlYWRlckNlbGwiLCJzb3J0aW5nIiwidGV4dCIsImhlYWRlclRpdGxlIiwiaGVhZGVyQWxpZ24iLCJoZWFkZXJGb3JtYXR0ZXIiLCJoZWFkZXJFdmVudHMiLCJoZWFkZXJTdHlsZSIsImhlYWRlckF0dHJzIiwiaGVhZGVyU29ydGluZ0NsYXNzZXMiLCJoZWFkZXJTb3J0aW5nU3R5bGUiLCJzb3J0Q2FyZXRmdW5jIiwiZGVsZWdhdGVFdmVudHMiLCJkZWxlZ2F0ZSIsImN1c3RvbUF0dHJzIiwic29ydFN5bWJvbCIsImZpbHRlckVsbSIsImN1c3RvbUNsaWNrIiwib25DbGljayIsIm9uS2V5VXAiLCJvbkN1c3RvbUZpbHRlciIsInNvcnRFbGVtZW50IiwiZmlsdGVyRWxlbWVudCIsImlzRHVtbXlGaWVsZCIsImhpZGRlbiIsImZvcm1hdHRlciIsImZvcm1hdEV4dHJhRGF0YSIsImFueSIsImVkaXRvciIsImVkaXRDZWxsU3R5bGUiLCJlZGl0Q2VsbENsYXNzZXMiLCJlZGl0b3JTdHlsZSIsImVkaXRvckNsYXNzZXMiLCJlZGl0b3JSZW5kZXJlciIsInZhbGlkYXRvciIsImZpbHRlclZhbHVlIiwic2VhcmNoYWJsZSIsIm51bWJlciIsIlNvcnRTeW1ib2wiLCJTb3J0Q2FyZXQiLCJvcmRlckNsYXNzIiwiZHJvcHVwIiwiQ2hlY2tCb3giLCJpbmRldGVybWluYXRlIiwiaW5wdXQiLCJoYW5kbGVDaGVja0JveENsaWNrIiwiRXhwYW5zaW9uSGVhZGVyQ2VsbCIsImVkaXRDZWxsIiwibmV3VmFsdWUiLCJjb21wYXJhdG9yIiwibG9jYWxlQ29tcGFyZSIsInNvcnRWYWx1ZSIsIl9kYXRhIiwidmFsdWVBIiwidmFsdWVCIiwibmV4dE9yZGVyIiwiY3VycmVudFNvcnRDb2x1bW4iLCJzb3J0Q29sdW1uIiwiZGVmYXVsdE9yZGVyIiwidHlwZUNvbnZlcnQiLCJTdHJpbmciLCJOdW1iZXIiLCJEYXRlIiwiRmlsdGVycyIsImZpbHRlckNvbHVtbnMiLCJzaG93RmlsdGVyc1JvdyIsImRpc3BsYXkiLCJGaWx0ZXJzQ2VsbCIsIkNhcHRpb24iLCJjYXB0aW9uU2lkZSIsIkJvZHkiLCJFZGl0aW5nQ2VsbCIsImNyZWF0ZUVkaXRpbmdDZWxsIiwib3B0aW9ucyIsIm9uU3RhcnRFZGl0IiwiUm93Q29tcG9uZW50IiwiU2ltcGxlUm93Iiwic2VsZWN0Um93RW5hYmxlZCIsImV4cGFuZFJvd0VuYWJsZWQiLCJSb3dBZ2dyZWdhdG9yIiwid2l0aFJvd0xldmVsQ2VsbEVkaXQiLCJpbmRpY2F0aW9uIiwiYWRkaXRpb25hbFJvd1Byb3BzIiwiYmFzZVJvd1Byb3BzIiwic2hvdWxkVXBkYXRlUm93Q29udGVudCIsInNob3VsZFJvd0NvbnRlbnRVcGRhdGUiLCJzaG91bGRVcGRhdGVkQnlTZWxmUHJvcHMiLCJ0ckF0dHJzIiwiQ2VsbCIsImNyZWF0ZUhhbmRsZUVkaXRpbmdDZWxsIiwib3JpZ2luRnVuYyIsIm9uRG91YmxlQ2xpY2siLCJzZWxlY3RDZWxsIiwiZXhwYW5kQ2VsbCIsIkV4cGFuZENlbGwiLCJoYW5kbGVDbGljayIsInN0b3BQcm9wYWdhdGlvbiIsIlNlbGVjdGlvbkNlbGwiLCJkaXNhYmxlZCIsImlucHV0VHlwZSIsIlJvd1NlY3Rpb24iLCJjb2xTcGFuIiwicmVuZGVyV2l0aFNlbGVjdGlvbiIsIm5vdFNlbGVjdGFibGUiLCJzZWxlY3RlZFN0eWxlIiwic2VsZWN0ZWRDbGFzc2VzIiwiYmFja2dyb3VuZENvbG9yIiwibm90U2VsZWN0YWJsZVN0eWxlIiwibm90U2VsZWN0YWJsZUNsYXNzZXMiLCJ3aXRoQ29uc3VtZXIiLCJkaXNwbGF5TmFtZSIsInJlbmRlcldpdGhFeHBhbnNpb24iLCJFeHBhbmRSb3ciLCJGb290ZXIiLCJmb290ZXIiLCJjb2x1bW5EYXRhIiwicGx1Y2siLCJGb290ZXJDZWxsIiwiZm9vdGVyVGl0bGUiLCJmb290ZXJBbGlnbiIsImZvb3RlckZvcm1hdHRlciIsImZvb3RlckV2ZW50cyIsImZvb3RlclN0eWxlIiwiZm9vdGVyQXR0cnMiLCJpc1N0cmluZyIsImhpZGRlblJvd3MiLCJpbmNsdWRlU2VsZWN0Q29sdW1uIiwiY29sdW1uTGVuIiwiY29sdW1uVG9nZ2xlIiwidG9nZ2xlcyIsIm5hbWUiLCJjIiwid2l0aENvbnRleHQiLCJEYXRhQ29udGV4dCIsInJlZ2lzdGVyRXhwb3NlZEFQSSIsImV4cG9zZWRBUElFbWl0dGVyIiwiRXZlbnRFbWl0dGVyIiwib24iLCJwYXlsb2FkIiwidGFibGUiLCJzZWxlY3Rpb25Db250ZXh0IiwiZ2V0U2VsZWN0ZWQiLCJnZXRTZWFyY2hlZCIsImZpbHRlckNvbnRleHQiLCJnZXRGaWx0ZXJlZCIsIlNvcnRDb250ZXh0IiwiaXNSZW1vdGVTb3J0IiwiaGFuZGxlUmVtb3RlU29ydENoYW5nZSIsIkNvbHVtbk1hbmFnZW1lbnRDb250ZXh0IiwiQ2VsbEVkaXRDb250ZXh0IiwiaXNSZW1vdGVDZWxsRWRpdCIsImhhbmRsZVJlbW90ZUNlbGxDaGFuZ2UiLCJGaWx0ZXJDb250ZXh0IiwiaXNSZW1vdGVGaWx0ZXJpbmciLCJoYW5kbGVSZW1vdGVGaWx0ZXJDaGFuZ2UiLCJQYWdpbmF0aW9uQ29udGV4dCIsIlNlYXJjaENvbnRleHQiLCJpc1JlbW90ZVNlYXJjaCIsImhhbmRsZVJlbW90ZVNlYXJjaENoYW5nZSIsInNldFBhZ2luYXRpb25SZW1vdGVFbWl0dGVyIiwicmVtb3RlRW1pdHRlciIsImlzUmVtb3RlUGFnaW5hdGlvbiIsImhhbmRsZVJlbW90ZVBhZ2VDaGFuZ2UiLCJyb290UHJvcHMiLCJmaWx0ZXJQcm9wcyIsInNlYXJjaFByb3BzIiwic29ydFByb3BzIiwicGFnaW5hdGlvblByb3BzIiwiY29sdW1uVG9nZ2xlUHJvcHMiLCJuIiwiYmFzZSIsImJhc2VQcm9wcyIsInJvd0V4cGFuZENvbnRleHQiLCJwYWdpbmF0aW9uQ29udGV4dCIsInNvcnRDb250ZXh0IiwiZGF0YUNoYW5nZUxpc3RlbmVyIiwiY2VsbEVkaXRDb250ZXh0IiwicmVuZGVyQmFzZSIsInJlbmRlcldpdGhDb2x1bW5NYW5hZ2VtZW50Q3R4IiwicmVuZGVyV2l0aFNlbGVjdGlvbkN0eCIsInJlbmRlcldpdGhSb3dFeHBhbmRDdHgiLCJyZW5kZXJXaXRoUGFnaW5hdGlvbkN0eCIsInJlbmRlcldpdGhTb3J0Q3R4IiwicmVuZGVyV2l0aFNlYXJjaEN0eCIsInJlbmRlcldpdGhGaWx0ZXJDdHgiLCJyZW5kZXJXaXRoQ2VsbEVkaXRDdHgiLCJEYXRhUHJvdmlkZXIiLCJDb2x1bW5NYW5hZ2VtZW50UHJvdmlkZXIiLCJ0b2dnbGVDb2x1bW4iLCJoYW5kbGVTb3J0Q2hhbmdlIiwiU29ydFByb3ZpZGVyIiwiaW5pdFNvcnQiLCJzb3J0Q29sdW1ucyIsImhhbmRsZVNvcnQiLCJnZXROZXdlc3RTdGF0ZSIsInBhZ2UiLCJzaXplUGVyUGFnZSIsImZpbHRlcnMiLCJjdXJyUGFnZSIsImN1cnJTaXplUGVyUGFnZSIsIm5ld1N0YXRlIiwicGFnZVN0YXJ0SW5kZXgiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsWUFBWTtBQUNsRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsdUNBQXVDLFlBQVk7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4QkFBOEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsWUFBWTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsWUFBWTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixXQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGVBQWU7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdCQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFlBQVk7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsWUFBWTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFlBQVk7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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cC10YWJsZTIvZGlzdC9yZWFjdC1ib290c3RyYXAtdGFibGUtbmV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJlYWN0Qm9vdHN0cmFwVGFibGUyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlJlYWN0Qm9vdHN0cmFwVGFibGUyXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJSZWFjdERPTVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yMV9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiZjI2MzkxMjU1MThjMDUyMmU1OCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qIGVzbGludCBuby1lbXB0eTogMCAqL1xuLyogZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOiAwICovXG4vKiBlc2xpbnQgcHJlZmVyLXJlc3QtcGFyYW1zOiAwICovXG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuZnVuY3Rpb24gc3BsaXROZXN0ZWQoc3RyKSB7XG4gIHJldHVybiBbc3RyXVxuICAgIC5qb2luKCcuJylcbiAgICAucmVwbGFjZSgvXFxbL2csICcuJylcbiAgICAucmVwbGFjZSgvXFxdL2csICcnKVxuICAgIC5zcGxpdCgnLicpO1xufVxuXG5mdW5jdGlvbiBjb250YWlucyhsaXN0LCB2YWx1ZSkge1xuICBpZiAoXy5pbmNsdWRlcykge1xuICAgIHJldHVybiBfLmluY2x1ZGVzKGxpc3QsIHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiBsaXN0LmluZGV4T2YodmFsdWUpID4gLTE7XG59XG5cbmZ1bmN0aW9uIGdldCh0YXJnZXQsIGZpZWxkKSB7XG4gIGNvbnN0IGRpcmVjdEdldCA9IHRhcmdldFtmaWVsZF07XG4gIGlmIChkaXJlY3RHZXQgIT09IHVuZGVmaW5lZCAmJiBkaXJlY3RHZXQgIT09IG51bGwpIHtcbiAgICByZXR1cm4gZGlyZWN0R2V0O1xuICB9XG5cbiAgY29uc3QgcGF0aEFycmF5ID0gc3BsaXROZXN0ZWQoZmllbGQpO1xuICBsZXQgcmVzdWx0O1xuICB0cnkge1xuICAgIHJlc3VsdCA9IHBhdGhBcnJheS5yZWR1Y2UoKGN1cnIsIHBhdGgpID0+IGN1cnJbcGF0aF0sIHRhcmdldCk7XG4gIH0gY2F0Y2ggKGUpIHt9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNldCh0YXJnZXQsIGZpZWxkLCB2YWx1ZSwgc2FmZSA9IGZhbHNlKSB7XG4gIGNvbnN0IHBhdGhBcnJheSA9IHNwbGl0TmVzdGVkKGZpZWxkKTtcbiAgbGV0IGxldmVsID0gMDtcbiAgcGF0aEFycmF5LnJlZHVjZSgoYSwgYikgPT4ge1xuICAgIGxldmVsICs9IDE7XG4gICAgaWYgKHR5cGVvZiBhW2JdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKCFzYWZlKSB0aHJvdyBuZXcgRXJyb3IoYCR7YX0uJHtifSBpcyB1bmRlZmluZWRgKTtcbiAgICAgIGFbYl0gPSB7fTtcbiAgICAgIHJldHVybiBhW2JdO1xuICAgIH1cblxuICAgIGlmIChsZXZlbCA9PT0gcGF0aEFycmF5Lmxlbmd0aCkge1xuICAgICAgYVtiXSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gYVtiXTtcbiAgfSwgdGFyZ2V0KTtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eU9iamVjdChvYmopIHtcbiAgaWYgKCFfLmlzT2JqZWN0KG9iaikpIHJldHVybiBmYWxzZTtcblxuICBjb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5c1tpXSkpIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIHNsZWVwKGZuLCBtcykge1xuICByZXR1cm4gc2V0VGltZW91dCgoKSA9PiBmbigpLCBtcyk7XG59XG5cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICBsZXQgdGltZW91dDtcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbnN0IGxhdGVyID0gKCkgPT4ge1xuICAgICAgdGltZW91dCA9IG51bGw7XG5cbiAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCB8fCAwKTtcblxuICAgIGlmIChjYWxsTm93KSB7XG4gICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3QuYXNzaWduKF8sIHtcbiAgZ2V0LFxuICBzZXQsXG4gIGlzRGVmaW5lZCxcbiAgaXNFbXB0eU9iamVjdCxcbiAgc2xlZXAsXG4gIGRlYm91bmNlLFxuICBjb250YWluc1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy91dGlscy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgU09SVF9BU0M6ICdhc2MnLFxuICBTT1JUX0RFU0M6ICdkZXNjJyxcbiAgUk9XX1NFTEVDVF9TSU5HTEU6ICdyYWRpbycsXG4gIFJPV19TRUxFQ1RfTVVMVElQTEU6ICdjaGVja2JveCcsXG4gIFJPV19TRUxFQ1RfRElTQUJMRUQ6ICdST1dfU0VMRUNUX0RJU0FCTEVEJyxcbiAgQ0hFQ0tCT1hfU1RBVFVTX0NIRUNLRUQ6ICdjaGVja2VkJyxcbiAgQ0hFQ0tCT1hfU1RBVFVTX0lOREVURVJNSU5BVEU6ICdpbmRldGVybWluYXRlJyxcbiAgQ0hFQ0tCT1hfU1RBVFVTX1VOQ0hFQ0tFRDogJ3VuY2hlY2tlZCcsXG4gIElORElDQVRPUl9QT1NJVElPTl9MRUZUOiAnbGVmdCcsXG4gIElORElDQVRPUl9QT1NJVElPTl9SSUdIVDogJ3JpZ2h0JyxcbiAgVFlQRV9TVFJJTkc6ICdzdHJpbmcnLFxuICBUWVBFX05VTUJFUjogJ251bWJlcicsXG4gIFRZUEVfQk9PTEVBTjogJ2Jvb2wnLFxuICBUWVBFX0RBVEU6ICdkYXRlJyxcbiAgRklMVEVSU19QT1NJVElPTl9JTkxJTkU6ICdpbmxpbmUnLFxuICBGSUxURVJTX1BPU0lUSU9OX1RPUDogJ3RvcCcsXG4gIEZJTFRFUlNfUE9TSVRJT05fQk9UVE9NOiAnYm90dG9tJ1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnN0LmpzIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IEJvb3RzdHJhcENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgYm9vdHN0cmFwNDogZmFsc2Vcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29udGV4dHMvYm9vdHN0cmFwLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZS5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IG1hdGNoUm93ID0gKGtleUZpZWxkLCBpZCkgPT4gcm93ID0+IF8uZ2V0KHJvdywga2V5RmllbGQpID09PSBpZDtcblxuZXhwb3J0IGNvbnN0IGdldFJvd0J5Um93SWQgPSAoZGF0YSwga2V5RmllbGQsIGlkKSA9PiBkYXRhLmZpbmQobWF0Y2hSb3coa2V5RmllbGQsIGlkKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9yb3dzLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IF8gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGV2ZW50cyA9IFtcbiAgJ29uQ2xpY2snLFxuICAnb25Eb3VibGVDbGljaycsXG4gICdvbk1vdXNlRW50ZXInLFxuICAnb25Nb3VzZUxlYXZlJyxcbiAgJ29uQ29udGV4dE1lbnUnLFxuICAnb25BdXhDbGljaydcbl07XG5cbmV4cG9ydCBkZWZhdWx0IEV4dGVuZEJhc2UgPT5cbiAgY2xhc3MgQ2VsbEV2ZW50RGVsZWdhdGVyIGV4dGVuZHMgRXh0ZW5kQmFzZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuY3JlYXRlRGVmYXVsdEV2ZW50SGFuZGxlciA9IHRoaXMuY3JlYXRlRGVmYXVsdEV2ZW50SGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNyZWF0ZURlZmF1bHRFdmVudEhhbmRsZXIoY2IpIHtcbiAgICAgIHJldHVybiAoZSkgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbHVtbiwgY29sdW1uSW5kZXgsIGluZGV4IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjYihlLCBjb2x1bW4sIHR5cGVvZiBjb2x1bW5JbmRleCAhPT0gJ3VuZGVmaW5lZCcgPyBjb2x1bW5JbmRleCA6IGluZGV4KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZGVsZWdhdGUoYXR0cnMgPSB7fSkge1xuICAgICAgY29uc3QgbmV3QXR0cnMgPSB7IC4uLmF0dHJzIH07XG4gICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICBpZiAoXy5jb250YWlucyhldmVudHMsIGF0dHIpKSB7XG4gICAgICAgICAgbmV3QXR0cnNbYXR0cl0gPSB0aGlzLmNyZWF0ZURlZmF1bHRFdmVudEhhbmRsZXIoYXR0cnNbYXR0cl0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXdBdHRycztcbiAgICB9XG4gIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jZWxsLWV2ZW50LWRlbGVnYXRlci5qcyIsIi8qIGVzbGludCBjYW1lbGNhc2U6IDAgKi9cbi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9jb25zdCc7XG5pbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5cbmltcG9ydCBkYXRhT3BlcmF0b3IgZnJvbSAnLi4vc3RvcmUvb3BlcmF0b3JzJztcbmltcG9ydCB7IGdldFNlbGVjdGlvblN1bW1hcnkgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3Rpb24nO1xuXG5jb25zdCBTZWxlY3Rpb25Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuY2xhc3MgU2VsZWN0aW9uUHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIGtleUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBwcm9wcy5zZWxlY3RSb3cuc2VsZWN0ZWQgfHwgW107XG4gIH1cblxuICAvLyBleHBvc2VkIEFQSVxuICBnZXRTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZDtcbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMuc2VsZWN0Um93KSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gbmV4dFByb3BzLnNlbGVjdFJvdy5zZWxlY3RlZCB8fCB0aGlzLnNlbGVjdGVkO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJvd1NlbGVjdCA9IChyb3dLZXksIGNoZWNrZWQsIHJvd0luZGV4LCBlKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhLCBrZXlGaWVsZCwgc2VsZWN0Um93OiB7IG1vZGUsIG9uU2VsZWN0IH0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBST1dfU0VMRUNUX1NJTkdMRSB9ID0gQ29uc3Q7XG5cbiAgICBsZXQgY3VyclNlbGVjdGVkID0gWy4uLnRoaXMuc2VsZWN0ZWRdO1xuXG4gICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgaWYgKG9uU2VsZWN0KSB7XG4gICAgICBjb25zdCByb3cgPSBkYXRhT3BlcmF0b3IuZ2V0Um93QnlSb3dJZChkYXRhLCBrZXlGaWVsZCwgcm93S2V5KTtcbiAgICAgIHJlc3VsdCA9IG9uU2VsZWN0KHJvdywgY2hlY2tlZCwgcm93SW5kZXgsIGUpO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQgPT09IHRydWUgfHwgcmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChtb2RlID09PSBST1dfU0VMRUNUX1NJTkdMRSkgeyAvLyB3aGVuIHNlbGVjdCBtb2RlIGlzIHJhZGlvXG4gICAgICAgIGN1cnJTZWxlY3RlZCA9IFtyb3dLZXldO1xuICAgICAgfSBlbHNlIGlmIChjaGVja2VkKSB7IC8vIHdoZW4gc2VsZWN0IG1vZGUgaXMgY2hlY2tib3hcbiAgICAgICAgY3VyclNlbGVjdGVkLnB1c2gocm93S2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJTZWxlY3RlZCA9IGN1cnJTZWxlY3RlZC5maWx0ZXIodmFsdWUgPT4gdmFsdWUgIT09IHJvd0tleSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWQgPSBjdXJyU2VsZWN0ZWQ7XG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgaGFuZGxlQWxsUm93c1NlbGVjdCA9IChlLCBpc1VuU2VsZWN0KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgZGF0YSxcbiAgICAgIGtleUZpZWxkLFxuICAgICAgc2VsZWN0Um93OiB7XG4gICAgICAgIG9uU2VsZWN0QWxsLFxuICAgICAgICBub25TZWxlY3RhYmxlXG4gICAgICB9XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdGhpcztcblxuICAgIGxldCBjdXJyU2VsZWN0ZWQ7XG5cbiAgICBpZiAoIWlzVW5TZWxlY3QpIHtcbiAgICAgIGN1cnJTZWxlY3RlZCA9IHNlbGVjdGVkLmNvbmNhdChkYXRhT3BlcmF0b3Iuc2VsZWN0YWJsZUtleXMoZGF0YSwga2V5RmllbGQsIG5vblNlbGVjdGFibGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VyclNlbGVjdGVkID0gc2VsZWN0ZWQuZmlsdGVyKHMgPT4gdHlwZW9mIGRhdGEuZmluZChkID0+IF8uZ2V0KGQsIGtleUZpZWxkKSA9PT0gcykgPT09ICd1bmRlZmluZWQnKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmIChvblNlbGVjdEFsbCkge1xuICAgICAgcmVzdWx0ID0gb25TZWxlY3RBbGwoXG4gICAgICAgICFpc1VuU2VsZWN0LFxuICAgICAgICBkYXRhT3BlcmF0b3IuZ2V0U2VsZWN0ZWRSb3dzKFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAga2V5RmllbGQsXG4gICAgICAgICAgaXNVblNlbGVjdCA/IHNlbGVjdGVkIDogY3VyclNlbGVjdGVkXG4gICAgICAgICksXG4gICAgICAgIGVcbiAgICAgICk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7XG4gICAgICAgIGN1cnJTZWxlY3RlZCA9IHJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZCA9IGN1cnJTZWxlY3RlZDtcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYWxsUm93c1NlbGVjdGVkLFxuICAgICAgYWxsUm93c05vdFNlbGVjdGVkXG4gICAgfSA9IGdldFNlbGVjdGlvblN1bW1hcnkoXG4gICAgICB0aGlzLnByb3BzLmRhdGEsXG4gICAgICB0aGlzLnByb3BzLmtleUZpZWxkLFxuICAgICAgdGhpcy5zZWxlY3RlZFxuICAgICk7XG5cbiAgICBsZXQgY2hlY2tlZFN0YXR1cztcblxuICAgIC8vIGNoZWNrYm94IHN0YXR1cyBkZXBlbmRpbmcgb24gc2VsZWN0ZWQgcm93cyBjb3VudHNcbiAgICBpZiAoYWxsUm93c1NlbGVjdGVkKSBjaGVja2VkU3RhdHVzID0gQ29uc3QuQ0hFQ0tCT1hfU1RBVFVTX0NIRUNLRUQ7XG4gICAgZWxzZSBpZiAoYWxsUm93c05vdFNlbGVjdGVkKSBjaGVja2VkU3RhdHVzID0gQ29uc3QuQ0hFQ0tCT1hfU1RBVFVTX1VOQ0hFQ0tFRDtcbiAgICBlbHNlIGNoZWNrZWRTdGF0dXMgPSBDb25zdC5DSEVDS0JPWF9TVEFUVVNfSU5ERVRFUk1JTkFURTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U2VsZWN0aW9uQ29udGV4dC5Qcm92aWRlclxuICAgICAgICB2YWx1ZT17IHtcbiAgICAgICAgICAuLi50aGlzLnByb3BzLnNlbGVjdFJvdyxcbiAgICAgICAgICBzZWxlY3RlZDogdGhpcy5zZWxlY3RlZCxcbiAgICAgICAgICBvblJvd1NlbGVjdDogdGhpcy5oYW5kbGVSb3dTZWxlY3QsXG4gICAgICAgICAgb25BbGxSb3dzU2VsZWN0OiB0aGlzLmhhbmRsZUFsbFJvd3NTZWxlY3QsXG4gICAgICAgICAgYWxsUm93c1NlbGVjdGVkLFxuICAgICAgICAgIGFsbFJvd3NOb3RTZWxlY3RlZCxcbiAgICAgICAgICBjaGVja2VkU3RhdHVzXG4gICAgICAgIH0gfVxuICAgICAgPlxuICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgPC9TZWxlY3Rpb25Db250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBQcm92aWRlcjogU2VsZWN0aW9uUHJvdmlkZXIsXG4gIENvbnN1bWVyOiBTZWxlY3Rpb25Db250ZXh0LkNvbnN1bWVyXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29udGV4dHMvc2VsZWN0aW9uLWNvbnRleHQuanMiLCJpbXBvcnQgKiBhcyByb3dzIGZyb20gJy4vcm93cyc7XG5pbXBvcnQgKiBhcyBzZWxlY3Rpb24gZnJvbSAnLi9zZWxlY3Rpb24nO1xuaW1wb3J0ICogYXMgZXhwYW5kIGZyb20gJy4vZXhwYW5kJztcbmltcG9ydCAqIGFzIG11dGF0ZSBmcm9tICcuL211dGF0ZSc7XG5pbXBvcnQgKiBhcyBzb3J0IGZyb20gJy4vc29ydCc7XG5pbXBvcnQgKiBhcyB0eXBlIGZyb20gJy4vdHlwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLi4ucm93cyxcbiAgLi4uc2VsZWN0aW9uLFxuICAuLi5leHBhbmQsXG4gIC4uLm11dGF0ZSxcbiAgLi4uc29ydCxcbiAgLi4udHlwZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL29wZXJhdG9ycy5qcyIsIi8qIGVzbGludCBjYW1lbGNhc2U6IDAgKi9cbi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBkYXRhT3BlcmF0b3IgZnJvbSAnLi4vc3RvcmUvb3BlcmF0b3JzJztcbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcblxuY29uc3QgUm93RXhwYW5kQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuY2xhc3MgUm93RXhwYW5kUHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIGtleUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfTtcblxuICBzdGF0ZSA9IHsgZXhwYW5kZWQ6IHRoaXMucHJvcHMuZXhwYW5kUm93LmV4cGFuZGVkIHx8IFtdLFxuICAgIGlzQ2xvc2luZzogdGhpcy5wcm9wcy5leHBhbmRSb3cuaXNDbG9zaW5nIHx8IFtdIH07XG5cbiAgb25DbG9zZWQgPSAoY2xvc2VkUm93KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzQ2xvc2luZzogdGhpcy5zdGF0ZS5pc0Nsb3NpbmcuZmlsdGVyKHZhbHVlID0+IHZhbHVlICE9PSBjbG9zZWRSb3cpIH0pO1xuICB9O1xuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMuZXhwYW5kUm93KSB7XG4gICAgICBsZXQgbmV4dEV4cGFuZGVkID0gWy4uLihuZXh0UHJvcHMuZXhwYW5kUm93LmV4cGFuZGVkIHx8IHRoaXMuc3RhdGUuZXhwYW5kZWQpXTtcbiAgICAgIGNvbnN0IHsgbm9uRXhwYW5kYWJsZSA9IFtdIH0gPSBuZXh0UHJvcHMuZXhwYW5kUm93O1xuICAgICAgbmV4dEV4cGFuZGVkID0gbmV4dEV4cGFuZGVkLmZpbHRlcihyb3dJZCA9PiAhXy5jb250YWlucyhub25FeHBhbmRhYmxlLCByb3dJZCkpO1xuICAgICAgY29uc3QgaXNDbG9zaW5nID0gdGhpcy5zdGF0ZS5leHBhbmRlZC5yZWR1Y2UoKGFjYywgY3VyKSA9PiB7XG4gICAgICAgIGlmICghXy5jb250YWlucyhuZXh0RXhwYW5kZWQsIGN1cikpIHtcbiAgICAgICAgICBhY2MucHVzaChjdXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCBbXSk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgZXhwYW5kZWQ6IG5leHRFeHBhbmRlZCxcbiAgICAgICAgaXNDbG9zaW5nXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgZXhwYW5kZWQ6IHRoaXMuc3RhdGUuZXhwYW5kZWRcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSb3dFeHBhbmQgPSAocm93S2V5LCBleHBhbmRlZCwgcm93SW5kZXgsIGUpID0+IHtcbiAgICBjb25zdCB7IGRhdGEsIGtleUZpZWxkLCBleHBhbmRSb3c6IHsgb25FeHBhbmQsIG9ubHlPbmVFeHBhbmRpbmcsIG5vbkV4cGFuZGFibGUgfSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAobm9uRXhwYW5kYWJsZSAmJiBfLmNvbnRhaW5zKG5vbkV4cGFuZGFibGUsIHJvd0tleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgY3VyckV4cGFuZGVkID0gWy4uLnRoaXMuc3RhdGUuZXhwYW5kZWRdO1xuICAgIGxldCBpc0Nsb3NpbmcgPSBbLi4udGhpcy5zdGF0ZS5pc0Nsb3NpbmddO1xuXG4gICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICBpZiAob25seU9uZUV4cGFuZGluZykge1xuICAgICAgICBpc0Nsb3NpbmcgPSBpc0Nsb3NpbmcuY29uY2F0KGN1cnJFeHBhbmRlZCk7XG4gICAgICAgIGN1cnJFeHBhbmRlZCA9IFtyb3dLZXldO1xuICAgICAgfSBlbHNlIGN1cnJFeHBhbmRlZC5wdXNoKHJvd0tleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzQ2xvc2luZy5wdXNoKHJvd0tleSk7XG4gICAgICBjdXJyRXhwYW5kZWQgPSBjdXJyRXhwYW5kZWQuZmlsdGVyKHZhbHVlID0+IHZhbHVlICE9PSByb3dLZXkpO1xuICAgIH1cblxuICAgIGlmIChvbkV4cGFuZCkge1xuICAgICAgY29uc3Qgcm93ID0gZGF0YU9wZXJhdG9yLmdldFJvd0J5Um93SWQoZGF0YSwga2V5RmllbGQsIHJvd0tleSk7XG4gICAgICBvbkV4cGFuZChyb3csIGV4cGFuZGVkLCByb3dJbmRleCwgZSk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgZXhwYW5kZWQ6IGN1cnJFeHBhbmRlZCwgaXNDbG9zaW5nIH0pKTtcbiAgfTtcblxuICBoYW5kbGVBbGxSb3dFeHBhbmQgPSAoZSwgZXhwYW5kQWxsKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgZGF0YSxcbiAgICAgIGtleUZpZWxkLFxuICAgICAgZXhwYW5kUm93OiB7XG4gICAgICAgIG9uRXhwYW5kQWxsLFxuICAgICAgICBub25FeHBhbmRhYmxlXG4gICAgICB9XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBleHBhbmRlZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGxldCBjdXJyRXhwYW5kZWQ7XG5cbiAgICBpZiAoZXhwYW5kQWxsKSB7XG4gICAgICBjdXJyRXhwYW5kZWQgPSBleHBhbmRlZC5jb25jYXQoZGF0YU9wZXJhdG9yLmV4cGFuZGFibGVLZXlzKGRhdGEsIGtleUZpZWxkLCBub25FeHBhbmRhYmxlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJFeHBhbmRlZCA9IGV4cGFuZGVkLmZpbHRlcihzID0+IHR5cGVvZiBkYXRhLmZpbmQoZCA9PiBfLmdldChkLCBrZXlGaWVsZCkgPT09IHMpID09PSAndW5kZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgaWYgKG9uRXhwYW5kQWxsKSB7XG4gICAgICBvbkV4cGFuZEFsbChleHBhbmRBbGwsIGRhdGFPcGVyYXRvci5nZXRFeHBhbmRlZFJvd3MoZGF0YSwga2V5RmllbGQsIGN1cnJFeHBhbmRlZCksIGUpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgZXhwYW5kZWQ6IGN1cnJFeHBhbmRlZCB9KSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YSwga2V5RmllbGQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3dFeHBhbmRDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgIHZhbHVlPXsge1xuICAgICAgICAgIC4uLnRoaXMucHJvcHMuZXhwYW5kUm93LFxuICAgICAgICAgIG5vbkV4cGFuZGFibGU6IHRoaXMucHJvcHMuZXhwYW5kUm93Lm5vbkV4cGFuZGFibGUsXG4gICAgICAgICAgZXhwYW5kZWQ6IHRoaXMuc3RhdGUuZXhwYW5kZWQsXG4gICAgICAgICAgaXNDbG9zaW5nOiB0aGlzLnN0YXRlLmlzQ2xvc2luZyxcbiAgICAgICAgICBvbkNsb3NlZDogdGhpcy5vbkNsb3NlZCxcbiAgICAgICAgICBpc0FueUV4cGFuZHM6IGRhdGFPcGVyYXRvci5pc0FueUV4cGFuZHMoZGF0YSwga2V5RmllbGQsIHRoaXMuc3RhdGUuZXhwYW5kZWQpLFxuICAgICAgICAgIG9uUm93RXhwYW5kOiB0aGlzLmhhbmRsZVJvd0V4cGFuZCxcbiAgICAgICAgICBvbkFsbFJvd0V4cGFuZDogdGhpcy5oYW5kbGVBbGxSb3dFeHBhbmRcbiAgICAgICAgfSB9XG4gICAgICA+XG4gICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICA8L1Jvd0V4cGFuZENvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFByb3ZpZGVyOiBSb3dFeHBhbmRQcm92aWRlcixcbiAgQ29uc3VtZXI6IFJvd0V4cGFuZENvbnRleHQuQ29uc3VtZXJcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9yb3ctZXhwYW5kLWNvbnRleHQuanMiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgdGltZW91dHNTaGFwZSB9IGZyb20gJy4vdXRpbHMvUHJvcFR5cGVzJztcbmltcG9ydCBUcmFuc2l0aW9uR3JvdXBDb250ZXh0IGZyb20gJy4vVHJhbnNpdGlvbkdyb3VwQ29udGV4dCc7XG5leHBvcnQgdmFyIFVOTU9VTlRFRCA9ICd1bm1vdW50ZWQnO1xuZXhwb3J0IHZhciBFWElURUQgPSAnZXhpdGVkJztcbmV4cG9ydCB2YXIgRU5URVJJTkcgPSAnZW50ZXJpbmcnO1xuZXhwb3J0IHZhciBFTlRFUkVEID0gJ2VudGVyZWQnO1xuZXhwb3J0IHZhciBFWElUSU5HID0gJ2V4aXRpbmcnO1xuLyoqXG4gKiBUaGUgVHJhbnNpdGlvbiBjb21wb25lbnQgbGV0cyB5b3UgZGVzY3JpYmUgYSB0cmFuc2l0aW9uIGZyb20gb25lIGNvbXBvbmVudFxuICogc3RhdGUgdG8gYW5vdGhlciBfb3ZlciB0aW1lXyB3aXRoIGEgc2ltcGxlIGRlY2xhcmF0aXZlIEFQSS4gTW9zdCBjb21tb25seVxuICogaXQncyB1c2VkIHRvIGFuaW1hdGUgdGhlIG1vdW50aW5nIGFuZCB1bm1vdW50aW5nIG9mIGEgY29tcG9uZW50LCBidXQgY2FuIGFsc29cbiAqIGJlIHVzZWQgdG8gZGVzY3JpYmUgaW4tcGxhY2UgdHJhbnNpdGlvbiBzdGF0ZXMgYXMgd2VsbC5cbiAqXG4gKiAtLS1cbiAqXG4gKiAqKk5vdGUqKjogYFRyYW5zaXRpb25gIGlzIGEgcGxhdGZvcm0tYWdub3N0aWMgYmFzZSBjb21wb25lbnQuIElmIHlvdSdyZSB1c2luZ1xuICogdHJhbnNpdGlvbnMgaW4gQ1NTLCB5b3UnbGwgcHJvYmFibHkgd2FudCB0byB1c2VcbiAqIFtgQ1NTVHJhbnNpdGlvbmBdKGh0dHBzOi8vcmVhY3Rjb21tdW5pdHkub3JnL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvY3NzLXRyYW5zaXRpb24pXG4gKiBpbnN0ZWFkLiBJdCBpbmhlcml0cyBhbGwgdGhlIGZlYXR1cmVzIG9mIGBUcmFuc2l0aW9uYCwgYnV0IGNvbnRhaW5zXG4gKiBhZGRpdGlvbmFsIGZlYXR1cmVzIG5lY2Vzc2FyeSB0byBwbGF5IG5pY2Ugd2l0aCBDU1MgdHJhbnNpdGlvbnMgKGhlbmNlIHRoZVxuICogbmFtZSBvZiB0aGUgY29tcG9uZW50KS5cbiAqXG4gKiAtLS1cbiAqXG4gKiBCeSBkZWZhdWx0IHRoZSBgVHJhbnNpdGlvbmAgY29tcG9uZW50IGRvZXMgbm90IGFsdGVyIHRoZSBiZWhhdmlvciBvZiB0aGVcbiAqIGNvbXBvbmVudCBpdCByZW5kZXJzLCBpdCBvbmx5IHRyYWNrcyBcImVudGVyXCIgYW5kIFwiZXhpdFwiIHN0YXRlcyBmb3IgdGhlXG4gKiBjb21wb25lbnRzLiBJdCdzIHVwIHRvIHlvdSB0byBnaXZlIG1lYW5pbmcgYW5kIGVmZmVjdCB0byB0aG9zZSBzdGF0ZXMuIEZvclxuICogZXhhbXBsZSB3ZSBjYW4gYWRkIHN0eWxlcyB0byBhIGNvbXBvbmVudCB3aGVuIGl0IGVudGVycyBvciBleGl0czpcbiAqXG4gKiBgYGBqc3hcbiAqIGltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbiAqXG4gKiBjb25zdCBkdXJhdGlvbiA9IDMwMDtcbiAqXG4gKiBjb25zdCBkZWZhdWx0U3R5bGUgPSB7XG4gKiAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7ZHVyYXRpb259bXMgZWFzZS1pbi1vdXRgLFxuICogICBvcGFjaXR5OiAwLFxuICogfVxuICpcbiAqIGNvbnN0IHRyYW5zaXRpb25TdHlsZXMgPSB7XG4gKiAgIGVudGVyaW5nOiB7IG9wYWNpdHk6IDEgfSxcbiAqICAgZW50ZXJlZDogIHsgb3BhY2l0eTogMSB9LFxuICogICBleGl0aW5nOiAgeyBvcGFjaXR5OiAwIH0sXG4gKiAgIGV4aXRlZDogIHsgb3BhY2l0eTogMCB9LFxuICogfTtcbiAqXG4gKiBjb25zdCBGYWRlID0gKHsgaW46IGluUHJvcCB9KSA9PiAoXG4gKiAgIDxUcmFuc2l0aW9uIGluPXtpblByb3B9IHRpbWVvdXQ9e2R1cmF0aW9ufT5cbiAqICAgICB7c3RhdGUgPT4gKFxuICogICAgICAgPGRpdiBzdHlsZT17e1xuICogICAgICAgICAuLi5kZWZhdWx0U3R5bGUsXG4gKiAgICAgICAgIC4uLnRyYW5zaXRpb25TdHlsZXNbc3RhdGVdXG4gKiAgICAgICB9fT5cbiAqICAgICAgICAgSSdtIGEgZmFkZSBUcmFuc2l0aW9uIVxuICogICAgICAgPC9kaXY+XG4gKiAgICAgKX1cbiAqICAgPC9UcmFuc2l0aW9uPlxuICogKTtcbiAqIGBgYFxuICpcbiAqIFRoZXJlIGFyZSA0IG1haW4gc3RhdGVzIGEgVHJhbnNpdGlvbiBjYW4gYmUgaW46XG4gKiAgLSBgJ2VudGVyaW5nJ2BcbiAqICAtIGAnZW50ZXJlZCdgXG4gKiAgLSBgJ2V4aXRpbmcnYFxuICogIC0gYCdleGl0ZWQnYFxuICpcbiAqIFRyYW5zaXRpb24gc3RhdGUgaXMgdG9nZ2xlZCB2aWEgdGhlIGBpbmAgcHJvcC4gV2hlbiBgdHJ1ZWAgdGhlIGNvbXBvbmVudFxuICogYmVnaW5zIHRoZSBcIkVudGVyXCIgc3RhZ2UuIER1cmluZyB0aGlzIHN0YWdlLCB0aGUgY29tcG9uZW50IHdpbGwgc2hpZnQgZnJvbVxuICogaXRzIGN1cnJlbnQgdHJhbnNpdGlvbiBzdGF0ZSwgdG8gYCdlbnRlcmluZydgIGZvciB0aGUgZHVyYXRpb24gb2YgdGhlXG4gKiB0cmFuc2l0aW9uIGFuZCB0aGVuIHRvIHRoZSBgJ2VudGVyZWQnYCBzdGFnZSBvbmNlIGl0J3MgY29tcGxldGUuIExldCdzIHRha2VcbiAqIHRoZSBmb2xsb3dpbmcgZXhhbXBsZSAod2UnbGwgdXNlIHRoZVxuICogW3VzZVN0YXRlXShodHRwczovL3JlYWN0anMub3JnL2RvY3MvaG9va3MtcmVmZXJlbmNlLmh0bWwjdXNlc3RhdGUpIGhvb2spOlxuICpcbiAqIGBgYGpzeFxuICogZnVuY3Rpb24gQXBwKCkge1xuICogICBjb25zdCBbaW5Qcm9wLCBzZXRJblByb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xuICogICByZXR1cm4gKFxuICogICAgIDxkaXY+XG4gKiAgICAgICA8VHJhbnNpdGlvbiBpbj17aW5Qcm9wfSB0aW1lb3V0PXs1MDB9PlxuICogICAgICAgICB7c3RhdGUgPT4gKFxuICogICAgICAgICAgIC8vIC4uLlxuICogICAgICAgICApfVxuICogICAgICAgPC9UcmFuc2l0aW9uPlxuICogICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJblByb3AodHJ1ZSl9PlxuICogICAgICAgICBDbGljayB0byBFbnRlclxuICogICAgICAgPC9idXR0b24+XG4gKiAgICAgPC9kaXY+XG4gKiAgICk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBXaGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZCB0aGUgY29tcG9uZW50IHdpbGwgc2hpZnQgdG8gdGhlIGAnZW50ZXJpbmcnYCBzdGF0ZVxuICogYW5kIHN0YXkgdGhlcmUgZm9yIDUwMG1zICh0aGUgdmFsdWUgb2YgYHRpbWVvdXRgKSBiZWZvcmUgaXQgZmluYWxseSBzd2l0Y2hlc1xuICogdG8gYCdlbnRlcmVkJ2AuXG4gKlxuICogV2hlbiBgaW5gIGlzIGBmYWxzZWAgdGhlIHNhbWUgdGhpbmcgaGFwcGVucyBleGNlcHQgdGhlIHN0YXRlIG1vdmVzIGZyb21cbiAqIGAnZXhpdGluZydgIHRvIGAnZXhpdGVkJ2AuXG4gKi9cblxudmFyIFRyYW5zaXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVHJhbnNpdGlvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVHJhbnNpdGlvbihwcm9wcywgY29udGV4dCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSB8fCB0aGlzO1xuICAgIHZhciBwYXJlbnRHcm91cCA9IGNvbnRleHQ7IC8vIEluIHRoZSBjb250ZXh0IG9mIGEgVHJhbnNpdGlvbkdyb3VwIGFsbCBlbnRlcnMgYXJlIHJlYWxseSBhcHBlYXJzXG5cbiAgICB2YXIgYXBwZWFyID0gcGFyZW50R3JvdXAgJiYgIXBhcmVudEdyb3VwLmlzTW91bnRpbmcgPyBwcm9wcy5lbnRlciA6IHByb3BzLmFwcGVhcjtcbiAgICB2YXIgaW5pdGlhbFN0YXR1cztcbiAgICBfdGhpcy5hcHBlYXJTdGF0dXMgPSBudWxsO1xuXG4gICAgaWYgKHByb3BzLmluKSB7XG4gICAgICBpZiAoYXBwZWFyKSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBFWElURUQ7XG4gICAgICAgIF90aGlzLmFwcGVhclN0YXR1cyA9IEVOVEVSSU5HO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IEVOVEVSRUQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcm9wcy51bm1vdW50T25FeGl0IHx8IHByb3BzLm1vdW50T25FbnRlcikge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gVU5NT1VOVEVEO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IEVYSVRFRDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0YXR1czogaW5pdGlhbFN0YXR1c1xuICAgIH07XG4gICAgX3RoaXMubmV4dENhbGxiYWNrID0gbnVsbDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBUcmFuc2l0aW9uLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhfcmVmLCBwcmV2U3RhdGUpIHtcbiAgICB2YXIgbmV4dEluID0gX3JlZi5pbjtcblxuICAgIGlmIChuZXh0SW4gJiYgcHJldlN0YXRlLnN0YXR1cyA9PT0gVU5NT1VOVEVEKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6IEVYSVRFRFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSAvLyBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgLy8gICBsZXQgbmV4dFN0YXR1cyA9IG51bGxcbiAgLy8gICBpZiAocHJldlByb3BzICE9PSB0aGlzLnByb3BzKSB7XG4gIC8vICAgICBjb25zdCB7IHN0YXR1cyB9ID0gdGhpcy5zdGF0ZVxuICAvLyAgICAgaWYgKHRoaXMucHJvcHMuaW4pIHtcbiAgLy8gICAgICAgaWYgKHN0YXR1cyAhPT0gRU5URVJJTkcgJiYgc3RhdHVzICE9PSBFTlRFUkVEKSB7XG4gIC8vICAgICAgICAgbmV4dFN0YXR1cyA9IEVOVEVSSU5HXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0gZWxzZSB7XG4gIC8vICAgICAgIGlmIChzdGF0dXMgPT09IEVOVEVSSU5HIHx8IHN0YXR1cyA9PT0gRU5URVJFRCkge1xuICAvLyAgICAgICAgIG5leHRTdGF0dXMgPSBFWElUSU5HXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIHsgbmV4dFN0YXR1cyB9XG4gIC8vIH1cbiAgO1xuXG4gIHZhciBfcHJvdG8gPSBUcmFuc2l0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXR1cyh0cnVlLCB0aGlzLmFwcGVhclN0YXR1cyk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICB2YXIgbmV4dFN0YXR1cyA9IG51bGw7XG5cbiAgICBpZiAocHJldlByb3BzICE9PSB0aGlzLnByb3BzKSB7XG4gICAgICB2YXIgc3RhdHVzID0gdGhpcy5zdGF0ZS5zdGF0dXM7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmluKSB7XG4gICAgICAgIGlmIChzdGF0dXMgIT09IEVOVEVSSU5HICYmIHN0YXR1cyAhPT0gRU5URVJFRCkge1xuICAgICAgICAgIG5leHRTdGF0dXMgPSBFTlRFUklORztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gRU5URVJJTkcgfHwgc3RhdHVzID09PSBFTlRFUkVEKSB7XG4gICAgICAgICAgbmV4dFN0YXR1cyA9IEVYSVRJTkc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVN0YXR1cyhmYWxzZSwgbmV4dFN0YXR1cyk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5jYW5jZWxOZXh0Q2FsbGJhY2soKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0VGltZW91dHMgPSBmdW5jdGlvbiBnZXRUaW1lb3V0cygpIHtcbiAgICB2YXIgdGltZW91dCA9IHRoaXMucHJvcHMudGltZW91dDtcbiAgICB2YXIgZXhpdCwgZW50ZXIsIGFwcGVhcjtcbiAgICBleGl0ID0gZW50ZXIgPSBhcHBlYXIgPSB0aW1lb3V0O1xuXG4gICAgaWYgKHRpbWVvdXQgIT0gbnVsbCAmJiB0eXBlb2YgdGltZW91dCAhPT0gJ251bWJlcicpIHtcbiAgICAgIGV4aXQgPSB0aW1lb3V0LmV4aXQ7XG4gICAgICBlbnRlciA9IHRpbWVvdXQuZW50ZXI7IC8vIFRPRE86IHJlbW92ZSBmYWxsYmFjayBmb3IgbmV4dCBtYWpvclxuXG4gICAgICBhcHBlYXIgPSB0aW1lb3V0LmFwcGVhciAhPT0gdW5kZWZpbmVkID8gdGltZW91dC5hcHBlYXIgOiBlbnRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZXhpdDogZXhpdCxcbiAgICAgIGVudGVyOiBlbnRlcixcbiAgICAgIGFwcGVhcjogYXBwZWFyXG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlU3RhdHVzID0gZnVuY3Rpb24gdXBkYXRlU3RhdHVzKG1vdW50aW5nLCBuZXh0U3RhdHVzKSB7XG4gICAgaWYgKG1vdW50aW5nID09PSB2b2lkIDApIHtcbiAgICAgIG1vdW50aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG5leHRTdGF0dXMgIT09IG51bGwpIHtcbiAgICAgIC8vIG5leHRTdGF0dXMgd2lsbCBhbHdheXMgYmUgRU5URVJJTkcgb3IgRVhJVElORy5cbiAgICAgIHRoaXMuY2FuY2VsTmV4dENhbGxiYWNrKCk7XG5cbiAgICAgIGlmIChuZXh0U3RhdHVzID09PSBFTlRFUklORykge1xuICAgICAgICB0aGlzLnBlcmZvcm1FbnRlcihtb3VudGluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBlcmZvcm1FeGl0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnVubW91bnRPbkV4aXQgJiYgdGhpcy5zdGF0ZS5zdGF0dXMgPT09IEVYSVRFRCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN0YXR1czogVU5NT1VOVEVEXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnBlcmZvcm1FbnRlciA9IGZ1bmN0aW9uIHBlcmZvcm1FbnRlcihtb3VudGluZykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGVudGVyID0gdGhpcy5wcm9wcy5lbnRlcjtcbiAgICB2YXIgYXBwZWFyaW5nID0gdGhpcy5jb250ZXh0ID8gdGhpcy5jb250ZXh0LmlzTW91bnRpbmcgOiBtb3VudGluZztcblxuICAgIHZhciBfcmVmMiA9IHRoaXMucHJvcHMubm9kZVJlZiA/IFthcHBlYXJpbmddIDogW1JlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLCBhcHBlYXJpbmddLFxuICAgICAgICBtYXliZU5vZGUgPSBfcmVmMlswXSxcbiAgICAgICAgbWF5YmVBcHBlYXJpbmcgPSBfcmVmMlsxXTtcblxuICAgIHZhciB0aW1lb3V0cyA9IHRoaXMuZ2V0VGltZW91dHMoKTtcbiAgICB2YXIgZW50ZXJUaW1lb3V0ID0gYXBwZWFyaW5nID8gdGltZW91dHMuYXBwZWFyIDogdGltZW91dHMuZW50ZXI7IC8vIG5vIGVudGVyIGFuaW1hdGlvbiBza2lwIHJpZ2h0IHRvIEVOVEVSRURcbiAgICAvLyBpZiB3ZSBhcmUgbW91bnRpbmcgYW5kIHJ1bm5pbmcgdGhpcyBpdCBtZWFucyBhcHBlYXIgX211c3RfIGJlIHNldFxuXG4gICAgaWYgKCFtb3VudGluZyAmJiAhZW50ZXIgfHwgY29uZmlnLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICAgIHN0YXR1czogRU5URVJFRFxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIucHJvcHMub25FbnRlcmVkKG1heWJlTm9kZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uRW50ZXIobWF5YmVOb2RlLCBtYXliZUFwcGVhcmluZyk7XG4gICAgdGhpcy5zYWZlU2V0U3RhdGUoe1xuICAgICAgc3RhdHVzOiBFTlRFUklOR1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMi5wcm9wcy5vbkVudGVyaW5nKG1heWJlTm9kZSwgbWF5YmVBcHBlYXJpbmcpO1xuXG4gICAgICBfdGhpczIub25UcmFuc2l0aW9uRW5kKGVudGVyVGltZW91dCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuc2FmZVNldFN0YXRlKHtcbiAgICAgICAgICBzdGF0dXM6IEVOVEVSRURcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5wcm9wcy5vbkVudGVyZWQobWF5YmVOb2RlLCBtYXliZUFwcGVhcmluZyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnBlcmZvcm1FeGl0ID0gZnVuY3Rpb24gcGVyZm9ybUV4aXQoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgZXhpdCA9IHRoaXMucHJvcHMuZXhpdDtcbiAgICB2YXIgdGltZW91dHMgPSB0aGlzLmdldFRpbWVvdXRzKCk7XG4gICAgdmFyIG1heWJlTm9kZSA9IHRoaXMucHJvcHMubm9kZVJlZiA/IHVuZGVmaW5lZCA6IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpOyAvLyBubyBleGl0IGFuaW1hdGlvbiBza2lwIHJpZ2h0IHRvIEVYSVRFRFxuXG4gICAgaWYgKCFleGl0IHx8IGNvbmZpZy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5zYWZlU2V0U3RhdGUoe1xuICAgICAgICBzdGF0dXM6IEVYSVRFRFxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMucHJvcHMub25FeGl0ZWQobWF5YmVOb2RlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25FeGl0KG1heWJlTm9kZSk7XG4gICAgdGhpcy5zYWZlU2V0U3RhdGUoe1xuICAgICAgc3RhdHVzOiBFWElUSU5HXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMzLnByb3BzLm9uRXhpdGluZyhtYXliZU5vZGUpO1xuXG4gICAgICBfdGhpczMub25UcmFuc2l0aW9uRW5kKHRpbWVvdXRzLmV4aXQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICAgICAgc3RhdHVzOiBFWElURURcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRlZChtYXliZU5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5jYW5jZWxOZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiBjYW5jZWxOZXh0Q2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMubmV4dENhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm5leHRDYWxsYmFjay5jYW5jZWwoKTtcbiAgICAgIHRoaXMubmV4dENhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNhZmVTZXRTdGF0ZSA9IGZ1bmN0aW9uIHNhZmVTZXRTdGF0ZShuZXh0U3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgLy8gVGhpcyBzaG91bGRuJ3QgYmUgbmVjZXNzYXJ5LCBidXQgdGhlcmUgYXJlIHdlaXJkIHJhY2UgY29uZGl0aW9ucyB3aXRoXG4gICAgLy8gc2V0U3RhdGUgY2FsbGJhY2tzIGFuZCB1bm1vdW50aW5nIGluIHRlc3RpbmcsIHNvIGFsd2F5cyBtYWtlIHN1cmUgdGhhdFxuICAgIC8vIHdlIGNhbiBjYW5jZWwgYW55IHBlbmRpbmcgc2V0U3RhdGUgY2FsbGJhY2tzIGFmdGVyIHdlIHVubW91bnQuXG4gICAgY2FsbGJhY2sgPSB0aGlzLnNldE5leHRDYWxsYmFjayhjYWxsYmFjayk7XG4gICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUsIGNhbGxiYWNrKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0TmV4dENhbGxiYWNrID0gZnVuY3Rpb24gc2V0TmV4dENhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgYWN0aXZlID0gdHJ1ZTtcblxuICAgIHRoaXMubmV4dENhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBfdGhpczQubmV4dENhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm5leHRDYWxsYmFjay5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMubmV4dENhbGxiYWNrO1xuICB9O1xuXG4gIF9wcm90by5vblRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQodGltZW91dCwgaGFuZGxlcikge1xuICAgIHRoaXMuc2V0TmV4dENhbGxiYWNrKGhhbmRsZXIpO1xuICAgIHZhciBub2RlID0gdGhpcy5wcm9wcy5ub2RlUmVmID8gdGhpcy5wcm9wcy5ub2RlUmVmLmN1cnJlbnQgOiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICB2YXIgZG9lc05vdEhhdmVUaW1lb3V0T3JMaXN0ZW5lciA9IHRpbWVvdXQgPT0gbnVsbCAmJiAhdGhpcy5wcm9wcy5hZGRFbmRMaXN0ZW5lcjtcblxuICAgIGlmICghbm9kZSB8fCBkb2VzTm90SGF2ZVRpbWVvdXRPckxpc3RlbmVyKSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMubmV4dENhbGxiYWNrLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5hZGRFbmRMaXN0ZW5lcikge1xuICAgICAgdmFyIF9yZWYzID0gdGhpcy5wcm9wcy5ub2RlUmVmID8gW3RoaXMubmV4dENhbGxiYWNrXSA6IFtub2RlLCB0aGlzLm5leHRDYWxsYmFja10sXG4gICAgICAgICAgbWF5YmVOb2RlID0gX3JlZjNbMF0sXG4gICAgICAgICAgbWF5YmVOZXh0Q2FsbGJhY2sgPSBfcmVmM1sxXTtcblxuICAgICAgdGhpcy5wcm9wcy5hZGRFbmRMaXN0ZW5lcihtYXliZU5vZGUsIG1heWJlTmV4dENhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBpZiAodGltZW91dCAhPSBudWxsKSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMubmV4dENhbGxiYWNrLCB0aW1lb3V0KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgc3RhdHVzID0gdGhpcy5zdGF0ZS5zdGF0dXM7XG5cbiAgICBpZiAoc3RhdHVzID09PSBVTk1PVU5URUQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIF9pbiA9IF90aGlzJHByb3BzLmluLFxuICAgICAgICBfbW91bnRPbkVudGVyID0gX3RoaXMkcHJvcHMubW91bnRPbkVudGVyLFxuICAgICAgICBfdW5tb3VudE9uRXhpdCA9IF90aGlzJHByb3BzLnVubW91bnRPbkV4aXQsXG4gICAgICAgIF9hcHBlYXIgPSBfdGhpcyRwcm9wcy5hcHBlYXIsXG4gICAgICAgIF9lbnRlciA9IF90aGlzJHByb3BzLmVudGVyLFxuICAgICAgICBfZXhpdCA9IF90aGlzJHByb3BzLmV4aXQsXG4gICAgICAgIF90aW1lb3V0ID0gX3RoaXMkcHJvcHMudGltZW91dCxcbiAgICAgICAgX2FkZEVuZExpc3RlbmVyID0gX3RoaXMkcHJvcHMuYWRkRW5kTGlzdGVuZXIsXG4gICAgICAgIF9vbkVudGVyID0gX3RoaXMkcHJvcHMub25FbnRlcixcbiAgICAgICAgX29uRW50ZXJpbmcgPSBfdGhpcyRwcm9wcy5vbkVudGVyaW5nLFxuICAgICAgICBfb25FbnRlcmVkID0gX3RoaXMkcHJvcHMub25FbnRlcmVkLFxuICAgICAgICBfb25FeGl0ID0gX3RoaXMkcHJvcHMub25FeGl0LFxuICAgICAgICBfb25FeGl0aW5nID0gX3RoaXMkcHJvcHMub25FeGl0aW5nLFxuICAgICAgICBfb25FeGl0ZWQgPSBfdGhpcyRwcm9wcy5vbkV4aXRlZCxcbiAgICAgICAgX25vZGVSZWYgPSBfdGhpcyRwcm9wcy5ub2RlUmVmLFxuICAgICAgICBjaGlsZFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiaW5cIiwgXCJtb3VudE9uRW50ZXJcIiwgXCJ1bm1vdW50T25FeGl0XCIsIFwiYXBwZWFyXCIsIFwiZW50ZXJcIiwgXCJleGl0XCIsIFwidGltZW91dFwiLCBcImFkZEVuZExpc3RlbmVyXCIsIFwib25FbnRlclwiLCBcIm9uRW50ZXJpbmdcIiwgXCJvbkVudGVyZWRcIiwgXCJvbkV4aXRcIiwgXCJvbkV4aXRpbmdcIiwgXCJvbkV4aXRlZFwiLCBcIm5vZGVSZWZcIl0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIC8qI19fUFVSRV9fKi9cbiAgICAgIC8vIGFsbG93cyBmb3IgbmVzdGVkIFRyYW5zaXRpb25zXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Hcm91cENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgIH0sIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJyA/IGNoaWxkcmVuKHN0YXR1cywgY2hpbGRQcm9wcykgOiBSZWFjdC5jbG9uZUVsZW1lbnQoUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbiksIGNoaWxkUHJvcHMpKVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIFRyYW5zaXRpb247XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblRyYW5zaXRpb24uY29udGV4dFR5cGUgPSBUcmFuc2l0aW9uR3JvdXBDb250ZXh0O1xuVHJhbnNpdGlvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBBIFJlYWN0IHJlZmVyZW5jZSB0byBET00gZWxlbWVudCB0aGF0IG5lZWQgdG8gdHJhbnNpdGlvbjpcbiAgICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzUxMTI3MTMwLzQ2NzE5MzJcbiAgICpcbiAgICogICAtIFdoZW4gYG5vZGVSZWZgIHByb3AgaXMgdXNlZCwgYG5vZGVgIGlzIG5vdCBwYXNzZWQgdG8gY2FsbGJhY2sgZnVuY3Rpb25zXG4gICAqICAgICAgKGUuZy4gYG9uRW50ZXJgKSBiZWNhdXNlIHVzZXIgYWxyZWFkeSBoYXMgZGlyZWN0IGFjY2VzcyB0byB0aGUgbm9kZS5cbiAgICogICAtIFdoZW4gY2hhbmdpbmcgYGtleWAgcHJvcCBvZiBgVHJhbnNpdGlvbmAgaW4gYSBgVHJhbnNpdGlvbkdyb3VwYCBhIG5ld1xuICAgKiAgICAgYG5vZGVSZWZgIG5lZWQgdG8gYmUgcHJvdmlkZWQgdG8gYFRyYW5zaXRpb25gIHdpdGggY2hhbmdlZCBga2V5YCBwcm9wXG4gICAqICAgICAoc2VlXG4gICAqICAgICBbdGVzdC9DU1NUcmFuc2l0aW9uLXRlc3QuanNdKGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvYmxvYi8xMzQzNWY4OTdiM2FiNzFmNmUxOWQ3MjRmMTQ1NTk2ZjU5MTA1ODFjL3Rlc3QvQ1NTVHJhbnNpdGlvbi10ZXN0LmpzI0wzNjItTDQzNykpLlxuICAgKi9cbiAgbm9kZVJlZjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjdXJyZW50OiB0eXBlb2YgRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgPyBQcm9wVHlwZXMuYW55IDogUHJvcFR5cGVzLmluc3RhbmNlT2YoRWxlbWVudClcbiAgfSksXG5cbiAgLyoqXG4gICAqIEEgYGZ1bmN0aW9uYCBjaGlsZCBjYW4gYmUgdXNlZCBpbnN0ZWFkIG9mIGEgUmVhY3QgZWxlbWVudC4gVGhpcyBmdW5jdGlvbiBpc1xuICAgKiBjYWxsZWQgd2l0aCB0aGUgY3VycmVudCB0cmFuc2l0aW9uIHN0YXR1cyAoYCdlbnRlcmluZydgLCBgJ2VudGVyZWQnYCxcbiAgICogYCdleGl0aW5nJ2AsIGAnZXhpdGVkJ2ApLCB3aGljaCBjYW4gYmUgdXNlZCB0byBhcHBseSBjb250ZXh0XG4gICAqIHNwZWNpZmljIHByb3BzIHRvIGEgY29tcG9uZW50LlxuICAgKlxuICAgKiBgYGBqc3hcbiAgICogPFRyYW5zaXRpb24gaW49e3RoaXMuc3RhdGUuaW59IHRpbWVvdXQ9ezE1MH0+XG4gICAqICAge3N0YXRlID0+IChcbiAgICogICAgIDxNeUNvbXBvbmVudCBjbGFzc05hbWU9e2BmYWRlIGZhZGUtJHtzdGF0ZX1gfSAvPlxuICAgKiAgICl9XG4gICAqIDwvVHJhbnNpdGlvbj5cbiAgICogYGBgXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZF0pLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIGNvbXBvbmVudDsgdHJpZ2dlcnMgdGhlIGVudGVyIG9yIGV4aXQgc3RhdGVzXG4gICAqL1xuICBpbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQgdGhlIGNoaWxkIGNvbXBvbmVudCBpcyBtb3VudGVkIGltbWVkaWF0ZWx5IGFsb25nIHdpdGhcbiAgICogdGhlIHBhcmVudCBgVHJhbnNpdGlvbmAgY29tcG9uZW50LiBJZiB5b3Ugd2FudCB0byBcImxhenkgbW91bnRcIiB0aGUgY29tcG9uZW50IG9uIHRoZVxuICAgKiBmaXJzdCBgaW49e3RydWV9YCB5b3UgY2FuIHNldCBgbW91bnRPbkVudGVyYC4gQWZ0ZXIgdGhlIGZpcnN0IGVudGVyIHRyYW5zaXRpb24gdGhlIGNvbXBvbmVudCB3aWxsIHN0YXlcbiAgICogbW91bnRlZCwgZXZlbiBvbiBcImV4aXRlZFwiLCB1bmxlc3MgeW91IGFsc28gc3BlY2lmeSBgdW5tb3VudE9uRXhpdGAuXG4gICAqL1xuICBtb3VudE9uRW50ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0IHRoZSBjaGlsZCBjb21wb25lbnQgc3RheXMgbW91bnRlZCBhZnRlciBpdCByZWFjaGVzIHRoZSBgJ2V4aXRlZCdgIHN0YXRlLlxuICAgKiBTZXQgYHVubW91bnRPbkV4aXRgIGlmIHlvdSdkIHByZWZlciB0byB1bm1vdW50IHRoZSBjb21wb25lbnQgYWZ0ZXIgaXQgZmluaXNoZXMgZXhpdGluZy5cbiAgICovXG4gIHVubW91bnRPbkV4aXQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0IHRoZSBjaGlsZCBjb21wb25lbnQgZG9lcyBub3QgcGVyZm9ybSB0aGUgZW50ZXIgdHJhbnNpdGlvbiB3aGVuXG4gICAqIGl0IGZpcnN0IG1vdW50cywgcmVnYXJkbGVzcyBvZiB0aGUgdmFsdWUgb2YgYGluYC4gSWYgeW91IHdhbnQgdGhpc1xuICAgKiBiZWhhdmlvciwgc2V0IGJvdGggYGFwcGVhcmAgYW5kIGBpbmAgdG8gYHRydWVgLlxuICAgKlxuICAgKiA+ICoqTm90ZSoqOiB0aGVyZSBhcmUgbm8gc3BlY2lhbCBhcHBlYXIgc3RhdGVzIGxpa2UgYGFwcGVhcmluZ2AvYGFwcGVhcmVkYCwgdGhpcyBwcm9wXG4gICAqID4gb25seSBhZGRzIGFuIGFkZGl0aW9uYWwgZW50ZXIgdHJhbnNpdGlvbi4gSG93ZXZlciwgaW4gdGhlXG4gICAqID4gYDxDU1NUcmFuc2l0aW9uPmAgY29tcG9uZW50IHRoYXQgZmlyc3QgZW50ZXIgdHJhbnNpdGlvbiBkb2VzIHJlc3VsdCBpblxuICAgKiA+IGFkZGl0aW9uYWwgYC5hcHBlYXItKmAgY2xhc3NlcywgdGhhdCB3YXkgeW91IGNhbiBjaG9vc2UgdG8gc3R5bGUgaXRcbiAgICogPiBkaWZmZXJlbnRseS5cbiAgICovXG4gIGFwcGVhcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIGVudGVyIHRyYW5zaXRpb25zLlxuICAgKi9cbiAgZW50ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBleGl0IHRyYW5zaXRpb25zLlxuICAgKi9cbiAgZXhpdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBkdXJhdGlvbiBvZiB0aGUgdHJhbnNpdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxuICAgKiBSZXF1aXJlZCB1bmxlc3MgYGFkZEVuZExpc3RlbmVyYCBpcyBwcm92aWRlZC5cbiAgICpcbiAgICogWW91IG1heSBzcGVjaWZ5IGEgc2luZ2xlIHRpbWVvdXQgZm9yIGFsbCB0cmFuc2l0aW9uczpcbiAgICpcbiAgICogYGBganN4XG4gICAqIHRpbWVvdXQ9ezUwMH1cbiAgICogYGBgXG4gICAqXG4gICAqIG9yIGluZGl2aWR1YWxseTpcbiAgICpcbiAgICogYGBganN4XG4gICAqIHRpbWVvdXQ9e3tcbiAgICogIGFwcGVhcjogNTAwLFxuICAgKiAgZW50ZXI6IDMwMCxcbiAgICogIGV4aXQ6IDUwMCxcbiAgICogfX1cbiAgICogYGBgXG4gICAqXG4gICAqIC0gYGFwcGVhcmAgZGVmYXVsdHMgdG8gdGhlIHZhbHVlIG9mIGBlbnRlcmBcbiAgICogLSBgZW50ZXJgIGRlZmF1bHRzIHRvIGAwYFxuICAgKiAtIGBleGl0YCBkZWZhdWx0cyB0byBgMGBcbiAgICpcbiAgICogQHR5cGUge251bWJlciB8IHsgZW50ZXI/OiBudW1iZXIsIGV4aXQ/OiBudW1iZXIsIGFwcGVhcj86IG51bWJlciB9fVxuICAgKi9cbiAgdGltZW91dDogZnVuY3Rpb24gdGltZW91dChwcm9wcykge1xuICAgIHZhciBwdCA9IHRpbWVvdXRzU2hhcGU7XG4gICAgaWYgKCFwcm9wcy5hZGRFbmRMaXN0ZW5lcikgcHQgPSBwdC5pc1JlcXVpcmVkO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHB0LmFwcGx5KHZvaWQgMCwgW3Byb3BzXS5jb25jYXQoYXJncykpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBZGQgYSBjdXN0b20gdHJhbnNpdGlvbiBlbmQgdHJpZ2dlci4gQ2FsbGVkIHdpdGggdGhlIHRyYW5zaXRpb25pbmdcbiAgICogRE9NIG5vZGUgYW5kIGEgYGRvbmVgIGNhbGxiYWNrLiBBbGxvd3MgZm9yIG1vcmUgZmluZSBncmFpbmVkIHRyYW5zaXRpb24gZW5kXG4gICAqIGxvZ2ljLiBUaW1lb3V0cyBhcmUgc3RpbGwgdXNlZCBhcyBhIGZhbGxiYWNrIGlmIHByb3ZpZGVkLlxuICAgKlxuICAgKiAqKk5vdGUqKjogd2hlbiBgbm9kZVJlZmAgcHJvcCBpcyBwYXNzZWQsIGBub2RlYCBpcyBub3QgcGFzc2VkLlxuICAgKlxuICAgKiBgYGBqc3hcbiAgICogYWRkRW5kTGlzdGVuZXI9eyhub2RlLCBkb25lKSA9PiB7XG4gICAqICAgLy8gdXNlIHRoZSBjc3MgdHJhbnNpdGlvbmVuZCBldmVudCB0byBtYXJrIHRoZSBmaW5pc2ggb2YgYSB0cmFuc2l0aW9uXG4gICAqICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZG9uZSwgZmFsc2UpO1xuICAgKiB9fVxuICAgKiBgYGBcbiAgICovXG4gIGFkZEVuZExpc3RlbmVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBcImVudGVyaW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuIEFuIGV4dHJhIHBhcmFtZXRlclxuICAgKiBgaXNBcHBlYXJpbmdgIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZSBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnRcbiAgICpcbiAgICogKipOb3RlKio6IHdoZW4gYG5vZGVSZWZgIHByb3AgaXMgcGFzc2VkLCBgbm9kZWAgaXMgbm90IHBhc3NlZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKSAtPiB2b2lkXG4gICAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZW50ZXJpbmdcIiBzdGF0dXMgaXMgYXBwbGllZC4gQW4gZXh0cmEgcGFyYW1ldGVyXG4gICAqIGBpc0FwcGVhcmluZ2AgaXMgc3VwcGxpZWQgdG8gaW5kaWNhdGUgaWYgdGhlIGVudGVyIHN0YWdlIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudFxuICAgKlxuICAgKiAqKk5vdGUqKjogd2hlbiBgbm9kZVJlZmAgcHJvcCBpcyBwYXNzZWQsIGBub2RlYCBpcyBub3QgcGFzc2VkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZW50ZXJlZFwiIHN0YXR1cyBpcyBhcHBsaWVkLiBBbiBleHRyYSBwYXJhbWV0ZXJcbiAgICogYGlzQXBwZWFyaW5nYCBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2UgaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50XG4gICAqXG4gICAqICoqTm90ZSoqOiB3aGVuIGBub2RlUmVmYCBwcm9wIGlzIHBhc3NlZCwgYG5vZGVgIGlzIG5vdCBwYXNzZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbCkgLT4gdm9pZFxuICAgKi9cbiAgb25FbnRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBcImV4aXRpbmdcIiBzdGF0dXMgaXMgYXBwbGllZC5cbiAgICpcbiAgICogKipOb3RlKio6IHdoZW4gYG5vZGVSZWZgIHByb3AgaXMgcGFzc2VkLCBgbm9kZWAgaXMgbm90IHBhc3NlZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpIC0+IHZvaWRcbiAgICovXG4gIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImV4aXRpbmdcIiBzdGF0dXMgaXMgYXBwbGllZC5cbiAgICpcbiAgICogKipOb3RlKio6IHdoZW4gYG5vZGVSZWZgIHByb3AgaXMgcGFzc2VkLCBgbm9kZWAgaXMgbm90IHBhc3NlZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpIC0+IHZvaWRcbiAgICovXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImV4aXRlZFwiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiAqKk5vdGUqKjogd2hlbiBgbm9kZVJlZmAgcHJvcCBpcyBwYXNzZWQsIGBub2RlYCBpcyBub3QgcGFzc2VkXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkXG4gICAqL1xuICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmNcbn0gOiB7fTsgLy8gTmFtZSB0aGUgZnVuY3Rpb24gc28gaXQgaXMgY2xlYXJlciBpbiB0aGUgZG9jdW1lbnRhdGlvblxuXG5mdW5jdGlvbiBub29wKCkge31cblxuVHJhbnNpdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGluOiBmYWxzZSxcbiAgbW91bnRPbkVudGVyOiBmYWxzZSxcbiAgdW5tb3VudE9uRXhpdDogZmFsc2UsXG4gIGFwcGVhcjogZmFsc2UsXG4gIGVudGVyOiB0cnVlLFxuICBleGl0OiB0cnVlLFxuICBvbkVudGVyOiBub29wLFxuICBvbkVudGVyaW5nOiBub29wLFxuICBvbkVudGVyZWQ6IG5vb3AsXG4gIG9uRXhpdDogbm9vcCxcbiAgb25FeGl0aW5nOiBub29wLFxuICBvbkV4aXRlZDogbm9vcFxufTtcblRyYW5zaXRpb24uVU5NT1VOVEVEID0gVU5NT1VOVEVEO1xuVHJhbnNpdGlvbi5FWElURUQgPSBFWElURUQ7XG5UcmFuc2l0aW9uLkVOVEVSSU5HID0gRU5URVJJTkc7XG5UcmFuc2l0aW9uLkVOVEVSRUQgPSBFTlRFUkVEO1xuVHJhbnNpdGlvbi5FWElUSU5HID0gRVhJVElORztcbmV4cG9ydCBkZWZhdWx0IFRyYW5zaXRpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9UcmFuc2l0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vVHJhbnNpdGlvbkdyb3VwQ29udGV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBnZXRSb3dCeVJvd0lkIH0gZnJvbSAnLi9yb3dzJztcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGlvblN1bW1hcnkgPSAoXG4gIGRhdGEgPSBbXSxcbiAga2V5RmllbGQsXG4gIHNlbGVjdGVkID0gW11cbikgPT4ge1xuICBsZXQgYWxsUm93c1NlbGVjdGVkID0gZGF0YS5sZW5ndGggPiAwO1xuICBsZXQgYWxsUm93c05vdFNlbGVjdGVkID0gdHJ1ZTtcblxuICBjb25zdCByb3dLZXlzID0gZGF0YS5tYXAoZCA9PiBfLmdldChkLCBrZXlGaWVsZCkpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0tleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBjdXJyID0gcm93S2V5c1tpXTtcbiAgICBpZiAodHlwZW9mIHNlbGVjdGVkLmZpbmQoeCA9PiB4ID09PSBjdXJyKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGFsbFJvd3NTZWxlY3RlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGxSb3dzTm90U2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhbGxSb3dzU2VsZWN0ZWQsXG4gICAgYWxsUm93c05vdFNlbGVjdGVkXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0YWJsZUtleXMgPSAoZGF0YSA9IFtdLCBrZXlGaWVsZCwgc2tpcHMgPSBbXSkgPT4ge1xuICBpZiAoc2tpcHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGRhdGEubWFwKHJvdyA9PiBfLmdldChyb3csIGtleUZpZWxkKSk7XG4gIH1cbiAgcmV0dXJuIGRhdGFcbiAgICAuZmlsdGVyKHJvdyA9PiAhXy5jb250YWlucyhza2lwcywgXy5nZXQocm93LCBrZXlGaWVsZCkpKVxuICAgIC5tYXAocm93ID0+IF8uZ2V0KHJvdywga2V5RmllbGQpKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1blNlbGVjdGFibGVLZXlzID0gKHNlbGVjdGVkLCBza2lwcyA9IFtdKSA9PiB7XG4gIGlmIChza2lwcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgcmV0dXJuIHNlbGVjdGVkLmZpbHRlcih4ID0+IF8uY29udGFpbnMoc2tpcHMsIHgpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RlZFJvd3MgPSAoZGF0YSA9IFtdLCBrZXlGaWVsZCwgc2VsZWN0ZWQpID0+XG4gIHNlbGVjdGVkLm1hcChrID0+IGdldFJvd0J5Um93SWQoZGF0YSwga2V5RmllbGQsIGspKS5maWx0ZXIoeCA9PiAhIXgpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9zZWxlY3Rpb24uanMiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcblxuY29uc3QgUm93VGVtcGxhdGUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHJlbmRlckNvbnRlbnQsXG4gICAgc2VsZWN0Um93LFxuICAgIGV4cGFuZFJvdyxcbiAgICBjZWxsRWwsXG4gICAgLi4ucmVzdFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaXNSZW5kZXJGdW5jdGlvbkNvbHVtbkluTGVmdCA9IChcbiAgICBwb3NpdGlvbiA9IENvbnN0LklORElDQVRPUl9QT1NJVElPTl9MRUZUXG4gICkgPT4gcG9zaXRpb24gPT09IENvbnN0LklORElDQVRPUl9QT1NJVElPTl9MRUZUO1xuXG4gIGNvbnN0IGNoaWxkcmVucyA9IHJlbmRlckNvbnRlbnQoKSB8fCBbXTtcblxuICBpZiAoc2VsZWN0Um93ICYmIHNlbGVjdFJvdy5oaWRlU2VsZWN0Q29sdW1uICE9PSB0cnVlKSB7XG4gICAgaWYgKGlzUmVuZGVyRnVuY3Rpb25Db2x1bW5JbkxlZnQoc2VsZWN0Um93LnNlbGVjdENvbHVtblBvc2l0aW9uKSkge1xuICAgICAgY2hpbGRyZW5zLnVuc2hpZnQoUmVhY3QuY3JlYXRlRWxlbWVudChjZWxsRWwsIHsga2V5OiAnc2VsZWN0aW9uJyB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkcmVucy5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoY2VsbEVsLCB7IGtleTogJ3NlbGVjdGlvbicgfSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChleHBhbmRSb3cuc2hvd0V4cGFuZENvbHVtbikge1xuICAgIGlmIChpc1JlbmRlckZ1bmN0aW9uQ29sdW1uSW5MZWZ0KGV4cGFuZFJvdy5leHBhbmRDb2x1bW5Qb3NpdGlvbikpIHtcbiAgICAgIGNoaWxkcmVucy51bnNoaWZ0KFJlYWN0LmNyZWF0ZUVsZW1lbnQoY2VsbEVsLCB7IGtleTogJ2V4cGFuc2lvbicgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZHJlbnMucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KGNlbGxFbCwgeyBrZXk6ICdleHBhbnNpb24nIH0pKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gPHRyIHsgLi4ucmVzdCB9PnsgY2hpbGRyZW5zIH08L3RyPjtcbn07XG5cblJvd1RlbXBsYXRlLnByb3BUeXBlcyA9IHtcbiAgcmVuZGVyQ29udGVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2VsbEVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNlbGVjdFJvdzogUHJvcFR5cGVzLm9iamVjdCxcbiAgZXhwYW5kUm93OiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb3dUZW1wbGF0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy9yb3ctdGVtcGxhdGUuanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuLyogZXNsaW50IHJlYWN0L25vLWFycmF5LWluZGV4LWtleTogMCAqL1xuLyogZXNsaW50IG5vLXBsdXNwbHVzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgQ2VsbCBmcm9tICcuLi9jZWxsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm93UHVyZUNvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgaWYgKHR5cGVvZiBuZXh0UHJvcHMuc2hvdWxkVXBkYXRlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIG5leHRQcm9wcy5zaG91bGRVcGRhdGU7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHJvdyxcbiAgICAgIGtleUZpZWxkLFxuICAgICAgY29sdW1ucyxcbiAgICAgIHJvd0luZGV4LFxuICAgICAgZWRpdGFibGUsXG4gICAgICBlZGl0aW5nUm93SWR4LFxuICAgICAgZWRpdGluZ0NvbElkeCxcbiAgICAgIG9uU3RhcnQsXG4gICAgICBjbGlja1RvRWRpdCxcbiAgICAgIGRiY2xpY2tUb0VkaXQsXG4gICAgICBFZGl0aW5nQ2VsbENvbXBvbmVudCxcbiAgICAgIHRhYkluZGV4U3RhcnRcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCB0YWJJbmRleCA9IHRhYkluZGV4U3RhcnQ7XG5cbiAgICByZXR1cm4gY29sdW1ucy5tYXAoKGNvbHVtbiwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHsgZGF0YUZpZWxkIH0gPSBjb2x1bW47XG4gICAgICBjb25zdCBjb250ZW50ID0gXy5nZXQocm93LCBkYXRhRmllbGQpO1xuICAgICAgaWYgKHJvd0luZGV4ID09PSBlZGl0aW5nUm93SWR4ICYmIGluZGV4ID09PSBlZGl0aW5nQ29sSWR4KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEVkaXRpbmdDZWxsQ29tcG9uZW50XG4gICAgICAgICAgICBrZXk9eyBgJHtjb250ZW50fS0ke2luZGV4fS1lZGl0aW5nYCB9XG4gICAgICAgICAgICByb3c9eyByb3cgfVxuICAgICAgICAgICAgcm93SW5kZXg9eyByb3dJbmRleCB9XG4gICAgICAgICAgICBjb2x1bW49eyBjb2x1bW4gfVxuICAgICAgICAgICAgY29sdW1uSW5kZXg9eyBpbmRleCB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIC8vIHJlbmRlciBjZWxsXG4gICAgICBsZXQgY2VsbFRpdGxlO1xuICAgICAgbGV0IGNlbGxTdHlsZSA9IHt9O1xuICAgICAgbGV0IGNlbGxBdHRycyA9IHtcbiAgICAgICAgLi4uXy5pc0Z1bmN0aW9uKGNvbHVtbi5hdHRycylcbiAgICAgICAgICA/IGNvbHVtbi5hdHRycyhjb250ZW50LCByb3csIHJvd0luZGV4LCBpbmRleClcbiAgICAgICAgICA6IGNvbHVtbi5hdHRyc1xuICAgICAgfTtcblxuICAgICAgaWYgKGNvbHVtbi5ldmVudHMpIHtcbiAgICAgICAgY29uc3QgZXZlbnRzID0gT2JqZWN0LmFzc2lnbih7fSwgY29sdW1uLmV2ZW50cyk7XG4gICAgICAgIE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIGNvbHVtbi5ldmVudHMpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBjb25zdCBvcmlnaW5GbiA9IGV2ZW50c1trZXldO1xuICAgICAgICAgIGV2ZW50c1trZXldID0gKC4uLnJlc3QpID0+IG9yaWdpbkZuKC4uLnJlc3QsIHJvdywgcm93SW5kZXgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2VsbEF0dHJzID0geyAuLi5jZWxsQXR0cnMsIC4uLmV2ZW50cyB9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjZWxsQ2xhc3NlcyA9IF8uaXNGdW5jdGlvbihjb2x1bW4uY2xhc3NlcylcbiAgICAgICAgPyBjb2x1bW4uY2xhc3Nlcyhjb250ZW50LCByb3csIHJvd0luZGV4LCBpbmRleClcbiAgICAgICAgOiBjb2x1bW4uY2xhc3NlcztcblxuICAgICAgaWYgKGNvbHVtbi5zdHlsZSkge1xuICAgICAgICBjZWxsU3R5bGUgPSBfLmlzRnVuY3Rpb24oY29sdW1uLnN0eWxlKVxuICAgICAgICAgID8gY29sdW1uLnN0eWxlKGNvbnRlbnQsIHJvdywgcm93SW5kZXgsIGluZGV4KVxuICAgICAgICAgIDogY29sdW1uLnN0eWxlO1xuICAgICAgICBjZWxsU3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBjZWxsU3R5bGUpIHx8IHt9O1xuICAgICAgfVxuXG4gICAgICBpZiAoY29sdW1uLnRpdGxlKSB7XG4gICAgICAgIGNlbGxUaXRsZSA9IF8uaXNGdW5jdGlvbihjb2x1bW4udGl0bGUpXG4gICAgICAgICAgPyBjb2x1bW4udGl0bGUoY29udGVudCwgcm93LCByb3dJbmRleCwgaW5kZXgpXG4gICAgICAgICAgOiBjb250ZW50O1xuICAgICAgICBjZWxsQXR0cnMudGl0bGUgPSBjZWxsVGl0bGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb2x1bW4uYWxpZ24pIHtcbiAgICAgICAgY2VsbFN0eWxlLnRleHRBbGlnbiA9XG4gICAgICAgICAgXy5pc0Z1bmN0aW9uKGNvbHVtbi5hbGlnbilcbiAgICAgICAgICAgID8gY29sdW1uLmFsaWduKGNvbnRlbnQsIHJvdywgcm93SW5kZXgsIGluZGV4KVxuICAgICAgICAgICAgOiBjb2x1bW4uYWxpZ247XG4gICAgICB9XG5cbiAgICAgIGlmIChjZWxsQ2xhc3NlcykgY2VsbEF0dHJzLmNsYXNzTmFtZSA9IGNlbGxDbGFzc2VzO1xuICAgICAgaWYgKCFfLmlzRW1wdHlPYmplY3QoY2VsbFN0eWxlKSkgY2VsbEF0dHJzLnN0eWxlID0gY2VsbFN0eWxlO1xuXG4gICAgICBsZXQgZWRpdGFibGVDZWxsID0gXy5pc0RlZmluZWQoY29sdW1uLmVkaXRhYmxlKSA/IGNvbHVtbi5lZGl0YWJsZSA6IHRydWU7XG4gICAgICBpZiAoY29sdW1uLmRhdGFGaWVsZCA9PT0ga2V5RmllbGQgfHwgIWVkaXRhYmxlKSBlZGl0YWJsZUNlbGwgPSBmYWxzZTtcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24oY29sdW1uLmVkaXRhYmxlKSkge1xuICAgICAgICBlZGl0YWJsZUNlbGwgPSBjb2x1bW4uZWRpdGFibGUoY29udGVudCwgcm93LCByb3dJbmRleCwgaW5kZXgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFiSW5kZXhTdGFydCAhPT0gLTEpIHtcbiAgICAgICAgY2VsbEF0dHJzLnRhYkluZGV4ID0gdGFiSW5kZXgrKztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENlbGxcbiAgICAgICAgICBrZXk9eyBgJHtjb250ZW50fS0ke2luZGV4fWAgfVxuICAgICAgICAgIHJvdz17IHJvdyB9XG4gICAgICAgICAgZWRpdGFibGU9eyBlZGl0YWJsZUNlbGwgfVxuICAgICAgICAgIHJvd0luZGV4PXsgcm93SW5kZXggfVxuICAgICAgICAgIGNvbHVtbkluZGV4PXsgaW5kZXggfVxuICAgICAgICAgIGNvbHVtbj17IGNvbHVtbiB9XG4gICAgICAgICAgb25TdGFydD17IG9uU3RhcnQgfVxuICAgICAgICAgIGNsaWNrVG9FZGl0PXsgY2xpY2tUb0VkaXQgfVxuICAgICAgICAgIGRiY2xpY2tUb0VkaXQ9eyBkYmNsaWNrVG9FZGl0IH1cbiAgICAgICAgICB7IC4uLmNlbGxBdHRycyB9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3cvcm93LXB1cmUtY29udGVudC5qcyIsImltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9jb25zdCc7XG5cbmNvbnN0IGV2ZW50cyA9IFtcbiAgJ29uQ2xpY2snLFxuICAnb25Eb3VibGVDbGljaycsXG4gICdvbk1vdXNlRW50ZXInLFxuICAnb25Nb3VzZUxlYXZlJyxcbiAgJ29uQ29udGV4dE1lbnUnLFxuICAnb25BdXhDbGljaydcbl07XG5cbmV4cG9ydCBkZWZhdWx0IEV4dGVuZEJhc2UgPT5cbiAgY2xhc3MgUm93RXZlbnREZWxlZ2F0ZXIgZXh0ZW5kcyBFeHRlbmRCYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5jbGlja051bSA9IDA7XG4gICAgICB0aGlzLmNyZWF0ZURlZmF1bHRFdmVudEhhbmRsZXIgPSB0aGlzLmNyZWF0ZURlZmF1bHRFdmVudEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuY3JlYXRlQ2xpY2tFdmVudEhhbmRsZXIgPSB0aGlzLmNyZWF0ZUNsaWNrRXZlbnRIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xpY2tFdmVudEhhbmRsZXIoY2IpIHtcbiAgICAgIHJldHVybiAoZSkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgcm93LFxuICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgIGtleUZpZWxkLFxuICAgICAgICAgIHNlbGVjdGFibGUsXG4gICAgICAgICAgZXhwYW5kYWJsZSxcbiAgICAgICAgICByb3dJbmRleCxcbiAgICAgICAgICBleHBhbmRlZCxcbiAgICAgICAgICBleHBhbmRSb3csXG4gICAgICAgICAgc2VsZWN0Um93LFxuICAgICAgICAgIERFTEFZX0ZPUl9EQkNMSUNLXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBjbGlja0ZuID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgY2IoZSwgcm93LCByb3dJbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGtleSA9IF8uZ2V0KHJvdywga2V5RmllbGQpO1xuICAgICAgICAgIGlmIChleHBhbmRSb3cgJiYgZXhwYW5kYWJsZSAmJiAhZXhwYW5kUm93LmV4cGFuZEJ5Q29sdW1uT25seSkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAoc2VsZWN0Um93Lm1vZGUgIT09IENvbnN0LlJPV19TRUxFQ1RfRElTQUJMRUQgJiYgc2VsZWN0Um93LmNsaWNrVG9FeHBhbmQpIHx8XG4gICAgICAgICAgICAgIHNlbGVjdFJvdy5tb2RlID09PSBDb25zdC5ST1dfU0VMRUNUX0RJU0FCTEVEXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgZXhwYW5kUm93Lm9uUm93RXhwYW5kKGtleSwgIWV4cGFuZGVkLCByb3dJbmRleCwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzZWxlY3RSb3cuY2xpY2tUb1NlbGVjdCAmJiBzZWxlY3RhYmxlKSB7XG4gICAgICAgICAgICBzZWxlY3RSb3cub25Sb3dTZWxlY3Qoa2V5LCAhc2VsZWN0ZWQsIHJvd0luZGV4LCBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKERFTEFZX0ZPUl9EQkNMSUNLKSB7XG4gICAgICAgICAgdGhpcy5jbGlja051bSArPSAxO1xuICAgICAgICAgIF8uZGVib3VuY2UoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xpY2tOdW0gPT09IDEpIHtcbiAgICAgICAgICAgICAgY2xpY2tGbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jbGlja051bSA9IDA7XG4gICAgICAgICAgfSwgREVMQVlfRk9SX0RCQ0xJQ0spKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xpY2tGbigpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGNyZWF0ZURlZmF1bHRFdmVudEhhbmRsZXIoY2IpIHtcbiAgICAgIHJldHVybiAoZSkgPT4ge1xuICAgICAgICBjb25zdCB7IHJvdywgcm93SW5kZXggfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNiKGUsIHJvdywgcm93SW5kZXgpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBkZWxlZ2F0ZShhdHRycyA9IHt9KSB7XG4gICAgICBjb25zdCBuZXdBdHRycyA9IHsgLi4uYXR0cnMgfTtcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICAgIGlmIChfLmNvbnRhaW5zKGV2ZW50cywgYXR0cikpIHtcbiAgICAgICAgICBuZXdBdHRyc1thdHRyXSA9IHRoaXMuY3JlYXRlRGVmYXVsdEV2ZW50SGFuZGxlcihhdHRyc1thdHRyXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ld0F0dHJzO1xuICAgIH1cbiAgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy9ldmVudC1kZWxlZ2F0ZXIuanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBFeHRlbmRCYXNlID0+XG4gIGNsYXNzIFJvd1Nob3VsZFVwZGF0ZXIgZXh0ZW5kcyBFeHRlbmRCYXNlIHtcbiAgICBzaG91bGRVcGRhdGVCeUNlbGxFZGl0aW5nKG5leHRQcm9wcykge1xuICAgICAgaWYgKCEodGhpcy5wcm9wcy5jbGlja1RvRWRpdCB8fCB0aGlzLnByb3BzLmRiY2xpY2tUb0VkaXQpKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBuZXh0UHJvcHMuZWRpdGluZ1Jvd0lkeCA9PT0gbmV4dFByb3BzLnJvd0luZGV4IHx8XG4gICAgICAgICh0aGlzLnByb3BzLmVkaXRpbmdSb3dJZHggPT09IG5leHRQcm9wcy5yb3dJbmRleCAmJlxuICAgICAgICBuZXh0UHJvcHMuZWRpdGluZ1Jvd0lkeCA9PT0gbnVsbCkgfHxcbiAgICAgICAgdGhpcy5wcm9wcy5lZGl0aW5nUm93SWR4ID09PSBuZXh0UHJvcHMucm93SW5kZXhcbiAgICAgICk7XG4gICAgfVxuXG4gICAgc2hvdWxkVXBkYXRlZEJ5U2VsZlByb3BzKG5leHRQcm9wcykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWUgIT09IG5leHRQcm9wcy5jbGFzc05hbWUgfHxcbiAgICAgICAgIV8uaXNFcXVhbCh0aGlzLnByb3BzLnN0eWxlLCBuZXh0UHJvcHMuc3R5bGUpIHx8XG4gICAgICAgICFfLmlzRXF1YWwodGhpcy5wcm9wcy5hdHRycywgbmV4dFByb3BzLmF0dHJzKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBPbmx5IHVzZSBmb3Igc2ltcGxlLXJvd1xuICAgIHNob3VsZFVwZGF0ZUJ5Q29sdW1uc0ZvclNpbXBsZUNoZWNrKG5leHRQcm9wcykge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY29sdW1ucy5sZW5ndGggIT09IG5leHRQcm9wcy5jb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5jb2x1bW5zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICghXy5pc0VxdWFsKHRoaXMucHJvcHMuY29sdW1uc1tpXSwgbmV4dFByb3BzLmNvbHVtbnNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzaG91bGRVcGRhdGVkQnlOb3JtYWxQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGNvbnN0IHNob3VsZFVwZGF0ZSA9XG4gICAgICAgIHRoaXMucHJvcHMucm93SW5kZXggIT09IG5leHRQcm9wcy5yb3dJbmRleCB8fFxuICAgICAgICB0aGlzLnByb3BzLmVkaXRhYmxlICE9PSBuZXh0UHJvcHMuZWRpdGFibGUgfHxcbiAgICAgICAgIV8uaXNFcXVhbCh0aGlzLnByb3BzLnJvdywgbmV4dFByb3BzLnJvdykgfHxcbiAgICAgICAgdGhpcy5wcm9wcy5jb2x1bW5zLmxlbmd0aCAhPT0gbmV4dFByb3BzLmNvbHVtbnMubGVuZ3RoO1xuXG4gICAgICByZXR1cm4gc2hvdWxkVXBkYXRlO1xuICAgIH1cblxuICAgIHNob3VsZFVwZGF0ZUNoaWxkKG5leHRQcm9wcykge1xuICAgICAgcmV0dXJuIHRoaXMuc2hvdWxkVXBkYXRlQnlDZWxsRWRpdGluZyhuZXh0UHJvcHMpIHx8XG4gICAgICAgIHRoaXMuc2hvdWxkVXBkYXRlZEJ5Tm9ybWFsUHJvcHMobmV4dFByb3BzKTtcbiAgICB9XG5cbiAgICBzaG91bGRSb3dDb250ZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgcmV0dXJuIHRoaXMuc2hvdWxkVXBkYXRlQ2hpbGQobmV4dFByb3BzKSB8fFxuICAgICAgICB0aGlzLnNob3VsZFVwZGF0ZUJ5Q29sdW1uc0ZvclNpbXBsZUNoZWNrKG5leHRQcm9wcyk7XG4gICAgfVxuICB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93L3Nob3VsZC11cGRhdGVyLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzIxX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RET01cIixcImNvbW1vbmpzMlwiOlwicmVhY3QtZG9tXCIsXCJjb21tb25qc1wiOlwicmVhY3QtZG9tXCIsXCJhbWRcIjpcInJlYWN0LWRvbVwifVxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGRpc2FibGVkOiBmYWxzZVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL2NvbmZpZy5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuZXhwb3J0IHZhciB0aW1lb3V0c1NoYXBlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zaGFwZSh7XG4gIGVudGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuICBleGl0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBhcHBlYXI6IFByb3BUeXBlcy5udW1iZXJcbn0pLmlzUmVxdWlyZWRdKSA6IG51bGw7XG5leHBvcnQgdmFyIGNsYXNzTmFtZXNTaGFwZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuc2hhcGUoe1xuICBlbnRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXhpdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWN0aXZlOiBQcm9wVHlwZXMuc3RyaW5nXG59KSwgUHJvcFR5cGVzLnNoYXBlKHtcbiAgZW50ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGVudGVyRG9uZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZW50ZXJBY3RpdmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGV4aXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGV4aXREb25lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBleGl0QWN0aXZlOiBQcm9wVHlwZXMuc3RyaW5nXG59KV0pIDogbnVsbDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL3V0aWxzL1Byb3BUeXBlcy5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcmFuc2l0aW9uR3JvdXBDb250ZXh0IGZyb20gJy4vVHJhbnNpdGlvbkdyb3VwQ29udGV4dCc7XG5pbXBvcnQgeyBnZXRDaGlsZE1hcHBpbmcsIGdldEluaXRpYWxDaGlsZE1hcHBpbmcsIGdldE5leHRDaGlsZE1hcHBpbmcgfSBmcm9tICcuL3V0aWxzL0NoaWxkTWFwcGluZyc7XG5cbnZhciB2YWx1ZXMgPSBPYmplY3QudmFsdWVzIHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgcmV0dXJuIG9ialtrXTtcbiAgfSk7XG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnQ6ICdkaXYnLFxuICBjaGlsZEZhY3Rvcnk6IGZ1bmN0aW9uIGNoaWxkRmFjdG9yeShjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfVxufTtcbi8qKlxuICogVGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAgY29tcG9uZW50IG1hbmFnZXMgYSBzZXQgb2YgdHJhbnNpdGlvbiBjb21wb25lbnRzXG4gKiAoYDxUcmFuc2l0aW9uPmAgYW5kIGA8Q1NTVHJhbnNpdGlvbj5gKSBpbiBhIGxpc3QuIExpa2Ugd2l0aCB0aGUgdHJhbnNpdGlvblxuICogY29tcG9uZW50cywgYDxUcmFuc2l0aW9uR3JvdXA+YCBpcyBhIHN0YXRlIG1hY2hpbmUgZm9yIG1hbmFnaW5nIHRoZSBtb3VudGluZ1xuICogYW5kIHVubW91bnRpbmcgb2YgY29tcG9uZW50cyBvdmVyIHRpbWUuXG4gKlxuICogQ29uc2lkZXIgdGhlIGV4YW1wbGUgYmVsb3cuIEFzIGl0ZW1zIGFyZSByZW1vdmVkIG9yIGFkZGVkIHRvIHRoZSBUb2RvTGlzdCB0aGVcbiAqIGBpbmAgcHJvcCBpcyB0b2dnbGVkIGF1dG9tYXRpY2FsbHkgYnkgdGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAuXG4gKlxuICogTm90ZSB0aGF0IGA8VHJhbnNpdGlvbkdyb3VwPmAgIGRvZXMgbm90IGRlZmluZSBhbnkgYW5pbWF0aW9uIGJlaGF2aW9yIVxuICogRXhhY3RseSBfaG93XyBhIGxpc3QgaXRlbSBhbmltYXRlcyBpcyB1cCB0byB0aGUgaW5kaXZpZHVhbCB0cmFuc2l0aW9uXG4gKiBjb21wb25lbnQuIFRoaXMgbWVhbnMgeW91IGNhbiBtaXggYW5kIG1hdGNoIGFuaW1hdGlvbnMgYWNyb3NzIGRpZmZlcmVudCBsaXN0XG4gKiBpdGVtcy5cbiAqL1xuXG52YXIgVHJhbnNpdGlvbkdyb3VwID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFRyYW5zaXRpb25Hcm91cCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVHJhbnNpdGlvbkdyb3VwKHByb3BzLCBjb250ZXh0KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpIHx8IHRoaXM7XG5cbiAgICB2YXIgaGFuZGxlRXhpdGVkID0gX3RoaXMuaGFuZGxlRXhpdGVkLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpOyAvLyBJbml0aWFsIGNoaWxkcmVuIHNob3VsZCBhbGwgYmUgZW50ZXJpbmcsIGRlcGVuZGVudCBvbiBhcHBlYXJcblxuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBjb250ZXh0VmFsdWU6IHtcbiAgICAgICAgaXNNb3VudGluZzogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGhhbmRsZUV4aXRlZDogaGFuZGxlRXhpdGVkLFxuICAgICAgZmlyc3RSZW5kZXI6IHRydWVcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb250ZXh0VmFsdWU6IHtcbiAgICAgICAgaXNNb3VudGluZzogZmFsc2VcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcbiAgfTtcblxuICBUcmFuc2l0aW9uR3JvdXAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgX3JlZikge1xuICAgIHZhciBwcmV2Q2hpbGRNYXBwaW5nID0gX3JlZi5jaGlsZHJlbixcbiAgICAgICAgaGFuZGxlRXhpdGVkID0gX3JlZi5oYW5kbGVFeGl0ZWQsXG4gICAgICAgIGZpcnN0UmVuZGVyID0gX3JlZi5maXJzdFJlbmRlcjtcbiAgICByZXR1cm4ge1xuICAgICAgY2hpbGRyZW46IGZpcnN0UmVuZGVyID8gZ2V0SW5pdGlhbENoaWxkTWFwcGluZyhuZXh0UHJvcHMsIGhhbmRsZUV4aXRlZCkgOiBnZXROZXh0Q2hpbGRNYXBwaW5nKG5leHRQcm9wcywgcHJldkNoaWxkTWFwcGluZywgaGFuZGxlRXhpdGVkKSxcbiAgICAgIGZpcnN0UmVuZGVyOiBmYWxzZVxuICAgIH07XG4gIH0gLy8gbm9kZSBpcyBgdW5kZWZpbmVkYCB3aGVuIHVzZXIgcHJvdmlkZWQgYG5vZGVSZWZgIHByb3BcbiAgO1xuXG4gIF9wcm90by5oYW5kbGVFeGl0ZWQgPSBmdW5jdGlvbiBoYW5kbGVFeGl0ZWQoY2hpbGQsIG5vZGUpIHtcbiAgICB2YXIgY3VycmVudENoaWxkTWFwcGluZyA9IGdldENoaWxkTWFwcGluZyh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICBpZiAoY2hpbGQua2V5IGluIGN1cnJlbnRDaGlsZE1hcHBpbmcpIHJldHVybjtcblxuICAgIGlmIChjaGlsZC5wcm9wcy5vbkV4aXRlZCkge1xuICAgICAgY2hpbGQucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubW91bnRlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gX2V4dGVuZHMoe30sIHN0YXRlLmNoaWxkcmVuKTtcblxuICAgICAgICBkZWxldGUgY2hpbGRyZW5bY2hpbGQua2V5XTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIENvbXBvbmVudCA9IF90aGlzJHByb3BzLmNvbXBvbmVudCxcbiAgICAgICAgY2hpbGRGYWN0b3J5ID0gX3RoaXMkcHJvcHMuY2hpbGRGYWN0b3J5LFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJjb21wb25lbnRcIiwgXCJjaGlsZEZhY3RvcnlcIl0pO1xuXG4gICAgdmFyIGNvbnRleHRWYWx1ZSA9IHRoaXMuc3RhdGUuY29udGV4dFZhbHVlO1xuICAgIHZhciBjaGlsZHJlbiA9IHZhbHVlcyh0aGlzLnN0YXRlLmNoaWxkcmVuKS5tYXAoY2hpbGRGYWN0b3J5KTtcbiAgICBkZWxldGUgcHJvcHMuYXBwZWFyO1xuICAgIGRlbGV0ZSBwcm9wcy5lbnRlcjtcbiAgICBkZWxldGUgcHJvcHMuZXhpdDtcblxuICAgIGlmIChDb21wb25lbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uR3JvdXBDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiBjb250ZXh0VmFsdWVcbiAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkdyb3VwQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IGNvbnRleHRWYWx1ZVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgcHJvcHMsIGNoaWxkcmVuKSk7XG4gIH07XG5cbiAgcmV0dXJuIFRyYW5zaXRpb25Hcm91cDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuVHJhbnNpdGlvbkdyb3VwLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIGA8VHJhbnNpdGlvbkdyb3VwPmAgcmVuZGVycyBhIGA8ZGl2PmAgYnkgZGVmYXVsdC4gWW91IGNhbiBjaGFuZ2UgdGhpc1xuICAgKiBiZWhhdmlvciBieSBwcm92aWRpbmcgYSBgY29tcG9uZW50YCBwcm9wLlxuICAgKiBJZiB5b3UgdXNlIFJlYWN0IHYxNisgYW5kIHdvdWxkIGxpa2UgdG8gYXZvaWQgYSB3cmFwcGluZyBgPGRpdj5gIGVsZW1lbnRcbiAgICogeW91IGNhbiBwYXNzIGluIGBjb21wb25lbnQ9e251bGx9YC4gVGhpcyBpcyB1c2VmdWwgaWYgdGhlIHdyYXBwaW5nIGRpdlxuICAgKiBib3JrcyB5b3VyIGNzcyBzdHlsZXMuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIEEgc2V0IG9mIGA8VHJhbnNpdGlvbj5gIGNvbXBvbmVudHMsIHRoYXQgYXJlIHRvZ2dsZWQgYGluYCBhbmQgb3V0IGFzIHRoZXlcbiAgICogbGVhdmUuIHRoZSBgPFRyYW5zaXRpb25Hcm91cD5gIHdpbGwgaW5qZWN0IHNwZWNpZmljIHRyYW5zaXRpb24gcHJvcHMsIHNvXG4gICAqIHJlbWVtYmVyIHRvIHNwcmVhZCB0aGVtIHRocm91Z2ggaWYgeW91IGFyZSB3cmFwcGluZyB0aGUgYDxUcmFuc2l0aW9uPmAgYXNcbiAgICogd2l0aCBvdXIgYDxGYWRlPmAgZXhhbXBsZS5cbiAgICpcbiAgICogV2hpbGUgdGhpcyBjb21wb25lbnQgaXMgbWVhbnQgZm9yIG11bHRpcGxlIGBUcmFuc2l0aW9uYCBvciBgQ1NTVHJhbnNpdGlvbmBcbiAgICogY2hpbGRyZW4sIHNvbWV0aW1lcyB5b3UgbWF5IHdhbnQgdG8gaGF2ZSBhIHNpbmdsZSB0cmFuc2l0aW9uIGNoaWxkIHdpdGhcbiAgICogY29udGVudCB0aGF0IHlvdSB3YW50IHRvIGJlIHRyYW5zaXRpb25lZCBvdXQgYW5kIGluIHdoZW4geW91IGNoYW5nZSBpdFxuICAgKiAoZS5nLiByb3V0ZXMsIGltYWdlcyBldGMuKSBJbiB0aGF0IGNhc2UgeW91IGNhbiBjaGFuZ2UgdGhlIGBrZXlgIHByb3Agb2ZcbiAgICogdGhlIHRyYW5zaXRpb24gY2hpbGQgYXMgeW91IGNoYW5nZSBpdHMgY29udGVudCwgdGhpcyB3aWxsIGNhdXNlXG4gICAqIGBUcmFuc2l0aW9uR3JvdXBgIHRvIHRyYW5zaXRpb24gdGhlIGNoaWxkIG91dCBhbmQgYmFjayBpbi5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBwcm9wIHRoYXQgZW5hYmxlcyBvciBkaXNhYmxlcyBhcHBlYXIgYW5pbWF0aW9uc1xuICAgKiBmb3IgYWxsIGNoaWxkcmVuLiBOb3RlIHRoYXQgc3BlY2lmeWluZyB0aGlzIHdpbGwgb3ZlcnJpZGUgYW55IGRlZmF1bHRzIHNldFxuICAgKiBvbiBpbmRpdmlkdWFsIGNoaWxkcmVuIFRyYW5zaXRpb25zLlxuICAgKi9cbiAgYXBwZWFyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBwcm9wIHRoYXQgZW5hYmxlcyBvciBkaXNhYmxlcyBlbnRlciBhbmltYXRpb25zXG4gICAqIGZvciBhbGwgY2hpbGRyZW4uIE5vdGUgdGhhdCBzcGVjaWZ5aW5nIHRoaXMgd2lsbCBvdmVycmlkZSBhbnkgZGVmYXVsdHMgc2V0XG4gICAqIG9uIGluZGl2aWR1YWwgY2hpbGRyZW4gVHJhbnNpdGlvbnMuXG4gICAqL1xuICBlbnRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgcHJvcCB0aGF0IGVuYWJsZXMgb3IgZGlzYWJsZXMgZXhpdCBhbmltYXRpb25zXG4gICAqIGZvciBhbGwgY2hpbGRyZW4uIE5vdGUgdGhhdCBzcGVjaWZ5aW5nIHRoaXMgd2lsbCBvdmVycmlkZSBhbnkgZGVmYXVsdHMgc2V0XG4gICAqIG9uIGluZGl2aWR1YWwgY2hpbGRyZW4gVHJhbnNpdGlvbnMuXG4gICAqL1xuICBleGl0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogWW91IG1heSBuZWVkIHRvIGFwcGx5IHJlYWN0aXZlIHVwZGF0ZXMgdG8gYSBjaGlsZCBhcyBpdCBpcyBleGl0aW5nLlxuICAgKiBUaGlzIGlzIGdlbmVyYWxseSBkb25lIGJ5IHVzaW5nIGBjbG9uZUVsZW1lbnRgIGhvd2V2ZXIgaW4gdGhlIGNhc2Ugb2YgYW4gZXhpdGluZ1xuICAgKiBjaGlsZCB0aGUgZWxlbWVudCBoYXMgYWxyZWFkeSBiZWVuIHJlbW92ZWQgYW5kIG5vdCBhY2Nlc3NpYmxlIHRvIHRoZSBjb25zdW1lci5cbiAgICpcbiAgICogSWYgeW91IGRvIG5lZWQgdG8gdXBkYXRlIGEgY2hpbGQgYXMgaXQgbGVhdmVzIHlvdSBjYW4gcHJvdmlkZSBhIGBjaGlsZEZhY3RvcnlgXG4gICAqIHRvIHdyYXAgZXZlcnkgY2hpbGQsIGV2ZW4gdGhlIG9uZXMgdGhhdCBhcmUgbGVhdmluZy5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24oY2hpbGQ6IFJlYWN0RWxlbWVudCkgLT4gUmVhY3RFbGVtZW50XG4gICAqL1xuICBjaGlsZEZhY3Rvcnk6IFByb3BUeXBlcy5mdW5jXG59IDoge307XG5UcmFuc2l0aW9uR3JvdXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuZXhwb3J0IGRlZmF1bHQgVHJhbnNpdGlvbkdyb3VwO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vVHJhbnNpdGlvbkdyb3VwLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5tb2R1bGUuZXhwb3J0cy5vbmNlID0gb25jZTtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbmZ1bmN0aW9uIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIF9nZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuIF9nZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSBfZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuY2FsbCh0aGlzLnRhcmdldCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuYXBwbHkodGhpcy50YXJnZXQsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIG9uY2UoZW1pdHRlciwgbmFtZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGZ1bmN0aW9uIGV2ZW50TGlzdGVuZXIoKSB7XG4gICAgICBpZiAoZXJyb3JMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICByZXNvbHZlKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgICB2YXIgZXJyb3JMaXN0ZW5lcjtcblxuICAgIC8vIEFkZGluZyBhbiBlcnJvciBsaXN0ZW5lciBpcyBub3Qgb3B0aW9uYWwgYmVjYXVzZVxuICAgIC8vIGlmIGFuIGVycm9yIGlzIHRocm93biBvbiBhbiBldmVudCBlbWl0dGVyIHdlIGNhbm5vdFxuICAgIC8vIGd1YXJhbnRlZSB0aGF0IHRoZSBhY3R1YWwgZXZlbnQgd2UgYXJlIHdhaXRpbmcgd2lsbFxuICAgIC8vIGJlIGZpcmVkLiBUaGUgcmVzdWx0IGNvdWxkIGJlIGEgc2lsZW50IHdheSB0byBjcmVhdGVcbiAgICAvLyBtZW1vcnkgb3IgZmlsZSBkZXNjcmlwdG9yIGxlYWtzLCB3aGljaCBpcyBzb21ldGhpbmdcbiAgICAvLyB3ZSBzaG91bGQgYXZvaWQuXG4gICAgaWYgKG5hbWUgIT09ICdlcnJvcicpIHtcbiAgICAgIGVycm9yTGlzdGVuZXIgPSBmdW5jdGlvbiBlcnJvckxpc3RlbmVyKGVycikge1xuICAgICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKG5hbWUsIGV2ZW50TGlzdGVuZXIpO1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH07XG5cbiAgICAgIGVtaXR0ZXIub25jZSgnZXJyb3InLCBlcnJvckxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBlbWl0dGVyLm9uY2UobmFtZSwgZXZlbnRMaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgQm9vdHN0cmFwVGFibGUgZnJvbSAnLi9zcmMvYm9vdHN0cmFwLXRhYmxlJztcbmltcG9ydCB3aXRoQ29udGV4dCBmcm9tICcuL3NyYy9jb250ZXh0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhDb250ZXh0KEJvb3RzdHJhcFRhYmxlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvaW5kZXguanMiLCIvKiBlc2xpbnQgY2FtZWxjYXNlOiAwICovXG4vKiBlc2xpbnQgYXJyb3ctYm9keS1zdHlsZTogMCAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgRmlsdGVycyBmcm9tICcuL2ZpbHRlcnMnO1xuaW1wb3J0IENhcHRpb24gZnJvbSAnLi9jYXB0aW9uJztcbmltcG9ydCBCb2R5IGZyb20gJy4vYm9keSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcbmltcG9ydCBQcm9wc0Jhc2VSZXNvbHZlciBmcm9tICcuL3Byb3BzLXJlc29sdmVyJztcbmltcG9ydCBDb25zdCBmcm9tICcuL2NvbnN0JztcbmltcG9ydCBfIGZyb20gJy4vdXRpbHMnO1xuXG5jbGFzcyBCb290c3RyYXBUYWJsZSBleHRlbmRzIFByb3BzQmFzZVJlc29sdmVyKENvbXBvbmVudCkge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnZhbGlkYXRlUHJvcHMoKTtcbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMub25EYXRhU2l6ZUNoYW5nZSAmJiAhbmV4dFByb3BzLnBhZ2luYXRpb24pIHtcbiAgICAgIGlmIChuZXh0UHJvcHMuZGF0YS5sZW5ndGggIT09IHRoaXMucHJvcHMuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgbmV4dFByb3BzLm9uRGF0YVNpemVDaGFuZ2UoeyBkYXRhU2l6ZTogbmV4dFByb3BzLmRhdGEubGVuZ3RoIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEV4cG9zZWQgQVBJc1xuICBnZXREYXRhID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnZpc2libGVSb3dzKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsb2FkaW5nLCBvdmVybGF5IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChvdmVybGF5KSB7XG4gICAgICBjb25zdCBMb2FkaW5nT3ZlcmxheSA9IG92ZXJsYXkobG9hZGluZyk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TG9hZGluZ092ZXJsYXk+XG4gICAgICAgICAgeyB0aGlzLnJlbmRlclRhYmxlKCkgfVxuICAgICAgICA8L0xvYWRpbmdPdmVybGF5PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyVGFibGUoKTtcbiAgfVxuXG4gIHJlbmRlclRhYmxlKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbHVtbnMsXG4gICAgICBrZXlGaWVsZCxcbiAgICAgIHRhYkluZGV4Q2VsbCxcbiAgICAgIGlkLFxuICAgICAgY2xhc3NlcyxcbiAgICAgIGJvb3RzdHJhcDQsXG4gICAgICBzdHJpcGVkLFxuICAgICAgaG92ZXIsXG4gICAgICBib3JkZXJlZCxcbiAgICAgIGNvbmRlbnNlZCxcbiAgICAgIG5vRGF0YUluZGljYXRpb24sXG4gICAgICBjYXB0aW9uLFxuICAgICAgcm93U3R5bGUsXG4gICAgICByb3dDbGFzc2VzLFxuICAgICAgd3JhcHBlckNsYXNzZXMsXG4gICAgICByb3dFdmVudHMsXG4gICAgICBzZWxlY3RSb3csXG4gICAgICBleHBhbmRSb3csXG4gICAgICBjZWxsRWRpdCxcbiAgICAgIGZpbHRlclBvc2l0aW9uXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB0YWJsZVdyYXBwZXJDbGFzcyA9IGNzKCdyZWFjdC1ib290c3RyYXAtdGFibGUnLCB3cmFwcGVyQ2xhc3Nlcyk7XG5cbiAgICBjb25zdCB0YWJsZUNsYXNzID0gY3MoJ3RhYmxlJywge1xuICAgICAgJ3RhYmxlLXN0cmlwZWQnOiBzdHJpcGVkLFxuICAgICAgJ3RhYmxlLWhvdmVyJzogaG92ZXIsXG4gICAgICAndGFibGUtYm9yZGVyZWQnOiBib3JkZXJlZCxcbiAgICAgIFtib290c3RyYXA0ID8gJ3RhYmxlLXNtJyA6ICd0YWJsZS1jb25kZW5zZWQnXTogY29uZGVuc2VkXG4gICAgfSwgY2xhc3Nlcyk7XG5cbiAgICBjb25zdCBoYXNGaWx0ZXJzID0gY29sdW1ucy5zb21lKGNvbCA9PiBjb2wuZmlsdGVyIHx8IGNvbC5maWx0ZXJSZW5kZXJlcik7XG5cbiAgICBjb25zdCBoYXNGb290ZXIgPSBfLmZpbHRlcihjb2x1bW5zLCBjb2wgPT4gXy5oYXMoY29sLCAnZm9vdGVyJykpLmxlbmd0aCA+IDA7XG5cbiAgICBjb25zdCB0YWJsZUNhcHRpb24gPSAoXG4gICAgICBjYXB0aW9uICYmIDxDYXB0aW9uIGJvb3RzdHJhcDQ9eyBib290c3RyYXA0IH0+eyBjYXB0aW9uIH08L0NhcHRpb24+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHRhYmxlV3JhcHBlckNsYXNzIH0+XG4gICAgICAgIDx0YWJsZSBpZD17IGlkIH0gY2xhc3NOYW1lPXsgdGFibGVDbGFzcyB9PlxuICAgICAgICAgIHsgdGFibGVDYXB0aW9uIH1cbiAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICBjb2x1bW5zPXsgY29sdW1ucyB9XG4gICAgICAgICAgICBjbGFzc05hbWU9eyB0aGlzLnByb3BzLmhlYWRlckNsYXNzZXMgfVxuICAgICAgICAgICAgd3JhcHBlckNsYXNzZXM9eyB0aGlzLnByb3BzLmhlYWRlcldyYXBwZXJDbGFzc2VzIH1cbiAgICAgICAgICAgIHNvcnRGaWVsZD17IHRoaXMucHJvcHMuc29ydEZpZWxkIH1cbiAgICAgICAgICAgIHNvcnRPcmRlcj17IHRoaXMucHJvcHMuc29ydE9yZGVyIH1cbiAgICAgICAgICAgIG9uU29ydD17IHRoaXMucHJvcHMub25Tb3J0IH1cbiAgICAgICAgICAgIGdsb2JhbFNvcnRDYXJldD17IHRoaXMucHJvcHMuc29ydCAmJiB0aGlzLnByb3BzLnNvcnQuc29ydENhcmV0IH1cbiAgICAgICAgICAgIG9uRmlsdGVyPXsgdGhpcy5wcm9wcy5vbkZpbHRlciB9XG4gICAgICAgICAgICBjdXJyRmlsdGVycz17IHRoaXMucHJvcHMuY3VyckZpbHRlcnMgfVxuICAgICAgICAgICAgb25FeHRlcm5hbEZpbHRlcj17IHRoaXMucHJvcHMub25FeHRlcm5hbEZpbHRlciB9XG4gICAgICAgICAgICBzZWxlY3RSb3c9eyBzZWxlY3RSb3cgfVxuICAgICAgICAgICAgZXhwYW5kUm93PXsgZXhwYW5kUm93IH1cbiAgICAgICAgICAgIGZpbHRlclBvc2l0aW9uPXsgZmlsdGVyUG9zaXRpb24gfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2hhc0ZpbHRlcnMgJiYgZmlsdGVyUG9zaXRpb24gIT09IENvbnN0LkZJTFRFUlNfUE9TSVRJT05fSU5MSU5FICYmIChcbiAgICAgICAgICAgIDxGaWx0ZXJzXG4gICAgICAgICAgICAgIGNvbHVtbnM9eyBjb2x1bW5zIH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgdGhpcy5wcm9wcy5maWx0ZXJzQ2xhc3NlcyB9XG4gICAgICAgICAgICAgIG9uU29ydD17IHRoaXMucHJvcHMub25Tb3J0IH1cbiAgICAgICAgICAgICAgb25GaWx0ZXI9eyB0aGlzLnByb3BzLm9uRmlsdGVyIH1cbiAgICAgICAgICAgICAgY3VyckZpbHRlcnM9eyB0aGlzLnByb3BzLmN1cnJGaWx0ZXJzIH1cbiAgICAgICAgICAgICAgZmlsdGVyUG9zaXRpb249eyB0aGlzLnByb3BzLmZpbHRlclBvc2l0aW9uIH1cbiAgICAgICAgICAgICAgb25FeHRlcm5hbEZpbHRlcj17IHRoaXMucHJvcHMub25FeHRlcm5hbEZpbHRlciB9XG4gICAgICAgICAgICAgIHNlbGVjdFJvdz17IHNlbGVjdFJvdyB9XG4gICAgICAgICAgICAgIGV4cGFuZFJvdz17IGV4cGFuZFJvdyB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPEJvZHlcbiAgICAgICAgICAgIGNsYXNzTmFtZT17IHRoaXMucHJvcHMuYm9keUNsYXNzZXMgfVxuICAgICAgICAgICAgZGF0YT17IHRoaXMuZ2V0RGF0YSgpIH1cbiAgICAgICAgICAgIGtleUZpZWxkPXsga2V5RmllbGQgfVxuICAgICAgICAgICAgdGFiSW5kZXhDZWxsPXsgdGFiSW5kZXhDZWxsIH1cbiAgICAgICAgICAgIGNvbHVtbnM9eyBjb2x1bW5zIH1cbiAgICAgICAgICAgIGlzRW1wdHk9eyB0aGlzLmlzRW1wdHkoKSB9XG4gICAgICAgICAgICB2aXNpYmxlQ29sdW1uU2l6ZT17IHRoaXMudmlzaWJsZUNvbHVtblNpemUoKSB9XG4gICAgICAgICAgICBub0RhdGFJbmRpY2F0aW9uPXsgbm9EYXRhSW5kaWNhdGlvbiB9XG4gICAgICAgICAgICBjZWxsRWRpdD17IGNlbGxFZGl0IH1cbiAgICAgICAgICAgIHNlbGVjdFJvdz17IHNlbGVjdFJvdyB9XG4gICAgICAgICAgICBleHBhbmRSb3c9eyBleHBhbmRSb3cgfVxuICAgICAgICAgICAgcm93U3R5bGU9eyByb3dTdHlsZSB9XG4gICAgICAgICAgICByb3dDbGFzc2VzPXsgcm93Q2xhc3NlcyB9XG4gICAgICAgICAgICByb3dFdmVudHM9eyByb3dFdmVudHMgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2hhc0Zvb3RlciAmJiAoXG4gICAgICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgICAgIGRhdGE9eyB0aGlzLmdldERhdGEoKSB9XG4gICAgICAgICAgICAgIGNvbHVtbnM9eyBjb2x1bW5zIH1cbiAgICAgICAgICAgICAgc2VsZWN0Um93PXsgc2VsZWN0Um93IH1cbiAgICAgICAgICAgICAgZXhwYW5kUm93PXsgZXhwYW5kUm93IH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgdGhpcy5wcm9wcy5mb290ZXJDbGFzc2VzIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQm9vdHN0cmFwVGFibGUucHJvcFR5cGVzID0ge1xuICBrZXlGaWVsZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIGJvb3RzdHJhcDQ6IFByb3BUeXBlcy5ib29sLFxuICByZW1vdGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHBhZ2luYXRpb246IFByb3BUeXBlcy5ib29sXG4gIH0pXSksXG4gIG5vRGF0YUluZGljYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLFxuICBzdHJpcGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgYm9yZGVyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBob3ZlcjogUHJvcFR5cGVzLmJvb2wsXG4gIHRhYkluZGV4Q2VsbDogUHJvcFR5cGVzLmJvb2wsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc2VzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoZWFkZXJDbGFzc2VzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBib2R5Q2xhc3NlczogUHJvcFR5cGVzLnN0cmluZyxcbiAgd3JhcHBlckNsYXNzZXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhlYWRlcldyYXBwZXJDbGFzc2VzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb25kZW5zZWQ6IFByb3BUeXBlcy5ib29sLFxuICBjYXB0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgICBQcm9wVHlwZXMuc3RyaW5nXG4gIF0pLFxuICBwYWdpbmF0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICBmaWx0ZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gIGNlbGxFZGl0OiBQcm9wVHlwZXMub2JqZWN0LFxuICBzZWxlY3RSb3c6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbW9kZTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIENvbnN0LlJPV19TRUxFQ1RfU0lOR0xFLFxuICAgICAgQ29uc3QuUk9XX1NFTEVDVF9NVUxUSVBMRSxcbiAgICAgIENvbnN0LlJPV19TRUxFQ1RfRElTQUJMRURcbiAgICBdKS5pc1JlcXVpcmVkLFxuICAgIGNsaWNrVG9TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuICAgIGNsaWNrVG9FeHBhbmQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGNsaWNrVG9FZGl0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoaWRlU2VsZWN0QWxsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWxlY3RBbGw6IFByb3BUeXBlcy5mdW5jLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGNsYXNzZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgbm9uU2VsZWN0YWJsZTogUHJvcFR5cGVzLmFycmF5LFxuICAgIG5vblNlbGVjdGFibGVTdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBub25TZWxlY3RhYmxlQ2xhc3NlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBiZ0NvbG9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGhpZGVTZWxlY3RDb2x1bW46IFByb3BUeXBlcy5ib29sLFxuICAgIHNlbGVjdGlvblJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzZWxlY3Rpb25IZWFkZXJSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaGVhZGVyQ29sdW1uU3R5bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgc2VsZWN0Q29sdW1uU3R5bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgc2VsZWN0Q29sdW1uUG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBDb25zdC5JTkRJQ0FUT1JfUE9TSVRJT05fTEVGVCxcbiAgICAgIENvbnN0LklORElDQVRPUl9QT1NJVElPTl9SSUdIVFxuICAgIF0pXG4gIH0pLFxuICBleHBhbmRSb3c6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGV4cGFuZGVkOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgb25FeHBhbmQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRXhwYW5kQWxsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBub25FeHBhbmRhYmxlOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgc2hvd0V4cGFuZENvbHVtbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25seU9uZUV4cGFuZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgZXhwYW5kQnlDb2x1bW5Pbmx5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBleHBhbmRDb2x1bW5SZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZXhwYW5kSGVhZGVyQ29sdW1uUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGV4cGFuZENvbHVtblBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgQ29uc3QuSU5ESUNBVE9SX1BPU0lUSU9OX0xFRlQsXG4gICAgICBDb25zdC5JTkRJQ0FUT1JfUE9TSVRJT05fUklHSFRcbiAgICBdKSxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgcGFyZW50Q2xhc3NOYW1lOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pXG4gIH0pLFxuICByb3dTdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgcm93RXZlbnRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICByb3dDbGFzc2VzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICBmaWx0ZXJzQ2xhc3NlczogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmlsdGVyUG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbXG4gICAgQ29uc3QuRklMVEVSU19QT1NJVElPTl9UT1AsXG4gICAgQ29uc3QuRklMVEVSU19QT1NJVElPTl9JTkxJTkUsXG4gICAgQ29uc3QuRklMVEVSU19QT1NJVElPTl9CT1RUT01cbiAgXSksXG4gIGZvb3RlckNsYXNzZXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRTb3J0ZWQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgZGF0YUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgb3JkZXI6IFByb3BUeXBlcy5vbmVPZihbQ29uc3QuU09SVF9ERVNDLCBDb25zdC5TT1JUX0FTQ10pLmlzUmVxdWlyZWRcbiAgfSkpLFxuICBzb3J0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGRhdGFGaWVsZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvcmRlcjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5TT1JUX0RFU0MsIENvbnN0LlNPUlRfQVNDXSksXG4gICAgc29ydEZ1bmM6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNvcnRDYXJldDogUHJvcFR5cGVzLmZ1bmNcbiAgfSksXG4gIGRlZmF1bHRTb3J0RGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoW0NvbnN0LlNPUlRfREVTQywgQ29uc3QuU09SVF9BU0NdKSxcbiAgb3ZlcmxheTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVGFibGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblNvcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRXh0ZXJuYWxGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkRhdGFTaXplQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLy8gSW5qZWN0IGZyb20gdG9vbGtpdFxuICBzZWFyY2g6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgc2VhcmNoVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWFyY2hDb250ZXh0OiBQcm9wVHlwZXMuZnVuY1xuICB9KSxcbiAgc2V0RGVwZW5kZW5jeU1vZHVsZXM6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5Cb290c3RyYXBUYWJsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGJvb3RzdHJhcDQ6IGZhbHNlLFxuICByZW1vdGU6IGZhbHNlLFxuICBzdHJpcGVkOiBmYWxzZSxcbiAgYm9yZGVyZWQ6IHRydWUsXG4gIGhvdmVyOiBmYWxzZSxcbiAgY29uZGVuc2VkOiBmYWxzZSxcbiAgbm9EYXRhSW5kaWNhdGlvbjogbnVsbCxcbiAgc2VsZWN0Um93OiB7XG4gICAgbW9kZTogQ29uc3QuUk9XX1NFTEVDVF9ESVNBQkxFRCxcbiAgICBzZWxlY3RlZDogW10sXG4gICAgaGlkZVNlbGVjdENvbHVtbjogdHJ1ZVxuICB9LFxuICBleHBhbmRSb3c6IHtcbiAgICByZW5kZXJlcjogdW5kZWZpbmVkLFxuICAgIGV4cGFuZGVkOiBbXSxcbiAgICBub25FeHBhbmRhYmxlOiBbXVxuICB9LFxuICBjZWxsRWRpdDoge1xuICAgIG1vZGU6IG51bGwsXG4gICAgbm9uRWRpdGFibGVSb3dzOiBbXVxuICB9LFxuICBmaWx0ZXJQb3NpdGlvbjogQ29uc3QuRklMVEVSU19QT1NJVElPTl9JTkxJTkVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvb3RzdHJhcFRhYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvYm9vdHN0cmFwLXRhYmxlLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbldpdGhSZXNldCgpIHt9XG5lbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LnJlc2V0V2FybmluZ0NhY2hlID0gZW1wdHlGdW5jdGlvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIHRocm93IGVycjtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGVsZW1lbnRUeXBlOiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW0sXG4gICAgZXhhY3Q6IGdldFNoaW0sXG5cbiAgICBjaGVja1Byb3BUeXBlczogZW1wdHlGdW5jdGlvbldpdGhSZXNldCxcbiAgICByZXNldFdhcm5pbmdDYWNoZTogZW1wdHlGdW5jdGlvblxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEhlYWRlckNlbGwgZnJvbSAnLi9oZWFkZXItY2VsbCc7XG5pbXBvcnQgU2VsZWN0aW9uSGVhZGVyQ2VsbCBmcm9tICcuL3Jvdy1zZWxlY3Rpb24vc2VsZWN0aW9uLWhlYWRlci1jZWxsJztcbmltcG9ydCBFeHBhbmRIZWFkZXJDZWxsIGZyb20gJy4vcm93LWV4cGFuZC9leHBhbmQtaGVhZGVyLWNlbGwnO1xuaW1wb3J0IHdpdGhIZWFkZXJTZWxlY3Rpb24gZnJvbSAnLi9yb3ctc2VsZWN0aW9uL3NlbGVjdGlvbi1oZWFkZXItY2VsbC1jb25zdW1lcic7XG5pbXBvcnQgd2l0aEhlYWRlckV4cGFuc2lvbiBmcm9tICcuL3Jvdy1leHBhbmQvZXhwYW5kLWhlYWRlci1jZWxsLWNvbnN1bWVyJztcbmltcG9ydCBDb25zdCBmcm9tICcuL2NvbnN0JztcblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjbGFzc05hbWUsXG4gICAgY29sdW1ucyxcbiAgICBvblNvcnQsXG4gICAgb25GaWx0ZXIsXG4gICAgc29ydEZpZWxkLFxuICAgIHNvcnRPcmRlcixcbiAgICBzZWxlY3RSb3csXG4gICAgZXhwYW5kUm93LFxuICAgIGN1cnJGaWx0ZXJzLFxuICAgIG9uRXh0ZXJuYWxGaWx0ZXIsXG4gICAgZmlsdGVyUG9zaXRpb24sXG4gICAgZ2xvYmFsU29ydENhcmV0LFxuICAgIHdyYXBwZXJDbGFzc2VzXG4gIH0gPSBwcm9wcztcblxuICBsZXQgU2VsZWN0aW9uSGVhZGVyQ2VsbENvbXAgPSAoKSA9PiBudWxsO1xuICBsZXQgRXhwYW5zaW9uSGVhZGVyQ2VsbENvbXAgPSAoKSA9PiBudWxsO1xuXG4gIGlmIChleHBhbmRSb3cuc2hvd0V4cGFuZENvbHVtbikge1xuICAgIEV4cGFuc2lvbkhlYWRlckNlbGxDb21wID0gd2l0aEhlYWRlckV4cGFuc2lvbihFeHBhbmRIZWFkZXJDZWxsKTtcbiAgfVxuXG4gIGlmIChzZWxlY3RSb3cpIHtcbiAgICBTZWxlY3Rpb25IZWFkZXJDZWxsQ29tcCA9IHdpdGhIZWFkZXJTZWxlY3Rpb24oU2VsZWN0aW9uSGVhZGVyQ2VsbCk7XG4gIH1cblxuICBjb25zdCBpc1JlbmRlckZ1bmN0aW9uQ29sdW1uSW5MZWZ0ID0gKFxuICAgIHBvc2l0aW9uID0gQ29uc3QuSU5ESUNBVE9SX1BPU0lUSU9OX0xFRlRcbiAgKSA9PiBwb3NpdGlvbiA9PT0gQ29uc3QuSU5ESUNBVE9SX1BPU0lUSU9OX0xFRlQ7XG5cbiAgY29uc3QgY2hpbGRyZW5zID0gW1xuICAgIGNvbHVtbnMubWFwKChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJTb3J0ID0gY29sdW1uLmRhdGFGaWVsZCA9PT0gc29ydEZpZWxkO1xuICAgICAgY29uc3QgaXNMYXN0U29ydGluZyA9IGNvbHVtbi5kYXRhRmllbGQgPT09IHNvcnRGaWVsZDtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEhlYWRlckNlbGxcbiAgICAgICAgICBpbmRleD17IGkgfVxuICAgICAgICAgIGtleT17IGNvbHVtbi5kYXRhRmllbGQgfVxuICAgICAgICAgIGNvbHVtbj17IGNvbHVtbiB9XG4gICAgICAgICAgb25Tb3J0PXsgb25Tb3J0IH1cbiAgICAgICAgICBzb3J0aW5nPXsgY3VyclNvcnQgfVxuICAgICAgICAgIHNvcnRPcmRlcj17IHNvcnRPcmRlciB9XG4gICAgICAgICAgZ2xvYmFsU29ydENhcmV0PXsgZ2xvYmFsU29ydENhcmV0IH1cbiAgICAgICAgICBpc0xhc3RTb3J0aW5nPXsgaXNMYXN0U29ydGluZyB9XG4gICAgICAgICAgb25GaWx0ZXI9eyBvbkZpbHRlciB9XG4gICAgICAgICAgY3VyckZpbHRlcnM9eyBjdXJyRmlsdGVycyB9XG4gICAgICAgICAgb25FeHRlcm5hbEZpbHRlcj17IG9uRXh0ZXJuYWxGaWx0ZXIgfVxuICAgICAgICAgIGZpbHRlclBvc2l0aW9uPXsgZmlsdGVyUG9zaXRpb24gfVxuICAgICAgICAvPik7XG4gICAgfSlcbiAgXTtcblxuICBpZiAoIXNlbGVjdFJvdy5oaWRlU2VsZWN0Q29sdW1uKSB7XG4gICAgaWYgKGlzUmVuZGVyRnVuY3Rpb25Db2x1bW5JbkxlZnQoc2VsZWN0Um93LnNlbGVjdENvbHVtblBvc2l0aW9uKSkge1xuICAgICAgY2hpbGRyZW5zLnVuc2hpZnQoPFNlbGVjdGlvbkhlYWRlckNlbGxDb21wIGtleT1cInNlbGVjdGlvblwiIC8+KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGRyZW5zLnB1c2goPFNlbGVjdGlvbkhlYWRlckNlbGxDb21wIGtleT1cInNlbGVjdGlvblwiIC8+KTtcbiAgICB9XG4gIH1cblxuICBpZiAoZXhwYW5kUm93LnNob3dFeHBhbmRDb2x1bW4pIHtcbiAgICBpZiAoaXNSZW5kZXJGdW5jdGlvbkNvbHVtbkluTGVmdChleHBhbmRSb3cuZXhwYW5kQ29sdW1uUG9zaXRpb24pKSB7XG4gICAgICBjaGlsZHJlbnMudW5zaGlmdCg8RXhwYW5zaW9uSGVhZGVyQ2VsbENvbXAga2V5PVwiZXhwYW5zaW9uXCIgLz4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZHJlbnMucHVzaCg8RXhwYW5zaW9uSGVhZGVyQ2VsbENvbXAga2V5PVwiZXhwYW5zaW9uXCIgLz4pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHRoZWFkIGNsYXNzTmFtZT17IHdyYXBwZXJDbGFzc2VzIH0+XG4gICAgICA8dHIgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH0+XG4gICAgICAgIHsgY2hpbGRyZW5zIH1cbiAgICAgIDwvdHI+XG4gICAgPC90aGVhZD5cbiAgKTtcbn07XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBvblNvcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIHNvcnRGaWVsZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc29ydE9yZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RSb3c6IFByb3BUeXBlcy5vYmplY3QsXG4gIGN1cnJGaWx0ZXJzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBvbkV4dGVybmFsRmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2xvYmFsU29ydENhcmV0OiBQcm9wVHlwZXMuZnVuYyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB3cmFwcGVyQ2xhc3NlczogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXhwYW5kUm93OiBQcm9wVHlwZXMub2JqZWN0LFxuICBmaWx0ZXJQb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBDb25zdC5GSUxURVJTX1BPU0lUSU9OX1RPUCxcbiAgICBDb25zdC5GSUxURVJTX1BPU0lUSU9OX0lOTElORSxcbiAgICBDb25zdC5GSUxURVJTX1BPU0lUSU9OX0JPVFRPTVxuICBdKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvaGVhZGVyLmpzIiwiLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBDb25zdCBmcm9tICcuL2NvbnN0JztcbmltcG9ydCBTb3J0U3ltYm9sIGZyb20gJy4vc29ydC9zeW1ib2wnO1xuaW1wb3J0IFNvcnRDYXJldCBmcm9tICcuL3NvcnQvY2FyZXQnO1xuaW1wb3J0IF8gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgZXZlbnREZWxlZ2F0ZXIgZnJvbSAnLi9jZWxsLWV2ZW50LWRlbGVnYXRlcic7XG5cblxuY2xhc3MgSGVhZGVyQ2VsbCBleHRlbmRzIGV2ZW50RGVsZWdhdGVyKFJlYWN0LkNvbXBvbmVudCkge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY29sdW1uLFxuICAgICAgaW5kZXgsXG4gICAgICBvblNvcnQsXG4gICAgICBzb3J0aW5nLFxuICAgICAgc29ydE9yZGVyLFxuICAgICAgaXNMYXN0U29ydGluZyxcbiAgICAgIG9uRmlsdGVyLFxuICAgICAgY3VyckZpbHRlcnMsXG4gICAgICBmaWx0ZXJQb3NpdGlvbixcbiAgICAgIG9uRXh0ZXJuYWxGaWx0ZXIsXG4gICAgICBnbG9iYWxTb3J0Q2FyZXRcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHtcbiAgICAgIHRleHQsXG4gICAgICBzb3J0LFxuICAgICAgc29ydENhcmV0LFxuICAgICAgZmlsdGVyLFxuICAgICAgZmlsdGVyUmVuZGVyZXIsXG4gICAgICBoZWFkZXJUaXRsZSxcbiAgICAgIGhlYWRlckFsaWduLFxuICAgICAgaGVhZGVyRm9ybWF0dGVyLFxuICAgICAgaGVhZGVyRXZlbnRzLFxuICAgICAgaGVhZGVyQ2xhc3NlcyxcbiAgICAgIGhlYWRlclN0eWxlLFxuICAgICAgaGVhZGVyQXR0cnMsXG4gICAgICBoZWFkZXJTb3J0aW5nQ2xhc3NlcyxcbiAgICAgIGhlYWRlclNvcnRpbmdTdHlsZVxuICAgIH0gPSBjb2x1bW47XG5cbiAgICBjb25zdCBzb3J0Q2FyZXRmdW5jID0gc29ydENhcmV0IHx8IGdsb2JhbFNvcnRDYXJldDtcblxuICAgIGNvbnN0IGRlbGVnYXRlRXZlbnRzID0gdGhpcy5kZWxlZ2F0ZShoZWFkZXJFdmVudHMpO1xuXG4gICAgY29uc3QgY3VzdG9tQXR0cnMgPSBfLmlzRnVuY3Rpb24oaGVhZGVyQXR0cnMpXG4gICAgICA/IGhlYWRlckF0dHJzKGNvbHVtbiwgaW5kZXgpXG4gICAgICA6IChoZWFkZXJBdHRycyB8fCB7fSk7XG5cbiAgICBjb25zdCBjZWxsQXR0cnMgPSB7XG4gICAgICAuLi5jdXN0b21BdHRycyxcbiAgICAgIC4uLmRlbGVnYXRlRXZlbnRzLFxuICAgICAgdGFiSW5kZXg6IF8uaXNEZWZpbmVkKGN1c3RvbUF0dHJzLnRhYkluZGV4KSA/IGN1c3RvbUF0dHJzLnRhYkluZGV4IDogMFxuICAgIH07XG5cbiAgICBsZXQgc29ydFN5bWJvbDtcbiAgICBsZXQgZmlsdGVyRWxtO1xuICAgIGxldCBjZWxsU3R5bGUgPSB7fTtcbiAgICBsZXQgY2VsbENsYXNzZXMgPSBfLmlzRnVuY3Rpb24oaGVhZGVyQ2xhc3NlcykgPyBoZWFkZXJDbGFzc2VzKGNvbHVtbiwgaW5kZXgpIDogaGVhZGVyQ2xhc3NlcztcblxuICAgIGlmIChoZWFkZXJTdHlsZSkge1xuICAgICAgY2VsbFN0eWxlID0gXy5pc0Z1bmN0aW9uKGhlYWRlclN0eWxlKSA/IGhlYWRlclN0eWxlKGNvbHVtbiwgaW5kZXgpIDogaGVhZGVyU3R5bGU7XG4gICAgICBjZWxsU3R5bGUgPSBjZWxsU3R5bGUgPyB7IC4uLmNlbGxTdHlsZSB9IDogY2VsbFN0eWxlO1xuICAgIH1cblxuICAgIGlmIChoZWFkZXJUaXRsZSkge1xuICAgICAgY2VsbEF0dHJzLnRpdGxlID0gXy5pc0Z1bmN0aW9uKGhlYWRlclRpdGxlKSA/IGhlYWRlclRpdGxlKGNvbHVtbiwgaW5kZXgpIDogdGV4dDtcbiAgICB9XG5cbiAgICBpZiAoaGVhZGVyQWxpZ24pIHtcbiAgICAgIGNlbGxTdHlsZS50ZXh0QWxpZ24gPSBfLmlzRnVuY3Rpb24oaGVhZGVyQWxpZ24pID8gaGVhZGVyQWxpZ24oY29sdW1uLCBpbmRleCkgOiBoZWFkZXJBbGlnbjtcbiAgICB9XG5cbiAgICBpZiAoc29ydCkge1xuICAgICAgY29uc3QgY3VzdG9tQ2xpY2sgPSBjZWxsQXR0cnMub25DbGljaztcbiAgICAgIGNlbGxBdHRyc1snYXJpYS1sYWJlbCddID0gc29ydGluZyA/IGAke3RleHR9IHNvcnQgJHtzb3J0T3JkZXJ9YCA6IGAke3RleHR9IHNvcnRhYmxlYDtcbiAgICAgIGNlbGxBdHRycy5vbktleVVwID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgb25Tb3J0KGNvbHVtbik7XG4gICAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihjdXN0b21DbGljaykpIGN1c3RvbUNsaWNrKGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY2VsbEF0dHJzLm9uQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBvblNvcnQoY29sdW1uKTtcbiAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihjdXN0b21DbGljaykpIGN1c3RvbUNsaWNrKGUpO1xuICAgICAgfTtcbiAgICAgIGNlbGxBdHRycy5jbGFzc05hbWUgPSBjcyhjZWxsQXR0cnMuY2xhc3NOYW1lLCAnc29ydGFibGUnKTtcblxuICAgICAgaWYgKHNvcnRpbmcpIHtcbiAgICAgICAgc29ydFN5bWJvbCA9IHNvcnRDYXJldGZ1bmMgP1xuICAgICAgICAgIHNvcnRDYXJldGZ1bmMoc29ydE9yZGVyLCBjb2x1bW4pIDpcbiAgICAgICAgICA8U29ydENhcmV0IG9yZGVyPXsgc29ydE9yZGVyIH0gLz47XG5cbiAgICAgICAgLy8gYXBwZW5kIGN1c3RvbWl6ZWQgY2xhc3NlcyBvciBzdHlsZSBpZiB0YWJsZSB3YXMgc29ydGluZyBiYXNlZCBvbiB0aGUgY3VycmVudCBjb2x1bW4uXG4gICAgICAgIGNlbGxDbGFzc2VzID0gY3MoXG4gICAgICAgICAgY2VsbENsYXNzZXMsXG4gICAgICAgICAgXy5pc0Z1bmN0aW9uKGhlYWRlclNvcnRpbmdDbGFzc2VzKVxuICAgICAgICAgICAgPyBoZWFkZXJTb3J0aW5nQ2xhc3Nlcyhjb2x1bW4sIHNvcnRPcmRlciwgaXNMYXN0U29ydGluZywgaW5kZXgpXG4gICAgICAgICAgICA6IGhlYWRlclNvcnRpbmdDbGFzc2VzXG4gICAgICAgICk7XG5cbiAgICAgICAgY2VsbFN0eWxlID0ge1xuICAgICAgICAgIC4uLmNlbGxTdHlsZSxcbiAgICAgICAgICAuLi5fLmlzRnVuY3Rpb24oaGVhZGVyU29ydGluZ1N0eWxlKVxuICAgICAgICAgICAgPyBoZWFkZXJTb3J0aW5nU3R5bGUoY29sdW1uLCBzb3J0T3JkZXIsIGlzTGFzdFNvcnRpbmcsIGluZGV4KVxuICAgICAgICAgICAgOiBoZWFkZXJTb3J0aW5nU3R5bGVcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvcnRTeW1ib2wgPSBzb3J0Q2FyZXRmdW5jID8gc29ydENhcmV0ZnVuYyh1bmRlZmluZWQsIGNvbHVtbikgOiA8U29ydFN5bWJvbCAvPjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2VsbENsYXNzZXMpIGNlbGxBdHRycy5jbGFzc05hbWUgPSBjcyhjZWxsQXR0cnMuY2xhc3NOYW1lLCBjZWxsQ2xhc3Nlcyk7XG4gICAgaWYgKCFfLmlzRW1wdHlPYmplY3QoY2VsbFN0eWxlKSkgY2VsbEF0dHJzLnN0eWxlID0gY2VsbFN0eWxlO1xuXG4gICAgaWYgKGZpbHRlclBvc2l0aW9uID09PSBDb25zdC5GSUxURVJTX1BPU0lUSU9OX0lOTElORSkge1xuICAgICAgaWYgKGZpbHRlclJlbmRlcmVyKSB7XG4gICAgICAgIGNvbnN0IG9uQ3VzdG9tRmlsdGVyID0gb25FeHRlcm5hbEZpbHRlcihjb2x1bW4sIGZpbHRlci5wcm9wcy50eXBlKTtcbiAgICAgICAgZmlsdGVyRWxtID0gZmlsdGVyUmVuZGVyZXIob25DdXN0b21GaWx0ZXIsIGNvbHVtbik7XG4gICAgICB9IGVsc2UgaWYgKGZpbHRlcikge1xuICAgICAgICBmaWx0ZXJFbG0gPSAoXG4gICAgICAgICAgPGZpbHRlci5GaWx0ZXJcbiAgICAgICAgICAgIHsgLi4uZmlsdGVyLnByb3BzIH1cbiAgICAgICAgICAgIGZpbHRlclN0YXRlPXsgY3VyckZpbHRlcnNbY29sdW1uLmRhdGFGaWVsZF0gfVxuICAgICAgICAgICAgb25GaWx0ZXI9eyBvbkZpbHRlciB9XG4gICAgICAgICAgICBjb2x1bW49eyBjb2x1bW4gfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGRyZW4gPSBoZWFkZXJGb3JtYXR0ZXIgP1xuICAgICAgaGVhZGVyRm9ybWF0dGVyKGNvbHVtbiwgaW5kZXgsIHsgc29ydEVsZW1lbnQ6IHNvcnRTeW1ib2wsIGZpbHRlckVsZW1lbnQ6IGZpbHRlckVsbSB9KSA6XG4gICAgICB0ZXh0O1xuXG4gICAgaWYgKGhlYWRlckZvcm1hdHRlcikge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywgY2VsbEF0dHJzLCBjaGlsZHJlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywgY2VsbEF0dHJzLCBjaGlsZHJlbiwgc29ydFN5bWJvbCwgZmlsdGVyRWxtKTtcbiAgfVxufVxuXG5IZWFkZXJDZWxsLnByb3BUeXBlcyA9IHtcbiAgY29sdW1uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGRhdGFGaWVsZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgQ29uc3QuVFlQRV9TVFJJTkcsXG4gICAgICBDb25zdC5UWVBFX05VTUJFUixcbiAgICAgIENvbnN0LlRZUEVfQk9PTEVBTixcbiAgICAgIENvbnN0LlRZUEVfREFURVxuICAgIF0pLFxuICAgIGlzRHVtbXlGaWVsZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaGlkZGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoZWFkZXJGb3JtYXR0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGZvcm1hdHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZm9ybWF0RXh0cmFEYXRhOiBQcm9wVHlwZXMuYW55LFxuICAgIGhlYWRlckNsYXNzZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgY2xhc3NlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBoZWFkZXJTdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBoZWFkZXJUaXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGhlYWRlckV2ZW50czogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBldmVudHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgaGVhZGVyQWxpZ246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgYWxpZ246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgaGVhZGVyQXR0cnM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgYXR0cnM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgc29ydDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc29ydEZ1bmM6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU29ydDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZWRpdG9yOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGVkaXRhYmxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBlZGl0Q2VsbFN0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGVkaXRDZWxsQ2xhc3NlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBlZGl0b3JTdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBlZGl0b3JDbGFzc2VzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGVkaXRvclJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB2YWxpZGF0b3I6IFByb3BUeXBlcy5mdW5jLFxuICAgIGZpbHRlcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBmaWx0ZXJSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZmlsdGVyVmFsdWU6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNlYXJjaGFibGU6IFByb3BUeXBlcy5ib29sXG4gIH0pLmlzUmVxdWlyZWQsXG4gIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9uU29ydDogUHJvcFR5cGVzLmZ1bmMsXG4gIHNvcnRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBzb3J0T3JkZXI6IFByb3BUeXBlcy5vbmVPZihbQ29uc3QuU09SVF9BU0MsIENvbnN0LlNPUlRfREVTQ10pLFxuICBzb3J0Q2FyZXQ6IFByb3BUeXBlcy5mdW5jLFxuICBpc0xhc3RTb3J0aW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25GaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBmaWx0ZXJQb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5GSUxURVJTX1BPU0lUSU9OX0lOTElORSxcbiAgICBDb25zdC5GSUxURVJTX1BPU0lUSU9OX0JPVFRPTSwgQ29uc3QuRklMVEVSU19QT1NJVElPTl9UT1BdKSxcbiAgY3VyckZpbHRlcnM6IFByb3BUeXBlcy5vYmplY3QsXG4gIG9uRXh0ZXJuYWxGaWx0ZXI6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJDZWxsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvaGVhZGVyLWNlbGwuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm9vdHN0cmFwQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL2Jvb3RzdHJhcCc7XG5cbmNvbnN0IFNvcnRTeW1ib2wgPSAoKSA9PiAoXG4gIDxCb290c3RyYXBDb250ZXh0LkNvbnN1bWVyPlxuICAgIHtcbiAgICAgICh7IGJvb3RzdHJhcDQgfSkgPT4gKGJvb3RzdHJhcDQgPyAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9yZGVyLTRcIiAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3JkZXJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZXRcIiAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkcm9wdXBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmV0XCIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICkpXG4gICAgfVxuICA8L0Jvb3RzdHJhcENvbnRleHQuQ29uc3VtZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTb3J0U3ltYm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc29ydC9zeW1ib2wuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcbmltcG9ydCB7IEJvb3RzdHJhcENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9ib290c3RyYXAnO1xuXG5cbmNvbnN0IFNvcnRDYXJldCA9ICh7IG9yZGVyIH0pID0+IHtcbiAgY29uc3Qgb3JkZXJDbGFzcyA9IGNzKCdyZWFjdC1ib290c3RyYXAtdGFibGUtc29ydC1vcmRlcicsIHtcbiAgICBkcm9wdXA6IG9yZGVyID09PSBDb25zdC5TT1JUX0FTQ1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxCb290c3RyYXBDb250ZXh0LkNvbnN1bWVyPlxuICAgICAge1xuICAgICAgICAoeyBib290c3RyYXA0IH0pID0+IChib290c3RyYXA0ID8gKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17IGBjYXJldC00LSR7b3JkZXJ9YCB9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsgb3JkZXJDbGFzcyB9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZXRcIiAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICA8L0Jvb3RzdHJhcENvbnRleHQuQ29uc3VtZXI+XG4gICk7XG59O1xuXG5Tb3J0Q2FyZXQucHJvcFR5cGVzID0ge1xuICBvcmRlcjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5TT1JUX0FTQywgQ29uc3QuU09SVF9ERVNDXSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU29ydENhcmV0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc29ydC9jYXJldC5qcyIsIi8vICAgICBVbmRlcnNjb3JlLmpzIDEuOS4xXG4vLyAgICAgaHR0cDovL3VuZGVyc2NvcmVqcy5vcmdcbi8vICAgICAoYykgMjAwOS0yMDE4IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4vLyAgICAgVW5kZXJzY29yZSBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuKGZ1bmN0aW9uKCkge1xuXG4gIC8vIEJhc2VsaW5lIHNldHVwXG4gIC8vIC0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gRXN0YWJsaXNoIHRoZSByb290IG9iamVjdCwgYHdpbmRvd2AgKGBzZWxmYCkgaW4gdGhlIGJyb3dzZXIsIGBnbG9iYWxgXG4gIC8vIG9uIHRoZSBzZXJ2ZXIsIG9yIGB0aGlzYCBpbiBzb21lIHZpcnR1YWwgbWFjaGluZXMuIFdlIHVzZSBgc2VsZmBcbiAgLy8gaW5zdGVhZCBvZiBgd2luZG93YCBmb3IgYFdlYldvcmtlcmAgc3VwcG9ydC5cbiAgdmFyIHJvb3QgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmLnNlbGYgPT09IHNlbGYgJiYgc2VsZiB8fFxuICAgICAgICAgICAgdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwuZ2xvYmFsID09PSBnbG9iYWwgJiYgZ2xvYmFsIHx8XG4gICAgICAgICAgICB0aGlzIHx8XG4gICAgICAgICAgICB7fTtcblxuICAvLyBTYXZlIHRoZSBwcmV2aW91cyB2YWx1ZSBvZiB0aGUgYF9gIHZhcmlhYmxlLlxuICB2YXIgcHJldmlvdXNVbmRlcnNjb3JlID0gcm9vdC5fO1xuXG4gIC8vIFNhdmUgYnl0ZXMgaW4gdGhlIG1pbmlmaWVkIChidXQgbm90IGd6aXBwZWQpIHZlcnNpb246XG4gIHZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlLCBPYmpQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBTeW1ib2xQcm90byA9IHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnID8gU3ltYm9sLnByb3RvdHlwZSA6IG51bGw7XG5cbiAgLy8gQ3JlYXRlIHF1aWNrIHJlZmVyZW5jZSB2YXJpYWJsZXMgZm9yIHNwZWVkIGFjY2VzcyB0byBjb3JlIHByb3RvdHlwZXMuXG4gIHZhciBwdXNoID0gQXJyYXlQcm90by5wdXNoLFxuICAgICAgc2xpY2UgPSBBcnJheVByb3RvLnNsaWNlLFxuICAgICAgdG9TdHJpbmcgPSBPYmpQcm90by50b1N0cmluZyxcbiAgICAgIGhhc093blByb3BlcnR5ID0gT2JqUHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbiAgLy8gQWxsICoqRUNNQVNjcmlwdCA1KiogbmF0aXZlIGZ1bmN0aW9uIGltcGxlbWVudGF0aW9ucyB0aGF0IHdlIGhvcGUgdG8gdXNlXG4gIC8vIGFyZSBkZWNsYXJlZCBoZXJlLlxuICB2YXIgbmF0aXZlSXNBcnJheSA9IEFycmF5LmlzQXJyYXksXG4gICAgICBuYXRpdmVLZXlzID0gT2JqZWN0LmtleXMsXG4gICAgICBuYXRpdmVDcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuXG4gIC8vIE5ha2VkIGZ1bmN0aW9uIHJlZmVyZW5jZSBmb3Igc3Vycm9nYXRlLXByb3RvdHlwZS1zd2FwcGluZy5cbiAgdmFyIEN0b3IgPSBmdW5jdGlvbigpe307XG5cbiAgLy8gQ3JlYXRlIGEgc2FmZSByZWZlcmVuY2UgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0IGZvciB1c2UgYmVsb3cuXG4gIHZhciBfID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIF8pIHJldHVybiBvYmo7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIF8pKSByZXR1cm4gbmV3IF8ob2JqKTtcbiAgICB0aGlzLl93cmFwcGVkID0gb2JqO1xuICB9O1xuXG4gIC8vIEV4cG9ydCB0aGUgVW5kZXJzY29yZSBvYmplY3QgZm9yICoqTm9kZS5qcyoqLCB3aXRoXG4gIC8vIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5IGZvciB0aGVpciBvbGQgbW9kdWxlIEFQSS4gSWYgd2UncmUgaW5cbiAgLy8gdGhlIGJyb3dzZXIsIGFkZCBgX2AgYXMgYSBnbG9iYWwgb2JqZWN0LlxuICAvLyAoYG5vZGVUeXBlYCBpcyBjaGVja2VkIHRvIGVuc3VyZSB0aGF0IGBtb2R1bGVgXG4gIC8vIGFuZCBgZXhwb3J0c2AgYXJlIG5vdCBIVE1MIGVsZW1lbnRzLilcbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9ICd1bmRlZmluZWQnICYmICFleHBvcnRzLm5vZGVUeXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gXztcbiAgICB9XG4gICAgZXhwb3J0cy5fID0gXztcbiAgfSBlbHNlIHtcbiAgICByb290Ll8gPSBfO1xuICB9XG5cbiAgLy8gQ3VycmVudCB2ZXJzaW9uLlxuICBfLlZFUlNJT04gPSAnMS45LjEnO1xuXG4gIC8vIEludGVybmFsIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBlZmZpY2llbnQgKGZvciBjdXJyZW50IGVuZ2luZXMpIHZlcnNpb25cbiAgLy8gb2YgdGhlIHBhc3NlZC1pbiBjYWxsYmFjaywgdG8gYmUgcmVwZWF0ZWRseSBhcHBsaWVkIGluIG90aGVyIFVuZGVyc2NvcmVcbiAgLy8gZnVuY3Rpb25zLlxuICB2YXIgb3B0aW1pemVDYiA9IGZ1bmN0aW9uKGZ1bmMsIGNvbnRleHQsIGFyZ0NvdW50KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgcmV0dXJuIGZ1bmM7XG4gICAgc3dpdGNoIChhcmdDb3VudCA9PSBudWxsID8gMyA6IGFyZ0NvdW50KSB7XG4gICAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIHZhbHVlKTtcbiAgICAgIH07XG4gICAgICAvLyBUaGUgMi1hcmd1bWVudCBjYXNlIGlzIG9taXR0ZWQgYmVjYXVzZSB3ZeKAmXJlIG5vdCB1c2luZyBpdC5cbiAgICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgICB9O1xuICAgICAgY2FzZSA0OiByZXR1cm4gZnVuY3Rpb24oYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBidWlsdGluSXRlcmF0ZWU7XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgY2FsbGJhY2tzIHRoYXQgY2FuIGJlIGFwcGxpZWQgdG8gZWFjaFxuICAvLyBlbGVtZW50IGluIGEgY29sbGVjdGlvbiwgcmV0dXJuaW5nIHRoZSBkZXNpcmVkIHJlc3VsdCDigJQgZWl0aGVyIGBpZGVudGl0eWAsXG4gIC8vIGFuIGFyYml0cmFyeSBjYWxsYmFjaywgYSBwcm9wZXJ0eSBtYXRjaGVyLCBvciBhIHByb3BlcnR5IGFjY2Vzc29yLlxuICB2YXIgY2IgPSBmdW5jdGlvbih2YWx1ZSwgY29udGV4dCwgYXJnQ291bnQpIHtcbiAgICBpZiAoXy5pdGVyYXRlZSAhPT0gYnVpbHRpbkl0ZXJhdGVlKSByZXR1cm4gXy5pdGVyYXRlZSh2YWx1ZSwgY29udGV4dCk7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBfLmlkZW50aXR5O1xuICAgIGlmIChfLmlzRnVuY3Rpb24odmFsdWUpKSByZXR1cm4gb3B0aW1pemVDYih2YWx1ZSwgY29udGV4dCwgYXJnQ291bnQpO1xuICAgIGlmIChfLmlzT2JqZWN0KHZhbHVlKSAmJiAhXy5pc0FycmF5KHZhbHVlKSkgcmV0dXJuIF8ubWF0Y2hlcih2YWx1ZSk7XG4gICAgcmV0dXJuIF8ucHJvcGVydHkodmFsdWUpO1xuICB9O1xuXG4gIC8vIEV4dGVybmFsIHdyYXBwZXIgZm9yIG91ciBjYWxsYmFjayBnZW5lcmF0b3IuIFVzZXJzIG1heSBjdXN0b21pemVcbiAgLy8gYF8uaXRlcmF0ZWVgIGlmIHRoZXkgd2FudCBhZGRpdGlvbmFsIHByZWRpY2F0ZS9pdGVyYXRlZSBzaG9ydGhhbmQgc3R5bGVzLlxuICAvLyBUaGlzIGFic3RyYWN0aW9uIGhpZGVzIHRoZSBpbnRlcm5hbC1vbmx5IGFyZ0NvdW50IGFyZ3VtZW50LlxuICBfLml0ZXJhdGVlID0gYnVpbHRpbkl0ZXJhdGVlID0gZnVuY3Rpb24odmFsdWUsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gY2IodmFsdWUsIGNvbnRleHQsIEluZmluaXR5KTtcbiAgfTtcblxuICAvLyBTb21lIGZ1bmN0aW9ucyB0YWtlIGEgdmFyaWFibGUgbnVtYmVyIG9mIGFyZ3VtZW50cywgb3IgYSBmZXcgZXhwZWN0ZWRcbiAgLy8gYXJndW1lbnRzIGF0IHRoZSBiZWdpbm5pbmcgYW5kIHRoZW4gYSB2YXJpYWJsZSBudW1iZXIgb2YgdmFsdWVzIHRvIG9wZXJhdGVcbiAgLy8gb24uIFRoaXMgaGVscGVyIGFjY3VtdWxhdGVzIGFsbCByZW1haW5pbmcgYXJndW1lbnRzIHBhc3QgdGhlIGZ1bmN0aW9u4oCZc1xuICAvLyBhcmd1bWVudCBsZW5ndGggKG9yIGFuIGV4cGxpY2l0IGBzdGFydEluZGV4YCksIGludG8gYW4gYXJyYXkgdGhhdCBiZWNvbWVzXG4gIC8vIHRoZSBsYXN0IGFyZ3VtZW50LiBTaW1pbGFyIHRvIEVTNuKAmXMgXCJyZXN0IHBhcmFtZXRlclwiLlxuICB2YXIgcmVzdEFyZ3VtZW50cyA9IGZ1bmN0aW9uKGZ1bmMsIHN0YXJ0SW5kZXgpIHtcbiAgICBzdGFydEluZGV4ID0gc3RhcnRJbmRleCA9PSBudWxsID8gZnVuYy5sZW5ndGggLSAxIDogK3N0YXJ0SW5kZXg7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGxlbmd0aCA9IE1hdGgubWF4KGFyZ3VtZW50cy5sZW5ndGggLSBzdGFydEluZGV4LCAwKSxcbiAgICAgICAgICByZXN0ID0gQXJyYXkobGVuZ3RoKSxcbiAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICBmb3IgKDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgcmVzdFtpbmRleF0gPSBhcmd1bWVudHNbaW5kZXggKyBzdGFydEluZGV4XTtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAoc3RhcnRJbmRleCkge1xuICAgICAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpcywgcmVzdCk7XG4gICAgICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBhcmd1bWVudHNbMF0sIHJlc3QpO1xuICAgICAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpcywgYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIHJlc3QpO1xuICAgICAgfVxuICAgICAgdmFyIGFyZ3MgPSBBcnJheShzdGFydEluZGV4ICsgMSk7XG4gICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBzdGFydEluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIGFyZ3NbaW5kZXhdID0gYXJndW1lbnRzW2luZGV4XTtcbiAgICAgIH1cbiAgICAgIGFyZ3Nbc3RhcnRJbmRleF0gPSByZXN0O1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBBbiBpbnRlcm5hbCBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgYSBuZXcgb2JqZWN0IHRoYXQgaW5oZXJpdHMgZnJvbSBhbm90aGVyLlxuICB2YXIgYmFzZUNyZWF0ZSA9IGZ1bmN0aW9uKHByb3RvdHlwZSkge1xuICAgIGlmICghXy5pc09iamVjdChwcm90b3R5cGUpKSByZXR1cm4ge307XG4gICAgaWYgKG5hdGl2ZUNyZWF0ZSkgcmV0dXJuIG5hdGl2ZUNyZWF0ZShwcm90b3R5cGUpO1xuICAgIEN0b3IucHJvdG90eXBlID0gcHJvdG90eXBlO1xuICAgIHZhciByZXN1bHQgPSBuZXcgQ3RvcjtcbiAgICBDdG9yLnByb3RvdHlwZSA9IG51bGw7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICB2YXIgc2hhbGxvd1Byb3BlcnR5ID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiA9PSBudWxsID8gdm9pZCAwIDogb2JqW2tleV07XG4gICAgfTtcbiAgfTtcblxuICB2YXIgaGFzID0gZnVuY3Rpb24ob2JqLCBwYXRoKSB7XG4gICAgcmV0dXJuIG9iaiAhPSBudWxsICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBwYXRoKTtcbiAgfVxuXG4gIHZhciBkZWVwR2V0ID0gZnVuY3Rpb24ob2JqLCBwYXRoKSB7XG4gICAgdmFyIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICAgIG9iaiA9IG9ialtwYXRoW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIGxlbmd0aCA/IG9iaiA6IHZvaWQgMDtcbiAgfTtcblxuICAvLyBIZWxwZXIgZm9yIGNvbGxlY3Rpb24gbWV0aG9kcyB0byBkZXRlcm1pbmUgd2hldGhlciBhIGNvbGxlY3Rpb25cbiAgLy8gc2hvdWxkIGJlIGl0ZXJhdGVkIGFzIGFuIGFycmF5IG9yIGFzIGFuIG9iamVjdC5cbiAgLy8gUmVsYXRlZDogaHR0cDovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9sZW5ndGhcbiAgLy8gQXZvaWRzIGEgdmVyeSBuYXN0eSBpT1MgOCBKSVQgYnVnIG9uIEFSTS02NC4gIzIwOTRcbiAgdmFyIE1BWF9BUlJBWV9JTkRFWCA9IE1hdGgucG93KDIsIDUzKSAtIDE7XG4gIHZhciBnZXRMZW5ndGggPSBzaGFsbG93UHJvcGVydHkoJ2xlbmd0aCcpO1xuICB2YXIgaXNBcnJheUxpa2UgPSBmdW5jdGlvbihjb2xsZWN0aW9uKSB7XG4gICAgdmFyIGxlbmd0aCA9IGdldExlbmd0aChjb2xsZWN0aW9uKTtcbiAgICByZXR1cm4gdHlwZW9mIGxlbmd0aCA9PSAnbnVtYmVyJyAmJiBsZW5ndGggPj0gMCAmJiBsZW5ndGggPD0gTUFYX0FSUkFZX0lOREVYO1xuICB9O1xuXG4gIC8vIENvbGxlY3Rpb24gRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gVGhlIGNvcm5lcnN0b25lLCBhbiBgZWFjaGAgaW1wbGVtZW50YXRpb24sIGFrYSBgZm9yRWFjaGAuXG4gIC8vIEhhbmRsZXMgcmF3IG9iamVjdHMgaW4gYWRkaXRpb24gdG8gYXJyYXktbGlrZXMuIFRyZWF0cyBhbGxcbiAgLy8gc3BhcnNlIGFycmF5LWxpa2VzIGFzIGlmIHRoZXkgd2VyZSBkZW5zZS5cbiAgXy5lYWNoID0gXy5mb3JFYWNoID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIGl0ZXJhdGVlID0gb3B0aW1pemVDYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgdmFyIGksIGxlbmd0aDtcbiAgICBpZiAoaXNBcnJheUxpa2Uob2JqKSkge1xuICAgICAgZm9yIChpID0gMCwgbGVuZ3RoID0gb2JqLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGl0ZXJhdGVlKG9ialtpXSwgaSwgb2JqKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlcmF0ZWUob2JqW2tleXNbaV1dLCBrZXlzW2ldLCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgcmVzdWx0cyBvZiBhcHBseWluZyB0aGUgaXRlcmF0ZWUgdG8gZWFjaCBlbGVtZW50LlxuICBfLm1hcCA9IF8uY29sbGVjdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICB2YXIga2V5cyA9ICFpc0FycmF5TGlrZShvYmopICYmIF8ua2V5cyhvYmopLFxuICAgICAgICBsZW5ndGggPSAoa2V5cyB8fCBvYmopLmxlbmd0aCxcbiAgICAgICAgcmVzdWx0cyA9IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIGN1cnJlbnRLZXkgPSBrZXlzID8ga2V5c1tpbmRleF0gOiBpbmRleDtcbiAgICAgIHJlc3VsdHNbaW5kZXhdID0gaXRlcmF0ZWUob2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICAvLyBDcmVhdGUgYSByZWR1Y2luZyBmdW5jdGlvbiBpdGVyYXRpbmcgbGVmdCBvciByaWdodC5cbiAgdmFyIGNyZWF0ZVJlZHVjZSA9IGZ1bmN0aW9uKGRpcikge1xuICAgIC8vIFdyYXAgY29kZSB0aGF0IHJlYXNzaWducyBhcmd1bWVudCB2YXJpYWJsZXMgaW4gYSBzZXBhcmF0ZSBmdW5jdGlvbiB0aGFuXG4gICAgLy8gdGhlIG9uZSB0aGF0IGFjY2Vzc2VzIGBhcmd1bWVudHMubGVuZ3RoYCB0byBhdm9pZCBhIHBlcmYgaGl0LiAoIzE5OTEpXG4gICAgdmFyIHJlZHVjZXIgPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBtZW1vLCBpbml0aWFsKSB7XG4gICAgICB2YXIga2V5cyA9ICFpc0FycmF5TGlrZShvYmopICYmIF8ua2V5cyhvYmopLFxuICAgICAgICAgIGxlbmd0aCA9IChrZXlzIHx8IG9iaikubGVuZ3RoLFxuICAgICAgICAgIGluZGV4ID0gZGlyID4gMCA/IDAgOiBsZW5ndGggLSAxO1xuICAgICAgaWYgKCFpbml0aWFsKSB7XG4gICAgICAgIG1lbW8gPSBvYmpba2V5cyA/IGtleXNbaW5kZXhdIDogaW5kZXhdO1xuICAgICAgICBpbmRleCArPSBkaXI7XG4gICAgICB9XG4gICAgICBmb3IgKDsgaW5kZXggPj0gMCAmJiBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gZGlyKSB7XG4gICAgICAgIHZhciBjdXJyZW50S2V5ID0ga2V5cyA/IGtleXNbaW5kZXhdIDogaW5kZXg7XG4gICAgICAgIG1lbW8gPSBpdGVyYXRlZShtZW1vLCBvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaik7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWVtbztcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIG1lbW8sIGNvbnRleHQpIHtcbiAgICAgIHZhciBpbml0aWFsID0gYXJndW1lbnRzLmxlbmd0aCA+PSAzO1xuICAgICAgcmV0dXJuIHJlZHVjZXIob2JqLCBvcHRpbWl6ZUNiKGl0ZXJhdGVlLCBjb250ZXh0LCA0KSwgbWVtbywgaW5pdGlhbCk7XG4gICAgfTtcbiAgfTtcblxuICAvLyAqKlJlZHVjZSoqIGJ1aWxkcyB1cCBhIHNpbmdsZSByZXN1bHQgZnJvbSBhIGxpc3Qgb2YgdmFsdWVzLCBha2EgYGluamVjdGAsXG4gIC8vIG9yIGBmb2xkbGAuXG4gIF8ucmVkdWNlID0gXy5mb2xkbCA9IF8uaW5qZWN0ID0gY3JlYXRlUmVkdWNlKDEpO1xuXG4gIC8vIFRoZSByaWdodC1hc3NvY2lhdGl2ZSB2ZXJzaW9uIG9mIHJlZHVjZSwgYWxzbyBrbm93biBhcyBgZm9sZHJgLlxuICBfLnJlZHVjZVJpZ2h0ID0gXy5mb2xkciA9IGNyZWF0ZVJlZHVjZSgtMSk7XG5cbiAgLy8gUmV0dXJuIHRoZSBmaXJzdCB2YWx1ZSB3aGljaCBwYXNzZXMgYSB0cnV0aCB0ZXN0LiBBbGlhc2VkIGFzIGBkZXRlY3RgLlxuICBfLmZpbmQgPSBfLmRldGVjdCA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIGtleUZpbmRlciA9IGlzQXJyYXlMaWtlKG9iaikgPyBfLmZpbmRJbmRleCA6IF8uZmluZEtleTtcbiAgICB2YXIga2V5ID0ga2V5RmluZGVyKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICBpZiAoa2V5ICE9PSB2b2lkIDAgJiYga2V5ICE9PSAtMSkgcmV0dXJuIG9ialtrZXldO1xuICB9O1xuXG4gIC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIHRoYXQgcGFzcyBhIHRydXRoIHRlc3QuXG4gIC8vIEFsaWFzZWQgYXMgYHNlbGVjdGAuXG4gIF8uZmlsdGVyID0gXy5zZWxlY3QgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICBfLmVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBsaXN0KSkgcmVzdWx0cy5wdXNoKHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICAvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyBmb3Igd2hpY2ggYSB0cnV0aCB0ZXN0IGZhaWxzLlxuICBfLnJlamVjdCA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIF8uZmlsdGVyKG9iaiwgXy5uZWdhdGUoY2IocHJlZGljYXRlKSksIGNvbnRleHQpO1xuICB9O1xuXG4gIC8vIERldGVybWluZSB3aGV0aGVyIGFsbCBvZiB0aGUgZWxlbWVudHMgbWF0Y2ggYSB0cnV0aCB0ZXN0LlxuICAvLyBBbGlhc2VkIGFzIGBhbGxgLlxuICBfLmV2ZXJ5ID0gXy5hbGwgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSAhaXNBcnJheUxpa2Uob2JqKSAmJiBfLmtleXMob2JqKSxcbiAgICAgICAgbGVuZ3RoID0gKGtleXMgfHwgb2JqKS5sZW5ndGg7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIGN1cnJlbnRLZXkgPSBrZXlzID8ga2V5c1tpbmRleF0gOiBpbmRleDtcbiAgICAgIGlmICghcHJlZGljYXRlKG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgaWYgYXQgbGVhc3Qgb25lIGVsZW1lbnQgaW4gdGhlIG9iamVjdCBtYXRjaGVzIGEgdHJ1dGggdGVzdC5cbiAgLy8gQWxpYXNlZCBhcyBgYW55YC5cbiAgXy5zb21lID0gXy5hbnkgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSAhaXNBcnJheUxpa2Uob2JqKSAmJiBfLmtleXMob2JqKSxcbiAgICAgICAgbGVuZ3RoID0gKGtleXMgfHwgb2JqKS5sZW5ndGg7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIGN1cnJlbnRLZXkgPSBrZXlzID8ga2V5c1tpbmRleF0gOiBpbmRleDtcbiAgICAgIGlmIChwcmVkaWNhdGUob2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8vIERldGVybWluZSBpZiB0aGUgYXJyYXkgb3Igb2JqZWN0IGNvbnRhaW5zIGEgZ2l2ZW4gaXRlbSAodXNpbmcgYD09PWApLlxuICAvLyBBbGlhc2VkIGFzIGBpbmNsdWRlc2AgYW5kIGBpbmNsdWRlYC5cbiAgXy5jb250YWlucyA9IF8uaW5jbHVkZXMgPSBfLmluY2x1ZGUgPSBmdW5jdGlvbihvYmosIGl0ZW0sIGZyb21JbmRleCwgZ3VhcmQpIHtcbiAgICBpZiAoIWlzQXJyYXlMaWtlKG9iaikpIG9iaiA9IF8udmFsdWVzKG9iaik7XG4gICAgaWYgKHR5cGVvZiBmcm9tSW5kZXggIT0gJ251bWJlcicgfHwgZ3VhcmQpIGZyb21JbmRleCA9IDA7XG4gICAgcmV0dXJuIF8uaW5kZXhPZihvYmosIGl0ZW0sIGZyb21JbmRleCkgPj0gMDtcbiAgfTtcblxuICAvLyBJbnZva2UgYSBtZXRob2QgKHdpdGggYXJndW1lbnRzKSBvbiBldmVyeSBpdGVtIGluIGEgY29sbGVjdGlvbi5cbiAgXy5pbnZva2UgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKG9iaiwgcGF0aCwgYXJncykge1xuICAgIHZhciBjb250ZXh0UGF0aCwgZnVuYztcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKHBhdGgpKSB7XG4gICAgICBmdW5jID0gcGF0aDtcbiAgICB9IGVsc2UgaWYgKF8uaXNBcnJheShwYXRoKSkge1xuICAgICAgY29udGV4dFBhdGggPSBwYXRoLnNsaWNlKDAsIC0xKTtcbiAgICAgIHBhdGggPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIHJldHVybiBfLm1hcChvYmosIGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICAgIHZhciBtZXRob2QgPSBmdW5jO1xuICAgICAgaWYgKCFtZXRob2QpIHtcbiAgICAgICAgaWYgKGNvbnRleHRQYXRoICYmIGNvbnRleHRQYXRoLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnRleHQgPSBkZWVwR2V0KGNvbnRleHQsIGNvbnRleHRQYXRoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGV4dCA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgICAgICBtZXRob2QgPSBjb250ZXh0W3BhdGhdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1ldGhvZCA9PSBudWxsID8gbWV0aG9kIDogbWV0aG9kLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBtYXBgOiBmZXRjaGluZyBhIHByb3BlcnR5LlxuICBfLnBsdWNrID0gZnVuY3Rpb24ob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gXy5tYXAob2JqLCBfLnByb3BlcnR5KGtleSkpO1xuICB9O1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYGZpbHRlcmA6IHNlbGVjdGluZyBvbmx5IG9iamVjdHNcbiAgLy8gY29udGFpbmluZyBzcGVjaWZpYyBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy53aGVyZSA9IGZ1bmN0aW9uKG9iaiwgYXR0cnMpIHtcbiAgICByZXR1cm4gXy5maWx0ZXIob2JqLCBfLm1hdGNoZXIoYXR0cnMpKTtcbiAgfTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBmaW5kYDogZ2V0dGluZyB0aGUgZmlyc3Qgb2JqZWN0XG4gIC8vIGNvbnRhaW5pbmcgc3BlY2lmaWMgYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8uZmluZFdoZXJlID0gZnVuY3Rpb24ob2JqLCBhdHRycykge1xuICAgIHJldHVybiBfLmZpbmQob2JqLCBfLm1hdGNoZXIoYXR0cnMpKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIG1heGltdW0gZWxlbWVudCAob3IgZWxlbWVudC1iYXNlZCBjb21wdXRhdGlvbikuXG4gIF8ubWF4ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHQgPSAtSW5maW5pdHksIGxhc3RDb21wdXRlZCA9IC1JbmZpbml0eSxcbiAgICAgICAgdmFsdWUsIGNvbXB1dGVkO1xuICAgIGlmIChpdGVyYXRlZSA9PSBudWxsIHx8IHR5cGVvZiBpdGVyYXRlZSA9PSAnbnVtYmVyJyAmJiB0eXBlb2Ygb2JqWzBdICE9ICdvYmplY3QnICYmIG9iaiAhPSBudWxsKSB7XG4gICAgICBvYmogPSBpc0FycmF5TGlrZShvYmopID8gb2JqIDogXy52YWx1ZXMob2JqKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsdWUgPSBvYmpbaV07XG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlID4gcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgICBfLmVhY2gob2JqLCBmdW5jdGlvbih2LCBpbmRleCwgbGlzdCkge1xuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlKHYsIGluZGV4LCBsaXN0KTtcbiAgICAgICAgaWYgKGNvbXB1dGVkID4gbGFzdENvbXB1dGVkIHx8IGNvbXB1dGVkID09PSAtSW5maW5pdHkgJiYgcmVzdWx0ID09PSAtSW5maW5pdHkpIHtcbiAgICAgICAgICByZXN1bHQgPSB2O1xuICAgICAgICAgIGxhc3RDb21wdXRlZCA9IGNvbXB1dGVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIG1pbmltdW0gZWxlbWVudCAob3IgZWxlbWVudC1iYXNlZCBjb21wdXRhdGlvbikuXG4gIF8ubWluID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHQgPSBJbmZpbml0eSwgbGFzdENvbXB1dGVkID0gSW5maW5pdHksXG4gICAgICAgIHZhbHVlLCBjb21wdXRlZDtcbiAgICBpZiAoaXRlcmF0ZWUgPT0gbnVsbCB8fCB0eXBlb2YgaXRlcmF0ZWUgPT0gJ251bWJlcicgJiYgdHlwZW9mIG9ialswXSAhPSAnb2JqZWN0JyAmJiBvYmogIT0gbnVsbCkge1xuICAgICAgb2JqID0gaXNBcnJheUxpa2Uob2JqKSA/IG9iaiA6IF8udmFsdWVzKG9iaik7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gb2JqLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhbHVlID0gb2JqW2ldO1xuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSA8IHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgICAgXy5lYWNoKG9iaiwgZnVuY3Rpb24odiwgaW5kZXgsIGxpc3QpIHtcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSh2LCBpbmRleCwgbGlzdCk7XG4gICAgICAgIGlmIChjb21wdXRlZCA8IGxhc3RDb21wdXRlZCB8fCBjb21wdXRlZCA9PT0gSW5maW5pdHkgJiYgcmVzdWx0ID09PSBJbmZpbml0eSkge1xuICAgICAgICAgIHJlc3VsdCA9IHY7XG4gICAgICAgICAgbGFzdENvbXB1dGVkID0gY29tcHV0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFNodWZmbGUgYSBjb2xsZWN0aW9uLlxuICBfLnNodWZmbGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gXy5zYW1wbGUob2JqLCBJbmZpbml0eSk7XG4gIH07XG5cbiAgLy8gU2FtcGxlICoqbioqIHJhbmRvbSB2YWx1ZXMgZnJvbSBhIGNvbGxlY3Rpb24gdXNpbmcgdGhlIG1vZGVybiB2ZXJzaW9uIG9mIHRoZVxuICAvLyBbRmlzaGVyLVlhdGVzIHNodWZmbGVdKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRmlzaGVy4oCTWWF0ZXNfc2h1ZmZsZSkuXG4gIC8vIElmICoqbioqIGlzIG5vdCBzcGVjaWZpZWQsIHJldHVybnMgYSBzaW5nbGUgcmFuZG9tIGVsZW1lbnQuXG4gIC8vIFRoZSBpbnRlcm5hbCBgZ3VhcmRgIGFyZ3VtZW50IGFsbG93cyBpdCB0byB3b3JrIHdpdGggYG1hcGAuXG4gIF8uc2FtcGxlID0gZnVuY3Rpb24ob2JqLCBuLCBndWFyZCkge1xuICAgIGlmIChuID09IG51bGwgfHwgZ3VhcmQpIHtcbiAgICAgIGlmICghaXNBcnJheUxpa2Uob2JqKSkgb2JqID0gXy52YWx1ZXMob2JqKTtcbiAgICAgIHJldHVybiBvYmpbXy5yYW5kb20ob2JqLmxlbmd0aCAtIDEpXTtcbiAgICB9XG4gICAgdmFyIHNhbXBsZSA9IGlzQXJyYXlMaWtlKG9iaikgPyBfLmNsb25lKG9iaikgOiBfLnZhbHVlcyhvYmopO1xuICAgIHZhciBsZW5ndGggPSBnZXRMZW5ndGgoc2FtcGxlKTtcbiAgICBuID0gTWF0aC5tYXgoTWF0aC5taW4obiwgbGVuZ3RoKSwgMCk7XG4gICAgdmFyIGxhc3QgPSBsZW5ndGggLSAxO1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBuOyBpbmRleCsrKSB7XG4gICAgICB2YXIgcmFuZCA9IF8ucmFuZG9tKGluZGV4LCBsYXN0KTtcbiAgICAgIHZhciB0ZW1wID0gc2FtcGxlW2luZGV4XTtcbiAgICAgIHNhbXBsZVtpbmRleF0gPSBzYW1wbGVbcmFuZF07XG4gICAgICBzYW1wbGVbcmFuZF0gPSB0ZW1wO1xuICAgIH1cbiAgICByZXR1cm4gc2FtcGxlLnNsaWNlKDAsIG4pO1xuICB9O1xuXG4gIC8vIFNvcnQgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbiBwcm9kdWNlZCBieSBhbiBpdGVyYXRlZS5cbiAgXy5zb3J0QnkgPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICByZXR1cm4gXy5wbHVjayhfLm1hcChvYmosIGZ1bmN0aW9uKHZhbHVlLCBrZXksIGxpc3QpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaW5kZXg6IGluZGV4KyssXG4gICAgICAgIGNyaXRlcmlhOiBpdGVyYXRlZSh2YWx1ZSwga2V5LCBsaXN0KVxuICAgICAgfTtcbiAgICB9KS5zb3J0KGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgICB2YXIgYSA9IGxlZnQuY3JpdGVyaWE7XG4gICAgICB2YXIgYiA9IHJpZ2h0LmNyaXRlcmlhO1xuICAgICAgaWYgKGEgIT09IGIpIHtcbiAgICAgICAgaWYgKGEgPiBiIHx8IGEgPT09IHZvaWQgMCkgcmV0dXJuIDE7XG4gICAgICAgIGlmIChhIDwgYiB8fCBiID09PSB2b2lkIDApIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsZWZ0LmluZGV4IC0gcmlnaHQuaW5kZXg7XG4gICAgfSksICd2YWx1ZScpO1xuICB9O1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIHVzZWQgZm9yIGFnZ3JlZ2F0ZSBcImdyb3VwIGJ5XCIgb3BlcmF0aW9ucy5cbiAgdmFyIGdyb3VwID0gZnVuY3Rpb24oYmVoYXZpb3IsIHBhcnRpdGlvbikge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgICB2YXIgcmVzdWx0ID0gcGFydGl0aW9uID8gW1tdLCBbXV0gOiB7fTtcbiAgICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgICAgXy5lYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4KSB7XG4gICAgICAgIHZhciBrZXkgPSBpdGVyYXRlZSh2YWx1ZSwgaW5kZXgsIG9iaik7XG4gICAgICAgIGJlaGF2aW9yKHJlc3VsdCwgdmFsdWUsIGtleSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfTtcblxuICAvLyBHcm91cHMgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbi4gUGFzcyBlaXRoZXIgYSBzdHJpbmcgYXR0cmlidXRlXG4gIC8vIHRvIGdyb3VwIGJ5LCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgY3JpdGVyaW9uLlxuICBfLmdyb3VwQnkgPSBncm91cChmdW5jdGlvbihyZXN1bHQsIHZhbHVlLCBrZXkpIHtcbiAgICBpZiAoaGFzKHJlc3VsdCwga2V5KSkgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSk7IGVsc2UgcmVzdWx0W2tleV0gPSBbdmFsdWVdO1xuICB9KTtcblxuICAvLyBJbmRleGVzIHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24sIHNpbWlsYXIgdG8gYGdyb3VwQnlgLCBidXQgZm9yXG4gIC8vIHdoZW4geW91IGtub3cgdGhhdCB5b3VyIGluZGV4IHZhbHVlcyB3aWxsIGJlIHVuaXF1ZS5cbiAgXy5pbmRleEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgfSk7XG5cbiAgLy8gQ291bnRzIGluc3RhbmNlcyBvZiBhbiBvYmplY3QgdGhhdCBncm91cCBieSBhIGNlcnRhaW4gY3JpdGVyaW9uLiBQYXNzXG4gIC8vIGVpdGhlciBhIHN0cmluZyBhdHRyaWJ1dGUgdG8gY291bnQgYnksIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxuICAvLyBjcml0ZXJpb24uXG4gIF8uY291bnRCeSA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICAgIGlmIChoYXMocmVzdWx0LCBrZXkpKSByZXN1bHRba2V5XSsrOyBlbHNlIHJlc3VsdFtrZXldID0gMTtcbiAgfSk7XG5cbiAgdmFyIHJlU3RyU3ltYm9sID0gL1teXFx1ZDgwMC1cXHVkZmZmXXxbXFx1ZDgwMC1cXHVkYmZmXVtcXHVkYzAwLVxcdWRmZmZdfFtcXHVkODAwLVxcdWRmZmZdL2c7XG4gIC8vIFNhZmVseSBjcmVhdGUgYSByZWFsLCBsaXZlIGFycmF5IGZyb20gYW55dGhpbmcgaXRlcmFibGUuXG4gIF8udG9BcnJheSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghb2JqKSByZXR1cm4gW107XG4gICAgaWYgKF8uaXNBcnJheShvYmopKSByZXR1cm4gc2xpY2UuY2FsbChvYmopO1xuICAgIGlmIChfLmlzU3RyaW5nKG9iaikpIHtcbiAgICAgIC8vIEtlZXAgc3Vycm9nYXRlIHBhaXIgY2hhcmFjdGVycyB0b2dldGhlclxuICAgICAgcmV0dXJuIG9iai5tYXRjaChyZVN0clN5bWJvbCk7XG4gICAgfVxuICAgIGlmIChpc0FycmF5TGlrZShvYmopKSByZXR1cm4gXy5tYXAob2JqLCBfLmlkZW50aXR5KTtcbiAgICByZXR1cm4gXy52YWx1ZXMob2JqKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiBhbiBvYmplY3QuXG4gIF8uc2l6ZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIDA7XG4gICAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iaikgPyBvYmoubGVuZ3RoIDogXy5rZXlzKG9iaikubGVuZ3RoO1xuICB9O1xuXG4gIC8vIFNwbGl0IGEgY29sbGVjdGlvbiBpbnRvIHR3byBhcnJheXM6IG9uZSB3aG9zZSBlbGVtZW50cyBhbGwgc2F0aXNmeSB0aGUgZ2l2ZW5cbiAgLy8gcHJlZGljYXRlLCBhbmQgb25lIHdob3NlIGVsZW1lbnRzIGFsbCBkbyBub3Qgc2F0aXNmeSB0aGUgcHJlZGljYXRlLlxuICBfLnBhcnRpdGlvbiA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIHBhc3MpIHtcbiAgICByZXN1bHRbcGFzcyA/IDAgOiAxXS5wdXNoKHZhbHVlKTtcbiAgfSwgdHJ1ZSk7XG5cbiAgLy8gQXJyYXkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEdldCB0aGUgZmlyc3QgZWxlbWVudCBvZiBhbiBhcnJheS4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiB0aGUgZmlyc3QgTlxuICAvLyB2YWx1ZXMgaW4gdGhlIGFycmF5LiBBbGlhc2VkIGFzIGBoZWFkYCBhbmQgYHRha2VgLiBUaGUgKipndWFyZCoqIGNoZWNrXG4gIC8vIGFsbG93cyBpdCB0byB3b3JrIHdpdGggYF8ubWFwYC5cbiAgXy5maXJzdCA9IF8uaGVhZCA9IF8udGFrZSA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIGlmIChhcnJheSA9PSBudWxsIHx8IGFycmF5Lmxlbmd0aCA8IDEpIHJldHVybiBuID09IG51bGwgPyB2b2lkIDAgOiBbXTtcbiAgICBpZiAobiA9PSBudWxsIHx8IGd1YXJkKSByZXR1cm4gYXJyYXlbMF07XG4gICAgcmV0dXJuIF8uaW5pdGlhbChhcnJheSwgYXJyYXkubGVuZ3RoIC0gbik7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBldmVyeXRoaW5nIGJ1dCB0aGUgbGFzdCBlbnRyeSBvZiB0aGUgYXJyYXkuIEVzcGVjaWFsbHkgdXNlZnVsIG9uXG4gIC8vIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIGFsbCB0aGUgdmFsdWVzIGluXG4gIC8vIHRoZSBhcnJheSwgZXhjbHVkaW5nIHRoZSBsYXN0IE4uXG4gIF8uaW5pdGlhbCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIHJldHVybiBzbGljZS5jYWxsKGFycmF5LCAwLCBNYXRoLm1heCgwLCBhcnJheS5sZW5ndGggLSAobiA9PSBudWxsIHx8IGd1YXJkID8gMSA6IG4pKSk7XG4gIH07XG5cbiAgLy8gR2V0IHRoZSBsYXN0IGVsZW1lbnQgb2YgYW4gYXJyYXkuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gdGhlIGxhc3QgTlxuICAvLyB2YWx1ZXMgaW4gdGhlIGFycmF5LlxuICBfLmxhc3QgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCB8fCBhcnJheS5sZW5ndGggPCAxKSByZXR1cm4gbiA9PSBudWxsID8gdm9pZCAwIDogW107XG4gICAgaWYgKG4gPT0gbnVsbCB8fCBndWFyZCkgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdO1xuICAgIHJldHVybiBfLnJlc3QoYXJyYXksIE1hdGgubWF4KDAsIGFycmF5Lmxlbmd0aCAtIG4pKTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGV2ZXJ5dGhpbmcgYnV0IHRoZSBmaXJzdCBlbnRyeSBvZiB0aGUgYXJyYXkuIEFsaWFzZWQgYXMgYHRhaWxgIGFuZCBgZHJvcGAuXG4gIC8vIEVzcGVjaWFsbHkgdXNlZnVsIG9uIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBQYXNzaW5nIGFuICoqbioqIHdpbGwgcmV0dXJuXG4gIC8vIHRoZSByZXN0IE4gdmFsdWVzIGluIHRoZSBhcnJheS5cbiAgXy5yZXN0ID0gXy50YWlsID0gXy5kcm9wID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIG4gPT0gbnVsbCB8fCBndWFyZCA/IDEgOiBuKTtcbiAgfTtcblxuICAvLyBUcmltIG91dCBhbGwgZmFsc3kgdmFsdWVzIGZyb20gYW4gYXJyYXkuXG4gIF8uY29tcGFjdCA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgcmV0dXJuIF8uZmlsdGVyKGFycmF5LCBCb29sZWFuKTtcbiAgfTtcblxuICAvLyBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBvZiBhIHJlY3Vyc2l2ZSBgZmxhdHRlbmAgZnVuY3Rpb24uXG4gIHZhciBmbGF0dGVuID0gZnVuY3Rpb24oaW5wdXQsIHNoYWxsb3csIHN0cmljdCwgb3V0cHV0KSB7XG4gICAgb3V0cHV0ID0gb3V0cHV0IHx8IFtdO1xuICAgIHZhciBpZHggPSBvdXRwdXQubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBnZXRMZW5ndGgoaW5wdXQpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB2YWx1ZSA9IGlucHV0W2ldO1xuICAgICAgaWYgKGlzQXJyYXlMaWtlKHZhbHVlKSAmJiAoXy5pc0FycmF5KHZhbHVlKSB8fCBfLmlzQXJndW1lbnRzKHZhbHVlKSkpIHtcbiAgICAgICAgLy8gRmxhdHRlbiBjdXJyZW50IGxldmVsIG9mIGFycmF5IG9yIGFyZ3VtZW50cyBvYmplY3QuXG4gICAgICAgIGlmIChzaGFsbG93KSB7XG4gICAgICAgICAgdmFyIGogPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgd2hpbGUgKGogPCBsZW4pIG91dHB1dFtpZHgrK10gPSB2YWx1ZVtqKytdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZsYXR0ZW4odmFsdWUsIHNoYWxsb3csIHN0cmljdCwgb3V0cHV0KTtcbiAgICAgICAgICBpZHggPSBvdXRwdXQubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgb3V0cHV0W2lkeCsrXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9O1xuXG4gIC8vIEZsYXR0ZW4gb3V0IGFuIGFycmF5LCBlaXRoZXIgcmVjdXJzaXZlbHkgKGJ5IGRlZmF1bHQpLCBvciBqdXN0IG9uZSBsZXZlbC5cbiAgXy5mbGF0dGVuID0gZnVuY3Rpb24oYXJyYXksIHNoYWxsb3cpIHtcbiAgICByZXR1cm4gZmxhdHRlbihhcnJheSwgc2hhbGxvdywgZmFsc2UpO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHZlcnNpb24gb2YgdGhlIGFycmF5IHRoYXQgZG9lcyBub3QgY29udGFpbiB0aGUgc3BlY2lmaWVkIHZhbHVlKHMpLlxuICBfLndpdGhvdXQgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGFycmF5LCBvdGhlckFycmF5cykge1xuICAgIHJldHVybiBfLmRpZmZlcmVuY2UoYXJyYXksIG90aGVyQXJyYXlzKTtcbiAgfSk7XG5cbiAgLy8gUHJvZHVjZSBhIGR1cGxpY2F0ZS1mcmVlIHZlcnNpb24gb2YgdGhlIGFycmF5LiBJZiB0aGUgYXJyYXkgaGFzIGFscmVhZHlcbiAgLy8gYmVlbiBzb3J0ZWQsIHlvdSBoYXZlIHRoZSBvcHRpb24gb2YgdXNpbmcgYSBmYXN0ZXIgYWxnb3JpdGhtLlxuICAvLyBUaGUgZmFzdGVyIGFsZ29yaXRobSB3aWxsIG5vdCB3b3JrIHdpdGggYW4gaXRlcmF0ZWUgaWYgdGhlIGl0ZXJhdGVlXG4gIC8vIGlzIG5vdCBhIG9uZS10by1vbmUgZnVuY3Rpb24sIHNvIHByb3ZpZGluZyBhbiBpdGVyYXRlZSB3aWxsIGRpc2FibGVcbiAgLy8gdGhlIGZhc3RlciBhbGdvcml0aG0uXG4gIC8vIEFsaWFzZWQgYXMgYHVuaXF1ZWAuXG4gIF8udW5pcSA9IF8udW5pcXVlID0gZnVuY3Rpb24oYXJyYXksIGlzU29ydGVkLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIGlmICghXy5pc0Jvb2xlYW4oaXNTb3J0ZWQpKSB7XG4gICAgICBjb250ZXh0ID0gaXRlcmF0ZWU7XG4gICAgICBpdGVyYXRlZSA9IGlzU29ydGVkO1xuICAgICAgaXNTb3J0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGl0ZXJhdGVlICE9IG51bGwpIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgc2VlbiA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBnZXRMZW5ndGgoYXJyYXkpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB2YWx1ZSA9IGFycmF5W2ldLFxuICAgICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSwgaSwgYXJyYXkpIDogdmFsdWU7XG4gICAgICBpZiAoaXNTb3J0ZWQgJiYgIWl0ZXJhdGVlKSB7XG4gICAgICAgIGlmICghaSB8fCBzZWVuICE9PSBjb21wdXRlZCkgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgICAgICBzZWVuID0gY29tcHV0ZWQ7XG4gICAgICB9IGVsc2UgaWYgKGl0ZXJhdGVlKSB7XG4gICAgICAgIGlmICghXy5jb250YWlucyhzZWVuLCBjb21wdXRlZCkpIHtcbiAgICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghXy5jb250YWlucyhyZXN1bHQsIHZhbHVlKSkge1xuICAgICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUHJvZHVjZSBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIHRoZSB1bmlvbjogZWFjaCBkaXN0aW5jdCBlbGVtZW50IGZyb20gYWxsIG9mXG4gIC8vIHRoZSBwYXNzZWQtaW4gYXJyYXlzLlxuICBfLnVuaW9uID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihhcnJheXMpIHtcbiAgICByZXR1cm4gXy51bmlxKGZsYXR0ZW4oYXJyYXlzLCB0cnVlLCB0cnVlKSk7XG4gIH0pO1xuXG4gIC8vIFByb2R1Y2UgYW4gYXJyYXkgdGhhdCBjb250YWlucyBldmVyeSBpdGVtIHNoYXJlZCBiZXR3ZWVuIGFsbCB0aGVcbiAgLy8gcGFzc2VkLWluIGFycmF5cy5cbiAgXy5pbnRlcnNlY3Rpb24gPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgYXJnc0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChhcnJheSk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBhcnJheVtpXTtcbiAgICAgIGlmIChfLmNvbnRhaW5zKHJlc3VsdCwgaXRlbSkpIGNvbnRpbnVlO1xuICAgICAgdmFyIGo7XG4gICAgICBmb3IgKGogPSAxOyBqIDwgYXJnc0xlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICghXy5jb250YWlucyhhcmd1bWVudHNbal0sIGl0ZW0pKSBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChqID09PSBhcmdzTGVuZ3RoKSByZXN1bHQucHVzaChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBUYWtlIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gb25lIGFycmF5IGFuZCBhIG51bWJlciBvZiBvdGhlciBhcnJheXMuXG4gIC8vIE9ubHkgdGhlIGVsZW1lbnRzIHByZXNlbnQgaW4ganVzdCB0aGUgZmlyc3QgYXJyYXkgd2lsbCByZW1haW4uXG4gIF8uZGlmZmVyZW5jZSA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24oYXJyYXksIHJlc3QpIHtcbiAgICByZXN0ID0gZmxhdHRlbihyZXN0LCB0cnVlLCB0cnVlKTtcbiAgICByZXR1cm4gXy5maWx0ZXIoYXJyYXksIGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIHJldHVybiAhXy5jb250YWlucyhyZXN0LCB2YWx1ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIENvbXBsZW1lbnQgb2YgXy56aXAuIFVuemlwIGFjY2VwdHMgYW4gYXJyYXkgb2YgYXJyYXlzIGFuZCBncm91cHNcbiAgLy8gZWFjaCBhcnJheSdzIGVsZW1lbnRzIG9uIHNoYXJlZCBpbmRpY2VzLlxuICBfLnVuemlwID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkgJiYgXy5tYXgoYXJyYXksIGdldExlbmd0aCkubGVuZ3RoIHx8IDA7XG4gICAgdmFyIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICByZXN1bHRbaW5kZXhdID0gXy5wbHVjayhhcnJheSwgaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFppcCB0b2dldGhlciBtdWx0aXBsZSBsaXN0cyBpbnRvIGEgc2luZ2xlIGFycmF5IC0tIGVsZW1lbnRzIHRoYXQgc2hhcmVcbiAgLy8gYW4gaW5kZXggZ28gdG9nZXRoZXIuXG4gIF8uemlwID0gcmVzdEFyZ3VtZW50cyhfLnVuemlwKTtcblxuICAvLyBDb252ZXJ0cyBsaXN0cyBpbnRvIG9iamVjdHMuIFBhc3MgZWl0aGVyIGEgc2luZ2xlIGFycmF5IG9mIGBba2V5LCB2YWx1ZV1gXG4gIC8vIHBhaXJzLCBvciB0d28gcGFyYWxsZWwgYXJyYXlzIG9mIHRoZSBzYW1lIGxlbmd0aCAtLSBvbmUgb2Yga2V5cywgYW5kIG9uZSBvZlxuICAvLyB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZXMuIFBhc3NpbmcgYnkgcGFpcnMgaXMgdGhlIHJldmVyc2Ugb2YgXy5wYWlycy5cbiAgXy5vYmplY3QgPSBmdW5jdGlvbihsaXN0LCB2YWx1ZXMpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChsaXN0KTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodmFsdWVzKSB7XG4gICAgICAgIHJlc3VsdFtsaXN0W2ldXSA9IHZhbHVlc1tpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtsaXN0W2ldWzBdXSA9IGxpc3RbaV1bMV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gR2VuZXJhdG9yIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgZmluZEluZGV4IGFuZCBmaW5kTGFzdEluZGV4IGZ1bmN0aW9ucy5cbiAgdmFyIGNyZWF0ZVByZWRpY2F0ZUluZGV4RmluZGVyID0gZnVuY3Rpb24oZGlyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGFycmF5LCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgICB2YXIgbGVuZ3RoID0gZ2V0TGVuZ3RoKGFycmF5KTtcbiAgICAgIHZhciBpbmRleCA9IGRpciA+IDAgPyAwIDogbGVuZ3RoIC0gMTtcbiAgICAgIGZvciAoOyBpbmRleCA+PSAwICYmIGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSBkaXIpIHtcbiAgICAgICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgdGhlIGZpcnN0IGluZGV4IG9uIGFuIGFycmF5LWxpa2UgdGhhdCBwYXNzZXMgYSBwcmVkaWNhdGUgdGVzdC5cbiAgXy5maW5kSW5kZXggPSBjcmVhdGVQcmVkaWNhdGVJbmRleEZpbmRlcigxKTtcbiAgXy5maW5kTGFzdEluZGV4ID0gY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIoLTEpO1xuXG4gIC8vIFVzZSBhIGNvbXBhcmF0b3IgZnVuY3Rpb24gdG8gZmlndXJlIG91dCB0aGUgc21hbGxlc3QgaW5kZXggYXQgd2hpY2hcbiAgLy8gYW4gb2JqZWN0IHNob3VsZCBiZSBpbnNlcnRlZCBzbyBhcyB0byBtYWludGFpbiBvcmRlci4gVXNlcyBiaW5hcnkgc2VhcmNoLlxuICBfLnNvcnRlZEluZGV4ID0gZnVuY3Rpb24oYXJyYXksIG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0LCAxKTtcbiAgICB2YXIgdmFsdWUgPSBpdGVyYXRlZShvYmopO1xuICAgIHZhciBsb3cgPSAwLCBoaWdoID0gZ2V0TGVuZ3RoKGFycmF5KTtcbiAgICB3aGlsZSAobG93IDwgaGlnaCkge1xuICAgICAgdmFyIG1pZCA9IE1hdGguZmxvb3IoKGxvdyArIGhpZ2gpIC8gMik7XG4gICAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbbWlkXSkgPCB2YWx1ZSkgbG93ID0gbWlkICsgMTsgZWxzZSBoaWdoID0gbWlkO1xuICAgIH1cbiAgICByZXR1cm4gbG93O1xuICB9O1xuXG4gIC8vIEdlbmVyYXRvciBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIGluZGV4T2YgYW5kIGxhc3RJbmRleE9mIGZ1bmN0aW9ucy5cbiAgdmFyIGNyZWF0ZUluZGV4RmluZGVyID0gZnVuY3Rpb24oZGlyLCBwcmVkaWNhdGVGaW5kLCBzb3J0ZWRJbmRleCkge1xuICAgIHJldHVybiBmdW5jdGlvbihhcnJheSwgaXRlbSwgaWR4KSB7XG4gICAgICB2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChhcnJheSk7XG4gICAgICBpZiAodHlwZW9mIGlkeCA9PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAoZGlyID4gMCkge1xuICAgICAgICAgIGkgPSBpZHggPj0gMCA/IGlkeCA6IE1hdGgubWF4KGlkeCArIGxlbmd0aCwgaSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGVuZ3RoID0gaWR4ID49IDAgPyBNYXRoLm1pbihpZHggKyAxLCBsZW5ndGgpIDogaWR4ICsgbGVuZ3RoICsgMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzb3J0ZWRJbmRleCAmJiBpZHggJiYgbGVuZ3RoKSB7XG4gICAgICAgIGlkeCA9IHNvcnRlZEluZGV4KGFycmF5LCBpdGVtKTtcbiAgICAgICAgcmV0dXJuIGFycmF5W2lkeF0gPT09IGl0ZW0gPyBpZHggOiAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtICE9PSBpdGVtKSB7XG4gICAgICAgIGlkeCA9IHByZWRpY2F0ZUZpbmQoc2xpY2UuY2FsbChhcnJheSwgaSwgbGVuZ3RoKSwgXy5pc05hTik7XG4gICAgICAgIHJldHVybiBpZHggPj0gMCA/IGlkeCArIGkgOiAtMTtcbiAgICAgIH1cbiAgICAgIGZvciAoaWR4ID0gZGlyID4gMCA/IGkgOiBsZW5ndGggLSAxOyBpZHggPj0gMCAmJiBpZHggPCBsZW5ndGg7IGlkeCArPSBkaXIpIHtcbiAgICAgICAgaWYgKGFycmF5W2lkeF0gPT09IGl0ZW0pIHJldHVybiBpZHg7XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIGFuIGl0ZW0gaW4gYW4gYXJyYXksXG4gIC8vIG9yIC0xIGlmIHRoZSBpdGVtIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgYXJyYXkuXG4gIC8vIElmIHRoZSBhcnJheSBpcyBsYXJnZSBhbmQgYWxyZWFkeSBpbiBzb3J0IG9yZGVyLCBwYXNzIGB0cnVlYFxuICAvLyBmb3IgKippc1NvcnRlZCoqIHRvIHVzZSBiaW5hcnkgc2VhcmNoLlxuICBfLmluZGV4T2YgPSBjcmVhdGVJbmRleEZpbmRlcigxLCBfLmZpbmRJbmRleCwgXy5zb3J0ZWRJbmRleCk7XG4gIF8ubGFzdEluZGV4T2YgPSBjcmVhdGVJbmRleEZpbmRlcigtMSwgXy5maW5kTGFzdEluZGV4KTtcblxuICAvLyBHZW5lcmF0ZSBhbiBpbnRlZ2VyIEFycmF5IGNvbnRhaW5pbmcgYW4gYXJpdGhtZXRpYyBwcm9ncmVzc2lvbi4gQSBwb3J0IG9mXG4gIC8vIHRoZSBuYXRpdmUgUHl0aG9uIGByYW5nZSgpYCBmdW5jdGlvbi4gU2VlXG4gIC8vIFt0aGUgUHl0aG9uIGRvY3VtZW50YXRpb25dKGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS9mdW5jdGlvbnMuaHRtbCNyYW5nZSkuXG4gIF8ucmFuZ2UgPSBmdW5jdGlvbihzdGFydCwgc3RvcCwgc3RlcCkge1xuICAgIGlmIChzdG9wID09IG51bGwpIHtcbiAgICAgIHN0b3AgPSBzdGFydCB8fCAwO1xuICAgICAgc3RhcnQgPSAwO1xuICAgIH1cbiAgICBpZiAoIXN0ZXApIHtcbiAgICAgIHN0ZXAgPSBzdG9wIDwgc3RhcnQgPyAtMSA6IDE7XG4gICAgfVxuXG4gICAgdmFyIGxlbmd0aCA9IE1hdGgubWF4KE1hdGguY2VpbCgoc3RvcCAtIHN0YXJ0KSAvIHN0ZXApLCAwKTtcbiAgICB2YXIgcmFuZ2UgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgbGVuZ3RoOyBpZHgrKywgc3RhcnQgKz0gc3RlcCkge1xuICAgICAgcmFuZ2VbaWR4XSA9IHN0YXJ0O1xuICAgIH1cblxuICAgIHJldHVybiByYW5nZTtcbiAgfTtcblxuICAvLyBDaHVuayBhIHNpbmdsZSBhcnJheSBpbnRvIG11bHRpcGxlIGFycmF5cywgZWFjaCBjb250YWluaW5nIGBjb3VudGAgb3IgZmV3ZXJcbiAgLy8gaXRlbXMuXG4gIF8uY2h1bmsgPSBmdW5jdGlvbihhcnJheSwgY291bnQpIHtcbiAgICBpZiAoY291bnQgPT0gbnVsbCB8fCBjb3VudCA8IDEpIHJldHVybiBbXTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGkgPSAwLCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHNsaWNlLmNhbGwoYXJyYXksIGksIGkgKz0gY291bnQpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBGdW5jdGlvbiAoYWhlbSkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIERldGVybWluZXMgd2hldGhlciB0byBleGVjdXRlIGEgZnVuY3Rpb24gYXMgYSBjb25zdHJ1Y3RvclxuICAvLyBvciBhIG5vcm1hbCBmdW5jdGlvbiB3aXRoIHRoZSBwcm92aWRlZCBhcmd1bWVudHMuXG4gIHZhciBleGVjdXRlQm91bmQgPSBmdW5jdGlvbihzb3VyY2VGdW5jLCBib3VuZEZ1bmMsIGNvbnRleHQsIGNhbGxpbmdDb250ZXh0LCBhcmdzKSB7XG4gICAgaWYgKCEoY2FsbGluZ0NvbnRleHQgaW5zdGFuY2VvZiBib3VuZEZ1bmMpKSByZXR1cm4gc291cmNlRnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB2YXIgc2VsZiA9IGJhc2VDcmVhdGUoc291cmNlRnVuYy5wcm90b3R5cGUpO1xuICAgIHZhciByZXN1bHQgPSBzb3VyY2VGdW5jLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIGlmIChfLmlzT2JqZWN0KHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIGEgZnVuY3Rpb24gYm91bmQgdG8gYSBnaXZlbiBvYmplY3QgKGFzc2lnbmluZyBgdGhpc2AsIGFuZCBhcmd1bWVudHMsXG4gIC8vIG9wdGlvbmFsbHkpLiBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgRnVuY3Rpb24uYmluZGAgaWZcbiAgLy8gYXZhaWxhYmxlLlxuICBfLmJpbmQgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGZ1bmMsIGNvbnRleHQsIGFyZ3MpIHtcbiAgICBpZiAoIV8uaXNGdW5jdGlvbihmdW5jKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQmluZCBtdXN0IGJlIGNhbGxlZCBvbiBhIGZ1bmN0aW9uJyk7XG4gICAgdmFyIGJvdW5kID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihjYWxsQXJncykge1xuICAgICAgcmV0dXJuIGV4ZWN1dGVCb3VuZChmdW5jLCBib3VuZCwgY29udGV4dCwgdGhpcywgYXJncy5jb25jYXQoY2FsbEFyZ3MpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYm91bmQ7XG4gIH0pO1xuXG4gIC8vIFBhcnRpYWxseSBhcHBseSBhIGZ1bmN0aW9uIGJ5IGNyZWF0aW5nIGEgdmVyc2lvbiB0aGF0IGhhcyBoYWQgc29tZSBvZiBpdHNcbiAgLy8gYXJndW1lbnRzIHByZS1maWxsZWQsIHdpdGhvdXQgY2hhbmdpbmcgaXRzIGR5bmFtaWMgYHRoaXNgIGNvbnRleHQuIF8gYWN0c1xuICAvLyBhcyBhIHBsYWNlaG9sZGVyIGJ5IGRlZmF1bHQsIGFsbG93aW5nIGFueSBjb21iaW5hdGlvbiBvZiBhcmd1bWVudHMgdG8gYmVcbiAgLy8gcHJlLWZpbGxlZC4gU2V0IGBfLnBhcnRpYWwucGxhY2Vob2xkZXJgIGZvciBhIGN1c3RvbSBwbGFjZWhvbGRlciBhcmd1bWVudC5cbiAgXy5wYXJ0aWFsID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihmdW5jLCBib3VuZEFyZ3MpIHtcbiAgICB2YXIgcGxhY2Vob2xkZXIgPSBfLnBhcnRpYWwucGxhY2Vob2xkZXI7XG4gICAgdmFyIGJvdW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSAwLCBsZW5ndGggPSBib3VuZEFyZ3MubGVuZ3RoO1xuICAgICAgdmFyIGFyZ3MgPSBBcnJheShsZW5ndGgpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBhcmdzW2ldID0gYm91bmRBcmdzW2ldID09PSBwbGFjZWhvbGRlciA/IGFyZ3VtZW50c1twb3NpdGlvbisrXSA6IGJvdW5kQXJnc1tpXTtcbiAgICAgIH1cbiAgICAgIHdoaWxlIChwb3NpdGlvbiA8IGFyZ3VtZW50cy5sZW5ndGgpIGFyZ3MucHVzaChhcmd1bWVudHNbcG9zaXRpb24rK10pO1xuICAgICAgcmV0dXJuIGV4ZWN1dGVCb3VuZChmdW5jLCBib3VuZCwgdGhpcywgdGhpcywgYXJncyk7XG4gICAgfTtcbiAgICByZXR1cm4gYm91bmQ7XG4gIH0pO1xuXG4gIF8ucGFydGlhbC5wbGFjZWhvbGRlciA9IF87XG5cbiAgLy8gQmluZCBhIG51bWJlciBvZiBhbiBvYmplY3QncyBtZXRob2RzIHRvIHRoYXQgb2JqZWN0LiBSZW1haW5pbmcgYXJndW1lbnRzXG4gIC8vIGFyZSB0aGUgbWV0aG9kIG5hbWVzIHRvIGJlIGJvdW5kLiBVc2VmdWwgZm9yIGVuc3VyaW5nIHRoYXQgYWxsIGNhbGxiYWNrc1xuICAvLyBkZWZpbmVkIG9uIGFuIG9iamVjdCBiZWxvbmcgdG8gaXQuXG4gIF8uYmluZEFsbCA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24ob2JqLCBrZXlzKSB7XG4gICAga2V5cyA9IGZsYXR0ZW4oa2V5cywgZmFsc2UsIGZhbHNlKTtcbiAgICB2YXIgaW5kZXggPSBrZXlzLmxlbmd0aDtcbiAgICBpZiAoaW5kZXggPCAxKSB0aHJvdyBuZXcgRXJyb3IoJ2JpbmRBbGwgbXVzdCBiZSBwYXNzZWQgZnVuY3Rpb24gbmFtZXMnKTtcbiAgICB3aGlsZSAoaW5kZXgtLSkge1xuICAgICAgdmFyIGtleSA9IGtleXNbaW5kZXhdO1xuICAgICAgb2JqW2tleV0gPSBfLmJpbmQob2JqW2tleV0sIG9iaik7XG4gICAgfVxuICB9KTtcblxuICAvLyBNZW1vaXplIGFuIGV4cGVuc2l2ZSBmdW5jdGlvbiBieSBzdG9yaW5nIGl0cyByZXN1bHRzLlxuICBfLm1lbW9pemUgPSBmdW5jdGlvbihmdW5jLCBoYXNoZXIpIHtcbiAgICB2YXIgbWVtb2l6ZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIGNhY2hlID0gbWVtb2l6ZS5jYWNoZTtcbiAgICAgIHZhciBhZGRyZXNzID0gJycgKyAoaGFzaGVyID8gaGFzaGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiBrZXkpO1xuICAgICAgaWYgKCFoYXMoY2FjaGUsIGFkZHJlc3MpKSBjYWNoZVthZGRyZXNzXSA9IGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiBjYWNoZVthZGRyZXNzXTtcbiAgICB9O1xuICAgIG1lbW9pemUuY2FjaGUgPSB7fTtcbiAgICByZXR1cm4gbWVtb2l6ZTtcbiAgfTtcblxuICAvLyBEZWxheXMgYSBmdW5jdGlvbiBmb3IgdGhlIGdpdmVuIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIGFuZCB0aGVuIGNhbGxzXG4gIC8vIGl0IHdpdGggdGhlIGFyZ3VtZW50cyBzdXBwbGllZC5cbiAgXy5kZWxheSA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24oZnVuYywgd2FpdCwgYXJncykge1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfSwgd2FpdCk7XG4gIH0pO1xuXG4gIC8vIERlZmVycyBhIGZ1bmN0aW9uLCBzY2hlZHVsaW5nIGl0IHRvIHJ1biBhZnRlciB0aGUgY3VycmVudCBjYWxsIHN0YWNrIGhhc1xuICAvLyBjbGVhcmVkLlxuICBfLmRlZmVyID0gXy5wYXJ0aWFsKF8uZGVsYXksIF8sIDEpO1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgd2hlbiBpbnZva2VkLCB3aWxsIG9ubHkgYmUgdHJpZ2dlcmVkIGF0IG1vc3Qgb25jZVxuICAvLyBkdXJpbmcgYSBnaXZlbiB3aW5kb3cgb2YgdGltZS4gTm9ybWFsbHksIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gd2lsbCBydW5cbiAgLy8gYXMgbXVjaCBhcyBpdCBjYW4sIHdpdGhvdXQgZXZlciBnb2luZyBtb3JlIHRoYW4gb25jZSBwZXIgYHdhaXRgIGR1cmF0aW9uO1xuICAvLyBidXQgaWYgeW91J2QgbGlrZSB0byBkaXNhYmxlIHRoZSBleGVjdXRpb24gb24gdGhlIGxlYWRpbmcgZWRnZSwgcGFzc1xuICAvLyBge2xlYWRpbmc6IGZhbHNlfWAuIFRvIGRpc2FibGUgZXhlY3V0aW9uIG9uIHRoZSB0cmFpbGluZyBlZGdlLCBkaXR0by5cbiAgXy50aHJvdHRsZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgICB2YXIgdGltZW91dCwgY29udGV4dCwgYXJncywgcmVzdWx0O1xuICAgIHZhciBwcmV2aW91cyA9IDA7XG4gICAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG5cbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiBfLm5vdygpO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgaWYgKCF0aW1lb3V0KSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgfTtcblxuICAgIHZhciB0aHJvdHRsZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBub3cgPSBfLm5vdygpO1xuICAgICAgaWYgKCFwcmV2aW91cyAmJiBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlKSBwcmV2aW91cyA9IG5vdztcbiAgICAgIHZhciByZW1haW5pbmcgPSB3YWl0IC0gKG5vdyAtIHByZXZpb3VzKTtcbiAgICAgIGNvbnRleHQgPSB0aGlzO1xuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIGlmIChyZW1haW5pbmcgPD0gMCB8fCByZW1haW5pbmcgPiB3YWl0KSB7XG4gICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHByZXZpb3VzID0gbm93O1xuICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAoIXRpbWVvdXQgJiYgb3B0aW9ucy50cmFpbGluZyAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHJlbWFpbmluZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICB0aHJvdHRsZWQuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICBwcmV2aW91cyA9IDA7XG4gICAgICB0aW1lb3V0ID0gY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhyb3R0bGVkO1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgYXMgbG9uZyBhcyBpdCBjb250aW51ZXMgdG8gYmUgaW52b2tlZCwgd2lsbCBub3RcbiAgLy8gYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuICAvLyBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbiAgLy8gbGVhZGluZyBlZGdlLCBpbnN0ZWFkIG9mIHRoZSB0cmFpbGluZy5cbiAgXy5kZWJvdW5jZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICAgIHZhciB0aW1lb3V0LCByZXN1bHQ7XG5cbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbihjb250ZXh0LCBhcmdzKSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmIChhcmdzKSByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICB2YXIgZGVib3VuY2VkID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihhcmdzKSB7XG4gICAgICBpZiAodGltZW91dCkgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgaWYgKGltbWVkaWF0ZSkge1xuICAgICAgICB2YXIgY2FsbE5vdyA9ICF0aW1lb3V0O1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgICAgIGlmIChjYWxsTm93KSByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGltZW91dCA9IF8uZGVsYXkobGF0ZXIsIHdhaXQsIHRoaXMsIGFyZ3MpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgZGVib3VuY2VkLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgfTtcblxuICAgIHJldHVybiBkZWJvdW5jZWQ7XG4gIH07XG5cbiAgLy8gUmV0dXJucyB0aGUgZmlyc3QgZnVuY3Rpb24gcGFzc2VkIGFzIGFuIGFyZ3VtZW50IHRvIHRoZSBzZWNvbmQsXG4gIC8vIGFsbG93aW5nIHlvdSB0byBhZGp1c3QgYXJndW1lbnRzLCBydW4gY29kZSBiZWZvcmUgYW5kIGFmdGVyLCBhbmRcbiAgLy8gY29uZGl0aW9uYWxseSBleGVjdXRlIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cbiAgXy53cmFwID0gZnVuY3Rpb24oZnVuYywgd3JhcHBlcikge1xuICAgIHJldHVybiBfLnBhcnRpYWwod3JhcHBlciwgZnVuYyk7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIG5lZ2F0ZWQgdmVyc2lvbiBvZiB0aGUgcGFzc2VkLWluIHByZWRpY2F0ZS5cbiAgXy5uZWdhdGUgPSBmdW5jdGlvbihwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gIXByZWRpY2F0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgaXMgdGhlIGNvbXBvc2l0aW9uIG9mIGEgbGlzdCBvZiBmdW5jdGlvbnMsIGVhY2hcbiAgLy8gY29uc3VtaW5nIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIHRoYXQgZm9sbG93cy5cbiAgXy5jb21wb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIHN0YXJ0ID0gYXJncy5sZW5ndGggLSAxO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpID0gc3RhcnQ7XG4gICAgICB2YXIgcmVzdWx0ID0gYXJnc1tzdGFydF0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHdoaWxlIChpLS0pIHJlc3VsdCA9IGFyZ3NbaV0uY2FsbCh0aGlzLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgb25seSBiZSBleGVjdXRlZCBvbiBhbmQgYWZ0ZXIgdGhlIE50aCBjYWxsLlxuICBfLmFmdGVyID0gZnVuY3Rpb24odGltZXMsIGZ1bmMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoLS10aW1lcyA8IDEpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgb25seSBiZSBleGVjdXRlZCB1cCB0byAoYnV0IG5vdCBpbmNsdWRpbmcpIHRoZSBOdGggY2FsbC5cbiAgXy5iZWZvcmUgPSBmdW5jdGlvbih0aW1lcywgZnVuYykge1xuICAgIHZhciBtZW1vO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICgtLXRpbWVzID4gMCkge1xuICAgICAgICBtZW1vID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgaWYgKHRpbWVzIDw9IDEpIGZ1bmMgPSBudWxsO1xuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGF0IG1vc3Qgb25lIHRpbWUsIG5vIG1hdHRlciBob3dcbiAgLy8gb2Z0ZW4geW91IGNhbGwgaXQuIFVzZWZ1bCBmb3IgbGF6eSBpbml0aWFsaXphdGlvbi5cbiAgXy5vbmNlID0gXy5wYXJ0aWFsKF8uYmVmb3JlLCAyKTtcblxuICBfLnJlc3RBcmd1bWVudHMgPSByZXN0QXJndW1lbnRzO1xuXG4gIC8vIE9iamVjdCBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEtleXMgaW4gSUUgPCA5IHRoYXQgd29uJ3QgYmUgaXRlcmF0ZWQgYnkgYGZvciBrZXkgaW4gLi4uYCBhbmQgdGh1cyBtaXNzZWQuXG4gIHZhciBoYXNFbnVtQnVnID0gIXt0b1N0cmluZzogbnVsbH0ucHJvcGVydHlJc0VudW1lcmFibGUoJ3RvU3RyaW5nJyk7XG4gIHZhciBub25FbnVtZXJhYmxlUHJvcHMgPSBbJ3ZhbHVlT2YnLCAnaXNQcm90b3R5cGVPZicsICd0b1N0cmluZycsXG4gICAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJ2hhc093blByb3BlcnR5JywgJ3RvTG9jYWxlU3RyaW5nJ107XG5cbiAgdmFyIGNvbGxlY3ROb25FbnVtUHJvcHMgPSBmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgICB2YXIgbm9uRW51bUlkeCA9IG5vbkVudW1lcmFibGVQcm9wcy5sZW5ndGg7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gb2JqLmNvbnN0cnVjdG9yO1xuICAgIHZhciBwcm90byA9IF8uaXNGdW5jdGlvbihjb25zdHJ1Y3RvcikgJiYgY29uc3RydWN0b3IucHJvdG90eXBlIHx8IE9ialByb3RvO1xuXG4gICAgLy8gQ29uc3RydWN0b3IgaXMgYSBzcGVjaWFsIGNhc2UuXG4gICAgdmFyIHByb3AgPSAnY29uc3RydWN0b3InO1xuICAgIGlmIChoYXMob2JqLCBwcm9wKSAmJiAhXy5jb250YWlucyhrZXlzLCBwcm9wKSkga2V5cy5wdXNoKHByb3ApO1xuXG4gICAgd2hpbGUgKG5vbkVudW1JZHgtLSkge1xuICAgICAgcHJvcCA9IG5vbkVudW1lcmFibGVQcm9wc1tub25FbnVtSWR4XTtcbiAgICAgIGlmIChwcm9wIGluIG9iaiAmJiBvYmpbcHJvcF0gIT09IHByb3RvW3Byb3BdICYmICFfLmNvbnRhaW5zKGtleXMsIHByb3ApKSB7XG4gICAgICAgIGtleXMucHVzaChwcm9wKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gUmV0cmlldmUgdGhlIG5hbWVzIG9mIGFuIG9iamVjdCdzIG93biBwcm9wZXJ0aWVzLlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgT2JqZWN0LmtleXNgLlxuICBfLmtleXMgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIV8uaXNPYmplY3Qob2JqKSkgcmV0dXJuIFtdO1xuICAgIGlmIChuYXRpdmVLZXlzKSByZXR1cm4gbmF0aXZlS2V5cyhvYmopO1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikgaWYgKGhhcyhvYmosIGtleSkpIGtleXMucHVzaChrZXkpO1xuICAgIC8vIEFoZW0sIElFIDwgOS5cbiAgICBpZiAoaGFzRW51bUJ1ZykgY29sbGVjdE5vbkVudW1Qcm9wcyhvYmosIGtleXMpO1xuICAgIHJldHVybiBrZXlzO1xuICB9O1xuXG4gIC8vIFJldHJpZXZlIGFsbCB0aGUgcHJvcGVydHkgbmFtZXMgb2YgYW4gb2JqZWN0LlxuICBfLmFsbEtleXMgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIV8uaXNPYmplY3Qob2JqKSkgcmV0dXJuIFtdO1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikga2V5cy5wdXNoKGtleSk7XG4gICAgLy8gQWhlbSwgSUUgPCA5LlxuICAgIGlmIChoYXNFbnVtQnVnKSBjb2xsZWN0Tm9uRW51bVByb3BzKG9iaiwga2V5cyk7XG4gICAgcmV0dXJuIGtleXM7XG4gIH07XG5cbiAgLy8gUmV0cmlldmUgdGhlIHZhbHVlcyBvZiBhbiBvYmplY3QncyBwcm9wZXJ0aWVzLlxuICBfLnZhbHVlcyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciB2YWx1ZXMgPSBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlc1tpXSA9IG9ialtrZXlzW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfTtcblxuICAvLyBSZXR1cm5zIHRoZSByZXN1bHRzIG9mIGFwcGx5aW5nIHRoZSBpdGVyYXRlZSB0byBlYWNoIGVsZW1lbnQgb2YgdGhlIG9iamVjdC5cbiAgLy8gSW4gY29udHJhc3QgdG8gXy5tYXAgaXQgcmV0dXJucyBhbiBvYmplY3QuXG4gIF8ubWFwT2JqZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaiksXG4gICAgICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoLFxuICAgICAgICByZXN1bHRzID0ge307XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIGN1cnJlbnRLZXkgPSBrZXlzW2luZGV4XTtcbiAgICAgIHJlc3VsdHNbY3VycmVudEtleV0gPSBpdGVyYXRlZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIENvbnZlcnQgYW4gb2JqZWN0IGludG8gYSBsaXN0IG9mIGBba2V5LCB2YWx1ZV1gIHBhaXJzLlxuICAvLyBUaGUgb3Bwb3NpdGUgb2YgXy5vYmplY3QuXG4gIF8ucGFpcnMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgcGFpcnMgPSBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHBhaXJzW2ldID0gW2tleXNbaV0sIG9ialtrZXlzW2ldXV07XG4gICAgfVxuICAgIHJldHVybiBwYWlycztcbiAgfTtcblxuICAvLyBJbnZlcnQgdGhlIGtleXMgYW5kIHZhbHVlcyBvZiBhbiBvYmplY3QuIFRoZSB2YWx1ZXMgbXVzdCBiZSBzZXJpYWxpemFibGUuXG4gIF8uaW52ZXJ0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdFtvYmpba2V5c1tpXV1dID0ga2V5c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSBzb3J0ZWQgbGlzdCBvZiB0aGUgZnVuY3Rpb24gbmFtZXMgYXZhaWxhYmxlIG9uIHRoZSBvYmplY3QuXG4gIC8vIEFsaWFzZWQgYXMgYG1ldGhvZHNgLlxuICBfLmZ1bmN0aW9ucyA9IF8ubWV0aG9kcyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBuYW1lcyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24ob2JqW2tleV0pKSBuYW1lcy5wdXNoKGtleSk7XG4gICAgfVxuICAgIHJldHVybiBuYW1lcy5zb3J0KCk7XG4gIH07XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIGFzc2lnbmVyIGZ1bmN0aW9ucy5cbiAgdmFyIGNyZWF0ZUFzc2lnbmVyID0gZnVuY3Rpb24oa2V5c0Z1bmMsIGRlZmF1bHRzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICBpZiAoZGVmYXVsdHMpIG9iaiA9IE9iamVjdChvYmopO1xuICAgICAgaWYgKGxlbmd0aCA8IDIgfHwgb2JqID09IG51bGwpIHJldHVybiBvYmo7XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaW5kZXhdLFxuICAgICAgICAgICAga2V5cyA9IGtleXNGdW5jKHNvdXJjZSksXG4gICAgICAgICAgICBsID0ga2V5cy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKCFkZWZhdWx0cyB8fCBvYmpba2V5XSA9PT0gdm9pZCAwKSBvYmpba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH07XG4gIH07XG5cbiAgLy8gRXh0ZW5kIGEgZ2l2ZW4gb2JqZWN0IHdpdGggYWxsIHRoZSBwcm9wZXJ0aWVzIGluIHBhc3NlZC1pbiBvYmplY3QocykuXG4gIF8uZXh0ZW5kID0gY3JlYXRlQXNzaWduZXIoXy5hbGxLZXlzKTtcblxuICAvLyBBc3NpZ25zIGEgZ2l2ZW4gb2JqZWN0IHdpdGggYWxsIHRoZSBvd24gcHJvcGVydGllcyBpbiB0aGUgcGFzc2VkLWluIG9iamVjdChzKS5cbiAgLy8gKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9hc3NpZ24pXG4gIF8uZXh0ZW5kT3duID0gXy5hc3NpZ24gPSBjcmVhdGVBc3NpZ25lcihfLmtleXMpO1xuXG4gIC8vIFJldHVybnMgdGhlIGZpcnN0IGtleSBvbiBhbiBvYmplY3QgdGhhdCBwYXNzZXMgYSBwcmVkaWNhdGUgdGVzdC5cbiAgXy5maW5kS2V5ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaiksIGtleTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmIChwcmVkaWNhdGUob2JqW2tleV0sIGtleSwgb2JqKSkgcmV0dXJuIGtleTtcbiAgICB9XG4gIH07XG5cbiAgLy8gSW50ZXJuYWwgcGljayBoZWxwZXIgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIGBvYmpgIGhhcyBrZXkgYGtleWAuXG4gIHZhciBrZXlJbk9iaiA9IGZ1bmN0aW9uKHZhbHVlLCBrZXksIG9iaikge1xuICAgIHJldHVybiBrZXkgaW4gb2JqO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG9iamVjdCBvbmx5IGNvbnRhaW5pbmcgdGhlIHdoaXRlbGlzdGVkIHByb3BlcnRpZXMuXG4gIF8ucGljayA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24ob2JqLCBrZXlzKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9LCBpdGVyYXRlZSA9IGtleXNbMF07XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gcmVzdWx0O1xuICAgIGlmIChfLmlzRnVuY3Rpb24oaXRlcmF0ZWUpKSB7XG4gICAgICBpZiAoa2V5cy5sZW5ndGggPiAxKSBpdGVyYXRlZSA9IG9wdGltaXplQ2IoaXRlcmF0ZWUsIGtleXNbMV0pO1xuICAgICAga2V5cyA9IF8uYWxsS2V5cyhvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVyYXRlZSA9IGtleUluT2JqO1xuICAgICAga2V5cyA9IGZsYXR0ZW4oa2V5cywgZmFsc2UsIGZhbHNlKTtcbiAgICAgIG9iaiA9IE9iamVjdChvYmopO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICB2YXIgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgIGlmIChpdGVyYXRlZSh2YWx1ZSwga2V5LCBvYmopKSByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KTtcblxuICAvLyBSZXR1cm4gYSBjb3B5IG9mIHRoZSBvYmplY3Qgd2l0aG91dCB0aGUgYmxhY2tsaXN0ZWQgcHJvcGVydGllcy5cbiAgXy5vbWl0ID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgICB2YXIgaXRlcmF0ZWUgPSBrZXlzWzBdLCBjb250ZXh0O1xuICAgIGlmIChfLmlzRnVuY3Rpb24oaXRlcmF0ZWUpKSB7XG4gICAgICBpdGVyYXRlZSA9IF8ubmVnYXRlKGl0ZXJhdGVlKTtcbiAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDEpIGNvbnRleHQgPSBrZXlzWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXlzID0gXy5tYXAoZmxhdHRlbihrZXlzLCBmYWxzZSwgZmFsc2UpLCBTdHJpbmcpO1xuICAgICAgaXRlcmF0ZWUgPSBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICAgIHJldHVybiAhXy5jb250YWlucyhrZXlzLCBrZXkpO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIF8ucGljayhvYmosIGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgfSk7XG5cbiAgLy8gRmlsbCBpbiBhIGdpdmVuIG9iamVjdCB3aXRoIGRlZmF1bHQgcHJvcGVydGllcy5cbiAgXy5kZWZhdWx0cyA9IGNyZWF0ZUFzc2lnbmVyKF8uYWxsS2V5cywgdHJ1ZSk7XG5cbiAgLy8gQ3JlYXRlcyBhbiBvYmplY3QgdGhhdCBpbmhlcml0cyBmcm9tIHRoZSBnaXZlbiBwcm90b3R5cGUgb2JqZWN0LlxuICAvLyBJZiBhZGRpdGlvbmFsIHByb3BlcnRpZXMgYXJlIHByb3ZpZGVkIHRoZW4gdGhleSB3aWxsIGJlIGFkZGVkIHRvIHRoZVxuICAvLyBjcmVhdGVkIG9iamVjdC5cbiAgXy5jcmVhdGUgPSBmdW5jdGlvbihwcm90b3R5cGUsIHByb3BzKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VDcmVhdGUocHJvdG90eXBlKTtcbiAgICBpZiAocHJvcHMpIF8uZXh0ZW5kT3duKHJlc3VsdCwgcHJvcHMpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIGEgKHNoYWxsb3ctY2xvbmVkKSBkdXBsaWNhdGUgb2YgYW4gb2JqZWN0LlxuICBfLmNsb25lID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFfLmlzT2JqZWN0KG9iaikpIHJldHVybiBvYmo7XG4gICAgcmV0dXJuIF8uaXNBcnJheShvYmopID8gb2JqLnNsaWNlKCkgOiBfLmV4dGVuZCh7fSwgb2JqKTtcbiAgfTtcblxuICAvLyBJbnZva2VzIGludGVyY2VwdG9yIHdpdGggdGhlIG9iaiwgYW5kIHRoZW4gcmV0dXJucyBvYmouXG4gIC8vIFRoZSBwcmltYXJ5IHB1cnBvc2Ugb2YgdGhpcyBtZXRob2QgaXMgdG8gXCJ0YXAgaW50b1wiIGEgbWV0aG9kIGNoYWluLCBpblxuICAvLyBvcmRlciB0byBwZXJmb3JtIG9wZXJhdGlvbnMgb24gaW50ZXJtZWRpYXRlIHJlc3VsdHMgd2l0aGluIHRoZSBjaGFpbi5cbiAgXy50YXAgPSBmdW5jdGlvbihvYmosIGludGVyY2VwdG9yKSB7XG4gICAgaW50ZXJjZXB0b3Iob2JqKTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIFJldHVybnMgd2hldGhlciBhbiBvYmplY3QgaGFzIGEgZ2l2ZW4gc2V0IG9mIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLmlzTWF0Y2ggPSBmdW5jdGlvbihvYmplY3QsIGF0dHJzKSB7XG4gICAgdmFyIGtleXMgPSBfLmtleXMoYXR0cnMpLCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICBpZiAob2JqZWN0ID09IG51bGwpIHJldHVybiAhbGVuZ3RoO1xuICAgIHZhciBvYmogPSBPYmplY3Qob2JqZWN0KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmIChhdHRyc1trZXldICE9PSBvYmpba2V5XSB8fCAhKGtleSBpbiBvYmopKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG5cbiAgLy8gSW50ZXJuYWwgcmVjdXJzaXZlIGNvbXBhcmlzb24gZnVuY3Rpb24gZm9yIGBpc0VxdWFsYC5cbiAgdmFyIGVxLCBkZWVwRXE7XG4gIGVxID0gZnVuY3Rpb24oYSwgYiwgYVN0YWNrLCBiU3RhY2spIHtcbiAgICAvLyBJZGVudGljYWwgb2JqZWN0cyBhcmUgZXF1YWwuIGAwID09PSAtMGAsIGJ1dCB0aGV5IGFyZW4ndCBpZGVudGljYWwuXG4gICAgLy8gU2VlIHRoZSBbSGFybW9ueSBgZWdhbGAgcHJvcG9zYWxdKGh0dHA6Ly93aWtpLmVjbWFzY3JpcHQub3JnL2Rva3UucGhwP2lkPWhhcm1vbnk6ZWdhbCkuXG4gICAgaWYgKGEgPT09IGIpIHJldHVybiBhICE9PSAwIHx8IDEgLyBhID09PSAxIC8gYjtcbiAgICAvLyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgb25seSBlcXVhbCB0byBpdHNlbGYgKHN0cmljdCBjb21wYXJpc29uKS5cbiAgICBpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGBOYU5gcyBhcmUgZXF1aXZhbGVudCwgYnV0IG5vbi1yZWZsZXhpdmUuXG4gICAgaWYgKGEgIT09IGEpIHJldHVybiBiICE9PSBiO1xuICAgIC8vIEV4aGF1c3QgcHJpbWl0aXZlIGNoZWNrc1xuICAgIHZhciB0eXBlID0gdHlwZW9mIGE7XG4gICAgaWYgKHR5cGUgIT09ICdmdW5jdGlvbicgJiYgdHlwZSAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgIT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gZGVlcEVxKGEsIGIsIGFTdGFjaywgYlN0YWNrKTtcbiAgfTtcblxuICAvLyBJbnRlcm5hbCByZWN1cnNpdmUgY29tcGFyaXNvbiBmdW5jdGlvbiBmb3IgYGlzRXF1YWxgLlxuICBkZWVwRXEgPSBmdW5jdGlvbihhLCBiLCBhU3RhY2ssIGJTdGFjaykge1xuICAgIC8vIFVud3JhcCBhbnkgd3JhcHBlZCBvYmplY3RzLlxuICAgIGlmIChhIGluc3RhbmNlb2YgXykgYSA9IGEuX3dyYXBwZWQ7XG4gICAgaWYgKGIgaW5zdGFuY2VvZiBfKSBiID0gYi5fd3JhcHBlZDtcbiAgICAvLyBDb21wYXJlIGBbW0NsYXNzXV1gIG5hbWVzLlxuICAgIHZhciBjbGFzc05hbWUgPSB0b1N0cmluZy5jYWxsKGEpO1xuICAgIGlmIChjbGFzc05hbWUgIT09IHRvU3RyaW5nLmNhbGwoYikpIHJldHVybiBmYWxzZTtcbiAgICBzd2l0Y2ggKGNsYXNzTmFtZSkge1xuICAgICAgLy8gU3RyaW5ncywgbnVtYmVycywgcmVndWxhciBleHByZXNzaW9ucywgZGF0ZXMsIGFuZCBib29sZWFucyBhcmUgY29tcGFyZWQgYnkgdmFsdWUuXG4gICAgICBjYXNlICdbb2JqZWN0IFJlZ0V4cF0nOlxuICAgICAgLy8gUmVnRXhwcyBhcmUgY29lcmNlZCB0byBzdHJpbmdzIGZvciBjb21wYXJpc29uIChOb3RlOiAnJyArIC9hL2kgPT09ICcvYS9pJylcbiAgICAgIGNhc2UgJ1tvYmplY3QgU3RyaW5nXSc6XG4gICAgICAgIC8vIFByaW1pdGl2ZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgb2JqZWN0IHdyYXBwZXJzIGFyZSBlcXVpdmFsZW50OyB0aHVzLCBgXCI1XCJgIGlzXG4gICAgICAgIC8vIGVxdWl2YWxlbnQgdG8gYG5ldyBTdHJpbmcoXCI1XCIpYC5cbiAgICAgICAgcmV0dXJuICcnICsgYSA9PT0gJycgKyBiO1xuICAgICAgY2FzZSAnW29iamVjdCBOdW1iZXJdJzpcbiAgICAgICAgLy8gYE5hTmBzIGFyZSBlcXVpdmFsZW50LCBidXQgbm9uLXJlZmxleGl2ZS5cbiAgICAgICAgLy8gT2JqZWN0KE5hTikgaXMgZXF1aXZhbGVudCB0byBOYU4uXG4gICAgICAgIGlmICgrYSAhPT0gK2EpIHJldHVybiArYiAhPT0gK2I7XG4gICAgICAgIC8vIEFuIGBlZ2FsYCBjb21wYXJpc29uIGlzIHBlcmZvcm1lZCBmb3Igb3RoZXIgbnVtZXJpYyB2YWx1ZXMuXG4gICAgICAgIHJldHVybiArYSA9PT0gMCA/IDEgLyArYSA9PT0gMSAvIGIgOiArYSA9PT0gK2I7XG4gICAgICBjYXNlICdbb2JqZWN0IERhdGVdJzpcbiAgICAgIGNhc2UgJ1tvYmplY3QgQm9vbGVhbl0nOlxuICAgICAgICAvLyBDb2VyY2UgZGF0ZXMgYW5kIGJvb2xlYW5zIHRvIG51bWVyaWMgcHJpbWl0aXZlIHZhbHVlcy4gRGF0ZXMgYXJlIGNvbXBhcmVkIGJ5IHRoZWlyXG4gICAgICAgIC8vIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9ucy4gTm90ZSB0aGF0IGludmFsaWQgZGF0ZXMgd2l0aCBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnNcbiAgICAgICAgLy8gb2YgYE5hTmAgYXJlIG5vdCBlcXVpdmFsZW50LlxuICAgICAgICByZXR1cm4gK2EgPT09ICtiO1xuICAgICAgY2FzZSAnW29iamVjdCBTeW1ib2xdJzpcbiAgICAgICAgcmV0dXJuIFN5bWJvbFByb3RvLnZhbHVlT2YuY2FsbChhKSA9PT0gU3ltYm9sUHJvdG8udmFsdWVPZi5jYWxsKGIpO1xuICAgIH1cblxuICAgIHZhciBhcmVBcnJheXMgPSBjbGFzc05hbWUgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgaWYgKCFhcmVBcnJheXMpIHtcbiAgICAgIGlmICh0eXBlb2YgYSAhPSAnb2JqZWN0JyB8fCB0eXBlb2YgYiAhPSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAvLyBPYmplY3RzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWl2YWxlbnQsIGJ1dCBgT2JqZWN0YHMgb3IgYEFycmF5YHNcbiAgICAgIC8vIGZyb20gZGlmZmVyZW50IGZyYW1lcyBhcmUuXG4gICAgICB2YXIgYUN0b3IgPSBhLmNvbnN0cnVjdG9yLCBiQ3RvciA9IGIuY29uc3RydWN0b3I7XG4gICAgICBpZiAoYUN0b3IgIT09IGJDdG9yICYmICEoXy5pc0Z1bmN0aW9uKGFDdG9yKSAmJiBhQ3RvciBpbnN0YW5jZW9mIGFDdG9yICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5pc0Z1bmN0aW9uKGJDdG9yKSAmJiBiQ3RvciBpbnN0YW5jZW9mIGJDdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoJ2NvbnN0cnVjdG9yJyBpbiBhICYmICdjb25zdHJ1Y3RvcicgaW4gYikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBBc3N1bWUgZXF1YWxpdHkgZm9yIGN5Y2xpYyBzdHJ1Y3R1cmVzLiBUaGUgYWxnb3JpdGhtIGZvciBkZXRlY3RpbmcgY3ljbGljXG4gICAgLy8gc3RydWN0dXJlcyBpcyBhZGFwdGVkIGZyb20gRVMgNS4xIHNlY3Rpb24gMTUuMTIuMywgYWJzdHJhY3Qgb3BlcmF0aW9uIGBKT2AuXG5cbiAgICAvLyBJbml0aWFsaXppbmcgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gICAgLy8gSXQncyBkb25lIGhlcmUgc2luY2Ugd2Ugb25seSBuZWVkIHRoZW0gZm9yIG9iamVjdHMgYW5kIGFycmF5cyBjb21wYXJpc29uLlxuICAgIGFTdGFjayA9IGFTdGFjayB8fCBbXTtcbiAgICBiU3RhY2sgPSBiU3RhY2sgfHwgW107XG4gICAgdmFyIGxlbmd0aCA9IGFTdGFjay5sZW5ndGg7XG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAvLyBMaW5lYXIgc2VhcmNoLiBQZXJmb3JtYW5jZSBpcyBpbnZlcnNlbHkgcHJvcG9ydGlvbmFsIHRvIHRoZSBudW1iZXIgb2ZcbiAgICAgIC8vIHVuaXF1ZSBuZXN0ZWQgc3RydWN0dXJlcy5cbiAgICAgIGlmIChhU3RhY2tbbGVuZ3RoXSA9PT0gYSkgcmV0dXJuIGJTdGFja1tsZW5ndGhdID09PSBiO1xuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZmlyc3Qgb2JqZWN0IHRvIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucHVzaChhKTtcbiAgICBiU3RhY2sucHVzaChiKTtcblxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyBhbmQgYXJyYXlzLlxuICAgIGlmIChhcmVBcnJheXMpIHtcbiAgICAgIC8vIENvbXBhcmUgYXJyYXkgbGVuZ3RocyB0byBkZXRlcm1pbmUgaWYgYSBkZWVwIGNvbXBhcmlzb24gaXMgbmVjZXNzYXJ5LlxuICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgICBpZiAobGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gRGVlcCBjb21wYXJlIHRoZSBjb250ZW50cywgaWdub3Jpbmcgbm9uLW51bWVyaWMgcHJvcGVydGllcy5cbiAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICBpZiAoIWVxKGFbbGVuZ3RoXSwgYltsZW5ndGhdLCBhU3RhY2ssIGJTdGFjaykpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVlcCBjb21wYXJlIG9iamVjdHMuXG4gICAgICB2YXIga2V5cyA9IF8ua2V5cyhhKSwga2V5O1xuICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgICAvLyBFbnN1cmUgdGhhdCBib3RoIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBudW1iZXIgb2YgcHJvcGVydGllcyBiZWZvcmUgY29tcGFyaW5nIGRlZXAgZXF1YWxpdHkuXG4gICAgICBpZiAoXy5rZXlzKGIpLmxlbmd0aCAhPT0gbGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgLy8gRGVlcCBjb21wYXJlIGVhY2ggbWVtYmVyXG4gICAgICAgIGtleSA9IGtleXNbbGVuZ3RoXTtcbiAgICAgICAgaWYgKCEoaGFzKGIsIGtleSkgJiYgZXEoYVtrZXldLCBiW2tleV0sIGFTdGFjaywgYlN0YWNrKSkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBvYmplY3QgZnJvbSB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gICAgYVN0YWNrLnBvcCgpO1xuICAgIGJTdGFjay5wb3AoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvLyBQZXJmb3JtIGEgZGVlcCBjb21wYXJpc29uIHRvIGNoZWNrIGlmIHR3byBvYmplY3RzIGFyZSBlcXVhbC5cbiAgXy5pc0VxdWFsID0gZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBlcShhLCBiKTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIGFycmF5LCBzdHJpbmcsIG9yIG9iamVjdCBlbXB0eT9cbiAgLy8gQW4gXCJlbXB0eVwiIG9iamVjdCBoYXMgbm8gZW51bWVyYWJsZSBvd24tcHJvcGVydGllcy5cbiAgXy5pc0VtcHR5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoaXNBcnJheUxpa2Uob2JqKSAmJiAoXy5pc0FycmF5KG9iaikgfHwgXy5pc1N0cmluZyhvYmopIHx8IF8uaXNBcmd1bWVudHMob2JqKSkpIHJldHVybiBvYmoubGVuZ3RoID09PSAwO1xuICAgIHJldHVybiBfLmtleXMob2JqKS5sZW5ndGggPT09IDA7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIERPTSBlbGVtZW50P1xuICBfLmlzRWxlbWVudCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiAhIShvYmogJiYgb2JqLm5vZGVUeXBlID09PSAxKTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGFuIGFycmF5P1xuICAvLyBEZWxlZ2F0ZXMgdG8gRUNNQTUncyBuYXRpdmUgQXJyYXkuaXNBcnJheVxuICBfLmlzQXJyYXkgPSBuYXRpdmVJc0FycmF5IHx8IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YXJpYWJsZSBhbiBvYmplY3Q/XG4gIF8uaXNPYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBvYmo7XG4gICAgcmV0dXJuIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgdHlwZSA9PT0gJ29iamVjdCcgJiYgISFvYmo7XG4gIH07XG5cbiAgLy8gQWRkIHNvbWUgaXNUeXBlIG1ldGhvZHM6IGlzQXJndW1lbnRzLCBpc0Z1bmN0aW9uLCBpc1N0cmluZywgaXNOdW1iZXIsIGlzRGF0ZSwgaXNSZWdFeHAsIGlzRXJyb3IsIGlzTWFwLCBpc1dlYWtNYXAsIGlzU2V0LCBpc1dlYWtTZXQuXG4gIF8uZWFjaChbJ0FyZ3VtZW50cycsICdGdW5jdGlvbicsICdTdHJpbmcnLCAnTnVtYmVyJywgJ0RhdGUnLCAnUmVnRXhwJywgJ0Vycm9yJywgJ1N5bWJvbCcsICdNYXAnLCAnV2Vha01hcCcsICdTZXQnLCAnV2Vha1NldCddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgX1snaXMnICsgbmFtZV0gPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0ICcgKyBuYW1lICsgJ10nO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIERlZmluZSBhIGZhbGxiYWNrIHZlcnNpb24gb2YgdGhlIG1ldGhvZCBpbiBicm93c2VycyAoYWhlbSwgSUUgPCA5KSwgd2hlcmVcbiAgLy8gdGhlcmUgaXNuJ3QgYW55IGluc3BlY3RhYmxlIFwiQXJndW1lbnRzXCIgdHlwZS5cbiAgaWYgKCFfLmlzQXJndW1lbnRzKGFyZ3VtZW50cykpIHtcbiAgICBfLmlzQXJndW1lbnRzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gaGFzKG9iaiwgJ2NhbGxlZScpO1xuICAgIH07XG4gIH1cblxuICAvLyBPcHRpbWl6ZSBgaXNGdW5jdGlvbmAgaWYgYXBwcm9wcmlhdGUuIFdvcmsgYXJvdW5kIHNvbWUgdHlwZW9mIGJ1Z3MgaW4gb2xkIHY4LFxuICAvLyBJRSAxMSAoIzE2MjEpLCBTYWZhcmkgOCAoIzE5MjkpLCBhbmQgUGhhbnRvbUpTICgjMjIzNikuXG4gIHZhciBub2RlbGlzdCA9IHJvb3QuZG9jdW1lbnQgJiYgcm9vdC5kb2N1bWVudC5jaGlsZE5vZGVzO1xuICBpZiAodHlwZW9mIC8uLyAhPSAnZnVuY3Rpb24nICYmIHR5cGVvZiBJbnQ4QXJyYXkgIT0gJ29iamVjdCcgJiYgdHlwZW9mIG5vZGVsaXN0ICE9ICdmdW5jdGlvbicpIHtcbiAgICBfLmlzRnVuY3Rpb24gPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09ICdmdW5jdGlvbicgfHwgZmFsc2U7XG4gICAgfTtcbiAgfVxuXG4gIC8vIElzIGEgZ2l2ZW4gb2JqZWN0IGEgZmluaXRlIG51bWJlcj9cbiAgXy5pc0Zpbml0ZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiAhXy5pc1N5bWJvbChvYmopICYmIGlzRmluaXRlKG9iaikgJiYgIWlzTmFOKHBhcnNlRmxvYXQob2JqKSk7XG4gIH07XG5cbiAgLy8gSXMgdGhlIGdpdmVuIHZhbHVlIGBOYU5gP1xuICBfLmlzTmFOID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIF8uaXNOdW1iZXIob2JqKSAmJiBpc05hTihvYmopO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgYSBib29sZWFuP1xuICBfLmlzQm9vbGVhbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHRydWUgfHwgb2JqID09PSBmYWxzZSB8fCB0b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEJvb2xlYW5dJztcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGVxdWFsIHRvIG51bGw/XG4gIF8uaXNOdWxsID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gbnVsbDtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhcmlhYmxlIHVuZGVmaW5lZD9cbiAgXy5pc1VuZGVmaW5lZCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHZvaWQgMDtcbiAgfTtcblxuICAvLyBTaG9ydGN1dCBmdW5jdGlvbiBmb3IgY2hlY2tpbmcgaWYgYW4gb2JqZWN0IGhhcyBhIGdpdmVuIHByb3BlcnR5IGRpcmVjdGx5XG4gIC8vIG9uIGl0c2VsZiAoaW4gb3RoZXIgd29yZHMsIG5vdCBvbiBhIHByb3RvdHlwZSkuXG4gIF8uaGFzID0gZnVuY3Rpb24ob2JqLCBwYXRoKSB7XG4gICAgaWYgKCFfLmlzQXJyYXkocGF0aCkpIHtcbiAgICAgIHJldHVybiBoYXMob2JqLCBwYXRoKTtcbiAgICB9XG4gICAgdmFyIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBwYXRoW2ldO1xuICAgICAgaWYgKG9iaiA9PSBudWxsIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBvYmogPSBvYmpba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuICEhbGVuZ3RoO1xuICB9O1xuXG4gIC8vIFV0aWxpdHkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gUnVuIFVuZGVyc2NvcmUuanMgaW4gKm5vQ29uZmxpY3QqIG1vZGUsIHJldHVybmluZyB0aGUgYF9gIHZhcmlhYmxlIHRvIGl0c1xuICAvLyBwcmV2aW91cyBvd25lci4gUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QuXG4gIF8ubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIHJvb3QuXyA9IHByZXZpb3VzVW5kZXJzY29yZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyBLZWVwIHRoZSBpZGVudGl0eSBmdW5jdGlvbiBhcm91bmQgZm9yIGRlZmF1bHQgaXRlcmF0ZWVzLlxuICBfLmlkZW50aXR5ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgLy8gUHJlZGljYXRlLWdlbmVyYXRpbmcgZnVuY3Rpb25zLiBPZnRlbiB1c2VmdWwgb3V0c2lkZSBvZiBVbmRlcnNjb3JlLlxuICBfLmNvbnN0YW50ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgfTtcblxuICBfLm5vb3AgPSBmdW5jdGlvbigpe307XG5cbiAgLy8gQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gcGFzc2VkIGFuIG9iamVjdCwgd2lsbCB0cmF2ZXJzZSB0aGF0IG9iamVjdOKAmXNcbiAgLy8gcHJvcGVydGllcyBkb3duIHRoZSBnaXZlbiBgcGF0aGAsIHNwZWNpZmllZCBhcyBhbiBhcnJheSBvZiBrZXlzIG9yIGluZGV4ZXMuXG4gIF8ucHJvcGVydHkgPSBmdW5jdGlvbihwYXRoKSB7XG4gICAgaWYgKCFfLmlzQXJyYXkocGF0aCkpIHtcbiAgICAgIHJldHVybiBzaGFsbG93UHJvcGVydHkocGF0aCk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBkZWVwR2V0KG9iaiwgcGF0aCk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBHZW5lcmF0ZXMgYSBmdW5jdGlvbiBmb3IgYSBnaXZlbiBvYmplY3QgdGhhdCByZXR1cm5zIGEgZ2l2ZW4gcHJvcGVydHkuXG4gIF8ucHJvcGVydHlPZiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7fTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgIHJldHVybiAhXy5pc0FycmF5KHBhdGgpID8gb2JqW3BhdGhdIDogZGVlcEdldChvYmosIHBhdGgpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIHByZWRpY2F0ZSBmb3IgY2hlY2tpbmcgd2hldGhlciBhbiBvYmplY3QgaGFzIGEgZ2l2ZW4gc2V0IG9mXG4gIC8vIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLm1hdGNoZXIgPSBfLm1hdGNoZXMgPSBmdW5jdGlvbihhdHRycykge1xuICAgIGF0dHJzID0gXy5leHRlbmRPd24oe30sIGF0dHJzKTtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gXy5pc01hdGNoKG9iaiwgYXR0cnMpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUnVuIGEgZnVuY3Rpb24gKipuKiogdGltZXMuXG4gIF8udGltZXMgPSBmdW5jdGlvbihuLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIHZhciBhY2N1bSA9IEFycmF5KE1hdGgubWF4KDAsIG4pKTtcbiAgICBpdGVyYXRlZSA9IG9wdGltaXplQ2IoaXRlcmF0ZWUsIGNvbnRleHQsIDEpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSBhY2N1bVtpXSA9IGl0ZXJhdGVlKGkpO1xuICAgIHJldHVybiBhY2N1bTtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiBhbmQgbWF4IChpbmNsdXNpdmUpLlxuICBfLnJhbmRvbSA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgaWYgKG1heCA9PSBudWxsKSB7XG4gICAgICBtYXggPSBtaW47XG4gICAgICBtaW4gPSAwO1xuICAgIH1cbiAgICByZXR1cm4gbWluICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKTtcbiAgfTtcblxuICAvLyBBIChwb3NzaWJseSBmYXN0ZXIpIHdheSB0byBnZXQgdGhlIGN1cnJlbnQgdGltZXN0YW1wIGFzIGFuIGludGVnZXIuXG4gIF8ubm93ID0gRGF0ZS5ub3cgfHwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9O1xuXG4gIC8vIExpc3Qgb2YgSFRNTCBlbnRpdGllcyBmb3IgZXNjYXBpbmcuXG4gIHZhciBlc2NhcGVNYXAgPSB7XG4gICAgJyYnOiAnJmFtcDsnLFxuICAgICc8JzogJyZsdDsnLFxuICAgICc+JzogJyZndDsnLFxuICAgICdcIic6ICcmcXVvdDsnLFxuICAgIFwiJ1wiOiAnJiN4Mjc7JyxcbiAgICAnYCc6ICcmI3g2MDsnXG4gIH07XG4gIHZhciB1bmVzY2FwZU1hcCA9IF8uaW52ZXJ0KGVzY2FwZU1hcCk7XG5cbiAgLy8gRnVuY3Rpb25zIGZvciBlc2NhcGluZyBhbmQgdW5lc2NhcGluZyBzdHJpbmdzIHRvL2Zyb20gSFRNTCBpbnRlcnBvbGF0aW9uLlxuICB2YXIgY3JlYXRlRXNjYXBlciA9IGZ1bmN0aW9uKG1hcCkge1xuICAgIHZhciBlc2NhcGVyID0gZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgIHJldHVybiBtYXBbbWF0Y2hdO1xuICAgIH07XG4gICAgLy8gUmVnZXhlcyBmb3IgaWRlbnRpZnlpbmcgYSBrZXkgdGhhdCBuZWVkcyB0byBiZSBlc2NhcGVkLlxuICAgIHZhciBzb3VyY2UgPSAnKD86JyArIF8ua2V5cyhtYXApLmpvaW4oJ3wnKSArICcpJztcbiAgICB2YXIgdGVzdFJlZ2V4cCA9IFJlZ0V4cChzb3VyY2UpO1xuICAgIHZhciByZXBsYWNlUmVnZXhwID0gUmVnRXhwKHNvdXJjZSwgJ2cnKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICBzdHJpbmcgPSBzdHJpbmcgPT0gbnVsbCA/ICcnIDogJycgKyBzdHJpbmc7XG4gICAgICByZXR1cm4gdGVzdFJlZ2V4cC50ZXN0KHN0cmluZykgPyBzdHJpbmcucmVwbGFjZShyZXBsYWNlUmVnZXhwLCBlc2NhcGVyKSA6IHN0cmluZztcbiAgICB9O1xuICB9O1xuICBfLmVzY2FwZSA9IGNyZWF0ZUVzY2FwZXIoZXNjYXBlTWFwKTtcbiAgXy51bmVzY2FwZSA9IGNyZWF0ZUVzY2FwZXIodW5lc2NhcGVNYXApO1xuXG4gIC8vIFRyYXZlcnNlcyB0aGUgY2hpbGRyZW4gb2YgYG9iamAgYWxvbmcgYHBhdGhgLiBJZiBhIGNoaWxkIGlzIGEgZnVuY3Rpb24sIGl0XG4gIC8vIGlzIGludm9rZWQgd2l0aCBpdHMgcGFyZW50IGFzIGNvbnRleHQuIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBmaW5hbFxuICAvLyBjaGlsZCwgb3IgYGZhbGxiYWNrYCBpZiBhbnkgY2hpbGQgaXMgdW5kZWZpbmVkLlxuICBfLnJlc3VsdCA9IGZ1bmN0aW9uKG9iaiwgcGF0aCwgZmFsbGJhY2spIHtcbiAgICBpZiAoIV8uaXNBcnJheShwYXRoKSkgcGF0aCA9IFtwYXRoXTtcbiAgICB2YXIgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG4gICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgIHJldHVybiBfLmlzRnVuY3Rpb24oZmFsbGJhY2spID8gZmFsbGJhY2suY2FsbChvYmopIDogZmFsbGJhY2s7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwcm9wID0gb2JqID09IG51bGwgPyB2b2lkIDAgOiBvYmpbcGF0aFtpXV07XG4gICAgICBpZiAocHJvcCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHByb3AgPSBmYWxsYmFjaztcbiAgICAgICAgaSA9IGxlbmd0aDsgLy8gRW5zdXJlIHdlIGRvbid0IGNvbnRpbnVlIGl0ZXJhdGluZy5cbiAgICAgIH1cbiAgICAgIG9iaiA9IF8uaXNGdW5jdGlvbihwcm9wKSA/IHByb3AuY2FsbChvYmopIDogcHJvcDtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBpbnRlZ2VyIGlkICh1bmlxdWUgd2l0aGluIHRoZSBlbnRpcmUgY2xpZW50IHNlc3Npb24pLlxuICAvLyBVc2VmdWwgZm9yIHRlbXBvcmFyeSBET00gaWRzLlxuICB2YXIgaWRDb3VudGVyID0gMDtcbiAgXy51bmlxdWVJZCA9IGZ1bmN0aW9uKHByZWZpeCkge1xuICAgIHZhciBpZCA9ICsraWRDb3VudGVyICsgJyc7XG4gICAgcmV0dXJuIHByZWZpeCA/IHByZWZpeCArIGlkIDogaWQ7XG4gIH07XG5cbiAgLy8gQnkgZGVmYXVsdCwgVW5kZXJzY29yZSB1c2VzIEVSQi1zdHlsZSB0ZW1wbGF0ZSBkZWxpbWl0ZXJzLCBjaGFuZ2UgdGhlXG4gIC8vIGZvbGxvd2luZyB0ZW1wbGF0ZSBzZXR0aW5ncyB0byB1c2UgYWx0ZXJuYXRpdmUgZGVsaW1pdGVycy5cbiAgXy50ZW1wbGF0ZVNldHRpbmdzID0ge1xuICAgIGV2YWx1YXRlOiAvPCUoW1xcc1xcU10rPyklPi9nLFxuICAgIGludGVycG9sYXRlOiAvPCU9KFtcXHNcXFNdKz8pJT4vZyxcbiAgICBlc2NhcGU6IC88JS0oW1xcc1xcU10rPyklPi9nXG4gIH07XG5cbiAgLy8gV2hlbiBjdXN0b21pemluZyBgdGVtcGxhdGVTZXR0aW5nc2AsIGlmIHlvdSBkb24ndCB3YW50IHRvIGRlZmluZSBhblxuICAvLyBpbnRlcnBvbGF0aW9uLCBldmFsdWF0aW9uIG9yIGVzY2FwaW5nIHJlZ2V4LCB3ZSBuZWVkIG9uZSB0aGF0IGlzXG4gIC8vIGd1YXJhbnRlZWQgbm90IHRvIG1hdGNoLlxuICB2YXIgbm9NYXRjaCA9IC8oLileLztcblxuICAvLyBDZXJ0YWluIGNoYXJhY3RlcnMgbmVlZCB0byBiZSBlc2NhcGVkIHNvIHRoYXQgdGhleSBjYW4gYmUgcHV0IGludG8gYVxuICAvLyBzdHJpbmcgbGl0ZXJhbC5cbiAgdmFyIGVzY2FwZXMgPSB7XG4gICAgXCInXCI6IFwiJ1wiLFxuICAgICdcXFxcJzogJ1xcXFwnLFxuICAgICdcXHInOiAncicsXG4gICAgJ1xcbic6ICduJyxcbiAgICAnXFx1MjAyOCc6ICd1MjAyOCcsXG4gICAgJ1xcdTIwMjknOiAndTIwMjknXG4gIH07XG5cbiAgdmFyIGVzY2FwZVJlZ0V4cCA9IC9cXFxcfCd8XFxyfFxcbnxcXHUyMDI4fFxcdTIwMjkvZztcblxuICB2YXIgZXNjYXBlQ2hhciA9IGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgcmV0dXJuICdcXFxcJyArIGVzY2FwZXNbbWF0Y2hdO1xuICB9O1xuXG4gIC8vIEphdmFTY3JpcHQgbWljcm8tdGVtcGxhdGluZywgc2ltaWxhciB0byBKb2huIFJlc2lnJ3MgaW1wbGVtZW50YXRpb24uXG4gIC8vIFVuZGVyc2NvcmUgdGVtcGxhdGluZyBoYW5kbGVzIGFyYml0cmFyeSBkZWxpbWl0ZXJzLCBwcmVzZXJ2ZXMgd2hpdGVzcGFjZSxcbiAgLy8gYW5kIGNvcnJlY3RseSBlc2NhcGVzIHF1b3RlcyB3aXRoaW4gaW50ZXJwb2xhdGVkIGNvZGUuXG4gIC8vIE5COiBgb2xkU2V0dGluZ3NgIG9ubHkgZXhpc3RzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgXy50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHRleHQsIHNldHRpbmdzLCBvbGRTZXR0aW5ncykge1xuICAgIGlmICghc2V0dGluZ3MgJiYgb2xkU2V0dGluZ3MpIHNldHRpbmdzID0gb2xkU2V0dGluZ3M7XG4gICAgc2V0dGluZ3MgPSBfLmRlZmF1bHRzKHt9LCBzZXR0aW5ncywgXy50ZW1wbGF0ZVNldHRpbmdzKTtcblxuICAgIC8vIENvbWJpbmUgZGVsaW1pdGVycyBpbnRvIG9uZSByZWd1bGFyIGV4cHJlc3Npb24gdmlhIGFsdGVybmF0aW9uLlxuICAgIHZhciBtYXRjaGVyID0gUmVnRXhwKFtcbiAgICAgIChzZXR0aW5ncy5lc2NhcGUgfHwgbm9NYXRjaCkuc291cmNlLFxuICAgICAgKHNldHRpbmdzLmludGVycG9sYXRlIHx8IG5vTWF0Y2gpLnNvdXJjZSxcbiAgICAgIChzZXR0aW5ncy5ldmFsdWF0ZSB8fCBub01hdGNoKS5zb3VyY2VcbiAgICBdLmpvaW4oJ3wnKSArICd8JCcsICdnJyk7XG5cbiAgICAvLyBDb21waWxlIHRoZSB0ZW1wbGF0ZSBzb3VyY2UsIGVzY2FwaW5nIHN0cmluZyBsaXRlcmFscyBhcHByb3ByaWF0ZWx5LlxuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHNvdXJjZSA9IFwiX19wKz0nXCI7XG4gICAgdGV4dC5yZXBsYWNlKG1hdGNoZXIsIGZ1bmN0aW9uKG1hdGNoLCBlc2NhcGUsIGludGVycG9sYXRlLCBldmFsdWF0ZSwgb2Zmc2V0KSB7XG4gICAgICBzb3VyY2UgKz0gdGV4dC5zbGljZShpbmRleCwgb2Zmc2V0KS5yZXBsYWNlKGVzY2FwZVJlZ0V4cCwgZXNjYXBlQ2hhcik7XG4gICAgICBpbmRleCA9IG9mZnNldCArIG1hdGNoLmxlbmd0aDtcblxuICAgICAgaWYgKGVzY2FwZSkge1xuICAgICAgICBzb3VyY2UgKz0gXCInK1xcbigoX190PShcIiArIGVzY2FwZSArIFwiKSk9PW51bGw/Jyc6Xy5lc2NhcGUoX190KSkrXFxuJ1wiO1xuICAgICAgfSBlbHNlIGlmIChpbnRlcnBvbGF0ZSkge1xuICAgICAgICBzb3VyY2UgKz0gXCInK1xcbigoX190PShcIiArIGludGVycG9sYXRlICsgXCIpKT09bnVsbD8nJzpfX3QpK1xcbidcIjtcbiAgICAgIH0gZWxzZSBpZiAoZXZhbHVhdGUpIHtcbiAgICAgICAgc291cmNlICs9IFwiJztcXG5cIiArIGV2YWx1YXRlICsgXCJcXG5fX3ArPSdcIjtcbiAgICAgIH1cblxuICAgICAgLy8gQWRvYmUgVk1zIG5lZWQgdGhlIG1hdGNoIHJldHVybmVkIHRvIHByb2R1Y2UgdGhlIGNvcnJlY3Qgb2Zmc2V0LlxuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuICAgIHNvdXJjZSArPSBcIic7XFxuXCI7XG5cbiAgICAvLyBJZiBhIHZhcmlhYmxlIGlzIG5vdCBzcGVjaWZpZWQsIHBsYWNlIGRhdGEgdmFsdWVzIGluIGxvY2FsIHNjb3BlLlxuICAgIGlmICghc2V0dGluZ3MudmFyaWFibGUpIHNvdXJjZSA9ICd3aXRoKG9ianx8e30pe1xcbicgKyBzb3VyY2UgKyAnfVxcbic7XG5cbiAgICBzb3VyY2UgPSBcInZhciBfX3QsX19wPScnLF9faj1BcnJheS5wcm90b3R5cGUuam9pbixcIiArXG4gICAgICBcInByaW50PWZ1bmN0aW9uKCl7X19wKz1fX2ouY2FsbChhcmd1bWVudHMsJycpO307XFxuXCIgK1xuICAgICAgc291cmNlICsgJ3JldHVybiBfX3A7XFxuJztcblxuICAgIHZhciByZW5kZXI7XG4gICAgdHJ5IHtcbiAgICAgIHJlbmRlciA9IG5ldyBGdW5jdGlvbihzZXR0aW5ncy52YXJpYWJsZSB8fCAnb2JqJywgJ18nLCBzb3VyY2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGUuc291cmNlID0gc291cmNlO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG5cbiAgICB2YXIgdGVtcGxhdGUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICByZXR1cm4gcmVuZGVyLmNhbGwodGhpcywgZGF0YSwgXyk7XG4gICAgfTtcblxuICAgIC8vIFByb3ZpZGUgdGhlIGNvbXBpbGVkIHNvdXJjZSBhcyBhIGNvbnZlbmllbmNlIGZvciBwcmVjb21waWxhdGlvbi5cbiAgICB2YXIgYXJndW1lbnQgPSBzZXR0aW5ncy52YXJpYWJsZSB8fCAnb2JqJztcbiAgICB0ZW1wbGF0ZS5zb3VyY2UgPSAnZnVuY3Rpb24oJyArIGFyZ3VtZW50ICsgJyl7XFxuJyArIHNvdXJjZSArICd9JztcblxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfTtcblxuICAvLyBBZGQgYSBcImNoYWluXCIgZnVuY3Rpb24uIFN0YXJ0IGNoYWluaW5nIGEgd3JhcHBlZCBVbmRlcnNjb3JlIG9iamVjdC5cbiAgXy5jaGFpbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBpbnN0YW5jZSA9IF8ob2JqKTtcbiAgICBpbnN0YW5jZS5fY2hhaW4gPSB0cnVlO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfTtcblxuICAvLyBPT1BcbiAgLy8gLS0tLS0tLS0tLS0tLS0tXG4gIC8vIElmIFVuZGVyc2NvcmUgaXMgY2FsbGVkIGFzIGEgZnVuY3Rpb24sIGl0IHJldHVybnMgYSB3cmFwcGVkIG9iamVjdCB0aGF0XG4gIC8vIGNhbiBiZSB1c2VkIE9PLXN0eWxlLiBUaGlzIHdyYXBwZXIgaG9sZHMgYWx0ZXJlZCB2ZXJzaW9ucyBvZiBhbGwgdGhlXG4gIC8vIHVuZGVyc2NvcmUgZnVuY3Rpb25zLiBXcmFwcGVkIG9iamVjdHMgbWF5IGJlIGNoYWluZWQuXG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNvbnRpbnVlIGNoYWluaW5nIGludGVybWVkaWF0ZSByZXN1bHRzLlxuICB2YXIgY2hhaW5SZXN1bHQgPSBmdW5jdGlvbihpbnN0YW5jZSwgb2JqKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLl9jaGFpbiA/IF8ob2JqKS5jaGFpbigpIDogb2JqO1xuICB9O1xuXG4gIC8vIEFkZCB5b3VyIG93biBjdXN0b20gZnVuY3Rpb25zIHRvIHRoZSBVbmRlcnNjb3JlIG9iamVjdC5cbiAgXy5taXhpbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIF8uZWFjaChfLmZ1bmN0aW9ucyhvYmopLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgICB2YXIgZnVuYyA9IF9bbmFtZV0gPSBvYmpbbmFtZV07XG4gICAgICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYXJncyA9IFt0aGlzLl93cmFwcGVkXTtcbiAgICAgICAgcHVzaC5hcHBseShhcmdzLCBhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gY2hhaW5SZXN1bHQodGhpcywgZnVuYy5hcHBseShfLCBhcmdzKSk7XG4gICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBfO1xuICB9O1xuXG4gIC8vIEFkZCBhbGwgb2YgdGhlIFVuZGVyc2NvcmUgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyIG9iamVjdC5cbiAgXy5taXhpbihfKTtcblxuICAvLyBBZGQgYWxsIG11dGF0b3IgQXJyYXkgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyLlxuICBfLmVhY2goWydwb3AnLCAncHVzaCcsICdyZXZlcnNlJywgJ3NoaWZ0JywgJ3NvcnQnLCAnc3BsaWNlJywgJ3Vuc2hpZnQnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBBcnJheVByb3RvW25hbWVdO1xuICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb2JqID0gdGhpcy5fd3JhcHBlZDtcbiAgICAgIG1ldGhvZC5hcHBseShvYmosIGFyZ3VtZW50cyk7XG4gICAgICBpZiAoKG5hbWUgPT09ICdzaGlmdCcgfHwgbmFtZSA9PT0gJ3NwbGljZScpICYmIG9iai5sZW5ndGggPT09IDApIGRlbGV0ZSBvYmpbMF07XG4gICAgICByZXR1cm4gY2hhaW5SZXN1bHQodGhpcywgb2JqKTtcbiAgICB9O1xuICB9KTtcblxuICAvLyBBZGQgYWxsIGFjY2Vzc29yIEFycmF5IGZ1bmN0aW9ucyB0byB0aGUgd3JhcHBlci5cbiAgXy5lYWNoKFsnY29uY2F0JywgJ2pvaW4nLCAnc2xpY2UnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBBcnJheVByb3RvW25hbWVdO1xuICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gY2hhaW5SZXN1bHQodGhpcywgbWV0aG9kLmFwcGx5KHRoaXMuX3dyYXBwZWQsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIEV4dHJhY3RzIHRoZSByZXN1bHQgZnJvbSBhIHdyYXBwZWQgYW5kIGNoYWluZWQgb2JqZWN0LlxuICBfLnByb3RvdHlwZS52YWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl93cmFwcGVkO1xuICB9O1xuXG4gIC8vIFByb3ZpZGUgdW53cmFwcGluZyBwcm94eSBmb3Igc29tZSBtZXRob2RzIHVzZWQgaW4gZW5naW5lIG9wZXJhdGlvbnNcbiAgLy8gc3VjaCBhcyBhcml0aG1ldGljIGFuZCBKU09OIHN0cmluZ2lmaWNhdGlvbi5cbiAgXy5wcm90b3R5cGUudmFsdWVPZiA9IF8ucHJvdG90eXBlLnRvSlNPTiA9IF8ucHJvdG90eXBlLnZhbHVlO1xuXG4gIF8ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFN0cmluZyh0aGlzLl93cmFwcGVkKTtcbiAgfTtcblxuICAvLyBBTUQgcmVnaXN0cmF0aW9uIGhhcHBlbnMgYXQgdGhlIGVuZCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFNRCBsb2FkZXJzXG4gIC8vIHRoYXQgbWF5IG5vdCBlbmZvcmNlIG5leHQtdHVybiBzZW1hbnRpY3Mgb24gbW9kdWxlcy4gRXZlbiB0aG91Z2ggZ2VuZXJhbFxuICAvLyBwcmFjdGljZSBmb3IgQU1EIHJlZ2lzdHJhdGlvbiBpcyB0byBiZSBhbm9ueW1vdXMsIHVuZGVyc2NvcmUgcmVnaXN0ZXJzXG4gIC8vIGFzIGEgbmFtZWQgbW9kdWxlIGJlY2F1c2UsIGxpa2UgalF1ZXJ5LCBpdCBpcyBhIGJhc2UgbGlicmFyeSB0aGF0IGlzXG4gIC8vIHBvcHVsYXIgZW5vdWdoIHRvIGJlIGJ1bmRsZWQgaW4gYSB0aGlyZCBwYXJ0eSBsaWIsIGJ1dCBub3QgYmUgcGFydCBvZlxuICAvLyBhbiBBTUQgbG9hZCByZXF1ZXN0LiBUaG9zZSBjYXNlcyBjb3VsZCBnZW5lcmF0ZSBhbiBlcnJvciB3aGVuIGFuXG4gIC8vIGFub255bW91cyBkZWZpbmUoKSBpcyBjYWxsZWQgb3V0c2lkZSBvZiBhIGxvYWRlciByZXF1ZXN0LlxuICBpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoJ3VuZGVyc2NvcmUnLCBbXSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gXztcbiAgICB9KTtcbiAgfVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS91bmRlcnNjb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vY29uc3QnO1xuaW1wb3J0IHsgQm9vdHN0cmFwQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL2Jvb3RzdHJhcCc7XG5pbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBDaGVja0JveCA9ICh7IGNsYXNzTmFtZSwgY2hlY2tlZCwgaW5kZXRlcm1pbmF0ZSB9KSA9PiAoXG4gIDxpbnB1dFxuICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgY2hlY2tlZD17IGNoZWNrZWQgfVxuICAgIGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG4gICAgcmVmPXsgKGlucHV0KSA9PiB7XG4gICAgICBpZiAoaW5wdXQpIGlucHV0LmluZGV0ZXJtaW5hdGUgPSBpbmRldGVybWluYXRlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgfSB9XG4gICAgb25DaGFuZ2U9eyAoKSA9PiB7fSB9XG4gIC8+XG4pO1xuXG5DaGVja0JveC5wcm9wVHlwZXMgPSB7XG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGluZGV0ZXJtaW5hdGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0aW9uSGVhZGVyQ2VsbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbW9kZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNoZWNrZWRTdGF0dXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25BbGxSb3dzU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoaWRlU2VsZWN0QWxsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzZWxlY3Rpb25IZWFkZXJSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaGVhZGVyQ29sdW1uU3R5bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5oYW5kbGVDaGVja0JveENsaWNrID0gdGhpcy5oYW5kbGVDaGVja0JveENsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogYXZvaWQgdXBkYXRpbmcgaWYgYnV0dG9uIGlzXG4gICAqIDEuIHJhZGlvXG4gICAqIDIuIHN0YXR1cyB3YXMgbm90IGNoYW5nZWQuXG4gICAqL1xuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgY29uc3QgeyBST1dfU0VMRUNUX1NJTkdMRSB9ID0gQ29uc3Q7XG4gICAgY29uc3QgeyBtb2RlLCBjaGVja2VkU3RhdHVzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKG1vZGUgPT09IFJPV19TRUxFQ1RfU0lOR0xFKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gbmV4dFByb3BzLmNoZWNrZWRTdGF0dXMgIT09IGNoZWNrZWRTdGF0dXM7XG4gIH1cblxuICBoYW5kbGVDaGVja0JveENsaWNrKGUpIHtcbiAgICBjb25zdCB7IG9uQWxsUm93c1NlbGVjdCwgY2hlY2tlZFN0YXR1cyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpc1VuU2VsZWN0ID1cbiAgICAgIGNoZWNrZWRTdGF0dXMgPT09IENvbnN0LkNIRUNLQk9YX1NUQVRVU19DSEVDS0VEIHx8XG4gICAgICBjaGVja2VkU3RhdHVzID09PSBDb25zdC5DSEVDS0JPWF9TVEFUVVNfSU5ERVRFUk1JTkFURTtcblxuICAgIG9uQWxsUm93c1NlbGVjdChlLCBpc1VuU2VsZWN0KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBDSEVDS0JPWF9TVEFUVVNfQ0hFQ0tFRCwgQ0hFQ0tCT1hfU1RBVFVTX0lOREVURVJNSU5BVEUsIFJPV19TRUxFQ1RfTVVMVElQTEVcbiAgICB9ID0gQ29uc3Q7XG5cbiAgICBjb25zdCB7XG4gICAgICBtb2RlLFxuICAgICAgY2hlY2tlZFN0YXR1cyxcbiAgICAgIHNlbGVjdGlvbkhlYWRlclJlbmRlcmVyLFxuICAgICAgaGlkZVNlbGVjdEFsbCxcbiAgICAgIGhlYWRlckNvbHVtblN0eWxlXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGhpZGVTZWxlY3RBbGwpIHtcbiAgICAgIHJldHVybiA8dGggZGF0YS1yb3ctc2VsZWN0aW9uIC8+O1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrZWQgPSBjaGVja2VkU3RhdHVzID09PSBDSEVDS0JPWF9TVEFUVVNfQ0hFQ0tFRDtcblxuICAgIGNvbnN0IGluZGV0ZXJtaW5hdGUgPSBjaGVja2VkU3RhdHVzID09PSBDSEVDS0JPWF9TVEFUVVNfSU5ERVRFUk1JTkFURTtcblxuICAgIGNvbnN0IGF0dHJzID0ge307XG4gICAgbGV0IGNvbnRlbnQ7XG4gICAgaWYgKHNlbGVjdGlvbkhlYWRlclJlbmRlcmVyIHx8IG1vZGUgPT09IFJPV19TRUxFQ1RfTVVMVElQTEUpIHtcbiAgICAgIGF0dHJzLm9uQ2xpY2sgPSB0aGlzLmhhbmRsZUNoZWNrQm94Q2xpY2s7XG4gICAgfVxuXG4gICAgYXR0cnMuc3R5bGUgPSBfLmlzRnVuY3Rpb24oaGVhZGVyQ29sdW1uU3R5bGUpID9cbiAgICAgIGhlYWRlckNvbHVtblN0eWxlKGNoZWNrZWRTdGF0dXMpIDpcbiAgICAgIGhlYWRlckNvbHVtblN0eWxlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb290c3RyYXBDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7XG4gICAgICAgICAgKHsgYm9vdHN0cmFwNCB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uSGVhZGVyUmVuZGVyZXIpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IHNlbGVjdGlvbkhlYWRlclJlbmRlcmVyKHtcbiAgICAgICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQsXG4gICAgICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gUk9XX1NFTEVDVF9NVUxUSVBMRSkge1xuICAgICAgICAgICAgICBjb250ZW50ID0gKFxuICAgICAgICAgICAgICAgIDxDaGVja0JveFxuICAgICAgICAgICAgICAgICAgeyAuLi50aGlzLnByb3BzIH1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyBjaGVja2VkIH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGJvb3RzdHJhcDQgPyAnc2VsZWN0aW9uLWlucHV0LTQnIDogJycgfVxuICAgICAgICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZT17IGluZGV0ZXJtaW5hdGUgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwic2VsZWN0aW9uLWNlbGwtaGVhZGVyXCIgZGF0YS1yb3ctc2VsZWN0aW9uIHsgLi4uYXR0cnMgfT57IGNvbnRlbnQgfTwvdGg+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgPC9Cb290c3RyYXBDb250ZXh0LkNvbnN1bWVyPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1zZWxlY3Rpb24vc2VsZWN0aW9uLWhlYWRlci1jZWxsLmpzIiwiLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuLyogZXNsaW50IG5vLW5lc3RlZC10ZXJuYXJ5OiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwYW5zaW9uSGVhZGVyQ2VsbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaXNBbnlFeHBhbmRzOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIG9uQWxsUm93RXhwYW5kOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGV4cGFuZEhlYWRlckNvbHVtblJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhhbmRsZUNoZWNrQm94Q2xpY2sgPSB0aGlzLmhhbmRsZUNoZWNrQm94Q2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoZWNrQm94Q2xpY2soZSkge1xuICAgIGNvbnN0IHsgaXNBbnlFeHBhbmRzLCBvbkFsbFJvd0V4cGFuZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIG9uQWxsUm93RXhwYW5kKGUsICFpc0FueUV4cGFuZHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNBbnlFeHBhbmRzLCBleHBhbmRIZWFkZXJDb2x1bW5SZW5kZXJlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2hlY2tCb3hDbGlja1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRoIGNsYXNzTmFtZT1cImV4cGFuZC1jZWxsLWhlYWRlclwiIGRhdGEtcm93LXNlbGVjdGlvbiB7IC4uLmF0dHJzIH0+XG4gICAgICAgIHtcbiAgICAgICAgICBleHBhbmRIZWFkZXJDb2x1bW5SZW5kZXJlciA/XG4gICAgICAgICAgICBleHBhbmRIZWFkZXJDb2x1bW5SZW5kZXJlcih7IGlzQW55RXhwYW5kcyB9KSA6XG4gICAgICAgICAgICAoaXNBbnlFeHBhbmRzID8gJygtKScgOiAnKCspJylcbiAgICAgICAgfVxuICAgICAgPC90aD5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1oZWFkZXItY2VsbC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VsZWN0aW9uQ29udGV4dCBmcm9tICcuLi9jb250ZXh0cy9zZWxlY3Rpb24tY29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudCA9PiAoKSA9PiAoXG4gIDxTZWxlY3Rpb25Db250ZXh0LkNvbnN1bWVyPlxuICAgIHsgc2VsZWN0Um93ID0+IDxDb21wb25lbnQgeyAuLi5zZWxlY3RSb3cgfSAvPiB9XG4gIDwvU2VsZWN0aW9uQ29udGV4dC5Db25zdW1lcj5cbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctc2VsZWN0aW9uL3NlbGVjdGlvbi1oZWFkZXItY2VsbC1jb25zdW1lci5qcyIsImltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGdldFJvd0J5Um93SWQgfSBmcm9tICcuL3Jvd3MnO1xuXG5leHBvcnQgY29uc3QgaXNBbnlFeHBhbmRzID0gKFxuICBkYXRhLFxuICBrZXlGaWVsZCxcbiAgZXhwYW5kZWQgPSBbXVxuKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJvd0tleSA9IF8uZ2V0KGRhdGFbaV0sIGtleUZpZWxkKTtcbiAgICBpZiAodHlwZW9mIGV4cGFuZGVkLmZpbmQoeCA9PiB4ID09PSByb3dLZXkpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBleHBhbmRhYmxlS2V5cyA9IChkYXRhLCBrZXlGaWVsZCwgc2tpcHMgPSBbXSkgPT4ge1xuICBpZiAoc2tpcHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGRhdGEubWFwKHJvdyA9PiBfLmdldChyb3csIGtleUZpZWxkKSk7XG4gIH1cbiAgcmV0dXJuIGRhdGFcbiAgICAuZmlsdGVyKHJvdyA9PiAhXy5jb250YWlucyhza2lwcywgXy5nZXQocm93LCBrZXlGaWVsZCkpKVxuICAgIC5tYXAocm93ID0+IF8uZ2V0KHJvdywga2V5RmllbGQpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRFeHBhbmRlZFJvd3MgPSAoZGF0YSwga2V5RmllbGQsIGV4cGFuZGVkKSA9PlxuICBleHBhbmRlZC5tYXAoayA9PiBnZXRSb3dCeVJvd0lkKGRhdGEsIGtleUZpZWxkLCBrKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9leHBhbmQuanMiLCJpbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBnZXRSb3dCeVJvd0lkIH0gZnJvbSAnLi9yb3dzJztcblxuZXhwb3J0IGNvbnN0IGVkaXRDZWxsID0gKGRhdGEsIGtleUZpZWxkLCByb3dJZCwgZGF0YUZpZWxkLCBuZXdWYWx1ZSkgPT4ge1xuICBjb25zdCByb3cgPSBnZXRSb3dCeVJvd0lkKGRhdGEsIGtleUZpZWxkLCByb3dJZCk7XG4gIGlmIChyb3cpIF8uc2V0KHJvdywgZGF0YUZpZWxkLCBuZXdWYWx1ZSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvbXV0YXRlLmpzIiwiLyogZXNsaW50IG5vLW5lc3RlZC10ZXJuYXJ5OiAwICovXG4vKiBlc2xpbnQgbm8tbG9uZWx5LWlmOiAwICovXG4vKiBlc2xpbnQgbm8tdW5kZXJzY29yZS1kYW5nbGU6IDAgKi9cbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9jb25zdCc7XG5cbmZ1bmN0aW9uIGNvbXBhcmF0b3IoYSwgYikge1xuICBsZXQgcmVzdWx0O1xuICBpZiAodHlwZW9mIGIgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gYi5sb2NhbGVDb21wYXJlKGEpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IGEgPiBiID8gLTEgOiAoKGEgPCBiKSA/IDEgOiAwKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgY29uc3Qgc29ydCA9IChkYXRhLCBzb3J0T3JkZXIsIHsgZGF0YUZpZWxkLCBzb3J0RnVuYywgc29ydFZhbHVlIH0pID0+IHtcbiAgY29uc3QgX2RhdGEgPSBbLi4uZGF0YV07XG4gIF9kYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGxldCB2YWx1ZUEgPSBfLmdldChhLCBkYXRhRmllbGQpO1xuICAgIGxldCB2YWx1ZUIgPSBfLmdldChiLCBkYXRhRmllbGQpO1xuICAgIGlmIChzb3J0VmFsdWUpIHtcbiAgICAgIHZhbHVlQSA9IHNvcnRWYWx1ZSh2YWx1ZUEsIGEpO1xuICAgICAgdmFsdWVCID0gc29ydFZhbHVlKHZhbHVlQiwgYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlQSA9IF8uaXNEZWZpbmVkKHZhbHVlQSkgPyB2YWx1ZUEgOiAnJztcbiAgICAgIHZhbHVlQiA9IF8uaXNEZWZpbmVkKHZhbHVlQikgPyB2YWx1ZUIgOiAnJztcbiAgICB9XG5cbiAgICBpZiAoc29ydEZ1bmMpIHtcbiAgICAgIHJlc3VsdCA9IHNvcnRGdW5jKHZhbHVlQSwgdmFsdWVCLCBzb3J0T3JkZXIsIGRhdGFGaWVsZCwgYSwgYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzb3J0T3JkZXIgPT09IENvbnN0LlNPUlRfREVTQykge1xuICAgICAgICByZXN1bHQgPSBjb21wYXJhdG9yKHZhbHVlQSwgdmFsdWVCKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGNvbXBhcmF0b3IodmFsdWVCLCB2YWx1ZUEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KTtcbiAgcmV0dXJuIF9kYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IG5leHRPcmRlciA9IChcbiAgY3VycmVudFNvcnRDb2x1bW4sXG4gIHsgc29ydE9yZGVyLCBzb3J0Q29sdW1uIH0sXG4gIGRlZmF1bHRPcmRlciA9IENvbnN0LlNPUlRfREVTQ1xuKSA9PiB7XG4gIGlmICghc29ydENvbHVtbiB8fCBjdXJyZW50U29ydENvbHVtbi5kYXRhRmllbGQgIT09IHNvcnRDb2x1bW4uZGF0YUZpZWxkKSByZXR1cm4gZGVmYXVsdE9yZGVyO1xuICByZXR1cm4gc29ydE9yZGVyID09PSBDb25zdC5TT1JUX0RFU0MgPyBDb25zdC5TT1JUX0FTQyA6IENvbnN0LlNPUlRfREVTQztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9zb3J0LmpzIiwiaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcblxuZXhwb3J0IGNvbnN0IHR5cGVDb252ZXJ0ID0gKHR5cGUsIHZhbHVlKSA9PiB7XG4gIGlmICh0eXBlID09PSBDb25zdC5UWVBFX1NUUklORykge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IENvbnN0LlRZUEVfTlVNQkVSKSB7XG4gICAgcmV0dXJuIE51bWJlcih2YWx1ZSk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gQ29uc3QuVFlQRV9CT09MRUFOKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZSA9PT0gJ3RydWUnO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IENvbnN0LlRZUEVfREFURSkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvdHlwZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXhwYW5zaW9uQ29udGV4dCBmcm9tICcuLi9jb250ZXh0cy9yb3ctZXhwYW5kLWNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQgPT4gKCkgPT4gKFxuICA8RXhwYW5zaW9uQ29udGV4dC5Db25zdW1lcj5cbiAgICB7IGV4cGFuZFJvdyA9PiA8Q29tcG9uZW50IHsgLi4uZXhwYW5kUm93IH0gLz4gfVxuICA8L0V4cGFuc2lvbkNvbnRleHQuQ29uc3VtZXI+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LWV4cGFuZC9leHBhbmQtaGVhZGVyLWNlbGwtY29uc3VtZXIuanMiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEZpbHRlcnNDZWxsIGZyb20gJy4vZmlsdGVycy1jZWxsJztcbmltcG9ydCBDb25zdCBmcm9tICcuL2NvbnN0JztcbmltcG9ydCBSb3dUZW1wbGF0ZSBmcm9tICcuL3Jvdy9yb3ctdGVtcGxhdGUnO1xuXG5jb25zdCBGaWx0ZXJzID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb2x1bW5zLFxuICAgIG9uRmlsdGVyLFxuICAgIGN1cnJGaWx0ZXJzLFxuICAgIGZpbHRlclBvc2l0aW9uLFxuICAgIG9uRXh0ZXJuYWxGaWx0ZXIsXG4gICAgY2xhc3NOYW1lLFxuICAgIHNlbGVjdFJvdyxcbiAgICBleHBhbmRSb3dcbiAgfSA9IHByb3BzO1xuXG4gIGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgZmlsdGVyQ29sdW1ucyA9IFtdO1xuICAgIGxldCBzaG93RmlsdGVyc1JvdyA9IGZhbHNlO1xuXG4gICAgY29sdW1ucy5mb3JFYWNoKChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGZpbHRlckNvbHVtbnMucHVzaCg8RmlsdGVyc0NlbGxcbiAgICAgICAgaW5kZXg9eyBpIH1cbiAgICAgICAga2V5PXsgY29sdW1uLmRhdGFGaWVsZCB9XG4gICAgICAgIGNvbHVtbj17IGNvbHVtbiB9XG4gICAgICAgIGN1cnJGaWx0ZXJzPXsgY3VyckZpbHRlcnMgfVxuICAgICAgICBvbkV4dGVybmFsRmlsdGVyPXsgb25FeHRlcm5hbEZpbHRlciB9XG4gICAgICAgIG9uRmlsdGVyPXsgb25GaWx0ZXIgfVxuICAgICAgLz4pO1xuXG4gICAgICBpZiAoY29sdW1uLmZpbHRlclJlbmRlcmVyIHx8IGNvbHVtbi5maWx0ZXIpIHtcbiAgICAgICAgaWYgKCFzaG93RmlsdGVyc1Jvdykge1xuICAgICAgICAgIHNob3dGaWx0ZXJzUm93ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJDb2x1bW5zO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dGJvZHlcbiAgICAgIGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG4gICAgICBzdHlsZT17IHtcbiAgICAgICAgZGlzcGxheTpcbiAgICAgICAgZmlsdGVyUG9zaXRpb24gPT09IENvbnN0LkZJTFRFUlNfUE9TSVRJT05fVE9QXG4gICAgICAgICAgPyAndGFibGUtaGVhZGVyLWdyb3VwJ1xuICAgICAgICAgIDogJ3RhYmxlLWZvb3Rlci1ncm91cCdcbiAgICAgIH0gfVxuICAgID5cbiAgICAgIDxSb3dUZW1wbGF0ZVxuICAgICAgICByZW5kZXJDb250ZW50PXsgcmVuZGVyQ29udGVudCB9XG4gICAgICAgIHNlbGVjdFJvdz17IHNlbGVjdFJvdyB9XG4gICAgICAgIGV4cGFuZFJvdz17IGV4cGFuZFJvdyB9XG4gICAgICAgIGNlbGxFbD1cInRkXCJcbiAgICAgIC8+XG4gICAgPC90Ym9keT5cbiAgKTtcbn07XG5cbkZpbHRlcnMucHJvcFR5cGVzID0ge1xuICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgb25GaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBmaWx0ZXJQb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBDb25zdC5GSUxURVJTX1BPU0lUSU9OX1RPUCxcbiAgICBDb25zdC5GSUxURVJTX1BPU0lUSU9OX0lOTElORSxcbiAgICBDb25zdC5GSUxURVJTX1BPU0lUSU9OX0JPVFRPTVxuICBdKSxcbiAgY3VyckZpbHRlcnM6IFByb3BUeXBlcy5vYmplY3QsXG4gIG9uRXh0ZXJuYWxGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdFJvdzogUHJvcFR5cGVzLm9iamVjdCxcbiAgZXhwYW5kUm93OiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5GaWx0ZXJzLmRlZmF1bHRQcm9wcyA9IHtcbiAgcG9zaXRpb246IENvbnN0LkZJTFRFUlNfUE9TSVRJT05fVE9QXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvZmlsdGVycy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IF8gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IEZpbHRlcnNDZWxsID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpbmRleCwgY29sdW1uLCBvbkV4dGVybmFsRmlsdGVyLFxuICAgIGN1cnJGaWx0ZXJzLCBvbkZpbHRlclxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgZmlsdGVyUmVuZGVyZXIsIGZpbHRlciB9ID0gY29sdW1uO1xuICBsZXQgZmlsdGVyRWxtO1xuICBjb25zdCBjZWxsQXR0cnMgPSB7fTtcbiAgY29uc3QgY2VsbFN0eWxlID0ge307XG4gIGNlbGxBdHRycy5zdHlsZSA9IGNlbGxTdHlsZTtcbiAgaWYgKGNvbHVtbi5oZWFkZXJBbGlnbikge1xuICAgIGNlbGxTdHlsZS50ZXh0QWxpZ24gPSBfLmlzRnVuY3Rpb24oY29sdW1uLmhlYWRlckFsaWduKVxuICAgICAgPyBjb2x1bW4uaGVhZGVyQWxpZ24oY29sdW1uLCBpbmRleClcbiAgICAgIDogY29sdW1uLmhlYWRlckFsaWduO1xuICB9XG4gIGlmIChjb2x1bW4uZmlsdGVyUmVuZGVyZXIpIHtcbiAgICBjb25zdCBvbkN1c3RvbUZpbHRlciA9IG9uRXh0ZXJuYWxGaWx0ZXIoY29sdW1uLCBmaWx0ZXIucHJvcHMudHlwZSk7XG4gICAgZmlsdGVyRWxtID0gZmlsdGVyUmVuZGVyZXIob25DdXN0b21GaWx0ZXIsIGNvbHVtbik7XG4gIH0gZWxzZSBpZiAoZmlsdGVyKSB7XG4gICAgZmlsdGVyRWxtID0gKFxuICAgICAgPGZpbHRlci5GaWx0ZXJcbiAgICAgICAgeyAuLi5maWx0ZXIucHJvcHMgfVxuICAgICAgICBmaWx0ZXJTdGF0ZT17IGN1cnJGaWx0ZXJzW2NvbHVtbi5kYXRhRmllbGRdIH1cbiAgICAgICAgb25GaWx0ZXI9eyBvbkZpbHRlciB9XG4gICAgICAgIGNvbHVtbj17IGNvbHVtbiB9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywgY2VsbEF0dHJzLCBmaWx0ZXJFbG0pO1xufTtcblxuRmlsdGVyc0NlbGwucHJvcFR5cGVzID0ge1xuICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBjb2x1bW46IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY3VyckZpbHRlcnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgb25GaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkV4dGVybmFsRmlsdGVyOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuRmlsdGVyc0NlbGwuZGVmYXVsdFByb3BzID0ge1xuICBvbkZpbHRlcjogKCkgPT4geyB9LFxuICBvbkV4dGVybmFsRmlsdGVyOiAoKSA9PiB7IH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcnNDZWxsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvZmlsdGVycy1jZWxsLmpzIiwiLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IENhcHRpb24gPSAocHJvcHMpID0+IHtcbiAgaWYgKCFwcm9wcy5jaGlsZHJlbikgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgY2FwdGlvbiA9IHByb3BzLmJvb3RzdHJhcDQgPyAoXG4gICAgPGNhcHRpb24gc3R5bGU9eyB7IGNhcHRpb25TaWRlOiAndG9wJyB9IH0+e3Byb3BzLmNoaWxkcmVufTwvY2FwdGlvbj5cbiAgKSA6IChcbiAgICA8Y2FwdGlvbj57cHJvcHMuY2hpbGRyZW59PC9jYXB0aW9uPlxuICApO1xuXG4gIHJldHVybiBjYXB0aW9uO1xufTtcblxuQ2FwdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgICBQcm9wVHlwZXMuc3RyaW5nXG4gIF0pLFxuICBib290c3RyYXA0OiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FwdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NhcHRpb24uanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IF8gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgU2ltcGxlUm93IGZyb20gJy4vcm93L3NpbXBsZS1yb3cnO1xuaW1wb3J0IFJvd0FnZ3JlZ2F0b3IgZnJvbSAnLi9yb3cvYWdncmVnYXRlLXJvdyc7XG5pbXBvcnQgUm93U2VjdGlvbiBmcm9tICcuL3Jvdy9yb3ctc2VjdGlvbic7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9jb25zdCc7XG5pbXBvcnQgd2l0aFJvd1NlbGVjdGlvbiBmcm9tICcuL3Jvdy1zZWxlY3Rpb24vcm93LWNvbnN1bWVyJztcbmltcG9ydCB3aXRoUm93RXhwYW5zaW9uIGZyb20gJy4vcm93LWV4cGFuZC9yb3ctY29uc3VtZXInO1xuXG5jbGFzcyBCb2R5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qge1xuICAgICAga2V5RmllbGQsXG4gICAgICBjZWxsRWRpdCxcbiAgICAgIHNlbGVjdFJvdyxcbiAgICAgIGV4cGFuZFJvd1xuICAgIH0gPSBwcm9wcztcblxuICAgIC8vIENvbnN0cnVjdCBFZGl0aW5nIENlbGwgQ29tcG9uZW50XG4gICAgaWYgKGNlbGxFZGl0LmNyZWF0ZUNvbnRleHQpIHtcbiAgICAgIHRoaXMuRWRpdGluZ0NlbGwgPSBjZWxsRWRpdC5jcmVhdGVFZGl0aW5nQ2VsbChfLCBjZWxsRWRpdC5vcHRpb25zLm9uU3RhcnRFZGl0KTtcbiAgICB9XG5cbiAgICAvLyBDb25zdHJ1Y3QgUm93IENvbXBvbmVudFxuICAgIGxldCBSb3dDb21wb25lbnQgPSBTaW1wbGVSb3c7XG4gICAgY29uc3Qgc2VsZWN0Um93RW5hYmxlZCA9IHNlbGVjdFJvdy5tb2RlICE9PSBDb25zdC5ST1dfU0VMRUNUX0RJU0FCTEVEO1xuICAgIGNvbnN0IGV4cGFuZFJvd0VuYWJsZWQgPSAhIWV4cGFuZFJvdy5yZW5kZXJlcjtcblxuICAgIGlmIChleHBhbmRSb3dFbmFibGVkKSB7XG4gICAgICBSb3dDb21wb25lbnQgPSB3aXRoUm93RXhwYW5zaW9uKFJvd0FnZ3JlZ2F0b3IpO1xuICAgIH1cblxuICAgIGlmIChzZWxlY3RSb3dFbmFibGVkKSB7XG4gICAgICBSb3dDb21wb25lbnQgPSB3aXRoUm93U2VsZWN0aW9uKGV4cGFuZFJvd0VuYWJsZWQgPyBSb3dDb21wb25lbnQgOiBSb3dBZ2dyZWdhdG9yKTtcbiAgICB9XG5cbiAgICBpZiAoY2VsbEVkaXQuY3JlYXRlQ29udGV4dCkge1xuICAgICAgUm93Q29tcG9uZW50ID0gY2VsbEVkaXQud2l0aFJvd0xldmVsQ2VsbEVkaXQoUm93Q29tcG9uZW50LCBzZWxlY3RSb3dFbmFibGVkLCBrZXlGaWVsZCwgXyk7XG4gICAgfVxuICAgIHRoaXMuUm93Q29tcG9uZW50ID0gUm93Q29tcG9uZW50O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbHVtbnMsXG4gICAgICBkYXRhLFxuICAgICAgdGFiSW5kZXhDZWxsLFxuICAgICAga2V5RmllbGQsXG4gICAgICBpc0VtcHR5LFxuICAgICAgbm9EYXRhSW5kaWNhdGlvbixcbiAgICAgIHZpc2libGVDb2x1bW5TaXplLFxuICAgICAgY2VsbEVkaXQsXG4gICAgICBzZWxlY3RSb3csXG4gICAgICByb3dTdHlsZSxcbiAgICAgIHJvd0NsYXNzZXMsXG4gICAgICByb3dFdmVudHMsXG4gICAgICBleHBhbmRSb3csXG4gICAgICBjbGFzc05hbWVcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBjb250ZW50O1xuXG4gICAgaWYgKGlzRW1wdHkpIHtcbiAgICAgIGNvbnN0IGluZGljYXRpb24gPSBfLmlzRnVuY3Rpb24obm9EYXRhSW5kaWNhdGlvbikgPyBub0RhdGFJbmRpY2F0aW9uKCkgOiBub0RhdGFJbmRpY2F0aW9uO1xuICAgICAgaWYgKCFpbmRpY2F0aW9uKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgY29udGVudCA9IDxSb3dTZWN0aW9uIGNvbnRlbnQ9eyBpbmRpY2F0aW9uIH0gY29sU3Bhbj17IHZpc2libGVDb2x1bW5TaXplIH0gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlbGVjdFJvd0VuYWJsZWQgPSBzZWxlY3RSb3cubW9kZSAhPT0gQ29uc3QuUk9XX1NFTEVDVF9ESVNBQkxFRDtcbiAgICAgIGNvbnN0IGV4cGFuZFJvd0VuYWJsZWQgPSAhIWV4cGFuZFJvdy5yZW5kZXJlcjtcblxuICAgICAgY29uc3QgYWRkaXRpb25hbFJvd1Byb3BzID0ge307XG5cbiAgICAgIGlmIChjZWxsRWRpdC5jcmVhdGVDb250ZXh0KSB7XG4gICAgICAgIGFkZGl0aW9uYWxSb3dQcm9wcy5FZGl0aW5nQ2VsbENvbXBvbmVudCA9IHRoaXMuRWRpdGluZ0NlbGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxlY3RSb3dFbmFibGVkIHx8IGV4cGFuZFJvd0VuYWJsZWQpIHtcbiAgICAgICAgYWRkaXRpb25hbFJvd1Byb3BzLmV4cGFuZFJvdyA9IGV4cGFuZFJvdztcbiAgICAgICAgYWRkaXRpb25hbFJvd1Byb3BzLnNlbGVjdFJvdyA9IHNlbGVjdFJvdztcbiAgICAgIH1cblxuICAgICAgY29udGVudCA9IGRhdGEubWFwKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IF8uZ2V0KHJvdywga2V5RmllbGQpO1xuICAgICAgICBjb25zdCBiYXNlUm93UHJvcHMgPSB7XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHJvdyxcbiAgICAgICAgICB0YWJJbmRleENlbGwsXG4gICAgICAgICAgY29sdW1ucyxcbiAgICAgICAgICBrZXlGaWVsZCxcbiAgICAgICAgICBjZWxsRWRpdCxcbiAgICAgICAgICB2YWx1ZToga2V5LFxuICAgICAgICAgIHJvd0luZGV4OiBpbmRleCxcbiAgICAgICAgICB2aXNpYmxlQ29sdW1uU2l6ZSxcbiAgICAgICAgICBhdHRyczogcm93RXZlbnRzIHx8IHt9LFxuICAgICAgICAgIC4uLmFkZGl0aW9uYWxSb3dQcm9wc1xuICAgICAgICB9O1xuXG4gICAgICAgIGJhc2VSb3dQcm9wcy5zdHlsZSA9IF8uaXNGdW5jdGlvbihyb3dTdHlsZSkgPyByb3dTdHlsZShyb3csIGluZGV4KSA6IHJvd1N0eWxlO1xuICAgICAgICBiYXNlUm93UHJvcHMuY2xhc3NOYW1lID0gKF8uaXNGdW5jdGlvbihyb3dDbGFzc2VzKSA/IHJvd0NsYXNzZXMocm93LCBpbmRleCkgOiByb3dDbGFzc2VzKTtcblxuICAgICAgICByZXR1cm4gPHRoaXMuUm93Q29tcG9uZW50IHsgLi4uYmFzZVJvd1Byb3BzIH0gLz47XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRib2R5IGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9PnsgY29udGVudCB9PC90Ym9keT5cbiAgICApO1xuICB9XG59XG5cbkJvZHkucHJvcFR5cGVzID0ge1xuICBrZXlGaWVsZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHNlbGVjdFJvdzogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9keTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2JvZHkuanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuLyogZXNsaW50IHJlYWN0L25vLWFycmF5LWluZGV4LWtleTogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBSb3dQdXJlQ29udGVudCBmcm9tICcuL3Jvdy1wdXJlLWNvbnRlbnQnO1xuaW1wb3J0IGV2ZW50RGVsZWdhdGVyIGZyb20gJy4vZXZlbnQtZGVsZWdhdGVyJztcbmltcG9ydCBzaG91bGRVcGRhdGVyIGZyb20gJy4vc2hvdWxkLXVwZGF0ZXInO1xuXG5jbGFzcyBTaW1wbGVSb3cgZXh0ZW5kcyBzaG91bGRVcGRhdGVyKGV2ZW50RGVsZWdhdGVyKENvbXBvbmVudCkpIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zaG91bGRVcGRhdGVSb3dDb250ZW50ID0gZmFsc2U7XG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgdGhpcy5zaG91bGRVcGRhdGVSb3dDb250ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5zaG91bGRVcGRhdGVSb3dDb250ZW50ID0gdGhpcy5zaG91bGRSb3dDb250ZW50VXBkYXRlKG5leHRQcm9wcyk7XG4gICAgaWYgKHRoaXMuc2hvdWxkVXBkYXRlUm93Q29udGVudCkgcmV0dXJuIHRydWU7XG5cbiAgICByZXR1cm4gdGhpcy5zaG91bGRVcGRhdGVkQnlTZWxmUHJvcHMobmV4dFByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzdHlsZSxcbiAgICAgIGF0dHJzLFxuICAgICAgdmlzaWJsZUNvbHVtblNpemUsXG4gICAgICB0YWJJbmRleENlbGwsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdHJBdHRycyA9IHRoaXMuZGVsZWdhdGUoYXR0cnMpO1xuICAgIGNvbnN0IHRhYkluZGV4U3RhcnQgPSAodGhpcy5wcm9wcy5yb3dJbmRleCAqIHZpc2libGVDb2x1bW5TaXplKSArIDE7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRyIHN0eWxlPXsgc3R5bGUgfSBjbGFzc05hbWU9eyBjbGFzc05hbWUgfSB7IC4uLnRyQXR0cnMgfT5cbiAgICAgICAgPFJvd1B1cmVDb250ZW50XG4gICAgICAgICAgc2hvdWxkVXBkYXRlPXsgdGhpcy5zaG91bGRVcGRhdGVSb3dDb250ZW50IH1cbiAgICAgICAgICB0YWJJbmRleFN0YXJ0PXsgdGFiSW5kZXhDZWxsID8gdGFiSW5kZXhTdGFydCA6IC0xIH1cbiAgICAgICAgICB7IC4uLnJlc3QgfVxuICAgICAgICAvPlxuICAgICAgPC90cj5cbiAgICApO1xuICB9XG59XG5cblNpbXBsZVJvdy5wcm9wVHlwZXMgPSB7XG4gIHJvdzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICByb3dJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYXR0cnM6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cblNpbXBsZVJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGVkaXRhYmxlOiB0cnVlLFxuICBzdHlsZToge30sXG4gIGNsYXNzTmFtZTogbnVsbCxcbiAgYXR0cnM6IHt9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVSb3c7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3cvc2ltcGxlLXJvdy5qcyIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IGV2ZW50RGVsZWdhdGVyIGZyb20gJy4vY2VsbC1ldmVudC1kZWxlZ2F0ZXInO1xuaW1wb3J0IF8gZnJvbSAnLi91dGlscyc7XG5cbmNsYXNzIENlbGwgZXh0ZW5kcyBldmVudERlbGVnYXRlcihDb21wb25lbnQpIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jcmVhdGVIYW5kbGVFZGl0aW5nQ2VsbCA9IHRoaXMuY3JlYXRlSGFuZGxlRWRpdGluZ0NlbGwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICBsZXQgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgaWYgKG5leHRQcm9wcy5jb2x1bW4uaXNEdW1teUZpZWxkKSB7XG4gICAgICBzaG91bGRVcGRhdGUgPSAhXy5pc0VxdWFsKHRoaXMucHJvcHMucm93LCBuZXh0UHJvcHMucm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvdWxkVXBkYXRlID1cbiAgICAgICAgXy5nZXQodGhpcy5wcm9wcy5yb3csIHRoaXMucHJvcHMuY29sdW1uLmRhdGFGaWVsZClcbiAgICAgICAgICAhPT0gXy5nZXQobmV4dFByb3BzLnJvdywgbmV4dFByb3BzLmNvbHVtbi5kYXRhRmllbGQpO1xuICAgIH1cblxuICAgIGlmIChzaG91bGRVcGRhdGUpIHJldHVybiB0cnVlO1xuXG4gICAgLy8gaWYgKG5leHRQcm9wcy5mb3JtYXR0ZXIpXG5cbiAgICBzaG91bGRVcGRhdGUgPVxuICAgICAgKG5leHRQcm9wcy5jb2x1bW4uZm9ybWF0dGVyID8gIV8uaXNFcXVhbCh0aGlzLnByb3BzLnJvdywgbmV4dFByb3BzLnJvdykgOiBmYWxzZSkgfHxcbiAgICAgIHRoaXMucHJvcHMuY29sdW1uLmhpZGRlbiAhPT0gbmV4dFByb3BzLmNvbHVtbi5oaWRkZW4gfHxcbiAgICAgIHRoaXMucHJvcHMuY29sdW1uLmlzRHVtbXlGaWVsZCAhPT0gbmV4dFByb3BzLmNvbHVtbi5pc0R1bW15RmllbGQgfHxcbiAgICAgIHRoaXMucHJvcHMucm93SW5kZXggIT09IG5leHRQcm9wcy5yb3dJbmRleCB8fFxuICAgICAgdGhpcy5wcm9wcy5jb2x1bW5JbmRleCAhPT0gbmV4dFByb3BzLmNvbHVtbkluZGV4IHx8XG4gICAgICB0aGlzLnByb3BzLmNsYXNzTmFtZSAhPT0gbmV4dFByb3BzLmNsYXNzTmFtZSB8fFxuICAgICAgdGhpcy5wcm9wcy50aXRsZSAhPT0gbmV4dFByb3BzLnRpdGxlIHx8XG4gICAgICB0aGlzLnByb3BzLmVkaXRhYmxlICE9PSBuZXh0UHJvcHMuZWRpdGFibGUgfHxcbiAgICAgIHRoaXMucHJvcHMuY2xpY2tUb0VkaXQgIT09IG5leHRQcm9wcy5jbGlja1RvRWRpdCB8fFxuICAgICAgdGhpcy5wcm9wcy5kYmNsaWNrVG9FZGl0ICE9PSBuZXh0UHJvcHMuZGJjbGlja1RvRWRpdCB8fFxuICAgICAgIV8uaXNFcXVhbCh0aGlzLnByb3BzLnN0eWxlLCBuZXh0UHJvcHMuc3R5bGUpIHx8XG4gICAgICAhXy5pc0VxdWFsKHRoaXMucHJvcHMuY29sdW1uLmZvcm1hdEV4dHJhRGF0YSwgbmV4dFByb3BzLmNvbHVtbi5mb3JtYXRFeHRyYURhdGEpIHx8XG4gICAgICAhXy5pc0VxdWFsKHRoaXMucHJvcHMuY29sdW1uLmV2ZW50cywgbmV4dFByb3BzLmNvbHVtbi5ldmVudHMpIHx8XG4gICAgICAhXy5pc0VxdWFsKHRoaXMucHJvcHMuY29sdW1uLmF0dHJzLCBuZXh0UHJvcHMuY29sdW1uLmF0dHJzKSB8fFxuICAgICAgdGhpcy5wcm9wcy50YWJJbmRleCAhPT0gbmV4dFByb3BzLnRhYkluZGV4O1xuICAgIHJldHVybiBzaG91bGRVcGRhdGU7XG4gIH1cblxuICBjcmVhdGVIYW5kbGVFZGl0aW5nQ2VsbCA9IG9yaWdpbkZ1bmMgPT4gKGUpID0+IHtcbiAgICBjb25zdCB7IG9uU3RhcnQsIHJvd0luZGV4LCBjb2x1bW5JbmRleCwgY2xpY2tUb0VkaXQsIGRiY2xpY2tUb0VkaXQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKChjbGlja1RvRWRpdCB8fCBkYmNsaWNrVG9FZGl0KSAmJiBfLmlzRnVuY3Rpb24ob3JpZ2luRnVuYykpIHtcbiAgICAgIG9yaWdpbkZ1bmMoZSk7XG4gICAgfVxuICAgIGlmIChvblN0YXJ0KSB7XG4gICAgICBvblN0YXJ0KHJvd0luZGV4LCBjb2x1bW5JbmRleCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHJvdyxcbiAgICAgIHJvd0luZGV4LFxuICAgICAgY29sdW1uLFxuICAgICAgY29sdW1uSW5kZXgsXG4gICAgICBvblN0YXJ0LFxuICAgICAgZWRpdGFibGUsXG4gICAgICBjbGlja1RvRWRpdCxcbiAgICAgIGRiY2xpY2tUb0VkaXQsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgZGF0YUZpZWxkLFxuICAgICAgZm9ybWF0dGVyLFxuICAgICAgZm9ybWF0RXh0cmFEYXRhXG4gICAgfSA9IGNvbHVtbjtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZGVsZWdhdGUoeyAuLi5yZXN0IH0pO1xuICAgIGxldCBjb250ZW50ID0gY29sdW1uLmlzRHVtbXlGaWVsZCA/IG51bGwgOiBfLmdldChyb3csIGRhdGFGaWVsZCk7XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBjb250ZW50ID0gY29sdW1uLmZvcm1hdHRlcihjb250ZW50LCByb3csIHJvd0luZGV4LCBmb3JtYXRFeHRyYURhdGEpO1xuICAgIH1cblxuICAgIGlmIChjbGlja1RvRWRpdCAmJiBlZGl0YWJsZSkge1xuICAgICAgYXR0cnMub25DbGljayA9IHRoaXMuY3JlYXRlSGFuZGxlRWRpdGluZ0NlbGwoYXR0cnMub25DbGljayk7XG4gICAgfSBlbHNlIGlmIChkYmNsaWNrVG9FZGl0ICYmIGVkaXRhYmxlKSB7XG4gICAgICBhdHRycy5vbkRvdWJsZUNsaWNrID0gdGhpcy5jcmVhdGVIYW5kbGVFZGl0aW5nQ2VsbChhdHRycy5vbkRvdWJsZUNsaWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRkIHsgLi4uYXR0cnMgfT5cbiAgICAgICAgeyB0eXBlb2YgY29udGVudCA9PT0gJ2Jvb2xlYW4nID8gYCR7Y29udGVudH1gIDogY29udGVudCB9XG4gICAgICA8L3RkPlxuICAgICk7XG4gIH1cbn1cblxuQ2VsbC5wcm9wVHlwZXMgPSB7XG4gIHJvdzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICByb3dJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBjb2x1bW46IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY29sdW1uSW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2VsbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NlbGwuanMiLCIvKiBlc2xpbnQgY2xhc3MtbWV0aG9kcy11c2UtdGhpczogMCAqL1xuLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbi8qIGVzbGludCBuby1wbHVzcGx1czogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgRXhwYW5kQ2VsbCBmcm9tICcuLi9yb3ctZXhwYW5kL2V4cGFuZC1jZWxsJztcbmltcG9ydCBTZWxlY3Rpb25DZWxsIGZyb20gJy4uL3Jvdy1zZWxlY3Rpb24vc2VsZWN0aW9uLWNlbGwnO1xuaW1wb3J0IHNob3VsZFVwZGF0ZXIgZnJvbSAnLi9zaG91bGQtdXBkYXRlcic7XG5pbXBvcnQgZXZlbnREZWxlZ2F0ZXIgZnJvbSAnLi9ldmVudC1kZWxlZ2F0ZXInO1xuaW1wb3J0IFJvd1B1cmVDb250ZW50IGZyb20gJy4vcm93LXB1cmUtY29udGVudCc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vY29uc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3dBZ2dyZWdhdG9yIGV4dGVuZHMgc2hvdWxkVXBkYXRlcihldmVudERlbGVnYXRlcihSZWFjdC5Db21wb25lbnQpKSB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYXR0cnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXR0cnM6IHt9LFxuICAgIHN0eWxlOiB7fVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jbGlja051bSA9IDA7XG4gICAgdGhpcy5zaG91bGRVcGRhdGVSb3dDb250ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5jcmVhdGVDbGlja0V2ZW50SGFuZGxlciA9IHRoaXMuY3JlYXRlQ2xpY2tFdmVudEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLnNlbGVjdGVkICE9PSBuZXh0UHJvcHMuc2VsZWN0ZWQgfHxcbiAgICAgIHRoaXMucHJvcHMuZXhwYW5kZWQgIT09IG5leHRQcm9wcy5leHBhbmRlZCB8fFxuICAgICAgdGhpcy5wcm9wcy5leHBhbmRhYmxlICE9PSBuZXh0UHJvcHMuZXhwYW5kYWJsZSB8fFxuICAgICAgdGhpcy5wcm9wcy5zZWxlY3RhYmxlICE9PSBuZXh0UHJvcHMuc2VsZWN0YWJsZSB8fFxuICAgICAgdGhpcy5wcm9wcy5zZWxlY3RSb3cuaGlkZVNlbGVjdENvbHVtbiAhPT0gbmV4dFByb3BzLnNlbGVjdFJvdy5oaWRlU2VsZWN0Q29sdW1uIHx8XG4gICAgICB0aGlzLnNob3VsZFVwZGF0ZWRCeVNlbGZQcm9wcyhuZXh0UHJvcHMpXG4gICAgKSB7XG4gICAgICB0aGlzLnNob3VsZFVwZGF0ZVJvd0NvbnRlbnQgPSB0aGlzLnNob3VsZFJvd0NvbnRlbnRVcGRhdGUobmV4dFByb3BzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB0aGlzLnNob3VsZFVwZGF0ZVJvd0NvbnRlbnQgPSB0aGlzLnNob3VsZFJvd0NvbnRlbnRVcGRhdGUobmV4dFByb3BzKTtcblxuICAgIHJldHVybiB0aGlzLnNob3VsZFVwZGF0ZVJvd0NvbnRlbnQ7XG4gIH1cblxuICBpc1JlbmRlckZ1bmN0aW9uQ29sdW1uSW5MZWZ0KFxuICAgIHBvc2l0aW9uID0gQ29uc3QuSU5ESUNBVE9SX1BPU0lUSU9OX0xFRlRcbiAgKSB7XG4gICAgcmV0dXJuIHBvc2l0aW9uID09PSBDb25zdC5JTkRJQ0FUT1JfUE9TSVRJT05fTEVGVDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICByb3csXG4gICAgICBjb2x1bW5zLFxuICAgICAga2V5RmllbGQsXG4gICAgICByb3dJbmRleCxcbiAgICAgIHN0eWxlLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYXR0cnMsXG4gICAgICBzZWxlY3RSb3csXG4gICAgICBleHBhbmRSb3csXG4gICAgICBleHBhbmRlZCxcbiAgICAgIGV4cGFuZGFibGUsXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIHNlbGVjdGFibGUsXG4gICAgICB2aXNpYmxlQ29sdW1uU2l6ZSxcbiAgICAgIHRhYkluZGV4Q2VsbCxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBrZXkgPSBfLmdldChyb3csIGtleUZpZWxkKTtcbiAgICBjb25zdCB7IGhpZGVTZWxlY3RDb2x1bW4sIHNlbGVjdENvbHVtblBvc2l0aW9uLCBjbGlja1RvU2VsZWN0IH0gPSBzZWxlY3RSb3c7XG4gICAgY29uc3QgeyBzaG93RXhwYW5kQ29sdW1uLCBleHBhbmRDb2x1bW5Qb3NpdGlvbiB9ID0gZXhwYW5kUm93O1xuXG4gICAgY29uc3QgbmV3QXR0cnMgPSB0aGlzLmRlbGVnYXRlKHsgLi4uYXR0cnMgfSk7XG4gICAgaWYgKGNsaWNrVG9TZWxlY3QgfHwgISFleHBhbmRSb3cucmVuZGVyZXIpIHtcbiAgICAgIG5ld0F0dHJzLm9uQ2xpY2sgPSB0aGlzLmNyZWF0ZUNsaWNrRXZlbnRIYW5kbGVyKG5ld0F0dHJzLm9uQ2xpY2spO1xuICAgIH1cblxuICAgIGxldCB0YWJJbmRleFN0YXJ0ID0gKHJvd0luZGV4ICogdmlzaWJsZUNvbHVtblNpemUpICsgMTtcblxuICAgIGNvbnN0IGNoaWxkcmVucyA9IFsoXG4gICAgICA8Um93UHVyZUNvbnRlbnRcbiAgICAgICAga2V5PVwicm93XCJcbiAgICAgICAgcm93PXsgcm93IH1cbiAgICAgICAgY29sdW1ucz17IGNvbHVtbnMgfVxuICAgICAgICBrZXlGaWVsZD17IGtleUZpZWxkIH1cbiAgICAgICAgcm93SW5kZXg9eyByb3dJbmRleCB9XG4gICAgICAgIHNob3VsZFVwZGF0ZT17IHRoaXMuc2hvdWxkVXBkYXRlUm93Q29udGVudCB9XG4gICAgICAgIHRhYkluZGV4U3RhcnQ9eyB0YWJJbmRleENlbGwgPyB0YWJJbmRleFN0YXJ0IDogLTEgfVxuICAgICAgICB7IC4uLnJlc3QgfVxuICAgICAgLz5cbiAgICApXTtcblxuICAgIGlmICghaGlkZVNlbGVjdENvbHVtbikge1xuICAgICAgY29uc3Qgc2VsZWN0Q2VsbCA9IChcbiAgICAgICAgPFNlbGVjdGlvbkNlbGxcbiAgICAgICAgICB7IC4uLnNlbGVjdFJvdyB9XG4gICAgICAgICAga2V5PVwic2VsZWN0aW9uLWNlbGxcIlxuICAgICAgICAgIHJvd0tleT17IGtleSB9XG4gICAgICAgICAgcm93SW5kZXg9eyByb3dJbmRleCB9XG4gICAgICAgICAgc2VsZWN0ZWQ9eyBzZWxlY3RlZCB9XG4gICAgICAgICAgZGlzYWJsZWQ9eyAhc2VsZWN0YWJsZSB9XG4gICAgICAgICAgdGFiSW5kZXg9eyB0YWJJbmRleENlbGwgPyB0YWJJbmRleFN0YXJ0KysgOiAtMSB9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgICAgaWYgKHRoaXMuaXNSZW5kZXJGdW5jdGlvbkNvbHVtbkluTGVmdChzZWxlY3RDb2x1bW5Qb3NpdGlvbikpIHtcbiAgICAgICAgY2hpbGRyZW5zLnVuc2hpZnQoc2VsZWN0Q2VsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZHJlbnMucHVzaChzZWxlY3RDZWxsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2hvd0V4cGFuZENvbHVtbikge1xuICAgICAgY29uc3QgZXhwYW5kQ2VsbCA9IChcbiAgICAgICAgPEV4cGFuZENlbGxcbiAgICAgICAgICB7IC4uLmV4cGFuZFJvdyB9XG4gICAgICAgICAga2V5PVwiZXhwYW5kLWNlbGxcIlxuICAgICAgICAgIHJvd0tleT17IGtleSB9XG4gICAgICAgICAgcm93SW5kZXg9eyByb3dJbmRleCB9XG4gICAgICAgICAgZXhwYW5kZWQ9eyBleHBhbmRlZCB9XG4gICAgICAgICAgZXhwYW5kYWJsZT17IGV4cGFuZGFibGUgfVxuICAgICAgICAgIHRhYkluZGV4PXsgdGFiSW5kZXhDZWxsID8gdGFiSW5kZXhTdGFydCsrIDogLTEgfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICAgIGlmICh0aGlzLmlzUmVuZGVyRnVuY3Rpb25Db2x1bW5JbkxlZnQoZXhwYW5kQ29sdW1uUG9zaXRpb24pKSB7XG4gICAgICAgIGNoaWxkcmVucy51bnNoaWZ0KGV4cGFuZENlbGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGRyZW5zLnB1c2goZXhwYW5kQ2VsbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0clxuICAgICAgICBzdHlsZT17IHN0eWxlIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cbiAgICAgICAgeyAuLi5uZXdBdHRycyB9XG4gICAgICA+XG4gICAgICAgIHsgY2hpbGRyZW5zIH1cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93L2FnZ3JlZ2F0ZS1yb3cuanMiLCIvKiBlc2xpbnRcbiAgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwXG4gIGpzeC1hMTF5L25vLW5vbmludGVyYWN0aXZlLWVsZW1lbnQtaW50ZXJhY3Rpb25zOiAwXG4qL1xuLyogZXNsaW50IG5vLW5lc3RlZC10ZXJuYXJ5OiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwYW5kQ2VsbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgcm93S2V5OiBQcm9wVHlwZXMuYW55LFxuICAgIGV4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGV4cGFuZGFibGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgb25Sb3dFeHBhbmQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZXhwYW5kQ29sdW1uUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJvd0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgY29uc3Qgc2hvdWxkVXBkYXRlID1cbiAgICAgIHRoaXMucHJvcHMucm93SW5kZXggIT09IG5leHRQcm9wcy5yb3dJbmRleCB8fFxuICAgICAgdGhpcy5wcm9wcy5leHBhbmRlZCAhPT0gbmV4dFByb3BzLmV4cGFuZGVkIHx8XG4gICAgICB0aGlzLnByb3BzLnJvd0tleSAhPT0gbmV4dFByb3BzLnJvd0tleSB8fFxuICAgICAgdGhpcy5wcm9wcy50YWJJbmRleCAhPT0gbmV4dFByb3BzLnRhYkluZGV4O1xuXG4gICAgcmV0dXJuIHNob3VsZFVwZGF0ZTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBjb25zdCB7IHJvd0tleSwgZXhwYW5kZWQsIG9uUm93RXhwYW5kLCByb3dJbmRleCB9ID0gdGhpcy5wcm9wcztcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIG9uUm93RXhwYW5kKHJvd0tleSwgIWV4cGFuZGVkLCByb3dJbmRleCwgZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBleHBhbmRlZCwgZXhwYW5kYWJsZSwgZXhwYW5kQ29sdW1uUmVuZGVyZXIsIHRhYkluZGV4LCByb3dLZXkgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYXR0cnMgPSB7fTtcbiAgICBpZiAodGFiSW5kZXggIT09IC0xKSBhdHRycy50YWJJbmRleCA9IHRhYkluZGV4O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJleHBhbmQtY2VsbFwiIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZUNsaWNrIH0geyAuLi5hdHRycyB9PlxuICAgICAgICB7XG4gICAgICAgICAgZXhwYW5kQ29sdW1uUmVuZGVyZXIgPyBleHBhbmRDb2x1bW5SZW5kZXJlcih7XG4gICAgICAgICAgICBleHBhbmRhYmxlLFxuICAgICAgICAgICAgZXhwYW5kZWQsXG4gICAgICAgICAgICByb3dLZXlcbiAgICAgICAgICB9KSA6IChleHBhbmRhYmxlID8gKGV4cGFuZGVkID8gJygtKScgOiAnKCspJykgOiAnJylcbiAgICAgICAgfVxuICAgICAgPC90ZD5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1jZWxsLmpzIiwiLyogZXNsaW50XG4gIHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMFxuICBqc3gtYTExeS9uby1ub25pbnRlcmFjdGl2ZS1lbGVtZW50LWludGVyYWN0aW9uczogMFxuKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEJvb3RzdHJhcENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9ib290c3RyYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3Rpb25DZWxsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBtb2RlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcm93S2V5OiBQcm9wVHlwZXMuYW55LFxuICAgIHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvblJvd1NlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHJvd0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGNsaWNrVG9TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuICAgIHNlbGVjdGlvblJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzZWxlY3RDb2x1bW5TdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIGNvbnN0IHNob3VsZFVwZGF0ZSA9XG4gICAgICB0aGlzLnByb3BzLnJvd0luZGV4ICE9PSBuZXh0UHJvcHMucm93SW5kZXggfHxcbiAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWQgIT09IG5leHRQcm9wcy5zZWxlY3RlZCB8fFxuICAgICAgdGhpcy5wcm9wcy5kaXNhYmxlZCAhPT0gbmV4dFByb3BzLmRpc2FibGVkIHx8XG4gICAgICB0aGlzLnByb3BzLnJvd0tleSAhPT0gbmV4dFByb3BzLnJvd0tleSB8fFxuICAgICAgdGhpcy5wcm9wcy50YWJJbmRleCAhPT0gbmV4dFByb3BzLnRhYkluZGV4IHx8XG4gICAgICB0aGlzLnByb3BzLnNlbGVjdENvbHVtblN0eWxlICE9PSBuZXh0UHJvcHMuc2VsZWN0Q29sdW1uU3R5bGU7XG5cbiAgICByZXR1cm4gc2hvdWxkVXBkYXRlO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soZSkge1xuICAgIGNvbnN0IHtcbiAgICAgIG1vZGU6IGlucHV0VHlwZSxcbiAgICAgIHJvd0tleSxcbiAgICAgIHNlbGVjdGVkLFxuICAgICAgb25Sb3dTZWxlY3QsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHJvd0luZGV4XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoZGlzYWJsZWQpIHJldHVybjtcblxuICAgIGNvbnN0IGNoZWNrZWQgPSBpbnB1dFR5cGUgPT09IENvbnN0LlJPV19TRUxFQ1RfU0lOR0xFXG4gICAgICA/IHRydWVcbiAgICAgIDogIXNlbGVjdGVkO1xuXG4gICAgb25Sb3dTZWxlY3Qocm93S2V5LCBjaGVja2VkLCByb3dJbmRleCwgZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcm93S2V5LFxuICAgICAgbW9kZTogaW5wdXRUeXBlLFxuICAgICAgc2VsZWN0ZWQsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHRhYkluZGV4LFxuICAgICAgcm93SW5kZXgsXG4gICAgICBzZWxlY3Rpb25SZW5kZXJlcixcbiAgICAgIHNlbGVjdENvbHVtblN0eWxlXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBhdHRycyA9IHt9O1xuICAgIGlmICh0YWJJbmRleCAhPT0gLTEpIGF0dHJzLnRhYkluZGV4ID0gdGFiSW5kZXg7XG5cbiAgICBhdHRycy5zdHlsZSA9IF8uaXNGdW5jdGlvbihzZWxlY3RDb2x1bW5TdHlsZSkgP1xuICAgICAgc2VsZWN0Q29sdW1uU3R5bGUoe1xuICAgICAgICBjaGVja2VkOiBzZWxlY3RlZCxcbiAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgIHJvd0luZGV4LFxuICAgICAgICByb3dLZXlcbiAgICAgIH0pIDpcbiAgICAgIHNlbGVjdENvbHVtblN0eWxlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb290c3RyYXBDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7XG4gICAgICAgICAgKHsgYm9vdHN0cmFwNCB9KSA9PiAoXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2VsZWN0aW9uLWNlbGxcIiBvbkNsaWNrPXsgdGhpcy5oYW5kbGVDbGljayB9IHsgLi4uYXR0cnMgfT5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvblJlbmRlcmVyID8gc2VsZWN0aW9uUmVuZGVyZXIoe1xuICAgICAgICAgICAgICAgICAgbW9kZTogaW5wdXRUeXBlLFxuICAgICAgICAgICAgICAgICAgY2hlY2tlZDogc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgIHJvd0luZGV4LFxuICAgICAgICAgICAgICAgICAgcm93S2V5XG4gICAgICAgICAgICAgICAgfSkgOiAoXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17IGlucHV0VHlwZSB9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyBzZWxlY3RlZCB9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXsgZGlzYWJsZWQgfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBib290c3RyYXA0ID8gJ3NlbGVjdGlvbi1pbnB1dC00JyA6ICcnIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoKSA9PiB7fSB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvQm9vdHN0cmFwQ29udGV4dC5Db25zdW1lcj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctc2VsZWN0aW9uL3NlbGVjdGlvbi1jZWxsLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IFJvd1NlY3Rpb24gPSAoeyBjb250ZW50LCBjb2xTcGFuIH0pID0+IChcbiAgPHRyPlxuICAgIDx0ZFxuICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICBjb2xTcGFuPXsgY29sU3BhbiB9XG4gICAgICBjbGFzc05hbWU9XCJyZWFjdC1icy10YWJsZS1uby1kYXRhXCJcbiAgICA+XG4gICAgICB7IGNvbnRlbnQgfVxuICAgIDwvdGQ+XG4gIDwvdHI+XG4pO1xuXG5Sb3dTZWN0aW9uLnByb3BUeXBlcyA9IHtcbiAgY29udGVudDogUHJvcFR5cGVzLmFueSxcbiAgY29sU3BhbjogUHJvcFR5cGVzLm51bWJlclxufTtcblxuUm93U2VjdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbnRlbnQ6IG51bGwsXG4gIGNvbFNwYW46IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvd1NlY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3cvcm93LXNlY3Rpb24uanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBTZWxlY3Rpb25Db250ZXh0IGZyb20gJy4uL2NvbnRleHRzL3NlbGVjdGlvbi1jb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgKENvbXBvbmVudCkgPT4ge1xuICBjb25zdCByZW5kZXJXaXRoU2VsZWN0aW9uID0gKHByb3BzLCBzZWxlY3RSb3cpID0+IHtcbiAgICBjb25zdCBrZXkgPSBwcm9wcy52YWx1ZTtcbiAgICBjb25zdCBzZWxlY3RlZCA9IF8uY29udGFpbnMoc2VsZWN0Um93LnNlbGVjdGVkLCBrZXkpO1xuICAgIGNvbnN0IHNlbGVjdGFibGUgPSAhc2VsZWN0Um93Lm5vblNlbGVjdGFibGUgfHwgIV8uY29udGFpbnMoc2VsZWN0Um93Lm5vblNlbGVjdGFibGUsIGtleSk7XG4gICAgY29uc3Qgbm90U2VsZWN0YWJsZSA9IF8uY29udGFpbnMoc2VsZWN0Um93Lm5vblNlbGVjdGFibGUsIGtleSk7XG5cbiAgICBsZXQge1xuICAgICAgc3R5bGUsXG4gICAgICBjbGFzc05hbWVcbiAgICB9ID0gcHJvcHM7XG5cbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkU3R5bGUgPSBfLmlzRnVuY3Rpb24oc2VsZWN0Um93LnN0eWxlKVxuICAgICAgICA/IHNlbGVjdFJvdy5zdHlsZShwcm9wcy5yb3csIHByb3BzLnJvd0luZGV4KVxuICAgICAgICA6IHNlbGVjdFJvdy5zdHlsZTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWRDbGFzc2VzID0gXy5pc0Z1bmN0aW9uKHNlbGVjdFJvdy5jbGFzc2VzKVxuICAgICAgICA/IHNlbGVjdFJvdy5jbGFzc2VzKHByb3BzLnJvdywgcHJvcHMucm93SW5kZXgpXG4gICAgICAgIDogc2VsZWN0Um93LmNsYXNzZXM7XG5cbiAgICAgIHN0eWxlID0ge1xuICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgLi4uc2VsZWN0ZWRTdHlsZVxuICAgICAgfTtcbiAgICAgIGNsYXNzTmFtZSA9IGNzKGNsYXNzTmFtZSwgc2VsZWN0ZWRDbGFzc2VzKSB8fCB1bmRlZmluZWQ7XG5cbiAgICAgIGlmIChzZWxlY3RSb3cuYmdDb2xvcikge1xuICAgICAgICBzdHlsZSA9IHN0eWxlIHx8IHt9O1xuICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBfLmlzRnVuY3Rpb24oc2VsZWN0Um93LmJnQ29sb3IpXG4gICAgICAgICAgPyBzZWxlY3RSb3cuYmdDb2xvcihwcm9wcy5yb3csIHByb3BzLnJvd0luZGV4KVxuICAgICAgICAgIDogc2VsZWN0Um93LmJnQ29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5vdFNlbGVjdGFibGUpIHtcbiAgICAgIGNvbnN0IG5vdFNlbGVjdGFibGVTdHlsZSA9IF8uaXNGdW5jdGlvbihzZWxlY3RSb3cubm9uU2VsZWN0YWJsZVN0eWxlKVxuICAgICAgICA/IHNlbGVjdFJvdy5ub25TZWxlY3RhYmxlU3R5bGUocHJvcHMucm93LCBwcm9wcy5yb3dJbmRleClcbiAgICAgICAgOiBzZWxlY3RSb3cubm9uU2VsZWN0YWJsZVN0eWxlO1xuXG4gICAgICBjb25zdCBub3RTZWxlY3RhYmxlQ2xhc3NlcyA9IF8uaXNGdW5jdGlvbihzZWxlY3RSb3cubm9uU2VsZWN0YWJsZUNsYXNzZXMpXG4gICAgICAgID8gc2VsZWN0Um93Lm5vblNlbGVjdGFibGVDbGFzc2VzKHByb3BzLnJvdywgcHJvcHMucm93SW5kZXgpXG4gICAgICAgIDogc2VsZWN0Um93Lm5vblNlbGVjdGFibGVDbGFzc2VzO1xuXG4gICAgICBzdHlsZSA9IHtcbiAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgIC4uLm5vdFNlbGVjdGFibGVTdHlsZVxuICAgICAgfTtcbiAgICAgIGNsYXNzTmFtZSA9IGNzKGNsYXNzTmFtZSwgbm90U2VsZWN0YWJsZUNsYXNzZXMpIHx8IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7IC4uLnByb3BzIH1cbiAgICAgICAgc3R5bGU9eyBzdHlsZSB9XG4gICAgICAgIGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG4gICAgICAgIHNlbGVjdFJvdz17IHNlbGVjdFJvdyB9XG4gICAgICAgIHNlbGVjdGVkPXsgc2VsZWN0ZWQgfVxuICAgICAgICBzZWxlY3RhYmxlPXsgc2VsZWN0YWJsZSB9XG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgZnVuY3Rpb24gd2l0aENvbnN1bWVyKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3Rpb25Db250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7IHNlbGVjdFJvdyA9PiByZW5kZXJXaXRoU2VsZWN0aW9uKHByb3BzLCBzZWxlY3RSb3cpIH1cbiAgICAgIDwvU2VsZWN0aW9uQ29udGV4dC5Db25zdW1lcj5cbiAgICApO1xuICB9XG5cbiAgd2l0aENvbnN1bWVyLmRpc3BsYXlOYW1lID0gJ1dpdGhTZWxlY3Rpb25Sb3dDb25zdW1lcic7XG4gIHJldHVybiB3aXRoQ29uc3VtZXI7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LXNlbGVjdGlvbi9yb3ctY29uc3VtZXIuanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBFeHBhbmRSb3cgZnJvbSAnLi9leHBhbmQtcm93JztcbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBFeHBhbnNpb25Db250ZXh0IGZyb20gJy4uL2NvbnRleHRzL3Jvdy1leHBhbmQtY29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IChDb21wb25lbnQpID0+IHtcbiAgY29uc3QgcmVuZGVyV2l0aEV4cGFuc2lvbiA9IChwcm9wcywgZXhwYW5kUm93KSA9PiB7XG4gICAgbGV0IHBhcmVudENsYXNzTmFtZSA9ICcnO1xuICAgIGxldCBjbGFzc05hbWUgPSAnJztcbiAgICBjb25zdCBrZXkgPSBwcm9wcy52YWx1ZTtcblxuICAgIGNvbnN0IGV4cGFuZGVkID0gXy5jb250YWlucyhleHBhbmRSb3cuZXhwYW5kZWQsIGtleSk7XG4gICAgY29uc3QgaXNDbG9zaW5nID0gXy5jb250YWlucyhleHBhbmRSb3cuaXNDbG9zaW5nLCBrZXkpO1xuICAgIGNvbnN0IGV4cGFuZGFibGUgPSAhZXhwYW5kUm93Lm5vbkV4cGFuZGFibGUgfHwgIV8uY29udGFpbnMoZXhwYW5kUm93Lm5vbkV4cGFuZGFibGUsIGtleSk7XG4gICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICBwYXJlbnRDbGFzc05hbWUgPSBfLmlzRnVuY3Rpb24oZXhwYW5kUm93LnBhcmVudENsYXNzTmFtZSkgP1xuICAgICAgICBleHBhbmRSb3cucGFyZW50Q2xhc3NOYW1lKGV4cGFuZGVkLCBwcm9wcy5yb3csIHByb3BzLnJvd0luZGV4KSA6XG4gICAgICAgIChleHBhbmRSb3cucGFyZW50Q2xhc3NOYW1lIHx8ICcnKTtcblxuICAgICAgY2xhc3NOYW1lID0gXy5pc0Z1bmN0aW9uKGV4cGFuZFJvdy5jbGFzc05hbWUpID9cbiAgICAgICAgZXhwYW5kUm93LmNsYXNzTmFtZShleHBhbmRlZCwgcHJvcHMucm93LCBwcm9wcy5yb3dJbmRleCkgOlxuICAgICAgICAoZXhwYW5kUm93LmNsYXNzTmFtZSB8fCAnJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgeyAuLi5wcm9wcyB9XG4gICAgICAgIGtleT17IGtleSB9XG4gICAgICAgIGV4cGFuZGVkPXsgZXhwYW5kZWQgfVxuICAgICAgICBleHBhbmRhYmxlPXsgZXhwYW5kYWJsZSB9XG4gICAgICAgIGV4cGFuZFJvdz17IHsgLi4uZXhwYW5kUm93IH0gfVxuICAgICAgICBjbGFzc05hbWU9eyBjcyhwcm9wcy5jbGFzc05hbWUsIHBhcmVudENsYXNzTmFtZSkgfVxuICAgICAgLz4sXG4gICAgICBleHBhbmRlZCB8fCBpc0Nsb3NpbmcgPyA8RXhwYW5kUm93XG4gICAgICAgIGtleT17IGAke2tleX0tZXhwYW5kaW5nYCB9XG4gICAgICAgIGNvbFNwYW49eyBwcm9wcy52aXNpYmxlQ29sdW1uU2l6ZSB9XG4gICAgICAgIGV4cGFuZGVkPXsgZXhwYW5kZWQgfVxuICAgICAgICBvbkNsb3NlZD17ICgpID0+IGV4cGFuZFJvdy5vbkNsb3NlZChrZXkpIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cbiAgICAgID5cbiAgICAgICAgeyBleHBhbmRSb3cucmVuZGVyZXIocHJvcHMucm93LCBwcm9wcy5yb3dJbmRleCkgfVxuICAgICAgPC9FeHBhbmRSb3c+IDogbnVsbFxuICAgIF07XG4gIH07XG4gIHJldHVybiBwcm9wcyA9PiAoXG4gICAgPEV4cGFuc2lvbkNvbnRleHQuQ29uc3VtZXI+XG4gICAgICB7IGV4cGFuZFJvdyA9PiByZW5kZXJXaXRoRXhwYW5zaW9uKHByb3BzLCBleHBhbmRSb3cpIH1cbiAgICA8L0V4cGFuc2lvbkNvbnRleHQuQ29uc3VtZXI+XG4gICk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LWV4cGFuZC9yb3ctY29uc3VtZXIuanMiLCJpbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcblxuY29uc3QgRXhwYW5kUm93ID0gKHsgY2hpbGRyZW4sIGV4cGFuZGVkLCBvbkNsb3NlZCwgY2xhc3NOYW1lLCAuLi5yZXN0IH0pID0+IChcbiAgPHRyPlxuICAgIDx0ZCBjbGFzc05hbWU9eyBjcygncmVzZXQtZXhwYW5zaW9uLXN0eWxlJywgY2xhc3NOYW1lKSB9IHsgLi4ucmVzdCB9PlxuICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgYXBwZWFyXG4gICAgICAgIGluPXsgZXhwYW5kZWQgfVxuICAgICAgICB0aW1lb3V0PXsgNDAwIH1cbiAgICAgICAgY2xhc3NOYW1lcz1cInJvdy1leHBhbmQtc2xpZGVcIlxuICAgICAgICBvbkV4aXRlZD17IG9uQ2xvc2VkIH1cbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1leHBhbnNpb24tc3R5bGVcIj5cbiAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICA8L3RkPlxuICA8L3RyPlxuKTtcblxuRXhwYW5kUm93LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBleHBhbmRlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uQ2xvc2VkOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5FeHBhbmRSb3cuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbiAgZXhwYW5kZWQ6IGZhbHNlLFxuICBvbkNsb3NlZDogbnVsbCxcbiAgY2xhc3NOYW1lOiAnJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kUm93O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LWV4cGFuZC9leHBhbmQtcm93LmpzIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBDU1NUcmFuc2l0aW9uIH0gZnJvbSAnLi9DU1NUcmFuc2l0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVwbGFjZVRyYW5zaXRpb24gfSBmcm9tICcuL1JlcGxhY2VUcmFuc2l0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3dpdGNoVHJhbnNpdGlvbiB9IGZyb20gJy4vU3dpdGNoVHJhbnNpdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRyYW5zaXRpb25Hcm91cCB9IGZyb20gJy4vVHJhbnNpdGlvbkdyb3VwJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHJhbnNpdGlvbiB9IGZyb20gJy4vVHJhbnNpdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgYWRkT25lQ2xhc3MgZnJvbSAnZG9tLWhlbHBlcnMvYWRkQ2xhc3MnO1xuaW1wb3J0IHJlbW92ZU9uZUNsYXNzIGZyb20gJ2RvbS1oZWxwZXJzL3JlbW92ZUNsYXNzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICcuL1RyYW5zaXRpb24nO1xuaW1wb3J0IHsgY2xhc3NOYW1lc1NoYXBlIH0gZnJvbSAnLi91dGlscy9Qcm9wVHlwZXMnO1xuXG52YXIgX2FkZENsYXNzID0gZnVuY3Rpb24gYWRkQ2xhc3Mobm9kZSwgY2xhc3Nlcykge1xuICByZXR1cm4gbm9kZSAmJiBjbGFzc2VzICYmIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGFkZE9uZUNsYXNzKG5vZGUsIGMpO1xuICB9KTtcbn07XG5cbnZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKG5vZGUsIGNsYXNzZXMpIHtcbiAgcmV0dXJuIG5vZGUgJiYgY2xhc3NlcyAmJiBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiByZW1vdmVPbmVDbGFzcyhub2RlLCBjKTtcbiAgfSk7XG59O1xuLyoqXG4gKiBBIHRyYW5zaXRpb24gY29tcG9uZW50IGluc3BpcmVkIGJ5IHRoZSBleGNlbGxlbnRcbiAqIFtuZy1hbmltYXRlXShodHRwczovL2RvY3MuYW5ndWxhcmpzLm9yZy9hcGkvbmdBbmltYXRlKSBsaWJyYXJ5LCB5b3Ugc2hvdWxkXG4gKiB1c2UgaXQgaWYgeW91J3JlIHVzaW5nIENTUyB0cmFuc2l0aW9ucyBvciBhbmltYXRpb25zLiBJdCdzIGJ1aWx0IHVwb24gdGhlXG4gKiBbYFRyYW5zaXRpb25gXShodHRwczovL3JlYWN0Y29tbXVuaXR5Lm9yZy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3RyYW5zaXRpb24pXG4gKiBjb21wb25lbnQsIHNvIGl0IGluaGVyaXRzIGFsbCBvZiBpdHMgcHJvcHMuXG4gKlxuICogYENTU1RyYW5zaXRpb25gIGFwcGxpZXMgYSBwYWlyIG9mIGNsYXNzIG5hbWVzIGR1cmluZyB0aGUgYGFwcGVhcmAsIGBlbnRlcmAsXG4gKiBhbmQgYGV4aXRgIHN0YXRlcyBvZiB0aGUgdHJhbnNpdGlvbi4gVGhlIGZpcnN0IGNsYXNzIGlzIGFwcGxpZWQgYW5kIHRoZW4gYVxuICogc2Vjb25kIGAqLWFjdGl2ZWAgY2xhc3MgaW4gb3JkZXIgdG8gYWN0aXZhdGUgdGhlIENTUyB0cmFuc2l0aW9uLiBBZnRlciB0aGVcbiAqIHRyYW5zaXRpb24sIG1hdGNoaW5nIGAqLWRvbmVgIGNsYXNzIG5hbWVzIGFyZSBhcHBsaWVkIHRvIHBlcnNpc3QgdGhlXG4gKiB0cmFuc2l0aW9uIHN0YXRlLlxuICpcbiAqIGBgYGpzeFxuICogZnVuY3Rpb24gQXBwKCkge1xuICogICBjb25zdCBbaW5Qcm9wLCBzZXRJblByb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xuICogICByZXR1cm4gKFxuICogICAgIDxkaXY+XG4gKiAgICAgICA8Q1NTVHJhbnNpdGlvbiBpbj17aW5Qcm9wfSB0aW1lb3V0PXsyMDB9IGNsYXNzTmFtZXM9XCJteS1ub2RlXCI+XG4gKiAgICAgICAgIDxkaXY+XG4gKiAgICAgICAgICAge1wiSSdsbCByZWNlaXZlIG15LW5vZGUtKiBjbGFzc2VzXCJ9XG4gKiAgICAgICAgIDwvZGl2PlxuICogICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICogICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0SW5Qcm9wKHRydWUpfT5cbiAqICAgICAgICAgQ2xpY2sgdG8gRW50ZXJcbiAqICAgICAgIDwvYnV0dG9uPlxuICogICAgIDwvZGl2PlxuICogICApO1xuICogfVxuICogYGBgXG4gKlxuICogV2hlbiB0aGUgYGluYCBwcm9wIGlzIHNldCB0byBgdHJ1ZWAsIHRoZSBjaGlsZCBjb21wb25lbnQgd2lsbCBmaXJzdCByZWNlaXZlXG4gKiB0aGUgY2xhc3MgYGV4YW1wbGUtZW50ZXJgLCB0aGVuIHRoZSBgZXhhbXBsZS1lbnRlci1hY3RpdmVgIHdpbGwgYmUgYWRkZWQgaW5cbiAqIHRoZSBuZXh0IHRpY2suIGBDU1NUcmFuc2l0aW9uYCBbZm9yY2VzIGFcbiAqIHJlZmxvd10oaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ibG9iLzUwMDczMDNlNzI5YTc0YmU2NmEyMWMzZTIyMDVlNDkxNjgyMTUyNGIvc3JjL0NTU1RyYW5zaXRpb24uanMjTDIwOC1MMjE1KVxuICogYmV0d2VlbiBiZWZvcmUgYWRkaW5nIHRoZSBgZXhhbXBsZS1lbnRlci1hY3RpdmVgLiBUaGlzIGlzIGFuIGltcG9ydGFudCB0cmlja1xuICogYmVjYXVzZSBpdCBhbGxvd3MgdXMgdG8gdHJhbnNpdGlvbiBiZXR3ZWVuIGBleGFtcGxlLWVudGVyYCBhbmRcbiAqIGBleGFtcGxlLWVudGVyLWFjdGl2ZWAgZXZlbiB0aG91Z2ggdGhleSB3ZXJlIGFkZGVkIGltbWVkaWF0ZWx5IG9uZSBhZnRlclxuICogYW5vdGhlci4gTW9zdCBub3RhYmx5LCB0aGlzIGlzIHdoYXQgbWFrZXMgaXQgcG9zc2libGUgZm9yIHVzIHRvIGFuaW1hdGVcbiAqIF9hcHBlYXJhbmNlXy5cbiAqXG4gKiBgYGBjc3NcbiAqIC5teS1ub2RlLWVudGVyIHtcbiAqICAgb3BhY2l0eTogMDtcbiAqIH1cbiAqIC5teS1ub2RlLWVudGVyLWFjdGl2ZSB7XG4gKiAgIG9wYWNpdHk6IDE7XG4gKiAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XG4gKiB9XG4gKiAubXktbm9kZS1leGl0IHtcbiAqICAgb3BhY2l0eTogMTtcbiAqIH1cbiAqIC5teS1ub2RlLWV4aXQtYWN0aXZlIHtcbiAqICAgb3BhY2l0eTogMDtcbiAqICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcbiAqIH1cbiAqIGBgYFxuICpcbiAqIGAqLWFjdGl2ZWAgY2xhc3NlcyByZXByZXNlbnQgd2hpY2ggc3R5bGVzIHlvdSB3YW50IHRvIGFuaW1hdGUgKip0byoqLCBzbyBpdCdzXG4gKiBpbXBvcnRhbnQgdG8gYWRkIGB0cmFuc2l0aW9uYCBkZWNsYXJhdGlvbiBvbmx5IHRvIHRoZW0sIG90aGVyd2lzZSB0cmFuc2l0aW9uc1xuICogbWlnaHQgbm90IGJlaGF2ZSBhcyBpbnRlbmRlZCEgVGhpcyBtaWdodCBub3QgYmUgb2J2aW91cyB3aGVuIHRoZSB0cmFuc2l0aW9uc1xuICogYXJlIHN5bW1ldHJpY2FsLCBpLmUuIHdoZW4gYCotZW50ZXItYWN0aXZlYCBpcyB0aGUgc2FtZSBhcyBgKi1leGl0YCwgbGlrZSBpblxuICogdGhlIGV4YW1wbGUgYWJvdmUgKG1pbnVzIGB0cmFuc2l0aW9uYCksIGJ1dCBpdCBiZWNvbWVzIGFwcGFyZW50IGluIG1vcmVcbiAqIGNvbXBsZXggdHJhbnNpdGlvbnMuXG4gKlxuICogKipOb3RlKio6IElmIHlvdSdyZSB1c2luZyB0aGVcbiAqIFtgYXBwZWFyYF0oaHR0cDovL3JlYWN0Y29tbXVuaXR5Lm9yZy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3RyYW5zaXRpb24jVHJhbnNpdGlvbi1wcm9wLWFwcGVhcilcbiAqIHByb3AsIG1ha2Ugc3VyZSB0byBkZWZpbmUgc3R5bGVzIGZvciBgLmFwcGVhci0qYCBjbGFzc2VzIGFzIHdlbGwuXG4gKi9cblxuXG52YXIgQ1NTVHJhbnNpdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShDU1NUcmFuc2l0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDU1NUcmFuc2l0aW9uKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgIF90aGlzLmFwcGxpZWRDbGFzc2VzID0ge1xuICAgICAgYXBwZWFyOiB7fSxcbiAgICAgIGVudGVyOiB7fSxcbiAgICAgIGV4aXQ6IHt9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRW50ZXIgPSBmdW5jdGlvbiAobWF5YmVOb2RlLCBtYXliZUFwcGVhcmluZykge1xuICAgICAgdmFyIF90aGlzJHJlc29sdmVBcmd1bWVudCA9IF90aGlzLnJlc29sdmVBcmd1bWVudHMobWF5YmVOb2RlLCBtYXliZUFwcGVhcmluZyksXG4gICAgICAgICAgbm9kZSA9IF90aGlzJHJlc29sdmVBcmd1bWVudFswXSxcbiAgICAgICAgICBhcHBlYXJpbmcgPSBfdGhpcyRyZXNvbHZlQXJndW1lbnRbMV07XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2V4aXQnKTtcblxuICAgICAgX3RoaXMuYWRkQ2xhc3Mobm9kZSwgYXBwZWFyaW5nID8gJ2FwcGVhcicgOiAnZW50ZXInLCAnYmFzZScpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FbnRlcikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkVudGVyKG1heWJlTm9kZSwgbWF5YmVBcHBlYXJpbmcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkVudGVyaW5nID0gZnVuY3Rpb24gKG1heWJlTm9kZSwgbWF5YmVBcHBlYXJpbmcpIHtcbiAgICAgIHZhciBfdGhpcyRyZXNvbHZlQXJndW1lbnQyID0gX3RoaXMucmVzb2x2ZUFyZ3VtZW50cyhtYXliZU5vZGUsIG1heWJlQXBwZWFyaW5nKSxcbiAgICAgICAgICBub2RlID0gX3RoaXMkcmVzb2x2ZUFyZ3VtZW50MlswXSxcbiAgICAgICAgICBhcHBlYXJpbmcgPSBfdGhpcyRyZXNvbHZlQXJndW1lbnQyWzFdO1xuXG4gICAgICB2YXIgdHlwZSA9IGFwcGVhcmluZyA/ICdhcHBlYXInIDogJ2VudGVyJztcblxuICAgICAgX3RoaXMuYWRkQ2xhc3Mobm9kZSwgdHlwZSwgJ2FjdGl2ZScpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FbnRlcmluZykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkVudGVyaW5nKG1heWJlTm9kZSwgbWF5YmVBcHBlYXJpbmcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkVudGVyZWQgPSBmdW5jdGlvbiAobWF5YmVOb2RlLCBtYXliZUFwcGVhcmluZykge1xuICAgICAgdmFyIF90aGlzJHJlc29sdmVBcmd1bWVudDMgPSBfdGhpcy5yZXNvbHZlQXJndW1lbnRzKG1heWJlTm9kZSwgbWF5YmVBcHBlYXJpbmcpLFxuICAgICAgICAgIG5vZGUgPSBfdGhpcyRyZXNvbHZlQXJndW1lbnQzWzBdLFxuICAgICAgICAgIGFwcGVhcmluZyA9IF90aGlzJHJlc29sdmVBcmd1bWVudDNbMV07XG5cbiAgICAgIHZhciB0eXBlID0gYXBwZWFyaW5nID8gJ2FwcGVhcicgOiAnZW50ZXInO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsIHR5cGUpO1xuXG4gICAgICBfdGhpcy5hZGRDbGFzcyhub2RlLCB0eXBlLCAnZG9uZScpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FbnRlcmVkKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRW50ZXJlZChtYXliZU5vZGUsIG1heWJlQXBwZWFyaW5nKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FeGl0ID0gZnVuY3Rpb24gKG1heWJlTm9kZSkge1xuICAgICAgdmFyIF90aGlzJHJlc29sdmVBcmd1bWVudDQgPSBfdGhpcy5yZXNvbHZlQXJndW1lbnRzKG1heWJlTm9kZSksXG4gICAgICAgICAgbm9kZSA9IF90aGlzJHJlc29sdmVBcmd1bWVudDRbMF07XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2FwcGVhcicpO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdlbnRlcicpO1xuXG4gICAgICBfdGhpcy5hZGRDbGFzcyhub2RlLCAnZXhpdCcsICdiYXNlJyk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkV4aXQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FeGl0KG1heWJlTm9kZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRXhpdGluZyA9IGZ1bmN0aW9uIChtYXliZU5vZGUpIHtcbiAgICAgIHZhciBfdGhpcyRyZXNvbHZlQXJndW1lbnQ1ID0gX3RoaXMucmVzb2x2ZUFyZ3VtZW50cyhtYXliZU5vZGUpLFxuICAgICAgICAgIG5vZGUgPSBfdGhpcyRyZXNvbHZlQXJndW1lbnQ1WzBdO1xuXG4gICAgICBfdGhpcy5hZGRDbGFzcyhub2RlLCAnZXhpdCcsICdhY3RpdmUnKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRXhpdGluZykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkV4aXRpbmcobWF5YmVOb2RlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FeGl0ZWQgPSBmdW5jdGlvbiAobWF5YmVOb2RlKSB7XG4gICAgICB2YXIgX3RoaXMkcmVzb2x2ZUFyZ3VtZW50NiA9IF90aGlzLnJlc29sdmVBcmd1bWVudHMobWF5YmVOb2RlKSxcbiAgICAgICAgICBub2RlID0gX3RoaXMkcmVzb2x2ZUFyZ3VtZW50NlswXTtcblxuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCAnZXhpdCcpO1xuXG4gICAgICBfdGhpcy5hZGRDbGFzcyhub2RlLCAnZXhpdCcsICdkb25lJyk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkV4aXRlZCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkV4aXRlZChtYXliZU5vZGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5yZXNvbHZlQXJndW1lbnRzID0gZnVuY3Rpb24gKG1heWJlTm9kZSwgbWF5YmVBcHBlYXJpbmcpIHtcbiAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5ub2RlUmVmID8gW190aGlzLnByb3BzLm5vZGVSZWYuY3VycmVudCwgbWF5YmVOb2RlXSAvLyBoZXJlIGBtYXliZU5vZGVgIGlzIGFjdHVhbGx5IGBhcHBlYXJpbmdgXG4gICAgICA6IFttYXliZU5vZGUsIG1heWJlQXBwZWFyaW5nXTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0Q2xhc3NOYW1lcyA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICB2YXIgY2xhc3NOYW1lcyA9IF90aGlzLnByb3BzLmNsYXNzTmFtZXM7XG4gICAgICB2YXIgaXNTdHJpbmdDbGFzc05hbWVzID0gdHlwZW9mIGNsYXNzTmFtZXMgPT09ICdzdHJpbmcnO1xuICAgICAgdmFyIHByZWZpeCA9IGlzU3RyaW5nQ2xhc3NOYW1lcyAmJiBjbGFzc05hbWVzID8gY2xhc3NOYW1lcyArIFwiLVwiIDogJyc7XG4gICAgICB2YXIgYmFzZUNsYXNzTmFtZSA9IGlzU3RyaW5nQ2xhc3NOYW1lcyA/IFwiXCIgKyBwcmVmaXggKyB0eXBlIDogY2xhc3NOYW1lc1t0eXBlXTtcbiAgICAgIHZhciBhY3RpdmVDbGFzc05hbWUgPSBpc1N0cmluZ0NsYXNzTmFtZXMgPyBiYXNlQ2xhc3NOYW1lICsgXCItYWN0aXZlXCIgOiBjbGFzc05hbWVzW3R5cGUgKyBcIkFjdGl2ZVwiXTtcbiAgICAgIHZhciBkb25lQ2xhc3NOYW1lID0gaXNTdHJpbmdDbGFzc05hbWVzID8gYmFzZUNsYXNzTmFtZSArIFwiLWRvbmVcIiA6IGNsYXNzTmFtZXNbdHlwZSArIFwiRG9uZVwiXTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJhc2VDbGFzc05hbWU6IGJhc2VDbGFzc05hbWUsXG4gICAgICAgIGFjdGl2ZUNsYXNzTmFtZTogYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgICBkb25lQ2xhc3NOYW1lOiBkb25lQ2xhc3NOYW1lXG4gICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ1NTVHJhbnNpdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmFkZENsYXNzID0gZnVuY3Rpb24gYWRkQ2xhc3Mobm9kZSwgdHlwZSwgcGhhc2UpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5nZXRDbGFzc05hbWVzKHR5cGUpW3BoYXNlICsgXCJDbGFzc05hbWVcIl07XG5cbiAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lcyA9IHRoaXMuZ2V0Q2xhc3NOYW1lcygnZW50ZXInKSxcbiAgICAgICAgZG9uZUNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXMuZG9uZUNsYXNzTmFtZTtcblxuICAgIGlmICh0eXBlID09PSAnYXBwZWFyJyAmJiBwaGFzZSA9PT0gJ2RvbmUnICYmIGRvbmVDbGFzc05hbWUpIHtcbiAgICAgIGNsYXNzTmFtZSArPSBcIiBcIiArIGRvbmVDbGFzc05hbWU7XG4gICAgfSAvLyBUaGlzIGlzIGZvciB0byBmb3JjZSBhIHJlcGFpbnQsXG4gICAgLy8gd2hpY2ggaXMgbmVjZXNzYXJ5IGluIG9yZGVyIHRvIHRyYW5zaXRpb24gc3R5bGVzIHdoZW4gYWRkaW5nIGEgY2xhc3MgbmFtZS5cblxuXG4gICAgaWYgKHBoYXNlID09PSAnYWN0aXZlJykge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4gICAgICBub2RlICYmIG5vZGUuc2Nyb2xsVG9wO1xuICAgIH1cblxuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIHRoaXMuYXBwbGllZENsYXNzZXNbdHlwZV1bcGhhc2VdID0gY2xhc3NOYW1lO1xuXG4gICAgICBfYWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZUNsYXNzZXMgPSBmdW5jdGlvbiByZW1vdmVDbGFzc2VzKG5vZGUsIHR5cGUpIHtcbiAgICB2YXIgX3RoaXMkYXBwbGllZENsYXNzZXMkID0gdGhpcy5hcHBsaWVkQ2xhc3Nlc1t0eXBlXSxcbiAgICAgICAgYmFzZUNsYXNzTmFtZSA9IF90aGlzJGFwcGxpZWRDbGFzc2VzJC5iYXNlLFxuICAgICAgICBhY3RpdmVDbGFzc05hbWUgPSBfdGhpcyRhcHBsaWVkQ2xhc3NlcyQuYWN0aXZlLFxuICAgICAgICBkb25lQ2xhc3NOYW1lID0gX3RoaXMkYXBwbGllZENsYXNzZXMkLmRvbmU7XG4gICAgdGhpcy5hcHBsaWVkQ2xhc3Nlc1t0eXBlXSA9IHt9O1xuXG4gICAgaWYgKGJhc2VDbGFzc05hbWUpIHtcbiAgICAgIHJlbW92ZUNsYXNzKG5vZGUsIGJhc2VDbGFzc05hbWUpO1xuICAgIH1cblxuICAgIGlmIChhY3RpdmVDbGFzc05hbWUpIHtcbiAgICAgIHJlbW92ZUNsYXNzKG5vZGUsIGFjdGl2ZUNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKGRvbmVDbGFzc05hbWUpIHtcbiAgICAgIHJlbW92ZUNsYXNzKG5vZGUsIGRvbmVDbGFzc05hbWUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIF8gPSBfdGhpcyRwcm9wcy5jbGFzc05hbWVzLFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJjbGFzc05hbWVzXCJdKTtcblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIG9uRW50ZXI6IHRoaXMub25FbnRlcixcbiAgICAgIG9uRW50ZXJlZDogdGhpcy5vbkVudGVyZWQsXG4gICAgICBvbkVudGVyaW5nOiB0aGlzLm9uRW50ZXJpbmcsXG4gICAgICBvbkV4aXQ6IHRoaXMub25FeGl0LFxuICAgICAgb25FeGl0aW5nOiB0aGlzLm9uRXhpdGluZyxcbiAgICAgIG9uRXhpdGVkOiB0aGlzLm9uRXhpdGVkXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBDU1NUcmFuc2l0aW9uO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5DU1NUcmFuc2l0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lczogJydcbn07XG5DU1NUcmFuc2l0aW9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IF9leHRlbmRzKHt9LCBUcmFuc2l0aW9uLnByb3BUeXBlcywge1xuICAvKipcbiAgICogVGhlIGFuaW1hdGlvbiBjbGFzc05hbWVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudCBhcyBpdCBhcHBlYXJzLCBlbnRlcnMsXG4gICAqIGV4aXRzIG9yIGhhcyBmaW5pc2hlZCB0aGUgdHJhbnNpdGlvbi4gQSBzaW5nbGUgbmFtZSBjYW4gYmUgcHJvdmlkZWQsIHdoaWNoXG4gICAqIHdpbGwgYmUgc3VmZml4ZWQgZm9yIGVhY2ggc3RhZ2UsIGUuZy4gYGNsYXNzTmFtZXM9XCJmYWRlXCJgIGFwcGxpZXM6XG4gICAqXG4gICAqIC0gYGZhZGUtYXBwZWFyYCwgYGZhZGUtYXBwZWFyLWFjdGl2ZWAsIGBmYWRlLWFwcGVhci1kb25lYFxuICAgKiAtIGBmYWRlLWVudGVyYCwgYGZhZGUtZW50ZXItYWN0aXZlYCwgYGZhZGUtZW50ZXItZG9uZWBcbiAgICogLSBgZmFkZS1leGl0YCwgYGZhZGUtZXhpdC1hY3RpdmVgLCBgZmFkZS1leGl0LWRvbmVgXG4gICAqXG4gICAqIEEgZmV3IGRldGFpbHMgdG8gbm90ZSBhYm91dCBob3cgdGhlc2UgY2xhc3NlcyBhcmUgYXBwbGllZDpcbiAgICpcbiAgICogMS4gVGhleSBhcmUgX2pvaW5lZF8gd2l0aCB0aGUgb25lcyB0aGF0IGFyZSBhbHJlYWR5IGRlZmluZWQgb24gdGhlIGNoaWxkXG4gICAqICAgIGNvbXBvbmVudCwgc28gaWYgeW91IHdhbnQgdG8gYWRkIHNvbWUgYmFzZSBzdHlsZXMsIHlvdSBjYW4gdXNlXG4gICAqICAgIGBjbGFzc05hbWVgIHdpdGhvdXQgd29ycnlpbmcgdGhhdCBpdCB3aWxsIGJlIG92ZXJyaWRkZW4uXG4gICAqXG4gICAqIDIuIElmIHRoZSB0cmFuc2l0aW9uIGNvbXBvbmVudCBtb3VudHMgd2l0aCBgaW49e2ZhbHNlfWAsIG5vIGNsYXNzZXMgYXJlXG4gICAqICAgIGFwcGxpZWQgeWV0LiBZb3UgbWlnaHQgYmUgZXhwZWN0aW5nIGAqLWV4aXQtZG9uZWAsIGJ1dCBpZiB5b3UgdGhpbmtcbiAgICogICAgYWJvdXQgaXQsIGEgY29tcG9uZW50IGNhbm5vdCBmaW5pc2ggZXhpdGluZyBpZiBpdCBoYXNuJ3QgZW50ZXJlZCB5ZXQuXG4gICAqXG4gICAqIDIuIGBmYWRlLWFwcGVhci1kb25lYCBhbmQgYGZhZGUtZW50ZXItZG9uZWAgd2lsbCBfYm90aF8gYmUgYXBwbGllZC4gVGhpc1xuICAgKiAgICBhbGxvd3MgeW91IHRvIGRlZmluZSBkaWZmZXJlbnQgYmVoYXZpb3IgZm9yIHdoZW4gYXBwZWFyaW5nIGlzIGRvbmUgYW5kXG4gICAqICAgIHdoZW4gcmVndWxhciBlbnRlcmluZyBpcyBkb25lLCB1c2luZyBzZWxlY3RvcnMgbGlrZVxuICAgKiAgICBgLmZhZGUtZW50ZXItZG9uZTpub3QoLmZhZGUtYXBwZWFyLWRvbmUpYC4gRm9yIGV4YW1wbGUsIHlvdSBjb3VsZCBhcHBseVxuICAgKiAgICBhbiBlcGljIGVudHJhbmNlIGFuaW1hdGlvbiB3aGVuIGVsZW1lbnQgZmlyc3QgYXBwZWFycyBpbiB0aGUgRE9NIHVzaW5nXG4gICAqICAgIFtBbmltYXRlLmNzc10oaHR0cHM6Ly9kYW5lZGVuLmdpdGh1Yi5pby9hbmltYXRlLmNzcy8pLiBPdGhlcndpc2UgeW91IGNhblxuICAgKiAgICBzaW1wbHkgdXNlIGBmYWRlLWVudGVyLWRvbmVgIGZvciBkZWZpbmluZyBib3RoIGNhc2VzLlxuICAgKlxuICAgKiBFYWNoIGluZGl2aWR1YWwgY2xhc3NOYW1lcyBjYW4gYWxzbyBiZSBzcGVjaWZpZWQgaW5kZXBlbmRlbnRseSBsaWtlOlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjbGFzc05hbWVzPXt7XG4gICAqICBhcHBlYXI6ICdteS1hcHBlYXInLFxuICAgKiAgYXBwZWFyQWN0aXZlOiAnbXktYWN0aXZlLWFwcGVhcicsXG4gICAqICBhcHBlYXJEb25lOiAnbXktZG9uZS1hcHBlYXInLFxuICAgKiAgZW50ZXI6ICdteS1lbnRlcicsXG4gICAqICBlbnRlckFjdGl2ZTogJ215LWFjdGl2ZS1lbnRlcicsXG4gICAqICBlbnRlckRvbmU6ICdteS1kb25lLWVudGVyJyxcbiAgICogIGV4aXQ6ICdteS1leGl0JyxcbiAgICogIGV4aXRBY3RpdmU6ICdteS1hY3RpdmUtZXhpdCcsXG4gICAqICBleGl0RG9uZTogJ215LWRvbmUtZXhpdCcsXG4gICAqIH19XG4gICAqIGBgYFxuICAgKlxuICAgKiBJZiB5b3Ugd2FudCB0byBzZXQgdGhlc2UgY2xhc3NlcyB1c2luZyBDU1MgTW9kdWxlczpcbiAgICpcbiAgICogYGBganNcbiAgICogaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5jc3MnO1xuICAgKiBgYGBcbiAgICpcbiAgICogeW91IG1pZ2h0IHdhbnQgdG8gdXNlIGNhbWVsQ2FzZSBpbiB5b3VyIENTUyBmaWxlLCB0aGF0IHdheSBjb3VsZCBzaW1wbHlcbiAgICogc3ByZWFkIHRoZW0gaW5zdGVhZCBvZiBsaXN0aW5nIHRoZW0gb25lIGJ5IG9uZTpcbiAgICpcbiAgICogYGBganNcbiAgICogY2xhc3NOYW1lcz17eyAuLi5zdHlsZXMgfX1cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmcgfCB7XG4gICAqICBhcHBlYXI/OiBzdHJpbmcsXG4gICAqICBhcHBlYXJBY3RpdmU/OiBzdHJpbmcsXG4gICAqICBhcHBlYXJEb25lPzogc3RyaW5nLFxuICAgKiAgZW50ZXI/OiBzdHJpbmcsXG4gICAqICBlbnRlckFjdGl2ZT86IHN0cmluZyxcbiAgICogIGVudGVyRG9uZT86IHN0cmluZyxcbiAgICogIGV4aXQ/OiBzdHJpbmcsXG4gICAqICBleGl0QWN0aXZlPzogc3RyaW5nLFxuICAgKiAgZXhpdERvbmU/OiBzdHJpbmcsXG4gICAqIH19XG4gICAqL1xuICBjbGFzc05hbWVzOiBjbGFzc05hbWVzU2hhcGUsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdlbnRlcicgb3IgJ2FwcGVhcicgY2xhc3MgaXNcbiAgICogYXBwbGllZC5cbiAgICpcbiAgICogKipOb3RlKio6IHdoZW4gYG5vZGVSZWZgIHByb3AgaXMgcGFzc2VkLCBgbm9kZWAgaXMgbm90IHBhc3NlZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdlbnRlci1hY3RpdmUnIG9yXG4gICAqICdhcHBlYXItYWN0aXZlJyBjbGFzcyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiAqKk5vdGUqKjogd2hlbiBgbm9kZVJlZmAgcHJvcCBpcyBwYXNzZWQsIGBub2RlYCBpcyBub3QgcGFzc2VkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2VudGVyJyBvclxuICAgKiAnYXBwZWFyJyBjbGFzc2VzIGFyZSAqKnJlbW92ZWQqKiBhbmQgdGhlIGBkb25lYCBjbGFzcyBpcyBhZGRlZCB0byB0aGUgRE9NIG5vZGUuXG4gICAqXG4gICAqICoqTm90ZSoqOiB3aGVuIGBub2RlUmVmYCBwcm9wIGlzIHBhc3NlZCwgYG5vZGVgIGlzIG5vdCBwYXNzZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdleGl0JyBjbGFzcyBpc1xuICAgKiBhcHBsaWVkLlxuICAgKlxuICAgKiAqKk5vdGUqKjogd2hlbiBgbm9kZVJlZmAgcHJvcCBpcyBwYXNzZWQsIGBub2RlYCBpcyBub3QgcGFzc2VkXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KVxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2V4aXQtYWN0aXZlJyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiAqKk5vdGUqKjogd2hlbiBgbm9kZVJlZmAgcHJvcCBpcyBwYXNzZWQsIGBub2RlYCBpcyBub3QgcGFzc2VkXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KVxuICAgKi9cbiAgb25FeGl0aW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2V4aXQnIGNsYXNzZXNcbiAgICogYXJlICoqcmVtb3ZlZCoqIGFuZCB0aGUgYGV4aXQtZG9uZWAgY2xhc3MgaXMgYWRkZWQgdG8gdGhlIERPTSBub2RlLlxuICAgKlxuICAgKiAqKk5vdGUqKjogd2hlbiBgbm9kZVJlZmAgcHJvcCBpcyBwYXNzZWQsIGBub2RlYCBpcyBub3QgcGFzc2VkXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KVxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jXG59KSA6IHt9O1xuZXhwb3J0IGRlZmF1bHQgQ1NTVHJhbnNpdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL0NTU1RyYW5zaXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IGhhc0NsYXNzIGZyb20gJy4vaGFzQ2xhc3MnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7ZWxzZSBpZiAoIWhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkpIGlmICh0eXBlb2YgZWxlbWVudC5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lICsgXCIgXCIgKyBjbGFzc05hbWU7ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCAnJykgKyBcIiBcIiArIGNsYXNzTmFtZSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vYWRkQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgcmV0dXJuICEhY2xhc3NOYW1lICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gIHJldHVybiAoXCIgXCIgKyAoZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCBlbGVtZW50LmNsYXNzTmFtZSkgKyBcIiBcIikuaW5kZXhPZihcIiBcIiArIGNsYXNzTmFtZSArIFwiIFwiKSAhPT0gLTE7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vaGFzQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZnVuY3Rpb24gcmVwbGFjZUNsYXNzTmFtZShvcmlnQ2xhc3MsIGNsYXNzVG9SZW1vdmUpIHtcbiAgcmV0dXJuIG9yaWdDbGFzcy5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXnxcXFxccylcIiArIGNsYXNzVG9SZW1vdmUgKyBcIig/OlxcXFxzfCQpXCIsICdnJyksICckMScpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC9eXFxzKnxcXHMqJC9nLCAnJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudC5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gcmVwbGFjZUNsYXNzTmFtZShlbGVtZW50LmNsYXNzTmFtZSwgY2xhc3NOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCByZXBsYWNlQ2xhc3NOYW1lKGVsZW1lbnQuY2xhc3NOYW1lICYmIGVsZW1lbnQuY2xhc3NOYW1lLmJhc2VWYWwgfHwgJycsIGNsYXNzTmFtZSkpO1xuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vcmVtb3ZlQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgVHJhbnNpdGlvbkdyb3VwIGZyb20gJy4vVHJhbnNpdGlvbkdyb3VwJztcbi8qKlxuICogVGhlIGA8UmVwbGFjZVRyYW5zaXRpb24+YCBjb21wb25lbnQgaXMgYSBzcGVjaWFsaXplZCBgVHJhbnNpdGlvbmAgY29tcG9uZW50XG4gKiB0aGF0IGFuaW1hdGVzIGJldHdlZW4gdHdvIGNoaWxkcmVuLlxuICpcbiAqIGBgYGpzeFxuICogPFJlcGxhY2VUcmFuc2l0aW9uIGluPlxuICogICA8RmFkZT48ZGl2PkkgYXBwZWFyIGZpcnN0PC9kaXY+PC9GYWRlPlxuICogICA8RmFkZT48ZGl2PkkgcmVwbGFjZSB0aGUgYWJvdmU8L2Rpdj48L0ZhZGU+XG4gKiA8L1JlcGxhY2VUcmFuc2l0aW9uPlxuICogYGBgXG4gKi9cblxudmFyIFJlcGxhY2VUcmFuc2l0aW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFJlcGxhY2VUcmFuc2l0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSZXBsYWNlVHJhbnNpdGlvbigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgX2FyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBfYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KF9hcmdzKSkgfHwgdGhpcztcblxuICAgIF90aGlzLmhhbmRsZUVudGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUxpZmVjeWNsZSgnb25FbnRlcicsIDAsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVFbnRlcmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVMaWZlY3ljbGUoJ29uRW50ZXJpbmcnLCAwLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlRW50ZXJlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNCksIF9rZXk0ID0gMDsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgICAgICBhcmdzW19rZXk0XSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVMaWZlY3ljbGUoJ29uRW50ZXJlZCcsIDAsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVFeGl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW41KSwgX2tleTUgPSAwOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleTVdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUxpZmVjeWNsZSgnb25FeGl0JywgMSwgYXJncyk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUV4aXRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuNiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjYpLCBfa2V5NiA9IDA7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcbiAgICAgICAgYXJnc1tfa2V5Nl0gPSBhcmd1bWVudHNbX2tleTZdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3RoaXMuaGFuZGxlTGlmZWN5Y2xlKCdvbkV4aXRpbmcnLCAxLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlRXhpdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjcgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW43KSwgX2tleTcgPSAwOyBfa2V5NyA8IF9sZW43OyBfa2V5NysrKSB7XG4gICAgICAgIGFyZ3NbX2tleTddID0gYXJndW1lbnRzW19rZXk3XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUxpZmVjeWNsZSgnb25FeGl0ZWQnLCAxLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFJlcGxhY2VUcmFuc2l0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8uaGFuZGxlTGlmZWN5Y2xlID0gZnVuY3Rpb24gaGFuZGxlTGlmZWN5Y2xlKGhhbmRsZXIsIGlkeCwgb3JpZ2luYWxBcmdzKSB7XG4gICAgdmFyIF9jaGlsZCRwcm9wcztcblxuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgdmFyIGNoaWxkID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbilbaWR4XTtcbiAgICBpZiAoY2hpbGQucHJvcHNbaGFuZGxlcl0pIChfY2hpbGQkcHJvcHMgPSBjaGlsZC5wcm9wcylbaGFuZGxlcl0uYXBwbHkoX2NoaWxkJHByb3BzLCBvcmlnaW5hbEFyZ3MpO1xuXG4gICAgaWYgKHRoaXMucHJvcHNbaGFuZGxlcl0pIHtcbiAgICAgIHZhciBtYXliZU5vZGUgPSBjaGlsZC5wcm9wcy5ub2RlUmVmID8gdW5kZWZpbmVkIDogUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgICB0aGlzLnByb3BzW2hhbmRsZXJdKG1heWJlTm9kZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgaW5Qcm9wID0gX3RoaXMkcHJvcHMuaW4sXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiaW5cIl0pO1xuXG4gICAgdmFyIF9SZWFjdCRDaGlsZHJlbiR0b0FyciA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLFxuICAgICAgICBmaXJzdCA9IF9SZWFjdCRDaGlsZHJlbiR0b0FyclswXSxcbiAgICAgICAgc2Vjb25kID0gX1JlYWN0JENoaWxkcmVuJHRvQXJyWzFdO1xuXG4gICAgZGVsZXRlIHByb3BzLm9uRW50ZXI7XG4gICAgZGVsZXRlIHByb3BzLm9uRW50ZXJpbmc7XG4gICAgZGVsZXRlIHByb3BzLm9uRW50ZXJlZDtcbiAgICBkZWxldGUgcHJvcHMub25FeGl0O1xuICAgIGRlbGV0ZSBwcm9wcy5vbkV4aXRpbmc7XG4gICAgZGVsZXRlIHByb3BzLm9uRXhpdGVkO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uR3JvdXAsIHByb3BzLCBpblByb3AgPyBSZWFjdC5jbG9uZUVsZW1lbnQoZmlyc3QsIHtcbiAgICAgIGtleTogJ2ZpcnN0JyxcbiAgICAgIG9uRW50ZXI6IHRoaXMuaGFuZGxlRW50ZXIsXG4gICAgICBvbkVudGVyaW5nOiB0aGlzLmhhbmRsZUVudGVyaW5nLFxuICAgICAgb25FbnRlcmVkOiB0aGlzLmhhbmRsZUVudGVyZWRcbiAgICB9KSA6IFJlYWN0LmNsb25lRWxlbWVudChzZWNvbmQsIHtcbiAgICAgIGtleTogJ3NlY29uZCcsXG4gICAgICBvbkVudGVyOiB0aGlzLmhhbmRsZUV4aXQsXG4gICAgICBvbkVudGVyaW5nOiB0aGlzLmhhbmRsZUV4aXRpbmcsXG4gICAgICBvbkVudGVyZWQ6IHRoaXMuaGFuZGxlRXhpdGVkXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBSZXBsYWNlVHJhbnNpdGlvbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuUmVwbGFjZVRyYW5zaXRpb24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICBpbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IGZ1bmN0aW9uIGNoaWxkcmVuKHByb3BzLCBwcm9wTmFtZSkge1xuICAgIGlmIChSZWFjdC5DaGlsZHJlbi5jb3VudChwcm9wc1twcm9wTmFtZV0pICE9PSAyKSByZXR1cm4gbmV3IEVycm9yKFwiXFxcIlwiICsgcHJvcE5hbWUgKyBcIlxcXCIgbXVzdCBiZSBleGFjdGx5IHR3byB0cmFuc2l0aW9uIGNvbXBvbmVudHMuXCIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59IDoge307XG5leHBvcnQgZGVmYXVsdCBSZXBsYWNlVHJhbnNpdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL1JlcGxhY2VUcmFuc2l0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IHsgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCwgaXNWYWxpZEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG4vKipcbiAqIEdpdmVuIGB0aGlzLnByb3BzLmNoaWxkcmVuYCwgcmV0dXJuIGFuIG9iamVjdCBtYXBwaW5nIGtleSB0byBjaGlsZC5cbiAqXG4gKiBAcGFyYW0geyp9IGNoaWxkcmVuIGB0aGlzLnByb3BzLmNoaWxkcmVuYFxuICogQHJldHVybiB7b2JqZWN0fSBNYXBwaW5nIG9mIGtleSB0byBjaGlsZFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGlsZE1hcHBpbmcoY2hpbGRyZW4sIG1hcEZuKSB7XG4gIHZhciBtYXBwZXIgPSBmdW5jdGlvbiBtYXBwZXIoY2hpbGQpIHtcbiAgICByZXR1cm4gbWFwRm4gJiYgaXNWYWxpZEVsZW1lbnQoY2hpbGQpID8gbWFwRm4oY2hpbGQpIDogY2hpbGQ7XG4gIH07XG5cbiAgdmFyIHJlc3VsdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGlmIChjaGlsZHJlbikgQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjO1xuICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIC8vIHJ1biB0aGUgbWFwIGZ1bmN0aW9uIGhlcmUgaW5zdGVhZCBzbyB0aGF0IHRoZSBrZXkgaXMgdGhlIGNvbXB1dGVkIG9uZVxuICAgIHJlc3VsdFtjaGlsZC5rZXldID0gbWFwcGVyKGNoaWxkKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIFdoZW4geW91J3JlIGFkZGluZyBvciByZW1vdmluZyBjaGlsZHJlbiBzb21lIG1heSBiZSBhZGRlZCBvciByZW1vdmVkIGluIHRoZVxuICogc2FtZSByZW5kZXIgcGFzcy4gV2Ugd2FudCB0byBzaG93ICpib3RoKiBzaW5jZSB3ZSB3YW50IHRvIHNpbXVsdGFuZW91c2x5XG4gKiBhbmltYXRlIGVsZW1lbnRzIGluIGFuZCBvdXQuIFRoaXMgZnVuY3Rpb24gdGFrZXMgYSBwcmV2aW91cyBzZXQgb2Yga2V5c1xuICogYW5kIGEgbmV3IHNldCBvZiBrZXlzIGFuZCBtZXJnZXMgdGhlbSB3aXRoIGl0cyBiZXN0IGd1ZXNzIG9mIHRoZSBjb3JyZWN0XG4gKiBvcmRlcmluZy4gSW4gdGhlIGZ1dHVyZSB3ZSBtYXkgZXhwb3NlIHNvbWUgb2YgdGhlIHV0aWxpdGllcyBpblxuICogUmVhY3RNdWx0aUNoaWxkIHRvIG1ha2UgdGhpcyBlYXN5LCBidXQgZm9yIG5vdyBSZWFjdCBpdHNlbGYgZG9lcyBub3RcbiAqIGRpcmVjdGx5IGhhdmUgdGhpcyBjb25jZXB0IG9mIHRoZSB1bmlvbiBvZiBwcmV2Q2hpbGRyZW4gYW5kIG5leHRDaGlsZHJlblxuICogc28gd2UgaW1wbGVtZW50IGl0IGhlcmUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHByZXYgcHJldiBjaGlsZHJlbiBhcyByZXR1cm5lZCBmcm9tXG4gKiBgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZygpYC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBuZXh0IG5leHQgY2hpbGRyZW4gYXMgcmV0dXJuZWQgZnJvbVxuICogYFJlYWN0VHJhbnNpdGlvbkNoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcoKWAuXG4gKiBAcmV0dXJuIHtvYmplY3R9IGEga2V5IHNldCB0aGF0IGNvbnRhaW5zIGFsbCBrZXlzIGluIGBwcmV2YCBhbmQgYWxsIGtleXNcbiAqIGluIGBuZXh0YCBpbiBhIHJlYXNvbmFibGUgb3JkZXIuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ2hpbGRNYXBwaW5ncyhwcmV2LCBuZXh0KSB7XG4gIHByZXYgPSBwcmV2IHx8IHt9O1xuICBuZXh0ID0gbmV4dCB8fCB7fTtcblxuICBmdW5jdGlvbiBnZXRWYWx1ZUZvcktleShrZXkpIHtcbiAgICByZXR1cm4ga2V5IGluIG5leHQgPyBuZXh0W2tleV0gOiBwcmV2W2tleV07XG4gIH0gLy8gRm9yIGVhY2gga2V5IG9mIGBuZXh0YCwgdGhlIGxpc3Qgb2Yga2V5cyB0byBpbnNlcnQgYmVmb3JlIHRoYXQga2V5IGluXG4gIC8vIHRoZSBjb21iaW5lZCBsaXN0XG5cblxuICB2YXIgbmV4dEtleXNQZW5kaW5nID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIHBlbmRpbmdLZXlzID0gW107XG5cbiAgZm9yICh2YXIgcHJldktleSBpbiBwcmV2KSB7XG4gICAgaWYgKHByZXZLZXkgaW4gbmV4dCkge1xuICAgICAgaWYgKHBlbmRpbmdLZXlzLmxlbmd0aCkge1xuICAgICAgICBuZXh0S2V5c1BlbmRpbmdbcHJldktleV0gPSBwZW5kaW5nS2V5cztcbiAgICAgICAgcGVuZGluZ0tleXMgPSBbXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGVuZGluZ0tleXMucHVzaChwcmV2S2V5KTtcbiAgICB9XG4gIH1cblxuICB2YXIgaTtcbiAgdmFyIGNoaWxkTWFwcGluZyA9IHt9O1xuXG4gIGZvciAodmFyIG5leHRLZXkgaW4gbmV4dCkge1xuICAgIGlmIChuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV0pIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHBlbmRpbmdOZXh0S2V5ID0gbmV4dEtleXNQZW5kaW5nW25leHRLZXldW2ldO1xuICAgICAgICBjaGlsZE1hcHBpbmdbbmV4dEtleXNQZW5kaW5nW25leHRLZXldW2ldXSA9IGdldFZhbHVlRm9yS2V5KHBlbmRpbmdOZXh0S2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGlsZE1hcHBpbmdbbmV4dEtleV0gPSBnZXRWYWx1ZUZvcktleShuZXh0S2V5KTtcbiAgfSAvLyBGaW5hbGx5LCBhZGQgdGhlIGtleXMgd2hpY2ggZGlkbid0IGFwcGVhciBiZWZvcmUgYW55IGtleSBpbiBgbmV4dGBcblxuXG4gIGZvciAoaSA9IDA7IGkgPCBwZW5kaW5nS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGNoaWxkTWFwcGluZ1twZW5kaW5nS2V5c1tpXV0gPSBnZXRWYWx1ZUZvcktleShwZW5kaW5nS2V5c1tpXSk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRNYXBwaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wKGNoaWxkLCBwcm9wLCBwcm9wcykge1xuICByZXR1cm4gcHJvcHNbcHJvcF0gIT0gbnVsbCA/IHByb3BzW3Byb3BdIDogY2hpbGQucHJvcHNbcHJvcF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbml0aWFsQ2hpbGRNYXBwaW5nKHByb3BzLCBvbkV4aXRlZCkge1xuICByZXR1cm4gZ2V0Q2hpbGRNYXBwaW5nKHByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICBvbkV4aXRlZDogb25FeGl0ZWQuYmluZChudWxsLCBjaGlsZCksXG4gICAgICBpbjogdHJ1ZSxcbiAgICAgIGFwcGVhcjogZ2V0UHJvcChjaGlsZCwgJ2FwcGVhcicsIHByb3BzKSxcbiAgICAgIGVudGVyOiBnZXRQcm9wKGNoaWxkLCAnZW50ZXInLCBwcm9wcyksXG4gICAgICBleGl0OiBnZXRQcm9wKGNoaWxkLCAnZXhpdCcsIHByb3BzKVxuICAgIH0pO1xuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0Q2hpbGRNYXBwaW5nKG5leHRQcm9wcywgcHJldkNoaWxkTWFwcGluZywgb25FeGl0ZWQpIHtcbiAgdmFyIG5leHRDaGlsZE1hcHBpbmcgPSBnZXRDaGlsZE1hcHBpbmcobmV4dFByb3BzLmNoaWxkcmVuKTtcbiAgdmFyIGNoaWxkcmVuID0gbWVyZ2VDaGlsZE1hcHBpbmdzKHByZXZDaGlsZE1hcHBpbmcsIG5leHRDaGlsZE1hcHBpbmcpO1xuICBPYmplY3Qua2V5cyhjaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5ba2V5XTtcbiAgICBpZiAoIWlzVmFsaWRFbGVtZW50KGNoaWxkKSkgcmV0dXJuO1xuICAgIHZhciBoYXNQcmV2ID0gKGtleSBpbiBwcmV2Q2hpbGRNYXBwaW5nKTtcbiAgICB2YXIgaGFzTmV4dCA9IChrZXkgaW4gbmV4dENoaWxkTWFwcGluZyk7XG4gICAgdmFyIHByZXZDaGlsZCA9IHByZXZDaGlsZE1hcHBpbmdba2V5XTtcbiAgICB2YXIgaXNMZWF2aW5nID0gaXNWYWxpZEVsZW1lbnQocHJldkNoaWxkKSAmJiAhcHJldkNoaWxkLnByb3BzLmluOyAvLyBpdGVtIGlzIG5ldyAoZW50ZXJpbmcpXG5cbiAgICBpZiAoaGFzTmV4dCAmJiAoIWhhc1ByZXYgfHwgaXNMZWF2aW5nKSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2VudGVyaW5nJywga2V5KVxuICAgICAgY2hpbGRyZW5ba2V5XSA9IGNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICBvbkV4aXRlZDogb25FeGl0ZWQuYmluZChudWxsLCBjaGlsZCksXG4gICAgICAgIGluOiB0cnVlLFxuICAgICAgICBleGl0OiBnZXRQcm9wKGNoaWxkLCAnZXhpdCcsIG5leHRQcm9wcyksXG4gICAgICAgIGVudGVyOiBnZXRQcm9wKGNoaWxkLCAnZW50ZXInLCBuZXh0UHJvcHMpXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCFoYXNOZXh0ICYmIGhhc1ByZXYgJiYgIWlzTGVhdmluZykge1xuICAgICAgLy8gaXRlbSBpcyBvbGQgKGV4aXRpbmcpXG4gICAgICAvLyBjb25zb2xlLmxvZygnbGVhdmluZycsIGtleSlcbiAgICAgIGNoaWxkcmVuW2tleV0gPSBjbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgaW46IGZhbHNlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGhhc05leHQgJiYgaGFzUHJldiAmJiBpc1ZhbGlkRWxlbWVudChwcmV2Q2hpbGQpKSB7XG4gICAgICAvLyBpdGVtIGhhc24ndCBjaGFuZ2VkIHRyYW5zaXRpb24gc3RhdGVzXG4gICAgICAvLyBjb3B5IG92ZXIgdGhlIGxhc3QgdHJhbnNpdGlvbiBwcm9wcztcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd1bmNoYW5nZWQnLCBrZXkpXG4gICAgICBjaGlsZHJlbltrZXldID0gY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIG9uRXhpdGVkOiBvbkV4aXRlZC5iaW5kKG51bGwsIGNoaWxkKSxcbiAgICAgICAgaW46IHByZXZDaGlsZC5wcm9wcy5pbixcbiAgICAgICAgZXhpdDogZ2V0UHJvcChjaGlsZCwgJ2V4aXQnLCBuZXh0UHJvcHMpLFxuICAgICAgICBlbnRlcjogZ2V0UHJvcChjaGlsZCwgJ2VudGVyJywgbmV4dFByb3BzKVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vdXRpbHMvQ2hpbGRNYXBwaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuXG52YXIgX2xlYXZlUmVuZGVycywgX2VudGVyUmVuZGVycztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBFTlRFUkVELCBFTlRFUklORywgRVhJVElORyB9IGZyb20gJy4vVHJhbnNpdGlvbic7XG5pbXBvcnQgVHJhbnNpdGlvbkdyb3VwQ29udGV4dCBmcm9tICcuL1RyYW5zaXRpb25Hcm91cENvbnRleHQnO1xuXG5mdW5jdGlvbiBhcmVDaGlsZHJlbkRpZmZlcmVudChvbGRDaGlsZHJlbiwgbmV3Q2hpbGRyZW4pIHtcbiAgaWYgKG9sZENoaWxkcmVuID09PSBuZXdDaGlsZHJlbikgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChvbGRDaGlsZHJlbikgJiYgUmVhY3QuaXNWYWxpZEVsZW1lbnQobmV3Q2hpbGRyZW4pICYmIG9sZENoaWxkcmVuLmtleSAhPSBudWxsICYmIG9sZENoaWxkcmVuLmtleSA9PT0gbmV3Q2hpbGRyZW4ua2V5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4vKipcbiAqIEVudW0gb2YgbW9kZXMgZm9yIFN3aXRjaFRyYW5zaXRpb24gY29tcG9uZW50XG4gKiBAZW51bSB7IHN0cmluZyB9XG4gKi9cblxuXG5leHBvcnQgdmFyIG1vZGVzID0ge1xuICBvdXQ6ICdvdXQtaW4nLFxuICBpbjogJ2luLW91dCdcbn07XG5cbnZhciBjYWxsSG9vayA9IGZ1bmN0aW9uIGNhbGxIb29rKGVsZW1lbnQsIG5hbWUsIGNiKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9lbGVtZW50JHByb3BzO1xuXG4gICAgZWxlbWVudC5wcm9wc1tuYW1lXSAmJiAoX2VsZW1lbnQkcHJvcHMgPSBlbGVtZW50LnByb3BzKVtuYW1lXS5hcHBseShfZWxlbWVudCRwcm9wcywgYXJndW1lbnRzKTtcbiAgICBjYigpO1xuICB9O1xufTtcblxudmFyIGxlYXZlUmVuZGVycyA9IChfbGVhdmVSZW5kZXJzID0ge30sIF9sZWF2ZVJlbmRlcnNbbW9kZXMub3V0XSA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBjdXJyZW50ID0gX3JlZi5jdXJyZW50LFxuICAgICAgY2hhbmdlU3RhdGUgPSBfcmVmLmNoYW5nZVN0YXRlO1xuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGN1cnJlbnQsIHtcbiAgICBpbjogZmFsc2UsXG4gICAgb25FeGl0ZWQ6IGNhbGxIb29rKGN1cnJlbnQsICdvbkV4aXRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoYW5nZVN0YXRlKEVOVEVSSU5HLCBudWxsKTtcbiAgICB9KVxuICB9KTtcbn0sIF9sZWF2ZVJlbmRlcnNbbW9kZXMuaW5dID0gZnVuY3Rpb24gKF9yZWYyKSB7XG4gIHZhciBjdXJyZW50ID0gX3JlZjIuY3VycmVudCxcbiAgICAgIGNoYW5nZVN0YXRlID0gX3JlZjIuY2hhbmdlU3RhdGUsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYyLmNoaWxkcmVuO1xuICByZXR1cm4gW2N1cnJlbnQsIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgIGluOiB0cnVlLFxuICAgIG9uRW50ZXJlZDogY2FsbEhvb2soY2hpbGRyZW4sICdvbkVudGVyZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGFuZ2VTdGF0ZShFTlRFUklORyk7XG4gICAgfSlcbiAgfSldO1xufSwgX2xlYXZlUmVuZGVycyk7XG52YXIgZW50ZXJSZW5kZXJzID0gKF9lbnRlclJlbmRlcnMgPSB7fSwgX2VudGVyUmVuZGVyc1ttb2Rlcy5vdXRdID0gZnVuY3Rpb24gKF9yZWYzKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYzLmNoaWxkcmVuLFxuICAgICAgY2hhbmdlU3RhdGUgPSBfcmVmMy5jaGFuZ2VTdGF0ZTtcbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgIGluOiB0cnVlLFxuICAgIG9uRW50ZXJlZDogY2FsbEhvb2soY2hpbGRyZW4sICdvbkVudGVyZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGFuZ2VTdGF0ZShFTlRFUkVELCBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICAgICAgaW46IHRydWVcbiAgICAgIH0pKTtcbiAgICB9KVxuICB9KTtcbn0sIF9lbnRlclJlbmRlcnNbbW9kZXMuaW5dID0gZnVuY3Rpb24gKF9yZWY0KSB7XG4gIHZhciBjdXJyZW50ID0gX3JlZjQuY3VycmVudCxcbiAgICAgIGNoaWxkcmVuID0gX3JlZjQuY2hpbGRyZW4sXG4gICAgICBjaGFuZ2VTdGF0ZSA9IF9yZWY0LmNoYW5nZVN0YXRlO1xuICByZXR1cm4gW1JlYWN0LmNsb25lRWxlbWVudChjdXJyZW50LCB7XG4gICAgaW46IGZhbHNlLFxuICAgIG9uRXhpdGVkOiBjYWxsSG9vayhjdXJyZW50LCAnb25FeGl0ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGFuZ2VTdGF0ZShFTlRFUkVELCBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICAgICAgaW46IHRydWVcbiAgICAgIH0pKTtcbiAgICB9KVxuICB9KSwgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgaW46IHRydWVcbiAgfSldO1xufSwgX2VudGVyUmVuZGVycyk7XG4vKipcbiAqIEEgdHJhbnNpdGlvbiBjb21wb25lbnQgaW5zcGlyZWQgYnkgdGhlIFt2dWUgdHJhbnNpdGlvbiBtb2Rlc10oaHR0cHM6Ly92dWVqcy5vcmcvdjIvZ3VpZGUvdHJhbnNpdGlvbnMuaHRtbCNUcmFuc2l0aW9uLU1vZGVzKS5cbiAqIFlvdSBjYW4gdXNlIGl0IHdoZW4geW91IHdhbnQgdG8gY29udHJvbCB0aGUgcmVuZGVyIGJldHdlZW4gc3RhdGUgdHJhbnNpdGlvbnMuXG4gKiBCYXNlZCBvbiB0aGUgc2VsZWN0ZWQgbW9kZSBhbmQgdGhlIGNoaWxkJ3Mga2V5IHdoaWNoIGlzIHRoZSBgVHJhbnNpdGlvbmAgb3IgYENTU1RyYW5zaXRpb25gIGNvbXBvbmVudCwgdGhlIGBTd2l0Y2hUcmFuc2l0aW9uYCBtYWtlcyBhIGNvbnNpc3RlbnQgdHJhbnNpdGlvbiBiZXR3ZWVuIHRoZW0uXG4gKlxuICogSWYgdGhlIGBvdXQtaW5gIG1vZGUgaXMgc2VsZWN0ZWQsIHRoZSBgU3dpdGNoVHJhbnNpdGlvbmAgd2FpdHMgdW50aWwgdGhlIG9sZCBjaGlsZCBsZWF2ZXMgYW5kIHRoZW4gaW5zZXJ0cyBhIG5ldyBjaGlsZC5cbiAqIElmIHRoZSBgaW4tb3V0YCBtb2RlIGlzIHNlbGVjdGVkLCB0aGUgYFN3aXRjaFRyYW5zaXRpb25gIGluc2VydHMgYSBuZXcgY2hpbGQgZmlyc3QsIHdhaXRzIGZvciB0aGUgbmV3IGNoaWxkIHRvIGVudGVyIGFuZCB0aGVuIHJlbW92ZXMgdGhlIG9sZCBjaGlsZC5cbiAqXG4gKiAqKk5vdGUqKjogSWYgeW91IHdhbnQgdGhlIGFuaW1hdGlvbiB0byBoYXBwZW4gc2ltdWx0YW5lb3VzbHlcbiAqICh0aGF0IGlzLCB0byBoYXZlIHRoZSBvbGQgY2hpbGQgcmVtb3ZlZCBhbmQgYSBuZXcgY2hpbGQgaW5zZXJ0ZWQgKiphdCB0aGUgc2FtZSB0aW1lKiopLFxuICogeW91IHNob3VsZCB1c2VcbiAqIFtgVHJhbnNpdGlvbkdyb3VwYF0oaHR0cHM6Ly9yZWFjdGNvbW11bml0eS5vcmcvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC90cmFuc2l0aW9uLWdyb3VwKVxuICogaW5zdGVhZC5cbiAqXG4gKiBgYGBqc3hcbiAqIGZ1bmN0aW9uIEFwcCgpIHtcbiAqICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAqICByZXR1cm4gKFxuICogICAgPFN3aXRjaFRyYW5zaXRpb24+XG4gKiAgICAgIDxDU1NUcmFuc2l0aW9uXG4gKiAgICAgICAga2V5PXtzdGF0ZSA/IFwiR29vZGJ5ZSwgd29ybGQhXCIgOiBcIkhlbGxvLCB3b3JsZCFcIn1cbiAqICAgICAgICBhZGRFbmRMaXN0ZW5lcj17KG5vZGUsIGRvbmUpID0+IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZG9uZSwgZmFsc2UpfVxuICogICAgICAgIGNsYXNzTmFtZXM9J2ZhZGUnXG4gKiAgICAgID5cbiAqICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFN0YXRlKHN0YXRlID0+ICFzdGF0ZSl9PlxuICogICAgICAgICAge3N0YXRlID8gXCJHb29kYnllLCB3b3JsZCFcIiA6IFwiSGVsbG8sIHdvcmxkIVwifVxuICogICAgICAgIDwvYnV0dG9uPlxuICogICAgICA8L0NTU1RyYW5zaXRpb24+XG4gKiAgICA8L1N3aXRjaFRyYW5zaXRpb24+XG4gKiAgKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIGBgYGNzc1xuICogLmZhZGUtZW50ZXJ7XG4gKiAgICBvcGFjaXR5OiAwO1xuICogfVxuICogLmZhZGUtZXhpdHtcbiAqICAgIG9wYWNpdHk6IDE7XG4gKiB9XG4gKiAuZmFkZS1lbnRlci1hY3RpdmV7XG4gKiAgICBvcGFjaXR5OiAxO1xuICogfVxuICogLmZhZGUtZXhpdC1hY3RpdmV7XG4gKiAgICBvcGFjaXR5OiAwO1xuICogfVxuICogLmZhZGUtZW50ZXItYWN0aXZlLFxuICogLmZhZGUtZXhpdC1hY3RpdmV7XG4gKiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zO1xuICogfVxuICogYGBgXG4gKi9cblxudmFyIFN3aXRjaFRyYW5zaXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoU3dpdGNoVHJhbnNpdGlvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU3dpdGNoVHJhbnNpdGlvbigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0YXR1czogRU5URVJFRCxcbiAgICAgIGN1cnJlbnQ6IG51bGxcbiAgICB9O1xuICAgIF90aGlzLmFwcGVhcmVkID0gZmFsc2U7XG5cbiAgICBfdGhpcy5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0dXMsIGN1cnJlbnQpIHtcbiAgICAgIGlmIChjdXJyZW50ID09PSB2b2lkIDApIHtcbiAgICAgICAgY3VycmVudCA9IF90aGlzLnN0YXRlLmN1cnJlbnQ7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgIGN1cnJlbnQ6IGN1cnJlbnRcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3dpdGNoVHJhbnNpdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5hcHBlYXJlZCA9IHRydWU7XG4gIH07XG5cbiAgU3dpdGNoVHJhbnNpdGlvbi5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgaWYgKHByb3BzLmNoaWxkcmVuID09IG51bGwpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnQ6IG51bGxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnN0YXR1cyA9PT0gRU5URVJJTkcgJiYgcHJvcHMubW9kZSA9PT0gbW9kZXMuaW4pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogRU5URVJJTkdcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmN1cnJlbnQgJiYgYXJlQ2hpbGRyZW5EaWZmZXJlbnQoc3RhdGUuY3VycmVudCwgcHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6IEVYSVRJTkdcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnQ6IFJlYWN0LmNsb25lRWxlbWVudChwcm9wcy5jaGlsZHJlbiwge1xuICAgICAgICBpbjogdHJ1ZVxuICAgICAgfSlcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgbW9kZSA9IF90aGlzJHByb3BzLm1vZGUsXG4gICAgICAgIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgc3RhdHVzID0gX3RoaXMkc3RhdGUuc3RhdHVzLFxuICAgICAgICBjdXJyZW50ID0gX3RoaXMkc3RhdGUuY3VycmVudDtcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICAgIGN1cnJlbnQ6IGN1cnJlbnQsXG4gICAgICBjaGFuZ2VTdGF0ZTogdGhpcy5jaGFuZ2VTdGF0ZSxcbiAgICAgIHN0YXR1czogc3RhdHVzXG4gICAgfTtcbiAgICB2YXIgY29tcG9uZW50O1xuXG4gICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgIGNhc2UgRU5URVJJTkc6XG4gICAgICAgIGNvbXBvbmVudCA9IGVudGVyUmVuZGVyc1ttb2RlXShkYXRhKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRVhJVElORzpcbiAgICAgICAgY29tcG9uZW50ID0gbGVhdmVSZW5kZXJzW21vZGVdKGRhdGEpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBFTlRFUkVEOlxuICAgICAgICBjb21wb25lbnQgPSBjdXJyZW50O1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uR3JvdXBDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICBpc01vdW50aW5nOiAhdGhpcy5hcHBlYXJlZFxuICAgICAgfVxuICAgIH0sIGNvbXBvbmVudCk7XG4gIH07XG5cbiAgcmV0dXJuIFN3aXRjaFRyYW5zaXRpb247XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblN3aXRjaFRyYW5zaXRpb24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogVHJhbnNpdGlvbiBtb2Rlcy5cbiAgICogYG91dC1pbmA6IEN1cnJlbnQgZWxlbWVudCB0cmFuc2l0aW9ucyBvdXQgZmlyc3QsIHRoZW4gd2hlbiBjb21wbGV0ZSwgdGhlIG5ldyBlbGVtZW50IHRyYW5zaXRpb25zIGluLlxuICAgKiBgaW4tb3V0YDogTmV3IGVsZW1lbnQgdHJhbnNpdGlvbnMgaW4gZmlyc3QsIHRoZW4gd2hlbiBjb21wbGV0ZSwgdGhlIGN1cnJlbnQgZWxlbWVudCB0cmFuc2l0aW9ucyBvdXQuXG4gICAqXG4gICAqIEB0eXBlIHsnb3V0LWluJ3wnaW4tb3V0J31cbiAgICovXG4gIG1vZGU6IFByb3BUeXBlcy5vbmVPZihbbW9kZXMuaW4sIG1vZGVzLm91dF0pLFxuXG4gIC8qKlxuICAgKiBBbnkgYFRyYW5zaXRpb25gIG9yIGBDU1NUcmFuc2l0aW9uYCBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZF0pXG59IDoge307XG5Td2l0Y2hUcmFuc2l0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgbW9kZTogbW9kZXMub3V0XG59O1xuZXhwb3J0IGRlZmF1bHQgU3dpdGNoVHJhbnNpdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL1N3aXRjaFRyYW5zaXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBSb3dUZW1wbGF0ZSBmcm9tICcuL3Jvdy9yb3ctdGVtcGxhdGUnO1xuaW1wb3J0IEZvb3RlckNlbGwgZnJvbSAnLi9mb290ZXItY2VsbCc7XG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgRm9vdGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgY2xhc3NOYW1lLCBjb2x1bW5zLCBzZWxlY3RSb3csIGV4cGFuZFJvdyB9ID0gcHJvcHM7XG5cbiAgZnVuY3Rpb24gcmVuZGVyQ29udGVudCgpIHtcbiAgICByZXR1cm4gY29sdW1ucy5tYXAoKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgaWYgKGNvbHVtbi5mb290ZXIgPT09IHVuZGVmaW5lZCB8fCBjb2x1bW4uZm9vdGVyID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29sdW1uRGF0YSA9IF8ucGx1Y2soZGF0YSwgY29sdW1uLmRhdGFGaWVsZCk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGb290ZXJDZWxsXG4gICAgICAgICAgaW5kZXg9eyBpIH1cbiAgICAgICAgICBrZXk9eyBjb2x1bW4uZGF0YUZpZWxkIH1cbiAgICAgICAgICBjb2x1bW49eyBjb2x1bW4gfVxuICAgICAgICAgIGNvbHVtbkRhdGE9eyBjb2x1bW5EYXRhIH1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx0Zm9vdD5cbiAgICAgIDxSb3dUZW1wbGF0ZVxuICAgICAgICByZW5kZXJDb250ZW50PXsgcmVuZGVyQ29udGVudCB9XG4gICAgICAgIHNlbGVjdFJvdz17IHNlbGVjdFJvdyB9XG4gICAgICAgIGV4cGFuZFJvdz17IGV4cGFuZFJvdyB9XG4gICAgICAgIGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG4gICAgICAgIGNlbGxFbD1cInRoXCJcbiAgICAgIC8+XG4gICAgPC90Zm9vdD5cbiAgKTtcbn07XG5cbkZvb3Rlci5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXksXG4gIHNlbGVjdFJvdzogUHJvcFR5cGVzLm9iamVjdCxcbiAgZXhwYW5kUm93OiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9mb290ZXIuanMiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IF8gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgZXZlbnREZWxlZ2F0ZXIgZnJvbSAnLi9jZWxsLWV2ZW50LWRlbGVnYXRlcic7XG5cbmNsYXNzIEZvb3RlckNlbGwgZXh0ZW5kcyBldmVudERlbGVnYXRlcihSZWFjdC5Db21wb25lbnQpIHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW5kZXgsIGNvbHVtbiwgY29sdW1uRGF0YSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHtcbiAgICAgIGZvb3RlcixcbiAgICAgIGZvb3RlclRpdGxlLFxuICAgICAgZm9vdGVyQWxpZ24sXG4gICAgICBmb290ZXJGb3JtYXR0ZXIsXG4gICAgICBmb290ZXJFdmVudHMsXG4gICAgICBmb290ZXJDbGFzc2VzLFxuICAgICAgZm9vdGVyU3R5bGUsXG4gICAgICBmb290ZXJBdHRyc1xuICAgIH0gPSBjb2x1bW47XG5cbiAgICBjb25zdCBkZWxlZ2F0ZUV2ZW50cyA9IHRoaXMuZGVsZWdhdGUoZm9vdGVyRXZlbnRzKTtcbiAgICBjb25zdCBjZWxsQXR0cnMgPSB7XG4gICAgICAuLi4oXy5pc0Z1bmN0aW9uKGZvb3RlckF0dHJzKSA/IGZvb3RlckF0dHJzKGNvbHVtbiwgaW5kZXgpIDogZm9vdGVyQXR0cnMpLFxuICAgICAgLi4uZGVsZWdhdGVFdmVudHNcbiAgICB9O1xuXG5cbiAgICBsZXQgdGV4dCA9ICcnO1xuICAgIGlmIChfLmlzU3RyaW5nKGZvb3RlcikpIHtcbiAgICAgIHRleHQgPSBmb290ZXI7XG4gICAgfSBlbHNlIGlmIChfLmlzRnVuY3Rpb24oZm9vdGVyKSkge1xuICAgICAgdGV4dCA9IGZvb3Rlcihjb2x1bW5EYXRhLCBjb2x1bW4sIGluZGV4KTtcbiAgICB9XG5cbiAgICBsZXQgY2VsbFN0eWxlID0ge307XG4gICAgY29uc3QgY2VsbENsYXNzZXMgPSBfLmlzRnVuY3Rpb24oZm9vdGVyQ2xhc3NlcykgPyBmb290ZXJDbGFzc2VzKGNvbHVtbiwgaW5kZXgpIDogZm9vdGVyQ2xhc3NlcztcblxuICAgIGlmIChmb290ZXJTdHlsZSkge1xuICAgICAgY2VsbFN0eWxlID0gXy5pc0Z1bmN0aW9uKGZvb3RlclN0eWxlKSA/IGZvb3RlclN0eWxlKGNvbHVtbiwgaW5kZXgpIDogZm9vdGVyU3R5bGU7XG4gICAgICBjZWxsU3R5bGUgPSBjZWxsU3R5bGUgPyB7IC4uLmNlbGxTdHlsZSB9IDogY2VsbFN0eWxlO1xuICAgIH1cblxuICAgIGlmIChmb290ZXJUaXRsZSkge1xuICAgICAgY2VsbEF0dHJzLnRpdGxlID0gXy5pc0Z1bmN0aW9uKGZvb3RlclRpdGxlKSA/IGZvb3RlclRpdGxlKGNvbHVtbiwgaW5kZXgpIDogdGV4dDtcbiAgICB9XG5cbiAgICBpZiAoZm9vdGVyQWxpZ24pIHtcbiAgICAgIGNlbGxTdHlsZS50ZXh0QWxpZ24gPSBfLmlzRnVuY3Rpb24oZm9vdGVyQWxpZ24pID8gZm9vdGVyQWxpZ24oY29sdW1uLCBpbmRleCkgOiBmb290ZXJBbGlnbjtcbiAgICB9XG5cbiAgICBpZiAoY2VsbENsYXNzZXMpIGNlbGxBdHRycy5jbGFzc05hbWUgPSBjcyhjZWxsQXR0cnMuY2xhc3NOYW1lLCBjZWxsQ2xhc3Nlcyk7XG4gICAgaWYgKCFfLmlzRW1wdHlPYmplY3QoY2VsbFN0eWxlKSkgY2VsbEF0dHJzLnN0eWxlID0gY2VsbFN0eWxlO1xuXG4gICAgY29uc3QgY2hpbGRyZW4gPSBmb290ZXJGb3JtYXR0ZXIgPyBmb290ZXJGb3JtYXR0ZXIoY29sdW1uLCBpbmRleCwgeyB0ZXh0IH0pIDogdGV4dDtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCd0aCcsIGNlbGxBdHRycywgY2hpbGRyZW4pO1xuICB9XG59XG5cbkZvb3RlckNlbGwucHJvcFR5cGVzID0ge1xuICBjb2x1bW5EYXRhOiBQcm9wVHlwZXMuYXJyYXksXG4gIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2x1bW46IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlckNlbGw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9mb290ZXItY2VsbC5qcyIsImltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBDb2x1bW5SZXNvbHZlciBmcm9tICcuL2NvbHVtbi1yZXNvbHZlcic7XG5cbmV4cG9ydCBkZWZhdWx0IEV4dGVuZEJhc2UgPT5cbiAgY2xhc3MgVGFibGVSZXNvbHZlciBleHRlbmRzIENvbHVtblJlc29sdmVyKEV4dGVuZEJhc2UpIHtcbiAgICB2YWxpZGF0ZVByb3BzKCkge1xuICAgICAgY29uc3QgeyBrZXlGaWVsZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGlmICgha2V5RmllbGQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2Ugc3BlY2lmeSBhIGZpZWxkIGFzIGtleSB2aWEga2V5RmllbGQnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnZpc2libGVDb2x1bW5TaXplKGZhbHNlKSA8PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gdmlzaWJsZSBjb2x1bW5zIGRldGVjdGVkJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaXNFbXB0eSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGEubGVuZ3RoID09PSAwO1xuICAgIH1cblxuICAgIHZpc2libGVSb3dzKCkge1xuICAgICAgY29uc3QgeyBkYXRhLCBoaWRkZW5Sb3dzLCBrZXlGaWVsZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGlmICghaGlkZGVuUm93cyB8fCBoaWRkZW5Sb3dzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGRhdGE7XG4gICAgICByZXR1cm4gZGF0YS5maWx0ZXIoKHJvdykgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBfLmdldChyb3csIGtleUZpZWxkKTtcbiAgICAgICAgcmV0dXJuICFfLmNvbnRhaW5zKGhpZGRlblJvd3MsIGtleSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9wcm9wcy1yZXNvbHZlci9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IEV4dGVuZEJhc2UgPT5cbiAgY2xhc3MgQ29sdW1uUmVzb2x2ZXIgZXh0ZW5kcyBFeHRlbmRCYXNlIHtcbiAgICB2aXNpYmxlQ29sdW1uU2l6ZShpbmNsdWRlU2VsZWN0Q29sdW1uID0gdHJ1ZSkge1xuICAgICAgbGV0IGNvbHVtbkxlbjtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNvbHVtblRvZ2dsZSAmJiB0aGlzLnByb3BzLmNvbHVtblRvZ2dsZS50b2dnbGVzKSB7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSB0aGlzLnByb3BzLmNvbHVtblRvZ2dsZS50b2dnbGVzO1xuICAgICAgICBjb2x1bW5MZW4gPSBPYmplY3Qua2V5cyhjb2x1bW5zKS5maWx0ZXIobmFtZSA9PiBjb2x1bW5zW25hbWVdKS5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2x1bW5MZW4gPSB0aGlzLnByb3BzLmNvbHVtbnMuZmlsdGVyKGMgPT4gIWMuaGlkZGVuKS5sZW5ndGg7XG4gICAgICB9XG4gICAgICBpZiAoIWluY2x1ZGVTZWxlY3RDb2x1bW4pIHJldHVybiBjb2x1bW5MZW47XG4gICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RSb3cgJiYgIXRoaXMucHJvcHMuc2VsZWN0Um93LmhpZGVTZWxlY3RDb2x1bW4pIHtcbiAgICAgICAgY29sdW1uTGVuICs9IDE7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5leHBhbmRSb3cgJiYgdGhpcy5wcm9wcy5leHBhbmRSb3cuc2hvd0V4cGFuZENvbHVtbikge1xuICAgICAgICBjb2x1bW5MZW4gKz0gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb2x1bW5MZW47XG4gICAgfVxuICB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcHJvcHMtcmVzb2x2ZXIvY29sdW1uLXJlc29sdmVyLmpzIiwiLyogZXNsaW50IGNhbWVsY2FzZTogMCAqL1xuLyogZXNsaW50IG5vLXJldHVybi1hc3NpZ246IDAgKi9cbi8qIGVzbGludCBuby1wYXJhbS1yZWFzc2lnbjogMCAqL1xuLyogZXNsaW50IGNsYXNzLW1ldGhvZHMtdXNlLXRoaXM6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50cyc7XG5pbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgY3JlYXRlRGF0YUNvbnRleHQgZnJvbSAnLi9kYXRhLWNvbnRleHQnO1xuaW1wb3J0IGNyZWF0ZUNvbHVtbk1ndENvbnRleHQgZnJvbSAnLi9jb2x1bW4tY29udGV4dCc7XG5pbXBvcnQgY3JlYXRlU29ydENvbnRleHQgZnJvbSAnLi9zb3J0LWNvbnRleHQnO1xuaW1wb3J0IFNlbGVjdGlvbkNvbnRleHQgZnJvbSAnLi9zZWxlY3Rpb24tY29udGV4dCc7XG5pbXBvcnQgUm93RXhwYW5kQ29udGV4dCBmcm9tICcuL3Jvdy1leHBhbmQtY29udGV4dCc7XG5pbXBvcnQgcmVtb3RlUmVzb2x2ZXIgZnJvbSAnLi4vcHJvcHMtcmVzb2x2ZXIvcmVtb3RlLXJlc29sdmVyJztcbmltcG9ydCB7IEJvb3RzdHJhcENvbnRleHQgfSBmcm9tICcuL2Jvb3RzdHJhcCc7XG5pbXBvcnQgZGF0YU9wZXJhdG9yIGZyb20gJy4uL3N0b3JlL29wZXJhdG9ycyc7XG5cbmNvbnN0IHdpdGhDb250ZXh0ID0gQmFzZSA9PlxuICBjbGFzcyBCb290c3RyYXBUYWJsZUNvbnRhaW5lciBleHRlbmRzIHJlbW90ZVJlc29sdmVyKENvbXBvbmVudCkge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLkRhdGFDb250ZXh0ID0gY3JlYXRlRGF0YUNvbnRleHQoKTtcblxuICAgICAgaWYgKHByb3BzLnJlZ2lzdGVyRXhwb3NlZEFQSSkge1xuICAgICAgICBjb25zdCBleHBvc2VkQVBJRW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgZXhwb3NlZEFQSUVtaXR0ZXIub24oJ2dldC50YWJsZS5kYXRhJywgcGF5bG9hZCA9PiBwYXlsb2FkLnJlc3VsdCA9IHRoaXMudGFibGUuZ2V0RGF0YSgpKTtcbiAgICAgICAgZXhwb3NlZEFQSUVtaXR0ZXIub24oJ2dldC5zZWxlY3RlZC5yb3dzJywgcGF5bG9hZCA9PiBwYXlsb2FkLnJlc3VsdCA9IHRoaXMuc2VsZWN0aW9uQ29udGV4dC5nZXRTZWxlY3RlZCgpKTtcbiAgICAgICAgZXhwb3NlZEFQSUVtaXR0ZXIub24oJ2dldC5maWx0ZXJlZC5yb3dzJywgKHBheWxvYWQpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5zZWFyY2hDb250ZXh0KSB7XG4gICAgICAgICAgICBwYXlsb2FkLnJlc3VsdCA9IHRoaXMuc2VhcmNoQ29udGV4dC5nZXRTZWFyY2hlZCgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5maWx0ZXJDb250ZXh0KSB7XG4gICAgICAgICAgICBwYXlsb2FkLnJlc3VsdCA9IHRoaXMuZmlsdGVyQ29udGV4dC5nZXRGaWx0ZXJlZCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXlsb2FkLnJlc3VsdCA9IHRoaXMudGFibGUuZ2V0RGF0YSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHByb3BzLnJlZ2lzdGVyRXhwb3NlZEFQSShleHBvc2VkQVBJRW1pdHRlcik7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5jb2x1bW5zLmZpbHRlcihjb2wgPT4gY29sLnNvcnQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5Tb3J0Q29udGV4dCA9IGNyZWF0ZVNvcnRDb250ZXh0KFxuICAgICAgICAgIGRhdGFPcGVyYXRvciwgdGhpcy5pc1JlbW90ZVNvcnQsIHRoaXMuaGFuZGxlUmVtb3RlU29ydENoYW5nZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMuY29sdW1uVG9nZ2xlIHx8XG4gICAgICAgIHByb3BzLmNvbHVtbnMuZmlsdGVyKGNvbCA9PiBjb2wuaGlkZGVuKS5sZW5ndGggPiAwXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5Db2x1bW5NYW5hZ2VtZW50Q29udGV4dCA9IGNyZWF0ZUNvbHVtbk1ndENvbnRleHQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLnNlbGVjdFJvdykge1xuICAgICAgICB0aGlzLlNlbGVjdGlvbkNvbnRleHQgPSBTZWxlY3Rpb25Db250ZXh0O1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuZXhwYW5kUm93KSB7XG4gICAgICAgIHRoaXMuUm93RXhwYW5kQ29udGV4dCA9IFJvd0V4cGFuZENvbnRleHQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5jZWxsRWRpdCAmJiBwcm9wcy5jZWxsRWRpdC5jcmVhdGVDb250ZXh0KSB7XG4gICAgICAgIHRoaXMuQ2VsbEVkaXRDb250ZXh0ID0gcHJvcHMuY2VsbEVkaXQuY3JlYXRlQ29udGV4dChcbiAgICAgICAgICBfLCBkYXRhT3BlcmF0b3IsIHRoaXMuaXNSZW1vdGVDZWxsRWRpdCwgdGhpcy5oYW5kbGVSZW1vdGVDZWxsQ2hhbmdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLmZpbHRlcikge1xuICAgICAgICB0aGlzLkZpbHRlckNvbnRleHQgPSBwcm9wcy5maWx0ZXIuY3JlYXRlQ29udGV4dChcbiAgICAgICAgICBfLCB0aGlzLmlzUmVtb3RlRmlsdGVyaW5nLCB0aGlzLmhhbmRsZVJlbW90ZUZpbHRlckNoYW5nZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5wYWdpbmF0aW9uKSB7XG4gICAgICAgIHRoaXMuUGFnaW5hdGlvbkNvbnRleHQgPSBwcm9wcy5wYWdpbmF0aW9uLmNyZWF0ZUNvbnRleHQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLnNlYXJjaCAmJiBwcm9wcy5zZWFyY2guc2VhcmNoQ29udGV4dCkge1xuICAgICAgICB0aGlzLlNlYXJjaENvbnRleHQgPSBwcm9wcy5zZWFyY2guc2VhcmNoQ29udGV4dChcbiAgICAgICAgICBfLCB0aGlzLmlzUmVtb3RlU2VhcmNoLCB0aGlzLmhhbmRsZVJlbW90ZVNlYXJjaENoYW5nZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5zZXREZXBlbmRlbmN5TW9kdWxlcykge1xuICAgICAgICBwcm9wcy5zZXREZXBlbmRlbmN5TW9kdWxlcyhfKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLnNldFBhZ2luYXRpb25SZW1vdGVFbWl0dGVyKSB7XG4gICAgICAgIHByb3BzLnNldFBhZ2luYXRpb25SZW1vdGVFbWl0dGVyKHRoaXMucmVtb3RlRW1pdHRlcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAobmV4dFByb3BzLmNvbHVtbnMuZmlsdGVyKGNvbCA9PiBjb2wuc29ydCkubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgdGhpcy5Tb3J0Q29udGV4dCA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLlNvcnRDb250ZXh0KSB7XG4gICAgICAgIHRoaXMuU29ydENvbnRleHQgPSBjcmVhdGVTb3J0Q29udGV4dChcbiAgICAgICAgICBkYXRhT3BlcmF0b3IsIHRoaXMuaXNSZW1vdGVTb3J0LCB0aGlzLmhhbmRsZVJlbW90ZVNvcnRDaGFuZ2UpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0UHJvcHMucGFnaW5hdGlvbiAmJiB0aGlzLnByb3BzLnBhZ2luYXRpb24pIHtcbiAgICAgICAgdGhpcy5QYWdpbmF0aW9uQ29udGV4dCA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAobmV4dFByb3BzLnBhZ2luYXRpb24gJiYgIXRoaXMucHJvcHMucGFnaW5hdGlvbikge1xuICAgICAgICB0aGlzLlBhZ2luYXRpb25Db250ZXh0ID0gbmV4dFByb3BzLnBhZ2luYXRpb24uY3JlYXRlQ29udGV4dChcbiAgICAgICAgICB0aGlzLmlzUmVtb3RlUGFnaW5hdGlvbiwgdGhpcy5oYW5kbGVSZW1vdGVQYWdlQ2hhbmdlKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dFByb3BzLmNlbGxFZGl0ICYmIHRoaXMucHJvcHMuY2VsbEVkaXQpIHtcbiAgICAgICAgdGhpcy5DZWxsRWRpdENvbnRleHQgPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRQcm9wcy5jZWxsRWRpdCAmJiAhdGhpcy5wcm9wcy5jZWxsRWRpdCkge1xuICAgICAgICB0aGlzLkNlbGxFZGl0Q29udGV4dCA9IG5leHRQcm9wcy5jZWxsRWRpdC5jcmVhdGVDb250ZXh0KFxuICAgICAgICAgIF8sIGRhdGFPcGVyYXRvciwgdGhpcy5pc1JlbW90ZUNlbGxFZGl0LCB0aGlzLmhhbmRsZVJlbW90ZUNlbGxDaGFuZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckJhc2UoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICByb290UHJvcHMsXG4gICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgc29ydFByb3BzLFxuICAgICAgICBwYWdpbmF0aW9uUHJvcHMsXG4gICAgICAgIGNvbHVtblRvZ2dsZVByb3BzXG4gICAgICApID0+IChcbiAgICAgICAgPEJhc2VcbiAgICAgICAgICByZWY9eyBuID0+IHRoaXMudGFibGUgPSBuIH1cbiAgICAgICAgICB7IC4uLnRoaXMucHJvcHMgfVxuICAgICAgICAgIHsgLi4uc29ydFByb3BzIH1cbiAgICAgICAgICB7IC4uLmZpbHRlclByb3BzIH1cbiAgICAgICAgICB7IC4uLnNlYXJjaFByb3BzIH1cbiAgICAgICAgICB7IC4uLnBhZ2luYXRpb25Qcm9wcyB9XG4gICAgICAgICAgeyAuLi5jb2x1bW5Ub2dnbGVQcm9wcyB9XG4gICAgICAgICAgZGF0YT17IHJvb3RQcm9wcy5nZXREYXRhKGZpbHRlclByb3BzLCBzZWFyY2hQcm9wcywgc29ydFByb3BzLCBwYWdpbmF0aW9uUHJvcHMpIH1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyV2l0aENvbHVtbk1hbmFnZW1lbnRDdHgoYmFzZSwgYmFzZVByb3BzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICByb290UHJvcHMsXG4gICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgc29ydFByb3BzLFxuICAgICAgICBwYWdpbmF0aW9uUHJvcHNcbiAgICAgICkgPT4gKFxuICAgICAgICA8dGhpcy5Db2x1bW5NYW5hZ2VtZW50Q29udGV4dC5Qcm92aWRlclxuICAgICAgICAgIHsgLi4uYmFzZVByb3BzIH1cbiAgICAgICAgICB0b2dnbGVzPXsgdGhpcy5wcm9wcy5jb2x1bW5Ub2dnbGUgPyB0aGlzLnByb3BzLmNvbHVtblRvZ2dsZS50b2dnbGVzIDogbnVsbCB9XG4gICAgICAgID5cbiAgICAgICAgICA8dGhpcy5Db2x1bW5NYW5hZ2VtZW50Q29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29sdW1uVG9nZ2xlUHJvcHMgPT4gYmFzZShcbiAgICAgICAgICAgICAgICByb290UHJvcHMsXG4gICAgICAgICAgICAgICAgZmlsdGVyUHJvcHMsXG4gICAgICAgICAgICAgICAgc2VhcmNoUHJvcHMsXG4gICAgICAgICAgICAgICAgc29ydFByb3BzLFxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb25Qcm9wcyxcbiAgICAgICAgICAgICAgICBjb2x1bW5Ub2dnbGVQcm9wc1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC90aGlzLkNvbHVtbk1hbmFnZW1lbnRDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICA8L3RoaXMuQ29sdW1uTWFuYWdlbWVudENvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcldpdGhTZWxlY3Rpb25DdHgoYmFzZSwgYmFzZVByb3BzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICByb290UHJvcHMsXG4gICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgc29ydFByb3BzLFxuICAgICAgICBwYWdpbmF0aW9uUHJvcHNcbiAgICAgICkgPT4gKFxuICAgICAgICA8dGhpcy5TZWxlY3Rpb25Db250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgeyAuLi5iYXNlUHJvcHMgfVxuICAgICAgICAgIHJlZj17IG4gPT4gdGhpcy5zZWxlY3Rpb25Db250ZXh0ID0gbiB9XG4gICAgICAgICAgc2VsZWN0Um93PXsgdGhpcy5wcm9wcy5zZWxlY3RSb3cgfVxuICAgICAgICAgIGRhdGE9eyByb290UHJvcHMuZ2V0RGF0YShmaWx0ZXJQcm9wcywgc2VhcmNoUHJvcHMsIHNvcnRQcm9wcywgcGFnaW5hdGlvblByb3BzKSB9XG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBiYXNlKFxuICAgICAgICAgICAgICByb290UHJvcHMsXG4gICAgICAgICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgICAgICAgc29ydFByb3BzLFxuICAgICAgICAgICAgICBwYWdpbmF0aW9uUHJvcHNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIDwvdGhpcy5TZWxlY3Rpb25Db250ZXh0LlByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJXaXRoUm93RXhwYW5kQ3R4KGJhc2UsIGJhc2VQcm9wcykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgcm9vdFByb3BzLFxuICAgICAgICBmaWx0ZXJQcm9wcyxcbiAgICAgICAgc2VhcmNoUHJvcHMsXG4gICAgICAgIHNvcnRQcm9wcyxcbiAgICAgICAgcGFnaW5hdGlvblByb3BzXG4gICAgICApID0+IChcbiAgICAgICAgPHRoaXMuUm93RXhwYW5kQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgIHsgLi4uYmFzZVByb3BzIH1cbiAgICAgICAgICByZWY9eyBuID0+IHRoaXMucm93RXhwYW5kQ29udGV4dCA9IG4gfVxuICAgICAgICAgIGV4cGFuZFJvdz17IHRoaXMucHJvcHMuZXhwYW5kUm93IH1cbiAgICAgICAgICBkYXRhPXsgcm9vdFByb3BzLmdldERhdGEoZmlsdGVyUHJvcHMsIHNlYXJjaFByb3BzLCBzb3J0UHJvcHMsIHBhZ2luYXRpb25Qcm9wcykgfVxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgYmFzZShcbiAgICAgICAgICAgICAgcm9vdFByb3BzLFxuICAgICAgICAgICAgICBmaWx0ZXJQcm9wcyxcbiAgICAgICAgICAgICAgc2VhcmNoUHJvcHMsXG4gICAgICAgICAgICAgIHNvcnRQcm9wcyxcbiAgICAgICAgICAgICAgcGFnaW5hdGlvblByb3BzXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L3RoaXMuUm93RXhwYW5kQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyV2l0aFBhZ2luYXRpb25DdHgoYmFzZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgcm9vdFByb3BzLFxuICAgICAgICBmaWx0ZXJQcm9wcyxcbiAgICAgICAgc2VhcmNoUHJvcHMsXG4gICAgICAgIHNvcnRQcm9wc1xuICAgICAgKSA9PiAoXG4gICAgICAgIDx0aGlzLlBhZ2luYXRpb25Db250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgcmVmPXsgbiA9PiB0aGlzLnBhZ2luYXRpb25Db250ZXh0ID0gbiB9XG4gICAgICAgICAgcGFnaW5hdGlvbj17IHRoaXMucHJvcHMucGFnaW5hdGlvbiB9XG4gICAgICAgICAgZGF0YT17IHJvb3RQcm9wcy5nZXREYXRhKGZpbHRlclByb3BzLCBzZWFyY2hQcm9wcywgc29ydFByb3BzKSB9XG4gICAgICAgICAgYm9vdHN0cmFwND17IHRoaXMucHJvcHMuYm9vdHN0cmFwNCB9XG4gICAgICAgICAgaXNSZW1vdGVQYWdpbmF0aW9uPXsgdGhpcy5pc1JlbW90ZVBhZ2luYXRpb24gfVxuICAgICAgICAgIHJlbW90ZUVtaXR0ZXI9eyB0aGlzLnJlbW90ZUVtaXR0ZXIgfVxuICAgICAgICAgIG9uRGF0YVNpemVDaGFuZ2U9eyB0aGlzLnByb3BzLm9uRGF0YVNpemVDaGFuZ2UgfVxuICAgICAgICAgIHRhYmxlSWQ9eyB0aGlzLnByb3BzLmlkIH1cbiAgICAgICAgPlxuICAgICAgICAgIDx0aGlzLlBhZ2luYXRpb25Db250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYWdpbmF0aW9uUHJvcHMgPT4gYmFzZShcbiAgICAgICAgICAgICAgICByb290UHJvcHMsXG4gICAgICAgICAgICAgICAgZmlsdGVyUHJvcHMsXG4gICAgICAgICAgICAgICAgc2VhcmNoUHJvcHMsXG4gICAgICAgICAgICAgICAgc29ydFByb3BzLFxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb25Qcm9wc1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC90aGlzLlBhZ2luYXRpb25Db250ZXh0LkNvbnN1bWVyPlxuICAgICAgICA8L3RoaXMuUGFnaW5hdGlvbkNvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcldpdGhTb3J0Q3R4KGJhc2UsIGJhc2VQcm9wcykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgcm9vdFByb3BzLFxuICAgICAgICBmaWx0ZXJQcm9wcyxcbiAgICAgICAgc2VhcmNoUHJvcHNcbiAgICAgICkgPT4gKFxuICAgICAgICA8dGhpcy5Tb3J0Q29udGV4dC5Qcm92aWRlclxuICAgICAgICAgIHsgLi4uYmFzZVByb3BzIH1cbiAgICAgICAgICByZWY9eyBuID0+IHRoaXMuc29ydENvbnRleHQgPSBuIH1cbiAgICAgICAgICBkZWZhdWx0U29ydGVkPXsgdGhpcy5wcm9wcy5kZWZhdWx0U29ydGVkIH1cbiAgICAgICAgICBkZWZhdWx0U29ydERpcmVjdGlvbj17IHRoaXMucHJvcHMuZGVmYXVsdFNvcnREaXJlY3Rpb24gfVxuICAgICAgICAgIHNvcnQ9eyB0aGlzLnByb3BzLnNvcnQgfVxuICAgICAgICAgIGRhdGE9eyByb290UHJvcHMuZ2V0RGF0YShmaWx0ZXJQcm9wcywgc2VhcmNoUHJvcHMpIH1cbiAgICAgICAgPlxuICAgICAgICAgIDx0aGlzLlNvcnRDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzb3J0UHJvcHMgPT4gYmFzZShcbiAgICAgICAgICAgICAgICByb290UHJvcHMsXG4gICAgICAgICAgICAgICAgZmlsdGVyUHJvcHMsXG4gICAgICAgICAgICAgICAgc2VhcmNoUHJvcHMsXG4gICAgICAgICAgICAgICAgc29ydFByb3BzLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC90aGlzLlNvcnRDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICA8L3RoaXMuU29ydENvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcldpdGhTZWFyY2hDdHgoYmFzZSwgYmFzZVByb3BzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICByb290UHJvcHMsXG4gICAgICAgIGZpbHRlclByb3BzXG4gICAgICApID0+IChcbiAgICAgICAgPHRoaXMuU2VhcmNoQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgIHsgLi4uYmFzZVByb3BzIH1cbiAgICAgICAgICByZWY9eyBuID0+IHRoaXMuc2VhcmNoQ29udGV4dCA9IG4gfVxuICAgICAgICAgIGRhdGE9eyByb290UHJvcHMuZ2V0RGF0YShmaWx0ZXJQcm9wcykgfVxuICAgICAgICAgIHNlYXJjaFRleHQ9eyB0aGlzLnByb3BzLnNlYXJjaC5zZWFyY2hUZXh0IH1cbiAgICAgICAgICBkYXRhQ2hhbmdlTGlzdGVuZXI9eyB0aGlzLnByb3BzLmRhdGFDaGFuZ2VMaXN0ZW5lciB9XG4gICAgICAgID5cbiAgICAgICAgICA8dGhpcy5TZWFyY2hDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzZWFyY2hQcm9wcyA9PiBiYXNlKFxuICAgICAgICAgICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJQcm9wcyxcbiAgICAgICAgICAgICAgICBzZWFyY2hQcm9wc1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC90aGlzLlNlYXJjaENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIDwvdGhpcy5TZWFyY2hDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJXaXRoRmlsdGVyQ3R4KGJhc2UsIGJhc2VQcm9wcykge1xuICAgICAgcmV0dXJuIHJvb3RQcm9wcyA9PiAoXG4gICAgICAgIDx0aGlzLkZpbHRlckNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICB7IC4uLmJhc2VQcm9wcyB9XG4gICAgICAgICAgcmVmPXsgbiA9PiB0aGlzLmZpbHRlckNvbnRleHQgPSBuIH1cbiAgICAgICAgICBkYXRhPXsgcm9vdFByb3BzLmdldERhdGEoKSB9XG4gICAgICAgICAgZmlsdGVyPXsgdGhpcy5wcm9wcy5maWx0ZXIub3B0aW9ucyB8fCB7fSB9XG4gICAgICAgICAgZGF0YUNoYW5nZUxpc3RlbmVyPXsgdGhpcy5wcm9wcy5kYXRhQ2hhbmdlTGlzdGVuZXIgfVxuICAgICAgICA+XG4gICAgICAgICAgPHRoaXMuRmlsdGVyQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZmlsdGVyUHJvcHMgPT4gYmFzZShcbiAgICAgICAgICAgICAgICByb290UHJvcHMsXG4gICAgICAgICAgICAgICAgZmlsdGVyUHJvcHNcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvdGhpcy5GaWx0ZXJDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICA8L3RoaXMuRmlsdGVyQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyV2l0aENlbGxFZGl0Q3R4KGJhc2UsIGJhc2VQcm9wcykge1xuICAgICAgcmV0dXJuIHJvb3RQcm9wcyA9PiAoXG4gICAgICAgIDx0aGlzLkNlbGxFZGl0Q29udGV4dC5Qcm92aWRlclxuICAgICAgICAgIHsgLi4uYmFzZVByb3BzIH1cbiAgICAgICAgICByZWY9eyBuID0+IHRoaXMuY2VsbEVkaXRDb250ZXh0ID0gbiB9XG4gICAgICAgICAgc2VsZWN0Um93PXsgdGhpcy5wcm9wcy5zZWxlY3RSb3cgfVxuICAgICAgICAgIGNlbGxFZGl0PXsgdGhpcy5wcm9wcy5jZWxsRWRpdCB9XG4gICAgICAgICAgZGF0YT17IHJvb3RQcm9wcy5nZXREYXRhKCkgfVxuICAgICAgICA+XG4gICAgICAgICAgeyBiYXNlKHJvb3RQcm9wcykgfVxuICAgICAgICA8L3RoaXMuQ2VsbEVkaXRDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IGtleUZpZWxkLCBjb2x1bW5zLCBib290c3RyYXA0IH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgYmFzZVByb3BzID0geyBrZXlGaWVsZCwgY29sdW1ucyB9O1xuXG4gICAgICBsZXQgYmFzZSA9IHRoaXMucmVuZGVyQmFzZSgpO1xuXG4gICAgICBpZiAodGhpcy5Db2x1bW5NYW5hZ2VtZW50Q29udGV4dCkge1xuICAgICAgICBiYXNlID0gdGhpcy5yZW5kZXJXaXRoQ29sdW1uTWFuYWdlbWVudEN0eChiYXNlLCBiYXNlUHJvcHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5TZWxlY3Rpb25Db250ZXh0KSB7XG4gICAgICAgIGJhc2UgPSB0aGlzLnJlbmRlcldpdGhTZWxlY3Rpb25DdHgoYmFzZSwgYmFzZVByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuUm93RXhwYW5kQ29udGV4dCkge1xuICAgICAgICBiYXNlID0gdGhpcy5yZW5kZXJXaXRoUm93RXhwYW5kQ3R4KGJhc2UsIGJhc2VQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLlBhZ2luYXRpb25Db250ZXh0KSB7XG4gICAgICAgIGJhc2UgPSB0aGlzLnJlbmRlcldpdGhQYWdpbmF0aW9uQ3R4KGJhc2UsIGJhc2VQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLlNvcnRDb250ZXh0KSB7XG4gICAgICAgIGJhc2UgPSB0aGlzLnJlbmRlcldpdGhTb3J0Q3R4KGJhc2UsIGJhc2VQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLlNlYXJjaENvbnRleHQpIHtcbiAgICAgICAgYmFzZSA9IHRoaXMucmVuZGVyV2l0aFNlYXJjaEN0eChiYXNlLCBiYXNlUHJvcHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5GaWx0ZXJDb250ZXh0KSB7XG4gICAgICAgIGJhc2UgPSB0aGlzLnJlbmRlcldpdGhGaWx0ZXJDdHgoYmFzZSwgYmFzZVByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuQ2VsbEVkaXRDb250ZXh0KSB7XG4gICAgICAgIGJhc2UgPSB0aGlzLnJlbmRlcldpdGhDZWxsRWRpdEN0eChiYXNlLCBiYXNlUHJvcHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Qm9vdHN0cmFwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17IHsgYm9vdHN0cmFwNCB9IH0+XG4gICAgICAgICAgPHRoaXMuRGF0YUNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgIHsgLi4uYmFzZVByb3BzIH1cbiAgICAgICAgICAgIGRhdGE9eyB0aGlzLnByb3BzLmRhdGEgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0aGlzLkRhdGFDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmFzZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3RoaXMuRGF0YUNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgPC90aGlzLkRhdGFDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICA8L0Jvb3RzdHJhcENvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aENvbnRleHQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9pbmRleC5qcyIsIi8qIGVzbGludCBjYW1lbGNhc2U6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IERhdGFDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG4gIGNsYXNzIERhdGFQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWRcbiAgICB9XG5cbiAgICBzdGF0ZSA9IHsgZGF0YTogdGhpcy5wcm9wcy5kYXRhIH07XG5cbiAgICBnZXREYXRhID0gKGZpbHRlclByb3BzLCBzZWFyY2hQcm9wcywgc29ydFByb3BzLCBwYWdpbmF0aW9uUHJvcHMpID0+IHtcbiAgICAgIGlmIChwYWdpbmF0aW9uUHJvcHMpIHJldHVybiBwYWdpbmF0aW9uUHJvcHMuZGF0YTtcbiAgICAgIGVsc2UgaWYgKHNvcnRQcm9wcykgcmV0dXJuIHNvcnRQcm9wcy5kYXRhO1xuICAgICAgZWxzZSBpZiAoc2VhcmNoUHJvcHMpIHJldHVybiBzZWFyY2hQcm9wcy5kYXRhO1xuICAgICAgZWxzZSBpZiAoZmlsdGVyUHJvcHMpIHJldHVybiBmaWx0ZXJQcm9wcy5kYXRhO1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgZGF0YTogbmV4dFByb3BzLmRhdGEgfSkpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxEYXRhQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgIHZhbHVlPXsge1xuICAgICAgICAgICAgZGF0YTogdGhpcy5zdGF0ZS5kYXRhLFxuICAgICAgICAgICAgZ2V0RGF0YTogdGhpcy5nZXREYXRhXG4gICAgICAgICAgfSB9XG4gICAgICAgID5cbiAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8L0RhdGFDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBQcm92aWRlcjogRGF0YVByb3ZpZGVyLFxuICAgIENvbnN1bWVyOiBEYXRhQ29udGV4dC5Db25zdW1lclxuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL2RhdGEtY29udGV4dC5qcyIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG4vKiBlc2xpbnQgcmVhY3QvcHJlZmVyLXN0YXRlbGVzcy1mdW5jdGlvbjogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgQ29sdW1uTWFuYWdlbWVudENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbiAgY2xhc3MgQ29sdW1uTWFuYWdlbWVudFByb3ZpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgICB0b2dnbGVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfVxuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIHRvZ2dsZXM6IG51bGxcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBsZXQgdG9nZ2xlQ29sdW1uO1xuICAgICAgY29uc3QgeyBjb2x1bW5zLCB0b2dnbGVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgaWYgKHRvZ2dsZXMpIHtcbiAgICAgICAgdG9nZ2xlQ29sdW1uID0gY29sdW1ucy5maWx0ZXIoY29sdW1uID0+IHRvZ2dsZXNbY29sdW1uLmRhdGFGaWVsZF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9nZ2xlQ29sdW1uID0gY29sdW1ucy5maWx0ZXIoY29sdW1uID0+ICFjb2x1bW4uaGlkZGVuKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDb2x1bW5NYW5hZ2VtZW50Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17IHsgY29sdW1uczogdG9nZ2xlQ29sdW1uIH0gfT5cbiAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8L0NvbHVtbk1hbmFnZW1lbnRDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIFByb3ZpZGVyOiBDb2x1bW5NYW5hZ2VtZW50UHJvdmlkZXIsXG4gICAgQ29uc3VtZXI6IENvbHVtbk1hbmFnZW1lbnRDb250ZXh0LkNvbnN1bWVyXG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29udGV4dHMvY29sdW1uLWNvbnRleHQuanMiLCIvKiBlc2xpbnQgY2FtZWxjYXNlOiAwICovXG4vKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9jb25zdCc7XG5cbmV4cG9ydCBkZWZhdWx0IChcbiAgZGF0YU9wZXJhdG9yLFxuICBpc1JlbW90ZVNvcnQsXG4gIGhhbmRsZVNvcnRDaGFuZ2VcbikgPT4ge1xuICBjb25zdCBTb3J0Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuICBjbGFzcyBTb3J0UHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgICBkZWZhdWx0U29ydGVkOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBkYXRhRmllbGQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgb3JkZXI6IFByb3BUeXBlcy5vbmVPZihbQ29uc3QuU09SVF9ERVNDLCBDb25zdC5TT1JUX0FTQ10pLmlzUmVxdWlyZWRcbiAgICAgIH0pKSxcbiAgICAgIHNvcnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGRhdGFGaWVsZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgb3JkZXI6IFByb3BUeXBlcy5vbmVPZihbQ29uc3QuU09SVF9ERVNDLCBDb25zdC5TT1JUX0FTQ10pLFxuICAgICAgICBzb3J0RnVuYzogUHJvcFR5cGVzLmZ1bmNcbiAgICAgIH0pLFxuICAgICAgZGVmYXVsdFNvcnREaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbQ29uc3QuU09SVF9ERVNDLCBDb25zdC5TT1JUX0FTQ10pXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIGxldCBzb3J0T3JkZXI7XG4gICAgICBsZXQgc29ydENvbHVtbjtcbiAgICAgIGNvbnN0IHsgZGVmYXVsdFNvcnRlZCwgZGVmYXVsdFNvcnREaXJlY3Rpb24sIHNvcnQgfSA9IHByb3BzO1xuXG4gICAgICBpZiAoZGVmYXVsdFNvcnRlZCAmJiBkZWZhdWx0U29ydGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc29ydE9yZGVyID0gZGVmYXVsdFNvcnRlZFswXS5vcmRlciB8fCBkZWZhdWx0U29ydERpcmVjdGlvbjtcbiAgICAgICAgc29ydENvbHVtbiA9IHRoaXMuaW5pdFNvcnQoZGVmYXVsdFNvcnRlZFswXS5kYXRhRmllbGQsIHNvcnRPcmRlcik7XG4gICAgICB9IGVsc2UgaWYgKHNvcnQgJiYgc29ydC5kYXRhRmllbGQgJiYgc29ydC5vcmRlcikge1xuICAgICAgICBzb3J0T3JkZXIgPSBzb3J0Lm9yZGVyO1xuICAgICAgICBzb3J0Q29sdW1uID0gdGhpcy5pbml0U29ydChzb3J0LmRhdGFGaWVsZCwgc29ydE9yZGVyKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUgPSB7IHNvcnRPcmRlciwgc29ydENvbHVtbiB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgY29uc3QgeyBzb3J0T3JkZXIsIHNvcnRDb2x1bW4gfSA9IHRoaXMuc3RhdGU7XG4gICAgICBpZiAoaXNSZW1vdGVTb3J0KCkgJiYgc29ydE9yZGVyICYmIHNvcnRDb2x1bW4pIHtcbiAgICAgICAgaGFuZGxlU29ydENoYW5nZShzb3J0Q29sdW1uLmRhdGFGaWVsZCwgc29ydE9yZGVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGNvbnN0IHsgc29ydCwgY29sdW1ucyB9ID0gbmV4dFByb3BzO1xuICAgICAgaWYgKHNvcnQgJiYgc29ydC5kYXRhRmllbGQgJiYgc29ydC5vcmRlcikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzb3J0T3JkZXI6IHNvcnQub3JkZXIsXG4gICAgICAgICAgc29ydENvbHVtbjogY29sdW1ucy5maW5kKGNvbCA9PiBjb2wuZGF0YUZpZWxkID09PSBzb3J0LmRhdGFGaWVsZClcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5pdFNvcnQoc29ydEZpZWxkLCBzb3J0T3JkZXIpIHtcbiAgICAgIGxldCBzb3J0Q29sdW1uO1xuICAgICAgY29uc3QgeyBjb2x1bW5zIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qgc29ydENvbHVtbnMgPSBjb2x1bW5zLmZpbHRlcihjb2wgPT4gY29sLmRhdGFGaWVsZCA9PT0gc29ydEZpZWxkKTtcbiAgICAgIGlmIChzb3J0Q29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNvcnRDb2x1bW4gPSBzb3J0Q29sdW1uc1swXTtcblxuICAgICAgICBpZiAoc29ydENvbHVtbi5vblNvcnQpIHtcbiAgICAgICAgICBzb3J0Q29sdW1uLm9uU29ydChzb3J0RmllbGQsIHNvcnRPcmRlcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzb3J0Q29sdW1uO1xuICAgIH1cblxuICAgIGhhbmRsZVNvcnQgPSAoY29sdW1uKSA9PiB7XG4gICAgICBjb25zdCBzb3J0T3JkZXIgPSBkYXRhT3BlcmF0b3IubmV4dE9yZGVyKGNvbHVtbiwgdGhpcy5zdGF0ZSwgdGhpcy5wcm9wcy5kZWZhdWx0U29ydERpcmVjdGlvbik7XG5cbiAgICAgIGlmIChjb2x1bW4ub25Tb3J0KSB7XG4gICAgICAgIGNvbHVtbi5vblNvcnQoY29sdW1uLmRhdGFGaWVsZCwgc29ydE9yZGVyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzUmVtb3RlU29ydCgpKSB7XG4gICAgICAgIGhhbmRsZVNvcnRDaGFuZ2UoY29sdW1uLmRhdGFGaWVsZCwgc29ydE9yZGVyKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgc29ydE9yZGVyLFxuICAgICAgICBzb3J0Q29sdW1uOiBjb2x1bW5cbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBsZXQgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgeyBzb3J0IH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgeyBzb3J0T3JkZXIsIHNvcnRDb2x1bW4gfSA9IHRoaXMuc3RhdGU7XG4gICAgICBpZiAoIWlzUmVtb3RlU29ydCgpICYmIHNvcnRDb2x1bW4pIHtcbiAgICAgICAgY29uc3Qgc29ydEZ1bmMgPSBzb3J0Q29sdW1uLnNvcnRGdW5jID8gc29ydENvbHVtbi5zb3J0RnVuYyA6IChzb3J0ICYmIHNvcnQuc29ydEZ1bmMpO1xuICAgICAgICBkYXRhID0gZGF0YU9wZXJhdG9yLnNvcnQoZGF0YSwgc29ydE9yZGVyLCB7IC4uLnNvcnRDb2x1bW4sIHNvcnRGdW5jIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U29ydENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICB2YWx1ZT17IHtcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBzb3J0T3JkZXIsXG4gICAgICAgICAgICBvblNvcnQ6IHRoaXMuaGFuZGxlU29ydCxcbiAgICAgICAgICAgIHNvcnRGaWVsZDogc29ydENvbHVtbiA/IHNvcnRDb2x1bW4uZGF0YUZpZWxkIDogbnVsbFxuICAgICAgICAgIH0gfVxuICAgICAgICA+XG4gICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPC9Tb3J0Q29udGV4dC5Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgUHJvdmlkZXI6IFNvcnRQcm92aWRlcixcbiAgICBDb25zdW1lcjogU29ydENvbnRleHQuQ29uc3VtZXJcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9zb3J0LWNvbnRleHQuanMiLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50cyc7XG5pbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IEV4dGVuZEJhc2UgPT5cbiAgY2xhc3MgUmVtb3RlUmVzb2x2ZXIgZXh0ZW5kcyBFeHRlbmRCYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5yZW1vdGVFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgdGhpcy5yZW1vdGVFbWl0dGVyLm9uKCdwYWdpbmF0aW9uQ2hhbmdlJywgdGhpcy5oYW5kbGVSZW1vdGVQYWdlQ2hhbmdlKTtcbiAgICAgIHRoaXMucmVtb3RlRW1pdHRlci5vbignaXNSZW1vdGVQYWdpbmF0aW9uJywgdGhpcy5pc1JlbW90ZVBhZ2luYXRpb24pO1xuICAgIH1cblxuICAgIGdldE5ld2VzdFN0YXRlID0gKHN0YXRlID0ge30pID0+IHtcbiAgICAgIGxldCBzb3J0T3JkZXI7XG4gICAgICBsZXQgc29ydEZpZWxkO1xuICAgICAgbGV0IHBhZ2U7XG4gICAgICBsZXQgc2l6ZVBlclBhZ2U7XG4gICAgICBsZXQgc2VhcmNoVGV4dDtcbiAgICAgIGxldCBmaWx0ZXJzID0ge307XG5cbiAgICAgIGlmICh0aGlzLnNvcnRDb250ZXh0KSB7XG4gICAgICAgIHNvcnRPcmRlciA9IHRoaXMuc29ydENvbnRleHQuc3RhdGUuc29ydE9yZGVyO1xuICAgICAgICBzb3J0RmllbGQgPSB0aGlzLnNvcnRDb250ZXh0LnN0YXRlLnNvcnRDb2x1bW4gP1xuICAgICAgICAgIHRoaXMuc29ydENvbnRleHQuc3RhdGUuc29ydENvbHVtbi5kYXRhRmllbGQgOlxuICAgICAgICAgIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmZpbHRlckNvbnRleHQpIHtcbiAgICAgICAgZmlsdGVycyA9IHRoaXMuZmlsdGVyQ29udGV4dC5jdXJyRmlsdGVycztcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucGFnaW5hdGlvbkNvbnRleHQpIHtcbiAgICAgICAgcGFnZSA9IHRoaXMucGFnaW5hdGlvbkNvbnRleHQuY3VyclBhZ2U7XG4gICAgICAgIHNpemVQZXJQYWdlID0gdGhpcy5wYWdpbmF0aW9uQ29udGV4dC5jdXJyU2l6ZVBlclBhZ2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNlYXJjaENvbnRleHQpIHtcbiAgICAgICAgc2VhcmNoVGV4dCA9IHRoaXMucHJvcHMuc2VhcmNoLnNlYXJjaFRleHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNvcnRPcmRlcixcbiAgICAgICAgc29ydEZpZWxkLFxuICAgICAgICBmaWx0ZXJzLFxuICAgICAgICBwYWdlLFxuICAgICAgICBzaXplUGVyUGFnZSxcbiAgICAgICAgc2VhcmNoVGV4dCxcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRhdGE6IHRoaXMucHJvcHMuZGF0YVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpc1JlbW90ZVNlYXJjaCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgcmVtb3RlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIHJlbW90ZSA9PT0gdHJ1ZSB8fCAoXy5pc09iamVjdChyZW1vdGUpICYmIHJlbW90ZS5zZWFyY2gpIHx8IHRoaXMuaXNSZW1vdGVQYWdpbmF0aW9uKCk7XG4gICAgfVxuXG4gICAgaXNSZW1vdGVQYWdpbmF0aW9uID0gKGUgPSB7fSkgPT4ge1xuICAgICAgY29uc3QgeyByZW1vdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICBlLnJlc3VsdCA9IChyZW1vdGUgPT09IHRydWUgfHwgKF8uaXNPYmplY3QocmVtb3RlKSAmJiByZW1vdGUucGFnaW5hdGlvbikpO1xuICAgICAgcmV0dXJuIGUucmVzdWx0O1xuICAgIH1cblxuICAgIGlzUmVtb3RlRmlsdGVyaW5nID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyByZW1vdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICByZXR1cm4gcmVtb3RlID09PSB0cnVlIHx8IChfLmlzT2JqZWN0KHJlbW90ZSkgJiYgcmVtb3RlLmZpbHRlcikgfHwgdGhpcy5pc1JlbW90ZVBhZ2luYXRpb24oKTtcbiAgICB9XG5cbiAgICBpc1JlbW90ZVNvcnQgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IHJlbW90ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHJldHVybiByZW1vdGUgPT09IHRydWUgfHwgKF8uaXNPYmplY3QocmVtb3RlKSAmJiByZW1vdGUuc29ydCkgfHwgdGhpcy5pc1JlbW90ZVBhZ2luYXRpb24oKTtcbiAgICB9XG5cbiAgICBpc1JlbW90ZUNlbGxFZGl0ID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyByZW1vdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICByZXR1cm4gcmVtb3RlID09PSB0cnVlIHx8IChfLmlzT2JqZWN0KHJlbW90ZSkgJiYgcmVtb3RlLmNlbGxFZGl0KTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZW1vdGVQYWdlQ2hhbmdlID0gKHBhZ2UsIHNpemVQZXJQYWdlKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uVGFibGVDaGFuZ2UoJ3BhZ2luYXRpb24nLCB0aGlzLmdldE5ld2VzdFN0YXRlKHsgcGFnZSwgc2l6ZVBlclBhZ2UgfSkpO1xuICAgIH1cblxuICAgIGhhbmRsZVJlbW90ZUZpbHRlckNoYW5nZSA9IChmaWx0ZXJzKSA9PiB7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHsgZmlsdGVycyB9O1xuICAgICAgaWYgKHRoaXMuaXNSZW1vdGVQYWdpbmF0aW9uKCkpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMucHJvcHMucGFnaW5hdGlvbi5vcHRpb25zIHx8IHt9O1xuICAgICAgICBuZXdTdGF0ZS5wYWdlID0gXy5pc0RlZmluZWQob3B0aW9ucy5wYWdlU3RhcnRJbmRleCkgPyBvcHRpb25zLnBhZ2VTdGFydEluZGV4IDogMTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMub25UYWJsZUNoYW5nZSgnZmlsdGVyJywgdGhpcy5nZXROZXdlc3RTdGF0ZShuZXdTdGF0ZSkpO1xuICAgIH1cblxuICAgIGhhbmRsZVJlbW90ZVNvcnRDaGFuZ2UgPSAoc29ydEZpZWxkLCBzb3J0T3JkZXIpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25UYWJsZUNoYW5nZSgnc29ydCcsIHRoaXMuZ2V0TmV3ZXN0U3RhdGUoeyBzb3J0RmllbGQsIHNvcnRPcmRlciB9KSk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVtb3RlQ2VsbENoYW5nZSA9IChyb3dJZCwgZGF0YUZpZWxkLCBuZXdWYWx1ZSkgPT4ge1xuICAgICAgY29uc3QgY2VsbEVkaXQgPSB7IHJvd0lkLCBkYXRhRmllbGQsIG5ld1ZhbHVlIH07XG4gICAgICB0aGlzLnByb3BzLm9uVGFibGVDaGFuZ2UoJ2NlbGxFZGl0JywgdGhpcy5nZXROZXdlc3RTdGF0ZSh7IGNlbGxFZGl0IH0pKTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZW1vdGVTZWFyY2hDaGFuZ2UgPSAoc2VhcmNoVGV4dCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vblRhYmxlQ2hhbmdlKCdzZWFyY2gnLCB0aGlzLmdldE5ld2VzdFN0YXRlKHsgc2VhcmNoVGV4dCB9KSk7XG4gICAgfVxuICB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcHJvcHMtcmVzb2x2ZXIvcmVtb3RlLXJlc29sdmVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceMappingURL=react-bootstrap-table-next.js.map