"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _PaginationButton = _interopRequireDefault(require("./PaginationButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Pagination = function Pagination(_ref) {
  var items = _ref.items,
      className = _ref.className,
      children = _ref.children,
      _ref$maxButtons = _ref.maxButtons,
      maxButtons = _ref$maxButtons === void 0 ? items : _ref$maxButtons,
      leftBtn = _ref.leftBtn,
      rightBtn = _ref.rightBtn,
      onSelect = _ref.onSelect,
      activePageProp = _ref.activePage;

  var _useState = (0, _react.useState)(activePageProp > 0 && activePageProp <= items ? activePageProp : 1),
      _useState2 = _slicedToArray(_useState, 2),
      activePage = _useState2[0],
      setActivePage = _useState2[1];

  (0, _react.useEffect)(function () {
    setActivePage(activePageProp);
  }, [activePageProp]);
  var onClick = (0, _react.useCallback)(function (pageIdx) {
    if (pageIdx > 0 && pageIdx <= items) {
      if (onSelect) onSelect(pageIdx);
      setActivePage(pageIdx);
    }
  }, [onSelect, items]);
  var renderButtons = (0, _react.useMemo)(function () {
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
    var buttons = [/*#__PURE__*/_react.default.createElement(_PaginationButton.default, {
      disabled: activePage === 1,
      key: 'pagination-0',
      onSelect: function onSelect() {
        return onClick(activePage - 1);
      }
    }, leftBtn)];

    var _loop = function _loop(i) {
      buttons.push( /*#__PURE__*/_react.default.createElement(_PaginationButton.default, {
        active: i === activePage,
        key: "pagination-".concat(i),
        onSelect: function onSelect() {
          return onClick(i);
        }
      }, i));
    };

    for (var i = from; i <= to; i++) {
      _loop(i);
    }

    buttons.push( /*#__PURE__*/_react.default.createElement(_PaginationButton.default, {
      key: "pagination-".concat(items + 1),
      disabled: activePage === items,
      onSelect: function onSelect() {
        return onClick(activePage + 1);
      }
    }, rightBtn));
    return buttons;
  }, [children, maxButtons, items, activePage, onClick, leftBtn, rightBtn]);
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: (0, _classnames.default)('pagination', className)
  }, renderButtons);
};

Pagination.propTypes = {
  /**
   * Number of items in the component
   */
  items: _propTypes.default.number.isRequired,

  /**
   * The initial activePage
   */
  activePage: _propTypes.default.number,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  maxButtons: _propTypes.default.number,
  onSelect: _propTypes.default.func,
  leftBtn: _propTypes.default.node,
  rightBtn: _propTypes.default.node
};
Pagination.defaultProps = {
  activePage: 1,
  items: 10,
  leftBtn: /*#__PURE__*/_react.default.createElement(_Icon.default, null, "chevron_left"),
  rightBtn: /*#__PURE__*/_react.default.createElement(_Icon.default, null, "chevron_right")
};
var _default = Pagination;
exports.default = _default;