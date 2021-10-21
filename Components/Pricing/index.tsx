import styled, { useTheme } from "styled-components";
import { FunctionComponent, useEffect, useState } from "react";

import TwoStateSlideAnimatedButton from "../Buttons/TwoStateSlideAnimatedButton";
import MainPricingTable from "./MainTable";
import { usePricingContext } from "./context";

import PricingFaq, { FaqMDXs } from "./Faq/PricingFaq";
import EmployeesSlider from "./EmployeesSlider";
import Wave from "../Decorations/Wave";

const Wrapper = styled.section`
  display: flex;
  /* background-color: lightgrey; */
  /* height: 100vh; */
  flex: auto;
  display: flex;
  padding-top: 25px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .sliderWrapper {
    max-width: 650px;
    width: 100%;
    padding: 20px 0px;
  }
  .periodWrapper {
    padding: 28px 0px;
    margin-bottom: 85px;
  }
  .faq {
    padding-top: 195px;
    background: white;
    flex: 0;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    .waveContainer {
      width: 100%;
      height: 92px;
    }
    .faqContent {
      flex: 0;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      background-color: ${({ theme }) => theme.colors.palette.pricing.light};
      width: 100%;
      padding: 20px 0;
    }
  }
`;

const Headline = styled.h1`
  /* font-size: 2.1em; */
  padding-bottom: 34px;
  max-width: 700px;
  text-align: center;
`;

const SubTitle = styled.h4`
  max-width: 700px;
  text-align: center;
  padding-bottom: 25px; ;
`;

type Props = {
  faq: FaqMDXs;
};

const Pricing: FunctionComponent<Props> = ({ faq }) => {
  const {
    updateEmployees,
    employees,
    period,
    updatePeriod,
    maxEmployeesOnSlider,
    employeesTemp,
  } = usePricingContext();

  const theme = useTheme();
  // const { background } = useMainContext();

  return (
    <Wrapper>
      <Headline>Plans for every stage of your creator journey</Headline>
      <SubTitle>How many email subscribers do you have?</SubTitle>
      {/* <Button>sdf</Button> */}
      <div className="sliderWrapper">
        <EmployeesSlider
          value={employees}
          max={maxEmployeesOnSlider}
          onChange={updateEmployees}
        />
      </div>
      <div className="periodWrapper">
        <TwoStateSlideAnimatedButton
          active={period}
          changeActive={updatePeriod}
          colorScheme={{
            background: theme.colors.palette.pricing.medium,
            clicked: theme.colors.palette.pricing.dark,
          }}
        />
      </div>
      <MainPricingTable />
      <div className="faq">
        <div className="waveContainer">
          <Wave
            height="100%"
            width="100%"
            fill={theme.colors.palette.pricing.light}
          />
        </div>
        <div className="faqContent">
          <PricingFaq source={faq} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Pricing;
