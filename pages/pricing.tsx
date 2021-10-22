import type { NextPage } from "next";
const fs = require("fs");
import Pricing from "../Components/Pricing";
import { PricingContextProvider } from "../Components/Pricing/context";
import { serialize } from "next-mdx-remote/serialize";
// import faqMdx from "../Components/Pricing/Data/faqMdx.js";

import Layout from "../Components/Layout";
import { useTheme } from "styled-components";
import { FaqMDXs } from "../Components/Pricing/Faq/PricingFaq";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import asyncForEach from "../utils/asyncForEach";
import { amber } from "@material-ui/core/colors";

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
  const testFolder = `./data/pages/pricing/faq/${locale}/`;
  // console.log(
  //   "🚀 ~ file: pricing.tsx ~ line 30 ~ getStaticProps ~ testFolder",
  //   testFolder,
  //   process.cwd()
  // );

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

  await asyncForEach(fileNamesInFolder, async (fileName) => {
    const { question, answer } = await import(
      `../data/pages/pricing/faq/${locale}/${fileName}`
    );
    const serializedAnswer = await serialize(answer);
    serialized.push({ question, answer: serializedAnswer });
  });

  // const faqMdx = (await import(`../data/pages/pricing/faq/${locale}/index1.ts`))
  //   .answer;
  // // console.log(
  // //   "🚀 ~ file: pricing.tsx ~ line 29 ~ getStaticProps ~ faqMdx",
  // //   faqMdx
  // // );
  // console.log(
  //   "🚀 ~ file: pricing.tsx ~ line 50 ~ promises ~ fileNamesInFolder",
  //   fileNamesInFolder
  // );
  // const promises = await fileNamesInFolder.map((fileName) => {
  //   let q = "";
  //   import(`../data/pages/pricing/faq/${locale}/${fileName}`)
  //     .then(({ question, answer }) => {
  //       q = question;
  //       return serialize(answer);
  //     })
  //     .then((answer) => {
  //       console.log(
  //         "🚀 ~ file: pricing.tsx ~ line 66 ~ .then ~ answer",
  //         answer
  //       );
  //       return { question: q, answer };
  //     });
  // });
  // await Promise.all(promises).then(async (result) =>
  //   console.log(
  //     "🚀 ~ file: pricing.tsx ~ line 55 ~ getStaticProps ~ result",
  //     result
  //   )
  // );
  // return Promise.all(promises).then(async (results) => {
  // const conv = await serialize(faqMdx);
  return {
    props: {
      faq: serialized,
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
