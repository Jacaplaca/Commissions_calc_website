import styled from "styled-components";
import { FunctionComponent } from "react";

type Props = {
  path: string;
};
const Wrapper = styled.section`
  display: flex;
  width: 500px;
  height: 500px;
`;

const BigPictureCase: FunctionComponent<Props> = ({ path }) => {
  return (
    <Wrapper>
      <img src={path} />
    </Wrapper>
  );
};

export default BigPictureCase;
