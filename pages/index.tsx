import type { NextPage } from "next";
import styled, { useTheme } from "styled-components";
import Layout from "../Components/Layout";
import staticPropsInitialize from "../utils/staticPropsInitialize";
import CasesTeaser from "../Components/Cases";
import HelpWith from "../Components/HelpWith";

const Wrapper = styled.section`
  flex: 0;
  /* display: flex; */
  width: 100%;
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  .wrapper__content {
    max-width: ${({ theme }) => theme.sizes.pageWidth};
  }
`;

const Home: NextPage = () => {
  const theme = useTheme();
  return (
    <Layout backgroundColor={theme.colors.palette.indexBackground}>
      <Wrapper>
        <div className="wrapper__content">
          <HelpWith />
          <CasesTeaser />
        </div>
      </Wrapper>
    </Layout>
  );
};

export const getServerSideProps = staticPropsInitialize;

export default Home;
