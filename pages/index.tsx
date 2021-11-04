import type { NextPage } from "next";
import styled, { useTheme } from "styled-components";
import Layout from "../Components/Layout";
import staticPropsInitialize from "../utils/staticPropsInitialize";
import CasesTeaser from "../Components/Cases";
import HelpWith from "../Components/HelpWith";
import MainSlider from "../Components/MainSlider";
import antdBreakpoints from "../themes/antdBreakpoints";

const Wrapper = styled.section`
  flex: 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  .wrapper__content {
    max-width: ${({ theme }) => theme.sizes.headerWidth};
    .slider,
    .helpWith,
    .cases {
      padding: 50px 0px;
      @media ${antdBreakpoints.mdMax} {
        padding: 23px 0px;
      }
    }
  }
`;

const Home: NextPage = () => {
  const theme = useTheme();
  return (
    <Layout backgroundColor={theme.colors.palette.indexBackground}>
      <Wrapper>
        <div className="wrapper__content">
          <div className="slider">
            <MainSlider />
          </div>
          <div className="helpWith">
            <HelpWith />
          </div>
          <div className="cases">
            <CasesTeaser />
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export const getServerSideProps = staticPropsInitialize;

export default Home;
