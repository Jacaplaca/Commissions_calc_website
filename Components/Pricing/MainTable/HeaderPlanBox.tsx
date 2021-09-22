import styled, { css } from "styled-components";
import {
  cloneElement,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import Recommended from "./Recommended";
import { usePricingContext } from "../context";
import dynamic from "next/dynamic";

type Props = {};

const shadowSticky = css`
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15) !important;
`;

const Wrapper = styled.section`
  display: flex;
  position: ${({ isSticky, isFooter }) =>
    isSticky ? "sticky" : isFooter ? "relative" : "absolute"};
  /* position: absolute; */
  top: ${({ isSticky }) => (isSticky ? -1 : 0)}px;
  flex: auto;
  width: 100%;
  /* margin-bottom: 340px; */
  /* height: 340px; */
  height: ${({ height }) => height}px;
  opacity: ${({ isSticky }) => (isSticky ? 1 : 1)};
  border-bottom: 1px solid
    ${({ isFooter }) => (isFooter ? "transparent" : "lightgray")};
  z-index: ${({ showOnTop }) => (showOnTop ? 1 : 0)};
  /* box-shadow: 0px 13px 24px -15px rgb(0 0 0 / 14%); */
  ${({ isSticky }) => isSticky && shadowSticky};
  .content {
    display: flex;
    flex-direction: column;
    justify-content: ${({ isSticky }) => (isSticky ? "flex-start" : "center")};
    align-items: center;
    flex: auto;
    background-color: white;
    /* z-index: 1; */
    .icon {
      height: 85px;
    }
    .title {
      font-size: ${({ isSticky }) => (isSticky ? 1.2 : 1.6)}em;
    }
    .overMax {
      height: 50px;
      display: flex;
      align-items: center;
      strong {
        padding: 0 4px;
      }
    }
    .price {
      height: ${({ isSticky }) => (isSticky ? 30 : 50)}px;
      display: flex;
      align-items: baseline;
      .amount {
        margin-right: 5px;
        font-size: ${({ isSticky }) => (isSticky ? 1.5 : 2)}em;
        font-weight: 900;
      }
    }
    .signUpButton {
      margin-top: 28px;
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
};

const SignUpButtonStyled = styled.button`
  outline: none;
  border-radius: 50px;
  background: darkblue;
  cursor: pointer;
  color: white;
  border: 0px solid transparent;
  padding: 7px 15px;
  font-size: 1.23em;
  font-weight: 500;
`;

const SignUpButton = ({ isFree }) => {
  const freeLabel = "Sign up free";
  const payingLabel = "Start free trial";

  return (
    <SignUpButtonStyled>{isFree ? freeLabel : payingLabel}</SignUpButtonStyled>
  );
};

const Icon = styled(({ component, ...props }) =>
  cloneElement(component, props)
)`
  font-size: 3.8em !important;
  color: ${({ theme }) => "darkblue"};
`;

const HeaderPlanBox: FunctionComponent<Props> = ({
  title,
  plan,
  icon,
  // isSticky,
  highlightPlan,
  isFooter,
}) => {
  const {
    plans,
    period,
    recommendedPlan,
    freeEmployees,
    employees,
    maxEmployeesOnSlider,
    headerPlanBoxHeightFull,
    headerPlanBoxHeightSticky,
  } = usePricingContext();

  const maxEmployeesReached = employees === maxEmployeesOnSlider;
  const isFree = plan === 0;

  const headerPlanBoxHeightFooter = 150;

  if (isFooter) {
    return (
      <Wrapper height={headerPlanBoxHeightFooter} isFooter>
        <div className="content">
          {maxEmployeesReached && (
            <div className="overMax">
              Over <strong>{maxEmployeesOnSlider}</strong> employees
            </div>
          )}
          <div className="comment">
            <Comment plan={plan} />
          </div>
          <div className="signUpButton">
            <SignUpButton isFree={isFree} />
          </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <>
      <Wrapper
        isSticky
        height={headerPlanBoxHeightSticky}
        // showOnTop={true}
      >
        <div className="content">
          <div className="title">{title}</div>
          <div className="price">
            <div className="amount">
              <MultiCurrencyFormat value={plans[plan]?.price} currency="usd" />
            </div>
            <div className="period">/month</div>
          </div>
        </div>
      </Wrapper>

      <Wrapper height={headerPlanBoxHeightFull}>
        {/* <ColumnContent highlight={highlightPlan}> */}
        <div className="content">
          <div className="icon">{icon && <Icon component={icon} />}</div>
          <h2 className="title">{title}</h2>
          {maxEmployeesReached ? (
            <div className="overMax">
              Over <strong>{maxEmployeesOnSlider}</strong> employees
            </div>
          ) : (
            <div className="price">
              <div className="amount">
                <MultiCurrencyFormat
                  value={plans[plan]?.price}
                  currency="usd"
                />
              </div>
              <div className="period">/month</div>
            </div>
          )}
          <div className="comment">
            <Comment plan={plan} />
          </div>
          <div className="signUpButton">
            <SignUpButton isFree={isFree} />
          </div>
        </div>
        {/* </ColumnContent> */}
        <Recommended visible={highlightPlan} />
      </Wrapper>
    </>
  );
};

export default HeaderPlanBox;
