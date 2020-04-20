"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _idgen = _interopRequireDefault(require("./idgen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Carousel = function Carousel(_ref) {
  var children = _ref.children,
      className = _ref.className,
      carouselId = _ref.carouselId,
      fixedItem = _ref.fixedItem,
      images = _ref.images,
      centerImages = _ref.centerImages,
      options = _ref.options;
  var carouselRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var instance = M.Carousel.init(carouselRef.current, options);
    return function () {
      return instance.destroy();
    };
  }, [options]);
  var elemsToRender = children || images || [];
  var classes = (0, _classnames.default)('carousel', {
    'carousel-slider': options.fullWidth
  }, className);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: carouselId,
    ref: carouselRef,
    className: classes
  }, Boolean(fixedItem) && /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-fixed-item center"
  }, fixedItem), _react.default.Children.map(elemsToRender, function (child) {
    var classes = (0, _classnames.default)('carousel-item', {
      'valign-wrapper': centerImages
    });

    if (typeof child === 'string') {
      return /*#__PURE__*/_react.default.createElement("a", {
        className: classes
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: child,
        alt: child
      }));
    }

    return _react.default.cloneElement(child, {
      className: (0, _classnames.default)(classes, child.props.className)
    });
  }));
};

Carousel.propTypes = {
  /**
   * Children to render as carousel elements
   */
  children: _propTypes.default.any,

  /**
   * Array of image url's
   */
  images: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Makes the images centered inside the carousel using '.valign-wrapper' CSS helper
   */
  centerImages: _propTypes.default.bool,

  /**
   * Fixed element on slider
   */
  fixedItem: _propTypes.default.node,

  /**
   * Additional classNames for carousel wrapper
   */
  className: _propTypes.default.string,

  /**
   * Carousel ID for jQuery manipulating
   */
  carouselId: _propTypes.default.string,

  /**
   * Carousel initialization options
   * <a href="http://materializecss.com/carousel.html">http://materializecss.com/carousel.html</a>
   */
  options: _propTypes.default.shape({
    /**
     * Transition duration in milliseconds. (Default: 200)
     */
    duration: _propTypes.default.number,

    /**
     * Perspective zoom. If 0, all items are the same size. (Default: -100)
     */
    dist: _propTypes.default.number,

    /**
     * Set the spacing of the center item. (Default: 0)
     */
    shift: _propTypes.default.number,

    /**
     * Set the padding between non center items. (Default: 0)
     */
    padding: _propTypes.default.number,

    /**
     * Set the number of visible items. (Default: 5)
     */
    numVisible: _propTypes.default.number,

    /**
     * Make the carousel a full width slider. (Default: false)
     */
    fullWidth: _propTypes.default.bool,

    /**
     * Set to true to show indicators. (Default: false)
     */
    indicators: _propTypes.default.bool,

    /**
     * Don't wrap around and cycle through items. (Default: false)
     */
    noWrap: _propTypes.default.bool,

    /**
     * Callback for when a new slide is cycled to. (Default: null)
     */
    onCycleTo: _propTypes.default.func
  })
};
Carousel.defaultProps = {
  carouselId: "Carousel-".concat((0, _idgen.default)()),
  options: {
    duration: 200,
    dist: -100,
    shift: 0,
    padding: 0,
    numVisible: 5,
    fullWidth: false,
    indicators: false,
    noWrap: false,
    onCycleTo: null
  }
};
var _default = Carousel;
exports.default = _default;