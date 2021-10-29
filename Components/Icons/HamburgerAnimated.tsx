import styled from "styled-components";
import { FunctionComponent, useState } from "react";

const WIDTH = 100;

type Props = {
  opened: boolean;
  onClick: () => void;
};
const Wrapper = styled.button`
  outline: none;
  background: transparent;
  border: none;
  display: flex;
  /* width: 50px; */
  /* height: 50px; */
  transform: scale(0.4);
  padding: 0;
  margin-top: -35px;
  margin-right: -30px;
  cursor: pointer;
  .menu {
    z-index: 0;
    background-color: transparent;
    border: none;
    display: flex;
  }
  .line {
    fill: none;
    stroke: ${({ theme }) => theme.colors.text.dark};
    stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .line1 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 6;
  }
  .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  .opened .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
  .opened .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 6;
  }
  .opened .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
`;

const HamburgerAnimated: FunctionComponent<Props> = ({ opened, onClick }) => {
  return (
    <Wrapper
      onClick={onClick}
      aria-label={`Main Menu ${opened && "aria-expanded"}`}
    >
      <div
        className={`menu ${opened && "opened"}`}
        // onClick={onClick}
      >
        <svg width={WIDTH} height={WIDTH} viewBox={`0 0 ${WIDTH} ${WIDTH}`}>
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="line line2" d="M 20,50 H 80" />
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </div>
    </Wrapper>
  );
};

export default HamburgerAnimated;
