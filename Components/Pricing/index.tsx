import styled, { useTheme } from "styled-components";
import { FunctionComponent, useEffect, useState } from "react";

import TwoStateSlideAnimatedButton from "../Buttons/TwoStateSlideAnimatedButton";
import MainPricingTable from "./MainTable";
import { usePricingContext } from "./context";

import PricingFaq, { FaqMDXs } from "./Faq/PricingFaq";
import EmployeesSlider from "./EmployeesSlider";
import Wave from "../Decorations/Wave";

import { useTranslation } from "react-i18next";
import HeadlinePage from "../Layout/Page/Headline";
import SubHeadlinePage from "../Layout/Page/SubHeadline";
import { pricingFeatureType } from "../../Types/pricingFeaturesType";
import antdBreakpoints from "../../themes/antdBreakpoints";

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
  .top {
    @media ${antdBreakpoints.mdMax} {
      padding: 0 25px;
    }
    margin-bottom: 45px;
    margin-top: 45px;
    @media ${antdBreakpoints.smMax} {
      margin-top: 25px;
    }
    gap: 30px 0px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .sliderWrapper {
    @media ${antdBreakpoints.mdMax} {
      padding: 0 25px;
    }
    max-width: 650px;
    width: 100%;
    padding: 20px 0px;
  }
  .periodWrapper {
    padding: 28px 0px;
    margin-bottom: 85px;
    @media ${antdBreakpoints.mdMax} {
      margin-bottom: 15px;
    }
  }
  .faq {
    @media ${antdBreakpoints.mdMax} {
      padding-top: 25px;
    }
    padding-top: 195px;
    background: white;
    flex: 0;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    .waveContainer {
      width: 100%;
      @media ${antdBreakpoints.mdMax} {
        height: 32px;
      }
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

type Props = {
  faq: FaqMDXs;
  features: pricingFeatureType;
};

const Pricing: FunctionComponent<Props> = ({ faq, features }) => {
  const {
    updateEmployees,
    employees,
    period,
    updatePeriod,
    maxEmployeesOnSlider,
  } = usePricingContext();
  const { t, i18n } = useTranslation("pricing");

  const theme = useTheme();
  // const { background } = useMainContext();

  return (
    <Wrapper>
      <div className="top">
        <HeadlinePage>{t("pricing:title")}</HeadlinePage>
        <SubHeadlinePage>{t("subTitle")}</SubHeadlinePage>
      </div>
      {/* <Button>sdf</Button> */}
      <div className="sliderWrapper">
        <EmployeesSlider
          min={1}
          value={employees}
          max={maxEmployeesOnSlider}
          onChange={updateEmployees}
        />
      </div>
      <div className="periodWrapper">
        <TwoStateSlideAnimatedButton
          labelLeft={t("monthly")}
          labelRight={t("yearly")}
          active={period}
          changeActive={updatePeriod}
          colorScheme={{
            background: theme.colors.palette.pricing.medium,
            clicked: theme.colors.palette.pricing.dark,
          }}
        />
      </div>
      <MainPricingTable features={features} />
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
