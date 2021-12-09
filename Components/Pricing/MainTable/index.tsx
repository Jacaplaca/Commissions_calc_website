import styled from "styled-components";
import { FunctionComponent, useState } from "react";
import HeaderPlanBox from "./HeaderPlanBox";
import { usePricingContext } from "../context";
import ColumnContent from "./Styled/ColumnContent";
import { PuzzleFour, PuzzleThree, PuzzleTwo } from "../../Icons";
import Features from "./Features";
import { useMainContext } from "../../../contexts/main";
import { pricingFeatureType } from "../../../Types/pricingFeaturesType";
import antdBreakpoints from "../../../themes/antdBreakpoints";
import paths from "../../../data/paths";

const Wrapper = styled.div<{ marginTop: number; backgroundColor: string }>`
  display: flex;
  position: relative;
  flex-direction: row;

  @media ${antdBreakpoints.mdMax} {
    flex-direction: column;
  }

  width: 100%;
  justify-content: center;
  background-color: red;
  height: 100%;
  background: linear-gradient(
    180deg,
    ${(p) => p.backgroundColor} 200px,
    white 100px
  );
  .column {
    width: 389px;
    @media ${antdBreakpoints.mdMax} {
      width: auto;
      margin: 30px;
    }

    .description {
      /* padding: 33px; */
      padding-bottom: 0px;
      margin-top: ${({ marginTop }) => marginTop}px;
    }
  }
`;

type Props = {
  features: pricingFeatureType;
};

const MainPricingTable: FunctionComponent<Props> = ({ features }) => {
  const {
    recommendedPlan,
    headerPlanBoxHeightFull,
    headerPlanBoxHeightSticky,
  } = usePricingContext();

  const { background } = useMainContext();

  const [featureRowHighlighted, setFeatureRowHighlighted] = useState<
    number | null
  >(null);

  const highlightRow = (rowIndex: number) => {
    setFeatureRowHighlighted(rowIndex);
  };

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
              actionUrl={paths.appSignUpFree}
            />
            <div className="description">
              <Features
                features={features}
                plan={0}
                highlightedRow={featureRowHighlighted}
                highlight={highlightRow}
              />
            </div>
            <HeaderPlanBox
              highlightPlan={recommendedPlan === 0}
              title="Free"
              plan={0}
              icon={<PuzzleTwo />}
              isFooter
              actionUrl={paths.appSignUpFree}
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
              actionUrl={paths.appSignUpBasic}
            />
            <div className="description">
              <Features
                features={features}
                plan={1}
                highlightedRow={featureRowHighlighted}
                highlight={highlightRow}
              />
            </div>
            <HeaderPlanBox
              highlightPlan={recommendedPlan === 1}
              title="Basic"
              plan={1}
              icon={<PuzzleThree />}
              isFooter
              actionUrl={paths.appSignUpBasic}
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
              actionUrl={paths.appSignUpPro}
            />
            <div className="description">
              <Features
                features={features}
                plan={2}
                highlightedRow={featureRowHighlighted}
                highlight={highlightRow}
              />
            </div>
            <HeaderPlanBox
              highlightPlan={recommendedPlan === 2}
              title="Pro"
              plan={2}
              icon={<PuzzleFour />}
              isFooter
              actionUrl={paths.appSignUpPro}
            />
          </ColumnContent>
        </div>
      </Wrapper>
    </>
  );
};

export default MainPricingTable;
