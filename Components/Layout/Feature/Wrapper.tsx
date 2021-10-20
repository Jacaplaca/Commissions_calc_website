import { FunctionComponent } from "react";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { useTranslation } from "react-i18next";
import Layout from "../../Layout";
import PageLayout from "../Page";
import PageContent from "../Page/Content";
import TopPage from "../Page/Top";

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
      <PageLayout>
        <TopPage
          pathElements={[t("features"), t(page)]}
          headline={t(headline)}
          subHeadline={t(more)}
        />
        <PageContent content={content} />
      </PageLayout>
    </Layout>
  );
};

export default FeatureWrapper;
