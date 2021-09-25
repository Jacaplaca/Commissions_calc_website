import styled from "styled-components";
import { FunctionComponent } from "react";
import HeaderPlanBox from "./HeaderPlanBox";
import { usePricingContext } from "../context";
import ColumnContent from "./Styled/ColumnContent";
import { PuzzleFour, PuzzleThree, PuzzleTwo } from "../../NoCopy/Icons";
import Features from "./Features";
import { useMainContext } from "../../../contexts/main";

const Wrapper = styled.div<{ marginTop: number; backgroundColor: string }>`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  background-color: red;
  /* background-color: white; */
  height: 100%;
  background: linear-gradient(
    180deg,
    ${(p) => p.backgroundColor} 200px,
    white 100px
  );
  .column {
    width: 389px;
    .description {
      padding: 33px;
      padding-bottom: 0px;
      margin-top: ${({ marginTop }) => marginTop}px;
    }
  }
`;

type Props = {};

const MainPricingTable: FunctionComponent<Props> = () => {
  const {
    recommendedPlan,
    headerPlanBoxHeightFull,
    headerPlanBoxHeightSticky,
  } = usePricingContext();

  const { background } = useMainContext();

  return (
    <>
      <Wrapper
        marginTop={headerPlanBoxHeightFull - headerPlanBoxHeightSticky}
        backgroundColor={background}
      >
        <div className="column">
          <ColumnContent
            highlight={recommendedPlan === 0}
            showTail={recommendedPlan === 0}
          >
            <HeaderPlanBox
              highlightPlan={recommendedPlan === 0}
              title="Free"
              plan={0}
              icon={<PuzzleTwo />}
            />
            <div className="description">
              <Features enabled={[0, 1, 2, 3]} />
            </div>
            <HeaderPlanBox
              highlightPlan={recommendedPlan === 0}
              title="Free"
              plan={0}
              icon={<PuzzleTwo />}
              isFooter
            />
          </ColumnContent>
        </div>
        <div className="column">
          <ColumnContent
            highlight={recommendedPlan === 1}
            showTail={recommendedPlan === 1}
          >
            <HeaderPlanBox
              highlightPlan={recommendedPlan === 1}
              title="Basic"
              plan={1}
              icon={<PuzzleThree />}
            />
            <div className="description">
              <Features enabled={[0, 1, 2, 3, 4, 5, 6, 7]} />
            </div>
            <HeaderPlanBox
              highlightPlan={recommendedPlan === 1}
              title="Basic"
              plan={1}
              icon={<PuzzleThree />}
              isFooter
            />
          </ColumnContent>
        </div>
        <div className="column">
          <ColumnContent
            highlight={recommendedPlan === 2}
            showTail={recommendedPlan === 2}
          >
            <HeaderPlanBox
              highlightPlan={recommendedPlan === 2}
              title="Pro"
              plan={2}
              icon={<PuzzleFour />}
            />
            <div className="description">
              <Features enabled={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} />
            </div>
            <HeaderPlanBox
              highlightPlan={recommendedPlan === 2}
              title="Pro"
              plan={2}
              icon={<PuzzleFour />}
              isFooter
            />
          </ColumnContent>
        </div>
      </Wrapper>
    </>
  );
};

export default MainPricingTable;
