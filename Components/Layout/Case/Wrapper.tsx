import { FunctionComponent } from "react";
import Layout from "../../Layout";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import PageLayout from "../Page";
import PageContent from "../Page/Content";
import TopPage from "../Page/Top";
import { useTranslation } from "react-i18next";

type Props = {
  content: MDXRemoteSerializeResult;
  backgroundColor: string;
  pageName: string;
};

const CaseWrapper: FunctionComponent<Props> = ({
  pageName,
  backgroundColor = "lightblue",
  content,
}) => {
  const { t } = useTranslation(["common", "subMenu"]);
  const page = `${pageName}SeoTitle`;
  const subHeadline = `${pageName}Quote`;
  const description = `${pageName}Desc`;

  return (
    <Layout
      backgroundColor={backgroundColor}
      seoTitle={page}
      seoDescription={description}
    >
      <PageLayout>
        <TopPage
          headline={t(page)}
          subHeadline={t(subHeadline)}
          pathElements={[t("cases"), t(pageName)]}
        />
        <PageContent content={content} />
      </PageLayout>
    </Layout>
  );
};

export default CaseWrapper;
