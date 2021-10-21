import styled from "styled-components";
import { FunctionComponent } from "react";

type Props = {};
const Wrapper = styled.section`
  color: ${({ theme }) => theme.colors.text.dark};
  font-style: italic;
  font-size: 1.3em;
  max-width: 500px;
  text-align: center;
  font-weight: 500;
  opacity: 0.7;
  line-height: 1.4em;
`;

const SubHeadlinePage: FunctionComponent<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default SubHeadlinePage;
