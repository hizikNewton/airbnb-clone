import * as React from "react";
import type { SVGProps } from "react";
const SvgSearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{
      display: "block",
      fill: "none",
      height: 12,
      width: 12,
      stroke: "currentColor",
      strokeWidth: 5.333333333333333,
      overflow: "visible",
    }}
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9" />
  </svg>
);
export default SvgSearchIcon;
