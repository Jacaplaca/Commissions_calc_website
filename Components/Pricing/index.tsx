import styled from "styled-components";
import dynamic from "next/dynamic";
import { FunctionComponent, useEffect, useState } from "react";
import { Slider, Switch } from "antd";
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
  background-color: lightgrey;
  height: 100vh;
  flex: auto;
  display: flex;
  padding-top: 25px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .sliderWrapper {
    width: 100%;
    /* background: red; */
  }
  .periodWrapper {
    margin-bottom: 55px;
  }
`;

const Headline = styled.h1``;

const Pricing: FunctionComponent<Props> = ({ faq }) => {
  const {
    updateEmployees,
    employees,
    period,
    updatePeriod,
    maxEmployeesOnSlider,
  } = usePricingContext();

  return (
    <Wrapper>
      {/* <Headline>Plans for every stage of your creator journey</Headline>

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
      <MainPricingTable /> */}
      <PricingFaq source={faq} />
    </Wrapper>
  );
};

export default Pricing;
