import styled from "styled-components";
import { FunctionComponent } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useTranslation } from "react-i18next";
import { transparentize } from "polished";
import Layout from "../../Layout";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-right: 23px;
  padding-bottom: 65px;
  align-items: center;
  margin-top: ${({ theme }) => theme.sizes.distanceFromMenu};
  * {
    margin: 0;
    padding: 0;
  }
  .path {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1em;
    opacity: 0.6;
  }
  .headline {
    margin-top: 20px;
    margin-bottom: 15px;
    font-size: 2.4em;
    text-transform: none;
    color: ${({ theme }) => theme.colors.text.dark};
    /* border-bottom: 1px solid #00000029; */
    /* color: #727272; */
    text-align: center;
    font-weight: 700;
    max-width: 900px;
    line-height: 1.3em;
    /* letter-spacing: 0.2em; */
  }
  .more {
    color: ${({ theme }) => theme.colors.text.dark};
    font-style: italic;
    font-size: 1.3em;
    max-width: 500px;
    text-align: center;
    font-weight: 500;
    opacity: 0.7;
    line-height: 1.4em;
  }
  .content {
    width: ${({ theme }) => theme.sizes.pageWidth};
    border-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* h1 {
      margin-bottom: 30px;
      margin-bottom: 30px;
      font-size: 2.4em;
      text-transform: none;
      border-bottom: 1px solid #00000029;
      color: #727272;
      text-align: center;
      font-weight: 900;
      letter-spacing: 0.2em;
    } */
    p {
      margin-bottom: 12px;
      width: 600px;
      text-align: justify;
      font-weight: 400;
      font-size: 1.1em;
      line-height: 1.7em;
      font-family: "Open Sans", sans-serif;
    }
    .spacer {
      min-height: 20px;
    }
    .margin_right_10 {
      margin-right: 10px !important;
    }
    .info {
      padding: 13px;
      background: #f5f5f5;
      border-radius: 15px;
      border: 1px solid #ebebeb;
      margin: 5px;
    }
    .two_columns {
      display: flex;
      align-items: center;
    }
    .image_container {
      /* background: red; */
      display: flex;
      justify-content: center;
    }
    .one_image {
      margin: 30px 0px;
      max-width: 100%;
      height: auto;
      border-radius: 10px;
      box-shadow: 0px 5px 20px -3px rgb(0 0 0 / 27%);
      /* background: yellow; */
      /* width: fit-content; */
    }
  }
`;

const StartButton = styled.button`
  /* width: 140px; */
  /* height: 45px; */
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  color: #000;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  background: ${({ theme }) => theme.colors.palette.orange.light};
  color: ${({ theme }) => theme.colors.text.dark};
  padding: 15px 25px;
  margin-top: 40px;
  font-weight: 600;
  margin-bottom: 30px;

  &:hover {
    background: ${({ theme }) => theme.colors.palette.orange.main};
    box-shadow: 0px 15px 20px
      ${({ theme }) => transparentize(0.6, theme.colors.palette.orange.main)};
    color: #fff;
    transform: translateY(-5px);
  }
  &:active {
    transform: translateY(0px) scale(0.95);
  }
`;

type Props = {
  content: MDXRemoteSerializeResult;
  backgroundColor: string;
  pageName: string;
};

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
      <Wrapper>
        <div className="path">{`${t("features")} > ${t(page)}`}</div>
        <div className="headline">{t(headline)}</div>
        <div className="more">{t(more)}</div>
        <StartButton>{t("startFree")}</StartButton>
        <div className="content">{content && <MDXRemote {...content} />}</div>
      </Wrapper>
    </Layout>
  );
};

export default FeatureWrapper;
