import styled from "styled-components";
import { cloneElement, FunctionComponent } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Collapse, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { AngleDownRegular } from "../../NoCopy/Icons";

const { Panel } = Collapse;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 650px;
  padding: 25px 25px;
  .headline {
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
  return (
    <Wrapper>
      <h3 className="headline">Answers to some questions you may have</h3>
      {/* {faqMdx.map(async ({ answer, question }, i) => {
        const answerMdx = await serialize(answer);
        return (
          <div key={i}>
            <MDXRemote {...answerMdx} />
          </div>
        );
      })} */}
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
