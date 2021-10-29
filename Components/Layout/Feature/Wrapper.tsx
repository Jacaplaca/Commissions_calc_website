import styled from "styled-components";
import { FunctionComponent } from "react";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { useTranslation } from "react-i18next";
import Layout from "../../Layout";
import PageLayout from "../Page";
import PageContent from "../Page/Content";
import TopPage from "../Page/Top";
import Wave from "../../Decorations/Wave";
import antdBreakpoints from "../../../themes/antdBreakpoints";

type Props = {
  content: MDXRemoteSerializeResult;
  backgroundColor: string;
  pageName: string;
};

const WaveContainer = styled.div`
  width: 100%;
  height: 115px;
  @media ${antdBreakpoints.smMax} {
    height: 45px;
    transform: translateY(-45px);
  }
  transform: translateY(-130px);
  z-index: 0;
`;

const PageContentWrapper = styled.div`
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -130px;
  @media ${antdBreakpoints.smMax} {
    margin-top: -45px;
  }
  /* padding-top: 80px; */
  padding-bottom: 80px;
`;

const FeatureWrapper: FunctionComponent<Props> = ({
  pageName,
  backgroundColor,
  content,
}) => {
  const { t } = useTranslation(["common", "subMenu"]);
  const page = `subMenu:${pageName}`;
  const headline = `subMenu:${pageName}Desc`;
  const more = `subMenu:${pageName}More`;
  return (
    <Layout
      backgroundColor={backgroundColor}
      seoTitle={headline}
      seoDescription={headline}
      seoMore={more}
    >
      <PageLayout>
        <TopPage
          pathElements={[t("features"), t(page)]}
          headline={t(headline)}
          subHeadline={t(more)}
        />
        <WaveContainer>
          <Wave height="100%" width="100%" fill={"white"} />
        </WaveContainer>
        <PageContentWrapper>
          <PageContent content={content} />
        </PageContentWrapper>
      </PageLayout>
    </Layout>
  );
};

export default FeatureWrapper;
