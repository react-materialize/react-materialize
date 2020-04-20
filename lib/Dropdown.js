"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _idgen = _interopRequireDefault(require("./idgen"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Dropdown = function Dropdown(_ref) {
  var children = _ref.children,
      className = _ref.className,
      trigger = _ref.trigger,
      options = _ref.options,
      props = _objectWithoutProperties(_ref, ["children", "className", "trigger", "options"]);

  var _dropdownContent = (0, _react.useRef)(null);

  (0, _react.useEffect)(function () {
    var instance = M.Dropdown.init(document.querySelector("[data-target=\"".concat(props.id, "\"]")), options);
    return function () {
      instance && instance.destroy();
    };
  }, [options, props.id]);

  var renderTrigger = function renderTrigger() {
    return (0, _react.cloneElement)(trigger, {
      'data-target': props.id,
      className: (0, _classnames.default)(trigger.props.className, 'dropdown-trigger')
    });
  };

  var renderItems = function renderItems() {
    return _react.Children.map(children, function (element) {
      if (element.type.name === 'Divider') {
        return /*#__PURE__*/_react.default.createElement("li", {
          key: (0, _idgen.default)(),
          className: "divider",
          tabIndex: "-1"
        });
      } else {
        return /*#__PURE__*/_react.default.createElement("li", {
          key: (0, _idgen.default)()
        }, element);
      }
    });
  };

  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, renderTrigger(), /*#__PURE__*/_react.default.createElement("ul", _extends({}, props, {
    className: (0, _classnames.default)('dropdown-content', className),
    ref: _dropdownContent
  }), renderItems()));
};

Dropdown.propTypes = {
  id: _propTypes.default.string,

  /**
   * The node to trigger the dropdown
   */
  trigger: _propTypes.default.node.isRequired,
  children: _propTypes.default.node,
  className: _propTypes.default.string,

  /**
   * Options hash for the dropdown
   * <a target="_blank" href="http://materializecss.com/dropdown.html#options">http://materializecss.com/dropdown.html</a>
   */
  options: _propTypes.default.shape({
    alignment: _propTypes.default.oneOf(['left', 'right']),
    autoTrigger: _propTypes.default.bool,
    constrainWidth: _propTypes.default.bool,
    container: _propTypes.default.node,
    coverTrigger: _propTypes.default.bool,
    closeOnClick: _propTypes.default.bool,
    hover: _propTypes.default.bool,
    inDuration: _propTypes.default.number,
    outDuration: _propTypes.default.number,
    onOpenStart: _propTypes.default.func,
    onOpenEnd: _propTypes.default.func,
    onCloseStart: _propTypes.default.func,
    onCloseEnd: _propTypes.default.func
  })
};
Dropdown.defaultProps = {
  id: "Dropdown_".concat((0, _idgen.default)()),
  options: {
    alignment: 'left',
    autoTrigger: true,
    constrainWidth: true,
    container: null,
    coverTrigger: true,
    closeOnClick: true,
    hover: false,
    inDuration: 150,
    outDuration: 250,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null
  }
};
var _default = Dropdown;
exports.default = _default;