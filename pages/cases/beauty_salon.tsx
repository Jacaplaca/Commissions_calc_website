import { useTheme } from "styled-components";
import { FunctionComponent } from "react";
import casePageInitialize from "../../utils/casePageInitialize";
import CaseWrapper from "../../Components/Layout/Case/Wrapper";
import { CasePageProps } from "../../Types/casePage";

const Case: FunctionComponent<CasePageProps> = ({
  contentSource,
  pageName,
}) => {
  const theme = useTheme();
  return (
    <CaseWrapper
      pageName={pageName}
      backgroundColor={theme.colors.palette.cases.beauty_salon}
      content={contentSource}
    />
  );
};

export const getServerSideProps = casePageInitialize;
export default Case;
