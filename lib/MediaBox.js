"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _idgen = _interopRequireDefault(require("./idgen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MediaBox = function MediaBox(_ref) {
  var id = _ref.id,
      options = _ref.options,
      children = _ref.children,
      className = _ref.className,
      caption = _ref.caption,
      props = _objectWithoutProperties(_ref, ["id", "options", "children", "className", "caption"]);

  (0, _react.useEffect)(function () {
    var instance = M.Materialbox.init(document.getElementById(id), options);
    return function () {
      if (instance) {
        instance.destroy();
      }
    };
  }, [id, options]);
  return _react.default.cloneElement(children, _objectSpread({
    id: id,
    className: (0, _classnames.default)('materialboxed', className),
    'data-caption': caption
  }, props));
};

MediaBox.propTypes = {
  children: _propTypes.default.node.isRequired,

  /**
   * override id
   * @default idgen()
   */
  id: _propTypes.default.string,
  className: _propTypes.default.string,

  /**
   * The caption shown below the image when opened
   */
  caption: _propTypes.default.string,
  options: _propTypes.default.shape({
    /**
     * Transition in duration in milliseconds.
     */
    inDuration: _propTypes.default.number,

    /**
     * Transition out duration in milliseconds.
     */
    outDuration: _propTypes.default.number,

    /**
     * Callback function called before materialbox is opened.
     */
    onOpenStart: _propTypes.default.func,

    /**
     * Callback function called after materialbox is opened.
     */
    onOpenEnd: _propTypes.default.func,

    /**
     * Callback function called before materialbox is closed.
     */
    onCloseStart: _propTypes.default.func,

    /**
     * Callback function called after materialbox is closed.
     */
    onCloseEnd: _propTypes.default.func
  })
};
MediaBox.defaultProps = {
  id: "MediaBox_".concat((0, _idgen.default)()),
  options: {
    inDuration: 275,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null
  }
};
var _default = MediaBox;
exports.default = _default;