(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapTable2Editor"] = factory(require("react"));
	else
		root["ReactBootstrapTable2Editor"] = factory(root["React"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TIME_TO_CLOSE_MESSAGE = exports.TIME_TO_CLOSE_MESSAGE = 3000;
var DELAY_FOR_DBCLICK = exports.DELAY_FOR_DBCLICK = 200;
var CLICK_TO_CELL_EDIT = exports.CLICK_TO_CELL_EDIT = 'click';
var DBCLICK_TO_CELL_EDIT = exports.DBCLICK_TO_CELL_EDIT = 'dbclick';

var EDITTYPE = exports.EDITTYPE = {
  TEXT: 'text',
  SELECT: 'select',
  TEXTAREA: 'textarea',
  CHECKBOX: 'checkbox',
  DATE: 'date'
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Consumer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint disable-next-line: 0 */
/* eslint react/prop-types: 0 */
/* eslint react/require-default-props: 0 */
/* eslint camelcase: 0 */
/* eslint react/no-unused-prop-types: 0 */


var CellEditContext = _react2.default.createContext();

exports.default = function (_, dataOperator, isRemoteCellEdit, handleCellChange) {
  var CellEditProvider = function (_React$Component) {
    _inherits(CellEditProvider, _React$Component);

    function CellEditProvider(props) {
      _classCallCheck(this, CellEditProvider);

      var _this = _possibleConstructorReturn(this, (CellEditProvider.__proto__ || Object.getPrototypeOf(CellEditProvider)).call(this, props));

      _this.doUpdate = _this.doUpdate.bind(_this);
      _this.startEditing = _this.startEditing.bind(_this);
      _this.escapeEditing = _this.escapeEditing.bind(_this);
      _this.completeEditing = _this.completeEditing.bind(_this);
      _this.handleCellUpdate = _this.handleCellUpdate.bind(_this);
      _this.state = {
        ridx: null,
        cidx: null,
        message: null
      };
      return _this;
    }

    _createClass(CellEditProvider, [{
      key: 'UNSAFE_componentWillReceiveProps',
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.cellEdit && isRemoteCellEdit()) {
          if (nextProps.cellEdit.options.errorMessage) {
            this.setState(function () {
              return {
                message: nextProps.cellEdit.options.errorMessage
              };
            });
          } else {
            this.escapeEditing();
          }
        }
      }
    }, {
      key: 'handleCellUpdate',
      value: function handleCellUpdate(row, column, newValue) {
        var _this2 = this;

        var newValueWithType = dataOperator.typeConvert(column.type, newValue);
        var cellEdit = this.props.cellEdit;
        var beforeSaveCell = cellEdit.options.beforeSaveCell;

        var oldValue = _.get(row, column.dataField);
        var beforeSaveCellDone = function beforeSaveCellDone() {
          var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          if (result) {
            _this2.doUpdate(row, column, newValueWithType);
          } else {
            _this2.escapeEditing();
          }
        };
        if (_.isFunction(beforeSaveCell)) {
          var result = beforeSaveCell(oldValue, newValueWithType, row, column, beforeSaveCellDone);
          if (_.isObject(result) && result.async) {
            return;
          }
        }
        this.doUpdate(row, column, newValueWithType);
      }
    }, {
      key: 'doUpdate',
      value: function doUpdate(row, column, newValue) {
        var _props = this.props,
            keyField = _props.keyField,
            cellEdit = _props.cellEdit,
            data = _props.data;
        var afterSaveCell = cellEdit.options.afterSaveCell;

        var rowId = _.get(row, keyField);
        var oldValue = _.get(row, column.dataField);
        if (isRemoteCellEdit()) {
          handleCellChange(rowId, column.dataField, newValue);
        } else {
          dataOperator.editCell(data, keyField, rowId, column.dataField, newValue);
          if (_.isFunction(afterSaveCell)) afterSaveCell(oldValue, newValue, row, column);
          this.completeEditing();
        }
      }
    }, {
      key: 'completeEditing',
      value: function completeEditing() {
        this.setState(function () {
          return {
            ridx: null,
            cidx: null,
            message: null
          };
        });
      }
    }, {
      key: 'startEditing',
      value: function startEditing(ridx, cidx) {
        var _this3 = this;

        var editing = function editing() {
          _this3.setState(function () {
            return {
              ridx: ridx,
              cidx: cidx
            };
          });
        };

        var selectRow = this.props.selectRow;

        if (!selectRow || selectRow.clickToEdit || !selectRow.clickToSelect) editing();
      }
    }, {
      key: 'escapeEditing',
      value: function escapeEditing() {
        this.setState(function () {
          return {
            ridx: null,
            cidx: null
          };
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _props$cellEdit = this.props.cellEdit,
            _props$cellEdit$optio = _props$cellEdit.options,
            nonEditableRows = _props$cellEdit$optio.nonEditableRows,
            errorMessage = _props$cellEdit$optio.errorMessage,
            optionsRest = _objectWithoutProperties(_props$cellEdit$optio, ['nonEditableRows', 'errorMessage']),
            cellEditRest = _objectWithoutProperties(_props$cellEdit, ['options']);

        var newCellEdit = _extends({}, optionsRest, cellEditRest, this.state, {
          nonEditableRows: _.isDefined(nonEditableRows) ? nonEditableRows() : [],
          onStart: this.startEditing,
          onEscape: this.escapeEditing,
          onUpdate: this.handleCellUpdate
        });

        return _react2.default.createElement(
          CellEditContext.Provider,
          {
            value: _extends({}, newCellEdit)
          },
          this.props.children
        );
      }
    }]);

    return CellEditProvider;
  }(_react2.default.Component);

  CellEditProvider.propTypes = {
    data: _propTypes2.default.array.isRequired,
    selectRow: _propTypes2.default.object,
    options: _propTypes2.default.shape({
      mode: _propTypes2.default.oneOf([_const.CLICK_TO_CELL_EDIT, _const.DBCLICK_TO_CELL_EDIT]).isRequired,
      onErrorMessageDisappear: _propTypes2.default.func,
      blurToSave: _propTypes2.default.bool,
      beforeSaveCell: _propTypes2.default.func,
      afterSaveCell: _propTypes2.default.func,
      onStartEdit: _propTypes2.default.func,
      nonEditableRows: _propTypes2.default.func,
      timeToCloseMessage: _propTypes2.default.number,
      errorMessage: _propTypes2.default.any
    })
  };

  return {
    Provider: CellEditProvider
  };
};

var Consumer = exports.Consumer = CellEditContext.Consumer;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Type = undefined;

var _context = __webpack_require__(4);

var _context2 = _interopRequireDefault(_context);

var _rowConsumer = __webpack_require__(10);

var _rowConsumer2 = _interopRequireDefault(_rowConsumer);

var _editingCellConsumer = __webpack_require__(11);

var _editingCellConsumer2 = _interopRequireDefault(_editingCellConsumer);

var _const = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    createContext: _context2.default,
    createEditingCell: _editingCellConsumer2.default,
    withRowLevelCellEdit: _rowConsumer2.default,
    DBCLICK_TO_CELL_EDIT: _const.DBCLICK_TO_CELL_EDIT,
    DELAY_FOR_DBCLICK: _const.DELAY_FOR_DBCLICK,
    options: options
  };
};

var Type = exports.Type = _const.EDITTYPE;

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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint react/prop-types: 0 */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _const = __webpack_require__(3);

var _context = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Component, selectRowEnabled) {
  var renderWithCellEdit = function renderWithCellEdit(props, cellEdit) {
    var key = props.value;
    var editableRow = !(cellEdit.nonEditableRows.length > 0 && cellEdit.nonEditableRows.indexOf(key) > -1);

    var attrs = {};

    if (selectRowEnabled && cellEdit.mode === _const.DBCLICK_TO_CELL_EDIT) {
      attrs.DELAY_FOR_DBCLICK = _const.DELAY_FOR_DBCLICK;
    }

    return _react2.default.createElement(Component, _extends({}, props, attrs, {
      editingRowIdx: cellEdit.ridx,
      editingColIdx: cellEdit.cidx,
      editable: editableRow,
      onStart: cellEdit.onStart,
      clickToEdit: cellEdit.mode === _const.CLICK_TO_CELL_EDIT,
      dbclickToEdit: cellEdit.mode === _const.DBCLICK_TO_CELL_EDIT
    }));
  };
  function withConsumer(props) {
    return _react2.default.createElement(
      _context.Consumer,
      null,
      function (cellEdit) {
        return renderWithCellEdit(props, cellEdit);
      }
    );
  }

  withConsumer.displayName = 'WithCellEditingRowConsumer';
  return withConsumer;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint react/prop-types: 0 */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _context = __webpack_require__(4);

var _editingCell = __webpack_require__(12);

var _editingCell2 = _interopRequireDefault(_editingCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_, onStartEdit) {
  var EditingCell = (0, _editingCell2.default)(_, onStartEdit);
  var renderWithEditingCell = function renderWithEditingCell(props, cellEdit) {
    var content = _.get(props.row, props.column.dataField);
    var editCellstyle = props.column.editCellStyle || {};
    var editCellclasses = props.column.editCellClasses;
    if (_.isFunction(props.column.editCellStyle)) {
      editCellstyle = props.column.editCellStyle(content, props.row, props.rowIndex, props.columnIndex);
    }
    if (_.isFunction(props.column.editCellClasses)) {
      editCellclasses = props.column.editCellClasses(content, props.row, props.rowIndex, props.columnIndex);
    }

    return _react2.default.createElement(EditingCell, _extends({}, props, {
      className: editCellclasses,
      style: editCellstyle
    }, cellEdit));
  };

  return function (props) {
    return _react2.default.createElement(
      _context.Consumer,
      null,
      function (cellEdit) {
        return renderWithEditingCell(props, cellEdit);
      }
    );
  };
};

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

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dropdownEditor = __webpack_require__(13);

var _dropdownEditor2 = _interopRequireDefault(_dropdownEditor);

var _textareaEditor = __webpack_require__(14);

var _textareaEditor2 = _interopRequireDefault(_textareaEditor);

var _checkboxEditor = __webpack_require__(15);

var _checkboxEditor2 = _interopRequireDefault(_checkboxEditor);

var _dateEditor = __webpack_require__(16);

var _dateEditor2 = _interopRequireDefault(_dateEditor);

var _textEditor = __webpack_require__(17);

var _textEditor2 = _interopRequireDefault(_textEditor);

var _editorIndicator = __webpack_require__(18);

var _editorIndicator2 = _interopRequireDefault(_editorIndicator);

var _const = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint no-return-assign: 0 */
/* eslint class-methods-use-this: 0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */
/* eslint camelcase: 0 */


exports.default = function (_, onStartEdit) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(EditingCell, _Component);

    function EditingCell(props) {
      _classCallCheck(this, EditingCell);

      var _this = _possibleConstructorReturn(this, (EditingCell.__proto__ || Object.getPrototypeOf(EditingCell)).call(this, props));

      _this.indicatorTimer = null;
      _this.clearTimer = _this.clearTimer.bind(_this);
      _this.handleBlur = _this.handleBlur.bind(_this);
      _this.handleClick = _this.handleClick.bind(_this);
      _this.handleKeyDown = _this.handleKeyDown.bind(_this);
      _this.beforeComplete = _this.beforeComplete.bind(_this);
      _this.asyncbeforeCompete = _this.asyncbeforeCompete.bind(_this);
      _this.displayErrorMessage = _this.displayErrorMessage.bind(_this);
      _this.state = {
        invalidMessage: null
      };
      return _this;
    }

    _createClass(EditingCell, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.clearTimer();
      }
    }, {
      key: 'UNSAFE_componentWillReceiveProps',
      value: function UNSAFE_componentWillReceiveProps(_ref) {
        var message = _ref.message;

        if (_.isDefined(message)) {
          this.createTimer();
          this.setState(function () {
            return {
              invalidMessage: message
            };
          });
        }
      }
    }, {
      key: 'clearTimer',
      value: function clearTimer() {
        if (this.indicatorTimer) {
          clearTimeout(this.indicatorTimer);
        }
      }
    }, {
      key: 'createTimer',
      value: function createTimer() {
        var _this2 = this;

        this.clearTimer();
        var _props = this.props,
            timeToCloseMessage = _props.timeToCloseMessage,
            onErrorMessageDisappear = _props.onErrorMessageDisappear;

        this.indicatorTimer = _.sleep(function () {
          _this2.setState(function () {
            return {
              invalidMessage: null
            };
          });
          if (_.isFunction(onErrorMessageDisappear)) onErrorMessageDisappear();
        }, timeToCloseMessage);
      }
    }, {
      key: 'displayErrorMessage',
      value: function displayErrorMessage(message) {
        this.setState(function () {
          return {
            invalidMessage: message
          };
        });
        this.createTimer();
      }
    }, {
      key: 'asyncbeforeCompete',
      value: function asyncbeforeCompete(newValue) {
        var _this3 = this;

        return function () {
          var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { valid: true };
          var valid = result.valid,
              message = result.message;
          var _props2 = _this3.props,
              onUpdate = _props2.onUpdate,
              row = _props2.row,
              column = _props2.column;

          if (!valid) {
            _this3.displayErrorMessage(message);
            return;
          }
          onUpdate(row, column, newValue);
        };
      }
    }, {
      key: 'beforeComplete',
      value: function beforeComplete(newValue) {
        var _props3 = this.props,
            onUpdate = _props3.onUpdate,
            row = _props3.row,
            column = _props3.column;

        if (_.isFunction(column.validator)) {
          var validateForm = column.validator(newValue, row, column, this.asyncbeforeCompete(newValue));
          if (_.isObject(validateForm)) {
            if (validateForm.async) {
              return;
            } else if (!validateForm.valid) {
              this.displayErrorMessage(validateForm.message);
              return;
            }
          }
        }
        onUpdate(row, column, newValue);
      }
    }, {
      key: 'handleBlur',
      value: function handleBlur() {
        var _props4 = this.props,
            onEscape = _props4.onEscape,
            blurToSave = _props4.blurToSave;

        if (blurToSave) {
          this.beforeComplete(this.editor.getValue());
        } else {
          onEscape();
        }
      }
    }, {
      key: 'handleKeyDown',
      value: function handleKeyDown(e) {
        var onEscape = this.props.onEscape;

        if (e.keyCode === 27) {
          // ESC
          onEscape();
        } else if (e.keyCode === 13) {
          // ENTER
          this.beforeComplete(this.editor.getValue());
        }
      }
    }, {
      key: 'handleClick',
      value: function handleClick(e) {
        if (e.target.tagName !== 'TD') {
          // To avoid the row selection event be triggered,
          // When user define selectRow.clickToSelect and selectRow.clickToEdit
          // We shouldn't trigger selection event even if user click on the cell editor(input)
          e.stopPropagation();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this4 = this;

        var editor = void 0;
        var _props5 = this.props,
            row = _props5.row,
            column = _props5.column,
            className = _props5.className,
            style = _props5.style,
            rowIndex = _props5.rowIndex,
            columnIndex = _props5.columnIndex,
            autoSelectText = _props5.autoSelectText;
        var dataField = column.dataField;


        var value = _.get(row, dataField);
        var hasError = _.isDefined(this.state.invalidMessage);

        var customEditorClass = column.editorClasses || '';
        if (_.isFunction(column.editorClasses)) {
          customEditorClass = column.editorClasses(value, row, rowIndex, columnIndex);
        }

        var editorStyle = column.editorStyle || {};
        if (_.isFunction(column.editorStyle)) {
          editorStyle = column.editorStyle(value, row, rowIndex, columnIndex);
        }

        var editorClass = (0, _classnames2.default)({
          animated: hasError,
          shake: hasError
        }, customEditorClass);

        var editorProps = {
          ref: function ref(node) {
            return _this4.editor = node;
          },
          defaultValue: value,
          style: editorStyle,
          className: editorClass,
          onKeyDown: this.handleKeyDown,
          onBlur: this.handleBlur
        };

        if (onStartEdit) {
          editorProps.didMount = function () {
            return onStartEdit(row, column, rowIndex, columnIndex);
          };
        }

        var isDefaultEditorDefined = _.isObject(column.editor);

        if (isDefaultEditorDefined) {
          editorProps = _extends({}, editorProps, column.editor);
        } else if (_.isFunction(column.editorRenderer)) {
          editorProps = _extends({}, editorProps, {
            onUpdate: this.beforeComplete
          });
        }

        if (_.isFunction(column.editorRenderer)) {
          editor = column.editorRenderer(editorProps, value, row, column, rowIndex, columnIndex);
        } else if (isDefaultEditorDefined && column.editor.type === _const.EDITTYPE.SELECT) {
          editor = _react2.default.createElement(_dropdownEditor2.default, _extends({}, editorProps, { row: row, column: column }));
        } else if (isDefaultEditorDefined && column.editor.type === _const.EDITTYPE.TEXTAREA) {
          editor = _react2.default.createElement(_textareaEditor2.default, _extends({}, editorProps, { autoSelectText: autoSelectText }));
        } else if (isDefaultEditorDefined && column.editor.type === _const.EDITTYPE.CHECKBOX) {
          editor = _react2.default.createElement(_checkboxEditor2.default, editorProps);
        } else if (isDefaultEditorDefined && column.editor.type === _const.EDITTYPE.DATE) {
          editor = _react2.default.createElement(_dateEditor2.default, editorProps);
        } else {
          editor = _react2.default.createElement(_textEditor2.default, _extends({}, editorProps, { autoSelectText: autoSelectText }));
        }

        return _react2.default.createElement(
          'td',
          {
            className: (0, _classnames2.default)('react-bootstrap-table-editing-cell', className),
            style: style,
            onClick: this.handleClick
          },
          editor,
          hasError ? _react2.default.createElement(_editorIndicator2.default, { invalidMessage: this.state.invalidMessage }) : null
        );
      }
    }]);

    return EditingCell;
  }(_react.Component), _class.propTypes = {
    row: _propTypes2.default.object.isRequired,
    rowIndex: _propTypes2.default.number.isRequired,
    column: _propTypes2.default.object.isRequired,
    columnIndex: _propTypes2.default.number.isRequired,
    onUpdate: _propTypes2.default.func.isRequired,
    onEscape: _propTypes2.default.func.isRequired,
    timeToCloseMessage: _propTypes2.default.number,
    autoSelectText: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
  }, _class.defaultProps = {
    timeToCloseMessage: _const.TIME_TO_CLOSE_MESSAGE,
    className: null,
    autoSelectText: false,
    style: {}
  }, _temp;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-return-assign: 0 */


var DropDownEditor = function (_Component) {
  _inherits(DropDownEditor, _Component);

  function DropDownEditor(props) {
    _classCallCheck(this, DropDownEditor);

    var _this = _possibleConstructorReturn(this, (DropDownEditor.__proto__ || Object.getPrototypeOf(DropDownEditor)).call(this, props));

    var options = props.options;
    if (props.getOptions) {
      options = props.getOptions(_this.setOptions.bind(_this), {
        row: props.row,
        column: props.column
      }) || [];
    }
    _this.state = { options: options };
    return _this;
  }

  _createClass(DropDownEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          didMount = _props.didMount;

      this.select.value = defaultValue;
      this.select.focus();
      if (didMount) didMount();
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      this.setState({ options: options });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.select.value;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          defaultValue = _props2.defaultValue,
          didMount = _props2.didMount,
          getOptions = _props2.getOptions,
          className = _props2.className,
          rest = _objectWithoutProperties(_props2, ['defaultValue', 'didMount', 'getOptions', 'className']);

      var editorClass = (0, _classnames2.default)('form-control editor edit-select', className);

      var attr = _extends({}, rest, {
        className: editorClass
      });

      return _react2.default.createElement(
        'select',
        _extends({}, attr, {
          ref: function ref(node) {
            return _this2.select = node;
          },
          defaultValue: defaultValue
        }),
        this.state.options.map(function (_ref) {
          var label = _ref.label,
              value = _ref.value;
          return _react2.default.createElement(
            'option',
            { key: value, value: value },
            label
          );
        })
      );
    }
  }]);

  return DropDownEditor;
}(_react.Component);

DropDownEditor.propTypes = {
  row: _propTypes2.default.object.isRequired,
  column: _propTypes2.default.object.isRequired,
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  options: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string,
    value: _propTypes2.default.any
  }))]),
  didMount: _propTypes2.default.func,
  getOptions: _propTypes2.default.func
};
DropDownEditor.defaultProps = {
  className: '',
  defaultValue: '',
  style: {},
  options: [],
  didMount: undefined,
  getOptions: undefined
};
exports.default = DropDownEditor;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-return-assign: 0 */


var TextAreaEditor = function (_Component) {
  _inherits(TextAreaEditor, _Component);

  function TextAreaEditor(props) {
    _classCallCheck(this, TextAreaEditor);

    var _this = _possibleConstructorReturn(this, (TextAreaEditor.__proto__ || Object.getPrototypeOf(TextAreaEditor)).call(this, props));

    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    return _this;
  }

  _createClass(TextAreaEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          didMount = _props.didMount,
          autoSelectText = _props.autoSelectText;

      this.text.value = defaultValue;
      this.text.focus();
      if (autoSelectText) this.text.select();
      if (didMount) didMount();
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.text.value;
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      if (e.keyCode === 13 && !e.shiftKey) return;
      if (this.props.onKeyDown) {
        this.props.onKeyDown(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          defaultValue = _props2.defaultValue,
          didMount = _props2.didMount,
          className = _props2.className,
          autoSelectText = _props2.autoSelectText,
          rest = _objectWithoutProperties(_props2, ['defaultValue', 'didMount', 'className', 'autoSelectText']);

      var editorClass = (0, _classnames2.default)('form-control editor edit-textarea', className);
      return _react2.default.createElement('textarea', _extends({
        ref: function ref(node) {
          return _this2.text = node;
        },
        type: 'textarea',
        className: editorClass
      }, rest, {
        onKeyDown: this.handleKeyDown
      }));
    }
  }]);

  return TextAreaEditor;
}(_react.Component);

TextAreaEditor.propTypes = {
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onKeyDown: _propTypes2.default.func,
  autoSelectText: _propTypes2.default.bool,
  didMount: _propTypes2.default.func
};
TextAreaEditor.defaultProps = {
  className: '',
  defaultValue: '',
  autoSelectText: false,
  onKeyDown: undefined,
  didMount: undefined
};
exports.default = TextAreaEditor;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-return-assign: 0 */


var CheckBoxEditor = function (_Component) {
  _inherits(CheckBoxEditor, _Component);

  function CheckBoxEditor(props) {
    _classCallCheck(this, CheckBoxEditor);

    var _this = _possibleConstructorReturn(this, (CheckBoxEditor.__proto__ || Object.getPrototypeOf(CheckBoxEditor)).call(this, props));

    _this.state = {
      checked: props.defaultValue.toString() === props.value.split(':')[0]
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(CheckBoxEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var didMount = this.props.didMount;

      this.checkbox.focus();
      if (didMount) didMount();
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var _props$value$split = this.props.value.split(':'),
          _props$value$split2 = _slicedToArray(_props$value$split, 2),
          positive = _props$value$split2[0],
          negative = _props$value$split2[1];

      return this.checkbox.checked ? positive : negative;
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      if (this.props.onChange) this.props.onChange(e);
      var target = e.target;

      this.setState(function () {
        return { checked: target.checked };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          defaultValue = _props.defaultValue,
          didMount = _props.didMount,
          className = _props.className,
          rest = _objectWithoutProperties(_props, ['defaultValue', 'didMount', 'className']);

      var editorClass = (0, _classnames2.default)('editor edit-chseckbox checkbox', className);
      return _react2.default.createElement('input', _extends({
        ref: function ref(node) {
          return _this2.checkbox = node;
        },
        type: 'checkbox',
        className: editorClass
      }, rest, {
        checked: this.state.checked,
        onChange: this.handleChange
      }));
    }
  }]);

  return CheckBoxEditor;
}(_react.Component);

CheckBoxEditor.propTypes = {
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  value: _propTypes2.default.string,
  defaultValue: _propTypes2.default.any,
  onChange: _propTypes2.default.func,
  didMount: _propTypes2.default.func
};
CheckBoxEditor.defaultProps = {
  className: '',
  value: 'on:off',
  defaultValue: false,
  onChange: undefined,
  didMount: undefined
};
exports.default = CheckBoxEditor;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-return-assign: 0 */


var DateEditor = function (_Component) {
  _inherits(DateEditor, _Component);

  function DateEditor() {
    _classCallCheck(this, DateEditor);

    return _possibleConstructorReturn(this, (DateEditor.__proto__ || Object.getPrototypeOf(DateEditor)).apply(this, arguments));
  }

  _createClass(DateEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          didMount = _props.didMount;

      this.date.valueAsDate = new Date(defaultValue);
      this.date.focus();
      if (didMount) didMount();
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.date.value;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          defaultValue = _props2.defaultValue,
          didMount = _props2.didMount,
          className = _props2.className,
          rest = _objectWithoutProperties(_props2, ['defaultValue', 'didMount', 'className']);

      var editorClass = (0, _classnames2.default)('form-control editor edit-date', className);
      return _react2.default.createElement('input', _extends({
        ref: function ref(node) {
          return _this2.date = node;
        },
        type: 'date',
        className: editorClass
      }, rest));
    }
  }]);

  return DateEditor;
}(_react.Component);

DateEditor.propTypes = {
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  defaultValue: _propTypes2.default.string,
  didMount: _propTypes2.default.func
};
DateEditor.defaultProps = {
  className: '',
  defaultValue: '',
  didMount: undefined
};
exports.default = DateEditor;

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

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-return-assign: 0 */


var TextEditor = function (_Component) {
  _inherits(TextEditor, _Component);

  function TextEditor() {
    _classCallCheck(this, TextEditor);

    return _possibleConstructorReturn(this, (TextEditor.__proto__ || Object.getPrototypeOf(TextEditor)).apply(this, arguments));
  }

  _createClass(TextEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          didMount = _props.didMount,
          autoSelectText = _props.autoSelectText;

      this.text.value = defaultValue;
      this.text.focus();
      if (autoSelectText) this.text.select();
      if (didMount) didMount();
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.text.value;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          defaultValue = _props2.defaultValue,
          didMount = _props2.didMount,
          className = _props2.className,
          autoSelectText = _props2.autoSelectText,
          rest = _objectWithoutProperties(_props2, ['defaultValue', 'didMount', 'className', 'autoSelectText']);

      var editorClass = (0, _classnames2.default)('form-control editor edit-text', className);
      return _react2.default.createElement('input', _extends({
        ref: function ref(node) {
          return _this2.text = node;
        },
        type: 'text',
        className: editorClass
      }, rest));
    }
  }]);

  return TextEditor;
}(_react.Component);

TextEditor.propTypes = {
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  autoSelectText: _propTypes2.default.bool,
  didMount: _propTypes2.default.func
};
TextEditor.defaultProps = {
  className: null,
  defaultValue: '',
  autoSelectText: false,
  didMount: undefined
};
exports.default = TextEditor;

/***/ }),
/* 18 */
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

/* eslint no-return-assign: 0 */
var EditorIndicator = function EditorIndicator(_ref) {
  var invalidMessage = _ref.invalidMessage;
  return _react2.default.createElement(
    'div',
    { className: 'alert alert-danger in', role: 'alert' },
    _react2.default.createElement(
      'strong',
      null,
      invalidMessage
    )
  );
};

EditorIndicator.propTypes = {
  invalidMessage: _propTypes2.default.string
};

EditorIndicator.defaultProps = {
  invalidMessage: null
};
exports.default = EditorIndicator;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjZDcyZDk1MzkwMzQ0NjdlYzczNiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLWVkaXRvci9zcmMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1lZGl0b3Ivc3JjL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1lZGl0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItZWRpdG9yL3NyYy9yb3ctY29uc3VtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1lZGl0b3Ivc3JjL2VkaXRpbmctY2VsbC1jb25zdW1lci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLWVkaXRvci9zcmMvZWRpdGluZy1jZWxsLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItZWRpdG9yL3NyYy9kcm9wZG93bi1lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1lZGl0b3Ivc3JjL3RleHRhcmVhLWVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLWVkaXRvci9zcmMvY2hlY2tib3gtZWRpdG9yLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItZWRpdG9yL3NyYy9kYXRlLWVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLWVkaXRvci9zcmMvdGV4dC1lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1lZGl0b3Ivc3JjL2VkaXRvci1pbmRpY2F0b3IuanMiXSwibmFtZXMiOlsiVElNRV9UT19DTE9TRV9NRVNTQUdFIiwiREVMQVlfRk9SX0RCQ0xJQ0siLCJDTElDS19UT19DRUxMX0VESVQiLCJEQkNMSUNLX1RPX0NFTExfRURJVCIsIkVESVRUWVBFIiwiVEVYVCIsIlNFTEVDVCIsIlRFWFRBUkVBIiwiQ0hFQ0tCT1giLCJEQVRFIiwiQ2VsbEVkaXRDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiXyIsImRhdGFPcGVyYXRvciIsImlzUmVtb3RlQ2VsbEVkaXQiLCJoYW5kbGVDZWxsQ2hhbmdlIiwiQ2VsbEVkaXRQcm92aWRlciIsInByb3BzIiwiZG9VcGRhdGUiLCJiaW5kIiwic3RhcnRFZGl0aW5nIiwiZXNjYXBlRWRpdGluZyIsImNvbXBsZXRlRWRpdGluZyIsImhhbmRsZUNlbGxVcGRhdGUiLCJzdGF0ZSIsInJpZHgiLCJjaWR4IiwibWVzc2FnZSIsIm5leHRQcm9wcyIsImNlbGxFZGl0Iiwib3B0aW9ucyIsImVycm9yTWVzc2FnZSIsInNldFN0YXRlIiwicm93IiwiY29sdW1uIiwibmV3VmFsdWUiLCJuZXdWYWx1ZVdpdGhUeXBlIiwidHlwZUNvbnZlcnQiLCJ0eXBlIiwiYmVmb3JlU2F2ZUNlbGwiLCJvbGRWYWx1ZSIsImdldCIsImRhdGFGaWVsZCIsImJlZm9yZVNhdmVDZWxsRG9uZSIsInJlc3VsdCIsImlzRnVuY3Rpb24iLCJpc09iamVjdCIsImFzeW5jIiwia2V5RmllbGQiLCJkYXRhIiwiYWZ0ZXJTYXZlQ2VsbCIsInJvd0lkIiwiZWRpdENlbGwiLCJlZGl0aW5nIiwic2VsZWN0Um93IiwiY2xpY2tUb0VkaXQiLCJjbGlja1RvU2VsZWN0Iiwibm9uRWRpdGFibGVSb3dzIiwib3B0aW9uc1Jlc3QiLCJjZWxsRWRpdFJlc3QiLCJuZXdDZWxsRWRpdCIsImlzRGVmaW5lZCIsIm9uU3RhcnQiLCJvbkVzY2FwZSIsIm9uVXBkYXRlIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJzaGFwZSIsIm1vZGUiLCJvbmVPZiIsIm9uRXJyb3JNZXNzYWdlRGlzYXBwZWFyIiwiZnVuYyIsImJsdXJUb1NhdmUiLCJib29sIiwib25TdGFydEVkaXQiLCJ0aW1lVG9DbG9zZU1lc3NhZ2UiLCJudW1iZXIiLCJhbnkiLCJQcm92aWRlciIsIkNvbnN1bWVyIiwiY3JlYXRlRWRpdGluZ0NlbGwiLCJ3aXRoUm93TGV2ZWxDZWxsRWRpdCIsIlR5cGUiLCJzZWxlY3RSb3dFbmFibGVkIiwicmVuZGVyV2l0aENlbGxFZGl0Iiwia2V5IiwidmFsdWUiLCJlZGl0YWJsZVJvdyIsImxlbmd0aCIsImluZGV4T2YiLCJhdHRycyIsIndpdGhDb25zdW1lciIsImRpc3BsYXlOYW1lIiwiRWRpdGluZ0NlbGwiLCJyZW5kZXJXaXRoRWRpdGluZ0NlbGwiLCJjb250ZW50IiwiZWRpdENlbGxzdHlsZSIsImVkaXRDZWxsU3R5bGUiLCJlZGl0Q2VsbGNsYXNzZXMiLCJlZGl0Q2VsbENsYXNzZXMiLCJyb3dJbmRleCIsImNvbHVtbkluZGV4IiwiaW5kaWNhdG9yVGltZXIiLCJjbGVhclRpbWVyIiwiaGFuZGxlQmx1ciIsImhhbmRsZUNsaWNrIiwiaGFuZGxlS2V5RG93biIsImJlZm9yZUNvbXBsZXRlIiwiYXN5bmNiZWZvcmVDb21wZXRlIiwiZGlzcGxheUVycm9yTWVzc2FnZSIsImludmFsaWRNZXNzYWdlIiwiY3JlYXRlVGltZXIiLCJjbGVhclRpbWVvdXQiLCJzbGVlcCIsInZhbGlkIiwidmFsaWRhdG9yIiwidmFsaWRhdGVGb3JtIiwiZWRpdG9yIiwiZ2V0VmFsdWUiLCJlIiwia2V5Q29kZSIsInRhcmdldCIsInRhZ05hbWUiLCJzdG9wUHJvcGFnYXRpb24iLCJjbGFzc05hbWUiLCJzdHlsZSIsImF1dG9TZWxlY3RUZXh0IiwiaGFzRXJyb3IiLCJjdXN0b21FZGl0b3JDbGFzcyIsImVkaXRvckNsYXNzZXMiLCJlZGl0b3JTdHlsZSIsImVkaXRvckNsYXNzIiwiYW5pbWF0ZWQiLCJzaGFrZSIsImVkaXRvclByb3BzIiwicmVmIiwibm9kZSIsImRlZmF1bHRWYWx1ZSIsIm9uS2V5RG93biIsIm9uQmx1ciIsImRpZE1vdW50IiwiaXNEZWZhdWx0RWRpdG9yRGVmaW5lZCIsImVkaXRvclJlbmRlcmVyIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwiRHJvcERvd25FZGl0b3IiLCJnZXRPcHRpb25zIiwic2V0T3B0aW9ucyIsInNlbGVjdCIsImZvY3VzIiwicmVzdCIsImF0dHIiLCJtYXAiLCJsYWJlbCIsIm9uZU9mVHlwZSIsImFycmF5T2YiLCJ1bmRlZmluZWQiLCJUZXh0QXJlYUVkaXRvciIsInRleHQiLCJzaGlmdEtleSIsIkNoZWNrQm94RWRpdG9yIiwiY2hlY2tlZCIsInRvU3RyaW5nIiwic3BsaXQiLCJoYW5kbGVDaGFuZ2UiLCJjaGVja2JveCIsInBvc2l0aXZlIiwibmVnYXRpdmUiLCJvbkNoYW5nZSIsIkRhdGVFZGl0b3IiLCJkYXRlIiwidmFsdWVBc0RhdGUiLCJEYXRlIiwiVGV4dEVkaXRvciIsIkVkaXRvckluZGljYXRvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTs7Ozs7OztBQzdEQSwrQzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLEtBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLENBQTRCO0FBQ3ZEOzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQjs7QUFFaEI7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNB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RSxjQUFLLE1BRlA7QUFHRSxtQkFBWUw7QUFIZCxTQUlPbUIsSUFKUCxFQURGO0FBUUQ7Ozs7RUF4QnNCekYsZ0I7O0FBMkJ6QmdILFdBQVcvRyxTQUFYLEdBQXVCO0FBQ3JCOEQsYUFBVzdELG9CQUFVMkYsU0FBVixDQUFvQixDQUM3QjNGLG9CQUFVZ0YsTUFEbUIsRUFFN0JoRixvQkFBVUcsTUFGbUIsQ0FBcEIsQ0FEVTtBQUtyQnVFLGdCQUFjMUUsb0JBQVUyRixTQUFWLENBQW9CLENBQ2hDM0Ysb0JBQVVnRixNQURzQixFQUVoQ2hGLG9CQUFVYSxNQUZzQixDQUFwQixDQUxPO0FBU3JCa0Qsa0JBQWdCL0Qsb0JBQVVVLElBVEw7QUFVckJtRSxZQUFVN0Usb0JBQVVRO0FBVkMsQ0FBdkI7QUFZQXNHLFdBQVc3QixZQUFYLEdBQTBCO0FBQ3hCcEIsYUFBVyxJQURhO0FBRXhCYSxnQkFBYyxFQUZVO0FBR3hCWCxrQkFBZ0IsS0FIUTtBQUl4QmMsWUFBVWdCO0FBSmMsQ0FBMUI7a0JBTWVpQixVOzs7Ozs7Ozs7Ozs7O0FDakRmOzs7O0FBQ0E7Ozs7OztBQUZBO0FBSUEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLE1BQUdoRSxjQUFILFFBQUdBLGNBQUg7QUFBQSxTQUVwQjtBQUFBO0FBQUEsTUFBSyxXQUFVLHVCQUFmLEVBQXVDLE1BQUssT0FBNUM7QUFDRTtBQUFBO0FBQUE7QUFBVUE7QUFBVjtBQURGLEdBRm9CO0FBQUEsQ0FBeEI7O0FBT0FnRSxnQkFBZ0JoSCxTQUFoQixHQUE0QjtBQUMxQmdELGtCQUFnQi9DLG9CQUFVZ0Y7QUFEQSxDQUE1Qjs7QUFJQStCLGdCQUFnQjlCLFlBQWhCLEdBQStCO0FBQzdCbEMsa0JBQWdCO0FBRGEsQ0FBL0I7a0JBR2VnRSxlIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC10YWJsZTItZWRpdG9yL2Rpc3QvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1lZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSZWFjdEJvb3RzdHJhcFRhYmxlMkVkaXRvclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSZWFjdEJvb3RzdHJhcFRhYmxlMkVkaXRvclwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGNkNzJkOTUzOTAzNDQ2N2VjNzM2IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGNvbnN0IFRJTUVfVE9fQ0xPU0VfTUVTU0FHRSA9IDMwMDA7XG5leHBvcnQgY29uc3QgREVMQVlfRk9SX0RCQ0xJQ0sgPSAyMDA7XG5leHBvcnQgY29uc3QgQ0xJQ0tfVE9fQ0VMTF9FRElUID0gJ2NsaWNrJztcbmV4cG9ydCBjb25zdCBEQkNMSUNLX1RPX0NFTExfRURJVCA9ICdkYmNsaWNrJztcblxuZXhwb3J0IGNvbnN0IEVESVRUWVBFID0ge1xuICBURVhUOiAndGV4dCcsXG4gIFNFTEVDVDogJ3NlbGVjdCcsXG4gIFRFWFRBUkVBOiAndGV4dGFyZWEnLFxuICBDSEVDS0JPWDogJ2NoZWNrYm94JyxcbiAgREFURTogJ2RhdGUnXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1lZGl0b3Ivc3JjL2NvbnN0LmpzIiwiLyogZXNsaW50IGRpc2FibGUtbmV4dC1saW5lOiAwICovXG4vKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuLyogZXNsaW50IGNhbWVsY2FzZTogMCAqL1xuLyogZXNsaW50IHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IENMSUNLX1RPX0NFTExfRURJVCwgREJDTElDS19UT19DRUxMX0VESVQgfSBmcm9tICcuL2NvbnN0JztcblxuY29uc3QgQ2VsbEVkaXRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZGVmYXVsdCAoXG4gIF8sXG4gIGRhdGFPcGVyYXRvcixcbiAgaXNSZW1vdGVDZWxsRWRpdCxcbiAgaGFuZGxlQ2VsbENoYW5nZVxuKSA9PiB7XG4gIGNsYXNzIENlbGxFZGl0UHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICAgIHNlbGVjdFJvdzogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIG9wdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIG1vZGU6IFByb3BUeXBlcy5vbmVPZihbQ0xJQ0tfVE9fQ0VMTF9FRElULCBEQkNMSUNLX1RPX0NFTExfRURJVF0pLmlzUmVxdWlyZWQsXG4gICAgICAgIG9uRXJyb3JNZXNzYWdlRGlzYXBwZWFyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgYmx1clRvU2F2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGJlZm9yZVNhdmVDZWxsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgYWZ0ZXJTYXZlQ2VsbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG9uU3RhcnRFZGl0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgbm9uRWRpdGFibGVSb3dzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgdGltZVRvQ2xvc2VNZXNzYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBlcnJvck1lc3NhZ2U6IFByb3BUeXBlcy5hbnlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuZG9VcGRhdGUgPSB0aGlzLmRvVXBkYXRlLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnN0YXJ0RWRpdGluZyA9IHRoaXMuc3RhcnRFZGl0aW5nLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmVzY2FwZUVkaXRpbmcgPSB0aGlzLmVzY2FwZUVkaXRpbmcuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuY29tcGxldGVFZGl0aW5nID0gdGhpcy5jb21wbGV0ZUVkaXRpbmcuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuaGFuZGxlQ2VsbFVwZGF0ZSA9IHRoaXMuaGFuZGxlQ2VsbFVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgcmlkeDogbnVsbCxcbiAgICAgICAgY2lkeDogbnVsbCxcbiAgICAgICAgbWVzc2FnZTogbnVsbFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMuY2VsbEVkaXQgJiYgaXNSZW1vdGVDZWxsRWRpdCgpKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMuY2VsbEVkaXQub3B0aW9ucy5lcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgICAgICBtZXNzYWdlOiBuZXh0UHJvcHMuY2VsbEVkaXQub3B0aW9ucy5lcnJvck1lc3NhZ2VcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lc2NhcGVFZGl0aW5nKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVDZWxsVXBkYXRlKHJvdywgY29sdW1uLCBuZXdWYWx1ZSkge1xuICAgICAgY29uc3QgbmV3VmFsdWVXaXRoVHlwZSA9IGRhdGFPcGVyYXRvci50eXBlQ29udmVydChjb2x1bW4udHlwZSwgbmV3VmFsdWUpO1xuICAgICAgY29uc3QgeyBjZWxsRWRpdCB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHsgYmVmb3JlU2F2ZUNlbGwgfSA9IGNlbGxFZGl0Lm9wdGlvbnM7XG4gICAgICBjb25zdCBvbGRWYWx1ZSA9IF8uZ2V0KHJvdywgY29sdW1uLmRhdGFGaWVsZCk7XG4gICAgICBjb25zdCBiZWZvcmVTYXZlQ2VsbERvbmUgPSAocmVzdWx0ID0gdHJ1ZSkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgdGhpcy5kb1VwZGF0ZShyb3csIGNvbHVtbiwgbmV3VmFsdWVXaXRoVHlwZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lc2NhcGVFZGl0aW5nKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKGJlZm9yZVNhdmVDZWxsKSkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBiZWZvcmVTYXZlQ2VsbChcbiAgICAgICAgICBvbGRWYWx1ZSxcbiAgICAgICAgICBuZXdWYWx1ZVdpdGhUeXBlLFxuICAgICAgICAgIHJvdyxcbiAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgYmVmb3JlU2F2ZUNlbGxEb25lXG4gICAgICAgICk7XG4gICAgICAgIGlmIChfLmlzT2JqZWN0KHJlc3VsdCkgJiYgcmVzdWx0LmFzeW5jKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmRvVXBkYXRlKHJvdywgY29sdW1uLCBuZXdWYWx1ZVdpdGhUeXBlKTtcbiAgICB9XG5cbiAgICBkb1VwZGF0ZShyb3csIGNvbHVtbiwgbmV3VmFsdWUpIHtcbiAgICAgIGNvbnN0IHsga2V5RmllbGQsIGNlbGxFZGl0LCBkYXRhIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgeyBhZnRlclNhdmVDZWxsIH0gPSBjZWxsRWRpdC5vcHRpb25zO1xuICAgICAgY29uc3Qgcm93SWQgPSBfLmdldChyb3csIGtleUZpZWxkKTtcbiAgICAgIGNvbnN0IG9sZFZhbHVlID0gXy5nZXQocm93LCBjb2x1bW4uZGF0YUZpZWxkKTtcbiAgICAgIGlmIChpc1JlbW90ZUNlbGxFZGl0KCkpIHtcbiAgICAgICAgaGFuZGxlQ2VsbENoYW5nZShyb3dJZCwgY29sdW1uLmRhdGFGaWVsZCwgbmV3VmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YU9wZXJhdG9yLmVkaXRDZWxsKGRhdGEsIGtleUZpZWxkLCByb3dJZCwgY29sdW1uLmRhdGFGaWVsZCwgbmV3VmFsdWUpO1xuICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGFmdGVyU2F2ZUNlbGwpKSBhZnRlclNhdmVDZWxsKG9sZFZhbHVlLCBuZXdWYWx1ZSwgcm93LCBjb2x1bW4pO1xuICAgICAgICB0aGlzLmNvbXBsZXRlRWRpdGluZygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBsZXRlRWRpdGluZygpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgcmlkeDogbnVsbCxcbiAgICAgICAgY2lkeDogbnVsbCxcbiAgICAgICAgbWVzc2FnZTogbnVsbFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHN0YXJ0RWRpdGluZyhyaWR4LCBjaWR4KSB7XG4gICAgICBjb25zdCBlZGl0aW5nID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgICAgcmlkeCxcbiAgICAgICAgICBjaWR4XG4gICAgICAgIH0pKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHsgc2VsZWN0Um93IH0gPSB0aGlzLnByb3BzO1xuICAgICAgaWYgKCFzZWxlY3RSb3cgfHwgKHNlbGVjdFJvdy5jbGlja1RvRWRpdCB8fCAhc2VsZWN0Um93LmNsaWNrVG9TZWxlY3QpKSBlZGl0aW5nKCk7XG4gICAgfVxuXG4gICAgZXNjYXBlRWRpdGluZygpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgcmlkeDogbnVsbCxcbiAgICAgICAgY2lkeDogbnVsbFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY2VsbEVkaXQ6IHtcbiAgICAgICAgICBvcHRpb25zOiB7IG5vbkVkaXRhYmxlUm93cywgZXJyb3JNZXNzYWdlLCAuLi5vcHRpb25zUmVzdCB9LFxuICAgICAgICAgIC4uLmNlbGxFZGl0UmVzdFxuICAgICAgICB9XG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3QgbmV3Q2VsbEVkaXQgPSB7XG4gICAgICAgIC4uLm9wdGlvbnNSZXN0LFxuICAgICAgICAuLi5jZWxsRWRpdFJlc3QsXG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgIG5vbkVkaXRhYmxlUm93czogXy5pc0RlZmluZWQobm9uRWRpdGFibGVSb3dzKSA/IG5vbkVkaXRhYmxlUm93cygpIDogW10sXG4gICAgICAgIG9uU3RhcnQ6IHRoaXMuc3RhcnRFZGl0aW5nLFxuICAgICAgICBvbkVzY2FwZTogdGhpcy5lc2NhcGVFZGl0aW5nLFxuICAgICAgICBvblVwZGF0ZTogdGhpcy5oYW5kbGVDZWxsVXBkYXRlXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q2VsbEVkaXRDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgdmFsdWU9eyB7IC4uLm5ld0NlbGxFZGl0IH0gfVxuICAgICAgICA+XG4gICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPC9DZWxsRWRpdENvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIFByb3ZpZGVyOiBDZWxsRWRpdFByb3ZpZGVyXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgQ29uc3VtZXIgPSBDZWxsRWRpdENvbnRleHQuQ29uc3VtZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLWVkaXRvci9zcmMvY29udGV4dC5qcyIsImltcG9ydCBjcmVhdGVDb250ZXh0IGZyb20gJy4vc3JjL2NvbnRleHQnO1xuaW1wb3J0IHdpdGhSb3dMZXZlbENlbGxFZGl0IGZyb20gJy4vc3JjL3Jvdy1jb25zdW1lcic7XG5pbXBvcnQgY3JlYXRlRWRpdGluZ0NlbGwgZnJvbSAnLi9zcmMvZWRpdGluZy1jZWxsLWNvbnN1bWVyJztcbmltcG9ydCB7XG4gIEVESVRUWVBFLFxuICBEQkNMSUNLX1RPX0NFTExfRURJVCxcbiAgREVMQVlfRk9SX0RCQ0xJQ0tcbn0gZnJvbSAnLi9zcmMvY29uc3QnO1xuXG5leHBvcnQgZGVmYXVsdCAob3B0aW9ucyA9IHt9KSA9PiAoe1xuICBjcmVhdGVDb250ZXh0LFxuICBjcmVhdGVFZGl0aW5nQ2VsbCxcbiAgd2l0aFJvd0xldmVsQ2VsbEVkaXQsXG4gIERCQ0xJQ0tfVE9fQ0VMTF9FRElULFxuICBERUxBWV9GT1JfREJDTElDSyxcbiAgb3B0aW9uc1xufSk7XG5cbmV4cG9ydCBjb25zdCBUeXBlID0gRURJVFRZUEU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLWVkaXRvci9pbmRleC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbVxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZW1wdHlGdW5jdGlvbjtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbnZhciBlbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9O1xuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiBhcmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgREVMQVlfRk9SX0RCQ0xJQ0ssIERCQ0xJQ0tfVE9fQ0VMTF9FRElULCBDTElDS19UT19DRUxMX0VESVQgfSBmcm9tICcuL2NvbnN0JztcbmltcG9ydCB7IENvbnN1bWVyIH0gZnJvbSAnLi9jb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgKENvbXBvbmVudCwgc2VsZWN0Um93RW5hYmxlZCkgPT4ge1xuICBjb25zdCByZW5kZXJXaXRoQ2VsbEVkaXQgPSAocHJvcHMsIGNlbGxFZGl0KSA9PiB7XG4gICAgY29uc3Qga2V5ID0gcHJvcHMudmFsdWU7XG4gICAgY29uc3QgZWRpdGFibGVSb3cgPSAhKFxuICAgICAgY2VsbEVkaXQubm9uRWRpdGFibGVSb3dzLmxlbmd0aCA+IDAgJiZcbiAgICAgIGNlbGxFZGl0Lm5vbkVkaXRhYmxlUm93cy5pbmRleE9mKGtleSkgPiAtMVxuICAgICk7XG5cbiAgICBjb25zdCBhdHRycyA9IHt9O1xuXG4gICAgaWYgKHNlbGVjdFJvd0VuYWJsZWQgJiYgY2VsbEVkaXQubW9kZSA9PT0gREJDTElDS19UT19DRUxMX0VESVQpIHtcbiAgICAgIGF0dHJzLkRFTEFZX0ZPUl9EQkNMSUNLID0gREVMQVlfRk9SX0RCQ0xJQ0s7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgeyAuLi5wcm9wcyB9XG4gICAgICAgIHsgLi4uYXR0cnMgfVxuICAgICAgICBlZGl0aW5nUm93SWR4PXsgY2VsbEVkaXQucmlkeCB9XG4gICAgICAgIGVkaXRpbmdDb2xJZHg9eyBjZWxsRWRpdC5jaWR4IH1cbiAgICAgICAgZWRpdGFibGU9eyBlZGl0YWJsZVJvdyB9XG4gICAgICAgIG9uU3RhcnQ9eyBjZWxsRWRpdC5vblN0YXJ0IH1cbiAgICAgICAgY2xpY2tUb0VkaXQ9eyBjZWxsRWRpdC5tb2RlID09PSBDTElDS19UT19DRUxMX0VESVQgfVxuICAgICAgICBkYmNsaWNrVG9FZGl0PXsgY2VsbEVkaXQubW9kZSA9PT0gREJDTElDS19UT19DRUxMX0VESVQgfVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuICBmdW5jdGlvbiB3aXRoQ29uc3VtZXIocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnN1bWVyPlxuICAgICAgICB7IGNlbGxFZGl0ID0+IHJlbmRlcldpdGhDZWxsRWRpdChwcm9wcywgY2VsbEVkaXQpIH1cbiAgICAgIDwvQ29uc3VtZXI+XG4gICAgKTtcbiAgfVxuXG4gIHdpdGhDb25zdW1lci5kaXNwbGF5TmFtZSA9ICdXaXRoQ2VsbEVkaXRpbmdSb3dDb25zdW1lcic7XG4gIHJldHVybiB3aXRoQ29uc3VtZXI7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1lZGl0b3Ivc3JjL3Jvdy1jb25zdW1lci5qcyIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29uc3VtZXIgfSBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IGNyZWF0ZUVkaXRpbmdDZWxsIGZyb20gJy4vZWRpdGluZy1jZWxsJztcblxuZXhwb3J0IGRlZmF1bHQgKF8sIG9uU3RhcnRFZGl0KSA9PiB7XG4gIGNvbnN0IEVkaXRpbmdDZWxsID0gY3JlYXRlRWRpdGluZ0NlbGwoXywgb25TdGFydEVkaXQpO1xuICBjb25zdCByZW5kZXJXaXRoRWRpdGluZ0NlbGwgPSAocHJvcHMsIGNlbGxFZGl0KSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IF8uZ2V0KHByb3BzLnJvdywgcHJvcHMuY29sdW1uLmRhdGFGaWVsZCk7XG4gICAgbGV0IGVkaXRDZWxsc3R5bGUgPSBwcm9wcy5jb2x1bW4uZWRpdENlbGxTdHlsZSB8fCB7fTtcbiAgICBsZXQgZWRpdENlbGxjbGFzc2VzID0gcHJvcHMuY29sdW1uLmVkaXRDZWxsQ2xhc3NlcztcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKHByb3BzLmNvbHVtbi5lZGl0Q2VsbFN0eWxlKSkge1xuICAgICAgZWRpdENlbGxzdHlsZSA9IHByb3BzLmNvbHVtbi5lZGl0Q2VsbFN0eWxlKFxuICAgICAgICBjb250ZW50LFxuICAgICAgICBwcm9wcy5yb3csXG4gICAgICAgIHByb3BzLnJvd0luZGV4LFxuICAgICAgICBwcm9wcy5jb2x1bW5JbmRleFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF8uaXNGdW5jdGlvbihwcm9wcy5jb2x1bW4uZWRpdENlbGxDbGFzc2VzKSkge1xuICAgICAgZWRpdENlbGxjbGFzc2VzID0gcHJvcHMuY29sdW1uLmVkaXRDZWxsQ2xhc3NlcyhcbiAgICAgICAgY29udGVudCxcbiAgICAgICAgcHJvcHMucm93LFxuICAgICAgICBwcm9wcy5yb3dJbmRleCxcbiAgICAgICAgcHJvcHMuY29sdW1uSW5kZXgpXG4gICAgICA7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxFZGl0aW5nQ2VsbFxuICAgICAgICB7IC4uLnByb3BzIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgZWRpdENlbGxjbGFzc2VzIH1cbiAgICAgICAgc3R5bGU9eyBlZGl0Q2VsbHN0eWxlIH1cbiAgICAgICAgeyAuLi5jZWxsRWRpdCB9XG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIHByb3BzID0+IChcbiAgICA8Q29uc3VtZXI+XG4gICAgICB7IGNlbGxFZGl0ID0+IHJlbmRlcldpdGhFZGl0aW5nQ2VsbChwcm9wcywgY2VsbEVkaXQpIH1cbiAgICA8L0NvbnN1bWVyPlxuICApO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItZWRpdG9yL3NyYy9lZGl0aW5nLWNlbGwtY29uc3VtZXIuanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuLyogZXNsaW50IG5vLXJldHVybi1hc3NpZ246IDAgKi9cbi8qIGVzbGludCBjbGFzcy1tZXRob2RzLXVzZS10aGlzOiAwICovXG4vKiBlc2xpbnQganN4LWExMXkvbm8tbm9uaW50ZXJhY3RpdmUtZWxlbWVudC1pbnRlcmFjdGlvbnM6IDAgKi9cbi8qIGVzbGludCBjYW1lbGNhc2U6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgRHJvcGRvd25FZGl0b3IgZnJvbSAnLi9kcm9wZG93bi1lZGl0b3InO1xuaW1wb3J0IFRleHRBcmVhRWRpdG9yIGZyb20gJy4vdGV4dGFyZWEtZWRpdG9yJztcbmltcG9ydCBDaGVja0JveEVkaXRvciBmcm9tICcuL2NoZWNrYm94LWVkaXRvcic7XG5pbXBvcnQgRGF0ZUVkaXRvciBmcm9tICcuL2RhdGUtZWRpdG9yJztcbmltcG9ydCBUZXh0RWRpdG9yIGZyb20gJy4vdGV4dC1lZGl0b3InO1xuaW1wb3J0IEVkaXRvckluZGljYXRvciBmcm9tICcuL2VkaXRvci1pbmRpY2F0b3InO1xuaW1wb3J0IHsgVElNRV9UT19DTE9TRV9NRVNTQUdFLCBFRElUVFlQRSB9IGZyb20gJy4vY29uc3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoXywgb25TdGFydEVkaXQpID0+XG4gIGNsYXNzIEVkaXRpbmdDZWxsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgcm93OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICByb3dJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgY29sdW1uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBjb2x1bW5JbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgb25VcGRhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBvbkVzY2FwZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHRpbWVUb0Nsb3NlTWVzc2FnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIGF1dG9TZWxlY3RUZXh0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfVxuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIHRpbWVUb0Nsb3NlTWVzc2FnZTogVElNRV9UT19DTE9TRV9NRVNTQUdFLFxuICAgICAgY2xhc3NOYW1lOiBudWxsLFxuICAgICAgYXV0b1NlbGVjdFRleHQ6IGZhbHNlLFxuICAgICAgc3R5bGU6IHt9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuaW5kaWNhdG9yVGltZXIgPSBudWxsO1xuICAgICAgdGhpcy5jbGVhclRpbWVyID0gdGhpcy5jbGVhclRpbWVyLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmhhbmRsZUJsdXIgPSB0aGlzLmhhbmRsZUJsdXIuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmhhbmRsZUtleURvd24gPSB0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuYmVmb3JlQ29tcGxldGUgPSB0aGlzLmJlZm9yZUNvbXBsZXRlLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmFzeW5jYmVmb3JlQ29tcGV0ZSA9IHRoaXMuYXN5bmNiZWZvcmVDb21wZXRlLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmRpc3BsYXlFcnJvck1lc3NhZ2UgPSB0aGlzLmRpc3BsYXlFcnJvck1lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIGludmFsaWRNZXNzYWdlOiBudWxsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5jbGVhclRpbWVyKCk7XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoeyBtZXNzYWdlIH0pIHtcbiAgICAgIGlmIChfLmlzRGVmaW5lZChtZXNzYWdlKSkge1xuICAgICAgICB0aGlzLmNyZWF0ZVRpbWVyKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgICBpbnZhbGlkTWVzc2FnZTogbWVzc2FnZVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJUaW1lcigpIHtcbiAgICAgIGlmICh0aGlzLmluZGljYXRvclRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmluZGljYXRvclRpbWVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVUaW1lcigpIHtcbiAgICAgIHRoaXMuY2xlYXJUaW1lcigpO1xuICAgICAgY29uc3QgeyB0aW1lVG9DbG9zZU1lc3NhZ2UsIG9uRXJyb3JNZXNzYWdlRGlzYXBwZWFyIH0gPSB0aGlzLnByb3BzO1xuICAgICAgdGhpcy5pbmRpY2F0b3JUaW1lciA9IF8uc2xlZXAoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgICAgaW52YWxpZE1lc3NhZ2U6IG51bGxcbiAgICAgICAgfSkpO1xuICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKG9uRXJyb3JNZXNzYWdlRGlzYXBwZWFyKSkgb25FcnJvck1lc3NhZ2VEaXNhcHBlYXIoKTtcbiAgICAgIH0sIHRpbWVUb0Nsb3NlTWVzc2FnZSk7XG4gICAgfVxuXG4gICAgZGlzcGxheUVycm9yTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgIGludmFsaWRNZXNzYWdlOiBtZXNzYWdlXG4gICAgICB9KSk7XG4gICAgICB0aGlzLmNyZWF0ZVRpbWVyKCk7XG4gICAgfVxuXG4gICAgYXN5bmNiZWZvcmVDb21wZXRlKG5ld1ZhbHVlKSB7XG4gICAgICByZXR1cm4gKHJlc3VsdCA9IHsgdmFsaWQ6IHRydWUgfSkgPT4ge1xuICAgICAgICBjb25zdCB7IHZhbGlkLCBtZXNzYWdlIH0gPSByZXN1bHQ7XG4gICAgICAgIGNvbnN0IHsgb25VcGRhdGUsIHJvdywgY29sdW1uIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5RXJyb3JNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBvblVwZGF0ZShyb3csIGNvbHVtbiwgbmV3VmFsdWUpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBiZWZvcmVDb21wbGV0ZShuZXdWYWx1ZSkge1xuICAgICAgY29uc3QgeyBvblVwZGF0ZSwgcm93LCBjb2x1bW4gfSA9IHRoaXMucHJvcHM7XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKGNvbHVtbi52YWxpZGF0b3IpKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRlRm9ybSA9IGNvbHVtbi52YWxpZGF0b3IoXG4gICAgICAgICAgbmV3VmFsdWUsXG4gICAgICAgICAgcm93LFxuICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICB0aGlzLmFzeW5jYmVmb3JlQ29tcGV0ZShuZXdWYWx1ZSlcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKF8uaXNPYmplY3QodmFsaWRhdGVGb3JtKSkge1xuICAgICAgICAgIGlmICh2YWxpZGF0ZUZvcm0uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2UgaWYgKCF2YWxpZGF0ZUZvcm0udmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUVycm9yTWVzc2FnZSh2YWxpZGF0ZUZvcm0ubWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBvblVwZGF0ZShyb3csIGNvbHVtbiwgbmV3VmFsdWUpO1xuICAgIH1cblxuICAgIGhhbmRsZUJsdXIoKSB7XG4gICAgICBjb25zdCB7IG9uRXNjYXBlLCBibHVyVG9TYXZlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgaWYgKGJsdXJUb1NhdmUpIHtcbiAgICAgICAgdGhpcy5iZWZvcmVDb21wbGV0ZSh0aGlzLmVkaXRvci5nZXRWYWx1ZSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uRXNjYXBlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlS2V5RG93bihlKSB7XG4gICAgICBjb25zdCB7IG9uRXNjYXBlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gRVNDXG4gICAgICAgIG9uRXNjYXBlKCk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHsgLy8gRU5URVJcbiAgICAgICAgdGhpcy5iZWZvcmVDb21wbGV0ZSh0aGlzLmVkaXRvci5nZXRWYWx1ZSgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVDbGljayhlKSB7XG4gICAgICBpZiAoZS50YXJnZXQudGFnTmFtZSAhPT0gJ1REJykge1xuICAgICAgICAvLyBUbyBhdm9pZCB0aGUgcm93IHNlbGVjdGlvbiBldmVudCBiZSB0cmlnZ2VyZWQsXG4gICAgICAgIC8vIFdoZW4gdXNlciBkZWZpbmUgc2VsZWN0Um93LmNsaWNrVG9TZWxlY3QgYW5kIHNlbGVjdFJvdy5jbGlja1RvRWRpdFxuICAgICAgICAvLyBXZSBzaG91bGRuJ3QgdHJpZ2dlciBzZWxlY3Rpb24gZXZlbnQgZXZlbiBpZiB1c2VyIGNsaWNrIG9uIHRoZSBjZWxsIGVkaXRvcihpbnB1dClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBsZXQgZWRpdG9yO1xuICAgICAgY29uc3QgeyByb3csIGNvbHVtbiwgY2xhc3NOYW1lLCBzdHlsZSwgcm93SW5kZXgsIGNvbHVtbkluZGV4LCBhdXRvU2VsZWN0VGV4dCB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHsgZGF0YUZpZWxkIH0gPSBjb2x1bW47XG5cbiAgICAgIGNvbnN0IHZhbHVlID0gXy5nZXQocm93LCBkYXRhRmllbGQpO1xuICAgICAgY29uc3QgaGFzRXJyb3IgPSBfLmlzRGVmaW5lZCh0aGlzLnN0YXRlLmludmFsaWRNZXNzYWdlKTtcblxuICAgICAgbGV0IGN1c3RvbUVkaXRvckNsYXNzID0gY29sdW1uLmVkaXRvckNsYXNzZXMgfHwgJyc7XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKGNvbHVtbi5lZGl0b3JDbGFzc2VzKSkge1xuICAgICAgICBjdXN0b21FZGl0b3JDbGFzcyA9IGNvbHVtbi5lZGl0b3JDbGFzc2VzKHZhbHVlLCByb3csIHJvd0luZGV4LCBjb2x1bW5JbmRleCk7XG4gICAgICB9XG5cbiAgICAgIGxldCBlZGl0b3JTdHlsZSA9IGNvbHVtbi5lZGl0b3JTdHlsZSB8fCB7fTtcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24oY29sdW1uLmVkaXRvclN0eWxlKSkge1xuICAgICAgICBlZGl0b3JTdHlsZSA9IGNvbHVtbi5lZGl0b3JTdHlsZSh2YWx1ZSwgcm93LCByb3dJbmRleCwgY29sdW1uSW5kZXgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBlZGl0b3JDbGFzcyA9IGNzKHtcbiAgICAgICAgYW5pbWF0ZWQ6IGhhc0Vycm9yLFxuICAgICAgICBzaGFrZTogaGFzRXJyb3JcbiAgICAgIH0sIGN1c3RvbUVkaXRvckNsYXNzKTtcblxuICAgICAgbGV0IGVkaXRvclByb3BzID0ge1xuICAgICAgICByZWY6IG5vZGUgPT4gdGhpcy5lZGl0b3IgPSBub2RlLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IHZhbHVlLFxuICAgICAgICBzdHlsZTogZWRpdG9yU3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZTogZWRpdG9yQ2xhc3MsXG4gICAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duLFxuICAgICAgICBvbkJsdXI6IHRoaXMuaGFuZGxlQmx1clxuICAgICAgfTtcblxuICAgICAgaWYgKG9uU3RhcnRFZGl0KSB7XG4gICAgICAgIGVkaXRvclByb3BzLmRpZE1vdW50ID0gKCkgPT4gb25TdGFydEVkaXQocm93LCBjb2x1bW4sIHJvd0luZGV4LCBjb2x1bW5JbmRleCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzRGVmYXVsdEVkaXRvckRlZmluZWQgPSBfLmlzT2JqZWN0KGNvbHVtbi5lZGl0b3IpO1xuXG4gICAgICBpZiAoaXNEZWZhdWx0RWRpdG9yRGVmaW5lZCkge1xuICAgICAgICBlZGl0b3JQcm9wcyA9IHtcbiAgICAgICAgICAuLi5lZGl0b3JQcm9wcyxcbiAgICAgICAgICAuLi5jb2x1bW4uZWRpdG9yXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKF8uaXNGdW5jdGlvbihjb2x1bW4uZWRpdG9yUmVuZGVyZXIpKSB7XG4gICAgICAgIGVkaXRvclByb3BzID0ge1xuICAgICAgICAgIC4uLmVkaXRvclByb3BzLFxuICAgICAgICAgIG9uVXBkYXRlOiB0aGlzLmJlZm9yZUNvbXBsZXRlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChfLmlzRnVuY3Rpb24oY29sdW1uLmVkaXRvclJlbmRlcmVyKSkge1xuICAgICAgICBlZGl0b3IgPSBjb2x1bW4uZWRpdG9yUmVuZGVyZXIoZWRpdG9yUHJvcHMsIHZhbHVlLCByb3csIGNvbHVtbiwgcm93SW5kZXgsIGNvbHVtbkluZGV4KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNEZWZhdWx0RWRpdG9yRGVmaW5lZCAmJiBjb2x1bW4uZWRpdG9yLnR5cGUgPT09IEVESVRUWVBFLlNFTEVDVCkge1xuICAgICAgICBlZGl0b3IgPSA8RHJvcGRvd25FZGl0b3IgeyAuLi5lZGl0b3JQcm9wcyB9IHJvdz17IHJvdyB9IGNvbHVtbj17IGNvbHVtbiB9IC8+O1xuICAgICAgfSBlbHNlIGlmIChpc0RlZmF1bHRFZGl0b3JEZWZpbmVkICYmIGNvbHVtbi5lZGl0b3IudHlwZSA9PT0gRURJVFRZUEUuVEVYVEFSRUEpIHtcbiAgICAgICAgZWRpdG9yID0gPFRleHRBcmVhRWRpdG9yIHsgLi4uZWRpdG9yUHJvcHMgfSBhdXRvU2VsZWN0VGV4dD17IGF1dG9TZWxlY3RUZXh0IH0gLz47XG4gICAgICB9IGVsc2UgaWYgKGlzRGVmYXVsdEVkaXRvckRlZmluZWQgJiYgY29sdW1uLmVkaXRvci50eXBlID09PSBFRElUVFlQRS5DSEVDS0JPWCkge1xuICAgICAgICBlZGl0b3IgPSA8Q2hlY2tCb3hFZGl0b3IgeyAuLi5lZGl0b3JQcm9wcyB9IC8+O1xuICAgICAgfSBlbHNlIGlmIChpc0RlZmF1bHRFZGl0b3JEZWZpbmVkICYmIGNvbHVtbi5lZGl0b3IudHlwZSA9PT0gRURJVFRZUEUuREFURSkge1xuICAgICAgICBlZGl0b3IgPSA8RGF0ZUVkaXRvciB7IC4uLmVkaXRvclByb3BzIH0gLz47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlZGl0b3IgPSA8VGV4dEVkaXRvciB7IC4uLmVkaXRvclByb3BzIH0gYXV0b1NlbGVjdFRleHQ9eyBhdXRvU2VsZWN0VGV4dCB9IC8+O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8dGRcbiAgICAgICAgICBjbGFzc05hbWU9eyBjcygncmVhY3QtYm9vdHN0cmFwLXRhYmxlLWVkaXRpbmctY2VsbCcsIGNsYXNzTmFtZSkgfVxuICAgICAgICAgIHN0eWxlPXsgc3R5bGUgfVxuICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZUNsaWNrIH1cbiAgICAgICAgPlxuICAgICAgICAgIHsgZWRpdG9yIH1cbiAgICAgICAgICB7IGhhc0Vycm9yID8gPEVkaXRvckluZGljYXRvciBpbnZhbGlkTWVzc2FnZT17IHRoaXMuc3RhdGUuaW52YWxpZE1lc3NhZ2UgfSAvPiA6IG51bGwgfVxuICAgICAgICA8L3RkPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLWVkaXRvci9zcmMvZWRpdGluZy1jZWxsLmpzIiwiLyogZXNsaW50IG5vLXJldHVybi1hc3NpZ246IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBEcm9wRG93bkVkaXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGxldCBvcHRpb25zID0gcHJvcHMub3B0aW9ucztcbiAgICBpZiAocHJvcHMuZ2V0T3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHByb3BzLmdldE9wdGlvbnMoXG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucy5iaW5kKHRoaXMpLFxuICAgICAgICB7XG4gICAgICAgICAgcm93OiBwcm9wcy5yb3csXG4gICAgICAgICAgY29sdW1uOiBwcm9wcy5jb2x1bW5cbiAgICAgICAgfVxuICAgICAgKSB8fCBbXTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZSA9IHsgb3B0aW9ucyB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBkZWZhdWx0VmFsdWUsIGRpZE1vdW50IH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2VsZWN0LnZhbHVlID0gZGVmYXVsdFZhbHVlO1xuICAgIHRoaXMuc2VsZWN0LmZvY3VzKCk7XG4gICAgaWYgKGRpZE1vdW50KSBkaWRNb3VudCgpO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wdGlvbnMgfSk7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3QudmFsdWU7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkZWZhdWx0VmFsdWUsIGRpZE1vdW50LCBnZXRPcHRpb25zLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZWRpdG9yQ2xhc3MgPSBjcygnZm9ybS1jb250cm9sIGVkaXRvciBlZGl0LXNlbGVjdCcsIGNsYXNzTmFtZSk7XG5cbiAgICBjb25zdCBhdHRyID0ge1xuICAgICAgLi4ucmVzdCxcbiAgICAgIGNsYXNzTmFtZTogZWRpdG9yQ2xhc3NcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWxlY3RcbiAgICAgICAgeyAuLi5hdHRyIH1cbiAgICAgICAgcmVmPXsgbm9kZSA9PiB0aGlzLnNlbGVjdCA9IG5vZGUgfVxuICAgICAgICBkZWZhdWx0VmFsdWU9eyBkZWZhdWx0VmFsdWUgfVxuICAgICAgPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLm1hcCgoeyBsYWJlbCwgdmFsdWUgfSkgPT4gKFxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9eyB2YWx1ZSB9IHZhbHVlPXsgdmFsdWUgfT57IGxhYmVsIH08L29wdGlvbj5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L3NlbGVjdD5cbiAgICApO1xuICB9XG59XG5cbkRyb3BEb3duRWRpdG9yLnByb3BUeXBlcyA9IHtcbiAgcm93OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNvbHVtbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlclxuICBdKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgb3B0aW9uczogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdmFsdWU6IFByb3BUeXBlcy5hbnlcbiAgICB9KSlcbiAgXSksXG4gIGRpZE1vdW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0T3B0aW9uczogUHJvcFR5cGVzLmZ1bmNcbn07XG5Ecm9wRG93bkVkaXRvci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJycsXG4gIGRlZmF1bHRWYWx1ZTogJycsXG4gIHN0eWxlOiB7fSxcbiAgb3B0aW9uczogW10sXG4gIGRpZE1vdW50OiB1bmRlZmluZWQsXG4gIGdldE9wdGlvbnM6IHVuZGVmaW5lZFxufTtcbmV4cG9ydCBkZWZhdWx0IERyb3BEb3duRWRpdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1lZGl0b3Ivc3JjL2Ryb3Bkb3duLWVkaXRvci5qcyIsIi8qIGVzbGludCBuby1yZXR1cm4tYXNzaWduOiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgVGV4dEFyZWFFZGl0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZUtleURvd24gPSB0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZGVmYXVsdFZhbHVlLCBkaWRNb3VudCwgYXV0b1NlbGVjdFRleHQgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy50ZXh0LnZhbHVlID0gZGVmYXVsdFZhbHVlO1xuICAgIHRoaXMudGV4dC5mb2N1cygpO1xuICAgIGlmIChhdXRvU2VsZWN0VGV4dCkgdGhpcy50ZXh0LnNlbGVjdCgpO1xuICAgIGlmIChkaWRNb3VudCkgZGlkTW91bnQoKTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnRleHQudmFsdWU7XG4gIH1cblxuICBoYW5kbGVLZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiAhZS5zaGlmdEtleSkgcmV0dXJuO1xuICAgIGlmICh0aGlzLnByb3BzLm9uS2V5RG93bikge1xuICAgICAgdGhpcy5wcm9wcy5vbktleURvd24oZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGVmYXVsdFZhbHVlLCBkaWRNb3VudCwgY2xhc3NOYW1lLCBhdXRvU2VsZWN0VGV4dCwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBlZGl0b3JDbGFzcyA9IGNzKCdmb3JtLWNvbnRyb2wgZWRpdG9yIGVkaXQtdGV4dGFyZWEnLCBjbGFzc05hbWUpO1xuICAgIHJldHVybiAoXG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgcmVmPXsgbm9kZSA9PiB0aGlzLnRleHQgPSBub2RlIH1cbiAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcbiAgICAgICAgY2xhc3NOYW1lPXsgZWRpdG9yQ2xhc3MgfVxuICAgICAgICB7IC4uLnJlc3QgfVxuICAgICAgICBvbktleURvd249eyB0aGlzLmhhbmRsZUtleURvd24gfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cblRleHRBcmVhRWRpdG9yLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSksXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyXG4gIF0pLFxuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICBhdXRvU2VsZWN0VGV4dDogUHJvcFR5cGVzLmJvb2wsXG4gIGRpZE1vdW50OiBQcm9wVHlwZXMuZnVuY1xufTtcblRleHRBcmVhRWRpdG9yLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJyxcbiAgZGVmYXVsdFZhbHVlOiAnJyxcbiAgYXV0b1NlbGVjdFRleHQ6IGZhbHNlLFxuICBvbktleURvd246IHVuZGVmaW5lZCxcbiAgZGlkTW91bnQ6IHVuZGVmaW5lZFxufTtcbmV4cG9ydCBkZWZhdWx0IFRleHRBcmVhRWRpdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1lZGl0b3Ivc3JjL3RleHRhcmVhLWVkaXRvci5qcyIsIi8qIGVzbGludCBuby1yZXR1cm4tYXNzaWduOiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgQ2hlY2tCb3hFZGl0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2hlY2tlZDogcHJvcHMuZGVmYXVsdFZhbHVlLnRvU3RyaW5nKCkgPT09IHByb3BzLnZhbHVlLnNwbGl0KCc6JylbMF1cbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZGlkTW91bnQgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5jaGVja2JveC5mb2N1cygpO1xuICAgIGlmIChkaWRNb3VudCkgZGlkTW91bnQoKTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIGNvbnN0IFtwb3NpdGl2ZSwgbmVnYXRpdmVdID0gdGhpcy5wcm9wcy52YWx1ZS5zcGxpdCgnOicpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrYm94LmNoZWNrZWQgPyBwb3NpdGl2ZSA6IG5lZ2F0aXZlO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkgdGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZTtcbiAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGNoZWNrZWQ6IHRhcmdldC5jaGVja2VkIH0pKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRlZmF1bHRWYWx1ZSwgZGlkTW91bnQsIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBlZGl0b3JDbGFzcyA9IGNzKCdlZGl0b3IgZWRpdC1jaHNlY2tib3ggY2hlY2tib3gnLCBjbGFzc05hbWUpO1xuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXRcbiAgICAgICAgcmVmPXsgbm9kZSA9PiB0aGlzLmNoZWNrYm94ID0gbm9kZSB9XG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIGNsYXNzTmFtZT17IGVkaXRvckNsYXNzIH1cbiAgICAgICAgeyAuLi5yZXN0IH1cbiAgICAgICAgY2hlY2tlZD17IHRoaXMuc3RhdGUuY2hlY2tlZCB9XG4gICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5oYW5kbGVDaGFuZ2UgfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbkNoZWNrQm94RWRpdG9yLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSksXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgZGlkTW91bnQ6IFByb3BUeXBlcy5mdW5jXG59O1xuQ2hlY2tCb3hFZGl0b3IuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxuICB2YWx1ZTogJ29uOm9mZicsXG4gIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gIG9uQ2hhbmdlOiB1bmRlZmluZWQsXG4gIGRpZE1vdW50OiB1bmRlZmluZWRcbn07XG5leHBvcnQgZGVmYXVsdCBDaGVja0JveEVkaXRvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItZWRpdG9yL3NyYy9jaGVja2JveC1lZGl0b3IuanMiLCIvKiBlc2xpbnQgbm8tcmV0dXJuLWFzc2lnbjogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIERhdGVFZGl0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGRlZmF1bHRWYWx1ZSwgZGlkTW91bnQgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5kYXRlLnZhbHVlQXNEYXRlID0gbmV3IERhdGUoZGVmYXVsdFZhbHVlKTtcbiAgICB0aGlzLmRhdGUuZm9jdXMoKTtcbiAgICBpZiAoZGlkTW91bnQpIGRpZE1vdW50KCk7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlLnZhbHVlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGVmYXVsdFZhbHVlLCBkaWRNb3VudCwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGVkaXRvckNsYXNzID0gY3MoJ2Zvcm0tY29udHJvbCBlZGl0b3IgZWRpdC1kYXRlJywgY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0XG4gICAgICAgIHJlZj17IG5vZGUgPT4gdGhpcy5kYXRlID0gbm9kZSB9XG4gICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgY2xhc3NOYW1lPXsgZWRpdG9yQ2xhc3MgfVxuICAgICAgICB7IC4uLnJlc3QgfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbkRhdGVFZGl0b3IucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm9iamVjdFxuICBdKSxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkaWRNb3VudDogUHJvcFR5cGVzLmZ1bmNcbn07XG5EYXRlRWRpdG9yLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJyxcbiAgZGVmYXVsdFZhbHVlOiAnJyxcbiAgZGlkTW91bnQ6IHVuZGVmaW5lZFxufTtcbmV4cG9ydCBkZWZhdWx0IERhdGVFZGl0b3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLWVkaXRvci9zcmMvZGF0ZS1lZGl0b3IuanMiLCIvKiBlc2xpbnQgbm8tcmV0dXJuLWFzc2lnbjogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIFRleHRFZGl0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGRlZmF1bHRWYWx1ZSwgZGlkTW91bnQsIGF1dG9TZWxlY3RUZXh0IH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMudGV4dC52YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICB0aGlzLnRleHQuZm9jdXMoKTtcbiAgICBpZiAoYXV0b1NlbGVjdFRleHQpIHRoaXMudGV4dC5zZWxlY3QoKTtcbiAgICBpZiAoZGlkTW91bnQpIGRpZE1vdW50KCk7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0LnZhbHVlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGVmYXVsdFZhbHVlLCBkaWRNb3VudCwgY2xhc3NOYW1lLCBhdXRvU2VsZWN0VGV4dCwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBlZGl0b3JDbGFzcyA9IGNzKCdmb3JtLWNvbnRyb2wgZWRpdG9yIGVkaXQtdGV4dCcsIGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxpbnB1dFxuICAgICAgICByZWY9eyBub2RlID0+IHRoaXMudGV4dCA9IG5vZGUgfVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGNsYXNzTmFtZT17IGVkaXRvckNsYXNzIH1cbiAgICAgICAgeyAuLi5yZXN0IH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5UZXh0RWRpdG9yLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSksXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyXG4gIF0pLFxuICBhdXRvU2VsZWN0VGV4dDogUHJvcFR5cGVzLmJvb2wsXG4gIGRpZE1vdW50OiBQcm9wVHlwZXMuZnVuY1xufTtcblRleHRFZGl0b3IuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IG51bGwsXG4gIGRlZmF1bHRWYWx1ZTogJycsXG4gIGF1dG9TZWxlY3RUZXh0OiBmYWxzZSxcbiAgZGlkTW91bnQ6IHVuZGVmaW5lZFxufTtcbmV4cG9ydCBkZWZhdWx0IFRleHRFZGl0b3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLWVkaXRvci9zcmMvdGV4dC1lZGl0b3IuanMiLCIvKiBlc2xpbnQgbm8tcmV0dXJuLWFzc2lnbjogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEVkaXRvckluZGljYXRvciA9ICh7IGludmFsaWRNZXNzYWdlIH0pID0+XG4gIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlciBpblwiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgPHN0cm9uZz57IGludmFsaWRNZXNzYWdlIH08L3N0cm9uZz5cbiAgICA8L2Rpdj5cbiAgKTtcblxuRWRpdG9ySW5kaWNhdG9yLnByb3BUeXBlcyA9IHtcbiAgaW52YWxpZE1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbkVkaXRvckluZGljYXRvci5kZWZhdWx0UHJvcHMgPSB7XG4gIGludmFsaWRNZXNzYWdlOiBudWxsXG59O1xuZXhwb3J0IGRlZmF1bHQgRWRpdG9ySW5kaWNhdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1lZGl0b3Ivc3JjL2VkaXRvci1pbmRpY2F0b3IuanMiXSwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=react-bootstrap-table2-editor.js.map