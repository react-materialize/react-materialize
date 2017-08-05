'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collection = function (_Component) {
  _inherits(Collection, _Component);

  function Collection(props) {
    _classCallCheck(this, Collection);

    var _this = _possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).call(this, props));

    _this.renderHeader = _this.renderHeader.bind(_this);
    return _this;
  }

  _createClass(Collection, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          header = _props.header;


      var classes = {
        collection: true,
        'with-header': !!header
      };
      var C = 'ul';
      _react2.default.Children.forEach(children, function (child) {
        if (child.props.href) {
          C = 'div';
        }
      });
      return _react2.default.createElement(
        C,
        { className: (0, _classnames2.default)(classes) },
        header ? this.renderHeader() : null,
        children
      );
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader() {
      var header = void 0;
      if (this.props.header) {
        if (_react2.default.isValidElement(this.props.header)) {
          header = this.props.header;
        } else {
          header = _react2.default.createElement(
            'h4',
            null,
            this.props.header
          );
        }
        return _react2.default.createElement(
          'li',
          { className: 'collection-header' },
          header
        );
      }
    }
  }]);

  return Collection;
}(_react.Component);

Collection.propTypes = {
  children: _propTypes2.default.node,
  header: _propTypes2.default.node
};

exports.default = Collection;