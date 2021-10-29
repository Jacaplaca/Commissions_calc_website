import styled from "styled-components";
import { FunctionComponent } from "react";
import antdBreakpoints from "../../../themes/antdBreakpoints";

type Props = {};
const Wrapper = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  /* padding: 0 20px; */
  /* padding-right: 23px; */
  /* padding-bottom: 65px; */
  align-items: center;

  margin-top: ${({ theme }) => theme.sizes.distanceFromMenu};
  @media ${antdBreakpoints.smMax} {
    margin-top: ${({ theme }) => theme.sizes.distanceFromMenuMobile};
  }
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
