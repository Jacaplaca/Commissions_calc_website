import styled from "styled-components";
import { FunctionComponent } from "react";

type Props = {
  path: string;
};
const Wrapper = styled.section`
  display: flex;
  max-width: 500px;
  max-height: 500px;
  /* width: auto; */
  /* height: auto; */
  img {
    width: 100%;
  }
`;

const BigPictureCase: FunctionComponent<Props> = ({ path }) => {
  return (
    <Wrapper>
      <img src={path} />
    </Wrapper>
  );
};

export default BigPictureCase;
