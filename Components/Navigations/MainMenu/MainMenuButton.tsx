import styled from "styled-components";
import { FunctionComponent } from "react";
import Link from "next/link";

type Props = {
  label: string;
  link: string;
};
const ButtonWrapper = styled.button`
  position: relative;
  cursor: pointer;
  outline: none;
  border: none;
  height: 40px;
  display: flex;
  align-items: center;
  background: transparent;

  .label {
    z-index: 1;
    padding: 0 10px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.midDarkBlue};
  }

  /* display: flex; */
`;

const Background = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  flex: 0;
  width: 100%;
  height: 0%;
  z-index: 0;
  /* opacity: 1; */
  transition: all 0.27s ease-in;
  background-color: ${({ theme }) => theme.colors.palette.orange.light};
  ${ButtonWrapper}:hover & {
    /* opacity: 0.5; */
    height: 60%;
  }
`;

const MainMenuButton: FunctionComponent<Props> = ({ label, link }) => {
  return (
    <Link href={link}>
      <a>
        <ButtonWrapper>
          <div className="label">{label}</div>
          <Background></Background>
        </ButtonWrapper>
      </a>
    </Link>
  );
};

export default MainMenuButton;
