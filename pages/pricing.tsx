import { MDXRemoteSerializeResult } from "next-mdx-remote";
import type { NextPage } from "next";

import Pricing from "../Components/Pricing";
import { PricingContextProvider } from "../Components/Pricing/context";
import { serialize } from "next-mdx-remote/serialize";

import Layout from "../Components/Layout";
import { useTheme } from "styled-components";
import { FaqMDXs } from "../Components/Pricing/Faq/PricingFaq";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import asyncForEach from "../utils/asyncForEach";
import { pricingFeatureType } from "../Types/pricingFeaturesType";
import listDir from "../utils/listDir";

type Props = {
  faq: FaqMDXs;
  features: pricingFeatureType;
};

const PricingPage: NextPage<Props> = ({ faq, features }) => {
  const theme = useTheme();
  return (
    <PricingContextProvider>
      <Layout backgroundColor={theme.colors.palette.pricing.background}>
        <Pricing faq={faq} features={features} />
      </Layout>
    </PricingContextProvider>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const testFolder = `./data/pages/pricing/faq/${locale}/`;

  const fileNamesInFolder: any[] = await listDir(testFolder);

  const serialized: { question: string; answer: MDXRemoteSerializeResult }[] =
    [];

  const features = (await import(`../data/pages/pricing/features.json`))
    .default;

  await asyncForEach(fileNamesInFolder, async (fileName: string) => {
    const { question, answer } = await import(
      `../data/pages/pricing/faq/${locale}/${fileName}`
    );
    const serializedAnswer = await serialize(answer);
    serialized.push({ question, answer: serializedAnswer });
  });

  return {
    props: {
      faq: serialized,
      features,
      ...(await serverSideTranslations(locale, [
        "common",
        "footer",
        "subMenu",
        "pricing",
        "pricingFeatures",
      ])),
    },
  };
  // });
}

export default PricingPage;
