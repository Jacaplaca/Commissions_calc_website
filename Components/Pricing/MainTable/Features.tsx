import styled from "styled-components";
import { FunctionComponent } from "react";
import features from "../Data/features.json";

type Props = {};
const Wrapper = styled.ul`
  /* display: flex; */
`;

const Feature = styled.li`
  list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
  padding: 5px 0px;
  text-decoration: ${({ disabled }) => disabled && "line-through"};
  /* opacity: ${({ disabled }) => disabled && 0.5}; */
  color: ${({ disabled }) => disabled && "grey"};
`;

const Features: FunctionComponent<Props> = ({ enabled }) => {
  return (
    <Wrapper>
      {features.map((feature, i) => (
        <Feature key={i} disabled={!enabled.includes(i)}>
          {feature}
        </Feature>
      ))}
    </Wrapper>
  );
};

export default Features;
