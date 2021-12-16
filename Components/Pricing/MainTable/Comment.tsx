import Link from "next/link";
import { usePricingContext } from "../context";
import styled from "styled-components";
import MultiCurrencyFormat from "../../MultiCurrencyFormat";
import { FunctionComponent } from "react";

import { useTranslation } from "react-i18next";
import { useMainContext } from "../../../contexts/main";
import paths from "../../../data/paths";

const CommentStyled = styled.div`
  display: flex;
  .lowerCase {
    text-transform: lowercase;
  }
  .yearly {
    display: flex;
    margin-right: 5px;
    .yearlyAmount {
      margin-right: 3px;
    }
  }
`;

const AskInquiry = styled.a`
  outline: none;
  background: transparent;
  border: none;
  text-decoration: underline;
  cursor: pointer;
`;

const CommentButton = styled.button`
  outline: none;
  background: transparent;
  border: none;
  cursor: pointer;
  a {
    color: ${({ theme }) => theme.colors.palette.red.main};
  }
`;

type YProps = {
  period: number;
  yearlyPrice: number;
};
const Yearly: FunctionComponent<YProps> = ({ period, yearlyPrice }) => {
  const { t, i18n } = useTranslation("pricing");
  const { currency, locale } = useMainContext();
  if (period) {
    return (
      <span className={"yearly"}>
        <span className={"yearlyAmount"}>
          <MultiCurrencyFormat
            value={yearlyPrice}
            currency={currency}
            locale={locale}
          />
        </span>
        <span className="lowerCase">{`${t("yearly")}.`}</span>
      </span>
    );
  }
  return null;
};

type Props = {
  plan: number;
  planName: "free" | "pro" | "basic";
};

const Comment: FunctionComponent<Props> = ({ plan, planName }) => {
  const {
    plans,
    period,
    recommendedPlan,
    freeEmployees,
    employees,
    maxEmployeesOnSlider,
  } = usePricingContext();
  const { t, i18n } = useTranslation("pricing");
  const planData = plans?.[planName];
  // const { yearlyPrice } = planData || {};

  const { handleOpenContact } = useMainContext();

  if (plan === 0) {
    return (
      <CommentStyled>
        <div>
          {t("maximum")} <strong>{freeEmployees}</strong> {t("employees")}
        </div>
      </CommentStyled>
    );
  }

  if (plan === 1 || plan === 2) {
    if (employees === maxEmployeesOnSlider) {
      return (
        <CommentStyled>
          <CommentButton onClick={handleOpenContact}>
            <AskInquiry>{t("inquiry")}</AskInquiry>
          </CommentButton>
        </CommentStyled>
      );
    }
    return (
      <CommentStyled>
        <Yearly
          yearlyPrice={planData.priceForAllEmployeesYearly * 12}
          period={period}
        />
        <div>
          {t("upTo")} <strong>{employees}</strong> {t("employees")}.
        </div>
      </CommentStyled>
    );
  }
  return null;
};

export default Comment;
