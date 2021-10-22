import type { NextPage } from "next";
const fs = require("fs");
import Pricing from "../Components/Pricing";
import { PricingContextProvider } from "../Components/Pricing/context";
import { serialize } from "next-mdx-remote/serialize";

import Layout from "../Components/Layout";
import { useTheme } from "styled-components";
import { FaqMDXs } from "../Components/Pricing/Faq/PricingFaq";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import asyncForEach from "../utils/asyncForEach";

type Props = {
  faq: FaqMDXs;
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

  const fileNamesInFolder: any[] = [];

  async function listDir() {
    try {
      const files = await fs.promises.readdir(testFolder);
      files.forEach((file) => fileNamesInFolder.push(file));
    } catch (err) {
      console.error("Error occured while reading directory!", err);
    }
  }
  await listDir();

  const serialized = [];

  const features = (
    await import(`../data/pages/pricing/features/${locale}/features.json`)
  ).default;

  const featuresSerialized = [];

  await asyncForEach(features, async (feature) => {
    const { plans, feat } = feature;
    const serializedFeature = await serialize(feat);
    featuresSerialized.push({ feat: serializedFeature, plans });
  });

  await asyncForEach(fileNamesInFolder, async (fileName) => {
    const { question, answer } = await import(
      `../data/pages/pricing/faq/${locale}/${fileName}`
    );
    const serializedAnswer = await serialize(answer);
    serialized.push({ question, answer: serializedAnswer });
  });

  return {
    props: {
      faq: serialized,
      features: featuresSerialized,
      ...(await serverSideTranslations(locale, [
        "common",
        "footer",
        "subMenu",
      ])),
    },
  };
  // });
}

export default PricingPage;
