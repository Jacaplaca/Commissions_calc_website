import styled from "styled-components";
import { FunctionComponent } from "react";

type Props = {
  elements: string[];
};
const Wrapper = styled.section`
  display: flex;
  .element {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1em;
    opacity: 0.6;
    display: flex;
  }
  .divider {
    padding: 0 5px;
  }
`;

const Path: FunctionComponent<Props> = ({ elements }) => {
  return (
    <Wrapper>
      {elements.map((element, i) => {
        const after =
          i === elements.length - 1 ? null : (
            <div className="divider">&gt;</div>
          );
        return (
          <div className="element" key={element}>
            {element} {after}
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Path;
