import styled from "styled-components";
import { FunctionComponent } from "react";

type Props = {};
const Wrapper = styled.section`
  font-size: 2.4em;
  text-transform: none;
  color: ${({ theme }) => theme.colors.text.dark};
  text-align: center;
  font-weight: 700;
  max-width: 900px;
  line-height: 1.3em;
`;

const HeadlinePage: FunctionComponent<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default HeadlinePage;
