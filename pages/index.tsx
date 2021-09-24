import type { NextPage } from "next";
import styled, { useTheme } from "styled-components";

import { serialize } from "next-mdx-remote/serialize";
import faqMdx from "../Components/Pricing/Data/faqMdx.js";

import Layout from "../Components/Layout";

const Wrapper = styled.section`
  /* background: paleturquoise; */
  flex: 0;
`;

const Home: NextPage = ({ indexContent }) => {
  const theme = useTheme();
  return (
    <Layout backgroundColor={theme.colors.palette.indexBackground}>
      <Wrapper>asdf</Wrapper>
    </Layout>
  );
};

export async function getStaticProps() {
  const promises = faqMdx.map(({ answer, question }, i) => {
    return serialize(answer).then((result) => {
      return { question, answer: result };
    });
  });

  return Promise.all(promises).then((results) => {
    return { props: { indexContent: results } };
  });
}

export default Home;
