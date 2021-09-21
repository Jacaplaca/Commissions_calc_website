import styled from "styled-components";
import dynamic from "next/dynamic";
import { FunctionComponent, useState } from "react";
import { Slider, Switch } from "antd";
import TwoStateSlideAnimatedButton from "../Buttons/TwoStateSlideAnimatedButton";
import MainPricingTable from "./MainTable";
import { usePricingContext } from "./context";

type Props = {};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .sliderWrapper {
    width: 100%;
    /* background: red; */
  }
  .periodWrapper {
    margin-bottom: 55px;
  }
`;

// const TwoStateSlideAnimatedButton = dynamic(
//   () => import("../Buttons/TwoStateSlideAnimatedButton"),
//   { ssr: false }
// );

const Headline = styled.h1``;

const Pricing: FunctionComponent<Props> = ({}) => {
  const [recommendedPlan, setRecommendedPlan] = useState("free");
  const {
    updateEmployees,
    employees,
    period,
    updatePeriod,
    maxEmployeesOnSlider,
  } = usePricingContext();
  return (
    <Wrapper>
      {/* <div className="button" onClick={() => setRecommendedPlan("free")}>
        Free
      </div>
      <div className="button" onClick={() => setRecommendedPlan("basic")}>
        Basic
      </div>
      <div className="button" onClick={() => setRecommendedPlan("pro")}>
        Pro
      </div> */}
      <Headline>Plans for every stage of your creator journey</Headline>
      <div className="sliderWrapper">
        <Slider
          defaultValue={0}
          disabled={false}
          min={0}
          max={maxEmployeesOnSlider}
          onChange={updateEmployees}
          value={employees}
        />
      </div>
      <div className="periodWrapper">
        <TwoStateSlideAnimatedButton
          active={period}
          changeActive={updatePeriod}
        />
      </div>
      <MainPricingTable />
    </Wrapper>
  );
};

export default Pricing;
