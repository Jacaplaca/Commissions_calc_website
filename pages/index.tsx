import type { NextPage } from "next";
import styled, { useTheme } from "styled-components";
import Layout from "../Components/Layout";
import staticPropsInitialize from "../utils/staticPropsInitialize";
import Cases from "../Components/Cases";

const Wrapper = styled.section`
  flex: 0;
  display: flex;
  justify-content: center;
`;

const Home: NextPage = () => {
  const theme = useTheme();
  return (
    <Layout backgroundColor={theme.colors.palette.indexBackground}>
      <Wrapper>
        <Cases />
      </Wrapper>
    </Layout>
  );
};

export const getServerSideProps = staticPropsInitialize;

export default Home;
