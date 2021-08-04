"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Countdown = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _SvgCircle = require("../SvgCircle/SvgCircle");

var _react = _interopRequireWildcard(require("react"));

var _daysCount = require("../hooks/daysCount");

require("./counter.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// interface CountdownProps {
//   timeTillDate: string;
//   timeFormat: string;
// }
const Countdown = props => {
  const timeTillDate = props.timeTillDate;
  const timeFormat = props.timeFormat;
  const counterData = (0, _daysCount.useDaysCount)(timeTillDate, timeFormat);
  const [days, setDays] = (0, _react.useState)(counterData[0].days);
  const [hours, setHours] = (0, _react.useState)(counterData[0].hours);
  const [minutes, setMinutes] = (0, _react.useState)(counterData[0].minutes);
  const [seconds, setSeconds] = (0, _react.useState)(counterData[0].seconds);
  const [progress, setProgress] = (0, _react.useState)(0);
  const [color, setColor] = (0, _react.useState)("#ed004f");
  (0, _react.useEffect)(() => {
    setDays(counterData[0].days);
    setHours(counterData[0].hours);
    setMinutes(counterData[0].minutes);
    setSeconds(counterData[0].seconds);
  }, [counterData, timeTillDate, seconds]);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "fa-stack fa-2x"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-circle fa-stack-2x"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-rocket fa-stack-1x fa-inverse"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "countdown-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "countdown-item"
  }, /*#__PURE__*/_react.default.createElement(_SvgCircle.SvgCircle, {
    title: "days",
    size: 100,
    progress: days,
    strokeWidth: 5,
    circleOneStroke: "#7ea9e1",
    circleTwoStroke: color,
    defaultValue: 365,
    extraData: seconds
  }), days, /*#__PURE__*/_react.default.createElement("span", null, "days")), /*#__PURE__*/_react.default.createElement("div", {
    className: "countdown-item"
  }, /*#__PURE__*/_react.default.createElement(_SvgCircle.SvgCircle, {
    title: "hours",
    size: 100,
    progress: hours,
    strokeWidth: 5,
    circleOneStroke: "#7ea9e1",
    circleTwoStroke: color,
    defaultValue: 24,
    extraData: seconds
  }), hours, /*#__PURE__*/_react.default.createElement("span", null, "hours")), /*#__PURE__*/_react.default.createElement("div", {
    className: "countdown-item"
  }, /*#__PURE__*/_react.default.createElement(_SvgCircle.SvgCircle, {
    title: "minutes",
    size: 100,
    progress: minutes,
    strokeWidth: 5,
    circleOneStroke: "#7ea9e1",
    circleTwoStroke: color,
    defaultValue: 60,
    extraData: seconds
  }), minutes, /*#__PURE__*/_react.default.createElement("span", null, "minutes")), seconds && seconds > 0 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "countdown-item"
  }, /*#__PURE__*/_react.default.createElement(_SvgCircle.SvgCircle, {
    size: 100,
    progress: seconds,
    strokeWidth: 5,
    circleOneStroke: "#7ea9e1",
    circleTwoStroke: color,
    defaultValue: 60,
    extraData: seconds
  }), seconds, /*#__PURE__*/_react.default.createElement("span", null, "seconds")) : null));
};

exports.Countdown = Countdown;