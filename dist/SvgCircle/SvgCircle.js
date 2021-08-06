"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SvgCircle = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./svgCircle.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// interface SvgProps {
//   size: number;
//   progress: number;
//   strokeWidth: number;
//   circleOneStroke: string;
//   circleTwoStroke: string;
//   defaultValue: number;
//   extraData?: number;
//   title?: string;
// }
const SvgCircle = props => {
  const {
    size,
    progress,
    strokeWidth,
    circleOneStroke,
    circleTwoStroke,
    defaultValue,
    extraData,
    title
  } = props;
  const [offset, setOffset] = (0, _react.useState)(0);
  const circleRef = (0, _react.useRef)(null);
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  (0, _react.useEffect)(() => {
    const progressOffset = (defaultValue - progress) / defaultValue * circumference;
    setOffset(progressOffset);
    circleRef.current.style = "transition: stroke-dashoffset 850ms ease-in-out;";
  }, [setOffset, circumference, progress, offset, extraData]);
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: "countdown-svg",
    width: size,
    height: size
  }, /*#__PURE__*/_react.default.createElement("circle", {
    className: "svg-circle-bg",
    stroke: circleOneStroke,
    cx: center,
    cy: center,
    r: radius,
    strokeWidth: strokeWidth
  }), /*#__PURE__*/_react.default.createElement("circle", {
    className: "svg-circle",
    ref: circleRef,
    stroke: circleTwoStroke,
    cx: center,
    cy: center,
    r: radius,
    strokeWidth: strokeWidth,
    strokeDasharray: circumference,
    strokeDashoffset: offset
  }));
};

exports.SvgCircle = SvgCircle;