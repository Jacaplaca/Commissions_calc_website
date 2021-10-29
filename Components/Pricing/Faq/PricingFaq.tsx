import styled from "styled-components";
import { cloneElement, FunctionComponent } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Collapse } from "antd";
import { AngleDownRegular } from "../../Icons";
import { useTranslation } from "react-i18next";
import antdBreakpoints from "../../../themes/antdBreakpoints";

const { Panel } = Collapse;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  max-width: 650px;
  padding: 25px 25px;
  .headline {
    @media ${antdBreakpoints.smMax} {
      font-size: 1.5em;
    }

    font-size: 2em;
    width: 100%;
    text-align: center;
    padding: 25px 0px;
  }
`;

const CollapseStyled = styled(Collapse)`
  /* border: 8px solid lightgray; */
  background-color: transparent;
  .ant-collapse-borderless {
  }
`;

const PanelStyled = styled(Panel)`
  margin-bottom: 10px !important;
  background-color: white;
  border-radius: 5px !important;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  padding-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  .ant-collapse-header {
    font-size: 1.1em;
    font-weight: 600;
  }
  p {
    text-indent: 30px;
    margin-bottom: 15px;
  }
`;

const Icon = styled(({ component, ...props }) =>
  cloneElement(component, props)
)`
  margin-top: -10px !important;
  transform: rotate(${({ rotate }) => rotate}deg) !important;
  font-size: 1.5em !important;
  transition: transform 0.2s ease-in-out !important;
  transform-origin: center center;
`;

export type FaqMDXs = {
  answer: MDXRemoteSerializeResult<Record<string, unknown>>;
  question: string;
}[];

type Props = {
  source: FaqMDXs;
};

const PricingFaq: FunctionComponent<Props> = ({ source }) => {
  const { t, i18n } = useTranslation("pricing");
  return (
    <Wrapper>
      <h3 className="headline">{t("answers")}</h3>
      {source.map(({ answer, question }, i) => {
        return (
          <CollapseStyled
            key={i}
            bordered={false}
            expandIconPosition="right"
            expandIcon={({ isActive }) => (
              <Icon
                component={<AngleDownRegular />}
                rotate={isActive ? 180 : 0}
              />
            )}
          >
            <PanelStyled header={question} key={i}>
              <MDXRemote {...answer} />
            </PanelStyled>
          </CollapseStyled>
        );
      })}
      {/* <MDXRemote {...source[0].answer} /> */}
    </Wrapper>
  );
};

export default PricingFaq;
