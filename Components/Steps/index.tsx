import styled from "styled-components";
import { FunctionComponent } from "react";
import { ArrowDrawRight } from "../Icons";
import antdBreakpoints from "../../themes/antdBreakpoints";

type Props = {
  steps: { number: number; title: string; description: string }[];
};
const Wrapper = styled.section`
  display: flex;
  gap: 0 35px;
  @media ${antdBreakpoints.lgMax} {
    gap: 0 20px;
  }
  @media ${antdBreakpoints.mdMax} {
    flex-direction: column;
  }
`;

const Step = styled.div`
  position: relative;
  .title__number {
    font-family: "Architects Daughter", cursive;
    font-size: 1.7em;
    padding-right: 9px;
    color: ${({ theme }) => theme.colors.palette.orange.main};
  }
  p {
    /* padding-right: 20px; */
  }
`;

const Icon = styled(ArrowDrawRight)<{ rotate: boolean }>`
  font-size: 2.5em !important;
  opacity: 0.7;
  position: absolute;
  top: 3px;
  right: 1px;
  color: ${({ theme }) => theme.colors.palette.orange.main};
  transform: scale(1, ${({ rotate }) => (rotate ? 1 : -1)});
  @media ${antdBreakpoints.lgMax} {
    display: none !important;
  }
`;

const Steps: FunctionComponent<Props> = ({ steps }) => {
  return (
    <Wrapper>
      {steps.map((step, i) => {
        const { number, title, description } = step;
        const isLast = steps.length - 1 === i;
        const isOdd = (i + 1) % 2 === 1;
        return (
          <Step key={number}>
            <h4 className="title">
              {!isLast && <Icon rotate={isOdd} />}
              <span className="title__number">{number}</span>
              <span className="title__content">{title}</span>
            </h4>
            <p>{description}</p>
          </Step>
        );
      })}
    </Wrapper>
  );
};

export default Steps;
