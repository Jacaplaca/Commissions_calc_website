import styled from "styled-components";
import Link from "next/link";
import { FunctionComponent } from "react";

type Props = {
  label: string;
  mobile?: boolean;
  path: string;
};
const Button = styled.button`
  display: flex;
  outline: 0;
  border: 1px solid ${({ theme }) => theme.colors.text.midDarkBlue};
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  padding: 7px 18px;
  cursor: pointer;
  font-weight: 500;
  background: transparent;
  color: ${({ theme }) => theme.colors.text.midDarkBlue};
  transition: all 0.2s ease-in;
  &:hover {
    background: ${({ theme }) => theme.colors.palette.red.main};
    color: ${({ theme }) => theme.colors.text.light};
    border: 1px solid ${({ theme }) => theme.colors.palette.red.main};
    a:link,
    a:visited {
      color: ${({ theme }) => theme.colors.text.light};
    }
  }
`;

const ButtonMobile = styled.button`
  display: flex;
  outline: 0;
  border: 0px solid ${({ theme }) => theme.colors.text.midDarkBlue};
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  padding: 7px 30px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9em;
  background: ${({ theme }) => theme.colors.palette.orange.dark};
  color: ${({ theme }) => "white"};
  transition: all 0.2s ease-in;
  a:link,
  a:visited {
    color: ${({ theme }) => "white"};
  }
`;

const MainNavigationBigButton: FunctionComponent<Props> = ({
  label,
  mobile,
  path,
}) => {
  if (mobile) {
    return (
      <ButtonMobile>
        <Link href={path}>
          <a>{label}</a>
        </Link>
      </ButtonMobile>
    );
  }
  return (
    <Button>
      <Link href={path}>
        <a>{label}</a>
      </Link>
    </Button>
  );
};

export default MainNavigationBigButton;
