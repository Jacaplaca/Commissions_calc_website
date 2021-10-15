import styled, { useTheme } from "styled-components";
import { FunctionComponent } from "react";
import simplePageInitialize from "../utils/simplePageInitialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Layout from "../Components/Layout";
import PageWrapper from "../Components/Layout/Page/Wrapper";

type Props = {
  contentSource: MDXRemoteSerializeResult;
};

const Page: FunctionComponent<Props> = (props) => {
  const { contentSource, url } = props;
  console.log("🚀 ~ file: notifications.tsx ~ line 14 ~ props", url);
  // const { t } = useTranslation("common");
  const theme = useTheme();
  return (
    <Layout backgroundColor={theme.colors.palette.notifications}>
      <PageWrapper
        content={contentSource}
        category="features"
        page="subMenu:notifications"
        headline="subMenu:notificationsDesc"
        more="subMenu:notificationsMore"
      />
    </Layout>
  );
};

// export const getStaticProps = simplePageInitialize;
// export const getServerSideProps = getServerSideProps(initializeServer);
export const getServerSideProps = simplePageInitialize;
export default Page;
