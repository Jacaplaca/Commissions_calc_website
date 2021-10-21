import styled from "styled-components";
import Image from "next/image";
import { FunctionComponent } from "react";
import Layout from "../../Layout";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import PageLayout from "../Page";
import PageContent from "../Page/Content";
import TopPage from "../Page/Top";
import { useTranslation } from "react-i18next";
import useCaseMenuElements from "../../Cases/useCaseMenuElements";
import Wave from "../../Decorations/Wave";
const appName = process.env.NEXT_PUBLIC_APPNAME;

type Props = {
  content: MDXRemoteSerializeResult;
  backgroundColor: string;
  pageName: string;
};

const shimmer = (w: string, h: string) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const ImageContainer = styled.div`
  width: 700px;
  margin-bottom: 40px;
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

const CaseWrapper: FunctionComponent<Props> = ({
  pageName,
  backgroundColor = "lightblue",
  content,
}) => {
  const { t } = useTranslation(["common", "subMenu"]);
  // const cases  = useCaseMenuElements()

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
          <Image
            // placeholder="blur"
            // blurDataURL={`data:image/svg+xml;base64,${toBase64(
            //   shimmer(700, 475)
            // )}`}
            // loader={myLoader}
            src={coverPath}
            alt="Picture of the author"
            layout="fill"
            // objectFit="contain"
            className={"image shadow-drop-bottom"}
            // objectPosition=""
            // objectFit="scale-down"
            // style={{ width: 400 }}
          />
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
