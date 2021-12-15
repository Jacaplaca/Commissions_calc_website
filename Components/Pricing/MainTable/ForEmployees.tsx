import styled from "styled-components";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { usePricingContext } from "../context";
import MultiCurrencyFormat from "../../MultiCurrencyFormat";
import { useMainContext } from "../../../contexts/main";

type Props = {
  plan: number;
  planName: "free" | "pro" | "basic";
};
const Wrapper = styled.section`
  display: flex;
  gap: 0 5px;
  .amountForOne {
    font-weight: 700;
  }
`;

const ForEmployees: FunctionComponent<Props> = ({ plan, planName }) => {
  const {
    plans,
    period,
    recommendedPlan,
    freeEmployees,
    employees,
    maxEmployeesOnSlider,
  } = usePricingContext();
  const { t, i18n } = useTranslation("pricing");
  const { currency, locale } = useMainContext();

  const forOne = period
    ? plans?.[planName]?.priceMonthButYearPerEmployee
    : plans?.[planName]?.priceMonthPerEmployee;

  return (
    <Wrapper>
      <div className="startingAt">{t("forOne")}</div>
      <div className="amountForOne">
        <MultiCurrencyFormat
          value={forOne}
          currency={currency}
          locale={locale}
        />
      </div>
      <div className="period">/{t("month")}</div>
    </Wrapper>
  );
};

export default ForEmployees;
