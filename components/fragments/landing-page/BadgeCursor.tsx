import React from "react";
import TriangleSvg from "./TriangleSvg";

interface BadgeCursorProps {
  readonly title: string;
  readonly color: string;
  readonly textColor?: string;
  readonly cursorPosition:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left";
}

function BadgeCursor({
  title,
  color,
  textColor,
  cursorPosition,
}: BadgeCursorProps) {
  // variables
  const positions = {
    "top-right": "top-0 -right-10 -rotate-[4deg] -translate-y-2/4",
    "top-left": "top-0 -left-10 rotate-[4deg] -translate-y-2/4",
    "bottom-right": "bottom-0 -right-10 rotate-[4deg] translate-y-2/4",
    "bottom-left": "bottom-0 -left-10 -rotate-[4deg] translate-y-2/4",
  };

  return (
    <div className="relative w-fit h-fit">
      <button
        className={`bg-[${color}] text-${textColor} border-[${textColor}] border cursor-pointer px-8 py-1.5 min-w-40 h-10 rounded-full border-none`}
      >
        {title}
      </button>
      {/* <div
        className={`${positions[cursorPosition]} w-0 h-0 absolute border-l-[13px] border-r-[26px] border-t-[26px] border-t-${color} border-x-transparent border-solid`}
      ></div> */}
      <TriangleSvg color={color} className="absolute" />
    </div>
  );
}

export default BadgeCursor;
