import { SVGProps } from "react";

const Add = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8Zm3.2 8.8H8.8v2.4c0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8V8.8H4.8c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8h2.4V4.8c0-.44.36-.8.8-.8.44 0 .8.36.8.8v2.4h2.4c.44 0 .8.36.8.8 0 .44-.36.8-.8.8Z"
      fill="#fff"
    />
  </svg>
);

export default Add;
