import styled, { css } from "styled-components";
import { cloneElement, FunctionComponent } from "react";
import Recommended from "./Recommended";
import { usePricingContext } from "../context";
import Comment from "./Comment";
import MultiCurrencyFormat from "../../MultiCurrencyFormat";

import { useTranslation } from "react-i18next";

const shadowSticky = css`
  &:after {
    position: absolute;
    content: "";
    height: 2px;
    width: 100%;
    bottom: 0;
    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15) !important;
  }
`;

const Wrapper = styled.section<{
  isSticky?: boolean;
  isFooter?: boolean;
  height?: number;
  showOnTop?: boolean;
}>`
  display: flex;
  /* background-color: red; */
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
      height: ${({ isSticky }) => (isSticky ? 30 : 55)}px;
      display: flex;
      align-items: baseline;
      .amount {
        /* margin-right: 5px; */
        font-size: ${({ isSticky }) => (isSticky ? 1.5 : 2.5)}em;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.text.midDarkBlue};
      }
      .period,
      .startingAt {
        font-size: 1em;
        padding: 0 7px;
      }
    }
    .signUpButton {
      margin-top: 28px;
    }
  }
`;

const SignUpButtonStyled = styled.button`
  outline: none;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.palette.red.main};
  cursor: pointer;
  color: white;
  border: 0px solid transparent;
  padding: 12px 20px;
  font-size: 1.23em;
  font-weight: 500;
  opacity: 0.8;
  transition: opacity 0.2s linear;
  &:hover {
    opacity: 1;
  }
`;

const SignUpButton: FunctionComponent<{ isFree: boolean }> = ({ isFree }) => {
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
  color: ${({ theme }) => theme.colors.palette.red.main};
`;

type Props = {
  title: string;
  plan: number;
  highlightPlan: boolean;
  isFooter?: boolean;
  icon: JSX.Element;
};
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
    employees,
    maxEmployeesOnSlider,
    headerPlanBoxHeightFull,
    headerPlanBoxHeightSticky,
  } = usePricingContext();

  const { t, i18n } = useTranslation("pricing");

  const maxEmployeesReached = employees === maxEmployeesOnSlider;
  const isFree = plan === 0;

  const headerPlanBoxHeightFooter = 150;

  if (isFooter) {
    return (
      <Wrapper height={headerPlanBoxHeightFooter} isFooter>
        <div className="content">
          {maxEmployeesReached && (
            <div className="overMax">
              {t("over")} <strong>{maxEmployeesOnSlider}</strong>{" "}
              {t("employees")}
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
            <div className="period">/{t("month")}</div>
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
              {t("over")} <strong>{maxEmployeesOnSlider}</strong>{" "}
              {t("employees")}
            </div>
          ) : (
            <div className="price">
              <div className="startingAt">{t("startingAt")}</div>
              <div className="amount">
                <MultiCurrencyFormat
                  value={plans[plan]?.price}
                  currency="usd"
                />
              </div>
              <div className="period">/{t("month")}</div>
            </div>
          )}
          <div className="comment">
            <Comment plan={plan} />
          </div>
          <div className="signUpButton">
            <SignUpButton isFree={isFree} />
          </div>
        </div>
        <Recommended visible={highlightPlan} label={t("recommended")} />
      </Wrapper>
    </>
  );
};

export default HeaderPlanBox;
