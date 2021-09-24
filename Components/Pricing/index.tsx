import styled from "styled-components";
import dynamic from "next/dynamic";
import { FunctionComponent, useEffect, useState } from "react";
import { Slider } from "@mui/material";
// import { Slider, Switch } from "antd";
import TwoStateSlideAnimatedButton from "../Buttons/TwoStateSlideAnimatedButton";
import MainPricingTable from "./MainTable";
import { usePricingContext } from "./context";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useScrollData } from "scroll-data-hook";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import PricingFaq from "./Faq/PricingFaq";

type Props = {};
const Wrapper = styled.section`
  display: flex;
  /* background-color: lightgrey; */
  height: 100vh;
  flex: auto;
  display: flex;
  padding-top: 25px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .sliderWrapper {
    max-width: 650px;
    width: 100%;
}
  }
  .periodWrapper {
    margin-bottom: 55px;
  }
`;

const Headline = styled.h1`
  font-size: 2.1em;
  padding-bottom: 55px;
`;

const Pricing: FunctionComponent<Props> = ({ faq }) => {
  const {
    updateEmployees,
    employees,
    period,
    updatePeriod,
    maxEmployeesOnSlider,
    employeesTemp,
  } = usePricingContext();

  return (
    <Wrapper>
      <Headline>Plans for every stage of your creator journey</Headline>
      {/* <Button>sdf</Button> */}
      <div className="sliderWrapper">
        {/* <Slider
          defaultValue={0}
          disabled={false}
          min={0}
          max={maxEmployeesOnSlider}
          onChange={updateEmployees}
          value={employees}
        /> */}

        <Slider
          aria-label="Always visible"
          // defaultValue={0}
          value={employees}
          // getAriaValueText={(n) => "asdf"}
          max={maxEmployeesOnSlider}
          onChange={updateEmployees}
          // marks={marks}
          valueLabelDisplay="on"
          step={5}
        />
      </div>
      <div className="periodWrapper">
        <TwoStateSlideAnimatedButton
          active={period}
          changeActive={updatePeriod}
        />
      </div>
      <MainPricingTable />
      <PricingFaq source={faq} />
    </Wrapper>
  );
};

export default Pricing;
