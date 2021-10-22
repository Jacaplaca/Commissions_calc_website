import styled from "styled-components";
import { FunctionComponent } from "react";
import { MDXRemote } from "next-mdx-remote";
// import features from "../Data/features.json";

type Props = { enabled: number[] };
const Wrapper = styled.div`
  /* display: flex; */
`;

const Feature = styled.div<{ disabled: boolean; highlighted: boolean }>`
  p {
    margin: 0;
    padding: 0;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.palette.pricing.background};
  text-decoration: ${({ disabled }) => disabled && "line-through"};
  /* opacity: ${({ disabled }) => disabled && 0.5}; */
  color: ${({ disabled }) => disabled && "grey"};
  text-align: center;
  padding: 9px 25px;
  font-size: 0.85em;
  font-weight: ${({ disabled }) => (disabled ? 400 : 500)};
  background: ${({ highlighted, theme }) =>
    highlighted ? theme.colors.palette.pricing.background : "transparent"}; ;
`;

const Features: FunctionComponent<Props> = ({
  features,
  plan,
  highlightedRow,
  highlight,
}) => {
  return (
    <Wrapper>
      {features.map(({ feat, plans }, i) => (
        <Feature
          key={i}
          disabled={!plans[plan]}
          onMouseEnter={(e) => highlight(i)}
          highlighted={highlightedRow === i}
        >
          <MDXRemote {...feat} />
        </Feature>
      ))}
    </Wrapper>
  );
};

export default Features;
