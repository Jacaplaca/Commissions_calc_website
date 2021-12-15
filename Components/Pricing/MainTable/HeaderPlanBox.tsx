import styled, { css } from "styled-components";
import { cloneElement, FunctionComponent } from "react";
import Recommended from "./Recommended";
import { usePricingContext } from "../context";
import Comment from "./Comment";
import MultiCurrencyFormat from "../../MultiCurrencyFormat";

import { useTranslation } from "react-i18next";
import ForEmployees from "./ForEmployees";
import SignUpButton from "../../Buttons/SignUpButton";
import { useMainContext } from "../../../contexts/main";
import antdBreakpoints from "../../../themes/antdBreakpoints";

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
  @media ${antdBreakpoints.mdMax} {
    display: ${({ isFooter }) => (isFooter ? "none" : "flex")};
    visibility: ${({ isSticky }) => (isSticky ? "hidden" : "visible")};
  }
  display: flex;
  position: ${({ isSticky, isFooter }) =>
    isSticky ? "sticky" : isFooter ? "relative" : "absolute"};
  top: ${({ isSticky }) => (isSticky ? -1 : 0)}px;
  flex: auto;
  width: 100%;
  height: ${({ height }) => height}px;
  opacity: ${({ isSticky }) => (isSticky ? 1 : 1)};
  border-bottom: 1px solid
    ${({ isFooter }) => (isFooter ? "transparent" : "lightgray")};
  z-index: ${({ showOnTop }) => (showOnTop ? 1 : 0)};
  ${({ isSticky }) => isSticky && shadowSticky};
  .content {
    display: flex;
    @media ${antdBreakpoints.mdMax} {
      display: ${({ isSticky }) => isSticky && "none"};
    }
    flex-direction: column;
    justify-content: ${({ isSticky }) => (isSticky ? "flex-start" : "center")};
    align-items: center;
    flex: auto;
    background-color: white;
    /* z-index: 1; */
    .planBox__content__header {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media ${antdBreakpoints.smMax} {
        flex-direction: row;
        justify-content: space-around;
        padding-bottom: 15px;
      }
    }
    .icon {
      height: 65px;
      @media ${antdBreakpoints.mdMax} {
        /* height: ; */
      }
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
      @media ${antdBreakpoints.smMax} {
        flex-direction: column;
      }

      .price__amountAndPeriod {
        align-items: baseline;
        display: flex;
      }
      .amount {
        /* margin-right: 5px; */
        font-size: ${({ isSticky }) => (isSticky ? 1.5 : 2.5)}em;
        @media ${antdBreakpoints.smMax} {
          font-size: 2em;
        }
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
      @media ${antdBreakpoints.smMax} {
        width: 100%;
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

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
  actionUrl: string;
  planName: "free" | "pro" | "basic";
};
const HeaderPlanBox: FunctionComponent<Props> = ({
  title,
  plan,
  icon,
  // isSticky,
  highlightPlan,
  isFooter,
  actionUrl,
  planName,
}) => {
  const {
    plans,
    employees,
    maxEmployeesOnSlider,
    headerPlanBoxHeightFull,
    headerPlanBoxHeightSticky,
    period,
  } = usePricingContext();

  const { currency, locale } = useMainContext();

  const { t, i18n } = useTranslation("pricing");

  const maxEmployeesReached = employees === maxEmployeesOnSlider;
  const isFree = planName === "free";
  const isDisabled = plans?.[planName]?.disabled;

  const headerPlanBoxHeightFooter = 150;
  const signUpUrl = `${actionUrl}&employees=${employees}&period=${
    period === 0 ? "month" : "year"
  }`;

  const isMonth = period === 0;

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
            <SignUpButton
              isFree={isFree}
              disabled={isDisabled}
              url={signUpUrl}
            />
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
              <MultiCurrencyFormat
                value={
                  isMonth
                    ? plans?.[planName]?.priceForAllEmployeesMonthly
                    : plans?.[planName]?.priceForAllEmployeesYearly
                }
                currency={currency}
                locale={locale}
              />
            </div>
            <div className="period">/{t("month")}</div>
          </div>
        </div>
      </Wrapper>

      <Wrapper height={headerPlanBoxHeightFull}>
        {/* <ColumnContent highlight={highlightPlan}> */}
        <div className="content">
          <div className="planBox__content__header">
            <div className="planBox__content__header__brand">
              <div className="icon">{icon && <Icon component={icon} />}</div>
              <h2 className="title">{title}</h2>
            </div>
            <div className="planBox__content__header__price">
              {maxEmployeesReached ? (
                <div className="overMax">
                  {t("over")} <strong>{maxEmployeesOnSlider}</strong>{" "}
                  {t("employees")}
                </div>
              ) : (
                <div className="price">
                  <div className="startingAt">{t("startingAt")}</div>
                  <div className="price__amountAndPeriod">
                    <div className="amount">
                      <MultiCurrencyFormat
                        value={
                          isMonth
                            ? plans?.[planName]?.priceForAllEmployeesMonthly
                            : plans?.[planName]?.priceForAllEmployeesYearly
                        }
                        currency={currency}
                        locale={locale}
                      />
                    </div>
                    <div className="period">/{t("month")}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="forEmployee">
            <ForEmployees plan={plan} planName={planName} />
          </div>
          <div className="comment">
            <Comment plan={plan} />
          </div>
          <div className="signUpButton">
            <SignUpButton
              isFree={isFree}
              disabled={isDisabled}
              url={signUpUrl}
            />
          </div>
        </div>
        <Recommended visible={highlightPlan} label={t("recommended")} />
      </Wrapper>
    </>
  );
};

export default HeaderPlanBox;
