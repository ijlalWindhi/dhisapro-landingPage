import React from "react";

interface ITriangleSvgProps {
  readonly color?: string;
  readonly stroke?: string;
  readonly className?: string;
}

function TriangleSvg({
  color = "#000",
  stroke = "#fff",
  className,
}: ITriangleSvgProps) {
  return (
    <svg
      width="54"
      height="48"
      viewBox="0 0 54 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} w-8 h-8`}
    >
      <path
        d="M26.2512 3.23543C26.8379 2.23366 28.2835 2.23366 28.8509 3.23543L51.6588 43.5071C52.2251 44.507 51.4913 45.7556 50.3373 45.7556H3.946C2.792 45.7556 2.08224 44.507 2.66782 43.5071L26.2512 3.23543Z"
        fill={color}
        stroke={stroke}
        strokeWidth="3"
      />
    </svg>
  );
}

export default TriangleSvg;
