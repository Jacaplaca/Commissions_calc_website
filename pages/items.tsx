import { useTheme } from "styled-components";
import { FunctionComponent } from "react";
import simplePageInitialize from "../utils/simplePageInitialize";
import FeatureWrapper from "../Components/Layout/Feature/Wrapper";
import { FeaturePageProps } from "../Types/featurePage";

const Page: FunctionComponent<FeaturePageProps> = ({
  contentSource,
  pageName,
}) => {
  const theme = useTheme();
  return (
    <FeatureWrapper
      pageName={pageName}
      backgroundColor={theme.colors.palette.items}
      content={contentSource}
    />
  );
};

export const getServerSideProps = simplePageInitialize;
export default Page;
