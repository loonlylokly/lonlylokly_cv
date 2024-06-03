import { SVGProps } from "react";

type TProps = {
  children: string;
} & SVGProps<SVGSVGElement>;

export const CardTextPath = ({ children, ...props }: TProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
    viewBox="0 -50 700 100"
  >
    <path
      id="text-curve"
      stroke="none"
      d="m1 69 104.702-32.154a813.517 813.517 0 0 1 475.718-.591L689 69"
    />
    <text>
      <textPath
        fill="#000"
        startOffset="51%"
        textAnchor="middle"
        href="#text-curve"
      >
        {children}
      </textPath>
    </text>
  </svg>
);
