import type { NextPage } from "next";
import Pricing from "../Components/Pricing";
import { PricingContextProvider } from "../Components/Pricing/context";
import { serialize } from "next-mdx-remote/serialize";
import faqMdx from "../Components/Pricing/Data/faqMdx.js";

import Layout from "../Components/Layout";
import { useTheme } from "styled-components";
import { FaqMDXs } from "../Components/Pricing/Faq/PricingFaq";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type Props = {
  faq: FaqMDXs;
};

const PricingPage: NextPage<Props> = ({ faq }) => {
  const theme = useTheme();
  return (
    <PricingContextProvider>
      <Layout backgroundColor={theme.colors.palette.pricing.background}>
        <Pricing faq={faq} />
      </Layout>
    </PricingContextProvider>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const promises = faqMdx.map(({ answer, question }, i) => {
    return serialize(answer).then((result) => {
      return { question, answer: result };
    });
  });
  return Promise.all(promises).then(async (results) => {
    return {
      props: {
        faq: results,
        ...(await serverSideTranslations(locale, [
          "common",
          "footer",
          "subMenu",
        ])),
      },
    };
  });
}

export default PricingPage;
