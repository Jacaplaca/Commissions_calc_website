import styled from "styled-components";
import { FunctionComponent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Recommended from "./Recommended";
import HeaderPlanBox from "./HeaderPlanBox";
import { usePricingContext } from "../context";
import ColumnContent from "./Styled/ColumnContent";

type Props = {};
const ContainerGrid = styled.section`
  border: 1px solid lightgray;
  border-radius: 3px;
  display: grid;
  grid-template-columns: 389px 389px 389px;
  grid-template-rows: 340px 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "free basic pro"
    "freeContent basicContent proContent";
  /* .header {
    display: flex;
    position: relative;
    .content {
      flex: auto;
      background-color: white;
    }
  } */
  /* .free {
    grid-area: free;
  }
  .basic {
    grid-area: basic;
  }
  .pro {
    grid-area: pro;
  }
  .freeContent {
    grid-area: freeContent;
  }
  .basicContent {
    grid-area: basicContent;
  }
  .proContent {
    grid-area: proContent;
  } */
`;

const Wrapper = styled.div`
  display: flex;
  .column {
    width: 389px;
    .description {
      padding: 33px;
    }
  }
`;

const MainPricingTable: FunctionComponent<Props> = () => {
  const { plans, period, recommendedPlan } = usePricingContext();
  // const highlightPlan = recommendedPlan === plan;
  return (
    <Wrapper>
      <div className="column">
        <ColumnContent
          highlight={recommendedPlan === 0}
          showTail={recommendedPlan === 0}
        >
          <HeaderPlanBox title="Free" plan={0} />
          <div className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            omnis facere nostrum veritatis quod, pariatur aliquam qui velit
            tenetur explicabo ea nam natus assumenda sed ipsa! Vitae obcaecati
            nostrum accusantium.
          </div>
        </ColumnContent>
      </div>
      <div className="column">
        <ColumnContent
          highlight={recommendedPlan === 1}
          showTail={recommendedPlan === 1}
        >
          <HeaderPlanBox title="Basic" plan={1} />
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            odio velit asperiores eos porro dignissimos veniam quibusdam aliquid
            blanditiis libero laboriosam iure commodi, tempora quasi sunt nam
            possimus officiis! Commodi!
          </div>
        </ColumnContent>
      </div>
      <div className="column">
        <ColumnContent
          highlight={recommendedPlan === 2}
          showTail={recommendedPlan === 2}
        >
          <HeaderPlanBox title="Pro" plan={2} />
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            iusto aliquid consectetur reprehenderit, ipsam maxime veniam
            voluptate. Sunt, odio laborum ratione minima doloribus
            necessitatibus, blanditiis maiores officiis quae sit nemo?
          </div>
        </ColumnContent>
      </div>
    </Wrapper>
  );
};

export default MainPricingTable;
