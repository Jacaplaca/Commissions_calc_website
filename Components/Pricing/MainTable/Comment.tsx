import { usePricingContext } from "../context";
import styled from "styled-components";
import MultiCurrencyFormat from "../../MultiCurrencyFormat";
import { FunctionComponent } from "react";

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

type YProps = {
  period: number;
  yearlyPrice: number;
};
const Yearly: FunctionComponent<YProps> = ({ period, yearlyPrice }) => {
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

type Props = {
  plan: number;
};

const Comment: FunctionComponent<Props> = ({ plan }) => {
  const {
    plans,
    period,
    recommendedPlan,
    freeEmployees,
    employees,
    maxEmployeesOnSlider,
  } = usePricingContext();
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

  if (plan === 1 || plan === 2) {
    if (employees === maxEmployeesOnSlider) {
      return (
        <CommentStyled>
          <div>
            <u>
              <a href="http://">Request a demo</a>
            </u>{" "}
            to talk our team.
          </div>
        </CommentStyled>
      );
    }
    return (
      <CommentStyled>
        <Yearly yearlyPrice={yearlyPrice} period={period} />
        <div>
          For up to <strong>{employees}</strong> employees.
        </div>
      </CommentStyled>
    );
  }
  return null;
};

export default Comment;
