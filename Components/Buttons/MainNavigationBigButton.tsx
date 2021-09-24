import styled from "styled-components";
import { FunctionComponent } from "react";

type Props = {};
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
    background: ${({ theme }) => theme.colors.palette.darkBlue.main};
    color: ${({ theme }) => theme.colors.text.light};
  }
`;

const MainNavigationBigButton: FunctionComponent<Props> = ({ label }) => {
  return <Button>{label}</Button>;
};

export default MainNavigationBigButton;
