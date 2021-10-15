import { FunctionComponent } from "react";

type Props = {
  height: string;
  width: string;
  fill: string;
};

export const Wave: FunctionComponent<Props> = ({ height, width, fill }) => (
  <svg
    viewBox="0 0 1000 98"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    width={width}
    height={height}
    // width="200"
    // height="50"
    // style={{ width: "100%", height: "5em" }}
  >
    <path
      fill={fill}
      d="M405.651 15.8956C537.074 42.4389 598.942 76.6302 839.769 93.501C918.724 99.032 969.724 93.2301 1003 81.1469L1003 98H-4V21.5267C94.7069 10.501 239.927 -17.575 405.651 15.8956Z"
    ></path>
  </svg>
);

export default Wave;
