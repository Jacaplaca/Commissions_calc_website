import styled from "styled-components";
import { FunctionComponent } from "react";

type Props = {};
const Wrapper = styled.section`
  display: flex;
  width: 500px;
  height: 500px;
  /* background: lightblue url(${(p) => p.path}) no-repeat fixed center; */
  /* clip-path: ellipse(48% 40% at 50% 50%); */
  /* background-size: auto; */
  /* background-attachment: local; */
  /* background-size: 300px 100px; */
`;

const BigPictureCase: FunctionComponent<Props> = ({ path }) => {
  return (
    <Wrapper>
      <img src={path} />
    </Wrapper>
  );
};

export default BigPictureCase;
