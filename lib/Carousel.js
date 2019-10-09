"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Carousel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Carousel, _React$Component);

  function Carousel(props) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Carousel).call(this, props));
    _this.renderFixedItem = _this.renderFixedItem.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var options = this.props.options;

      if (options && typeof M !== 'undefined') {
        this.instance = M.Carousel.init(this._carousel, options);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.destroy();
      }
    }
  }, {
    key: "renderItems",
    value: function renderItems(child, centerImages) {
      if (typeof child === 'string') {
        return _react.default.createElement("a", {
          className: (0, _classnames.default)('carousel-item', {
            'valign-wrapper': centerImages
          })
        }, _react.default.createElement("img", {
          src: child,
          alt: ""
        }));
      }

      return _react.default.cloneElement(child, {
        className: (0, _classnames.default)('carousel-item', child.props.className, {
          'valign-wrapper': centerImages
        })
      });
    }
  }, {
    key: "renderFixedItem",
    value: function renderFixedItem(fixedItem) {
      return _react.default.createElement("div", {
        className: "carousel-fixed-item center"
      }, fixedItem);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          carouselId = _this$props.carouselId,
          fixedItem = _this$props.fixedItem,
          images = _this$props.images,
          centerImages = _this$props.centerImages,
          options = _this$props.options;
      var elemsToRender = children || images || [];
      return elemsToRender && _react.default.createElement("div", {
        id: carouselId,
        ref: function ref(el) {
          _this2._carousel = el;
        },
        className: (0, _classnames.default)('carousel', {
          'carousel-slider': options.fullWidth
        }, className)
      }, fixedItem && this.renderFixedItem(fixedItem), _react.default.Children.map(elemsToRender, function (child) {
        return _this2.renderItems(child, centerImages);
      }));
    }
  }]);

  return Carousel;
}(_react.default.Component);

Carousel.propTypes = {
  /*
   * Children to render as carousel elements
   */
  children: _propTypes.default.any,

  /*
   * Array of image url's
   */
  images: _propTypes.default.arrayOf(_propTypes.default.string),

  /*
   * Makes the images centered inside the carousel using '.valign-wrapper' CSS helper
   */
  centerImages: _propTypes.default.bool,

  /*
   * Fixed element on slider
   */
  fixedItem: _propTypes.default.node,

  /*
   * Additional classNames for carousel wrapper
   */
  className: _propTypes.default.string,

  /*
   * Carousel ID for jQuery manipulating
   */
  carouselId: _propTypes.default.string,

  /*
   * Carousel initialization options
   * <a href="http://materializecss.com/carousel.html">http://materializecss.com/carousel.html</a>
   */
  options: _propTypes.default.shape({
    /*
     * Transition duration in milliseconds. (Default: 200)
     */
    duration: _propTypes.default.number,

    /*
     * Perspective zoom. If 0, all items are the same size. (Default: -100)
     */
    dist: _propTypes.default.number,

    /*
     * Set the spacing of the center item. (Default: 0)
     */
    shift: _propTypes.default.number,

    /*
     * Set the padding between non center items. (Default: 0)
     */
    padding: _propTypes.default.number,

    /*
     * Set the number of visible items. (Default: 5)
     */
    numVisible: _propTypes.default.number,

    /*
     * Make the carousel a full width slider. (Default: false)
     */
    fullWidth: _propTypes.default.bool,

    /*
     * Set to true to show indicators. (Default: false)
     */
    indicators: _propTypes.default.bool,

    /*
     * Don't wrap around and cycle through items. (Default: false)
     */
    noWrap: _propTypes.default.bool,

    /*
     * Callback for when a new slide is cycled to. (Default: null)
     */
    onCycleTo: _propTypes.default.func
  })
};
Carousel.defaultProps = {
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