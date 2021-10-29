import styled from "styled-components";
import { FunctionComponent } from "react";
import Layout from "../../Layout";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import PageLayout from "../Page";
import PageContent from "../Page/Content";
import TopPage from "../Page/Top";
import { useTranslation } from "react-i18next";
import Wave from "../../Decorations/Wave";
import antdBreakpoints from "../../../themes/antdBreakpoints";
const appName = process.env.NEXT_PUBLIC_APPNAME;

type Props = {
  content: MDXRemoteSerializeResult;
  backgroundColor: string;
  pageName: string;
};

const ImageContainer = styled.div`
  max-width: 700px;
  margin-bottom: 40px;
  @media ${antdBreakpoints.smMax} {
    margin-bottom: 20px;
  }
  z-index: 1;

  > div {
    position: unset !important;
    overflow: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    border-radius: 10px;
  }

  @keyframes shadow-drop-bottom {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
      -webkit-box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35);
      box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35);
    }
  }

  .shadow-drop-bottom {
    animation: shadow-drop-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both !important;
  }
`;

const WaveContainer = styled.div`
  width: 100%;
  height: 115px;
  transform: translateY(-130px);
  z-index: 0;
  @media ${antdBreakpoints.smMax} {
    /* height: 45px; */
    display: none;
  }
`;

const PageContentWrapper = styled.div`
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -130px;
  padding-top: 130px;
  padding-bottom: 130px;
`;

const CaseImage = styled.img`
  margin: 40px 0px;
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 5px 20px -3px rgb(0 0 0 / 27%);
`;

const CaseWrapper: FunctionComponent<Props> = ({
  pageName,
  backgroundColor = "lightblue",
  content,
}) => {
  const { t } = useTranslation(["common", "subMenu"]);

  const page = `${pageName}SeoTitle`;

  const subHeadline = `${pageName}Quote`;
  const description = `${pageName}Desc`;
  const coverPath = `/pages/cases/${pageName}/cover.jpg`;

  return (
    <Layout
      backgroundColor={backgroundColor}
      seoTitle={t(page, { appName })}
      seoDescription={t(description, { appName })}
    >
      <PageLayout>
        <TopPage
          headline={t(page, { appName })}
          subHeadline={t(subHeadline, { appName })}
          pathElements={[t("cases", { appName }), t(pageName)]}
        />
        <ImageContainer>
          <CaseImage src={coverPath} alt="add_buttons" />
        </ImageContainer>
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

export default CaseWrapper;
