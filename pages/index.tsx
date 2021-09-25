import type { NextPage } from "next";
import Link from "next/link";
import styled, { useTheme } from "styled-components";
import App from "./_app";

import { serialize } from "next-mdx-remote/serialize";
import faqMdx from "../Components/Pricing/Data/faqMdx.js";

import Layout from "../Components/Layout";
import { Router, useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { AppContextType } from "next/dist/shared/lib/utils";

const Wrapper = styled.section`
  /* background: paleturquoise; */
  flex: 0;
  padding: 50px;
`;

const Home: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const theme = useTheme();
  return (
    <Layout backgroundColor={theme.colors.palette.indexBackground}>
      <h1>{t("h1")}</h1>
      <h2>{t("title")}</h2>
      <Link href="/" locale={router.locale === "en" ? "de" : "en"}>
        <a>
          <button>{t("change-locale")}</button>
        </a>
      </Link>
      <Wrapper>
        1Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
        laborum nihil perspiciatis. Iure reprehenderit, aut cum, vel repudiandae
        obcaecati voluptates eius ducimus in ipsa ipsum voluptatem voluptas.
        Maxime, nesciunt ducimus!
      </Wrapper>
      <Wrapper>
        2Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
        laborum nihil perspiciatis. Iure reprehenderit, aut cum, vel repudiandae
        obcaecati voluptates eius ducimus in ipsa ipsum voluptatem voluptas.
        Maxime, nesciunt ducimus!
      </Wrapper>
      <Wrapper>
        3Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
        laborum nihil perspiciatis. Iure reprehenderit, aut cum, vel repudiandae
        obcaecati voluptates eius ducimus in ipsa ipsum voluptatem voluptas.
        Maxime, nesciunt ducimus!
      </Wrapper>
      <Wrapper>
        4Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
        laborum nihil perspiciatis. Iure reprehenderit, aut cum, vel repudiandae
        obcaecati voluptates eius ducimus in ipsa ipsum voluptatem voluptas.
        Maxime, nesciunt ducimus!
      </Wrapper>
      <Wrapper>
        5Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
        laborum nihil perspiciatis. Iure reprehenderit, aut cum, vel repudiandae
        obcaecati voluptates eius ducimus in ipsa ipsum voluptatem voluptas.
        Maxime, nesciunt ducimus!
      </Wrapper>
      <Wrapper>
        6Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
        laborum nihil perspiciatis. Iure reprehenderit, aut cum, vel repudiandae
        obcaecati voluptates eius ducimus in ipsa ipsum voluptatem voluptas.
        Maxime, nesciunt ducimus!
      </Wrapper>
      <Wrapper>
        7Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
        laborum nihil perspiciatis. Iure reprehenderit, aut cum, vel repudiandae
        obcaecati voluptates eius ducimus in ipsa ipsum voluptatem voluptas.
        Maxime, nesciunt ducimus!
      </Wrapper>
      <Wrapper>
        8Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
        laborum nihil perspiciatis. Iure reprehenderit, aut cum, vel repudiandae
        obcaecati voluptates eius ducimus in ipsa ipsum voluptatem voluptas.
        Maxime, nesciunt ducimus!
      </Wrapper>
    </Layout>
  );
};

// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...await serverSideTranslations(locale, ['common', 'footer']),
//   },
// })

export async function getStaticProps({ locale }: { locale: string }) {
  console.log(
    "🚀 ~ file: index.tsx ~ line 92 ~ getStaticProps ~ locale",
    locale
  );
  // const promises = faqMdx.map(({ answer, question }, i) => {
  //   return serialize(answer).then((result) => {
  //     return { question, answer: result };
  //   });
  // });

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
      // indexContent: results,
    },
  };
}

// export const getInitialProps = async (appContext: AppContextType<Router>) => {
//   const appProps = await App.getInitialProps(appContext)
//   const defaultProps = appContext.Component.defaultProps
//   return {
//       ...appProps,
//           namespacesRequired: [...(appProps.pageProps.namespacesRequired || []), ...(defaultProps?.i18nNamespaces || [])]
//   }
// }

export default Home;
