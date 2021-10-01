import styled from "styled-components";
import { FunctionComponent } from "react";

type Props = {};
const Wrapper = styled.section`
  display: flex;
  width: 800px;
  height: 350px;
  /* position: absolute; */
  /* top: 20px; */
  border-radius: 15px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: ${(p) => p.theme.shadows.subMenu};
`;

const SubMenu: FunctionComponent<Props> = ({}) => {
  return <Wrapper>sa</Wrapper>;
};

export default SubMenu;
