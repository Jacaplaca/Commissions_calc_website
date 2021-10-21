import styled from "styled-components";
import { FunctionComponent } from "react";

type Props = {};
const Wrapper = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  /* padding-right: 23px; */
  /* padding-bottom: 65px; */
  align-items: center;
  margin-top: ${({ theme }) => theme.sizes.distanceFromMenu};
  /* background-image: url("/wave.svg") !important; */
  /* display: none !important; */
  * {
    margin: 0;
    padding: 0;
  }
`;

const PageWrapper: FunctionComponent<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageWrapper;
