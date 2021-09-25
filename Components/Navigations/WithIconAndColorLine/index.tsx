import styled, { css } from "styled-components";
import { cloneElement, FunctionComponent } from "react";
import { StopwatchRegular } from "../../NoCopy/Icons";

type Props = {};

const withLine = css`
  display: flex;
  height: 100%;
  flex-direction: column;
  border-top: 1px solid lightgray;
  justify-content: flex-end;
`;

const Element = styled.button<{ isActive: boolean }>`
  border: 0px solid transparent;
  ${withLine}
  cursor: pointer;
  outline: none;
  background: transparent;
  height: 45px;
  border-color: ${(p) => (p.isActive ? "red" : "lightgrey")};

  &:hover {
    border-color: ${({ theme }) => theme.colors.text.dark};
    opacity: 1;
  }

  .buttonWithIcon {
    display: flex;
    align-items: center;
    .label {
      font-size: 1.1em;
      font-weight: 500;
      color: grey;
      opacity: ${(p) => (p.isActive ? 1 : 0.8)};
    }
  }
`;

const Row = styled.section`
  display: flex;
  .spacer {
    ${withLine}
    width: 45px;
  }
  .elementWithSpacer {
    display: flex;
  }
`;

const elements = [
  { label: "Musicians", key: "one", icon: <StopwatchRegular /> },
  { label: "Two And", key: "two", icon: <StopwatchRegular /> },
  { label: "Three", key: "three", icon: <StopwatchRegular /> },
  { label: "Four More", key: "four", icon: <StopwatchRegular /> },
];

const Icon = styled(({ component, ...props }) =>
  cloneElement(component, props)
)`
  margin-right: 5px;
  font-size: 1.1em !important;
  color: ${(p) => (p.isActive ? "red" : "lightgrey")}!important;
`;

const NavigationHorizontalWithIconAndColorLine: FunctionComponent<Props> =
  ({}) => {
    const activeKey = "two";
    return (
      <Row>
        {elements.map((element, i) => {
          const isLast = elements.length - 1 === i;
          const { label, key, icon } = element;
          const isActive = activeKey === key;

          return (
            <div className="elementWithSpacer" key={key}>
              <Element isActive={isActive}>
                <div className="buttonWithIcon">
                  <Icon component={icon} isActive={isActive} />
                  <div className="label">{label}</div>
                </div>
              </Element>
              {!isLast && <div className="spacer" />}
            </div>
          );
        })}
      </Row>
    );
  };

export default NavigationHorizontalWithIconAndColorLine;
