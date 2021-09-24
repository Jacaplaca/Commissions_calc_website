import styled from "styled-components";
import { FunctionComponent } from "react";
import MainMenu from "../../Navigations/MainMenu";

type Props = {};
const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 1170px;
  padding: 0 20px;
  flex: 0;
  width: 100%;
`;

const Header: FunctionComponent<Props> = ({}) => {
  return (
    <Wrapper>
      logo
      <MainMenu />
    </Wrapper>
  );
};

export default Header;
