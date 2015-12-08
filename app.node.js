module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(36);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(6);

  var _libLocation = __webpack_require__(5);

  var _libLocation2 = _interopRequireDefault(_libLocation);

  var _componentsLayout = __webpack_require__(11);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(17);
    }, '/500': function _() {
      return __webpack_require__(18);
    }, '/about': function about() {
      return __webpack_require__(19);
    }, '/blog': function blog() {
      return __webpack_require__(20);
    }, '/blog/test-article-one': function blogTestArticleOne() {
      return __webpack_require__(21);
    }, '/blog/test-article-two': function blogTestArticleTwo() {
      return __webpack_require__(22);
    }, '/': function _() {
      return __webpack_require__(23);
    }, '/rsvp': function rsvp() {
      return __webpack_require__(24);
    }, '/test': function test() {
      return __webpack_require__(25);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(path, callback) {
    var handler, component;
    return regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          handler = routes[path] || routes['/404'];
          context$1$0.next = 3;
          return regeneratorRuntime.awrap(handler());

        case 3:
          component = context$1$0.sent;
          context$1$0.next = 6;
          return regeneratorRuntime.awrap(callback(_react2['default'].createElement(
            _componentsLayout2['default'],
            null,
            _react2['default'].createElement(component)
          )));

        case 6:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  };

  function run() {
    var _this2 = this;

    var container = document.getElementById('app');
    _libLocation2['default'].listen(function (location) {
      route(location.pathname, function callee$2$0(component) {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.abrupt('return', _reactDom2['default'].render(component, container, function () {
                // Track the page view event via Google Analytics
                window.ga('send', 'pageview');
              }));

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, _this2);
      });
    });
  }

  if (_fbjsLibExecutionEnvironment.canUseDOM) {
    // Run the application when both DOM is ready
    // and page content is loaded
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', run);
    } else {
      window.attachEvent('onload', run);
    }
  }

  exports['default'] = { route: route, routes: routes };
  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

  module.exports = require("react-materialize");

/***/ },
/* 3 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(28);

  var _libLocation = __webpack_require__(5);

  var _libLocation2 = _interopRequireDefault(_libLocation);

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var Link = (function (_Component) {
    _inherits(Link, _Component);

    function Link() {
      _classCallCheck(this, Link);

      _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['to', 'children']);

        return _react2['default'].createElement(
          'a',
          _extends({ onClick: Link.handleClick.bind(this) }, props),
          children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        children: _react.PropTypes.element.isRequired,
        state: _react.PropTypes.object,
        onClick: _react.PropTypes.func
      },
      enumerable: true
    }, {
      key: 'handleClick',
      value: function value(event) {
        var allowTransition = true;
        var clickResult = undefined;

        if (_this.props && _this.props.onClick) {
          clickResult = _this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }

        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }

        event.preventDefault();

        if (allowTransition) {
          var link = event.currentTarget;
          _libLocation2['default'].pushState(_this.props && _this.props.state || null, _this.props && _this.props.to || link.pathname + link.search);
        }
      },
      enumerable: true
    }]);

    return Link;
  })(_react.Component);

  exports['default'] = Link;
  module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(6);

  var _historyLibCreateBrowserHistory = __webpack_require__(31);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibUseQueries = __webpack_require__(32);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = _fbjsLibExecutionEnvironment.canUseDOM ? (0, _historyLibUseQueries2['default'])(_historyLibCreateBrowserHistory2['default'])() : {};

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 7 */
/***/ function(module, exports) {

  module.exports = require("react-cookie");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactMaterialize = __webpack_require__(2);

  var Cell = (function (_Component) {
    _inherits(Cell, _Component);

    function Cell(props) {
      var _this = this;

      _classCallCheck(this, Cell);

      _get(Object.getPrototypeOf(Cell.prototype), 'constructor', this).call(this, props);

      this.handleChange = function (e) {
        _this.props.onChange(e.target.value);
      };
    }

    _createClass(Cell, [{
      key: 'render',
      value: function render() {
        var active = this.props.data === "" ? "" : "active";
        return _react2['default'].createElement(
          'div',
          { className: 'col s4 input-field' },
          _react2['default'].createElement('input', { value: this.props.data, onChange: this.handleChange, type: 'text' }),
          _react2['default'].createElement(
            'label',
            { className: active },
            this.props.label
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        data: _react2['default'].PropTypes.string.isRequired,
        label: _react2['default'].PropTypes.string.isRequired,
        onChange: _react2['default'].PropTypes.func.isRequired
      },
      enumerable: true
    }]);

    return Cell;
  })(_react.Component);

  exports['default'] = Cell;
  module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(26);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'footer',
          { className: 'page-footer' },
          _react2['default'].createElement('div', { className: 'container' }),
          _react2['default'].createElement(
            'div',
            { className: 'footer-copyright' },
            _react2['default'].createElement(
              'div',
              { className: 'container center-align' },
              _react2['default'].createElement(
                'span',
                { className: 'left' },
                '© Tim Carlson 2016'
              ),
              _react2['default'].createElement(
                'span',
                null,
                'artwork and font made by ',
                _react2['default'].createElement(
                  'a',
                  { href: '#!', className: 'grey-text text-lighten-4' },
                  'Jean Elise'
                )
              ),
              _react2['default'].createElement(
                'a',
                { className: 'grey-text text-lighten-4 right', href: '#!' },
                'More Links'
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactMaterialize = __webpack_require__(2);

  var _Cell = __webpack_require__(8);

  var _Cell2 = _interopRequireDefault(_Cell);

  var FormRow = (function (_Component) {
    _inherits(FormRow, _Component);

    function FormRow(props) {
      var _this = this;

      _classCallCheck(this, FormRow);

      _get(Object.getPrototypeOf(FormRow.prototype), 'constructor', this).call(this, props);

      this.handleChange = function (prop, value) {
        _this.props.onCellChange(prop, value);
      };

      this.handleSelectChange = function () {
        var value = _this.refs.sel.value;
        _this.props.onCellChange("food", value);
      };

      this.handleAgeChange = function (prop, value) {
        _this.props.onCellChange("underage", !_this.props.data.underage);
      };

      this.componentDidMount = function () {
        $(_this.refs.sel).material_select(_this.handleSelectChange);
      };

      var under21 = false;
      console.log("props", props);
    }

    _createClass(FormRow, [{
      key: 'render',
      value: function render() {
        var needsButton = this.props.needsButton ? _react2['default'].createElement(
          'div',
          { className: 'card-action valign-wrapper' },
          _react2['default'].createElement(
            'div',
            { className: 'col s4 offset-s8 valign right-align' },
            'Remove ',
            _react2['default'].createElement(
              _reactMaterialize.Button,
              { floating: true, className: 'valign', onClick: this.props.removeRow, waves: 'light' },
              _react2['default'].createElement(
                _reactMaterialize.Icon,
                null,
                'remove'
              )
            )
          )
        ) : "";
        return _react2['default'].createElement(
          _reactMaterialize.Row,
          { className: 'reduced-row-padding row' },
          _react2['default'].createElement(
            'div',
            { className: 'col s12' },
            _react2['default'].createElement(
              'div',
              { className: 'card green lighten-5' },
              _react2['default'].createElement(
                'div',
                { className: 'card-content' },
                _react2['default'].createElement(
                  'span',
                  { className: 'card-title black-text' },
                  this.props.data.firstName + " " + this.props.data.lastName
                ),
                _react2['default'].createElement(
                  _reactMaterialize.Row,
                  null,
                  _react2['default'].createElement(
                    'div',
                    { className: 'valign-wrapper' },
                    _react2['default'].createElement(_Cell2['default'], { className: 'valign', data: this.props.data.firstName, label: 'First Name', onChange: this.handleChange.bind(null, "firstName") }),
                    _react2['default'].createElement(_Cell2['default'], { className: 'valign', data: this.props.data.lastName, label: 'Last Name', onChange: this.handleChange.bind(null, "lastName") }),
                    _react2['default'].createElement(_reactMaterialize.Input, { className: 'valign', type: 'checkbox', s: 4, label: 'Under 21?', ref: 'age', onChange: this.handleAgeChange, checked: this.props.data.underage })
                  )
                ),
                _react2['default'].createElement(
                  _reactMaterialize.Row,
                  null,
                  _react2['default'].createElement(
                    'div',
                    { className: 'input-field col s4' },
                    _react2['default'].createElement(
                      'select',
                      { ref: 'sel', value: this.props.data.food, onChange: this.handleSelectChange },
                      _react2['default'].createElement(
                        'option',
                        { value: 'schnitzel', 'data-icon': 'schnitzel.jpg', className: 'circle' },
                        "Schnitzel"
                      ),
                      _react2['default'].createElement(
                        'option',
                        { value: 'chicken' },
                        "Chicken"
                      ),
                      _react2['default'].createElement(
                        'option',
                        { value: 'vegetarian' },
                        "Vegetarian"
                      )
                    ),
                    _react2['default'].createElement(
                      'label',
                      null,
                      "Food"
                    )
                  ),
                  _react2['default'].createElement(_Cell2['default'], { data: this.props.data.allergies, label: 'Allergies?', onChange: this.handleChange.bind(null, "allergies") })
                )
              ),
              needsButton
            )
          ),
          _react2['default'].createElement('div', { className: 'divider' })
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        data: _react2['default'].PropTypes.object.isRequired,
        onCellChange: _react2['default'].PropTypes.func.isRequired
      },
      enumerable: true
    }]);

    return FormRow;
  })(_react.Component);

  exports['default'] = FormRow;
  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(27);

  var _Navigation = __webpack_require__(12);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  var _Footer = __webpack_require__(9);

  var _Footer2 = _interopRequireDefault(_Footer);

  var Layout = (function (_Component) {
    _inherits(Layout, _Component);

    function Layout() {
      _classCallCheck(this, Layout);

      _get(Object.getPrototypeOf(Layout.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Layout, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            { className: 'Layout' },
            _react2['default'].createElement(_Navigation2['default'], null),
            this.props.children
          ),
          _react2['default'].createElement(_Footer2['default'], null)
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        children: _react.PropTypes.element.isRequired
      },
      enumerable: true
    }]);

    return Layout;
  })(_react.Component);

  exports['default'] = Layout;
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(29);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'ul',
          { className: 'Navigation', role: 'menu' },
          _react2['default'].createElement(
            'li',
            { className: 'Navigation-item' },
            _react2['default'].createElement(
              'a',
              { className: 'Navigation-link', href: '/', onClick: _Link2['default'].handleClick },
              'Home'
            )
          ),
          _react2['default'].createElement(
            'li',
            { className: 'Navigation-item' },
            _react2['default'].createElement(
              'a',
              { className: 'Navigation-link', href: '/rsvp', onClick: _Link2['default'].handleClick },
              'RSVP'
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _FormRow = __webpack_require__(10);

  var _FormRow2 = _interopRequireDefault(_FormRow);

  var PeopleWidget = (function (_Component) {
    _inherits(PeopleWidget, _Component);

    function PeopleWidget(props) {
      _classCallCheck(this, PeopleWidget);

      _get(Object.getPrototypeOf(PeopleWidget.prototype), 'constructor', this).call(this, props);
    }

    _createClass(PeopleWidget, [{
      key: 'render',
      value: function render() {
        var rows = this.props.data.map(function (rowData, index) {
          var needButton = index === 0 ? false : true;
          return _react2['default'].createElement(_FormRow2['default'], { needsButton: needButton,
            key: index,
            data: rowData,
            onCellChange: this.props.onCellChange.bind(null, index),
            removeRow: this.props.removeRow.bind(null, index),
            isUnder21: rowData.underage });
        }, this);

        return _react2['default'].createElement(
          'div',
          null,
          rows
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        data: _react2['default'].PropTypes.array.isRequired,
        onCellChange: _react2['default'].PropTypes.func.isRequired
      },
      enumerable: true
    }]);

    return PeopleWidget;
  })(_react.Component);

  exports['default'] = PeopleWidget;
  module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactMaterialize = __webpack_require__(2);

  var _PeopleWidget = __webpack_require__(13);

  var _PeopleWidget2 = _interopRequireDefault(_PeopleWidget);

  var _RsvpSummary = __webpack_require__(15);

  var _RsvpSummary2 = _interopRequireDefault(_RsvpSummary);

  var _reactCookie = __webpack_require__(7);

  var _reactCookie2 = _interopRequireDefault(_reactCookie);

  var attendee = {
    firstName: "",
    lastName: "",
    underage: false,
    food: "schnitzel",
    allergies: ""
  };

  var initial = {
    comment: "",
    email: "",
    attendees: [attendee],
    hotel: {
      needsReservation: false,
      numberOfRooms: 1,
      comment: ""
    },
    submitted: false
  };

  function copy(obj) {
    var newObj = {};
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  }

  var RsvpEditor = (function (_Component) {
    _inherits(RsvpEditor, _Component);

    function RsvpEditor(props) {
      var _this = this;

      _classCallCheck(this, RsvpEditor);

      _get(Object.getPrototypeOf(RsvpEditor.prototype), 'constructor', this).call(this, props);

      this.componentWillReceiveProps = function (newProps) {
        if (newProps.theData !== _this.state.data) {
          _this.setState({ data: newProps.theData });
        }
        if (newProps.rsvp !== _this.state.rsvp) {
          _this.setState({ rsvp: newProps.rsvp });
        }

        if (newProps.submitted !== _this.state.submitted) {
          _this.setState({ submitted: newProps.submitted });
        }

        console.log("component recieved props: ", newProps);
        console.log("component current state: ", _this.state);
      };

      this.handleCellChange = function (rowIdx, prop, val) {
        var newData = _this.state.data;
        var row = copy(_this.state.data.attendees[rowIdx]);
        row[prop] = val;
        var rows = _this.state.data.attendees.slice();
        rows[rowIdx] = row;
        newData.attendees = rows;

        _this.setState({ data: newData });
        console.log(_this.state);
      };

      this.removeRow = function (rowIdx) {
        var newData = _this.state.data;
        newData.attendees.splice(rowIdx, 1);
        _this.setState({ data: newData });
      };

      this.handleButtonClick = function () {
        var newData = _this.state.data;
        newData.attendees.push(attendee);
        _this.setState({ data: newData });
      };

      this.handleCommentChange = function (e) {
        var newData = _this.state.data;
        newData.comment = e.target.value;
        _this.setState({ data: newData });
      };

      this.handleEmailChange = function (e) {
        var newData = _this.state.data;
        newData.email = e.target.value;
        _this.setState({ data: newData });
      };

      this.handleHotelChange = function () {
        var newData = _this.state.data;
        newData.hotel.needsReservation = !newData.hotel.needsReservation;
        _this.setState({ data: newData });
      };

      this.handleReservationCountChange = function (e) {
        var newData = _this.state.data;
        newData.hotel.numberOfRooms = e.target.value;
        _this.setState({ data: newData });
        console.log(_this.state);
      };

      this.handleReservationCommentChange = function (e) {
        var newData = _this.state.data;
        newData.hotel.comment = e.target.value;
        _this.setState({ data: newData });
      };

      this.handleSubmitButtonClick = function () {
        _this.setState({ loading: true });
        console.log("should be loading from submit click, state: ", _this.state);

        var saveData = _this.state.data;
        if (saveData["lastModified"]) delete saveData["lastModified"];

        console.log("in submit button click save");

        _this.props.rsvp.save(saveData, {
          success: _this.submitSuccess,
          error: _this.submitFailure
        });
      };

      this.submitSuccess = function (theRsvp) {
        console.log("record saved after submit button press", theRsvp);
        _this.setState({ "loading": false });
        try {
          _reactCookie2['default'].save('rsvp', theRsvp);
        } catch (e) {
          console.log(e);
        }
        _this.setState.submitted = true;
        console.log("should be done with saving, state: ", _this.state);
        var obj = {};
        obj = copy(theRsvp.attributes);
        obj.id = theRsvp.id;
        _this.props.syncData(obj);
      };

      this.submitFailure = function (theRsvp, error) {
        console.log("record failed", theRsvp, error);
      };

      this.handleEditButton = function () {
        _this.setState({ submitted: false });
      };

      console.log("setting up dirty data from attributes: ", this.props.rsvp.attributes);
      this.state = { data: this.props.theData, rsvp: this.props.rsvp, loading: false, submitted: this.props.submitted };
    }

    _createClass(RsvpEditor, [{
      key: 'render',
      value: function render() {
        var isRequestActive = this.state.data.hotel.comment !== "" ? "active" : "";
        var needsRoom = this.state.data.hotel.needsReservation ? _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            { className: 'col s3 input-field' },
            _react2['default'].createElement('input', { type: 'text', onChange: this.handleReservationCountChange, value: this.state.data.hotel.numberOfRooms }),
            _react2['default'].createElement(
              'label',
              { className: 'active' },
              "How Many?"
            )
          )
        ) : "";
        var chk = this.state.data.hotel.needsReservation ? true : false;
        var isCommentActive = this.state.data.comment !== "" ? "active" : "";
        var isEmailActive = this.state.data.email !== "" ? "active" : "";

        var modifiedString = "";
        if (this.state.data.hasOwnProperty("lastModified")) {
          var dateString = this.state.data.lastModified.toString();
          modifiedString = _react2['default'].createElement(
            'div',
            null,
            'This RSVP was last modified on: ',
            dateString
          );
        }

        if (this.state.submitted) {
          if (this.state.loading) {
            return _react2['default'].createElement(
              _reactMaterialize.Row,
              null,
              _react2['default'].createElement(
                'div',
                { className: 'col s4 offset-4' },
                _react2['default'].createElement(_reactMaterialize.Preloader, { size: 'big' })
              )
            );
          } else {
            return _react2['default'].createElement(_RsvpSummary2['default'], { data: this.state.data, handleEditButton: this.handleEditButton });
          }
        } else {
          return _react2['default'].createElement(
            'div',
            null,
            modifiedString,
            _react2['default'].createElement(
              _reactMaterialize.Row,
              null,
              _react2['default'].createElement(
                'h6',
                null,
                'Attendees (',
                this.state.data.attendees.length,
                ')'
              ),
              _react2['default'].createElement(_PeopleWidget2['default'], { data: this.state.data.attendees, onCellChange: this.handleCellChange, removeRow: this.removeRow }),
              _react2['default'].createElement(
                'div',
                { className: 'col s2 offset-s10 right-align' },
                _react2['default'].createElement(
                  _reactMaterialize.Button,
                  { floating: true, onClick: this.handleButtonClick, waves: 'light' },
                  _react2['default'].createElement(
                    _reactMaterialize.Icon,
                    null,
                    'add'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _reactMaterialize.Row,
              null,
              _react2['default'].createElement(
                'h6',
                null,
                'Hotel Information'
              ),
              _react2['default'].createElement(
                _reactMaterialize.Row,
                null,
                _react2['default'].createElement(_reactMaterialize.Input, { label: 'Would you like us to block off a room for you?', s: 9, type: 'checkbox', onChange: this.handleHotelChange, checked: chk }),
                needsRoom
              )
            ),
            _react2['default'].createElement(
              _reactMaterialize.Row,
              null,
              _react2['default'].createElement(
                'h6',
                null,
                'Extra Info'
              ),
              _react2['default'].createElement(
                _reactMaterialize.Row,
                null,
                _react2['default'].createElement(
                  'div',
                  { className: 'col s8 input-field' },
                  _react2['default'].createElement('input', { value: this.state.data.comment, onChange: this.handleCommentChange, type: 'text' }),
                  _react2['default'].createElement(
                    'label',
                    { className: isCommentActive },
                    'Comment / Question'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'col s4 input-field' },
                  _react2['default'].createElement('input', { value: this.state.data.email, onChange: this.handleEmailChange, type: 'text' }),
                  _react2['default'].createElement(
                    'label',
                    { className: isEmailActive },
                    'Email'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _reactMaterialize.Row,
              null,
              _react2['default'].createElement(
                'div',
                { className: 'col offset-s8 s4 right-align' },
                _react2['default'].createElement(
                  _reactMaterialize.Button,
                  { onClick: this.handleSubmitButtonClick },
                  'Submit'
                )
              )
            )
          );
        }
      }
    }]);

    return RsvpEditor;
  })(_react.Component);

  ;

  exports['default'] = RsvpEditor;
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactMaterialize = __webpack_require__(2);

  var _mandrillMinJs = __webpack_require__(16);

  var _mandrillMinJs2 = _interopRequireDefault(_mandrillMinJs);

  console.log(_mandrillMinJs2['default']);
  var m = new _mandrillMinJs2['default'].mandrill.Mandrill('vIMEddhNNLrr-WncvmudWQ');

  function capitalize(theString) {
    return theString.charAt(0).toUpperCase() + theString.slice(1);
  }

  var RsvpSummary = (function (_Component) {
    _inherits(RsvpSummary, _Component);

    function RsvpSummary(props) {
      var _this = this;

      _classCallCheck(this, RsvpSummary);

      _get(Object.getPrototypeOf(RsvpSummary.prototype), 'constructor', this).call(this, props);

      this.sendEmail = function () {
        var nameString = _this.props.data.attendees[0].firstName;

        for (var i = 1; i < _this.props.data.attendees.length; i++) {
          if (i == _this.props.data.attendees.length - 1) {
            nameString += ", and " + _this.props.data.attendees[i].firstName;
          } else {
            nameString += ", " + _this.props.data.attendees[i].firstName;
          }
        }

        _this.setState({ emailed: true });
        _this.setState({ emailButtonText: "Sending..." });
        m.call("messages/send-template", {
          key: 'vIMEddhNNLrr-WncvmudWQ',
          template_name: "wedding-template",
          message: {
            subject: "RSVP",
            from_email: "rsvp@timandmaddy.com",
            from_name: "Tim & Maddy",
            to: [{
              email: _this.props.data.email,
              name: "Guest"
            }],
            global_merge_vars: [{ "name": "firstNameString",
              "content": nameString }, { "name": "hotelString",
              "content": _this.props.data.hotel.needsReservation ? "We will go ahead and reserve you " + _this.props.data.hotel.numberOfRooms + " rooms." : "We will not reserve you a room." }, { "name": "rsvpURL",
              "content": "timandmaddy.com/rsvp?" + _this.props.data.id }]
          },
          async: true
        }, function (httpResponse) {
          console.log(httpResponse);
          _this.setState({ emailButtonText: "Sent!" });
        }, function (httpResponse) {
          console.error(httpResponse);
        });
      };

      console.log("reservation summary props: ", props);
      this.state = {};
      this.state.emailed = false;
      this.state.emailButtonText = "Send RSVP to Email";

      if (this.props.data.email == '') {
        this.state.emailed = true;
      }
    }

    _createClass(RsvpSummary, [{
      key: 'render',
      value: function render() {
        var peopleRows = this.props.data.attendees.map(function (rowData, index) {
          return _react2['default'].createElement(
            'tr',
            null,
            _react2['default'].createElement(
              'td',
              null,
              rowData.firstName + " " + rowData.lastName
            ),
            _react2['default'].createElement(
              'td',
              null,
              capitalize(rowData.food)
            ),
            _react2['default'].createElement(
              'td',
              null,
              rowData.allergies === "" ? "None" : rowData.allergies
            ),
            _react2['default'].createElement(
              'td',
              null,
              rowData.underage ? "Yes" : "No"
            )
          );
        }, this);

        var hotelReservationString = this.props.data.hotel.needsReservation ? _react2['default'].createElement(
          'p',
          null,
          'We will go ahead and reserve you ',
          _react2['default'].createElement(
            'strong',
            null,
            ' ',
            this.props.data.hotel.numberOfRooms,
            ' '
          ),
          ' rooms. '
        ) : _react2['default'].createElement(
          'p',
          null,
          'We will not reserve you a room.'
        );
        var emailString = this.props.data.email !== '' ? this.props.data.email : "none";

        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _reactMaterialize.Row,
            null,
            _react2['default'].createElement(
              'h2',
              null,
              'Thank you!'
            ),
            _react2['default'].createElement(
              'p',
              null,
              ' Use the code "',
              this.props.data.id,
              '" to edit your RSVP at a later date.'
            )
          ),
          _react2['default'].createElement(
            _reactMaterialize.Row,
            null,
            _react2['default'].createElement(
              'h5',
              null,
              'RSVP Summary'
            ),
            _react2['default'].createElement(
              _reactMaterialize.Button,
              { onClick: this.props.handleEditButton },
              'Edit my RSVP'
            ),
            _react2['default'].createElement(
              'table',
              null,
              _react2['default'].createElement(
                'thead',
                null,
                _react2['default'].createElement(
                  'tr',
                  null,
                  _react2['default'].createElement(
                    'th',
                    { 'data-field': 'name' },
                    'Name'
                  ),
                  _react2['default'].createElement(
                    'th',
                    { 'data-field': 'food' },
                    'Food Choice'
                  ),
                  _react2['default'].createElement(
                    'th',
                    { 'data-field': 'allergies' },
                    'Allergies'
                  ),
                  _react2['default'].createElement(
                    'th',
                    { 'data-field': 'underage' },
                    'Underage'
                  )
                )
              ),
              _react2['default'].createElement(
                'tbody',
                null,
                peopleRows
              )
            )
          ),
          _react2['default'].createElement(
            _reactMaterialize.Row,
            null,
            _react2['default'].createElement(
              'h5',
              null,
              'Hotel Summary'
            ),
            hotelReservationString
          ),
          _react2['default'].createElement(
            _reactMaterialize.Row,
            null,
            _react2['default'].createElement(
              'h5',
              null,
              'Contact Info'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'col s12' },
              'E-mail: ',
              emailString
            ),
            _react2['default'].createElement(
              'div',
              { className: 'col s12' },
              _react2['default'].createElement(
                _reactMaterialize.Button,
                { onClick: this.sendEmail, disabled: this.state.emailed },
                this.state.emailButtonText
              )
            )
          )
        );
      }
    }]);

    return RsvpSummary;
  })(_react.Component);

  exports['default'] = RsvpSummary;
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

  // Generated by CoffeeScript 1.10.0
  "use strict";

  (function () {
    var e, t, n;n = {}, e = "https://mandrillapp.com/api/1.0/", t = { 1: "OPENED", 2: "HEADERS_RECEIVED", 3: "LOADING", 4: "DONE" }, n.Mandrill = (function () {
      function r(e, t) {
        this.apikey = e, this.debug = t != null ? t : !1, this.templates = new n.Templates(this), this.exports = new n.Exports(this), this.users = new n.Users(this), this.rejects = new n.Rejects(this), this.inbound = new n.Inbound(this), this.tags = new n.Tags(this), this.messages = new n.Messages(this), this.whitelists = new n.Whitelists(this), this.ips = new n.Ips(this), this.internal = new n.Internal(this), this.subaccounts = new n.Subaccounts(this), this.urls = new n.Urls(this), this.webhooks = new n.Webhooks(this), this.senders = new n.Senders(this), this.metadata = new n.Metadata(this);
      }return r.prototype.call = function (n, r, i, s) {
        var o;return r == null && (r = {}), r.key = this.apikey, r = JSON.stringify(r), o = new XMLHttpRequest(), o.open("POST", "" + e + n + ".json"), o.setRequestHeader("Content-Type", "application/json"), this.debug && console.log("Mandrill: Opening request to " + e + n + ".json"), o.onreadystatechange = (function (e) {
          return function () {
            var n;e.debug && console.log("Mandrill: Request state " + t[o.readyState]);if (o.readyState !== 4) return;n = JSON.parse(o.responseText), n == null && (n = { status: "error", name: "GeneralError", message: "An unexpected error occurred" });if (o.status !== 200) return s ? s(n) : e.onerror(n);if (i) return i(n);
          };
        })(this), o.send(r);
      }, r.prototype.onerror = function (e) {
        throw { name: e.name, message: e.message, toString: function toString() {
            return e.name + ": " + e.message;
          } };
      }, r;
    })(), n.Templates = (function () {
      function e(e) {
        this.master = e;
      }return e.prototype.add = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["from_email"] == null && (e.from_email = null), e["from_name"] == null && (e.from_name = null), e["subject"] == null && (e.subject = null), e["code"] == null && (e.code = null), e["text"] == null && (e.text = null), e["publish"] == null && (e.publish = !0), e["labels"] == null && (e.labels = []), this.master.call("templates/add", e, t, n);
      }, e.prototype.info = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("templates/info", e, t, n);
      }, e.prototype.update = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["from_email"] == null && (e.from_email = null), e["from_name"] == null && (e.from_name = null), e["subject"] == null && (e.subject = null), e["code"] == null && (e.code = null), e["text"] == null && (e.text = null), e["publish"] == null && (e.publish = !0), e["labels"] == null && (e.labels = null), this.master.call("templates/update", e, t, n);
      }, e.prototype.publish = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("templates/publish", e, t, n);
      }, e.prototype["delete"] = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("templates/delete", e, t, n);
      }, e.prototype.list = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["label"] == null && (e.label = null), this.master.call("templates/list", e, t, n);
      }, e.prototype.timeSeries = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("templates/time-series", e, t, n);
      }, e.prototype.render = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["merge_vars"] == null && (e.merge_vars = null), this.master.call("templates/render", e, t, n);
      }, e;
    })(), n.Exports = (function () {
      function e(e) {
        this.master = e;
      }return e.prototype.info = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("exports/info", e, t, n);
      }, e.prototype.list = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("exports/list", e, t, n);
      }, e.prototype.rejects = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["notify_email"] == null && (e.notify_email = null), this.master.call("exports/rejects", e, t, n);
      }, e.prototype.whitelist = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["notify_email"] == null && (e.notify_email = null), this.master.call("exports/whitelist", e, t, n);
      }, e.prototype.activity = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["notify_email"] == null && (e.notify_email = null), e["date_from"] == null && (e.date_from = null), e["date_to"] == null && (e.date_to = null), e["tags"] == null && (e.tags = null), e["senders"] == null && (e.senders = null), e["states"] == null && (e.states = null), e["api_keys"] == null && (e.api_keys = null), this.master.call("exports/activity", e, t, n);
      }, e;
    })(), n.Users = (function () {
      function e(e) {
        this.master = e;
      }return e.prototype.info = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("users/info", e, t, n);
      }, e.prototype.ping = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("users/ping", e, t, n);
      }, e.prototype.ping2 = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("users/ping2", e, t, n);
      }, e.prototype.senders = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("users/senders", e, t, n);
      }, e;
    })(), n.Rejects = (function () {
      function e(e) {
        this.master = e;
      }return e.prototype.add = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["comment"] == null && (e.comment = null), e["subaccount"] == null && (e.subaccount = null), this.master.call("rejects/add", e, t, n);
      }, e.prototype.list = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["email"] == null && (e.email = null), e["include_expired"] == null && (e.include_expired = !1), e["subaccount"] == null && (e.subaccount = null), this.master.call("rejects/list", e, t, n);
      }, e.prototype["delete"] = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["subaccount"] == null && (e.subaccount = null), this.master.call("rejects/delete", e, t, n);
      }, e;
    })(), n.Inbound = (function () {
      function e(e) {
        this.master = e;
      }return e.prototype.domains = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("inbound/domains", e, t, n);
      }, e.prototype.addDomain = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("inbound/add-domain", e, t, n);
      }, e.prototype.checkDomain = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("inbound/check-domain", e, t, n);
      }, e.prototype.deleteDomain = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("inbound/delete-domain", e, t, n);
      }, e.prototype.routes = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("inbound/routes", e, t, n);
      }, e.prototype.addRoute = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("inbound/add-route", e, t, n);
      }, e.prototype.updateRoute = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["pattern"] == null && (e.pattern = null), e["url"] == null && (e.url = null), this.master.call("inbound/update-route", e, t, n);
      }, e.prototype.deleteRoute = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("inbound/delete-route", e, t, n);
      }, e.prototype.sendRaw = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["to"] == null && (e.to = null), e["mail_from"] == null && (e.mail_from = null), e["helo"] == null && (e.helo = null), e["client_address"] == null && (e.client_address = null), this.master.call("inbound/send-raw", e, t, n);
      }, e;
    })(), n.Tags = (function () {
      function e(e) {
        this.master = e;
      }return e.prototype.list = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("tags/list", e, t, n);
      }, e.prototype["delete"] = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("tags/delete", e, t, n);
      }, e.prototype.info = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("tags/info", e, t, n);
      }, e.prototype.timeSeries = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("tags/time-series", e, t, n);
      }, e.prototype.allTimeSeries = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("tags/all-time-series", e, t, n);
      }, e;
    })(), n.Messages = (function () {
      function e(e) {
        this.master = e;
      }return e.prototype.send = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["async"] == null && (e.async = !1), e["ip_pool"] == null && (e.ip_pool = null), e["send_at"] == null && (e.send_at = null), this.master.call("messages/send", e, t, n);
      }, e.prototype.sendTemplate = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["async"] == null && (e.async = !1), e["ip_pool"] == null && (e.ip_pool = null), e["send_at"] == null && (e.send_at = null), this.master.call("messages/send-template", e, t, n);
      }, e.prototype.search = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["query"] == null && (e.query = "*"), e["date_from"] == null && (e.date_from = null), e["date_to"] == null && (e.date_to = null), e["tags"] == null && (e.tags = null), e["senders"] == null && (e.senders = null), e["api_keys"] == null && (e.api_keys = null), e["limit"] == null && (e.limit = 100), this.master.call("messages/search", e, t, n);
      }, e.prototype.searchTimeSeries = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["query"] == null && (e.query = "*"), e["date_from"] == null && (e.date_from = null), e["date_to"] == null && (e.date_to = null), e["tags"] == null && (e.tags = null), e["senders"] == null && (e.senders = null), this.master.call("messages/search-time-series", e, t, n);
      }, e.prototype.info = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("messages/info", e, t, n);
      }, e.prototype.content = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("messages/content", e, t, n);
      }, e.prototype.parse = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("messages/parse", e, t, n);
      }, e.prototype.sendRaw = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["from_email"] == null && (e.from_email = null), e["from_name"] == null && (e.from_name = null), e["to"] == null && (e.to = null), e["async"] == null && (e.async = !1), e["ip_pool"] == null && (e.ip_pool = null), e["send_at"] == null && (e.send_at = null), e["return_path_domain"] == null && (e.return_path_domain = null), this.master.call("messages/send-raw", e, t, n);
      }, e.prototype.listScheduled = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["to"] == null && (e.to = null), this.master.call("messages/list-scheduled", e, t, n);
      }, e.prototype.cancelScheduled = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("messages/cancel-scheduled", e, t, n);
      }, e.prototype.reschedule = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("messages/reschedule", e, t, n);
      }, e;
    })(), n.Whitelists = (function () {
      function e(e) {
        this.master = e;
      }return e.prototype.add = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["comment"] == null && (e.comment = null), this.master.call("whitelists/add", e, t, n);
      }, e.prototype.list = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["email"] == null && (e.email = null), this.master.call("whitelists/list", e, t, n);
      }, e.prototype["delete"] = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("whitelists/delete", e, t, n);
      }, e;
    })(), n.Ips = (function () {
      function e(e) {
        this.master = e;
      }return e.prototype.list = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("ips/list", e, t, n);
      }, e.prototype.info = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("ips/info", e, t, n);
      }, e.prototype.provision = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["warmup"] == null && (e.warmup = !1), e["pool"] == null && (e.pool = null), this.master.call("ips/provision", e, t, n);
      }, e.prototype.startWarmup = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("ips/start-warmup", e, t, n);
      }, e.prototype.cancelWarmup = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("ips/cancel-warmup", e, t, n);
      }, e.prototype.setPool = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["create_pool"] == null && (e.create_pool = !1), this.master.call("ips/set-pool", e, t, n);
      }, e.prototype["delete"] = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("ips/delete", e, t, n);
      }, e.prototype.listPools = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("ips/list-pools", e, t, n);
      }, e.prototype.poolInfo = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("ips/pool-info", e, t, n);
      }, e.prototype.createPool = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("ips/create-pool", e, t, n);
      }, e.prototype.deletePool = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("ips/delete-pool", e, t, n);
      }, e.prototype.checkCustomDns = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("ips/check-custom-dns", e, t, n);
      }, e.prototype.setCustomDns = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("ips/set-custom-dns", e, t, n);
      }, e;
    })(), n.Internal = (function () {
      function e(e) {
        this.master = e;
      }return e;
    })(), n.Subaccounts = (function () {
      function e(e) {
        this.master = e;
      }return e.prototype.list = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["q"] == null && (e.q = null), this.master.call("subaccounts/list", e, t, n);
      }, e.prototype.add = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["name"] == null && (e.name = null), e["notes"] == null && (e.notes = null), e["custom_quota"] == null && (e.custom_quota = null), this.master.call("subaccounts/add", e, t, n);
      }, e.prototype.info = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("subaccounts/info", e, t, n);
      }, e.prototype.update = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["name"] == null && (e.name = null), e["notes"] == null && (e.notes = null), e["custom_quota"] == null && (e.custom_quota = null), this.master.call("subaccounts/update", e, t, n);
      }, e.prototype["delete"] = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("subaccounts/delete", e, t, n);
      }, e.prototype.pause = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("subaccounts/pause", e, t, n);
      }, e.prototype.resume = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("subaccounts/resume", e, t, n);
      }, e;
    })(), n.Urls = (function () {
      function e(e) {
        this.master = e;
      }return e.prototype.list = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("urls/list", e, t, n);
      }, e.prototype.search = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("urls/search", e, t, n);
      }, e.prototype.timeSeries = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("urls/time-series", e, t, n);
      }, e.prototype.trackingDomains = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("urls/tracking-domains", e, t, n);
      }, e.prototype.addTrackingDomain = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("urls/add-tracking-domain", e, t, n);
      }, e.prototype.checkTrackingDomain = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("urls/check-tracking-domain", e, t, n);
      }, e;
    })(), n.Webhooks = (function () {
      function e(e) {
        this.master = e;
      }return e.prototype.list = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("webhooks/list", e, t, n);
      }, e.prototype.add = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["description"] == null && (e.description = null), e["events"] == null && (e.events = []), this.master.call("webhooks/add", e, t, n);
      }, e.prototype.info = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("webhooks/info", e, t, n);
      }, e.prototype.update = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["description"] == null && (e.description = null), e["events"] == null && (e.events = []), this.master.call("webhooks/update", e, t, n);
      }, e.prototype["delete"] = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("webhooks/delete", e, t, n);
      }, e;
    })(), n.Senders = (function () {
      function e(e) {
        this.master = e;
      }return e.prototype.list = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("senders/list", e, t, n);
      }, e.prototype.domains = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("senders/domains", e, t, n);
      }, e.prototype.addDomain = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("senders/add-domain", e, t, n);
      }, e.prototype.checkDomain = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("senders/check-domain", e, t, n);
      }, e.prototype.verifyDomain = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("senders/verify-domain", e, t, n);
      }, e.prototype.info = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("senders/info", e, t, n);
      }, e.prototype.timeSeries = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("senders/time-series", e, t, n);
      }, e;
    })(), n.Metadata = (function () {
      function e(e) {
        this.master = e;
      }return e.prototype.list = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("metadata/list", e, t, n);
      }, e.prototype.add = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), e["view_template"] == null && (e.view_template = null), this.master.call("metadata/add", e, t, n);
      }, e.prototype.update = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("metadata/update", e, t, n);
      }, e.prototype["delete"] = function (e, t, n) {
        return e == null && (e = {}), typeof e == "function" && (n = t, t = e, e = {}), this.master.call("metadata/delete", e, t, n);
      }, e;
    })(), (typeof exports != "undefined" && exports !== null ? exports : this).mandrill = n;
  }).call(undefined);var JSON;JSON || (JSON = {}), (function () {
    "use strict";function f(e) {
      return e < 10 ? "0" + e : e;
    }function quote(e) {
      return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
        var t = meta[e];return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
      }) + '"' : '"' + e + '"';
    }function str(e, t) {
      var n,
          r,
          i,
          s,
          o = gap,
          u,
          a = t[e];a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a));switch (typeof a) {case "string":
          return quote(a);case "number":
          return isFinite(a) ? String(a) : "null";case "boolean":case "null":
          return String(a);case "object":
          if (!a) return "null";gap += indent, u = [];if (Object.prototype.toString.apply(a) === "[object Array]") {
            s = a.length;for (n = 0; n < s; n += 1) u[n] = str(n, a) || "null";return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i;
          }if (rep && typeof rep == "object") {
            s = rep.length;for (n = 0; n < s; n += 1) typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
          } else for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i;}
    }typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function (e) {
      return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (e) {
      return this.valueOf();
    });var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = { "\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" },
        rep;typeof JSON.stringify != "function" && (JSON.stringify = function (e, t, n) {
      var r;gap = "", indent = "";if (typeof n == "number") for (r = 0; r < n; r += 1) indent += " ";else typeof n == "string" && (indent = n);rep = t;if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number") return str("", { "": e });throw new Error("JSON.stringify");
    }), typeof JSON.parse != "function" && (JSON.parse = function (text, reviver) {
      function walk(e, t) {
        var n,
            r,
            i = e[t];if (i && typeof i == "object") for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);return reviver.call(e, t, i);
      }var j;text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
        return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
      }));if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({ "": j }, "") : j;throw new SyntaxError("JSON.parse");
    });
  })();

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Not Found'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The page you\'re looking for was not found.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Error'
          ),
          _react2['default'].createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'A critical error occurred.'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        error: _react.PropTypes.instanceOf(Error)
      },
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'About Us'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Blog'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 1'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 2'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactMaterialize = __webpack_require__(2);

  var _default = (function (_Component) {
  	_inherits(_default, _Component);

  	function _default() {
  		_classCallCheck(this, _default);

  		_get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(_default, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				'div',
  				{ className: 'container center-align' },
  				_react2['default'].createElement(
  					'div',
  					{ className: 'row' },
  					_react2['default'].createElement('img', { className: 'responsive-img no-mouse', src: 'art/full-logo.png' }),
  					_react2['default'].createElement(
  						'h3',
  						{ className: 'flow-text' },
  						'lets all give a cheer'
  					),
  					_react2['default'].createElement(
  						'h3',
  						{ className: 'flow-text' },
  						'for love, marriage, and beer!'
  					),
  					_react2['default'].createElement(
  						'div',
  						{ className: 'valign-wrapper' },
  						_react2['default'].createElement(
  							'div',
  							{ className: 'valign col l3 m3 s3' },
  							_react2['default'].createElement('img', { className: 'responsive-img no-mouse', src: 'art/arrow-facing-right.png' })
  						),
  						_react2['default'].createElement(
  							'div',
  							{ className: 'valign col l6 m6 s6' },
  							_react2['default'].createElement(
  								'h1',
  								{ className: 'flow-text' },
  								'AUGUST 28, 2016'
  							)
  						),
  						_react2['default'].createElement(
  							'div',
  							{ className: 'valign col l3 m3 s3' },
  							_react2['default'].createElement('img', { className: 'responsive-img no-mouse', src: 'art/arrow-facing-left.png' })
  						)
  					),
  					_react2['default'].createElement(
  						'h3',
  						{ className: 'flow-text' },
  						'at Rathskellar Biergarten'
  					),
  					_react2['default'].createElement(
  						'h3',
  						{ className: 'flow-text' },
  						'401 E Michigan St'
  					),
  					_react2['default'].createElement(
  						'h3',
  						{ className: 'flow-text' },
  						'Indianapolis, IN'
  					),
  					_react2['default'].createElement(
  						'div',
  						{ className: 'row' },
  						_react2['default'].createElement(
  							'div',
  							{ className: 'col l3 offset-l3 m3 offset-m3 s3 offset-s3' },
  							' ',
  							_react2['default'].createElement('img', { src: 'art/leaf-left.png', className: 'left-leaf left-align responsive-img' })
  						),
  						_react2['default'].createElement(
  							'div',
  							{ className: 'col l3 m3 s3' },
  							' ',
  							_react2['default'].createElement('img', { src: 'art/leaf-right.png', className: 'right-leaf right-align responsive-img' })
  						)
  					)
  				)
  			);
  		}
  	}]);

  	return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactMaterialize = __webpack_require__(2);

  var _componentsRsvpEditor = __webpack_require__(14);

  var _componentsRsvpEditor2 = _interopRequireDefault(_componentsRsvpEditor);

  var _reactCookie = __webpack_require__(7);

  var _reactCookie2 = _interopRequireDefault(_reactCookie);

  var _parse = __webpack_require__(33);

  var _parse2 = _interopRequireDefault(_parse);

  var _parseReact = __webpack_require__(34);

  var _parseReact2 = _interopRequireDefault(_parseReact);

  _parse2['default'].initialize("EjLV7fI36U8qGewLT4vqnegmZxxgbdoZoEHUPDTZ", "4AUn7THor6s8fxURva9YMqlFIi86ZCO5KQQN4NlU");
  var Rsvp = _parse2['default'].Object.extend("Rsvp");
  var rsvp = new Rsvp();

  var isBrowser = typeof window !== 'undefined';
  var locationString = isBrowser ? window.location.search : "";

  var cookieRsvp = _reactCookie2['default'].load('rsvp');

  var submitted = false;

  var attendee = {
    firstName: "",
    lastName: "",
    underage: false,
    food: "schnitzel",
    allergies: ""
  };

  var initial = {
    comment: "",
    email: "",
    attendees: [attendee],
    hotel: {
      needsReservation: false,
      numberOfRooms: 1,
      comment: ""
    }
  };

  var mockRsvp = { id: "", attributes: initial };

  function transferParseData(obj) {
    var properties = Object.keys(initial);
    var newObj = {};
    console.log("transfering parse data");
    properties.forEach(function (property) {
      console.log("on property: ", property);
      console.log("      value: ", obj.attributes[property]);
      console.log("     typeof: ", typeof obj.attributes[property]);
      newObj[property] = obj.attributes[property];
    });
    console.log("new obj", newObj);
    return newObj;
  }

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default(props) {
      var _this = this;

      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this, props);

      this.componentDidMount = function () {
        if (isBrowser) {
          if (locationString !== "") {
            rsvp.id = locationString.substring(1);
            rsvp.fetch({
              success: function success(theRsvp) {
                console.log("rsvp loaded from url parameter", theRsvp);
                try {
                  _reactCookie2['default'].save('rsvp', theRsvp);
                } catch (e) {
                  console.log(e);
                }

                var obj = transferParseData(theRsvp);
                obj.id = theRsvp.id;

                _this.setState({ rsvp: theRsvp });
                _this.setState({ submitted: true });
                _this.setState({ theData: obj });
              },
              error: function error(theRsvp, _error) {
                console.log("there was an error", theRsvp);
              }
            });
          } else if (typeof cookieRsvp !== 'undefined') {
            console.log("loading from cookie: ", cookieRsvp);

            _this.setState({ submitted: true });

            var obj = cookieRsvp;
            obj.id = cookieRsvp.objectId;
            _this.setState({ theData: obj });

            rsvp.id = cookieRsvp.objectId;
            rsvp.fetch({
              success: function success(theRsvp) {
                console.log("rsvp loaded from cookie", theRsvp);
                try {
                  _reactCookie2['default'].save('rsvp', theRsvp);
                } catch (e) {
                  console.log(e);
                }

                var obj = transferParseData(theRsvp);
                obj.id = theRsvp.id;

                _this.setState({ rsvp: theRsvp });
                _this.setState({ submitted: true });
                _this.setState({ theData: obj });

                console.log("finished loading cookie, current state: ", _this.state);
              },
              error: function error(theRsvp, _error2) {
                console.log("there was an error", theRsvp, _error2);
              }
            });
          } else {
            _this.setState({ rsvp: rsvp });
            _this.setState({ theData: initial });
            _this.setState({ submitted: false });
          }
        }
      };

      this.handleLoadRsvp = function () {
        rsvp.id = _this.refs.rsvpInput.value;
        rsvp.fetch({
          success: function success(theRsvp) {
            console.log("rsvp loaded from load RSVP", theRsvp);
            try {
              _reactCookie2['default'].save('rsvp', theRsvp);
            } catch (e) {
              console.log(e);
            }

            var obj = transferParseData(theRsvp);
            obj.id = theRsvp.id;

            _this.setState({ rsvp: theRsvp });
            _this.setState({ submitted: true });
            _this.setState({ theData: obj });
          },
          error: function error(theRsvp, _error3) {
            console.log("there was an error", theRsvp);
          }
        });
      };

      this.syncData = function (newData) {
        _this.setState({ theData: newData });
      };

      this.state = {};
      this.state.rsvp = rsvp;
      this.state.theData = initial;
      console.log("constructor this.state", this.state);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        var page;

        return _react2['default'].createElement(
          'div',
          { className: 'container' },
          _react2['default'].createElement(
            'div',
            { className: 'row center-align' },
            _react2['default'].createElement(
              'div',
              { className: 'col s12' },
              _react2['default'].createElement('img', { className: 'responsive-img no-mouse', src: 'art/rsvp-banner.png' }),
              _react2['default'].createElement(_componentsRsvpEditor2['default'], { rsvp: this.state.rsvp, theData: this.state.theData, submitted: this.state.submitted, syncData: this.syncData })
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  /*          <div className="row center-align"> 
              <div className="col s10 offset-s1 valign-wrapper">
                <div className="col s10 input-field valign">
                  <input ref="rsvpInput" onChange={this.handleCommentChange} type="text" />
                  <label>If you already have an RSVP code, enter it here:</label>
                </div>
              
                <Button onClick={this.handleLoadRsvp} s={2} className="valign">Load RSVP</Button>
              </div>
            </div>
            */
  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactBootstrap = __webpack_require__(35);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'this is a test'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          ),
          _react2['default'].createElement(
            _reactBootstrap.Button,
            { bsStyle: 'danger' },
            'Danger'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, "/**\r\n * React Static Boilerplate\r\n * https://github.com/koistya/react-static-boilerplate\r\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\r\n */\r\n\r\n/**\r\n * React Static Boilerplate\r\n * https://github.com/koistya/react-static-boilerplate\r\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\r\n */\r\n\r\n/*\r\n * Scaffolding\r\n * -------------------------------------------------------------------------- */\r\n\r\n/*\r\n * Typography\r\n * -------------------------------------------------------------------------- */\r\n\r\n/*\r\n * Media queries breakpoints\r\n * -------------------------------------------------------------------------- */\r\n\r\nfooter.page-footer {\r\n  background-color: transparent;\r\n  padding-top: 10%;\r\n}", ""]);

  // exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, "/**\r\n * React Static Boilerplate\r\n * https://github.com/koistya/react-static-boilerplate\r\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\r\n */\r\n\r\n@font-face {\r\n  font-family: 'IceCreamSundaes';\r\n  src: url(" + __webpack_require__(30) + ");\r\n}\r\n\r\n/**\r\n * React Static Boilerplate\r\n * https://github.com/koistya/react-static-boilerplate\r\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\r\n */\r\n\r\n/*\r\n * Scaffolding\r\n * -------------------------------------------------------------------------- */\r\n\r\n/*\r\n * Typography\r\n * -------------------------------------------------------------------------- */\r\n\r\n/*\r\n * Media queries breakpoints\r\n * -------------------------------------------------------------------------- */\r\n\r\nhtml, body {\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: #c8e6c9;\r\n  color: #333;\r\n  font-family: 'IceCreamSundaes','Coming Soon','Helvetica',sans-serif;\r\n}\r\n\r\ndiv.reduced-row-padding.row {\r\n  margin-bottom: 0px !important;\r\n}\r\n\r\n.select-wrapper input.select-dropdown {\r\n  line-height:3.2rem;\r\n}\r\n\r\n.card .card-action {\r\n  padding-right: 0px !important;\r\n}\r\n\r\n\r\ninput[type=text] {\r\n  line-height:3.2rem;\r\n}\r\n\r\n.Layout {\r\n  margin: 0 auto;\r\n}\r\n\r\n.inner {\r\n  margin: 100px auto !important;\r\n  float: none !important;\r\n}\r\n\r\n.input-field label {\r\n  color: #515151;\r\n}\r\n\r\n.left-leaf {\r\n  position:absolute;\r\n  margin: -7% -16%;\r\n  width: 20%;\r\n  pointer-events: none;\r\n}\r\n\r\n.right-leaf {\r\n  position:absolute;\r\n  margin: -7% -4%;\r\n  width: 20%;\r\n  pointer-events: none;\r\n}\r\n\r\n.no-mouse {\r\n  pointer-events: none;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .Layout {\r\n    width: calc(768px - 18px);\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .Layout {\r\n    width: calc(992px - 22px);\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .Layout {\r\n    width: calc(1200px - 30px);\r\n  }\r\n}\r\n", ""]);

  // exports


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, "/**\r\n * React Static Boilerplate\r\n * https://github.com/koistya/react-static-boilerplate\r\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\r\n */\r\n\r\n.Link {\r\n\r\n}\r\n", ""]);

  // exports


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, "/**\r\n * React Static Boilerplate\r\n * https://github.com/koistya/react-static-boilerplate\r\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\r\n */\r\n\r\n/**\r\n * React Static Boilerplate\r\n * https://github.com/koistya/react-static-boilerplate\r\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\r\n */\r\n\r\n/*\r\n * Scaffolding\r\n * -------------------------------------------------------------------------- */\r\n\r\n/*\r\n * Typography\r\n * -------------------------------------------------------------------------- */\r\n\r\n/*\r\n * Media queries breakpoints\r\n * -------------------------------------------------------------------------- */\r\n\r\n.Navigation {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: row;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  margin: 2em 0 5em 0;\r\n  list-style: none;\r\n  -webkit-box-pack: end;\r\n  -webkit-justify-content: flex-end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n}\r\n\r\n.Navigation-item {\r\n  padding: 0 2em;\r\n}\r\n\r\n.Navigation-link {\r\n  padding: 0.5em 1em;\r\n  color: #6FBE6B;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n}\r\n\r\n.Navigation-link:hover {\r\n  border-bottom: 3px solid #6FBE6B;\r\n  color: #333;\r\n}\r\n", ""]);

  // exports


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "296094f8238f6b8635b7de850cff3801.ttf"

/***/ },
/* 31 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 32 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 33 */
/***/ function(module, exports) {

  module.exports = require("parse");

/***/ },
/* 34 */
/***/ function(module, exports) {

  module.exports = require("parse-react");

/***/ },
/* 35 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap");

/***/ },
/* 36 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ }
/******/ ]);