import React from "react";

interface RightArrowIconProps {
  width: Number;
  height: Number;
}

export const RightArrowIcon = ({ width, height }: RightArrowIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
      />
    </svg>
  );
};
