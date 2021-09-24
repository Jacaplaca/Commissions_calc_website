import type { NextPage } from "next";
import Pricing from "../Components/Pricing";
import { PricingContextProvider } from "../Components/Pricing/context";
import { serialize } from "next-mdx-remote/serialize";
import faqMdx from "../Components/Pricing/Data/faqMdx.js";
import NavigationHorizontalWithIconAndColorLine from "../Components/Navigations/WithIconAndColorLine";
import MainMenu from "../Components/Navigations/MainMenu";
import Layout from "../Components/Layout";
import { useTheme } from "styled-components";

const Home: NextPage = ({ faq }) => {
  const theme = useTheme();
  return (
    <Layout backgroundColor={theme.colors.palette.pricing.background}>
      <PricingContextProvider>
        <Pricing faq={faq} />;{/* <MainMenu /> */}
        {/* <NavigationHorizontalWithIconAndColorLine /> */}
      </PricingContextProvider>
    </Layout>
  );
};

export async function getStaticProps() {
  const promises = faqMdx.map(({ answer, question }, i) => {
    return serialize(answer).then((result) => {
      return { question, answer: result };
    });
  });
  console.log(
    "🚀 ~ file: index.tsx ~ line 22 ~ Promise.all ~ promises",
    promises
  );
  return Promise.all(promises).then((results) => {
    return { props: { faq: results } };
  });
  // MDX text - can be from a local file, database, anywhere
  // const source = "Some **mdx** text, with a component";
  // const mdxSource = await serialize(source);
}

export default Home;
