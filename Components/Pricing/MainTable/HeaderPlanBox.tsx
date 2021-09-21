import styled from "styled-components";
import { FunctionComponent } from "react";
import Recommended from "./Recommended";
import { usePricingContext } from "../context";
import dynamic from "next/dynamic";
import ColumnContent from "./Styled/ColumnContent";
// import MultiCurrencyFormat from "../../NoCopy/MultiCurrencyFormat";

type Props = {};
const Wrapper = styled.section`
  display: flex;
  position: relative;
  flex: auto;
  height: 340px;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: auto;
    background-color: white;
    .price {
      display: flex;
      align-items: baseline;
      .amount {
        margin-right: 5px;
        font-size: 2em;
        font-weight: 900;
      }
    }
  }
`;

const MultiCurrencyFormat = dynamic(
  () => import("../../NoCopy/MultiCurrencyFormat"),
  { ssr: false }
);

const CommentStyled = styled.div`
  display: flex;
  .yearly {
    display: flex;
    margin-right: 5px;
    .yearlyAmount {
      margin-right: 3px;
    }
  }
`;

const Yearly = ({ period, yearlyPrice }) => {
  if (period) {
    return (
      <span className={"yearly"}>
        <span className={"yearlyAmount"}>
          <MultiCurrencyFormat value={yearlyPrice} currency="usd" />
        </span>
        <span>yearly.</span>
      </span>
    );
  }
  return null;
};

const Comment = ({ plan }) => {
  const { plans, period, recommendedPlan, freeEmployees, employees } =
    usePricingContext();
  const planData = plans[plan];
  const { yearlyPrice } = planData;

  if (plan === 0) {
    return (
      <CommentStyled>
        <div>
          Maximum <strong>{freeEmployees}</strong> employees
        </div>
      </CommentStyled>
    );
  }

  if (plan === 1) {
    return (
      <CommentStyled>
        <Yearly yearlyPrice={yearlyPrice} period={period} />
        <div>
          For up to <strong>{employees}</strong> employees.
        </div>
      </CommentStyled>
    );
  }

  if (plan === 2) {
    return (
      <CommentStyled>
        <Yearly yearlyPrice={yearlyPrice} period={period} />
        <div>
          For up to <strong>{employees}</strong> employees
        </div>
      </CommentStyled>
    );
  }
};

const HeaderPlanBox: FunctionComponent<Props> = ({ title, plan }) => {
  const { plans, period, recommendedPlan, freeEmployees } = usePricingContext();
  const highlightPlan = recommendedPlan === plan;

  return (
    <Wrapper>
      {/* <ColumnContent highlight={highlightPlan}> */}
      <div className="content">
        <div className="icon"></div>
        <div className="title">{title}</div>
        <div className="price">
          <div className="amount">
            <MultiCurrencyFormat value={plans[plan]?.price} currency="usd" />
          </div>
          <div className="period">/month</div>
        </div>
        <div className="comment">
          <Comment plan={plan} />
        </div>
        <div className="signUpButton"></div>
      </div>
      {/* </ColumnContent> */}
      <Recommended visible={highlightPlan} />
    </Wrapper>
  );
};

export default HeaderPlanBox;
