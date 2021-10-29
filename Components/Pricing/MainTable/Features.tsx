import styled from "styled-components";
import { FunctionComponent } from "react";
import { MDXRemote } from "next-mdx-remote";
import { pricingFeatureType } from "../../../Types/pricingFeaturesType";
import { useTranslation } from "react-i18next";
import antdBreakpoints from "../../../themes/antdBreakpoints";
import { Collapse } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const { Panel } = Collapse;
// import features from "../Data/features.json";

const Wrapper = styled.div`
  /* display: flex; */
  /* @media ${antdBreakpoints.mdMax} {
    display: none;
  } */
`;

const Feature = styled.div<{ disabled: boolean; highlighted: boolean }>`
  p {
    margin: 0;
    padding: 0;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.palette.pricing.background};
  text-decoration: ${({ disabled }) => disabled && "line-through"};
  /* opacity: ${({ disabled }) => disabled && 0.5}; */
  color: ${({ disabled }) => disabled && "grey"};
  text-align: center;
  padding: 9px 25px;
  font-size: 0.85em;
  font-weight: ${({ disabled }) => (disabled ? 400 : 500)};
  background: ${({ highlighted, theme }) =>
    highlighted ? theme.colors.palette.pricing.background : "transparent"}; ;
`;

const PanelStyled = styled(Panel)`
  .ant-collapse-header {
    font-weight: 600;
    font-size: 1.2em;
    color: ${({ theme }) => theme.colors.text.dark};
    opacity: 0.8;
  }
`;

type Props = {
  features: pricingFeatureType;
  plan: number;
  highlightedRow: number | null;
  highlight: (i: number) => void;
};

const FeaturesContent: FunctionComponent<Props> = ({
  features,
  plan,
  highlightedRow,
  highlight,
}) => {
  const { t } = useTranslation("pricingFeatures");
  return (
    <Wrapper>
      {features.map(({ feat, plans }, i) => (
        <Feature
          key={i}
          disabled={!plans[plan]}
          onMouseEnter={(e) => highlight(i)}
          highlighted={highlightedRow === i}
        >
          {/* <MDXRemote {...feat} /> */}
          <div>{t(feat)}</div>
        </Feature>
      ))}
    </Wrapper>
  );
};

const Features: FunctionComponent<Props> = (props) => {
  const { t } = useTranslation("common");
  const screen = useBreakpoint();
  if (screen.md) {
    return <FeaturesContent {...props} />;
  }
  return (
    <Collapse ghost expandIconPosition="right">
      <PanelStyled header={t("seePlanSummary")} key="1">
        <FeaturesContent {...props} />
      </PanelStyled>
    </Collapse>
  );
};

export default Features;
