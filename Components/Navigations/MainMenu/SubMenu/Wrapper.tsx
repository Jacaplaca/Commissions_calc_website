import styled from "styled-components";
import { FunctionComponent } from "react";

type Props = {};
const Wrapper = styled.section`
  border-radius: 15px;
  background: white;
  align-items: center;
  box-shadow: ${(p) => p.theme.shadows.subMenu};
  padding: 40px 50px;
  align-items: flex-start;
`;

const SubMenuWrapper: FunctionComponent<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default SubMenuWrapper;
