import styled, { css } from "styled-components";
import { cloneElement, FunctionComponent } from "react";
import antdBreakpoints from "../../../themes/antdBreakpoints";

const withLine = css`
  display: flex;
  height: 100%;
  flex-direction: column;
  border-top: 1px solid lightgray;
  justify-content: flex-end;
  @media ${antdBreakpoints.smMax} {
    border-top: 0px solid lightgray;
  }
`;

const Element = styled.button<{ isActive: boolean; color: string }>`
  border: 0px solid transparent;
  ${withLine}
  cursor: pointer;
  outline: none;
  background: transparent;
  height: 45px;
  @media ${antdBreakpoints.smMax} {
    height: 30px;
  }

  border-color: ${(p) => (p.isActive ? p.color : "lightgrey")};

  &:hover {
    border-color: ${({ theme }) => theme.colors.text.dark};
    opacity: 1;
  }

  .buttonWithIcon {
    display: flex;
    align-items: center;
    .label {
      font-size: 0.9em;
      font-weight: 500;
      color: grey;
      opacity: ${(p) => (p.isActive ? 1 : 0.8)};
    }
  }
`;

const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  @media ${antdBreakpoints.smMax} {
    justify-content: center;
  }
  .spacer {
    ${withLine}
    width: 25px;
  }
  .elementWithSpacer {
    display: flex;
  }
`;

const IconStyled = styled(({ component, color, ...props }) =>
  cloneElement(component, props)
)`
  margin-right: 5px;
  font-size: 1.1em !important;
  color: ${(p) => (p.isActive ? p.color : "lightgrey")}!important;
`;

type Props = {
  elements: { label: string; key: string; Icon: FunctionComponent }[];
  activeKey: string;
  changeActiveKey: (key: string) => void;
  color: string;
};

const NavigationHorizontalWithIconAndColorLine: FunctionComponent<Props> = ({
  elements,
  activeKey,
  changeActiveKey,
  color,
}) => {
  return (
    <Row>
      {elements.map((element, i) => {
        const isLast = elements.length - 1 === i;
        const { label, key, Icon } = element;
        const isActive = activeKey === key;

        return (
          <div className="elementWithSpacer" key={key}>
            <Element
              isActive={isActive}
              onClick={() => changeActiveKey(key)}
              color={color}
            >
              <div className="buttonWithIcon">
                <IconStyled
                  component={<Icon />}
                  isActive={isActive}
                  color={color}
                />
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
