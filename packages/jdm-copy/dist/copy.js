"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _clipboard = _interopRequireDefault(require("clipboard"));

var _antdMobile = require("antd-mobile");

require("./node_modules/antd-mobile/dist/antd-mobile.css");

require("./copy.less");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var clipboard;
var defaultCopySuccess = '<p>“京东好借”<br />复制成功<br />快去粘贴搜索吧！</p>';
;
var defaultCopyFailure = '复制失败，请前往微信搜索“京东好借”！';
var defaultCopyValue = "京东好借";
var defaultButtonText = '一键复制“京东好借”';
/**
 * 
 * @param { string copySuccess 成功提示}
 * @param { string copyFailure 失败提示}
 * @param { string copyValue 复制内容}
 * @param { string buttonText 按钮显示}
 * @param { object textareaStyle 复制内容都放在textarea里，如果隐藏不好，需要自己修改样式}
 * @param { object buttonStyle 复制按钮样式}
 */

var Copy = function Copy(_ref) {
  var _ref$copySuccess = _ref.copySuccess,
      copySuccess = _ref$copySuccess === void 0 ? defaultCopySuccess : _ref$copySuccess,
      _ref$copyFailure = _ref.copyFailure,
      copyFailure = _ref$copyFailure === void 0 ? defaultCopyFailure : _ref$copyFailure,
      _ref$copyValue = _ref.copyValue,
      copyValue = _ref$copyValue === void 0 ? defaultCopyValue : _ref$copyValue,
      _ref$buttonText = _ref.buttonText,
      buttonText = _ref$buttonText === void 0 ? defaultButtonText : _ref$buttonText,
      textareaStyle = _ref.textareaStyle,
      buttonStyle = _ref.buttonStyle,
      style = _ref.style;
  clipboard = new _clipboard["default"]('.clipboard');
  clipboard.on('success', function (e) {
    _antdMobile.Toast.info(copySuccess);

    e.clearSelection();
  });
  clipboard.on('error', function (e) {
    _antdMobile.Toast.info(copyFailure);
  });
  return _react["default"].createElement("div", {
    className: "jdm-copy-wrap"
  }, _react["default"].createElement("textarea", {
    className: "jdm-copy-area",
    id: "gongzhonghao",
    defaultValue: copyValue,
    style: textareaStyle
  }), _react["default"].createElement("button", {
    className: "clipboard jdm-copy-button",
    "data-clipboard-target": "#gongzhonghao",
    style: buttonStyle || style
  }, buttonText));
};

var _default = Copy;
exports["default"] = _default;