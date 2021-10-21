import styled, { useTheme } from "styled-components";
import { FunctionComponent } from "react";
import casePageInitialize from "../../utils/casePageInitialize";
import CaseWrapper from "../../Components/Layout/Case/Wrapper";
import { CasePageProps } from "../../Types/casePage";

type Props = {};

const Case: FunctionComponent<CasePageProps> = ({
  contentSource,
  pageName,
}) => {
  const theme = useTheme();
  return (
    <CaseWrapper
      pageName={pageName}
      backgroundColor={theme.colors.palette.rankings}
      content={contentSource}
    />
  );
};

export const getServerSideProps = casePageInitialize;
export default Case;
