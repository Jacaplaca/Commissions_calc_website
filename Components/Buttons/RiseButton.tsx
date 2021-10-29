import styled from "styled-components";
import { FunctionComponent } from "react";
import { transparentize } from "polished";

const StartButton = styled.button`
  /* width: 140px; */
  /* height: 45px; */
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  color: #000;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  background: ${({ theme }) => theme.colors.palette.orange.light};
  color: ${({ theme }) => theme.colors.text.dark};
  padding: 15px 25px;

  font-weight: 600;

  &:hover {
    background: ${({ theme }) => theme.colors.palette.orange.main};
    box-shadow: 0px 15px 20px
      ${({ theme }) => transparentize(0.6, theme.colors.palette.orange.main)};
    color: #fff;
    transform: translateY(-5px);
  }
  &:active {
    transform: translateY(0px) scale(0.95);
  }
`;

type RiseButtonProps = {
  onClick: (e: any) => void;
};

const RiseButton: FunctionComponent<RiseButtonProps> = ({
  children,
  onClick,
}) => {
  return <StartButton onClick={onClick}>{children}</StartButton>;
};

export default RiseButton;
