import styled from "styled-components";
import { FunctionComponent } from "react";

type Props = {};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-right: 23px;
  padding-bottom: 65px;
  align-items: center;
  margin-top: ${({ theme }) => theme.sizes.distanceFromMenu};
  * {
    margin: 0;
    padding: 0;
  }
`;

const PageWrapper: FunctionComponent<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageWrapper;
