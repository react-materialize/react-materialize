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

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _PaginationButton = require('./PaginationButton');

var _PaginationButton2 = _interopRequireDefault(_PaginationButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination(props) {
    _classCallCheck(this, Pagination);

    var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

    var activePage = props.activePage,
        items = props.items;


    _this.state = {
      activePage: activePage > 0 && activePage <= items ? activePage : 1
    };

    _this.renderButtons = _this.renderButtons.bind(_this);
    _this._onClick = _this._onClick.bind(_this);
    return _this;
  }

  _createClass(Pagination, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.activePage !== this.props.activePage) {
        this.setState({ activePage: nextProps.activePage });
      }
    }
  }, {
    key: '_onClick',
    value: function _onClick(i) {
      var _this2 = this;

      var _props = this.props,
          items = _props.items,
          onSelect = _props.onSelect;


      return function () {
        if (i > 0 && i <= items) {
          if (onSelect) {
            onSelect(i);
          }
          _this2.setState({ activePage: i });
        }
      };
    }
  }, {
    key: 'renderButtons',
    value: function renderButtons() {
      var _props2 = this.props,
          items = _props2.items,
          children = _props2.children,
          _props2$maxButtons = _props2.maxButtons,
          maxButtons = _props2$maxButtons === undefined ? items : _props2$maxButtons;
      var activePage = this.state.activePage;


      if (children) return children;

      var buttonsCount = Math.min(maxButtons, items);

      var maxPos = items - buttonsCount;
      var halfButtons = parseInt(buttonsCount / 2, 10);

      var hiddenPagesBefore = activePage - halfButtons;
      if (hiddenPagesBefore > maxPos) {
        hiddenPagesBefore = maxPos + 1;
      }

      var from = Math.max(hiddenPagesBefore, 1);
      var to = Math.min(items, from + maxButtons - 1);

      var buttons = [_react2.default.createElement(
        _PaginationButton2.default,
        {
          disabled: activePage === 1,
          key: 'pagination-0',
          onSelect: this._onClick(activePage - 1)
        },
        _react2.default.createElement(
          _Icon2.default,
          null,
          'chevron_left'
        )
      )];

      for (var i = from; i <= to; i++) {
        buttons.push(_react2.default.createElement(
          _PaginationButton2.default,
          {
            active: i === activePage,
            key: 'pagination-' + i,
            onSelect: this._onClick(i)
          },
          i
        ));
      }

      buttons.push(_react2.default.createElement(
        _PaginationButton2.default,
        {
          key: 'pagination-' + (items + 1),
          disabled: activePage === items,
          onSelect: this._onClick(activePage + 1)
        },
        _react2.default.createElement(
          _Icon2.default,
          null,
          'chevron_right'
        )
      ));

      return buttons;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        { className: (0, _classnames2.default)('pagination', this.props.className) },
        this.renderButtons()
      );
    }
  }]);

  return Pagination;
}(_react.Component);

Pagination.propTypes = {
  /**
   * Number of items in the component
   */
  items: _propTypes2.default.number.isRequired,
  /**
   * The initial activePage
   */
  activePage: _propTypes2.default.number,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  maxButtons: _propTypes2.default.number,
  onSelect: _propTypes2.default.func
};

Pagination.defaultProps = {
  activePage: 1,
  items: 10
};

exports.default = Pagination;