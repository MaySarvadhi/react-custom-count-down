import React, { useState, useRef, useEffect, ReactElement } from "react";
import "./svgCircle.css";

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

export const SvgCircle = (props) => {
  const size = props.size;
  const progress = props.progress;
  const strokeWidth = props.strokeWidth;
  const circleOneStroke = props.circleOneStroke;
  const circleTwoStroke = props.circleTwoStroke;
  const defaultValue = props.defaultValue;
  const extraData = props.extraData;
  const title = props.title;
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset =
      ((defaultValue - progress) / defaultValue) * circumference;
    setOffset(progressOffset);
    circleRef.current.style =
      "transition: stroke-dashoffset 850ms ease-in-out;";
  }, [setOffset, circumference, progress, offset, extraData]);

  return (
    <svg className="countdown-svg" width={size} height={size}>
      <circle
        className="svg-circle-bg"
        stroke={circleOneStroke}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <circle
        className="svg-circle"
        ref={circleRef}
        stroke={circleTwoStroke}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
    </svg>
  );
};
